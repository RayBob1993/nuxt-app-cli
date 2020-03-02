const prompts = require('./prompts')
const shell = require('shelljs')

module.exports = {
  prompts,
  actions () {
    const actions = []

    this.answers.addons.forEach(addonName => {
      actions.push({
        type: 'add',
        files: '**',
        templateDir: `./template/${addonName}`,
      })
    })

    return actions
  },
}
