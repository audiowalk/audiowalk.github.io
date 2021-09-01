module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/audiowalk.github.io' // test20200915 為 repo 名稱
      : '/'
  }