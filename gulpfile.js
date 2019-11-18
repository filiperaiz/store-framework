// Load plugins
const gulp = require('gulp');

// import tasks
const js = require('./gulp-tasks/scripts.js');
const css = require('./gulp-tasks/styles.js');
const clean = require('./gulp-tasks/clean.js');
const copy = require('./gulp-tasks/copy.js');
const ftp = require('./gulp-tasks/ftp.js');
const icons = require('./gulp-tasks/icons.js');
const templates = require('./gulp-tasks/templates.js');
const watchFiles = require('./gulp-tasks/watch.js');

// Dev tasks
const templateDev = gulp.series(templates.dev);
const deployDev = gulp.series(gulp.parallel(clean.dist, clean.dev), gulp.parallel(copy.assets, css.build, js.lint, js.build, templates.dev), copy.dev);
const watchDev = gulp.series(gulp.parallel(watchFiles.dev));

// Homolog tasks
const templateHomolog = gulp.series(templates.homolog);
const deployHomolog = gulp.series(clean.dist, gulp.parallel(copy.assets, css.build, js.lint, js.build, templates.homolog), ftp.homolog);
const watchHomolog = gulp.series(gulp.parallel(watchFiles.homolog));

// Single tasks
const icon = gulp.series(icons.svg);
const lint = gulp.series(js.lint);
const deployAll = gulp.series(deployDev, deployHomolog);

// expose tasks to CLI
exports.icon = icon;
exports.lint = lint;
exports.default = deployAll;

gulp.task('dev', function(done) {
    let template = process.argv.indexOf('-t') !== -1;
    let deploy = process.argv.indexOf('-d') !== -1;
    let watch = process.argv.indexOf('-w') !== -1;

    if (template) {
        templateDev();
    }

    if (deploy) {
        deployDev();
    }

    if (watch) {
        watchDev();
    }

    done();
});

gulp.task('homolog', function(done) {
    let template = process.argv.indexOf('-t') !== -1;
    let deploy = process.argv.indexOf('-d') !== -1;
    let watch = process.argv.indexOf('-w') !== -1;

    if (template) {
        templateHomolog();
    }

    if (deploy) {
        deployHomolog();
    }

    if (watch) {
        watchHomolog();
    }

    done();
});
