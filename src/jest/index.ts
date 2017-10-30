import * as shell from 'shelljs';
const appRoot = require('app-root-path');
import * as commandLineArgs from 'command-line-args';

const optionDefintions = [
    {
        name: 'debug', alias: 'd', type: Boolean, defaultValue: false
    }
];

const options = commandLineArgs(optionDefintions);

function getDebugCommand(params: {debug: Boolean}): String {
    const { debug }= params;
    if (debug) {
        return "--inspect --inspect-brk"
    } else {
        ""
    }
}

function getUserJestArgs(): String {
    const args = process.argv
    return args.slice(2).join(" ")
}

const jestPath = "'" + appRoot.resolve("./node_modules/jest/bin/jest.js") + "'";

const executeJest = "node " + jestPath + " ";

const jestConfigPath = "'" + appRoot.resolve("./node_modules/tquinlan1992-webpack-util/src/jest/jest.config.js") + "'";

const debugCommand = getDebugCommand(options);

const configFlagWithPath = "--config " + jestConfigPath + " ";


const userJestArgs = getUserJestArgs();

shell.exec(executeJest + debugCommand + configFlagWithPath + userJestArgs);
