var gulp = require('gulp')
var cssmin = require('gulp-cssmin')
var rename = require('gulp-rename')
var uglify = require('gulp-uglify')

gulp.task('css', function () {
  gulp.src('slider.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('.'))
})
 
gulp.task('js', function () {
  gulp.src('slider.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('.'))
})

gulp.task('watch', function () {
  gulp.watch('slider.css', ['css'])
  gulp.watch('slider.js', ['js'])
})

gulp.task('default', function () {
  gulp.start('watch')
})