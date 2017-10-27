"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handleNoDevServerFlag(params) {
    var compiler = params.compiler, watch = params.watch;
    if (watch) {
        compiler.watch({
            aggregateTimeout: 300,
            poll: true // use polling instead of native watchers
            // pass a number to set the polling interval
        }, function () {
            // ...
        });
    }
    else {
        compiler.run(function (err, stats) {
        });
    }
}
exports.default = handleNoDevServerFlag;
