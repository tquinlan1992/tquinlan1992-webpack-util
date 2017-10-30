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
        return "--inspect --inspect-brk "
    } else {
        ""
    }
}

function getUserJestArgs(startAt3: Boolean): String {
    let sliceStart = 2;
    if (startAt3) {
        sliceStart = 3;
    }
    const args = process.argv
    return args.slice(sliceStart).join(" ")
}

const jestPath = "'" + appRoot.resolve("./node_modules/jest/bin/jest.js") + "'";

const debugCommand = getDebugCommand(options);

const executeJest = "node " + debugCommand + jestPath + " ";

const jestConfigPath = "'" + appRoot.resolve("./node_modules/tquinlan1992-webpack-util/src/jest/jest.config.js") + "'";

const configFlagWithPath = "--config " + jestConfigPath + " ";


const userJestArgs = getUserJestArgs(!!debugCommand);

shell.exec(executeJest + configFlagWithPath + userJestArgs);
