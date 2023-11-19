import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { cwd } from 'node:process'

const DIR_DIST = typeof __dirname !== 'undefined'
  ? __dirname
  : dirname(fileURLToPath(import.meta.url))

export const PKG_DIR = resolve(DIR_DIST, `${cwd()}/package.json`)
