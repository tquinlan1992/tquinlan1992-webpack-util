function getUrlLoader(params: {path: string, limit: number}) {
    return {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
        options: {
            limit: params.limit,
            name: params.path + '[path][name].[ext]'
        }
    }
}

export default getUrlLoader;
