// packages

const gulp = require('gulp');

const iconfont = require('gulp-iconfont');
const iconfontCss = require('gulp-iconfont-css');
const runTimestamp = Math.round(Date.now() / 1000);
const fontName = 'rkicons';

function iconToFont() {
    return gulp
        .src(['./src/assets/img/svg/*.svg'])
        .pipe(
            iconfontCss({
                fontName: fontName, // The name that the generated font will have
                path: './src/assets/scss/mixins/_template-icons.scss', // The path to the template that will be used to create the SASS/LESS/CSS file
                targetPath: '../../scss/icons/_rkicons.scss', // The path where the file will be generated
                fontPath: './src/assets/fonts/rkicons/' // The path to the icon font file
            })
        )
        .pipe(
            iconfont({
                fontName: fontName, // Name of the font
                formats: ['ttf', 'eot', 'woff'], // The font file formats that will be created
                timestamp: runTimestamp, // Recommended to get consistent builds when watching files
                normalize: true,
                prependUnicode: true, // recommended option
                fontHeight: 1001,
                centerHorizontally: true
            })
        )
        .pipe(gulp.dest('./src/assets/fonts/rkicons'));
}

// exports
module.exports = {
    svg: iconToFont
};
