import * as shell from 'shelljs';
import * as commandLineArgs from 'command-line-args';

function addJestFlags(params: {updateSnapshot: Boolean}): String {
    const { updateSnapshot } = params;

    let jestOptions = "";
    if (updateSnapshot) {
        jestOptions + "--updateSnapshot "
    }

    return jestOptions;
}

const optionDefintions = [
    {
        name: 'updateSnapshot', type: Boolean, defaultValue: false
    }
]

const options = commandLineArgs(optionDefintions);


const executeJest = "node ./node_modules/jest/bin/jest.js "

const configFlagWithPath ="--config ./node_modules/tquinlan1992-webpack-util/src/jest/jest.config.js ";

const jestFlags = addJestFlags(options);

shell.exec(executeJest + configFlagWithPath + jestFlags);
