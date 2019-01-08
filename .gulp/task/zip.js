const _PATH = {
    src: 'src/**/*',
    dest: 'dist',
};

const del = require('del');
const gulp = require('gulp');
const zip = require('gulp-zip');
const timestamp = require('time-stamp');

/** 将打包文件进行压缩，文件名格式：archive-YYYY-MM-DD-HHmmssms.zip */
function compress(cb) {
    // const filename = 'archive' + timestamp('-YYYY-MM-DD-HHmmssms') + '.zip';
    const filename = 'tooSimple.zip';
    setTimeout(() => {
        gulp.src(_PATH.src)
            .pipe(zip(filename))
            .pipe(gulp.dest(_PATH.dest));
        cb();
    }, 2000);
}

/** 删除压缩包目录 */
function clean() {
    return del([_PATH.dest]);
}

exports.compress = compress;
exports.clean = clean;