"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var awesome_typescript_loader_1 = require("./awesome-typescript-loader");
var sassLoader_1 = require("./sassLoader");
var source_map_loader_1 = require("./source-map-loader");
exports.default = {
    awesomeTypescriptLoader: awesome_typescript_loader_1.default,
    sassLoader: sassLoader_1.default,
    sourceMapLoader: source_map_loader_1.default
};
