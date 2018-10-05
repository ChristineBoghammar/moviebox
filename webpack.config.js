const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          // Use Babel to transpile all JavaScript
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                require("postcss-import")({ skipDuplicates: true }),
                require("postcss-preset-env")({
                  features: {
                    "nesting-rules": true,
                    "custom-media-queries": true
                  }
                })
              ],
              sourceMap: true,
              ident: "postcss"
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|(o|t)tf|eot)$/i,
        loader: "file-loader", // -> returns new url to file
        query: {
          name: "fonts/[name].[hash].[ext]"
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        exclude: /icons/,
        use: [
          {
            loader: "file-loader", // -> returns new url to file
            query: {
              name: "img/[name].[hash].[ext]"
            }
          },
          "image-webpack-loader"
        ]
      },
      {
        test: /\.svg$/i,
        use: [
          {
            loader: "svg-inline-loader", // -> returns full svg object
            options: {
              removeTags: true,
              removeSVGTagAttrs: true,
              idPrefix: "icon"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html"
    })
  ]
};
