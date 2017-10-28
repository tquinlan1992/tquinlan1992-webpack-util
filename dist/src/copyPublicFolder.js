"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gulp = require('gulp');
function buildPublicFolderTask(params) {
    gulp.task('build', function () {
        var publicDirSrc = params.publicDirSrc, publicDirOut = params.publicDirOut, appOutputPath = params.appOutputPath;
        return gulp.src(publicDirSrc).pipe(gulp.dest(appOutputPath + publicDirOut));
    });
}
function watchPublicFolderInstructions(config) {
    var publicDirSrc = config.publicDirSrc;
    gulp.task("watch", function () {
        gulp.watch(publicDirSrc, ['build']);
    });
}
function createTasks(config) {
    buildPublicFolderTask(config);
    watchPublicFolderInstructions(config);
}
function buildPublicFolder(config) {
    createTasks(config);
    gulp.start("build");
}
function watchPublicFolder(config) {
    buildPublicFolder(config);
    gulp.start("watch");
}
exports.default = {
    build: buildPublicFolder,
    watch: watchPublicFolder
};
