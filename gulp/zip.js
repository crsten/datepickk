var gulp = require('gulp');
var zip = require('gulp-zip');

gulp.task('zip',function(){
	gulp.src(['./**/*.*','!./**/*.zip','!./**/*.log','!./**/*.cache','!./node_modules/**/*.*'])
	.pipe(zip('datepickk.zip'))
	.pipe(gulp.dest('dist'));
});