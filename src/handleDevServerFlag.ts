const WebpackDevServer = require('webpack-dev-server');

function handleDevServerFlag(compiler: any) {
    const server = new WebpackDevServer(compiler, {});
    const port = 8080;
    server.listen(port, "0.0.0.0", () => {
        console.log("webpack dev server listening on port: " + port)
    });
}

export default handleDevServerFlag;
