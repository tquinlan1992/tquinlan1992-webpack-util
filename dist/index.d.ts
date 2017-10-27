declare function generateWebpackConfig(config: any): {
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
        rules: ({
            test: RegExp;
            loader: string;
            options: {
                configFileName: string;
            };
        } | {
            test: RegExp;
            loader: string;
            options: {
                limit: number;
                name: string;
                outputPath: string;
            };
        } | {
            enforce: string;
            test: RegExp;
            loader: string;
        } | {
            test: RegExp;
            use: ({
                loader: string;
            } | {
                loader: string;
                options: {
                    sourceMap: boolean;
                };
            })[];
        })[];
    };
    plugins: any[];
};
export default generateWebpackConfig;
