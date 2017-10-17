function getUrlLoader(params: {path: string}) {
    return {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
        options: {
            limit: 2,
            name: params.path + '[path][name].[ext]'
        }
    }
}

export default getUrlLoader;
