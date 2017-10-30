#!/usr/bin/env node

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shell = require("shelljs");
var appRoot = require('app-root-path');
function getUserJestArgs() {
    var args = process.argv;
    return args.slice(2).join(" ");
}
var jestPath = "'" + appRoot.resolve("./node_modules/jest/bin/jest.js") + "'";
var executeJest = "node " + jestPath + " ";
var jestConfigPath = "'" + appRoot.resolve("./node_modules/tquinlan1992-webpack-util/src/jest/jest.config.js") + "'";
var configFlagWithPath = "--config " + jestConfigPath + " ";
var userJestArgs = getUserJestArgs();
shell.exec(executeJest + configFlagWithPath + userJestArgs);
