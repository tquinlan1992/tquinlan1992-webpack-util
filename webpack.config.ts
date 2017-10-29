const appRoot = require('app-root-path');

import awesomeTypescripLoaderUtil from './src/util/awesome-typescript-loader';

const entry: string = './index.ts';
const dist = appRoot + './dist';
const appOutputPath = dist;
const appOutputFilename = 'app.js';
const tsconfig = './tsconfig.json';
const extensions = [".ts", ".json"];

export default {
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
            awesomeTypescripLoaderUtil(tsconfig),
        ]
    }
};
