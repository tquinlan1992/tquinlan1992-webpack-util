const appRoot = require('app-root-path');

function addAppRootToPaths(config: any) {
    const { entry, appOutputPath, tsconfig } = config;
    const absolutePathsConfig = (<any>Object).assign(config, {
        entry: appRoot + entry,
        appOutputPath: appRoot + appOutputPath,
        tsconfig: appRoot + tsconfig
    });

    return absolutePathsConfig;
}

export default addAppRootToPaths;
