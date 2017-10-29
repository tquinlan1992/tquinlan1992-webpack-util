function getUrlLoader(params: {path: string, limit: number}) {
    return {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
        options: {
            limit: params.limit,
            name: '[name].[ext]',
            outputPath: params.path
        }
    }
}

export default getUrlLoader;
