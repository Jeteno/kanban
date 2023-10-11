const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
     },
     {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
           filename: 'img/[name][ext]',
        },
     },
     {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
           filename: 'fonts/[name][ext]',
        },
     },
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    }),
    new CopyWebpackPlugin({
      patterns: [
         {
            from: path.resolve(__dirname, './src/img'),
            to: path.resolve(__dirname, './dist/img'),
         }
      ]
   }),
   new MiniCssExtractPlugin(),
  ],
  optimization: {
    minimizer: [
       '...',
       new CssMinimizerPlugin(),
    ],
  },
  performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
  },
};