import fs from 'fs'
import { baseParse } from '@vue/compiler-core'
const vitePluginVue = {
  name: 'preview',
  transform(code: any, id: string) {
    if (!/\/src\/page\/preview\/*\/.*\.preview\.vue/g.test(id) || !/vue&type=preview/.test(id)) {
      return
    }
    let path = `.${id.match(/\/src\/page\/preview\/.*\.preview\.vue/g)[0]}`
    const file = fs.readFileSync(path).toString()
    // console.log(baseParse(file).children);

    const parsed = baseParse(file).children.find((n) => n.tag === 'preview')
    let title = ''
    if (parsed.loc.source) title = parsed.loc.source.replaceAll('preview>', 'div>')

    const main = file.split(parsed.loc.source).join('').trim()

    return `export default function (Component) {
      Component.__sourceCode = ${JSON.stringify(main)}
      Component.__sourceCodeTitle = ${JSON.stringify(title)}
    }`.trim()
  }
}

export default vitePluginVue
