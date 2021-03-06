"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var awesome_typescript_loader_1 = require("./util/awesome-typescript-loader");
var sassLoader_1 = require("./util/sassLoader");
var source_map_loader_1 = require("./util/source-map-loader");
var url_loader_1 = require("./util/url-loader");
var html_webpack_plugin_1 = require("./util/html-webpack-plugin");
var webpack = require('webpack');
var typescriptExtensions = [".ts", ".tsx", ".js", ".json"];
var htmlAppMountId = 'app';
function createWebpackConfig(params) {
    var entry = params.entry, appOutputFilename = params.appOutputFilename, appOutputPath = params.appOutputPath, htmlTitle = params.htmlTitle, tsconfig = params.tsconfig, urlBase = params.urlBase, port = params.port;
    return {
        entry: [entry,
            'webpack/hot/dev-server',
            'webpack-dev-server/client?' + urlBase + ":" + (port ? port : 8080)],
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
            html_webpack_plugin_1.default({ htmlTitle: htmlTitle, htmlAppMountId: htmlAppMountId, meta: [
                    { name: "viewport", content: "width=device-width, initial-scale=1" }
                ] }),
            new webpack.HotModuleReplacementPlugin()
        ]
    };
}
exports.default = createWebpackConfig;
