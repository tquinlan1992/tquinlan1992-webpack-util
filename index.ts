const commandLineArgs = require('command-line-args');
import handleDevServerFlag from './src/handleDevServerFlag';
const jsonfile = require('jsonfile');
import handleNoDevServerFlag from './src/handleNoDevServerFlag';
import generateWebpackCompiler from './src/generateWebpackCompiler';

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

    const compiler = generateWebpackCompiler(json)

    if (options.devServer) {
        handleDevServerFlag(compiler);
    } else {
        handleNoDevServerFlag({ compiler, watch: options.watch});
    }
});
