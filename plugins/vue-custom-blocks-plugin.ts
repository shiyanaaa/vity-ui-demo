import fs from 'fs'
import path from 'path';
import { baseParse } from '@vue/compiler-core'
const mdRelationMap = new Map<string, string>();
const vitePluginVue = {
  name: 'preview',
  transform(code: any, id: string) {
    if (!/\/src\/page\/preview\/*\/.*\.preview\.vue/g.test(id) || !/vue&type=preview/.test(id)) {
      return
    }
    let tempPath = id.match(/\/src\/page\/preview\/.*\.preview\.vue/g)
    if (!tempPath) return
    let path1 = `.${tempPath[0]}`
    const file = fs.readFileSync(path1).toString()

    const parsed = baseParse(file).children.find((n: any) => n.tag === 'preview')
    if (!parsed) {
      return `export default function (Component) {
      }`
    }
    let title = ''
    if (parsed.loc.source) title = parsed.loc.source.replaceAll('preview>', 'div>')

    const main = file.split(parsed.loc.source).join('').trim()
    // 记录引入当前 md 文件的 vue 文件 id
    const mdFilePath=id.split('?')[0]
    mdRelationMap.set(mdFilePath, id);
    return `export default function (Component) {
      Component.__sourceCode = ${JSON.stringify(main)}
      Component.__sourceCodeTitle = ${JSON.stringify(title)}
    }`.trim()
  }
}

export default vitePluginVue
