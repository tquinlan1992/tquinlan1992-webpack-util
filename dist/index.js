#!/usr/bin/env node

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commandLineArgs = require('command-line-args');
var handleDevServerFlag_1 = require("./src/handleDevServerFlag");
var jsonfile = require('jsonfile');
var handleNoDevServerFlag_1 = require("./src/handleNoDevServerFlag");
var generateWebpackCompiler_1 = require("./src/generateWebpackCompiler");
var optionDefintions = [
    {
        name: 'config', type: String
    },
    {
        name: 'watch', alias: 'w', type: Boolean
    }, {
        name: 'devServer', alias: 'd', type: Boolean
    }
];
var options = commandLineArgs(optionDefintions);
jsonfile.readFile(options.config, function (err, json) {
    var compiler = generateWebpackCompiler_1.default(json);
    if (options.devServer) {
        handleDevServerFlag_1.default(compiler);
    }
    else {
        handleNoDevServerFlag_1.default({ compiler: compiler, watch: options.watch });
    }
});
