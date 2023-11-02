import{d as i,r as n,c as o,a as e,f as c,t as l,u as p,e as r,o as a}from"./index-40fa1f0c.js";const u="vity-ui-demo",d="0.0.0",v={dev:"vite",build:'run-p type-check "build-only {@}" --',preview:"vite preview","build-only":"vite build","type-check":"vue-tsc --noEmit -p tsconfig.app.json --composite false",lint:"eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore",format:"prettier --write src/"},h={"@highlightjs/vue-plugin":"^2.1.0","highlight.js":"^11.9.0",pinia:"^2.1.6",sass:"^1.68.0","vity-ui":"^1.0.29",vue:"^3.3.4","vue-router":"^4.2.4"},_={"@rushstack/eslint-patch":"^1.3.3","@tsconfig/node18":"^18.2.2","@types/node":"^18.17.17","@vitejs/plugin-vue":"^4.3.4","@vue/eslint-config-prettier":"^8.0.0","@vue/eslint-config-typescript":"^12.0.0","@vue/tsconfig":"^0.4.0",eslint:"^8.49.0","eslint-plugin-vue":"^9.17.0","npm-run-all2":"^6.0.6",prettier:"^3.0.3",typescript:"~5.2.0",vite:"^4.4.9","vue-tsc":"^1.8.11"},m={name:u,version:d,private:!0,scripts:v,dependencies:h,devDependencies:_},g={class:"demo"},y=e("h1",null,"安装",-1),f=e("h2",null,"环境支持",-1),j=e("p",null,"Vity UI 可以在支持 ES2018 和 ResizeObserver 的浏览器上运行。 如果您确实需要支持旧版本的浏览器，请自行添加 Babel 和相应的 Polyfill 。",-1),V=e("p",null,"由于 Vue 3 不再支持 IE11，Vity UI 也不再支持 IE 浏览器。",-1),b=e("h3",null,"版本",-1),x=e("p",null,"Vity UI 目前还处于快速开发迭代中。",-1),k=e("h2",null,"使用包管理器",-1),I=e("p",null,"我们建议您使用包管理器（如 NPM、Yarn 或 pnpm）安装 Vity UI，然后您就可以使用打包工具，例如 Vite 或 webpack。",-1),E={class:"code"},N=`# NPM
$ npm install vity-ui --save

# Yarn
$ yarn add vity-ui

# pnpm
$ pnpm install vity-ui`,P=i({__name:"installation",setup(w){const t=m.dependencies["vity-ui"];return(B,U)=>{const s=n("highlightjs");return a(),o("div",g,[y,f,j,V,b,x,e("p",null,[c("当前最新版本："),e("strong",null,l(p(t)),1)]),k,I,e("div",E,[r(s,{autodetect:"",code:N})])])}}});export{P as default};