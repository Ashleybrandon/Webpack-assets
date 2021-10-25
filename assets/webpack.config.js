const path = require( 'path' );
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );
const OptimizeCssAssetsPlugin = require( 'optimize-css-assets-webpack-plugin' );
const cssnano = require( 'cssnano' );
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const JS_DIR = path.resolve( __dirname, 'src/js' );
const BUILD_DIR = path.resolve( __dirname, 'dist' );

const entry = {
    main: JS_DIR + '/main.js',
    // blog: JS_DIR + '/blog.js',npm run prod

};

const output = {
    path: BUILD_DIR,
    filename: 'js/[name].js'
};

const plugins = ( argv ) => [
    new CleanWebpackPlugin({
        cleanStaleWebpackAssets: ( 'production' === argv.mode )
    }),

    new MiniCssExtractPlugin({
        filename: 'css/[name].css'
    })

];

const rules = [
    {
        test: /\.js$/,
        include: [JS_DIR],
        exclude: /node_modules/,
        use:'babel-loader'
    },
    {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
        ],
    }

];

module.exports = ( env, argv ) => ({
    entry:  entry,
    output: output,
    devtool: 'source-map',
    module: {
        rules: rules,
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin({
                cssProcessor: cssnano,
            }),
            new UglifyJSPlugin({
                cache: false,
                parallel: true,
                sourceMap: false,
            })
        ]
    },
    plugins: plugins( argv ),
    externals: {
        jquery: 'jQuery'
    }
});