import createWebpackConfig from './createWebpackConfig';
const webpack = require('webpack');

function generateWebpackCompiler(config: any) {

    const webpackConfig = createWebpackConfig(config);
    const compiler = webpack(webpackConfig);
    return compiler;
}

export default generateWebpackCompiler;
