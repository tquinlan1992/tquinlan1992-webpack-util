const appRoot = require('app-root-path');

function addAppRootToPaths(config: any) {
    const { entry, appOutputPath, tsconfig, publicDirContext } = config;
    const absolutePathsConfig = (<any>Object).assign(config, {
        entry: appRoot + entry,
        appOutputPath: appRoot + appOutputPath,
        tsconfig: appRoot + tsconfig,
        publicDirContext: appRoot + publicDirContext
    });

    return absolutePathsConfig;
}

export default addAppRootToPaths;
