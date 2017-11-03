const path = require('path');

function setDefaultIfNoConfig(params: {path: string, defaultPath: string}) {
    const { path, defaultPath } = params;
    return path ? path : defaultPath;
}

function addDefaultPaths(config: any) {
    const { tsconfig } = config;
    const defaultPaths = (<any>Object).assign(config, {
        tsconfig: setDefaultIfNoConfig({path: tsconfig, defaultPath: "/tsconfig.json"})
    });

    return defaultPaths;
}
function addAppRootToPaths(config: any) {
    const { entry, appOutputPath, tsconfig, publicDirSrc } = config;
    const absolutePathsConfig = (<any>Object).assign(config, {
        entry: path.resolve(process.cwd() + entry),
        appOutputPath: path.resolve(process.cwd() + appOutputPath),
        tsconfig: path.resolve(process.cwd() + tsconfig),
        publicDirSrc: path.resolve(process.cwd() + publicDirSrc)
    });

    return absolutePathsConfig;
}

function setPaths(config: any) {
    config = addDefaultPaths(config);
    config = addAppRootToPaths(config);
    return config;
}

export default setPaths;
