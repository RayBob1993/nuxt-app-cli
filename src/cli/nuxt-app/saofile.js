const prompts = require('./prompts')
const shell = require('shelljs')

module.exports = {
  prompts,
  templateData () {
    // UI компоненты
    const isElementUI = this.answers.ui.includes('element-ui')
    const isBootstrap = this.answers.ui.includes('bootstrap')

    // Готовые модули
    const isAxios = this.answers.modules.includes('axios')
    const isGTM = this.answers.modules.includes('gtm')
    const isMediaQuery = this.answers.modules.includes('mq')
    const isDotenv = this.answers.modules.includes('dotenv')
    const isScrollTo = this.answers.modules.includes('scroll-to')
    const isFingerprint = this.answers.modules.includes('fingerprint')
    const isClickOutside = this.answers.modules.includes('clickOutside')
    const isI18N = this.answers.modules.includes('i18n')

    // Vue фильтры
    const isFilterPlural = this.answers.filters.includes('plural')
    const isFilterPrice = this.answers.filters.includes('price')

    // Компоненты
    const isComponentHeader = this.answers.components.includes('header')
    const isComponentFooter = this.answers.components.includes('footer')
    const isComponentInputmask = this.answers.components.includes('inputmask')
    const isComponentSwiper = this.answers.components.includes('swiper')
    const isComponentVideoJS = this.answers.components.includes('videojs')

    // Прочее
    const pmRun = this.answers.pm === 'yarn' ? 'yarn' : 'npm run'
    const isModeUniversal = this.answers.mode === 'universal'

    return {
      isElementUI,
      isBootstrap,
      isAxios,
      isGTM,
      isMediaQuery,
      isDotenv,
      isScrollTo,
      isI18N,
      isFingerprint,
      isClickOutside,
      isFilterPlural,
      isFilterPrice,
      isComponentHeader,
      isComponentFooter,
      isComponentInputmask,
      isComponentSwiper,
      isComponentVideoJS,
      pmRun,
      isModeUniversal,
    }
  },
  actions () {
    const actions = [
      {
        type: 'add',
        files: '**',
        templateDir: './template/nuxt',
      }
    ]

    this.answers.ui.forEach(UIName => {
      actions.push({
        type: 'add',
        files: '**',
        templateDir: `./template/modules/${ UIName }`,
      })
    })

    this.answers.components.forEach(componentName => {
      actions.push({
        type: 'add',
        files: '**',
        templateDir: `./template/components/${ componentName }`,
      })
    })

    this.answers.modules.forEach(modulesName => {
      actions.push({
        type: 'add',
        files: '**',
        templateDir: `./template/modules/${ modulesName }`,
      })
    })

    this.answers.filters.forEach(filterName => {
      actions.push({
        type: 'add',
        files: '**',
        templateDir: `./template/filters/${ filterName }`,
      })
    })

    if (this.answers.test) {
      actions.push({
        type: 'add',
        files: '**',
        templateDir: './template/modules/jest',
      })
    }

    actions.push({
      type: 'move',
      patterns: {
        '_.gitignore': '.gitignore'
      },
      templateDir: './template/nuxt/',
    })

    actions.push({
      type: 'modify',
      files: 'package.json',
      templateDir: './template/nuxt/',
      handler (data) {
        delete data.dependencies['']
        delete data.devDependencies['']
        return data
      }
    })

    return actions
  },
  completed () {
    const chalk = this.chalk
    const pmRun = this.answers.pm === 'yarn' ? 'yarn' : 'npm run'
    const pmInstall = this.answers.pm === 'yarn' ? 'yarn' : 'npm install'

    console.log(`\n${chalk.blue.bold('Установка зависимостей')}`)
    shell.exec(pmInstall)

    console.log(`\n${chalk.blue.bold('Запуск линтера')}`)
    shell.exec(`${pmRun} lint --fix`)

    console.log(`\n${chalk.blue.bold(`\nПроект ${chalk.blue.red(this.answers.name)} успешно развёрнут`)}`)

    console.log(`\n${chalk.blue.bold('Запуск dev сервера')}`)
    shell.exec(`${pmRun} serve`)
  },
}
