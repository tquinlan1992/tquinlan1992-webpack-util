import awesomeTypescriptLoader from './src/awesome-typescript-loader';
import sassLoader from './src/sassLoader';
import sourceMapLoader from './src/source-map-loader';
import urlLoader from './src/url-loader';
import htmlWebpackPlugin from './src/html-webpack-plugin';
import CopyWebpackPlugin from './src/copy-webpack-plugin';

const typescriptExtensions = [".ts", ".tsx", ".js", ".json"];
const htmlAppMountId = 'app';

function createWebpackConfig(params: {entry: string, appOutputFilename: string, appOutputPath: string, htmlTitle: string, tsconfig: string}) {
    const { entry, appOutputFilename, appOutputPath, htmlTitle, tsconfig } = params;
    return {
        entry: entry,
        output: {
            filename: appOutputFilename,
            path: appOutputPath
        },
        devtool: "source-map",
        resolve: {
            extensions: typescriptExtensions
        },
        module: {
            rules: [
                awesomeTypescriptLoader(tsconfig),
                sourceMapLoader,
                sassLoader,
                urlLoader({ path: './images/', limit: 250 })
            ]
        },
        plugins: [
            htmlWebpackPlugin({ htmlTitle, htmlAppMountId }),
            CopyWebpackPlugin({context: '../src', from: 'public/**/*'})
        ]
    }
}

export default createWebpackConfig;
