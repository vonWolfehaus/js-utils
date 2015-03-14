var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var src = '../';

gulp.task('default', function() {
  return gulp.src([
				src+'utils.js',
				src+'draw.js',
				src+'Vec2.js',
				src+'LinkedList.js',
				src+'Signal.js',
				src+'ObjectPool.js',
				src+'Scene.js'
			])
	//.pipe(concat('utils.min.js'))
	.pipe(uglify())
	.pipe(rename({
		suffix: '.min'
	}))*/
	.pipe(gulp.dest('../'));
});
