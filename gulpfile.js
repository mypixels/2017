// Dependencies
const gulp            = require('gulp'),
      sass            = require('gulp-sass'),
      autoprefixer    = require('gulp-autoprefixer'),
      imagemin        = require('gulp-imagemin'),
      plumber         = require('gulp-plumber'),
      rename          = require('gulp-rename'),
      uglify          = require('gulp-uglify'),
      browserSync     = require('browser-sync').create();

// CSS Task
gulp.task('css', function() {
  return gulp.src('app/scss/**/*.scss')
  .pipe(plumber())
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.stream())
});

// JS Task
gulp.task('js', function() {
  return gulp.src(['app/js/**/*.js', '!app/js/**/*.min.js'])
  .pipe(plumber())
  .pipe(uglify())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('app/js'))
  .pipe(browserSync.stream())
});

// Image Task
gulp.task('images', function() {
  return gulp.src('app/img')
  .pipe(imagemin())
  .pipe(gulp.dest('app/img'))
});

// HTML Task
gulp.task('html', function() {
  return gulp.src('app/*.html')
  .pipe(browserSync.stream())
});

// Browser Sync Task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
    notify: {
      styles: {
        backgroundColor: 'rgba(0,0,0,0.3)',
        bottom: '0',
        left: '0'
      }
    }
  })
});

// Watch Task
gulp.task('watch', ['browserSync', 'css', 'js', 'html'], function() {
  gulp.watch('app/scss/**/*', ['css']);
  gulp.watch('app/js/**/*.js', ['js']);
  gulp.watch('app/**/*.html', ['html']);
});

// Default Task
gulp.task('default', ['watch']);
