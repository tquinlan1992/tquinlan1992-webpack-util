const gulp = require('gulp');


function buildPublicFolderTask(params: { publicDirSrc: string, publicDirOut: string, appOutputPath: string }) {
    gulp.task('build', function() {
        const { publicDirSrc, publicDirOut, appOutputPath } = params;
        return gulp.src(publicDirSrc).pipe(gulp.dest(appOutputPath + publicDirOut));
    });
}

function watchPublicFolderInstructions(config: any) {
    const { publicDirSrc } = config;
    gulp.task("watch", () => {
        gulp.watch(publicDirSrc, ['build']);
    });
}

function createTasks(config: any) {
    buildPublicFolderTask(config);
    watchPublicFolderInstructions(config);
}

function buildPublicFolder(config: any) {
    createTasks(config);
    gulp.start("build");
}

function watchPublicFolder(config: any) {
    buildPublicFolder(config);
    gulp.start("watch");
}

export default {
    build: buildPublicFolder,
    watch: watchPublicFolder
}
