module.exports = function (engine) {
  engine.registerFilter('stylesheet_tag', (key, value) => {
    return `<link type="text/css" rel="stylesheet" href="${key}" />`
  })
}
