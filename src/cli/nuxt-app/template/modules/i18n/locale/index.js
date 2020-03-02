import { join } from 'path'
import { readFileSync } from 'fs'
import Papa from 'papaparse'

const rawLocales = readFileSync(join(__dirname, './locales.csv'), 'utf8')

const parsedLocales = Papa.parse(rawLocales, {
  header: true,
  skipEmptyLines: true,
})

const locales = {}

parsedLocales.data.forEach((item) => {
  Object
    .keys(item)
    .filter(prop => prop !== 'key')
    .forEach(lang => {
      const langObj = {}

      langObj[lang] = {}
      langObj[lang][item.key] = item[lang]

      if (!Object.prototype.hasOwnProperty.call(locales, lang)) {
        locales[lang] = {}
      }

      Object.assign(locales[lang], langObj[lang])
    })
})

export {
  locales,
}
