#!/usr/bin/env node

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shell = require("shelljs");
function getUserJestArgs() {
    var args = process.argv;
    return args.slice(2).join(" ");
}
var executeJest = "node ./node_modules/jest/bin/jest.js ";
var configFlagWithPath = "--config ./node_modules/tquinlan1992-webpack-util/src/jest/jest.config.js ";
var userJestArgs = getUserJestArgs();
shell.exec(executeJest + configFlagWithPath + userJestArgs);
