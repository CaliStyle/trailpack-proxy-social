'use strict'

const Trailpack = require('trailpack')
const lib = require('./lib')

module.exports = class ProxySocialTrailpack extends Trailpack {

  /**
   * TODO document method
   */
  validate () {

  }

  /**
   * TODO document method
   */
  configure () {
    return Promise.all([
      lib.ProxySocial.addPolicies(this.app),
      lib.ProxySocial.addRoutes(this.app),
      lib.ProxySocial.addAgenda(this.app),
      lib.ProxySocial.copyDefaults(this.app)
    ])
  }

  /**
   * TODO document method
   */
  initialize () {

  }

  constructor (app) {
    super(app, {
      config: require('./config'),
      api: require('./api'),
      pkg: require('./package')
    })
  }
}

