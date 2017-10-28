"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var copyPublicFolder_1 = require("./copyPublicFolder");
function handleNoDevServerFlag(params) {
    var compiler = params.compiler, watch = params.watch, config = params.config;
    copyPublicFolder_1.default.build(config);
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
