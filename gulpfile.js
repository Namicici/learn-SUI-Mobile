"use strict";

var gulp = require("gulp");
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var del = require("del");
var mergeStream = require('merge-stream');
var renameMd5 = require('gulp-rename-md5');
var replaceMd5 = require('gulp-replace-md5');
var uglifyjs = require("gulp-uglify");
var cleanCss = require("gulp-clean-css");
var zip = require('gulp-zip');
var sftp = require("gulp-sftp");
var Client = require('ssh2').Client;
var replace = require('gulp-replace');

gulp.task('clean', [], function(cb){
	return del('./dist', cb);
})

gulp.task('clean:js', [], function(cb){
	return del(['./dist/*.js','./dist/views/**/*.js'] , cb)
})

gulp.task('clean:css', [], function(cb){
	return del('./dist/assets/css/*.css', cb)
})

gulp.task('compileJS', ['clean:js'], function(){
	return mergeStream(
		gulp.src([ './src/service/*.js', './src/config.js'])
			.pipe(concat('app.js'))
			.pipe(gulp.dest('./dist/views/')),
		gulp.src(['./src/assets/js/sm.js', './src/assets/js/sm-extend.js'])
			.pipe(concat('sm.js'))
			.pipe(gulp.dest('./dist/assets/js/')),
		gulp.src('./src/assets/js/zepto.js')
			.pipe(gulp.dest('./dist/assets/js/')),
		gulp.src('./src/views/**/*.js')
			.pipe(gulp.dest('./dist/views/'))
	)
})

gulp.task('compileScss', ['clean:css'], function(){
	return gulp.src('./src/scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./src/assets/css/'))
})

gulp.task('copyCss', ['compileScss'], function(){
	return mergeStream(
		gulp.src(['./src/assets/css/app.css', './src/assets/css/sm.css'])
			.pipe(gulp.dest('./dist/assets/css/')),
		gulp.src('./src/assets/fonts/*')
			.pipe(gulp.dest('./dist/assets/fonts/'))
	)
})

gulp.task("copyHtml", [], function(){
	return mergeStream(
		gulp.src('./src/index.html')
			.pipe(gulp.dest('./dist/')),
		gulp.src('./src/views/**/*.html')
		    .pipe(gulp.dest('./dist/views/'))
	)
})

gulp.task('copyImg', [], function(){
	return gulp.src('./src/assets/img/**')
		.pipe(gulp.dest('./dist/assets/img/'))
})

gulp.task('replaceMd5', ['compileJS', 'copyHtml', 'copyCss', 'copyImg'], function(){
	return mergeStream(
		gulp.src("./dist/views/**/*.html")
            .pipe(replaceMd5({ base: __dirname + '/dist/' ,openTag : '{{{', closeTag : '}}}' }))
            .pipe(gulp.dest("./dist/views/")),
		gulp.src("./dist/views/*.js")
			.pipe(renameMd5())
			.pipe(gulp.dest('./dist/views/')),
		gulp.src('./dist/views/**/*.js')
			.pipe(renameMd5())
			.pipe(gulp.dest('./dist/views/')),
		gulp.src('./dist/assets/css/app.css')
			.pipe(renameMd5())
			.pipe(gulp.dest('./dist/assets/css'))
	)
})

var path = '/iamp-app';
gulp.task('replace:url', ['replaceMd5'], function(){
	return mergeStream(
		gulp.src("dist/views/**/*.html")
	        .pipe(replace(/src=\"\/assets/g,'src="'+path+'/assets'))
	        .pipe(replace(/href=\"\/assets/g,'href="'+path+'/assets'))
		    .pipe(replace(/src=\"\/views/g,'src="'+path+'/views'))
	        .pipe(replace(/href=\"\/views/g,'href="'+'/admin-app'+'/views'))
	        .pipe(gulp.dest('dist/views/')),
		gulp.src('dist/assets/css/*.css')
	        .pipe(replace(/url\(\'\/assets/g,"url('"+path+'/assets'))
			.pipe(gulp.dest('dist/assets/css/'))
	)
})

gulp.task('watch', ['build'], function(){
	gulp.watch(['./src/assets/js/*.js','./src/views/**/*.js','./src/config.js','./src/app.js'], ['replaceMd5']);
	gulp.watch('./src/assets/css/*.css', ['copyCss']);
	gulp.watch('./src/scss/*.scss', ['replaceMd5']);
	gulp.watch('./src/views/**/*.html', ['replaceMd5']);
	gulp.watch('./src/index.html', ['replaceMd5']);
	gulp.watch('./src/assets/img/**', ['copyImg']);
})

gulp.task('build', ['replaceMd5']);


gulp.task('minify', ['replace:url'], function(){
	return mergeStream(
		gulp.src('./dist/*.js')
			.pipe(uglifyjs())
			.pipe(gulp.dest('./dist/')),
		gulp.src('./dist/views/**/*.js')
			.pipe(uglifyjs())
			.pipe(gulp.dest('./dist/views/')),
		gulp.src('./dist/assets/js/*.js')
			.pipe(uglifyjs())
			.pipe(gulp.dest('./dist/assets/js/')),
		gulp.src('./dist/assets/css/*.css')
			.pipe(cleanCss({compatibility: true}))
			.pipe(gulp.dest('./dist/assets/css/'))
	)
})

gulp.task("deploy",["replace:url"],function(){

  gulp.src('dist/**')
    .pipe(zip('iamp-app.zip'))
    .pipe(gulp.dest('./'))
    .pipe(sftp({
        host: '192.168.191.1',
        user: 'root',
        pass: 'froad!QAZ',
        remotePath: '/data/websit/jiniudai/dev/iamp-app/',
        callback : function(){
            var conn = new Client();
            conn.on('ready', function(){
                console.log('exec unzip iamp-app.zip...');
                conn.exec('cd /data/websit/jiniudai/dev/iamp-app/ && unzip -o iamp-app.zip', function(err, stream) {
                    if (err) throw err;
                    stream.on('close', function(code, signal){
                        console.log('exec end :: code: ' + code);
                        conn.end();
                    }).on('data', function(data){
                        //console.log('STDOUT: ' + data);
                    }).stderr.on('data', function(data){
                        console.log('STDERR: ' + data);
                    });
                });
            }).connect({
                host: '192.168.191.1',
                port: 22,
                username: 'root',
                password: 'froad!QAZ'
            });
        }
    }));
});
