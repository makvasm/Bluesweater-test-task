module.exports = {
    mode: "development",
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    entry: {
        app: "./src/App.tsx"
    },
    output: {
        path: __dirname + "/src/public",
        filename: "[name].js"
    },
    devServer: {
        port: 9000,
        contentBase: __dirname + "/src/public",
        index: "index.html"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: "ts-loader"
            },
        ]
    }

}