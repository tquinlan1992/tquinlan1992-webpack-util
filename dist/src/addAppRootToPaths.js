"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var appRoot = require('app-root-path');
function addAppRootToPaths(config) {
    var absolutePathsConfig = Object.assign(config, {
        entry: appRoot + config.entry,
        appOutputPath: appRoot + config.appOutputPath,
        tsconfig: appRoot + config.tsconfig
    });
    return absolutePathsConfig;
}
exports.default = addAppRootToPaths;
