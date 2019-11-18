// packages
const gulp = require('gulp');
const gutil = require('gulp-util');
const ftp = require('vinyl-ftp');

const store = require('../store.config.js');
const pathStoreHomolog = '/Genesis/Repository/' + store.name.homolog + '/locales/custom';

const ftpDeploy = {
    user: 'implantacao.rakuten',
    password: '!Mp7Ac4o',
    port: 21,
    host: {
        homolog: '200.229.205.140',
        production: '200.229.204.25'
    }
};

function ftpDeployHomolog() {
    const connection = ftp.create({
        host: ftpDeploy.host.homolog,
        port: ftpDeploy.port,
        user: ftpDeploy.user,
        password: ftpDeploy.password,
        parallel: 5,
        log: gutil.log
    });

    return gulp
        .src(['./dist/**/*'], { base: '', buffer: false })
        .pipe(connection.newer(pathStoreHomolog)) // only upload newer files
        .pipe(connection.dest(pathStoreHomolog));
}

// exports
module.exports = {
    homolog: ftpDeployHomolog
};
