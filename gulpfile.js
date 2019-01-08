// 开发环境/Development → (dev)
// 生产环境/Production → (dist)

// .gulp/task/serve.js 中开发环境 静态服务器 端口需要配置；

const gulp = require('gulp');
var taskListing = require('gulp-task-listing');
gulp.task("help", taskListing);

// serve
const serveTask = require('./.gulp/task/serve');
gulp.task('serve:dev', serveTask.dev);

// zip
const zipTask = require('./.gulp/task/zip');
gulp.task('zip', zipTask.compress);
gulp.task('zip:clean', zipTask.clean);

gulp.task('dev',
    gulp.series(
        'serve:dev'
    )
);

gulp.task('pro',
    gulp.series(
        'zip:clean',
        'zip'
    )
);
