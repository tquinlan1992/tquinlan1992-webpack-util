import * as shell from 'shelljs';

function getUserJestArgs(): String {
    const args = process.argv
    return args.slice(2).join(" ")
}

const executeJest = "node ./node_modules/jest/bin/jest.js "

const configFlagWithPath = "--config ./node_modules/tquinlan1992-webpack-util/src/jest/jest.config.js ";


const userJestArgs = getUserJestArgs();

shell.exec(executeJest + configFlagWithPath + userJestArgs);
