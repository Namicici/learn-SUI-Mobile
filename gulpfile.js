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

gulp.task('clean', [], function(cb){
	return del('./dist', cb);
})

gulp.task('compileJS', [], function(){
	return mergeStream(
		gulp.src([ './src/service/*.js', './src/config.js'])
			.pipe(concat('app.js'))
        	.pipe(renameMd5())
			.pipe(gulp.dest('./dist/')),
		gulp.src(['./src/assets/js/sm.js', './src/assets/js/zepto.js', './src/assets/js/sm-extend.js'])
			.pipe(concat('thirdParty.js'))
        	.pipe(renameMd5())
			.pipe(gulp.dest('./dist/assets/js/')),
		gulp.src('./src/views/**/*.js')
			.pipe(renameMd5())
			.pipe(gulp.dest('./dist/views/'))
	)
})

gulp.task('compileScss', [], function(){
	return gulp.src('./src/scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./src/assets/css/'))
})

gulp.task('copyCss', ['compileScss'], function(){
	return mergeStream(
		gulp.src(['./src/assets/css/app.css', './src/assets/css/sm.css'])
			.pipe(renameMd5())
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

gulp.task('watch', ['build'], function(){
	gulp.watch(['./src/assets/js/*.js','./src/views/**/*.js','./src/config.js','./src/app.js'], ['compileJS']);
	gulp.watch('./src/assets/css/*.css', ['copyCss']);
	gulp.watch('./src/scss/*.scss', ['copyCss']);
	gulp.watch('./src/views/**/*.html', ['copyHtml']);
	gulp.watch('./src/index.html', ['copyHtml']);
	gulp.watch('./src/assets/img/**', ['copyImg']);
})

gulp.task('build', ['compileJS', 'copyHtml', 'copyCss', 'copyImg']);

gulp.task('minify', ['build'], function(){
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
