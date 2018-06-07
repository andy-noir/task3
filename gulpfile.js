var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var wait = require('gulp-wait');
var cleanCSS = require('gulp-clean-css');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./src"
    });

    gulp.watch("src/scss/*.scss", ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers + autoprefixer
gulp.task('sass', function() {
    return gulp.src("src/scss/*.scss")
        .pipe(wait(500))
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
        .pipe(autoprefixer({
          browsers: ['Chrome >= 40', 'ie >= 10', 'FireFox >= 40', 'Safari >= 7', 'Opera >= 12']
        }))
        .pipe(cleanCSS({compatibility: '*'}))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});


gulp.task('default', ['serve']);
