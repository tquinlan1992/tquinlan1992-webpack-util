const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackTemplate = require('html-webpack-template');

function getHtmlWebpackPlugin(params: {htmlTitle: string, htmlAppMountId: string, meta: [object]}) {
    return new HtmlWebpackPlugin({
        title: params.htmlTitle,
        inject: false,
        template: htmlWebpackTemplate,
        appMountId: params.htmlAppMountId,
        meta: params.meta
    });
}

export default getHtmlWebpackPlugin;
