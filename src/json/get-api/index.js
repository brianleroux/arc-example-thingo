var arc = require('@architect/functions')

function route(req, res) {
  console.log(JSON.stringify(req, null, 2))
  res({
    json: {msg:`hello world`, hello: true, asdf:11}
  })
}

exports.handler = arc.json.get(route)
