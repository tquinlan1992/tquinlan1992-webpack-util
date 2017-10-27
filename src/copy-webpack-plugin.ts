import * as CopyWebpackPlugin from 'copy-webpack-plugin';

function createWebpackPlugin(params: { context: string, from: string }): any {
    const { context, from } = params;
    return new CopyWebpackPlugin([
        { context, from },
    ]);
}

export default createWebpackPlugin;
