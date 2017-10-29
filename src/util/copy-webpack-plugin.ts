import * as CopyWebpackPlugin from 'copy-webpack-plugin';

function createWebpackPlugin(params: { context: string, from: string, to: string }): any {
    const { context, from, to } = params;
    return new CopyWebpackPlugin([
        { context, from, to },
    ]);
}

export default createWebpackPlugin;
