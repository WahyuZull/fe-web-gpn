/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const BrotliPlugin = require('brotli-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
    // sw: path.resolve(__dirname, 'src/scripts/sw.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),

    new WebpackPwaManifest({
      name: 'Front End Official Web Shop Galeri Pelajar Nusantara',
      short_name: 'FE GPN',
      description: 'Official Web Shop Galeri Pelajar Nusantara',
      theme_color: '#15804B',
      background_color: '#ffffff',
      id: './index.html',
      start_url: './index.html',
      publicPath: './',
      fingerprints: false,
      orientation: 'portrait',
      display: 'standalone',
      icons: [
        {
          src: path.resolve('src/public/icons/icon-gpn.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: path.resolve('src/public/icons/maskable-icon.png'),
          size: '1024x1024',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    }),

    new BrotliPlugin({
      asset: '[path].br[query]',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      inRatio: 0.5,
    }),

    // new BundleAnalyzerPlugin(),
  ],
};
