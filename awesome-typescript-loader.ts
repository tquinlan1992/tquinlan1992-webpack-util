export default (configPath: string) => {
    return {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        options: {
            configFileName: configPath
        }
    }
}
