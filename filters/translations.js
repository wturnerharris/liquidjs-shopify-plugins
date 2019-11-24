const objectPath = require('object-path')
const locale = require('../data/en.default.json')

module.exports = function (engine) {
  engine.registerFilter('t', (key, value) => {
    let translation = objectPath.get(locale, key) || key;
    let data = {}
    if (typeof value !== 'undefined') {
      data[value[0]] = value[1]
    }
    let tpl = engine.parse(translation)
    return engine.renderSync(tpl, data)
  })
}
