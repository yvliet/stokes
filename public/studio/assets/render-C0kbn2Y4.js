import{r as e}from"./rolldown-runtime-DAXXjFlN.js";import{_ as t,b as n,d as r,f as i,g as a,h as o,i as s,m as c,n as l,p as u,t as d,u as f,v as p,x as m,y as h}from"./renderer-gTDXmZ77.js";import{i as g}from"./schema-BZGdtqWM.js";var _=e({createElement:()=>v,default:()=>y});function v(e,t,...n){let r=n.flat();return{type:e,props:{...t,children:r.length>0?r:void 0}}}var y={createElement:v},b=g;function x(e){return e.replace(/<!--[\s\S]*?-->/g,``)}function S(e){let t=[];return w(e,t),t}var C=new Set([...b,`viewBox`,`body`]);function w(e,t){let n=e.type===`svg`?C:b;for(let r of Object.keys(e.props))n.has(r)||t.push(`Unsupported prop "${r}" on <${e.type}> is ignored.`);if(e.type!==`svg`)for(let n of e.children)l(n)&&w(n,t)}function T(e){let s=x(e).trim(),l=`
    const __h = React.createElement
    const __frag = ''
    const Frame = 'frame', Text = 'text', Rectangle = 'rectangle', Ellipse = 'ellipse'
    const Line = 'line', Star = 'star', Polygon = 'polygon', Vector = 'vector'
    const Group = 'group', Section = 'section', View = 'frame', Rect = 'rectangle'
    const Component = 'component', ComponentSet = 'component-set', Instance = 'instance'
    const Icon = 'icon'
    const svg = 'svg'
    const dropShadow = __helpers.dropShadow
    const innerShadow = __helpers.innerShadow
    const layerBlur = __helpers.layerBlur
    const backgroundBlur = __helpers.backgroundBlur
    const foregroundBlur = __helpers.foregroundBlur
    const solid = __helpers.solid
    const gradient = __helpers.gradient
    const linearGradient = __helpers.linearGradient
    const radialGradient = __helpers.radialGradient
    const angularGradient = __helpers.angularGradient
    const diamondGradient = __helpers.diamondGradient
    const __varSymbol = Symbol.for('open-pencil.variable')
    const designVar = (def, value) => typeof def === 'string'
      ? ({ [__varSymbol]: true, id: def, name: def, value })
      : ({ [__varSymbol]: true, id: def.id, name: def.name ?? def.id ?? '', value: def.value })
    const defineVars = (vars) => Object.fromEntries(
      Object.entries(vars).map(([key, def]) => [key, designVar(def)])
    )
  `,d={transforms:[`typescript`,`jsx`],jsxPragma:`__h`,jsxFragmentPragma:`__frag`,production:!0},g;try{g=m(`${l}\nreturn function __render() { return ${s} }`,d).code}catch{g=m(`${l}\nreturn function __render() { return <>${s}</> }`,d).code}return Function(`React`,`__helpers`,g)(_,{backgroundBlur:a,dropShadow:t,foregroundBlur:p,innerShadow:h,layerBlur:n,angularGradient:f,diamondGradient:r,gradient:i,linearGradient:u,radialGradient:c,solid:o})}async function E(e,t,n){let r=s(v(T(t),null));if(!r)throw Error(`JSX must return a Figma element (Frame, Text, etc)`);let i=S(r);if(r.type===``&&r.children.length>0){let t=[];for(let i of r.children)typeof i!=`string`&&t.push(await d(e,i,n));if(t.length===0)throw Error(`JSX must return a Figma element (Frame, Text, etc)`);return i.length>0&&(t[0].warnings=i),t}let a=await d(e,r,n);return i.length>0&&(a.warnings=i),[a]}export{E as renderJSX};