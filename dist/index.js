"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var awesome_typescript_loader_1 = require("./src/awesome-typescript-loader");
var sassLoader_1 = require("./src/sassLoader");
var source_map_loader_1 = require("./src/source-map-loader");
var url_loader_1 = require("./src/url-loader");
var html_webpack_plugin_1 = require("./src/html-webpack-plugin");
var copy_webpack_plugin_1 = require("./src/copy-webpack-plugin");
exports.default = {
    awesomeTypescriptLoader: awesome_typescript_loader_1.default,
    sassLoader: sassLoader_1.default,
    sourceMapLoader: source_map_loader_1.default,
    urlLoader: url_loader_1.default,
    htmlWebpackPlugin: html_webpack_plugin_1.default,
    CopyWebpackPlugin: copy_webpack_plugin_1.default
};
