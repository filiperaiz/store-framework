//	JS packages
const gulp = require('gulp');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const webpackStream = require('webpack-stream');
const eslint = require('gulp-eslint');

// Lint scripts
function scriptsLint() {
    return gulp
        .src(['./src/assets/js/modules/**/*', './src/assets/js/main.js', './gulpfile.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
}

//	JS transpile
function scriptsBuild() {
    return gulp
        .src(['./src/assets/js/main.js'])
        .pipe(webpackStream(webpackConfig, webpack))
        .pipe(gulp.dest('./dist/js/'));
}

//	JS exports (Common JS)
module.exports = {
    lint: scriptsLint,
    build: scriptsBuild
};
