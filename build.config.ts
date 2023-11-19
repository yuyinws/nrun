import { defineBuildConfig } from 'unbuild'
import pkg from './package.json'

const deps = Object.keys(pkg.dependencies)
export default defineBuildConfig({
  entries: [
    'src/index',
  ],
  clean: true,
  rollup: {
    emitCJS: true,
  },
  externals: deps,
})
