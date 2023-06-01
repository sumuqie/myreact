/* eslint-disable no-undef */
module.exports = {
  webpack: {
    entry: './index.jsx'
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3001',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
