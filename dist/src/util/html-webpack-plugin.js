"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HtmlWebpackPlugin = require('html-webpack-plugin');
var htmlWebpackTemplate = require('html-webpack-template');
function getHtmlWebpackPlugin(params) {
    return new HtmlWebpackPlugin({
        title: params.htmlTitle,
        inject: false,
        template: htmlWebpackTemplate,
        appMountId: params.htmlAppMountId
    });
}
exports.default = getHtmlWebpackPlugin;
