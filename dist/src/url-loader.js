"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getUrlLoader(params) {
    return {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
        options: {
            limit: params.limit,
            name: params.path + '[path][name].[ext]'
        }
    };
}
exports.default = getUrlLoader;
