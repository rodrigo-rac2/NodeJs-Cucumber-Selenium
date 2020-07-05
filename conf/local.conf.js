exports.config = {
  user: process.env.LT_USERNAME || 'qadevsquad',
  key: process.env.LT_ACCESS_KEY || 'Th0GnOpWjWDEIFxlay04DV64MpOBfg0KmaKsQSEHuFrJOrop4T',
  server: 'hub.lambdatest.com',

  capabilities: [{
    browserName: 'chrome',
    platform: 'Windows 10',
    version: '70.0',
    name: "local_test",
    build: "cucumber-js-LambdaTest",
    tunnel: 'true',
  }]
}
