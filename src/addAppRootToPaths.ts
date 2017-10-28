const appRoot = require('app-root-path');

function setDefaultIfNoConfig(params: {path: string, defaultPath: string}) {
    const { path, defaultPath } = params;
    return path ? path : defaultPath;
}

function addDefaultPaths(config: any) {
    const { entry, appOutputPath, tsconfig } = config;
    const defaultPaths = (<any>Object).assign(config, {
        entry: setDefaultIfNoConfig(entry),
        appOutputPath: setDefaultIfNoConfig(appOutputPath),
        tsconfig: setDefaultIfNoConfig(tsconfig)
    });

    return defaultPaths;
}
function addAppRootToPaths(config: any) {
    const { entry, appOutputPath, tsconfig } = config;
    const absolutePathsConfig = (<any>Object).assign(config, {
        entry: appRoot + entry,
        appOutputPath: appRoot + appOutputPath,
        tsconfig: appRoot + tsconfig
    });

    return absolutePathsConfig;
}

function setPaths(config: any) {
    config = addDefaultPaths(config);
    config = addAppRootToPaths(config);
    return config;
}

export default setPaths;
