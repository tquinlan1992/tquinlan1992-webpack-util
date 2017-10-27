"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createWebpackConfig_1 = require("./createWebpackConfig");
var addAppRootToPaths_1 = require("./addAppRootToPaths");
var webpack = require('webpack');
function generateWebpackCompiler(config) {
    var absolutePathsConfig = addAppRootToPaths_1.default(config);
    var webpackConfig = createWebpackConfig_1.default(absolutePathsConfig);
    var compiler = webpack(webpackConfig);
    return compiler;
}
exports.default = generateWebpackCompiler;
