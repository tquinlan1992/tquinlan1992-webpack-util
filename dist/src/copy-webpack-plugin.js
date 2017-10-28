"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CopyWebpackPlugin = require("copy-webpack-plugin");
function createWebpackPlugin(params) {
    var context = params.context, from = params.from, to = params.to;
    return new CopyWebpackPlugin([
        { context: context, from: from, to: to },
    ]);
}
exports.default = createWebpackPlugin;
