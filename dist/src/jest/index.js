#!/usr/bin/env node

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shell = require("shelljs");
var commandLineArgs = require("command-line-args");
function addJestFlags(params) {
    var updateSnapshot = params.updateSnapshot;
    var jestOptions = "";
    if (updateSnapshot) {
        jestOptions + "--updateSnapshot ";
    }
    return jestOptions;
}
var optionDefintions = [
    {
        name: 'updateSnapshot', type: Boolean, defaultValue: false
    }
];
var options = commandLineArgs(optionDefintions);
var executeJest = "node ./node_modules/jest/bin/jest.js ";
var configFlagWithPath = "--config ./node_modules/tquinlan1992-webpack-util/src/jest/jest.config.js ";
var jestFlags = addJestFlags(options);
shell.exec(executeJest + configFlagWithPath + jestFlags);
