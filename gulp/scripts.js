var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');

gulp.task('js',function(){
	gulp.src('src/js/datepickk.js')
	.pipe(sourcemaps.init())
	.pipe(gulp.dest('dist'))
	.pipe(uglify())
	.pipe(rename({
		suffix: '.min'
	}))
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest('dist'));
});

gulp.task('watch:js',['js'],function(){
	gulp.watch('src/js/datepickk.js',['js']);
});