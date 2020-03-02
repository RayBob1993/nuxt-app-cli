const sao = require('sao')
const { resolve } = require('path')
const NuxtCli = require('../NuxtCli')

class NuxtAddon extends NuxtCli {
  constructor (cliOptions) {
    super(cliOptions)

    this.generator = resolve(__dirname, './')
    this.outDir = resolve(process.cwd() || '.')

    this.answersFromCLI = {
      addons: this.options
    }

    this.app = sao({
      generator: this.generator,
      outDir: this.outDir,
      answers: this.options.length ? this.answersFromCLI : null,
    })

    this.init()
  }

  async init () {
    try {
      await this.app.run()
    } catch (error) {
      console.trace(error)

      process.exit(1)
    }
  }
}

module.exports = NuxtAddon
