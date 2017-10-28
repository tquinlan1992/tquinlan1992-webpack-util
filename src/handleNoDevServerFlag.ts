import copyPublicFolder from './copyPublicFolder';

function handleNoDevServerFlag(params: { compiler: any, watch: boolean, config: any }) {
    const { compiler, watch, config } = params;
    copyPublicFolder.build(config);
    if (watch) {
        compiler.watch({ // watch options:
            aggregateTimeout: 300, // wait so long for more changes
            poll: true // use polling instead of native watchers
            // pass a number to set the polling interval
        }, () => {
            // ...
        });
    } else {
        compiler.run((err: any, stats: any) => {
        });
    }
}

export default handleNoDevServerFlag;
