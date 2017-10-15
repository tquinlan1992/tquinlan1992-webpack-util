declare const _default: {
    awesomeTypescriptLoader: (configPath: string) => {
        test: RegExp;
        loader: string;
        options: {
            configFileName: string;
        };
    };
    sassLoader: {
        test: RegExp;
        use: ({
            loader: string;
        } | {
            loader: string;
            options: {
                sourceMap: boolean;
            };
        })[];
    };
    sourceMapLoader: {
        enforce: string;
        test: RegExp;
        loader: string;
    };
};
export default _default;
