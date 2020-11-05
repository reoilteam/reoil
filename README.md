# reoil
 🧡Reoil is a low-level react original component library which can be used as wapper to replace \<div\> \<img\> etc, also can be wrapper for any other components."

---

# Development Build

## 1. Clone or Download
`git clone git@github.com:reoilteam/reoil.git`

## 2. Yarn or Npm install packages
`yarn install`

## 3. Scripts

- build:ts - build and export into `/dist` (not recommend)
- build:types - build and export `*.d.ts` declaration files into `/dist` only
- build:babel - build and export separated `.ts` files into `/dist` (without export declaration files)
- build - build and export declaration files and separated files info `/dist`
- build:rollup - build and export declaration files and one single bundled `index.js` (recommend)
- start - watch build in babel way
- start:rollup - watch build in rollup way (recommend)


I would use:

`yarn start:rollup`

## 4. Local Register
In order to use this library in local, register it in local(current path at `reoil`) :

`yarn link`

## 5. Demo & Local Import
In order to develop with acctual demo, you can create an React demo with CRA at any place:

`yarn create create-react-app reoil-demo`

Then link the local library which registered before:

`yarn link reoil`

Delete `react` folder in `node_modules` handly(important):


## 🍺 Now, you are good to go!

