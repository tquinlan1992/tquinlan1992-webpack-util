"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var appRoot = require('app-root-path');
function addAppRootToPaths(config) {
    var entry = config.entry, appOutputPath = config.appOutputPath, tsconfig = config.tsconfig;
    var absolutePathsConfig = Object.assign(config, {
        entry: appRoot + entry,
        appOutputPath: appRoot + appOutputPath,
        tsconfig: appRoot + tsconfig
    });
    return absolutePathsConfig;
}
exports.default = addAppRootToPaths;
