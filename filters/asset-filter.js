module.exports = function (engine) {
  engine.registerFilter('asset_url', (key, value) => {
    return `/assets/${key}`
  })
}
