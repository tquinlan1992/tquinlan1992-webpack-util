declare const _default: {
    entry: string;
    output: {
        filename: string;
        path: string;
    };
    devtool: string;
    resolve: {
        extensions: string[];
    };
    module: {
        rules: {
            test: RegExp;
            loader: string;
            options: {
                configFileName: string;
            };
        }[];
    };
};
export default _default;
