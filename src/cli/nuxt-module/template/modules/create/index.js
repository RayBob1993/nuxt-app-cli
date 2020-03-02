// https://medium.com/carepenny/creating-a-nuxt-module-1c6e3cdf1037
import { resolve, join } from 'path'
import { readdirSync } from 'fs'
import defaultOptions from './defaults'

export default function <%= upperCaseName %>Module () {
  const libRoot = resolve(__dirname)
  const { <%= name %> } = this.options
  const options = Object.assign({}, defaultOptions, <%= name %>)

  const pluginsToSync = [
    <%_ if (store) { _%>
    'store/index.js',
    <%_ } _%>
    'plugins/index.js',
    <%_ if (middleware) { _%>
    'middleware/index.js',
    <%_ } _%>
  ]

  const foldersToSync = [
    <%_ if (store) { _%>
    'store/modules',
    <%_ } _%>
    'plugins/modules',
    <%_ if (middleware) { _%>
    'middleware/modules',
    <%_ } _%>
  ]

  for (const pathString of pluginsToSync) {
    this.addPlugin({
      src: join(libRoot, pathString),
      fileName: join('<%= name %>', pathString),
      options,
    })
  }

  for (const pathString of foldersToSync) {
    const path = resolve(__dirname, pathString)

    for (const file of readdirSync(path)) {
      this.addTemplate({
        src: resolve(path, file),
        fileName: join('<%= name %>', pathString, file),
        options,
      })
    }
  }
}
