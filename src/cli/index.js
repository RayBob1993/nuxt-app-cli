#!/usr/bin/env node
const cac = require('cac')
const { version } = require('../../package.json')

const NuxtApp = require('./nuxt-app')
const NuxtComponent = require('./nuxt-component')
const NuxtModule = require('./nuxt-module')
const NuxtStore = require('./nuxt-store')
const NuxtAddon = require('./nuxt-addon')

const cli = cac('cmg-nuxt')

cli
  .command('new', 'Создать проект')
  .option('-d, --default', 'Опции по умолчанию', {
    default: false,
  })
  .action(options => {
    new NuxtApp(options)
  })

cli
  .command('generate-module', 'Создать nuxt модуль')
  .option('--name <name>', 'Имя модуля')
  .option('-m, --middleware', 'Нужна middleware', {
    default: false,
  })
  .option('-s, --store', 'Нужно хранилище', {
    default: false,
  })
  .action(options => {
    new NuxtModule(options)
  })

cli
  .command('generate-store', 'Создать хранилище')
  .option('--name <name>', 'Имя хранилища')
  .action(options => {
    new NuxtStore(options)
  })

cli
  .command('generate-component', 'Создать компонент')
  .option('--name <name>', 'Имя компонента')
  .option('-g, --global', 'Добавить компонент глобально', {
    default: false,
  })
  .option('-s, --scoped', 'Локальный CSS', {
    default: false,
  })
  .action(options => {
    new NuxtComponent(options)
  })

cli
  .command('install [...addons]', 'Установить аддон')
  .option('--name <name>', 'Имя аддона')
  .action(options => {
    new NuxtAddon(options)
  })

cli.help()
cli.version(version)
cli.parse()
