/* eslint-disable no-undef */
const webpack = require("webpack");
const path = require("path");
require("dotenv").config();
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");

// console.log("process.env.NODE_ENV : " + process.env.NODE_ENV);

const devMode = process.env.NODE_ENV !== "production";

// console.log("devmode : " + devMode);

const PATHS = {
  source: path.join(__dirname, "client/src"),
  dist: path.join(__dirname, "dist/client")
};

const plugins = [
  new CleanWebpackPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: devMode ? "[name].css" : "[name].[contenthash].css",
    chunkFilename: devMode ? "[id].css" : "[id].[contenthash].css"
  }),
  new HtmlWebpackPlugin({
    filename: "index.html",
    template: PATHS.source + "/index.html",
    minify: {
      collapseWhitespace: true,
      removeComments: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      useShortDoctype: true
    }
  })
];
if (!devMode) {
  plugins.push(
    new CssMinimizerPlugin(),
    new HtmlMinimizerPlugin(),
    new TerserPlugin()
  );
}
module.exports = {
  plugins,
  entry: [PATHS.source + "/ts/index.ts"],
  mode: process.env.NODE_ENV,
  devtool: "source-map",
  watchOptions: {
    ignored: "node_modules/**"
  },
  devServer: {
    inline: true,
    progress: true,
    contentBase: path.join(__dirname, PATHS.dist),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "autoprefixer",
                    {
                      grid: true,
                      overrideBrowserslist: ["ie >= 8", "last 4 version"]
                    }
                  ]
                ]
              },
              sourceMap: true
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    path: PATHS.dist,
    filename: "index.js"
  }
};
