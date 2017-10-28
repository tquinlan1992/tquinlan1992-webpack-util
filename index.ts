const commandLineArgs = require('command-line-args');
import handleDevServerFlag from './src/handleDevServerFlag';
const jsonfile = require('jsonfile');
import handleNoDevServerFlag from './src/handleNoDevServerFlag';
import generateWebpackCompiler from './src/generateWebpackCompiler';
import addAppRootToPaths from './src/addAppRootToPaths';

const optionDefintions = [
    {
        name: 'config', type: String
    },
    {
        name: 'watch', alias: 'w', type: Boolean
    }, {
        name: 'devServer', alias: 'd', type: Boolean
    }
]

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
