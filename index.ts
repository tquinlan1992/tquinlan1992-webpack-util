import * as commandLineArgs from 'command-line-args';
import handleDevServerFlag from './src/handleDevServerFlag';
import * as jsonfile from 'jsonfile';
import handleNoDevServerFlag from './src/handleNoDevServerFlag';
import generateWebpackCompiler from './src/generateWebpackCompiler';
import addAppRootToPaths from './src/addAppRootToPaths';
const path = require('path');

const optionDefintions = [
    {
        name: 'config', type: String, defaultValue: path.resolve("tquinlan1992-webpack-util.config.json")
    },
    {
        name: 'watch', alias: 'w', type: Boolean
    }, {
        name: 'devServer', alias: 'd', type: Boolean
    }
];

const options = commandLineArgs(optionDefintions);
jsonfile.readFile(options.config, (err: any, json: any) => {
    if (err) {
        console.log("error running tquinlan1992-webpack-util", err);
        return;
    }
    const absolutePathsConfig = addAppRootToPaths(json);

    const compiler = generateWebpackCompiler(absolutePathsConfig)

    if (options.devServer) {
        handleDevServerFlag({ compiler, config: absolutePathsConfig });
    } else {
        handleNoDevServerFlag({ compiler, watch: options.watch, config: absolutePathsConfig});
    }
});
