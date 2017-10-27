import createWebpackConfig from './src/createWebpackConfig';
const appRoot = require('app-root-path');

function addAppRootToPaths(config: any) {
    const absolutePathsConfig = (<any>Object).assign(config, {
        entry: appRoot + config.entry,
        appOutputPath: appRoot + config.appOutputPath,
        tsconfig: appRoot + config.tsconfig
    });

    return absolutePathsConfig;
}

function generateWebpackConfig(config: any) {
    const absolutePathsConfig = addAppRootToPaths(config);
    return createWebpackConfig(absolutePathsConfig);
}

export default generateWebpackConfig;
