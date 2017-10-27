import createWebpackConfig from './createWebpackConfig';
import addAppRootToPaths from './addAppRootToPaths';
const webpack = require('webpack');

function generateWebpackCompiler(config: any) {
    const absolutePathsConfig = addAppRootToPaths(config);

    const webpackConfig = createWebpackConfig(absolutePathsConfig);
    const compiler = webpack(webpackConfig);
    return compiler;
}

export default generateWebpackCompiler;
