const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const package = require('./package.json');
module.exports = async (env = {}, opts) => {

    const plugins = [];
    plugins.push(
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: "index.html",
            __TT__: JSON.stringify({
                version: package.version,
            }),
        })
    );

    const webpackConfig = {
        mode: 'development',

        entry: "./src/index.tsx",

        output: {
            filename: "[name].bundle.js",
            chunkFilename: "chunks/[name].chunk.js",
            path: __dirname + ("/dist"),
        },
        // Enable sourcemaps for debugging webpack's output.
        devtool: 'cheap-module-eval-source-map',

        devServer: {
            contentBase: "./dist",
            stats: 'minimal'
        },

        resolve: {
            modules: [
                path.resolve(__dirname),
                'node_modules'
            ],
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: [".ts", ".tsx", ".js", ".json"]
        },

        module: {
            rules: [
                // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
                {
                    test: /\.(ts|tsx)?$/,
                    loader: "awesome-typescript-loader"
                },
                {
                    test: /\.(woff|woff2|ttf|eot)$/,
                    use: 'file-loader?name=fonts/[name].[ext]!static'
                },
                // File loader
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    loader: 'file-loader'
                },
                {
                    type: 'javascript/auto',
                    test: /\.json?$/,
                    exclude: /(node_modules)/,
                    use: [
                        {
                            loader: 'json-loader'
                        }
                    ]
                },
                {
                    test: /\.php$/,
                    loaders: [
                        'html-minify',
                        'php-loader'
                    ]
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },

                // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
                {
                    enforce: "pre",
                    test: /\.js$/,
                    loader: "source-map-loader"
                },

                // TSLint configurations
                {
                    enforce: "pre",
                    test: /\.ts$|.tsx$/,
                    use: [{
                        loader: "tslint-loader",
                        options: {
                            formatter: 'stylish',
                            fix: true
                        }
                    }]
                },
            ]
        },

        plugins: plugins,

        // When importing a module whose path matches one of the following, just
        // assume a corresponding global variable exists and use that instead.
        // This is important because it allows us to avoid bundling all of our
        // dependencies, which allows browsers to cache those libraries between builds.
        externals: {
            // "react": "React",
            // "react-dom": "ReactDOM"
        }
    };


    return webpackConfig;
};
