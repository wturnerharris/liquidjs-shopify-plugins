module.exports = function (engine) {
  engine.registerFilter('money', (key) => {
    let money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(key)
    return money
  })
}
