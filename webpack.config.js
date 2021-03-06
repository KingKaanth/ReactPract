module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias:{
      Main : 'app/components/Main.jsx',
      About : 'app/components/About.jsx',
      Nav : 'app/components/Nav.jsx',
      Services : 'app/components/Services.jsx',
      SubcribeForm : 'app/components/SubcribeForm.jsx',
      Message : 'app/components/Message.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
