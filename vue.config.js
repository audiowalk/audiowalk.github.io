module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/audiowalk.github' // test20200915 為 repo 名稱
      : '/'
  }