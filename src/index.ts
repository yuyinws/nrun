import { readFile } from 'node:fs/promises'
import { exit } from 'node:process'
import { execSync } from 'node:child_process'
import {
  cancel,
  isCancel,
  select,
} from '@clack/prompts'
import { destr } from 'destr'
import { detect, parseNr } from '@antfu/ni'
import { PKG_DIR } from './utils/dir'
import type { PKG } from './types'

async function main() {
  const pkgContent = await readFile(PKG_DIR, 'utf-8')
  const pkg = destr<PKG>(pkgContent)

  if (pkg.scripts) {
    const options = Object.entries(pkg.scripts).map(([key, value]) => {
      return {
        value: key,
        label: key,
        hint: value,
      }
    })
    const script = await select({
      message: 'Pick a script.',
      options,
    }) as string

    if (isCancel(script)) {
      cancel('Operation cancelled')
      return exit(0)
    }

    const agent = await detect()
    const command = await parseNr(agent!, [script])

    execSync(command!, { stdio: 'inherit' })
  }
  else {
    cancel('Operation cancelled')
    return exit(0)
  }
}

main().catch(console.error)
