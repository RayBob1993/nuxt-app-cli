const { existsSync, readdirSync, lstatSync, unlinkSync, rmdirSync } = require('fs')
const { join } = require ('path')

/**
 @name uppercaseFirst
 @description Делает 1ю букву в слове заглавной.
 @param string - {string}
 @return {string}
 */
function uppercaseFirst (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

/**
 @name deleteFolderRecursive
 @description Рекурсивное удаление директории
 @param path - {string}
 */
function deleteFolderRecursive (path) {
  if (existsSync(path)) {
    readdirSync(path).forEach(file => {
      const curPath = join(path, file)

      if (lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath)
      } else {
        unlinkSync(curPath)
      }
    })

    rmdirSync(path)
  }
}

module.exports = {
  uppercaseFirst,
  deleteFolderRecursive,
}
