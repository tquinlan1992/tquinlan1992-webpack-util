"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (configPath) {
    return {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        options: {
            configFileName: configPath
        }
    };
};
