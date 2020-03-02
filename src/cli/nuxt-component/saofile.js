const { uppercaseFirst } = require('../utils')

module.exports = {
  templateData () {
    return {
      upperCaseName: uppercaseFirst(this.answers.name),
    }
  },
  actions () {
    const upperCaseName = uppercaseFirst(this.answers.name)

    return [
      {
        type: 'add',
        files: '**',
        templateDir: './template',
      },
      {
        type: 'move',
        patterns: {
          './components/Create.vue': `./components/${upperCaseName}.vue`
        },
      },
    ]
  },
  completed () {
    const chalk = this.chalk

    console.log(`\n${ chalk.blue.bold(`Компонент ${chalk.blue.red(this.answers.name)} успешно создан`) }`)
  }
}
