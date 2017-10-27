import awesomeTypescriptLoader from './awesome-typescript-loader';
import sassLoader from './sassLoader';
import sourceMapLoader from './source-map-loader';
import urlLoader from './url-loader';
import htmlWebpackPlugin from './html-webpack-plugin';
import CopyWebpackPlugin from './copy-webpack-plugin';

const typescriptExtensions = [".ts", ".tsx", ".js", ".json"];
const htmlAppMountId = 'app';

function createWebpackConfig(params: {entry: string, appOutputFilename: string, appOutputPath: string, htmlTitle: string, tsconfig: string, publicDir: string, publicDirContext: string}) {
    const { entry, appOutputFilename, appOutputPath, htmlTitle, tsconfig, publicDir, publicDirContext } = params;
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
            CopyWebpackPlugin({context: publicDirContext, from: publicDir})
        ]
    }
}

export default createWebpackConfig;
