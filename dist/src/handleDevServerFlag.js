"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WebpackDevServer = require('webpack-dev-server');
function handleDevServerFlag(compiler) {
    var server = new WebpackDevServer(compiler, {});
    var port = 8080;
    server.listen(port, "0.0.0.0", function () {
        console.log("webpack dev server listening on port: " + port);
    });
}
exports.default = handleDevServerFlag;
