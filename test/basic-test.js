var test = require('tape')
var tiny = require('tiny-json-http')
var workflows = require('@architect/workflows')

test('env', t=> {
  t.plan(1)
  t.ok(workflows.sandbox, 'got it')
  console.log(workflows)
})

var server 
test('start the server', t=> {
  t.plan(1)
  server = workflows.sandbox.http.start(x=> {
    t.ok(true, 'whatever')
  })
})

test('test json response', t=> {
  t.plan(1)
  tiny.get({
    url: 'http://localhost:3333/api'
  },
  function _get(err, result) {
    if (err) {
      t.fail(err)
    }
    else {
      t.ok(result, 'got result')
      console.log(result)
    }
  })
})

test('stop the server', t=> {
  t.plan(1)
  server.close()
  t.ok(true, 'closed')
})

