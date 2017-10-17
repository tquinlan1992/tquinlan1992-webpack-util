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
    urlLoader: (params: {
        path: string;
        limit: number;
    }) => {
        test: RegExp;
        loader: string;
        options: {
            limit: number;
            name: string;
        };
    };
    htmlWebpackPlugin: (params: {
        htmlTitle: string;
        htmlAppMountId: string;
    }) => any;
};
export default _default;
