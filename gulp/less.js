var gulp = require('gulp');
var less = require('gulp-less');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('less',function(){
	gulp.src('./src/css/datepickk.less')
	.pipe(less())
	.pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: true
    }))
	.pipe(gulp.dest('dist'));

	gulp.src('./src/css/datepickk.less')
	.pipe(less())
	.pipe(sourcemaps.init())
	.pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
	.pipe(cssnano())
	.pipe(rename({
		suffix: '.min'
	}))
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest('dist'));
});

gulp.task('watch:less',['less'],function(){
	gulp.watch('./src/css/datepickk.less',['less']);
});
