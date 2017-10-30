#!/usr/bin/env node

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shell = require("shelljs");
var appRoot = require('app-root-path');
var commandLineArgs = require("command-line-args");
var optionDefintions = [
    {
        name: 'debug', alias: 'd', type: Boolean, defaultValue: false
    }
];
var options = commandLineArgs(optionDefintions);
function getDebugCommand(params) {
    var debug = params.debug;
    if (debug) {
        return "--inspect --inspect-brk";
    }
    else {
        "";
    }
}
function getUserJestArgs() {
    var args = process.argv;
    return args.slice(2).join(" ");
}
var jestPath = "'" + appRoot.resolve("./node_modules/jest/bin/jest.js") + "'";
var executeJest = "node " + jestPath + " ";
var jestConfigPath = "'" + appRoot.resolve("./node_modules/tquinlan1992-webpack-util/src/jest/jest.config.js") + "'";
var debugCommand = getDebugCommand(options);
var configFlagWithPath = "--config " + jestConfigPath + " ";
var userJestArgs = getUserJestArgs();
shell.exec(executeJest + debugCommand + configFlagWithPath + userJestArgs);
