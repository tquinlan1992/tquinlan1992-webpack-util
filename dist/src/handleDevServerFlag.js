"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WebpackDevServer = require('webpack-dev-server');
var express = require("express");
var copyPublicFolder_1 = require("./copyPublicFolder");
function handleDevServerFlag(params) {
    var compiler = params.compiler, config = params.config;
    copyPublicFolder_1.default.watch(config);
    var publicDirOut = config.publicDirOut, appOutputPath = config.appOutputPath;
    var server = new WebpackDevServer(compiler, {
        setup: function (app) {
            app.use(express.static(appOutputPath + publicDirOut));
        },
        historyApiFallback: true,
        hot: true
    });
    var port = config.port ? config.port : 8080;
    server.listen(port, "0.0.0.0", function () {
        console.log("webpack dev server listening on port: " + port);
    });
}
exports.default = handleDevServerFlag;
