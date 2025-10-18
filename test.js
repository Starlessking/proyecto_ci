const http = require('http');
const assert = require('assert');
const server = require('./index');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/api/hello',
  method: 'GET'
};

const req = http.request(options, res => {
  let data = '';
  res.on('data', chunk => { data += chunk; });
  res.on('end', () => {
    const json = JSON.parse(data);
    assert.strictEqual(json.message, 'Hello from CI demo!');
    console.log('✅ Test passed: /api/hello returns correct response');
    server.close();
  });
});

req.on('error', err => {
  console.error('❌ Test failed:', err);
  server.close();
});

req.end();
