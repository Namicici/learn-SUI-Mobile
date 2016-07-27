"use strict";

var gulp = require("gulp");
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var del = require("del");

gulp.task('clean', [], function(cb){
	return del('./dist', cb);
})

gulp.task("copyHtml", [], function(){
	return gulp.src(['./src/index.html', './src/views/**/*.html'])
		.pipe(gulp.dest('./dist/'))
})

gulp.task('concatJS', [], function(){
	return gulp.src([ './src/views/service/*.js', './src/app.js','./src/views/**/*.js'])
		.pipe(concat('app.js'))
		.pipe(gulp.dest('./dist/'))
})

gulp.task('copyConfig', [], function(){
	return gulp.src('./src/config.js')
		.pipe(gulp.dest('./dist/'))
})

gulp.task('compileScss', [], function(){
	return gulp.src('./src/scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./src/assets/css/'))
})

gulp.task('copyCss', ['compileScss'], function(){
	return gulp.src('./src/assets/css/*.css')
		.pipe(gulp.dest('./dist/assets/css/'))
})

gulp.task('copyJS', [], function(){
	return gulp.src('./src/assets/js/*.js')
		.pipe(gulp.dest('./dist/assets/js/'))
})

gulp.task('copyImg', [], function(){
	return gulp.src('./src/assets/img/**')
		.pipe(gulp.dest('./dist/assets/img/'))
})

gulp.task('watch', ['build'], function(){
	gulp.watch(['./src/assets/js/*.js','./src/views/**/*.js','./src/config.js','./src/app.js'], ['distJS']);
	//gulp.watch('./src/views/**/*.js', ['distJS']);
	//gulp.watch('./src/config.js', ['distJS']);
	gulp.watch('./src/assets/css/*.css', ['copyCss']);
	gulp.watch('./src/scss/*.scss', ['copyCss']);
	gulp.watch('./src/views/**/*.html', ['copyHtml']);
	gulp.watch('./src/index.html', ['copyHtml']);
	gulp.watch('./src/assets/img/**', ['copyImg']);
})

gulp.task('distJS', ['concatJS', 'copyConfig', 'copyJS']);

gulp.task('build', ['distJS', 'copyHtml', 'copyCss', 'copyImg']);
