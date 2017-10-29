"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    test: /\.scss$/,
    use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader",
            options: {
                sourceMap: true
            }
        }, {
            loader: "sass-loader",
            options: {
                sourceMap: true
            }
        }]
};
