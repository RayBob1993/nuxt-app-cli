// https://medium.com/carepenny/creating-a-nuxt-module-1c6e3cdf1037
import { resolve, join } from 'path'
import { readdirSync } from 'fs'

export default function ErrorModule () {
  const pluginsToSync = [
    'plugins/index.js',
  ]

  const foldersToSync = [
    'plugins/modules',
  ]

  for (const pathString of pluginsToSync) {
    this.addPlugin({
      src: join(__dirname, pathString),
      fileName: join('error', pathString),
    })
  }

  for (const pathString of foldersToSync) {
    const path = resolve(__dirname, pathString)

    for (const file of readdirSync(path)) {
      this.addTemplate({
        src: resolve(path, file),
        fileName: join('error', pathString, file),
      })
    }
  }
}
