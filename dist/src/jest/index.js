#!/usr/bin/env node

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shell = require("shelljs");
var commandLineArgs = require("command-line-args");
function addJestFlags(params) {
    var updateSnapshot = params.updateSnapshot, coverage = params.coverage;
    var jestOptions = "";
    if (updateSnapshot) {
        jestOptions += "--updateSnapshot ";
    }
    if (coverage) {
        jestOptions += "--coverage ";
    }
    return jestOptions;
}
var optionDefintions = [
    {
        name: 'updateSnapshot', alias: 'v', type: Boolean, defaultValue: false,
    },
    {
        name: 'coverage', type: Boolean, defaultValue: false
    }
];
var options = commandLineArgs(optionDefintions);
var executeJest = "node ./node_modules/jest/bin/jest.js ";
var configFlagWithPath = "--config ./node_modules/tquinlan1992-webpack-util/src/jest/jest.config.js ";
var jestFlags = addJestFlags(options);
shell.exec(executeJest + configFlagWithPath + jestFlags);
