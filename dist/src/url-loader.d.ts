declare function getUrlLoader(params: {
    path: string;
    limit: number;
}): {
    test: RegExp;
    loader: string;
    options: {
        limit: number;
        name: string;
    };
};
export default getUrlLoader;
