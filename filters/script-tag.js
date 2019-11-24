module.exports = function (engine) {
  engine.registerFilter('script_tag', (key, value) => {
    return `<script type="text/javascript" src="${key}"></script>`
  })
}
