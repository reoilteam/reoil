# reoil
 🧡Reoil is a low-level react original component library which can be used as wapper to replace \<div\> \<img\> etc, also can be wrapper for any other components."

 Offical Website is designing, coming soon ...

# Usage
We will release clear official documents in the coming months ...

## Components
- Box
- Avatar
- Image
- Copy
- Meta

## Example usage:
Center all child elements
```jsx
<Box center>...</Box>
```

Right bottom all child elements
```jsx
<Box right bottom>...</Box>
```

Draw a button with Box
```jsx
<Box padding={12} borderRadius={8} bg='blue' color='white' pointer>Click Me</Box>
```

Customize a button component with Box
```jsx
const MyButton = ({children})=>{
  return <Box padding={12} borderRadius={8} bg='blue' color='white' pointer>{children}</Box>
}
```

Random or specify Avatar
```jsx
<Avatar src='random' />
// or specify src
<Avatar src='someurl' />
```

Image
```jsx
<Image src='random' width={200} height={100} fit='contain' /> 
```

Some behavior component:

Click to Copy
```jsx
<Copy>some text</Copy>
// 'some text' will copy
```
```jsx
<Copy>
  <h1>Hello world</h1>
  <p>Nice to meet you</p>
</Copy>
/* 
  'Hello world
  Nice to meet you' will copy
*/
```


# Development Build
If you are interested in this library, you are welcome to build it together.

Source Code [https://github.com/reoilteam/reoil](https://github.com/reoilteam/reoil).


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

