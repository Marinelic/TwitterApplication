module.exports = {
  entry: './src/index.js',  // Your entry JavaScript file
  output: {
    path: path.resolve(__dirname, 'dist'),  // Output folder for the bundled files
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // Apply Babel to all JavaScript files
        exclude: /node_modules/,  // Don't process files in node_modules
        use: {
          loader: 'babel-loader',  // Use Babel to process the JavaScript
        },
      },
    ],
  },
};
