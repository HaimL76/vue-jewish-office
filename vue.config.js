module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/tora-app/dist/'  // This is whatever your path from the root is
    : '/'
}