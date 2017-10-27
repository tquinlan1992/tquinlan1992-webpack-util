"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CopyWebpackPlugin = require("copy-webpack-plugin");
function createWebpackPlugin(params) {
    var context = params.context, from = params.from;
    return new CopyWebpackPlugin([
        { context: context, from: from },
    ]);
}
exports.default = createWebpackPlugin;
