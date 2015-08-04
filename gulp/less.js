var gulp = require('gulp');
var less = require('gulp-less');
var minifyCss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('less',function(){
	gulp.src('./css/datepickk.less')
	.pipe(less())
	.pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: true
    }))
	.pipe(gulp.dest('dist'));

	gulp.src('./css/datepickk.less')
	.pipe(less())
	.pipe(sourcemaps.init())
	.pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
	.pipe(minifyCss())
	.pipe(rename({
		suffix: '.min'
	}))
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest('dist'));
});

gulp.task('watch:less',['less'],function(){
	gulp.watch('./css/datepickk.less',['less']);
});