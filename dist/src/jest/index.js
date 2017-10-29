#!/usr/bin/env node

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shell = require("shelljs");
var executeJest = "node ./node_modules/jest/bin/jest.js ";
var configFlagWithPath = "--config ./node_modules/tquinlan1992-webpack-util/src/jest/jest.config.js";
shell.exec(executeJest + configFlagWithPath);
