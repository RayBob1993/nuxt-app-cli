module.exports = {
  actions () {
    return [
      {
        type: 'add',
        files: '**',
        templateDir: './template',
      },
      {
        type: 'move',
        patterns: {
          './store/create.js': `./store/${this.answers.name}.js`
        },
      },
    ]
  },
  completed () {
    const chalk = this.chalk

    console.log(`\n${ chalk.blue.bold(`Хранилище ${chalk.blue.red(this.answers.name)} успешно создано`) }`)
  },
}
