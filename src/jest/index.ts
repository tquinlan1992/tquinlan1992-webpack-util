import * as shell from 'shelljs';
const appRoot = require('app-root-path');

function getUserJestArgs(): String {
    const args = process.argv
    return args.slice(2).join(" ")
}

const jestPath = "'" + appRoot.resolve("./node_modules/jest/bin/jest.js") + "'";

const executeJest = "node " + jestPath + " ";

const configFlagWithPath = "--config ./node_modules/tquinlan1992-webpack-util/src/jest/jest.config.js ";


const userJestArgs = getUserJestArgs();

shell.exec(executeJest + configFlagWithPath + userJestArgs);
