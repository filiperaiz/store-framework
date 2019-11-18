//  CSS packages
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const sass = require('gulp-sass');

//  CSS task
function stylesBuild() {
    return gulp
        .src(['./src/assets/scss/**/*.scss'])
        .pipe(sass({ outputStyle: 'compact' }).on('error', sass.logError))
        .pipe(autoprefixer({ overrideBrowserslist: ['last 2 versions'], cascade: false }))
        .pipe(rename({ basename: 'mainstore' }))
        .pipe(gulp.dest('./dist/css/'));
}

//  CSS exports
module.exports = {
    build: stylesBuild
};
