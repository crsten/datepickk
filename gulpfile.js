var gulp = require('gulp');
var fs = require('fs');

fs.readdirSync(__dirname + '/gulp').forEach(function(task){
	if(task.indexOf('.js')>-1){
		require('./gulp/' + task);
	}
});

gulp.task('dev',['watch:less','watch:js']);
gulp.task('build',['less','js']);