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
        entry: path.resolve(process.cwd() + entry),
        appOutputPath: path.resolve(process.cwd() + appOutputPath),
        tsconfig: path.resolve(process.cwd() + tsconfig),
        publicDirSrc: path.resolve(process.cwd() + publicDirSrc)
    });
    return absolutePathsConfig;
}
function setPaths(config) {
    config = addDefaultPaths(config);
    config = addAppRootToPaths(config);
    return config;
}
exports.default = setPaths;
