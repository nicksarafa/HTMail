// Initialize Gulp
var gulp = require('gulp'),
    haml = require('gulp-ruby-haml'),
    sass = require('gulp-sass');

// Compile SCSS to CSS
gulp.task('sass', function() {
  return gulp.src('app/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'));
});

// Compile HAML to HTML
gulp.task('haml', function() {
  return gulp.src('app/haml/*.haml')
    .pipe(haml())
    .pipe(gulp.dest('./dist'));
});

// Inline compiled CSS to dist
gulp.task('inline', ['sass', 'haml'], function() {
  return gulp.src(['app/./*.html', './dist/*.html'])
    .pipe(gulp.dest('./dist'));
});

// Compile SASS and html
gulp.task('dist', ['inline']);

// Watch all the things
gulp.task('watch', function() {
    gulp.watch('app/sass/*.scss', ['sass']);
    gulp.watch('app/haml/*.h*ml', ['inline']);
});
