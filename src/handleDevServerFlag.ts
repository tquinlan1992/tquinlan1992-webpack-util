const WebpackDevServer = require('webpack-dev-server');
const express = require("express");
import copyPublicFolder from './copyPublicFolder';

function handleDevServerFlag(params: { compiler: any, config: any }) {
    const { compiler, config } = params;

    copyPublicFolder.watch(config);

    const { publicDirOut, appOutputPath } = config;
    const server = new WebpackDevServer(compiler, {
        setup: function(app: any) {
            app.use(express.static(appOutputPath + publicDirOut));
        },
        historyApiFallback: true,
        hot: true,
        allowedHosts: config.allowedHosts ? config.allowedHosts : []
    });
    const port = config.port ? config.port : 8080;
    server.listen(port, "0.0.0.0", () => {
        console.log("webpack dev server listening on port: " + port)
    });
}

export default handleDevServerFlag;
