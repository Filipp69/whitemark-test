const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = {
    entry: './src/index.js', // Путь к вашему главному JS файлу
    output: {
        filename: 'bundle.js', // Имя выходного JS файла
        path: path.resolve(__dirname, 'dist'), // Путь к папке сборки
    },
    module: {
        rules: [
            // Загрузчик для JavaScript (используется Babel для транспиляции)
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            // Загрузчики для CSS/SCSS
            {
              test: /\.(scss|css)$/,
              use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            // Загрузчики для изображений
            {
              test: /\.(png|jpg|jpeg|gif|svg)$/,
              type: "asset"
          },
            // Загрузчики для шрифтов
            {
              test: /\.(woff2?|eot|ttf|otf)$/i,
              type: 'asset/resource',
              generator: {
                  filename: 'fonts/[name][ext]', // Формат имен файлов для шрифтов
              },
          },
        ],
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      assetModuleFilename: 'assets/[name][ext]', // Имя файлов без хэшей
  },
    plugins: [
        // Плагин для генерации HTML файла
        new HtmlWebpackPlugin({
            template: './src/index.html', // Путь к вашему HTML файлу
            filename: 'index.html', // Имя выходного HTML файла
        }),
        // Плагин для выноса CSS в отдельный файл
        new MiniCssExtractPlugin({
          filename: 'styles.css',
      }),
        // Плагин для копирования файлов (например, изображений)
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/fonts', to: 'fonts' }, // Копировать шрифты
                { from: 'src/images', to: 'images' }, // Копировать изображения
            ],
        }),
        new FileManagerPlugin({
          events: {
            onStart: {
              delete: ['dist'],
            },
          },
        }),
    ],
};
