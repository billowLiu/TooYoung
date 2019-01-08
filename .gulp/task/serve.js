const _PATH = {
    src: 'src'
};

const browserSync = require("browser-sync").create();

/**
* 开启静态服务
*
* @param {Object} param - 配置
* @param {string} param.baseDir - 基目录
* @param {Boolean} param.port - 端口
*/
function _config (param) {
    return {
        notify: false,
        ghostMode: false,
        open: true,
        server: {
            baseDir: param.baseDir
        },
        host: "localhost",
        port: param.port
    };
}

/** 开发环境静态服务器 */
function dev(cb) {
    browserSync.init(_config({ baseDir: _PATH.src, port: "8081" }));
    cb();
}

exports.browserSync = browserSync;
exports.dev = dev;