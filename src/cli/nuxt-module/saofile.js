const { uppercaseFirst, deleteFolderRecursive } = require('../utils')

module.exports = {
  templateData () {
    return {
      upperCaseName: uppercaseFirst(this.answers.name),
      moduleOptionsTemplate: ""
    }
  },
  actions () {
    const upperCaseName = uppercaseFirst(this.answers.name)

    return [
      {
        type: 'add',
        files: '**',
        templateDir: `./template`,
      },
      {
        type: 'move',
        patterns: {
          './modules/create/middleware/modules/create.js': `./modules/${this.answers.name}/middleware/modules/${this.answers.name}.js`,
          './modules/create/store/modules/create.js': `./modules/${this.answers.name}/store/modules/${this.answers.name}.js`,
          './modules/create/plugins/modules/create.js': `./modules/${this.answers.name}/plugins/modules/${upperCaseName}.js`,
          './modules/create/index.js': `./modules/${this.answers.name}/index.js`,
          './modules/create/plugins/index.js': `./modules/${this.answers.name}/plugins/index.js`,
          './modules/create/store/index.js': `./modules/${this.answers.name}/store/index.js`,
          './modules/create/middleware/index.js': `./modules/${this.answers.name}/middleware/index.js`,
          './modules/create/defaults.js': `./modules/${this.answers.name}/defaults.js`,
        },
      },
    ]
  },
  completed () {
    const chalk = this.chalk

    deleteFolderRecursive('./modules/create')

    console.log(`\n${ chalk.blue.bold(`Модуль ${chalk.blue.red(this.answers.name)} успешно создан`) }`)
  }
}
