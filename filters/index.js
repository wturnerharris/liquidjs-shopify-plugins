module.exports = function (engine) {
  require('./asset-filter.js')(engine)
  require('./handleize.js')(engine)
  require('./json.js')(engine)
  require('./money.js')(engine)
  require('./script-tag.js')(engine)
  require('./stylesheet-tag.js')(engine)
  require('./translations.js')(engine)
}
