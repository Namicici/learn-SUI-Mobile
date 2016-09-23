"use strict";

var gulp = require("gulp");
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var del = require("del");
var mergeStream = require('merge-stream');

gulp.task('clean', [], function(cb){
	return del('./dist', cb);
})

gulp.task('compileJS', [], function(){
	return mergeStream(
		gulp.src([ './src/service/*.js', './src/app.js'])
			.pipe(concat('app.js'))
			.pipe(gulp.dest('./dist/')),
		gulp.src('./src/config.js')
			.pipe(gulp.dest('./dist/')),
		gulp.src('./src/assets/js/*.js')
			.pipe(gulp.dest('./dist/assets/js/')),
		gulp.src('./src/views/**/*.js')
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
		gulp.src('./src/assets/css/*.css')
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
