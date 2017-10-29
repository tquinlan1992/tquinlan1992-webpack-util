#!/usr/bin/env node

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shell = require("shelljs");
shell.exec("node ./node_modules/jest/bin/jest.js");
