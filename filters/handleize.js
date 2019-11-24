module.exports = function (engine) {
  engine.registerFilter('handleize', (v) => {
    return String(v).toLowerCase().replace(/[^\w\u00C0-\u024f]+/g, '-').replace(/^-+|-+$/g, '')
  })
}
