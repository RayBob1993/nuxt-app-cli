const sao = require('sao')
const { resolve } = require('path')
const NuxtCli = require('../NuxtCli')

class NuxtComponent extends NuxtCli {
  constructor (cliOptions) {
    super(cliOptions)

    this.generator = resolve(__dirname, './')
    this.outDir = resolve(process.cwd() || '.')

    this.app = sao({
      generator: this.generator,
      outDir: this.outDir,
      answers: {
        ...this.options,
      },
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

module.exports = NuxtComponent
