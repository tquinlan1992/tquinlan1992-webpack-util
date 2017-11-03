"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require('path');
function setDefaultIfNoConfig(params) {
    var path = params.path, defaultPath = params.defaultPath;
    return path ? path : defaultPath;
}
function addDefaultPaths(config) {
    var tsconfig = config.tsconfig;
    var defaultPaths = Object.assign(config, {
        tsconfig: setDefaultIfNoConfig({ path: tsconfig, defaultPath: "/tsconfig.json" })
    });
    return defaultPaths;
}
function addAppRootToPaths(config) {
    var entry = config.entry, appOutputPath = config.appOutputPath, tsconfig = config.tsconfig, publicDirSrc = config.publicDirSrc;
    var absolutePathsConfig = Object.assign(config, {
        entry: path.resolve(entry),
        appOutputPath: path.resolve(appOutputPath),
        tsconfig: path.resolve(tsconfig),
        publicDirSrc: path.resolve(publicDirSrc)
    });
    return absolutePathsConfig;
}
function setPaths(config) {
    config = addDefaultPaths(config);
    config = addAppRootToPaths(config);
    return config;
}
exports.default = setPaths;
