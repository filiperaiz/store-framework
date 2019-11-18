// packages
const del = require('del');
const store = require('../store.config.js');
const pathDist = 'R:/IKCLoja/Genesis/Repository/' + store.name.dev + '/locales/custom/**/*';

// Apaga pasta dist
function cleanDist() {
    return del(['./dist/'], { force: true });
}

// Apaga tudo que tiver dentro da pasta custom da loja
function cleanDev() {
    return del([pathDist], { force: true });
}

// exports
module.exports = {
    dist: cleanDist,
    dev: cleanDev
};
