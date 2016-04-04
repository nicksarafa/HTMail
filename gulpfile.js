// =============================================================================
// GULPFILE.JS / Custom gulp functions 
// =============================================================================

// Initialize gulp 
// -----------------------------------------------------------------------------

var gulp = require('gulp'),
    haml = require('gulp-ruby-haml'),
    inlineCss = require('gulp-inline-css'),
    litmus = require('gulp-litmus');
    sass = require('gulp-sass');

// Compile src/*.scss to build/*.css
// -----------------------------------------------------------------------------

gulp.task('sass', function() {
  return gulp.src('src/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('build/css/.'));
});
 
// Compile src/*.haml to build/*.html
// -----------------------------------------------------------------------------

gulp.task('haml', function() {
  return gulp.src(['src/haml/*.haml', 'src/haml/modules/*.haml', 'src/haml/templates/marketing/*/*.haml', 'src/haml/templates/transactional/*.haml'])
    .pipe(haml())
    .pipe(gulp.dest('build/.'));
});

// Compile src/*.scss to build/*.css
// -----------------------------------------------------------------------------

gulp.task('inline', ['sass', 'haml'], function() {
  return gulp.src(['build/*.html'])
		.pipe(inlineCss())
    .pipe(gulp.dest('build/.'));
});

// Compile sass, and haml, inline styles and dispatch new test to Litmus 
// -----------------------------------------------------------------------------

gulp.task('build', ['inline', 'sass', 'haml', 'test'], function() {
  return gulp.src(['build/*.html'])
    .pipe(gulp.dest('build/.'));
});

// Automatically compile stylesheet(s) and haml while inlining 
// -----------------------------------------------------------------------------

gulp.task('watch', function() {
    gulp.watch('src/sass/*.scss', ['build']);
    gulp.watch(['src/haml/modules/*.haml', 'src/haml/templates/transactional/*.haml', 'src/haml/templates/marketing/**/*.haml'], ['build']);
});

// Configure Litmus email testing tool 
// -----------------------------------------------------------------------------
//
// Include Your Litmus Username, Password, Our Organization's URL and List Of Emails You Want To Test Against
// List of Available Testing Clients Can Be Found Here ~> https://YOURAPPLICATIONNAME.litmus.com/emails/clients.xml
// Pick The Clients You Want To Test Against, Copy Their <application_code> And Add It To The Array Of applications: [] below
// 
// REFERENCES
// -----------------------------------------------------------------------------
//
// * https://litmus.com
//
// -----------------------------------------------------------------------------
 
var config = {
    username: 'YOURLITMUSUSERNAME',
    password: 'YOURLITMUSPASSWORD',
    url: 'https://YOURAPPLICATIONNAME.litmus.com',
    applications: [
        'appmail8',
        'gmailnew',
        'ffgmailnew',
        'chromegmailnew',
        'iphone5s',
    ]
}

// Test emails across different applications, browsers and devices 
// -----------------------------------------------------------------------------
// 
// See test using name and password inside 'Litmus Email Testing Config'
//
// REFERENCES
// -----------------------------------------------------------------------------
//
// * https://litmus.com/checklist/
//
// -----------------------------------------------------------------------------

gulp.task('test', function () {
    return gulp.src('build/index.html')
        .pipe(litmus(config))
        .pipe(gulp.dest('build/.'));
});
