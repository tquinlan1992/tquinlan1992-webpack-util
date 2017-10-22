"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var appRoot = require('app-root-path');
var awesome_typescript_loader_1 = require("./src/awesome-typescript-loader");
var entry = './index.ts';
var dist = appRoot + './dist';
var appOutputPath = dist;
var appOutputFilename = 'app.js';
var tsconfig = './tsconfig.json';
var extensions = [".ts", ".json"];
exports.default = {
    entry: entry,
    output: {
        filename: appOutputFilename,
        path: appOutputPath
    },
    devtool: "source-map",
    resolve: {
        extensions: extensions
    },
    module: {
        rules: [
            awesome_typescript_loader_1.default(tsconfig),
        ]
    }
};
