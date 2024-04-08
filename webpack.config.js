// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

// module.exports = {
//   entry: './client/index.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: ['babel-loader'],
//       },
//       {
//         test: /\.css$/,
//         use: [MiniCssExtractPlugin.loader, 'css-loader'],
//       },
//       {
//         test: /\.(png|svg|jpg|jpeg|gif)$/i,
//         type: 'asset/resource',
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './client/index.html',
//     },
//     ),
//     new MiniCssExtractPlugin({
//       filename: '[name].css',
//       chunkFilename: '[id].css',
//     }),
//     new CopyWebpackPlugin({
//       patterns: [
//         { from: 'client/assets', to: 'assets' }, 
//       ],
//     }),
//   ],
//   devServer: {
//     static: {
//       directory: path.join(__dirname, 'dist'),
//     },
//     compress: true,
//     port: 9000,
//   },
// };

//--------------------------

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env) => {
  const isDev = env.mode === 'development';
  return {
    target: ['web', 'es5'], 
    mode: env.mode ?? 'development', 
    entry: path.resolve(__dirname, 'client', 'index.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.[contenthash].js',
      clean: true,
      publicPath: '/', 
    },
    devServer: {
      port: env.port ?? 9000, 
      open: true,
      devMiddleware: {
        writeToDisk: true,
      },
      historyApiFallback: true,
    },
    devtool: isDev ? 'inline-source-map' : false,
   
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'client', 'index.html'),
      
      }),
      new MiniCssExtractPlugin({ filename: 'style.[contenthash].css' }),

      isDev ? new webpack.ProgressPlugin() : undefined, 

      new CopyWebpackPlugin({
        patterns: [
          { from: 'client/assets', to: 'assets' }, 
        ],
      }),
    ],
    optimization: {
      minimizer: [
        new CssMinimizerPlugin({
          test: /\.css$/i,
          parallel: 4,
        }),
      ],
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      edge: '17',
                      firefox: '60',
                      chrome: '67',
                      safari: '11.1',
                      ie: '11',
                    },
                  },
                ],
                '@babel/preset-react',
              ],
            },
          },
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
      ],
    },
  };
};


