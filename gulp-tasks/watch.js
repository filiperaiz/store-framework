// packages
const gulp = require('gulp');

// import tasks
const js = require('./scripts.js');
const css = require('./styles.js');
const clean = require('./clean.js');
const copy = require('./copy.js');
const ftp = require('./ftp.js');
const templates = require('./templates.js');

// Deploy to development and Watch files
function devWatchFiles() {
    gulp.watch('./src/templates/**/*', gulp.series(templates.dev));
    gulp.watch('./src/assets/scss/**/*', gulp.series(css.build, copy.dev));
    gulp.watch('./src/assets/js/**/*', gulp.series(js.build, copy.dev));
    gulp.watch('./src/assets/img/**/*', gulp.series(copy.assets, copy.dev));
    gulp.watch('./src/assets/fonts/**/*', gulp.series(copy.assets, copy.dev));
}

// Deploy to homolog and Watch files
function homologWatchFiles() {
    gulp.watch('./src/templates/**/*', gulp.series(templates.homolog));
    gulp.watch('./src/assets/scss/**/*', gulp.series(css.build, ftp.homolog));
    gulp.watch('./src/assets/js/**/*', gulp.series(js.build, ftp.homolog));
    gulp.watch('./src/assets/img/**/*', gulp.series(copy.assets, ftp.homolog));
    gulp.watch('./src/assets/fonts/**/*', gulp.series(copy.assets, ftp.homolog));
}

// exports
module.exports = {
    dev: devWatchFiles,
    homolog: homologWatchFiles
};
