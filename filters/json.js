module.exports = function (engine) {
  engine.registerFilter('json', (key, value) => {
    return JSON.stringify(key)
  })
}
