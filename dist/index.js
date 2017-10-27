"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createWebpackConfig_1 = require("./src/createWebpackConfig");
var appRoot = require('app-root-path');
function addAppRootToPaths(config) {
    var absolutePathsConfig = Object.assign(config, {
        entry: appRoot + config.entry,
        appOutputPath: appRoot + config.appOutputPath,
        tsconfig: appRoot + config.tsconfig
    });
    return absolutePathsConfig;
}
function generateWebpackConfig(config) {
    var absolutePathsConfig = addAppRootToPaths(config);
    return createWebpackConfig_1.default(absolutePathsConfig);
}
exports.default = generateWebpackConfig;
