exports.config = {
  runner: 'local',

  specs: [
    './test/specs/**/*.js'
  ],

  maxInstances: 1,

  capabilities: [{
  platformName: 'Android',
  'appium:deviceName': 'Android Emulator',
  'appium:platformVersion': '12.0',
  'appium:automationName': 'UiAutomator2',
  'appium:app': './app/ebacshop.apk'
}],

  logLevel: 'info',

  framework: 'mocha',

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },

  reporters: ['spec'],

  services: ['appium'],

  appium: {
    command: 'appium'
  }
}