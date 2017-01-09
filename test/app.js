'use strict'

const _ = require('lodash')
const smokesignals = require('smokesignals')

const App = {
  pkg: {
    name: require('../package').name + '-test'
  },
  api: {
    models: { },
    controllers: { },
    services: { }
  },
  config: {
    main: {
      packs: [
        require('trailpack-router'),
        require('trailpack-express'),
        require('trailpack-sequelize'),
        require('../')
      ]
    }
  }
}


_.defaultsDeep(App, smokesignals.FailsafeConfig)
module.exports = App
