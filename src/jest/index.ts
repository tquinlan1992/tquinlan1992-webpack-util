import * as shell from 'shelljs';


const executeJest = "node ./node_modules/jest/bin/jest.js "

const configFlagWithPath ="--config ./node_modules/tquinlan1992-webpack-util/src/jest/jest.config.js";

shell.exec(executeJest + configFlagWithPath);
