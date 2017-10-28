"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var awesome_typescript_loader_1 = require("./awesome-typescript-loader");
var sassLoader_1 = require("./sassLoader");
var source_map_loader_1 = require("./source-map-loader");
var url_loader_1 = require("./url-loader");
var html_webpack_plugin_1 = require("./html-webpack-plugin");
var copy_webpack_plugin_1 = require("./copy-webpack-plugin");
var typescriptExtensions = [".ts", ".tsx", ".js", ".json"];
var htmlAppMountId = 'app';
function createWebpackConfig(params) {
    var entry = params.entry, appOutputFilename = params.appOutputFilename, appOutputPath = params.appOutputPath, htmlTitle = params.htmlTitle, tsconfig = params.tsconfig, publicDir = params.publicDir, publicDirContext = params.publicDirContext, publicDirTo = params.publicDirTo;
    return {
        entry: entry,
        output: {
            filename: appOutputFilename,
            path: appOutputPath
        },
        devtool: "source-map",
        resolve: {
            extensions: typescriptExtensions
        },
        module: {
            rules: [
                awesome_typescript_loader_1.default(tsconfig),
                source_map_loader_1.default,
                sassLoader_1.default,
                url_loader_1.default({ path: './images/', limit: 250 })
            ]
        },
        plugins: [
            html_webpack_plugin_1.default({ htmlTitle: htmlTitle, htmlAppMountId: htmlAppMountId }),
            copy_webpack_plugin_1.default({ context: publicDirContext, from: publicDir, to: publicDirTo })
        ]
    };
}
exports.default = createWebpackConfig;
