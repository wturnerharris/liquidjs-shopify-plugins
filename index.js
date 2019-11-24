var { Liquid } = require('liquidjs');
var engine = new Liquid();
var template = `
<head>
  <meta property="translations_normal" content="{{- 'general.test.test_item_normal' | t -}}">
  <meta property="translations_nested" content="{{- 'general.test.test_item_nested' | t -}}">
  <meta property="asset_url" content="{{- 'thumbnail.jpg' | asset_url -}}">
  <meta property="money" content="{{ testAmount | money }}">

  {{ 'main.min.css' | asset_url | stylesheet_tag }}
  {{ 'main.js' | asset_url | script_tag }}
  <script id="handleize">console.log('{{- 'This is a handleized string!' | handleize -}}')</script>
  <script id="json">{{ testObj | json }}</script>

</head>
<body>
</body>
`
var data = {
  testObj: {
    testKey: "testValue"
  },
  testAmount: 99.99,
  paginate: {
    pages: 1
  },
  name: "Joe"
}
require('./filters')(engine)
engine.parseAndRender(template, data).then(console.log);
