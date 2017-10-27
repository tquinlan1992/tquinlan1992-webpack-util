const appRoot = require('app-root-path');

function addAppRootToPaths(config: any) {
    const absolutePathsConfig = (<any>Object).assign(config, {
        entry: appRoot + config.entry,
        appOutputPath: appRoot + config.appOutputPath,
        tsconfig: appRoot + config.tsconfig
    });

    return absolutePathsConfig;
}

export default addAppRootToPaths;
