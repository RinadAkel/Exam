var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");
var miniCssExtractPlugin = require("mini-css-extract-plugin");
var optimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
  },

  output: {
    path: path.join(__dirname, "/dist"),
    publicPath: '',
    filename: "main.js",
  },

  mode: "development",

  devServer: {
    contentBase: path.join(__dirname, "/dist"),
    port: 8080,
    writeToDisk: true,
    open: true,
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              // optimize : true
            },
          },
        ],
      },

      /*   {
        test: /\.css$/,
        use: ["style-loader", miniCssExtractPlugin.loader, "css-loader"],
      }, */

      {
        test: /\.css$/,
        use: [
          {
            loader: miniCssExtractPlugin.loader,
          },
          "css-loader",
        ],
      },

      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images",
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new htmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
    }),
    new miniCssExtractPlugin({
      filename: "css/style.css",
    }),
  
    new optimizeCssAssetsPlugin({}),
  ]
};