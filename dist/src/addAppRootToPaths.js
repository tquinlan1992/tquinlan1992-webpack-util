"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var appRoot = require('app-root-path');
function setDefaultIfNoConfig(params) {
    var path = params.path, defaultPath = params.defaultPath;
    return path ? path : defaultPath;
}
function addDefaultPaths(config) {
    var entry = config.entry, appOutputPath = config.appOutputPath, tsconfig = config.tsconfig;
    var defaultPaths = Object.assign(config, {
        entry: setDefaultIfNoConfig(entry),
        appOutputPath: setDefaultIfNoConfig(appOutputPath),
        tsconfig: setDefaultIfNoConfig(tsconfig)
    });
    return defaultPaths;
}
function addAppRootToPaths(config) {
    var entry = config.entry, appOutputPath = config.appOutputPath, tsconfig = config.tsconfig;
    var absolutePathsConfig = Object.assign(config, {
        entry: appRoot + entry,
        appOutputPath: appRoot + appOutputPath,
        tsconfig: appRoot + tsconfig
    });
    return absolutePathsConfig;
}
function setPaths(config) {
    config = addDefaultPaths(config);
    config = addAppRootToPaths(config);
    return config;
}
exports.default = setPaths;
