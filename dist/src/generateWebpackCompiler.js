"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createWebpackConfig_1 = require("./createWebpackConfig");
var webpack = require('webpack');
function generateWebpackCompiler(config) {
    var webpackConfig = createWebpackConfig_1.default(config);
    var compiler = webpack(webpackConfig);
    return compiler;
}
exports.default = generateWebpackCompiler;
