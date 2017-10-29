import awesomeTypescriptLoader from './util/awesome-typescript-loader';
import sassLoader from './util/sassLoader';
import sourceMapLoader from './util/source-map-loader';
import urlLoader from './util/url-loader';
import htmlWebpackPlugin from './util/html-webpack-plugin';

const typescriptExtensions = [".ts", ".tsx", ".js", ".json"];
const htmlAppMountId = 'app';

function createWebpackConfig(params: { entry: string, appOutputFilename: string, appOutputPath: string, htmlTitle: string, tsconfig: string, publicDir: string, publicDirContext: string, publicDirTo: string }) {
    const { entry, appOutputFilename, appOutputPath, htmlTitle, tsconfig} = params;
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
            htmlWebpackPlugin({ htmlTitle, htmlAppMountId })
        ]
    }
}

export default createWebpackConfig;
