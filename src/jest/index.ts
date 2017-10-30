import * as shell from 'shelljs';
import * as commandLineArgs from 'command-line-args';

function addJestFlags(params: { updateSnapshot: Boolean, coverage: Boolean }): String {
    const { updateSnapshot, coverage } = params;

    let jestOptions = "";
    if (updateSnapshot) {
        jestOptions += "--updateSnapshot "
    }

    if (coverage) {
        jestOptions += "--coverage "
    }

    return jestOptions;
}

const optionDefintions = [
    {
        name: 'updateSnapshot', alias: 'v', type: Boolean, defaultValue: false,
    },
    {
        name: 'coverage', type: Boolean, defaultValue: false
    }
]

const options = commandLineArgs(optionDefintions);


const executeJest = "node ./node_modules/jest/bin/jest.js "

const configFlagWithPath = "--config ./node_modules/tquinlan1992-webpack-util/src/jest/jest.config.js ";

const jestFlags = addJestFlags(options);

shell.exec(executeJest + configFlagWithPath + jestFlags);
