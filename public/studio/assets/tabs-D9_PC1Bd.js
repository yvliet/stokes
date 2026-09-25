const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/raster-DUFNQWig.js","assets/raster-BP8v4aFS.js","assets/rolldown-runtime-DAXXjFlN.js","assets/constants-BGqTg5bd.js","assets/preload-helper-Cp6YSlKl.js","assets/src-BpK0CGi8.js","assets/instances-Ch1o_bAD.js","assets/base64-DuPE8PIm.js","assets/direction-CFPqcpYk.js","assets/core-DQRVmAs7.js","assets/core-B2kSHnWX.js","assets/pdf-DiAVt2Lm.js","assets/svg-NaW22dHB.js","assets/color-ClUIseai.js","assets/pptx-DU5bz93N.js","assets/native-CX6AVU5Y.js","assets/dist-js-Bz2gloeq.js","assets/files-D74Vx-5Z.js","assets/common-CqT9-or4.js","assets/dist-js-DJskp-xP.js","assets/path-CRoeD_uf.js","assets/dist-js-DF8XeBgD.js","assets/http-CB2UyfyP.js","assets/http-zic1NY1Y.js","assets/cors-ca2EdqPy.js","assets/cors-O_UQXI8H.js","assets/constants-WnIu5XdT.js"])))=>i.map(i=>d[i]);
import{a as e,o as t,t as n}from"./rolldown-runtime-DAXXjFlN.js";import{C as r,H as i,O as a,T as o,U as s,X as c,Y as l,Z as u,f as d,k as f,p}from"./constants-BGqTg5bd.js";import{t as m}from"./preload-helper-Cp6YSlKl.js";import{n as h,t as g}from"./empty-node-module-BqG5TsRn.js";import{i as _,n as v,r as y,t as b}from"./browser-BRv6VcMz.js";import{t as x}from"./svgpath-Bz04YI1x.js";import{Dn as S,H as C,Ht as w,J as T,an as E,g as D,gt as O,pn as k,vn as A,xn as j,yn as M}from"./runtime-core.esm-bundler-CDDBpkXG.js";import{B as ee,G as te,X as ne,Z as re,b as ie,q as ae}from"./dist-DGcMkRuv.js";import{c as oe,o as se}from"./src-BpK0CGi8.js";import{A as ce,C as le,E as N,F as ue,I as de,L as fe,M as pe,P as me,R as he,S as ge,T as _e,U as ve,_ as ye,a as be,c as P,f as F,h as xe,j as Se,k as Ce,l as we,m as Te,p as Ee,q as De,t as Oe,v as ke,w as Ae}from"./raster-BP8v4aFS.js";import{A as je,B as Me,C as Ne,D as Pe,E as Fe,F as Ie,G as Le,H as Re,J as ze,M as Be,N as Ve,O as He,P as Ue,R as We,S as Ge,T as Ke,U as qe,V as Je,W as Ye,Z as Xe,_ as Ze,b as Qe,c as $e,g as et,h as tt,m as nt,p as rt,q as it,s as at,t as ot,w as st,x as ct,y as lt}from"./instances-Ch1o_bAD.js";import{c as I,o as ut,r as dt}from"./color-ClUIseai.js";import{c as ft,d as pt,f as mt,l as ht,m as gt,o as _t,r as vt,t as yt,u as bt}from"./path-style-C0L3i00J.js";import{C as xt,_ as St,a as Ct,b as wt,c as Tt,d as L,f as Et,i as Dt,l as Ot,o as kt,p as At,r as jt,s as Mt,t as Nt,u as Pt,v as Ft,w as R,y as It}from"./base64-DuPE8PIm.js";import{C as Lt,S as Rt,d as zt,l as z,m as Bt,o as Vt,r as Ht,s as Ut,u as Wt,w as Gt,x as Kt}from"./direction-CFPqcpYk.js";import{a as qt,i as Jt,n as Yt,r as B,t as V}from"./layout-CCe1oM-E.js";import{r as Xt,t as Zt}from"./random-gYa_nnkk.js";import{C as Qt,b as $t,c as en,d as tn,l as nn,m as rn}from"./dist-AOqf_q4e.js";import{t as an}from"./svg-NaW22dHB.js";import{c as on,l as sn,u as cn}from"./recorder-BEHCE2i7.js";import{h as ln,l as un,m as dn,p as fn,t as pn,u as mn}from"./app-CCpl4DJy.js";import{a as H,i as hn}from"./ui-DVF8UlVD.js";import{a as gn,c as _n,s as vn,t as yn}from"./files-D74Vx-5Z.js";import{n as bn,r as xn,t as Sn}from"./cors-O_UQXI8H.js";import{t as Cn}from"./http-zic1NY1Y.js";import{r as wn}from"./active-store-BsKT5-aD.js";function Tn(e){return e!=null}function En(){return{changedNodeIds:new Set,previousParentIds:new Set,currentParentIds:new Set,createdNodeIds:new Set,deletedNodeIds:new Set}}async function Dn(e,t){let n=En(),r=e.onNodeEvents({created:e=>{n.createdNodeIds.add(e.id),n.changedNodeIds.add(e.id),e.parentId&&n.currentParentIds.add(e.parentId)},updated:e=>n.changedNodeIds.add(e),deleted:(e,t)=>{t&&n.previousParentIds.add(t),n.deletedNodeIds.add(e),n.changedNodeIds.add(e)},reparented:(e,t,r)=>{n.changedNodeIds.add(e),t&&n.previousParentIds.add(t),n.currentParentIds.add(r)},reordered:(e,t,r,i)=>{n.changedNodeIds.add(e),i&&i!==t&&n.previousParentIds.add(i),n.currentParentIds.add(t)}});try{return{result:await t(),impact:n}}finally{r()}}function On(e){return[...new Set([...e.changedNodeIds,...e.previousParentIds,...e.currentParentIds])]}var kn=t(x(),1);function An(e){let t=2166136261,n=2166136261,r=2166136261,i=2166136261,a=2166136261;for(let o=0;o<e.length;o++){let s=e[o];switch(o%5){case 0:t^=s,t=Math.imul(t,16777619)>>>0;break;case 1:n^=s,n=Math.imul(n,16777619)>>>0;break;case 2:r^=s,r=Math.imul(r,16777619)>>>0;break;case 3:i^=s,i=Math.imul(i,16777619)>>>0;break;default:a^=s,a=Math.imul(a,16777619)>>>0;break}}return a=Math.imul(a^e.length,16777619)>>>0,[t,n,r,i,a].map(e=>e.toString(16).padStart(8,`0`)).join(``)}var jn=.01,Mn=1024;function Nn(e){return Math.min(Mn,Math.max(jn,e))}var Pn=200,Fn=class{undoStack=[];redoStack=[];batches=[];limit;onChange;constructor(e={}){this.limit=e.limit??Pn,this.onChange=e.onChange}apply(e){this.execute(e)}execute(e){e.forward(),this.record(e)}push(e){this.record(e)}record(e){let t=this.currentBatch;if(t){t.entries.push(e);return}this.pushUndoEntry(e)}undo(){let e=this.undoStack.pop();return e?(e.inverse(),this.redoStack.push(e),this.onChange?.(),e.label):null}redo(){let e=this.redoStack.pop();return e?(e.forward(),this.undoStack.push(e),this.onChange?.(),e.label):null}beginBatch(e,t){this.batches.push({label:e,entries:[],coalesceKey:t})}commitBatch(){let e=this.batches.pop();if(!e||e.entries.length===0)return;let t=this.createBatchEntry(e),n=this.currentBatch;n?n.entries.push(t):this.pushUndoEntry(t)}runBatch(e,t,n){this.beginBatch(e,n);try{let e=t();return this.commitBatch(),e}catch(e){throw this.rollbackBatch(),e}}rollbackBatch(){let e=this.batches.pop();if(e)for(let t of e.entries.toReversed())t.inverse()}discardBatches(){this.batches=[]}clear(){this.undoStack=[],this.redoStack=[],this.discardBatches(),this.onChange?.()}get isBatching(){return this.batches.length>0}get canUndo(){return this.undoStack.length>0}get canRedo(){return this.redoStack.length>0}get undoLabel(){return this.undoStack.at(-1)?.label??null}get redoLabel(){return this.redoStack.at(-1)?.label??null}get currentBatch(){return this.batches.at(-1)??null}createBatchEntry(e){return{label:e.label,forward:()=>e.entries.forEach(e=>e.forward()),inverse:()=>e.entries.toReversed().forEach(e=>e.inverse()),coalesceKey:e.coalesceKey}}pushUndoEntry(e){let t=this.undoStack.at(-1);e.coalesceKey&&t?.coalesceKey===e.coalesceKey?this.undoStack[this.undoStack.length-1]={...e,inverse:t.inverse}:this.undoStack.push(e),this.redoStack=[],this.trimUndoStack(),this.onChange?.()}trimUndoStack(){if(!Number.isFinite(this.limit)||this.limit<=0)return;let e=this.undoStack.length-this.limit;e>0&&this.undoStack.splice(0,e)}},In=class{capacity;available;deferredTasks=[];constructor(e){this.capacity=e,this.available=e}async acquire(){if(this.available>0){this.available--;return}return new Promise(e=>{this.deferredTasks.push(e)})}release(){let e=this.deferredTasks.shift();if(e!=null){e();return}this.available<this.capacity&&this.available++}};function Ln(e,t){let n=new In(t);return async function(...t){try{return await n.acquire(),await e.apply(this,t)}finally{n.release()}}}function Rn(e,t){let n={};for(let r=0;r<t.length;r++){let i=t[r];Object.hasOwn(e,i)&&(n[i]=e[i])}return n}var zn=Ue.DOMException===void 0?Error:Ue.DOMException,Bn=class extends zn{constructor(e=`The operation was timed out`){super(e)}};function Vn(e,{signal:t}={}){return new Promise((n,r)=>{let i=()=>{clearTimeout(a)};if(t?.aborted)return;let a=setTimeout(()=>{t?.removeEventListener(`abort`,i),r(new Bn)},e);t?.addEventListener(`abort`,i,{once:!0})})}async function Hn(e,t,{signal:n}={}){return Promise.race([e(),Vn(t,{signal:n})])}function Un(e){switch(e){case`FRAME`:return`FRAME`;case`RECTANGLE`:return`RECTANGLE`;case`ROUNDED_RECTANGLE`:return`ROUNDED_RECTANGLE`;case`ELLIPSE`:return`ELLIPSE`;case`TEXT`:return`TEXT`;case`LINE`:return`LINE`;case`STAR`:return`STAR`;case`POLYGON`:return`REGULAR_POLYGON`;case`VECTOR`:return`VECTOR`;case`BOOLEAN_OPERATION`:return`BOOLEAN_OPERATION`;case`GROUP`:return`FRAME`;case`SECTION`:return`SECTION`;case`COMPONENT`:return`SYMBOL`;case`COMPONENT_SET`:return`FRAME`;case`INSTANCE`:return`INSTANCE`;case`CONNECTOR`:return`CONNECTOR`;case`SHAPE_WITH_TEXT`:return`SHAPE_WITH_TEXT`;default:return`RECTANGLE`}}function Wn(e){let t=Math.floor(e/94),n=String.fromCharCode(33+e%94);return`~`.repeat(t)+n}function Gn(e){let t=e.flipX?-1:1,n=Math.cos(e.rotation*Math.PI/180),r=Math.sin(e.rotation*Math.PI/180),i=n*t,a=-r*t,o=r,s=n,c=e.width/2,l=e.height/2;return{m00:i,m01:a,m02:e.x+c-i*c-a*l,m10:o,m11:s,m12:e.y+l-o*c-s*l}}function Kn(e){if(!e||typeof e!=`object`)return!1;let t=e;return Number.isFinite(t.sessionID)&&Number.isFinite(t.localID)}function qn(e,t){return e?`fig-guide:${e.sessionID}:${e.localID}`:`guide:${t}`}function Jn(e){if(!Array.isArray(e))return[];let t=[];for(let[n,r]of e.entries()){if(!r||typeof r!=`object`)continue;let e=r;if(typeof e.offset!=`number`||!Number.isFinite(e.offset))continue;let i=Kn(e.guid)?e.guid:void 0;e.axis===`X`?t.push({id:qn(i,n),axis:`x`,position:e.offset,...i?{figGuid:i}:{}}):e.axis===`Y`&&t.push({id:qn(i,n),axis:`y`,position:e.offset,...i?{figGuid:i}:{}})}return t}function Yn(e){return e.map(e=>({axis:e.axis===`x`?`X`:`Y`,offset:e.position,...e.figGuid?{guid:e.figGuid}:{}}))}function U(e){return`${e.sessionID}:${e.localID}`}function Xn(e){let t=e.match(/^(?:VariableID:|VariableCollectionId:)?(\d+):(\d+)$/);if(t)return{sessionID:Number.parseInt(t[1],10),localID:Number.parseInt(t[2],10)};let[n,r]=e.split(`:`);return{sessionID:Number.parseInt(n,10),localID:Number.parseInt(r,10)}}function Zn(e){let t={};for(let n of e.split(`,`).map(e=>e.trim())){let e=n.indexOf(`=`);e!==-1&&(t[n.slice(0,e).trim()]=n.slice(e+1).trim())}return t}function Qn(e){return Object.entries(e).map(([e,t])=>`${e}=${t}`).join(`, `)}function $n(e,t){return(e?.glyphs??[]).map(e=>e.commandsBlob===void 0?null:{commandsBlob:t[e.commandsBlob],x:e.position.x,y:e.position.y,fontSize:e.fontSize,rotation:e.rotation}).filter(e=>!!e)}var er=new Int32Array(1),tr=new Float32Array(er.buffer),nr=new TextDecoder,rr=class{_data;_index;length;constructor(e){if(e&&!(e instanceof Uint8Array))throw Error(`Must initialize a ByteBuffer with a Uint8Array`);this._data=e||new Uint8Array(256),this._index=0,this.length=e?e.length:0}get offset(){return this._index}set offset(e){this._index=e}toUint8Array(){return this._data.subarray(0,this.length)}readByte(){return this._data[this._index++]}readByteArray(){let e=this.readVarUint(),t=this._index;return this._index=t+e,this._data.slice(t,t+e)}skipByteArray(){let e=this.readVarUint();this._index+=e}readVarFloat(){let e=this._index,t=this._data,n=t[e];if(n===0)return this._index=e+1,0;let r=n|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24;return this._index=e+4,r=r<<23|r>>>9,er[0]=r,tr[0]}readVarUint(){let e=this._data,t=this._index,n=e[t++],r=n&127;return n<128||(n=e[t++],r|=(n&127)<<7,n<128)||(n=e[t++],r|=(n&127)<<14,n<128)||(n=e[t++],r|=(n&127)<<21,n<128)?(this._index=t,r):(n=e[t++],r|=(n&127)<<28,this._index=t,r>>>0)}readVarInt(){let e=this.readVarUint()|0;return e&1?~(e>>>1):e>>>1}readVarUint64(){let e=BigInt(0),t=BigInt(0),n=BigInt(7),r=this.readByte();for(;r&128&&t<56;)e|=BigInt(r&127)<<t,t+=n,r=this.readByte();return e|=BigInt(r)<<t,e}readVarInt64(){let e=this.readVarUint64(),t=BigInt(1),n=e&t;return e>>=t,n?~e:e}readString(){let e=this._index,t=this.findStringTerminator(e);return this._index=t+1,nr.decode(this._data.subarray(e,t))}skipString(){this._index=this.findStringTerminator(this._index)+1}findStringTerminator(e){let t=this._data,n=e;for(;n<t.length&&t[n]!==0;)n++;if(n>=t.length)throw Error(`Unterminated string in Kiwi message`);return n}_growBy(e){if(this.length+e>this._data.length){let t=new Uint8Array(this.length+e<<1);t.set(this._data),this._data=t}this.length+=e}writeByte(e){let t=this.length;this._growBy(1),this._data[t]=e}writeByteArray(e){this.writeVarUint(e.length);let t=this.length;this._growBy(e.length),this._data.set(e,t)}writeVarFloat(e){let t=this.length;tr[0]=e;let n=er[0];if(n=n>>>23|n<<9,!(n&255)){this.writeByte(0);return}this._growBy(4);let r=this._data;r[t]=n,r[t+1]=n>>8,r[t+2]=n>>16,r[t+3]=n>>24}writeVarUint(e){if(e<0||e>4294967295)throw Error(`Outside uint range: `+e);do{let t=e&127;e>>>=7,this.writeByte(e?t|128:t)}while(e)}writeVarInt(e){if(e<-2147483648||e>2147483647)throw Error(`Outside int range: `+e);this.writeVarUint((e<<1^e>>31)>>>0)}writeVarUint64(e){if(typeof e==`string`)e=BigInt(e);else if(typeof e!=`bigint`)throw Error(`Expected bigint but got ${typeof e}: ${String(e)}`);if(e<0||e>BigInt(`0xFFFFFFFFFFFFFFFF`))throw Error(`Outside uint64 range: `+e);let t=BigInt(127),n=BigInt(7);for(let r=0;e>t&&r<8;r++)this.writeByte(Number(e&t)|128),e>>=n;this.writeByte(Number(e))}writeVarInt64(e){if(typeof e==`string`)e=BigInt(e);else if(typeof e!=`bigint`)throw Error(`Expected bigint but got ${typeof e}: ${String(e)}`);if(e<-BigInt(`0x8000000000000000`)||e>BigInt(`0x7FFFFFFFFFFFFFFF`))throw Error(`Outside int64 range: `+e);let t=BigInt(1);this.writeVarUint64(e<0?~(e<<t):e<<t)}writeString(e){let t;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(n+1===e.length||r<55296||r>=56320)t=r;else{let i=e.charCodeAt(++n);t=(r<<10)+i+-56613888}if(t===0)throw Error(`Cannot encode a string containing the null character`);t<128?this.writeByte(t):(t<2048?this.writeByte(t>>6&31|192):(t<65536?this.writeByte(t>>12&15|224):(this.writeByte(t>>18&7|240),this.writeByte(t>>12&63|128)),this.writeByte(t>>6&63|128)),this.writeByte(t&63|128))}this.writeByte(0)}};function W(e){return JSON.stringify(e)}function G(e,t,n){var r=Error(e);throw r.line=t,r.column=n,r}var ir=[`bool`,`byte`,`float`,`int`,`int64`,`string`,`uint`,`uint64`],ar=[`ByteBuffer`,`package`],or=/((?:-|\b)\d+\b|[=;{}]|\[\]|\[deprecated\]|\b[A-Za-z_][A-Za-z0-9_]*\b|\/\/.*|\s+)/g,sr=/^[A-Za-z_][A-Za-z0-9_]*$/,cr=/^\/\/.*|\s+$/,lr=/^=$/,ur=/^$/,dr=/^;$/,fr=/^-?\d+$/,pr=/^\{$/,mr=/^\}$/,hr=/^\[\]$/,gr=/^enum$/,_r=/^struct$/,vr=/^message$/,yr=/^package$/,br=/^\[deprecated\]$/;function xr(e){let t=e.split(or),n=[],r=0,i=0;for(let e=0;e<t.length;e++){let a=t[e];e&1?cr.test(a)||n.push({text:a,line:i+1,column:r+1}):a!==``&&G(`Syntax error `+W(a),i+1,r+1);let o=a.split(`
`);o.length>1&&(r=0),i+=o.length-1,r+=o[o.length-1].length}return n.push({text:``,line:i,column:r}),n}function Sr(e){function t(){return e[s]}function n(e){return e.test(t().text)?(s++,!0):!1}function r(e,r){if(!n(e)){let e=t();G(`Expected `+r+` but found `+W(e.text),e.line,e.column)}}function i(){let e=t();G(`Unexpected token `+W(e.text),e.line,e.column)}let a=[],o=null,s=0;for(n(yr)&&(o=t().text,r(sr,`identifier`),r(dr,`";"`));s<e.length&&!n(ur);){let e=[],o;n(gr)?o=`ENUM`:n(_r)?o=`STRUCT`:n(vr)?o=`MESSAGE`:i();let s=t();for(r(sr,`identifier`),r(pr,`"{"`);!n(mr);){let i=null,a=!1,s=!1;o!==`ENUM`&&(i=t().text,r(sr,`identifier`),a=n(hr));let c=t();r(sr,`identifier`);let l=null;o!==`STRUCT`&&(r(lr,`"="`),l=t(),r(fr,`integer`),(l.text|0)+``!==l.text&&G(`Invalid integer `+W(l.text),l.line,l.column));let u=t();n(br)&&(o!==`MESSAGE`&&G(`Cannot deprecate this field`,u.line,u.column),s=!0),r(dr,`";"`),e.push({name:c.text,line:c.line,column:c.column,type:i,isArray:a,isDeprecated:s,value:l===null?e.length+1:l.text|0})}a.push({name:s.text,line:s.line,column:s.column,kind:o,fields:e})}return{package:o,definitions:a}}function Cr(e){let t=ir.slice(),n={};for(let r=0;r<e.definitions.length;r++){let i=e.definitions[r];t.includes(i.name)&&G(`The type `+W(i.name)+` is defined twice`,i.line,i.column),ar.includes(i.name)&&G(`The type name `+W(i.name)+` is reserved`,i.line,i.column),t.push(i.name),n[i.name]=i}for(let n=0;n<e.definitions.length;n++){let r=e.definitions[n],i=r.fields;if(r.kind===`ENUM`||i.length===0)continue;for(let e=0;e<i.length;e++){let n=i[e];t.includes(n.type)||G(`The type `+W(n.type)+` is not defined for field `+W(n.name),n.line,n.column)}let a=[];for(let e=0;e<i.length;e++){let t=i[e];a.includes(t.value)&&G(`The id for field `+W(t.name)+` is used twice`,t.line,t.column),t.value<=0&&G(`The id for field `+W(t.name)+` must be positive`,t.line,t.column),a.push(t.value)}}let r={},i=e=>{let t=n[e];if(t&&t.kind===`STRUCT`&&(r[e]===1&&G(`Recursive nesting of `+W(e)+` is not allowed`,t.line,t.column),r[e]!==2&&t)){r[e]=1;let n=t.fields;for(let e=0;e<n.length;e++){let t=n[e];t.isArray||i(t.type)}r[e]=2}return!0};for(let t=0;t<e.definitions.length;t++)i(e.definitions[t].name)}function wr(e){let t=Sr(xr(e));return Cr(t),t}function Tr(e){return e}function Er(e){return e}function Dr(e){return e}function Or(e,t){return Object.hasOwn(e,t)}function kr(e){let t=Object.values(e);for(let n=0;n<t.length;n++){let r=t[n];if(r.kind!==`ENUM`)for(let t=0;t<r.fields.length;t++){let n=r.fields[t],i=n.type;i===null&&G(`Invalid type null for field `+W(n.name),n.line,n.column),!ir.includes(i)&&!Or(e,i)&&G(`Invalid type `+W(i)+` for field `+W(n.name),n.line,n.column)}}}function Ar(e,t,n,r){switch(n){case`bool`:return!!r.readByte();case`byte`:return r.readByte();case`int`:return r.readVarInt();case`uint`:return r.readVarUint();case`float`:return r.readVarFloat();case`string`:return r.readString();case`int64`:return r.readVarInt64();case`uint64`:return r.readVarUint64();default:{let i=t[n];return i||G(`Invalid type `+W(n),0,0),i.kind===`ENUM`?Dr(e[i.name])[r.readVarUint()]:Tr(e[`decode`+i.name])(r)}}}function jr(e,t,n,r,i){switch(n){case`bool`:case`byte`:i.writeByte(r);return;case`int`:i.writeVarInt(r);return;case`uint`:i.writeVarUint(r);return;case`float`:i.writeVarFloat(r);return;case`string`:i.writeString(r);return;case`int64`:i.writeVarInt64(r);return;case`uint64`:i.writeVarUint64(r);return;default:{let a=t[n];if(a||G(`Invalid type `+W(n),0,0),a.kind===`ENUM`){let t=Dr(e[a.name])[r];if(t===void 0)throw Error(`Invalid value `+JSON.stringify(r)+` for enum `+W(a.name));i.writeVarUint(t)}else Er(e[`encode`+a.name])(r,i)}}}function Mr(e,t,n,r,i){let a=n.type;if(a===null&&G(`Invalid type null for field `+W(n.name),n.line,n.column),n.isArray){if(n.isDeprecated){if(a===`byte`)r.readByteArray();else{let n=r.readVarUint();for(;n-->0;)Ar(e,t,a,r)}return}if(a===`byte`){i[n.name]=r.readByteArray();return}let o=r.readVarUint(),s=Array.from({length:o});i[n.name]=s;for(let n=0;n<o;n++)s[n]=Ar(e,t,a,r);return}if(n.isDeprecated){Ar(e,t,a,r);return}i[n.name]=Ar(e,t,a,r)}function Nr(e,t,n,r,i){let a=n.type;if(a===null&&G(`Invalid type null for field `+W(n.name),n.line,n.column),n.isArray){if(a===`byte`){i.writeByteArray(r);return}let n=r;i.writeVarUint(n.length);for(let r=0;r<n.length;r++)jr(e,t,a,n[r],i);return}jr(e,t,a,r,i)}function Pr(e,t,n){let r=new Map;for(let e=0;e<n.fields.length;e++)r.set(n.fields[e].value,n.fields[e]);return function(i){let a=i instanceof e.ByteBuffer?i:new e.ByteBuffer(i),o={};if(n.kind===`MESSAGE`)for(;;){let n=a.readVarUint();if(n===0)return o;let i=r.get(n);if(!i)throw Error(`Attempted to parse invalid message`);Mr(e,t,i,a,o)}else{for(let r=0;r<n.fields.length;r++)Mr(e,t,n.fields[r],a,o);return o}}}function Fr(e,t,n){return function(r,i){let a=!i,o=i||new e.ByteBuffer;for(let i=0;i<n.fields.length;i++){let a=n.fields[i];if(a.isDeprecated)continue;let s=r[a.name];if(s!=null)n.kind===`MESSAGE`&&o.writeVarUint(a.value),Nr(e,t,a,s,o);else if(n.kind===`STRUCT`)throw Error(`Missing required field `+W(a.name))}if(n.kind===`MESSAGE`&&o.writeVarUint(0),a)return o.toUint8Array()}}function Ir(e){let t=Object.create(null);for(let n=0;n<e.definitions.length;n++)t[e.definitions[n].name]=e.definitions[n];kr(t);let n={ByteBuffer:rr};for(let r=0;r<e.definitions.length;r++){let i=e.definitions[r];switch(i.kind){case`ENUM`:{let e={};for(let t=0;t<i.fields.length;t++){let n=i.fields[t];e[n.name]=n.value,e[n.value]=n.name}n[i.name]=e;break}case`STRUCT`:case`MESSAGE`:n[`decode`+i.name]=Pr(n,t,i),n[`encode`+i.name]=Fr(n,t,i);break;default:G(`Invalid definition kind `+W(i.kind),i.line,i.column);break}}return n}var Lr=[`bool`,`byte`,`int`,`uint`,`float`,`string`,`int64`,`uint64`],Rr=[`ENUM`,`STRUCT`,`MESSAGE`];function zr(e){let t=e instanceof rr?e:new rr(e),n=t.readVarUint(),r=[];for(let e=0;e<n;e++){let e=t.readString(),n=t.readByte(),i=t.readVarUint(),a=[];for(let e=0;e<i;e++){let e=t.readString(),r=t.readVarInt(),i=!!(t.readByte()&1),o=t.readVarUint();a.push({name:e,line:0,column:0,type:Rr[n]===`ENUM`?null:r,isArray:i,isDeprecated:!1,value:o})}r.push({name:e,line:0,column:0,kind:Rr[n],fields:a})}for(let e=0;e<n;e++){let t=r[e].fields;for(let e=0;e<t.length;e++){let n=t[e],i=n.type;if(i!==null&&i<0){if(~i>=Lr.length)throw Error(`Invalid type `+i);n.type=Lr[~i]}else{if(i!==null&&i>=r.length)throw Error(`Invalid type `+i);n.type=i===null?null:r[i].name}}}return{package:null,definitions:r}}function Br(e){let t=new rr,n=e.definitions,r={};t.writeVarUint(n.length);for(let e=0;e<n.length;e++)r[n[e].name]=e;for(let e=0;e<n.length;e++){let i=n[e];t.writeString(i.name),t.writeByte(Rr.indexOf(i.kind)),t.writeVarUint(i.fields.length);for(let e=0;e<i.fields.length;e++){let n=i.fields[e],a=Lr.indexOf(n.type);t.writeString(n.name),t.writeVarInt(a===-1?r[n.type]:~a),t.writeByte(+!!n.isArray),t.writeVarUint(n.value)}}return t.toUint8Array()}function Vr(e){for(let t of e.definitions)Hr(t),t.kind===`ENUM`&&Ur(t)}function Hr(e){let t=new Set;for(let n of e.fields)t.has(n.name)&&G(`The field ${W(n.name)} is defined twice in ${W(e.name)}`,n.line,n.column),t.add(n.name)}function Ur(e){let t=new Set;for(let n of e.fields)t.has(n.value)&&G(`The enum value ${n.value} is used twice in ${W(e.name)}`,n.line,n.column),t.add(n.value)}var Wr=wr(`enum MessageType {\r
  JOIN_START = 0;\r
  NODE_CHANGES = 1;\r
  USER_CHANGES = 2;\r
  JOIN_END = 3;\r
  SIGNAL = 4;\r
  STYLE = 5;\r
  STYLE_SET = 6;\r
  JOIN_START_SKIP_RELOAD = 7;\r
  NOTIFY_SHOULD_UPGRADE = 8;\r
  UPGRADE_DONE = 9;\r
  UPGRADE_REFRESH = 10;\r
  SCENE_GRAPH_QUERY = 11;\r
  SCENE_GRAPH_REPLY = 12;\r
  DIFF = 13;\r
  CLIENT_BROADCAST = 14;\r
  JOIN_START_JOURNALED = 15;\r
  STREAM_START = 16;\r
  STREAM_END = 17;\r
  INTERACTIVE_SLIDE_CHANGE = 18;\r
  RECONNECT_SCENE_GRAPH_QUERY = 19;\r
  RECONNECT_SCENE_GRAPH_REPLY = 20;\r
  JOIN_END_INCREMENTAL_RECONNECT = 21;\r
  NODE_STATUS_CHANGE = 22;\r
  CLIENT_RENDERED = 23;\r
  BUZZ_APPROVAL_CHANGE = 24;\r
}\r
\r
enum Axis {\r
  X = 0;\r
  Y = 1;\r
}\r
\r
enum Access {\r
  READ_ONLY = 0;\r
  READ_WRITE = 1;\r
}\r
\r
enum NodePhase {\r
  CREATED = 0;\r
  REMOVED = 1;\r
}\r
\r
enum WindingRule {\r
  NONZERO = 0;\r
  ODD = 1;\r
}\r
\r
enum NodeType {\r
  NONE = 0;\r
  DOCUMENT = 1;\r
  CANVAS = 2;\r
  GROUP = 3;\r
  FRAME = 4;\r
  BOOLEAN_OPERATION = 5;\r
  VECTOR = 6;\r
  STAR = 7;\r
  LINE = 8;\r
  ELLIPSE = 9;\r
  RECTANGLE = 10;\r
  REGULAR_POLYGON = 11;\r
  ROUNDED_RECTANGLE = 12;\r
  TEXT = 13;\r
  SLICE = 14;\r
  SYMBOL = 15;\r
  INSTANCE = 16;\r
  STICKY = 17;\r
  SHAPE_WITH_TEXT = 18;\r
  CONNECTOR = 19;\r
  CODE_BLOCK = 20;\r
  WIDGET = 21;\r
  STAMP = 22;\r
  MEDIA = 23;\r
  HIGHLIGHT = 24;\r
  SECTION = 25;\r
  SECTION_OVERLAY = 26;\r
  WASHI_TAPE = 27;\r
  VARIABLE = 28;\r
  TABLE = 29;\r
  TABLE_CELL = 30;\r
  VARIABLE_SET = 31;\r
  SLIDE = 32;\r
  ASSISTED_LAYOUT = 33;\r
  INTERACTIVE_SLIDE_ELEMENT = 34;\r
  VARIABLE_OVERRIDE = 35;\r
  MODULE = 36;\r
  SLIDE_GRID = 37;\r
  SLIDE_ROW = 38;\r
  RESPONSIVE_SET = 39;\r
  CODE_COMPONENT = 40;\r
  TEXT_PATH = 41;\r
  CODE_INSTANCE = 42;\r
  CODE_LIBRARY = 43;\r
  CODE_FILE = 44;\r
  CODE_LAYER = 45;\r
  BRUSH = 46;\r
  MANAGED_STRING = 47;\r
  TRANSFORM = 48;\r
  CMS_RICH_TEXT = 49;\r
  REPEATER = 50;\r
  JSX = 51;\r
  EMBEDDED_PROTOTYPE = 52;\r
  REACT_FIBER = 53;\r
  RESPONSIVE_NODE_SET = 54;\r
  WEBPAGE = 55;\r
  KEYFRAME = 56;\r
  KEYFRAME_TRACK = 57;\r
  ANIMATION_PRESET_INSTANCE = 58;\r
  CODE_EMBED = 59;\r
  BINARY_FILE = 60;\r
  SPEC_BLOCK = 61;\r
  TOOL_INSTANCE = 62;\r
  CUSTOM_EFFECT_INSTANCE = 63;\r
  NATIVE_CODE_LAYER_INSTANCE = 64;\r
}\r
\r
enum ShapeWithTextType {\r
  SQUARE = 0;\r
  ELLIPSE = 1;\r
  DIAMOND = 2;\r
  TRIANGLE_UP = 3;\r
  TRIANGLE_DOWN = 4;\r
  ROUNDED_RECTANGLE = 5;\r
  PARALLELOGRAM_RIGHT = 6;\r
  PARALLELOGRAM_LEFT = 7;\r
  ENG_DATABASE = 8;\r
  ENG_QUEUE = 9;\r
  ENG_FILE = 10;\r
  ENG_FOLDER = 11;\r
  TRAPEZOID = 12;\r
  PREDEFINED_PROCESS = 13;\r
  SHIELD = 14;\r
  DOCUMENT_SINGLE = 15;\r
  DOCUMENT_MULTIPLE = 16;\r
  MANUAL_INPUT = 17;\r
  HEXAGON = 18;\r
  CHEVRON = 19;\r
  PENTAGON = 20;\r
  OCTAGON = 21;\r
  STAR = 22;\r
  PLUS = 23;\r
  ARROW_LEFT = 24;\r
  ARROW_RIGHT = 25;\r
  SUMMING_JUNCTION = 26;\r
  OR = 27;\r
  SPEECH_BUBBLE = 28;\r
  INTERNAL_STORAGE = 29;\r
}\r
\r
enum BlendMode {\r
  PASS_THROUGH = 0;\r
  NORMAL = 1;\r
  DARKEN = 2;\r
  MULTIPLY = 3;\r
  LINEAR_BURN = 4;\r
  COLOR_BURN = 5;\r
  LIGHTEN = 6;\r
  SCREEN = 7;\r
  LINEAR_DODGE = 8;\r
  COLOR_DODGE = 9;\r
  OVERLAY = 10;\r
  SOFT_LIGHT = 11;\r
  HARD_LIGHT = 12;\r
  DIFFERENCE = 13;\r
  EXCLUSION = 14;\r
  HUE = 15;\r
  SATURATION = 16;\r
  COLOR = 17;\r
  LUMINOSITY = 18;\r
}\r
\r
enum PaintType {\r
  SOLID = 0;\r
  GRADIENT_LINEAR = 1;\r
  GRADIENT_RADIAL = 2;\r
  GRADIENT_ANGULAR = 3;\r
  GRADIENT_DIAMOND = 4;\r
  IMAGE = 5;\r
  EMOJI = 6;\r
  VIDEO = 7;\r
  PATTERN = 8;\r
  NOISE = 9;\r
  CUSTOM = 10;\r
}\r
\r
enum ImageScaleMode {\r
  STRETCH = 0;\r
  FIT = 1;\r
  FILL = 2;\r
  TILE = 3;\r
}\r
\r
enum EffectType {\r
  INNER_SHADOW = 0;\r
  DROP_SHADOW = 1;\r
  FOREGROUND_BLUR = 2;\r
  BACKGROUND_BLUR = 3;\r
  REPEAT = 4;\r
  SYMMETRY = 5;\r
  GRAIN = 6;\r
  NOISE = 7;\r
  GLASS = 8;\r
  CUSTOM = 9;\r
}\r
\r
enum TextCase {\r
  ORIGINAL = 0;\r
  UPPER = 1;\r
  LOWER = 2;\r
  TITLE = 3;\r
  SMALL_CAPS = 4;\r
  SMALL_CAPS_FORCED = 5;\r
}\r
\r
enum TextDecoration {\r
  NONE = 0;\r
  UNDERLINE = 1;\r
  STRIKETHROUGH = 2;\r
}\r
\r
enum TextDecorationStyle {\r
  SOLID = 0;\r
  DOTTED = 1;\r
  WAVY = 2;\r
}\r
\r
enum LeadingTrim {\r
  NONE = 0;\r
  CAP_HEIGHT = 1;\r
}\r
\r
enum NumberUnits {\r
  RAW = 0;\r
  PIXELS = 1;\r
  PERCENT = 2;\r
}\r
\r
enum ConstraintType {\r
  MIN = 0;\r
  CENTER = 1;\r
  MAX = 2;\r
  STRETCH = 3;\r
  SCALE = 4;\r
  FIXED_MIN = 5;\r
  FIXED_MAX = 6;\r
}\r
\r
enum StrokeAlign {\r
  CENTER = 0;\r
  INSIDE = 1;\r
  OUTSIDE = 2;\r
  OFFSET = 3;\r
}\r
\r
enum StrokeCap {\r
  NONE = 0;\r
  ROUND = 1;\r
  SQUARE = 2;\r
  ARROW_LINES = 3;\r
  ARROW_EQUILATERAL = 4;\r
  DIAMOND_FILLED = 5;\r
  TRIANGLE_FILLED = 6;\r
  HIGHLIGHT = 7;\r
  WASHI_TAPE_1 = 8;\r
  WASHI_TAPE_2 = 9;\r
  WASHI_TAPE_3 = 10;\r
  WASHI_TAPE_4 = 11;\r
  WASHI_TAPE_5 = 12;\r
  WASHI_TAPE_6 = 13;\r
  CIRCLE_FILLED = 14;\r
  ERD_ZERO_OR_ONE = 15;\r
  ERD_EXACTLY_ONE = 16;\r
  ERD_ZERO_OR_MORE = 17;\r
  ERD_ONE_OR_MORE = 18;\r
  ERD_ONE = 19;\r
  ERD_MANY = 20;\r
}\r
\r
enum StrokeJoin {\r
  MITER = 0;\r
  BEVEL = 1;\r
  ROUND = 2;\r
}\r
\r
enum BooleanOperation {\r
  UNION = 0;\r
  INTERSECT = 1;\r
  SUBTRACT = 2;\r
  XOR = 3;\r
}\r
\r
enum TextAlignHorizontal {\r
  LEFT = 0;\r
  CENTER = 1;\r
  RIGHT = 2;\r
  JUSTIFIED = 3;\r
}\r
\r
enum TextAlignVertical {\r
  TOP = 0;\r
  CENTER = 1;\r
  BOTTOM = 2;\r
}\r
\r
enum MouseCursor {\r
  DEFAULT = 0;\r
  CROSSHAIR = 1;\r
  EYEDROPPER = 2;\r
  HAND = 3;\r
  PAINT_BUCKET = 4;\r
  PEN = 5;\r
  PENCIL = 6;\r
  MARKER = 7;\r
  ERASER = 8;\r
  HIGHLIGHTER = 9;\r
  LASSO = 10;\r
}\r
\r
enum VectorMirror {\r
  NONE = 0;\r
  ANGLE = 1;\r
  ANGLE_AND_LENGTH = 2;\r
}\r
\r
enum DashMode {\r
  CLIP = 0;\r
  STRETCH = 1;\r
}\r
\r
enum ImageType {\r
  PNG = 0;\r
  JPEG = 1;\r
  SVG = 2;\r
  PDF = 3;\r
  MP4 = 4;\r
  GIF = 5;\r
}\r
\r
enum ExportConstraintType {\r
  CONTENT_SCALE = 0;\r
  CONTENT_WIDTH = 1;\r
  CONTENT_HEIGHT = 2;\r
}\r
\r
enum LayoutGridType {\r
  MIN = 0;\r
  CENTER = 1;\r
  STRETCH = 2;\r
  MAX = 3;\r
}\r
\r
enum LayoutGridPattern {\r
  STRIPES = 0;\r
  GRID = 1;\r
}\r
\r
enum TextAutoResize {\r
  NONE = 0;\r
  WIDTH_AND_HEIGHT = 1;\r
  HEIGHT = 2;\r
}\r
\r
enum TextTruncation {\r
  DISABLED = 0;\r
  ENDING = 1;\r
}\r
\r
enum StyleSetType {\r
  PERSONAL = 0;\r
  TEAM = 1;\r
  CUSTOM = 2;\r
  FREQUENCY = 3;\r
  TEMPORARY = 4;\r
}\r
\r
enum StyleSetContentType {\r
  SOLID = 0;\r
  GRADIENT = 1;\r
  IMAGE = 2;\r
}\r
\r
enum StackMode {\r
  NONE = 0;\r
  HORIZONTAL = 1;\r
  VERTICAL = 2;\r
  GRID = 3;\r
}\r
\r
enum StackAlign {\r
  MIN = 0;\r
  CENTER = 1;\r
  MAX = 2;\r
  BASELINE = 3;\r
}\r
\r
enum StackCounterAlign {\r
  MIN = 0;\r
  CENTER = 1;\r
  MAX = 2;\r
  STRETCH = 3;\r
  AUTO = 4;\r
  BASELINE = 5;\r
}\r
\r
enum StackJustify {\r
  MIN = 0;\r
  CENTER = 1;\r
  MAX = 2;\r
  SPACE_EVENLY = 3;\r
  SPACE_BETWEEN = 4;\r
}\r
\r
enum GridChildAlign {\r
  AUTO = 0;\r
  MIN = 1;\r
  CENTER = 2;\r
  MAX = 3;\r
}\r
\r
enum GridAutoTracks {\r
  NONE = 0;\r
  ROWS = 1;\r
}\r
\r
enum StackSize {\r
  FIXED = 0;\r
  RESIZE_TO_FIT = 1;\r
  RESIZE_TO_FIT_WITH_IMPLICIT_SIZE = 2;\r
}\r
\r
enum StackPositioning {\r
  AUTO = 0;\r
  ABSOLUTE = 1;\r
}\r
\r
enum StackWrap {\r
  NO_WRAP = 0;\r
  WRAP = 1;\r
}\r
\r
enum StackCounterAlignContent {\r
  AUTO = 0;\r
  SPACE_BETWEEN = 1;\r
}\r
\r
enum ConnectionType {\r
  NONE = 0;\r
  INTERNAL_NODE = 1;\r
  URL = 2;\r
  BACK = 3;\r
  CLOSE = 4;\r
  SET_VARIABLE = 5;\r
  UPDATE_MEDIA_RUNTIME = 6;\r
  CONDITIONAL = 7;\r
  SET_VARIABLE_MODE = 8;\r
  OBJECT_ANIMATION = 9;\r
  UPDATE_ANIMATION_TIMELINE_STATE = 10;\r
}\r
\r
enum InteractionType {\r
  ON_CLICK = 0;\r
  AFTER_TIMEOUT = 1;\r
  MOUSE_IN = 2;\r
  MOUSE_OUT = 3;\r
  ON_HOVER = 4;\r
  MOUSE_DOWN = 5;\r
  MOUSE_UP = 6;\r
  ON_PRESS = 7;\r
  NONE = 8;\r
  DRAG = 9;\r
  ON_KEY_DOWN = 10;\r
  ON_VOICE = 11;\r
  ON_MEDIA_HIT = 12;\r
  ON_MEDIA_END = 13;\r
  MOUSE_ENTER = 14;\r
  MOUSE_LEAVE = 15;\r
}\r
\r
enum TransitionType {\r
  INSTANT_TRANSITION = 0;\r
  DISSOLVE = 1;\r
  FADE = 2;\r
  SLIDE_FROM_LEFT = 3;\r
  SLIDE_FROM_RIGHT = 4;\r
  SLIDE_FROM_TOP = 5;\r
  SLIDE_FROM_BOTTOM = 6;\r
  PUSH_FROM_LEFT = 7;\r
  PUSH_FROM_RIGHT = 8;\r
  PUSH_FROM_TOP = 9;\r
  PUSH_FROM_BOTTOM = 10;\r
  MOVE_FROM_LEFT = 11;\r
  MOVE_FROM_RIGHT = 12;\r
  MOVE_FROM_TOP = 13;\r
  MOVE_FROM_BOTTOM = 14;\r
  SLIDE_OUT_TO_LEFT = 15;\r
  SLIDE_OUT_TO_RIGHT = 16;\r
  SLIDE_OUT_TO_TOP = 17;\r
  SLIDE_OUT_TO_BOTTOM = 18;\r
  MOVE_OUT_TO_LEFT = 19;\r
  MOVE_OUT_TO_RIGHT = 20;\r
  MOVE_OUT_TO_TOP = 21;\r
  MOVE_OUT_TO_BOTTOM = 22;\r
  MAGIC_MOVE = 23;\r
  SMART_ANIMATE = 24;\r
  SCROLL_ANIMATE = 25;\r
}\r
\r
enum EasingType {\r
  IN_CUBIC = 0;\r
  OUT_CUBIC = 1;\r
  INOUT_CUBIC = 2;\r
  LINEAR = 3;\r
  IN_BACK_CUBIC = 4;\r
  OUT_BACK_CUBIC = 5;\r
  INOUT_BACK_CUBIC = 6;\r
  CUSTOM_CUBIC = 7;\r
  SPRING = 8;\r
  GENTLE_SPRING = 9;\r
  CUSTOM_SPRING = 10;\r
  SPRING_PRESET_ONE = 11;\r
  SPRING_PRESET_TWO = 12;\r
  SPRING_PRESET_THREE = 13;\r
  HOLD = 14;\r
}\r
\r
enum ScrollDirection {\r
  NONE = 0;\r
  HORIZONTAL = 1;\r
  VERTICAL = 2;\r
  BOTH = 3;\r
}\r
\r
enum ScrollContractedState {\r
  EXPANDED = 0;\r
  CONTRACTED = 1;\r
}\r
\r
struct GUID {\r
  uint sessionID;\r
  uint localID;\r
}\r
\r
struct Color {\r
  float r;\r
  float g;\r
  float b;\r
  float a;\r
}\r
\r
struct Vector {\r
  float x;\r
  float y;\r
}\r
\r
struct Rect {\r
  float x;\r
  float y;\r
  float w;\r
  float h;\r
}\r
\r
struct ColorStop {\r
  Color color;\r
  float position;\r
}\r
\r
message ColorStopVar {\r
  Color color = 1;\r
  VariableData colorVar = 2;\r
  float position = 3;\r
}\r
\r
struct Matrix {\r
  float m00;\r
  float m01;\r
  float m02;\r
  float m10;\r
  float m11;\r
  float m12;\r
}\r
\r
struct ParentIndex {\r
  GUID guid;\r
  string position;\r
}\r
\r
struct Number {\r
  float value;\r
  NumberUnits units;\r
}\r
\r
struct FontName {\r
  string family;\r
  string style;\r
  string postscript;\r
}\r
\r
enum FontVariantNumericFigure {\r
  NORMAL = 0;\r
  LINING = 1;\r
  OLDSTYLE = 2;\r
}\r
\r
enum FontVariantNumericSpacing {\r
  NORMAL = 0;\r
  PROPORTIONAL = 1;\r
  TABULAR = 2;\r
}\r
\r
enum FontVariantNumericFraction {\r
  NORMAL = 0;\r
  DIAGONAL = 1;\r
  STACKED = 2;\r
}\r
\r
enum FontVariantCaps {\r
  NORMAL = 0;\r
  SMALL = 1;\r
  ALL_SMALL = 2;\r
  PETITE = 3;\r
  ALL_PETITE = 4;\r
  UNICASE = 5;\r
  TITLING = 6;\r
}\r
\r
enum FontVariantPosition {\r
  NORMAL = 0;\r
  SUB = 1;\r
  SUPER = 2;\r
}\r
\r
enum FontStyle {\r
  NORMAL = 0;\r
  ITALIC = 1;\r
}\r
\r
enum SemanticWeight {\r
  NORMAL = 0;\r
  BOLD = 1;\r
}\r
\r
enum SemanticItalic {\r
  NORMAL = 0;\r
  ITALIC = 1;\r
}\r
\r
enum CodeSnapshotState {\r
  INITIAL = 0;\r
  SNAPSHOTTING = 1;\r
  OK = 2;\r
  SNAPSHOT_ERROR = 3;\r
  LLM_IN_PROGRESS = 4;\r
}\r
\r
enum SnapshotCaptureMode {\r
  FULL = 0;\r
  PARTIAL = 1;\r
}\r
\r
message CodeSourceInfo {\r
  string originReferenceId = 1;\r
  GUID originNodeId = 2;\r
  GUID linkedSnapshotId = 3;\r
  SnapshotCaptureMode captureMode = 4;\r
  string sourceBlobRef = 5;\r
  string sourceElementId = 6;\r
}\r
\r
enum CodeObjectType {\r
  WEB_LAYER = 0;\r
  WEB_INTERACTION = 1;\r
  NATIVE_LAYER = 2;\r
  ANIMATION_PRESET = 3;\r
  TOOL = 4;\r
  CUSTOM_EFFECT = 5;\r
  PLUGIN = 6;\r
  WEB_LAYER_GENERIC = 7;\r
  CUSTOM_FILL = 8;\r
}\r
\r
message CustomToolArtifactRef {\r
  string customToolId = 1;\r
  string customToolVersion = 2;\r
  string publishedCustomToolId = 3;\r
  string publishedCustomToolVersionId = 4;\r
}\r
\r
enum LockMode {\r
  NONE = 0;\r
  ALL = 1;\r
  BACKGROUND_ONLY = 2;\r
}\r
\r
enum OpenTypeFeature {\r
  PCAP = 0;\r
  C2PC = 1;\r
  CASE = 2;\r
  CPSP = 3;\r
  TITL = 4;\r
  UNIC = 5;\r
  ZERO = 6;\r
  SINF = 7;\r
  ORDN = 8;\r
  AFRC = 9;\r
  DNOM = 10;\r
  NUMR = 11;\r
  LIGA = 12;\r
  CLIG = 13;\r
  DLIG = 14;\r
  HLIG = 15;\r
  RLIG = 16;\r
  AALT = 17;\r
  CALT = 18;\r
  RCLT = 19;\r
  SALT = 20;\r
  RVRN = 21;\r
  VERT = 22;\r
  SWSH = 23;\r
  CSWH = 24;\r
  NALT = 25;\r
  CCMP = 26;\r
  STCH = 27;\r
  HIST = 28;\r
  SIZE = 29;\r
  ORNM = 30;\r
  ITAL = 31;\r
  RAND = 32;\r
  DTLS = 33;\r
  FLAC = 34;\r
  MGRK = 35;\r
  SSTY = 36;\r
  KERN = 37;\r
  FWID = 38;\r
  HWID = 39;\r
  HALT = 40;\r
  TWID = 41;\r
  QWID = 42;\r
  PWID = 43;\r
  JUST = 44;\r
  LFBD = 45;\r
  OPBD = 46;\r
  RTBD = 47;\r
  PALT = 48;\r
  PKNA = 49;\r
  LTRA = 50;\r
  LTRM = 51;\r
  RTLA = 52;\r
  RTLM = 53;\r
  ABRV = 54;\r
  ABVM = 55;\r
  ABVS = 56;\r
  VALT = 57;\r
  VHAL = 58;\r
  BLWF = 59;\r
  BLWM = 60;\r
  BLWS = 61;\r
  AKHN = 62;\r
  CJCT = 63;\r
  CFAR = 64;\r
  CPCT = 65;\r
  CURS = 66;\r
  DIST = 67;\r
  EXPT = 68;\r
  FALT = 69;\r
  FINA = 70;\r
  FIN2 = 71;\r
  FIN3 = 72;\r
  HALF = 73;\r
  HALN = 74;\r
  HKNA = 75;\r
  HNGL = 76;\r
  HOJO = 77;\r
  INIT = 78;\r
  ISOL = 79;\r
  JP78 = 80;\r
  JP83 = 81;\r
  JP90 = 82;\r
  JP04 = 83;\r
  LJMO = 84;\r
  LOCL = 85;\r
  MARK = 86;\r
  MEDI = 87;\r
  MED2 = 88;\r
  MKMK = 89;\r
  NLCK = 90;\r
  NUKT = 91;\r
  PREF = 92;\r
  PRES = 93;\r
  VPAL = 94;\r
  PSTF = 95;\r
  PSTS = 96;\r
  RKRF = 97;\r
  RPHF = 98;\r
  RUBY = 99;\r
  SMPL = 100;\r
  TJMO = 101;\r
  TNAM = 102;\r
  TRAD = 103;\r
  VATU = 104;\r
  VJMO = 105;\r
  VKNA = 106;\r
  VKRN = 107;\r
  VRTR = 108;\r
  VRT2 = 109;\r
  SS01 = 110;\r
  SS02 = 111;\r
  SS03 = 112;\r
  SS04 = 113;\r
  SS05 = 114;\r
  SS06 = 115;\r
  SS07 = 116;\r
  SS08 = 117;\r
  SS09 = 118;\r
  SS10 = 119;\r
  SS11 = 120;\r
  SS12 = 121;\r
  SS13 = 122;\r
  SS14 = 123;\r
  SS15 = 124;\r
  SS16 = 125;\r
  SS17 = 126;\r
  SS18 = 127;\r
  SS19 = 128;\r
  SS20 = 129;\r
  CV01 = 130;\r
  CV02 = 131;\r
  CV03 = 132;\r
  CV04 = 133;\r
  CV05 = 134;\r
  CV06 = 135;\r
  CV07 = 136;\r
  CV08 = 137;\r
  CV09 = 138;\r
  CV10 = 139;\r
  CV11 = 140;\r
  CV12 = 141;\r
  CV13 = 142;\r
  CV14 = 143;\r
  CV15 = 144;\r
  CV16 = 145;\r
  CV17 = 146;\r
  CV18 = 147;\r
  CV19 = 148;\r
  CV20 = 149;\r
  CV21 = 150;\r
  CV22 = 151;\r
  CV23 = 152;\r
  CV24 = 153;\r
  CV25 = 154;\r
  CV26 = 155;\r
  CV27 = 156;\r
  CV28 = 157;\r
  CV29 = 158;\r
  CV30 = 159;\r
  CV31 = 160;\r
  CV32 = 161;\r
  CV33 = 162;\r
  CV34 = 163;\r
  CV35 = 164;\r
  CV36 = 165;\r
  CV37 = 166;\r
  CV38 = 167;\r
  CV39 = 168;\r
  CV40 = 169;\r
  CV41 = 170;\r
  CV42 = 171;\r
  CV43 = 172;\r
  CV44 = 173;\r
  CV45 = 174;\r
  CV46 = 175;\r
  CV47 = 176;\r
  CV48 = 177;\r
  CV49 = 178;\r
  CV50 = 179;\r
  CV51 = 180;\r
  CV52 = 181;\r
  CV53 = 182;\r
  CV54 = 183;\r
  CV55 = 184;\r
  CV56 = 185;\r
  CV57 = 186;\r
  CV58 = 187;\r
  CV59 = 188;\r
  CV60 = 189;\r
  CV61 = 190;\r
  CV62 = 191;\r
  CV63 = 192;\r
  CV64 = 193;\r
  CV65 = 194;\r
  CV66 = 195;\r
  CV67 = 196;\r
  CV68 = 197;\r
  CV69 = 198;\r
  CV70 = 199;\r
  CV71 = 200;\r
  CV72 = 201;\r
  CV73 = 202;\r
  CV74 = 203;\r
  CV75 = 204;\r
  CV76 = 205;\r
  CV77 = 206;\r
  CV78 = 207;\r
  CV79 = 208;\r
  CV80 = 209;\r
  CV81 = 210;\r
  CV82 = 211;\r
  CV83 = 212;\r
  CV84 = 213;\r
  CV85 = 214;\r
  CV86 = 215;\r
  CV87 = 216;\r
  CV88 = 217;\r
  CV89 = 218;\r
  CV90 = 219;\r
  CV91 = 220;\r
  CV92 = 221;\r
  CV93 = 222;\r
  CV94 = 223;\r
  CV95 = 224;\r
  CV96 = 225;\r
  CV97 = 226;\r
  CV98 = 227;\r
  CV99 = 228;\r
}\r
\r
struct ExportConstraint {\r
  ExportConstraintType type;\r
  float value;\r
}\r
\r
struct GUIDMapping {\r
  GUID from;\r
  GUID to;\r
}\r
\r
struct Blob {\r
  byte[] bytes;\r
}\r
\r
message Image {\r
  byte[] hash = 1;\r
  string name = 2;\r
  uint dataBlob = 3;\r
}\r
\r
message Video {\r
  byte[] hash = 1;\r
  string s3Url = 2;\r
}\r
\r
message PasteSource {\r
  string srcFile = 1;\r
  GUID srcNode = 2;\r
}\r
\r
struct FilterColorAdjust {\r
  float tint;\r
  float shadows;\r
  float highlights;\r
  float detail;\r
  float exposure;\r
  float vignette;\r
  float temperature;\r
  float vibrance;\r
}\r
\r
message PaintFilterMessage {\r
  float tint = 1;\r
  float shadows = 2;\r
  float highlights = 3;\r
  float detail = 4;\r
  float exposure = 5;\r
  float vignette = 6;\r
  float temperature = 7;\r
  float vibrance = 8;\r
  float contrast = 9;\r
  float brightness = 10;\r
}\r
\r
message Paint {\r
  PaintType type = 1;\r
  Color color = 2;\r
  float opacity = 3;\r
  bool visible = 4;\r
  BlendMode blendMode = 5;\r
  ColorStop[] stops = 6;\r
  Matrix transform = 7;\r
  Image image = 8;\r
  Image imageThumbnail = 9;\r
  Image animatedImage = 16;\r
  uint animationFrame = 17;\r
  ImageScaleMode imageScaleMode = 10;\r
  bool imageShouldColorManage = 22;\r
  float rotation = 11;\r
  float scale = 12;\r
  FilterColorAdjust filterColorAdjust = 13;\r
  PaintFilterMessage paintFilter = 14;\r
  uint[] emojiCodePoints = 15;\r
  Video video = 18;\r
  uint originalImageWidth = 19;\r
  uint originalImageHeight = 20;\r
  VariableData opacityVar = 38;\r
  VariableData colorVar = 21;\r
  VariableData imageVar = 31;\r
  ColorStopVar[] stopsVar = 23;\r
  string thumbHashBase64 = 24;\r
  byte[] thumbHash = 25;\r
  GUID sourceNodeId = 26;\r
  float spacing = 27;\r
  Vector patternSpacing = 37;\r
  PatternTileType patternTileType = 28;\r
  PatternAlignment verticalAlignment = 29;\r
  PatternAlignment horizontalAlignment = 30;\r
  GUID id = 32;\r
  string altText = 33;\r
  NoiseType noiseType = 34;\r
  float density = 35;\r
  Vector noiseSize = 36;\r
  CodeComponentId customEffectId = 39;\r
  ComponentPropAssignment[] componentPropAssignments = 40;\r
}\r
\r
enum NoiseType {\r
  MULTITONE = 0;\r
  MONOTONE = 1;\r
  DUOTONE = 2;\r
}\r
\r
enum PatternTileType {\r
  RECTANGULAR = 0;\r
  HORIZONTAL_HEXAGONAL = 1;\r
  VERTICAL_HEXAGONAL = 2;\r
}\r
\r
enum PatternAlignment {\r
  START = 0;\r
  CENTER = 1;\r
  END = 2;\r
}\r
\r
message FontMetaData {\r
  FontName key = 1;\r
  float fontLineHeight = 2;\r
  byte[] fontDigest = 3;\r
  FontStyle fontStyle = 4;\r
  int fontWeight = 5;\r
}\r
\r
message FontVariation {\r
  uint axisTag = 1;\r
  string axisName = 2;\r
  float value = 3;\r
}\r
\r
message TextData {\r
  string characters = 1;\r
  uint[] characterStyleIDs = 2;\r
  NodeChange[] styleOverrideTable = 3;\r
  TextLineData[] lines = 12;\r
  uint layoutVersion = 8;\r
  FontName[] fallbackFonts = 10;\r
  float minContentHeight = 17;\r
  Vector layoutSize = 4;\r
  Baseline[] baselines = 5;\r
  Glyph[] glyphs = 6;\r
  Decoration[] decorations = 7;\r
  Blockquote[] blockquotes = 16;\r
  FontMetaData[] fontMetaData = 9;\r
  HyperlinkBox[] hyperlinkBoxes = 11;\r
  int truncationStartIndex = 13;\r
  float truncatedHeight = 14;\r
  float[] logicalIndexToCharacterOffsetMap = 15;\r
  MentionBox[] mentionBoxes = 18;\r
  DerivedTextLineData[] derivedLines = 19;\r
}\r
\r
message DerivedTextData {\r
  Vector layoutSize = 1;\r
  Baseline[] baselines = 2;\r
  Glyph[] glyphs = 3;\r
  Decoration[] decorations = 4;\r
  Blockquote[] blockquotes = 5;\r
  FontMetaData[] fontMetaData = 6;\r
  HyperlinkBox[] hyperlinkBoxes = 7;\r
  int truncationStartIndex = 8;\r
  float truncatedHeight = 9;\r
  float[] logicalIndexToCharacterOffsetMap = 10;\r
  MentionBox[] mentionBoxes = 11;\r
  DerivedTextLineData[] derivedLines = 12;\r
}\r
\r
message HyperlinkBox {\r
  Rect bounds = 1;\r
  string url = 2;\r
  GUID guid = 3;\r
  CMSItemPageTarget cmsTarget = 5;\r
  bool openInNewTab = 6;\r
  int hyperlinkID = 4;\r
}\r
\r
message MentionBox {\r
  Rect bounds = 1;\r
  uint startIndex = 2;\r
  uint endIndex = 3;\r
  bool isValid = 4;\r
  uint mentionKey = 5;\r
}\r
\r
message Baseline {\r
  Vector position = 1;\r
  float width = 2;\r
  float lineY = 3;\r
  float lineHeight = 4;\r
  float lineAscent = 7;\r
  float ignoreLeadingTrim = 8;\r
  uint firstCharacter = 5;\r
  uint endCharacter = 6;\r
}\r
\r
message Glyph {\r
  uint commandsBlob = 1;\r
  Vector position = 2;\r
  uint styleID = 3;\r
  float fontSize = 4;\r
  uint firstCharacter = 5;\r
  float advance = 6;\r
  uint[] emojiCodePoints = 7;\r
  EmojiImageSet emojiImageSet = 8;\r
  float rotation = 9;\r
}\r
\r
message Decoration {\r
  Rect[] rects = 1;\r
  uint styleID = 2;\r
}\r
\r
message Blockquote {\r
  Rect verticalBar = 1;\r
  Rect quoteMarkBounds = 2;\r
  uint styleID = 3;\r
}\r
\r
message VectorData {\r
  uint vectorNetworkBlob = 1;\r
  Vector normalizedSize = 2;\r
  NodeChange[] styleOverrideTable = 3;\r
}\r
\r
message TextPathStart {\r
  float tValue = 1;\r
  bool forward = 2;\r
}\r
\r
message GUIDPath {\r
  GUID[] guids = 1;\r
}\r
\r
message SymbolData {\r
  GUID symbolID = 1;\r
  NodeChange[] symbolOverrides = 2;\r
  float uniformScaleFactor = 3;\r
}\r
\r
message GUIDPathMapping {\r
  GUID id = 1;\r
  GUIDPath path = 2;\r
}\r
\r
message DerivedBreakpointData {\r
  NodeChange[] overrides = 1;\r
}\r
\r
message NodeGenerationData {\r
  NodeChange[] overrides = 1;\r
  bool useFineGrainedSyncing = 2;\r
  NodeChange[] diffOnlyRemovals = 3;\r
}\r
\r
message DerivedImmutableFrameData {\r
  NodeChange[] overrides = 1;\r
  uint version = 2;\r
}\r
\r
message JsxData {\r
  NodeChange[] overrides = 1;\r
}\r
\r
message DerivedJsxData {\r
  NodeChange[] overrides = 1;\r
}\r
\r
message AssetIdMap {\r
  AssetIdEntry[] entries = 1;\r
}\r
\r
message AssetIdEntry {\r
  string assetKey = 1;\r
  AssetId assetId = 2;\r
}\r
\r
message AssetRef {\r
  string key = 1;\r
  string version = 2;\r
}\r
\r
message AssetId {\r
  GUID guid = 1;\r
  AssetRef assetRef = 2;\r
  StateGroupId stateGroupId = 3;\r
  StyleId styleId = 4;\r
  SymbolId symbolId = 5;\r
  VariableID variableId = 6;\r
  VariableSetID variableSetId = 7;\r
}\r
\r
message StateGroupId {\r
  GUID guid = 1;\r
  AssetRef assetRef = 2;\r
}\r
\r
message StyleId {\r
  GUID guid = 1;\r
  AssetRef assetRef = 2;\r
}\r
\r
message SymbolId {\r
  GUID guid = 1;\r
  AssetRef assetRef = 2;\r
}\r
\r
message VariableID {\r
  GUID guid = 1;\r
  AssetRef assetRef = 2;\r
}\r
\r
message VariableOverrideId {\r
  GUID guid = 1;\r
  AssetRef assetRef = 2;\r
}\r
\r
message VariableSetID {\r
  GUID guid = 1;\r
  AssetRef assetRef = 2;\r
}\r
\r
message ModuleId {\r
  GUID guid = 1;\r
  AssetRef assetRef = 2;\r
}\r
\r
message ResponsiveSetId {\r
  GUID guid = 1;\r
  AssetRef assetRef = 2;\r
}\r
\r
message WebpageId {\r
  GUID guid = 1;\r
  AssetRef assetRef = 2;\r
}\r
\r
message ThemeID {\r
  GUID guid = 1;\r
  AssetRef assetRef = 2;\r
}\r
\r
message CodeLibraryId {\r
  GUID guid = 1;\r
  AssetRef assetRef = 2;\r
}\r
\r
message CodeFileId {\r
  GUID guid = 1;\r
  AssetRef assetRef = 2;\r
}\r
\r
message CodeComponentId {\r
  GUID guid = 1;\r
  AssetRef assetRef = 2;\r
}\r
\r
message CanvasNodeId {\r
  GUID guid = 1;\r
  SymbolId symbolId = 2;\r
  StateGroupId stateGroupId = 3;\r
}\r
\r
struct IndexRange {\r
  uint startIndex;\r
  uint endIndexExclusive;\r
}\r
\r
struct CollaborativeTextOpID {\r
  uint sessionID;\r
  uint counterID;\r
}\r
\r
enum CollaborativeTextOpType {\r
  INSERT = 0;\r
  DELETE = 1;\r
}\r
\r
message CollaborativeTextStrippedOpRunWithIDs {\r
  CollaborativeTextOpID firstId = 1;\r
  uint runLength = 2;\r
  CollaborativeTextOpID[] parentIds = 3;\r
  CollaborativeTextOpID[] rebasedOnOpIds = 4;\r
}\r
\r
message CollaborativeTextStrippedOpRunWithLoc {\r
  CollaborativeTextOpType type = 1;\r
  IndexRange range = 2;\r
  bool rangeShouldBeIteratedInReverse = 3;\r
  IndexRange contentBytesInBuffer = 4;\r
  IndexRange rebasedRange = 5;\r
}\r
\r
message CollaborativeTextOpRun {\r
  CollaborativeTextOpID id = 1;\r
  CollaborativeTextOpID[] parentIds = 2;\r
  CollaborativeTextOpType type = 3;\r
  IndexRange range = 4;\r
  bool rangeShouldBeIteratedInReverse = 5;\r
  string content = 6;\r
  CollaborativeTextOpID[] rebasedOnOpIds = 7;\r
  IndexRange rebasedRange = 8;\r
}\r
\r
message CollaborativePlainText {\r
  CollaborativeTextStrippedOpRunWithIDs[] historyOpsWithIds = 1;\r
  CollaborativeTextStrippedOpRunWithLoc[] historyOpsWithLoc = 2;\r
  byte[] historyStringContentBuffer = 3;\r
  CollaborativeTextOpRun[] changesToAppend = 4;\r
}\r
\r
message CollaborativeTextSelection {\r
  GUID node = 1;\r
  uint field = 2;\r
  IndexRange selectedRange = 3;\r
  bool caretAtFront = 4;\r
  CollaborativeTextOpID[] textVersion = 5;\r
}\r
\r
message ResponsiveTextStyleVariant {\r
  float minWidth = 1;\r
  NodeChange fields = 2;\r
  VariableData variableFontSize = 3;\r
  VariableData variableLineHeight = 4;\r
  VariableData variableLetterSpacing = 5;\r
  VariableData variableParagraphSpacing = 6;\r
  string name = 7;\r
}\r
\r
enum FlappType {\r
  POLL = 0;\r
  EMBED = 1;\r
  FACEPILE = 2;\r
  ALIGNMENT = 3;\r
  YOUTUBE = 4;\r
}\r
\r
message SlideThemeProps {\r
  string themeVersion = 1;\r
  VariableSetID variableSetId = 2;\r
  StyleId[] textStyleIds = 3;\r
  bool isTextColorManuallySelected = 4;\r
  bool isBorderColorManuallySelected = 5;\r
  AssetRef subscribedThemeRef = 6;\r
  uint schemaVersion = 7;\r
  bool isGeneratedFromDesign = 8;\r
}\r
\r
message SlideThemeMap {\r
  SlideThemeMapEntry[] entries = 1;\r
}\r
\r
message SlideThemeMapEntry {\r
  ThemeID themeId = 1;\r
  SlideThemeProps themeProps = 2;\r
}\r
\r
message SharedSymbolReference {\r
  string fileKey = 1;\r
  GUID symbolID = 2;\r
  string versionHash = 3;\r
  GUIDPathMapping[] guidPathMappings = 4;\r
  byte[] bytes = 5;\r
  GUIDMapping[] libraryGUIDToSubscribingGUID = 6;\r
  string componentKey = 7;\r
  GUIDPathMapping[] unflatteningMappings = 8;\r
  bool isUnflattened = 9;\r
}\r
\r
message SharedComponentMasterData {\r
  string componentKey = 1;\r
  GUIDPathMapping[] publishingGUIDPathToTeamLibraryGUID = 2;\r
  bool isUnflattened = 3;\r
}\r
\r
message InstanceOverrideStash {\r
  GUIDPath overridePathOfSwappedInstance = 1;\r
  string componentKey = 2;\r
  NodeChange[] overrides = 3;\r
}\r
\r
message InstanceOverrideStashV2 {\r
  GUIDPath overridePathOfSwappedInstance = 1;\r
  GUID localSymbolID = 2;\r
  NodeChange[] overrides = 3;\r
}\r
\r
message ImportedCodeFileEntry {\r
  CodeFileId codeFileId = 1;\r
}\r
\r
message ImportedCodeFiles {\r
  ImportedCodeFileEntry[] entries = 1;\r
}\r
\r
enum BlurOpType {\r
  NORMAL = 0;\r
  PROGRESSIVE = 1;\r
}\r
\r
enum RepeatType {\r
  LINEAR = 0;\r
  RADIAL = 1;\r
}\r
\r
enum UnitType {\r
  PIXELS = 0;\r
  RELATIVE = 1;\r
}\r
\r
enum RepeatOrder {\r
  FORWARD = 0;\r
  REVERSE = 1;\r
}\r
\r
enum EffectAxis {\r
  X = 0;\r
  Y = 1;\r
  X_AND_Y = 2;\r
}\r
\r
message Effect {\r
  EffectType type = 1;\r
  Vector offset = 3;\r
  float radius = 4;\r
  bool visible = 5;\r
  BlendMode blendMode = 6;\r
  float spread = 7;\r
  bool showShadowBehindNode = 8;\r
  VariableData radiusVar = 9;\r
  VariableData colorVar = 10;\r
  VariableData spreadVar = 11;\r
  VariableData xVar = 12;\r
  VariableData yVar = 13;\r
  uint count = 14;\r
  RepeatType repeatType = 15;\r
  EffectAxis axis = 16;\r
  UnitType unitType = 17;\r
  RepeatOrder order = 18;\r
  BlurOpType blurOpType = 19;\r
  Vector startOffset = 20;\r
  Vector endOffset = 28;\r
  float startRadius = 21;\r
  Color color = 2;\r
  Color secondaryColor = 24;\r
  Vector noiseSize = 22;\r
  uint seed = 29;\r
  bool clipToShape = 23;\r
  float density = 25;\r
  NoiseType noiseType = 26;\r
  float opacity = 27;\r
  float refractionRadius = 30;\r
  float specularAngle = 31;\r
  float specularIntensity = 32;\r
  float bevelSize = 33;\r
  float chromaticAberration = 34;\r
  float reflectionDistance = 35;\r
  float refractionIntensity = 36;\r
  VariableData refractionRadiusVar = 37;\r
  VariableData specularAngleVar = 38;\r
  VariableData specularIntensityVar = 39;\r
  VariableData chromaticAberrationVar = 40;\r
  VariableData splayVar = 41;\r
  VariableData refractionIntensityVar = 42;\r
  CodeComponentId customEffectId = 43;\r
  ComponentPropAssignment[] componentPropAssignments = 44;\r
  VariableData startRadiusVar = 45;\r
  VariableData startOffsetXVar = 46;\r
  VariableData startOffsetYVar = 47;\r
  VariableData endOffsetXVar = 48;\r
  VariableData endOffsetYVar = 49;\r
  VariableData noiseSizeXVar = 50;\r
  VariableData noiseSizeYVar = 51;\r
  VariableData densityVar = 52;\r
  VariableData effectOpacityVar = 53;\r
  VariableData secondaryColorVar = 54;\r
  GUID id = 55;\r
}\r
\r
enum TransformModifierType {\r
  REPEAT = 0;\r
  SYMMETRY = 1;\r
  SKEW = 2;\r
}\r
\r
message TransformModifier {\r
  TransformModifierType type = 1;\r
  Vector offset = 2;\r
  bool visible = 3;\r
  uint count = 4;\r
  RepeatType repeatType = 5;\r
  EffectAxis axis = 6;\r
  UnitType unitType = 7;\r
  RepeatOrder order = 8;\r
  float skewX = 9;\r
  float skewY = 10;\r
}\r
\r
enum TransformSchemaType {\r
  NONE = 0;\r
  FIXED_ORDER = 1;\r
  FREEFORM = 2;\r
}\r
\r
struct Matrix4f {\r
  float m00;\r
  float m01;\r
  float m02;\r
  float m03;\r
  float m10;\r
  float m11;\r
  float m12;\r
  float m13;\r
  float m20;\r
  float m21;\r
  float m22;\r
  float m23;\r
  float m30;\r
  float m31;\r
  float m32;\r
  float m33;\r
}\r
\r
message FixedOrderTransform3d {\r
  float perspective = 1;\r
  float translateZ = 2;\r
  float rotateX = 3;\r
  float rotateY = 4;\r
  float rotateZ = 5;\r
}\r
\r
enum TransformFnType {\r
  NONE = 0;\r
  MATRIX_3D = 1;\r
  PERSPECTIVE = 2;\r
  TRANSLATE_Z = 3;\r
  ROTATE_X = 4;\r
  ROTATE_Y = 5;\r
  ROTATE_Z = 6;\r
}\r
\r
message TransformFnValue {\r
  Matrix4f matrix3d = 1;\r
  float perspective = 2;\r
  float rotateAngle = 3;\r
  float translateValue = 4;\r
}\r
\r
message TransformFn {\r
  TransformFnType type = 1;\r
  TransformFnValue value = 2;\r
}\r
\r
message TransformSchemaValue {\r
  FixedOrderTransform3d fixedOrderTransform3d = 1;\r
  TransformFn[] transformFunctions = 2;\r
}\r
\r
message Transform3d {\r
  TransformSchemaType type = 1;\r
  TransformSchemaValue value = 2;\r
  bool backfaceHidden = 3;\r
}\r
\r
struct NumberVector2D {\r
  Number x;\r
  Number y;\r
}\r
\r
message Scene3d {\r
  float perspective = 1;\r
  NumberVector2D perspectiveOrigin = 2;\r
  bool preserve3d = 3;\r
}\r
\r
message TransformOrigin {\r
  Number x = 1;\r
  Number y = 2;\r
}\r
\r
message TransitionInfo {\r
  TransitionType type = 1;\r
  float duration = 2;\r
}\r
\r
enum PrototypeDeviceType {\r
  NONE = 0;\r
  PRESET = 1;\r
  CUSTOM = 2;\r
  PRESENTATION = 3;\r
}\r
\r
enum DeviceRotation {\r
  NONE = 0;\r
  CCW_90 = 1;\r
}\r
\r
message PrototypeDevice {\r
  PrototypeDeviceType type = 1;\r
  Vector size = 2;\r
  string presetIdentifier = 3;\r
  DeviceRotation rotation = 4;\r
}\r
\r
enum OverlayPositionType {\r
  CENTER = 0;\r
  TOP_LEFT = 1;\r
  TOP_CENTER = 2;\r
  TOP_RIGHT = 3;\r
  BOTTOM_LEFT = 4;\r
  BOTTOM_CENTER = 5;\r
  BOTTOM_RIGHT = 6;\r
  MANUAL = 7;\r
}\r
\r
enum OverlayBackgroundInteraction {\r
  NONE = 0;\r
  CLOSE_ON_CLICK_OUTSIDE = 1;\r
}\r
\r
enum OverlayBackgroundType {\r
  NONE = 0;\r
  SOLID_COLOR = 1;\r
}\r
\r
message OverlayBackgroundAppearance {\r
  OverlayBackgroundType backgroundType = 1;\r
  Color backgroundColor = 2;\r
}\r
\r
enum NavigationType {\r
  NAVIGATE = 0;\r
  OVERLAY = 1;\r
  SWAP = 2;\r
  SWAP_STATE = 3;\r
  SCROLL_TO = 4;\r
}\r
\r
enum ExportColorProfile {\r
  DOCUMENT = 0;\r
  SRGB = 1;\r
  DISPLAY_P3_V4 = 2;\r
  CMYK = 3;\r
}\r
\r
enum ExportBackgroundType {\r
  SOLID = 0;\r
  TRANSPARENT = 1;\r
  GRID = 2;\r
}\r
\r
message ExportSettings {\r
  string suffix = 1;\r
  ImageType imageType = 2;\r
  ExportConstraint constraint = 3;\r
  bool svgDataName = 4;\r
  ExportSVGIDMode svgIDMode = 5;\r
  bool svgOutlineText = 6;\r
  bool contentsOnly = 7;\r
  bool svgForceStrokeMasks = 8;\r
  bool useAbsoluteBounds = 9;\r
  ExportColorProfile colorProfile = 10;\r
  float quality = 11;\r
  bool useBicubicSampler = 12;\r
  int frameRate = 13;\r
  int loopCount = 14;\r
  ExportBackgroundType backgroundType = 15;\r
}\r
\r
enum ExportSVGIDMode {\r
  IF_NEEDED = 0;\r
  ALWAYS = 1;\r
}\r
\r
message LayoutGrid {\r
  LayoutGridType type = 1;\r
  Axis axis = 2;\r
  bool visible = 3;\r
  int numSections = 4;\r
  float offset = 5;\r
  float sectionSize = 6;\r
  float gutterSize = 7;\r
  Color color = 8;\r
  LayoutGridPattern pattern = 9;\r
  VariableData numSectionsVar = 10;\r
  VariableData offsetVar = 11;\r
  VariableData sectionSizeVar = 12;\r
  VariableData gutterSizeVar = 13;\r
}\r
\r
message Guide {\r
  Axis axis = 1;\r
  float offset = 2;\r
  GUID guid = 3;\r
}\r
\r
message Path {\r
  WindingRule windingRule = 1;\r
  uint commandsBlob = 2;\r
  uint styleID = 3;\r
}\r
\r
enum StyleType {\r
  NONE = 0;\r
  FILL = 1;\r
  STROKE = 2;\r
  TEXT = 3;\r
  EFFECT = 4;\r
  EXPORT = 5;\r
  GRID = 6;\r
  ANIMATION = 7;\r
}\r
\r
enum BrushOrientation {\r
  FORWARD = 0;\r
  REVERSE = 1;\r
}\r
\r
enum BrushType {\r
  STRETCH = 0;\r
  SCATTER = 1;\r
}\r
\r
message DynamicStrokeSettings {\r
  float frequency = 1;\r
  float wiggle = 2;\r
  float smoothen = 3;\r
}\r
\r
message ScatterStrokeSettings {\r
  float gap = 1;\r
  float wiggle = 2;\r
  float angularJitter = 3;\r
  float rotation = 4;\r
  float sizeJitter = 5;\r
}\r
\r
message StretchStrokeSettings {\r
  BrushOrientation orientation = 1;\r
}\r
\r
message StrokeData {\r
  Stroke[] strokes = 1;\r
  uint version = 2;\r
}\r
\r
message Stroke {\r
  int strokeId = 1;\r
  float strokeWeight = 2;\r
  VariableData strokeWeightVar = 3;\r
  Paint[] strokePaint = 4;\r
  StyleId styleIdForStrokeFill = 5;\r
  StrokeAlign strokeAlign = 6;\r
  StrokeCap strokeCap = 7;\r
  Number strokeCapSize = 8;\r
  StrokeJoin strokeJoin = 9;\r
  float miterLimit = 10;\r
  float[] dashPattern = 11;\r
  OptionalVector pathTrim = 12;\r
  float strokeOffset = 13;\r
  bool isDeleted = 14;\r
}\r
\r
message VariableWidthPoint {\r
  float position = 1;\r
  float ascent = 2;\r
  float descent = 3;\r
  int segmentId = 4;\r
}\r
\r
message SharedStyleReference {\r
  string styleKey = 1;\r
  string versionHash = 2;\r
}\r
\r
message SharedStyleMasterData {\r
  string styleKey = 1;\r
  string sortPosition = 2;\r
  string fileKey = 3;\r
}\r
\r
enum ScrollBehavior {\r
  SCROLLS = 0;\r
  FIXED_WHEN_CHILD_OF_SCROLLING_FRAME = 1;\r
  STICKY_SCROLLS = 2;\r
}\r
\r
message ArcData {\r
  float startingAngle = 1;\r
  float endingAngle = 2;\r
  float innerRadius = 3;\r
}\r
\r
message SymbolLink {\r
  string uri = 1;\r
  string displayName = 2;\r
  string displayText = 3;\r
}\r
\r
message PluginData {\r
  string pluginID = 1;\r
  string value = 2;\r
  string key = 3;\r
}\r
\r
message PluginRelaunchData {\r
  string pluginID = 1;\r
  string message = 2;\r
  string command = 3;\r
  bool isDeleted = 4;\r
  CodeComponentId customToolId = 5;\r
}\r
\r
message MultiplayerFieldVersion {\r
  uint counter = 1;\r
  uint sessionID = 2;\r
}\r
\r
enum ConnectorMagnet {\r
  NONE = 0;\r
  AUTO = 1;\r
  TOP = 2;\r
  LEFT = 3;\r
  BOTTOM = 4;\r
  RIGHT = 5;\r
  CENTER = 6;\r
  AUTO_HORIZONTAL = 7;\r
  EDGE = 8;\r
  ABSOLUTE = 9;\r
}\r
\r
message ConnectorEndpoint {\r
  GUID endpointNodeID = 1;\r
  Vector position = 2;\r
  ConnectorMagnet magnet = 3;\r
  Vector relativePosition = 4;\r
}\r
\r
message ConnectorControlPoint {\r
  Vector position = 1;\r
  Vector axis = 2;\r
}\r
\r
enum ConnectorTextSection {\r
  MIDDLE_TO_START = 0;\r
  MIDDLE_TO_END = 1;\r
}\r
\r
enum ConnectorOffAxisOffset {\r
  NONE = 0;\r
  ABOVE = 1;\r
  BELOW = 2;\r
}\r
\r
message ConnectorTextMidpoint {\r
  ConnectorTextSection section = 1;\r
  float offset = 2;\r
  ConnectorOffAxisOffset offAxisOffset = 3;\r
}\r
\r
enum ConnectorLineStyle {\r
  ELBOWED = 0;\r
  STRAIGHT = 1;\r
  CURVED = 2;\r
}\r
\r
enum ConnectorType {\r
  MANUAL = 0;\r
  DIAGRAM = 1;\r
}\r
\r
enum AnnotationPropertyType {\r
  FILL = 0;\r
  STROKE = 1;\r
  WIDTH = 2;\r
  HEIGHT = 3;\r
  MIN_WIDTH = 4;\r
  MIN_HEIGHT = 5;\r
  MAX_WIDTH = 6;\r
  MAX_HEIGHT = 7;\r
  STROKE_WIDTH = 8;\r
  CORNER_RADIUS = 9;\r
  EFFECT = 10;\r
  TEXT_STYLE = 11;\r
  TEXT_ALIGN_HORIZONTAL = 12;\r
  FONT_FAMILY = 13;\r
  FONT_SIZE = 14;\r
  FONT_WEIGHT = 15;\r
  LINE_HEIGHT = 16;\r
  LETTER_SPACING = 17;\r
  STACK_SPACING = 18;\r
  STACK_PADDING = 19;\r
  STACK_MODE = 20;\r
  STACK_ALIGNMENT = 21;\r
  OPACITY = 22;\r
  COMPONENT = 23;\r
  FONT_STYLE = 24;\r
  GRID_ROW_GAP = 25;\r
  GRID_COLUMN_GAP = 26;\r
  GRID_ROW_COUNT = 27;\r
  GRID_COLUMN_COUNT = 28;\r
  GRID_ROW_ANCHOR_INDEX = 29;\r
  GRID_COLUMN_ANCHOR_INDEX = 30;\r
  GRID_ROW_SPAN = 31;\r
  GRID_COLUMN_SPAN = 32;\r
}\r
\r
message AnnotationProperty {\r
  AnnotationPropertyType type = 1;\r
}\r
\r
enum AnnotationCategoryPreset {\r
  NONE = 0;\r
  ACCESSIBILITY = 1;\r
  BEHAVIOR = 2;\r
  CONTENT = 3;\r
  DEVELOPMENT = 4;\r
  INTERACTION = 5;\r
}\r
\r
enum AnnotationCategoryColor {\r
  YELLOW = 0;\r
  ORANGE = 1;\r
  RED = 2;\r
  PINK = 3;\r
  VIOLET = 4;\r
  BLUE = 5;\r
  TEAL = 6;\r
  GREEN = 7;\r
}\r
\r
message AnnotationCategoryCustom {\r
  AnnotationCategoryColor color = 1;\r
  Color customColor = 2;\r
  string label = 3;\r
}\r
\r
message AnnotationCategory {\r
  GUID id = 1;\r
  AnnotationCategoryPreset preset = 2;\r
  AnnotationCategoryCustom custom = 3;\r
}\r
\r
message AnnotationCategories {\r
  uint version = 1;\r
  AnnotationCategory[] items = 2;\r
}\r
\r
message Annotation {\r
  string label = 1;\r
  AnnotationProperty[] properties = 2;\r
  string labelV2 = 3;\r
  GUID categoryId = 4;\r
}\r
\r
enum AnnotationMeasurementNodeSide {\r
  TOP = 0;\r
  BOTTOM = 1;\r
  LEFT = 2;\r
  RIGHT = 3;\r
}\r
\r
message AnnotationMeasurement {\r
  GUID id = 1;\r
  GUID fromNode = 2;\r
  GUID toNode = 3;\r
  AnnotationMeasurementNodeSide fromNodeSide = 4;\r
  bool toSameSide = 5;\r
  float innerOffsetRelative = 6;\r
  float outerOffsetFixed = 7;\r
  GUIDPath toNodeStablePath = 8;\r
  string freeText = 9;\r
}\r
\r
message LibraryMoveInfo {\r
  string oldKey = 1;\r
  string pasteFileKey = 2;\r
}\r
\r
message LibraryMoveHistoryItem {\r
  GUID sourceNodeId = 1;\r
  string sourceComponentKey = 2;\r
}\r
\r
message DeveloperRelatedLink {\r
  string nodeId = 1;\r
  string fileKey = 2;\r
  string linkName = 3;\r
  string linkUrl = 4;\r
}\r
\r
message WidgetPointer {\r
  GUID nodeId = 1;\r
}\r
\r
message EditInfo {\r
  string timestampIso8601 = 1;\r
  string userId = 2;\r
  uint lastEditedAt = 3;\r
  uint createdAt = 4;\r
}\r
\r
enum EditorType {\r
  DESIGN = 0;\r
  WHITEBOARD = 1;\r
  SLIDES = 2;\r
  DEV_HANDOFF = 3;\r
  SITES = 4;\r
  COOPER = 5;\r
  ILLUSTRATION = 6;\r
  FIGMAKE = 7;\r
  FIGSPEC = 8;\r
}\r
\r
enum MaskType {\r
  ALPHA = 0;\r
  OUTLINE = 1;\r
  LUMINANCE = 2;\r
}\r
\r
enum ModuleType {\r
  NONE = 0;\r
  SINGLE_NODE = 1;\r
  MULTI_NODE = 2;\r
}\r
\r
enum SectionStatus {\r
  NONE = 0;\r
  BUILD = 1;\r
  COMPLETED = 2;\r
}\r
\r
message SectionStatusInfo {\r
  SectionStatus status = 1;\r
  uint lastUpdateUnixTimestamp = 2;\r
  string description = 3;\r
  string userId = 4;\r
  SectionStatus prevStatus = 5;\r
}\r
\r
message BuzzApprovalRequestInfo {\r
  string requestId = 1;\r
  string requesterUserId = 2;\r
  uint requestedAt = 3;\r
  string[] reviewerUserIds = 4;\r
  string title = 5;\r
  string note = 6;\r
  GUID[] assetsInRequest = 7;\r
}\r
\r
message BuzzApprovalRequests {\r
  BuzzApprovalRequestInfo[] requests = 1;\r
}\r
\r
enum BuzzApprovalNodeStatus {\r
  NONE = 0;\r
  IN_REVIEW = 1;\r
  APPROVED = 2;\r
  CHANGES_REQUESTED = 3;\r
}\r
\r
message BuzzApprovalNodeStatusInfo {\r
  BuzzApprovalNodeStatus currentStatus = 1;\r
  bool wasPreviouslyApproved = 2;\r
  uint[] approvalRevokedAtHistory = 3;\r
}\r
\r
message CodeEmbedInfo {\r
  string url = 1;\r
  string srcUrl = 2;\r
  string title = 3;\r
  string thumbnailImageHash = 4;\r
  bool isPublishedSite = 5;\r
}\r
\r
enum VariableTimingDisplayUnit {\r
  MILLISECONDS = 0;\r
  SECONDS = 1;\r
}\r
\r
message NodeChange {\r
  GUID guid = 1;\r
  uint guidTag = 53;\r
  NodePhase phase = 2;\r
  uint phaseTag = 54;\r
  ParentIndex parentIndex = 3;\r
  uint parentIndexTag = 55;\r
  NodeType type = 4;\r
  uint typeTag = 56;\r
  string name = 5;\r
  uint nameTag = 57;\r
  bool isPublishable = 174;\r
  string description = 318;\r
  LibraryMoveInfo libraryMoveInfo = 256;\r
  LibraryMoveHistoryItem[] libraryMoveHistory = 281;\r
  string key = 319;\r
  AssetIdMap fileAssetIds = 383;\r
  uint styleID = 49;\r
  uint styleIDTag = 101;\r
  bool isFillStyle = 157;\r
  bool isStrokeStyle = 161;\r
  bool isOverrideOverTextStyle = 376;\r
  StyleType styleType = 163;\r
  string styleDescription = 191;\r
  string version = 171;\r
  string userFacingVersion = 399;\r
  string sortPosition = 320;\r
  SharedStyleMasterData ojansSuperSecretNodeField = 345;\r
  SharedStyleMasterData sevMoonlitLilyData = 348;\r
  bool isSoftDeletedStyle = 176;\r
  bool isNonUpdateable = 177;\r
  SharedStyleMasterData sharedStyleMasterData = 172;\r
  SharedStyleReference sharedStyleReference = 173;\r
  GUID inheritFillStyleID = 158;\r
  GUID inheritStrokeStyleID = 162;\r
  GUID inheritTextStyleID = 167;\r
  GUID inheritExportStyleID = 168;\r
  GUID inheritEffectStyleID = 169;\r
  GUID inheritGridStyleID = 170;\r
  GUID inheritFillStyleIDForStroke = 185;\r
  StyleId styleIdForFill = 332;\r
  StyleId styleIdForStrokeFill = 333;\r
  StyleId styleIdForText = 334;\r
  StyleId styleIdForEffect = 335;\r
  StyleId styleIdForGrid = 336;\r
  StyleAnimation[] styleAnimations = 580;\r
  Paint[] backgroundPaints = 193;\r
  GUID inheritFillStyleIDForBackground = 194;\r
  bool isStateGroup = 225;\r
  StateGroupPropertyValueOrder[] stateGroupPropertyValueOrders = 238;\r
  PartialPasteAnnotation partialPasteAnnotation = 581;\r
  SharedSymbolReference sharedSymbolReference = 122;\r
  bool isSymbolPublishable = 123;\r
  GUIDPathMapping[] sharedSymbolMappings = 124;\r
  string sharedSymbolVersion = 126;\r
  SharedComponentMasterData sharedComponentMasterData = 152;\r
  string symbolDescription = 144;\r
  GUIDPathMapping[] unflatteningMappings = 164;\r
  GUIDPathMapping[] forceUnflatteningMappings = 228;\r
  string publishFile = 214;\r
  string sourceLibraryKey = 395;\r
  GUID publishID = 215;\r
  string componentKey = 216;\r
  bool isC2 = 217;\r
  string publishedVersion = 218;\r
  string originComponentKey = 252;\r
  ComponentPropDef[] componentPropDefs = 266;\r
  ComponentPropRef[] componentPropRefs = 267;\r
  VariantPropSpec[] variantPropSpecs = 483;\r
  SymbolData symbolData = 113;\r
  uint symbolDataTag = 114;\r
  NodeChange[] derivedSymbolData = 125;\r
  bool nestedInstanceResizeEnabled = 394;\r
  GUID overriddenSymbolID = 143;\r
  ComponentPropAssignment[] componentPropAssignments = 268;\r
  bool propsAreBubbled = 305;\r
  InstanceOverrideStash[] overrideStash = 248;\r
  InstanceOverrideStashV2[] overrideStashV2 = 250;\r
  GUIDPath guidPath = 111;\r
  uint guidPathTag = 112;\r
  int overrideLevel = 321;\r
  ModuleType moduleType = 382;\r
  bool isSlot = 463;\r
  bool isSlotContent = 495;\r
  float fontSize = 21;\r
  uint fontSizeTag = 73;\r
  float paragraphIndent = 22;\r
  uint paragraphIndentTag = 74;\r
  float paragraphSpacing = 23;\r
  uint paragraphSpacingTag = 75;\r
  TextAlignHorizontal textAlignHorizontal = 32;\r
  uint textAlignHorizontalTag = 84;\r
  TextAlignVertical textAlignVertical = 33;\r
  uint textAlignVerticalTag = 85;\r
  TextCase textCase = 34;\r
  uint textCaseTag = 86;\r
  TextDecoration textDecoration = 35;\r
  uint textDecorationTag = 87;\r
  Number lineHeight = 40;\r
  uint lineHeightTag = 92;\r
  FontName fontName = 41;\r
  uint fontNameTag = 93;\r
  TextData textData = 42;\r
  uint textDataTag = 94;\r
  DerivedTextData derivedTextData = 359;\r
  bool fontVariantCommonLigatures = 127;\r
  bool fontVariantContextualLigatures = 128;\r
  bool fontVariantDiscretionaryLigatures = 129;\r
  bool fontVariantHistoricalLigatures = 130;\r
  bool fontVariantOrdinal = 131;\r
  bool fontVariantSlashedZero = 132;\r
  FontVariantNumericFigure fontVariantNumericFigure = 133;\r
  FontVariantNumericSpacing fontVariantNumericSpacing = 134;\r
  FontVariantNumericFraction fontVariantNumericFraction = 135;\r
  FontVariantCaps fontVariantCaps = 136;\r
  FontVariantPosition fontVariantPosition = 137;\r
  Number letterSpacing = 165;\r
  string fontVersion = 202;\r
  LeadingTrim leadingTrim = 322;\r
  bool hangingPunctuation = 337;\r
  bool hangingList = 339;\r
  bool fallbackGlyphs = 550;\r
  int maxLines = 351;\r
  ResponsiveTextStyleVariant[] responsiveTextStyleVariants = 417;\r
  SectionStatus sectionStatus = 352;\r
  SectionStatusInfo sectionStatusInfo = 355;\r
  uint textUserLayoutVersion = 203;\r
  uint textExplicitLayoutVersion = 396;\r
  OpenTypeFeature[] toggledOnOTFeatures = 205;\r
  OpenTypeFeature[] toggledOffOTFeatures = 206;\r
  Hyperlink hyperlink = 223;\r
  Mention mention = 340;\r
  FontVariation[] fontVariations = 260;\r
  uint textBidiVersion = 279;\r
  TextTruncation textTruncation = 280;\r
  bool hasHadRTLText = 292;\r
  EmojiImageSet emojiImageSet = 391;\r
  string slideThumbnailHash = 392;\r
  bool visible = 6;\r
  uint visibleTag = 58;\r
  bool locked = 7;\r
  uint lockedTag = 59;\r
  LockMode lockMode = 434;\r
  float opacity = 8;\r
  uint opacityTag = 60;\r
  BlendMode blendMode = 9;\r
  uint blendModeTag = 61;\r
  Vector size = 11;\r
  uint sizeTag = 63;\r
  Matrix transform = 12;\r
  uint transformTag = 64;\r
  float[] dashPattern = 13;\r
  uint dashPatternTag = 65;\r
  bool mask = 16;\r
  uint maskTag = 68;\r
  Vector rotationOrigin = 424;\r
  bool maskIsOutline = 18;\r
  uint maskIsOutlineTag = 70;\r
  MaskType maskType = 317;\r
  float backgroundOpacity = 19;\r
  uint backgroundOpacityTag = 71;\r
  float cornerRadius = 20;\r
  uint cornerRadiusTag = 72;\r
  float strokeWeight = 26;\r
  uint strokeWeightTag = 78;\r
  StrokeAlign strokeAlign = 29;\r
  uint strokeAlignTag = 81;\r
  StrokeCap strokeCap = 30;\r
  uint strokeCapTag = 82;\r
  Number strokeCapSize = 497;\r
  StrokeJoin strokeJoin = 31;\r
  uint strokeJoinTag = 83;\r
  Paint[] fillPaints = 38;\r
  uint fillPaintsTag = 90;\r
  Paint[] strokePaints = 39;\r
  uint strokePaintsTag = 91;\r
  Effect[] effects = 43;\r
  uint effectsTag = 95;\r
  Color backgroundColor = 50;\r
  uint backgroundColorTag = 102;\r
  Path[] fillGeometry = 51;\r
  uint fillGeometryTag = 103;\r
  Path[] strokeGeometry = 52;\r
  uint strokeGeometryTag = 104;\r
  Path[] offsetFillMaskGeometry = 564;\r
  Paint[] textDecorationFillPaints = 411;\r
  bool textDecorationSkipInk = 412;\r
  Number textUnderlineOffset = 413;\r
  Number textDecorationThickness = 415;\r
  TextDecorationStyle textDecorationStyle = 416;\r
  TransformModifier[] transformModifiers = 455;\r
  Transform3d transform3d = 570;\r
  StrokeData strokeData = 571;\r
  Scene3d scene3d = 572;\r
  TransformOrigin transformOrigin = 587;\r
  float rectangleTopLeftCornerRadius = 145;\r
  float rectangleTopRightCornerRadius = 146;\r
  float rectangleBottomLeftCornerRadius = 147;\r
  float rectangleBottomRightCornerRadius = 148;\r
  bool rectangleCornerRadiiIndependent = 149;\r
  bool rectangleCornerToolIndependent = 150;\r
  bool proportionsConstrained = 151;\r
  OptionalVector targetAspectRatio = 423;\r
  bool useAbsoluteBounds = 258;\r
  bool borderTopHidden = 287;\r
  bool borderBottomHidden = 288;\r
  bool borderLeftHidden = 289;\r
  bool borderRightHidden = 290;\r
  bool bordersTakeSpace = 294;\r
  float borderTopWeight = 295;\r
  float borderBottomWeight = 296;\r
  float borderLeftWeight = 297;\r
  float borderRightWeight = 298;\r
  bool borderStrokeWeightsIndependent = 299;\r
  ConstraintType horizontalConstraint = 28;\r
  uint horizontalConstraintTag = 80;\r
  StackMode stackMode = 105;\r
  uint stackModeTag = 106;\r
  float stackSpacing = 107;\r
  uint stackSpacingTag = 108;\r
  float stackPadding = 109;\r
  uint stackPaddingTag = 110;\r
  StackCounterAlign stackCounterAlign = 120;\r
  StackJustify stackJustify = 121;\r
  StackAlign stackAlign = 208;\r
  float stackHorizontalPadding = 209;\r
  float stackVerticalPadding = 210;\r
  StackSize stackWidth = 211;\r
  StackSize stackHeight = 212;\r
  StackSize stackPrimarySizing = 229;\r
  StackJustify stackPrimaryAlignItems = 230;\r
  StackAlign stackCounterAlignItems = 231;\r
  float stackChildPrimaryGrow = 232;\r
  float stackPaddingRight = 233;\r
  float stackPaddingBottom = 234;\r
  StackCounterAlign stackChildAlignSelf = 236;\r
  StackPositioning stackPositioning = 269;\r
  bool stackReverseZIndex = 271;\r
  StackWrap stackWrap = 323;\r
  float stackCounterSpacing = 324;\r
  OptionalVector minSize = 325;\r
  OptionalVector maxSize = 326;\r
  StackCounterAlignContent stackCounterAlignContent = 343;\r
  int[] sortedMovingChildIndices = 406;\r
  uint stackLayoutVersion = 574;\r
  GUIDPositionMap gridRows = 435;\r
  GUIDPositionMap gridColumns = 436;\r
  float gridRowGap = 437;\r
  float gridColumnGap = 438;\r
  GUID gridRowAnchor = 439;\r
  GUID gridColumnAnchor = 440;\r
  uint gridRowSpan = 441;\r
  uint gridColumnSpan = 442;\r
  GUIDGridTrackSizeMap gridColumnsSizing = 474;\r
  GUIDGridTrackSizeMap gridRowsSizing = 475;\r
  GridChildAlign gridChildVerticalAlign = 476;\r
  GridChildAlign gridChildHorizontalAlign = 477;\r
  GridAutoTracks gridAutoTracks = 555;\r
  bool gridReflowEnabled = 556;\r
  bool isSnakeGameBoard = 344;\r
  GUID transitionNodeID = 139;\r
  GUID prototypeStartNodeID = 140;\r
  Color prototypeBackgroundColor = 141;\r
  TransitionInfo transitionInfo = 153;\r
  TransitionType transitionType = 154;\r
  float transitionDuration = 155;\r
  EasingType easingType = 156;\r
  bool transitionPreserveScroll = 181;\r
  ConnectionType connectionType = 182;\r
  string connectionURL = 183;\r
  PrototypeDevice prototypeDevice = 184;\r
  InteractionType interactionType = 187;\r
  float transitionTimeout = 188;\r
  bool interactionMaintained = 189;\r
  float interactionDuration = 190;\r
  bool destinationIsOverlay = 192;\r
  bool transitionShouldSmartAnimate = 207;\r
  PrototypeInteraction[] prototypeInteractions = 226;\r
  PrototypeInteraction[] objectAnimations = 426;\r
  PrototypeStartingPoint prototypeStartingPoint = 249;\r
  PluginData[] pluginData = 204;\r
  PluginRelaunchData[] pluginRelaunchData = 219;\r
  ConnectorEndpoint connectorStart = 242;\r
  ConnectorEndpoint connectorEnd = 243;\r
  ConnectorLineStyle connectorLineStyle = 244;\r
  StrokeCap connectorStartCap = 245;\r
  StrokeCap connectorEndCap = 246;\r
  ConnectorControlPoint[] connectorControlPoints = 253;\r
  ConnectorControlPoint[] connectorBezierControlPoints = 479;\r
  ConnectorTextMidpoint connectorTextMidpoint = 255;\r
  ConnectorType connectorType = 373;\r
  int connectorVersion = 533;\r
  Annotation[] annotations = 369;\r
  AnnotationMeasurement[] measurements = 384;\r
  AnnotationCategories annotationCategories = 453;\r
  ShapeWithTextType shapeWithTextType = 241;\r
  float shapeUserHeight = 247;\r
  bool isStrokePaintDerived = 530;\r
  DerivedImmutableFrameData derivedImmutableFrameData = 254;\r
  MultiplayerFieldVersion derivedImmutableFrameDataVersion = 338;\r
  NodeGenerationData nodeGenerationData = 240;\r
  JsxData jsxData = 491;\r
  DerivedJsxData derivedJsxData = 492;\r
  string stableKey = 493;\r
  CodeBlockLanguage codeBlockLanguage = 259;\r
  CodeBlockTheme codeBlockTheme = 433;\r
  LinkPreviewData linkPreviewData = 278;\r
  bool shapeTruncates = 282;\r
  bool sectionContentsHidden = 283;\r
  VideoPlayback videoPlayback = 300;\r
  StampData stampData = 301;\r
  SectionPresetInfo sectionPresetInfo = 370;\r
  PlatformShapeDefinition platformShapeDefinition = 409;\r
  MultiplayerMap widgetSyncedState = 273;\r
  uint widgetSyncCursor = 274;\r
  WidgetDerivedSubtreeCursor widgetDerivedSubtreeCursor = 275;\r
  WidgetPointer widgetCachedAncestor = 276;\r
  WidgetInputBehavior widgetInputBehavior = 285;\r
  string widgetTooltip = 286;\r
  WidgetHoverStyle widgetHoverStyle = 291;\r
  bool isWidgetStickable = 293;\r
  bool shouldHideCursorsOnWidgetHover = 360;\r
  WidgetMetadata widgetMetadata = 262;\r
  WidgetEvent[] widgetEvents = 263;\r
  WidgetPropertyMenuItem[] widgetPropertyMenuItems = 265;\r
  WidgetInputTextNodeType widgetInputTextNodeType = 401;\r
  MultiplayerMap jsxProps = 489;\r
  TableRowColumnPositionMap tableRowPositions = 308;\r
  TableRowColumnPositionMap tableColumnPositions = 309;\r
  TableRowColumnSizeMap tableRowHeights = 310;\r
  TableRowColumnSizeMap tableColumnWidths = 311;\r
  TableMergedCellMap tableMergedCells = 538;\r
  MultiplayerMap interactiveSlideConfigData = 371;\r
  MultiplayerMap interactiveSlideParticipantData = 372;\r
  FlappType flappType = 402;\r
  bool isEmbeddedPrototype = 486;\r
  string slideSpeakerNotes = 389;\r
  bool isSkippedSlide = 410;\r
  MultiplayerMap presentationOutlines = 573;\r
  ThemeID themeID = 379;\r
  SlideThemeData slideThemeData = 381;\r
  SlideThemeMap slideThemeMap = 390;\r
  string slideTemplateFileKey = 393;\r
  SlideNumber slideNumber = 443;\r
  string slideNumberSeparator = 456;\r
  GUID diagramParentId = 363;\r
  GUID layoutRoot = 362;\r
  string layoutPosition = 364;\r
  DiagramLayoutRuleType diagramLayoutRuleType = 366;\r
  DiagramParentIndex diagramParentIndex = 367;\r
  DiagramLayoutPaused diagramLayoutPaused = 368;\r
  bool isPageDivider = 380;\r
  InternalEnumForTest internalEnumForTest = 251;\r
  InternalDataForTest internalDataForTest = 257;\r
  bool autoRename = 14;\r
  uint autoRenameTag = 66;\r
  bool backgroundEnabled = 15;\r
  uint backgroundEnabledTag = 67;\r
  bool exportContentsOnly = 17;\r
  uint exportContentsOnlyTag = 69;\r
  float miterLimit = 25;\r
  uint miterLimitTag = 77;\r
  float textTracking = 27;\r
  uint textTrackingTag = 79;\r
  ConstraintType verticalConstraint = 37;\r
  uint verticalConstraintTag = 89;\r
  ExportSettings[] exportSettings = 45;\r
  uint exportSettingsTag = 97;\r
  TextAutoResize textAutoResize = 46;\r
  uint textAutoResizeTag = 98;\r
  LayoutGrid[] layoutGrids = 47;\r
  uint layoutGridsTag = 99;\r
  bool frameMaskDisabled = 115;\r
  uint frameMaskDisabledTag = 116;\r
  bool resizeToFit = 117;\r
  uint resizeToFitTag = 118;\r
  BooleanOperation booleanOperation = 36;\r
  uint booleanOperationTag = 88;\r
  VectorMirror handleMirroring = 44;\r
  uint handleMirroringTag = 96;\r
  uint count = 10;\r
  uint countTag = 62;\r
  float starInnerScale = 24;\r
  uint starInnerScaleTag = 76;\r
  ArcData arcData = 195;\r
  VectorData vectorData = 48;\r
  uint vectorDataTag = 100;\r
  uint vectorOperationVersion = 425;\r
  TextPathStart textPathStart = 432;\r
  bool exportBackgroundDisabled = 119;\r
  Guide[] guides = 138;\r
  bool internalOnly = 142;\r
  ScrollDirection scrollDirection = 159;\r
  float cornerSmoothing = 160;\r
  Vector scrollOffset = 166;\r
  bool exportTextAsSVGText = 175;\r
  ScrollContractedState scrollContractedState = 178;\r
  Vector contractedSize = 179;\r
  string fixedChildrenDivider = 180;\r
  ScrollBehavior scrollBehavior = 186;\r
  int derivedSymbolDataLayoutVersion = 196;\r
  NavigationType navigationType = 197;\r
  OverlayPositionType overlayPositionType = 198;\r
  Vector overlayRelativePosition = 199;\r
  OverlayBackgroundInteraction overlayBackgroundInteraction = 200;\r
  OverlayBackgroundAppearance overlayBackgroundAppearance = 201;\r
  GUID overrideKey = 213;\r
  bool containerSupportsFillStrokeAndCorners = 220;\r
  StackSize stackCounterSizing = 221;\r
  bool containersSupportFillStrokeAndCorners = 222;\r
  KeyTrigger keyTrigger = 224;\r
  string voiceEventPhrase = 227;\r
  GUID[] ancestorPathBeforeDeletion = 235;\r
  SymbolLink[] symbolLinks = 237;\r
  TextListData textListData = 239;\r
  bool detachOpticalSizeFromFontSize = 261;\r
  float listSpacing = 264;\r
  EmbedData embedData = 270;\r
  RichMediaData richMediaData = 272;\r
  MultiplayerMap renderedSyncedState = 277;\r
  bool simplifyInstancePanels = 284;\r
  HTMLTag accessibleHTMLTag = 302;\r
  ARIARole ariaRole = 303;\r
  ARIAAttributesMap ariaAttributes = 357;\r
  string accessibleLabel = 304;\r
  bool isDecorativeImage = 490;\r
  VariableData variableData = 306;\r
  VariableDataMap variableConsumptionMap = 307;\r
  VariableModeBySetMap variableModeBySetMap = 316;\r
  VariableSetMode[] variableSetModes = 312;\r
  VariableSetID variableSetID = 313;\r
  VariableResolvedDataType variableResolvedType = 314;\r
  VariableDataValues variableDataValues = 315;\r
  string variableTokenName = 350;\r
  VariableTimingDisplayUnit timingDisplayUnit = 566;\r
  VariableScope[] variableScopes = 353;\r
  VariableDataMap parameterConsumptionMap = 445;\r
  CodeSyntaxMap codeSyntax = 358;\r
  PasteSource pasteSource = 388;\r
  EditorType pageType = 397;\r
  GUID strokeBrushGuid = 446;\r
  uint64 strokeSeed = 482;\r
  VariableWidthPoint[] variableWidthPoints = 447;\r
  DynamicStrokeSettings dynamicStrokeSettings = 448;\r
  ScatterStrokeSettings scatterStrokeSettings = 449;\r
  StretchStrokeSettings stretchStrokeSettings = 450;\r
  Matrix[] scatterBrushTransforms = 488;\r
  BrushType brushType = 452;\r
  OptionalVector pathTrim = 542;\r
  float strokeOffset = 554;\r
  VariableSetID backingVariableSetId = 377;\r
  VariableID overriddenVariableId = 464;\r
  VariableIdOrVariableOverrideId backingVariableId = 378;\r
  bool isCollectionExtendable = 385;\r
  string rootVariableKey = 386;\r
  InheritedVariablesData inheritedVariableIds = 517;\r
  HandoffStatusMap handoffStatusMap = 361;\r
  AgendaPositionMap agendaPositionMap = 327;\r
  AgendaMetadataMap agendaMetadataMap = 328;\r
  MigrationStatus migrationStatus = 329;\r
  bool isSoftDeleted = 330;\r
  EditInfo editInfo = 331;\r
  ColorProfile colorProfile = 341;\r
  SymbolId detachedSymbolId = 342;\r
  ChildReadingDirection childReadingDirection = 346;\r
  string readingIndex = 347;\r
  DocumentColorProfile documentColorProfile = 349;\r
  DeveloperRelatedLink[] developerRelatedLinks = 354;\r
  string slideActiveThemeLibKey = 356;\r
  EditScopeInfo editScopeInfo = 365;\r
  SemanticWeight semanticWeight = 374;\r
  SemanticItalic semanticItalic = 375;\r
  bool areSlidesManuallyIndented = 403;\r
  bool isResponsiveSet = 387;\r
  DerivedBreakpointData derivedBreakpointData = 500;\r
  GUID defaultResponsiveSetId = 398;\r
  bool isPrimaryBreakpoint = 458;\r
  GUID primaryResponsiveNodeId = 457;\r
  GUID multiEditGlueId = 462;\r
  float breakpointMinWidth = 501;\r
  bool isBreakpointInFocus = 522;\r
  ResponsiveSetSettings responsiveSetSettings = 400;\r
  NodeBehaviors behaviors = 404;\r
  string sourceCode = 414;\r
  CollaborativeTextOpID[] sourceCodeCollaborativeTextVersion = 534;\r
  CollaborativePlainText collaborativeSourceCode = 444;\r
  CodeLibraryId belongsToCodeLibraryId = 427;\r
  ImportedCodeFiles importedCodeFiles = 467;\r
  CanvasNodeId codeFileCanvasNodeId = 468;\r
  bool isEntrypointCodeFile = 498;\r
  string componentOrStateGroupKey = 502;\r
  uint componentOrStateGroupVersion = 503;\r
  string sourceCodeLibraryKey = 504;\r
  string[] sourceCodeLibraryKeys = 515;\r
  UsedMakeLibrary[] usedMakeLibraries = 524;\r
  string makeLibraryComponentId = 518;\r
  bool shouldHidePreviewForMakeKitCreation = 520;\r
  bool isMakeKit = 551;\r
  PrototypeDevice codePreviewSettings = 531;\r
  CodeExample[] codeExamples = 525;\r
  CodeFileId exportedFromCodeFileId = 428;\r
  string codeExportName = 430;\r
  string codeComponentDescription = 547;\r
  CodeComponentId backingCodeComponentId = 429;\r
  bool isMainCodeComponent = 487;\r
  CodeSnapshotState codeSnapshotState = 431;\r
  NodeChatMessage[] chatMessages = 451;\r
  NodeChatCompressionState chatCompressionState = 485;\r
  AIChatThread aiChatThread = 496;\r
  string codeChatMessagesKey = 484;\r
  CodeSnapshot codeSnapshot = 459;\r
  CodeSnapshotLayers codeSnapshotLayers = 589;\r
  uint codeSnapshotInvalidatedAt = 480;\r
  bool isCodeBehavior = 465;\r
  bool autoForkCode = 469;\r
  bool hasBeenManuallyRenamed = 470;\r
  bool codeCreatedFromDesign = 471;\r
  CanvasNodeId codeCreatedFromDesignNodeId = 481;\r
  ImageImportMap imageImports = 473;\r
  CodeObjectType codeObjectType = 516;\r
  string codeFilePath = 472;\r
  CodeBehaviorData codeBehaviorData = 478;\r
  uint codeLibraryFormat = 519;\r
  bool isCodePreviewPlayingOnCanvas = 527;\r
  CodeEmbedInfo codeEmbedInfo = 532;\r
  bool isEmbedCodeLayer = 546;\r
  CodeSourceInfo codeSourceInfo = 558;\r
  string mimeType = 536;\r
  byte[] blobRef = 537;\r
  CMSSelector cmsSelector = 419;\r
  CMSConsumptionMap cmsConsumptionMap = 420;\r
  CMSRichTextStyleMap cmsRichTextStyleMap = 460;\r
  SymbolId repeaterSymbolId = 539;\r
  RepeaterCmsOverrideData repeaterCmsOverrideData = 540;\r
  RepeaterSymbolOverrideData repeaterSymbolOverrideData = 549;\r
  RepeaterOverrideData repeaterOverrideData = 541;\r
  uint[] aiEditedNodeChangeFieldNumbers = 405;\r
  string aiEditScopeLabel = 408;\r
  FirstDraftData firstDraftData = 407;\r
  FirstDraftKitElementData firstDraftKitElementData = 418;\r
  CooperRevertData cooperRevertData = 421;\r
  CooperTemplateData cooperTemplateData = 461;\r
  BuzzApprovalRequests buzzApprovalRequests = 528;\r
  BuzzApprovalNodeStatusInfo buzzApprovalNodeStatusInfo = 529;\r
  HubFileAttribution hubFileAttribution = 422;\r
  ManagedStringData managedStringData = 454;\r
  ThumbnailInfo thumbnailInfo = 466;\r
  AiCanvasPrompt aiCanvasPrompt = 494;\r
  CanvasNodeId backingNodeId = 499;\r
  string pageStatus = 548;\r
  TRSSTransform2D motionTransform = 523;\r
  int64 timelinePosition = 506;\r
  KeyframeValueData keyframeValue = 507;\r
  VariableData keyframeValueRef = 586;\r
  InterpolationType interpolationType = 505;\r
  BezierHandles bezierHandles = 508;\r
  EasingData easingData = 535;\r
  KeyframeOperation keyframeOperation = 509;\r
  TimelinePositionType timelinePositionType = 510;\r
  bool isClip = 545;\r
  GUID clipId = 511;\r
  uint64 timelineDuration = 512;\r
  int64 timelineOffset = 513;\r
  bool timelineDisabled = 543;\r
  PlaybackStyle playbackStyle = 514;\r
  TimelineDefinitionsMap timelineDefinitions = 552;\r
  TimelineAssignmentsMap timelineAssignments = 553;\r
  AnimationPresets animationPresets = 521;\r
  StyleIdForAnimation[] styleIdsForAnimation = 582;\r
  AnimationPresetId backingAnimationPresetId = 583;\r
  Tools tools = 568;\r
  CustomEffects customEffects = 569;\r
  TransitionOverrideData transitionOverrides = 526;\r
  bool useLegacySmartAnimate = 544;\r
  SourceControlConfig sourceControlConfig = 557;\r
  SpecBlockType specBlockType = 559;\r
  CollaborativePlainText specBlockContent = 560;\r
  string specCodeBlockLanguage = 561;\r
  string specBlockTableAlignment = 562;\r
  int specBlockIndentLevel = 563;\r
  string specImageHash = 575;\r
  int specWidth = 576;\r
  int specHeight = 577;\r
  TableRowColumnSizeMap specBlockTableRowHeights = 578;\r
  TableRowColumnSizeMap specBlockTableColumnWidths = 579;\r
  string specEmbedUrl = 590;\r
  bool placeholder = 565;\r
  string placeholderClientLifecycleId = 584;\r
  int placeholderInvalidateAt = 585;\r
  bool disableJitDst = 567;\r
  CustomToolArtifactRef customToolArtifactRef = 588;\r
}\r
\r
enum GitRepoRefProvider {\r
  UGIT = 0;\r
  GITHUB = 1;\r
  OTHER = 2;\r
}\r
\r
message GitRepoRef {\r
  GitRepoRefProvider provider = 1;\r
  string gitRepo = 2;\r
  string gitRef = 3;\r
}\r
\r
message SourceControlConfig {\r
  GitRepoRef origin = 1;\r
  GitRepoRef upstream = 2;\r
}\r
\r
message CodeSnapshot {\r
  CodeSnapshotState state = 6;\r
  uint invalidatedAt = 7;\r
  Paint[] paints = 1;\r
  Vector offset = 2;\r
  Vector layoutSize = 3;\r
  Vector canvasSize = 5;\r
  uint devicePixelRatio = 4;\r
}\r
\r
message CodeOutputLayer {\r
  NodeChange node = 1;\r
}\r
\r
message CodeSnapshotLayers {\r
  CodeSnapshotState state = 1;\r
  uint invalidatedAt = 2;\r
  CodeOutputLayer[] layers = 3;\r
}\r
\r
message CodeBehaviorData {\r
  string name = 1;\r
  string icon = 2;\r
  string[] nodeTypes = 3;\r
  string category = 4;\r
  uint apiVersion = 5;\r
}\r
\r
message CodeExample {\r
  string exampleName = 1;\r
  string codeExportName = 2;\r
}\r
\r
message UsedMakeLibrary {\r
  string makeLibraryId = 1;\r
}\r
\r
message CookieBannerText {\r
  string bannerHeader = 1;\r
  string bannerDisclaimerExplicit = 2;\r
  string bannerDisclaimerImplicit = 3;\r
  string policyLabel = 4;\r
  string acceptText = 5;\r
  string acknowledgeText = 6;\r
  string manageText = 7;\r
  string rejectText = 8;\r
  string necessaryText = 9;\r
  string necessaryDescription = 10;\r
  string analyticsText = 11;\r
  string analyticsDescription = 12;\r
  string preferencesText = 13;\r
  string preferencesDescription = 14;\r
  string marketingText = 15;\r
  string marketingDescription = 16;\r
  string saveLabel = 17;\r
  string triggerLabel = 18;\r
}\r
\r
message CookieBannerSettings {\r
  bool enabled = 1;\r
  CookieBannerComponentType componentType = 2;\r
  CookieXAlignment xAlignment = 3;\r
  CookieYAlignment yAlignment = 4;\r
  CookieXAlignment triggerXAlignment = 5;\r
  CookieYAlignment triggerYAlignment = 6;\r
  TriggerComponentType triggerComponentType = 7;\r
  string policyUrl = 8;\r
  CookieBannerText text = 9;\r
  GUID policyLink = 10;\r
  string locale = 11;\r
}\r
\r
enum CookieBannerComponentType {\r
  BANNER = 0;\r
  MODAL = 1;\r
}\r
\r
enum TriggerComponentType {\r
  BANNER = 0;\r
  TAG = 1;\r
}\r
\r
enum CookieXAlignment {\r
  LEFT = 0;\r
  CENTER = 1;\r
  RIGHT = 2;\r
}\r
\r
enum CookieYAlignment {\r
  TOP = 0;\r
  CENTER = 1;\r
  BOTTOM = 2;\r
}\r
\r
message ResponsiveSetSettings {\r
  string title = 1;\r
  string description = 2;\r
  ResponsiveScalingMode scalingMode = 3;\r
  float scalingMinFontSize = 4;\r
  float scalingMaxFontSize = 5;\r
  float scalingMinLayoutWidth = 6;\r
  float scalingMaxLayoutWidth = 7;\r
  string lang = 8;\r
  string faviconHash = 9;\r
  string socialImageHash = 10;\r
  string googleAnalyticsID = 11;\r
  bool blockSearchIndexing = 12;\r
  string customCodeHeadStart = 13;\r
  string customCodeHeadEnd = 14;\r
  string customCodeBodyStart = 15;\r
  string customCodeBodyEnd = 16;\r
  GUID faviconID = 17;\r
  GUID socialImageID = 18;\r
  bool addBypassLinks = 19;\r
  bool ignoreReducedMotion = 20;\r
  CookieBannerSettings cookieBanner = 21;\r
}\r
\r
enum ResponsiveScalingMode {\r
  REFLOW = 0;\r
  SCALE = 1;\r
}\r
\r
message CMSSelector {\r
  string cmsCollectionId = 1;\r
  CMSFilterCritera filterCriteria = 2;\r
  CMSSelectorSort[] sorts = 3;\r
  uint limit = 4;\r
}\r
\r
message CMSFilterCritera {\r
  CMSFilterCriteriaMatchType matchType = 1;\r
  CMSSelectorFilter[] filters = 2;\r
}\r
\r
enum CMSFilterCriteriaMatchType {\r
  MATCH_ALL = 0;\r
  MATCH_ANY = 1;\r
}\r
\r
message CMSSelectorFilter {\r
  string cmsFieldId = 1;\r
  CMSSelectorFilterOperator op = 2;\r
  string comparisonValue = 3;\r
}\r
\r
enum CMSSelectorFilterOperator {\r
  EQUALS = 0;\r
}\r
\r
message CMSSelectorSort {\r
  string cmsFieldId = 1;\r
  CMSFieldOrderBy orderBy = 2;\r
}\r
\r
enum CMSFieldOrderBy {\r
  ASCENDING = 0;\r
  DESCENDING = 1;\r
}\r
\r
message CMSConsumptionMap {\r
  CMSConsumptionMapEntry[] entries = 1;\r
}\r
\r
message CMSConsumptionMapEntry {\r
  CMSConsumptionField consumptionField = 1;\r
  string cmsFieldId = 2;\r
}\r
\r
enum CMSConsumptionField {\r
  MISSING = 0;\r
  TEXT_DATA = 1;\r
}\r
\r
message CMSRichTextStyleMap {\r
  CMSRichTextStyleEntry[] entries = 1;\r
}\r
\r
message CMSRichTextStyleEntry {\r
  CMSRichTextStyleClass styleClass = 1;\r
  CMSRichTextDescriptor textDescriptor = 2;\r
}\r
\r
enum CMSRichTextStyleClass {\r
  HEADING1 = 0;\r
  HEADING2 = 1;\r
  HEADING3 = 2;\r
  HEADING4 = 3;\r
  HEADING5 = 4;\r
  HEADING6 = 5;\r
  PARAGRAPH = 6;\r
  LINK = 7;\r
  BLOCKQUOTE = 8;\r
}\r
\r
message CMSRichTextDescriptor {\r
  StyleId textStyleId = 1;\r
  FontName[] fontNameVariants = 2;\r
}\r
\r
message RepeaterCmsOverrideData {\r
  NodeChange[] overrides = 1;\r
}\r
\r
message RepeaterOverrideData {\r
  NodeChange[] parentIndexOverrides = 1;\r
}\r
\r
message RepeaterSymbolOverrideData {\r
  RepeaterPositionOverrides[] overridesByPosition = 1;\r
}\r
\r
message RepeaterPositionOverrides {\r
  ParentIndex position = 1;\r
  NodeChange[] overrides = 2;\r
}\r
\r
message InheritedVariablesData {\r
  InheritedVariableEntry[] variableIds = 1;\r
}\r
\r
message InheritedVariableEntry {\r
  VariableID variableId = 1;\r
}\r
\r
message HubFileAttribution {\r
  string hubFileId = 1;\r
  string hubFileName = 2;\r
}\r
\r
message ManagedStringData {\r
  string key = 1;\r
  string context = 2;\r
  string locale = 3;\r
  ManagedStringNode content = 4;\r
  ManagedStringContentSchema contentSchema = 5;\r
}\r
\r
enum ManagedStringContentSchema {\r
  V0 = 0;\r
}\r
\r
enum ManagedStringNodeType {\r
  TEXT = 0;\r
  CONCATENATE = 1;\r
  PLURAL = 2;\r
  PLACEHOLDER = 3;\r
}\r
\r
message ManagedStringNode {\r
  ManagedStringNodeType type = 1;\r
  ManagedStringTextNodeData textNodeData = 2;\r
  ManagedStringConcatenateAstNodeData concatenateNodeData = 3;\r
  ManagedStringPluralAstNodeData pluralNodeData = 4;\r
  ManagedStringPlaceholderAstNodeData placeholderNodeData = 5;\r
}\r
\r
message ManagedStringTextNodeData {\r
  string value = 1;\r
}\r
\r
message ManagedStringConcatenateAstNodeData {\r
  ManagedStringNode[] values = 1;\r
}\r
\r
enum ManagedStringPluralType {\r
  ZERO = 0;\r
  ONE = 1;\r
  TWO = 2;\r
  FEW = 3;\r
  MANY = 4;\r
  OTHER = 5;\r
}\r
\r
message ManagedStringPluralAstNodeData {\r
  string identifier = 1;\r
  ManagedStringPluralTypeMapEntry[] conditions = 2;\r
}\r
\r
message ManagedStringPluralTypeMapEntry {\r
  ManagedStringPluralType key = 1;\r
  ManagedStringNode value = 2;\r
}\r
\r
enum ManagedStringFormatType {\r
  TEXT = 0;\r
  DATE = 1;\r
  TIME = 2;\r
  NUMBER = 3;\r
}\r
\r
message ManagedStringPlaceholderAstNodeData {\r
  string identifier = 1;\r
  ManagedStringFormatType formatType = 2;\r
  string formatPattern = 3;\r
}\r
\r
message CooperRevertData {\r
  NodeChange originalValues = 1;\r
}\r
\r
message VideoPlayback {\r
  bool autoplay = 1;\r
  bool mediaLoop = 2;\r
  bool muted = 3;\r
  bool showControls = 4;\r
  uint startTimeMs = 5;\r
  uint endTimeMs = 6;\r
}\r
\r
enum MediaAction {\r
  PLAY = 0;\r
  PAUSE = 1;\r
  TOGGLE_PLAY_PAUSE = 2;\r
  MUTE = 3;\r
  UNMUTE = 4;\r
  TOGGLE_MUTE_UNMUTE = 5;\r
  SKIP_FORWARD = 6;\r
  SKIP_BACKWARD = 7;\r
  SKIP_TO = 8;\r
  SET_PLAYBACK_RATE = 9;\r
}\r
\r
enum AnimationTimelineAction {\r
  PLAY = 0;\r
  PAUSE = 1;\r
  TOGGLE_PLAY_PAUSE = 2;\r
  SET_PLAYHEAD = 3;\r
}\r
\r
message WidgetHoverStyle {\r
  Paint[] fillPaints = 1;\r
  Paint[] strokePaints = 2;\r
  float opacity = 3;\r
  bool areFillPaintsSet = 4;\r
  bool areStrokePaintsSet = 5;\r
  bool isOpacitySet = 6;\r
}\r
\r
message WidgetDerivedSubtreeCursor {\r
  uint sessionID = 1;\r
  uint counter = 2;\r
}\r
\r
message MultiplayerMap {\r
  MultiplayerMapEntry[] entries = 1;\r
}\r
\r
message MultiplayerMapEntry {\r
  string key = 1;\r
  string value = 2;\r
}\r
\r
message VariableDataMap {\r
  VariableDataMapEntry[] entries = 1;\r
}\r
\r
message VariableDataMapEntry {\r
  uint nodeField = 1;\r
  VariableData variableData = 2;\r
  VariableField variableField = 3;\r
}\r
\r
enum VariableField {\r
  MISSING = 0;\r
  CORNER_RADIUS = 1;\r
  PARAGRAPH_SPACING = 2;\r
  PARAGRAPH_INDENT = 3;\r
  STROKE_WEIGHT = 4;\r
  STACK_SPACING = 5;\r
  STACK_PADDING_LEFT = 6;\r
  STACK_PADDING_TOP = 7;\r
  STACK_PADDING_RIGHT = 8;\r
  STACK_PADDING_BOTTOM = 9;\r
  VISIBLE = 10;\r
  TEXT_DATA = 11;\r
  WIDTH = 12;\r
  HEIGHT = 13;\r
  RECTANGLE_TOP_LEFT_CORNER_RADIUS = 14;\r
  RECTANGLE_TOP_RIGHT_CORNER_RADIUS = 15;\r
  RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS = 16;\r
  RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS = 17;\r
  BORDER_TOP_WEIGHT = 18;\r
  BORDER_BOTTOM_WEIGHT = 19;\r
  BORDER_LEFT_WEIGHT = 20;\r
  BORDER_RIGHT_WEIGHT = 21;\r
  VARIANT_PROPERTIES = 22;\r
  STACK_COUNTER_SPACING = 23;\r
  MIN_WIDTH = 24;\r
  MAX_WIDTH = 25;\r
  MIN_HEIGHT = 26;\r
  MAX_HEIGHT = 27;\r
  FONT_FAMILY = 28;\r
  FONT_STYLE = 29;\r
  FONT_VARIATIONS = 30;\r
  OPACITY = 31;\r
  FONT_SIZE = 32;\r
  LETTER_SPACING = 34;\r
  LINE_HEIGHT = 36;\r
  OVERRIDDEN_SYMBOL_ID = 37;\r
  HYPERLINK = 38;\r
  CMS_SERIALIZED_RICH_TEXT_DATA = 39;\r
  SLOT_CONTENT_ID = 40;\r
  GRID_ROW_GAP = 41;\r
  GRID_COLUMN_GAP = 42;\r
  X_POSITION = 43;\r
  Y_POSITION = 44;\r
  ROTATION = 45;\r
  MOTION_TRANSLATION_X = 46;\r
  MOTION_TRANSLATION_Y = 47;\r
  MOTION_ROTATION = 48;\r
  MOTION_SCALE_X = 49;\r
  MOTION_SCALE_Y = 50;\r
  MOTION_SHEAR = 51;\r
  SCROLL_OFFSET_X = 52;\r
  SCROLL_OFFSET_Y = 53;\r
  PATH_TRIM_START = 54;\r
  PATH_TRIM_END = 55;\r
  DISSOLVE_PROGRESS = 56;\r
  EASING_DATA = 57;\r
  MEDIA_CURRENT_TIME = 58;\r
  TRANSFORM_3D_PERSPECTIVE = 59;\r
  TRANSFORM_3D_TRANSLATION_Z = 60;\r
  TRANSFORM_3D_ROTATION_X = 61;\r
  TRANSFORM_3D_ROTATION_Y = 62;\r
  TRANSFORM_3D_ROTATION_Z = 63;\r
  POLYGON_COUNT = 64;\r
  ARC_DATA_STARTING_ANGLE = 65;\r
  ARC_DATA_ENDING_ANGLE = 66;\r
  ARC_DATA_INNER_RADIUS = 67;\r
}\r
\r
message VariableModeBySetMap {\r
  VariableModeBySetMapEntry[] entries = 1;\r
}\r
\r
message VariableModeBySetMapEntry {\r
  VariableSetID variableSetID = 1;\r
  GUID variableModeID = 2;\r
  VariableSetID variableSetExtensionID = 3;\r
}\r
\r
message CodeSyntaxMap {\r
  CodeSyntaxMapEntry[] entries = 1;\r
}\r
\r
message CodeSyntaxMapEntry {\r
  CodeSyntaxPlatform platform = 1;\r
  string value = 2;\r
}\r
\r
message TableMergedCellMap {\r
  TableMergedCellMapEntry[] entries = 1;\r
}\r
\r
message TableMergedCellMapEntry {\r
  GUID rowId = 1;\r
  GUID colId = 2;\r
  int rowSpan = 3;\r
  int colSpan = 4;\r
}\r
\r
message TableRowColumnPositionMap {\r
  TableRowColumnPositionMapEntry[] entries = 1;\r
}\r
\r
message TableRowColumnPositionMapEntry {\r
  GUID id = 1;\r
  string position = 2;\r
}\r
\r
message GUIDPositionMap {\r
  GUIDPositionMapEntry[] entries = 1;\r
}\r
\r
message GUIDPositionMapEntry {\r
  GUID id = 1;\r
  string position = 2;\r
}\r
\r
message GUIDGridTrackSizeMap {\r
  GUIDGridTrackSizeMapEntry[] entries = 1;\r
}\r
\r
message GUIDGridTrackSizeMapEntry {\r
  GUID id = 1;\r
  GridTrackSize trackSize = 2;\r
}\r
\r
message ObjectAnimationList {\r
  ObjectAnimationListItem[] entries = 1;\r
}\r
\r
message ObjectAnimationListItem {\r
  GUID targetNodeId = 1;\r
  PrototypeAction animation = 2;\r
}\r
\r
message GridTrackSize {\r
  GridTrackSizingFunction minSizing = 1;\r
  GridTrackSizingFunction maxSizing = 2;\r
}\r
\r
message GridTrackSizingFunction {\r
  GridTrackSizingType type = 1;\r
  float value = 2;\r
}\r
\r
enum GridTrackSizingType {\r
  FLEX = 0;\r
  FIXED = 1;\r
  HUG = 2;\r
}\r
\r
message TableRowColumnSizeMap {\r
  TableRowColumnSizeMapEntry[] entries = 1;\r
}\r
\r
message TableRowColumnSizeMapEntry {\r
  GUID id = 1;\r
  float size = 2;\r
}\r
\r
message AgendaPositionMap {\r
  AgendaPositionMapEntry[] entries = 1;\r
}\r
\r
message AgendaPositionMapEntry {\r
  GUID id = 1;\r
  string position = 2;\r
}\r
\r
enum AgendaItemType {\r
  NODE = 0;\r
  BLOCK = 1;\r
}\r
\r
message AgendaMetadataMap {\r
  AgendaMetadataMapEntry[] entries = 1;\r
}\r
\r
message AgendaMetadataMapEntry {\r
  GUID id = 1;\r
  AgendaMetadata data = 2;\r
}\r
\r
message AgendaMetadata {\r
  string name = 1;\r
  AgendaItemType type = 2;\r
  GUID targetNodeID = 3;\r
  AgendaTimerInfo timerInfo = 4;\r
  AgendaVoteInfo voteInfo = 5;\r
  AgendaMusicInfo musicInfo = 6;\r
}\r
\r
message AgendaTimerInfo {\r
  uint timerLength = 1;\r
}\r
\r
message AgendaVoteInfo {\r
  uint voteCount = 1;\r
}\r
\r
message AgendaMusicInfo {\r
  string songID = 1;\r
  uint startTimeMs = 2;\r
}\r
\r
enum DiagramLayoutRuleType {\r
  NONE = 0;\r
  TREE = 1;\r
}\r
\r
struct DiagramParentIndex {\r
  GUID guid;\r
  string position;\r
}\r
\r
enum DiagramLayoutPaused {\r
  NO = 0;\r
  YES = 1;\r
}\r
\r
message ComponentPropRef {\r
  uint nodeField = 1;\r
  GUID defID = 2;\r
  string zombieFallbackName = 3;\r
  ComponentPropNodeField componentPropNodeField = 4;\r
  bool isDeleted = 5;\r
}\r
\r
enum ComponentPropNodeField {\r
  VISIBLE = 0;\r
  TEXT_DATA = 1;\r
  OVERRIDDEN_SYMBOL_ID = 2;\r
  INHERIT_FILL_STYLE_ID = 3;\r
  SLOT_CONTENT_ID = 4;\r
}\r
\r
message ComponentPropAssignment {\r
  GUID defID = 1;\r
  ComponentPropValue value = 2;\r
  VariableData varValue = 3;\r
  DerivedTextData legacyDerivedTextData = 4;\r
}\r
\r
message ComponentPropDef {\r
  GUID id = 1;\r
  string name = 2;\r
  ComponentPropValue initialValue = 3;\r
  string sortPosition = 4;\r
  GUID parentPropDefId = 5;\r
  ComponentPropType type = 6;\r
  bool isDeleted = 7;\r
  ComponentPropPreferredValues preferredValues = 8;\r
  VariableData varValue = 9;\r
  ParameterConfig parameterConfig = 10;\r
  string description = 11;\r
  SlotPropConfig slotPropConfig = 12;\r
  ColorArrayConfig colorArrayConfig = 13;\r
}\r
\r
message ComponentPropValue {\r
  bool boolValue = 1;\r
  TextData textValue = 2;\r
  GUID guidValue = 3;\r
  float floatValue = 4;\r
  EasingData easingData = 5;\r
  Vector vectorValue = 6;\r
  Line lineValue = 7;\r
  Circle circleValue = 8;\r
  Rotation3D rotation3DValue = 9;\r
  CirclePoint circlePointValue = 10;\r
  Gradient gradientValue = 11;\r
  ColorPoint colorPointValue = 12;\r
}\r
\r
message TimelineData {\r
  uint64 durationUs = 1;\r
  bool defaultTimeline = 2;\r
  GUID parentTimelineDefId = 3;\r
  PlaybackStyle playbackStyle = 4;\r
}\r
\r
message TimelineDefinitionsMap {\r
  TimelineDefinitionsMapEntry[] entries = 1;\r
}\r
\r
message TimelineDefinitionsMapEntry {\r
  GUID id = 1;\r
  TimelineData data = 2;\r
}\r
\r
message TimelineAssignmentKey {\r
  GUID assignedTimelineId = 1;\r
  GUID containingTimelineId = 2;\r
}\r
\r
message TimelineBindingData {\r
  int64 offsetUs = 1;\r
  bool disabled = 2;\r
}\r
\r
message TimelineAssignmentsMap {\r
  TimelineAssignmentsMapEntry[] entries = 1;\r
}\r
\r
message TimelineAssignmentsMapEntry {\r
  TimelineAssignmentKey key = 1;\r
  TimelineBindingData value = 2;\r
}\r
\r
enum ComponentPropType {\r
  BOOL = 0;\r
  TEXT = 1;\r
  COLOR = 2;\r
  INSTANCE_SWAP = 3;\r
  VARIANT = 4;\r
  NUMBER = 5;\r
  IMAGE = 6;\r
  SLOT = 7;\r
  EASING = 8;\r
  COLOR_ARRAY = 9;\r
  VECTOR = 10;\r
  LINE = 11;\r
  CIRCLE = 12;\r
  ROTATION_3D = 13;\r
  CIRCLE_POINT = 14;\r
  GRADIENT = 15;\r
  COLOR_POINT = 16;\r
}\r
\r
message ComponentPropPreferredValues {\r
  string[] stringValues = 1;\r
  InstanceSwapPreferredValue[] instanceSwapValues = 2;\r
}\r
\r
message ParameterConfig {\r
  NumberPropConfig numberPropConfig = 1;\r
  ParameterConfigControl control = 2;\r
  SliderConfig sliderConfig = 3;\r
  VariableData label = 4;\r
  InputConfig inputConfig = 5;\r
  SelectConfig selectConfig = 6;\r
  PointConfig pointConfig = 7;\r
  LineConfig lineConfig = 8;\r
  PointRadiusConfig pointRadiusConfig = 9;\r
  Rotation3DConfig rotation3DConfig = 10;\r
  CirclePointConfig circlePointConfig = 11;\r
  ColorPointConfig colorPointConfig = 12;\r
  bool showDividerAbove = 13;\r
}\r
\r
enum ParameterConfigControl {\r
  DEFAULT = 0;\r
  SLIDER = 1;\r
  INPUT = 2;\r
  SELECT = 3;\r
}\r
\r
message InputConfig {\r
  VariableData unit = 1;\r
  VariableData min = 2;\r
  VariableData max = 3;\r
}\r
\r
message SliderConfig {\r
  VariableData min = 1;\r
  VariableData max = 2;\r
  VariableData step = 3;\r
  VariableData unit = 4;\r
}\r
\r
enum PointMode {\r
  CANVAS_AND_UI = 0;\r
  CANVAS = 1;\r
  UI = 2;\r
}\r
\r
message PointConfig {\r
  PointMode mode = 1;\r
  NumberUnits unit = 2;\r
}\r
\r
message Line {\r
  Vector a = 1;\r
  Vector b = 2;\r
}\r
\r
message LineConfig {\r
  PointMode mode = 1;\r
  NumberUnits unit = 2;\r
}\r
\r
message Circle {\r
  Vector center = 1;\r
  float radius = 2;\r
}\r
\r
message PointRadiusConfig {\r
  PointMode mode = 1;\r
  NumberUnits positionUnit = 2;\r
  NumberUnits radiusUnit = 3;\r
  float minRadius = 4;\r
  float maxRadius = 5;\r
}\r
\r
message Rotation3D {\r
  float x = 1;\r
  float y = 2;\r
  float z = 3;\r
  float translateZ = 4;\r
}\r
\r
message Rotation3DConfig {\r
  PointMode mode = 1;\r
}\r
\r
message CirclePoint {\r
  Vector center = 1;\r
  float radius = 2;\r
  float angle = 3;\r
}\r
\r
message CirclePointConfig {\r
  PointMode mode = 1;\r
  NumberUnits positionUnit = 2;\r
  NumberUnits radiusUnit = 3;\r
  float minRadius = 4;\r
  float maxRadius = 5;\r
}\r
\r
message ColorPoint {\r
  Vector point = 1;\r
  VariableData color = 2;\r
}\r
\r
message ColorPointConfig {\r
  PointMode mode = 1;\r
  NumberUnits unit = 2;\r
}\r
\r
message Gradient {\r
  GradientStop[] stops = 1;\r
}\r
\r
message GradientStop {\r
  float position = 1;\r
  VariableData color = 2;\r
}\r
\r
message SelectOption {\r
  VariableData value = 1;\r
  string label = 2;\r
}\r
\r
message SelectConfig {\r
  SelectOption[] options = 1;\r
}\r
\r
message ColorArrayConfig {\r
  uint minLength = 1;\r
  uint maxLength = 2;\r
}\r
\r
message SlotPropConfig {\r
  bool stretchChildOnInsert = 1;\r
  bool displayByDefault = 2;\r
  uint minChildren = 3;\r
  uint maxChildren = 4;\r
  bool allowPreferredValuesOnly = 5;\r
}\r
\r
message NumberPropConfig {\r
  ParameterConfigControl control = 1;\r
  VariableData min = 2;\r
  VariableData max = 3;\r
  VariableData step = 4;\r
}\r
\r
message InstanceSwapPreferredValue {\r
  InstanceSwapPreferredValueType type = 1;\r
  string key = 2;\r
}\r
\r
enum InstanceSwapPreferredValueType {\r
  COMPONENT = 0;\r
  STATE_GROUP = 1;\r
}\r
\r
enum WidgetEvent {\r
  MOUSE_DOWN = 0;\r
  CLICK = 1;\r
  TEXT_EDIT_END = 2;\r
  ATTACHED_STICKABLES_CHANGED = 3;\r
  STUCK_STATUS_CHANGED = 4;\r
}\r
\r
enum WidgetInputBehavior {\r
  WRAP = 0;\r
  TRUNCATE = 1;\r
  MULTILINE = 2;\r
}\r
\r
message WidgetMetadata {\r
  string pluginID = 1;\r
  string pluginVersionID = 2;\r
  string widgetName = 3;\r
  bool isResizable = 4;\r
  bool isRotatable = 5;\r
}\r
\r
enum WidgetPropertyMenuItemType {\r
  ACTION = 0;\r
  SEPARATOR = 1;\r
  COLOR = 2;\r
  DROPDOWN = 3;\r
  COLOR_SELECTOR = 4;\r
  TOGGLE = 5;\r
  LINK = 6;\r
}\r
\r
message WidgetPropertyMenuSelectorOption {\r
  string option = 1;\r
  string tooltip = 2;\r
}\r
\r
enum WidgetInputTextNodeType {\r
  WIDGET_CONTROLLED = 0;\r
  RICH_TEXT = 1;\r
}\r
\r
message WidgetPropertyMenuItem {\r
  string propertyName = 1;\r
  string tooltip = 2;\r
  WidgetPropertyMenuItemType itemType = 3;\r
  string icon = 4;\r
  WidgetPropertyMenuSelectorOption[] options = 5;\r
  string selectedOption = 6;\r
  bool isToggled = 7;\r
  string href = 8;\r
  bool allowCustomColor = 9;\r
}\r
\r
enum CodeBlockLanguage {\r
  TYPESCRIPT = 0;\r
  CPP = 1;\r
  RUBY = 2;\r
  CSS = 3;\r
  JAVASCRIPT = 4;\r
  HTML = 5;\r
  JSON = 6;\r
  GRAPHQL = 7;\r
  PYTHON = 8;\r
  GO = 9;\r
  SQL = 10;\r
  SWIFT = 11;\r
  KOTLIN = 12;\r
  RUST = 13;\r
  BASH = 14;\r
  PLAINTEXT = 15;\r
  MARKDOWN = 16;\r
}\r
\r
enum CodeBlockTheme {\r
  FIGJAM_DARK = 0;\r
  DRACULA = 1;\r
  DUOTONE_SEA = 2;\r
  DUOTONE_SPACE = 3;\r
  DUOTONE_EARTH = 4;\r
  DUOTONE_FOREST = 5;\r
  DUOTONE_LIGHT = 6;\r
}\r
\r
enum SpecBlockType {\r
  DEFAULT = 0;\r
  PARAGRAPH = 1;\r
  HEADING_1 = 2;\r
  HEADING_2 = 3;\r
  HEADING_3 = 4;\r
  HEADING_4 = 5;\r
  HEADING_5 = 6;\r
  HEADING_6 = 7;\r
  CODE_BLOCK = 8;\r
  BLOCK_QUOTE = 9;\r
  HORIZONTAL_RULE = 10;\r
  ORDERED_LIST_ITEM = 11;\r
  UNORDERED_LIST_ITEM = 12;\r
  DOCUMENT = 13;\r
  TABLE = 14;\r
  TABLE_ROW = 15;\r
  TABLE_CELL = 16;\r
  TODO_LIST_ITEM_UNCHECKED = 17;\r
  TODO_LIST_ITEM_CHECKED = 18;\r
  IMAGE = 19;\r
  EMBED = 20;\r
}\r
\r
enum InternalEnumForTest {\r
  OLD = 1;\r
}\r
\r
message InternalDataForTest {\r
  int testFieldA = 1;\r
}\r
\r
message StateGroupPropertyValueOrder {\r
  string property = 1;\r
  string[] values = 2;\r
}\r
\r
enum BackfillError {\r
  NONE = 0;\r
  TRANSIENT_RETRYING = 1;\r
  PERMANENTLY_FAILED = 2;\r
  PASTE_FAILED = 3;\r
}\r
\r
message PartialPasteAnnotation {\r
  bool isPartial = 1;\r
  uint64 annotatedAt = 2;\r
  BackfillError errorState = 3;\r
}\r
\r
message VariantPropSpec {\r
  GUID propDefId = 1;\r
  string value = 2;\r
}\r
\r
message TextListData {\r
  int listID = 1;\r
  BulletType bulletType = 2;\r
  int indentationLevel = 3;\r
  int lineNumber = 4;\r
}\r
\r
enum BulletType {\r
  ORDERED = 0;\r
  UNORDERED = 1;\r
  INDENT = 2;\r
  NO_LIST = 3;\r
}\r
\r
message TextLineData {\r
  LineType lineType = 1;\r
  int styleId = 10;\r
  int indentationLevel = 2;\r
  SourceDirectionality sourceDirectionality = 9;\r
  Directionality directionality = 3;\r
  DirectionalityIntent directionalityIntent = 4;\r
  int downgradeStyleId = 5;\r
  int consistencyStyleId = 6;\r
  int listStartOffset = 7;\r
  bool isFirstLineOfList = 8;\r
}\r
\r
message DerivedTextLineData {\r
  Directionality directionality = 1;\r
}\r
\r
enum LineType {\r
  PLAIN = 0;\r
  ORDERED_LIST = 1;\r
  UNORDERED_LIST = 2;\r
  BLOCKQUOTE = 3;\r
  HEADER = 4;\r
}\r
\r
enum SourceDirectionality {\r
  AUTO = 0;\r
  LTR = 1;\r
  RTL = 2;\r
}\r
\r
enum Directionality {\r
  LTR = 0;\r
  RTL = 1;\r
}\r
\r
enum DirectionalityIntent {\r
  IMPLICIT = 0;\r
  EXPLICIT = 1;\r
}\r
\r
message PrototypeInteraction {\r
  GUID id = 1;\r
  PrototypeEvent event = 2;\r
  PrototypeAction[] actions = 3;\r
  bool isDeleted = 4;\r
  int stateManagementVersion = 5;\r
}\r
\r
message PrototypeEvent {\r
  InteractionType interactionType = 1;\r
  bool interactionMaintained = 2;\r
  float interactionDuration = 3;\r
  KeyTrigger keyTrigger = 4;\r
  string voiceEventPhrase = 5;\r
  float transitionTimeout = 6;\r
  float mediaHitTime = 7;\r
}\r
\r
message PrototypeVariableTarget {\r
  VariableID id = 1;\r
  NodeFieldAlias nodeFieldAlias = 2;\r
}\r
\r
message ConditionalActions {\r
  PrototypeAction[] actions = 1;\r
  VariableData condition = 2;\r
}\r
\r
message PrototypeAction {\r
  GUID transitionNodeID = 1;\r
  TransitionType transitionType = 2;\r
  float transitionDuration = 3;\r
  EasingType easingType = 4;\r
  float transitionTimeout = 5;\r
  bool transitionShouldSmartAnimate = 6;\r
  ConnectionType connectionType = 7;\r
  Vector overlayRelativePosition = 9;\r
  NavigationType navigationType = 10;\r
  bool transitionPreserveScroll = 11;\r
  float[] easingFunction = 12;\r
  Vector extraScrollOffset = 13;\r
  bool transitionResetScrollPosition = 25;\r
  bool transitionResetInteractiveComponents = 26;\r
  bool transitionOverridesEnabled = 42;\r
  string connectionURL = 8;\r
  bool openUrlInNewTab = 18;\r
  VariableData linkParam = 34;\r
  CMSItemPageTarget cmsTarget = 35;\r
  GUID targetVariableID = 14;\r
  VariableAnyValue targetVariableValue = 15;\r
  PrototypeVariableTarget targetVariable = 19;\r
  VariableData targetVariableData = 20;\r
  MediaAction mediaAction = 16;\r
  bool transitionResetVideoPosition = 17;\r
  float mediaSkipToTime = 21;\r
  float mediaSkipByAmount = 22;\r
  float mediaPlaybackRate = 36;\r
  VariableData[] conditions = 23;\r
  ConditionalActions[] conditionalActions = 24;\r
  VariableSetID targetVariableSetID = 27;\r
  GUID targetVariableModeID = 28;\r
  string targetVariableSetKey = 29;\r
  VariableSetID variableSetTargetExtensionId = 38;\r
  AnimationType animationType = 30;\r
  GUID animationTargetId = 31;\r
  AnimationPhase animationPhase = 32;\r
  AnimationState animationState = 33;\r
  bool simpleLink = 37;\r
  AnimationTimelineAction animationTimelineAction = 39;\r
  GUID animationTimelineDefId = 41;\r
  float animationSkipToTime = 40;\r
}\r
\r
enum AnimationPhase {\r
  IN = 0;\r
  OUT = 1;\r
}\r
\r
enum AnimationType {\r
  NONE = 0;\r
  FADE = 1;\r
  SLIDE_FROM_LEFT = 2;\r
  SLIDE_FROM_RIGHT = 3;\r
  SLIDE_FROM_TOP = 4;\r
  SLIDE_FROM_BOTTOM = 5;\r
}\r
\r
message AnimationState {\r
  float opacity = 1;\r
  Matrix transform = 2;\r
}\r
\r
message PrototypeStartingPoint {\r
  string name = 1;\r
  string description = 2;\r
  string position = 3;\r
}\r
\r
enum TriggerDevice {\r
  KEYBOARD = 0;\r
  UNKNOWN_CONTROLLER = 1;\r
  XBOX_ONE = 2;\r
  PS4 = 3;\r
  SWITCH_PRO = 4;\r
}\r
\r
message KeyTrigger {\r
  int[] keyCodes = 1;\r
  TriggerDevice triggerDevice = 2;\r
}\r
\r
message Hyperlink {\r
  string url = 1;\r
  GUID guid = 2;\r
  CMSItemPageTarget cmsTarget = 4;\r
  bool openInNewTab = 3;\r
}\r
\r
message CMSItemPageTarget {\r
  GUID nodeId = 1;\r
  string cmsItemId = 2;\r
  string fieldSchemaId = 3;\r
}\r
\r
enum MentionSource {\r
  DEFAULT = 0;\r
  COPY_DUPLICATE = 1;\r
  SILENT_INSERT = 2;\r
}\r
\r
message Mention {\r
  GUID id = 1;\r
  string mentionedUserId = 2;\r
  string mentionedByUserId = 3;\r
  string fileKey = 4;\r
  MentionSource source = 5;\r
  uint64 mentionedUserIdInt = 6;\r
  uint64 mentionedByUserIdInt = 7;\r
  string mentionedUserGroupId = 8;\r
}\r
\r
message EmbedData {\r
  string url = 1;\r
  string srcUrl = 2;\r
  string title = 3;\r
  string thumbnailUrl = 4;\r
  float width = 5;\r
  float height = 6;\r
  string embedType = 7;\r
  string thumbnailImageHash = 8;\r
  string faviconImageHash = 9;\r
  string provider = 10;\r
  string originalText = 11;\r
  string description = 12;\r
  string embedVersionId = 13;\r
  bool isPublishedSite = 14;\r
}\r
\r
message StampData {\r
  string userId = 1;\r
  string votingSessionId = 2;\r
  string stampedByUserId = 3;\r
}\r
\r
message LinkPreviewData {\r
  string url = 1;\r
  string title = 2;\r
  string provider = 3;\r
  string description = 4;\r
  string thumbnailImageHash = 5;\r
  string faviconImageHash = 6;\r
  float thumbnailImageWidth = 7;\r
  float thumbnailImageHeight = 8;\r
}\r
\r
message Viewport {\r
  Rect canvasSpaceBounds = 1;\r
  bool pixelPreview = 2;\r
  float pixelDensity = 3;\r
  GUID canvasGuid = 4;\r
}\r
\r
message Mouse {\r
  MouseCursor cursor = 1;\r
  Vector canvasSpaceLocation = 2;\r
  Rect canvasSpaceSelectionBox = 3;\r
  GUID canvasGuid = 4;\r
  uint cursorHiddenReason = 5;\r
}\r
\r
struct Click {\r
  uint id;\r
  Vector point;\r
}\r
\r
struct ScrollPosition {\r
  GUID node;\r
  Vector scrollOffset;\r
}\r
\r
struct TriggeredOverlay {\r
  GUID overlayGuid;\r
  GUID hotspotGuid;\r
  GUID swapGuid;\r
}\r
\r
message TriggeredOverlayData {\r
  GUID overlayGuid = 1;\r
  GUID hotspotGuid = 2;\r
  GUID swapGuid = 3;\r
  GUID prototypeInteractionGuid = 4;\r
  GUIDPath hotspotBlueprintId = 5;\r
}\r
\r
message TriggeredSetVariableActionData {\r
  GUID nodeForFindingTopmostScreenId = 1;\r
  string targetVariableId = 2;\r
  string targetVariableData = 3;\r
  string resolvedVariableModes = 4;\r
}\r
\r
message TriggeredSetVariableModeActionData {\r
  GUID nodeForFindingTopmostScreenId = 1;\r
  string targetVariableSetKey = 2;\r
  string targetVariableModeId = 3;\r
  VariableSetID targetVariableSetId = 4;\r
}\r
\r
message VideoStateChangeData {\r
  GUID targetNodeId = 1;\r
  bool isPlaying = 2;\r
  bool isPlayingSound = 3;\r
  uint[] currentTimes = 4;\r
  uint actionTakenTimestamp = 5;\r
}\r
\r
message EmbeddedPrototypeData {\r
  GUID nodeId = 1;\r
  uint sessionId = 2;\r
}\r
\r
message PresentedState {\r
  GUID baseScreenID = 1;\r
  TriggeredOverlayData[] overlays = 2;\r
}\r
\r
enum TransitionDirection {\r
  FORWARD = 0;\r
  REVERSE = 1;\r
}\r
\r
message TopLevelPlaybackChange {\r
  PresentedState oldState = 1;\r
  PresentedState newState = 2;\r
  GUIDPath hotspotBlueprintID = 3;\r
  GUID interactionID = 4;\r
  bool isHotspotInNewPresentedState = 5;\r
  TransitionDirection direction = 6;\r
  GUIDPath instanceStablePath = 7;\r
}\r
\r
message InstanceStateChange {\r
  GUID stateID = 1;\r
  GUID interactionID = 2;\r
  GUIDPath hotspotStablePath = 3;\r
  GUIDPath instanceStablePath = 4;\r
  PlaybackChangePhase phase = 5;\r
}\r
\r
message TextCursor {\r
  Rect selectionBox = 1;\r
  GUID canvasGuid = 2;\r
  GUID textNodeGuid = 3;\r
}\r
\r
message TextSelection {\r
  Rect[] selectionBoxes = 1;\r
  GUID canvasGuid = 2;\r
  GUID textNodeGuid = 3;\r
  Vector textSelectionRange = 4;\r
  GUID textNodeOrContainingIfGuid = 5;\r
  GUID tableCellRowId = 6;\r
  GUID tableCellColId = 7;\r
}\r
\r
enum PlaybackChangePhase {\r
  INITIATED = 0;\r
  ABORTED = 1;\r
  COMMITTED = 2;\r
}\r
\r
message PlaybackChangeKeyframe {\r
  PlaybackChangePhase phase = 1;\r
  float progress = 2;\r
  float timestamp = 3;\r
}\r
\r
message StateMapping {\r
  GUIDPath stablePath = 1;\r
  TopLevelPlaybackChange lastTopLevelChange = 2;\r
  PlaybackChangeKeyframe lastTopLevelChangeStatus = 3;\r
  float timestamp = 4;\r
}\r
\r
message ScrollMapping {\r
  GUIDPath blueprintID = 1;\r
  uint overlayIndex = 2;\r
  Vector scrollOffset = 3;\r
}\r
\r
message PlaybackUpdate {\r
  TopLevelPlaybackChange lastTopLevelChange = 1;\r
  PlaybackChangeKeyframe lastTopLevelChangeStatus = 2;\r
  ScrollMapping[] scrollMappings = 3;\r
  float timestamp = 4;\r
  Vector pointerLocation = 5;\r
  bool isTopLevelFrameChange = 6;\r
  StateMapping[] stateMappings = 7;\r
}\r
\r
message ChatMessage {\r
  string text = 1;\r
  string previousText = 2;\r
}\r
\r
message VoiceMetadata {\r
  string connectedCallId = 1;\r
}\r
\r
message AprilFunCursor {\r
  string id = 1;\r
  bool trailEnabled = 2;\r
}\r
\r
message AprilFunFigPal {\r
  string customization = 1;\r
  string name = 2;\r
}\r
\r
enum Heartbeat {\r
  FOREGROUND = 0;\r
  BACKGROUND = 1;\r
}\r
\r
enum SitesViewState {\r
  FILE = 0;\r
  CODE = 1;\r
  DAKOTA = 2;\r
  SETTINGS = 3;\r
  INSERT = 4;\r
  VARIABLES = 5;\r
}\r
\r
enum DesignFullPageViewState {\r
  NONE = 0;\r
  DESIGN_SYSTEM = 1;\r
  VARIABLES = 2;\r
}\r
\r
message AgentInfo {\r
  string name = 1;\r
  string logo = 2;\r
  string oauthClientId = 3;\r
}\r
\r
message UserChange {\r
  uint sessionID = 1;\r
  string stableSessionID = 44;\r
  bool connected = 2;\r
  string name = 3;\r
  Color color = 4;\r
  string imageURL = 5;\r
  Viewport viewport = 6;\r
  Mouse mouse = 7;\r
  GUID[] selection = 8;\r
  uint[] observing = 9;\r
  string deviceName = 10;\r
  Click[] recentClicks = 11;\r
  ScrollPosition[] scrollPositions = 12;\r
  TriggeredOverlay[] triggeredOverlays = 13;\r
  string userID = 14;\r
  GUID lastTriggeredHotspot = 15;\r
  GUID lastTriggeredPrototypeInteractionID = 16;\r
  uint lastTriggeredObjectAnimationIndex = 38;\r
  TriggeredOverlayData[] triggeredOverlaysData = 17;\r
  PlaybackUpdate[] playbackUpdates = 18;\r
  ChatMessage chatMessage = 19;\r
  VoiceMetadata voiceMetadata = 20;\r
  bool canWrite = 21;\r
  bool highFiveStatus = 22;\r
  InstanceStateChange[] instanceStateChanges = 23;\r
  TextCursor textCursor = 24;\r
  TextSelection textSelection = 25;\r
  uint connectedAtTimeS = 26;\r
  bool focusOnTextCursor = 27;\r
  Heartbeat heartbeat = 28;\r
  TriggeredSetVariableActionData[] triggeredSetVariableActionData = 29;\r
  VideoStateChangeData[] videoStateChangeData = 30;\r
  string clientID = 31;\r
  GUID focusedSlideId = 32;\r
  TriggeredSetVariableModeActionData[] triggeredSetVariableModeActionData = 33;\r
  AprilFunCursor aprilFunCursor = 34;\r
  EmbeddedPrototypeData[] embeddedPrototypeData = 35;\r
  GUID activeSlidesEmbeddablePrototype = 36;\r
  GUID[] activeEmbeddedPrototypes = 43;\r
  GUID activeCodeComponentId = 37;\r
  AprilFunFigPal aprilFunFigPal = 39;\r
  CollaborativeTextSelection collaborativeTextSelection = 40;\r
  SitesViewState sitesViewState = 41;\r
  NodeChatExchange[] nodeChatExchanges = 42;\r
  DesignFullPageViewState designFullPageViewState = 45;\r
  AgentInfo agentInfo = 46;\r
}\r
\r
message InteractiveSlideElementChange {\r
  string userID = 1;\r
  string anonymousUserID = 2;\r
  GUID nodeID = 3;\r
  string responseData = 4;\r
}\r
\r
message NodeStatusChange {\r
  GUID[] nodeIds = 1;\r
  SectionStatusInfo statusInfo = 2;\r
}\r
\r
message BuzzApprovalAssetEntry {\r
  GUID assetNodeId = 1;\r
  bool approved = 2;\r
}\r
\r
message BuzzApprovalChange {\r
  BuzzApprovalAssetEntry[] assetEntries = 1;\r
  GUID canvasGridNodeId = 2;\r
  string requestId = 3;\r
}\r
\r
enum SceneGraphQueryBehavior {\r
  DEFAULT = 0;\r
  CONTAINING_PAGE = 1;\r
  PLUGIN = 2;\r
}\r
\r
enum SceneGraphQueryMode {\r
  ADD = 0;\r
  SET = 1;\r
}\r
\r
message SceneGraphQuery {\r
  GUID startingNode = 1;\r
  uint depth = 2;\r
  SceneGraphQueryBehavior behavior = 3;\r
}\r
\r
message NodeChangesMetadata {\r
  uint blobsFieldOffset = 1;\r
}\r
\r
message CursorReaction {\r
  string imageUrl = 1;\r
}\r
\r
message TimerInfo {\r
  bool isPaused = 1;\r
  uint timeRemainingMs = 2;\r
  uint totalTimeMs = 3;\r
  uint timerID = 4;\r
  string setBy = 5;\r
  uint songID = 6;\r
  uint lastReceivedSongTimestampMs = 7;\r
  string songUUID = 8;\r
}\r
\r
message MusicInfo {\r
  bool isPaused = 1;\r
  uint messageID = 2;\r
  string songID = 3;\r
  uint lastReceivedSongTimestampMs = 4;\r
  bool isStopped = 5;\r
}\r
\r
message PresenterNomination {\r
  uint sessionID = 1;\r
  bool isCancelled = 2;\r
}\r
\r
message PresenterInfo {\r
  uint sessionID = 1;\r
  PresenterNomination nomination = 2;\r
  bool isReconnected = 3;\r
}\r
\r
message ClientBroadcast {\r
  uint sessionID = 1;\r
  CursorReaction cursorReaction = 2;\r
  TimerInfo timer = 3;\r
  PresenterInfo presenter = 4;\r
  PresenterInfo prototypePresenter = 5;\r
  MusicInfo music = 6;\r
}\r
\r
enum PasteAssetType {\r
  UNKNOWN = 0;\r
  VARIABLE = 1;\r
}\r
\r
message Message {\r
  MessageType type = 1;\r
  uint sessionID = 2;\r
  string stableSessionID = 42;\r
  uint ackID = 3;\r
  bool isRetransmission = 37;\r
  NodeChange[] nodeChanges = 4;\r
  UserChange[] userChanges = 5;\r
  InteractiveSlideElementChange interactiveSlideElementChange = 32;\r
  NodeStatusChange nodeStatusChange = 36;\r
  BuzzApprovalChange buzzApprovalChange = 44;\r
  Blob[] blobs = 6;\r
  uint blobBaseIndex = 30;\r
  string signalName = 7;\r
  Access access = 8;\r
  string styleSetName = 9;\r
  StyleSetType styleSetType = 10;\r
  StyleSetContentType styleSetContentType = 11;\r
  int pasteID = 12;\r
  Vector pasteOffset = 13;\r
  string pasteFileKey = 14;\r
  string signalPayload = 15;\r
  SceneGraphQuery[] sceneGraphQueries = 16;\r
  NodeChangesMetadata nodeChangesMetadata = 17;\r
  uint fileVersion = 18;\r
  bool pasteIsPartiallyOutsideEnclosingFrame = 19;\r
  GUID pastePageId = 20;\r
  bool isCut = 21;\r
  Message[] localUndoStack = 22;\r
  Message[] localRedoStack = 23;\r
  ClientBroadcast[] broadcasts = 24;\r
  uint reconnectSequenceNumber = 25;\r
  string pasteBranchSourceFileKey = 26;\r
  EditorType pasteEditorType = 27;\r
  string postSyncActions = 28;\r
  GUID[] publishedAssetGuids = 29;\r
  bool dirtyFromInitialLoad = 31;\r
  ClipboardSelectionRegion[] clipboardSelectionRegions = 33;\r
  EncodedOffsetsIndex encodedOffsetsIndex = 34;\r
  bool hasRepeatingContent = 35;\r
  uint64 sentTimestamp = 38;\r
  AnnotationCategory[] annotationCategories = 39;\r
  ClientRenderedMetadata clientRenderedMetadata = 40;\r
  PasteAssetType pasteAssetType = 41;\r
  ObjectAnimationList objectAnimations = 43;\r
  SceneGraphQueryMode sceneGraphQueryMode = 45;\r
}\r
\r
message EncodedOffsetsIndex {\r
  uint nodeChangesFieldOffset = 1;\r
  uint nodeChangesFieldLength = 2;\r
  uint blobsFieldOffset = 3;\r
  GUIDAndEncodedOffset[] nodeChangeOffsets = 4;\r
}\r
\r
struct GUIDAndEncodedOffset {\r
  GUID guid;\r
  uint offset;\r
}\r
\r
message DiffChunk {\r
  uint[] nodeChanges = 1;\r
  NodePhase phase = 2;\r
  NodeChange displayNode = 3;\r
  GUID canvasId = 4;\r
  string canvasName = 5;\r
  bool canvasIsInternal = 6;\r
  uint[] chunksAffectingThisChunk = 7;\r
  NodeChange[] basisParentHierarchy = 8;\r
  NodeChange[] parentHierarchy = 9;\r
  GUID[] basisParentHierarchyGuids = 10;\r
  GUID[] parentHierarchyGuids = 11;\r
}\r
\r
enum DiffType {\r
  BRANCHING = 0;\r
  NODE_CHANGES_ONLY = 1;\r
}\r
\r
message DiffPayload {\r
  NodeChange[] nodeChanges = 1;\r
  Blob[] blobs = 2;\r
  DiffChunk[] diffChunks = 3;\r
  NodeChange[] diffBasis = 4;\r
  NodeChange[] basisParentNodeChanges = 5;\r
  NodeChange[] parentNodeChanges = 6;\r
  DiffType diffType = 7;\r
}\r
\r
enum RichMediaType {\r
  ANIMATED_IMAGE = 0;\r
  VIDEO = 1;\r
}\r
\r
message RichMediaData {\r
  string mediaHash = 1;\r
  RichMediaType richMediaType = 2;\r
}\r
\r
enum VariableDataType {\r
  BOOLEAN = 0;\r
  FLOAT = 1;\r
  STRING = 2;\r
  ALIAS = 3;\r
  COLOR = 4;\r
  EXPRESSION = 5;\r
  MAP = 6;\r
  SYMBOL_ID = 7;\r
  FONT_STYLE = 8;\r
  TEXT_DATA = 9;\r
  INVALID = 10;\r
  NODE_FIELD_ALIAS = 11;\r
  CMS_ALIAS = 12;\r
  PROP_REF = 13;\r
  IMAGE = 14;\r
  MANAGED_STRING_ALIAS = 15;\r
  LINK = 16;\r
  JS_RUNTIME_ALIAS = 17;\r
  SLOT_CONTENT_ID = 18;\r
  DATE = 19;\r
  KEYFRAME_TRACK_ID = 20;\r
  KEYFRAME_TRACK_PARAMETER_DATA = 21;\r
  EASING = 22;\r
  TIMING = 23;\r
  VECTOR = 24;\r
  COLOR_ARRAY = 25;\r
  LINE = 26;\r
  CIRCLE = 27;\r
  ROTATION_3D = 28;\r
  CIRCLE_POINT = 29;\r
  GRADIENT = 30;\r
  COLOR_POINT = 31;\r
}\r
\r
enum VariableResolvedDataType {\r
  BOOLEAN = 0;\r
  FLOAT = 1;\r
  STRING = 2;\r
  COLOR = 4;\r
  MAP = 5;\r
  SYMBOL_ID = 6;\r
  FONT_STYLE = 7;\r
  TEXT_DATA = 8;\r
  IMAGE = 9;\r
  LINK = 10;\r
  JS_RUNTIME_ALIAS = 11;\r
  SLOT_CONTENT_ID = 12;\r
  KEYFRAME_TRACK_ID = 13;\r
  KEYFRAME_TRACK_PARAMETER_DATA = 14;\r
  EASING = 15;\r
  TIMING = 16;\r
  VECTOR = 17;\r
  COLOR_ARRAY = 18;\r
  LINE = 19;\r
  CIRCLE = 20;\r
  ROTATION_3D = 21;\r
  CIRCLE_POINT = 22;\r
  GRADIENT = 23;\r
  COLOR_POINT = 24;\r
}\r
\r
message VariableAnyValue {\r
  bool boolValue = 1;\r
  string textValue = 2;\r
  float floatValue = 3;\r
  VariableID alias = 4;\r
  Color colorValue = 5;\r
  Expression expressionValue = 6;\r
  VariableMap mapValue = 7;\r
  SymbolId symbolIdValue = 8;\r
  VariableFontStyle fontStyleValue = 9;\r
  TextData textDataValue = 10;\r
  NodeFieldAlias nodeFieldAliasValue = 11;\r
  CMSAlias cmsAliasValue = 12;\r
  PropRefValue propRefValue = 13;\r
  ImageParameterValue imageValue = 14;\r
  ManagedStringAlias managedStringAliasValue = 15;\r
  Hyperlink linkValue = 16;\r
  JsRuntimeAlias jsRuntimeAliasValue = 17;\r
  SlotContentId slotContentIdValue = 18;\r
  KeyframeTrackId keyframeTrackIdValue = 19;\r
  KeyframeTrackParameterValue keyframeTrackParameterValue = 20;\r
  EasingData easingValue = 21;\r
  Vector vectorValue = 22;\r
  ColorArray colorArrayValue = 23;\r
  Line lineValue = 24;\r
  Circle circleValue = 25;\r
  Rotation3D rotation3DValue = 26;\r
  CirclePoint circlePointValue = 27;\r
  Gradient gradientValue = 28;\r
  ColorPoint colorPointValue = 29;\r
}\r
\r
enum ExpressionFunction {\r
  ADDITION = 0;\r
  SUBTRACTION = 1;\r
  RESOLVE_VARIANT = 2;\r
  MULTIPLY = 3;\r
  DIVIDE = 4;\r
  EQUALS = 5;\r
  NOT_EQUAL = 6;\r
  LESS_THAN = 7;\r
  LESS_THAN_OR_EQUAL = 8;\r
  GREATER_THAN = 9;\r
  GREATER_THAN_OR_EQUAL = 10;\r
  AND = 11;\r
  OR = 12;\r
  NOT = 13;\r
  STRINGIFY = 14;\r
  TERNARY = 15;\r
  VAR_MODE_LOOKUP = 16;\r
  NEGATE = 17;\r
  IS_TRUTHY = 18;\r
  KEYFRAME = 19;\r
}\r
\r
message Expression {\r
  ExpressionFunction expressionFunction = 1;\r
  VariableData[] expressionArguments = 2;\r
}\r
\r
message VariableMapValue {\r
  string key = 1;\r
  VariableData value = 2;\r
  GUID guidKey = 3;\r
}\r
\r
message VariableMap {\r
  VariableMapValue[] values = 1;\r
}\r
\r
message ColorArray {\r
  VariableData[] colors = 1;\r
}\r
\r
message VariableFontStyle {\r
  VariableData asString = 1;\r
  VariableData asFloat = 2;\r
  VariableData asVariations = 3;\r
}\r
\r
message ImageParameterValue {\r
  Image image = 1;\r
  Image imageThumbnail = 2;\r
  Image animatedImage = 6;\r
  string altText = 3;\r
  uint originalImageHeight = 4;\r
  uint originalImageWidth = 5;\r
  uint animationFrame = 7;\r
}\r
\r
message ThumbnailInfo {\r
  GUID nodeID = 1;\r
  string thumbnailVersion = 2;\r
}\r
\r
message AiCanvasPrompt {\r
  string userPrompt = 1;\r
  string authorId = 2;\r
  GUID[] parentNodeIds = 3;\r
}\r
\r
message NodeFieldAlias {\r
  GUIDPath stablePathToNode = 1;\r
  NodeFieldAliasType nodeField = 2;\r
  string indexOrKey = 3;\r
}\r
\r
enum NodeFieldAliasType {\r
  MISSING = 0;\r
  COMPONENT_PROP_ASSIGNMENTS = 1;\r
}\r
\r
message CMSAlias {\r
  string collectionId = 1;\r
  string itemId = 2;\r
  string fieldId = 3;\r
  VariableDataType type = 4;\r
}\r
\r
message JsRuntimeAlias {\r
  string lookupKey = 1;\r
}\r
\r
message PropRefValue {\r
  GUID defId = 1;\r
}\r
\r
message ManagedStringId {\r
  GUID guid = 1;\r
  AssetRef assetRef = 2;\r
}\r
\r
message ManagedStringPlaceholderMapEntry {\r
  string key = 1;\r
  string value = 2;\r
}\r
\r
message SlotContentId {\r
  GUID guid = 1;\r
}\r
\r
message ManagedStringAlias {\r
  ManagedStringId managedStringId = 1;\r
  ManagedStringPlaceholderMapEntry[] placeholderValues = 2;\r
}\r
\r
message KeyframeTrackId {\r
  GUID guid = 1;\r
  AssetRef assetRef = 2;\r
}\r
\r
message AnimationPresetId {\r
  GUID guid = 1;\r
  AssetRef assetRef = 2;\r
}\r
\r
message ToolId {\r
  GUID guid = 1;\r
  AssetRef assetRef = 2;\r
}\r
\r
message CustomEffectId {\r
  GUID guid = 1;\r
  AssetRef assetRef = 2;\r
}\r
\r
message TRSSTransform2D {\r
  Vector translation = 1;\r
  float rotation = 2;\r
  Vector scale = 3;\r
  float shearX = 4;\r
}\r
\r
message VariableData {\r
  VariableAnyValue value = 1;\r
  VariableDataType dataType = 2;\r
  VariableResolvedDataType resolvedDataType = 3;\r
}\r
\r
message VariableSetMode {\r
  GUID id = 1;\r
  string name = 2;\r
  string sortPosition = 3;\r
  VariableSetID parentVariableSetId = 4;\r
  GUID parentModeId = 5;\r
}\r
\r
message VariableDataValues {\r
  VariableDataValuesEntry[] entries = 1;\r
}\r
\r
message VariableDataValuesEntry {\r
  GUID modeID = 1;\r
  VariableData variableData = 2;\r
}\r
\r
enum VariableScope {\r
  ALL_SCOPES = 0;\r
  TEXT_CONTENT = 1;\r
  CORNER_RADIUS = 2;\r
  WIDTH_HEIGHT = 3;\r
  GAP = 4;\r
  ALL_FILLS = 5;\r
  FRAME_FILL = 6;\r
  SHAPE_FILL = 7;\r
  TEXT_FILL = 8;\r
  STROKE = 9;\r
  STROKE_FLOAT = 10;\r
  EFFECT_FLOAT = 11;\r
  EFFECT_COLOR = 12;\r
  OPACITY = 13;\r
  FONT_STYLE = 14;\r
  FONT_FAMILY = 15;\r
  FONT_SIZE = 16;\r
  LINE_HEIGHT = 17;\r
  LETTER_SPACING = 18;\r
  PARAGRAPH_SPACING = 19;\r
  PARAGRAPH_INDENT = 20;\r
  FONT_VARIATIONS = 21;\r
  TRANSFORM = 22;\r
}\r
\r
message KeyframeAnyValue {\r
  float floatValue = 1;\r
  Color colorValue = 2;\r
  TextData textDataValue = 3;\r
  Vector vectorValue = 4;\r
}\r
\r
enum KeyframeValueType {\r
  FLOAT = 0;\r
  INVALID = 1;\r
  COLOR = 2;\r
  TEXT_DATA = 3;\r
  VECTOR = 4;\r
}\r
\r
message KeyframeValueData {\r
  KeyframeAnyValue value = 1;\r
  KeyframeValueType valueType = 2;\r
}\r
\r
enum KeyframeTrackParameterType {\r
  INVALID = 0;\r
  MANUAL = 1;\r
  ANIMATION_PRESET = 2;\r
}\r
\r
message ManualKeyframeTrackParameter {\r
  KeyframeTrackId keyframeTrackId = 1;\r
  GUID timelineDefId = 2;\r
}\r
\r
message AnimationPresetKeyframeTrackParameter {\r
  AnimationPresetId animationPresetId = 1;\r
  KeyframeTrackId keyframeTrackId = 2;\r
  GUID timelineDefId = 3;\r
}\r
\r
message KeyframeTrackAnyParameter {\r
  ManualKeyframeTrackParameter manual = 1;\r
  AnimationPresetKeyframeTrackParameter animationPreset = 2;\r
  GUID animationStyleBindingId = 3;\r
}\r
\r
message KeyframeTrackParameter {\r
  KeyframeTrackAnyParameter value = 1;\r
  KeyframeTrackParameterType type = 2;\r
}\r
\r
message KeyframeTrackParameterValue {\r
  KeyframeTrackParameter[] parameters = 1;\r
}\r
\r
message AnimationPresets {\r
  AnimationPresetData[] presets = 1;\r
}\r
\r
message AnimationPresetData {\r
  AnimationPresetId animationPresetId = 1;\r
  GUID timelineDefId = 2;\r
}\r
\r
message StyleAnimation {\r
  AnimationPresetId animationPresetId = 1;\r
}\r
\r
message StyleIdForAnimation {\r
  GUID id = 1;\r
  GUID timelineDefId = 2;\r
  StyleId animationStyleId = 3;\r
  int64 timelineOffset = 4;\r
}\r
\r
message Tools {\r
  ToolData[] tools = 1;\r
}\r
\r
message ToolData {\r
  ToolId toolId = 1;\r
  CodeComponentId backingCodeComponentId = 2;\r
  ComponentPropAssignment[] componentPropAssignments = 3;\r
}\r
\r
message CustomEffects {\r
  CustomEffectData[] customEffects = 1;\r
}\r
\r
message CustomEffectData {\r
  CustomEffectId customEffectId = 1;\r
}\r
\r
message SpringParams {\r
  float stiffness = 1;\r
  float damping = 2;\r
  float mass = 3;\r
}\r
\r
message TransitionEasingAnyValue {\r
  SpringParams springEasing = 1;\r
  BezierHandles bezierEasing = 2;\r
}\r
\r
message EasingData {\r
  EasingType easingType = 1;\r
  TransitionEasingAnyValue easingValue = 2;\r
}\r
\r
message TransitionOverride {\r
  GUID id = 1;\r
  float duration = 2;\r
  VariableData durationVar = 3;\r
  float delay = 4;\r
  VariableData delayVar = 5;\r
  EasingData easing = 6;\r
  VariableData easingVar = 7;\r
  uint64 createdAtMs = 8;\r
  GUID[] interactionIDs = 9;\r
  bool disabled = 10;\r
}\r
\r
message TransitionOverrideData {\r
  TransitionOverride[] all = 1;\r
  TransitionOverridePropMap propertyOverrides = 2;\r
}\r
\r
enum TransitionOverrideProp {\r
  ALL = 0;\r
  OPACITY = 1;\r
  TRANSLATION = 2;\r
  ROTATION = 3;\r
  SCALE = 4;\r
}\r
\r
enum TransitionOverrideBindingTopLevelField {\r
  MISSING = 0;\r
  PARAMETER_CONSUMPTION_MAP = 1;\r
  EFFECT_DATA = 2;\r
  FILL_PAINT_DATA = 3;\r
  STROKE_PAINT_DATA = 4;\r
}\r
\r
message TransitionOverrideBindingLocation {\r
  TransitionOverrideBindingTopLevelField topLevelField = 1;\r
  int parameterFieldValue = 2;\r
  int index = 3;\r
  int effectParametrizedFieldValue = 4;\r
}\r
\r
enum KeyframeBindingEffectParametrizedField {\r
  MISSING = 0;\r
  OFFSET_X = 1;\r
  OFFSET_Y = 2;\r
  RADIUS = 3;\r
  SPREAD = 4;\r
  COLOR = 5;\r
  REFRACTION_RADIUS = 6;\r
  SPECULAR_ANGLE = 7;\r
  SPECULAR_INTENSITY = 8;\r
  CHROMATIC_ABERRATION = 9;\r
  SPLAY = 10;\r
  REFRACTION_INTENSITY = 11;\r
  START_RADIUS = 12;\r
  START_OFFSET_X = 13;\r
  START_OFFSET_Y = 14;\r
  END_OFFSET_X = 15;\r
  END_OFFSET_Y = 16;\r
  NOISE_SIZE_X = 17;\r
  NOISE_SIZE_Y = 18;\r
  DENSITY = 19;\r
  EFFECT_OPACITY = 20;\r
  SECONDARY_COLOR = 21;\r
}\r
\r
message NodeContentsKeyframeBindingLocation {\r
  TransitionOverrideBindingTopLevelField topLevelField = 1;\r
  VariableField parameterFieldValue = 2;\r
  int index = 3;\r
  KeyframeBindingEffectParametrizedField effectParametrizedFieldValue = 4;\r
}\r
\r
message TransitionOverridePropMap {\r
  TransitionOverridePropMapEntry[] entries = 1;\r
}\r
\r
message TransitionOverridePropMapEntry {\r
  TransitionOverrideProp prop = 1;\r
  TransitionOverride[] overrides = 2;\r
  TransitionOverrideBindingLocation bindingLocation = 3;\r
  NodeContentsKeyframeBindingLocation nodeContentsBindingLocation = 4;\r
}\r
\r
enum CodeSyntaxPlatform {\r
  WEB = 0;\r
  ANDROID = 1;\r
  iOS = 2;\r
}\r
\r
message OptionalVector {\r
  Vector value = 1;\r
}\r
\r
enum HTMLTag {\r
  AUTO = 0;\r
  ARTICLE = 1;\r
  SECTION = 2;\r
  NAV = 3;\r
  ASIDE = 4;\r
  H1 = 5;\r
  H2 = 6;\r
  H3 = 7;\r
  H4 = 8;\r
  H5 = 9;\r
  H6 = 10;\r
  HGROUP = 11;\r
  HEADER = 12;\r
  FOOTER = 13;\r
  ADDRESS = 14;\r
  P = 15;\r
  HR = 16;\r
  PRE = 17;\r
  BLOCKQUOTE = 18;\r
  OL = 19;\r
  UL = 20;\r
  MENU = 21;\r
  LI = 22;\r
  DL = 23;\r
  DT = 24;\r
  DD = 25;\r
  FIGURE = 26;\r
  FIGCAPTION = 27;\r
  MAIN = 28;\r
  DIV = 29;\r
  A = 30;\r
  EM = 31;\r
  STRONG = 32;\r
  SMALL = 33;\r
  S = 34;\r
  CITE = 35;\r
  Q = 36;\r
  DFN = 37;\r
  ABBR = 38;\r
  RUBY = 39;\r
  RT = 40;\r
  RP = 41;\r
  DATA = 42;\r
  TIME = 43;\r
  CODE = 44;\r
  VAR = 45;\r
  SAMP = 46;\r
  KBD = 47;\r
  SUB = 48;\r
  SUP = 49;\r
  I = 50;\r
  B = 51;\r
  U = 52;\r
  MARK = 53;\r
  BDI = 54;\r
  BDO = 55;\r
  SPAN = 56;\r
  BR = 57;\r
  WBR = 58;\r
  PICTURE = 59;\r
  SOURCE = 60;\r
  IMG = 61;\r
  FORM = 62;\r
  LABEL = 63;\r
  INPUT = 64;\r
  BUTTON = 65;\r
  SELECT = 66;\r
  DATALIST = 67;\r
  OPTGROUP = 68;\r
  OPTION = 69;\r
  TEXTAREA = 70;\r
  OUTPUT = 71;\r
  PROGRESS = 72;\r
  METER = 73;\r
  FIELDSET = 74;\r
  LEGEND = 75;\r
  VIDEO = 76;\r
}\r
\r
enum ARIARole {\r
  AUTO = 0;\r
  NONE = 52;\r
  APPLICATION = 30;\r
  BANNER = 67;\r
  COMPLEMENTARY = 68;\r
  CONTENTINFO = 69;\r
  FORM = 70;\r
  MAIN = 71;\r
  NAVIGATION = 72;\r
  REGION = 73;\r
  SEARCH = 74;\r
  SEPARATOR = 13;\r
  ARTICLE = 31;\r
  COLUMNHEADER = 35;\r
  DEFINITION = 36;\r
  DIRECTORY = 38;\r
  DOCUMENT = 39;\r
  GROUP = 44;\r
  HEADING = 45;\r
  IMG = 46;\r
  LIST = 48;\r
  LISTITEM = 49;\r
  MATH = 50;\r
  NOTE = 53;\r
  PRESENTATION = 55;\r
  ROW = 56;\r
  ROWGROUP = 57;\r
  ROWHEADER = 58;\r
  TABLE = 62;\r
  TOOLBAR = 65;\r
  BUTTON = 1;\r
  CHECKBOX = 2;\r
  GRIDCELL = 3;\r
  LINK = 4;\r
  MENUITEM = 5;\r
  MENUITEMCHECKBOX = 6;\r
  MENUITEMRADIO = 7;\r
  OPTION = 8;\r
  PROGRESSBAR = 9;\r
  RADIO = 10;\r
  SCROLLBAR = 11;\r
  SLIDER = 14;\r
  SPINBUTTON = 15;\r
  TAB = 17;\r
  TABPANEL = 18;\r
  TEXTBOX = 19;\r
  TREEITEM = 20;\r
  COMBOBOX = 21;\r
  GRID = 22;\r
  LISTBOX = 23;\r
  MENU = 24;\r
  MENUBAR = 25;\r
  RADIOGROUP = 26;\r
  TABLIST = 27;\r
  TREE = 28;\r
  TREEGRID = 29;\r
  TOOLTIP = 66;\r
  ALERT = 75;\r
  LOG = 76;\r
  MARQUEE = 77;\r
  STATUS = 78;\r
  TIMER = 79;\r
  ALERTDIALOG = 80;\r
  DIALOG = 81;\r
  SEARCHBOX = 12;\r
  SWITCH = 16;\r
  BLOCKQUOTE = 32;\r
  CAPTION = 33;\r
  CELL = 34;\r
  DELETION = 37;\r
  EMPHASIS = 40;\r
  FEED = 41;\r
  FIGURE = 42;\r
  GENERIC = 43;\r
  INSERTION = 47;\r
  METER = 51;\r
  PARAGRAPH = 54;\r
  STRONG = 59;\r
  SUBSCRIPT = 60;\r
  SUPERSCRIPT = 61;\r
  TERM = 63;\r
  TIME = 64;\r
  IMAGE = 82;\r
  HEADING_1 = 83;\r
  HEADING_2 = 84;\r
  HEADING_3 = 85;\r
  HEADING_4 = 86;\r
  HEADING_5 = 87;\r
  HEADING_6 = 88;\r
  HEADER = 89;\r
  FOOTER = 90;\r
  SIDEBAR = 91;\r
  SECTION = 92;\r
  MAINCONTENT = 93;\r
  TABLE_CELL = 94;\r
  WIDGET = 95;\r
}\r
\r
message MigrationStatus {\r
  bool dsdCleanup = 1;\r
}\r
\r
message NodeFieldMap {\r
  NodeFieldMapEntry[] entries = 1;\r
}\r
\r
message NodeFieldMapEntry {\r
  GUID guid = 1;\r
  uint field = 2;\r
  uint lastModifiedSequenceNumber = 3;\r
}\r
\r
enum ColorProfile {\r
  SRGB = 0;\r
  DISPLAY_P3 = 1;\r
}\r
\r
enum DocumentColorProfile {\r
  LEGACY = 0;\r
  SRGB = 1;\r
  DISPLAY_P3 = 2;\r
}\r
\r
enum ChildReadingDirection {\r
  NONE = 0;\r
  LEFT_TO_RIGHT = 1;\r
  RIGHT_TO_LEFT = 2;\r
}\r
\r
message ARIAAttributeAnyValue {\r
  bool boolValue = 1;\r
  string stringValue = 2;\r
  float floatValue = 3;\r
  int intValue = 4;\r
  string[] stringArrayValue = 5;\r
}\r
\r
enum ARIAAttributeDataType {\r
  BOOLEAN = 0;\r
  STRING = 1;\r
  FLOAT = 2;\r
  INT = 3;\r
  STRING_LIST = 4;\r
}\r
\r
message ARIAAttributeData {\r
  ARIAAttributeDataType type = 1;\r
  ARIAAttributeAnyValue value = 2;\r
}\r
\r
message ARIAAttributesMap {\r
  ARIAAttributesMapEntry[] entries = 1;\r
}\r
\r
message ARIAAttributesMapEntry {\r
  string attribute = 1;\r
  ARIAAttributeData value = 2;\r
}\r
\r
message HandoffStatusMapEntry {\r
  GUID guid = 1;\r
  SectionStatusInfo handoffStatus = 2;\r
}\r
\r
message HandoffStatusMap {\r
  HandoffStatusMapEntry[] entries = 1;\r
}\r
\r
message EditScopeInfo {\r
  EditScopeStack[] editScopeStacks = 1;\r
  EditScopeSnapshot[] snapshots = 2;\r
}\r
\r
message EditScopeSnapshot {\r
  EditScopeStack[] frames = 1;\r
  uint[] nodeChangeFieldNumbers = 2;\r
}\r
\r
message EditScopeStack {\r
  EditScope[] stack = 1;\r
}\r
\r
message EditScope {\r
  EditScopeType type = 1;\r
  string label = 2;\r
  EditorType editorType = 3;\r
}\r
\r
enum EditScopeType {\r
  INVALID = 0;\r
  TEST_SETUP = 1;\r
  USER = 2;\r
  PLUGIN = 3;\r
  SYSTEM = 4;\r
  REST_API = 5;\r
  ONBOARDING = 6;\r
  AUTOSAVE = 7;\r
  AI = 8;\r
}\r
\r
enum SectionPresetState {\r
  INSERTED = 0;\r
  USER_EDITED = 1;\r
}\r
\r
enum EmojiImageSet {\r
  APPLE = 0;\r
  NOTO = 1;\r
}\r
\r
enum SelectionRegionFocusType {\r
  NONE = 0;\r
  PRIMARY = 1;\r
  SECONDARY = 2;\r
}\r
\r
message SectionPresetInfo {\r
  uint64 shelfId = 1;\r
  uint64 templateId = 2;\r
  string templateName = 3;\r
  SectionPresetState state = 4;\r
}\r
\r
message ClipboardSelectionRegion {\r
  GUID parent = 1;\r
  GUID[] nodes = 2;\r
  Vector enclosingFrameOffset = 3;\r
  bool pasteIsPartiallyOutsideEnclosingFrame = 4;\r
  SelectionRegionFocusType focusType = 5;\r
}\r
\r
enum FirstDraftKitType {\r
  LOCAL = 0;\r
  LIBRARY = 1;\r
  NONE = 2;\r
}\r
\r
message FirstDraftKit {\r
  string key = 1;\r
  FirstDraftKitType type = 2;\r
}\r
\r
message FirstDraftData {\r
  string generationId = 1;\r
  FirstDraftKit kit = 2;\r
}\r
\r
enum FirstDraftKitElementType {\r
  NONE = 0;\r
  BUILDING_BLOCK = 1;\r
  GROUPED_COMPONENT = 2;\r
}\r
\r
message FirstDraftKitElementData {\r
  FirstDraftKitElementType type = 1;\r
}\r
\r
enum PlatformShapeProperty {\r
  FILL = 0;\r
  STROKE = 1;\r
  TEXT = 2;\r
  STROKE_COLOR = 3;\r
}\r
\r
enum PlatformShapeBehaviorType {\r
  SHAPE = 0;\r
  CONTAINER = 1;\r
  ADVANCED_CONTAINER = 2;\r
}\r
\r
message PlatformShapePropertyMapEntry {\r
  PlatformShapeProperty property = 1;\r
  GUIDPath[] nodePaths = 2;\r
}\r
\r
message PlatformShapeDefinition {\r
  PlatformShapePropertyMapEntry[] propertyMapEntries = 1;\r
  PlatformShapeBehaviorType behaviorType = 2;\r
  GUIDPath thumbnailNode = 3;\r
}\r
\r
message NodeBehaviors {\r
  LinkBehavior link = 1;\r
  AppearBehavior appear = 2;\r
  HoverBehavior hover = 3;\r
  PressBehavior press = 4;\r
  FocusBehavior focus = 5;\r
  ScrollParallaxBehavior scrollParallax = 6;\r
  ScrollTransformBehavior scrollTransform = 7;\r
  CursorBehavior cursor = 8;\r
  MarqueeBehavior marquee = 9;\r
  CodeBehavior[] code = 10;\r
}\r
\r
message BehaviorTransition {\r
  EasingType easingType = 1;\r
  float[] easingFunction = 2;\r
  float transitionDuration = 3;\r
  float delay = 4;\r
  VariableData transitionDurationVar = 5;\r
  VariableData delayVar = 6;\r
}\r
\r
enum AppearBehaviorTrigger {\r
  PAGE_LOAD = 1;\r
  THIS_LAYER_IN_VIEW = 2;\r
  OTHER_LAYER_IN_VIEW = 3;\r
  SCROLL_DIRECTION = 4;\r
}\r
\r
enum RelativeDirection {\r
  UP = 1;\r
  DOWN = 2;\r
  LEFT = 3;\r
  RIGHT = 4;\r
}\r
\r
message AppearBehavior {\r
  AppearBehaviorTrigger trigger = 1;\r
  RelativeDirection direction = 2;\r
  GUID otherLayer = 3;\r
  BehaviorTransition enterTransition = 4;\r
  NodeChange enterState = 5;\r
  BehaviorTransition exitTransition = 6;\r
  NodeChange exitState = 7;\r
  bool playsOnce = 8;\r
  VariableData playsOnceVar = 9;\r
  bool isDeleted = 10;\r
}\r
\r
message HoverBehavior {\r
  BehaviorTransition transition = 1;\r
  NodeChange state = 2;\r
  bool isDeleted = 3;\r
}\r
\r
message PressBehavior {\r
  BehaviorTransition transition = 1;\r
  NodeChange state = 2;\r
  bool isDeleted = 3;\r
}\r
\r
message FocusBehavior {\r
  BehaviorTransition transition = 1;\r
  NodeChange state = 2;\r
  bool isDeleted = 3;\r
}\r
\r
message ScrollParallaxBehavior {\r
  ScrollDirection axis = 1;\r
  float speed = 2;\r
  bool relativeToPage = 3;\r
  VariableData speedVar = 4;\r
  bool isDeleted = 5;\r
}\r
\r
enum ScrollTransformBehaviorTrigger {\r
  PAGE_HEIGHT = 1;\r
  THIS_LAYER_IN_VIEW = 2;\r
  OTHER_LAYER_IN_VIEW = 3;\r
}\r
\r
message ScrollTransformBehavior {\r
  ScrollTransformBehaviorTrigger trigger = 1;\r
  GUID otherLayer = 2;\r
  BehaviorTransition transition = 3;\r
  NodeChange fromState = 4;\r
  NodeChange toState = 5;\r
  bool playsOnce = 6;\r
  bool playsOnceVar = 7;\r
  VariableData playsOnceVar2 = 8;\r
  bool isDeleted = 9;\r
}\r
\r
message CursorBehavior {\r
  float hotspotX = 1;\r
  float hotspotY = 2;\r
  GUID cursorGuid = 3;\r
  bool isDeleted = 4;\r
}\r
\r
message MarqueeBehavior {\r
  RelativeDirection direction = 1;\r
  float speed = 2;\r
  bool shouldLoopInfinitely = 3;\r
  VariableData speedVar = 4;\r
  VariableData shouldLoopInfinitelyVar = 5;\r
  VariableData pauseOnHover = 6;\r
  bool isDeleted = 7;\r
}\r
\r
message CodeBehavior {\r
  CodeComponentId codeComponentId = 1;\r
  ComponentPropAssignment[] componentPropAssignments = 2;\r
  bool isDeleted = 3;\r
}\r
\r
message ClientRenderedMetadata {\r
  string loadID = 1;\r
  string trackingSessionId = 2;\r
  uint trackingSessionSequenceId = 3;\r
  string reconnectID = 4;\r
}\r
\r
enum LinkBehaviorType {\r
  URL = 1;\r
  PAGE = 2;\r
}\r
\r
message LinkBehavior {\r
  LinkBehaviorType type = 1;\r
  string url = 2;\r
  GUID page = 3;\r
  bool openInNewWindow = 4;\r
}\r
\r
message VariableIdOrVariableOverrideId {\r
  VariableID variableId = 1;\r
  VariableOverrideId variableOverrideId = 2;\r
}\r
\r
struct IndexFontVariationAxis {\r
  string tag;\r
  string name;\r
  float min;\r
  float max;\r
  float defaultValue;\r
}\r
\r
struct IndexFontVariationAxisValue {\r
  string tag;\r
  float value;\r
}\r
\r
message IndexFontStyle {\r
  string name = 1;\r
  string postscript = 2;\r
  float weight = 3;\r
  bool italic = 4;\r
  float stretch = 5;\r
  IndexFontVariationAxisValue[] variationAxisValues = 6;\r
}\r
\r
message IndexFontFile {\r
  string filename = 1;\r
  uint version = 2;\r
  string family = 3;\r
  IndexFontStyle[] styles = 4;\r
  IndexFontVariationAxis[] variationAxes = 5;\r
  bool useFontOpticalSize = 6;\r
}\r
\r
struct IndexFamilyRename {\r
  string oldFamily;\r
  string newFamily;\r
}\r
\r
struct IndexStyleRename {\r
  string oldStyle;\r
  string newStyle;\r
}\r
\r
struct IndexFamilyStylesRename {\r
  string familyName;\r
  IndexStyleRename[] styleRenames;\r
}\r
\r
struct IndexRenames {\r
  IndexFamilyRename[] family;\r
  IndexFamilyStylesRename[] style;\r
}\r
\r
struct IndexEmojiSequence {\r
  uint[] codepoints;\r
}\r
\r
struct IndexEmojis {\r
  uint revision;\r
  uint[] sizes;\r
  IndexEmojiSequence[] sequences;\r
}\r
\r
message FontIndex {\r
  uint schemaVersion = 1;\r
  IndexFontFile[] files = 2;\r
  IndexRenames renames = 3;\r
  IndexEmojis emojis = 4;\r
}\r
\r
message SlideThemeData {\r
  ThemeID themeID = 1;\r
  string version = 2;\r
}\r
\r
enum SlideNumber {\r
  NONE = 0;\r
  SLIDE = 1;\r
  SECTION = 2;\r
  SUBSECTION = 3;\r
  TOTAL_WITHIN_DECK = 4;\r
  TOTAL_WITHIN_SECTION = 5;\r
}\r
\r
enum NodeChatMessageType {\r
  USER_MESSAGE = 0;\r
  ASSISTANT_MESSAGE = 1;\r
  TOOL_MESSAGE = 2;\r
  SYSTEM_MESSAGE = 3;\r
}\r
\r
message NodeChatMessage {\r
  GUID id = 1;\r
  NodeChatMessageType type = 2;\r
  string userId = 3;\r
  string textContent = 4;\r
  uint sentAt = 5;\r
  NodeChatToolCall[] toolCalls = 6;\r
  NodeChatToolResult[] toolResults = 7;\r
  uint64 sentAt64 = 8;\r
}\r
\r
message NodeChatToolCall {\r
  string toolCallId = 1;\r
  string toolName = 2;\r
  string argsJson = 3;\r
}\r
\r
message NodeChatToolResult {\r
  string toolCallId = 1;\r
  string toolName = 2;\r
  string resultJson = 3;\r
}\r
\r
message NodeChatExchange {\r
  GUID node = 1;\r
  NodeChatMessage[] messages = 2;\r
  bool isTyping = 3;\r
  FileUpdate[] fileUpdates = 4;\r
}\r
\r
message NodeChatCompressionState {\r
  uint startIndex = 1;\r
  string summary = 2;\r
}\r
\r
message FileUpdate {\r
  string name = 1;\r
  string contents = 2;\r
  bool isDeleted = 3;\r
}\r
\r
message AIChatContentPart {\r
  AIChatContentPartType type = 1;\r
  AIChatContentPartAnyValue value = 2;\r
}\r
\r
enum AIChatContentPartType {\r
  INVALID = 0;\r
  TEXT = 1;\r
  SELECTED_NODE_IDS = 2;\r
}\r
\r
message AIChatContentPartAnyValue {\r
  string textValue = 1;\r
  string[] selectedNodeIds = 2;\r
}\r
\r
enum AIChatMessageRole {\r
  USER = 0;\r
  ASSISTANT = 1;\r
  TOOL = 2;\r
  SYSTEM = 3;\r
}\r
\r
message AIChatMessage {\r
  uint createdAtMs = 1;\r
  AIChatMessageRole role = 2;\r
  AIChatContentPart[] content = 3;\r
  string clientId = 4;\r
  uint64 createdAtMs64 = 5;\r
}\r
\r
message AIChatThread {\r
  AIChatMessage[] messages = 1;\r
}\r
\r
enum CooperTemplateType {\r
  CUSTOM = 0;\r
  TWITTER_POST = 1;\r
  LINKEDIN_POST = 2;\r
  INSTA_POST_SQUARE = 3;\r
  INSTA_POST_PORTRAIT = 4;\r
  INSTA_STORY = 5;\r
  INSTA_AD = 6;\r
  FACEBOOK_POST = 7;\r
  FACEBOOK_COVER_PHOTO = 8;\r
  FACEBOOK_EVENT_COVER = 9;\r
  FACEBOOK_AD_PORTRAIT = 10;\r
  FACEBOOK_AD_SQUARE = 11;\r
  PINTEREST_AD_PIN = 12;\r
  TWITTER_BANNER = 13;\r
  LINKEDIN_POST_SQUARE = 15;\r
  LINKEDIN_POST_PORTRAIT = 16;\r
  LINKEDIN_POST_LANDSCAPE = 17;\r
  LINKEDIN_PROFILE_BANNER = 18;\r
  LINKEDIN_ARTICLE_BANNER = 19;\r
  LINKEDIN_AD_LANDSCAPE = 20;\r
  LINKEDIN_AD_SQUARE = 21;\r
  LINKEDIN_AD_VERTICAL = 22;\r
  YOUTUBE_THUMBNAIL = 23;\r
  YOUTUBE_BANNER = 24;\r
  YOUTUBE_AD = 25;\r
  TWITCH_BANNER = 26;\r
  GOOGLE_LEADERBOARD_AD = 27;\r
  GOOGLE_LARGE_AD = 28;\r
  GOOGLE_MED_AD = 29;\r
  GOOGLE_MOBILE_BANNER_AD = 30;\r
  GOOGLE_SKYSCRAPER_AD = 31;\r
  CARD_HORIZONTAL = 32;\r
  CARD_VERTICAL = 33;\r
  PRINT_US_LETTER = 34;\r
  POSTER = 35;\r
  BANNER_STANDARD = 36;\r
  BANNER_WIDE = 37;\r
  BANNER_ULTRAWIDE = 38;\r
  NAME_TAG_PORTRAIT = 39;\r
  NAME_TAG_LANDSCAPE = 40;\r
  INSTA_REEL_COVER = 41;\r
  ZOOM_BACKGROUND = 42;\r
  TIKTOK_POST = 43;\r
  INSTA_AD_PORTRAIT = 44;\r
  INSTA_POST_TALL_PORTRAIT = 45;\r
  TWITTER_POST_SQUARE = 46;\r
  FACEBOOK_POST_SQUARE = 47;\r
  FACEBOOK_POST_PORTRAIT = 48;\r
  FACEBOOK_STORY = 49;\r
  GOOGLE_SQUARE_AD = 50;\r
  GOOGLE_SMALL_SQUARE_AD = 51;\r
  GOOGLE_NARROW_SKYSCRAPER_AD = 52;\r
  GOOGLE_HALF_PAGE_AD = 53;\r
  GOOGLE_LARGE_LEADERBOARD_AD = 54;\r
  GOOGLE_BILLBOARD_AD = 55;\r
  GOOGLE_BANNER_LEADERBOARD_AD = 56;\r
  GOOGLE_TOP_BANNER_AD = 57;\r
  GOOGLE_MOBILE_LEADERBOARD_BANNER_AD = 58;\r
  GOOGLE_LARGE_MOBILE_BANNER_AD = 59;\r
  GOOGLE_MOBILE_INTERSTITIAL_AD = 60;\r
  GOOGLE_MOBILE_MED_RECTANGLE_AD = 61;\r
  PINTEREST_PIN_STANDARD = 62;\r
  PINTEREST_PIN_SQUARE = 63;\r
  PINTEREST_AD_SQUARE = 64;\r
  PRINT_A4 = 65;\r
}\r
\r
message CooperTemplateData {\r
  CooperTemplateType type = 1;\r
}\r
\r
message ImageImportMap {\r
  ImageImport[] imports = 1;\r
}\r
\r
message ImageImport {\r
  string name = 1;\r
  Image image = 2;\r
}\r
\r
enum InterpolationType {\r
  HOLD = 0;\r
  BEZIER = 1;\r
  SPRING = 2;\r
}\r
\r
message BezierHandles {\r
  float p1x = 1;\r
  float p1y = 2;\r
  float p2x = 3;\r
  float p2y = 4;\r
}\r
\r
enum KeyframeOperation {\r
  SET = 0;\r
  SCALE = 1;\r
  OFFSET = 2;\r
}\r
\r
enum TimelinePositionType {\r
  ABSOLUTE = 0;\r
  RELATIVE = 1;\r
}\r
\r
enum PlaybackStyle {\r
  ONCE = 0;\r
  LOOP = 1;\r
  BOOMERANG = 2;\r
}\r
`);Vr(Wr);function Gr(e){return new Map(e.fields.map(e=>[e.value,e]))}function Kr(e,t){let n=e.fields.get(t.name);return n||(n=Gr(t),e.fields.set(t.name,n)),n}function qr(e,t,n){switch(t.type){case`bool`:case`byte`:e.readByte();return;case`int`:e.readVarInt();return;case`uint`:e.readVarUint();return;case`float`:e.readVarFloat();return;case`string`:e.skipString();return;case`int64`:e.readVarInt64();return;case`uint64`:e.readVarUint64();return}let r=t.type?n.definitions.get(t.type):void 0;if(!r)throw Error(`Invalid Kiwi field type: ${String(t.type)}`);if(r.kind===`ENUM`){e.readVarUint();return}Yr(e,r,n)}function Jr(e,t,n){if(!t.isArray){qr(e,t,n);return}if(t.type===`byte`){e.skipByteArray();return}let r=e.readVarUint();for(;r-->0;)qr(e,t,n)}function Yr(e,t,n){if(t.kind===`STRUCT`){for(let r of t.fields)Jr(e,r,n);return}let r=Kr(n,t);for(;;){let i=e.readVarUint();if(i===0)return;let a=r.get(i);if(!a)throw Error(`Invalid field ${i} in Kiwi ${t.name}`);Jr(e,a,n)}}function Xr(e,t,n){let r=e.readVarUint(),i=t.type?n.definitions.get(t.type):void 0;return i?.kind===`ENUM`?i.fields.find(e=>e.value===r)?.name??null:null}function Zr(e,t,n){let r=Kr(n,t),i=null,a=null,o=null,s=null,c=null,l=null,u=null,d=null,f=!1;for(;;){let t=e.readVarUint();if(t===0)break;let p=r.get(t);if(!p)throw Error(`Invalid field ${t} in Kiwi NodeChange`);switch(p.name){case`guid`:i=e.readVarUint(),a=e.readVarUint();break;case`parentIndex`:o=e.readVarUint(),s=e.readVarUint(),c=e.offset,e.skipString();break;case`phase`:l=Xr(e,p,n);break;case`type`:u=Xr(e,p,n);break;case`name`:u===`DOCUMENT`||u===`CANVAS`?d=e.readString():e.skipString();break;case`internalOnly`:f=!!e.readByte();break;default:Jr(e,p,n)}}if(u!==`DOCUMENT`&&u!==`CANVAS`||i===null||a===null)return null;let p=null;if(c!==null){let t=e.offset;e.offset=c,p=e.readString(),e.offset=t}let m=o===null||s===null?null:`${o}:${s}`;return{sourceId:`${i}:${a}`,parentId:m,position:p,phase:l,type:u,name:d??`Page`,internalOnly:f}}function Qr(e,t){let n=new Map(e.definitions.map(e=>[e.name,e])),r={definitions:n,fields:new Map},i=n.get(`Message`),a=n.get(`NodeChange`);if(i?.kind!==`MESSAGE`||a?.kind!==`MESSAGE`)return[];let o=new rr(t),s=Kr(r,i),c=[];for(;;){let e=o.readVarUint();if(e===0)break;let t=s.get(e);if(!t)throw Error(`Invalid field ${e} in Kiwi Message`);if(t.name!==`nodeChanges`||!t.isArray){Jr(o,t,r);continue}let n=o.readVarUint();for(;n-->0;){let e=Zr(o,a,r);e&&c.push(e)}break}let l=c.find(e=>e.type===`DOCUMENT`&&e.phase!==`REMOVED`)?.sourceId;return c.filter(e=>e.type===`CANVAS`&&e.phase!==`REMOVED`&&(!l||e.parentId===l)).sort((e,t)=>{let n=e.position??``,r=t.position??``;return n<r?-1:+(n>r)}).map(({sourceId:e,name:t,position:n,internalOnly:r})=>({sourceId:e,name:t,position:n,internalOnly:r}))}new Uint8Array([40,181,47,253]);function $r(e){return e.length>=4&&e[0]===40&&e[1]===181&&e[2]===47&&e[3]===253}var ei=new Set((Wr.definitions.find(e=>e.name===`OpenTypeFeature`)?.fields??[]).map(e=>e.name)),ti=[[`fontVariantCommonLigatures`,`LIGA`],[`fontVariantContextualLigatures`,`CALT`],[`fontVariantDiscretionaryLigatures`,`DLIG`],[`fontVariantHistoricalLigatures`,`HLIG`],[`fontVariantOrdinal`,`ORDN`],[`fontVariantSlashedZero`,`ZERO`]],ni=[[`fontVariantNumericFigure`,{LINING:`LNUM`,OLDSTYLE:`ONUM`}],[`fontVariantNumericSpacing`,{PROPORTIONAL:`PNUM`,TABULAR:`TNUM`}],[`fontVariantNumericFraction`,{DIAGONAL:`FRAC`,STACKED:`AFRC`}],[`fontVariantCaps`,{SMALL:`SMCP`,PETITE:`PCAP`,ALL_SMALL:[`SMCP`,`C2SC`],ALL_PETITE:[`PCAP`,`C2PC`],UNICASE:`UNIC`,TITLING:`TITL`}]],ri=Object.fromEntries(ti.map(([e,t])=>[t,e])),ii={LNUM:{field:`fontVariantNumericFigure`,value:`LINING`},ONUM:{field:`fontVariantNumericFigure`,value:`OLDSTYLE`},PNUM:{field:`fontVariantNumericSpacing`,value:`PROPORTIONAL`},TNUM:{field:`fontVariantNumericSpacing`,value:`TABULAR`},FRAC:{field:`fontVariantNumericFraction`,value:`DIAGONAL`},AFRC:{field:`fontVariantNumericFraction`,value:`STACKED`},SMCP:{field:`fontVariantCaps`,value:`SMALL`},PCAP:{field:`fontVariantCaps`,value:`PETITE`},C2SC:{field:`fontVariantCaps`,value:`ALL_SMALL`},C2PC:{field:`fontVariantCaps`,value:`ALL_PETITE`},UNIC:{field:`fontVariantCaps`,value:`UNICASE`},TITL:{field:`fontVariantCaps`,value:`TITLING`}};function ai(e,t,n){let r=t.toUpperCase();e.some(e=>e.tag===r)||e.push({tag:r,enabled:n})}function oi(e){let t=[];for(let[n,r]of ti){let i=e[n];i!==void 0&&ai(t,r,i)}for(let[n,r]of ni){let i=r[String(e[n])];if(Array.isArray(i))for(let e of i)ai(t,e,!0);else i&&ai(t,i,!0)}for(let n of e.toggledOnOTFeatures??[])ai(t,n,!0);for(let n of e.toggledOffOTFeatures??[])ai(t,n,!1);return t}function si(e,t,n,r,i,a){let o=ri[t];if(o){e[o]=n;return}let s=ii[t];if(s){n?(e[s.field]=s.value,a.delete(s.field)):e[s.field]===void 0&&a.set(s.field,`NORMAL`);return}ei.has(t)&&(n?r.push(t):i.push(t))}function ci(e,t){let n=[],r=[],i=new Map;for(let a of t)si(e,a.tag.toUpperCase(),a.enabled,n,r,i);for(let t of i.keys())e[t]=`NORMAL`;n.length>0&&(e.toggledOnOTFeatures=n),r.length>0&&(e.toggledOffOTFeatures=r)}function li(e){return String.fromCharCode(e>>24&255,e>>16&255,e>>8&255,e&255)}function ui(e){if(e.length===4)return(e.charCodeAt(0)<<24|e.charCodeAt(1)<<16|e.charCodeAt(2)<<8|e.charCodeAt(3))>>>0}function di(e){let t=[];for(let n of e.fontVariations??[]){if(typeof n.value!=`number`)continue;let e=typeof n.axisTag==`number`?li(n.axisTag):n.axisName||``;e&&t.push({axis:e,value:n.value})}return t}function fi(e){if(e.length%2!=0)throw Error(`Hex string must contain an even number of characters`);let t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++){let r=Number.parseInt(e.slice(n*2,n*2+2),16);if(Number.isNaN(r))throw Error(`Hex string contains invalid characters`);t[n]=r}return t}var pi=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,`0`));function mi(e){if(typeof e.toHex==`function`)return e.toHex();let t=Array.from({length:e.length},()=>``);for(let n=0;n<e.length;n++)t[n]=pi[e[n]];return t.join(``)}function hi(e){return{r:e.r,g:e.g,b:e.b,a:`a`in e?e.a:1}}function gi(e){let t={type:e.type,color:hi(e.color),opacity:e.opacity,visible:e.visible,blendMode:e.blendMode??`NORMAL`};return e.gradientStops&&(t.stops=e.gradientStops.map(e=>({color:hi(e.color),position:e.position}))),e.gradientTransform&&(t.transform=e.gradientTransform),e.imageHash&&(t.image={hash:fi(e.imageHash)}),e.imageScaleMode&&(t.imageScaleMode=e.imageScaleMode),e.imageTransform&&(t.transform=e.imageTransform),e.sourceNodeId&&(t.sourceNodeId=Xn(e.sourceNodeId)),e.scale&&(t.scale=e.scale),e.spacing&&(t.spacing=e.spacing),e.patternSpacing&&(t.patternSpacing=e.patternSpacing),e.patternTileType&&(t.patternTileType=e.patternTileType),e.verticalAlignment&&(t.verticalAlignment=e.verticalAlignment),e.horizontalAlignment&&(t.horizontalAlignment=e.horizontalAlignment),e.noiseType&&(t.noiseType=e.noiseType),e.density!==void 0&&(t.density=e.density),e.noiseSize&&(t.noiseSize=e.noiseSize),e.customEffectId&&(t.customEffectId={guid:Xn(e.customEffectId)}),t}function _i(e){return e?{r:e.r??0,g:e.g??0,b:e.b??0,a:e.a??1}:{...We}}function vi(e){return Object.keys(e).sort((e,t)=>Number(e)-Number(t)).map(t=>e[Number(t)]).map(e=>e.toString(16).padStart(2,`0`)).join(``)}function yi(e){if(e)return{m00:e.m00,m01:e.m01,m02:e.m02,m10:e.m10,m11:e.m11,m12:e.m12}}var bi=null;function xi(e){bi=e}function Si(e){let t=e.colorVar?.value?.alias;if(!(!t||!bi))return bi(t)??void 0}function Ci(e){let t=Si(e);return t?{color:{...t,a:e.color?.a??1},opacity:e.opacity??t.a}:{color:_i(e.color),opacity:e.opacity??1}}function wi(e){let{color:t,opacity:n}=Ci(e);return{type:e.type,color:t,opacity:n,visible:e.visible??!0,blendMode:e.blendMode??`NORMAL`}}function Ti(e,t){!t.type.startsWith(`GRADIENT`)||!t.stops||(e.gradientStops=t.stops.map(e=>({color:_i(e.color),position:e.position})),t.transform&&(e.gradientTransform=yi(t.transform)))}function Ei(e,t){if(t.type===`IMAGE`){if(t.image&&typeof t.image==`object`){let n=t.image;typeof n.hash==`object`?e.imageHash=vi(n.hash):typeof n.hash==`string`&&(e.imageHash=n.hash)}e.imageScaleMode=t.imageScaleMode??`FILL`,t.transform&&(e.imageTransform=yi(t.transform))}}function Di(e,t){t.sourceNodeId&&(e.sourceNodeId=U(t.sourceNodeId)),t.scale&&(e.scale=t.scale),t.spacing&&(e.spacing=t.spacing),t.patternSpacing&&(e.patternSpacing=t.patternSpacing),t.patternTileType&&(e.patternTileType=t.patternTileType),t.verticalAlignment&&(e.verticalAlignment=t.verticalAlignment),t.horizontalAlignment&&(e.horizontalAlignment=t.horizontalAlignment),t.noiseType&&(e.noiseType=t.noiseType),t.density!==void 0&&(e.density=t.density),t.noiseSize&&(e.noiseSize=t.noiseSize),t.customEffectId?.guid&&(e.customEffectId=U(t.customEffectId.guid))}function Oi(e){return e?e.map(e=>{let t=wi(e);return Ti(t,e),Ei(t,e),Di(t,e),t}):[]}function ki(e,t,n,r,i,a){if(!e)return[];let o=`CENTER`;return n===`INSIDE`?o=`INSIDE`:n===`OUTSIDE`&&(o=`OUTSIDE`),e.map(e=>{let{color:n,opacity:s}=Ci(e);return{color:n,weight:t??1,opacity:s,visible:e.visible??!0,align:o,cap:r??`NONE`,join:i??`MITER`,dashPattern:a??[]}})}function Ai(e){return e?e.map(e=>({type:e.type,color:_i(e.color),offset:e.offset??{x:0,y:0},radius:e.radius??0,spread:e.spread??0,visible:e.visible??!0,blendMode:e.blendMode??`NORMAL`,showShadowBehindNode:e.showShadowBehindNode??!0})):[]}function ji(e,t,n){return t===0&&n===0?e:Fe(e,1,0,0,1,t,n)}function Mi(e,t,n){let r=[...e.fillGeometry??[],...e.strokeGeometry??[]],i=r.length>0?Xe(r):null,a=i?.x??0,o=i?.y??0,s=i?i.x+i.width:t,c=i?i.y+i.height:n;for(let t of e.derivedTextGlyphs??[]){let e=t.fontSize||0;a=Math.min(a,t.x-e*.25),o=Math.min(o,t.y-e),s=Math.max(s,t.x+e),c=Math.max(c,t.y+e*.35)}return{left:Math.max(0,-a+ +(a<0)),top:Math.max(0,-o+ +(o<0)),right:Math.max(0,s-t+ +(s>t)),bottom:Math.max(0,c-n+ +(c>n))}}function Ni(e,t,n){e.strokeGeometry&&e.strokeGeometry.length>0&&(e.strokeGeometry=ji(e.strokeGeometry,t,n)),e.fillGeometry&&e.fillGeometry.length>0&&(e.fillGeometry=ji(e.fillGeometry,t,n)),e.derivedTextGlyphs?.length&&(e.derivedTextGlyphs=e.derivedTextGlyphs.map(e=>({...e,x:e.x+t,y:e.y+n})))}function Pi(e,t){if(e.nodeType!==`TEXT`||!t)return;e.textPathData=t;let n=e.width??0,r=e.height??0;e.textPathBox={x:0,y:0,width:n,height:r};let i=Mi(e,n,r);if(i.left===0&&i.top===0&&i.right===0&&i.bottom===0)return;let a=i.left,o=i.top;e.x=(e.x??0)-a,e.y=(e.y??0)-o,e.width=n+i.left+i.right,e.height=r+i.top+i.bottom,(a!==0||o!==0)&&(e.textPathBox={x:a,y:o,width:n,height:r},Ni(e,a,o))}var Fi={cornerRadius:`CORNER_RADIUS`,topLeftRadius:`RECTANGLE_TOP_LEFT_CORNER_RADIUS`,topRightRadius:`RECTANGLE_TOP_RIGHT_CORNER_RADIUS`,bottomLeftRadius:`RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS`,bottomRightRadius:`RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS`,strokeWeight:`STROKE_WEIGHT`,borderTopWeight:`BORDER_TOP_WEIGHT`,borderBottomWeight:`BORDER_BOTTOM_WEIGHT`,borderLeftWeight:`BORDER_LEFT_WEIGHT`,borderRightWeight:`BORDER_RIGHT_WEIGHT`,itemSpacing:`STACK_SPACING`,paddingLeft:`STACK_PADDING_LEFT`,paddingTop:`STACK_PADDING_TOP`,paddingRight:`STACK_PADDING_RIGHT`,paddingBottom:`STACK_PADDING_BOTTOM`,counterAxisSpacing:`STACK_COUNTER_SPACING`,gridRowGap:`GRID_ROW_GAP`,gridColumnGap:`GRID_COLUMN_GAP`,visible:`VISIBLE`,opacity:`OPACITY`,width:`WIDTH`,height:`HEIGHT`,minWidth:`MIN_WIDTH`,maxWidth:`MAX_WIDTH`,minHeight:`MIN_HEIGHT`,maxHeight:`MAX_HEIGHT`,x:`X_POSITION`,y:`Y_POSITION`,rotation:`ROTATION`,fontSize:`FONT_SIZE`,letterSpacing:`LETTER_SPACING`,lineHeight:`LINE_HEIGHT`,fontFamily:`FONT_FAMILY`},Ii=Object.fromEntries(Object.entries(Fi).map(([e,t])=>[t,e]));function Li(e){let t=e.variableField?Ii[e.variableField]:void 0,n=e.variableData?.value?.alias?.guid;return t&&n?{field:t,variableId:U(n)}:void 0}var Ri=new Set(`cornerRadius.topLeftRadius.topRightRadius.bottomLeftRadius.bottomRightRadius.strokeWeight.borderTopWeight.borderBottomWeight.borderLeftWeight.borderRightWeight.itemSpacing.paddingLeft.paddingTop.paddingRight.paddingBottom.counterAxisSpacing.gridRowGap.gridColumnGap.width.height.minWidth.maxWidth.minHeight.maxHeight.x.y.rotation.fontSize.letterSpacing.lineHeight`.split(`.`));function zi(e,t){return e===`opacity`?{opacity:Math.max(0,Math.min(1,t/100))}:Ri.has(e)?{[e]:t}:void 0}var Bi=`open-pencil`,Vi=`textDirection`,Hi=`layoutDirection`,Ui=`nodeType`,Wi=`boundVariables`,Gi=`exportSettings`,Ki=`textPathBox`,qi=`librarySource`,Ji=`enabledLibraries`,Yi={PNG:`png`,JPEG:`jpg`,SVG:`svg`,PDF:`pdf`};function Xi(e,t,n){let r=e.pluginData.filter(e=>!(e.pluginId===`open-pencil`&&e.key===t));r.push({pluginId:Bi,key:t,value:n}),e.pluginData=r}function Zi(e){e.exportSettings.length!==0&&(!ea(e.pluginData)&&Array.isArray(he(e,`exportSettings`))||Xi(e,Gi,JSON.stringify(e.exportSettings)))}function Qi(e){e.textPathBox&&Xi(e,Ki,JSON.stringify(e.textPathBox))}function $i(e){let t=da(e,Ki);if(!t)return null;try{let e=JSON.parse(t);if(!e||typeof e!=`object`)return null;let{x:n,y:r,width:i,height:a}=e;return typeof n!=`number`||typeof r!=`number`||typeof i!=`number`||typeof a!=`number`||!Number.isFinite(n+r+i+a)||i<=0||a<=0?null:{x:n,y:r,width:i,height:a}}catch{return null}}function ea(e){return e.some(e=>e.pluginId===`open-pencil`&&e.key===`exportSettings`)}function ta(e){if(!e)return{};try{let t=JSON.parse(e);return!t||typeof t!=`object`||Array.isArray(t)?{}:Object.fromEntries(Object.entries(t).filter(e=>typeof e[0]==`string`&&typeof e[1]==`string`))}catch{return{}}}function na(e){let t=ta(da(e,Wi));for(let n of e.variableConsumptionMap?.entries??[]){let e=Li(n);e&&(t[e.field]=e.variableId)}return e.fillPaints?.forEach((e,n)=>{let r=e.colorVariableBinding?.variableID??e.colorVar?.value?.alias?.guid;r&&(t[`fills/${n}/color`]=U(r))}),e.strokePaints?.forEach((e,n)=>{let r=e.colorVariableBinding?.variableID??e.colorVar?.value?.alias?.guid;r&&(t[`strokes/${n}/color`]=U(r))}),t}function ra(e){return e===`png`||e===`jpg`||e===`webp`||e===`svg`||e===`pdf`}function ia(e){if(!e)return null;try{let t=JSON.parse(e);if(!Array.isArray(t))return null;let n=t.flatMap(e=>{if(!e||typeof e!=`object`||Array.isArray(e))return[];let t=e.scale,n=e.format;return typeof t!=`number`||!Number.isFinite(t)||!ra(n)?[]:[{scale:Nn(t),format:n}]});return n.length===t.length?n:null}catch{return null}}function aa(e){return typeof e==`string`?Yi[e]??null:e===0?`png`:e===1?`jpg`:e===2?`svg`:e===3?`pdf`:null}function oa(e){if(!e||typeof e!=`object`||Array.isArray(e))return 1;let t=e.type;if(t!==`CONTENT_SCALE`&&t!==0)return 1;let n=e.value;return typeof n==`number`&&Number.isFinite(n)?Nn(n):1}function sa(e){return ia(da(e,Gi))||(e.exportSettings??[]).flatMap(e=>{if(!e||typeof e!=`object`||Array.isArray(e))return[];let t=aa(e.imageType);return t?[{scale:oa(e.constraint),format:t}]:[]})}function ca(e){return(e.pluginData??[]).map(e=>({pluginId:e.pluginID,key:e.key,value:e.value}))}function la(e){let t=da(e,qi);if(!t)return null;try{let e=JSON.parse(t);if(!e||typeof e!=`object`||Array.isArray(e))return null;let n=e;return typeof n.identity?.libraryId!=`string`||typeof n.identity.assetKey!=`string`||typeof n.identity.revisionId!=`string`?null:{identity:{libraryId:n.identity.libraryId,assetKey:n.identity.assetKey,revisionId:n.identity.revisionId},sourceNodeId:typeof n.sourceNodeId==`string`?n.sourceNodeId:null,readOnly:n.readOnly===!0}}catch{return null}}function ua(e){e.librarySource?Xi(e,qi,JSON.stringify(e.librarySource)):e.pluginData=e.pluginData.filter(e=>!(e.pluginId===`open-pencil`&&e.key===`librarySource`))}function da(e,t){return e.pluginData?.find(e=>e.pluginID===`open-pencil`&&e.key===t)?.value??null}function fa(e){return(e.pluginRelaunchData??[]).map(e=>({pluginId:e.pluginID,command:e.command,message:e.message,isDeleted:e.isDeleted}))}function pa(e){return e.map(e=>({pluginID:e.pluginId,key:e.key,value:e.value}))}function ma(e){return e.map(e=>({pluginID:e.pluginId,command:e.command,message:e.message,isDeleted:e.isDeleted}))}function ha(e){switch(e){case`UNDERLINE`:return`UNDERLINE`;case`STRIKETHROUGH`:return`STRIKETHROUGH`;default:return`NONE`}}function ga(e,t){return e?e.units===`PIXELS`?e.value:e.units===`PERCENT`?e.value/100*(t??14):e.units===`RAW`?e.value*(t??14):null:null}function _a(e,t){return e?e.units===`PIXELS`?e.value:e.units===`PERCENT`?e.value/100*(t??14):e.value:0}function va(e,t){let n=t.textDecoration;if(n&&(e.textDecoration=ha(n)),t.textDecorationStyle&&(e.textDecorationStyle=t.textDecorationStyle),t.textDecorationThickness&&(e.textDecorationThickness=t.textDecorationThickness.value??null),t.textDecorationSkipInk!==void 0&&(e.textDecorationSkipInk=t.textDecorationSkipInk),t.textUnderlineOffset&&(e.textUnderlineOffset=t.textUnderlineOffset.value??null),t.textDecorationFillPaints){let n=Oi(t.textDecorationFillPaints);n.length>0&&(e.textDecorationFills=n)}}function ya(e,t){let n={};e.fontName&&(n.fontFamily=e.fontName.family,n.fontWeight=Lt(e.fontName.style),n.italic=e.fontName.style.toLowerCase().includes(`italic`)),e.fontSize!==void 0&&(n.fontSize=e.fontSize);let r=di(e);r.length>0&&(n.fontVariations=r);let i=oi(e);if(i.length>0&&(n.fontFeatures=i),e.letterSpacing&&(n.letterSpacing=_a(e.letterSpacing,e.fontSize??t)),e.lineHeight){let r=ga(e.lineHeight,e.fontSize??t);r!=null&&(n.lineHeight=r)}if(va(n,e),e.fillPaints){let t=Oi(e.fillPaints);t.length>0&&(n.fills=t)}return n}function ba(e,t){let n=new Map;for(let r of e){let e=r.styleID;if(e===void 0)continue;let i=ya(r,t);Object.keys(i).length>0&&n.set(e,i)}return n}function xa(e,t){let n=[],r=e[0],i=0;for(let a=1;a<=e.length;a++)if(a===e.length||e[a]!==r){if(r!==0){let e=t.get(r);e&&n.push({start:i,length:a-i,style:e})}a<e.length&&(r=e[a],i=a)}return n}function Sa(e){let t=e.textData;if(!t?.characterStyleIDs||!t.styleOverrideTable)return[];let n=t.characterStyleIDs;if(n.length===0||t.styleOverrideTable.length===0)return[];let r=ba(t.styleOverrideTable,e.fontSize);return r.size===0?[]:xa(n,r)}function Ca(e,t){let n=new DataView(e.buffer,e.byteOffset,e.byteLength),r=0,i=n.getUint32(r,!0);r+=4;let a=n.getUint32(r,!0);r+=4;let o=n.getUint32(r,!0);r+=4;let s=new Map;for(let e of t??[])s.set(e.styleID,e);let c=[];for(let e=0;e<i;e++){let e=n.getUint32(r,!0);r+=4;let t=n.getFloat32(r,!0);r+=4;let i=n.getFloat32(r,!0);r+=4;let a=s.get(e),o={x:t,y:i,handleMirroring:a?.handleMirroring??`NONE`};a?.strokeCap&&(o.strokeCap=a.strokeCap),c.push(o)}let l=[];for(let e=0;e<a;e++){r+=4;let e=n.getUint32(r,!0);r+=4;let t=n.getFloat32(r,!0);r+=4;let i=n.getFloat32(r,!0);r+=4;let a=n.getUint32(r,!0);r+=4;let o=n.getFloat32(r,!0);r+=4;let s=n.getFloat32(r,!0);r+=4,l.push({start:e,end:a,tangentStart:{x:t,y:i},tangentEnd:{x:o,y:s}})}let u=[];for(let e=0;e<o;e++){let e=n.getUint32(r,!0)===0?`EVENODD`:`NONZERO`;r+=4;let t=n.getUint32(r,!0);r+=4;let i=[];for(let e=0;e<t;e++){let e=n.getUint32(r,!0);r+=4;let t=[];for(let i=0;i<e;i++)t.push(n.getUint32(r,!0)),r+=4;i.push(t)}u.push({windingRule:e,loops:i})}return{vertices:c,segments:l,regions:u}}function wa(e){return`${e.handleMirroring??`NONE`}|${e.strokeCap??``}`}function Ta(e){let t=new Map,n=[],r=1;for(let i of e.vertices){let e=i.handleMirroring??`NONE`;if(e===`NONE`&&!i.strokeCap)continue;let a=wa(i);if(t.has(a))continue;t.set(a,r);let o={styleID:r};e!==`NONE`&&(o.handleMirroring=e),i.strokeCap&&(o.strokeCap=i.strokeCap),n.push(o),r++}return{table:n,styleToId:t}}function Ea(e,t){let n=0;for(let t of e.regions){n+=8;for(let e of t.loops)n+=4+e.length*4}let r=new ArrayBuffer(12+e.vertices.length*12+e.segments.length*28+n),i=new DataView(r),a=0;i.setUint32(a,e.vertices.length,!0),a+=4,i.setUint32(a,e.segments.length,!0),a+=4,i.setUint32(a,e.regions.length,!0),a+=4;for(let n of e.vertices)i.setUint32(a,t?.get(wa(n))??0,!0),a+=4,i.setFloat32(a,n.x,!0),a+=4,i.setFloat32(a,n.y,!0),a+=4;for(let t of e.segments)i.setUint32(a,0,!0),a+=4,i.setUint32(a,t.start,!0),a+=4,i.setFloat32(a,t.tangentStart.x,!0),a+=4,i.setFloat32(a,t.tangentStart.y,!0),a+=4,i.setUint32(a,t.end,!0),a+=4,i.setFloat32(a,t.tangentEnd.x,!0),a+=4,i.setFloat32(a,t.tangentEnd.y,!0),a+=4;for(let t of e.regions){i.setUint32(a,t.windingRule===`EVENODD`?0:1,!0),a+=4,i.setUint32(a,t.loops.length,!0),a+=4;for(let e of t.loops){i.setUint32(a,e.length,!0),a+=4;for(let t of e)i.setUint32(a,t,!0),a+=4}}return new Uint8Array(r)}function Da(e,t){let n=t?.regions??[];return e.length===n.length?e.map((e,t)=>({...e,windingRule:n[t].windingRule})):e.length===1&&n.length>0&&n.every(e=>e.windingRule===n[0].windingRule)?[{...e[0],windingRule:n[0].windingRule}]:e}function Oa(e,t){let n=e.vectorData;if(n?.vectorNetworkBlob===void 0)return null;let r=n.vectorNetworkBlob;if(r<0||r>=t.length)return null;try{let i=Ca(t[r],n.styleOverrideTable),a=n.normalizedSize,o=e.size?.x??0,s=e.size?.y??0;if(a&&o>0&&s>0&&(a.x!==o||a.y!==s)){let e=o/a.x,t=s/a.y;for(let n of i.vertices)n.x*=e,n.y*=t;for(let n of i.segments)n.tangentStart={x:n.tangentStart.x*e,y:n.tangentStart.y*t},n.tangentEnd={x:n.tangentEnd.x*e,y:n.tangentEnd.y*t}}return i}catch{return null}}function ka(e){let t=new Map;for(let n of e??[])n.fillPaints&&n.fillPaints.length>0&&t.set(n.styleID,Oi(n.fillPaints));return t}function Aa(e){let t=e.vectorData;return ka(t?.styleOverrideTable)}function ja(e,t,n){if(!e||e.length===0)return[];let r=[];for(let i of e){if(i.commandsBlob===void 0||i.commandsBlob<0||i.commandsBlob>=t.length)continue;let e=t[i.commandsBlob];if(e.length===0)continue;let a=i.styleID?n?.get(i.styleID):void 0;r.push({windingRule:i.windingRule===`EVENODD`?`EVENODD`:`NONZERO`,commandsBlob:e,fills:a&&a.length>0?et(a):void 0})}return r}function Ma(e){let t={},n=e.variableModeBySetMap;for(let e of n?.entries??[]){let n=e.variableSetID?.guid,r=e.variableModeID;!n||!r||(t[U(n)]=U(r))}return t}var Na={DOCUMENT:`DOCUMENT`,VARIABLE:`VARIABLE`,CANVAS:`CANVAS`,FRAME:`FRAME`,RECTANGLE:`RECTANGLE`,ROUNDED_RECTANGLE:`ROUNDED_RECTANGLE`,ELLIPSE:`ELLIPSE`,TEXT:`TEXT`,LINE:`LINE`,STAR:`STAR`,REGULAR_POLYGON:`POLYGON`,VECTOR:`VECTOR`,BOOLEAN_OPERATION:`BOOLEAN_OPERATION`,GROUP:`GROUP`,SECTION:`SECTION`,COMPONENT:`COMPONENT`,COMPONENT_SET:`COMPONENT_SET`,INSTANCE:`INSTANCE`,SYMBOL:`COMPONENT`,CONNECTOR:`CONNECTOR`,SHAPE_WITH_TEXT:`SHAPE_WITH_TEXT`,TEXT_PATH:`TEXT`};function Pa(e){return e?Na[e]??`RECTANGLE`:`RECTANGLE`}function Fa(e){if(e.type!==`BOOLEAN_OPERATION`)return;let t=e.booleanOperation;switch(t){case`SUBTRACT`:case`INTERSECT`:return t;case`EXCLUDE`:case`XOR`:return`EXCLUDE`;default:return`UNION`}}function Ia(e){switch(e){case`HORIZONTAL`:return`HORIZONTAL`;case`VERTICAL`:return`VERTICAL`;default:return`NONE`}}function La(e){switch(e){case`RESIZE_TO_FIT`:case`RESIZE_TO_FIT_WITH_IMPLICIT_SIZE`:return`HUG`;case`FILL`:return`FILL`;default:return`FIXED`}}function Ra(e){switch(e){case`CENTER`:return`CENTER`;case`MAX`:return`MAX`;case`SPACE_BETWEEN`:case`SPACE_EVENLY`:return`SPACE_BETWEEN`;default:return`MIN`}}function za(e){switch(e){case`CENTER`:return`CENTER`;case`MAX`:return`MAX`;case`STRETCH`:return`STRETCH`;case`BASELINE`:return`BASELINE`;default:return`MIN`}}function Ba(e){switch(e){case`MIN`:return`MIN`;case`CENTER`:return`CENTER`;case`MAX`:return`MAX`;case`STRETCH`:return`STRETCH`;case`BASELINE`:return`BASELINE`;default:return`AUTO`}}function Va(e){switch(e){case`CENTER`:return`CENTER`;case`MAX`:return`MAX`;case`STRETCH`:return`STRETCH`;case`SCALE`:return`SCALE`;default:return`MIN`}}function Ha(e){return e?{startingAngle:e.startingAngle??0,endingAngle:e.endingAngle??2*Math.PI,innerRadius:e.innerRadius??0}:null}function Ua(e){let t=e.size?.x??100,n=e.size?.y??100,r=e.transform?.m02??0,i=e.transform?.m12??0,a=0,o=!1;if(e.transform){let s=e.transform;s.m00*s.m11-s.m01*s.m10<0&&(o=!0),a=Math.atan2(s.m10,o?s.m11:s.m00)*(180/Math.PI);let c=a*Math.PI/180,l=Math.cos(c),u=Math.sin(c),d=t/2,f=n/2,p=o?-l:l,m=o?u:-u,h=u,g=l;r=s.m02-d+p*d+m*f,i=s.m12-f+h*d+g*f}return{x:r,y:i,width:t,height:n,rotation:a,flipX:o,flipY:!1}}function Wa(e){return{cornerRadius:e.cornerRadius??0,topLeftRadius:e.rectangleTopLeftCornerRadius??e.cornerRadius??0,topRightRadius:e.rectangleTopRightCornerRadius??e.cornerRadius??0,bottomRightRadius:e.rectangleBottomRightCornerRadius??e.cornerRadius??0,bottomLeftRadius:e.rectangleBottomLeftCornerRadius??e.cornerRadius??0,independentCorners:e.rectangleCornerRadiiIndependent??!1,cornerSmoothing:e.cornerSmoothing??0}}function Ga(e){let t=e.derivedTextData?.baselines?.[0]?.lineHeight;return t!==void 0&&Number.isFinite(t)?t:ga(e.lineHeight,e.fontSize)}function Ka(e){return{textDecoration:ha(e.textDecoration),textDecorationStyle:e.textDecorationStyle??`SOLID`,textDecorationThickness:e.textDecorationThickness?.value??null,textDecorationFills:Oi(e.textDecorationFillPaints),textDecorationSkipInk:e.textDecorationSkipInk??!0,textUnderlineOffset:e.textUnderlineOffset?.value??null}}function qa(e,t){return{text:e.textData?.characters??``,fontSize:e.fontSize??14,fontFamily:e.fontName?.family??`Inter`,fontWeight:Lt(e.fontName?.style??``),italic:e.fontName?.style.toLowerCase().includes(`italic`)??!1,textAlignHorizontal:e.textAlignHorizontal??`LEFT`,textAlignVertical:e.textAlignVertical??`TOP`,textAutoResize:e.textAutoResize??`NONE`,textCase:e.textCase??`ORIGINAL`,...Ka(e),leadingTrim:e.leadingTrim??`NONE`,lineHeight:Ga(e),letterSpacing:_a(e.letterSpacing,e.fontSize),maxLines:e.maxLines??null,styleRuns:Sa(e),fontVariations:di(e),fontFeatures:oi(e),textTruncation:e.textTruncation===`ENDING`?`ENDING`:`DISABLED`,textDirection:da(e,`textDirection`)||`AUTO`,derivedLayout:e.derivedTextData?.layoutSize?{width:e.derivedTextData.layoutSize.x,height:e.derivedTextData.layoutSize.y}:null,derivedTextGlyphs:$n(e.derivedTextData,t)}}function Ja(e){let t=e.stackPadding??0;return{paddingTop:e.stackVerticalPadding??t,paddingBottom:e.stackPaddingBottom??t,paddingLeft:e.stackHorizontalPadding??t,paddingRight:e.stackPaddingRight??t}}function Ya(e,t,n,r){let i=n===`HUG`||r===`HUG`,a=(e.fillPaints?.some(e=>e.visible!==!1)??!1)||(e.strokePaints?.some(e=>e.visible!==!1)??!1);if(!(t===`NONE`||!i||!a))return{x:e.transform?.m02??0,y:e.transform?.m12??0,width:e.size?.x??100,height:e.size?.y??100}}function Xa(e,t){let n=e?.value?.[t];return typeof n==`number`&&Number.isFinite(n)&&n>0?n:null}function Za(e,t){let n=e?.value?.[t];return typeof n==`number`&&Number.isFinite(n)&&n>=0?n:null}function Qa(e){let t=Ia(e.stackMode),n=La(e.stackPrimarySizing),r=La(e.stackCounterSizing),i=Ya(e,t,n,r);return{layoutMode:t,itemSpacing:e.stackSpacing??0,...Ja(e),primaryAxisSizing:n,counterAxisSizing:r,primaryAxisAlign:Ra(e.stackPrimaryAlignItems??e.stackJustify),counterAxisAlign:za(e.stackCounterAlignItems??e.stackCounterAlign),layoutWrap:e.stackWrap===`WRAP`?`WRAP`:`NO_WRAP`,counterAxisSpacing:e.stackCounterSpacing??0,layoutPositioning:e.stackPositioning===`ABSOLUTE`?`ABSOLUTE`:`AUTO`,layoutGrow:e.stackChildPrimaryGrow??0,layoutAlignSelf:Ba(e.stackChildAlignSelf),counterAxisAlignContent:e.stackCounterAlignContent===`SPACE_BETWEEN`?`SPACE_BETWEEN`:`AUTO`,itemReverseZIndex:e.stackReverseZIndex??!1,strokesIncludedInLayout:e.strokesIncludedInLayout??!1,layoutDirection:da(e,`layoutDirection`)||`AUTO`,...i?{derivedLayout:i}:{}}}function $a(e){return e.strokeCap??`NONE`}function eo(e,t){return e.strokeJoin??t?.vertices.find(e=>e.strokeJoin)?.strokeJoin??`MITER`}function to(e){if(!e||typeof e!=`object`||!(`guid`in e))return null;let t=e.guid;return!t||typeof t!=`object`?null:U(t)}function no(e){return e===`FILL`||e===`TEXT`||e===`EFFECT`||e===`GRID`?e:null}function ro(e){return Array.isArray(e)?structuredClone(e):[]}function io(e,t){if(e.type!==`TEXT_PATH`)return null;let n=e.vectorData,r=n?.vectorNetworkBlob,i=n?.normalizedSize;if(typeof r!=`number`||!i||i.x<=0||i.y<=0)return null;let a=t[r],o=e.textPathStart;try{return{network:Ca(a,n.styleOverrideTable),normalizedSize:{x:i.x,y:i.y},tValue:o?.tValue??0,forward:o?.forward??!0}}catch{return null}}function ao(e,t){let n=Oa(e,t),r=$a(e),i=eo(e,n);return{vectorNetwork:n,fillGeometry:Da(ja(e.fillGeometry,t,Aa(e)),n),strokeGeometry:ja(e.strokeGeometry,t),arcData:Ha(e.arcData),strokeCap:r,strokeJoin:i,dashPattern:e.dashPattern??[],borderTopWeight:e.borderTopWeight??0,borderRightWeight:e.borderRightWeight??0,borderBottomWeight:e.borderBottomWeight??0,borderLeftWeight:e.borderLeftWeight??0,independentStrokeWeights:e.borderStrokeWeightsIndependent??!1,strokeMiterLimit:e.miterLimit??4}}function oo(e){let t=Pa(e.type);return t===`FRAME`&&wo(e)||da(e,`nodeType`)===`COMPONENT_SET`?`COMPONENT_SET`:t===`FRAME`&&e.resizeToFit===!0&&(e.stackMode===void 0||e.stackMode===`NONE`)?`GROUP`:t}function so(e,t){return Math.abs((e??0)-(t??0))<=.5}function co(e,t){if(e.type!==`TEXT`||e.textAutoResize!==`NONE`||t?.stackMode!==`HORIZONTAL`&&t?.stackMode!==`VERTICAL`||!e.textData?.characters)return!1;let n=e.derivedTextData?.layoutSize;return!n||!e.size?!1:so(n.x,e.size.x)&&so(n.y,e.size.y)}function lo(e,t){let n=oo(e),r=ao(e,t),i=io(e,t),a={nodeType:n,name:e.name??n,source:Eo(e,t),...Ua(e),opacity:e.opacity??1,visible:e.visible??!0,locked:e.locked??!1,blendMode:e.blendMode??`PASS_THROUGH`,booleanOperation:Fa(e),fills:Oi(e.fillPaints),strokes:ki(e.strokePaints,e.strokeWeight,e.strokeAlign,r.strokeCap,r.strokeJoin,e.dashPattern??[]),effects:Ai(e.effects),layoutGrids:ro(e.layoutGrids),guides:Jn(e.guides),fillStyleId:to(e.styleIdForFill),strokeStyleId:to(e.styleIdForStrokeFill),textStyleId:to(e.styleIdForText),effectStyleId:to(e.styleIdForEffect),gridStyleId:to(e.styleIdForGrid),sharedStyleType:no(e.styleType),...Wa(e),...qa(e,t),horizontalConstraint:Va(e.horizontalConstraint),verticalConstraint:Va(e.verticalConstraint),...Qa(e),...r,minWidth:Xa(e.minSize,`x`),maxWidth:Za(e.maxSize,`x`),minHeight:Xa(e.minSize,`y`),maxHeight:Za(e.maxSize,`y`),isMask:e.mask??!1,maskType:e.maskType??`ALPHA`,maskIsOutline:e.maskIsOutline??!1,expanded:!0,autoRename:e.autoRename??!0,boundVariables:na(e),variableModes:Ma(e),exportSettings:sa(e),pluginData:ca(e),librarySource:la(e),pluginRelaunchData:fa(e),clipsContent:e.frameMaskDisabled===!1&&e.resizeToFit!==!0,componentId:Mo(e),componentPropertyDefinitions:po(e),componentPropertyReferences:mo(e),componentPropertyAssignments:go(e),componentPropertyValues:vo(e),...Co(e)};Pi(a,i);let o=$i(e);return o&&a.textPathBox&&(a.textPathBox={x:o.x+a.textPathBox.x,y:o.y+a.textPathBox.y,width:o.width,height:o.height}),a}var uo={VARIANT:`VARIANT`,TEXT:`TEXT`,BOOL:`BOOLEAN`,BOOLEAN:`BOOLEAN`,INSTANCE_SWAP:`INSTANCE_SWAP`};function fo(e){if(!e||typeof e!=`object`)return``;let t=e;return typeof t.boolValue==`boolean`?String(t.boolValue):typeof t.textValue==`string`?t.textValue:t.textValue&&typeof t.textValue==`object`?t.textValue.characters??``:t.guidValue?U(t.guidValue):``}function po(e){let t=e.componentPropDefs;if(!t?.length)return[];let n=[];for(let e of t){if(!e.id||!e.name)continue;let t=uo[e.type??``]??`VARIANT`;n.push({id:U(e.id),name:e.name,type:t,defaultValue:fo(e.initialValue),variantOptions:t===`VARIANT`?e.preferredValues?.stringValues:void 0,preferredValues:t===`INSTANCE_SWAP`?e.preferredValues?.instanceSwapValues?.map(e=>e.key).filter(e=>e!==void 0):void 0})}return n}function mo(e){let t=e.componentPropRefs;if(!t?.length)return[];let n={0:`VISIBLE`,1:`TEXT`,2:`INSTANCE_SWAP`,VISIBLE:`VISIBLE`,TEXT_DATA:`TEXT`,OVERRIDDEN_SYMBOL_ID:`INSTANCE_SWAP`};return t.flatMap(e=>{let t=n[String(e.componentPropNodeField)];return e.defID&&t&&!e.isDeleted?[{propertyId:U(e.defID),field:t}]:[]})}function ho(e){if(e.value&&(e.value.boolValue!==void 0||e.value.textValue!==void 0||e.value.guidValue!==void 0))return fo(e.value);let t=e.varValue?.value;return t?.symbolIdValue?.guid?U(t.symbolIdValue.guid):t?.boolValue===void 0?t?.textValue===void 0?t?.textDataValue?.characters??``:t.textValue:String(t.boolValue)}function go(e){let t=e.componentPropAssignments;return t?.length?Object.fromEntries(t.flatMap(e=>e.defID?[[U(e.defID),ho(e)]]:[])):{}}function _o(e){let t=e.variantPropSpecs;return t?.length?t.filter(e=>!!e.propDefId).map(e=>({propDefId:U(e.propDefId),value:e.value??``})):[]}function vo(e){let t=_o(e),n=new Map(po(e).map(e=>[e.id,e.name]));if(t.length>0&&n.size>0){let e={};for(let r of t)e[n.get(r.propDefId)??r.propDefId]=r.value;return e}let r=e.name;return r?.includes(`=`)?Zn(r):{}}function yo(e){if(!e||typeof e!=`object`)return null;let t=e;return typeof t.sessionID!=`number`||typeof t.localID!=`number`?null:U({sessionID:t.sessionID,localID:t.localID})}function bo(e){return typeof e==`string`?e:null}function xo(e){return typeof e==`string`?e:``}function So(e){return typeof e==`boolean`&&e}function Co(e){let t=e.symbolLinks??[];return{componentKey:bo(e.componentKey),sourceLibraryKey:bo(e.sourceLibraryKey),publishId:yo(e.publishID),overrideKey:yo(e.overrideKey),sharedSymbolVersion:bo(e.sharedSymbolVersion),publishedVersion:bo(e.publishedVersion),isPublishable:So(e.isPublishable),isSymbolPublishable:So(e.isSymbolPublishable),symbolDescription:xo(e.symbolDescription),symbolLinks:t.filter(e=>typeof e.uri==`string`).map(e=>({uri:e.uri,displayName:e.displayName,displayText:e.displayText})),variantPropSpecs:_o(e)}}function wo(e){let t=e.componentPropDefs;return t?.length?t.some(e=>e.type===`VARIANT`):!1}function To(e){return{stackMode:e.stackMode,stackSpacing:e.stackSpacing,stackPadding:e.stackPadding,stackPaddingRight:e.stackPaddingRight,stackPaddingBottom:e.stackPaddingBottom,stackCounterAlign:e.stackCounterAlign,stackJustify:e.stackJustify,stackCounterAlignItems:e.stackCounterAlignItems,stackPrimaryAlignItems:e.stackPrimaryAlignItems,stackPrimarySizing:e.stackPrimarySizing,stackCounterSizing:e.stackCounterSizing,stackVerticalPadding:e.stackVerticalPadding,stackHorizontalPadding:e.stackHorizontalPadding,stackWrap:e.stackWrap,stackPositioning:e.stackPositioning,stackChildPrimaryGrow:e.stackChildPrimaryGrow,stackChildAlignSelf:e.stackChildAlignSelf,stackCounterSpacing:e.stackCounterSpacing,bordersTakeSpace:e.bordersTakeSpace,stackReverseZIndex:e.stackReverseZIndex}}function Eo(e,t){return{format:`fig`,id:e.guid?U(e.guid):null,orderKey:e.parentIndex?.position??null,editedFields:[],fig:{...Ao(e,t),...jo(e,t),layout:To(e)}}}function Do(e,t,n){let r=t.stackMode,i=r===`HORIZONTAL`,a=r===`VERTICAL`;e.sort((e,t)=>{let r=n.get(e)?.parentIndex?.position??``,o=n.get(t)?.parentIndex?.position??``;if(r<o)return-1;if(r>o)return 1;if(i||a){let r=i?`m02`:`m12`,a=n.get(e)?.transform?.[r]??0,o=n.get(t)?.transform?.[r]??0;if(a!==o)return a-o}return 0})}function Oo(e,t){if(e instanceof Uint8Array)return e;if(Array.isArray(e))return e.map(e=>Oo(e,t));if(!e||typeof e!=`object`)return e;let n={};for(let[r,i]of Object.entries(e))if((r===`commandsBlob`||r===`vectorNetworkBlob`)&&typeof i==`number`){let e=t[i];e==null?n[r]=i:n[r]={__openPencilFigmaBlob:e instanceof Uint8Array?e:new Uint8Array(Object.values(e))}}else n[r]=Oo(i,t);return n}var ko=`styleIdForFill.styleIdForStrokeFill.styleIdForText.styleIdForEffect.styleIdForGrid.styleType.componentPropAssignments.backgroundPaints.layoutGrids.exportSettings.componentPropDefs.componentPropRefs.variantPropSpecs.stateGroupPropertyValueOrders.isStateGroup.version.sourceLibraryKey.userFacingVersion.description.key.sortPosition.detachedSymbolId.documentColorProfile.variableConsumptionMap.variableModeBySetMap.parameterConsumptionMap.editInfo.backgroundColor.blendMode.pageType.isPageDivider.guides.handoffStatusMap.annotationCategories.miterLimit.mask.maskType.maskIsOutline.strokeWeight.strokeJoin.borderStrokeWeightsIndependent.borderTopWeight.borderRightWeight.borderBottomWeight.borderLeftWeight.minSize.maxSize.targetAspectRatio.gridRows.gridColumns.gridRowAnchor.gridColumnAnchor.gridColumnsSizing.gridRowsSizing.gridChildVerticalAlign.gridChildHorizontalAlign.textAutoResize.textAlignHorizontal.textAlignVertical.textData.lineHeight.fontName.fontSize.letterSpacing.textTracking.fontVersion.textUserLayoutVersion.textExplicitLayoutVersion.fontVariations.fontVariantCommonLigatures.fontVariantContextualLigatures.toggledOnOTFeatures.toggledOffOTFeatures.leadingTrim.textDecorationFillPaints.textUnderlineOffset.textDecorationThickness.textDecorationStyle.semanticWeight.semanticItalic.maxLines.textPathStart.derivedTextData.fillPaints.strokePaints.effects.sectionStatusInfo.prototypeStartNodeID.prototypeInteractions.transitionInfo.codeSyntax.lockMode.slideThemeMap.isSoftDeleted.brushType.scatterStrokeSettings.vectorOperationVersion.vectorData.fillGeometry.strokeGeometry`.split(`.`);function Ao(e,t){let n={};for(let r of ko){let i=e[r];i!==void 0&&(n[r]=Oo(i,t))}return{rawSize:e.size?{...e.size}:null,rawTransform:e.transform?{...e.transform}:null,rawNodeFields:n}}function jo(e,t){let n=e.symbolData;return{symbolOverrides:Oo(n?.symbolOverrides??[],t),componentPropAssignments:Oo(e.componentPropAssignments??[],t),derivedSymbolData:Oo(e.derivedSymbolData??[],t),derivedSymbolDataLayoutVersion:typeof e.derivedSymbolDataLayoutVersion==`number`?e.derivedSymbolDataLayoutVersion:null,uniformScaleFactor:typeof n?.uniformScaleFactor==`number`?n.uniformScaleFactor:null}}function Mo(e){let t=e.symbolData;return t?.symbolID?U(t.symbolID):``}function No(e){return{layoutSize:{x:e.node.width,y:e.node.height},baselines:e.baselines??[{firstCharacter:0,endCharacter:Math.max(e.node.text.length-1,0),position:{x:0,y:e.baseline},width:e.width,lineHeight:e.lineHeight,lineAscent:e.lineAscent}],glyphs:e.glyphs,fontMetaData:e.fontMetaData,logicalIndexToCharacterOffsetMap:e.logicalIndexToCharacterOffsetMap,derivedLines:[{directionality:`LTR`}],truncationStartIndex:-1,truncatedHeight:-1}}function Po(e){return e===`EXCLUDE`?`XOR`:e??`UNION`}function Fo(e,t){let n=new Map;for(let[r,i]of e.variables){if(!i.key)continue;let e=t.get(r)??Xn(r);n.set(i.key,e),i.version&&n.set(`${i.key}@${i.version}`,e)}return n}function Io(e,t,n,r){let i=t.boundVariables[r];return i?{...n,colorVariableBinding:{variableID:e.varIdToGuid?.get(i)??Xn(i)}}:n}function Lo(e,t){return t.strokes.map((n,r)=>Io(e,t,{type:`SOLID`,color:e.safeColor(n.color),opacity:n.opacity,visible:n.visible,blendMode:`NORMAL`},`strokes/${r}/color`))}function Ro(e){return e===`BOOLEAN`?`BOOL`:e}function zo(e,t,n,r){if(e===`BOOLEAN`)return{boolValue:t===`true`};if(e===`INSTANCE_SWAP`){let e=n.graph.getNode(t),i=e?es(n,e.id,r):Bo(t);return i?{guidValue:i}:{textValue:{characters:t}}}return{textValue:{characters:t}}}function Bo(e){return/^\d+:\d+$/.test(e)?Xn(e):null}function Vo(e,t,n){let r=Object.entries(e.variableModes).flatMap(([e,r])=>{let i=t?.get(e)??Bo(e),a=n?.get(r)??Bo(r);return!i||!a?[]:[{variableSetID:{guid:i},variableModeID:a}]});return r.length>0?{entries:r}:void 0}var Ho=new Set([`variableConsumptionMap`,`parameterConsumptionMap`]),Uo=new Set([`colorVar`,`opacityVar`]),Wo=new Set([`BOOLEAN`,`FLOAT`,`STRING`,`ALIAS`,`COLOR`,`SYMBOL_ID`,`TEXT_DATA`,`PROP_REF`]);function Go(e){return!!e&&typeof e==`object`&&!Array.isArray(e)&&`entries`in e}function Ko(e){return!!e&&typeof e==`object`&&!Array.isArray(e)}function qo(e){if(!Ko(e))return!1;let t=e,n=t.variableData?.dataType;return typeof n==`string`&&Wo.has(n)||!!t.variableData?.value?.propRefValue}function Jo(e){if(!Ko(e))return!1;let t=e;return t.variableData?.dataType===`PROP_REF`||!!t.variableData?.value?.propRefValue}function Yo(e,t,n,r){if(!Go(e))return;let i=e.entries?.filter(r)??[];if(i.length!==0)return{entries:i.map(e=>Qo(e,t,n))}}function Xo(e,t,n){let r=e.__openPencilFigmaBlob,i=r instanceof Uint8Array?r:new Uint8Array(Object.values(r??{})),a=mi(i),o=n.blobIndexByHex?.get(a);if(o!==void 0)return o;let s=t.length;return t.push(i),n.blobIndexByHex?.set(a,s),s}function Zo(e,t){return e===`stackCounterAlignItems`&&t===`STRETCH`?`MIN`:(e===`stackJustify`||e===`stackPrimaryAlignItems`||e===`stackCounterAlign`||e===`stackCounterAlignItems`)&&t===`SPACE_EVENLY`?`SPACE_BETWEEN`:t}function Qo(e,t,n={}){if(e instanceof Uint8Array)return e;if(Array.isArray(e))return e.map(e=>Qo(e,t,n));if(!e||typeof e!=`object`)return e;if(`__openPencilFigmaBlob`in e)return Xo(e,t,n);let r={};for(let[i,a]of Object.entries(e))if(!(Uo.has(i)&&!n.includePaintVariables)){if(Ho.has(i)){let e=Yo(a,t,n,n.includeVariableMaps?qo:Jo);e!==void 0&&(r[i]=e);continue}r[i]=Zo(i,Qo(a,t,n))}return r}function $o(e,t){let n=new Set,r=t;for(;!n.has(r);){n.add(r);let t=e.graph.getNode(r);if(t?.type!==`INSTANCE`||!t.componentId)return r;r=t.componentId}return t}function es(e,t,n){let r=e.graph.getNode(t);if(!r)return;let i=e.nodeIdToGuid?.get(t);if(i)return i;let a=r.source.id?Bo(r.source.id):null;if(a&&e.assignedGuidValues){let r=`${a.sessionID}:${a.localID}`;if(e.assignedGuidValues.has(r)){let r={sessionID:1,localID:n.value++};return e.nodeIdToGuid?.set(t,r),e.assignedGuidValues.add(`${r.sessionID}:${r.localID}`),r}}let o=a??{sessionID:1,localID:n.value++};return e.nodeIdToGuid?.set(t,o),e.assignedGuidValues?.add(`${o.sessionID}:${o.localID}`),o}function ts(e,t,n){let r=e.propertyIdToGuid.get(t);if(r)return r;let i=Bo(t);if(i)return i;let a={sessionID:1,localID:n.value++};return e.propertyIdToGuid.set(t,a),e.assignedGuidValues?.add(`${a.sessionID}:${a.localID}`),a}function ns(e,t,n){let r=e.graph.getNode(t);for(;r?.parentId;){if(r.parentId===n)return!0;r=e.graph.getNode(r.parentId)}return!1}function rs(e,t,n){let r=[];return Ye(t.instanceOverrides,(i,a,o)=>{if(a!==`text`||!i)return;let s=e.graph.getNode(i);if(!s||!ns(e,i,t.id))return;let c=is(e,s,n);c&&r.push({guidPath:{guids:[c]},textData:{characters:typeof o==`string`?o:s.text}})}),r}function is(e,t,n){let r=t.componentId;if(!r)return;let i=e.graph.getNode(r);return(i?.overrideKey?Bo(i.overrideKey):null)??es(e,r,n)}function as(e,t,n){let r=[];return Ye(t.instanceOverrides,(i,a)=>{if(a!==`fills`||!i)return;let o=e.graph.getNode(i);if(!o||!ns(e,i,t.id))return;let s=is(e,o,n);s&&r.push({guidPath:{guids:[s]},fillPaints:o.fills.map(t=>e.fillToKiwiPaint(t))})}),r}function os(e){let t=e.guidPath?.guids;return t?.length?t.map(({sessionID:e,localID:t})=>`${e}:${t}`).join(`/`):null}function ss(e,t){for(let n of t){let t=os(n),r=-1;if(t){for(let n=e.length-1;n>=0;n--)if(os(e[n])===t){r=n;break}}r<0?e.push(n):e[r]={...e[r],...n}}}var cs=new Set([`pageType`,`derivedSymbolData`,`derivedSymbolDataLayoutVersion`,`sourceLibraryKey`,`minSize`,`maxSize`,`variableConsumptionMap`,`parameterConsumptionMap`]);function ls(e){return e.type!==`TEXT`||e.textPathData===null||(e.derivedTextGlyphs?.length??0)===0||e.textPathBox===null||e.strokeGeometry.length!==0?!1:e.strokes.length>0}function us(e){return e.type===`TEXT`&&e.textPathData!==null&&fe(e).rawTransform===null&&(e.derivedTextGlyphs?.length??0)>0}function ds(e,t,n){let r=de(t);(ls(t)||us(t))&&(r={...r},delete r.strokeGeometry,delete r.derivedTextData);let i=Qo(r,e.blobs,{blobIndexByHex:e.blobIndexByHex,includePaintVariables:!0,includeVariableMaps:!0});for(let r of Object.keys(i))if(!cs.has(String(r))){if((r===`fillPaints`||r===`strokePaints`)&&t.source.id){n[r]=i[r];continue}if(r===`effects`&&t.source.id&&e.assetRefToVarGuid&&e.assetRefToVarGuid.size>0){n[r]=fs(i[r],e.assetRefToVarGuid);continue}if(r===`derivedTextData`&&t.source.id){n.derivedTextData=i.derivedTextData;continue}if(r===`textDecorationFillPaints`&&t.source.id){n.textDecorationFillPaints=i.textDecorationFillPaints;continue}r in n||(n[r]=i[r])}}function fs(e,t){if(!Array.isArray(e))return e;let n=e.map(e=>{let n=e.colorVar,r=n?.value?.alias;if(!n||!r||r.guid||!r.assetRef?.key)return e;let i=r.assetRef,a=i.version?`${i.key}@${i.version}`:i.key,o=t.get(a)??t.get(i.key);return o?{...e,colorVar:{...n,value:{...n.value,alias:{guid:o}}}}:e});return n.some((t,n)=>t!==e[n])?n:e}function ps(e,t,n,r){if(t.type!==`INSTANCE`||!t.componentId)return;let i=es(e,$o(e,t.componentId),r);if(i){let a={symbolID:i},o=[];t.source.fig.symbolOverrides.length>0&&o.push(...Qo(t.source.fig.symbolOverrides,e.blobs,{blobIndexByHex:e.blobIndexByHex,includePaintVariables:!0,includeVariableMaps:!0})),ss(o,rs(e,t,r)),ss(o,as(e,t,r)),o.length>0&&(a.symbolOverrides=o),t.source.fig.uniformScaleFactor!=null&&(a.uniformScaleFactor=t.source.fig.uniformScaleFactor),n.symbolData=a}t.source.fig.componentPropAssignments.length>0&&!t.source.editedFields.includes(`componentPropertyAssignments`)&&(n.componentPropAssignments=Qo(t.source.fig.componentPropAssignments,e.blobs,{blobIndexByHex:e.blobIndexByHex,includePaintVariables:!0,includeVariableMaps:!0})),t.source.fig.derivedSymbolData.length>0&&(n.derivedSymbolData=Qo(t.source.fig.derivedSymbolData,e.blobs,{blobIndexByHex:e.blobIndexByHex,includePaintVariables:!0,includeVariableMaps:!0})),t.source.fig.derivedSymbolDataLayoutVersion!=null&&(n.derivedSymbolDataLayoutVersion=t.source.fig.derivedSymbolDataLayoutVersion)}function ms(e,t){if(e.type===`INSTANCE_SWAP`&&e.preferredValues?.length)return{instanceSwapValues:e.preferredValues.map(e=>{let n=t.graph.getNode(e);return{type:`COMPONENT`,key:n?.componentKey||n?.sourceLibraryKey||e}})};if(e.type===`VARIANT`&&e.variantOptions?.length)return{stringValues:[...e.variantOptions]}}function hs(e){return e===`TEXT`?`TEXT_DATA`:e===`INSTANCE_SWAP`?`OVERRIDDEN_SYMBOL_ID`:`VISIBLE`}function gs(e){let t=new Map;for(let n of e.getAllNodes())for(let e of n.componentPropertyDefinitions)t.has(e.id)||t.set(e.id,e);return t}function _s(e,t,n,r=!1){return n&&!(t in de(e))&&!r}function vs(e,t,n,r){t.componentKey&&(n.componentKey=t.componentKey),t.sourceLibraryKey&&(n.sourceLibraryKey=t.sourceLibraryKey);let i=t.publishId?Bo(t.publishId):null,a=t.overrideKey?Bo(t.overrideKey):null;i&&(n.publishID=i),a&&(n.overrideKey=a),t.sharedSymbolVersion&&(n.sharedSymbolVersion=t.sharedSymbolVersion),t.publishedVersion&&(n.publishedVersion=t.publishedVersion),(t.type===`COMPONENT_SET`||t.isPublishable)&&(n.isPublishable=t.isPublishable),(t.type===`COMPONENT`||t.isSymbolPublishable)&&(n.isSymbolPublishable=t.isSymbolPublishable),t.symbolDescription&&(n.symbolDescription=t.symbolDescription),t.symbolLinks.length>0&&(n.symbolLinks=structuredClone(t.symbolLinks));let o=t.componentPropertyDefinitions.map(t=>({id:ts(e,t.id,r),name:t.name,type:Ro(t.type),initialValue:zo(t.type,t.defaultValue,e,r),preferredValues:ms(t,e)}));_s(t,`componentPropDefs`,o.length>0)&&(n.componentPropDefs=o);let s=t.componentPropertyReferences.map(t=>({defID:ts(e,t.propertyId,r),componentPropNodeField:hs(t.field)}));_s(t,`componentPropRefs`,s.length>0)&&(n.componentPropRefs=s);let c=Object.entries(t.componentPropertyAssignments).map(([t,n])=>{let i=e.componentPropertyDefinitionsById.get(t);return i?{defID:ts(e,t,r),value:zo(i.type,n,e,r)}:null}).filter(e=>e!==null);_s(t,`componentPropAssignments`,c.length>0,!!n.componentPropAssignments)&&(n.componentPropAssignments=c);let l=t.variantPropSpecs.map(t=>({propDefId:ts(e,t.propDefId,r),value:t.value}));_s(t,`variantPropSpecs`,l.length>0)&&(n.variantPropSpecs=l)}function ys(e){let t=fe(e);return t.rawSize&&t.rawTransform?{...t.rawSize}:{x:e.width,y:e.height}}function bs(e,t){let n=fe(t).rawTransform;return n?{...n}:e.computeExportTransform(t)}function xs(e){let t=de(e);return`fillGeometry`in t||`strokeGeometry`in t}function Ss(e){return`vectorData`in de(e)}var Cs=new Set([`DROP_SHADOW`,`INNER_SHADOW`,`LAYER_BLUR`,`BACKGROUND_BLUR`,`FOREGROUND_BLUR`]);function ws(e){let t=de(e).effects;return Array.isArray(t)&&t.some(e=>e&&typeof e==`object`&&`type`in e&&!Cs.has(String(e.type)))}function Ts(e){return!xs(e)&&!Ss(e)?e:{...e,fillGeometry:xs(e)?[]:e.fillGeometry,strokeGeometry:xs(e)?[]:e.strokeGeometry,vectorNetwork:Ss(e)?null:e.vectorNetwork}}function Es(e,t){e.fillStyleId&&(t.styleIdForFill={guid:Xn(e.fillStyleId)}),e.strokeStyleId&&(t.styleIdForStrokeFill={guid:Xn(e.strokeStyleId)}),e.textStyleId&&(t.styleIdForText={guid:Xn(e.textStyleId)}),e.effectStyleId&&(t.styleIdForEffect={guid:Xn(e.effectStyleId)}),e.gridStyleId&&(t.styleIdForGrid={guid:Xn(e.gridStyleId)}),e.layoutGrids.length>0&&(t.layoutGrids=structuredClone(e.layoutGrids)),e.guides.length>0&&(t.guides=Yn(e.guides))}function Ds(e,t,n){t.independentStrokeWeights&&(n.borderStrokeWeightsIndependent=!0,n.borderTopWeight=t.borderTopWeight,n.borderRightWeight=t.borderRightWeight,n.borderBottomWeight=t.borderBottomWeight,n.borderLeftWeight=t.borderLeftWeight),t.fills.length>0&&(n.fillPaints=t.fills.map((n,r)=>Io(e,t,e.fillToKiwiPaint(n),`fills/${r}/color`))),e.serializeCornerRadii(t,n),t.effects.length>0&&!ws(t)&&(n.effects=t.effects.map(t=>({type:t.type===`LAYER_BLUR`?`FOREGROUND_BLUR`:t.type,color:e.safeColor(t.color),offset:t.offset,radius:t.radius,spread:t.spread,visible:t.visible,blendMode:t.blendMode??`NORMAL`,showShadowBehindNode:t.showShadowBehindNode}))),t.type===`TEXT`&&e.serializeTextProps(t,n,e.graph,e.fontDigestMap,e.blobs,e.glyphBlobMap),t.type!==`VECTOR`&&(n.frameMaskDisabled=!t.clipsContent),Es(t,n),t.horizontalConstraint!==`MIN`&&(n.horizontalConstraint=t.horizontalConstraint),t.verticalConstraint!==`MIN`&&(n.verticalConstraint=t.verticalConstraint),t.strokeCap!==`NONE`&&(n.strokeCap=t.strokeCap);let r=de(t);(t.strokeJoin!==`MITER`||`strokeJoin`in r)&&(n.strokeJoin=t.strokeJoin),(t.strokeMiterLimit!==4||`miterLimit`in r)&&(n.miterLimit=t.strokeMiterLimit),t.dashPattern.length>0&&(n.dashPattern=t.dashPattern),t.arcData&&(n.arcData={startingAngle:t.arcData.startingAngle,endingAngle:t.arcData.endingAngle,innerRadius:t.arcData.innerRadius}),t.autoRename||(n.autoRename=!1)}function Os(e,t){return e.textPathData!==null&&e.type===`TEXT`&&(e.derivedTextGlyphs?.length??0)>0?`TEXT_PATH`:t.mapToFigmaType(e.type)}function ks(e,t,n,r,i){let a=es(i,e.id,r)??{sessionID:1,localID:r.value++},o=Lo(i,e),s=Os(e,i),c={guid:a,parentIndex:{guid:t,position:e.source.orderKey??i.fractionalPosition(n)},type:s,name:e.name,visible:e.visible,opacity:e.opacity,phase:`CREATED`,size:ys(e),transform:bs(i,e)};e.sharedStyleType&&(c.styleType=e.sharedStyleType),e.type===`GROUP`&&(c.resizeToFit=!0),e.strokes.length>0&&(c.strokeWeight=e.strokes[0].weight,c.strokeAlign=e.strokes[0].align),e.locked&&(c.locked=!0),Ds(i,e,c),vs(i,e,c,r),ps(i,e,c,r),e.type===`COMPONENT_SET`&&Xi(e,Ui,e.type),c.type===`CANVAS`&&(c.pageType=`DESIGN`),e.type===`BOOLEAN_OPERATION`&&(c.booleanOperation=Po(e.booleanOperation)),o.length>0&&(c.strokePaints=o),i.serializeLayoutProps(e,c),i.serializeGeometry(Ts(e),c,i.blobs),i.serializeVariableBindings(e,c,i.graph,i.varIdToGuid),ds(i,e,c);let l=Vo(e,i.varIdToGuid,i.modeIdToGuid);l&&(c.variableModeBySetMap=l),Zi(e),ua(e),Qi(e);let u=pa(e.pluginData);u.length>0&&(c.pluginData=u),e.pluginRelaunchData.length>0&&(c.pluginRelaunchData=ma(e.pluginRelaunchData));let d=[c],f=e.type===`INSTANCE`?[]:i.graph.getChildren(e.id).filter(e=>!e.internalOnly);for(let e=0;e<f.length;e++)d.push(...i.sceneNodeToKiwi(f[e],a,e,r,i));return d}var As={getGlyphOutlineMetrics:()=>null};function js(e,t=!1){let n=Kt[Math.round(e/100)*100]??`Regular`;return t?`${n} Italic`:n}function Ms(e,t,n,r){let i=e.getNode(t),a=e.getNode(n);if(!i||!a)return;let o=e.getNode(r)?.instanceOverrides,s=i.childIds.map(t=>e.getNode(t)).filter(e=>e!==void 0),c=a.childIds.map(t=>e.getNode(t)).filter(e=>e!==void 0),l=new Set,u=new Set,d=(t,n)=>{n.type===`INSTANCE`?o&&Le(o,r,n.id,`sourceComponentId`,t.id):n.componentId||=t.id,l.add(t.id),u.add(n.id),n.type!==`INSTANCE`&&t.childIds.length>0&&n.childIds.length>0&&Ms(e,t.id,n.id,r)};for(let e of c){if(!e.overrideKey||u.has(e.id))continue;let t=s.find(t=>!l.has(t.id)&&t.overrideKey===e.overrideKey&&t.type===e.type);t&&d(t,e)}let f=s.filter(e=>!l.has(e.id)),p=c.filter(e=>!u.has(e.id));if(f.length===p.length&&f.every((e,t)=>e.type===p[t]?.type))for(let e=0;e<f.length;e++){let t=f[e],n=p[e];d(t,n)}}function Ns(e,t){e.preserveSourceMetadataDuring(()=>{for(let n of e.getAllNodes()){if(n.type!==`INSTANCE`||!n.componentId||t&&!t.has(n.id))continue;let r=e.getNode(n.componentId);r&&Ms(e,r.id,n.id,n.id)}})}var Ps=0,Fs=1,Is=2,Ls=4;function Rs(e){switch(e){case`M`:case`L`:return 1+2*Float32Array.BYTES_PER_ELEMENT;case`C`:case`Q`:return 1+6*Float32Array.BYTES_PER_ELEMENT;case`Z`:return 1;default:return 0}}function zs(e,t=1){let n=e.reduce((e,t)=>e+Rs(t.type),0),r=new Uint8Array(n),i=new DataView(r.buffer),a=0,o=e=>{i.setFloat32(a,(e??0)/t,!0),a+=Float32Array.BYTES_PER_ELEMENT},s=e=>e===void 0?void 0:-e,c=0,l=0;for(let t of e)switch(t.type){case`M`:r[a++]=Fs,o(t.x),o(s(t.y)),c=t.x??0,l=t.y??0;break;case`L`:r[a++]=Is,o(t.x),o(s(t.y)),c=t.x??0,l=t.y??0;break;case`C`:r[a++]=Ls,o(t.x1),o(s(t.y1)),o(t.x2),o(s(t.y2)),o(t.x),o(s(t.y)),c=t.x??0,l=t.y??0;break;case`Q`:{let e=t.x1??0,n=t.y1??0,i=t.x??0,u=t.y??0;r[a++]=Ls,o(c+2/3*(e-c)),o(s(l+2/3*(n-l))),o(i+2/3*(e-i)),o(s(u+2/3*(n-u))),o(i),o(s(u)),c=i,l=u;break}case`Z`:r[a++]=Ps;break}return r}function Bs(e,t,n,r){if(t===1&&n===1)return e;let i=Math.cos(r),a=Math.sin(r),o=t*i*i+n*a*a,s=(n-t)*a*i;return Ke(e,o,s,s,t*a*a+n*i*i)}var Vs=ArrayBuffer,K=Uint8Array,Hs=Uint16Array,Us=Int16Array,Ws=Int32Array,Gs=function(e,t,n){if(K.prototype.slice)return K.prototype.slice.call(e,t,n);(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length);var r=new K(n-t);return r.set(e.subarray(t,n)),r},Ks=function(e,t,n,r){if(K.prototype.fill)return K.prototype.fill.call(e,t,n,r);for((n==null||n<0)&&(n=0),(r==null||r>e.length)&&(r=e.length);n<r;++n)e[n]=t;return e},qs=function(e,t,n,r){if(K.prototype.copyWithin)return K.prototype.copyWithin.call(e,t,n,r);for((n==null||n<0)&&(n=0),(r==null||r>e.length)&&(r=e.length);n<r;)e[t++]=e[n++]},Js=[`invalid zstd data`,`window size too large (>2046MB)`,`invalid block type`,`FSE accuracy too high`,`match distance too far back`,`unexpected EOF`],q=function(e,t,n){var r=Error(t||Js[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,q),!n)throw r;return r},Ys=function(e,t,n){for(var r=0,i=0;r<n;++r)i|=e[t++]<<(r<<3);return i},Xs=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},Zs=function(e,t){var n=e[0]|e[1]<<8|e[2]<<16;if(n==3126568&&e[3]==253){var r=e[4],i=r>>5&1,a=r>>2&1,o=r&3,s=r>>6;r&8&&q(0);var c=6-i,l=o==3?4:o,u=Ys(e,c,l);c+=l;var d=s?1<<s:i,f=Ys(e,c,d)+(s==1&&256),p=f;if(!i){var m=1<<10+(e[5]>>3);p=m+(m>>3)*(e[5]&7)}p>2145386496&&q(1);var h=new K((t==1?f||p:t?0:p)+12);return h[0]=1,h[4]=4,h[8]=8,{b:c+d,y:0,l:0,d:u,w:t&&t!=1?t:h.subarray(12),e:p,o:new Ws(h.buffer,0,3),u:f,c:a,m:Math.min(131072,p)}}else if((n>>4|e[3]<<20)==25481893)return Xs(e,4)+8;q(0)},Qs=function(e){for(var t=0;1<<t<=e;++t);return t-1},$s=function(e,t,n){var r=(t<<3)+4,i=(e[t]&15)+5;i>n&&q(3);for(var a=1<<i,o=a,s=-1,c=-1,l=-1,u=a,d=new Vs(512+(a<<2)),f=new Us(d,0,256),p=new Hs(d,0,256),m=new Hs(d,512,a),h=512+(a<<1),g=new K(d,h,a),_=new K(d,h+a);s<255&&o>0;){var v=Qs(o+1),y=r>>3,b=(1<<v+1)-1,x=(e[y]|e[y+1]<<8|e[y+2]<<16)>>(r&7)&b,S=(1<<v)-1,C=b-o-1,w=x&S;if(w<C?(r+=v,x=w):(r+=v+1,x>S&&(x-=C)),f[++s]=--x,x==-1?(o+=x,g[--u]=s):o-=x,!x)do{var T=r>>3;c=(e[T]|e[T+1]<<8)>>(r&7)&3,r+=2,s+=c}while(c==3)}(s>255||o)&&q(0);for(var E=0,D=(a>>1)+(a>>3)+3,O=a-1,k=0;k<=s;++k){var A=f[k];if(A<1){p[k]=-A;continue}for(l=0;l<A;++l){g[E]=k;do E=E+D&O;while(E>=u)}}for(E&&q(0),l=0;l<a;++l){var j=p[g[l]]++;m[l]=(j<<(_[l]=i-Qs(j)))-a}return[r+7>>3,{b:i,s:g,n:_,t:m}]},ec=function(e,t){var n=0,r=-1,i=new K(292),a=e[t],o=i.subarray(0,256),s=i.subarray(256,268),c=new Hs(i.buffer,268);if(a<128){var l=$s(e,t+1,6),u=l[0],d=l[1];t+=a;var f=u<<3,p=e[t];p||q(0);for(var m=0,h=0,g=d.b,_=g,v=(++t<<3)-8+Qs(p);v-=g,!(v<f);){var y=v>>3;if(m+=(e[y]|e[y+1]<<8)>>(v&7)&(1<<g)-1,o[++r]=d.s[m],v-=_,v<f)break;y=v>>3,h+=(e[y]|e[y+1]<<8)>>(v&7)&(1<<_)-1,o[++r]=d.s[h],g=d.n[m],m=d.t[m],_=d.n[h],h=d.t[h]}++r>255&&q(0)}else{for(r=a-127;n<r;n+=2){var b=e[++t];o[n]=b>>4,o[n+1]=b&15}++t}var x=0;for(n=0;n<r;++n){var S=o[n];S>11&&q(0),x+=S&&1<<S-1}var C=Qs(x)+1,w=1<<C,T=w-x;for(T&T-1&&q(0),o[r++]=Qs(T)+1,n=0;n<r;++n){var S=o[n];++s[o[n]=S&&C+1-S]}var E=new K(w<<1),D=E.subarray(0,w),O=E.subarray(w);for(c[C]=0,n=C;n>0;--n){var k=c[n];Ks(O,n,k,c[n-1]=k+s[n]*(1<<C-n))}for(c[0]!=w&&q(0),n=0;n<r;++n){var A=o[n];if(A){var j=c[A];Ks(D,n,j,c[A]=j+(1<<C-A))}}return[t,{n:O,b:C,s:D}]},tc=$s(new K([81,16,99,140,49,198,24,99,12,33,196,24,99,102,102,134,70,146,4]),0,6)[1],nc=$s(new K([33,20,196,24,99,140,33,132,16,66,8,33,132,16,66,8,33,68,68,68,68,68,68,68,68,36,9]),0,6)[1],rc=$s(new K([32,132,16,66,102,70,68,68,68,68,36,73,2]),0,5)[1],ic=function(e,t){for(var n=e.length,r=new Ws(n),i=0;i<n;++i)r[i]=t,t+=1<<e[i];return r},ac=new K(new Ws([0,0,0,0,16843009,50528770,134678020,202050057,269422093]).buffer,0,36),oc=ic(ac,0),sc=new K(new Ws([0,0,0,0,0,0,0,0,16843009,50528770,117769220,185207048,252579084,16]).buffer,0,53),cc=ic(sc,3),lc=function(e,t,n){var r=e.length,i=t.length,a=e[r-1],o=(1<<n.b)-1,s=-n.b;a||q(0);for(var c=0,l=n.b,u=(r<<3)-8+Qs(a)-l,d=-1;u>s&&d<i;){var f=u>>3,p=(e[f]|e[f+1]<<8|e[f+2]<<16)>>(u&7);c=(c<<l|p)&o,t[++d]=n.s[c],u-=l=n.n[c]}(u!=s||d+1!=i)&&q(0)},uc=function(e,t,n){var r=6,i=t.length+3>>2,a=i<<1,o=i+a;lc(e.subarray(r,r+=e[0]|e[1]<<8),t.subarray(0,i),n),lc(e.subarray(r,r+=e[2]|e[3]<<8),t.subarray(i,a),n),lc(e.subarray(r,r+=e[4]|e[5]<<8),t.subarray(a,o),n),lc(e.subarray(r),t.subarray(o),n)},dc=function(e,t,n){var r,i=t.b,a=e[i],o=a>>1&3;t.l=a&1;var s=a>>3|e[i+1]<<5|e[i+2]<<13,c=(i+=3)+s;if(o==1)return i>=e.length?void 0:(t.b=i+1,n?(Ks(n,e[i],t.y,t.y+=s),n):Ks(new K(s),e[i]));if(!(c>e.length)){if(o==0)return t.b=c,n?(n.set(e.subarray(i,c),t.y),t.y+=s,n):Gs(e,i,c);if(o==2){var l=e[i],u=l&3,d=l>>2&3,f=l>>4,p=0,m=0;u<2?d&1?f|=e[++i]<<4|(d&2&&e[++i]<<12):f=l>>3:(m=d,d<2?(f|=(e[++i]&63)<<4,p=e[i]>>6|e[++i]<<2):d==2?(f|=e[++i]<<4|(e[++i]&3)<<12,p=e[i]>>2|e[++i]<<6):(f|=e[++i]<<4|(e[++i]&63)<<12,p=e[i]>>6|e[++i]<<2|e[++i]<<10)),++i;var h=n?n.subarray(t.y,t.y+t.m):new K(t.m),g=h.length-f;if(u==0)h.set(e.subarray(i,i+=f),g);else if(u==1)Ks(h,e[i++],g);else{var _=t.h;if(u==2){var v=ec(e,i);p+=i-(i=v[0]),t.h=_=v[1]}else _||q(0);(m?uc:lc)(e.subarray(i,i+=p),h.subarray(g),_)}var y=e[i++];if(y){y==255?y=(e[i++]|e[i++]<<8)+32512:y>127&&(y=y-128<<8|e[i++]);var b=e[i++];b&3&&q(0);for(var x=[nc,rc,tc],S=2;S>-1;--S){var C=b>>(S<<1)+2&3;if(C==1){var w=new K([0,0,e[i++]]);x[S]={s:w.subarray(2,3),n:w.subarray(0,1),t:new Hs(w.buffer,0,1),b:0}}else C==2?(r=$s(e,i,9-(S&1)),i=r[0],x[S]=r[1]):C==3&&(t.t||q(0),x[S]=t.t[S])}var T=t.t=x,E=T[0],D=T[1],O=T[2],k=e[c-1];k||q(0);var A=(c<<3)-8+Qs(k)-O.b,j=A>>3,M=0,ee=(e[j]|e[j+1]<<8)>>(A&7)&(1<<O.b)-1;j=(A-=D.b)>>3;var te=(e[j]|e[j+1]<<8)>>(A&7)&(1<<D.b)-1;j=(A-=E.b)>>3;var ne=(e[j]|e[j+1]<<8)>>(A&7)&(1<<E.b)-1;for(++y;--y;){var re=O.s[ee],ie=O.n[ee],ae=E.s[ne],oe=E.n[ne],se=D.s[te],ce=D.n[te];j=(A-=se)>>3;var le=1<<se,N=le+((e[j]|e[j+1]<<8|e[j+2]<<16|e[j+3]<<24)>>>(A&7)&le-1);j=(A-=sc[ae])>>3;var ue=cc[ae]+((e[j]|e[j+1]<<8|e[j+2]<<16)>>(A&7)&(1<<sc[ae])-1);j=(A-=ac[re])>>3;var de=oc[re]+((e[j]|e[j+1]<<8|e[j+2]<<16)>>(A&7)&(1<<ac[re])-1);if(j=(A-=ie)>>3,ee=O.t[ee]+((e[j]|e[j+1]<<8)>>(A&7)&(1<<ie)-1),j=(A-=oe)>>3,ne=E.t[ne]+((e[j]|e[j+1]<<8)>>(A&7)&(1<<oe)-1),j=(A-=ce)>>3,te=D.t[te]+((e[j]|e[j+1]<<8)>>(A&7)&(1<<ce)-1),N>3)t.o[2]=t.o[1],t.o[1]=t.o[0],t.o[0]=N-=3;else{var fe=N-(de!=0);fe?(N=fe==3?t.o[0]-1:t.o[fe],fe>1&&(t.o[2]=t.o[1]),t.o[1]=t.o[0],t.o[0]=N):N=t.o[0]}for(var S=0;S<de;++S)h[M+S]=h[g+S];M+=de,g+=de;var pe=M-N;if(pe<0){var me=-pe,he=t.e+pe;me>ue&&(me=ue);for(var S=0;S<me;++S)h[M+S]=t.w[he+S];M+=me,ue-=me,pe=0}for(var S=0;S<ue;++S)h[M+S]=h[pe+S];M+=ue}if(M!=g)for(;g<h.length;)h[M++]=h[g++];else M=h.length;n?t.y+=M:h=Gs(h,0,M)}else if(n){if(t.y+=f,g)for(var S=0;S<f;++S)h[S]=h[g+S]}else g&&(h=Gs(h,g));return t.b=c,h}q(2)}},fc=function(e,t){if(e.length==1)return e[0];for(var n=new K(t),r=0,i=0;r<e.length;++r){var a=e[r];n.set(a,i),i+=a.length}return n};function pc(e,t){for(var n=[],r=+!t,i=0,a=0;e.length;){var o=Zs(e,r||t);if(typeof o==`object`){for(r?(t=null,o.w.length==o.u&&(n.push(t=o.w),a+=o.u)):(n.push(t),o.e=0);!o.l;){var s=dc(e,o,t);s||q(5),t?o.e=o.y:(n.push(s),a+=s.length,qs(o.w,0,s.length),o.w.set(s,o.w.length-s.length))}i=o.b+o.c*4}else i=o;e=e.subarray(i)}return fc(n,a)}function mc(e){return globalThis.Bun?.zstdDecompressSync?.(e)}function hc(e){if(new TextDecoder().decode(e.slice(0,8))!==`fig-kiwi`)return null;let t=new DataView(e.buffer,e.byteOffset,e.byteLength),n=12,r=[];for(;n<e.length;){let i=t.getUint32(n,!0);n+=4,r.push(e.slice(n,n+i)),n+=i}return r.length>=2?r:null}async function gc(e){if($r(e))return mc(e)||pc(e);try{return v(e)}catch{throw Error(`Failed to decompress fig-kiwi data`)}}function _c(e,t,n=101){let r,i=globalThis.Bun?.zstdCompressSync;r=i?i(t):b(t);let a=16+e.length+4+r.length,o=new Uint8Array(a),s=new DataView(o.buffer);o.set(new TextEncoder().encode(`fig-kiwi`),0),s.setUint32(8,n,!0);let c=12;return s.setUint32(c,e.length,!0),c+=4,o.set(e,c),c+=e.length,s.setUint32(c,r.length,!0),c+=4,o.set(r,c),o}function vc(e){let t=ui(e.axis);return t===void 0?{axisName:e.axis,value:e.value}:{axisTag:t,axisName:e.axis,value:e.value}}function yc(e,t,n){t.textDecoration&&(e.textDecoration=t.textDecoration),t.textDecorationStyle&&(e.textDecorationStyle=t.textDecorationStyle),t.textDecorationThickness!=null&&(e.textDecorationThickness={value:t.textDecorationThickness,units:`PIXELS`}),t.textDecorationSkipInk!==void 0&&(e.textDecorationSkipInk=t.textDecorationSkipInk),t.textUnderlineOffset!=null&&(e.textUnderlineOffset={value:t.textUnderlineOffset,units:`PIXELS`}),t.textDecorationFills&&t.textDecorationFills.length>0&&(e.textDecorationFillPaints=t.textDecorationFills.map(n))}function bc(e,t,n,r){let i={styleID:e},a=t.fontWeight??n.fontWeight,o=t.italic??n.italic;return i.fontName={family:Rt(t.fontFamily??n.fontFamily),style:js(a,o),postscript:``},t.fontSize!==void 0&&(i.fontSize=t.fontSize),t.fontVariations&&t.fontVariations.length>0&&(i.fontVariations=t.fontVariations.map(vc)),t.fontFeatures&&t.fontFeatures.length>0&&ci(i,t.fontFeatures),t.letterSpacing!==void 0&&(i.letterSpacing={value:t.letterSpacing,units:`PIXELS`}),t.lineHeight!==void 0&&t.lineHeight!==null&&(i.lineHeight={value:t.lineHeight,units:`PIXELS`}),yc(i,t,r),t.fills&&t.fills.length>0&&(i.fillPaints=t.fills.map(r)),i}function xc(e){let t=Array.from({length:e.text.length}).fill(0),n=new Map,r=1;for(let i of e.styleRuns){let e=JSON.stringify(i.style),a=n.get(e);a||(a={id:r++,style:i.style},n.set(e,a));for(let e=i.start;e<i.start+i.length&&e<t.length;e++)t[e]=a.id}return{charIds:t,styleMap:n}}function Sc(e,t,n){if(e.styleRuns.length===0)return{characters:e.text,lines:t(e.text)};let{charIds:r,styleMap:i}=xc(e),a=[...i.values()].map(({id:t,style:r})=>bc(t,r,e,n));return{characters:e.text,lines:t(e.text),characterStyleIDs:r,styleOverrideTable:a}}function Cc(e){let t=Math.max(1,e.split(`
`).length);return Array.from({length:t},()=>({lineType:`PLAIN`}))}function wc(e,t,n){let r=mi(n),i=t.get(r);if(i!==void 0)return i;let a=e.push(n)-1;return t.set(r,a),a}function Tc(e,t,n,r,i){let a=[],o=new Set,s=(e,n,r)=>{let i=Gt(n,r),s=Rt(e),c=`${s}|${i}`;o.has(c)||(o.add(c),a.push({key:{family:s,style:js(n,r),postscript:``},fontLineHeight:1.2,fontDigest:t.get(c),fontStyle:r?`ITALIC`:`NORMAL`,fontWeight:n}))};s(e.fontFamily,e.fontWeight,e.italic);for(let t of e.styleRuns)s(t.style.fontFamily??e.fontFamily,t.style.fontWeight??e.fontWeight,t.style.italic??e.italic);let c=e.lineHeight??Math.ceil(e.fontSize*1.2),l=e.text.length>0?e.width/Math.max(e.text.length,1):0,u=e.derivedTextGlyphs??[],d=u.length>0?u.map((e,t)=>({commandsBlob:wc(n,r,Bs(e.commandsBlob,e.scaleX??1,e.scaleY??1,e.rotation??0)),position:{x:e.x,y:e.y},fontSize:e.fontSize,firstCharacter:t,advance:t+1<u.length?Math.max(u[t+1].x-e.x,0):l,rotation:e.rotation??0})):(i.getGlyphOutlineMetrics(e.fontFamily,Gt(e.fontWeight,e.italic),e.text,e.fontSize)??[]).map((t,i)=>({commandsBlob:wc(n,r,zs(t.commands,e.fontSize)),position:{x:t.x||i*l,y:c},fontSize:e.fontSize,firstCharacter:i,advance:t.advance||l,rotation:0})),f=Array.from({length:e.text.length+1},(e,t)=>t*l);return No({node:e,glyphs:d,fontMetaData:a,baseline:c,width:e.width,lineHeight:c,lineAscent:Math.max(c-e.fontSize*.2,0),logicalIndexToCharacterOffsetMap:f})}function Ec(e,t){let n=e.topLeftRadius>0||e.topRightRadius>0||e.bottomLeftRadius>0||e.bottomRightRadius>0;if(e.cornerRadius>0&&(t.cornerRadius=e.cornerRadius),n||e.independentCorners){let n=e.source.id?de(e)?.rectangleCornerRadiiIndependent:void 0;t.rectangleCornerRadiiIndependent=typeof n==`boolean`?n:e.independentCorners,t.rectangleTopLeftCornerRadius=e.topLeftRadius,t.rectangleTopRightCornerRadius=e.topRightRadius,t.rectangleBottomLeftCornerRadius=e.bottomLeftRadius,t.rectangleBottomRightCornerRadius=e.bottomRightRadius}(e.cornerSmoothing>0||`cornerSmoothing`in de(e))&&(t.cornerSmoothing=e.cornerSmoothing)}function Dc(e,t){if(e.source.id)return e.textAutoResize;let n=e.parentId?t.getNode(e.parentId):void 0;return n&&n.layoutMode!==`NONE`&&n.layoutMode!==`GRID`&&e.layoutPositioning!==`ABSOLUTE`?`HEIGHT`:e.textAutoResize}function Oc(e,t,n,r,i,a,o){Xi(e,Vi,e.textDirection),t.fontSize=e.fontSize,t.fontName={family:Rt(e.fontFamily),style:js(e.fontWeight,e.italic),postscript:``},t.textData=Sc(e,Cc,gi),e.fontVariations.length>0&&(t.fontVariations=e.fontVariations.map(vc));let s=Dc(e,n),c=de(e);(!e.source.id||s!==`NONE`||`textAutoResize`in c)&&(t.textAutoResize=s),t.textAlignHorizontal=e.textAlignHorizontal,t.textAlignVertical=e.textAlignVertical,t.textUserLayoutVersion=4,t.textExplicitLayoutVersion=1,t.textBidiVersion=1,t.textDecorationSkipInk=e.textDecorationSkipInk,t.fontVariantCommonLigatures=!0,t.fontVariantContextualLigatures=!0,ci(t,e.fontFeatures),t.fontVersion=``,t.emojiImageSet=`APPLE`,e.textCase!==`ORIGINAL`&&(t.textCase=e.textCase),e.textTruncation===`ENDING`&&(t.textTruncation=`ENDING`),e.maxLines!=null&&(t.maxLines=e.maxLines),r&&(t.derivedTextData=Tc(e,r,i,a??new Map,o)),e.leadingTrim!==`NONE`&&(t.leadingTrim=e.leadingTrim),e.lineHeight!=null&&(t.lineHeight={value:e.lineHeight,units:`PIXELS`}),t.letterSpacing={value:e.letterSpacing,units:`PIXELS`},e.textDecoration!==`NONE`&&(t.textDecoration=e.textDecoration===`UNDERLINE`?`UNDERLINE`:`STRIKETHROUGH`),e.textDecorationStyle!==`SOLID`&&(t.textDecorationStyle=e.textDecorationStyle),e.textDecorationThickness!=null&&(t.textDecorationThickness={value:e.textDecorationThickness,units:`PIXELS`}),e.textUnderlineOffset!=null&&(t.textUnderlineOffset={value:e.textUnderlineOffset,units:`PIXELS`}),e.textDecorationFills.length>0&&(t.textDecorationFillPaints=e.textDecorationFills.map(gi))}function kc(e){return e===`HORIZONTAL`||e===`VERTICAL`||e===`NONE`?e:void 0}function Ac(e){return e===`FIXED`||e===`RESIZE_TO_FIT`||e===`RESIZE_TO_FIT_WITH_IMPLICIT_SIZE`?e:void 0}function jc(e){return e===`SPACE_EVENLY`?`SPACE_BETWEEN`:e}function Mc(e){return e===`SPACE_EVENLY`?`SPACE_BETWEEN`:e}function Nc(e){let t=Mc(e);return t===`STRETCH`?`MIN`:t}function Pc(e,t,n){if(!e.parentId||e.layoutAlignSelf!==`AUTO`||e.layoutPositioning===`ABSOLUTE`)return;let r=n.getNode(e.parentId);r?.counterAxisAlign===`STRETCH`&&(r.layoutMode===`HORIZONTAL`||r.layoutMode===`VERTICAL`)&&(t.stackChildAlignSelf=`STRETCH`)}function Fc(e,t,n,r){return e===void 0?r===(t??n??r)?void 0:r:e}function Ic(e,t){(e.minWidth!=null||e.minHeight!=null)&&(t.minSize={value:{x:e.minWidth??0,y:e.minHeight??0}}),(e.maxWidth!=null||e.maxHeight!=null)&&(t.maxSize={value:{x:e.maxWidth??1/0,y:e.maxHeight??1/0}})}function Lc(e,t,n){e.source.id||Xi(e,Hi,e.layoutDirection),Ic(e,t);let r=e.source.fig.layout;if(r){t.stackMode=kc(r.stackMode),t.stackSpacing=r.stackSpacing,t.stackPadding=r.stackPadding,t.stackPaddingRight=Fc(r.stackPaddingRight,r.stackHorizontalPadding,r.stackPadding,e.paddingRight),t.stackPaddingBottom=Fc(r.stackPaddingBottom,r.stackVerticalPadding,r.stackPadding,e.paddingBottom),t.stackCounterAlign=Mc(r.stackCounterAlign),t.stackJustify=jc(r.stackJustify),t.stackCounterAlignItems=Nc(r.stackCounterAlignItems),t.stackPrimaryAlignItems=jc(r.stackPrimaryAlignItems);let i=Ac(r.stackPrimarySizing);i&&(t.stackPrimarySizing=i);let a=Ac(r.stackCounterSizing);a&&(t.stackCounterSizing=a),t.stackVerticalPadding=r.stackVerticalPadding,t.stackHorizontalPadding=r.stackHorizontalPadding,t.stackWrap=r.stackWrap,t.stackPositioning=r.stackPositioning,t.stackChildPrimaryGrow=r.stackChildPrimaryGrow,t.stackChildAlignSelf=r.stackChildAlignSelf,t.stackCounterSpacing=r.stackCounterSpacing,t.bordersTakeSpace=r.bordersTakeSpace,r.stackReverseZIndex&&(t.stackReverseZIndex=!0),Pc(e,t,n);return}e.layoutMode!==`NONE`&&e.layoutMode!==`GRID`&&(t.stackMode=e.layoutMode,t.stackSpacing=e.itemSpacing,t.stackVerticalPadding=e.paddingTop,t.stackHorizontalPadding=e.paddingLeft,t.stackPaddingBottom=e.paddingBottom,t.stackPaddingRight=e.paddingRight,t.stackPrimarySizing=e.primaryAxisSizing===`HUG`?`RESIZE_TO_FIT`:`FIXED`,t.stackCounterSizing=e.counterAxisSizing===`HUG`?`RESIZE_TO_FIT`:`FIXED`,t.stackPrimaryAlignItems=jc(e.primaryAxisAlign),t.stackCounterAlignItems=Nc(e.counterAxisAlign),e.layoutWrap===`WRAP`&&(t.stackWrap=`WRAP`),e.counterAxisSpacing>0&&(t.stackCounterSpacing=e.counterAxisSpacing),t.bordersTakeSpace=e.strokesIncludedInLayout),e.itemReverseZIndex&&(t.stackReverseZIndex=!0),e.layoutPositioning===`ABSOLUTE`&&(t.stackPositioning=`ABSOLUTE`),e.layoutGrow>0&&(t.stackChildPrimaryGrow=e.layoutGrow),e.layoutAlignSelf===`AUTO`?Pc(e,t,n):t.stackChildAlignSelf=e.layoutAlignSelf}function Rc(e,t,n){e.isMask&&(t.mask=!0,t.maskType=e.maskType,e.maskIsOutline&&(t.maskIsOutline=!0));let r=[],i={};if(e.vectorNetwork&&e.type===`VECTOR`){let{table:t,styleToId:a}=Ta(e.vectorNetwork);r=t;let o=n.length;n.push(Ea(e.vectorNetwork,a)),i.vectorNetworkBlob=o,i.normalizedSize={x:e.width,y:e.height}}e.fillGeometry.length>0&&(t.fillGeometry=e.fillGeometry.map(e=>{let t=n.length;if(n.push(e.commandsBlob),!e.fills||e.fills.length===0)return{windingRule:e.windingRule,commandsBlob:t};let i=r.length+1;return r.push({styleID:i,fillPaints:e.fills.map(gi)}),{windingRule:e.windingRule,commandsBlob:t,styleID:i}})),r.length>0&&(i.styleOverrideTable=r),Object.keys(i).length>0&&(t.vectorData=i),e.strokeGeometry.length>0&&(t.strokeGeometry=e.strokeGeometry.map(e=>{let t=n.length;return n.push(e.commandsBlob),{windingRule:e.windingRule,commandsBlob:t}}))}function zc(e,t,n,r){if(Object.keys(e.boundVariables).length===0)return;let i=[],a={},o={COLOR:`COLOR`,BOOLEAN:`BOOLEAN`,STRING:`STRING`};for(let[t,s]of Object.entries(e.boundVariables)){let e=n.variables.get(s);if(!e)continue;let c=r?.get(s)??Xn(s);a[t]=U(c);let l=Fi[t];if(!l)continue;let u=o[e.type]??`FLOAT`;i.push({variableData:{value:{alias:{guid:c}},dataType:`ALIAS`,resolvedDataType:u},variableField:l})}Object.keys(a).length>0&&Xi(e,Wi,JSON.stringify(a)),i.length>0&&(t.variableConsumptionMap={entries:i})}function Bc(e,t,n,r,i,a,o,s,c,l=new Map,u,d,f=As,p=gs(i),m,h=new Map){return ks(e,t,n,r,{graph:i,blobs:a,blobIndexByHex:u,nodeIdToGuid:o,assignedGuidValues:d,fontDigestMap:s,glyphBlobMap:l,varIdToGuid:c,modeIdToGuid:m,assetRefToVarGuid:c?Fo(i,c):void 0,componentPropertyDefinitionsById:p,propertyIdToGuid:h,fractionalPosition:Wn,mapToFigmaType:Un,fillToKiwiPaint:gi,safeColor:hi,computeExportTransform:Gn,serializeCornerRadii:Ec,serializeTextProps:(e,t,n,r,i,a)=>Oc(e,t,n,r,i,a,f),serializeLayoutProps:(e,t)=>Lc(e,t,i),serializeGeometry:Rc,serializeVariableBindings:zc,sceneNodeToKiwi:ks})}var Vc={m00:1,m01:0,m02:0,m10:0,m11:1,m12:0},Hc=1;function Uc(e,t=`display-p3`){return{guid:e,type:`DOCUMENT`,name:`Document`,visible:!0,opacity:1,phase:`CREATED`,transform:{...Vc},strokeWeight:Hc,strokeAlign:`CENTER`,strokeJoin:`MITER`,documentColorProfile:t===`display-p3`?`DISPLAY_P3`:`SRGB`}}function Wc(e,t,n,r,i){return{guid:e,parentIndex:{guid:t,position:n},type:`CANVAS`,name:r,visible:!0,opacity:1,phase:`CREATED`,transform:{...Vc},strokeWeight:Hc,strokeAlign:`CENTER`,strokeJoin:`MITER`,pageType:`DESIGN`,...i}}var Gc=[`fontSize`,`fontName`,`lineHeight`,`letterSpacing`,`textDecoration`,`textCase`];function Kc(e,t,n){if(t?.guid)return e.get(U(t.guid));if(!t?.assetRef||!n)return;let{key:r,version:i}=t.assetRef,a=(i?n.get(`${r}@${i}`):void 0)??n.get(r);return a?e.get(a):void 0}function qc(e,t,n){let r=Kc(e,t.styleIdForFill,n);r?.styleType===`FILL`&&r.fillPaints&&(t.fillPaints=r.fillPaints);let i=Kc(e,t.styleIdForStrokeFill,n);i?.styleType===`FILL`&&i.fillPaints&&(t.strokePaints=i.fillPaints)}function Jc(e,t,n){let r=Kc(e,t.styleIdForEffect,n);r?.styleType===`EFFECT`&&r.effects&&(t.effects=r.effects);let i=Kc(e,t.styleIdForGrid,n);i?.styleType===`GRID`&&i.layoutGrids&&(t.layoutGrids=i.layoutGrids)}function Yc(e,t,n){let r=Kc(e,t.styleIdForText,n);if(!(r?.type!==`TEXT`||r.styleType!==`TEXT`))for(let e of Gc)e===`textDecoration`?t.textDecoration=r.textDecoration:r[e]!==void 0&&Object.assign(t,{[e]:r[e]})}function Xc(e,t,n){qc(e,t,n),Jc(e,t,n),Yc(e,t,n)}function Zc(e,t,n,r,i,a,o,s,c){let l=1-c,u=l*l,d=c*c,f=u*l,p=3*u*c,m=3*l*d,h=d*c;return{x:f*e+p*n+m*i+h*o,y:f*t+p*r+m*a+h*s}}function Qc(e,t,n,r,i){let a=1-i,o=a*e.x+i*t.x,s=a*e.y+i*t.y,c=a*t.x+i*n.x,l=a*t.y+i*n.y,u=a*n.x+i*r.x,d=a*n.y+i*r.y,f=a*o+i*c,p=a*s+i*l,m=a*c+i*u,h=a*l+i*d,g=a*f+i*m,_=a*p+i*h;return{left:{p0:{x:e.x,y:e.y},cp1:{x:o,y:s},cp2:{x:f,y:p},p3:{x:g,y:_}},right:{p0:{x:g,y:_},cp1:{x:m,y:h},cp2:{x:u,y:d},p3:{x:r.x,y:r.y}}}}function $c(e,t){let n=e.segments[t],r=e.vertices[n.start],i=e.vertices[n.end];return{p0:{x:r.x,y:r.y},cp1:{x:r.x+n.tangentStart.x,y:r.y+n.tangentStart.y},cp2:{x:i.x+n.tangentEnd.x,y:i.y+n.tangentEnd.y},p3:{x:i.x,y:i.y}}}function el(e){return e.tangentStart.x===0&&e.tangentStart.y===0&&e.tangentEnd.x===0&&e.tangentEnd.y===0}function tl(e,t,n,r){let i=-e+3*t-3*n+r,a=2*(e-2*t+n),o=-e+t,s=[],c=1e-12;if(Math.abs(i)<c){if(Math.abs(a)>c){let e=-o/a;e>0&&e<1&&s.push(e)}}else{let e=a*a-4*i*o;if(e>=0){let t=Math.sqrt(e),n=(-a+t)/(2*i),r=(-a-t)/(2*i);n>0&&n<1&&s.push(n),r>0&&r<1&&Math.abs(r-n)>c&&s.push(r)}}return s}function nl(e){let{vertices:t,segments:n}=e;if(t.length===0)return{x:0,y:0,width:0,height:0};let r=1/0,i=1/0,a=-1/0,o=-1/0,s=(e,t)=>{e<r&&(r=e),t<i&&(i=t),e>a&&(a=e),t>o&&(o=t)};for(let e of t)s(e.x,e.y);for(let t=0;t<n.length;t++){let{p0:n,cp1:r,cp2:i,p3:a}=$c(e,t);for(let e of tl(n.x,r.x,i.x,a.x)){let t=Zc(n.x,n.y,r.x,r.y,i.x,i.y,a.x,a.y,e);s(t.x,t.y)}for(let e of tl(n.y,r.y,i.y,a.y)){let t=Zc(n.x,n.y,r.x,r.y,i.x,i.y,a.x,a.y,e);s(t.x,t.y)}}return{x:r,y:i,width:a-r,height:o-i}}function rl(e,t,n,r,i,a,o=64){let s=0,c=1/0;for(let l=0;l<=o;l++){let u=l/o,d=Zc(n.x,n.y,r.x,r.y,i.x,i.y,a.x,a.y,u),f=d.x-e,p=d.y-t,m=f*f+p*p;m<c&&(c=m,s=u)}let l=Math.max(0,s-1/o),u=Math.min(1,s+1/o);for(let o=0;o<5;o++){let o=(u-l)/4,d=l,f=1/0;for(let s=0;s<=4;s++){let c=l+o*s,u=Zc(n.x,n.y,r.x,r.y,i.x,i.y,a.x,a.y,c),p=u.x-e,m=u.y-t,h=p*p+m*m;h<f&&(f=h,d=c)}s=d,c=f,l=Math.max(0,s-o),u=Math.min(1,s+o)}let d=Zc(n.x,n.y,r.x,r.y,i.x,i.y,a.x,a.y,s);return{t:s,x:d.x,y:d.y,distance:Math.sqrt(c)}}function il(e,t,n,r){let i=r.x-n.x,a=r.y-n.y,o=i*i+a*a,s;s=o<1e-12?0:Math.max(0,Math.min(1,((e-n.x)*i+(t-n.y)*a)/o));let c=n.x+s*i,l=n.y+s*a,u=c-e,d=l-t;return{t:s,x:c,y:l,distance:Math.hypot(u,d)}}function al(e,t,n,r){let i=null;for(let a=0;a<n.segments.length;a++){let o=n.segments[a],s;if(el(o)){let r=n.vertices[o.start],i=n.vertices[o.end];s=il(e,t,r,i)}else{let{p0:r,cp1:i,cp2:o,p3:c}=$c(n,a);s=rl(e,t,r,i,o,c)}s.distance<=r&&(!i||s.distance<i.distance)&&(i={...s,segmentIndex:a})}return i}function ol(e,t){return e.rotation===0&&t.width>0&&t.height>0&&(t.x>0||t.y>0||t.width<e.width-.5||t.height<e.height-.5)}function sl(e,t){let n=ol(e,t),r=n?t.x:0,i=n?t.y:0;return{x:e.x+r,y:e.y+i,width:n?t.width:e.width,height:n?t.height:e.height,offsetX:r,offsetY:i}}function cl(e,t,n){return t===0&&n===0?e:{vertices:e.vertices.map(e=>({...e,x:e.x-t,y:e.y-n})),segments:e.segments,regions:e.regions}}function ll(e){if(e.vertices.length===0)return null;let t=nl(e);return{bounds:t,network:{vertices:e.vertices.map(e=>({...e,x:e.x-t.x,y:e.y-t.y})),segments:e.segments,regions:e.regions}}}function ul(e,t,n,r,i){e.createNode(`VECTOR`,t,{name:`path ${r+1}`,x:n.bounds.x,y:n.bounds.y,width:n.bounds.width,height:n.bounds.height,vectorNetwork:n.network,...i})}function dl(e,t,n,r,i){let a=ll(cl(n.vectorNetwork,r.offsetX,r.offsetY));a&&ul(e,t,a,i,{fillGeometry:[],fills:n.fills,strokes:n.strokes})}function fl(e,t,n){return structuredClone(e).map(e=>{let r=e.gradientTransform;if(!r||t.width<=0||t.height<=0||n.width<=0||n.height<=0)return e;let i=t.width/n.width,a=t.height/n.height;return{...e,gradientTransform:{m00:r.m00*i,m01:r.m01*i,m02:(t.x-n.x)/n.width+r.m02*i,m10:r.m10*a,m11:r.m11*a,m12:(t.y-n.y)/n.height+r.m12*a}}})}function pl(e,t,n,r,i){let a=n.map(e=>{let t=cl(e.vectorNetwork,r.offsetX,r.offsetY);return{path:e,network:t,bounds:nl(t)}}),o=ll(He(a.map(({network:e})=>e)));if(!o)return;let s=a.flatMap(({path:e,network:t,bounds:n})=>{let r=fl(e.fills,n,o.bounds);return t.regions.map(e=>({windingRule:e.windingRule,commandsBlob:new Uint8Array,fills:structuredClone(r)}))}),c=a[0]?fl(a[0].path.fills,a[0].bounds,o.bounds):[];ul(e,t,o,i,{fillGeometry:ce(o.network,s),fills:c,strokes:[]})}function ml(e,t,n,r){for(let[i,a]of n.paths.entries())dl(e,t,a,r,i)}function hl(e,t,n,r){return e.createNode(`FRAME`,t,{name:`clip ${r+1}`,x:0,y:0,width:n.width,height:n.height,fills:[]})}function gl(e,t,n,r,i){let a=ll(cl(n,r.offsetX,r.offsetY));a&&ul(e,t,a,i,{fillGeometry:[],fills:[{type:`SOLID`,color:{r:1,g:1,b:1,a:1},opacity:1,visible:!0}],strokes:[],isMask:!0,maskType:`VECTOR`})}function _l(e,t,n,r,i){let a=t;for(let t of n){let n=hl(e,a,r,i);gl(e,n.id,t,r,i),a=n.id}return a}function vl(e){return e.fills.length>0&&e.strokes.length===0&&e.vectorNetwork.regions.length>0}function yl(e,t,n,r){let i=[],a,o=()=>{if(i.length===0)return;let n=a?_l(e,t,a,r,i[0].index):t;i.length>1?pl(e,n,i.map(({path:e})=>e),r,i[0].index):i[0]&&dl(e,n,i[0].path,r,i[0].index),i=[],a=void 0};for(let[s,c]of n.paths.entries()){let n=c.clipNetworks;if(vl(c)){i.length>0&&a!==n&&o(),a=n,i.push({path:c,index:s});continue}o(),n?dl(e,_l(e,t,n,r,s),c,r,s):dl(e,t,c,r,s)}o()}function bl(e){return _t(e)?.documentElement??null}function xl(e){if(!e)return null;let t=e.trim().split(/[\s,]+/).map(Number);if(t.length!==4||t.some(e=>!Number.isFinite(e)))return null;let[n=0,r=0,i=0,a=0]=t;return i<=0||a<=0?null:{x:n,y:r,width:i,height:a}}function Sl(e){return xl(bl(e)?.getAttribute(`viewBox`)??null)}function Cl(e,t){let n=e?.getAttribute(t);if(!n)return null;let r=Number.parseFloat(n);return Number.isFinite(r)&&r>0?r:null}function wl(e,t={width:24,height:24}){let n=bl(e),r=xl(n?.getAttribute(`viewBox`)??null),i=Cl(n,`width`),a=Cl(n,`height`);return i&&a?{width:i,height:a}:r?{width:r.width,height:r.height}:t}function Tl(e,t,n){let r=n===`x`?e.slice(0,4):e.slice(4);return r.endsWith(`Mid`)?t/2:r.endsWith(`Max`)?t:0}function El(e,t,n,r){let i=n.width/t.width,a=n.height/t.height;if(!r)return{space:t,scaleX:i,scaleY:a,offsetX:0,offsetY:0};let o=(_t(e)?.documentElement?.getAttribute(`preserveAspectRatio`)?.trim()??``).split(/\s+/).filter(Boolean);if(o.includes(`none`))return{space:t,scaleX:i,scaleY:a,offsetX:0,offsetY:0};let s=o.find(e=>e.startsWith(`x`))??`xMidYMid`,c=o.includes(`slice`)?Math.max(i,a):Math.min(i,a),l=n.width-t.width*c,u=n.height-t.height*c;return{space:t,scaleX:c,scaleY:c,offsetX:Tl(s,l,`x`),offsetY:Tl(s,u,`y`)}}function Dl(e,t){return(0,kn.default)(e).translate(-t.space.x,-t.space.y).scale(t.scaleX,t.scaleY).translate(t.offsetX,t.offsetY).toString()}function Ol(e,t,n,r,i){let a=(0,kn.default)(`M${e} ${t}`);r&&(a=a.transform(r)),n&&(a=a.transform(n)),a=a.translate(-i.space.x,-i.space.y).scale(i.scaleX,i.scaleY).translate(i.offsetX,i.offsetY);let o=[];return a.abs().iterate(e=>{o.length===0&&e[0]===`M`&&o.push({x:e[1],y:e[2]})}),o[0]??{x:e,y:t}}function kl(e,t){if(!t||t===`none`)return e;try{return(0,kn.default)(e).transform(t).toString()}catch(n){return console.warn(`Ignoring unsupported SVG transform:`,t,n),e}}function Al(e,t){if(e==null)return t;let n=e.trim();if(n.endsWith(`%`))return Number.parseFloat(n)/100;let r=Number.parseFloat(n);return Number.isFinite(r)?r:t}function jl(e){let t=[],n=Array.from(e.getElementsByTagName(`stop`));for(let[e,r]of n.entries()){let n=Al(r.getAttribute(`offset`),e===0?0:1),i=I(r.getAttribute(`stop-color`)??`#000000`),a=r.getAttribute(`stop-opacity`);if(a!=null){let e=Number.parseFloat(a);Number.isFinite(e)&&(i.a=e)}t.push({offset:Math.min(1,Math.max(0,n)),color:i})}return t.sort((e,t)=>e.offset-t.offset)}function Ml(e){let t=new Map,n=_t(e);if(!n)return t;for(let e of[`linear`,`radial`]){let r=Array.from(n.getElementsByTagName(`${e}Gradient`));for(let n of r){let r=n.getAttribute(`id`);if(!r)continue;let i=n.getAttribute(`gradientUnits`)===`userSpaceOnUse`?`userSpaceOnUse`:`objectBoundingBox`;t.set(r,{kind:e,units:i,transform:n.getAttribute(`gradientTransform`),stops:jl(n),x1:Al(n.getAttribute(`x1`),0),y1:Al(n.getAttribute(`y1`),0),x2:Al(n.getAttribute(`x2`),+(i===`objectBoundingBox`)),y2:Al(n.getAttribute(`y2`),0),cx:Al(n.getAttribute(`cx`),.5),cy:Al(n.getAttribute(`cy`),.5),r:Al(n.getAttribute(`r`),.5)})}}return t}function Nl(e){let t=e?.trim();if(!t?.startsWith(`url(`)||!t.endsWith(`)`))return null;let n=t.slice(4,-1).trim();if(!n.startsWith(`#`))return null;let r=n.slice(1).trim();return r&&!r.includes(` `)?r:null}function Pl(e){return e.map(e=>({color:e.color,position:e.offset}))}function Fl(e,t,n,r,i){let a=Nl(e);if(!a)return null;let o=t.get(a);if(!o||o.stops.length===0||i.width<=0||i.height<=0)return null;let s=(e,t)=>{let a=o.units===`objectBoundingBox`?{x:i.x+e*i.width,y:i.y+t*i.height}:Ol(e,t,n,o.transform,r);return{x:(a.x-i.x)/i.width,y:(a.y-i.y)/i.height}},c=o.stops[0].color,l=Pl(o.stops);if(o.kind===`radial`){let e=s(o.cx,o.cy),t=s(o.cx+o.r,o.cy),n=s(o.cx,o.cy+o.r);return{type:`GRADIENT_RADIAL`,color:c,opacity:1,visible:!0,gradientStops:l,gradientTransform:{m00:t.x-e.x,m01:n.x-e.x,m02:e.x,m10:t.y-e.y,m11:n.y-e.y,m12:e.y}}}let u=s(o.x1,o.y1),d=s(o.x2,o.y2),f=d.x-u.x,p=d.y-u.y;return{type:`GRADIENT_LINEAR`,color:c,opacity:1,visible:!0,gradientStops:l,gradientTransform:{m00:f,m01:-p,m02:u.x,m10:p,m11:f,m12:u.y}}}function Il(e){let t=Sl(e);if(t&&t.width>0&&t.height>0)return t;let n=wl(e);return{x:0,y:0,width:n.width,height:n.height}}function Ll(e){return ze(e.map(e=>nl(e.vectorNetwork)).filter(e=>e.width>0&&e.height>0))}function Rl(e,t){return e.fill&&e.fill!==`none`?[{type:`SOLID`,color:e.fill===`currentColor`?I(t):I(e.fill),opacity:1,visible:!0}]:e.fill===null&&!e.stroke?[{type:`SOLID`,color:I(t),opacity:1,visible:!0}]:[]}function zl(e,t,n=1){return!e.stroke||e.stroke===`none`?[]:[yt(e.stroke===`currentColor`?I(t):I(e.stroke),e.strokeWidth*n,e.strokeCap,e.strokeJoin)]}function Bl(e,t,n){let r=vt(e);if(r.length===0)return null;let i=Il(e);if(i.width<=0||i.height<=0)return null;let a=n?.defaultColor??`#000000`,o=Ml(e),s=El(e,i,t,n?.preserveAspectRatio??!1),c=Math.min(s.scaleX,s.scaleY),l=[],u=new WeakMap;for(let e of r){let t=e.fillRule,n=e.transform??null,r=ft(Dl(kl(e.d,n),s),t),i=nl(r),d=o.size>0?Fl(e.fill,o,n,s,nl(r)):null,f;if(e.clipPaths){let t=e.clipPaths.some(({units:e})=>e===`objectBoundingBox`);f=t?void 0:u.get(e.clipPaths),f||(f=e.clipPaths.map(e=>He(e.paths.map(t=>{let n=kl(t.d,t.transform??null);return e.units===`objectBoundingBox`?(n=(0,kn.default)(n).scale(i.width,i.height).translate(i.x,i.y).toString(),ft(n,t.fillRule)):ft(Dl(n,s),t.fillRule)}))),t||u.set(e.clipPaths,f))}l.push({vectorNetwork:r,fills:d?[d]:Rl(e,a),strokes:zl(e,a,c),clipNetworks:f})}return{paths:l,contentBounds:Ll(l)}}function Vl(e,t){let n=[];for(let r of e){let e=[];for(let n of r.loops){let r=[];for(let e of n){let n=t.get(e);n!=null&&(r.length>0&&r[r.length-1]===n||r.push(n))}r.length>1&&r[0]===r[r.length-1]&&r.pop(),r.length>=2&&e.push(r)}e.length>0&&n.push({...r,loops:e})}return n}function Hl(e,t,n,r){return e.map(e=>({...e,loops:e.loops.map(e=>{let i=[];for(let a=0;a<e.length;a++){if(e[a]!==t){i.push(e[a]);continue}if(!r||n.length<2){i.push(...n);continue}let o=r[t],s=r[e[(a+1)%e.length]];o.end===s.start||o.end===s.end?i.push(...n):i.push(...[...n].reverse())}return i})}))}function Ul(e,t,n,r,i,a,o){let s=n.length;return n[r]=i,n.push(a),{network:{vertices:t,segments:n,regions:Hl(e.regions,r,[r,s],e.segments)},newVertexIndex:o}}function Wl(e,t,n){let r=e.segments[t],i=e.vertices[r.start],a=e.vertices[r.end],o=e.vertices.length,s=[...e.vertices],c=[...e.segments];if(el(r)){let l=i.x+n*(a.x-i.x),u=i.y+n*(a.y-i.y);return s.push({x:l,y:u,handleMirroring:`NONE`}),Ul(e,s,c,t,{start:r.start,end:o,tangentStart:{x:0,y:0},tangentEnd:{x:0,y:0}},{start:o,end:r.end,tangentStart:{x:0,y:0},tangentEnd:{x:0,y:0}},o)}let{p0:l,cp1:u,cp2:d,p3:f}=$c(e,t),{left:p,right:m}=Qc(l,u,d,f,n);return s.push({x:p.p3.x,y:p.p3.y,handleMirroring:`ANGLE_AND_LENGTH`}),Ul(e,s,c,t,{start:r.start,end:o,tangentStart:{x:p.cp1.x-i.x,y:p.cp1.y-i.y},tangentEnd:{x:p.cp2.x-p.p3.x,y:p.cp2.y-p.p3.y}},{start:o,end:r.end,tangentStart:{x:m.cp1.x-p.p3.x,y:m.cp1.y-p.p3.y},tangentEnd:{x:m.cp2.x-a.x,y:m.cp2.y-a.y}},o)}function Gl(e,t,n,r,i){let a=t[n[0]],o=t[n[1]],s=a.start===r?a.end:a.start,c=o.start===r?o.end:o.start,l=a.start===r?{x:a.tangentEnd.x,y:a.tangentEnd.y}:{x:a.tangentStart.x,y:a.tangentStart.y},u=o.start===r?{x:o.tangentEnd.x,y:o.tangentEnd.y}:{x:o.tangentStart.x,y:o.tangentStart.y},d=e[s],f=e[r],p=e[c],m=Math.hypot(f.x-d.x,f.y-d.y),h=m+Math.hypot(p.x-f.x,p.y-f.y),g=h>1e-6?m/h:.5,_=1-g,v=_>1e-6?1/_:1,y=g>1e-6?1/g:1,b={x:l.x*v,y:l.y*v},x={x:u.x*y,y:u.y*y},S=Zc(d.x,d.y,d.x+b.x,d.y+b.y,p.x+x.x,p.y+x.y,p.x,p.y,g),C=Math.hypot(S.x-f.x,S.y-f.y)<h*.05?{tangentStart:b,tangentEnd:x}:Kl(d,f,p,l,u,_,g);return{start:i(s),end:i(c),tangentStart:C.tangentStart,tangentEnd:C.tangentEnd}}function Kl(e,t,n,r,i,a,o){let s=3*a*a*o,c=3*a*o*o,l={x:t.x-(a*a*a+s)*e.x-(o*o*o+c)*n.x,y:t.y-(a*a*a+s)*e.y-(o*o*o+c)*n.y},u=s*r.x*c*i.y-s*r.y*c*i.x;if(Math.abs(u)>1e-9){let e=(l.x*c*i.y-l.y*c*i.x)/u,t=(s*r.x*l.y-s*r.y*l.x)/u;return{tangentStart:{x:e*r.x,y:e*r.y},tangentEnd:{x:t*i.x,y:t*i.y}}}let d={x:t.x-e.x,y:t.y-e.y},f={x:t.x-n.x,y:t.y-n.y},p={x:s*d.x+c*f.x,y:s*d.y+c*f.y},m=1;return Math.abs(p.x)>Math.abs(p.y)?p.x!==0&&(m=l.x/p.x):p.y!==0&&(m=l.y/p.y),{tangentStart:{x:m*d.x,y:m*d.y},tangentEnd:{x:m*f.x,y:m*f.y}}}function ql(e,t,n,r){let i=[],a=new Map,o=-1;for(let s=0;s<e.length;s++){if(!n.has(s)){let n=e[s];a.set(s,i.length),i.push({start:t(n.start),end:t(n.end),tangentStart:{...n.tangentStart},tangentEnd:{...n.tangentEnd}});continue}if(!r){a.set(s,null);continue}o===-1&&(o=i.length,i.push(r)),a.set(s,o)}return{segments:i,indexMap:a}}function Jl(e,t){let{vertices:n,segments:r,regions:i}=e,a=[];for(let e=0;e<r.length;e++)(r[e].start===t||r[e].end===t)&&a.push(e);if(n.length<=1)return null;let o=n.filter((e,n)=>n!==t),s=e=>e>t?e-1:e;if(a.length===2){let e=Gl(n,r,a,t,s),c=ql(r,s,new Set(a),e),l=Vl(i,c.indexMap);return{vertices:o,segments:c.segments,regions:l}}let c=ql(r,s,new Set(a)),l=Vl(i,c.indexMap);return{vertices:o,segments:c.segments,regions:l}}function Yl(e,t){let{vertices:n,segments:r}=e;if(n.length<=1)return null;let i=new Set;for(let e=0;e<r.length;e++)(r[e].start===t||r[e].end===t)&&i.add(e);let a=n.filter((e,n)=>n!==t),o=e=>e>t?e-1:e,s=[];for(let e=0;e<r.length;e++)i.has(e)||s.push({...r[e],start:o(r[e].start),end:o(r[e].end)});return{vertices:a,segments:s,regions:[]}}function Xl(e,t){let{vertices:n,segments:r}=e,i=[],a=[];for(let e=0;e<r.length;e++){let n=r[e];n.end===t?i.push(e):n.start===t&&a.push(e)}if(i.length===0||a.length===0)return e;let o=n.length,s=[...n,{...n[t]}],c=r.map((e,t)=>a.includes(t)?{...e,start:o}:{...e});for(let e of i)c[e]={...c[e],tangentEnd:{x:0,y:0}};for(let e of a)c[e]={...c[e],tangentStart:{x:0,y:0}};return{vertices:s,segments:c,regions:[]}}function Zl(e,t,n){switch(t){case`NONE`:return null;case`ANGLE_AND_LENGTH`:return{x:-e.x,y:-e.y};case`ANGLE`:{let t=n??Math.hypot(e.x,e.y),r=Math.hypot(e.x,e.y);if(r<1e-9)return{x:0,y:0};let i=t/r;return{x:-e.x*i,y:-e.y*i}}}return null}function Ql(e,t,n){for(let r=0;r<e.segments.length;r++){if(r===n)continue;let i=e.segments[r];if(i.start===t)return{segmentIndex:r,tangentField:`tangentStart`};if(i.end===t)return{segmentIndex:r,tangentField:`tangentEnd`}}return null}function $l(e,t){let n=[];for(let r=0;r<e.segments.length;r++){let i=e.segments[r];i.start===t&&n.push({segmentIndex:r,tangentField:`tangentStart`,neighborIndex:i.end}),i.end===t&&n.push({segmentIndex:r,tangentField:`tangentEnd`,neighborIndex:i.start})}return n}var eu=Math.PI*2;function tu(e){let t=e%eu;return t>Math.PI&&(t-=eu),t<-Math.PI&&(t+=eu),t}function nu(e,t){let n=t?e.tx:-e.tx,r=t?e.ty:-e.ty;return-Math.atan2(r,n)}function ru(e,t,n){if(e.length===0)return null;let r=xe(t,n);if(!r)return null;let i=[],a=[],o=[];for(let n of e){let e=Ee(r,n.x,n.y),s=(n.x-e.x)*-e.ty+(n.y-e.y)*e.tx;i.push(e),a.push(s),o.push(tu((n.rotation??0)-nu(e,t.forward)))}let s=i[0].s,c=i.map(e=>{let n=e.s-s;return r.closed&&(t.forward&&n<-r.length/2&&(n+=r.length),!t.forward&&n>r.length/2&&(n-=r.length)),n});return{anchor:s/r.length,deltas:c,offsets:a,phases:o}}function iu(e,t,n,r,i){let a=xe(e,t);if(!a)return null;let o=e.forward?1:-1,s=n*a.length;return i.map(t=>{let n=Te(a,s);return s+=o*t.advance*t.fontSize,{commandsBlob:t.commandsBlob,x:n.x+-n.ty*r,y:n.y+n.tx*r,fontSize:t.fontSize,rotation:tu(nu(n,e.forward))}})}function au(e,t,n,r){if(e.length!==n.deltas.length)return null;let i=xe(t,r);if(!i)return null;let a=n.anchor*i.length;return e.map((e,r)=>{let o=Te(i,a+n.deltas[r]),s=n.offsets[r];return{...e,commandsBlob:new Uint8Array(e.commandsBlob),x:o.x+-o.ty*s,y:o.y+o.tx*s,rotation:tu(nu(o,t.forward)+n.phases[r]),scaleX:void 0,scaleY:void 0}})}function ou(e){for(let t of e){if(t.pluginData&&t.pluginData.length>1){let e=new Map;for(let n of t.pluginData)e.set(`${n.pluginID}\0${n.key}\0${n.value}`,n);e.size<t.pluginData.length&&(t.pluginData=[...e.values()])}if(t.pluginRelaunchData&&t.pluginRelaunchData.length>1){let e=new Map;for(let n of t.pluginRelaunchData)e.set(`${n.pluginID}\0${n.command}\0${n.message}\0${n.isDeleted}`,n);e.size<t.pluginRelaunchData.length&&(t.pluginRelaunchData=[...e.values()])}}}function su(e){if(new TextDecoder().decode(e.slice(0,8))!==`fig-kiwi`)return null;let t=new DataView(e.buffer,e.byteOffset,e.byteLength),n=t.getUint32(8,!0),r=12,i=[];for(;r<e.length&&!(r+4>e.length);){let n=t.getUint32(r,!0);if(r+=4,r+n>e.length)throw Error(`Corrupted .fig file: chunk at offset ${r-4} declares length ${n} but only ${e.length-r} bytes remain`);i.push(e.slice(r,r+n)),r+=n}if(i.length<2)return null;let a=i[1],o;if($r(a))o=pc(a);else try{o=v(a)}catch{throw Error(`Failed to decompress fig-kiwi data chunk`)}return{schemaDeflated:i[0],dataRaw:o,version:n}}function cu(e,t){let n=su(e);if(!n)throw Error(`Invalid fig-kiwi container`);let r=zr(new rr(v(n.schemaDeflated)));if(t)try{let e=Qr(r,n.dataRaw);e.length>0&&t(e)}catch(e){console.warn(`Failed to scan FIG page manifest; continuing with full decode:`,e)}let i=Ir(r).decodeMessage(n.dataRaw),a=i.nodeChanges;if(!a||a.length===0)throw Error(`No nodes found in .fig file`);return ou(a),{nodeChanges:a,blobs:(i.blobs??[]).map(e=>e.bytes instanceof Uint8Array?e.bytes:new Uint8Array(Object.values(e.bytes))),figKiwiVersion:n.version,figSchemaDeflated:n.schemaDeflated}}var lu=101010256,uu=33639248,du=67324752,fu=22,pu=4*1024*1024,mu=8*1024*1024,hu=16*1024*1024,gu=`thumbnail.png`,_u=new Uint8Array([137,80,78,71,13,10,26,10]);function vu(e){return new DataView(e.buffer,e.byteOffset,e.byteLength)}function yu(e){let t=vu(e);for(let n=e.byteLength-fu;n>=0;n--)if(t.getUint32(n,!0)===lu)return n;return-1}function bu(e,t){return Number.isFinite(e)&&e&&e>0?e:t}function xu(e){return _u.every((t,n)=>e[n]===t)}function Su(e){if(e.byteLength<24||!xu(e))return!1;let t=vu(e);return t.getUint32(16)>1&&t.getUint32(20)>1}function Cu(e,t,n){let r=vu(e),i=new TextDecoder;for(let a=0;a+46<=e.byteLength;){if(r.getUint32(a,!0)!==uu)return null;let o=r.getUint16(a+10,!0),s=r.getUint32(a+20,!0),c=r.getUint32(a+24,!0),l=r.getUint16(a+28,!0),u=a+46+l+r.getUint16(a+30,!0)+r.getUint16(a+32,!0);if(u>e.byteLength)return null;if(i.decode(e.subarray(a+46,a+46+l))===gu)return s>t||c>n?null:{method:o,compressedSize:s,outputSize:c,localOffset:r.getUint32(a+42,!0)};a=u}return null}async function wu(e,t,n){let r=await e.read(t.localOffset,Math.min(e.size,t.localOffset+30));if(r.byteLength<30||vu(r).getUint32(0,!0)!==du)return null;let i=vu(r),a=t.localOffset+30+i.getUint16(26,!0)+i.getUint16(28,!0);if(a+t.compressedSize>e.size)return null;let o=await e.read(a,a+t.compressedSize);if(t.method===0)return o.byteLength===t.outputSize&&Su(o)?o:null;if(t.method!==8)return null;let s=(()=>{try{return v(o,{out:new Uint8Array(n+1)})}catch{return null}})();return s?.byteLength===t.outputSize&&Su(s)?s:null}async function Tu(e,t={}){if(!Number.isSafeInteger(e.size)||e.size<fu)return null;let n=bu(t.maxTailBytes,pu),r=bu(t.maxCompressedBytes,mu),i=bu(t.maxOutputBytes,hu),a=Math.min(e.size,65557),o=e.size-a,s=await e.read(o,e.size),c=yu(s);if(c<0)return null;let l=vu(s),u=l.getUint32(c+12,!0),d=l.getUint32(c+16,!0);if(u>n||d+u>e.size)return null;let f=Cu(d>=o&&d+u<=e.size?s.subarray(d-o,d-o+u):await e.read(d,d+u),r,i);return f?wu(e,f,i):null}function Eu(e){let t=e.toLowerCase();return t.endsWith(`.png`)||t.endsWith(`.jpg`)||t.endsWith(`.json`)}function Du(e){let t=e[`canvas.fig`]??e.canvas;if(t)return t;let n=null;for(let[t,r]of Object.entries(e))!r||Eu(t)||(!n||r.byteLength>n.byteLength)&&(n=r);return n}function Ou(e){return e===`canvas.fig`||e===`canvas`}function ku(e,t){let n=hc(e);if(!n)return null;let r=cu(e,t),i=n.slice(2).find(xu)??null;return{...r,images:[],thumbnailPNG:i,metaJSON:null}}function Au(e,t){let n=new Uint8Array(e),r=ku(n,t);if(r)return r;let i=Du(y(n,{filter:({name:e})=>Ou(e)})),a,o;if(i)o=cu(i,t),a=y(n,{filter:({name:e})=>!Ou(e)});else{if(a=y(n),i=Du(a),!i)throw Error(`No canvas data found in .fig file. Entries: ${Object.keys(a).join(`, `)}`);o=cu(i,t)}let s=a[`meta.json`],c=Object.entries(a).filter(([e])=>e.startsWith(`images/`)&&e!==`images/`).map(([e,t])=>[e.slice(7),t]);return{...o,images:c,thumbnailPNG:a[`thumbnail.png`]??null,metaJSON:Object.hasOwn(a,`meta.json`)?new TextDecoder().decode(s):null}}function ju(e){let t={"canvas.fig":[_c(e.schemaDeflated,e.kiwiData,e.figKiwiVersion),{level:0}],"thumbnail.png":[e.thumbnailPNG,{level:0}],"meta.json":new TextEncoder().encode(e.metaJSON)};for(let n of e.images??[])t[n.name]=[n.data,{level:0}];return _(t)}function Mu(e,t,n,r,i,a){return ju({schemaDeflated:e,kiwiData:t,thumbnailPNG:n,metaJSON:r,images:i,figKiwiVersion:a})}function Nu(e,t={}){let{width:n,height:r}=wl(e),i=Bl(e,{width:n,height:r},{defaultColor:t.defaultColor,preserveAspectRatio:!0});return i?{width:n,height:r,...i}:null}function Pu(e,t,n,r={}){let i=e.createNode(`FRAME`,t,{name:r.name??`SVG`,x:r.x??0,y:r.y??0,width:n.width,height:n.height,fills:[]});try{return yl(e,i.id,n,{x:i.x,y:i.y,width:i.width,height:i.height,offsetX:0,offsetY:0}),e.getChildren(i.id).length>0?i:(e.deleteNode(i.id),null)}catch(t){throw e.deleteNode(i.id),t}}function Fu(e,t,n,r={}){let i=Nu(n,r);return i?Pu(e,t,i,r):null}function Iu(e,t=1){return ut(e,t)}function Lu(e){let t=e.filter(e=>e.visible&&e.type===`SOLID`);return t.length===1?Iu(t[0].color,t[0].opacity):null}function Ru(e){let t=e.filter(e=>e.visible);if(t.length!==1)return null;let n=t[0];return{color:Iu(n.color,n.opacity),weight:n.weight,dash:n.dashPattern&&n.dashPattern.length>0?[...n.dashPattern]:null}}function zu(e){return e.type!==`DROP_SHADOW`&&e.type!==`INNER_SHADOW`?null:`${e.offset.x} ${e.offset.y} ${e.radius} ${Iu(e.color,e.color.a)}`}var Bu={"{":`&#123;`,"}":`&#125;`,"<":`&lt;`,">":`&gt;`,"&":`&amp;`};function Vu(e){return e.replace(/[{}<>&]/g,e=>Bu[e])}function Hu(e,t){return typeof t==`string`?`${e}="${t}"`:typeof t==`number`?`${e}={${t}}`:typeof t==`boolean`?t?e:`${e}={false}`:`${e}={${JSON.stringify(t)}}`}function Uu(e,t){let n=e.parentId?t.getNode(e.parentId):null;return{isAutoLayout:e.layoutMode!==`NONE`,isGrid:e.layoutMode===`GRID`,isFlex:e.layoutMode===`HORIZONTAL`||e.layoutMode===`VERTICAL`,parentIsAutoLayout:n?n.layoutMode!==`NONE`:!1,parentIsGrid:n?n.layoutMode===`GRID`:!1}}function Wu(e){let{paddingTop:t,paddingRight:n,paddingBottom:r,paddingLeft:i}=e;return t===0&&n===0&&r===0&&i===0?null:{pt:t,pr:n,pb:r,pl:i}}function Gu(e,t,n,r){let{pt:i,pr:a,pb:o,pl:s}=e;return i===a&&a===o&&o===s?[t(i)]:i===o&&s===a?n(i,s):r(e)}function Ku(e){if(e.cornerRadius<=0)return null;if(e.independentCorners)return{tl:e.topLeftRadius,tr:e.topRightRadius,br:e.bottomRightRadius,bl:e.bottomLeftRadius};let t=e.cornerRadius;return{tl:t,tr:t,br:t,bl:t}}function qu(e){return e.sizing===`FR`?`${e.value}fr`:e.sizing===`FIXED`?`${e.value}px`:`auto`}function Ju(e){return e.map(qu).join(` `)}var Yu=[{properties:[`margin-top`,`margin-right`,`margin-bottom`,`margin-left`],all:`m`,x:`mx`,y:`my`,top:`mt`,right:`mr`,bottom:`mb`,left:`ml`},{properties:[`padding-top`,`padding-right`,`padding-bottom`,`padding-left`],all:`p`,x:`px`,y:`py`,top:`pt`,right:`pr`,bottom:`pb`,left:`pl`},{properties:[`top`,`right`,`bottom`,`left`],all:`inset`,x:`inset-x`,y:`inset-y`,top:`top`,right:`right`,bottom:`bottom`,left:`left`},{properties:[`border-top-width`,`border-right-width`,`border-bottom-width`,`border-left-width`],all:`border`,x:`border-x`,y:`border-y`,top:`border-t`,right:`border-r`,bottom:`border-b`,left:`border-l`},{properties:[`border-top-color`,`border-right-color`,`border-bottom-color`,`border-left-color`],all:`border`,x:`border-x`,y:`border-y`,top:`border-t`,right:`border-r`,bottom:`border-b`,left:`border-l`},{properties:[`border-top-style`,`border-right-style`,`border-bottom-style`,`border-left-style`],all:`border`,x:`border-x`,y:`border-y`,top:`border-t`,right:`border-r`,bottom:`border-b`,left:`border-l`},{properties:[`scroll-margin-top`,`scroll-margin-right`,`scroll-margin-bottom`,`scroll-margin-left`],all:`scroll-m`,x:`scroll-mx`,y:`scroll-my`,top:`scroll-mt`,right:`scroll-mr`,bottom:`scroll-mb`,left:`scroll-ml`},{properties:[`scroll-padding-top`,`scroll-padding-right`,`scroll-padding-bottom`,`scroll-padding-left`],all:`scroll-p`,x:`scroll-px`,y:`scroll-py`,top:`scroll-pt`,right:`scroll-pr`,bottom:`scroll-pb`,left:`scroll-pl`}];function Xu(e,t){if(t.compression===`none`)return e;let n=[...e],r=[];for(let e of Yu){let t=Zu(n,e.properties);if(!t)continue;let i=Qu(t,e);n=n.filter(t=>!e.properties.includes(t.property)),r.push(...i)}let i=[...n,...r];return i=td(i),i=ed(i),i}function Zu(e,t){let[n,r,i,a]=t,o=e.find(e=>e.property===n),s=e.find(e=>e.property===r),c=e.find(e=>e.property===i),l=e.find(e=>e.property===a);return o&&s&&c&&l?{top:o,right:s,bottom:c,left:l}:void 0}function Qu(e,t){let n=$u(e.top.className,t.top),r=$u(e.right.className,t.right),i=$u(e.bottom.className,t.bottom),a=$u(e.left.className,t.left);if(!n||!r||!i||!a)return[e.top,e.right,e.bottom,e.left];if(n===r&&r===i&&i===a)return[nd(e.top,`${t.all}-${n}`)];if(n===i&&r===a)return[nd(e.top,`${t.y}-${n}`),nd(e.right,`${t.x}-${r}`)];let o=[];return n===i?o.push(nd(e.top,`${t.y}-${n}`)):o.push(nd(e.top,`${t.top}-${n}`),nd(e.bottom,`${t.bottom}-${i}`)),r===a?o.push(nd(e.right,`${t.x}-${r}`)):o.push(nd(e.right,`${t.right}-${r}`),nd(e.left,`${t.left}-${a}`)),o}function $u(e,t){if(e.startsWith(t+`-`))return e.slice(t.length+1)}function ed(e){let t=[...e],n=t.find(e=>e.property===`row-gap`),r=t.find(e=>e.property===`column-gap`);if(n&&r){let e=$u(n.className,`gap-y`),i=$u(r.className,`gap-x`);e&&i&&e===i&&(t=t.filter(e=>e.property!==`row-gap`&&e.property!==`column-gap`),t.push(nd(n,`gap-${e}`)))}return t}function td(e){let t=`border-top-left-radius`,n=`border-top-right-radius`,r=`border-bottom-right-radius`,i=`border-bottom-left-radius`,a=e.find(e=>e.property===t),o=e.find(e=>e.property===n),s=e.find(e=>e.property===r),c=e.find(e=>e.property===i);if(!a||!o||!s||!c)return e;let l=$u(a.className,`rounded-tl`),u=$u(o.className,`rounded-tr`),d=$u(s.className,`rounded-br`),f=$u(c.className,`rounded-bl`);if(!l||!u||!d||!f)return e;let p=new Set([t,n,r,i]),m=e.filter(e=>!p.has(e.property));if(l===u&&u===d&&d===f)return[...m,nd(a,`rounded-${l}`)];let h=[...m];return l===f&&u===d?(h.push(nd(a,`rounded-l-${l}`)),h.push(nd(o,`rounded-r-${u}`)),h):(l===u?h.push(nd(a,`rounded-t-${l}`)):h.push(a,o),d===f?h.push(nd(s,`rounded-b-${d}`)):h.push(s,c),h)}function nd(e,t){return{...e,className:t}}var rd={"red-50":`#fef2f2`,"red-100":`#fee2e2`,"red-200":`#fecaca`,"red-300":`#fca5a5`,"red-400":`#f87171`,"red-500":`#ef4444`,"red-600":`#dc2626`,"red-700":`#b91c1c`,"red-800":`#991b1b`,"red-900":`#7f1d1d`,"red-950":`#450a0a`,"orange-50":`#fff7ed`,"orange-100":`#ffedd5`,"orange-200":`#fed7aa`,"orange-300":`#fdba74`,"orange-400":`#fb923c`,"orange-500":`#f97316`,"orange-600":`#ea580c`,"orange-700":`#c2410c`,"orange-800":`#9a3412`,"orange-900":`#7c2d12`,"orange-950":`#431407`,"amber-50":`#fffbeb`,"amber-100":`#fef3c7`,"amber-200":`#fde68a`,"amber-300":`#fcd34d`,"amber-400":`#fbbf24`,"amber-500":`#f59e0b`,"amber-600":`#d97706`,"amber-700":`#b45309`,"amber-800":`#92400e`,"amber-900":`#78350f`,"amber-950":`#451a03`,"yellow-50":`#fefce8`,"yellow-100":`#fef9c3`,"yellow-200":`#fef08a`,"yellow-300":`#fde047`,"yellow-400":`#facc15`,"yellow-500":`#eab308`,"yellow-600":`#ca8a04`,"yellow-700":`#a16207`,"yellow-800":`#854d0e`,"yellow-900":`#713f12`,"yellow-950":`#422006`,"lime-50":`#f7fee7`,"lime-100":`#ecfccb`,"lime-200":`#d9f99d`,"lime-300":`#bef264`,"lime-400":`#a3e635`,"lime-500":`#84cc16`,"lime-600":`#65a30d`,"lime-700":`#4d7c0f`,"lime-800":`#3f6212`,"lime-900":`#365314`,"lime-950":`#1a2e05`,"green-50":`#f0fdf4`,"green-100":`#dcfce7`,"green-200":`#bbf7d0`,"green-300":`#86efac`,"green-400":`#4ade80`,"green-500":`#22c55e`,"green-600":`#16a34a`,"green-700":`#15803d`,"green-800":`#166534`,"green-900":`#14532d`,"green-950":`#052e16`,"emerald-50":`#ecfdf5`,"emerald-100":`#d1fae5`,"emerald-200":`#a7f3d0`,"emerald-300":`#6ee7b7`,"emerald-400":`#34d399`,"emerald-500":`#10b981`,"emerald-600":`#059669`,"emerald-700":`#047857`,"emerald-800":`#065f46`,"emerald-900":`#064e3b`,"emerald-950":`#022c22`,"teal-50":`#f0fdfa`,"teal-100":`#ccfbf1`,"teal-200":`#99f6e4`,"teal-300":`#5eead4`,"teal-400":`#2dd4bf`,"teal-500":`#14b8a6`,"teal-600":`#0d9488`,"teal-700":`#0f766e`,"teal-800":`#115e59`,"teal-900":`#134e4a`,"teal-950":`#042f2e`,"cyan-50":`#ecfeff`,"cyan-100":`#cffafe`,"cyan-200":`#a5f3fc`,"cyan-300":`#67e8f9`,"cyan-400":`#22d3ee`,"cyan-500":`#06b6d4`,"cyan-600":`#0891b2`,"cyan-700":`#0e7490`,"cyan-800":`#155e75`,"cyan-900":`#164e63`,"cyan-950":`#083344`,"sky-50":`#f0f9ff`,"sky-100":`#e0f2fe`,"sky-200":`#bae6fd`,"sky-300":`#7dd3fc`,"sky-400":`#38bdf8`,"sky-500":`#0ea5e9`,"sky-600":`#0284c7`,"sky-700":`#0369a1`,"sky-800":`#075985`,"sky-900":`#0c4a6e`,"sky-950":`#082f49`,"blue-50":`#eff6ff`,"blue-100":`#dbeafe`,"blue-200":`#bfdbfe`,"blue-300":`#93c5fd`,"blue-400":`#60a5fa`,"blue-500":`#3b82f6`,"blue-600":`#2563eb`,"blue-700":`#1d4ed8`,"blue-800":`#1e40af`,"blue-900":`#1e3a8a`,"blue-950":`#172554`,"indigo-50":`#eef2ff`,"indigo-100":`#e0e7ff`,"indigo-200":`#c7d2fe`,"indigo-300":`#a5b4fc`,"indigo-400":`#818cf8`,"indigo-500":`#6366f1`,"indigo-600":`#4f46e5`,"indigo-700":`#4338ca`,"indigo-800":`#3730a3`,"indigo-900":`#312e81`,"indigo-950":`#1e1b4b`,"violet-50":`#f5f3ff`,"violet-100":`#ede9fe`,"violet-200":`#ddd6fe`,"violet-300":`#c4b5fd`,"violet-400":`#a78bfa`,"violet-500":`#8b5cf6`,"violet-600":`#7c3aed`,"violet-700":`#6d28d9`,"violet-800":`#5b21b6`,"violet-900":`#4c1d95`,"violet-950":`#2e1065`,"purple-50":`#faf5ff`,"purple-100":`#f3e8ff`,"purple-200":`#e9d5ff`,"purple-300":`#d8b4fe`,"purple-400":`#c084fc`,"purple-500":`#a855f7`,"purple-600":`#9333ea`,"purple-700":`#7e22ce`,"purple-800":`#6b21a8`,"purple-900":`#581c87`,"purple-950":`#3b0764`,"fuchsia-50":`#fdf4ff`,"fuchsia-100":`#fae8ff`,"fuchsia-200":`#f5d0fe`,"fuchsia-300":`#f0abfc`,"fuchsia-400":`#e879f9`,"fuchsia-500":`#d946ef`,"fuchsia-600":`#c026d3`,"fuchsia-700":`#a21caf`,"fuchsia-800":`#86198f`,"fuchsia-900":`#701a75`,"fuchsia-950":`#4a044e`,"pink-50":`#fdf2f8`,"pink-100":`#fce7f3`,"pink-200":`#fbcfe8`,"pink-300":`#f9a8d4`,"pink-400":`#f472b6`,"pink-500":`#ec4899`,"pink-600":`#db2777`,"pink-700":`#be185d`,"pink-800":`#9d174d`,"pink-900":`#831843`,"pink-950":`#500724`,"rose-50":`#fff1f2`,"rose-100":`#ffe4e6`,"rose-200":`#fecdd3`,"rose-300":`#fda4af`,"rose-400":`#fb7185`,"rose-500":`#f43f5e`,"rose-600":`#e11d48`,"rose-700":`#be123c`,"rose-800":`#9f1239`,"rose-900":`#881337`,"rose-950":`#4c0519`,"slate-50":`#f8fafc`,"slate-100":`#f1f5f9`,"slate-200":`#e2e8f0`,"slate-300":`#cbd5e1`,"slate-400":`#94a3b8`,"slate-500":`#64748b`,"slate-600":`#475569`,"slate-700":`#334155`,"slate-800":`#1e293b`,"slate-900":`#0f172a`,"slate-950":`#020617`,"gray-50":`#f9fafb`,"gray-100":`#f3f4f6`,"gray-200":`#e5e7eb`,"gray-300":`#d1d5db`,"gray-400":`#9ca3af`,"gray-500":`#6b7280`,"gray-600":`#4b5563`,"gray-700":`#374151`,"gray-800":`#1f2937`,"gray-900":`#111827`,"gray-950":`#030712`,"zinc-50":`#fafafa`,"zinc-100":`#f4f4f5`,"zinc-200":`#e4e4e7`,"zinc-300":`#d4d4d8`,"zinc-400":`#a1a1aa`,"zinc-500":`#71717a`,"zinc-600":`#52525b`,"zinc-700":`#3f3f46`,"zinc-800":`#27272a`,"zinc-900":`#18181b`,"zinc-950":`#09090b`,"neutral-50":`#fafafa`,"neutral-100":`#f5f5f5`,"neutral-200":`#e5e5e5`,"neutral-300":`#d4d4d4`,"neutral-400":`#a3a3a3`,"neutral-500":`#737373`,"neutral-600":`#525252`,"neutral-700":`#404040`,"neutral-800":`#262626`,"neutral-900":`#171717`,"neutral-950":`#0a0a0a`,"stone-50":`#fafaf9`,"stone-100":`#f5f5f4`,"stone-200":`#e7e5e4`,"stone-300":`#d6d3d1`,"stone-400":`#a8a29e`,"stone-500":`#78716c`,"stone-600":`#57534e`,"stone-700":`#44403c`,"stone-800":`#292524`,"stone-900":`#1c1917`,"stone-950":`#0c0a09`},id={};for(let[e,t]of Object.entries(rd))id[t.toLowerCase()]=e;function ad(e){return id[e.toLowerCase()]}var od={transparent:`transparent`,current:`currentColor`,black:`#000000`,white:`#ffffff`,"amber-100":`oklch(96.2% 0.059 95.617)`,"amber-200":`oklch(92.4% 0.12 95.746)`,"amber-300":`oklch(87.9% 0.169 91.605)`,"amber-400":`oklch(82.8% 0.189 84.429)`,"amber-50":`oklch(98.7% 0.022 95.277)`,"amber-500":`oklch(76.9% 0.188 70.08)`,"amber-600":`oklch(66.6% 0.179 58.318)`,"amber-700":`oklch(55.5% 0.163 48.998)`,"amber-800":`oklch(47.3% 0.137 46.201)`,"amber-900":`oklch(41.4% 0.112 45.904)`,"amber-950":`oklch(27.9% 0.077 45.635)`,"blue-100":`oklch(93.2% 0.032 255.585)`,"blue-200":`oklch(88.2% 0.059 254.128)`,"blue-300":`oklch(80.9% 0.105 251.813)`,"blue-400":`oklch(70.7% 0.165 254.624)`,"blue-50":`oklch(97% 0.014 254.604)`,"blue-500":`oklch(62.3% 0.214 259.815)`,"blue-600":`oklch(54.6% 0.245 262.881)`,"blue-700":`oklch(48.8% 0.243 264.376)`,"blue-800":`oklch(42.4% 0.199 265.638)`,"blue-900":`oklch(37.9% 0.146 265.522)`,"blue-950":`oklch(28.2% 0.091 267.935)`,"cyan-100":`oklch(95.6% 0.045 203.388)`,"cyan-200":`oklch(91.7% 0.08 205.041)`,"cyan-300":`oklch(86.5% 0.127 207.078)`,"cyan-400":`oklch(78.9% 0.154 211.53)`,"cyan-50":`oklch(98.4% 0.019 200.873)`,"cyan-500":`oklch(71.5% 0.143 215.221)`,"cyan-600":`oklch(60.9% 0.126 221.723)`,"cyan-700":`oklch(52% 0.105 223.128)`,"cyan-800":`oklch(45% 0.085 224.283)`,"cyan-900":`oklch(39.8% 0.07 227.392)`,"cyan-950":`oklch(30.2% 0.056 229.695)`,"emerald-100":`oklch(95% 0.052 163.051)`,"emerald-200":`oklch(90.5% 0.093 164.15)`,"emerald-300":`oklch(84.5% 0.143 164.978)`,"emerald-400":`oklch(76.5% 0.177 163.223)`,"emerald-50":`oklch(97.9% 0.021 166.113)`,"emerald-500":`oklch(69.6% 0.17 162.48)`,"emerald-600":`oklch(59.6% 0.145 163.225)`,"emerald-700":`oklch(50.8% 0.118 165.612)`,"emerald-800":`oklch(43.2% 0.095 166.913)`,"emerald-900":`oklch(37.8% 0.077 168.94)`,"emerald-950":`oklch(26.2% 0.051 172.552)`,"fuchsia-100":`oklch(95.2% 0.037 318.852)`,"fuchsia-200":`oklch(90.3% 0.076 319.62)`,"fuchsia-300":`oklch(83.3% 0.145 321.434)`,"fuchsia-400":`oklch(74% 0.238 322.16)`,"fuchsia-50":`oklch(97.7% 0.017 320.058)`,"fuchsia-500":`oklch(66.7% 0.295 322.15)`,"fuchsia-600":`oklch(59.1% 0.293 322.896)`,"fuchsia-700":`oklch(51.8% 0.253 323.949)`,"fuchsia-800":`oklch(45.2% 0.211 324.591)`,"fuchsia-900":`oklch(40.1% 0.17 325.612)`,"fuchsia-950":`oklch(29.3% 0.136 325.661)`,"gray-100":`oklch(96.7% 0.003 264.542)`,"gray-200":`oklch(92.8% 0.006 264.531)`,"gray-300":`oklch(87.2% 0.01 258.338)`,"gray-400":`oklch(70.7% 0.022 261.325)`,"gray-50":`oklch(98.5% 0.002 247.839)`,"gray-500":`oklch(55.1% 0.027 264.364)`,"gray-600":`oklch(44.6% 0.03 256.802)`,"gray-700":`oklch(37.3% 0.034 259.733)`,"gray-800":`oklch(27.8% 0.033 256.848)`,"gray-900":`oklch(21% 0.034 264.665)`,"gray-950":`oklch(13% 0.028 261.692)`,"green-100":`oklch(96.2% 0.044 156.743)`,"green-200":`oklch(92.5% 0.084 155.995)`,"green-300":`oklch(87.1% 0.15 154.449)`,"green-400":`oklch(79.2% 0.209 151.711)`,"green-50":`oklch(98.2% 0.018 155.826)`,"green-500":`oklch(72.3% 0.219 149.579)`,"green-600":`oklch(62.7% 0.194 149.214)`,"green-700":`oklch(52.7% 0.154 150.069)`,"green-800":`oklch(44.8% 0.119 151.328)`,"green-900":`oklch(39.3% 0.095 152.535)`,"green-950":`oklch(26.6% 0.065 152.934)`,"indigo-100":`oklch(93% 0.034 272.788)`,"indigo-200":`oklch(87% 0.065 274.039)`,"indigo-300":`oklch(78.5% 0.115 274.713)`,"indigo-400":`oklch(67.3% 0.182 276.935)`,"indigo-50":`oklch(96.2% 0.018 272.314)`,"indigo-500":`oklch(58.5% 0.233 277.117)`,"indigo-600":`oklch(51.1% 0.262 276.966)`,"indigo-700":`oklch(45.7% 0.24 277.023)`,"indigo-800":`oklch(39.8% 0.195 277.366)`,"indigo-900":`oklch(35.9% 0.144 278.697)`,"indigo-950":`oklch(25.7% 0.09 281.288)`,"lime-100":`oklch(96.7% 0.067 122.328)`,"lime-200":`oklch(93.8% 0.127 124.321)`,"lime-300":`oklch(89.7% 0.196 126.665)`,"lime-400":`oklch(84.1% 0.238 128.85)`,"lime-50":`oklch(98.6% 0.031 120.757)`,"lime-500":`oklch(76.8% 0.233 130.85)`,"lime-600":`oklch(64.8% 0.2 131.684)`,"lime-700":`oklch(53.2% 0.157 131.589)`,"lime-800":`oklch(45.3% 0.124 130.933)`,"lime-900":`oklch(40.5% 0.101 131.063)`,"lime-950":`oklch(27.4% 0.072 132.109)`,"neutral-100":`oklch(97% 0 0)`,"neutral-200":`oklch(92.2% 0 0)`,"neutral-300":`oklch(87% 0 0)`,"neutral-400":`oklch(70.8% 0 0)`,"neutral-50":`oklch(98.5% 0 0)`,"neutral-500":`oklch(55.6% 0 0)`,"neutral-600":`oklch(43.9% 0 0)`,"neutral-700":`oklch(37.1% 0 0)`,"neutral-800":`oklch(26.9% 0 0)`,"neutral-900":`oklch(20.5% 0 0)`,"neutral-950":`oklch(14.5% 0 0)`,"orange-100":`oklch(95.4% 0.038 75.164)`,"orange-200":`oklch(90.1% 0.076 70.697)`,"orange-300":`oklch(83.7% 0.128 66.29)`,"orange-400":`oklch(75% 0.183 55.934)`,"orange-50":`oklch(98% 0.016 73.684)`,"orange-500":`oklch(70.5% 0.213 47.604)`,"orange-600":`oklch(64.6% 0.222 41.116)`,"orange-700":`oklch(55.3% 0.195 38.402)`,"orange-800":`oklch(47% 0.157 37.304)`,"orange-900":`oklch(40.8% 0.123 38.172)`,"orange-950":`oklch(26.6% 0.079 36.259)`,"pink-100":`oklch(94.8% 0.028 342.258)`,"pink-200":`oklch(89.9% 0.061 343.231)`,"pink-300":`oklch(82.3% 0.12 346.018)`,"pink-400":`oklch(71.8% 0.202 349.761)`,"pink-50":`oklch(97.1% 0.014 343.198)`,"pink-500":`oklch(65.6% 0.241 354.308)`,"pink-600":`oklch(59.2% 0.249 0.584)`,"pink-700":`oklch(52.5% 0.223 3.958)`,"pink-800":`oklch(45.9% 0.187 3.815)`,"pink-900":`oklch(40.8% 0.153 2.432)`,"pink-950":`oklch(28.4% 0.109 3.907)`,"purple-100":`oklch(94.6% 0.033 307.174)`,"purple-200":`oklch(90.2% 0.063 306.703)`,"purple-300":`oklch(82.7% 0.119 306.383)`,"purple-400":`oklch(71.4% 0.203 305.504)`,"purple-50":`oklch(97.7% 0.014 308.299)`,"purple-500":`oklch(62.7% 0.265 303.9)`,"purple-600":`oklch(55.8% 0.288 302.321)`,"purple-700":`oklch(49.6% 0.265 301.924)`,"purple-800":`oklch(43.8% 0.218 303.724)`,"purple-900":`oklch(38.1% 0.176 304.987)`,"purple-950":`oklch(29.1% 0.149 302.717)`,"red-100":`oklch(93.6% 0.032 17.717)`,"red-200":`oklch(88.5% 0.062 18.334)`,"red-300":`oklch(80.8% 0.114 19.571)`,"red-400":`oklch(70.4% 0.191 22.216)`,"red-50":`oklch(97.1% 0.013 17.38)`,"red-500":`oklch(63.7% 0.237 25.331)`,"red-600":`oklch(57.7% 0.245 27.325)`,"red-700":`oklch(50.5% 0.213 27.518)`,"red-800":`oklch(44.4% 0.177 26.899)`,"red-900":`oklch(39.6% 0.141 25.723)`,"red-950":`oklch(25.8% 0.092 26.042)`,"rose-100":`oklch(94.1% 0.03 12.58)`,"rose-200":`oklch(89.2% 0.058 10.001)`,"rose-300":`oklch(81% 0.117 11.638)`,"rose-400":`oklch(71.2% 0.194 13.428)`,"rose-50":`oklch(96.9% 0.015 12.422)`,"rose-500":`oklch(64.5% 0.246 16.439)`,"rose-600":`oklch(58.6% 0.253 17.585)`,"rose-700":`oklch(51.4% 0.222 16.935)`,"rose-800":`oklch(45.5% 0.188 13.697)`,"rose-900":`oklch(41% 0.159 10.272)`,"rose-950":`oklch(27.1% 0.105 12.094)`,"sky-100":`oklch(95.1% 0.026 236.824)`,"sky-200":`oklch(90.1% 0.058 230.902)`,"sky-300":`oklch(82.8% 0.111 230.318)`,"sky-400":`oklch(74.6% 0.16 232.661)`,"sky-50":`oklch(97.7% 0.013 236.62)`,"sky-500":`oklch(68.5% 0.169 237.323)`,"sky-600":`oklch(58.8% 0.158 241.966)`,"sky-700":`oklch(50% 0.134 242.749)`,"sky-800":`oklch(44.3% 0.11 240.79)`,"sky-900":`oklch(39.1% 0.09 240.876)`,"sky-950":`oklch(29.3% 0.066 243.157)`,"slate-100":`oklch(96.8% 0.007 247.896)`,"slate-200":`oklch(92.9% 0.013 255.508)`,"slate-300":`oklch(86.9% 0.022 252.894)`,"slate-400":`oklch(70.4% 0.04 256.788)`,"slate-50":`oklch(98.4% 0.003 247.858)`,"slate-500":`oklch(55.4% 0.046 257.417)`,"slate-600":`oklch(44.6% 0.043 257.281)`,"slate-700":`oklch(37.2% 0.044 257.287)`,"slate-800":`oklch(27.9% 0.041 260.031)`,"slate-900":`oklch(20.8% 0.042 265.755)`,"slate-950":`oklch(12.9% 0.042 264.695)`,"stone-100":`oklch(97% 0.001 106.424)`,"stone-200":`oklch(92.3% 0.003 48.717)`,"stone-300":`oklch(86.9% 0.005 56.366)`,"stone-400":`oklch(70.9% 0.01 56.259)`,"stone-50":`oklch(98.5% 0.001 106.423)`,"stone-500":`oklch(55.3% 0.013 58.071)`,"stone-600":`oklch(44.4% 0.011 73.639)`,"stone-700":`oklch(37.4% 0.01 67.558)`,"stone-800":`oklch(26.8% 0.007 34.298)`,"stone-900":`oklch(21.6% 0.006 56.043)`,"stone-950":`oklch(14.7% 0.004 49.25)`,"teal-100":`oklch(95.3% 0.051 180.801)`,"teal-200":`oklch(91% 0.096 180.426)`,"teal-300":`oklch(85.5% 0.138 181.071)`,"teal-400":`oklch(77.7% 0.152 181.912)`,"teal-50":`oklch(98.4% 0.014 180.72)`,"teal-500":`oklch(70.4% 0.14 182.503)`,"teal-600":`oklch(60% 0.118 184.704)`,"teal-700":`oklch(51.1% 0.096 186.391)`,"teal-800":`oklch(43.7% 0.078 188.216)`,"teal-900":`oklch(38.6% 0.063 188.416)`,"teal-950":`oklch(27.7% 0.046 192.524)`,"violet-100":`oklch(94.3% 0.029 294.588)`,"violet-200":`oklch(89.4% 0.057 293.283)`,"violet-300":`oklch(81.1% 0.111 293.571)`,"violet-400":`oklch(70.2% 0.183 293.541)`,"violet-50":`oklch(96.9% 0.016 293.756)`,"violet-500":`oklch(60.6% 0.25 292.717)`,"violet-600":`oklch(54.1% 0.281 293.009)`,"violet-700":`oklch(49.1% 0.27 292.581)`,"violet-800":`oklch(43.2% 0.232 292.759)`,"violet-900":`oklch(38% 0.189 293.745)`,"violet-950":`oklch(28.3% 0.141 291.089)`,"yellow-100":`oklch(97.3% 0.071 103.193)`,"yellow-200":`oklch(94.5% 0.129 101.54)`,"yellow-300":`oklch(90.5% 0.182 98.111)`,"yellow-400":`oklch(85.2% 0.199 91.936)`,"yellow-50":`oklch(98.7% 0.026 102.212)`,"yellow-500":`oklch(79.5% 0.184 86.047)`,"yellow-600":`oklch(68.1% 0.162 75.834)`,"yellow-700":`oklch(55.4% 0.135 66.442)`,"yellow-800":`oklch(47.6% 0.114 61.907)`,"yellow-900":`oklch(42.1% 0.095 57.708)`,"yellow-950":`oklch(28.6% 0.066 53.813)`,"zinc-100":`oklch(96.7% 0.001 286.375)`,"zinc-200":`oklch(92% 0.004 286.32)`,"zinc-300":`oklch(87.1% 0.006 286.286)`,"zinc-400":`oklch(70.5% 0.015 286.067)`,"zinc-50":`oklch(98.5% 0 0)`,"zinc-500":`oklch(55.2% 0.016 285.938)`,"zinc-600":`oklch(44.2% 0.017 285.786)`,"zinc-700":`oklch(37% 0.013 285.805)`,"zinc-800":`oklch(27.4% 0.006 286.033)`,"zinc-900":`oklch(21% 0.006 285.885)`,"zinc-950":`oklch(14.1% 0.005 285.823)`};function sd(e){return e.trim().replace(/\\/g,`\\\\`).replace(/_/g,`\\_`).replace(/\s+/g,`_`).replace(/]/g,`\\]`)}function cd(e,t){return`${e}-[${sd(t)}]`}function ld(e,t){return`[${e}:${sd(t)}]`}var ud={display:{block:`block`,"inline-block":`inline-block`,inline:`inline`,flex:`flex`,"inline-flex":`inline-flex`,grid:`grid`,"inline-grid":`inline-grid`,contents:`contents`,"flow-root":`flow-root`,"inline-table":`inline-table`,"list-item":`list-item`,table:`table`,"table-caption":`table-caption`,"table-cell":`table-cell`,"table-column":`table-column`,"table-column-group":`table-column-group`,"table-footer-group":`table-footer-group`,"table-header-group":`table-header-group`,"table-row":`table-row`,"table-row-group":`table-row-group`,none:`hidden`},position:{static:`static`,fixed:`fixed`,absolute:`absolute`,relative:`relative`,sticky:`sticky`},visibility:{visible:`visible`,hidden:`invisible`,collapse:`collapse`},fill:{none:`fill-none`,currentcolor:`fill-current`,currentColor:`fill-current`,inherit:`fill-inherit`,transparent:`fill-transparent`},stroke:{none:`stroke-none`,currentcolor:`stroke-current`,currentColor:`stroke-current`,inherit:`stroke-inherit`,transparent:`stroke-transparent`},"justify-content":{normal:`justify-normal`,"flex-start":`justify-start`,center:`justify-center`,"flex-end":`justify-end`,"space-between":`justify-between`,"space-around":`justify-around`,"space-evenly":`justify-evenly`,stretch:`justify-stretch`},"align-items":{"flex-start":`items-start`,center:`items-center`,"flex-end":`items-end`,stretch:`items-stretch`,baseline:`items-baseline`,"last baseline":`items-baseline-last`},"flex-direction":{row:`flex-row`,"row-reverse":`flex-row-reverse`,column:`flex-col`,"column-reverse":`flex-col-reverse`},"flex-wrap":{wrap:`flex-wrap`,"wrap-reverse":`flex-wrap-reverse`,nowrap:`flex-nowrap`},flex:{none:`flex-none`,auto:`flex-auto`,initial:`flex-initial`,"1 1 0%":`flex-1`},"align-content":{normal:`content-normal`,center:`content-center`,"flex-start":`content-start`,"flex-end":`content-end`,"space-between":`content-between`,"space-around":`content-around`,"space-evenly":`content-evenly`,stretch:`content-stretch`,baseline:`content-baseline`},"align-self":{auto:`self-auto`,"flex-start":`self-start`,"flex-end":`self-end`,center:`self-center`,stretch:`self-stretch`,baseline:`self-baseline`,"last baseline":`self-baseline-last`},"place-items":{start:`place-items-start`,end:`place-items-end`,center:`place-items-center`,baseline:`place-items-baseline`,stretch:`place-items-stretch`},"place-content":{center:`place-content-center`,start:`place-content-start`,end:`place-content-end`,"space-between":`place-content-between`,"space-around":`place-content-around`,"space-evenly":`place-content-evenly`,stretch:`place-content-stretch`,baseline:`place-content-baseline`},"place-self":{auto:`place-self-auto`,start:`place-self-start`,end:`place-self-end`,center:`place-self-center`,stretch:`place-self-stretch`},"justify-items":{start:`justify-items-start`,end:`justify-items-end`,center:`justify-items-center`,stretch:`justify-items-stretch`},"justify-self":{auto:`justify-self-auto`,start:`justify-self-start`,end:`justify-self-end`,center:`justify-self-center`,stretch:`justify-self-stretch`},"grid-auto-flow":{row:`grid-flow-row`,column:`grid-flow-col`,dense:`grid-flow-dense`,"row dense":`grid-flow-row-dense`,"column dense":`grid-flow-col-dense`},"grid-template-columns":{none:`grid-cols-none`,subgrid:`grid-cols-subgrid`},"grid-template-rows":{none:`grid-rows-none`,subgrid:`grid-rows-subgrid`},"grid-auto-columns":{auto:`auto-cols-auto`,min:`auto-cols-min`,max:`auto-cols-max`,fr:`auto-cols-fr`},"grid-auto-rows":{auto:`auto-rows-auto`,min:`auto-rows-min`,max:`auto-rows-max`,fr:`auto-rows-fr`},"text-align":{left:`text-left`,center:`text-center`,right:`text-right`,justify:`text-justify`,start:`text-start`,end:`text-end`},"text-transform":{uppercase:`uppercase`,lowercase:`lowercase`,capitalize:`capitalize`,none:`normal-case`},"font-style":{italic:`italic`,normal:`not-italic`},"font-family":{sans:`font-sans`,serif:`font-serif`,monospace:`font-mono`,"ui-sans-serif, system-ui, sans-serif":`font-sans`,'ui-serif, georgia, cambria, "times new roman", times, serif':`font-serif`,'ui-monospace, sfmono-regular, menlo, monaco, consolas, "liberation mono", "courier new", monospace':`font-mono`},"font-variant-numeric":{normal:`normal-nums`,ordinal:`ordinal`,"slashed-zero":`slashed-zero`,"lining-nums":`lining-nums`,"oldstyle-nums":`oldstyle-nums`,"proportional-nums":`proportional-nums`,"tabular-nums":`tabular-nums`,"diagonal-fractions":`diagonal-fractions`,"stacked-fractions":`stacked-fractions`},"-webkit-font-smoothing":{antialiased:`antialiased`,auto:`subpixel-antialiased`},"-moz-osx-font-smoothing":{grayscale:`antialiased`,auto:`subpixel-antialiased`},"font-stretch":{"ultra-condensed":`font-stretch-ultra-condensed`,"extra-condensed":`font-stretch-extra-condensed`,condensed:`font-stretch-condensed`,"semi-condensed":`font-stretch-semi-condensed`,normal:`font-stretch-normal`,"semi-expanded":`font-stretch-semi-expanded`,expanded:`font-stretch-expanded`,"extra-expanded":`font-stretch-extra-expanded`,"ultra-expanded":`font-stretch-ultra-expanded`},"text-decoration-line":{underline:`underline`,overline:`overline`,"line-through":`line-through`,none:`no-underline`},"border-style":{solid:`border-solid`,dashed:`border-dashed`,dotted:`border-dotted`,double:`border-double`,hidden:`border-hidden`,none:`border-none`},"border-top-style":{solid:`border-t-solid`,dashed:`border-t-dashed`,dotted:`border-t-dotted`,double:`border-t-double`,hidden:`border-t-hidden`,none:`border-t-none`},"border-right-style":{solid:`border-r-solid`,dashed:`border-r-dashed`,dotted:`border-r-dotted`,double:`border-r-double`,hidden:`border-r-hidden`,none:`border-r-none`},"border-bottom-style":{solid:`border-b-solid`,dashed:`border-b-dashed`,dotted:`border-b-dotted`,double:`border-b-double`,hidden:`border-b-hidden`,none:`border-b-none`},"border-left-style":{solid:`border-l-solid`,dashed:`border-l-dashed`,dotted:`border-l-dotted`,double:`border-l-double`,hidden:`border-l-hidden`,none:`border-l-none`},"border-inline-start-style":{solid:`border-s-solid`,dashed:`border-s-dashed`,dotted:`border-s-dotted`,double:`border-s-double`,hidden:`border-s-hidden`,none:`border-s-none`},"border-inline-end-style":{solid:`border-e-solid`,dashed:`border-e-dashed`,dotted:`border-e-dotted`,double:`border-e-double`,hidden:`border-e-hidden`,none:`border-e-none`},"border-inline-style":{solid:`border-x-solid`,dashed:`border-x-dashed`,dotted:`border-x-dotted`,double:`border-x-double`,hidden:`border-x-hidden`,none:`border-x-none`},"border-block-style":{solid:`border-y-solid`,dashed:`border-y-dashed`,dotted:`border-y-dotted`,double:`border-y-double`,hidden:`border-y-hidden`,none:`border-y-none`},"outline-style":{solid:`outline-solid`,dashed:`outline-dashed`,dotted:`outline-dotted`,double:`outline-double`,none:`outline-none`},"object-fit":{contain:`object-contain`,cover:`object-cover`,fill:`object-fill`,none:`object-none`,"scale-down":`object-scale-down`},"object-position":{bottom:`object-bottom`,center:`object-center`,"center center":`object-center`,left:`object-left`,"left center":`object-left`,"left bottom":`object-left-bottom`,"left top":`object-left-top`,right:`object-right`,"right center":`object-right`,"right bottom":`object-right-bottom`,"right top":`object-right-top`,top:`object-top`,"center top":`object-top`,"center bottom":`object-bottom`},"background-repeat":{repeat:`bg-repeat`,"no-repeat":`bg-no-repeat`,"repeat-x":`bg-repeat-x`,"repeat-y":`bg-repeat-y`,round:`bg-repeat-round`,space:`bg-repeat-space`},"background-attachment":{fixed:`bg-fixed`,local:`bg-local`,scroll:`bg-scroll`},"background-clip":{"border-box":`bg-clip-border`,"padding-box":`bg-clip-padding`,"content-box":`bg-clip-content`,text:`bg-clip-text`},"background-origin":{"border-box":`bg-origin-border`,"padding-box":`bg-origin-padding`,"content-box":`bg-origin-content`},"mask-image":{none:`mask-none`},"mask-mode":{alpha:`mask-alpha`,luminance:`mask-luminance`},"mask-size":{auto:`mask-auto`,contain:`mask-contain`,cover:`mask-cover`},"mask-repeat":{repeat:`mask-repeat`,"no-repeat":`mask-no-repeat`},"mask-origin":{"border-box":`mask-origin-border`,"padding-box":`mask-origin-padding`,"content-box":`mask-origin-content`,"fill-box":`mask-origin-fill`,"stroke-box":`mask-origin-stroke`,"view-box":`mask-origin-view`},"mask-clip":{"border-box":`mask-clip-border`,"padding-box":`mask-clip-padding`,"content-box":`mask-clip-content`,"fill-box":`mask-clip-fill`,"stroke-box":`mask-clip-stroke`,"view-box":`mask-clip-view`,"no-clip":`mask-no-clip`},"clip-path":{none:`not-sr-only`},"box-decoration-break":{slice:`box-decoration-slice`,clone:`box-decoration-clone`},"-webkit-box-decoration-break":{slice:`box-decoration-slice`,clone:`box-decoration-clone`},"background-size":{auto:`bg-auto`,cover:`bg-cover`,contain:`bg-contain`},"background-position":{bottom:`bg-bottom`,center:`bg-center`,"center center":`bg-center`,left:`bg-left`,"left center":`bg-left`,"left bottom":`bg-left-bottom`,"left top":`bg-left-top`,right:`bg-right`,"right center":`bg-right`,"right bottom":`bg-right-bottom`,"right top":`bg-right-top`,top:`bg-top`,"center top":`bg-top`,"center bottom":`bg-bottom`},"vertical-align":{baseline:`align-baseline`,top:`align-top`,middle:`align-middle`,bottom:`align-bottom`,"text-top":`align-text-top`,"text-bottom":`align-text-bottom`,sub:`align-sub`,super:`align-super`},"white-space":{normal:`whitespace-normal`,nowrap:`whitespace-nowrap`,pre:`whitespace-pre`,"pre-line":`whitespace-pre-line`,"pre-wrap":`whitespace-pre-wrap`,"break-spaces":`whitespace-break-spaces`},"word-break":{normal:`break-normal`,"break-all":`break-all`,"keep-all":`break-keep`},"overflow-wrap":{"break-word":`break-words`,anywhere:`wrap-anywhere`,normal:`wrap-normal`},"text-overflow":{ellipsis:`text-ellipsis`,clip:`text-clip`},hyphens:{none:`hyphens-none`,manual:`hyphens-manual`,auto:`hyphens-auto`},"list-style-position":{inside:`list-inside`,outside:`list-outside`},"list-style-type":{disc:`list-disc`,decimal:`list-decimal`,none:`list-none`},"table-layout":{auto:`table-auto`,fixed:`table-fixed`},"caption-side":{top:`caption-top`,bottom:`caption-bottom`},"border-collapse":{collapse:`border-collapse`,separate:`border-separate`},"box-sizing":{"border-box":`box-border`,"content-box":`box-content`},"aspect-ratio":{"1 / 1":`aspect-square`,"16 / 9":`aspect-video`,auto:`aspect-auto`},"field-sizing":{fixed:`field-sizing-fixed`,content:`field-sizing-content`},"text-wrap":{wrap:`text-wrap`,nowrap:`text-nowrap`,balance:`text-balance`,pretty:`text-pretty`},isolation:{isolate:`isolate`,auto:`isolation-auto`},float:{right:`float-right`,left:`float-left`,none:`float-none`},clear:{left:`clear-left`,right:`clear-right`,both:`clear-both`,none:`clear-none`},appearance:{none:`appearance-none`,auto:`appearance-auto`},"color-scheme":{normal:`scheme-normal`,dark:`scheme-dark`,light:`scheme-light`,"light dark":`scheme-light-dark`,"only dark":`scheme-only-dark`,"only light":`scheme-only-light`},"mix-blend-mode":{normal:`mix-blend-normal`,multiply:`mix-blend-multiply`,screen:`mix-blend-screen`,overlay:`mix-blend-overlay`,darken:`mix-blend-darken`,lighten:`mix-blend-lighten`,"color-dodge":`mix-blend-color-dodge`,"color-burn":`mix-blend-color-burn`,"hard-light":`mix-blend-hard-light`,"soft-light":`mix-blend-soft-light`,difference:`mix-blend-difference`,exclusion:`mix-blend-exclusion`,hue:`mix-blend-hue`,saturation:`mix-blend-saturation`,color:`mix-blend-color`,luminosity:`mix-blend-luminosity`,"plus-darker":`mix-blend-plus-darker`,"plus-lighter":`mix-blend-plus-lighter`},"background-blend-mode":{normal:`bg-blend-normal`,multiply:`bg-blend-multiply`,screen:`bg-blend-screen`,overlay:`bg-blend-overlay`,darken:`bg-blend-darken`,lighten:`bg-blend-lighten`,"color-dodge":`bg-blend-color-dodge`,"color-burn":`bg-blend-color-burn`,"hard-light":`bg-blend-hard-light`,"soft-light":`bg-blend-soft-light`,difference:`bg-blend-difference`,exclusion:`bg-blend-exclusion`,hue:`bg-blend-hue`,saturation:`bg-blend-saturation`,color:`bg-blend-color`,luminosity:`bg-blend-luminosity`},"overscroll-behavior":{auto:`overscroll-auto`,contain:`overscroll-contain`,none:`overscroll-none`},"overscroll-behavior-x":{auto:`overscroll-x-auto`,contain:`overscroll-x-contain`,none:`overscroll-x-none`},"overscroll-behavior-y":{auto:`overscroll-y-auto`,contain:`overscroll-y-contain`,none:`overscroll-y-none`},"scrollbar-width":{auto:`scrollbar-auto`,thin:`scrollbar-thin`,none:`scrollbar-none`},"scrollbar-gutter":{stable:`scrollbar-gutter-stable`,"stable both-edges":`scrollbar-gutter-both-edges`},"mask-type":{alpha:`mask-type-alpha`,luminance:`mask-type-luminance`},"mask-composite":{add:`mask-composite-add`,subtract:`mask-composite-subtract`,intersect:`mask-composite-intersect`,exclude:`mask-composite-exclude`},"scroll-behavior":{auto:`scroll-auto`,smooth:`scroll-smooth`},"touch-action":{auto:`touch-auto`,none:`touch-none`,"pan-x":`touch-pan-x`,"pan-left":`touch-pan-left`,"pan-right":`touch-pan-right`,"pan-y":`touch-pan-y`,"pan-up":`touch-pan-up`,"pan-down":`touch-pan-down`,manipulation:`touch-manipulation`},"will-change":{auto:`will-change-auto`,scroll:`will-change-scroll`,contents:`will-change-contents`,transform:`will-change-transform`},contain:{none:`contain-none`,content:`contain-content`,strict:`contain-strict`,size:`contain-size`,layout:`contain-layout`,paint:`contain-paint`,style:`contain-style`,"inline-size":`contain-inline-size`},"break-before":{auto:`break-before-auto`,avoid:`break-before-avoid`,all:`break-before-all`,"avoid-page":`break-before-avoid-page`,page:`break-before-page`,left:`break-before-left`,right:`break-before-right`,column:`break-before-column`},"break-after":{auto:`break-after-auto`,avoid:`break-after-avoid`,all:`break-after-all`,"avoid-page":`break-after-avoid-page`,page:`break-after-page`,left:`break-after-left`,right:`break-after-right`,column:`break-after-column`},"break-inside":{auto:`break-inside-auto`,avoid:`break-inside-avoid`,"avoid-page":`break-inside-avoid-page`,"avoid-column":`break-inside-avoid-column`},"forced-color-adjust":{auto:`forced-color-adjust-auto`,none:`forced-color-adjust-none`},filter:{none:`filter-none`},"backdrop-filter":{none:`backdrop-filter-none`},"box-shadow":{none:`shadow-none`},"text-shadow":{none:`text-shadow-none`},"backface-visibility":{hidden:`backface-hidden`,visible:`backface-visible`},perspective:{none:`perspective-none`,"100px":`perspective-dramatic`,"300px":`perspective-near`,"500px":`perspective-normal`,"800px":`perspective-midrange`,"1200px":`perspective-distant`},"transform-style":{"preserve-3d":`transform-3d`,flat:`transform-flat`},"transform-origin":{center:`origin-center`,top:`origin-top`,"top right":`origin-top-right`,right:`origin-right`,"bottom right":`origin-bottom-right`,bottom:`origin-bottom`,"bottom left":`origin-bottom-left`,left:`origin-left`,"top left":`origin-top-left`,"50% 50%":`origin-center`,"100% 0":`origin-top-right`,"100% 0%":`origin-top-right`,"100% 100%":`origin-bottom-right`,"50% 100%":`origin-bottom`,"0 100%":`origin-bottom-left`,"0% 100%":`origin-bottom-left`,"0 50%":`origin-left`,"0% 50%":`origin-left`,"0 0":`origin-top-left`,"0% 0%":`origin-top-left`},"perspective-origin":{center:`perspective-origin-center`,top:`perspective-origin-top`,"top right":`perspective-origin-top-right`,right:`perspective-origin-right`,"bottom right":`perspective-origin-bottom-right`,bottom:`perspective-origin-bottom`,"bottom left":`perspective-origin-bottom-left`,left:`perspective-origin-left`,"top left":`perspective-origin-top-left`,"100% 0":`perspective-origin-top-right`,"100% 0%":`perspective-origin-top-right`,"100% 100%":`perspective-origin-bottom-right`,"0 100%":`perspective-origin-bottom-left`,"0% 100%":`perspective-origin-bottom-left`,"0 0":`perspective-origin-top-left`,"0% 0%":`perspective-origin-top-left`},"scroll-snap-align":{start:`snap-start`,end:`snap-end`,center:`snap-center`,none:`snap-align-none`},"scroll-snap-type":{none:`snap-none`},"scroll-snap-stop":{normal:`snap-normal`,always:`snap-always`},"transition-timing-function":{linear:`ease-linear`,ease:`ease-in-out`,"ease-in":`ease-in`,"ease-out":`ease-out`,"ease-in-out":`ease-in-out`},"transition-property":{all:`transition-all`,none:`transition-none`,color:`transition-colors`,opacity:`transition-opacity`,shadow:`transition-shadow`,transform:`transition-transform`},"transition-behavior":{normal:`transition-normal`,"allow-discrete":`transition-discrete`},animation:{none:`animate-none`},"animation-name":{none:`animate-none`},"background-image":{none:`bg-none`},content:{none:`content-none`},"accent-color":{auto:`accent-auto`},"caret-color":{auto:`caret-auto`},"list-style-image":{none:`list-image-none`},"text-decoration-style":{solid:`decoration-solid`,double:`decoration-double`,dotted:`decoration-dotted`,dashed:`decoration-dashed`,wavy:`decoration-wavy`},"text-decoration-thickness":{auto:`decoration-auto`,"from-font":`decoration-from-font`,"0px":`decoration-0`,"1px":`decoration-1`,"2px":`decoration-2`,"4px":`decoration-4`,"8px":`decoration-8`},"text-underline-offset":{auto:`underline-offset-auto`,"0px":`underline-offset-0`,"1px":`underline-offset-1`,"2px":`underline-offset-2`,"4px":`underline-offset-4`,"8px":`underline-offset-8`},"font-weight":{100:`font-thin`,200:`font-extralight`,300:`font-light`,400:`font-normal`,500:`font-medium`,600:`font-semibold`,700:`font-bold`,800:`font-extrabold`,900:`font-black`,bold:`font-bold`,normal:`font-normal`}},dd={width:`w`,height:`h`,"inline-size":`w`,"block-size":`h`,"flex-basis":`basis`,"min-width":`min-w`,"min-height":`min-h`,"min-inline-size":`min-w`,"min-block-size":`min-h`,"max-width":`max-w`,"max-height":`max-h`,"max-inline-size":`max-w`,"max-block-size":`max-h`,margin:`m`,"margin-top":`mt`,"margin-right":`mr`,"margin-bottom":`mb`,"margin-left":`ml`,"margin-inline-start":`ms`,"margin-inline-end":`me`,"margin-inline":`mx`,"margin-block":`my`,"margin-block-start":`mt`,"margin-block-end":`mb`,top:`top`,right:`right`,bottom:`bottom`,left:`left`,"inset-inline-start":`start`,"inset-inline-end":`end`,padding:`p`,"padding-top":`pt`,"padding-right":`pr`,"padding-bottom":`pb`,"padding-left":`pl`,"padding-inline-start":`ps`,"padding-inline-end":`pe`,"padding-inline":`px`,"padding-block":`py`,"padding-block-start":`pt`,"padding-block-end":`pb`,gap:`gap`,"row-gap":`gap-y`,"column-gap":`gap-x`,"text-indent":`indent`,"border-spacing":`border-spacing`,"border-spacing-x":`border-spacing-x`,"border-spacing-y":`border-spacing-y`,"scroll-margin":`scroll-m`,"scroll-margin-top":`scroll-mt`,"scroll-margin-right":`scroll-mr`,"scroll-margin-bottom":`scroll-mb`,"scroll-margin-left":`scroll-ml`,"scroll-margin-inline-start":`scroll-ms`,"scroll-margin-inline-end":`scroll-me`,"scroll-margin-inline":`scroll-mx`,"scroll-margin-block":`scroll-my`,"scroll-margin-block-start":`scroll-mt`,"scroll-margin-block-end":`scroll-mb`,"scroll-padding":`scroll-p`,"scroll-padding-top":`scroll-pt`,"scroll-padding-right":`scroll-pr`,"scroll-padding-bottom":`scroll-pb`,"scroll-padding-left":`scroll-pl`,"scroll-padding-inline-start":`scroll-ps`,"scroll-padding-inline-end":`scroll-pe`,"scroll-padding-inline":`scroll-px`,"scroll-padding-block":`scroll-py`,"scroll-padding-block-start":`scroll-pt`,"scroll-padding-block-end":`scroll-pb`,color:`text`,"background-color":`bg`,"background-image":`bg`,"-webkit-line-clamp":`line-clamp`,"line-clamp":`line-clamp`,fill:`fill`,stroke:`stroke`,"border-color":`border`,"border-top-color":`border-t`,"border-right-color":`border-r`,"border-bottom-color":`border-b`,"border-left-color":`border-l`,"border-inline-start-color":`border-s`,"border-inline-end-color":`border-e`,"border-inline-color":`border-x`,"border-block-color":`border-y`,"outline-color":`outline`,"text-decoration-color":`decoration`,"caret-color":`caret`,"accent-color":`accent`,"border-width":`border`,"border-top-width":`border-t`,"border-right-width":`border-r`,"border-bottom-width":`border-b`,"border-left-width":`border-l`,"border-inline-start-width":`border-s`,"border-inline-end-width":`border-e`,"border-inline-width":`border-x`,"border-block-width":`border-y`,"stroke-width":`stroke`,"border-radius":`rounded`,"border-top-left-radius":`rounded-tl`,"border-top-right-radius":`rounded-tr`,"border-bottom-right-radius":`rounded-br`,"border-bottom-left-radius":`rounded-bl`,"border-start-start-radius":`rounded-ss`,"border-start-end-radius":`rounded-se`,"border-end-end-radius":`rounded-ee`,"border-end-start-radius":`rounded-es`,opacity:`opacity`,"z-index":`z`,"font-size":`text`,"line-height":`leading`,"letter-spacing":`tracking`,"outline-width":`outline`,"outline-offset":`outline-offset`,"box-shadow":`shadow`,filter:`filter`,"backdrop-filter":`backdrop-filter`,rotate:`rotate`,scale:`scale`,translate:`translate`,"grid-template-columns":`grid-cols`,"grid-template-rows":`grid-rows`,"transition-property":`transition`,"transition-duration":`duration`,"transition-delay":`delay`,"transition-timing-function":`ease`,animation:`animate`,"animation-name":`animate`,"animation-duration":`duration`,"animation-delay":`delay`,"animation-timing-function":`ease`,"animation-iteration-count":`animate-iteration`,perspective:`perspective`,"mask-position":`mask-position`,"mask-image":`mask`,"text-shadow":`text-shadow`,"clip-path":`clip-path`,"grid-column":`col`,"grid-column-start":`col-start`,"grid-column-end":`col-end`,"grid-row":`row`,"grid-row-start":`row-start`,"grid-row-end":`row-end`,cursor:`cursor`,content:`content`,"list-style-type":`list`,"list-style-image":`list-image`,"will-change":`will-change`,contain:`contain`,"mask-size":`mask-size`,"mask-repeat":`mask-repeat`,"mask-clip":`mask-clip`,"mask-origin":`mask-origin`,"mask-mode":`mask-mode`,"mask-composite":`mask-composite`,"font-family":`font`,"font-weight":`font`,"font-stretch":`font-stretch`,"background-position-x":`bg-position-x`,"background-position-y":`bg-position-y`,"column-count":`columns`,"column-width":`columns`,"aspect-ratio":`aspect`,"object-position":`object`,order:`order`,"tab-size":`tab`,zoom:`zoom`,"flex-grow":`grow`,"flex-shrink":`shrink`,"word-spacing":`word-spacing`,hyphens:`hyphens`,"scrollbar-color":`scrollbar-color`,"font-feature-settings":`font-feature`,"perspective-origin":`perspective-origin`,"column-rule-color":`column-rule`,"column-rule-width":`column-rule`,"column-rule-style":`column-rule`,"stroke-dasharray":`stroke-dasharray`,"stroke-dashoffset":`stroke-dashoffset`,"stroke-linecap":`stroke-linecap`,"stroke-linejoin":`stroke-linejoin`,"image-rendering":`image-render`,"paint-order":`paint-order`,"shape-outside":`shape-outside`,"shape-margin":`shape-margin`,"shape-image-threshold":`shape-image-threshold`},fd=new Set(`width.height.min-width.min-height.max-width.max-height.inline-size.block-size.min-inline-size.min-block-size.max-inline-size.max-block-size.flex-basis.margin.margin-top.margin-right.margin-bottom.margin-left.margin-inline-start.margin-inline-end.margin-inline.margin-block.margin-block-start.margin-block-end.padding.padding-top.padding-right.padding-bottom.padding-left.padding-inline-start.padding-inline-end.padding-inline.padding-block.padding-block-start.padding-block-end.top.right.bottom.left.inset-inline-start.inset-inline-end.gap.row-gap.column-gap.text-indent.border-spacing.border-spacing-x.border-spacing-y.scroll-margin.scroll-margin-top.scroll-margin-right.scroll-margin-bottom.scroll-margin-left.scroll-margin-inline-start.scroll-margin-inline-end.scroll-margin-inline.scroll-margin-block.scroll-margin-block-start.scroll-margin-block-end.scroll-padding.scroll-padding-top.scroll-padding-right.scroll-padding-bottom.scroll-padding-left.scroll-padding-inline-start.scroll-padding-inline-end.scroll-padding-inline.scroll-padding-block.scroll-padding-block-start.scroll-padding-block-end.border-width.border-top-width.border-right-width.border-bottom-width.border-left-width.border-inline-start-width.border-inline-end-width.border-inline-width.border-block-width.border-radius.border-top-left-radius.border-top-right-radius.border-bottom-right-radius.border-bottom-left-radius.border-start-start-radius.border-start-end-radius.border-end-end-radius.border-end-start-radius.font-size.line-height.letter-spacing.outline-width.outline-offset`.split(`.`)),pd={width:{auto:`w-auto`,"50%":`w-1/2`,"33.333333%":`w-1/3`,"66.666667%":`w-2/3`,"25%":`w-1/4`,"75%":`w-3/4`,"100%":`w-full`,"100vw":`w-screen`,"100dvw":`w-dvw`,"100lvw":`w-lvw`,"100svw":`w-svw`,"min-content":`w-min`,"max-content":`w-max`,"fit-content":`w-fit`},height:{auto:`h-auto`,"50%":`h-1/2`,"33.333333%":`h-1/3`,"66.666667%":`h-2/3`,"25%":`h-1/4`,"75%":`h-3/4`,"100%":`h-full`,"100vh":`h-screen`,"100dvh":`h-dvh`,"100lvh":`h-lvh`,"100svh":`h-svh`,"min-content":`h-min`,"max-content":`h-max`,"fit-content":`h-fit`},"inline-size":{auto:`w-auto`,"100%":`w-full`,"100vw":`w-screen`,"100dvw":`w-dvw`,"100lvw":`w-lvw`,"100svw":`w-svw`,"min-content":`w-min`,"max-content":`w-max`,"fit-content":`w-fit`},"block-size":{auto:`h-auto`,"100%":`h-full`,"100vh":`h-screen`,"100dvh":`h-dvh`,"100lvh":`h-lvh`,"100svh":`h-svh`,"min-content":`h-min`,"max-content":`h-max`,"fit-content":`h-fit`},"flex-basis":{auto:`basis-auto`,"100%":`basis-full`,"50%":`basis-1/2`,"33.333333%":`basis-1/3`,"66.666667%":`basis-2/3`,"25%":`basis-1/4`,"75%":`basis-3/4`,"20%":`basis-1/5`,"40%":`basis-2/5`,"60%":`basis-3/5`,"80%":`basis-4/5`,"16.666667%":`basis-1/6`,"83.333333%":`basis-5/6`},"min-width":{"50%":`min-w-1/2`,"100%":`min-w-full`,"100vw":`min-w-screen`,"100dvw":`min-w-dvw`,"100lvw":`min-w-lvw`,"100svw":`min-w-svw`,"min-content":`min-w-min`,"max-content":`min-w-max`,"fit-content":`min-w-fit`},"min-height":{"50%":`min-h-1/2`,"100%":`min-h-full`,"100vh":`min-h-screen`,"100dvh":`min-h-dvh`,"100lvh":`min-h-lvh`,"100svh":`min-h-svh`,"min-content":`min-h-min`,"max-content":`min-h-max`,"fit-content":`min-h-fit`},"max-width":{"50%":`max-w-1/2`,"100%":`max-w-full`,"100vw":`max-w-screen`,"100dvw":`max-w-dvw`,"100lvw":`max-w-lvw`,"100svw":`max-w-svw`,"min-content":`max-w-min`,"max-content":`max-w-max`,"fit-content":`max-w-fit`,none:`max-w-none`},"max-height":{"50%":`max-h-1/2`,"100%":`max-h-full`,"100vh":`max-h-screen`,"100dvh":`max-h-dvh`,"100lvh":`max-h-lvh`,"100svh":`max-h-svh`,"min-content":`max-h-min`,"max-content":`max-h-max`,"fit-content":`max-h-fit`,none:`max-h-none`},"min-inline-size":{"100%":`min-w-full`,"100vw":`min-w-screen`,"min-content":`min-w-min`,"max-content":`min-w-max`,"fit-content":`min-w-fit`},"min-block-size":{"100%":`min-h-full`,"100vh":`min-h-screen`,"min-content":`min-h-min`,"max-content":`min-h-max`,"fit-content":`min-h-fit`},"max-inline-size":{"100%":`max-w-full`,"100vw":`max-w-screen`,"min-content":`max-w-min`,"max-content":`max-w-max`,"fit-content":`max-w-fit`,none:`max-w-none`},"max-block-size":{"100%":`max-h-full`,"100vh":`max-h-screen`,"min-content":`max-h-min`,"max-content":`max-h-max`,"fit-content":`max-h-fit`,none:`max-h-none`},margin:{auto:`m-auto`},"margin-top":{auto:`mt-auto`},"margin-right":{auto:`mr-auto`},"margin-bottom":{auto:`mb-auto`},"margin-left":{auto:`ml-auto`},"border-radius":{0:`rounded-none`,"0px":`rounded-none`,"0.125rem":`rounded-xs`,"2px":`rounded-xs`,"0.25rem":`rounded-sm`,"4px":`rounded-sm`,"0.375rem":`rounded-md`,"6px":`rounded-md`,"0.5rem":`rounded-lg`,"8px":`rounded-lg`,"0.75rem":`rounded-xl`,"12px":`rounded-xl`,"1rem":`rounded-2xl`,"16px":`rounded-2xl`,"1.5rem":`rounded-3xl`,"24px":`rounded-3xl`,"9999px":`rounded-full`},"border-top-left-radius":{0:`rounded-tl-none`,"0px":`rounded-tl-none`,"0.25rem":`rounded-tl-sm`,"4px":`rounded-tl-sm`,"0.5rem":`rounded-tl-lg`,"8px":`rounded-tl-lg`,"9999px":`rounded-tl-full`},"border-top-right-radius":{0:`rounded-tr-none`,"0px":`rounded-tr-none`,"0.25rem":`rounded-tr-sm`,"4px":`rounded-tr-sm`,"0.5rem":`rounded-tr-lg`,"8px":`rounded-tr-lg`,"9999px":`rounded-tr-full`},"border-bottom-right-radius":{0:`rounded-br-none`,"0px":`rounded-br-none`,"0.25rem":`rounded-br-sm`,"4px":`rounded-br-sm`,"0.5rem":`rounded-br-lg`,"8px":`rounded-br-lg`,"9999px":`rounded-br-full`},"border-bottom-left-radius":{0:`rounded-bl-none`,"0px":`rounded-bl-none`,"0.25rem":`rounded-bl-sm`,"4px":`rounded-bl-sm`,"0.5rem":`rounded-bl-lg`,"8px":`rounded-bl-lg`,"9999px":`rounded-bl-full`},"border-start-start-radius":{0:`rounded-ss-none`,"0px":`rounded-ss-none`,"0.25rem":`rounded-ss-sm`,"4px":`rounded-ss-sm`,"0.5rem":`rounded-ss-lg`,"8px":`rounded-ss-lg`,"9999px":`rounded-ss-full`},"border-start-end-radius":{0:`rounded-se-none`,"0px":`rounded-se-none`,"0.25rem":`rounded-se-sm`,"4px":`rounded-se-sm`,"0.5rem":`rounded-se-lg`,"8px":`rounded-se-lg`,"9999px":`rounded-se-full`},"border-end-end-radius":{0:`rounded-ee-none`,"0px":`rounded-ee-none`,"0.25rem":`rounded-ee-sm`,"4px":`rounded-ee-sm`,"0.5rem":`rounded-ee-lg`,"8px":`rounded-ee-lg`,"9999px":`rounded-ee-full`},"border-end-start-radius":{0:`rounded-es-none`,"0px":`rounded-es-none`,"0.25rem":`rounded-es-sm`,"4px":`rounded-es-sm`,"0.5rem":`rounded-es-lg`,"8px":`rounded-es-lg`,"9999px":`rounded-es-full`},columns:{auto:`columns-auto`},"font-size":{"12px":`text-xs`,"0.75rem":`text-xs`,"14px":`text-sm`,"0.875rem":`text-sm`,"16px":`text-base`,"1rem":`text-base`,"18px":`text-lg`,"1.125rem":`text-lg`,"20px":`text-xl`,"1.25rem":`text-xl`,"24px":`text-2xl`,"1.5rem":`text-2xl`,"30px":`text-3xl`,"1.875rem":`text-3xl`,"36px":`text-4xl`,"2.25rem":`text-4xl`,"48px":`text-5xl`,"3rem":`text-5xl`,"60px":`text-6xl`,"3.75rem":`text-6xl`,"72px":`text-7xl`,"4.5rem":`text-7xl`,"96px":`text-8xl`,"6rem":`text-8xl`,"128px":`text-9xl`,"8rem":`text-9xl`},"line-height":{"16px":`leading-4`,"1rem":`leading-4`,"20px":`leading-5`,"1.25rem":`leading-5`,"24px":`leading-6`,"1.5rem":`leading-6`,"28px":`leading-7`,"1.75rem":`leading-7`,"32px":`leading-8`,"2rem":`leading-8`,1:`leading-none`,normal:`leading-normal`,"1.25":`leading-tight`,"1.375":`leading-snug`,"1.5":`leading-normal`,"1.625":`leading-relaxed`,2:`leading-loose`},"letter-spacing":{normal:`tracking-normal`,"-0.05em":`tracking-tighter`,"-0.025em":`tracking-tight`,"0.025em":`tracking-wide`,"0.05em":`tracking-wider`,"0.1em":`tracking-widest`},"outline-width":{0:`outline-0`,"0px":`outline-0`,"1px":`outline-1`,"2px":`outline-2`,"4px":`outline-4`,"8px":`outline-8`},"outline-offset":{0:`outline-offset-0`,"0px":`outline-offset-0`,"1px":`outline-offset-1`,"2px":`outline-offset-2`,"4px":`outline-offset-4`,"8px":`outline-offset-8`},overflow:{auto:`overflow-auto`,hidden:`overflow-hidden`,clip:`overflow-clip`,visible:`overflow-visible`,scroll:`overflow-scroll`},"overflow-x":{auto:`overflow-x-auto`,hidden:`overflow-x-hidden`,clip:`overflow-x-clip`,visible:`overflow-x-visible`,scroll:`overflow-x-scroll`},"overflow-y":{auto:`overflow-y-auto`,hidden:`overflow-y-hidden`,clip:`overflow-y-clip`,visible:`overflow-y-visible`,scroll:`overflow-y-scroll`},cursor:{alias:`cursor-alias`,auto:`cursor-auto`,cell:`cursor-cell`,"context-menu":`cursor-context-menu`,copy:`cursor-copy`,crosshair:`cursor-crosshair`,default:`cursor-default`,grab:`cursor-grab`,grabbing:`cursor-grabbing`,help:`cursor-help`,move:`cursor-move`,"not-allowed":`cursor-not-allowed`,pointer:`cursor-pointer`,progress:`cursor-progress`,text:`cursor-text`,wait:`cursor-wait`,"zoom-in":`cursor-zoom-in`,"zoom-out":`cursor-zoom-out`},"pointer-events":{none:`pointer-events-none`,auto:`pointer-events-auto`},resize:{none:`resize-none`,both:`resize`,horizontal:`resize-x`,vertical:`resize-y`},"user-select":{none:`select-none`,text:`select-text`,all:`select-all`,auto:`select-auto`}};function md(e,t){let n=e.trim().toLowerCase(),r=n.startsWith(`-`),i=r?n.slice(1):n;if(i===`0`||i===`0px`||i===`0rem`)return`0`;if(i===`1px`)return r?`-px`:`px`;let a=hd(i)??gd(i);if(a===void 0)return;let o=a/.25;if(!Number.isFinite(o))return;let s=Math.round(o);if(Math.abs(o-s)<1e-6)return r?`-${s}`:String(s);if(t.numericMultipliers!==`all`||Math.abs(o-Math.round(o*4)/4)>1e-6)return;let c=String(o).replace(/\.([0-9]*?)0+$/,`.$1`);return r?`-${c}`:c}function hd(e){if(!e.endsWith(`rem`))return;let t=Number(e.slice(0,-3));return Number.isFinite(t)?t:void 0}function gd(e){if(!e.endsWith(`px`))return;let t=Number(e.slice(0,-2));return Number.isFinite(t)?t/16:void 0}function _d(e,t){let n=ud[e.property]?.[e.value];if(n)return J(e,n,`exact`);let r=pd[e.property]?.[e.value.toLowerCase()];if(r)return J(e,r,`exact`);if((e.property===`-webkit-line-clamp`||e.property===`line-clamp`)&&/^\d+$/.test(e.value))return J(e,`line-clamp-${e.value}`,`exact`);if((e.property===`-webkit-line-clamp`||e.property===`line-clamp`)&&e.value===`none`)return J(e,`line-clamp-none`,`exact`);let i=Sd(e);if(i)return J(e,i,`exact`);if(e.property===`z-index`&&/^-?\d+$/.test(e.value))return J(e,e.value.startsWith(`-`)?`-z-${e.value.slice(1)}`:`z-${e.value}`,`exact`);let a=yd(e);if(a)return J(e,a,`exact`);let o=Dd(e);if(o)return J(e,o,`exact`);let s=Od(e);if(s)return J(e,s,`exact`);let c=vd(e,t);if(c)return J(e,c,`exact`);let l=jd(e,t);if(l)return J(e,l,`exact`);let u=Hd(e,t);if(u)return Array.isArray(u)?u.map(t=>J(e,t,`exact`)):J(e,u,`exact`);let d=xd(e);if(d)return Array.isArray(d)?d.map(t=>J(e,t,`exact`)):J(e,d,`exact`);let f=Id(e);if(f)return Array.isArray(f)?f.map(t=>J(e,t,`exact`)):J(e,f,`exact`);let p=Zd(e);if(p)return J(e,p,`exact`);let m=tf(e,t);if(m)return Array.isArray(m)?m.map(t=>J(e,t,`exact`)):J(e,m,`exact`);let h=$d(e);if(h)return J(e,h,`exact`);let g=dd[e.property];if(g&&t.allowArbitraryValues)return J(e,cd(g,e.value),`arbitrary`);if(t.allowArbitraryProperties)return J(e,ld(e.property,e.value),`arbitrary`)}function vd(e,t){if(!fd.has(e.property))return;let n=dd[e.property];if(!n)return;let r=md(e.value,t);if(r)return r.startsWith(`-`)?`-${n}-${r.slice(1)}`:`${n}-${r}`}function yd(e){if(e.property===`tab-size`&&/^\d+$/.test(e.value))return`tab-${e.value}`;if(e.property===`zoom`){let t=Number(e.value);if(Number.isFinite(t)&&t>0)return`zoom-${t*100}`}if(e.property===`order`&&/^-?\d+$/.test(e.value))return e.value.startsWith(`-`)?`-order-${e.value.slice(1)}`:`order-${e.value}`;if((e.property===`column-count`||e.property===`columns`)&&/^\d+$/.test(e.value))return`columns-${e.value}`;let t=bd(e);if(t)return t;let n=Cd(e);if(n)return n;let r=wd(e);if(r)return r;let i=Td(e);if(i)return i;if(e.property===`flex-grow`&&/^[01]$/.test(e.value))return e.value===`1`?`grow`:`grow-0`;if(e.property===`flex-shrink`&&/^[01]$/.test(e.value))return e.value===`1`?`shrink`:`shrink-0`;if(e.property===`stroke-width`&&/^\d+$/.test(e.value))return`stroke-${e.value}`;if(e.property===`transition-duration`){let t=Ed(e.value);if(t!==void 0)return`duration-${t}`}if(e.property===`transition-delay`){let t=Ed(e.value);if(t!==void 0)return`delay-${t}`}}function bd(e){if(e.property!==`aspect-ratio`)return;let t=e.value.match(/^(\d+)\s*\/\s*(\d+)$/);if(!t)return;let[,n,r]=t;return n===r?`aspect-square`:n===`16`&&r===`9`?`aspect-video`:`aspect-${n}/${r}`}function xd(e){if(e.property!==`scroll-snap-type`)return;if(e.value===`none`)return`snap-none`;let t=e.value.trim().toLowerCase().split(/\s+/);if(t.length!==2)return;let n={x:`snap-x`,y:`snap-y`,both:`snap-both`,block:`snap-y`,inline:`snap-x`},r={mandatory:`snap-mandatory`,proximity:`snap-proximity`},i=n[t[0]??``],a=r[t[1]??``];if(!(!i||!a))return[i,a]}function Sd(e){if(e.property!==`content`)return;if(e.value===`none`)return`content-none`;let t=e.value.match(/^["'](.+)["']$/)?.[1];if(t)return`content-['${t.replace(/'/g,`\\'`)}']`}function Cd(e){let t={"grid-column-start":`col-start`,"grid-column-end":`col-end`,"grid-row-start":`row-start`,"grid-row-end":`row-end`}[e.property];if(!(!t||!/^-?\d+$/.test(e.value)))return e.value.startsWith(`-`)?`-${t}-${e.value.slice(1)}`:`${t}-${e.value}`}function wd(e){if(e.value===`1 / -1`){if(e.property===`grid-column`)return`col-span-full`;if(e.property===`grid-row`)return`row-span-full`}let t=e.value.match(/^span (\d+) \/ span \d+$/)?.[1];if(t){if(e.property===`grid-column`)return`col-span-${t}`;if(e.property===`grid-row`)return`row-span-${t}`}}function Td(e){let t=e.value.match(/^repeat\((\d+), minmax\(0, 1fr\)\)$/)?.[1];if(t){if(e.property===`grid-template-columns`)return`grid-cols-${t}`;if(e.property===`grid-template-rows`)return`grid-rows-${t}`}}function Ed(e){let t=e.trim().toLowerCase();if(t.endsWith(`ms`)){let e=Number(t.slice(0,-2));return Number.isInteger(e)?e:void 0}if(t.endsWith(`s`)){let e=Number(t.slice(0,-1))*1e3;return Number.isInteger(e)?e:void 0}}function Dd(e){let t={"border-width":`border`,"border-top-width":`border-t`,"border-right-width":`border-r`,"border-bottom-width":`border-b`,"border-left-width":`border-l`,"border-inline-start-width":`border-s`,"border-inline-end-width":`border-e`,"border-inline-width":`border-x`,"border-block-width":`border-y`}[e.property];if(!t)return;let n=e.value.trim().toLowerCase();if(n===`1px`)return t;if(n===`0`||n===`0px`)return`${t}-0`;let r=n.match(/^(2|4|8)px$/)?.[1];return r?`${t}-${r}`:void 0}function Od(e){if(e.property!==`opacity`)return;let t=Number(e.value);if(!Number.isFinite(t)||t<0||t>1)return;let n=t*100;if(Number.isInteger(n))return`opacity-${n}`}var kd={white:`#ffffff`,black:`#000000`,transparent:`transparent`,currentcolor:`currentColor`},Ad={inherit:`inherit`,transparent:`transparent`,currentcolor:`current`};function jd(e,t){let n={color:`text`,fill:`fill`,stroke:`stroke`,"background-color":`bg`,"border-color":`border`,"border-top-color":`border-t`,"border-right-color":`border-r`,"border-bottom-color":`border-b`,"border-left-color":`border-l`,"border-inline-start-color":`border-s`,"border-inline-end-color":`border-e`,"border-inline-color":`border-x`,"border-block-color":`border-y`,"outline-color":`outline`,"text-decoration-color":`decoration`,"caret-color":`caret`,"accent-color":`accent`}[e.property];if(!n||t.colorMatch===`none`)return;let r=Nd(e.value),i=Ad[r];if(i)return`${n}-${i}`;let a=ad(r);if(a)return`${n}-${a}`;let o=Object.entries(t.theme.colors).find(([,e])=>Nd(e)===r)?.[0];if(o)return`${n}-${o}`;let s=Md(r,t);if(s)return`${n}-${s}`}function Md(e,t){let n=e.match(/^oklch\(([^/]+)\/\s*([\d.]+)%?\s*\)$/);if(n){let[,e,r]=n;if(!e||!r)return;let i=Nd(`oklch(${e.trim()})`),a=Object.entries(t.theme.colors).find(([,e])=>Nd(e)===i)?.[0];return a?`${a}/${Math.round(Number(r))}`:void 0}let r=e.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)$/);if(r){let[,e,n,i,a]=r;if(!e||!n||!i||!a)return;let o=Nd(`#${Number(e).toString(16).padStart(2,`0`)}${Number(n).toString(16).padStart(2,`0`)}${Number(i).toString(16).padStart(2,`0`)}`),s=Object.entries(t.theme.colors).find(([,e])=>Nd(e)===o)?.[0];return s?`${s}/${Math.round(Number(a)*100)}`:void 0}}function Nd(e){let t=e.trim().toLowerCase(),n=kd[t];return n?n.toLowerCase():Pd(t)||t}function Pd(e){let t=e.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);if(!t){let t=e.match(/^rgb\(\s*(\d+)\s+(\d+)\s+(\d+)\s*\)$/);if(!t)return;let[,n,r,i]=t;return!n||!r||!i?void 0:`#${Fd(Number(n))}${Fd(Number(r))}${Fd(Number(i))}`}let[,n,r,i]=t;if(!(!n||!r||!i))return`#${Fd(Number(n))}${Fd(Number(r))}${Fd(Number(i))}`}function Fd(e){return Math.max(0,Math.min(255,Math.round(e))).toString(16).padStart(2,`0`)}function Id(e){if(e.property!==`filter`&&e.property!==`backdrop-filter`)return;let t=e.property===`backdrop-filter`?`backdrop-`:``,n=e.value.trim().toLowerCase(),r=n.match(/^blur\(([^)]+)\)$/)?.[1];if(r===`8px`)return`${t}blur`;if(r)return`${t}blur-[${r}]`;let i=n.match(/^brightness\(([^)]+)\)$/)?.[1];if(i)return Vd(`${t}brightness`,i);let a=n.match(/^contrast\(([^)]+)\)$/)?.[1];if(a)return Vd(`${t}contrast`,a);let o=n.match(/^grayscale\(([^)]+)\)$/)?.[1];if(o)return Vd(`${t}grayscale`,o);let s=n.match(/^invert\(([^)]+)\)$/)?.[1];if(s)return Vd(`${t}invert`,s);let c=n.match(/^saturate\(([^)]+)\)$/)?.[1];if(c)return Vd(`${t}saturate`,c);let l=n.match(/^sepia\(([^)]+)\)$/)?.[1];if(l)return Vd(`${t}sepia`,l);let u=n.match(/^hue-rotate\((-?\d+(?:\.\d+)?deg)\)$/)?.[1];if(u)return Gd(u)?.replace(`rotate-`,`${t}hue-rotate-`).replace(`-rotate-`,`-${t}hue-rotate-`);let d=n.match(/^opacity\(([^)]+)\)$/)?.[1];if(d&&t===`backdrop-`)return Vd(`backdrop-opacity`,d);let f=n.match(/^drop-shadow\((.+)\)$/)?.[1];if(f&&t===``)return Bd(f);let p=Ld(n,t);if(p&&p.length>0)return p.length===1?p[0]:p}function Ld(e,t){let n=e.match(/[a-z-]+\([^)]+\)/gi);if(!n||n.length<2)return;let r=[];for(let e of n){let n=Rd(e.toLowerCase(),t);n&&r.push(n)}return r.length>=2?r:void 0}function Rd(e,t){let n=e.match(/^blur\(([^)]+)\)$/)?.[1];if(n===`8px`)return`${t}blur`;if(n)return`${t}blur-[${n}]`;let r=e.match(/^brightness\(([^)]+)\)$/)?.[1];if(r)return Vd(`${t}brightness`,r);let i=e.match(/^contrast\(([^)]+)\)$/)?.[1];if(i)return Vd(`${t}contrast`,i);let a=e.match(/^grayscale\(([^)]+)\)$/)?.[1];if(a)return Vd(`${t}grayscale`,a);let o=e.match(/^saturate\(([^)]+)\)$/)?.[1];if(o)return Vd(`${t}saturate`,o);let s=e.match(/^sepia\(([^)]+)\)$/)?.[1];if(s)return Vd(`${t}sepia`,s);let c=e.match(/^invert\(([^)]+)\)$/)?.[1];if(c)return Vd(`${t}invert`,c);let l=e.match(/^hue-rotate\((-?\d+(?:\.\d+)?deg)\)$/)?.[1];if(l)return Gd(l)?.replace(`rotate-`,`${t}hue-rotate-`).replace(`-rotate-`,`-${t}hue-rotate-`)}var zd={"0 1px 1px rgb(0 0 0 / 0.05)":`drop-shadow-xs`,"0 1px 2px rgb(0 0 0 / 0.15)":`drop-shadow-sm`,"0 3px 3px rgb(0 0 0 / 0.12)":`drop-shadow-md`,"0 4px 4px rgb(0 0 0 / 0.15)":`drop-shadow-lg`,"0 9px 7px rgb(0 0 0 / 0.1)":`drop-shadow-xl`,"0 25px 25px rgb(0 0 0 / 0.15)":`drop-shadow-2xl`};function Bd(e){return zd[e.trim().replace(/\s+/g,` `)]}function Vd(e,t){let n=t.trim(),r=n.endsWith(`%`)?Number(n.slice(0,-1)):Number(n)*100;if(Number.isFinite(r))return Number.isInteger(r)?r===100&&(e.endsWith(`grayscale`)||e.endsWith(`invert`)||e.endsWith(`sepia`))?e:`${e}-${r}`:`${e}-[${n}]`}function Hd(e,t){if(e.property===`rotate`)return Gd(e.value);if(e.property===`scale`)return Yd(e.value);if(e.property===`scale-x`)return Yd(e.value,`scale-x`);if(e.property===`scale-y`)return Yd(e.value,`scale-y`);if(e.property===`scale-z`)return Yd(e.value,`scale-z`);if(e.property===`skew`)return Kd(`skew`,e.value);if(e.property===`skew-x`)return Kd(`skew-x`,e.value);if(e.property===`skew-y`)return Kd(`skew-y`,e.value);if(e.property===`translate`)return qd(e.value,t);if(e.property===`translate-x`)return Jd(`translate-x`,e.value,t);if(e.property===`translate-y`)return Jd(`translate-y`,e.value,t);if(e.property===`translate-z`)return Jd(`translate-z`,e.value,t);if(e.property===`transform`)return Wd(e.value,t)}var Ud=[{pattern:/rotate\((-?\d+(?:\.\d+)?deg)\)/i,convert:e=>Gd(e)},{pattern:/rotateX\((-?\d+(?:\.\d+)?deg)\)/i,convert:e=>Kd(`rotate-x`,e)},{pattern:/rotateY\((-?\d+(?:\.\d+)?deg)\)/i,convert:e=>Kd(`rotate-y`,e)},{pattern:/rotateZ\((-?\d+(?:\.\d+)?deg)\)/i,convert:e=>Kd(`rotate-z`,e)},{pattern:/scale\((-?\d+(?:\.\d+)?)\)/i,convert:e=>Yd(e)},{pattern:/scaleX\((-?\d+(?:\.\d+)?)\)/i,convert:e=>Yd(e,`scale-x`)},{pattern:/scaleY\((-?\d+(?:\.\d+)?)\)/i,convert:e=>Yd(e,`scale-y`)},{pattern:/scaleZ\((-?\d+(?:\.\d+)?)\)/i,convert:e=>Yd(e,`scale-z`)},{pattern:/translateX\(([^)]+)\)/i,convert:(e,t)=>Jd(`translate-x`,e,t)},{pattern:/translateY\(([^)]+)\)/i,convert:(e,t)=>Jd(`translate-y`,e,t)},{pattern:/translateZ\(([^)]+)\)/i,convert:(e,t)=>Jd(`translate-z`,e,t)},{pattern:/skewX\((-?\d+(?:\.\d+)?deg)\)/i,convert:e=>Kd(`skew-x`,e)},{pattern:/skewY\((-?\d+(?:\.\d+)?deg)\)/i,convert:e=>Kd(`skew-y`,e)}];function Wd(e,t){let n=[];for(let r of Ud){let i=e.match(r.pattern);if(i?.[1]){let e=r.convert(i[1],t);e&&n.push(e)}}if(n.length!==0)return n.length===1?n[0]:n}function Gd(e){return Kd(`rotate`,e)}function Kd(e,t){let n=t.trim().toLowerCase();if(!n.endsWith(`deg`))return;let r=Number(n.slice(0,-3));if(!Number.isFinite(r))return;let i=Math.abs(r),a=Number.isInteger(i)?String(i):`[${i}deg]`;return r<0?`-${e}-${a}`:`${e}-${a}`}function qd(e,t){let[n,r=n]=e.trim().split(/\s+/);if(!(!n||r!==n))return Jd(`translate`,n,t)}function Jd(e,t,n){let r=md(t,n);if(r)return r.startsWith(`-`)?`-${e}-${r.slice(1)}`:`${e}-${r}`}function Yd(e,t=`scale`){let n=Number(e.trim());if(!Number.isFinite(n))return;let r=n*100;return Number.isInteger(r)?r<0?`-${t}-${Math.abs(r)}`:`${t}-${r}`:`${t}-[${e.trim()}]`}var Xd={"0 1px 2px 0 rgb(0 0 0 / 0.05)":`shadow-xs`,"0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)":`shadow-sm`,"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)":`shadow-md`,"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)":`shadow-lg`,"0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)":`shadow-xl`,"0 25px 50px -12px rgb(0 0 0 / 0.25)":`shadow-2xl`,"inset 0 2px 4px 0 rgb(0 0 0 / 0.05)":`shadow-inner`};function Zd(e){if(e.property===`box-shadow`)return Xd[e.value.trim().replace(/\s+/g,` `)]}var Qd={color:`text`,"background-color":`bg`,"border-color":`border`,"border-top-color":`border-t`,"border-right-color":`border-r`,"border-bottom-color":`border-b`,"border-left-color":`border-l`,"outline-color":`outline`,fill:`fill`,stroke:`stroke`,"caret-color":`caret`,"accent-color":`accent`,"text-decoration-color":`decoration`,width:`w`,height:`h`,"min-width":`min-w`,"min-height":`min-h`,"max-width":`max-w`,"max-height":`max-h`,padding:`p`,"padding-top":`pt`,"padding-right":`pr`,"padding-bottom":`pb`,"padding-left":`pl`,margin:`m`,"margin-top":`mt`,"margin-right":`mr`,"margin-bottom":`mb`,"margin-left":`ml`,gap:`gap`,"row-gap":`gap-y`,"column-gap":`gap-x`,"font-size":`text`,"font-family":`font`,"border-radius":`rounded`,"border-width":`border`,"box-shadow":`shadow`,"line-height":`leading`,"letter-spacing":`tracking`};function $d(e){let t=e.value.match(/^var\(\s*(--[\w-]+)\s*\)$/);if(!t?.[1])return;let n=Qd[e.property];if(n)return`${n}-(${t[1]})`}var ef={"to right":`bg-linear-to-r`,"to left":`bg-linear-to-l`,"to top":`bg-linear-to-t`,"to bottom":`bg-linear-to-b`,"to top right":`bg-linear-to-tr`,"to top left":`bg-linear-to-tl`,"to bottom right":`bg-linear-to-br`,"to bottom left":`bg-linear-to-bl`};function tf(e,t){if(e.property!==`background-image`&&e.property!==`background`)return;let n=e.value.trim().match(/^linear-gradient\((.+)\)$/);if(!n?.[1])return;let r=n[1],i=rf(r);if(i===-1)return;let a=r.slice(0,i).trim(),o=r.slice(i+1).trim(),s=ef[a]??(a.match(/^\d+deg$/)?`bg-linear-${a.replace(`deg`,``)}`:void 0);if(!s)return;let c=af(o);if(c.length<2||c.length>3)return;let l=[s],u=nf(c[0]??``,`from`,t);if(!u)return;if(l.push(u),c.length===3){let e=nf(c[1]??``,`via`,t);if(!e)return;l.push(e)}let d=nf(c[c.length-1]??``,`to`,t);if(d)return l.push(d),l}function nf(e,t,n){let r=e.trim().split(/\s+/)[0];if(!r)return;let i=Nd(r),a=Ad[i];if(a)return`${t}-${a}`;let o=ad(i);if(o)return`${t}-${o}`;let s=Object.entries(n.theme.colors).find(([,e])=>Nd(e)===i)?.[0];return s?`${t}-${s}`:`${t}-[${r}]`}function rf(e){let t=0;for(let n=0;n<e.length;n++)if(e[n]===`(`)t++;else if(e[n]===`)`)t--;else if(e[n]===`,`&&t===0)return n;return-1}function af(e){let t=[],n=0,r=0;for(let i=0;i<e.length;i++)e[i]===`(`?n++:e[i]===`)`?n--:e[i]===`,`&&n===0&&(t.push(e.slice(r,i).trim()),r=i+1);return t.push(e.slice(r).trim()),t.filter(Boolean)}function J(e,t,n){let r=e.important?`!`:``,i=e.variants.length>0?`${e.variants.join(`:`)}:`:``;return{...e,className:`${r}${i}${t}`,kind:n}}var of=new Set(`animation-iteration-count.aspect-ratio.border-image-outset.border-image-slice.border-image-width.box-flex.box-flex-group.box-ordinal-group.column-count.columns.flex.flex-grow.flex-negative.flex-order.flex-positive.flex-shrink.grid-area.grid-column.grid-column-end.grid-column-start.grid-row.grid-row-end.grid-row-start.-webkit-line-clamp.line-clamp.line-height.opacity.order.orphans.scale.scale-z.stroke-width.tab-size.widows.z-index.zoom`.split(`.`));function sf(e){return typeof e==`string`?cf(e):vf(e)?Array.from({length:e.length},(t,n)=>e.item(n)).filter(Boolean).map(t=>_f(t,e.getPropertyValue(t),e.getPropertyPriority(t)===`important`)):yf(e)?Array.from(e,([e,t])=>mf(e,t)).filter(Boolean):lf(e)}function cf(e){return e.split(`;`).map(e=>e.trim()).filter(Boolean).map(e=>{let t=e.indexOf(`:`);if(t!==-1)return mf(e.slice(0,t).trim(),e.slice(t+1).trim())}).filter(Boolean)}function lf(e,t=[]){return Object.entries(e).flatMap(([e,n])=>{if(bf(n)){let r=uf(e);return r?lf(n,[...t,r]):[]}let r=mf(e,n);return r?[{...r,variants:t}]:[]})}function uf(e){if(e===`dark`)return`dark`;if(e.startsWith(`&:`))return ff(e.slice(2));if(e.startsWith(`:`))return ff(e.slice(1));if(e.startsWith(`@media`))return pf(e);if(e.startsWith(`@supports`))return`supports-[${e.slice(9).trim()}]`;if(e.startsWith(`@container`))return df(e)}function df(e){let t=e.replace(/\s+/g,` `).trim(),n=t.match(/@container\s*\(min-width:\s*(\d+)px\)/);if(n){let e=Number(n[1]);return{320:`@xs`,384:`@sm`,448:`@md`,512:`@lg`,576:`@xl`,672:`@2xl`,768:`@3xl`,896:`@4xl`,1024:`@5xl`,1152:`@6xl`,1280:`@7xl`}[e]??`@min-[${e}px]`}return`@container-[${t.replace(/^@container\s*/,``)}]`}function ff(e){return e.replace(/^:/,``).replace(/-child$/,``).replace(/-of-type$/,`-of-type`)}function pf(e){let t=e.replace(/\s+/g,` `).trim();return/min-width:\s*640px/.test(t)?`sm`:/min-width:\s*768px/.test(t)?`md`:/min-width:\s*1024px/.test(t)?`lg`:/min-width:\s*1280px/.test(t)?`xl`:/min-width:\s*1536px/.test(t)?`2xl`:/prefers-color-scheme:\s*dark/.test(t)?`dark`:/prefers-color-scheme:\s*light/.test(t)?`light`:/prefers-reduced-motion:\s*reduce/.test(t)?`motion-reduce`:/prefers-reduced-motion:\s*no-preference/.test(t)?`motion-safe`:/prefers-contrast:\s*more/.test(t)?`contrast-more`:/prefers-contrast:\s*less/.test(t)?`contrast-less`:/\(hover:\s*hover\)/.test(t)?`hover`:/\(pointer:\s*fine\)/.test(t)?`pointer-fine`:/\(pointer:\s*coarse\)/.test(t)?`pointer-coarse`:/print/.test(t)?`print`:/\(orientation:\s*portrait\)/.test(t)?`portrait`:/\(orientation:\s*landscape\)/.test(t)?`landscape`:`media-[${t.replace(/^@media\s*/,``)}]`}function mf(e,t){if(t==null||t===``)return;let n=hf(e),{value:r,important:i}=gf(n,t);return _f(n,r,i)}function hf(e){return e.startsWith(`--`)?e:e.replace(/^Webkit/,`-webkit`).replace(/^Moz/,`-moz`).replace(/^ms/,`-ms`).replace(/^O/,`-o`).replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase()}function gf(e,t){let n=typeof t==`number`&&t!==0&&!of.has(e)?`${t}px`:String(t).trim();return n.endsWith(`!important`)?{value:n.slice(0,-10).trim(),important:!0}:{value:n,important:!1}}function _f(e,t,n){return{property:e,value:t,important:n,variants:[]}}function vf(e){return typeof CSSStyleDeclaration<`u`&&e instanceof CSSStyleDeclaration}function yf(e){return typeof e==`object`&&!!e&&Symbol.iterator in e}function bf(e){return typeof e==`object`&&!!e}function xf(e){let t=[],n=``,r=0,i;for(let a of e.trim()){if(i){n+=a,a===i&&(i=void 0);continue}if(a===`"`||a===`'`){i=a,n+=a;continue}if(a===`(`&&(r+=1),a===`)`&&(r=Math.max(0,r-1)),/\s/.test(a)&&r===0){n&&=(t.push(n),``);continue}n+=a}return n&&t.push(n),t}var Sf={margin:[`margin-top`,`margin-right`,`margin-bottom`,`margin-left`],padding:[`padding-top`,`padding-right`,`padding-bottom`,`padding-left`],inset:[`top`,`right`,`bottom`,`left`],"border-color":[`border-top-color`,`border-right-color`,`border-bottom-color`,`border-left-color`],"border-style":[`border-top-style`,`border-right-style`,`border-bottom-style`,`border-left-style`],"border-width":[`border-top-width`,`border-right-width`,`border-bottom-width`,`border-left-width`],"border-radius":[`border-top-left-radius`,`border-top-right-radius`,`border-bottom-right-radius`,`border-bottom-left-radius`],"scroll-margin":[`scroll-margin-top`,`scroll-margin-right`,`scroll-margin-bottom`,`scroll-margin-left`],"scroll-padding":[`scroll-padding-top`,`scroll-padding-right`,`scroll-padding-bottom`,`scroll-padding-left`]},Cf={"overscroll-behavior":[`overscroll-behavior-x`,`overscroll-behavior-y`],"margin-inline":[`margin-inline-start`,`margin-inline-end`],"margin-block":[`margin-block-start`,`margin-block-end`],"padding-inline":[`padding-inline-start`,`padding-inline-end`],"padding-block":[`padding-block-start`,`padding-block-end`],"inset-inline":[`inset-inline-start`,`inset-inline-end`],"inset-block":[`top`,`bottom`],"scroll-margin-inline":[`scroll-margin-inline-start`,`scroll-margin-inline-end`],"scroll-margin-block":[`scroll-margin-block-start`,`scroll-margin-block-end`],"scroll-padding-inline":[`scroll-padding-inline-start`,`scroll-padding-inline-end`],"scroll-padding-block":[`scroll-padding-block-start`,`scroll-padding-block-end`]};function wf(e){return e.flatMap(e=>{let t=Lf(e);if(t)return t;let n=Pf(e);if(n)return n;let r=Ff(e);if(r)return r;let i=If(e);if(i)return i;let a=Nf(e);if(a)return a;let o=jf(e);if(o)return o;let s=Mf(e);if(s)return s;let c=Af(e);if(c)return c;let l=kf(e);if(l)return l;let u=Of(e);if(u)return u;let d=Df(e);if(d)return d;let f=Ef(e);if(f)return f;let p=Tf(e);if(p)return p;let m=Sf[e.property];if(!m)return[e];let h=Rf(e.value);return h?[{...e,property:m[0],value:h[0]},{...e,property:m[1],value:h[1]},{...e,property:m[2],value:h[2]},{...e,property:m[3],value:h[3]}]:[e]})}function Tf(e){if(e.property!==`background`)return;let t=xf(e.value);if(t.length<1)return;let n=new Set([`repeat`,`no-repeat`,`repeat-x`,`repeat-y`,`space`,`round`]),r=new Set([`cover`,`contain`]),i=new Set([`fixed`,`local`,`scroll`]),a=new Set([`center`,`top`,`bottom`,`left`,`right`]),o=[];for(let s of t)n.has(s)?o.push({...e,property:`background-repeat`,value:s}):r.has(s)?o.push({...e,property:`background-size`,value:s}):i.has(s)?o.push({...e,property:`background-attachment`,value:s}):a.has(s)?o.push({...e,property:`background-position`,value:s}):s===`none`?o.push({...e,property:`background-image`,value:`none`}):o.some(e=>e.property===`background-color`)||o.push({...e,property:`background-color`,value:s});return o.length>0?o:void 0}function Ef(e){if(e.property!==`font`)return;let t=new Set([`normal`,`bold`,`100`,`200`,`300`,`400`,`500`,`600`,`700`,`800`,`900`]),n=new Set([`italic`,`oblique`]),r=xf(e.value);if(r.length<2)return;let i=[];for(let a of r)if(n.has(a))i.push({...e,property:`font-style`,value:a});else if(t.has(a))i.push({...e,property:`font-weight`,value:a});else if(a.includes(`/`)){let[t,n]=a.split(`/`);t&&i.push({...e,property:`font-size`,value:t}),n&&i.push({...e,property:`line-height`,value:n})}else/^\d/.test(a)?i.push({...e,property:`font-size`,value:a}):i.some(e=>e.property===`font-family`)||i.push({...e,property:`font-family`,value:a});return i.length>=2?i:void 0}function Df(e){if(e.property!==`size`)return;let t=xf(e.value);if(t.length===1&&t[0])return[{...e,property:`width`,value:t[0]},{...e,property:`height`,value:t[0]}];if(t.length===2){let[n,r]=t;return!n||!r?void 0:[{...e,property:`width`,value:n},{...e,property:`height`,value:r}]}}function Of(e){if(e.property!==`column-rule`)return;let t=xf(e.value);if(t.length<2)return;let n=new Set([`none`,`solid`,`dashed`,`dotted`,`double`,`groove`,`ridge`,`inset`,`outset`]),r=[];for(let i of t)n.has(i)?r.push({...e,property:`column-rule-style`,value:i}):/^\d/.test(i)?r.push({...e,property:`column-rule-width`,value:i}):r.push({...e,property:`column-rule-color`,value:i});return r.length>=2?r:void 0}function kf(e){let t={border:[`border-width`,`border-style`,`border-color`],"border-top":[`border-top-width`,`border-top-style`,`border-top-color`],"border-right":[`border-right-width`,`border-right-style`,`border-right-color`],"border-bottom":[`border-bottom-width`,`border-bottom-style`,`border-bottom-color`],"border-left":[`border-left-width`,`border-left-style`,`border-left-color`],"border-inline-start":[`border-inline-start-width`,`border-inline-start-style`,`border-inline-start-color`],"border-inline-end":[`border-inline-end-width`,`border-inline-end-style`,`border-inline-end-color`],"border-block":[`border-block-width`,`border-block-style`,`border-block-color`],"border-block-start":[`border-block-start-width`,`border-block-start-style`,`border-block-start-color`],"border-block-end":[`border-block-end-width`,`border-block-end-style`,`border-block-end-color`],"border-inline":[`border-inline-width`,`border-inline-style`,`border-inline-color`]}[e.property];if(!t)return;let n=xf(e.value);if(n.length<2||n.length>3)return;let r=new Set([`none`,`hidden`,`solid`,`dashed`,`dotted`,`double`,`groove`,`ridge`,`inset`,`outset`]),i=[];for(let a of n)r.has(a)?i.push({...e,property:t[1],value:a}):/^\d/.test(a)?i.push({...e,property:t[0],value:a}):i.push({...e,property:t[2],value:a});return i.length>=2?i:void 0}function Af(e){if(e.property!==`transition`||e.value===`none`)return;let t=e.value.split(/\s+/),n=[];for(let r of t)/^\d/.test(r)&&(r.endsWith(`ms`)||r.endsWith(`s`))?n.some(e=>e.property===`transition-duration`)?n.some(e=>e.property===`transition-delay`)||n.push({...e,property:`transition-delay`,value:r}):n.push({...e,property:`transition-duration`,value:r}):[`ease`,`ease-in`,`ease-out`,`ease-in-out`,`linear`].includes(r)?n.push({...e,property:`transition-timing-function`,value:r}):[`all`,`none`,`color`,`opacity`,`shadow`,`transform`].includes(r)&&n.push({...e,property:`transition-property`,value:r});return n.length>0?n:void 0}function jf(e){if(e.property!==`outline`)return;let t=xf(e.value);if(t.length<2)return;let n=new Set([`none`,`solid`,`dashed`,`dotted`,`double`,`groove`,`ridge`,`inset`,`outset`]),r=[];for(let i of t)n.has(i)?r.push({...e,property:`outline-style`,value:i}):/^\d/.test(i)?r.push({...e,property:`outline-width`,value:i}):r.push({...e,property:`outline-color`,value:i});return r.length>0?r:void 0}function Mf(e){if(e.property!==`text-decoration`)return;let t=xf(e.value);if(t.length<1)return;let n=new Set([`underline`,`overline`,`line-through`,`none`]),r=new Set([`solid`,`double`,`dotted`,`dashed`,`wavy`]),i=[];for(let a of t)n.has(a)?i.push({...e,property:`text-decoration-line`,value:a}):r.has(a)&&i.push({...e,property:`text-decoration-style`,value:a});return i.length>0?i:void 0}function Nf(e){if(e.property!==`list-style`)return;let t=xf(e.value);if(t.length===0)return;let n=t.flatMap(t=>t===`inside`||t===`outside`?[{...e,property:`list-style-position`,value:t}]:t===`disc`||t===`decimal`||t===`none`?[{...e,property:`list-style-type`,value:t}]:[]);return n.length>0?n:void 0}function Pf(e){if(e.property!==`gap`)return;let t=xf(e.value);if(t.length!==2||t.some(e=>e.length===0))return;let[n,r]=t;if(!(!n||!r))return[{...e,property:`row-gap`,value:n},{...e,property:`column-gap`,value:r}]}function Ff(e){let t={"place-items":[`align-items`,`justify-items`],"place-content":[`align-content`,`justify-content`],"place-self":[`align-self`,`justify-self`]}[e.property];if(!t)return;let n=xf(e.value);if(n.length!==2||n.some(e=>e.length===0))return;let[r,i]=n;if(!(!r||!i))return[{...e,property:t[0],value:r},{...e,property:t[1],value:i}]}function If(e){let t=Cf[e.property];if(!t)return;let n=xf(e.value);if(n.length!==2||n.some(e=>e.length===0))return;let[r,i]=n;if(!(!r||!i))return[{...e,property:t[0],value:r},{...e,property:t[1],value:i}]}function Lf(e){if(e.property!==`overflow`)return;let t=xf(e.value);if(t.length!==2||t.some(e=>e.length===0))return;let[n,r]=t;if(!(!n||!r))return[{...e,property:`overflow-x`,value:n},{...e,property:`overflow-y`,value:r}]}function Rf(e){let t=xf(e);if(t.length<1||t.length>4||t.some(e=>e.length===0))return;let[n,r=n,i=n,a=r]=t;if(!(!n||!r||!i||!a))return[n,r,i,a]}var zf=new Map(`display.position.top.right.bottom.left.z-index.visibility.overflow.overflow-x.overflow-y.margin.margin-top.margin-right.margin-bottom.margin-left.padding.padding-top.padding-right.padding-bottom.padding-left.flex-direction.flex-wrap.justify-content.align-items.align-content.align-self.gap.row-gap.column-gap.width.height.min-width.min-height.max-width.max-height.font-size.font-weight.line-height.text-align.color.background-color.border-width.border-color.border-radius.opacity.box-shadow.filter.transform.transition.animation`.split(`.`).map((e,t)=>[e,t]));function Bf(e,t){return t.sort===`input`?e:[...e].sort((e,t)=>(zf.get(e.property)??2**53-1)-(zf.get(t.property)??2**53-1))}var Vf={spacing:{},colors:od};function Hf(e={}){return{theme:{spacing:{...Vf.spacing,...e.theme?.spacing},colors:{...Vf.colors,...e.theme?.colors}},allowArbitraryValues:e.allowArbitraryValues??!0,allowArbitraryProperties:e.allowArbitraryProperties??!0,compression:e.compression??`safe`,sort:e.sort??`grouped`,important:e.important??!1,colorMatch:e.colorMatch??`exact`,numericMultipliers:e.numericMultipliers??`integer`}}function Uf(e,t){let n=Hf(t),r=wf(sf(e)).map(e=>({declaration:e,converted:_d(e,n)})),i=Bf(Xu(r.flatMap(({converted:e})=>e?Array.isArray(e)?e:[e]:[]),n),n);return{className:i.map(({className:e})=>e).join(` `),classes:i.map(({className:e})=>e),exact:i.filter(e=>e.kind===`exact`),arbitrary:i.filter(e=>e.kind===`arbitrary`),unmatched:r.flatMap(({declaration:e,converted:t})=>t?[]:[e])}}function Wf(e,t){return Uf(e,t).className}Wf.convert=Uf;function Y(e){return`${e}px`}function Gf(e){return e.every(e=>e.sizing===`FR`&&e.value===1)?String(e.length):`[${e.map(qu).join(`_`)}]`}function Kf(e){let t=[`grid`];return e.gridTemplateColumns.length>0&&t.push(`grid-cols-${Gf(e.gridTemplateColumns)}`),e.gridTemplateRows.length>0&&t.push(`grid-rows-${Gf(e.gridTemplateRows)}`),t}function qf(e){if(!e.gridPosition)return[];let t=[],n=e.gridPosition;return n.column>0&&t.push(`col-start-${n.column}`),n.row>0&&t.push(`row-start-${n.row}`),n.columnSpan>1&&t.push(`col-span-${n.columnSpan}`),n.rowSpan>1&&t.push(`row-span-${n.rowSpan}`),t}var Jf={CENTER:`center`,MAX:`flex-end`,SPACE_BETWEEN:`space-between`},Yf={CENTER:`center`,MAX:`flex-end`,STRETCH:`stretch`};function Xf(e,t){e.display=`flex`,t.layoutMode===`VERTICAL`&&(e.flexDirection=`column`),t.layoutWrap===`WRAP`&&(e.flexWrap=`wrap`),t.itemSpacing>0&&(e.gap=Y(t.itemSpacing)),t.layoutWrap===`WRAP`&&t.counterAxisSpacing>0&&(e.rowGap=Y(t.counterAxisSpacing)),Jf[t.primaryAxisAlign]&&(e.justifyContent=Jf[t.primaryAxisAlign]),Yf[t.counterAxisAlign]&&(e.alignItems=Yf[t.counterAxisAlign])}function Zf(e,t){let n=t.layoutMode===`HORIZONTAL`?`width`:`height`,r=t.layoutMode===`HORIZONTAL`?`height`:`width`;t.primaryAxisSizing===`FILL`?e[n]=`100%`:t.primaryAxisSizing!==`HUG`&&(e[n]=Y(t[n])),t.counterAxisSizing===`FILL`?e[r]=`100%`:t.counterAxisSizing!==`HUG`&&(e[r]=Y(t[r]))}function Qf(e,t){let{paddingTop:n,paddingRight:r,paddingBottom:i,paddingLeft:a}=t;n===0&&r===0&&i===0&&a===0||(n===r&&r===i&&i===a?e.padding=Y(n):n===i&&a===r?e.padding=`${Y(n)} ${Y(a)}`:e.padding=`${Y(n)} ${Y(r)} ${Y(i)} ${Y(a)}`)}function $f(e,t,n){let r=Uu(t,n);r.isGrid?(e.display=`grid`,t.gridColumnGap>0&&(e.columnGap=Y(t.gridColumnGap)),t.gridRowGap>0&&(e.rowGap=Y(t.gridRowGap)),t.width>0&&(e.width=Y(t.width)),t.gridTemplateRows.length>0&&t.height>0&&(e.height=Y(t.height))):r.isFlex?(Xf(e,t),Zf(e,t)):(t.width>0&&(e.width=Y(t.width)),t.height>0&&(e.height=Y(t.height))),r.parentIsAutoLayout&&t.layoutGrow>0&&(e.flexGrow=`1`),r.isAutoLayout&&Qf(e,t)}function ep(e,t){let n=Lu(t.fills);n&&t.type!==`TEXT`&&(e.backgroundColor=n);let r=Ru(t.strokes);r&&(e.borderWidth=Y(r.weight),e.borderColor=r.color,e.borderStyle=`solid`),t.cornerRadius>0&&(t.independentCorners?e.borderRadius=`${Y(t.topLeftRadius)} ${Y(t.topRightRadius)} ${Y(t.bottomRightRadius)} ${Y(t.bottomLeftRadius)}`:e.borderRadius=t.cornerRadius>=9999?`9999px`:Y(t.cornerRadius)),t.opacity<1&&(e.opacity=String(t.opacity)),t.rotation!==0&&(e.transform=`rotate(${t.rotation}deg)`),t.clipsContent&&(e.overflow=`hidden`);for(let n of t.effects)if(n.visible)if(n.type===`DROP_SHADOW`||n.type===`INNER_SHADOW`){let t=n.type===`INNER_SHADOW`?`inset `:``,r=n.spread===0?``:` ${Y(n.spread)}`,i=dt(n.color);e.boxShadow=`${t}${Y(n.offset.x)} ${Y(n.offset.y)} ${Y(n.radius)}${r} ${i}`}else n.type===`LAYER_BLUR`||n.type===`FOREGROUND_BLUR`?e.filter=`blur(${Y(n.radius)})`:e.backdropFilter=`blur(${Y(n.radius)})`}function tp(e,t){if(t.type!==`TEXT`)return;e.fontSize=Y(t.fontSize),t.fontFamily&&t.fontFamily!==`Inter`&&(e.fontFamily=t.fontFamily),t.fontWeight!==400&&(e.fontWeight=String(t.fontWeight)),t.textAlignHorizontal!==`LEFT`&&(e.textAlign=t.textAlignHorizontal.toLowerCase());let n=Lu(t.fills);n&&(e.color=n)}function np(e,t){let n={};return $f(n,e,t),ep(n,e),tp(n,e),n}function rp(e,t){let n=np(e,t),r=Uu(e,t),i=[];r.isGrid&&i.push(...Kf(e)),r.parentIsGrid&&i.push(...qf(e)),e.layoutDirection===`RTL`&&i.push(`[direction:rtl]`),e.type===`TEXT`&&Ht(e)===`RTL`&&i.push(`[direction:rtl]`);let a=Wf(n),o=a?a.split(` `):[];if(n.display===`grid`){let e=o.filter(e=>e!==`grid`);return[...i,...e]}return[...i,...o]}var ip={FRAME:`Frame`,RECTANGLE:`Rectangle`,ROUNDED_RECTANGLE:`Rectangle`,ELLIPSE:`Ellipse`,TEXT:`Text`,LINE:`Line`,STAR:`Star`,POLYGON:`Polygon`,VECTOR:`Vector`,GROUP:`Group`,SECTION:`Section`,COMPONENT:`Component`,COMPONENT_SET:`Frame`,INSTANCE:`Frame`},ap={FRAME:`div`,RECTANGLE:`div`,ROUNDED_RECTANGLE:`div`,ELLIPSE:`div`,TEXT:`p`,LINE:`div`,STAR:`div`,POLYGON:`div`,VECTOR:`div`,GROUP:`div`,SECTION:`section`,COMPONENT:`div`,COMPONENT_SET:`div`,INSTANCE:`div`};function op(e,t){t.push([`grid`,!0]),e.gridTemplateColumns.length>0&&t.push([`columns`,Ju(e.gridTemplateColumns)]),e.gridTemplateRows.length>0&&t.push([`rows`,Ju(e.gridTemplateRows)]),e.width>0&&t.push([`w`,e.width]),e.gridTemplateRows.length>0&&e.height>0&&t.push([`h`,e.height]),e.gridColumnGap>0&&t.push([`columnGap`,e.gridColumnGap]),e.gridRowGap>0&&t.push([`rowGap`,e.gridRowGap])}function sp(e,t){t.push([`flex`,e.layoutMode===`HORIZONTAL`?`row`:`col`]),e.layoutDirection===`RTL`&&t.push([`dir`,`rtl`]);let n=e.layoutMode===`HORIZONTAL`?`width`:`height`,r=e.layoutMode===`HORIZONTAL`?`height`:`width`;e.primaryAxisSizing===`FILL`?t.push([n===`width`?`w`:`h`,`fill`]):e.primaryAxisSizing!==`HUG`&&t.push([n===`width`?`w`:`h`,e[n]]),e.counterAxisSizing===`FILL`?t.push([r===`width`?`w`:`h`,`fill`]):e.counterAxisSizing!==`HUG`&&t.push([r===`width`?`w`:`h`,e[r]])}function cp(e,t){if(!e.gridPosition)return;let n=e.gridPosition;n.column>0&&t.push([`colStart`,n.column]),n.row>0&&t.push([`rowStart`,n.row]),n.columnSpan>1&&t.push([`colSpan`,n.columnSpan]),n.rowSpan>1&&t.push([`rowSpan`,n.rowSpan])}function lp(e,t){e.itemSpacing>0&&t.push([`gap`,e.itemSpacing]),e.layoutWrap===`WRAP`&&(t.push([`wrap`,!0]),e.counterAxisSpacing>0&&t.push([`rowGap`,e.counterAxisSpacing])),e.primaryAxisAlign===`CENTER`?t.push([`justify`,`center`]):e.primaryAxisAlign===`MAX`?t.push([`justify`,`end`]):e.primaryAxisAlign===`SPACE_BETWEEN`&&t.push([`justify`,`between`]),e.counterAxisAlign===`CENTER`?t.push([`items`,`center`]):e.counterAxisAlign===`MAX`?t.push([`items`,`end`]):e.counterAxisAlign===`STRETCH`&&t.push([`items`,`stretch`])}function up(e,t){let n=Wu(e);n&&t.push(...Gu(n,e=>[`p`,e],(e,t)=>[[`py`,e],[`px`,t]],({pt:e,pr:t,pb:n,pl:r})=>{let i=[];return e>0&&i.push([`pt`,e]),t>0&&i.push([`pr`,t]),n>0&&i.push([`pb`,n]),r>0&&i.push([`pl`,r]),i}))}function dp(e,t){let n=Ku(e);if(!n)return;let{tl:r,tr:i,br:a,bl:o}=n;r===i&&i===a&&a===o?t.push([`rounded`,r]):(r>0&&t.push([`roundedTL`,r]),i>0&&t.push([`roundedTR`,i]),a>0&&t.push([`roundedBR`,a]),o>0&&t.push([`roundedBL`,o]))}function fp(e,t){let n=Lu(e.fills);n&&t.push([`bg`,n]);let r=Ru(e.strokes);r&&(t.push([`stroke`,r.color]),r.weight!==1&&t.push([`strokeWidth`,r.weight]),r.dash&&t.push([`strokeDash`,r.dash])),dp(e,t),e.cornerSmoothing>0&&t.push([`cornerSmoothing`,e.cornerSmoothing]),e.opacity<1&&t.push([`opacity`,Math.round(e.opacity*100)/100]),e.rotation!==0&&t.push([`rotate`,Math.round(e.rotation*100)/100]),e.blendMode!==`PASS_THROUGH`&&e.blendMode!==`NORMAL`&&t.push([`blendMode`,e.blendMode.toLowerCase()]),e.clipsContent&&t.push([`overflow`,`hidden`]);for(let n of e.effects)if(n.visible)if(n.type===`DROP_SHADOW`||n.type===`INNER_SHADOW`){let e=zu(n);e&&t.push([`shadow`,e])}else(n.type===`LAYER_BLUR`||n.type===`BACKGROUND_BLUR`)&&t.push([`blur`,n.radius])}function pp(e,t,n){t.parentIsAutoLayout||t.parentIsGrid||(e.x!==0&&n.push([`x`,e.x]),e.y!==0&&n.push([`y`,e.y]))}function mp(e,t,n,r){if(t.isGrid?op(e,r):t.isFlex?sp(e,r):e.type===`TEXT`?hp(e,n,r):(e.width>0&&r.push([`w`,e.width]),e.height>0&&r.push([`h`,e.height])),t.parentIsAutoLayout&&(e.layoutGrow>0&&r.push([`grow`,e.layoutGrow]),e.layoutAlignSelf===`STRETCH`)){let t=e.parentId?n.getNode(e.parentId):null;if(t&&(t.layoutMode===`HORIZONTAL`||t.layoutMode===`VERTICAL`)){let e=t.layoutMode===`HORIZONTAL`?`h`:`w`;r.some(([t])=>t===e)||r.push([e,`fill`])}}}function hp(e,t,n){let r=e.textAutoResize,i=r===`NONE`||r===`TRUNCATE`,a=e.layoutAlignSelf===`STRETCH`&&(e.parentId?t.getNode(e.parentId):null)?.layoutMode===`VERTICAL`,o=e.layoutGrow>0&&(e.parentId?t.getNode(e.parentId):null)?.layoutMode===`HORIZONTAL`;r!==`WIDTH_AND_HEIGHT`&&!a&&!o&&e.width>0&&n.push([`w`,e.width]),i&&e.height>0&&n.push([`h`,e.height])}function gp(e,t){let n=Ht(e);e.fontSize!==14&&t.push([`size`,e.fontSize]),e.fontFamily&&e.fontFamily!==`Inter`&&t.push([`font`,e.fontFamily]),e.fontWeight!==400&&(e.fontWeight===700?t.push([`weight`,`bold`]):e.fontWeight===500?t.push([`weight`,`medium`]):t.push([`weight`,e.fontWeight])),n===`RTL`&&t.push([`dir`,`rtl`]),e.textAlignHorizontal!==`LEFT`&&t.push([`textAlign`,e.textAlignHorizontal.toLowerCase()]),e.lineHeight!=null&&t.push([`lineHeight`,e.lineHeight]),e.letterSpacing!==0&&t.push([`letterSpacing`,e.letterSpacing]),e.textDecoration!==`NONE`&&t.push([`textDecoration`,e.textDecoration.toLowerCase()]),e.textCase!==`ORIGINAL`&&t.push([`textCase`,e.textCase.toLowerCase()]),e.maxLines!=null&&t.push([`maxLines`,e.maxLines]),e.textTruncation===`ENDING`&&e.maxLines==null&&t.push([`truncate`,!0]);let r=Lu(e.fills);if(r){let e=t.findIndex(([e])=>e===`bg`);e!==-1&&t.splice(e,1),t.push([`color`,r])}}function _p(e,t){e.type===`STAR`&&(e.pointCount!==5&&t.push([`points`,e.pointCount]),e.starInnerRadius!==.382&&t.push([`innerRadius`,e.starInnerRadius])),e.type===`POLYGON`&&e.pointCount!==3&&t.push([`points`,e.pointCount])}function vp(e,t){let n=[],r=Uu(e,t);return e.name&&e.name!==e.type&&n.push([`name`,e.name]),pp(e,r,n),mp(e,r,t,n),r.parentIsGrid&&cp(e,n),r.isFlex&&lp(e,n),r.isAutoLayout&&up(e,n),fp(e,n),e.type===`TEXT`&&gp(e,n),_p(e,n),n}function yp(e,t,n,r){let i=(r===`tailwind`?ap:ip)[e.type];if(!i)return``;let a=`  `.repeat(n),o;if(r===`tailwind`){let n=rp(e,t);o=`${e.name&&e.name!==e.type?` data-name="${e.name}"`:``}${n.length>0?` className="${n.join(` `)}"`:``}`.trim()}else o=vp(e,t).map(([e,t])=>Hu(e,t)).join(` `);let s=o?`<${i} ${o}`:`<${i}`,c=t.getChildren(e.id);if(e.type===`TEXT`){let t=e.text;if(!t)return`${a}${s} />`;let n=Vu(t);return n.includes(`
`)?[`${a}${s}>`,...n.split(`
`).map(e=>`${a}  ${e}`),`${a}</${i}>`].join(`
`):`${a}${s}>${n}</${i}>`}if(c.length===0)return`${a}${s} />`;let l=c.filter(e=>e.visible).map(e=>yp(e,t,n+1,r)).filter(Boolean);return l.length===0?`${a}${s} />`:[`${a}${s}>`,...l,`${a}</${i}>`].join(`
`)}function bp(e,t,n=`openpencil`){let r=t.getNode(e);return r?yp(r,t,0,n):``}function xp(e,t,n=`openpencil`){return e.map(e=>bp(e,t,n)).filter(Boolean).join(`

`)}function Sp(e){switch(e){case`putCanvas`:case`putThumb`:return`upload`;case`deleteCanvas`:return`delete`;default:throw Error(`Unsupported outbox job type`)}}var Cp=class extends Error{libraryId;assetKey;constructor(e,t){super(`This component belongs to library ${e}. Edit the source library to change it.`),this.name=`ReadOnlyLibraryDefinitionError`,this.libraryId=e,this.assetKey=t}};function wp(e,t){let n=e.getNode(t);for(;n;){if(n.librarySource?.readOnly)return n;n=n.parentId?e.getNode(n.parentId):void 0}}function Tp(e,t){let n=wp(e,t)?.librarySource?.identity;return n?{editable:!1,reason:`library-definition`,libraryId:n.libraryId,assetKey:n.assetKey}:{editable:!0}}function X(e,t){let n=Tp(e,t);if(!n.editable)throw new Cp(n.libraryId,n.assetKey)}var Ep={geometry:!0,objects:!0,pixelGrid:!0};function Dp(){return{activeTool:`SELECT`,snappingPreferences:{...Ep},remoteCursors:[],documentName:`Untitled`,rulerTheme:void 0,sceneVersion:0}}function Op(){return{preview:null,hovered:null,selected:null,redline:null}}function kp(e){return{currentPageId:e,selectedIds:new Set,marquee:null,snapGuides:[],guides:Op(),rotationPreview:null,dropTargetId:null,layoutInsertIndicator:null,hoveredNodeId:null,measurementMode:`off`,editingTextId:null,penState:null,penCursorX:null,penCursorY:null,autoLayoutHover:null,panX:0,pageColor:{...p},panY:0,zoom:1,navigation:{phase:`idle`,generation:0,lastInputAt:0},renderVersion:0,enteredContainerId:null,nodeEditState:null,cursorCanvasX:null,cursorCanvasY:null}}function Ap(e){return{...e,selectedIds:new Set(e.selectedIds),marquee:structuredClone(e.marquee),snapGuides:structuredClone(e.snapGuides),guides:structuredClone(e.guides),rotationPreview:structuredClone(e.rotationPreview),layoutInsertIndicator:structuredClone(e.layoutInsertIndicator),penState:structuredClone(e.penState),autoLayoutHover:structuredClone(e.autoLayoutHover),pageColor:{...e.pageColor},navigation:{...e.navigation},nodeEditState:structuredClone(e.nodeEditState)}}function jp(e){let t=kp(e.currentPageId),n={};for(let r of Object.keys(t))Reflect.set(n,r,e[r]);return Ap(n)}function Mp(e,t,n){let r={},i=ja(e.fillGeometry,n,Aa(e)),a=ja(e.strokeGeometry,n);if(i.length>0?r.fillGeometry=Da(i,t.vectorNetwork):e.size&&t.fillGeometry.length>0&&t.width>0&&t.height>0&&(r.fillGeometry=st(t.fillGeometry,e.size.x/t.width,e.size.y/t.height)),a.length>0?r.strokeGeometry=a:e.size&&t.strokeGeometry.length>0&&t.width>0&&t.height>0&&(r.strokeGeometry=st(t.strokeGeometry,e.size.x/t.width,e.size.y/t.height)),e.size&&t.vectorNetwork?.vertices.length){let n=Pe(t.vectorNetwork),i=Math.min(...n.vertices.map(({x:e})=>e)),a=Math.min(...n.vertices.map(({y:e})=>e)),o=n.vertices.map(({x:e})=>e),s=n.vertices.map(({y:e})=>e),c=Math.max(...o)-Math.min(...o),l=Math.max(...s)-Math.min(...s),u=c===0?1:e.size.x/c,d=l===0?1:e.size.y/l;for(let e of n.vertices)e.x=i+(e.x-i)*u,e.y=a+(e.y-a)*d;for(let e of n.segments)e.tangentStart.x*=u,e.tangentStart.y*=d,e.tangentEnd.x*=u,e.tangentEnd.y*=d;r.vectorNetwork=n}return r}function Np(e,t,n){let r=t.get(n);if(r!==void 0)return r;let i=e.graph.getChildren(n).filter(e=>e.visible).length;return t.set(n,i),i}function Pp(e,t,n){if(!n.parentId||Np(e,t,n.parentId)!==1||!n.componentId)return null;let r=e.graph.getNode(n.componentId),i=e.graph.getNode(n.parentId);return!r||!i?null:r.x>=0&&r.y>=0&&r.x+r.width<=i.width+.01&&r.y+r.height<=i.height+.01?{x:r.x,y:r.y}:null}function Fp(e,t,n){if(e.rotation===0&&!e.flipX&&!e.flipY)return null;let r=wt(e),i=t/2,a=n/2;return{x:r[2]-i+r[0]*i+r[1]*a,y:r[5]-a+r[3]*i+r[4]*a}}function Ip(e,t,n){let r={};e.fontSize!==void 0&&(r.fontSize=e.fontSize),e.lineHeight!==void 0&&(r.lineHeight=ga(e.lineHeight,e.fontSize)),e.letterSpacing!==void 0&&(r.letterSpacing=_a(e.letterSpacing,e.fontSize)),e.strokeWeight!==void 0&&n.strokes.length>0&&(r.strokes=n.strokes.map(t=>({...t,weight:e.strokeWeight})));let i=$n(e.derivedTextData,t);return i.length>0&&(r.derivedTextGlyphs=i),r}function Lp(e,t,n,r){let i=Ip(n,e.blobs,r),a={};if(n.size&&(i.width=n.size.x,i.height=n.size.y,a.width=n.size.x,a.height=n.size.y),n.transform){let e=Ua({transform:n.transform,size:n.size??{x:r.width,y:r.height}});i.x=e.x,i.y=e.y,i.rotation=e.rotation,i.flipX=e.flipX,i.flipY=e.flipY,a.x=e.x,a.y=e.y}else if(n.size){let o=Fp(r,n.size.x,n.size.y)??Pp(e,t,r);o&&(i.x=o.x,i.y=o.y,a.x=o.x,a.y=o.y)}return Object.keys(a).length>0&&(i.derivedLayout=a),Object.assign(i,Mp(n,r,e.blobs)),{updates:i,hasSize:n.size!==void 0}}function*Rp(e,t){if(!t){yield*e.getAllNodes();return}for(let n of t){let t=e.getNode(n);t&&(yield t)}}function zp(e,t,n={}){return{...ot(e),componentId:t,derivedLayout:e.derivedLayout?{...e.derivedLayout}:null,...n}}var Bp=new WeakSet,Vp=new WeakMap;function Hp(e){let t=Vp.get(e);return t||(t=new Map([...e].map(([e,t])=>[e,new Set(t)])),Vp.set(e,t)),t}function Up(e,t,n){if(Bp.has(t))return;let r=Hp(t);for(let i of Rp(e,n)){if(!i.componentId)continue;let e=r.get(i.componentId);e||(e=new Set,r.set(i.componentId,e),t.set(i.componentId,[])),!e.has(i.id)&&(e.add(i.id),t.get(i.componentId)?.push(i.id))}Bp.add(t)}function Wp(e,t,n){let r=Hp(n);for(let i of t){let t=e.getNode(i);if(!t?.componentId)continue;let a=r.get(t.componentId);if(a||(a=new Set,r.set(t.componentId,a)),a.has(t.id))continue;a.add(t.id);let o=n.get(t.componentId);o?o.push(t.id):n.set(t.componentId,[t.id])}}function Gp(e,t,n){let r=[],i=[t],a=0;for(;a<i.length;){let t=e.getNode(i[a]);a++,t&&(r.push(t.id),i.push(...t.childIds))}Wp(e,r,n)}function Kp(e,t){let n=[],r=e.getNode(t);if(!r)return n;let i=(t,r)=>{let a=e.getNode(t);a&&(n.push({id:a.id,path:r,type:a.type}),a.childIds.forEach((e,t)=>i(e,[...r,t])))};return r.childIds.forEach((e,t)=>i(e,[t])),n}function qp(e,t,n){let r=e.getNode(t);if(!r)return null;for(let t of n){let n=r.childIds[t];if(!n||(r=e.getNode(n),!r))return null}return r}function Jp(e,t,n,r){return new Set([...r?.get(t)??[],...r?.get(n)??[],...e.instanceIndex.get(t)??[],...e.instanceIndex.get(n)??[]])}function Yp(e,t,n){if(!e)return;let r=Hp(e),i=r.get(t);if(i||(i=new Set,r.set(t,i)),i.has(n))return;i.add(n);let a=e.get(t);a||(a=[],e.set(t,a)),a.push(n)}function Xp(e,t,n,r,i){r&&Up(e,r,i);for(let i of n){let n=qp(e,t,i.path);if(!n||n.type!==i.type)continue;let a=Jp(e,i.id,n.id,r);for(let t of a){let a=e.getNode(t);a?.componentId!==i.id&&a?.componentId!==n.id||(e.updateNode(t,zp(n,n.id)),Yp(r,n.id,t))}}}var Zp=20,Qp=new WeakMap,$p=new WeakMap,em=new WeakMap,tm=new WeakMap,nm=new WeakMap,rm=new WeakMap;function im(e){function t(n,r=0){let i=e.preComputedRoot.get(n);if(i!==void 0)return i;if(r>Zp)return n;let a=e.graph.getNode(n);if(a?.componentId&&a.componentId!==n){let i=t(a.componentId,r+1);return e.preComputedRoot.set(n,i),i}return e.preComputedRoot.set(n,n),n}for(let n of Rp(e.graph,e.activeNodeIds)){if(!n.componentId)continue;t(n.id);let r=e.preComputedClones.get(n.componentId);r?r.push(n.id):e.preComputedClones.set(n.componentId,[n.id])}}function am(e,t,n=0){let r=e.componentIdRoot.get(t);if(r!==void 0)return r;if(n>Zp)return e.componentIdRoot.set(t,t),t;let i=e.graph.getNode(t);if(i?.componentId){let r=am(e,i.componentId,n+1);return e.componentIdRoot.set(t,r),r}let a=e.nodeIdToGuid.get(t);if(a){let r=e.changeMap.get(a)?.symbolData?.symbolID;if(r){let i=e.guidToNodeId.get(U(r));if(i&&i!==t){let r=am(e,i,n+1);return e.componentIdRoot.set(t,r),r}}}return e.componentIdRoot.set(t,t),t}function om(e){let t=new Map;for(let[n,r]of e.changeMap){let e=r.parentIndex?.guid?U(r.parentIndex.guid):null,i=r.symbolData?.symbolID?U(r.symbolData.symbolID):null;if(!e||!i)continue;let a=`${e}\0${i}`,o=t.get(a);o?o.push(n):t.set(a,[n])}for(let n of t.values())n.sort((t,n)=>{let r=e.changeMap.get(t),i=e.changeMap.get(n);return(r?.transform?.m12??0)-(i?.transform?.m12??0)||(r?.transform?.m02??0)-(i?.transform?.m02??0)});return t}function sm(e){let t=$p.get(e);if(t)return t;let n=om(e);return $p.set(e,n),n}function cm(e,t){let n=Qp.get(e);if(n||(n=new Map,Qp.set(e,n)),n.has(t))return n.get(t)??null;let r=e.changeMap.get(t),i=r?.parentIndex?.guid?U(r.parentIndex.guid):null,a=r?.symbolData?.symbolID?U(r.symbolData.symbolID):null;if(!r||!i||!a)return n.set(t,null),null;let o=(sm(e).get(`${i}\0${a}`)??[]).indexOf(t),s=o===-1?null:o;return n.set(t,s),s}function lm(e,t,n){let r=nm.get(e);r||(r=new Map,nm.set(e,r));let i=`${t}\0${n}`;if(r.has(i))return r.get(i)??null;let a=(t,r)=>{let i=e.graph.getNode(t);if(!i)return null;if(t===n||i.componentId===n)return r;for(let e=0;e<i.childIds.length;e++){let t=a(i.childIds[e],[...r,e]);if(t)return t}return null},o=a(t,[]);return r.set(i,o),o}function um(e,t,n){let r=e.graph.getNode(t);if(!r?.componentId)return null;let i=lm(e,r.componentId,n);if(!i)return null;let a=r;for(let t of i){let n=a.childIds[t];if(!n)return null;let r=e.graph.getNode(n);if(!r)return null;a=r}return a.id}function dm(e,t,n,r){if(!n||!r)return null;let i=null,a=0,o=t=>{if(a>1)return;let s=e.graph.getNode(t);if(s){s.name===n&&s.type===r&&(a++,i=t);for(let e of s.childIds)o(e)}};return o(t),a===1?i:null}function fm(e,t,n,r){let i=cm(e,r);if(i==null)return null;let a=e.preComputedRoot.get(n)??am(e,n),o=em.get(e);o||(o=new Map,em.set(e,o));let s=`${t}\0${a}`,c=o.get(s);if(!c){c=[];let n=t=>{let r=e.graph.getNode(t);if(r){r.componentId&&(e.preComputedRoot.get(r.componentId)??am(e,r.componentId))===a&&c?.push(t);for(let e of r.childIds)n(e)}};n(t),c.sort((t,n)=>{let r=e.graph.getNode(t),i=e.graph.getNode(n);return(r?.y??0)-(i?.y??0)||(r?.x??0)-(i?.x??0)}),o.set(s,c)}return c[i]??null}function pm(e,t,n){let r=tm.get(e);r||(r=new Map,tm.set(e,r));let i=`${t}\0${n}`;if(r.has(i))return r.get(i)??null;let a=e.graph.getNode(t);if(!a)return null;for(let t of a.childIds)if(e.graph.getNode(t)?.componentId===n)return r.set(i,t),t;let o=e.preComputedRoot.get(n)??am(e,n);if(o){let t=null,n=!1;for(let r of a.childIds){let i=e.graph.getNode(r);if(i?.componentId&&(e.preComputedRoot.get(i.componentId)??am(e,i.componentId))===o){if(t){n=!0;break}t=r}}if(t&&!n)return r.set(i,t),t}for(let t of a.childIds){let a=pm(e,t,n);if(a)return r.set(i,a),a}return null}function mm(e,t,n,r,i){return r?e.graph.getNode(t)?.componentId===r?t:um(e,t,r)??pm(e,t,r)??fm(e,t,r,n)??dm(e,t,i?.name,i?.type):dm(e,t,i?.name,i?.type)}function hm(e,t,n){let r=rm.get(e);r||(r=new Map,rm.set(e,r));let i=t,a=[];for(let o=0;o<n.length;o++){let s=U(n[o]);a.push(s);let c=`${t}\0${a.join(`/`)}`,l=r.get(c);if(l&&e.graph.getNode(l)){i=l;continue}l&&r.delete(c);let u=e.overrideKeyToGuid.get(s)??s,d=e.changeMap.get(u),f=d?.symbolData?.symbolID?U(d.symbolData.symbolID):null,p=e.guidToNodeId.get(u)??(f?e.guidToNodeId.get(f):void 0),m=mm(e,i,u,p,d);if(m){i=m,r.set(c,m);continue}let h=e.graph.getNode(i);if(h?.childIds.length===1){i=h.childIds[0],o--,a.pop();continue}return null}return i}function gm(e,t){let n=[],r=t=>{let i=e.graph.getNode(t);if(i){i.strokes.length>0&&n.push(Qe(i.strokes));for(let e of i.childIds)r(e)}};return r(t),n}function _m(e,t,n){let r=0,i=t=>{let a=e.graph.getNode(t);if(a){a.strokes.length>0&&(r<n.length&&e.graph.preserveSourceMetadataDuring(()=>{e.graph.updateNode(t,{strokes:Qe(n[r])})}),r++);for(let e of a.childIds)i(e)}};i(t)}function vm(e,t){if(!t)return``;let n=t.parentId?e.graph.getNode(t.parentId):void 0;return n?.type===`COMPONENT_SET`?n.name:t.name}function ym(e,t){let n=ot(t);n.width=e.width,n.height=e.height,n.boundVariables={...n.boundVariables};for(let t of[`width`,`height`]){let r=e.boundVariables[t];r&&(n.boundVariables[t]=r)}return n}function bm(e,t,n){let r=e.graph.getNode(t);if(r?.type!==`INSTANCE`)return;let i=gm(e,t),a=Kp(e.graph,t),o=r.componentId?am(e,r.componentId):void 0,s=o?e.graph.getNode(o):void 0;for(let t of Array.from(r.childIds))e.graph.deleteNode(t);let c=e.graph.getNode(n),l=c?{...ym(r,c),componentId:n}:{componentId:n},u=vm(e,s),d=vm(e,c);d&&u&&(r.name===u||r.name===s?.name)&&(l.name=d),e.graph.preserveSourceMetadataDuring(()=>e.graph.updateNode(t,l)),c&&c.childIds.length>0&&(e.graph.populateInstanceChildren(t,n,`fig-import`),Gp(e.graph,t,e.preComputedClones),_m(e,t,i)),Xp(e.graph,t,a,e.preComputedClones,e.activeNodeIds),e.swappedInstances.add(t),e.componentIdRoot.clear(),em.delete(e),tm.delete(e)}var xm={text:`text`,visible:`visible`,opacity:`opacity`,fills:`fills`,strokes:`strokes`,effects:`effects`,styleRuns:`styleRuns`,layoutGrow:`layoutGrow`,textAutoResize:`textAutoResize`,locked:`locked`,x:`x`,y:`y`,width:`width`,height:`height`,derivedLayout:`derivedLayout`,fontSize:`fontSize`,lineHeight:`lineHeight`,letterSpacing:`letterSpacing`,fillGeometry:`fillGeometry`,strokeGeometry:`strokeGeometry`};function Sm(e,t,n){let r=e.get(t);r?r.add(n):e.set(t,new Set([n]))}function Cm(e,t,n){for(let r of Object.keys(n)){let n=xm[r];n&&Sm(e,t,n)}}function wm(e,t,n){return e?.get(t)?.has(n)===!0}function Tm(e,t){t.strokes&&=t.strokes.map((t,n)=>{if(n>=e.strokes.length)return{...t,cap:e.strokeCap,join:e.strokeJoin,dashPattern:e.dashPattern};let r=e.strokes[n];return{...t,cap:r.cap,join:r.join,dashPattern:r.dashPattern}})}function Em(e,t){let n=!1;if(t.swapComponentId&&(bm(e,t.targetId,t.swapComponentId),Sm(e.protectedFields,t.targetId,`structure`),n=!0),t.props&&Object.keys(t.props).length>0){let r=e.graph.getNode(t.targetId);if(r){let i=t.props;i.boundVariables&&={...r.boundVariables,...i.boundVariables},Tm(r,i),e.graph.preserveSourceMetadataDuring(()=>e.graph.updateNode(t.targetId,i)),Cm(e.protectedFields,t.targetId,i),n=!0}}return n}function Dm(e,t,n){return!wm(e,t,n)}function Om(e,t,n){switch(e){case`text`:n.text=t.text;break;case`visible`:n.visible=t.visible;break;case`opacity`:n.opacity=t.opacity;break;case`locked`:n.locked=t.locked;break;case`layoutGrow`:n.layoutGrow=t.layoutGrow;break;case`textAutoResize`:n.textAutoResize=t.textAutoResize;break}}function km(e,t){return(n,r,i,a)=>{n[e]!==r[e]&&Dm(a,r.id,t)&&Om(e,n,i)}}var Am=[km(`text`,`text`),km(`visible`,`visible`),km(`opacity`,`opacity`),km(`locked`,`locked`),km(`layoutGrow`,`layoutGrow`),km(`textAutoResize`,`textAutoResize`)];function jm(e,t,n){switch(e){case`fills`:n.fills=Ne(t.fills,et(t.fills));break;case`strokes`:n.strokes=Ne(t.strokes,Qe(t.strokes));break;case`effects`:n.effects=Ne(t.effects,nt(t.effects));break;case`styleRuns`:n.styleRuns=Ne(t.styleRuns,ct(t.styleRuns));break}}function Mm(e,t,n,r){let i=`${e}/`,a=r.boundVariables??n.boundVariables,o=Et(a,Object.keys(a).filter(e=>e.startsWith(i)));for(let[e,n]of Object.entries(t.boundVariables))e.startsWith(i)&&(o[e]=n);r.boundVariables=o}function Nm(e,t){return(n,r,i,a)=>{!Ge(n[e],r[e])&&Dm(a,r.id,t)&&(jm(e,n,i),(e===`fills`||e===`strokes`)&&Mm(e,n,r,i))}}var Pm=[Nm(`fills`,`fills`),Nm(`strokes`,`strokes`),Nm(`effects`,`effects`),Nm(`styleRuns`,`styleRuns`)];function Fm(e,t,n,r){let i=t.boundVariables[e];if(n.boundVariables[e]===i)return;let a={...r.boundVariables??n.boundVariables};i&&(a[e]=i),r.boundVariables=i?a:Et(a,[e])}function Im(e,t,n,r){for(let i of Am)i(e,t,n,r);for(let i of Pm)i(e,t,n,r);Fm(`opacity`,e,t,n)}function Lm(e,t,n,r){let i={};Im(t,n,i,r),Object.keys(i).length>0&&e.updateNode(n.id,i)}function Rm(e,t,n,r,i,a,o){let s=e.getNode(t);if(!s)return;let c=a??Bm(e,o),l=Kp(e,n.id);for(let t of Array.from(n.childIds))e.deleteNode(t);e.updateNode(n.id,zp(s,s.componentId,{name:s.name})),Lm(e,s,n,i),s.childIds.length>0&&(e.populateInstanceChildren(n.id,t,`fig-import`),Gp(e,n.id,c)),Xp(e,n.id,l,c,o),r.add(n.id)}function zm(e,t,n,r,i,a,o,s){let c=e.getNode(t),l=e.getNode(n);if(!c||!l)return;let u=o??Bm(e,s),d=Math.min(c.childIds.length,l.childIds.length);for(let t=0;t<d;t++){if(i?.has(l.childIds[t]))continue;let n=e.getNode(c.childIds[t]),o=e.getNode(l.childIds[t]);if(!(!n||!o||n.type!==o.type)){if(n.type===`INSTANCE`&&n.componentId!==o.componentId){Rm(e,c.childIds[t],o,r,a,u,s);continue}Lm(e,n,o,a),zm(e,c.childIds[t],l.childIds[t],r,i,a,u,s)}}}function Bm(e,t){let n=new Map;for(let r of Rp(e,t)){if(!r.componentId)continue;let e=n.get(r.componentId);e||(e=[],n.set(r.componentId,e)),e.push(r.id)}return n}function Vm(e,t){let n=new Set(t);for(let r of t){let t=e.getNode(r);for(;t?.parentId;){let r=e.getNode(t.parentId);if(!r)break;(r.type===`INSTANCE`||r.type===`COMPONENT`)&&n.add(r.id),t=r}}return n}function Hm(e,t){let n=new Set,r=[...e];for(let e=r.pop();e!==void 0;e=r.pop()){let i=t.get(e);if(i)for(let e of i)n.has(e)||(n.add(e),r.push(e))}return n}function Um(e,t){if(!t)return e;let n=new Map;for(let r of[t,e])for(let[e,t]of r){let r=n.get(e);if(r)for(let e of t)r.includes(e)||r.push(e);else n.set(e,[...t])}return n}function Wm(e,t,n,r,i){if(t.size===0)return;let a=Um(Bm(e,n),i),o=new Set(t),s=[...t].map(e=>({lineageId:e,sourceId:e})),c=0;for(;c<s.length;){let{lineageId:t,sourceId:n}=s[c];c++;let i=e.getNode(n);if(i)for(let c of a.get(t)??[]){if(o.has(c))continue;o.add(c);let t=e.getNode(c);t&&Lm(e,i,t,r),s.push({lineageId:c,sourceId:t?.id??n})}}}function Gm(e,t,n,r,i,a,o){if(t.size===0)return;r.clear();let s=Bm(e,a),c=Vm(e,t),l=Hm(c,s),u=i&&i.size>0?new Set([...t,...i]):t,d=new Set,f=[...c],p=0;for(;p<f.length;){let t=f[p];p++;let r=s.get(t);if(!r)continue;let i=e.getNode(t);if(i)for(let c of r){if(!l.has(c)||d.has(c))continue;d.add(c);let r=e.getNode(c);if(r){if(u.has(c)){i.type===`TEXT`&&r.type===`TEXT`&&!wm(o,r.id,`text`)&&e.updateNode(r.id,{text:i.text}),f.push(c);continue}if(Lm(e,i,r,o),i.childIds.length!==r.childIds.length){let n=Kp(e,r.id);for(let t of Array.from(r.childIds))e.deleteNode(t);i.childIds.length>0&&(e.populateInstanceChildren(r.id,t,`fig-import`),Gp(e,r.id,s)),Xp(e,r.id,n,s,a)}else i.childIds.length>0&&r.childIds.length>0&&zm(e,t,r.id,n,u,o,s,a);f.push(c)}}}}function Km(e,t){if(t.type!==`INSTANCE`||!e.derivedLayout)return{};let n=e.derivedLayout,r={derivedLayout:{...n,...t.derivedLayout,x:n.x??t.derivedLayout?.x,y:n.y??t.derivedLayout?.y}};return n.x!==void 0&&(r.x=n.x),n.y!==void 0&&(r.y=n.y),r}function qm(e,t,n,r,i){let a={};return i.has(r)?Km(t,n):(t.width!==n.width&&(a.width=t.width),t.height!==n.height&&(a.height=t.height),t.x!==n.x&&(a.x=t.x),t.y!==n.y&&(a.y=t.y),e.geometryOverrideNodes.has(r)||(t.fillGeometry!==n.fillGeometry&&(a.fillGeometry=Ze(t.fillGeometry)),t.strokeGeometry!==n.strokeGeometry&&(a.strokeGeometry=Ze(t.strokeGeometry))),t.text===n.text&&t.derivedTextGlyphs&&(a.derivedTextGlyphs=structuredClone(t.derivedTextGlyphs)),t.text===n.text&&t.derivedLayout&&(a.derivedLayout={...t.derivedLayout}),a)}function Jm(e,t){Ym(e,t),Qm(e)}function Ym(e,t){for(let n of t){let t=e.graph.getNode(n);if(t?.layoutMode!==`NONE`||t.childIds.length!==1)continue;let r=e.graph.getNode(t.childIds[0]);if(!r||r.childIds.length>0||r.horizontalConstraint!==`SCALE`||r.verticalConstraint!==`SCALE`)continue;let i=r.derivedLayout?.width,a=r.derivedLayout?.height,o=i!==void 0&&a!==void 0,s=!o&&r.type===`ROUNDED_RECTANGLE`&&r.fills.some(e=>e.type===`IMAGE`);if(!o&&!s)continue;let c=i??t.width,l=a??t.height;r.width===c&&r.height===l||e.graph.updateNode(r.id,{width:c,height:l})}}function Xm(e,t){return e.counterAxisAlign===`CENTER`?e.layoutMode===`HORIZONTAL`?t.height<=1&&t.width>t.height:e.layoutMode===`VERTICAL`&&t.width<=1&&t.height>t.width:!1}function Zm(e,t){if(t.source.format!==null||!t.componentId||!t.name.endsWith(`Divider`)||!t.parentId||t.derivedLayout?.x!==void 0||t.derivedLayout?.y!==void 0)return null;let n=e.getNode(t.parentId),r=e.getNode(t.componentId),i=r?.derivedLayout;return!n||!r||i?.x===void 0||i.y===void 0||t.width!==r.width||t.height!==r.height||!Xm(n,t)?null:n.layoutMode===`HORIZONTAL`?{axis:`y`,position:i.y}:{axis:`x`,position:i.x}}function Qm(e){for(let t of Rp(e.graph,e.activeNodeIds)){let n=Zm(e.graph,t);n&&e.graph.updateNode(t.id,{derivedLayout:{...t.derivedLayout,[n.axis]:n.position}})}}function $m(e){for(let t of Rp(e.graph,e.activeNodeIds)){if(t.source.format===`fig`||!t.derivedLayout||!t.parentId||t.layoutPositioning===`ABSOLUTE`)continue;let n=e.graph.getNode(t.parentId);if(!n||n.source.format===`fig`||n.layoutMode!==`NONE`||!n.derivedLayout)continue;let r={};t.horizontalConstraint===`STRETCH`&&t.derivedLayout.width!==void 0&&t.derivedLayout.width===n.derivedLayout.width&&(r.width=t.derivedLayout.width),t.verticalConstraint===`STRETCH`&&t.derivedLayout.height!==void 0&&t.derivedLayout.height===n.derivedLayout.height&&(r.height=t.derivedLayout.height),Object.keys(r).length>0&&e.graph.updateNode(t.id,r)}}function eh(e,t,n){if(t.size===0)return;let r=Bm(e.graph,e.activeNodeIds),i=[...t],a=new Set,o=0;for(;o<i.length;){let t=i[o];o++;let s=e.graph.getNode(t);if(!s)continue;let c=r.get(t);if(c)for(let t of c){if(a.has(t))continue;a.add(t);let r=e.graph.getNode(t);if(!r)continue;let o=qm(e,s,r,t,n);Object.keys(o).length>0&&e.graph.preserveSourceMetadataDuring(()=>e.graph.updateNode(t,o)),i.push(t)}}}function th(e){let t=new Map;for(let[n,r]of e.graph.instanceIndex)for(let i of r){if(e.activeNodeIds&&!e.activeNodeIds.has(i)||e.graph.getNode(i)?.type!==`INSTANCE`)continue;let r=t.get(n);r?r.push(i):t.set(n,[i])}return t}function nh(e,t,n){let r=n.get(e);if(r)return r;let i=[],a=new Set,o=e=>{if(!a.has(e)){a.add(e),i.push(e);for(let n of t.get(e)??[])o(n)}};return o(e),n.set(e,i),i}function rh(e){return e.toLowerCase().replace(/[^a-z0-9]/g,``)}function ih(e){let[t,n]=e.split(`:`).map(Number);return{sessionID:t,localID:n}}function ah(e){return typeof e.textValue==`string`?e.textValue:e.textValue?.characters??e.textDataValue?.characters}function oh(e){return!e||e.boolValue===void 0&&e.textValue===void 0&&e.textDataValue===void 0&&e.guidValue===void 0}function sh(e,t,n,r){let i=t.value;if(i&&!oh(i))return i;let a=t.varValue?.value;return a?.symbolIdValue?.guid?{guidValue:a.symbolIdValue.guid}:a?.boolValue===void 0?a?.textValue===void 0?a?.textDataValue===void 0?r?e.propDefaults.get(n)??t.value:t.value:{textDataValue:a.textDataValue}:{textValue:a.textValue}:{boolValue:a.boolValue}}function ch(e,t,n=!1){let r=new Map;for(let i of t){if(!i.defID)continue;let t=U(i.defID),a=sh(e,i,t,n);a&&r.set(t,a)}return r}function lh(e,t,n,r){Em(e,n)&&r?.add(t)}function uh(e,t,n,r){n.boolValue!==void 0&&lh(e,t,{targetId:t,source:`component-prop`,props:{visible:n.boolValue}},r)}function dh(e,t,n,r){let i=e.graph.getNode(t),a=ah(n);if(a===void 0||i?.type!==`TEXT`)return;let o=i.componentId?e.graph.getNode(i.componentId):null,s={text:a};o?.type===`TEXT`&&o.text===a&&(s.width=o.width,s.height=o.height,s.fills=et(o.fills),s.styleRuns=ct(o.styleRuns),s.derivedTextGlyphs=o.derivedTextGlyphs?structuredClone(o.derivedTextGlyphs):void 0),lh(e,t,{targetId:t,source:`component-prop`,props:s},r)}function fh(e,t,n,r){let i=ah(n)??(n.guidValue?U(n.guidValue):void 0),a=i?e.guidToNodeId.get(i):void 0;if(!a)return;let o=e.graph.getNode(t)?.componentId;o&&am(e,o)===am(e,a)||lh(e,t,{targetId:t,source:`component-prop`,swapComponentId:am(e,a)},r)}function ph(e,t,n,r,i){switch(n.componentPropNodeField){case`VISIBLE`:uh(e,t,r,i);break;case`TEXT_DATA`:dh(e,t,r,i);break;case`OVERRIDDEN_SYMBOL_ID`:fh(e,t,r,i);break}}function mh(e,t,n){let r=t;for(let t=0;r&&t<10;t++){let t=e.graph.getNode(r),i=t?.overrideKey?e.overrideKeyToGuid.get(t.overrideKey)??t.overrideKey:void 0,a=e.nodeIdToGuid.get(r)??i;if(a){let e=n.get(a);if(e)return e}let o=t?.componentId??void 0;if(o===r)break;r=o}}function hh(e,t,n){let r=rh(t),i=[];for(let t of n.keys()){let n=e.propNames.get(t);n&&rh(n)===r&&i.push({defID:ih(t),componentPropNodeField:`VISIBLE`})}return i.length>0?i:void 0}function gh(e,t){return e.defID?t.get(U(e.defID)):void 0}function _h(e,t,n,r,i){if(n)for(let a of n){let n=gh(a,r);n&&ph(e,t,a,n,i)}}function vh(e,t,n,r){if(!t)return;let i=e.graph.getNode(t);if(!i)return;let a;for(let t of i.childIds){let i=e.graph.getNode(t);if(i){if(i.id===n.componentId||i.componentId&&i.componentId===n.componentId)return mh(e,i.id,r)??[];!a&&i.name===n.name&&i.type===n.type&&(a=i.id)}}return a?mh(e,a,r):void 0}function yh(e,t,n,r,i){let a=e.graph.getNode(t);if(a)for(let t of a.childIds){let o=e.graph.getNode(t);if(!o?.componentId){yh(e,t,n,r,i);continue}_h(e,t,vh(e,a.componentId,o,r)??mh(e,o.componentId,r)??hh(e,o.name,n),n,i),yh(e,t,n,r,i)}}function bh(e,t,n,r){for(let[i,a]of t){let t=e.guidToNodeId.get(i);!t||e.activeNodeIds&&!e.activeNodeIds.has(t)||e.graph.getNode(t)?.type===`INSTANCE`&&yh(e,t,ch(e,a),n,r)}}function xh(e,t,n){let r=th(e),i=new Map;for(let[a,o]of e.changeMap){let s=e.guidToNodeId.get(a);if(!s||e.activeNodeIds&&!e.activeNodeIds.has(s)||e.graph.getNode(s)?.type!==`INSTANCE`)continue;let c=o.symbolData?.symbolOverrides;if(c)for(let a of c){if(!a.componentPropAssignments?.length)continue;let o=a.guidPath?.guids;if(!o?.length)continue;let c=ch(e,a.componentPropAssignments,!0);for(let a of nh(s,r,i)){let r=hm(e,a,o);r&&yh(e,r,c,t,n)}}}}function Sh(e){if(e.componentPropRefsMap)return e.componentPropRefsMap;let t=new Map;for(let[n,r]of e.changeMap)r.componentPropRefs?.length&&t.set(n,r.componentPropRefs);return e.componentPropRefsMap=t,t}function Ch(e){if(e.componentPropAssignmentsMap)return e.componentPropAssignmentsMap;let t=new Map;for(let[n,r]of e.changeMap)r.componentPropAssignments?.length&&t.set(n,r.componentPropAssignments);return e.componentPropAssignmentsMap=t,t}function wh(e){let t=new Set,n=Sh(e);return n.size===0?t:(bh(e,Ch(e),n,t),xh(e,n,t),t)}var Th=new Set([`FRAME`,`COMPONENT`,`COMPONENT_SET`,`INSTANCE`,`GROUP`,`BOOLEAN_OPERATION`]);function Eh(e,t,n,r,i){let a=r-n;if(i===`MAX`)return{position:e+a,size:t};if(i===`CENTER`)return{position:e+a/2,size:t};if(i===`STRETCH`)return{position:e,size:Math.max(1,t+a)};if(i===`SCALE`&&n>0){let i=r/n;return{position:e*i,size:Math.max(1,t*i)}}return{position:e,size:t}}function Dh(e,t,n,r,i){let a=Eh(e.x,e.width,t.width,n.width,r),o=Eh(e.y,e.height,t.height,n.height,i);return{x:Math.round(a.position),y:Math.round(o.position),width:Math.round(a.size),height:Math.round(o.size)}}function Oh(e,t,n){return Dh(e,t,n,`SCALE`,`SCALE`)}function kh(e,t,n,r,i){if(!e||t<=0||n<=0)return null;let a=r/t,o=i/n;return a===1&&o===1?null:{vertices:e.vertices.map(e=>({...e,x:e.x*a,y:e.y*o})),segments:e.segments.map(e=>({...e,tangentStart:{x:e.tangentStart.x*a,y:e.tangentStart.y*o},tangentEnd:{x:e.tangentEnd.x*a,y:e.tangentEnd.y*o}})),regions:e.regions}}function Ah(e){return{x:e.x,y:e.y,width:e.width,height:e.height,vectorNetwork:e.vectorNetwork?Pe(e.vectorNetwork):null,fillGeometry:Ze(e.fillGeometry),strokeGeometry:Ze(e.strokeGeometry),derivedTextGlyphs:rt(e.derivedTextGlyphs),strokes:Qe(e.strokes),textPathData:e.textPathData?structuredClone(e.textPathData):null,textPathBox:e.textPathBox?{...e.textPathBox}:null}}function jh(e,t,n){return e?.length?e.map(e=>({...e,x:e.x*t,y:e.y*n,scaleX:(e.scaleX??1)*t,scaleY:(e.scaleY??1)*n,commandsBlob:new Uint8Array(e.commandsBlob)})):e}function Mh(e,t,n){if(e.length===0)return e;let r=(Math.abs(t)+Math.abs(n))/2;return e.map(e=>({...lt(e),weight:e.weight*r}))}function Nh(e,t,n,r,i){if(t<=0||n<=0)return{};let a=r/t,o=i/n;if(a===1&&o===1)return{};let s={},c=kh(e.vectorNetwork,t,n,r,i);return c&&(s.vectorNetwork=c),e.fillGeometry.length>0&&(s.fillGeometry=st(e.fillGeometry,a,o)),e.strokeGeometry.length>0&&(s.strokeGeometry=st(e.strokeGeometry,a,o)),e.derivedTextGlyphs?.length&&(s.derivedTextGlyphs=jh(e.derivedTextGlyphs,a,o),e.textPathBox&&(s.textPathBox={x:e.textPathBox.x*a,y:e.textPathBox.y*o,width:e.textPathBox.width*a,height:e.textPathBox.height*o})),e.strokes.length>0&&(s.strokes=Mh(e.strokes,a,o)),s}function Ph(e,t){let n=e.getNode(t);if(!n||!Th.has(n.type))return null;let r=new Map,i=t=>{let n=e.getNode(t);if(n)for(let t of n.childIds){let n=e.getNode(t);n&&(r.set(t,Ah(n)),i(t))}};return i(t),r.size>0?r:null}function Fh(e,t,n,r,i){let a=new Map,o=(t,n,r)=>{let s=e.getNode(t);if(!s)return;let c=s.type===`GROUP`||s.type===`BOOLEAN_OPERATION`;for(let t of s.childIds){let l=i.get(t),u=e.getNode(t);if(!l||!u)continue;if(s.layoutMode!==`NONE`&&u.layoutPositioning!==`ABSOLUTE`){o(t,l,u);continue}let d=c?Oh(l,n,r):Dh(l,n,r,u.horizontalConstraint,u.verticalConstraint),f={...d,...Nh(l,l.width,l.height,d.width,d.height)};a.set(t,f),o(t,l,u.layoutMode===`NONE`?d:u)}};return o(t,n,r),a}var Ih=10;function Lh(e){let{graph:t}=e,n=new Set;for(let r of Rp(t,e.activeNodeIds)){if(r.type!==`INSTANCE`||!r.componentId)continue;let i=t.getNode(r.componentId);if(!i||i.width<=0||i.height<=0)continue;let a=Rh(t,r,i);if(!a||(Wh(e,r,a.basis),r.layoutMode!==`NONE`))continue;let{sx:o,sy:s}=a;if(Math.abs(o-1)<.001&&Math.abs(s-1)<.001)continue;let c=e.nodeIdToGuid.get(r.id),l=c?e.changeMap.get(c)?.strokeWeight:void 0;Zh(t,r,i,o,s,n,e.geometryOverrideNodes,a.useCurrentChildAsSource,l,a.scaleThroughFixedWrappers)}n.size>0&&Qh(e,n)}function Rh(e,t,n){let r=zh(t),i=Gh(e,t,n);if(!r&&!i)return null;let a=i??n;return{basis:a,scaleThroughFixedWrappers:r!==null,sx:t.width/a.width,sy:t.height/a.height,useCurrentChildAsSource:a!==n}}function zh(e){let t=he(e,`targetAspectRatio`);if(!t||typeof t!=`object`||!(`value`in t))return null;let n=t.value;if(!n||typeof n!=`object`||!(`x`in n)||!(`y`in n))return null;let{x:r,y:i}=n;return typeof r!=`number`||typeof i!=`number`||!Number.isFinite(r)||!Number.isFinite(i)||r<=0||i<=0?null:{width:r,height:i}}function Bh(e,t,n){let r=t;for(let t=0;t<Ih&&r?.componentId;t++){if(r.componentId===n)return!0;r=e.getNode(r.componentId)}return!1}function Vh(e,t,n){let r={},i=t.horizontalConstraint===`MAX`||t.horizontalConstraint===`CENTER`,a=t.verticalConstraint===`MAX`||t.verticalConstraint===`CENTER`;return i&&t.derivedLayout?.x===void 0&&!wm(e.protectedFields,t.id,`x`)&&t.x!==n.x&&(r.x=n.x),a&&t.derivedLayout?.y===void 0&&!wm(e.protectedFields,t.id,`y`)&&t.y!==n.y&&(r.y=n.y),r}function Hh(e,t,n){let r={};return t.horizontalConstraint===`STRETCH`&&t.derivedLayout?.width===void 0&&!wm(e.protectedFields,t.id,`width`)&&t.width!==n.width&&(r.width=n.width),t.verticalConstraint===`STRETCH`&&t.derivedLayout?.height===void 0&&!wm(e.protectedFields,t.id,`height`)&&t.height!==n.height&&(r.height=n.height),r}function Uh(e,t,n){return{...Vh(e,t,n),...Hh(e,t,n)}}function Wh(e,t,n){let r=Math.min(t.childIds.length,n.childIds.length);for(let i=0;i<r;i++){let r=e.graph.getNode(t.childIds[i]),a=e.graph.getNode(n.childIds[i]);if(!r||!a||r.layoutPositioning!==`ABSOLUTE`||r.componentId&&!Bh(e.graph,r,a.id))continue;let o=Uh(e,r,Dh(a,n,t,r.horizontalConstraint,r.verticalConstraint));Object.keys(o).length>0&&e.graph.updateNode(r.id,o)}}function Gh(e,t,n){if(t.width!==n.width||t.height!==n.height)return n;let r=n;for(let n=0;n<Ih&&r.type===`INSTANCE`&&r.componentId;n++){let n=e.getNode(r.componentId);if(!n||n.width<=0||n.height<=0)break;if(t.width!==n.width||t.height!==n.height)return n;r=n}return null}function Kh(e,t,n){return e?{vertices:e.vertices.map(e=>({...e,x:e.x*t,y:e.y*n})),segments:e.segments.map(e=>({...e,tangentStart:{x:e.tangentStart.x*t,y:e.tangentStart.y*n},tangentEnd:{x:e.tangentEnd.x*t,y:e.tangentEnd.y*n}})),regions:structuredClone(e.regions)}:null}function qh(e,t,n,r,i){if(e.strokes.length!==t.strokes.length||Math.abs(n-r)>=.001)return;let a=i??1;return t.strokes.map((t,n)=>({...t,weight:e.strokes[n].weight*a}))}function Jh(e,t,n,r){let i={};return!r&&e.fillGeometry.length>0&&(i.fillGeometry=st(e.fillGeometry,t,n)),!r&&e.strokeGeometry.length>0&&(i.strokeGeometry=st(e.strokeGeometry,t,n)),e.vectorNetwork&&(i.vectorNetwork=Kh(e.vectorNetwork,t,n)),i}function Yh(e,t,n){let r=n.get(t.id);if(r)return r;let i={horizontal:!1,vertical:!1};for(let r of e.getChildren(t.id)){let t=Yh(e,r,n);if(i.horizontal||=r.horizontalConstraint===`SCALE`||t.horizontal,i.vertical||=r.verticalConstraint===`SCALE`||t.vertical,i.horizontal&&i.vertical)break}return n.set(t.id,i),i}function Xh(e,t,n,r){let i=Yh(e,t,r);return{horizontal:t.horizontalConstraint===`SCALE`||n&&i.horizontal,vertical:t.verticalConstraint===`SCALE`||n&&i.vertical}}function Zh(e,t,n,r,i,a,o,s=!1,c,l=!1,u=new Map){let d=Math.min(t.childIds.length,n.childIds.length);for(let f=0;f<d;f++){let d=e.getNode(t.childIds[f]),p=e.getNode(n.childIds[f]);if(!d||!p)continue;let m=Xh(e,d,l,u),h=m.horizontal,g=m.vertical;if(!h&&!g)continue;let _={},v=s?d:p;h&&(_.x=v.x*r,_.width=v.width*r),g&&(_.y=v.y*i,_.height=v.height*i);let y=h?r:1,b=g?i:1;Object.assign(_,Jh(v,y,b,o.has(d.id))),_.strokes=qh(v,d,y,b,c),e.updateNode(d.id,_),a.add(d.id),d.childIds.length>0&&p.childIds.length>0&&Zh(e,d,p,h?r:1,g?i:1,a,o,s,c,l,u)}}function Qh(e,t){let{graph:n}=e,r=Bm(n,e.activeNodeIds),i=[...t],a=new Set,o=0;for(;o<i.length;){let t=i[o];o++;let s=n.getNode(t);if(!s)continue;let c=r.get(t);if(c)for(let t of c){if(a.has(t))continue;a.add(t);let r=n.getNode(t);if(!r)continue;let o={};r.width!==s.width&&(o.width=s.width),r.height!==s.height&&(o.height=s.height),r.x!==s.x&&(o.x=s.x),r.y!==s.y&&(o.y=s.y),e.geometryOverrideNodes.has(t)||(s.fillGeometry.length>0&&(o.fillGeometry=Ze(s.fillGeometry)),s.strokeGeometry.length>0&&(o.strokeGeometry=Ze(s.strokeGeometry)),s.vectorNetwork&&(o.vectorNetwork=structuredClone(s.vectorNetwork))),s.strokes.length===r.strokes.length&&(o.strokes=r.strokes.map((e,t)=>({...e,weight:s.strokes[t].weight}))),Object.keys(o).length>0&&n.updateNode(t,o),i.push(t)}}}function $h(e,t,n,r,i,a){let o=r.guidPath?.guids;if(!o?.length)return;let s=hm(e,n,o);if(!s)return;if(s===n){a.add(n);return}let c=e.graph.getNode(s);if(!c)return;let{updates:l,hasSize:u}=Lp(e,t,r,c);(r.fillGeometry?.length||r.strokeGeometry?.length)&&e.geometryOverrideNodes.add(s),Object.keys(l).length!==0&&(Em(e,{targetId:s,source:`derived-symbol-data`,props:l})&&i.add(s),u&&a.add(s))}function eg(e){let t=new Set,n=new Set,r=new Map;for(let[i,a]of e.changeMap){if(a.type!==`INSTANCE`)continue;let o=a.derivedSymbolData;if(!o?.length)continue;let s=e.guidToNodeId.get(i);if(!(!s||e.activeNodeIds&&!e.activeNodeIds.has(s)))for(let i of o)$h(e,r,s,i,t,n)}return{modified:t,sizeSet:n}}function tg(e){let{modified:t,sizeSet:n}=eg(e);eh(e,t,n)}function ng(e,t){let n=new Set,r=[...t],i=0;for(;i<r.length;){let t=r[i];if(i++,n.has(t))continue;n.add(t);let a=e.getNode(t);a&&r.push(...a.childIds)}return n}function rg(e,t){let n=new Set;function r(t){let i=e.getNode(t);if(i?.type!==`INSTANCE`||!i.componentId||i.childIds.length>0||n.has(t))return;n.add(t);let a=e.getNode(i.componentId);if(a){a.type===`INSTANCE`&&a.componentId&&a.childIds.length===0&&r(a.id);for(let t of a.childIds){let n=e.getNode(t);n?.type===`INSTANCE`&&n.componentId&&n.childIds.length===0&&r(t)}a.childIds.length>0&&i.childIds.length===0&&e.populateInstanceChildren(t,i.componentId,`fig-import`)}}if(!t){for(let t of e.nodes.values())t.type===`INSTANCE`&&t.componentId&&t.childIds.length===0&&r(t.id);return}let i=[...t],a=new Set,o=0;for(;o<i.length;){let t=i[o];if(o++,!t||a.has(t))continue;a.add(t),r(t);let n=e.getNode(t);n&&i.push(...n.childIds)}return ng(e,t)}function ig(e,t){if(e.textData!=null){let n=e.textData;n.characters!=null&&(t.text=n.characters);let r=Sa(e);r.length>0&&(t.styleRuns=r)}if(e.fillPaints!=null&&(t.fills=Oi(e.fillPaints)),e.strokePaints!=null&&(t.strokes=ki(e.strokePaints,e.strokeWeight,e.strokeAlign)),e.fillPaints!=null||e.strokePaints!=null){let n=na(e);Object.keys(n).length>0&&(t.boundVariables=n)}e.effects!=null&&(t.effects=Ai(e.effects)),e.visible!=null&&(t.visible=e.visible),e.opacity!=null&&(t.opacity=e.opacity),e.name!=null&&(t.name=e.name),e.locked!=null&&(t.locked=e.locked)}function ag(e,t){if(e.size!=null){let n=e.size;n.x!=null&&(t.width=n.x),n.y!=null&&(t.height=n.y)}e.cornerRadius!=null&&(t.cornerRadius=e.cornerRadius),e.rectangleTopLeftCornerRadius!=null&&(t.topLeftRadius=e.rectangleTopLeftCornerRadius),e.rectangleTopRightCornerRadius!=null&&(t.topRightRadius=e.rectangleTopRightCornerRadius),e.rectangleBottomRightCornerRadius!=null&&(t.bottomRightRadius=e.rectangleBottomRightCornerRadius),e.rectangleBottomLeftCornerRadius!=null&&(t.bottomLeftRadius=e.rectangleBottomLeftCornerRadius),e.rectangleCornerRadiiIndependent!=null&&(t.independentCorners=e.rectangleCornerRadiiIndependent),e.arcData!=null&&(t.arcData=Ha(e.arcData)),e.frameMaskDisabled!=null&&(t.clipsContent=e.frameMaskDisabled===!1)}function og(e,t){e.stackSpacing!=null&&(t.itemSpacing=e.stackSpacing),e.stackPrimarySizing!=null&&(t.primaryAxisSizing=La(e.stackPrimarySizing)),e.stackCounterSizing!=null&&(t.counterAxisSizing=La(e.stackCounterSizing)),e.stackPrimaryAlignItems!=null&&(t.primaryAxisAlign=Ra(e.stackPrimaryAlignItems)),e.stackCounterAlignItems!=null&&(t.counterAxisAlign=za(e.stackCounterAlignItems)),e.stackChildPrimaryGrow!=null&&(t.layoutGrow=e.stackChildPrimaryGrow),e.stackChildAlignSelf!=null&&(t.layoutAlignSelf=Ba(e.stackChildAlignSelf)),e.stackPositioning!=null&&(t.layoutPositioning=e.stackPositioning===`ABSOLUTE`?`ABSOLUTE`:`AUTO`),e.stackVerticalPadding!=null&&(t.paddingTop=e.stackVerticalPadding,e.stackPaddingBottom??(t.paddingBottom=e.stackVerticalPadding)),e.stackHorizontalPadding!=null&&(t.paddingLeft=e.stackHorizontalPadding,e.stackPaddingRight??(t.paddingRight=e.stackHorizontalPadding)),e.stackPaddingBottom!=null&&(t.paddingBottom=e.stackPaddingBottom),e.stackPaddingRight!=null&&(t.paddingRight=e.stackPaddingRight)}function sg(e,t){if(e.strokeWeight!=null&&!e.strokePaints&&t.strokes)for(let n of t.strokes)n.weight=e.strokeWeight;if(e.strokeAlign!=null&&t.strokes){let n=`CENTER`;e.strokeAlign===`INSIDE`?n=`INSIDE`:e.strokeAlign===`OUTSIDE`&&(n=`OUTSIDE`);for(let e of t.strokes)e.align=n}e.borderTopWeight!=null&&(t.borderTopWeight=e.borderTopWeight),e.borderRightWeight!=null&&(t.borderRightWeight=e.borderRightWeight),e.borderBottomWeight!=null&&(t.borderBottomWeight=e.borderBottomWeight),e.borderLeftWeight!=null&&(t.borderLeftWeight=e.borderLeftWeight),e.borderStrokeWeightsIndependent!=null&&(t.independentStrokeWeights=e.borderStrokeWeightsIndependent)}function cg(e,t){if(e.fontName!=null){let n=e.fontName;n.family&&(t.fontFamily=n.family),n.style&&(t.fontWeight=Lt(n.style),t.italic=n.style.toLowerCase().includes(`italic`))}e.fontSize!=null&&(t.fontSize=e.fontSize),e.textAlignHorizontal!=null&&(t.textAlignHorizontal=e.textAlignHorizontal),e.textAutoResize!=null&&(t.textAutoResize=e.textAutoResize),e.lineHeight!=null&&(t.lineHeight=ga(e.lineHeight,e.fontSize)),e.letterSpacing!=null&&(t.letterSpacing=_a(e.letterSpacing,e.fontSize)),e.maxLines!=null&&(t.maxLines=e.maxLines),e.textTruncation!=null&&(t.textTruncation=e.textTruncation===`ENDING`?`ENDING`:`DISABLED`),e.textDecoration!=null&&(t.textDecoration=ha(e.textDecoration))}function lg(e){let t={};return ig(e,t),ag(e,t),og(e,t),sg(e,t),cg(e,t),t}var ug=new Set([`RECTANGLE_TOP_LEFT_CORNER_RADIUS`,`RECTANGLE_TOP_RIGHT_CORNER_RADIUS`,`RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS`,`RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS`]);function dg(e){return e.version?`${e.key}@${e.version}`:e.key}function fg(e,t){if(e.guid)return U(e.guid);let n=e.assetRef;if(n?.key)return t.get(dg(n))??t.get(n.key)}function pg(e,t,n,r=0){if(r>10)return;let i=e.changeMap.get(t)?.variableDataValues?.entries?.[0];if(!i)return;let a=i.variableData.value;if(!a)return;if(typeof a.floatValue==`number`)return a.floatValue;let o=a.alias,s=o?fg(o,n):void 0;return s?pg(e,s,n,r+1):void 0}function mg(e,t,n){let r=t.variableConsumptionMap?.entries;if(!r?.length)return;let i=e.assetRefToGuid;for(let t of r){let r=t.variableField;if(!r||!ug.has(r))continue;let a=t.variableData?.value?.alias,o=a?fg(a,i):void 0,s=o?pg(e,o,i):void 0;if(typeof s!=`number`)continue;let c=Ii[r];c===`topLeftRadius`?n.topLeftRadius=s:c===`topRightRadius`?n.topRightRadius=s:c===`bottomRightRadius`?n.bottomRightRadius=s:c===`bottomLeftRadius`&&(n.bottomLeftRadius=s)}}function hg(e,t,n){let r={targetId:t,source:`symbol-override`};if(n.overriddenSymbolID){let t=U(n.overriddenSymbolID);r.swapComponentId=e.guidToNodeId.get(t)}let i={...n};if(delete i.guidPath,delete i.overriddenSymbolID,delete i.componentPropAssignments,Object.keys(i).length>0){Xc(e.changeMap,i);let t=lg(i);mg(e,i,t),Object.keys(t).length>0&&(r.props=t)}return r.swapComponentId||r.props?r:null}function gg(e,t,n){if(!n?.props)return;let r=Object.fromEntries(Object.entries(n.props).filter(([n])=>!at(e.graph,t,n)));n.props=Object.keys(r).length>0?r:void 0}function _g(e,t){return t!==void 0&&(!e.activeNodeIds||e.activeNodeIds.has(t))}function vg(e,t,n,r){!e||n!==t||!r?.props||(delete r.props.width,delete r.props.height)}function yg(e,t=!1){let n=new Set;e.componentIdRoot.clear();for(let[r,i]of e.changeMap){if(i.type!==`INSTANCE`)continue;let a=i.symbolData?.symbolOverrides;if(!a?.length)continue;let o=e.guidToNodeId.get(r);if(_g(e,o))for(let r of a){let a=r.guidPath?.guids;if(!a?.length)continue;let s=hm(e,o,a);if(!s||s===o&&e.kiwiPropertyNodes.has(o))continue;let c=hg(e,s,r);c&&(gg(e,s,c),vg(i.size!==void 0,o,s,c),t&&(c.swapComponentId=void 0),!(!c.swapComponentId&&!c.props)&&(n.add(s),Em(e,c)))}}return n}function*bg(e,t){for(let[n,r]of t){let t=e.get(n);t&&(yield[r,t])}}function xg(e,t,n){let r=new Set;for(let[i,a]of bg(t,n)){let t=a,n=e.getNode(i);if(!n?.componentId)continue;let o=e.getNode(n.componentId);if(!o)continue;let s=(t.cornerRadius!==void 0||t.rectangleCornerRadiiIndependent!==void 0)&&n.cornerRadius!==o.cornerRadius,c=t.visible===!1&&o.visible,l=t.fillPaints!==void 0&&!Ve(n.fills,o.fills),u=t.strokePaints!==void 0&&!Ve(n.strokes,o.strokes),d=t.textData!==void 0&&n.type===`TEXT`&&o.type===`TEXT`&&n.text!==o.text;(s||c||l||u||d)&&r.add(i)}return r}function Sg(e,t){let n=new Set;for(let[r,i]of bg(e,t))(i.fillGeometry?.length||i.strokeGeometry?.length)&&n.add(r);return n}function Cg(e){let t=[];for(let n of e.getAllNodes())n.componentId&&t.push(n);return t}function wg(e){let t=[];for(let n of e.getAllNodes()){if(n.type!==`INSTANCE`||!n.componentId)continue;let r=e.getNode(n.componentId);if(!(!r||r.childIds.length!==n.childIds.length))for(let e=0;e<n.childIds.length;e++)t.push({sourceChildId:r.childIds[e],childId:n.childIds[e]})}return t}function Tg(e,t,n=Cg(e)){for(let r=0;r<10;r++){let r=!1;for(let i of n){if(!i.componentId)continue;let n=e.getNode(i.componentId);!n||Ve(n.fills,i.fills)||t.has(i.id)&&!t.has(n.id)||at(e,i.id,`fills`)||(e.updateNode(i.id,{fills:et(n.fills)}),r=!0)}if(!r)return}}function Eg(e,t=wg(e)){for(let n=0;n<10;n++){let n=!1;for(let r of t){let t=e.getNode(r.sourceChildId),i=e.getNode(r.childId);if(!t||!i||t.overrideKey&&i.overrideKey&&t.overrideKey!==i.overrideKey)continue;let a={};!t.visible&&i.visible&&(a.visible=!1),t.x!==i.x&&(a.x=t.x),t.y!==i.y&&(a.y=t.y),Object.keys(a).length!==0&&(e.updateNode(i.id,a),n=!0)}if(!n)return}}function Dg(e,t){return e===t?!0:!e||!t?!1:Ge(e,t)}function Og(e,t){let n=[],r=new Set,i=new Set,a=t=>{if(r.has(t.id)||i.has(t.id))return;i.add(t.id);let o=t.componentId?e.getNode(t.componentId):void 0;o?.type===`TEXT`&&a(o),i.delete(t.id),r.add(t.id),t.type===`TEXT`&&t.componentId&&n.push(t)};for(let n of t??e.nodes.keys()){let t=e.getNode(n);t?.type===`TEXT`&&t.componentId&&a(t)}for(let t of n){let n=t.componentId?e.getNode(t.componentId):void 0;n?.type!==`TEXT`||n.text!==t.text||n.width===t.width&&n.height===t.height&&Ve(n.fills,t.fills)&&Ve(n.styleRuns,t.styleRuns)&&Dg(n.derivedTextGlyphs,t.derivedTextGlyphs)||e.updateNode(t.id,{width:n.width,height:n.height,fills:et(n.fills),styleRuns:ct(n.styleRuns),derivedTextGlyphs:n.derivedTextGlyphs?Ne(n.derivedTextGlyphs,structuredClone(n.derivedTextGlyphs)):void 0})}}function kg(e,t,n,r,i){let a=new Map,o=new Map;for(let[e,n]of t)n.overrideKey&&a.set(U(n.overrideKey),e),typeof n.key==`string`&&(o.set(n.key,e),typeof n.version==`string`&&o.set(`${n.key}@${n.version}`,e));let s=new Map,c=new Map;for(let[,e]of t)if(e.componentPropDefs?.length)for(let t of e.componentPropDefs){if(!t.id)continue;let e=U(t.id);t.initialValue&&s.set(e,t.initialValue),t.name&&c.set(e,t.name)}let l=new Map;for(let[e,t]of n)l.set(t,e);let u=xg(e,t,n),d=Sg(t,n);return{graph:e,changeMap:t,guidToNodeId:n,blobs:r,overrideKeyToGuid:a,assetRefToGuid:o,nodeIdToGuid:l,propDefaults:s,propNames:c,preComputedRoot:new Map,preComputedClones:new Map,componentIdRoot:new Map,swappedInstances:new Set,protectedFields:new Map,kiwiPropertyNodes:u,geometryOverrideNodes:d,activeNodeIds:i}}function Ag(e,t){for(let n of Rp(e,t)){let t={};for(let[r,i]of Object.entries(n.boundVariables)){if(Array.isArray(i))continue;let a=e.resolveNumberVariableForNode(n.id,i);a!==void 0&&Object.assign(t,zi(r,a))}Object.keys(t).length>0&&e.updateNode(n.id,t)}}function jg(e,t,n,r=[],i){let a=kg(e,t,n,r,rg(e,i));im(a);let o=yg(a);for(let e of a.kiwiPropertyNodes)o.add(e);Gm(e,o,a.swappedInstances,a.componentIdRoot,void 0,a.activeNodeIds,a.protectedFields);let s=wh(a);if(s.size>0&&Gm(e,s,a.swappedInstances,a.componentIdRoot,o,a.activeNodeIds,a.protectedFields),i){let t=rg(e,i);t&&(a.activeNodeIds=t,Wp(e,t,a.preComputedClones));let n=wh(a),r=new Set([...o,...s,...n]);r.size>0&&Gm(e,r,a.swappedInstances,a.componentIdRoot,o,a.activeNodeIds,a.protectedFields),Eg(e)}tg(a),Tg(e,new Set([...a.kiwiPropertyNodes,...o])),Og(e,a.activeNodeIds),Lh(a);let c=new Set;for(let t of Rp(e,a.activeNodeIds)){if(t.type!==`INSTANCE`||!t.componentId)continue;let n=e.getNode(t.componentId);n&&(t.width!==n.width||t.height!==n.height)&&c.add(t.id)}wh(a),Wm(e,yg(a,!0),a.activeNodeIds,a.protectedFields,a.preComputedClones),Jm(a,c),Ag(e,a.activeNodeIds),$m(a)}function Mg(e){if(!kt(e))throw TypeError(`Invalid Base64 string`);return Mt(e)}function Ng(e){if(!kt(e))throw TypeError(`Invalid Base64 string`);return jt(e)}async function Pg(e){let t=e.match(/\(figmeta\)(.*?)\(\/figmeta\)/),n=e.match(/\(figma\)(.*?)\(\/figma\)/s);if(!t||!n)return null;let r=JSON.parse(Ng(t[1])),i=Mg(n[1]);try{let e=hc(i);if(!e)return null;let t=Ir(zr(new rr(v(e[0]))));if(!t.decodeMessage)return null;let n=await gc(e[1]),a=t.decodeMessage(n),o=(a.blobs??[]).map(e=>e.bytes instanceof Uint8Array?e.bytes:new Uint8Array(Object.values(e.bytes)));return{nodes:a.nodeChanges??[],meta:r,blobs:o}}catch{return null}}var Fg=new Set([`DOCUMENT`,`CANVAS`,`VARIABLE_SET`,`VARIABLE`,`VARIABLE_COLLECTION`,`STYLE`,`STYLE_SET`,`INTERNAL_ONLY_NODE`,`WIDGET`,`STAMP`,`STICKY`,`SHAPE_WITH_TEXT`,`CONNECTOR`,`CODE_BLOCK`,`TABLE_NODE`,`TABLE_CELL`,`SECTION_OVERLAY`,`SLIDE`]);function Ig(e){let t=new Map,n=new Map,r=new Map;for(let i of e){if(!i.guid)continue;let e=`${i.guid.sessionID}:${i.guid.localID}`;if(t.set(e,i),i.parentIndex?.guid){let t=`${i.parentIndex.guid.sessionID}:${i.parentIndex.guid.localID}`;n.set(e,t);let a=r.get(t);a?a.push(e):r.set(t,[e])}}return{guidMap:t,parentMap:n,childMap:r}}function Lg(e,t){let n=new Set;for(let[t,r]of e)r.type===`CANVAS`&&r.internalOnly&&n.add(t);let r=new Set;function i(e){r.add(e);for(let n of t.get(e)??[])r.has(n)||i(n)}for(let e of n)i(e);return{internalCanvasIds:n,internalFigmaIds:r}}function Rg(e,t,n){let r=[],i=[];for(let[a,o]of e){if(Fg.has(o.type??``))continue;let s=t.get(a);(!s||!e.has(s)||Fg.has(e.get(s)?.type??``))&&(s&&n.has(s)?i.push(a):r.push(a))}return{topLevel:r,internalTopLevel:i}}function zg(e,t){for(let[,n]of e){let r=t.getNode(n);if(r?.type!==`INSTANCE`||!r.componentId)continue;let i=e.get(r.componentId);i&&t.updateNode(n,{componentId:i})}}function Bg(e,t){for(let[,n]of e){let e=t.getNode(n);e?.type===`INSTANCE`&&e.childIds.length===0&&(!e.componentId||!t.getNode(e.componentId))&&t.updateNode(n,{type:`FRAME`,componentId:``})}}function Vg(e,t,n,r=0,i=0,a=[]){let{guidMap:o,parentMap:s,childMap:c}=Ig(e),{internalCanvasIds:l,internalFigmaIds:u}=Lg(o,c),{topLevel:d,internalTopLevel:f}=Rg(o,s,l),p=new Map,m=[];function h(e,l){if(p.has(e))return;let d=o.get(e);if(!d)return;let{nodeType:f,...g}=lo(d,a);if(f===`DOCUMENT`||f===`VARIABLE`)return;co(d,o.get(s.get(e)??``))&&(g.textAutoResize=`WIDTH_AND_HEIGHT`),l===n&&(g.x=(g.x??0)+r,g.y=(g.y??0)+i);let _=t.createNode(f,l,g);p.set(e,_.id),l===n&&!u.has(e)&&m.push(_.id);let v=(c.get(e)??[]).filter(e=>!Fg.has(o.get(e)?.type??``));Do(v,d,o);for(let e of v)h(e,_.id)}for(let e of f)h(e,n);for(let e of d)h(e,n);zg(p,t),t.preserveSourceMetadataDuring(()=>{jg(t,o,p,a)});for(let e of f){let n=p.get(e);n&&t.deleteNode(n)}Bg(p,t);let g=new Set;for(let e of p.values())t.getNode(e)?.type===`INSTANCE`&&g.add(e);return g.size>0&&Ns(t,g),m}var Hg=null;async function Ug(){Hg||=Ir(Wr)}function Wg(){if(!Hg)throw Error(`Codec not initialized`);return Hg}function Gg(){return Br(Wr)}function Kg(e,t,n){let r={type:`NODE_CHANGES`,sessionID:0,ackID:0,pasteID:n,pasteFileKey:`openpencil`,nodeChanges:e,blobs:t.map(e=>({bytes:e}))},i=_c(b(Gg()),Wg().encodeMessage(r));return`<meta charset='utf-8'><span data-metadata="<!--(figmeta)${Dt(JSON.stringify({fileKey:`openpencil`,pasteID:n,dataType:`scene`}))}(/figmeta)-->"></span><span data-buffer="<!--(figma)${Ct(i)}(/figma)-->"></span>`}async function qg(e,t,n){let r=new Map;async function i(e=[]){for(let i of e)for(let e of[i.image,i.imageThumbnail,i.animatedImage]){if(!e?.hash)continue;let i=typeof e.hash==`string`?e.hash:mi(e.hash),a=n.get(i);if(!a)continue;let o=r.get(i);if(!o){let e=await crypto.subtle.digest(`SHA-1`,new Uint8Array(a).buffer);o={index:t.length,hash:new Uint8Array(e)},t.push(a),r.set(i,o)}e.hash=o.hash,e.dataBlob=o.index}}async function a(e){await i(e.fillPaints),await i(e.strokePaints),await i(e.backgroundPaints),await i(e.textDecorationFillPaints);for(let t of e.textData?.styleOverrideTable??[])await a(t)}for(let t of e)await a(t)}var Jg=t(n(((t,n)=>{var r=(()=>{var t=typeof document<`u`?document.currentScript?.src:void 0;return typeof __filename<`u`&&(t||=__filename),(async function(n={}){var r,i=n,a,o,s=new Promise((e,t)=>{a=e,o=t}),c=typeof window==`object`,l=typeof WorkerGlobalScope<`u`,u=typeof process==`object`&&typeof process.versions==`object`&&typeof process.versions.node==`string`&&process.type!=`renderer`;(function(e){e.Pd=e.Pd||[],e.Pd.push(function(){e.MakeSWCanvasSurface=function(t){var n=t,r=typeof OffscreenCanvas<`u`&&n instanceof OffscreenCanvas;if(!(typeof HTMLCanvasElement<`u`&&n instanceof HTMLCanvasElement||r||(n=document.getElementById(t),n)))throw`Canvas with id `+t+` was not found`;return(t=e.MakeSurface(n.width,n.height))&&(t.Hd=n),t},e.MakeCanvasSurface||=e.MakeSWCanvasSurface,e.MakeSurface=function(t,n){var r={width:t,height:n,colorType:e.ColorType.RGBA_8888,alphaType:e.AlphaType.Unpremul,colorSpace:e.ColorSpace.SRGB},i=t*n*4,a=e._malloc(i);return(r=e.Surface._makeRasterDirect(r,a,4*t))&&(r.Hd=null,r.tf=t,r.pf=n,r.rf=i,r.Te=a,r.getCanvas().clear(e.TRANSPARENT)),r},e.MakeRasterDirectSurface=function(t,n,r){return e.Surface._makeRasterDirect(t,n.byteOffset,r)},e.Surface.prototype.flush=function(t){if(e.Id(this.Gd),this._flush(),this.Hd){var n=new Uint8ClampedArray(e.HEAPU8.buffer,this.Te,this.rf);n=new ImageData(n,this.tf,this.pf),t?this.Hd.getContext(`2d`).putImageData(n,0,0,t[0],t[1],t[2]-t[0],t[3]-t[1]):this.Hd.getContext(`2d`).putImageData(n,0,0)}},e.Surface.prototype.dispose=function(){this.Te&&e._free(this.Te),this.delete()},e.Id=e.Id||function(){},e.Ne=e.Ne||function(){return null}})})(i),(function(e){e.Pd=e.Pd||[],e.Pd.push(function(){function t(e,t,n){return e&&e.hasOwnProperty(t)?e[t]:n}function n(e){var t=Wt(Ft);return Ft[t]=e,t}function r(e){return e.naturalHeight||e.videoHeight||e.displayHeight||e.height}function i(e){return e.naturalWidth||e.videoWidth||e.displayWidth||e.width}function a(t,n,r,i){return t.bindTexture(t.TEXTURE_2D,n),i||r.alphaType!==e.AlphaType.Premul||t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),n}function o(t,n,r){r||n.alphaType!==e.AlphaType.Premul||t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.bindTexture(t.TEXTURE_2D,null)}e.GetWebGLContext=function(e,n){if(!e)throw`null canvas passed into makeWebGLContext`;var r={alpha:t(n,`alpha`,1),depth:t(n,`depth`,1),stencil:t(n,`stencil`,8),antialias:t(n,`antialias`,0),premultipliedAlpha:t(n,`premultipliedAlpha`,1),preserveDrawingBuffer:t(n,`preserveDrawingBuffer`,0),preferLowPowerToHighPerformance:t(n,`preferLowPowerToHighPerformance`,0),failIfMajorPerformanceCaveat:t(n,`failIfMajorPerformanceCaveat`,0),enableExtensionsByDefault:t(n,`enableExtensionsByDefault`,1),explicitSwapControl:t(n,`explicitSwapControl`,0),renderViaOffscreenBackBuffer:t(n,`renderViaOffscreenBackBuffer`,0)};if(r.majorVersion=n&&n.majorVersion?n.majorVersion:typeof WebGL2RenderingContext<`u`?2:1,r.explicitSwapControl)throw`explicitSwapControl is not supported`;return e=Kt(e,r),e?(Jt(e),B.ce.getExtension(`WEBGL_debug_renderer_info`),e):0},e.deleteContext=function(e){B===Lt[e]&&(B=null),typeof JSEvents==`object`&&JSEvents.bg(Lt[e].ce.canvas),Lt[e]?.ce.canvas&&(Lt[e].ce.canvas.mf=void 0),Lt[e]=null},e._setTextureCleanup({deleteTexture:function(e,t){var n=Ft[t];n&&Lt[e].ce.deleteTexture(n),Ft[t]=null}}),e.MakeWebGLContext=function(t){if(!this.Id(t))return null;var n=this._MakeGrContext();if(!n)return null;n.Gd=t;var r=n.delete.bind(n);return n.delete=function(){e.Id(this.Gd),r()}.bind(n),B.Xe=n},e.MakeGrContext=e.MakeWebGLContext,e.GrDirectContext.prototype.getResourceCacheLimitBytes=function(){e.Id(this.Gd),this._getResourceCacheLimitBytes()},e.GrDirectContext.prototype.getResourceCacheUsageBytes=function(){e.Id(this.Gd),this._getResourceCacheUsageBytes()},e.GrDirectContext.prototype.releaseResourcesAndAbandonContext=function(){e.Id(this.Gd),this._releaseResourcesAndAbandonContext()},e.GrDirectContext.prototype.setResourceCacheLimitBytes=function(t){e.Id(this.Gd),this._setResourceCacheLimitBytes(t)},e.MakeOnScreenGLSurface=function(e,t,n,r,i,a){return!this.Id(e.Gd)||(t=i===void 0||a===void 0?this._MakeOnScreenGLSurface(e,t,n,r):this._MakeOnScreenGLSurface(e,t,n,r,i,a),!t)?null:(t.Gd=e.Gd,t)},e.MakeRenderTarget=function(){var e=arguments[0];if(!this.Id(e.Gd))return null;if(arguments.length===3){var t=this._MakeRenderTargetWH(e,arguments[1],arguments[2]);if(!t)return null}else if(arguments.length===2){if(t=this._MakeRenderTargetII(e,arguments[1]),!t)return null}else return null;return t.Gd=e.Gd,t},e.MakeWebGLCanvasSurface=function(t,n,r){n||=null;var i=t,a=typeof OffscreenCanvas<`u`&&i instanceof OffscreenCanvas;if(!(typeof HTMLCanvasElement<`u`&&i instanceof HTMLCanvasElement||a||(i=document.getElementById(t),i)))throw`Canvas with id `+t+` was not found`;if(t=this.GetWebGLContext(i,r),!t||0>t)throw`failed to create webgl context: err `+t;return t=this.MakeWebGLContext(t),n=this.MakeOnScreenGLSurface(t,i.width,i.height,n),n||(n=i.cloneNode(!0),i.parentNode.replaceChild(n,i),n.classList.add(`ck-replaced`),e.MakeSWCanvasSurface(n))},e.MakeCanvasSurface=e.MakeWebGLCanvasSurface,e.Surface.prototype.makeImageFromTexture=function(t,r){return e.Id(this.Gd),t=n(t),(r=this._makeImageFromTexture(this.Gd,t,r))&&(r.Ee=t),r},e.Surface.prototype.makeImageFromTextureSource=function(t,n,s){n||={height:r(t),width:i(t),colorType:e.ColorType.RGBA_8888,alphaType:s?e.AlphaType.Premul:e.AlphaType.Unpremul},n.colorSpace||=e.ColorSpace.SRGB,e.Id(this.Gd);var c=B.ce;return s=a(c,c.createTexture(),n,s),B.version===2?c.texImage2D(c.TEXTURE_2D,0,c.RGBA,n.width,n.height,0,c.RGBA,c.UNSIGNED_BYTE,t):c.texImage2D(c.TEXTURE_2D,0,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,t),o(c,n),this._resetContext(),this.makeImageFromTexture(s,n)},e.Surface.prototype.updateTextureFromSource=function(t,s,c){if(t.Ee){e.Id(this.Gd);var l=t.getImageInfo(),u=B.ce,d=a(u,Ft[t.Ee],l,c);B.version===2?u.texImage2D(u.TEXTURE_2D,0,u.RGBA,i(s),r(s),0,u.RGBA,u.UNSIGNED_BYTE,s):u.texImage2D(u.TEXTURE_2D,0,u.RGBA,u.RGBA,u.UNSIGNED_BYTE,s),o(u,l,c),this._resetContext(),Ft[t.Ee]=null,t.Ee=n(d),l.colorSpace=t.getColorSpace(),s=this._makeImageFromTexture(this.Gd,t.Ee,l),c=t.Fd.Md,u=t.Fd.Rd,t.Fd.Md=s.Fd.Md,t.Fd.Rd=s.Fd.Rd,s.Fd.Md=c,s.Fd.Rd=u,s.delete(),l.colorSpace.delete()}},e.MakeLazyImageFromTextureSource=function(t,s,c){s||={height:r(t),width:i(t),colorType:e.ColorType.RGBA_8888,alphaType:c?e.AlphaType.Premul:e.AlphaType.Unpremul},s.colorSpace||=e.ColorSpace.SRGB;var l={makeTexture:function(){var e=B,r=e.ce,i=a(r,r.createTexture(),s,c);return e.version===2?r.texImage2D(r.TEXTURE_2D,0,r.RGBA,s.width,s.height,0,r.RGBA,r.UNSIGNED_BYTE,t):r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,t),o(r,s,c),n(i)},freeSrc:function(){}};return t.constructor.name===`VideoFrame`&&(l.freeSrc=function(){t.close()}),e.Image._makeFromGenerator(s,l)},e.Id=function(e){return e?Jt(e):!1},e.Ne=function(){return B&&B.Xe&&!B.Xe.isDeleted()?B.Xe:null}})})(i),(function(e){function t(e,t,n,r,i){for(var a=0;a<e.length;a++)t[a*n+(a*i+r+n)%n]=e[a];return t}function n(e){for(var t=e*e,n=Array(t);t--;)n[t]=+(t%(e+1)===0);return n}function r(e){return e?e.constructor===Float32Array&&e.length===4:!1}function a(e){return(c(255*e[3])<<24|c(255*e[0])<<16|c(255*e[1])<<8|c(255*e[2])<<0)>>>0}function o(e){if(e&&e._ck)return e;if(e instanceof Float32Array){for(var t=Math.floor(e.length/4),n=new Uint32Array(t),r=0;r<t;r++)n[r]=a(e.slice(4*r,4*(r+1)));return n}if(e instanceof Uint32Array)return e;if(e instanceof Array&&e[0]instanceof Float32Array)return e.map(a)}function s(e){if(e===void 0)return 1;var t=parseFloat(e);return e&&e.indexOf(`%`)!==-1?t/100:t}function c(e){return Math.round(Math.max(0,Math.min(e||0,255)))}function l(t,n){n&&n._ck||e._free(t)}function u(t,n,r){if(!t||!t.length)return N;if(t&&t._ck)return t.byteOffset;var i=e[n].BYTES_PER_ELEMENT;return r||=e._malloc(t.length*i),e[n].set(t,r/i),r}function d(t){var n={Zd:N,count:t.length,colorType:e.ColorType.RGBA_F32};if(t instanceof Float32Array)n.Zd=u(t,`HEAPF32`),n.count=t.length/4;else if(t instanceof Uint32Array)n.Zd=u(t,`HEAPU32`),n.colorType=e.ColorType.RGBA_8888;else if(t instanceof Array){if(t&&t.length){for(var r=e._malloc(16*t.length),i=0,a=r/4,o=0;o<t.length;o++)for(var s=0;4>s;s++)e.HEAPF32[a+i]=t[o][s],i++;t=r}else t=N;n.Zd=t}else throw`Invalid argument to copyFlexibleColorArray, Not a color array `+typeof t;return n}function f(t){if(!t)return N;var n=C.toTypedArray();if(t.length){if(t.length===6||t.length===9)return u(t,`HEAPF32`,S),t.length===6&&e.HEAPF32.set(le,6+S/4),S;if(t.length===16)return n[0]=t[0],n[1]=t[1],n[2]=t[3],n[3]=t[4],n[4]=t[5],n[5]=t[7],n[6]=t[12],n[7]=t[13],n[8]=t[15],S;throw`invalid matrix size`}if(t.m11===void 0)throw`invalid matrix argument`;return n[0]=t.m11,n[1]=t.m21,n[2]=t.m41,n[3]=t.m12,n[4]=t.m22,n[5]=t.m42,n[6]=t.m14,n[7]=t.m24,n[8]=t.m44,S}function p(e){if(!e)return N;var t=T.toTypedArray();if(e.length){if(e.length!==16&&e.length!==6&&e.length!==9)throw`invalid matrix size`;return e.length===16?u(e,`HEAPF32`,w):(t.fill(0),t[0]=e[0],t[1]=e[1],t[3]=e[2],t[4]=e[3],t[5]=e[4],t[7]=e[5],t[10]=1,t[12]=e[6],t[13]=e[7],t[15]=e[8],e.length===6&&(t[12]=0,t[13]=0,t[15]=1),w)}if(e.m11===void 0)throw`invalid matrix argument`;return t[0]=e.m11,t[1]=e.m21,t[2]=e.m31,t[3]=e.m41,t[4]=e.m12,t[5]=e.m22,t[6]=e.m32,t[7]=e.m42,t[8]=e.m13,t[9]=e.m23,t[10]=e.m33,t[11]=e.m43,t[12]=e.m14,t[13]=e.m24,t[14]=e.m34,t[15]=e.m44,w}function m(e,t){return u(e,`HEAPF32`,t||E)}function h(e,t,n,r){var i=D.toTypedArray();return i[0]=e,i[1]=t,i[2]=n,i[3]=r,E}function g(t){for(var n=new Float32Array(4),r=0;4>r;r++)n[r]=e.HEAPF32[t/4+r];return n}function _(e,t){return u(e,`HEAPF32`,t||k)}function v(e,t){return u(e,`HEAPF32`,t||oe)}function y(){for(var e=0,t=0;t<arguments.length-1;t+=2)e+=arguments[t]*arguments[t+1];return e}function b(e,t,n){for(var r=Array(e.length),i=0;i<n;i++)for(var a=0;a<n;a++){for(var o=0,s=0;s<n;s++)o+=e[n*i+s]*t[n*s+a];r[i*n+a]=o}return r}function x(e,t){for(var n=b(t[0],t[1],e),r=2;r<t.length;)n=b(n,t[r],e),r++;return n}e.Color=function(t,n,r,i){return i===void 0&&(i=1),e.Color4f(c(t)/255,c(n)/255,c(r)/255,i)},e.ColorAsInt=function(e,t,n,r){return r===void 0&&(r=255),(c(r)<<24|c(e)<<16|c(t)<<8|c(n)<<0&268435455)>>>0},e.Color4f=function(e,t,n,r){return r===void 0&&(r=1),Float32Array.of(e,t,n,r)},Object.defineProperty(e,"TRANSPARENT",{get:function(){return e.Color4f(0,0,0,0)}}),Object.defineProperty(e,"BLACK",{get:function(){return e.Color4f(0,0,0,1)}}),Object.defineProperty(e,"WHITE",{get:function(){return e.Color4f(1,1,1,1)}}),Object.defineProperty(e,"RED",{get:function(){return e.Color4f(1,0,0,1)}}),Object.defineProperty(e,"GREEN",{get:function(){return e.Color4f(0,1,0,1)}}),Object.defineProperty(e,"BLUE",{get:function(){return e.Color4f(0,0,1,1)}}),Object.defineProperty(e,"YELLOW",{get:function(){return e.Color4f(1,1,0,1)}}),Object.defineProperty(e,"CYAN",{get:function(){return e.Color4f(0,1,1,1)}}),Object.defineProperty(e,"MAGENTA",{get:function(){return e.Color4f(1,0,1,1)}}),e.getColorComponents=function(e){return[Math.floor(255*e[0]),Math.floor(255*e[1]),Math.floor(255*e[2]),e[3]]},e.parseColorString=function(t,n){if(t=t.toLowerCase(),t.startsWith(`#`)){switch(n=255,t.length){case 9:n=parseInt(t.slice(7,9),16);case 7:var r=parseInt(t.slice(1,3),16),i=parseInt(t.slice(3,5),16),a=parseInt(t.slice(5,7),16);break;case 5:n=17*parseInt(t.slice(4,5),16);case 4:r=17*parseInt(t.slice(1,2),16),i=17*parseInt(t.slice(2,3),16),a=17*parseInt(t.slice(3,4),16)}return e.Color(r,i,a,n/255)}return t.startsWith(`rgba`)?(t=t.slice(5,-1),t=t.split(`,`),e.Color(+t[0],+t[1],+t[2],s(t[3]))):t.startsWith(`rgb`)?(t=t.slice(4,-1),t=t.split(`,`),e.Color(+t[0],+t[1],+t[2],s(t[3]))):t.startsWith(`gray(`)||t.startsWith(`hsl`)||!n||(t=n[t],t===void 0)?e.BLACK:t},e.multiplyByAlpha=function(e,t){return e=e.slice(),e[3]=Math.max(0,Math.min(e[3]*t,1)),e},e.Malloc=function(t,n){var r=e._malloc(n*t.BYTES_PER_ELEMENT);return{_ck:!0,length:n,byteOffset:r,me:null,subarray:function(e,t){return e=this.toTypedArray().subarray(e,t),e._ck=!0,e},toTypedArray:function(){return this.me&&this.me.length?this.me:(this.me=new t(e.HEAPU8.buffer,r,n),this.me._ck=!0,this.me)}}},e.Free=function(t){e._free(t.byteOffset),t.byteOffset=N,t.toTypedArray=null,t.me=null};var S=N,C,w=N,T,E=N,D,O,k=N,A,j=N,M,ee=N,te,ne=N,re,ie=N,ae,oe=N,se,ce=N,le=Float32Array.of(0,0,1),N=0;e.onRuntimeInitialized=function(){function t(t,n,r,i,a,o,s){o||(o=4*i.width,i.colorType===e.ColorType.RGBA_F16?o*=2:i.colorType===e.ColorType.RGBA_F32&&(o*=4));var c=o*i.height,l=a?a.byteOffset:e._malloc(c);if(s?!t._readPixels(i,l,o,n,r,s):!t._readPixels(i,l,o,n,r))return a||e._free(l),null;if(a)return a.toTypedArray();switch(i.colorType){case e.ColorType.RGBA_8888:case e.ColorType.RGBA_F16:t=new Uint8Array(e.HEAPU8.buffer,l,c).slice();break;case e.ColorType.RGBA_F32:t=new Float32Array(e.HEAPU8.buffer,l,c).slice();break;default:return null}return e._free(l),t}D=e.Malloc(Float32Array,4),E=D.byteOffset,T=e.Malloc(Float32Array,16),w=T.byteOffset,C=e.Malloc(Float32Array,9),S=C.byteOffset,ae=e.Malloc(Float32Array,12),oe=ae.byteOffset,se=e.Malloc(Float32Array,12),ce=se.byteOffset,O=e.Malloc(Float32Array,4),k=O.byteOffset,A=e.Malloc(Float32Array,4),j=A.byteOffset,M=e.Malloc(Float32Array,3),ee=M.byteOffset,te=e.Malloc(Float32Array,3),ne=te.byteOffset,re=e.Malloc(Int32Array,4),ie=re.byteOffset,e.ColorSpace.SRGB=e.ColorSpace._MakeSRGB(),e.ColorSpace.DISPLAY_P3=e.ColorSpace._MakeDisplayP3(),e.ColorSpace.ADOBE_RGB=e.ColorSpace._MakeAdobeRGB(),e.GlyphRunFlags={IsWhiteSpace:e._GlyphRunFlags_isWhiteSpace},e.Path.MakeFromCmds=function(t){var n=u(t,`HEAPF32`),r=e.Path._MakeFromCmds(n,t.length);return l(n,t),r},e.Path.MakeFromVerbsPointsWeights=function(t,n,r){var i=u(t,`HEAPU8`),a=u(n,`HEAPF32`),o=u(r,`HEAPF32`),s=e.Path._MakeFromVerbsPointsWeights(i,t.length,a,n.length/2,o,r&&r.length||0);return l(i,t),l(a,n),l(o,r),s},e.PathBuilder.prototype.addArc=function(e,t,n){return e=_(e),this._addArc(e,t,n),this},e.PathBuilder.prototype.addCircle=function(e,t,n,r){return this._addCircle(e,t,n,!!r),this},e.PathBuilder.prototype.addOval=function(e,t,n){return n===void 0&&(n=1),e=_(e),this._addOval(e,!!t,n),this},e.PathBuilder.prototype.addPath=function(){var e=Array.prototype.slice.call(arguments),t=e[0],n=!1;if(typeof e[e.length-1]==`boolean`&&(n=e.pop()),e.length===1)this._addPath(t,1,0,0,0,1,0,0,0,1,n);else if(e.length===2)e=e[1],this._addPath(t,e[0],e[1],e[2],e[3],e[4],e[5],e[6]||0,e[7]||0,e[8]||1,n);else if(e.length===7||e.length===10)this._addPath(t,e[1],e[2],e[3],e[4],e[5],e[6],e[7]||0,e[8]||0,e[9]||1,n);else return null;return this},e.PathBuilder.prototype.addPolygon=function(e,t){var n=u(e,`HEAPF32`);return this._addPolygon(n,e.length/2,t),l(n,e),this},e.PathBuilder.prototype.addRect=function(e,t){return e=_(e),this._addRect(e,!!t),this},e.PathBuilder.prototype.addRRect=function(e,t){return e=v(e),this._addRRect(e,!!t),this},e.PathBuilder.prototype.addVerbsPointsWeights=function(e,t,n){var r=u(e,`HEAPU8`),i=u(t,`HEAPF32`),a=u(n,`HEAPF32`);return this._addVerbsPointsWeights(r,e.length,i,t.length/2,a,n&&n.length||0),l(r,e),l(i,t),l(a,n),this},e.PathBuilder.prototype.arc=function(t,n,r,i,a,o){return t=e.LTRBRect(t-r,n-r,t+r,n+r),a=(a-i)/Math.PI*180-360*!!o,i=new e.PathBuilder().addArc(t,i/Math.PI*180,a).detachAndDelete(),this.addPath(i,!0),i.delete(),this},e.PathBuilder.prototype.arcToOval=function(e,t,n,r){return e=_(e),this._arcToOval(e,t,n,r),this},e.PathBuilder.prototype.arcToRotated=function(e,t,n,r,i,a,o){return this._arcToRotated(e,t,n,!!r,!!i,a,o),this},e.PathBuilder.prototype.arcToTangent=function(e,t,n,r,i){return this._arcToTangent(e,t,n,r,i),this},e.PathBuilder.prototype.close=function(){return this._close(),this},e.PathBuilder.prototype.conicTo=function(e,t,n,r,i){return this._conicTo(e,t,n,r,i),this},e.Path.prototype.computeTightBounds=function(e){this._computeTightBounds(k);var t=O.toTypedArray();return e?(e.set(t),e):t.slice()},e.PathBuilder.prototype.cubicTo=function(e,t,n,r,i,a){return this._cubicTo(e,t,n,r,i,a),this},e.PathBuilder.prototype.detachAndDelete=function(){var e=this.detach();return this.delete(),e},e.Path.prototype.getBounds=function(e){this._getBounds(k);var t=O.toTypedArray();return e?(e.set(t),e):t.slice()},e.PathBuilder.prototype.getBounds=function(e){this._getBounds(k);var t=O.toTypedArray();return e?(e.set(t),e):t.slice()},e.PathBuilder.prototype.lineTo=function(e,t){return this._lineTo(e,t),this},e.PathBuilder.prototype.moveTo=function(e,t){return this._moveTo(e,t),this},e.PathBuilder.prototype.offset=function(e,t){return this._transform(1,0,e,0,1,t,0,0,1),this},e.PathBuilder.prototype.quadTo=function(e,t,n,r){return this._quadTo(e,t,n,r),this},e.PathBuilder.prototype.rArcTo=function(e,t,n,r,i,a,o){return this._rArcTo(e,t,n,r,i,a,o),this},e.PathBuilder.prototype.rConicTo=function(e,t,n,r,i){return this._rConicTo(e,t,n,r,i),this},e.PathBuilder.prototype.rCubicTo=function(e,t,n,r,i,a){return this._rCubicTo(e,t,n,r,i,a),this},e.PathBuilder.prototype.rLineTo=function(e,t){return this._rLineTo(e,t),this},e.PathBuilder.prototype.rMoveTo=function(e,t){return this._rMoveTo(e,t),this},e.PathBuilder.prototype.rQuadTo=function(e,t,n,r){return this._rQuadTo(e,t,n,r),this},e.Path.prototype.makeStroked=function(t){return t||={},t.width=t.width||1,t.miter_limit=t.miter_limit||4,t.cap=t.cap||e.StrokeCap.Butt,t.join=t.join||e.StrokeJoin.Miter,t.precision=t.precision||1,this._makeStroked(t)},e.PathBuilder.prototype.transform=function(){if(arguments.length===1){var e=arguments[0];this._transform(e[0],e[1],e[2],e[3],e[4],e[5],e[6]||0,e[7]||0,e[8]||1)}else if(arguments.length===6||arguments.length===9)e=arguments,this._transform(e[0],e[1],e[2],e[3],e[4],e[5],e[6]||0,e[7]||0,e[8]||1);else throw`transform expected to take 1 or 9 arguments. Got `+arguments.length;return this},e.Path.prototype.makeTrimmed=function(e,t,n){return this._makeTrimmed(e,t,!!n)},e.Image.prototype.encodeToBytes=function(t,n){var r=e.Ne();return t||=e.ImageFormat.PNG,n||=100,r?this._encodeToBytes(t,n,r):this._encodeToBytes(t,n)},e.Image.prototype.makeShaderCubic=function(e,t,n,r,i){return i=f(i),this._makeShaderCubic(e,t,n,r,i)},e.Image.prototype.makeShaderOptions=function(e,t,n,r,i){return i=f(i),this._makeShaderOptions(e,t,n,r,i)},e.Image.prototype.readPixels=function(n,r,i,a,o){var s=e.Ne();return t(this,n,r,i,a,o,s)},e.Canvas.prototype.clear=function(t){e.Id(this.Gd),t=m(t),this._clear(t)},e.Canvas.prototype.clipRRect=function(t,n,r){e.Id(this.Gd),t=v(t),this._clipRRect(t,n,r)},e.Canvas.prototype.clipRect=function(t,n,r){e.Id(this.Gd),t=_(t),this._clipRect(t,n,r)},e.Canvas.prototype.concat=function(t){e.Id(this.Gd),t=p(t),this._concat(t)},e.Canvas.prototype.drawArc=function(t,n,r,i,a){e.Id(this.Gd),t=_(t),this._drawArc(t,n,r,i,a)},e.Canvas.prototype.drawAtlas=function(t,n,r,i,a,s,c){if(t&&i&&n&&r&&n.length===r.length){e.Id(this.Gd),a||=e.BlendMode.SrcOver;var d=u(n,`HEAPF32`),f=u(r,`HEAPF32`),p=r.length/4,m=u(o(s),`HEAPU32`);if(c&&`B`in c&&`C`in c)this._drawAtlasCubic(t,f,d,m,p,a,c.B,c.C,i);else{let n=e.FilterMode.Linear,r=e.MipmapMode.None;c&&(n=c.filter,`mipmap`in c&&(r=c.mipmap)),this._drawAtlasOptions(t,f,d,m,p,a,n,r,i)}l(d,n),l(f,r),l(m,s)}},e.Canvas.prototype.drawCircle=function(t,n,r,i){e.Id(this.Gd),this._drawCircle(t,n,r,i)},e.Canvas.prototype.drawColor=function(t,n){e.Id(this.Gd),t=m(t),n===void 0?this._drawColor(t):this._drawColor(t,n)},e.Canvas.prototype.drawColorInt=function(t,n){e.Id(this.Gd),this._drawColorInt(t,n||e.BlendMode.SrcOver)},e.Canvas.prototype.drawColorComponents=function(t,n,r,i,a){e.Id(this.Gd),t=h(t,n,r,i),a===void 0?this._drawColor(t):this._drawColor(t,a)},e.Canvas.prototype.drawDRRect=function(t,n,r){e.Id(this.Gd),t=v(t,oe),n=v(n,ce),this._drawDRRect(t,n,r)},e.Canvas.prototype.drawImage=function(t,n,r,i){e.Id(this.Gd),this._drawImage(t,n,r,i||null)},e.Canvas.prototype.drawImageCubic=function(t,n,r,i,a,o){e.Id(this.Gd),this._drawImageCubic(t,n,r,i,a,o||null)},e.Canvas.prototype.drawImageOptions=function(t,n,r,i,a,o){e.Id(this.Gd),this._drawImageOptions(t,n,r,i,a,o||null)},e.Canvas.prototype.drawImageNine=function(t,n,r,i,a){e.Id(this.Gd),n=u(n,`HEAP32`,ie),r=_(r),this._drawImageNine(t,n,r,i,a||null)},e.Canvas.prototype.drawImageRect=function(t,n,r,i,a){e.Id(this.Gd),_(n,k),_(r,j),this._drawImageRect(t,k,j,i,!!a)},e.Canvas.prototype.drawImageRectCubic=function(t,n,r,i,a,o){e.Id(this.Gd),_(n,k),_(r,j),this._drawImageRectCubic(t,k,j,i,a,o||null)},e.Canvas.prototype.drawImageRectOptions=function(t,n,r,i,a,o){e.Id(this.Gd),_(n,k),_(r,j),this._drawImageRectOptions(t,k,j,i,a,o||null)},e.Canvas.prototype.drawLine=function(t,n,r,i,a){e.Id(this.Gd),this._drawLine(t,n,r,i,a)},e.Canvas.prototype.drawOval=function(t,n){e.Id(this.Gd),t=_(t),this._drawOval(t,n)},e.Canvas.prototype.drawPaint=function(t){e.Id(this.Gd),this._drawPaint(t)},e.Canvas.prototype.drawParagraph=function(t,n,r){e.Id(this.Gd),this._drawParagraph(t,n,r)},e.Canvas.prototype.drawPatch=function(t,n,r,i,a){if(24>t.length)throw`Need 12 cubic points`;if(n&&4>n.length)throw`Need 4 colors`;if(r&&8>r.length)throw`Need 4 shader coordinates`;e.Id(this.Gd);let s=u(t,`HEAPF32`),c=n?u(o(n),`HEAPU32`):N,d=r?u(r,`HEAPF32`):N;i||=e.BlendMode.Modulate,this._drawPatch(s,c,d,i,a),l(d,r),l(c,n),l(s,t)},e.Canvas.prototype.drawPath=function(t,n){e.Id(this.Gd),this._drawPath(t,n)},e.Canvas.prototype.drawPicture=function(t){e.Id(this.Gd),this._drawPicture(t)},e.Canvas.prototype.drawPoints=function(t,n,r){e.Id(this.Gd);var i=u(n,`HEAPF32`);this._drawPoints(t,i,n.length/2,r),l(i,n)},e.Canvas.prototype.drawRRect=function(t,n){e.Id(this.Gd),t=v(t),this._drawRRect(t,n)},e.Canvas.prototype.drawRect=function(t,n){e.Id(this.Gd),t=_(t),this._drawRect(t,n)},e.Canvas.prototype.drawRect4f=function(t,n,r,i,a){e.Id(this.Gd),this._drawRect4f(t,n,r,i,a)},e.Canvas.prototype.drawShadow=function(t,n,r,i,a,o,s){e.Id(this.Gd);var c=u(a,`HEAPF32`),d=u(o,`HEAPF32`);n=u(n,`HEAPF32`,ee),r=u(r,`HEAPF32`,ne),this._drawShadow(t,n,r,i,c,d,s),l(c,a),l(d,o)},e.getShadowLocalBounds=function(e,t,n,r,i,a,o){return e=f(e),n=u(n,`HEAPF32`,ee),r=u(r,`HEAPF32`,ne),this._getShadowLocalBounds(e,t,n,r,i,a,k)?(t=O.toTypedArray(),o?(o.set(t),o):t.slice()):null},e.Canvas.prototype.drawTextBlob=function(t,n,r,i){e.Id(this.Gd),this._drawTextBlob(t,n,r,i)},e.Canvas.prototype.drawVertices=function(t,n,r){e.Id(this.Gd),this._drawVertices(t,n,r)},e.Canvas.prototype.getDeviceClipBounds=function(e){this._getDeviceClipBounds(ie);var t=re.toTypedArray();return e?e.set(t):e=t.slice(),e},e.Canvas.prototype.quickReject=function(e){return e=_(e),this._quickReject(e)},e.Canvas.prototype.getLocalToDevice=function(){this._getLocalToDevice(w);for(var t=w,n=Array(16),r=0;16>r;r++)n[r]=e.HEAPF32[t/4+r];return n},e.Canvas.prototype.getTotalMatrix=function(){this._getTotalMatrix(S);for(var t=Array(9),n=0;9>n;n++)t[n]=e.HEAPF32[S/4+n];return t},e.Canvas.prototype.makeSurface=function(e){return e=this._makeSurface(e),e.Gd=this.Gd,e},e.Canvas.prototype.readPixels=function(n,r,i,a,o){return e.Id(this.Gd),t(this,n,r,i,a,o)},e.Canvas.prototype.saveLayer=function(t,n,r,i,a){return n=_(n),this._saveLayer(t||null,n,r||null,i||0,a||e.TileMode.Clamp)},e.Canvas.prototype.writePixels=function(t,n,r,i,a,o,s,c){if(t.byteLength%(n*r))throw`pixels length must be a multiple of the srcWidth * srcHeight`;e.Id(this.Gd);var d=t.byteLength/(n*r);o||=e.AlphaType.Unpremul,s||=e.ColorType.RGBA_8888,c||=e.ColorSpace.SRGB;var f=d*n;return d=u(t,`HEAPU8`),n=this._writePixels({width:n,height:r,colorType:s,alphaType:o,colorSpace:c},d,f,i,a),l(d,t),n},e.ColorFilter.MakeBlend=function(t,n,r){return t=m(t),r||=e.ColorSpace.SRGB,e.ColorFilter._MakeBlend(t,n,r)},e.ColorFilter.MakeMatrix=function(t){if(!t||t.length!==20)throw`invalid color matrix`;var n=u(t,`HEAPF32`),r=e.ColorFilter._makeMatrix(n);return l(n,t),r},e.ContourMeasure.prototype.getPosTan=function(e,t){return this._getPosTan(e,k),e=O.toTypedArray(),t?(t.set(e),t):e.slice()},e.ImageFilter.prototype.getOutputBounds=function(e,t,n){return e=_(e,k),t=f(t),this._getOutputBounds(e,t,ie),t=re.toTypedArray(),n?(n.set(t),n):t.slice()},e.ImageFilter.MakeDropShadow=function(t,n,r,i,a,o){return a=m(a,E),e.ImageFilter._MakeDropShadow(t,n,r,i,a,o)},e.ImageFilter.MakeDropShadowOnly=function(t,n,r,i,a,o){return a=m(a,E),e.ImageFilter._MakeDropShadowOnly(t,n,r,i,a,o)},e.ImageFilter.MakeImage=function(t,n,r,i){if(r=_(r,k),i=_(i,j),`B`in n&&`C`in n)return e.ImageFilter._MakeImageCubic(t,n.B,n.C,r,i);let a=n.filter,o=e.MipmapMode.None;return`mipmap`in n&&(o=n.mipmap),e.ImageFilter._MakeImageOptions(t,a,o,r,i)},e.ImageFilter.MakeMatrixTransform=function(t,n,r){if(t=f(t),`B`in n&&`C`in n)return e.ImageFilter._MakeMatrixTransformCubic(t,n.B,n.C,r);let i=n.filter,a=e.MipmapMode.None;return`mipmap`in n&&(a=n.mipmap),e.ImageFilter._MakeMatrixTransformOptions(t,i,a,r)},e.Paint.prototype.getColor=function(){return this._getColor(E),g(E)},e.Paint.prototype.setColor=function(e,t){t||=null,e=m(e),this._setColor(e,t)},e.Paint.prototype.setColorComponents=function(e,t,n,r,i){i||=null,e=h(e,t,n,r),this._setColor(e,i)},e.Path.prototype.getPoint=function(e,t){return this._getPoint(e,k),e=O.toTypedArray(),t?(t[0]=e[0],t[1]=e[1],t):e.slice(0,2)},e.Picture.prototype.makeShader=function(e,t,n,r,i){return r=f(r),i=_(i),this._makeShader(e,t,n,r,i)},e.Picture.prototype.cullRect=function(e){this._cullRect(k);var t=O.toTypedArray();return e?(e.set(t),e):t.slice()},e.PictureRecorder.prototype.beginRecording=function(e,t){return e=_(e),this._beginRecording(e,!!t)},e.Surface.prototype.getCanvas=function(){var e=this._getCanvas();return e.Gd=this.Gd,e},e.Surface.prototype.makeImageSnapshot=function(t){return e.Id(this.Gd),t=u(t,`HEAP32`,ie),this._makeImageSnapshot(t)},e.Surface.prototype.makeSurface=function(t){return e.Id(this.Gd),t=this._makeSurface(t),t.Gd=this.Gd,t},e.Surface.prototype.sf=function(t,n){return this.Ae||=this.getCanvas(),requestAnimationFrame(function(){e.Id(this.Gd),t(this.Ae),this.flush(n)}.bind(this))},e.Surface.prototype.requestAnimationFrame||(e.Surface.prototype.requestAnimationFrame=e.Surface.prototype.sf),e.Surface.prototype.nf=function(t,n){this.Ae||=this.getCanvas(),requestAnimationFrame(function(){e.Id(this.Gd),t(this.Ae),this.flush(n),this.dispose()}.bind(this))},e.Surface.prototype.drawOnce||(e.Surface.prototype.drawOnce=e.Surface.prototype.nf),e.PathEffect.MakeDash=function(t,n){if(n||=0,!t.length||t.length%2==1)throw`Intervals array must have even length`;var r=u(t,`HEAPF32`);return n=e.PathEffect._MakeDash(r,t.length,n),l(r,t),n},e.PathEffect.MakeLine2D=function(t,n){return n=f(n),e.PathEffect._MakeLine2D(t,n)},e.PathEffect.MakePath2D=function(t,n){return t=f(t),e.PathEffect._MakePath2D(t,n)},e.Shader.MakeColor=function(t,n){return n||=null,t=m(t),e.Shader._MakeColor(t,n)},e.Shader.Blend=e.Shader.MakeBlend,e.Shader.Color=e.Shader.MakeColor,e.Shader.MakeLinearGradient=function(t,n,r,i,a,o,s,c){c||=null;var p=d(r),m=u(i,`HEAPF32`);s||=0,o=f(o);var h=O.toTypedArray();return h.set(t),h.set(n,2),t=e.Shader._MakeLinearGradient(k,p.Zd,p.colorType,m,p.count,a,s,o,c),l(p.Zd,r),i&&l(m,i),t},e.Shader.MakeRadialGradient=function(t,n,r,i,a,o,s,c){c||=null;var p=d(r),m=u(i,`HEAPF32`);return s||=0,o=f(o),t=e.Shader._MakeRadialGradient(t[0],t[1],n,p.Zd,p.colorType,m,p.count,a,s,o,c),l(p.Zd,r),i&&l(m,i),t},e.Shader.MakeSweepGradient=function(t,n,r,i,a,o,s,c,p,m){m||=null;var h=d(r),g=u(i,`HEAPF32`);return s||=0,c||=0,p||=360,o=f(o),t=e.Shader._MakeSweepGradient(t,n,h.Zd,h.colorType,g,h.count,a,c,p,s,o,m),l(h.Zd,r),i&&l(g,i),t},e.Shader.MakeTwoPointConicalGradient=function(t,n,r,i,a,o,s,c,p,m){m||=null;var h=d(a),g=u(o,`HEAPF32`);p||=0,c=f(c);var _=O.toTypedArray();return _.set(t),_.set(r,2),t=e.Shader._MakeTwoPointConicalGradient(k,n,i,h.Zd,h.colorType,g,h.count,s,p,c,m),l(h.Zd,a),o&&l(g,o),t},e.Vertices.prototype.bounds=function(e){this._bounds(k);var t=O.toTypedArray();return e?(e.set(t),e):t.slice()},e.Pd&&e.Pd.forEach(function(e){e()})},e.computeTonalColors=function(e){var t=u(e.ambient,`HEAPF32`),n=u(e.spot,`HEAPF32`);this._computeTonalColors(t,n);var r={ambient:g(t),spot:g(n)};return l(t,e.ambient),l(n,e.spot),r},e.LTRBRect=function(e,t,n,r){return Float32Array.of(e,t,n,r)},e.XYWHRect=function(e,t,n,r){return Float32Array.of(e,t,e+n,t+r)},e.LTRBiRect=function(e,t,n,r){return Int32Array.of(e,t,n,r)},e.XYWHiRect=function(e,t,n,r){return Int32Array.of(e,t,e+n,t+r)},e.RRectXY=function(e,t,n){return Float32Array.of(e[0],e[1],e[2],e[3],t,n,t,n,t,n,t,n)},e.MakeAnimatedImageFromEncoded=function(t){t=new Uint8Array(t);var n=e._malloc(t.byteLength);return e.HEAPU8.set(t,n),(t=e._decodeAnimatedImage(n,t.byteLength))?t:null},e.MakeImageFromEncoded=function(t){t=new Uint8Array(t);var n=e._malloc(t.byteLength);return e.HEAPU8.set(t,n),(t=e._decodeImage(n,t.byteLength))?t:null};var ue=null;e.MakeImageFromCanvasImageSource=function(t){var n=t.width,r=t.height;ue||=document.createElement(`canvas`),ue.width=n,ue.height=r;var i=ue.getContext(`2d`,{willReadFrequently:!0});return i.drawImage(t,0,0),t=i.getImageData(0,0,n,r),e.MakeImage({width:n,height:r,alphaType:e.AlphaType.Unpremul,colorType:e.ColorType.RGBA_8888,colorSpace:e.ColorSpace.SRGB},t.data,4*n)},e.MakeImage=function(t,n,r){var i=e._malloc(n.length);return e.HEAPU8.set(n,i),e._MakeImage(t,i,n.length,r)},e.MakeVertices=function(t,n,r,i,a,s){var c=a&&a.length||0,l=0;return r&&r.length&&(l|=1),i&&i.length&&(l|=2),s===void 0||s||(l|=4),t=new e._VerticesBuilder(t,n.length/2,c,l),u(n,`HEAPF32`,t.positions()),t.texCoords()&&u(r,`HEAPF32`,t.texCoords()),t.colors()&&u(o(i),`HEAPU32`,t.colors()),t.indices()&&u(a,`HEAPU16`,t.indices()),t.detach()},e.Matrix={},e.Matrix.identity=function(){return n(3)},e.Matrix.invert=function(e){var t=e[0]*e[4]*e[8]+e[1]*e[5]*e[6]+e[2]*e[3]*e[7]-e[2]*e[4]*e[6]-e[1]*e[3]*e[8]-e[0]*e[5]*e[7];return t?[(e[4]*e[8]-e[5]*e[7])/t,(e[2]*e[7]-e[1]*e[8])/t,(e[1]*e[5]-e[2]*e[4])/t,(e[5]*e[6]-e[3]*e[8])/t,(e[0]*e[8]-e[2]*e[6])/t,(e[2]*e[3]-e[0]*e[5])/t,(e[3]*e[7]-e[4]*e[6])/t,(e[1]*e[6]-e[0]*e[7])/t,(e[0]*e[4]-e[1]*e[3])/t]:null},e.Matrix.mapPoints=function(e,t){for(var n=0;n<t.length;n+=2){var r=t[n],i=t[n+1],a=e[6]*r+e[7]*i+e[8],o=e[3]*r+e[4]*i+e[5];t[n]=(e[0]*r+e[1]*i+e[2])/a,t[n+1]=o/a}return t},e.Matrix.multiply=function(){return x(3,arguments)},e.Matrix.rotated=function(e,t,n){t||=0,n||=0;var r=Math.sin(e);return e=Math.cos(e),[e,-r,y(r,n,1-e,t),r,e,y(-r,t,1-e,n),0,0,1]},e.Matrix.scaled=function(e,r,i,a){i||=0,a||=0;var o=t([e,r],n(3),3,0,1);return t([i-e*i,a-r*a],o,3,2,0)},e.Matrix.skewed=function(e,r,i,a){i||=0,a||=0;var o=t([e,r],n(3),3,1,-1);return t([-e*i,-r*a],o,3,2,0)},e.Matrix.translated=function(e,r){return t(arguments,n(3),3,2,0)},e.Vector={},e.Vector.dot=function(e,t){return e.map(function(e,n){return e*t[n]}).reduce(function(e,t){return e+t})},e.Vector.lengthSquared=function(t){return e.Vector.dot(t,t)},e.Vector.length=function(t){return Math.sqrt(e.Vector.lengthSquared(t))},e.Vector.mulScalar=function(e,t){return e.map(function(e){return e*t})},e.Vector.add=function(e,t){return e.map(function(e,n){return e+t[n]})},e.Vector.sub=function(e,t){return e.map(function(e,n){return e-t[n]})},e.Vector.dist=function(t,n){return e.Vector.length(e.Vector.sub(t,n))},e.Vector.normalize=function(t){return e.Vector.mulScalar(t,1/e.Vector.length(t))},e.Vector.cross=function(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]},e.M44={},e.M44.identity=function(){return n(4)},e.M44.translated=function(e){return t(e,n(4),4,3,0)},e.M44.scaled=function(e){return t(e,n(4),4,0,1)},e.M44.rotated=function(t,n){return e.M44.rotatedUnitSinCos(e.Vector.normalize(t),Math.sin(n),Math.cos(n))},e.M44.rotatedUnitSinCos=function(e,t,n){var r=e[0],i=e[1];e=e[2];var a=1-n;return[a*r*r+n,a*r*i-t*e,a*r*e+t*i,0,a*r*i+t*e,a*i*i+n,a*i*e-t*r,0,a*r*e-t*i,a*i*e+t*r,a*e*e+n,0,0,0,0,1]},e.M44.lookat=function(n,r,i){r=e.Vector.normalize(e.Vector.sub(r,n)),i=e.Vector.normalize(i),i=e.Vector.normalize(e.Vector.cross(r,i));var a=e.M44.identity();return t(i,a,4,0,0),t(e.Vector.cross(i,r),a,4,1,0),t(e.Vector.mulScalar(r,-1),a,4,2,0),t(n,a,4,3,0),n=e.M44.invert(a),n===null?e.M44.identity():n},e.M44.perspective=function(e,t,n){var r=1/(t-e);return n/=2,n=Math.cos(n)/Math.sin(n),[n,0,0,0,0,n,0,0,0,0,(t+e)*r,2*t*e*r,0,0,-1,1]},e.M44.rc=function(e,t,n){return e[4*t+n]},e.M44.multiply=function(){return x(4,arguments)},e.M44.invert=function(e){var t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11];e=e[15];var g=t*o-n*a,_=t*s-r*a,v=t*c-i*a,y=n*s-r*o,b=n*c-i*o,x=r*c-i*s,S=l*m-u*p,C=l*h-d*p,w=l*e-f*p,T=u*h-d*m,E=u*e-f*m,D=d*e-f*h,O=g*D-_*E+v*T+y*w-b*C+x*S,k=1/O;return O===0||k===1/0?null:(g*=k,_*=k,v*=k,y*=k,b*=k,x*=k,S*=k,C*=k,w*=k,T*=k,E*=k,D*=k,t=[o*D-s*E+c*T,s*w-a*D-c*C,a*E-o*w+c*S,o*C-a*T-s*S,r*E-n*D-i*T,t*D-r*w+i*C,n*w-t*E-i*S,t*T-n*C+r*S,m*x-h*b+e*y,h*v-p*x-e*_,p*b-m*v+e*g,m*_-p*y-h*g,d*b-u*x-f*y,l*x-d*v+f*_,u*v-l*b-f*g,l*y-u*_+d*g],t.every(function(e){return!isNaN(e)&&e!==1/0&&e!==-1/0})?t:null)},e.M44.transpose=function(e){return[e[0],e[4],e[8],e[12],e[1],e[5],e[9],e[13],e[2],e[6],e[10],e[14],e[3],e[7],e[11],e[15]]},e.M44.mustInvert=function(t){if(t=e.M44.invert(t),t===null)throw`Matrix not invertible`;return t},e.M44.setupCamera=function(t,n,r){var i=e.M44.lookat(r.eye,r.coa,r.up);return r=e.M44.perspective(r.near,r.far,r.angle),n=[(t[2]-t[0])/2,(t[3]-t[1])/2,n],t=e.M44.multiply(e.M44.translated([(t[0]+t[2])/2,(t[1]+t[3])/2,0]),e.M44.scaled(n)),e.M44.multiply(t,r,i,e.M44.mustInvert(t))},e.ColorMatrix={},e.ColorMatrix.identity=function(){var e=new Float32Array(20);return e[0]=1,e[6]=1,e[12]=1,e[18]=1,e},e.ColorMatrix.scaled=function(e,t,n,r){var i=new Float32Array(20);return i[0]=e,i[6]=t,i[12]=n,i[18]=r,i};var de=[[6,7,11,12],[0,10,2,12],[0,1,5,6]];e.ColorMatrix.rotated=function(t,n,r){var i=e.ColorMatrix.identity();return t=de[t],i[t[0]]=r,i[t[1]]=n,i[t[2]]=-n,i[t[3]]=r,i},e.ColorMatrix.postTranslate=function(e,t,n,r,i){return e[4]+=t,e[9]+=n,e[14]+=r,e[19]+=i,e},e.ColorMatrix.concat=function(e,t){for(var n=new Float32Array(20),r=0,i=0;20>i;i+=5){for(var a=0;4>a;a++)n[r++]=e[i]*t[a]+e[i+1]*t[a+5]+e[i+2]*t[a+10]+e[i+3]*t[a+15];n[r++]=e[i]*t[4]+e[i+1]*t[9]+e[i+2]*t[14]+e[i+3]*t[19]+e[i+4]}return n},(function(e){e.Pd=e.Pd||[],e.Pd.push(function(){function t(t){return t&&(t.dir=t.dir===0?e.TextDirection.RTL:e.TextDirection.LTR),t}function n(t){if(!t||!t.length)return[];for(var n=[],r=0;r<t.length;r+=5){var i=e.LTRBRect(t[r],t[r+1],t[r+2],t[r+3]),a=e.TextDirection.LTR;t[r+4]===0&&(a=e.TextDirection.RTL),n.push({rect:i,dir:a})}return e._free(t.byteOffset),n}function r(t){return t||={},t.weight===void 0&&(t.weight=e.FontWeight.Normal),t.width=t.width||e.FontWidth.Normal,t.slant=t.slant||e.FontSlant.Upright,t}function i(e){if(!e||!e.length)return N;for(var t=[],n=0;n<e.length;n++){var r=a(e[n]);t.push(r)}return u(t,`HEAPU32`)}function a(t){if(c[t])return c[t];var n=ut(t)+1,r=e._malloc(n);return I(t,r,n),c[t]=r}function o(t){if(t._colorPtr=m(t.color),t._foregroundColorPtr=N,t._backgroundColorPtr=N,t._decorationColorPtr=N,t.foregroundColor&&(t._foregroundColorPtr=m(t.foregroundColor,f)),t.backgroundColor&&(t._backgroundColorPtr=m(t.backgroundColor,p)),t.decorationColor&&(t._decorationColorPtr=m(t.decorationColor,h)),Array.isArray(t.fontFamilies)&&t.fontFamilies.length?(t._fontFamiliesPtr=i(t.fontFamilies),t._fontFamiliesLen=t.fontFamilies.length):(t._fontFamiliesPtr=N,t._fontFamiliesLen=0),t.locale){var n=t.locale;t._localePtr=a(n),t._localeLen=ut(n)}else t._localePtr=N,t._localeLen=0;if(Array.isArray(t.shadows)&&t.shadows.length){n=t.shadows;var r=n.map(function(t){return t.color||e.BLACK}),o=n.map(function(e){return e.blurRadius||0});t._shadowLen=n.length;for(var s=e._malloc(8*n.length),c=s/4,l=0;l<n.length;l++){var g=n[l].offset||[0,0];e.HEAPF32[c]=g[0],e.HEAPF32[c+1]=g[1],c+=2}t._shadowColorsPtr=d(r).Zd,t._shadowOffsetsPtr=s,t._shadowBlurRadiiPtr=u(o,`HEAPF32`)}else t._shadowLen=0,t._shadowColorsPtr=N,t._shadowOffsetsPtr=N,t._shadowBlurRadiiPtr=N;Array.isArray(t.fontFeatures)&&t.fontFeatures.length?(n=t.fontFeatures,r=n.map(function(e){return e.name}),o=n.map(function(e){return e.value}),t._fontFeatureLen=n.length,t._fontFeatureNamesPtr=i(r),t._fontFeatureValuesPtr=u(o,`HEAPU32`)):(t._fontFeatureLen=0,t._fontFeatureNamesPtr=N,t._fontFeatureValuesPtr=N),Array.isArray(t.fontVariations)&&t.fontVariations.length?(n=t.fontVariations,r=n.map(function(e){return e.axis}),o=n.map(function(e){return e.value}),t._fontVariationLen=n.length,t._fontVariationAxesPtr=i(r),t._fontVariationValuesPtr=u(o,`HEAPF32`)):(t._fontVariationLen=0,t._fontVariationAxesPtr=N,t._fontVariationValuesPtr=N)}function s(t){e._free(t._fontFamiliesPtr),e._free(t._shadowColorsPtr),e._free(t._shadowOffsetsPtr),e._free(t._shadowBlurRadiiPtr),e._free(t._fontFeatureNamesPtr),e._free(t._fontFeatureValuesPtr),e._free(t._fontVariationAxesPtr),e._free(t._fontVariationValuesPtr)}e.Paragraph.prototype.getRectsForRange=function(e,t,r,i){return e=this._getRectsForRange(e,t,r,i),n(e)},e.Paragraph.prototype.getRectsForPlaceholders=function(){return n(this._getRectsForPlaceholders())},e.Paragraph.prototype.getGlyphInfoAt=function(e){return t(this._getGlyphInfoAt(e))},e.Paragraph.prototype.getClosestGlyphInfoAtCoordinate=function(e,n){return t(this._getClosestGlyphInfoAtCoordinate(e,n))},e.TypefaceFontProvider.prototype.registerFont=function(t,n){if(t=e.Typeface.MakeTypefaceFromData(t),!t)return null;n=a(n),this._registerFont(t,n),t.delete()},e.ParagraphStyle=function(t){if(t.disableHinting=t.disableHinting||!1,t.ellipsis){var n=t.ellipsis;t._ellipsisPtr=a(n),t._ellipsisLen=ut(n)}else t._ellipsisPtr=N,t._ellipsisLen=0;return t.heightMultiplier??=-1,t.maxLines=t.maxLines||0,t.replaceTabCharacters=t.replaceTabCharacters||!1,n=(n=t.strutStyle)||{},n.strutEnabled=n.strutEnabled||!1,n.strutEnabled&&Array.isArray(n.fontFamilies)&&n.fontFamilies.length?(n._fontFamiliesPtr=i(n.fontFamilies),n._fontFamiliesLen=n.fontFamilies.length):(n._fontFamiliesPtr=N,n._fontFamiliesLen=0),n.fontStyle=r(n.fontStyle),n.fontSize??=-1,n.heightMultiplier??=-1,n.halfLeading=n.halfLeading||!1,n.leading=n.leading||0,n.forceStrutHeight=n.forceStrutHeight||!1,t.strutStyle=n,t.textAlign=t.textAlign||e.TextAlign.Start,t.textDirection=t.textDirection||e.TextDirection.LTR,t.textHeightBehavior=t.textHeightBehavior||e.TextHeightBehavior.All,t.textStyle=e.TextStyle(t.textStyle),t.applyRoundingHack=!1!==t.applyRoundingHack,t},e.TextStyle=function(t){return t.color||=e.BLACK,t.decoration=t.decoration||0,t.decorationThickness=t.decorationThickness||0,t.decorationStyle=t.decorationStyle||e.DecorationStyle.Solid,t.textBaseline=t.textBaseline||e.TextBaseline.Alphabetic,t.fontSize??=-1,t.letterSpacing=t.letterSpacing||0,t.wordSpacing=t.wordSpacing||0,t.heightMultiplier??=-1,t.halfLeading=t.halfLeading||!1,t.fontStyle=r(t.fontStyle),t};var c={},f=e._malloc(16),p=e._malloc(16),h=e._malloc(16);e.ParagraphBuilder.Make=function(t,n){return o(t.textStyle),n=e.ParagraphBuilder._Make(t,n),s(t.textStyle),n},e.ParagraphBuilder.MakeFromFontProvider=function(t,n){return o(t.textStyle),n=e.ParagraphBuilder._MakeFromFontProvider(t,n),s(t.textStyle),n},e.ParagraphBuilder.MakeFromFontCollection=function(t,n){return o(t.textStyle),n=e.ParagraphBuilder._MakeFromFontCollection(t,n),s(t.textStyle),n},e.ParagraphBuilder.ShapeText=function(t,n,r){let i=0;for(let e of n)i+=e.length;if(i!==t.length)throw`Accumulated block lengths must equal text.length`;return e.ParagraphBuilder._ShapeText(t,n,r)},e.ParagraphBuilder.prototype.pushStyle=function(e){o(e),this._pushStyle(e),s(e)},e.ParagraphBuilder.prototype.pushPaintStyle=function(e,t,n){o(e),this._pushPaintStyle(e,t,n),s(e)},e.ParagraphBuilder.prototype.addPlaceholder=function(t,n,r,i,a){r||=e.PlaceholderAlignment.Baseline,i||=e.TextBaseline.Alphabetic,this._addPlaceholder(t||0,n||0,r,i,a||0)},e.ParagraphBuilder.prototype.setWordsUtf8=function(e){var t=u(e,`HEAPU32`);this._setWordsUtf8(t,e&&e.length||0),l(t,e)},e.ParagraphBuilder.prototype.setWordsUtf16=function(e){var t=u(e,`HEAPU32`);this._setWordsUtf16(t,e&&e.length||0),l(t,e)},e.ParagraphBuilder.prototype.setGraphemeBreaksUtf8=function(e){var t=u(e,`HEAPU32`);this._setGraphemeBreaksUtf8(t,e&&e.length||0),l(t,e)},e.ParagraphBuilder.prototype.setGraphemeBreaksUtf16=function(e){var t=u(e,`HEAPU32`);this._setGraphemeBreaksUtf16(t,e&&e.length||0),l(t,e)},e.ParagraphBuilder.prototype.setLineBreaksUtf8=function(e){var t=u(e,`HEAPU32`);this._setLineBreaksUtf8(t,e&&e.length||0),l(t,e)},e.ParagraphBuilder.prototype.setLineBreaksUtf16=function(e){var t=u(e,`HEAPU32`);this._setLineBreaksUtf16(t,e&&e.length||0),l(t,e)}})})(i),e.Pd=e.Pd||[],e.Pd.push(function(){}),e.Pd=e.Pd||[],e.Pd.push(function(){e.Canvas.prototype.drawText=function(t,n,r,i,a){var o=ut(t),s=e._malloc(o+1);I(t,s,o+1),this._drawSimpleText(s,o,n,r,a,i),e._free(s)},e.Canvas.prototype.drawGlyphs=function(t,n,r,i,a,o){if(!(2*t.length<=n.length))throw`Not enough positions for the array of gyphs`;e.Id(this.Gd);let s=u(t,`HEAPU16`),c=u(n,`HEAPF32`);this._drawGlyphs(t.length,s,c,r,i,a,o),l(c,n),l(s,t)},e.Font.prototype.getGlyphBounds=function(t,n,r){var i=u(t,`HEAPU16`),a=e._malloc(16*t.length);return this._getGlyphWidthBounds(i,t.length,N,a,n||null),n=new Float32Array(e.HEAPU8.buffer,a,4*t.length),l(i,t),r?(r.set(n),e._free(a),r):(t=Float32Array.from(n),e._free(a),t)},e.Font.prototype.getGlyphIDs=function(t,n,r){n||=t.length;var i=ut(t)+1,a=e._malloc(i);return I(t,a,i),t=e._malloc(2*n),n=this._getGlyphIDs(a,i-1,n,t),e._free(a),0>n?(e._free(t),null):(a=new Uint16Array(e.HEAPU8.buffer,t,n),r?(r.set(a),e._free(t),r):(r=Uint16Array.from(a),e._free(t),r))},e.Font.prototype.getGlyphIntercepts=function(e,t,n,r){var i=u(e,`HEAPU16`),a=u(t,`HEAPF32`);return this._getGlyphIntercepts(i,e.length,!(e&&e._ck),a,t.length,!(t&&t._ck),n,r)},e.Font.prototype.getGlyphWidths=function(t,n,r){var i=u(t,`HEAPU16`),a=e._malloc(4*t.length);return this._getGlyphWidthBounds(i,t.length,a,N,n||null),n=new Float32Array(e.HEAPU8.buffer,a,t.length),l(i,t),r?(r.set(n),e._free(a),r):(t=Float32Array.from(n),e._free(a),t)},e.FontMgr.FromData=function(){if(!arguments.length)return null;var t=arguments;if(t.length===1&&Array.isArray(t[0])&&(t=arguments[0]),!t.length)return null;for(var n=[],r=[],i=0;i<t.length;i++){var a=new Uint8Array(t[i]),o=u(a,`HEAPU8`);n.push(o),r.push(a.byteLength)}return n=u(n,`HEAPU32`),r=u(r,`HEAPU32`),t=e.FontMgr._fromData(n,r,t.length),e._free(n),e._free(r),t},e.Typeface.MakeTypefaceFromData=function(t){t=new Uint8Array(t);var n=u(t,`HEAPU8`);return(t=e.Typeface._MakeTypefaceFromData(n,t.byteLength))?t:null},e.Typeface.MakeFreeTypeFaceFromData=e.Typeface.MakeTypefaceFromData,e.Typeface.prototype.getGlyphIDs=function(t,n,r){n||=t.length;var i=ut(t)+1,a=e._malloc(i);return I(t,a,i),t=e._malloc(2*n),n=this._getGlyphIDs(a,i-1,n,t),e._free(a),0>n?(e._free(t),null):(a=new Uint16Array(e.HEAPU8.buffer,t,n),r?(r.set(a),e._free(t),r):(r=Uint16Array.from(a),e._free(t),r))},e.TextBlob.MakeOnPath=function(t,n,r,i){if(t&&t.length&&n&&n.countPoints()){if(n.countPoints()===1)return this.MakeFromText(t,r);i||=0;var a=r.getGlyphIDs(t);a=r.getGlyphWidths(a);var o=[];n=new e.ContourMeasureIter(n,!1,1);for(var s=n.next(),c=new Float32Array(4),l=0;l<t.length&&s;l++){var u=a[l];if(i+=u/2,i>s.length()){if(s.delete(),s=n.next(),!s){t=t.substring(0,l);break}i=u/2}s.getPosTan(i,c);var d=c[2],f=c[3];o.push(d,f,c[0]-u/2*d,c[1]-u/2*f),i+=u/2}return t=this.MakeFromRSXform(t,o,r),s&&s.delete(),n.delete(),t}},e.TextBlob.MakeFromRSXform=function(t,n,r){var i=ut(t)+1,a=e._malloc(i);return I(t,a,i),t=u(n,`HEAPF32`),r=e.TextBlob._MakeFromRSXform(a,i-1,t,r),e._free(a),r||null},e.TextBlob.MakeFromRSXformGlyphs=function(t,n,r){var i=u(t,`HEAPU16`);return n=u(n,`HEAPF32`),r=e.TextBlob._MakeFromRSXformGlyphs(i,2*t.length,n,r),l(i,t),r||null},e.TextBlob.MakeFromGlyphs=function(t,n){var r=u(t,`HEAPU16`);return n=e.TextBlob._MakeFromGlyphs(r,2*t.length,n),l(r,t),n||null},e.TextBlob.MakeFromText=function(t,n){var r=ut(t)+1,i=e._malloc(r);return I(t,i,r),t=e.TextBlob._MakeFromText(i,r-1,n),e._free(i),t||null},e.MallocGlyphIDs=function(t){return e.Malloc(Uint16Array,t)}}),e.Pd=e.Pd||[],e.Pd.push(function(){e.MakePicture=function(t){t=new Uint8Array(t);var n=e._malloc(t.byteLength);return e.HEAPU8.set(t,n),(t=e._MakePicture(n,t.byteLength))?t:null}}),e.Pd=e.Pd||[],e.Pd.push(function(){e.RuntimeEffect.Make=function(t,n){return e.RuntimeEffect._Make(t,{onError:n||function(e){console.log(`RuntimeEffect error`,e)}})},e.RuntimeEffect.MakeForBlender=function(t,n){return e.RuntimeEffect._MakeForBlender(t,{onError:n||function(e){console.log(`RuntimeEffect error`,e)}})},e.RuntimeEffect.prototype.makeShader=function(e,t){var n=!e._ck,r=u(e,`HEAPF32`);return t=f(t),this._makeShader(r,4*e.length,n,t)},e.RuntimeEffect.prototype.makeShaderWithChildren=function(e,t,n){var r=!e._ck,i=u(e,`HEAPF32`);n=f(n);for(var a=[],o=0;o<t.length;o++)a.push(t[o].Fd.Md);return t=u(a,`HEAPU32`),this._makeShaderWithChildren(i,4*e.length,r,t,a.length,n)},e.RuntimeEffect.prototype.makeBlender=function(e){var t=!e._ck,n=u(e,`HEAPF32`);return this._makeBlender(n,4*e.length,t)}}),(function(){function t(e){for(var t=0;t<e.length;t++)if(e[t]!==void 0&&!Number.isFinite(e[t]))return!1;return!0}function n(t){var n=e.getColorComponents(t);t=n[0];var r=n[1],i=n[2];return n=n[3],n===1?(t=t.toString(16).toLowerCase(),r=r.toString(16).toLowerCase(),i=i.toString(16).toLowerCase(),t=t.length===1?`0`+t:t,r=r.length===1?`0`+r:r,i=i.length===1?`0`+i:i,`#`+t+r+i):(n=n===0||n===1?n:n.toFixed(8),`rgba(`+t+`, `+r+`, `+i+`, `+n+`)`)}function i(t){return e.parseColorString(t,y)}function a(e){if(e=b.exec(e),!e)return null;var t=parseFloat(e[4]),n=16;switch(e[5]){case`em`:case`rem`:n=16*t;break;case`pt`:n=4*t/3;break;case`px`:n=t;break;case`pc`:n=16*t;break;case`in`:n=96*t;break;case`cm`:n=96*t/2.54;break;case`mm`:n=96/25.4*t;break;case`q`:n=96/25.4/4*t;break;case`%`:n=16/75*t}return{style:e[1],variant:e[2],weight:e[3],sizePx:n,family:e[6].trim()}}function o(){x||={"Noto Mono":{"*":e.Typeface.GetDefault()},monospace:{"*":e.Typeface.GetDefault()}}}function s(s){this.Hd=s,this.Kd=new e.Paint,this.Kd.setAntiAlias(!0),this.Kd.setStrokeMiter(10),this.Kd.setStrokeCap(e.StrokeCap.Butt),this.Kd.setStrokeJoin(e.StrokeJoin.Miter),this.Le=`10px monospace`,this.je=new e.Font(e.Typeface.GetDefault(),10),this.je.setSubpixel(!0),this.Xd=this.de=e.BLACK,this.re=0,this.Ce=e.TRANSPARENT,this.te=this.se=0,this.De=this.he=1,this.Be=0,this.qe=[],this.Jd=e.BlendMode.SrcOver,this.Kd.setStrokeWidth(this.De),this.Kd.setBlendMode(this.Jd),this.Nd=new e.PathBuilder,this.Od=e.Matrix.identity(),this.bf=[],this.xe=[],this.ie=function(){this.Nd.delete(),this.Kd.delete(),this.je.delete(),this.xe.forEach(function(e){e.ie()})},Object.defineProperty(this,"currentTransform",{enumerable:!0,get:function(){return{a:this.Od[0],c:this.Od[1],e:this.Od[2],b:this.Od[3],d:this.Od[4],f:this.Od[5]}},set:function(e){e.a&&this.setTransform(e.a,e.b,e.c,e.d,e.e,e.f)}}),Object.defineProperty(this,"fillStyle",{enumerable:!0,get:function(){return r(this.Xd)?n(this.Xd):this.Xd},set:function(e){typeof e==`string`?this.Xd=i(e):e.pe&&(this.Xd=e)}}),Object.defineProperty(this,"font",{enumerable:!0,get:function(){return this.Le},set:function(t){var n=a(t),r=(n.style||`normal`)+`|`+(n.variant||`normal`)+`|`+(n.weight||`normal`),i=n.family;o(),r=x[i]?x[i][r]||x[i][`*`]:e.Typeface.GetDefault(),n.typeface=r,n&&(this.je.setSize(n.sizePx),this.je.setTypeface(n.typeface),this.Le=t)}}),Object.defineProperty(this,"globalAlpha",{enumerable:!0,get:function(){return this.he},set:function(e){!isFinite(e)||0>e||1<e||(this.he=e)}}),Object.defineProperty(this,"globalCompositeOperation",{enumerable:!0,get:function(){switch(this.Jd){case e.BlendMode.SrcOver:return`source-over`;case e.BlendMode.DstOver:return`destination-over`;case e.BlendMode.Src:return`copy`;case e.BlendMode.Dst:return`destination`;case e.BlendMode.Clear:return`clear`;case e.BlendMode.SrcIn:return`source-in`;case e.BlendMode.DstIn:return`destination-in`;case e.BlendMode.SrcOut:return`source-out`;case e.BlendMode.DstOut:return`destination-out`;case e.BlendMode.SrcATop:return`source-atop`;case e.BlendMode.DstATop:return`destination-atop`;case e.BlendMode.Xor:return`xor`;case e.BlendMode.Plus:return`lighter`;case e.BlendMode.Multiply:return`multiply`;case e.BlendMode.Screen:return`screen`;case e.BlendMode.Overlay:return`overlay`;case e.BlendMode.Darken:return`darken`;case e.BlendMode.Lighten:return`lighten`;case e.BlendMode.ColorDodge:return`color-dodge`;case e.BlendMode.ColorBurn:return`color-burn`;case e.BlendMode.HardLight:return`hard-light`;case e.BlendMode.SoftLight:return`soft-light`;case e.BlendMode.Difference:return`difference`;case e.BlendMode.Exclusion:return`exclusion`;case e.BlendMode.Hue:return`hue`;case e.BlendMode.Saturation:return`saturation`;case e.BlendMode.Color:return`color`;case e.BlendMode.Luminosity:return`luminosity`}},set:function(t){switch(t){case`source-over`:this.Jd=e.BlendMode.SrcOver;break;case`destination-over`:this.Jd=e.BlendMode.DstOver;break;case`copy`:this.Jd=e.BlendMode.Src;break;case`destination`:this.Jd=e.BlendMode.Dst;break;case`clear`:this.Jd=e.BlendMode.Clear;break;case`source-in`:this.Jd=e.BlendMode.SrcIn;break;case`destination-in`:this.Jd=e.BlendMode.DstIn;break;case`source-out`:this.Jd=e.BlendMode.SrcOut;break;case`destination-out`:this.Jd=e.BlendMode.DstOut;break;case`source-atop`:this.Jd=e.BlendMode.SrcATop;break;case`destination-atop`:this.Jd=e.BlendMode.DstATop;break;case`xor`:this.Jd=e.BlendMode.Xor;break;case`lighter`:this.Jd=e.BlendMode.Plus;break;case`plus-lighter`:this.Jd=e.BlendMode.Plus;break;case`plus-darker`:throw`plus-darker is not supported`;case`multiply`:this.Jd=e.BlendMode.Multiply;break;case`screen`:this.Jd=e.BlendMode.Screen;break;case`overlay`:this.Jd=e.BlendMode.Overlay;break;case`darken`:this.Jd=e.BlendMode.Darken;break;case`lighten`:this.Jd=e.BlendMode.Lighten;break;case`color-dodge`:this.Jd=e.BlendMode.ColorDodge;break;case`color-burn`:this.Jd=e.BlendMode.ColorBurn;break;case`hard-light`:this.Jd=e.BlendMode.HardLight;break;case`soft-light`:this.Jd=e.BlendMode.SoftLight;break;case`difference`:this.Jd=e.BlendMode.Difference;break;case`exclusion`:this.Jd=e.BlendMode.Exclusion;break;case`hue`:this.Jd=e.BlendMode.Hue;break;case`saturation`:this.Jd=e.BlendMode.Saturation;break;case`color`:this.Jd=e.BlendMode.Color;break;case`luminosity`:this.Jd=e.BlendMode.Luminosity;break;default:return}this.Kd.setBlendMode(this.Jd)}}),Object.defineProperty(this,"imageSmoothingEnabled",{enumerable:!0,get:function(){return!0},set:function(){}}),Object.defineProperty(this,"imageSmoothingQuality",{enumerable:!0,get:function(){return`high`},set:function(){}}),Object.defineProperty(this,"lineCap",{enumerable:!0,get:function(){switch(this.Kd.getStrokeCap()){case e.StrokeCap.Butt:return`butt`;case e.StrokeCap.Round:return`round`;case e.StrokeCap.Square:return`square`}},set:function(t){switch(t){case`butt`:this.Kd.setStrokeCap(e.StrokeCap.Butt);break;case`round`:this.Kd.setStrokeCap(e.StrokeCap.Round);break;case`square`:this.Kd.setStrokeCap(e.StrokeCap.Square)}}}),Object.defineProperty(this,"lineDashOffset",{enumerable:!0,get:function(){return this.Be},set:function(e){isFinite(e)&&(this.Be=e)}}),Object.defineProperty(this,"lineJoin",{enumerable:!0,get:function(){switch(this.Kd.getStrokeJoin()){case e.StrokeJoin.Miter:return`miter`;case e.StrokeJoin.Round:return`round`;case e.StrokeJoin.Bevel:return`bevel`}},set:function(t){switch(t){case`miter`:this.Kd.setStrokeJoin(e.StrokeJoin.Miter);break;case`round`:this.Kd.setStrokeJoin(e.StrokeJoin.Round);break;case`bevel`:this.Kd.setStrokeJoin(e.StrokeJoin.Bevel)}}}),Object.defineProperty(this,"lineWidth",{enumerable:!0,get:function(){return this.Kd.getStrokeWidth()},set:function(e){0>=e||!e||(this.De=e,this.Kd.setStrokeWidth(e))}}),Object.defineProperty(this,"miterLimit",{enumerable:!0,get:function(){return this.Kd.getStrokeMiter()},set:function(e){0>=e||!e||this.Kd.setStrokeMiter(e)}}),Object.defineProperty(this,"shadowBlur",{enumerable:!0,get:function(){return this.re},set:function(e){0>e||!isFinite(e)||(this.re=e)}}),Object.defineProperty(this,"shadowColor",{enumerable:!0,get:function(){return n(this.Ce)},set:function(e){this.Ce=i(e)}}),Object.defineProperty(this,"shadowOffsetX",{enumerable:!0,get:function(){return this.se},set:function(e){isFinite(e)&&(this.se=e)}}),Object.defineProperty(this,"shadowOffsetY",{enumerable:!0,get:function(){return this.te},set:function(e){isFinite(e)&&(this.te=e)}}),Object.defineProperty(this,"strokeStyle",{enumerable:!0,get:function(){return n(this.de)},set:function(e){typeof e==`string`?this.de=i(e):e.pe&&(this.de=e)}}),this.arc=function(e,t,n,r,i,a){m(this.Nd,e,t,n,n,0,r,i,a)},this.arcTo=function(e,t,n,r,i){f(this.Nd,e,t,n,r,i)},this.beginPath=function(){this.Nd.delete(),this.Nd=new e.PathBuilder},this.bezierCurveTo=function(e,n,r,i,a,o){var s=this.Nd;t([e,n,r,i,a,o])&&(s.isEmpty()&&s.moveTo(e,n),s.cubicTo(e,n,r,i,a,o))},this.clearRect=function(t,n,r,i){this.Kd.setStyle(e.PaintStyle.Fill),this.Kd.setBlendMode(e.BlendMode.Clear),this.Hd.drawRect(e.XYWHRect(t,n,r,i),this.Kd),this.Kd.setBlendMode(this.Jd)},this.clip=function(t,n){if(typeof t==`string`){n=t;var r=this.Nd.snapshot()}else t&&t.ge&&(r=t.ge());r||=this.Nd.snapshot(),n&&n.toLowerCase()===`evenodd`?r.setFillType(e.FillType.EvenOdd):r.setFillType(e.FillType.Winding),this.Hd.clipPath(r,e.ClipOp.Intersect,!0),r.delete()},this.closePath=function(){var e=this.Nd;e.isEmpty()||e.countPoints()!=1&&e.close()},this.createImageData=function(){if(arguments.length===1){var e=arguments[0];return new u(new Uint8ClampedArray(4*e.width*e.height),e.width,e.height)}if(arguments.length===2){e=arguments[0];var t=arguments[1];return new u(new Uint8ClampedArray(4*e*t),e,t)}throw`createImageData expects 1 or 2 arguments, got `+arguments.length},this.createLinearGradient=function(e,n,r,i){if(t(arguments)){var a=new d(e,n,r,i);return this.xe.push(a),a}},this.createPattern=function(e,t){return e=new _(e,t),this.xe.push(e),e},this.createRadialGradient=function(e,n,r,i,a,o){if(t(arguments)){var s=new v(e,n,r,i,a,o);return this.xe.push(s),s}},this.drawImage=function(t){t instanceof l&&(t=t.gf());var n=this.Ke();if(arguments.length===3||arguments.length===5)var r=e.XYWHRect(arguments[1],arguments[2],arguments[3]||t.width(),arguments[4]||t.height()),i=e.XYWHRect(0,0,t.width(),t.height());else if(arguments.length===9)r=e.XYWHRect(arguments[5],arguments[6],arguments[7],arguments[8]),i=e.XYWHRect(arguments[1],arguments[2],arguments[3],arguments[4]);else throw`invalid number of args for drawImage, need 3, 5, or 9; got `+arguments.length;this.Hd.drawImageRect(t,i,r,n,!1),n.dispose()},this.ellipse=function(e,t,n,r,i,a,o,s){m(this.Nd,e,t,n,r,i,a,o,s)},this.Ke=function(){var t=this.Kd.copy();if(t.setStyle(e.PaintStyle.Fill),r(this.Xd)){var n=e.multiplyByAlpha(this.Xd,this.he);t.setColor(n)}else n=this.Xd.pe(this.Od),t.setColor(e.Color(0,0,0,this.he)),t.setShader(n);return t.dispose=function(){this.delete()},t},this.fill=function(t,n){if(typeof t==`string`){n=t;var r=this.Nd.snapshot()}else t&&t.ge&&(r=t.ge());if(t||(r=this.Nd.snapshot()),n===`evenodd`)r.setFillType(e.FillType.EvenOdd);else{if(n!==`nonzero`&&n)throw`invalid fill rule`;r.setFillType(e.FillType.Winding)}t=this.Ke(),(n=this.ue(t))&&(this.Hd.save(),this.ne(),this.Hd.drawPath(r,n),this.Hd.restore(),n.dispose()),this.Hd.drawPath(r,t),t.dispose(),r.delete()},this.fillRect=function(t,n,r,i){var a=this.Ke(),o=this.ue(a);o&&(this.Hd.save(),this.ne(),this.Hd.drawRect(e.XYWHRect(t,n,r,i),o),this.Hd.restore(),o.dispose()),this.Hd.drawRect(e.XYWHRect(t,n,r,i),a),a.dispose()},this.fillText=function(t,n,r){var i=this.Ke();t=e.TextBlob.MakeFromText(t,this.je);var a=this.ue(i);a&&(this.Hd.save(),this.ne(),this.Hd.drawTextBlob(t,n,r,a),this.Hd.restore(),a.dispose()),this.Hd.drawTextBlob(t,n,r,i),t.delete(),i.dispose()},this.getImageData=function(t,n,r,i){return(t=this.Hd.readPixels(t,n,{width:r,height:i,colorType:e.ColorType.RGBA_8888,alphaType:e.AlphaType.Unpremul,colorSpace:e.ColorSpace.SRGB}))?new u(new Uint8ClampedArray(t.buffer),r,i):null},this.getLineDash=function(){return this.qe.slice()},this.cf=function(t){var n=e.Matrix.invert(this.Od);return e.Matrix.mapPoints(n,t),t},this.isPointInPath=function(t,n,r){var i=arguments;if(i.length===3)var a=this.Nd.snapshot();else if(i.length===4)a=i[0].copy(),t=i[1],n=i[2],r=i[3];else throw`invalid arg count, need 3 or 4, got `+i.length;return!isFinite(t)||!isFinite(n)||(r||=`nonzero`,r!==`nonzero`&&r!==`evenodd`)?(a.delete(),!1):(i=this.cf([t,n]),t=i[0],n=i[1],a.setFillType(r===`nonzero`?e.FillType.Winding:e.FillType.EvenOdd),i=a.contains(t,n),a.delete(),i)},this.isPointInStroke=function(t,n){var r=arguments;if(r.length===2)var i=this.Nd.snapshot();else if(r.length===3)i=r[0].copy(),t=r[1],n=r[2];else throw`invalid arg count, need 2 or 3, got `+r.length;if(!isFinite(t)||!isFinite(n))return i.delete(),!1;r=this.cf([t,n]),t=r[0],n=r[1],i.setFillType(e.FillType.Winding),r=i.makeStroked({width:this.lineWidth,miter_limit:this.miterLimit,cap:this.Kd.getStrokeCap(),join:this.Kd.getStrokeJoin(),precision:.3});var a=r.contains(t,n);return r.delete(),i.delete(),a},this.lineTo=function(e,t){h(this.Nd,e,t)},this.measureText=function(e){e=this.je.getGlyphIDs(e),e=this.je.getGlyphWidths(e);let t=0;for(let n of e)t+=n;return{width:t}},this.moveTo=function(e,n){var r=this.Nd;t([e,n])&&r.moveTo(e,n)},this.putImageData=function(n,r,i,a,o,s,c){if(t([r,i,a,o,s,c])){if(a===void 0)this.Hd.writePixels(n.data,n.width,n.height,r,i);else if(a||=0,o||=0,s||=n.width,c||=n.height,0>s&&(a+=s,s=Math.abs(s)),0>c&&(o+=c,c=Math.abs(c)),0>a&&(s+=a,a=0),0>o&&(c+=o,o=0),!(0>=s||0>=c)){n=e.MakeImage({width:n.width,height:n.height,alphaType:e.AlphaType.Unpremul,colorType:e.ColorType.RGBA_8888,colorSpace:e.ColorSpace.SRGB},n.data,4*n.width);var l=e.XYWHRect(a,o,s,c);r=e.XYWHRect(r+a,i+o,s,c),i=e.Matrix.invert(this.Od),this.Hd.save(),this.Hd.concat(i),this.Hd.drawImageRect(n,l,r,null,!1),this.Hd.restore(),n.delete()}}},this.quadraticCurveTo=function(e,n,r,i){var a=this.Nd;t([e,n,r,i])&&(a.isEmpty()&&a.moveTo(e,n),a.quadTo(e,n,r,i))},this.rect=function(n,r,i,a){var o=this.Nd;n=e.XYWHRect(n,r,i,a),t(n)&&o.addRect(n)},this.resetTransform=function(){this.Nd.transform(this.Od);var t=e.Matrix.invert(this.Od);this.Hd.concat(t),this.Od=this.Hd.getTotalMatrix()},this.restore=function(){var t=this.bf.pop();if(t){var n=e.Matrix.multiply(this.Od,e.Matrix.invert(t.vf));this.Nd.transform(n),this.Kd.delete(),this.Kd=t.Lf,this.qe=t.Jf,this.De=t.Xf,this.de=t.Wf,this.Xd=t.fs,this.se=t.Uf,this.te=t.Vf,this.re=t.sb,this.Ce=t.Tf,this.he=t.ga,this.Jd=t.Bf,this.Be=t.Kf,this.Le=t.Af,this.Hd.restore(),this.Od=this.Hd.getTotalMatrix()}},this.rotate=function(t){if(isFinite(t)){var n=e.Matrix.rotated(-t);this.Nd.transform(n),this.Hd.rotate(t/Math.PI*180,0,0),this.Od=this.Hd.getTotalMatrix()}},this.save=function(){if(this.Xd.oe){var e=this.Xd.oe();this.xe.push(e)}else e=this.Xd;if(this.de.oe){var t=this.de.oe();this.xe.push(t)}else t=this.de;this.bf.push({vf:this.Od.slice(),Jf:this.qe.slice(),Xf:this.De,Wf:t,fs:e,Uf:this.se,Vf:this.te,sb:this.re,Tf:this.Ce,ga:this.he,Kf:this.Be,Bf:this.Jd,Lf:this.Kd.copy(),Af:this.Le}),this.Hd.save()},this.scale=function(n,r){if(t(arguments)){var i=e.Matrix.scaled(1/n,1/r);this.Nd.transform(i),this.Hd.scale(n,r),this.Od=this.Hd.getTotalMatrix()}},this.setLineDash=function(e){for(var t=0;t<e.length;t++)if(!isFinite(e[t])||0>e[t])return;e.length%2==1&&Array.prototype.push.apply(e,e),this.qe=e},this.setTransform=function(e,n,r,i,a,o){t(arguments)&&(this.resetTransform(),this.transform(e,n,r,i,a,o))},this.ne=function(){var t=e.Matrix.invert(this.Od);this.Hd.concat(t),this.Hd.concat(e.Matrix.translated(this.se,this.te)),this.Hd.concat(this.Od)},this.ue=function(t){var n=e.multiplyByAlpha(this.Ce,this.he);if(!e.getColorComponents(n)[3]||!(this.re||this.te||this.se))return null;t=t.copy(),t.setColor(n);var r=e.MaskFilter.MakeBlur(e.BlurStyle.Normal,this.re/2,!1);return t.setMaskFilter(r),t.dispose=function(){r.delete(),this.delete()},t},this.Ue=function(){var t=this.Kd.copy();if(t.setStyle(e.PaintStyle.Stroke),r(this.de)){var n=e.multiplyByAlpha(this.de,this.he);t.setColor(n)}else n=this.de.pe(this.Od),t.setColor(e.Color(0,0,0,this.he)),t.setShader(n);if(t.setStrokeWidth(this.De),this.qe.length){var i=e.PathEffect.MakeDash(this.qe,this.Be);t.setPathEffect(i)}return t.dispose=function(){i&&i.delete(),this.delete()},t},this.stroke=function(e){e=e?e.ge():this.Nd.snapshot();var t=this.Ue(),n=this.ue(t);n&&(this.Hd.save(),this.ne(),this.Hd.drawPath(e,n),this.Hd.restore(),n.dispose()),this.Hd.drawPath(e,t),e.delete(),t.dispose()},this.strokeRect=function(t,n,r,i){var a=this.Ue(),o=this.ue(a);o&&(this.Hd.save(),this.ne(),this.Hd.drawRect(e.XYWHRect(t,n,r,i),o),this.Hd.restore(),o.dispose()),this.Hd.drawRect(e.XYWHRect(t,n,r,i),a),a.dispose()},this.strokeText=function(t,n,r){var i=this.Ue();t=e.TextBlob.MakeFromText(t,this.je);var a=this.ue(i);a&&(this.Hd.save(),this.ne(),this.Hd.drawTextBlob(t,n,r,a),this.Hd.restore(),a.dispose()),this.Hd.drawTextBlob(t,n,r,i),t.delete(),i.dispose()},this.translate=function(n,r){if(t(arguments)){var i=e.Matrix.translated(-n,-r);this.Nd.transform(i),this.Hd.translate(n,r),this.Od=this.Hd.getTotalMatrix()}},this.transform=function(t,n,r,i,a,o){t=[t,r,a,n,i,o,0,0,1],n=e.Matrix.invert(t),this.Nd.transform(n),this.Hd.concat(t),this.Od=this.Hd.getTotalMatrix()},this.addHitRegion=function(){},this.clearHitRegions=function(){},this.drawFocusIfNeeded=function(){},this.removeHitRegion=function(){},this.scrollPathIntoView=function(){},Object.defineProperty(this,"canvas",{value:null,writable:!1})}function c(t){this.Ve=t,this.Gd=new s(t.getCanvas()),this.Me=[],this.decodeImage=function(t){if(t=e.MakeImageFromEncoded(t),!t)throw`Invalid input`;return this.Me.push(t),new l(t)},this.loadFont=function(t,n){if(t=e.Typeface.MakeTypefaceFromData(t),!t)return null;this.Me.push(t);var r=(n.style||`normal`)+`|`+(n.variant||`normal`)+`|`+(n.weight||`normal`);n=n.family,o(),x[n]||(x[n]={"*":t}),x[n][r]=t},this.makePath2D=function(e){return e=new g(e),this.Me.push(e.ge()),e},this.getContext=function(e){return e===`2d`?this.Gd:null},this.toDataURL=function(t,n){this.Ve.flush();var r=this.Ve.makeImageSnapshot();if(r){t||=`image/png`;var i=e.ImageFormat.PNG;if(t===`image/jpeg`&&(i=e.ImageFormat.JPEG),n=r.encodeToBytes(i,n||.92)){if(r.delete(),t=`data:`+t+`;base64,`,typeof Buffer<`u`)n=Buffer.from(n).toString(`base64`);else{r=0,i=n.length;for(var a=``,o;r<i;)o=n.slice(r,Math.min(r+32768,i)),a+=String.fromCharCode.apply(null,o),r+=32768;n=btoa(a)}return t+n}}},this.dispose=function(){this.Gd.ie(),this.Me.forEach(function(e){e.delete()}),this.Ve.dispose()}}function l(e){this.width=e.width(),this.height=e.height(),this.naturalWidth=this.width,this.naturalHeight=this.height,this.gf=function(){return e}}function u(e,t,n){if(!t||n===0)throw TypeError(`invalid dimensions, width and height must be non-zero`);if(e.length%4)throw TypeError(`arr must be a multiple of 4`);n||=e.length/(4*t),Object.defineProperty(this,"data",{value:e,writable:!1}),Object.defineProperty(this,"height",{value:n,writable:!1}),Object.defineProperty(this,"width",{value:t,writable:!1})}function d(t,n,r,a){this.Td=null,this.be=[],this.Ud=[],this.addColorStop=function(e,t){if(0>e||1<e||!isFinite(e))throw`offset must be between 0 and 1 inclusively`;t=i(t);var n=this.Ud.indexOf(e);if(n!==-1)this.be[n]=t;else{for(n=0;n<this.Ud.length&&!(this.Ud[n]>e);n++);this.Ud.splice(n,0,e),this.be.splice(n,0,t)}},this.oe=function(){var e=new d(t,n,r,a);return e.be=this.be.slice(),e.Ud=this.Ud.slice(),e},this.ie=function(){this.Td&&=(this.Td.delete(),null)},this.pe=function(i){var o=[t,n,r,a];e.Matrix.mapPoints(i,o),i=o[0];var s=o[1],c=o[2];return o=o[3],this.ie(),this.Td=e.Shader.MakeLinearGradient([i,s],[c,o],this.be,this.Ud,e.TileMode.Clamp)}}function f(e,n,r,i,a,o){if(t([n,r,i,a,o])){if(0>o)throw`radii cannot be negative`;e.isEmpty()&&e.moveTo(n,r),e.arcToTangent(n,r,i,a,o)}}function p(t,n,r,i,a,o,s){s=(s-o)/Math.PI*180,o=o/Math.PI*180,n=e.LTRBRect(n-i,r-a,n+i,r+a),1e-5>Math.abs(Math.abs(s)-360)?(r=s/2,t.arcToOval(n,o,r,!1),t.arcToOval(n,o+r,r,!1)):t.arcToOval(n,o,s,!1)}function m(n,r,i,a,o,s,c,l,u){if(t([r,i,a,o,s,c,l])){if(0>a||0>o)throw`radii cannot be negative`;var d=2*Math.PI,f=c%d;0>f&&(f+=d);var m=f-c;c=f,l+=m,!u&&l-c>=d?l=c+d:u&&c-l>=d?l=c-d:!u&&c>l?l=c+(d-(c-l)%d):u&&c<l&&(l=c-(d-(l-c)%d)),s?(u=e.Matrix.rotated(s,r,i),s=e.Matrix.rotated(-s,r,i),n.transform(s),p(n,r,i,a,o,c,l),n.transform(u)):p(n,r,i,a,o,c,l)}}function h(e,n,r){t([n,r])&&(e.isEmpty()&&e.moveTo(n,r),e.lineTo(n,r))}function g(n){this.Vd=new e.PathBuilder,typeof n==`string`?(n=e.Path.MakeFromSVGString(n),this.Vd.addPath(n),n.delete()):n&&n.ge&&(n=n.ge(),this.Vd.addPath(n),n.delete()),this.ge=function(){return this.Vd.snapshot()},this.addPath=function(e,t){t||={a:1,c:0,e:0,b:0,d:1,f:0},e=e.ge(),this.Vd.addPath(e,[t.a,t.c,t.e,t.b,t.d,t.f]),e.delete()},this.arc=function(e,t,n,r,i,a){m(this.Vd,e,t,n,n,0,r,i,a)},this.arcTo=function(e,t,n,r,i){f(this.Vd,e,t,n,r,i)},this.bezierCurveTo=function(e,n,r,i,a,o){var s=this.Vd;t([e,n,r,i,a,o])&&(s.isEmpty()&&s.moveTo(e,n),s.cubicTo(e,n,r,i,a,o))},this.closePath=function(){var e=this.Vd;e.isEmpty()||e.countPoints()!=1&&e.close()},this.ellipse=function(e,t,n,r,i,a,o,s){m(this.Vd,e,t,n,r,i,a,o,s)},this.lineTo=function(e,t){h(this.Vd,e,t)},this.moveTo=function(e,n){var r=this.Vd;t([e,n])&&r.moveTo(e,n)},this.quadraticCurveTo=function(e,n,r,i){var a=this.Vd;t([e,n,r,i])&&(a.isEmpty()&&a.moveTo(e,n),a.quadTo(e,n,r,i))},this.rect=function(n,r,i,a){var o=this.Vd;n=e.XYWHRect(n,r,i,a),t(n)&&o.addRect(n)}}function _(n,r){switch(this.Td=null,n instanceof l&&(n=n.gf()),this.qf=n,this._transform=e.Matrix.identity(),r===``&&(r=`repeat`),r){case`repeat-x`:this.ve=e.TileMode.Repeat,this.we=e.TileMode.Decal;break;case`repeat-y`:this.ve=e.TileMode.Decal,this.we=e.TileMode.Repeat;break;case`repeat`:this.we=this.ve=e.TileMode.Repeat;break;case`no-repeat`:this.we=this.ve=e.TileMode.Decal;break;default:throw`invalid repetition mode `+r}this.setTransform=function(e){e=[e.a,e.c,e.e,e.b,e.d,e.f,0,0,1],t(e)&&(this._transform=e)},this.oe=function(){var e=new _;return e.ve=this.ve,e.we=this.we,e},this.ie=function(){this.Td&&=(this.Td.delete(),null)},this.pe=function(){return this.ie(),this.Td=this.qf.makeShaderCubic(this.ve,this.we,1/3,1/3,this._transform)}}function v(t,n,r,a,o,s){this.Td=null,this.be=[],this.Ud=[],this.addColorStop=function(e,t){if(0>e||1<e||!isFinite(e))throw`offset must be between 0 and 1 inclusively`;t=i(t);var n=this.Ud.indexOf(e);if(n!==-1)this.be[n]=t;else{for(n=0;n<this.Ud.length&&!(this.Ud[n]>e);n++);this.Ud.splice(n,0,e),this.be.splice(n,0,t)}},this.oe=function(){var e=new v(t,n,r,a,o,s);return e.be=this.be.slice(),e.Ud=this.Ud.slice(),e},this.ie=function(){this.Td&&=(this.Td.delete(),null)},this.pe=function(i){var c=[t,n,a,o];e.Matrix.mapPoints(i,c);var l=c[0],u=c[1],d=c[2];c=c[3];var f=(Math.abs(i[0])+Math.abs(i[4]))/2;return i=r*f,f*=s,this.ie(),this.Td=e.Shader.MakeTwoPointConicalGradient([l,u],i,[d,c],f,this.be,this.Ud,e.TileMode.Clamp)}}e._testing={};var y={aliceblue:Float32Array.of(.941,.973,1,1),antiquewhite:Float32Array.of(.98,.922,.843,1),aqua:Float32Array.of(0,1,1,1),aquamarine:Float32Array.of(.498,1,.831,1),azure:Float32Array.of(.941,1,1,1),beige:Float32Array.of(.961,.961,.863,1),bisque:Float32Array.of(1,.894,.769,1),black:Float32Array.of(0,0,0,1),blanchedalmond:Float32Array.of(1,.922,.804,1),blue:Float32Array.of(0,0,1,1),blueviolet:Float32Array.of(.541,.169,.886,1),brown:Float32Array.of(.647,.165,.165,1),burlywood:Float32Array.of(.871,.722,.529,1),cadetblue:Float32Array.of(.373,.62,.627,1),chartreuse:Float32Array.of(.498,1,0,1),chocolate:Float32Array.of(.824,.412,.118,1),coral:Float32Array.of(1,.498,.314,1),cornflowerblue:Float32Array.of(.392,.584,.929,1),cornsilk:Float32Array.of(1,.973,.863,1),crimson:Float32Array.of(.863,.078,.235,1),cyan:Float32Array.of(0,1,1,1),darkblue:Float32Array.of(0,0,.545,1),darkcyan:Float32Array.of(0,.545,.545,1),darkgoldenrod:Float32Array.of(.722,.525,.043,1),darkgray:Float32Array.of(.663,.663,.663,1),darkgreen:Float32Array.of(0,.392,0,1),darkgrey:Float32Array.of(.663,.663,.663,1),darkkhaki:Float32Array.of(.741,.718,.42,1),darkmagenta:Float32Array.of(.545,0,.545,1),darkolivegreen:Float32Array.of(.333,.42,.184,1),darkorange:Float32Array.of(1,.549,0,1),darkorchid:Float32Array.of(.6,.196,.8,1),darkred:Float32Array.of(.545,0,0,1),darksalmon:Float32Array.of(.914,.588,.478,1),darkseagreen:Float32Array.of(.561,.737,.561,1),darkslateblue:Float32Array.of(.282,.239,.545,1),darkslategray:Float32Array.of(.184,.31,.31,1),darkslategrey:Float32Array.of(.184,.31,.31,1),darkturquoise:Float32Array.of(0,.808,.82,1),darkviolet:Float32Array.of(.58,0,.827,1),deeppink:Float32Array.of(1,.078,.576,1),deepskyblue:Float32Array.of(0,.749,1,1),dimgray:Float32Array.of(.412,.412,.412,1),dimgrey:Float32Array.of(.412,.412,.412,1),dodgerblue:Float32Array.of(.118,.565,1,1),firebrick:Float32Array.of(.698,.133,.133,1),floralwhite:Float32Array.of(1,.98,.941,1),forestgreen:Float32Array.of(.133,.545,.133,1),fuchsia:Float32Array.of(1,0,1,1),gainsboro:Float32Array.of(.863,.863,.863,1),ghostwhite:Float32Array.of(.973,.973,1,1),gold:Float32Array.of(1,.843,0,1),goldenrod:Float32Array.of(.855,.647,.125,1),gray:Float32Array.of(.502,.502,.502,1),green:Float32Array.of(0,.502,0,1),greenyellow:Float32Array.of(.678,1,.184,1),grey:Float32Array.of(.502,.502,.502,1),honeydew:Float32Array.of(.941,1,.941,1),hotpink:Float32Array.of(1,.412,.706,1),indianred:Float32Array.of(.804,.361,.361,1),indigo:Float32Array.of(.294,0,.51,1),ivory:Float32Array.of(1,1,.941,1),khaki:Float32Array.of(.941,.902,.549,1),lavender:Float32Array.of(.902,.902,.98,1),lavenderblush:Float32Array.of(1,.941,.961,1),lawngreen:Float32Array.of(.486,.988,0,1),lemonchiffon:Float32Array.of(1,.98,.804,1),lightblue:Float32Array.of(.678,.847,.902,1),lightcoral:Float32Array.of(.941,.502,.502,1),lightcyan:Float32Array.of(.878,1,1,1),lightgoldenrodyellow:Float32Array.of(.98,.98,.824,1),lightgray:Float32Array.of(.827,.827,.827,1),lightgreen:Float32Array.of(.565,.933,.565,1),lightgrey:Float32Array.of(.827,.827,.827,1),lightpink:Float32Array.of(1,.714,.757,1),lightsalmon:Float32Array.of(1,.627,.478,1),lightseagreen:Float32Array.of(.125,.698,.667,1),lightskyblue:Float32Array.of(.529,.808,.98,1),lightslategray:Float32Array.of(.467,.533,.6,1),lightslategrey:Float32Array.of(.467,.533,.6,1),lightsteelblue:Float32Array.of(.69,.769,.871,1),lightyellow:Float32Array.of(1,1,.878,1),lime:Float32Array.of(0,1,0,1),limegreen:Float32Array.of(.196,.804,.196,1),linen:Float32Array.of(.98,.941,.902,1),magenta:Float32Array.of(1,0,1,1),maroon:Float32Array.of(.502,0,0,1),mediumaquamarine:Float32Array.of(.4,.804,.667,1),mediumblue:Float32Array.of(0,0,.804,1),mediumorchid:Float32Array.of(.729,.333,.827,1),mediumpurple:Float32Array.of(.576,.439,.859,1),mediumseagreen:Float32Array.of(.235,.702,.443,1),mediumslateblue:Float32Array.of(.482,.408,.933,1),mediumspringgreen:Float32Array.of(0,.98,.604,1),mediumturquoise:Float32Array.of(.282,.82,.8,1),mediumvioletred:Float32Array.of(.78,.082,.522,1),midnightblue:Float32Array.of(.098,.098,.439,1),mintcream:Float32Array.of(.961,1,.98,1),mistyrose:Float32Array.of(1,.894,.882,1),moccasin:Float32Array.of(1,.894,.71,1),navajowhite:Float32Array.of(1,.871,.678,1),navy:Float32Array.of(0,0,.502,1),oldlace:Float32Array.of(.992,.961,.902,1),olive:Float32Array.of(.502,.502,0,1),olivedrab:Float32Array.of(.42,.557,.137,1),orange:Float32Array.of(1,.647,0,1),orangered:Float32Array.of(1,.271,0,1),orchid:Float32Array.of(.855,.439,.839,1),palegoldenrod:Float32Array.of(.933,.91,.667,1),palegreen:Float32Array.of(.596,.984,.596,1),paleturquoise:Float32Array.of(.686,.933,.933,1),palevioletred:Float32Array.of(.859,.439,.576,1),papayawhip:Float32Array.of(1,.937,.835,1),peachpuff:Float32Array.of(1,.855,.725,1),peru:Float32Array.of(.804,.522,.247,1),pink:Float32Array.of(1,.753,.796,1),plum:Float32Array.of(.867,.627,.867,1),powderblue:Float32Array.of(.69,.878,.902,1),purple:Float32Array.of(.502,0,.502,1),rebeccapurple:Float32Array.of(.4,.2,.6,1),red:Float32Array.of(1,0,0,1),rosybrown:Float32Array.of(.737,.561,.561,1),royalblue:Float32Array.of(.255,.412,.882,1),saddlebrown:Float32Array.of(.545,.271,.075,1),salmon:Float32Array.of(.98,.502,.447,1),sandybrown:Float32Array.of(.957,.643,.376,1),seagreen:Float32Array.of(.18,.545,.341,1),seashell:Float32Array.of(1,.961,.933,1),sienna:Float32Array.of(.627,.322,.176,1),silver:Float32Array.of(.753,.753,.753,1),skyblue:Float32Array.of(.529,.808,.922,1),slateblue:Float32Array.of(.416,.353,.804,1),slategray:Float32Array.of(.439,.502,.565,1),slategrey:Float32Array.of(.439,.502,.565,1),snow:Float32Array.of(1,.98,.98,1),springgreen:Float32Array.of(0,1,.498,1),steelblue:Float32Array.of(.275,.51,.706,1),tan:Float32Array.of(.824,.706,.549,1),teal:Float32Array.of(0,.502,.502,1),thistle:Float32Array.of(.847,.749,.847,1),tomato:Float32Array.of(1,.388,.278,1),transparent:Float32Array.of(0,0,0,0),turquoise:Float32Array.of(.251,.878,.816,1),violet:Float32Array.of(.933,.51,.933,1),wheat:Float32Array.of(.961,.871,.702,1),white:Float32Array.of(1,1,1,1),whitesmoke:Float32Array.of(.961,.961,.961,1),yellow:Float32Array.of(1,1,0,1),yellowgreen:Float32Array.of(.604,.804,.196,1)};e._testing.parseColor=i,e._testing.colorToString=n;var b=RegExp(`(italic|oblique|normal|)\\s*(small-caps|normal|)\\s*(bold|bolder|lighter|[1-9]00|normal|)\\s*([\\d\\.]+)(px|pt|pc|in|cm|mm|%|em|ex|ch|rem|q)(.+)`),x;e._testing.parseFontString=a,e.MakeCanvas=function(t,n){return(t=e.MakeSurface(t,n))?new c(t):null},e.ImageData=function(){if(arguments.length===2){var e=arguments[0],t=arguments[1];return new u(new Uint8ClampedArray(4*e*t),e,t)}if(arguments.length===3){var n=arguments[0];if(n.prototype.constructor!==Uint8ClampedArray)throw TypeError(`bytes must be given as a Uint8ClampedArray`);if(e=arguments[1],t=arguments[2],n%4)throw TypeError(`bytes must be given in a multiple of 4`);if(n%e)throw TypeError(`bytes must divide evenly by width`);if(t&&t!==n/(4*e))throw TypeError(`invalid height given`);return new u(n,e,n/(4*e))}throw TypeError(`invalid number of arguments - takes 2 or 3, saw `+arguments.length)}})()})(i);var d=`./this.program`,f=(e,t)=>{throw t},p=``,m,_;if(u){var v=(h(),e(g));h(),p=__dirname+`/`,_=e=>(e=ee(e)?new URL(e):e,v.readFileSync(e)),m=async e=>(e=ee(e)?new URL(e):e,v.readFileSync(e,void 0)),1<process.argv.length&&(d=process.argv[1].replace(/\\/g,`/`)),process.argv.slice(2),f=(e,t)=>{throw process.exitCode=e,t}}else(c||l)&&(l?p=self.location.href:typeof document<`u`&&document.currentScript&&(p=document.currentScript.src),t&&(p=t),p=p.startsWith(`blob:`)?``:p.slice(0,p.replace(/[?#].*/,``).lastIndexOf(`/`)+1),l&&(_=e=>{var t=new XMLHttpRequest;return t.open(`GET`,e,!1),t.responseType=`arraybuffer`,t.send(null),new Uint8Array(t.response)}),m=async e=>{if(ee(e))return new Promise((t,n)=>{var r=new XMLHttpRequest;r.open(`GET`,e,!0),r.responseType=`arraybuffer`,r.onload=()=>{r.status==200||r.status==0&&r.response?t(r.response):n(r.status)},r.onerror=n,r.send(null)});var t=await fetch(e,{credentials:`same-origin`});if(t.ok)return t.arrayBuffer();throw Error(t.status+` : `+t.url)});var y=console.log.bind(console),b=console.error.bind(console),x,S=!1,C,w,T,E,D,O,k,A,j,M,ee=e=>e.startsWith(`file://`);function te(){var e=x.buffer;C=new Int8Array(e),T=new Int16Array(e),i.HEAPU8=w=new Uint8Array(e),i.HEAPU16=E=new Uint16Array(e),i.HEAP32=D=new Int32Array(e),i.HEAPU32=O=new Uint32Array(e),i.HEAPF32=k=new Float32Array(e),M=new Float64Array(e),A=new BigInt64Array(e),j=new BigUint64Array(e)}var ne=0,re=null;function ie(e){throw e=`Aborted(`+e+`)`,b(e),S=!0,e=new WebAssembly.RuntimeError(e+`. Build with -sASSERTIONS for more info.`),o(e),e}var ae;async function oe(e){try{var t=await m(e);return new Uint8Array(t)}catch{}if(_)e=_(e);else throw`both async and sync fetching of the wasm failed`;return e}async function se(e,t){try{var n=await oe(e);return await WebAssembly.instantiate(n,t)}catch(e){b(`failed to asynchronously prepare wasm: ${e}`),ie(e)}}async function ce(e){var t=ae;if(typeof WebAssembly.instantiateStreaming==`function`&&!ee(t)&&!u)try{var n=fetch(t,{credentials:`same-origin`});return await WebAssembly.instantiateStreaming(n,e)}catch(e){b(`wasm streaming compile failed: ${e}`),b(`falling back to ArrayBuffer instantiation`)}return se(t,e)}class le{name=`ExitStatus`;constructor(e){this.message=`Program terminated with exit(${e})`,this.status=e}}var N=typeof TextDecoder<`u`?new TextDecoder:void 0,ue=(e,t=0,n=NaN)=>{var r=t+n;for(n=t;e[n]&&!(n>=r);)++n;if(16<n-t&&e.buffer&&N)return N.decode(e.subarray(t,n));for(r=``;t<n;){var i=e[t++];if(i&128){var a=e[t++]&63;if((i&224)==192)r+=String.fromCharCode((i&31)<<6|a);else{var o=e[t++]&63;i=(i&240)==224?(i&15)<<12|a<<6|o:(i&7)<<18|a<<12|o<<6|e[t++]&63,65536>i?r+=String.fromCharCode(i):(i-=65536,r+=String.fromCharCode(55296|i>>10,56320|i&1023))}}else r+=String.fromCharCode(i)}return r},de={},fe=e=>{for(;e.length;){var t=e.pop();e.pop()(t)}};function pe(e){return this.fromWireType(O[e>>2])}var me={},he={},ge={},_e=i.InternalError=class extends Error{constructor(e){super(e),this.name=`InternalError`}},ve=(e,t,n)=>{function r(t){if(t=n(t),t.length!==e.length)throw new _e(`Mismatched type converter count`);for(var r=0;r<e.length;++r)Se(e[r],t[r])}e.forEach(e=>ge[e]=t);var i=Array(t.length),a=[],o=0;t.forEach((e,t)=>{he.hasOwnProperty(e)?i[t]=he[e]:(a.push(e),me.hasOwnProperty(e)||(me[e]=[]),me[e].push(()=>{i[t]=he[e],++o,o===a.length&&r(i)}))}),a.length===0&&r(i)},ye=e=>{if(e===null)return`null`;var t=typeof e;return t===`object`||t===`array`||t===`function`?e.toString():``+e},be,P=e=>{for(var t=``;w[e];)t+=be[w[e++]];return t},F=i.BindingError=class extends Error{constructor(e){super(e),this.name=`BindingError`}};function xe(e,t,n={}){var r=t.name;if(!e)throw new F(`type "${r}" must have a positive integer typeid pointer`);if(he.hasOwnProperty(e)){if(n.Hf)return;throw new F(`Cannot register type '${r}' twice`)}he[e]=t,delete ge[e],me.hasOwnProperty(e)&&(t=me[e],delete me[e],t.forEach(e=>e()))}function Se(e,t,n={}){return xe(e,t,n)}var Ce=(e,t,n)=>{switch(t){case 1:return n?e=>C[e]:e=>w[e];case 2:return n?e=>T[e>>1]:e=>E[e>>1];case 4:return n?e=>D[e>>2]:e=>O[e>>2];case 8:return n?e=>A[e>>3]:e=>j[e>>3];default:throw TypeError(`invalid integer width (${t}): ${e}`)}},we=e=>{throw new F(e.Fd.Qd.Ld.name+` instance already deleted`)},Te=!1,Ee=()=>{},De=e=>typeof FinalizationRegistry>`u`?(De=e=>e,e):(Te=new FinalizationRegistry(e=>{e=e.Fd,--e.count.value,e.count.value===0&&(e.Rd?e.ae.fe(e.Rd):e.Qd.Ld.fe(e.Md))}),De=e=>{var t=e.Fd;return t.Rd&&Te.register(e,{Fd:t},e),e},Ee=e=>{Te.unregister(e)},De(e)),Oe=[];function ke(){}var Ae=(e,t)=>Object.defineProperty(t,"name",{value:e}),je={},Me=(e,t,n)=>{if(e[t].Sd===void 0){var r=e[t];e[t]=function(...r){if(!e[t].Sd.hasOwnProperty(r.length))throw new F(`Function '${n}' called with an invalid number of arguments (${r.length}) - expects one of (${e[t].Sd})!`);return e[t].Sd[r.length].apply(this,r)},e[t].Sd=[],e[t].Sd[r.ke]=r}},Ne=(e,t,n)=>{if(i.hasOwnProperty(e)){if(n===void 0||i[e].Sd!==void 0&&i[e].Sd[n]!==void 0)throw new F(`Cannot register public name '${e}' twice`);if(Me(i,e,e),i[e].Sd.hasOwnProperty(n))throw new F(`Cannot register multiple overloads of a function with the same number of arguments (${n})!`);i[e].Sd[n]=t}else i[e]=t,i[e].ke=n},Pe=e=>{e=e.replace(/[^a-zA-Z0-9_]/g,`$`);var t=e.charCodeAt(0);return 48<=t&&57>=t?`_${e}`:e};function Fe(e,t,n,r,i,a,o,s){this.name=e,this.constructor=t,this.ze=n,this.fe=r,this.Wd=i,this.Cf=a,this.Ie=o,this.xf=s,this.Nf=[]}var Ie=(e,t,n)=>{for(;t!==n;){if(!t.Ie)throw new F(`Expected null or instance of ${n.name}, got an instance of ${t.name}`);e=t.Ie(e),t=t.Wd}return e};function Le(e,t){if(t===null){if(this.Ye)throw new F(`null is not a valid ${this.name}`);return 0}if(!t.Fd)throw new F(`Cannot pass "${ye(t)}" as a ${this.name}`);if(!t.Fd.Md)throw new F(`Cannot pass deleted object as a pointer of type ${this.name}`);return Ie(t.Fd.Md,t.Fd.Qd.Ld,this.Ld)}function Re(e,t){if(t===null){if(this.Ye)throw new F(`null is not a valid ${this.name}`);if(this.Pe){var n=this.Ze();return e!==null&&e.push(this.fe,n),n}return 0}if(!t||!t.Fd)throw new F(`Cannot pass "${ye(t)}" as a ${this.name}`);if(!t.Fd.Md)throw new F(`Cannot pass deleted object as a pointer of type ${this.name}`);if(!this.Oe&&t.Fd.Qd.Oe)throw new F(`Cannot convert argument of type ${t.Fd.ae?t.Fd.ae.name:t.Fd.Qd.name} to parameter type ${this.name}`);if(n=Ie(t.Fd.Md,t.Fd.Qd.Ld,this.Ld),this.Pe){if(t.Fd.Rd===void 0)throw new F(`Passing raw pointer to smart pointer is illegal`);switch(this.Sf){case 0:if(t.Fd.ae===this)n=t.Fd.Rd;else throw new F(`Cannot convert argument of type ${t.Fd.ae?t.Fd.ae.name:t.Fd.Qd.name} to parameter type ${this.name}`);break;case 1:n=t.Fd.Rd;break;case 2:if(t.Fd.ae===this)n=t.Fd.Rd;else{var r=t.clone();n=this.Of(n,at(()=>r.delete())),e!==null&&e.push(this.fe,n)}break;default:throw new F(`Unsupporting sharing policy`)}}return n}function ze(e,t){if(t===null){if(this.Ye)throw new F(`null is not a valid ${this.name}`);return 0}if(!t.Fd)throw new F(`Cannot pass "${ye(t)}" as a ${this.name}`);if(!t.Fd.Md)throw new F(`Cannot pass deleted object as a pointer of type ${this.name}`);if(t.Fd.Qd.Oe)throw new F(`Cannot convert argument of type ${t.Fd.Qd.name} to parameter type ${this.name}`);return Ie(t.Fd.Md,t.Fd.Qd.Ld,this.Ld)}var Be=(e,t,n)=>t===n?e:n.Wd===void 0?null:(e=Be(e,t,n.Wd),e===null?null:n.xf(e)),Ve={},He=(e,t)=>{if(t===void 0)throw new F(`ptr should not be undefined`);for(;e.Wd;)t=e.Ie(t),e=e.Wd;return Ve[t]},Ue=(e,t)=>{if(!t.Qd||!t.Md)throw new _e(`makeClassHandle requires ptr and ptrType`);if(!!t.ae!=!!t.Rd)throw new _e(`Both smartPtrType and smartPtr must be specified`);return t.count={value:1},De(Object.create(e,{Fd:{value:t,writable:!0}}))};function We(e,t,n,r,i,a,o,s,c,l,u){this.name=e,this.Ld=t,this.Ye=n,this.Oe=r,this.Pe=i,this.Mf=a,this.Sf=o,this.jf=s,this.Ze=c,this.Of=l,this.fe=u,i||t.Wd!==void 0?this.toWireType=Re:(this.toWireType=r?Le:ze,this.$d=null)}var Ge=(e,t,n)=>{if(!i.hasOwnProperty(e))throw new _e(`Replacing nonexistent public symbol`);i[e].Sd!==void 0&&n!==void 0?i[e].Sd[n]=t:(i[e]=t,i[e].ke=n)},Ke,qe=(e,t)=>{e=P(e);var n=Ke.get(t);if(typeof n!=`function`)throw new F(`unknown function pointer with signature ${e}: ${t}`);return n};class Je extends Error{}var Ye=e=>{e=On(e);var t=P(e);return An(e),t},Xe=(e,t)=>{function n(e){i[e]||he[e]||(ge[e]?ge[e].forEach(n):(r.push(e),i[e]=!0))}var r=[],i={};throw t.forEach(n),new Je(`${e}: `+r.map(Ye).join([`, `]))};function Ze(e){for(var t=1;t<e.length;++t)if(e[t]!==null&&e[t].$d===void 0)return!0;return!1}function Qe(e,t,n,r,i){var a=t.length;if(2>a)throw new F(`argTypes array size mismatch! Must at least get return value and 'this' types!`);var o=t[1]!==null&&n!==null,s=Ze(t),c=t[0].name!==`void`,l=a-2,u=Array(l),d=[],f=[];return Ae(e,function(...e){if(f.length=0,d.length=o?2:1,d[0]=i,o){var n=t[1].toWireType(f,this);d[1]=n}for(var a=0;a<l;++a)u[a]=t[a+2].toWireType(f,e[a]),d.push(u[a]);if(e=r(...d),s)fe(f);else for(a=o?1:2;a<t.length;a++){var p=a===1?n:u[a-2];t[a].$d!==null&&t[a].$d(p)}return n=c?t[0].fromWireType(e):void 0,n})}for(var $e=(e,t)=>{for(var n=[],r=0;r<e;r++)n.push(O[t+4*r>>2]);return n},et=e=>{e=e.trim();let t=e.indexOf(`(`);return t===-1?e:e.slice(0,t)},tt=[],nt=[],rt=e=>{9<e&&--nt[e+1]===0&&(nt[e]=void 0,tt.push(e))},it=e=>{if(!e)throw new F(`Cannot use deleted val. handle = ${e}`);return nt[e]},at=e=>{switch(e){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let t=tt.pop()||nt.length;return nt[t]=e,nt[t+1]=1,t}},ot={name:`emscripten::val`,fromWireType:e=>{var t=it(e);return rt(e),t},toWireType:(e,t)=>at(t),Yd:8,readValueFromPointer:pe,$d:null},st=(e,t,n)=>{switch(t){case 1:return n?function(e){return this.fromWireType(C[e])}:function(e){return this.fromWireType(w[e])};case 2:return n?function(e){return this.fromWireType(T[e>>1])}:function(e){return this.fromWireType(E[e>>1])};case 4:return n?function(e){return this.fromWireType(D[e>>2])}:function(e){return this.fromWireType(O[e>>2])};default:throw TypeError(`invalid integer width (${t}): ${e}`)}},ct=(e,t)=>{var n=he[e];if(n===void 0)throw e=`${t} has unknown type ${Ye(e)}`,new F(e);return n},lt=(e,t)=>{switch(t){case 4:return function(e){return this.fromWireType(k[e>>2])};case 8:return function(e){return this.fromWireType(M[e>>3])};default:throw TypeError(`invalid float width (${t}): ${e}`)}},I=(e,t,n)=>{var r=w;if(!(0<n))return 0;var i=t;n=t+n-1;for(var a=0;a<e.length;++a){var o=e.charCodeAt(a);if(55296<=o&&57343>=o){var s=e.charCodeAt(++a);o=65536+((o&1023)<<10)|s&1023}if(127>=o){if(t>=n)break;r[t++]=o}else{if(2047>=o){if(t+1>=n)break;r[t++]=192|o>>6}else{if(65535>=o){if(t+2>=n)break;r[t++]=224|o>>12}else{if(t+3>=n)break;r[t++]=240|o>>18,r[t++]=128|o>>12&63}r[t++]=128|o>>6&63}r[t++]=128|o&63}}return r[t]=0,t-i},ut=e=>{for(var t=0,n=0;n<e.length;++n){var r=e.charCodeAt(n);127>=r?t++:2047>=r?t+=2:55296<=r&&57343>=r?(t+=4,++n):t+=3}return t},dt=typeof TextDecoder<`u`?new TextDecoder(`utf-16le`):void 0,ft=(e,t)=>{for(var n=e>>1,r=n+t/2;!(n>=r)&&E[n];)++n;if(n<<=1,32<n-e&&dt)return dt.decode(w.subarray(e,n));for(n=``,r=0;!(r>=t/2);++r){var i=T[e+2*r>>1];if(i==0)break;n+=String.fromCharCode(i)}return n},pt=(e,t,n)=>{if(n??=2147483647,2>n)return 0;n-=2;var r=t;n=n<2*e.length?n/2:e.length;for(var i=0;i<n;++i)T[t>>1]=e.charCodeAt(i),t+=2;return T[t>>1]=0,t-r},mt=e=>2*e.length,ht=(e,t)=>{for(var n=0,r=``;!(n>=t/4);){var i=D[e+4*n>>2];if(i==0)break;++n,65536<=i?(i-=65536,r+=String.fromCharCode(55296|i>>10,56320|i&1023)):r+=String.fromCharCode(i)}return r},gt=(e,t,n)=>{if(n??=2147483647,4>n)return 0;var r=t;n=r+n-4;for(var i=0;i<e.length;++i){var a=e.charCodeAt(i);if(55296<=a&&57343>=a){var o=e.charCodeAt(++i);a=65536+((a&1023)<<10)|o&1023}if(D[t>>2]=a,t+=4,t+4>n)break}return D[t>>2]=0,t-r},_t=e=>{for(var t=0,n=0;n<e.length;++n){var r=e.charCodeAt(n);55296<=r&&57343>=r&&++n,t+=4}return t},vt=(e,t,n)=>{var r=[];return e=e.toWireType(r,n),r.length&&(O[t>>2]=at(r)),e},yt=[],bt={},xt=e=>{var t=bt[e];return t===void 0?P(e):t},St=()=>{function e(e){e.$$$embind_global$$$=e;var t=typeof $$$embind_global$$$==`object`&&e.$$$embind_global$$$==e;return t||delete e.$$$embind_global$$$,t}if(typeof globalThis==`object`)return globalThis;if(typeof $$$embind_global$$$==`object`||(typeof global==`object`&&e(global)?$$$embind_global$$$=global:typeof self==`object`&&e(self)&&($$$embind_global$$$=self),typeof $$$embind_global$$$==`object`))return $$$embind_global$$$;throw Error(`unable to get global object.`)},Ct=e=>{var t=yt.length;return yt.push(e),t},wt=(e,t)=>{for(var n=Array(e),r=0;r<e;++r)n[r]=ct(O[t+4*r>>2],`parameter ${r}`);return n},Tt=Reflect.construct,L,Et=e=>{var t=e.getExtension(`ANGLE_instanced_arrays`);t&&(e.vertexAttribDivisor=(e,n)=>t.vertexAttribDivisorANGLE(e,n),e.drawArraysInstanced=(e,n,r,i)=>t.drawArraysInstancedANGLE(e,n,r,i),e.drawElementsInstanced=(e,n,r,i,a)=>t.drawElementsInstancedANGLE(e,n,r,i,a))},Dt=e=>{var t=e.getExtension(`OES_vertex_array_object`);t&&(e.createVertexArray=()=>t.createVertexArrayOES(),e.deleteVertexArray=e=>t.deleteVertexArrayOES(e),e.bindVertexArray=e=>t.bindVertexArrayOES(e),e.isVertexArray=e=>t.isVertexArrayOES(e))},Ot=e=>{var t=e.getExtension(`WEBGL_draw_buffers`);t&&(e.drawBuffers=(e,n)=>t.drawBuffersWEBGL(e,n))},kt=e=>{var t=`ANGLE_instanced_arrays EXT_blend_minmax EXT_disjoint_timer_query EXT_frag_depth EXT_shader_texture_lod EXT_sRGB OES_element_index_uint OES_fbo_render_mipmap OES_standard_derivatives OES_texture_float OES_texture_half_float OES_texture_half_float_linear OES_vertex_array_object WEBGL_color_buffer_float WEBGL_depth_texture WEBGL_draw_buffers EXT_color_buffer_float EXT_conservative_depth EXT_disjoint_timer_query_webgl2 EXT_texture_norm16 NV_shader_noperspective_interpolation WEBGL_clip_cull_distance EXT_clip_control EXT_color_buffer_half_float EXT_depth_clamp EXT_float_blend EXT_polygon_offset_clamp EXT_texture_compression_bptc EXT_texture_compression_rgtc EXT_texture_filter_anisotropic KHR_parallel_shader_compile OES_texture_float_linear WEBGL_blend_func_extended WEBGL_compressed_texture_astc WEBGL_compressed_texture_etc WEBGL_compressed_texture_etc1 WEBGL_compressed_texture_s3tc WEBGL_compressed_texture_s3tc_srgb WEBGL_debug_renderer_info WEBGL_debug_shaders WEBGL_lose_context WEBGL_multi_draw WEBGL_polygon_mode`.split(` `);return(e.getSupportedExtensions()||[]).filter(e=>t.includes(e))},At=1,jt=[],Mt=[],Nt=[],Pt=[],Ft=[],R=[],It=[],Lt=[],Rt=[],zt=[],z=[],Bt={},Vt={},Ht=4,Ut=0,Wt=e=>{for(var t=At++,n=e.length;n<t;n++)e[n]=null;return t},Gt=(e,t,n,r)=>{for(var i=0;i<e;i++){var a=L[n](),o=a&&Wt(r);a?(a.name=o,r[o]=a):V||=1282,D[t+4*i>>2]=o}},Kt=(e,t)=>{e.af||(e.af=e.getContext,e.getContext=function(t,n){return n=e.af(t,n),t==`webgl`==n instanceof WebGLRenderingContext?n:null});var n=1<t.majorVersion?e.getContext(`webgl2`,t):e.getContext(`webgl`,t);return n?qt(n,t):0},qt=(e,t)=>{var n=Wt(Lt),r={handle:n,attributes:t,version:t.majorVersion,ce:e};return e.canvas&&(e.canvas.mf=r),Lt[n]=r,(t.yf===void 0||t.yf)&&Yt(r),n},Jt=e=>(B=Lt[e],i.ctx=L=B?.ce,!(e&&!L)),Yt=e=>{if(e||=B,!e.If){e.If=!0;var t=e.ce;t.ag=t.getExtension(`WEBGL_multi_draw`),t.Zf=t.getExtension(`EXT_polygon_offset_clamp`),t.Yf=t.getExtension(`EXT_clip_control`),t.cg=t.getExtension(`WEBGL_polygon_mode`),Et(t),Dt(t),Ot(t),t.ef=t.getExtension(`WEBGL_draw_instanced_base_vertex_base_instance`),t.hf=t.getExtension(`WEBGL_multi_draw_instanced_base_vertex_base_instance`),2<=e.version&&(t.ee=t.getExtension(`EXT_disjoint_timer_query_webgl2`)),(2>e.version||!t.ee)&&(t.ee=t.getExtension(`EXT_disjoint_timer_query`)),kt(t).forEach(e=>{e.includes(`lose_context`)||e.includes(`debug`)||t.getExtension(e)})}},B,V,Xt=(e,t)=>{L.bindFramebuffer(e,Nt[t])},Zt=e=>{L.bindVertexArray(It[e])},Qt=e=>L.clear(e),$t=(e,t,n,r)=>L.clearColor(e,t,n,r),en=e=>L.clearStencil(e),tn=(e,t)=>{for(var n=0;n<e;n++){var r=D[t+4*n>>2];L.deleteVertexArray(It[r]),It[r]=null}},nn=[],rn=(e,t)=>{Gt(e,t,`createVertexArray`,It)},an=()=>{var e=kt(L);return e=e.concat(e.map(e=>`GL_`+e))},on=(e,t,n)=>{if(t){var r=void 0;switch(e){case 36346:r=1;break;case 36344:n!=0&&n!=1&&(V||=1280);return;case 34814:case 36345:r=0;break;case 34466:var i=L.getParameter(34467);r=i?i.length:0;break;case 33309:if(2>B.version){V||=1282;return}r=an().length;break;case 33307:case 33308:if(2>B.version){V||=1280;return}r=e==33307?3:0}if(r===void 0)switch(i=L.getParameter(e),typeof i){case`number`:r=i;break;case`boolean`:r=+!!i;break;case`string`:V||=1280;return;case`object`:if(i===null)switch(e){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:r=0;break;default:V||=1280;return}else{if(i instanceof Float32Array||i instanceof Uint32Array||i instanceof Int32Array||i instanceof Array){for(e=0;e<i.length;++e)switch(n){case 0:D[t+4*e>>2]=i[e];break;case 2:k[t+4*e>>2]=i[e];break;case 4:C[t+e]=+!!i[e]}return}try{r=i.name|0}catch(t){V||=1280,b(`GL_INVALID_ENUM in glGet${n}v: Unknown object returned from WebGL getParameter(${e})! (error: ${t})`);return}}break;default:V||=1280,b(`GL_INVALID_ENUM in glGet${n}v: Native code calling glGet${n}v(${e}) and it returns ${i} of type ${typeof i}!`);return}switch(n){case 1:n=r,O[t>>2]=n,O[t+4>>2]=(n-O[t>>2])/4294967296;break;case 0:D[t>>2]=r;break;case 2:k[t>>2]=r;break;case 4:C[t]=+!!r}}else V||=1281},sn=(e,t)=>on(e,t,0),cn=(e,t,n)=>{if(n){e=Rt[e],t=2>B.version?L.ee.getQueryObjectEXT(e,t):L.getQueryParameter(e,t);var r=typeof t==`boolean`?+!!t:t;O[n>>2]=r,O[n+4>>2]=(r-O[n>>2])/4294967296}else V||=1281},ln=e=>{var t=ut(e)+1,n=kn(t);return n&&I(e,n,t),n},un=e=>{var t=Bt[e];if(!t){switch(e){case 7939:t=ln(an().join(` `));break;case 7936:case 7937:case 37445:case 37446:(t=L.getParameter(e))||(V||=1280),t=t?ln(t):0;break;case 7938:t=L.getParameter(7938);var n=`OpenGL ES 2.0 (${t})`;2<=B.version&&(n=`OpenGL ES 3.0 (${t})`),t=ln(n);break;case 35724:t=L.getParameter(35724),n=t.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/),n!==null&&(n[1].length==3&&(n[1]+=`0`),t=`OpenGL ES GLSL ES ${n[1]} (${t})`),t=ln(t);break;default:V||=1280}Bt[e]=t}return t},dn=(e,t)=>{if(2>B.version)return V||=1282,0;var n=Vt[e];if(n)return 0>t||t>=n.length?(V||=1281,0):n[t];switch(e){case 7939:return n=an().map(ln),n=Vt[e]=n,0>t||t>=n.length?(V||=1281,0):n[t];default:return V||=1280,0}},fn=e=>e.slice(-1)==`]`&&e.lastIndexOf(`[`),pn=e=>(e-=5120,e==0?C:e==1?w:e==2?T:e==4?D:e==6?k:e==5||e==28922||e==28520||e==30779||e==30782?O:E),mn=(e,t,n,r,i)=>(e=pn(e),t=r*((Ut||n)*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[t-6402]||1)*e.BYTES_PER_ELEMENT+Ht-1&-Ht),e.subarray(i>>>31-Math.clz32(e.BYTES_PER_ELEMENT),i+t>>>31-Math.clz32(e.BYTES_PER_ELEMENT))),H=e=>{var t=L.wf;if(t){var n=t.He[e];return typeof n==`number`&&(t.He[e]=n=L.getUniformLocation(t,t.kf[e]+(0<n?`[${n}]`:``))),n}V||=1282},hn=[],gn=[],_n={},vn=()=>{if(!yn){var e={USER:`web_user`,LOGNAME:`web_user`,PATH:`/`,PWD:`/`,HOME:`/home/web_user`,LANG:(typeof navigator==`object`&&navigator.languages&&navigator.languages[0]||`C`).replace(`-`,`_`)+`.UTF-8`,_:d||`./this.program`},t;for(t in _n)_n[t]===void 0?delete e[t]:e[t]=_n[t];var n=[];for(t in e)n.push(`${t}=${e[t]}`);yn=n}return yn},yn,bn=[null,[],[]],xn=Array(256),Sn=0;256>Sn;++Sn)xn[Sn]=String.fromCharCode(Sn);be=xn,(()=>{let e=ke.prototype;Object.assign(e,{isAliasOf:function(e){if(!(this instanceof ke&&e instanceof ke))return!1;var t=this.Fd.Qd.Ld,n=this.Fd.Md;e.Fd=e.Fd;var r=e.Fd.Qd.Ld;for(e=e.Fd.Md;t.Wd;)n=t.Ie(n),t=t.Wd;for(;r.Wd;)e=r.Ie(e),r=r.Wd;return t===r&&n===e},clone:function(){if(this.Fd.Md||we(this),this.Fd.Ge)return this.Fd.count.value+=1,this;var e=De,t=Object,n=t.create,r=Object.getPrototypeOf(this),i=this.Fd;return e=e(n.call(t,r,{Fd:{value:{count:i.count,Fe:i.Fe,Ge:i.Ge,Md:i.Md,Qd:i.Qd,Rd:i.Rd,ae:i.ae}}})),e.Fd.count.value+=1,e.Fd.Fe=!1,e},delete(){if(this.Fd.Md||we(this),this.Fd.Fe&&!this.Fd.Ge)throw new F(`Object already scheduled for deletion`);Ee(this);var e=this.Fd;--e.count.value,e.count.value===0&&(e.Rd?e.ae.fe(e.Rd):e.Qd.Ld.fe(e.Md)),this.Fd.Ge||(this.Fd.Rd=void 0,this.Fd.Md=void 0)},isDeleted:function(){return!this.Fd.Md},deleteLater:function(){if(this.Fd.Md||we(this),this.Fd.Fe&&!this.Fd.Ge)throw new F(`Object already scheduled for deletion`);return Oe.push(this),this.Fd.Fe=!0,this}});let t=Symbol.dispose;t&&(e[t]=e.delete)})(),Object.assign(We.prototype,{Df(e){return this.jf&&(e=this.jf(e)),e},df(e){this.fe?.(e)},Yd:8,readValueFromPointer:pe,fromWireType:function(e){function t(){return this.Pe?Ue(this.Ld.ze,{Qd:this.Mf,Md:n,ae:this,Rd:e}):Ue(this.Ld.ze,{Qd:this,Md:e})}var n=this.Df(e);if(!n)return this.df(e),null;var r=He(this.Ld,n);if(r!==void 0)return r.Fd.count.value===0?(r.Fd.Md=n,r.Fd.Rd=e,r.clone()):(r=r.clone(),this.df(e),r);if(r=this.Ld.Cf(n),r=je[r],!r)return t.call(this);r=this.Oe?r.uf:r.pointerType;var i=Be(n,this.Ld,r.Ld);return i===null?t.call(this):this.Pe?Ue(r.Ld.ze,{Qd:r,Md:i,ae:this,Rd:e}):Ue(r.Ld.ze,{Qd:r,Md:i})}}),nt.push(0,1,void 0,1,null,1,!0,1,!1,1),i.count_emval_handles=()=>nt.length/2-5-tt.length;for(let e=0;32>e;++e)nn.push(Array(e));for(var Cn=new Float32Array(288),wn=0;288>=wn;++wn)hn[wn]=Cn.subarray(0,wn);var Tn=new Int32Array(288);for(wn=0;288>=wn;++wn)gn[wn]=Tn.subarray(0,wn);var En={S:function(){return 0},hb:()=>{},jb:function(){return 0},eb:()=>{},fb:()=>{},T:function(){},gb:()=>{},kb:()=>ie(``),A:e=>{var t=de[e];delete de[e];var n=t.Ze,r=t.fe,i=t.ff,a=i.map(e=>e.Gf).concat(i.map(e=>e.Qf));ve([e],a,e=>{var a={};return i.forEach((t,n)=>{var r=e[n],o=t.Ef,s=t.Ff,c=e[n+i.length],l=t.Pf,u=t.Rf;a[t.zf]={read:e=>r.fromWireType(o(s,e)),write:(e,t)=>{var n=[];l(u,e,c.toWireType(n,t)),fe(n)},optional:e[n].optional}}),[{name:t.name,fromWireType:e=>{var t={},n;for(n in a)t[n]=a[n].read(e);return r(e),t},toWireType:(e,t)=>{for(var i in a)if(!(i in t||a[i].optional))throw TypeError(`Missing field: "${i}"`);var o=n();for(i in a)a[i].write(o,t[i]);return e!==null&&e.push(r,o),o},Yd:8,readValueFromPointer:pe,$d:r}]})},Q:(e,t,n)=>{t=P(t),Se(e,{name:t,fromWireType:e=>e,toWireType:function(e,t){if(typeof t!=`bigint`&&typeof t!=`number`)throw TypeError(`Cannot convert "${ye(t)}" to ${this.name}`);return typeof t==`number`&&(t=BigInt(t)),t},Yd:8,readValueFromPointer:Ce(t,n,t.indexOf(`u`)==-1),$d:null})},Ta:(e,t,n,r)=>{t=P(t),Se(e,{name:t,fromWireType:function(e){return!!e},toWireType:function(e,t){return t?n:r},Yd:8,readValueFromPointer:function(e){return this.fromWireType(w[e])},$d:null})},l:(e,t,n,r,i,a,o,s,c,l,u,d,f)=>{u=P(u),a=qe(i,a),s&&=qe(o,s),l&&=qe(c,l),f=qe(d,f);var p=Pe(u);Ne(p,function(){Xe(`Cannot construct ${u} due to unbound types`,[r])}),ve([e,t,n],r?[r]:[],t=>{if(t=t[0],r)var n=t.Ld,i=n.ze;else i=ke.prototype;t=Ae(u,function(...e){if(Object.getPrototypeOf(this)!==o)throw new F(`Use 'new' to construct ${u}`);if(c.le===void 0)throw new F(`${u} has no accessible constructor`);var t=c.le[e.length];if(t===void 0)throw new F(`Tried to invoke ctor of ${u} with invalid number of parameters (${e.length}) - expected (${Object.keys(c.le).toString()}) parameters instead!`);return t.apply(this,e)});var o=Object.create(i,{constructor:{value:t}});t.prototype=o;var c=new Fe(u,t,o,f,n,a,s,l);if(c.Wd){var d;(d=c.Wd).Je??(d.Je=[]),c.Wd.Je.push(c)}return n=new We(u,c,!0,!1,!1),d=new We(u+`*`,c,!1,!1,!1),i=new We(u+` const*`,c,!1,!0,!1),je[e]={pointerType:d,uf:i},Ge(p,t),[n,d,i]})},e:(e,t,n,r,i,a,o)=>{var s=$e(n,r);t=P(t),t=et(t),a=qe(i,a),ve([],[e],e=>{function r(){Xe(`Cannot call ${i} due to unbound types`,s)}e=e[0];var i=`${e.name}.${t}`;t.startsWith(`@@`)&&(t=Symbol[t.substring(2)]);var c=e.Ld.constructor;return c[t]===void 0?(r.ke=n-1,c[t]=r):(Me(c,t,i),c[t].Sd[n-1]=r),ve([],s,r=>{if(r=[r[0],null].concat(r.slice(1)),r=Qe(i,r,null,a,o),c[t].Sd===void 0?(r.ke=n-1,c[t]=r):c[t].Sd[n-1]=r,e.Ld.Je)for(let n of e.Ld.Je)n.constructor.hasOwnProperty(t)||(n.constructor[t]=r);return[]}),[]})},y:(e,t,n,r,i,a)=>{var o=$e(t,n);i=qe(r,i),ve([],[e],e=>{e=e[0];var n=`constructor ${e.name}`;if(e.Ld.le===void 0&&(e.Ld.le=[]),e.Ld.le[t-1]!==void 0)throw new F(`Cannot register multiple constructors with identical number of parameters (${t-1}) for class '${e.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return e.Ld.le[t-1]=()=>{Xe(`Cannot construct ${e.name} due to unbound types`,o)},ve([],o,r=>(r.splice(1,0,null),e.Ld.le[t-1]=Qe(n,r,null,i,a),[])),[]})},a:(e,t,n,r,i,a,o,s)=>{var c=$e(n,r);t=P(t),t=et(t),a=qe(i,a),ve([],[e],e=>{function r(){Xe(`Cannot call ${i} due to unbound types`,c)}e=e[0];var i=`${e.name}.${t}`;t.startsWith(`@@`)&&(t=Symbol[t.substring(2)]),s&&e.Ld.Nf.push(t);var l=e.Ld.ze,u=l[t];return u===void 0||u.Sd===void 0&&u.className!==e.name&&u.ke===n-2?(r.ke=n-2,r.className=e.name,l[t]=r):(Me(l,t,i),l[t].Sd[n-2]=r),ve([],c,r=>(r=Qe(i,r,e,a,o),l[t].Sd===void 0?(r.ke=n-2,l[t]=r):l[t].Sd[n-2]=r,[])),[]})},u:(e,t,n)=>{e=P(e),ve([],[t],t=>(t=t[0],i[e]=t.fromWireType(n),[]))},Ra:e=>Se(e,ot),k:(e,t,n,r)=>{function i(){}t=P(t),i.values={},Se(e,{name:t,constructor:i,fromWireType:function(e){return this.constructor.values[e]},toWireType:(e,t)=>t.value,Yd:8,readValueFromPointer:st(t,n,r),$d:null}),Ne(t,i)},b:(e,t,n)=>{var r=ct(e,`enum`);t=P(t),e=r.constructor,r=Object.create(r.constructor.prototype,{value:{value:n},constructor:{value:Ae(`${r.name}_${t}`,function(){})}}),e.values[n]=r,e[t]=r},P:(e,t,n)=>{t=P(t),Se(e,{name:t,fromWireType:e=>e,toWireType:(e,t)=>t,Yd:8,readValueFromPointer:lt(t,n),$d:null})},x:(e,t,n,r,i,a)=>{var o=$e(t,n);e=P(e),e=et(e),i=qe(r,i),Ne(e,function(){Xe(`Cannot call ${e} due to unbound types`,o)},t-1),ve([],o,n=>(n=[n[0],null].concat(n.slice(1)),Ge(e,Qe(e,n,null,i,a),t-1),[]))},C:(e,t,n,r,i)=>{if(t=P(t),i===-1&&(i=4294967295),i=e=>e,r===0){var a=32-8*n;i=e=>e<<a>>>a}var o=t.includes(`unsigned`)?function(e,t){return t>>>0}:function(e,t){return t};Se(e,{name:t,fromWireType:i,toWireType:o,Yd:8,readValueFromPointer:Ce(t,n,r!==0),$d:null})},t:(e,t,n)=>{function r(e){return new i(C.buffer,O[e+4>>2],O[e>>2])}var i=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][t];n=P(n),Se(e,{name:n,fromWireType:r,Yd:8,readValueFromPointer:r},{Hf:!0})},s:(e,t,n,r,i,a,o,s,c,l,u,d)=>{n=P(n),a=qe(i,a),s=qe(o,s),l=qe(c,l),d=qe(u,d),ve([e],[t],e=>(e=e[0],[new We(n,e.Ld,!1,!1,!0,e,r,a,s,l,d)]))},Sa:(e,t)=>{t=P(t),Se(e,{name:t,fromWireType:function(e){for(var t=O[e>>2],n=e+4,r,i=n,a=0;a<=t;++a){var o=n+a;(a==t||w[o]==0)&&(i=i?ue(w,i,o-i):``,r===void 0?r=i:(r+=`\0`,r+=i),i=o+1)}return An(e),r},toWireType:function(e,t){t instanceof ArrayBuffer&&(t=new Uint8Array(t));var n=typeof t==`string`;if(!(n||ArrayBuffer.isView(t)&&t.BYTES_PER_ELEMENT==1))throw new F(`Cannot pass non-string to std::string`);var r=n?ut(t):t.length,i=kn(4+r+1),a=i+4;return O[i>>2]=r,n?I(t,a,r+1):w.set(t,a),e!==null&&e.push(An,i),i},Yd:8,readValueFromPointer:pe,$d(e){An(e)}})},M:(e,t,n)=>{if(n=P(n),t===2)var r=ft,i=pt,a=mt,o=e=>E[e>>1];else t===4&&(r=ht,i=gt,a=_t,o=e=>O[e>>2]);Se(e,{name:n,fromWireType:e=>{for(var n=O[e>>2],i,a=e+4,s=0;s<=n;++s){var c=e+4+s*t;(s==n||o(c)==0)&&(a=r(a,c-a),i===void 0?i=a:(i+=`\0`,i+=a),a=c+t)}return An(e),i},toWireType:(e,r)=>{if(typeof r!=`string`)throw new F(`Cannot pass non-string to C++ string type ${n}`);var o=a(r),s=kn(4+o+t);return O[s>>2]=o/t,i(r,s+4,o+t),e!==null&&e.push(An,s),s},Yd:8,readValueFromPointer:pe,$d(e){An(e)}})},B:(e,t,n,r,i,a)=>{de[e]={name:P(t),Ze:qe(n,r),fe:qe(i,a),ff:[]}},d:(e,t,n,r,i,a,o,s,c,l)=>{de[e].ff.push({zf:P(t),Gf:n,Ef:qe(r,i),Ff:a,Qf:o,Pf:qe(s,c),Rf:l})},Ua:(e,t)=>{t=P(t),Se(e,{$f:!0,name:t,Yd:0,fromWireType:()=>{},toWireType:()=>{}})},Ya:()=>{throw 1/0},D:(e,t,n)=>(e=it(e),t=ct(t,`emval::as`),vt(t,n,e)),I:(e,t,n,r)=>(e=yt[e],t=it(t),e(null,t,n,r)),w:(e,t,n,r,i)=>(e=yt[e],t=it(t),n=xt(n),e(t,t[n],r,i)),c:rt,J:e=>e===0?at(St()):(e=xt(e),at(St()[e])),p:(e,t,n)=>{var r=wt(e,t),i=r.shift();e--;var a=Array(e);return t=`methodCaller<(${r.map(e=>e.name).join(`, `)}) => ${i.name}>`,Ct(Ae(t,(t,o,s,c)=>{for(var l=0,u=0;u<e;++u)a[u]=r[u].readValueFromPointer(c+l),l+=r[u].Yd;return t=n===1?Tt(o,a):o.apply(t,a),vt(i,s,t)}))},z:(e,t)=>(e=it(e),t=it(t),at(e[t])),G:e=>{9<e&&(nt[e+1]+=1)},F:()=>at([]),f:e=>at(xt(e)),E:()=>at({}),Qa:e=>(e=it(e),!e),m:e=>{fe(it(e)),rt(e)},i:(e,t,n)=>{e=it(e),t=it(t),n=it(n),e[t]=n},g:(e,t)=>(e=ct(e,`_emval_take_value`),e=e.readValueFromPointer(t),at(e)),$a:function(){return-52},ab:function(){},lb:(e,t,n,r)=>{var i=new Date().getFullYear(),a=new Date(i,0,1).getTimezoneOffset();i=new Date(i,6,1).getTimezoneOffset(),O[e>>2]=60*Math.max(a,i),D[t>>2]=Number(a!=i),t=e=>{var t=Math.abs(e);return`UTC${0<=e?`-`:`+`}${String(Math.floor(t/60)).padStart(2,`0`)}${String(t%60).padStart(2,`0`)}`},e=t(a),t=t(i),i<a?(I(e,n,17),I(t,r,17)):(I(e,r,17),I(t,n,17))},Xa:function(e,t,n){return 0<=e&&3>=e?(A[n>>3]=BigInt(Math.round(1e6*(e===0?Date.now():performance.now()))),0):28},Xc:e=>L.activeTexture(e),Yc:(e,t)=>{L.attachShader(Mt[e],R[t])},Ab:(e,t)=>{L.beginQuery(e,Rt[t])},ub:(e,t)=>{L.ee.beginQueryEXT(e,Rt[t])},Zc:(e,t,n)=>{L.bindAttribLocation(Mt[e],t,n?ue(w,n):``)},_c:(e,t)=>{e==35051?L.We=t:e==35052&&(L.ye=t),L.bindBuffer(e,jt[t])},Zb:Xt,_b:(e,t)=>{L.bindRenderbuffer(e,Pt[t])},Hb:(e,t)=>{L.bindSampler(e,zt[t])},$c:(e,t)=>{L.bindTexture(e,Ft[t])},tc:Zt,wc:Zt,ad:(e,t,n,r)=>L.blendColor(e,t,n,r),bd:e=>L.blendEquation(e),cd:(e,t)=>L.blendFunc(e,t),Tb:(e,t,n,r,i,a,o,s,c,l)=>L.blitFramebuffer(e,t,n,r,i,a,o,s,c,l),dd:(e,t,n,r)=>{2<=B.version?n&&t?L.bufferData(e,w,r,n,t):L.bufferData(e,t,r):L.bufferData(e,n?w.subarray(n,n+t):t,r)},ed:(e,t,n,r)=>{2<=B.version?n&&L.bufferSubData(e,t,w,r,n):L.bufferSubData(e,t,w.subarray(r,r+n))},$b:e=>L.checkFramebufferStatus(e),fd:Qt,gd:$t,hd:en,Qb:(e,t,n)=>(n=Number(n),L.clientWaitSync(z[e],t,n)),id:(e,t,n,r)=>{L.colorMask(!!e,!!t,!!n,!!r)},jd:e=>{L.compileShader(R[e])},kd:(e,t,n,r,i,a,o,s)=>{2<=B.version?L.ye||!o?L.compressedTexImage2D(e,t,n,r,i,a,o,s):L.compressedTexImage2D(e,t,n,r,i,a,w,s,o):L.compressedTexImage2D(e,t,n,r,i,a,w.subarray(s,s+o))},ld:(e,t,n,r,i,a,o,s,c)=>{2<=B.version?L.ye||!s?L.compressedTexSubImage2D(e,t,n,r,i,a,o,s,c):L.compressedTexSubImage2D(e,t,n,r,i,a,o,w,c,s):L.compressedTexSubImage2D(e,t,n,r,i,a,o,w.subarray(c,c+s))},Sb:(e,t,n,r,i)=>L.copyBufferSubData(e,t,n,r,i),md:(e,t,n,r,i,a,o,s)=>L.copyTexSubImage2D(e,t,n,r,i,a,o,s),nd:()=>{var e=Wt(Mt),t=L.createProgram();return t.name=e,t.Se=t.Qe=t.Re=0,t.$e=1,Mt[e]=t,e},od:e=>{var t=Wt(R);return R[t]=L.createShader(e),t},pd:e=>L.cullFace(e),qd:(e,t)=>{for(var n=0;n<e;n++){var r=D[t+4*n>>2],i=jt[r];i&&(L.deleteBuffer(i),i.name=0,jt[r]=null,r==L.We&&(L.We=0),r==L.ye&&(L.ye=0))}},ac:(e,t)=>{for(var n=0;n<e;++n){var r=D[t+4*n>>2],i=Nt[r];i&&(L.deleteFramebuffer(i),i.name=0,Nt[r]=null)}},rd:e=>{if(e){var t=Mt[e];t?(L.deleteProgram(t),t.name=0,Mt[e]=null):V||=1281}},Cb:(e,t)=>{for(var n=0;n<e;n++){var r=D[t+4*n>>2],i=Rt[r];i&&(L.deleteQuery(i),Rt[r]=null)}},vb:(e,t)=>{for(var n=0;n<e;n++){var r=D[t+4*n>>2],i=Rt[r];i&&(L.ee.deleteQueryEXT(i),Rt[r]=null)}},bc:(e,t)=>{for(var n=0;n<e;n++){var r=D[t+4*n>>2],i=Pt[r];i&&(L.deleteRenderbuffer(i),i.name=0,Pt[r]=null)}},Ib:(e,t)=>{for(var n=0;n<e;n++){var r=D[t+4*n>>2],i=zt[r];i&&(L.deleteSampler(i),i.name=0,zt[r]=null)}},sd:e=>{if(e){var t=R[e];t?(L.deleteShader(t),R[e]=null):V||=1281}},Rb:e=>{if(e){var t=z[e];t?(L.deleteSync(t),t.name=0,z[e]=null):V||=1281}},td:(e,t)=>{for(var n=0;n<e;n++){var r=D[t+4*n>>2],i=Ft[r];i&&(L.deleteTexture(i),i.name=0,Ft[r]=null)}},uc:tn,xc:tn,W:e=>{L.depthMask(!!e)},X:e=>L.disable(e),Y:e=>{L.disableVertexAttribArray(e)},Z:(e,t,n)=>{L.drawArrays(e,t,n)},rc:(e,t,n,r)=>{L.drawArraysInstanced(e,t,n,r)},oc:(e,t,n,r,i)=>{L.ef.drawArraysInstancedBaseInstanceWEBGL(e,t,n,r,i)},mc:(e,t)=>{for(var n=nn[e],r=0;r<e;r++)n[r]=D[t+4*r>>2];L.drawBuffers(n)},_:(e,t,n,r)=>{L.drawElements(e,t,n,r)},sc:(e,t,n,r,i)=>{L.drawElementsInstanced(e,t,n,r,i)},pc:(e,t,n,r,i,a,o)=>{L.ef.drawElementsInstancedBaseVertexBaseInstanceWEBGL(e,t,n,r,i,a,o)},gc:(e,t,n,r,i,a)=>{L.drawElements(e,r,i,a)},$:e=>L.enable(e),aa:e=>{L.enableVertexAttribArray(e)},Db:e=>L.endQuery(e),wb:e=>{L.ee.endQueryEXT(e)},Nb:(e,t)=>(e=L.fenceSync(e,t))?(t=Wt(z),e.name=t,z[t]=e,t):0,ba:()=>L.finish(),ca:()=>L.flush(),cc:(e,t,n,r)=>{L.framebufferRenderbuffer(e,t,n,Pt[r])},dc:(e,t,n,r,i)=>{L.framebufferTexture2D(e,t,n,Ft[r],i)},da:e=>L.frontFace(e),ea:(e,t)=>{Gt(e,t,`createBuffer`,jt)},ec:(e,t)=>{Gt(e,t,`createFramebuffer`,Nt)},Eb:(e,t)=>{Gt(e,t,`createQuery`,Rt)},xb:(e,t)=>{for(var n=0;n<e;n++){var r=L.ee.createQueryEXT();if(!r){for(V||=1282;n<e;)D[t+4*n++>>2]=0;break}var i=Wt(Rt);r.name=i,Rt[i]=r,D[t+4*n>>2]=i}},fc:(e,t)=>{Gt(e,t,`createRenderbuffer`,Pt)},Jb:(e,t)=>{Gt(e,t,`createSampler`,zt)},fa:(e,t)=>{Gt(e,t,`createTexture`,Ft)},qc:rn,yc:rn,Vb:e=>L.generateMipmap(e),ga:(e,t,n)=>{n?D[n>>2]=L.getBufferParameter(e,t):V||=1281},ha:()=>{var e=L.getError()||V;return V=0,e},ia:(e,t)=>on(e,t,2),Wb:(e,t,n,r)=>{e=L.getFramebufferAttachmentParameter(e,t,n),(e instanceof WebGLRenderbuffer||e instanceof WebGLTexture)&&(e=e.name|0),D[r>>2]=e},ja:sn,ka:(e,t,n,r)=>{e=L.getProgramInfoLog(Mt[e]),e===null&&(e=`(unknown error)`),t=0<t&&r?I(e,r,t):0,n&&(D[n>>2]=t)},la:(e,t,n)=>{if(n)if(e>=At)V||=1281;else if(e=Mt[e],t==35716)e=L.getProgramInfoLog(e),e===null&&(e=`(unknown error)`),D[n>>2]=e.length+1;else if(t==35719){if(!e.Se){var r=L.getProgramParameter(e,35718);for(t=0;t<r;++t)e.Se=Math.max(e.Se,L.getActiveUniform(e,t).name.length+1)}D[n>>2]=e.Se}else if(t==35722){if(!e.Qe)for(r=L.getProgramParameter(e,35721),t=0;t<r;++t)e.Qe=Math.max(e.Qe,L.getActiveAttrib(e,t).name.length+1);D[n>>2]=e.Qe}else if(t==35381){if(!e.Re)for(r=L.getProgramParameter(e,35382),t=0;t<r;++t)e.Re=Math.max(e.Re,L.getActiveUniformBlockName(e,t).length+1);D[n>>2]=e.Re}else D[n>>2]=L.getProgramParameter(e,t);else V||=1281},rb:cn,sb:cn,Fb:(e,t,n)=>{if(n){e=L.getQueryParameter(Rt[e],t);var r=typeof e==`boolean`?+!!e:e;D[n>>2]=r}else V||=1281},yb:(e,t,n)=>{if(n){e=L.ee.getQueryObjectEXT(Rt[e],t);var r=typeof e==`boolean`?+!!e:e;D[n>>2]=r}else V||=1281},Gb:(e,t,n)=>{n?D[n>>2]=L.getQuery(e,t):V||=1281},zb:(e,t,n)=>{n?D[n>>2]=L.ee.getQueryEXT(e,t):V||=1281},Xb:(e,t,n)=>{n?D[n>>2]=L.getRenderbufferParameter(e,t):V||=1281},ma:(e,t,n,r)=>{e=L.getShaderInfoLog(R[e]),e===null&&(e=`(unknown error)`),t=0<t&&r?I(e,r,t):0,n&&(D[n>>2]=t)},ob:(e,t,n,r)=>{e=L.getShaderPrecisionFormat(e,t),D[n>>2]=e.rangeMin,D[n+4>>2]=e.rangeMax,D[r>>2]=e.precision},na:(e,t,n)=>{n?t==35716?(e=L.getShaderInfoLog(R[e]),e===null&&(e=`(unknown error)`),D[n>>2]=e?e.length+1:0):t==35720?(e=L.getShaderSource(R[e]),D[n>>2]=e?e.length+1:0):D[n>>2]=L.getShaderParameter(R[e],t):V||=1281},oa:un,vc:dn,pa:(e,t)=>{if(t=t?ue(w,t):``,e=Mt[e]){var n=e,r=n.He,i=n.lf,a;if(!r){n.He=r={},n.kf={};var o=L.getProgramParameter(n,35718);for(a=0;a<o;++a){var s=L.getActiveUniform(n,a),c=s.name;s=s.size;var l=fn(c);l=0<l?c.slice(0,l):c;var u=n.$e;for(n.$e+=s,i[l]=[s,u],c=0;c<s;++c)r[u]=c,n.kf[u++]=l}}if(n=e.He,r=0,i=t,a=fn(t),0<a&&(r=parseInt(t.slice(a+1))>>>0,i=t.slice(0,a)),(i=e.lf[i])&&r<i[0]&&(r+=i[1],n[r]=n[r]||L.getUniformLocation(e,t)))return r}else V||=1281;return-1},pb:(e,t,n)=>{for(var r=nn[t],i=0;i<t;i++)r[i]=D[n+4*i>>2];L.invalidateFramebuffer(e,r)},qb:(e,t,n,r,i,a,o)=>{for(var s=nn[t],c=0;c<t;c++)s[c]=D[n+4*c>>2];L.invalidateSubFramebuffer(e,s,r,i,a,o)},Ob:e=>L.isSync(z[e]),qa:e=>(e=Ft[e])?L.isTexture(e):0,ra:e=>L.lineWidth(e),sa:e=>{e=Mt[e],L.linkProgram(e),e.He=0,e.lf={}},kc:(e,t,n,r,i,a)=>{L.hf.multiDrawArraysInstancedBaseInstanceWEBGL(e,D,t>>2,D,n>>2,D,r>>2,O,i>>2,a)},lc:(e,t,n,r,i,a,o,s)=>{L.hf.multiDrawElementsInstancedBaseVertexBaseInstanceWEBGL(e,D,t>>2,n,D,r>>2,D,i>>2,D,a>>2,O,o>>2,s)},ta:(e,t)=>{e==3317?Ht=t:e==3314&&(Ut=t),L.pixelStorei(e,t)},tb:(e,t)=>{L.ee.queryCounterEXT(Rt[e],t)},nc:e=>L.readBuffer(e),ua:(e,t,n,r,i,a,o)=>{if(2<=B.version)if(L.We)L.readPixels(e,t,n,r,i,a,o);else{var s=pn(a);o>>>=31-Math.clz32(s.BYTES_PER_ELEMENT),L.readPixels(e,t,n,r,i,a,s,o)}else(s=mn(a,i,n,r,o))?L.readPixels(e,t,n,r,i,a,s):V||=1280},Yb:(e,t,n,r)=>L.renderbufferStorage(e,t,n,r),Ub:(e,t,n,r,i)=>L.renderbufferStorageMultisample(e,t,n,r,i),Kb:(e,t,n)=>{L.samplerParameterf(zt[e],t,n)},Lb:(e,t,n)=>{L.samplerParameteri(zt[e],t,n)},Mb:(e,t,n)=>{L.samplerParameteri(zt[e],t,D[n>>2])},va:(e,t,n,r)=>L.scissor(e,t,n,r),wa:(e,t,n,r)=>{for(var i=``,a=0;a<t;++a){var o=(o=O[n+4*a>>2])?ue(w,o,r?O[r+4*a>>2]:void 0):``;i+=o}L.shaderSource(R[e],i)},xa:(e,t,n)=>L.stencilFunc(e,t,n),ya:(e,t,n,r)=>L.stencilFuncSeparate(e,t,n,r),za:e=>L.stencilMask(e),Aa:(e,t)=>L.stencilMaskSeparate(e,t),Ba:(e,t,n)=>L.stencilOp(e,t,n),Ca:(e,t,n,r)=>L.stencilOpSeparate(e,t,n,r),Da:(e,t,n,r,i,a,o,s,c)=>{if(2<=B.version){if(L.ye){L.texImage2D(e,t,n,r,i,a,o,s,c);return}if(c){var l=pn(s);c>>>=31-Math.clz32(l.BYTES_PER_ELEMENT),L.texImage2D(e,t,n,r,i,a,o,s,l,c);return}}l=c?mn(s,o,r,i,c):null,L.texImage2D(e,t,n,r,i,a,o,s,l)},Ea:(e,t,n)=>L.texParameterf(e,t,n),Fa:(e,t,n)=>{L.texParameterf(e,t,k[n>>2])},Ga:(e,t,n)=>L.texParameteri(e,t,n),Ha:(e,t,n)=>{L.texParameteri(e,t,D[n>>2])},hc:(e,t,n,r,i)=>L.texStorage2D(e,t,n,r,i),Ia:(e,t,n,r,i,a,o,s,c)=>{if(2<=B.version){if(L.ye){L.texSubImage2D(e,t,n,r,i,a,o,s,c);return}if(c){var l=pn(s);L.texSubImage2D(e,t,n,r,i,a,o,s,l,c>>>31-Math.clz32(l.BYTES_PER_ELEMENT));return}}c=c?mn(s,o,i,a,c):null,L.texSubImage2D(e,t,n,r,i,a,o,s,c)},Ja:(e,t)=>{L.uniform1f(H(e),t)},Ka:(e,t,n)=>{if(2<=B.version)t&&L.uniform1fv(H(e),k,n>>2,t);else{if(288>=t)for(var r=hn[t],i=0;i<t;++i)r[i]=k[n+4*i>>2];else r=k.subarray(n>>2,n+4*t>>2);L.uniform1fv(H(e),r)}},Tc:(e,t)=>{L.uniform1i(H(e),t)},Uc:(e,t,n)=>{if(2<=B.version)t&&L.uniform1iv(H(e),D,n>>2,t);else{if(288>=t)for(var r=gn[t],i=0;i<t;++i)r[i]=D[n+4*i>>2];else r=D.subarray(n>>2,n+4*t>>2);L.uniform1iv(H(e),r)}},Vc:(e,t,n)=>{L.uniform2f(H(e),t,n)},Wc:(e,t,n)=>{if(2<=B.version)t&&L.uniform2fv(H(e),k,n>>2,2*t);else{if(144>=t){t*=2;for(var r=hn[t],i=0;i<t;i+=2)r[i]=k[n+4*i>>2],r[i+1]=k[n+(4*i+4)>>2]}else r=k.subarray(n>>2,n+8*t>>2);L.uniform2fv(H(e),r)}},Sc:(e,t,n)=>{L.uniform2i(H(e),t,n)},Rc:(e,t,n)=>{if(2<=B.version)t&&L.uniform2iv(H(e),D,n>>2,2*t);else{if(144>=t){t*=2;for(var r=gn[t],i=0;i<t;i+=2)r[i]=D[n+4*i>>2],r[i+1]=D[n+(4*i+4)>>2]}else r=D.subarray(n>>2,n+8*t>>2);L.uniform2iv(H(e),r)}},Qc:(e,t,n,r)=>{L.uniform3f(H(e),t,n,r)},Pc:(e,t,n)=>{if(2<=B.version)t&&L.uniform3fv(H(e),k,n>>2,3*t);else{if(96>=t){t*=3;for(var r=hn[t],i=0;i<t;i+=3)r[i]=k[n+4*i>>2],r[i+1]=k[n+(4*i+4)>>2],r[i+2]=k[n+(4*i+8)>>2]}else r=k.subarray(n>>2,n+12*t>>2);L.uniform3fv(H(e),r)}},Oc:(e,t,n,r)=>{L.uniform3i(H(e),t,n,r)},Nc:(e,t,n)=>{if(2<=B.version)t&&L.uniform3iv(H(e),D,n>>2,3*t);else{if(96>=t){t*=3;for(var r=gn[t],i=0;i<t;i+=3)r[i]=D[n+4*i>>2],r[i+1]=D[n+(4*i+4)>>2],r[i+2]=D[n+(4*i+8)>>2]}else r=D.subarray(n>>2,n+12*t>>2);L.uniform3iv(H(e),r)}},Mc:(e,t,n,r,i)=>{L.uniform4f(H(e),t,n,r,i)},Lc:(e,t,n)=>{if(2<=B.version)t&&L.uniform4fv(H(e),k,n>>2,4*t);else{if(72>=t){var r=hn[4*t],i=k;n>>=2,t*=4;for(var a=0;a<t;a+=4){var o=n+a;r[a]=i[o],r[a+1]=i[o+1],r[a+2]=i[o+2],r[a+3]=i[o+3]}}else r=k.subarray(n>>2,n+16*t>>2);L.uniform4fv(H(e),r)}},zc:(e,t,n,r,i)=>{L.uniform4i(H(e),t,n,r,i)},Ac:(e,t,n)=>{if(2<=B.version)t&&L.uniform4iv(H(e),D,n>>2,4*t);else{if(72>=t){t*=4;for(var r=gn[t],i=0;i<t;i+=4)r[i]=D[n+4*i>>2],r[i+1]=D[n+(4*i+4)>>2],r[i+2]=D[n+(4*i+8)>>2],r[i+3]=D[n+(4*i+12)>>2]}else r=D.subarray(n>>2,n+16*t>>2);L.uniform4iv(H(e),r)}},Bc:(e,t,n,r)=>{if(2<=B.version)t&&L.uniformMatrix2fv(H(e),!!n,k,r>>2,4*t);else{if(72>=t){t*=4;for(var i=hn[t],a=0;a<t;a+=4)i[a]=k[r+4*a>>2],i[a+1]=k[r+(4*a+4)>>2],i[a+2]=k[r+(4*a+8)>>2],i[a+3]=k[r+(4*a+12)>>2]}else i=k.subarray(r>>2,r+16*t>>2);L.uniformMatrix2fv(H(e),!!n,i)}},Cc:(e,t,n,r)=>{if(2<=B.version)t&&L.uniformMatrix3fv(H(e),!!n,k,r>>2,9*t);else{if(32>=t){t*=9;for(var i=hn[t],a=0;a<t;a+=9)i[a]=k[r+4*a>>2],i[a+1]=k[r+(4*a+4)>>2],i[a+2]=k[r+(4*a+8)>>2],i[a+3]=k[r+(4*a+12)>>2],i[a+4]=k[r+(4*a+16)>>2],i[a+5]=k[r+(4*a+20)>>2],i[a+6]=k[r+(4*a+24)>>2],i[a+7]=k[r+(4*a+28)>>2],i[a+8]=k[r+(4*a+32)>>2]}else i=k.subarray(r>>2,r+36*t>>2);L.uniformMatrix3fv(H(e),!!n,i)}},Dc:(e,t,n,r)=>{if(2<=B.version)t&&L.uniformMatrix4fv(H(e),!!n,k,r>>2,16*t);else{if(18>=t){var i=hn[16*t],a=k;r>>=2,t*=16;for(var o=0;o<t;o+=16){var s=r+o;i[o]=a[s],i[o+1]=a[s+1],i[o+2]=a[s+2],i[o+3]=a[s+3],i[o+4]=a[s+4],i[o+5]=a[s+5],i[o+6]=a[s+6],i[o+7]=a[s+7],i[o+8]=a[s+8],i[o+9]=a[s+9],i[o+10]=a[s+10],i[o+11]=a[s+11],i[o+12]=a[s+12],i[o+13]=a[s+13],i[o+14]=a[s+14],i[o+15]=a[s+15]}}else i=k.subarray(r>>2,r+64*t>>2);L.uniformMatrix4fv(H(e),!!n,i)}},Ec:e=>{e=Mt[e],L.useProgram(e),L.wf=e},Fc:(e,t)=>L.vertexAttrib1f(e,t),Gc:(e,t)=>{L.vertexAttrib2f(e,k[t>>2],k[t+4>>2])},Hc:(e,t)=>{L.vertexAttrib3f(e,k[t>>2],k[t+4>>2],k[t+8>>2])},Ic:(e,t)=>{L.vertexAttrib4f(e,k[t>>2],k[t+4>>2],k[t+8>>2],k[t+12>>2])},ic:(e,t)=>{L.vertexAttribDivisor(e,t)},jc:(e,t,n,r,i)=>{L.vertexAttribIPointer(e,t,n,r,i)},Jc:(e,t,n,r,i,a)=>{L.vertexAttribPointer(e,t,n,!!r,i,a)},Kc:(e,t,n,r)=>L.viewport(e,t,n,r),Pb:(e,t,n)=>{n=Number(n),L.waitSync(z[e],t,n)},Za:e=>{var t=w.length;if(e>>>=0,2147483648<e)return!1;for(var n=1;4>=n;n*=2){var r=t*(1+.2/n);r=Math.min(r,e+100663296);a:{r=(Math.min(2147483648,65536*Math.ceil(Math.max(e,r)/65536))-x.buffer.byteLength+65535)/65536|0;try{x.grow(r),te();var i=1;break a}catch{}i=void 0}if(i)return!0}return!1},Va:()=>B?B.handle:0,cb:(e,t)=>{var n=0,r=0,i;for(i of vn()){var a=t+n;O[e+r>>2]=a,n+=I(i,a,1/0)+1,r+=4}return 0},db:(e,t)=>{var n=vn();O[e>>2]=n.length,e=0;for(var r of n)e+=ut(r)+1;return O[t>>2]=e,0},mb:e=>{f(e,new le(e))},N:()=>52,_a:function(){return 52},ib:()=>52,bb:function(){return 70},R:(e,t,n,r)=>{for(var i=0,a=0;a<n;a++){var o=O[t>>2],s=O[t+4>>2];t+=8;for(var c=0;c<s;c++){var l=e,u=w[o+c],d=bn[l];u===0||u===10?((l===1?y:b)(ue(d)),d.length=0):d.push(u)}i+=s}return O[r>>2]=i,0},vd:Xt,Wa:Qt,ud:$t,Bb:en,L:sn,O:un,La:dn,Ma:Kn,h:zn,q:Wn,j:Pn,H:Rn,nb:Yn,V:qn,U:Jn,K:Un,n:Vn,o:Ln,v:Bn,r:In,Pa:Fn,Na:Gn,Oa:Hn},Dn=await async function(){ne++;var e={a:En};ae??=i.locateFile?i.locateFile(`canvaskit.wasm`,p):p+`canvaskit.wasm`;try{return Dn=(await ce(e)).instance.exports,x=Dn.wd,te(),Ke=Dn.zd,ne--,ne==0&&re&&(e=re,re=null,e()),Dn}catch(e){return o(e),Promise.reject(e)}}(),On=Dn.yd,kn=i._malloc=Dn.Ad,An=i._free=Dn.Bd,jn=Dn.Cd,Mn=Dn.Dd,Nn=Dn.Ed;function Pn(e,t,n,r){var i=Nn();try{return Ke.get(e)(t,n,r)}catch(e){if(Mn(i),e!==e+0)throw e;jn(1,0)}}function Fn(e,t,n,r,i,a){var o=Nn();try{Ke.get(e)(t,n,r,i,a)}catch(e){if(Mn(o),e!==e+0)throw e;jn(1,0)}}function In(e,t,n,r,i){var a=Nn();try{Ke.get(e)(t,n,r,i)}catch(e){if(Mn(a),e!==e+0)throw e;jn(1,0)}}function Ln(e,t,n){var r=Nn();try{Ke.get(e)(t,n)}catch(e){if(Mn(r),e!==e+0)throw e;jn(1,0)}}function Rn(e,t,n,r,i){var a=Nn();try{return Ke.get(e)(t,n,r,i)}catch(e){if(Mn(a),e!==e+0)throw e;jn(1,0)}}function zn(e,t){var n=Nn();try{return Ke.get(e)(t)}catch(e){if(Mn(n),e!==e+0)throw e;jn(1,0)}}function Bn(e,t,n,r){var i=Nn();try{Ke.get(e)(t,n,r)}catch(e){if(Mn(i),e!==e+0)throw e;jn(1,0)}}function Vn(e,t){var n=Nn();try{Ke.get(e)(t)}catch(e){if(Mn(n),e!==e+0)throw e;jn(1,0)}}function Hn(e,t,n,r,i,a,o,s,c,l){var u=Nn();try{Ke.get(e)(t,n,r,i,a,o,s,c,l)}catch(e){if(Mn(u),e!==e+0)throw e;jn(1,0)}}function Un(e){var t=Nn();try{Ke.get(e)()}catch(e){if(Mn(t),e!==e+0)throw e;jn(1,0)}}function Wn(e,t,n){var r=Nn();try{return Ke.get(e)(t,n)}catch(e){if(Mn(r),e!==e+0)throw e;jn(1,0)}}function Gn(e,t,n,r,i,a,o){var s=Nn();try{Ke.get(e)(t,n,r,i,a,o)}catch(e){if(Mn(s),e!==e+0)throw e;jn(1,0)}}function Kn(e){var t=Nn();try{return Ke.get(e)()}catch(e){if(Mn(t),e!==e+0)throw e;jn(1,0)}}function qn(e,t,n,r,i,a,o,s){var c=Nn();try{return Ke.get(e)(t,n,r,i,a,o,s)}catch(e){if(Mn(c),e!==e+0)throw e;jn(1,0)}}function Jn(e,t,n,r,i,a,o,s,c,l){var u=Nn();try{return Ke.get(e)(t,n,r,i,a,o,s,c,l)}catch(e){if(Mn(u),e!==e+0)throw e;jn(1,0)}}function Yn(e,t,n,r,i,a,o){var s=Nn();try{return Ke.get(e)(t,n,r,i,a,o)}catch(e){if(Mn(s),e!==e+0)throw e;jn(1,0)}}function U(){0<ne||0<ne?re=U:(i.calledRun=!0,S||(Dn.xd(),a(i),i.onRuntimeInitialized?.()))}return U(),r=s,r})})();typeof t==`object`&&typeof n==`object`?(n.exports=r,n.exports.default=r):typeof define==`function`&&define.amd&&define([],()=>r)}))(),1),Yg=null;async function Xg(e){return Yg||(Yg=await(0,Jg.default)({locateFile:e?.locateFile??(e=>{if(!a){let t=import.meta.resolve(`canvaskit-wasm`);return decodeURIComponent(new URL(e,t).pathname)}let t=`env`in import.meta?`/studio/`:`/`;return`${t===`/`?``:t.replace(/\/$/,``)}/${e}`})}),Yg)}function Zg(e,t,n,r,i){let a=e.positions;for(let i=0;i<e.glyphs.length;i++){let o=a[i*2]??0,s=a[i*2+1]??r,c=a[(i+1)*2]??o,l=e.offsets[i]??i;t.push({glyphIndex:i,firstCharacter:l,x:o,y:s,advance:c-o}),l>=0&&l<n.length&&(n[l]=o)}let o=e.offsets[e.offsets.length-1],s=a[a.length-2]??i;o>=0&&o<n.length&&(n[o]=s)}function Qg(e,t,n){e.startIndex>=t||n.push({firstCharacter:e.startIndex,endCharacter:e.endIndex,position:{x:0,y:e.baseline},width:e.width,lineY:e.startIndex===0?0:e.baseline-Math.abs(e.ascent),lineHeight:e.height,lineAscent:Math.abs(e.ascent)})}async function $g(e){let t=await Xg(),n=z.provider();if(!n)return null;let r=be({ck:t,fontProvider:n,fontsLoaded:!0},e);r.layout(e.textAutoResize===`WIDTH_AND_HEIGHT`?1e6:e.width);let i=r.getShapedLines(),a=r.getLineMetrics();if(i.length===0||a.length===0)return r.delete(),null;let o=a[0],s=[],c=[],l=Array.from({length:e.text.length+1},()=>0);for(let t=0;t<i.length;t++){let n=i[t],r=a[t]??o;for(let e of n.runs)Zg(e,s,l,r.baseline,r.width);Qg(r,e.text.length,c)}for(let e=1;e<l.length;e++)l[e]===0&&(l[e]=l[e-1]);return r.delete(),{lineHeight:o.height,lineAscent:Math.abs(o.ascent),lineWidth:o.width,baseline:o.baseline,baselines:c,glyphs:s,logicalIndexToCharacterOffsetMap:l}}var e_=new Map;async function t_(e){if(typeof crypto<`u`){let t=await crypto.subtle.digest(`SHA-1`,e);return new Uint8Array(t)}return new Uint8Array(20)}async function n_(e,t){let n=`${e}|${t}`,r=e_.get(n);if(r)return r;let i=z.loadedData(e,t);if(!i)return null;let a=await t_(i);return e_.set(n,a),a}async function r_(e){let t=new Set;for(let n of e.getAllNodes()){if(n.type!==`TEXT`)continue;let e=Gt(n.fontWeight,n.italic);t.add(`${n.fontFamily}|${e}`);for(let e of n.styleRuns){let r=e.style.fontFamily??n.fontFamily,i=e.style.fontWeight??n.fontWeight,a=e.style.italic??n.italic;t.add(`${r}|${Gt(i,a)}`)}}let n=new Map;for(let e of t){let[t,r]=e.split(`|`),i=await n_(t,r);i&&n.set(e,i)}return n}var i_={getGlyphOutlineMetrics:Vt};function a_(e,t,n,r,i,a,o,s,c,l=new Map,u,d,f,p,m){return Bc(e,t,n,r,i,a,o,s,c,l,u,d,i_,f,p,m)}function o_(e,t,n,r,i,a){try{let{lines:t}=Se(pe(e,`${i}px ${a}`),r,Math.ceil(i*1.2)),n=[],o=0;for(let e of t)o>0&&n.push(o),o+=e.text.length;return n}catch{return s_(e,t,n,r)}}function s_(e,t,n,r){let i=[],a=0,o=0,s=0;for(let c=0;c<t.length;c++){let l=t[c].advance||n,u=e[c];if((u===` `||u===`	`||u===`-`&&c+1<e.length)&&(o=c+1,s=a+l),a>0&&a+l>r+.5){let e=i.length>0?i[i.length-1]:0;o>e?(i.push(o),a-=s):(i.push(c),a=0),o=i[i.length-1],s=0}a+=l}return i}function c_(e,t,n,r){return t.length>0?t.map(e=>({advance:e.advance||n,commands:e.commands})):Array.from({length:e.length},()=>({advance:n||r*.6,commands:[]}))}function l_(e,t,n,r,i){return i?[]:t.length>0?o_(e.text,n,r,e.width,e.fontSize,e.fontFamily):s_(e.text,n,r,e.width)}async function u_(e,t,n,r){let i=Gt(e.fontWeight,e.italic),a=Rt(e.fontFamily),o=`${a}|${i}`,s=e.lineHeight??Math.ceil(e.fontSize*1.2),c=Vt(e.fontFamily,i,e.text,e.fontSize)??[],l=e.text.length>0?e.width/Math.max(e.text.length,1):0,u=c_(e.text,c,l,e.fontSize),d=Math.max(s-e.fontSize*.2,0),f=l_(e,c,u,l,n),p=new Set(f),m=new Map;if(n)for(let e of n.glyphs)m.set(e.firstCharacter,e);let h=[],g=Array.from({length:e.text.length+1},()=>0),_=0,v=s,y=0,b=u.map((t,i)=>{let a=m.get(i),o=t.advance||l;!a&&p.has(i)&&(h.push({firstCharacter:y,endCharacter:i,position:{x:0,y:v},width:_,lineHeight:s,lineAscent:d}),y=i,_=0,v+=s);let c=_;return g[i]=c,_+=o,{commandsBlob:r&&t.commands.length>0?r.push(zs(t.commands,e.fontSize))-1:void 0,position:{x:a?.x??c,y:a?.y??n?.baseline??v},fontSize:e.fontSize,firstCharacter:a?.firstCharacter??i,advance:(a?.advance??o)/e.fontSize,rotation:0}});return g[e.text.length]=_,e.text.length>0&&h.push({firstCharacter:y,endCharacter:e.text.length,position:{x:0,y:v},width:_,lineHeight:s,lineAscent:d}),No({node:e,glyphs:b,fontMetaData:[{key:{family:a,style:js(e.fontWeight,e.italic),postscript:``},fontLineHeight:1.2,fontDigest:t.get(o),fontStyle:e.italic?`ITALIC`:`NORMAL`,fontWeight:e.fontWeight}],baseline:n?.baseline??s,width:n?.lineWidth??e.width,lineHeight:n?.lineHeight??s,lineAscent:n?.lineAscent??d,baselines:n?n.baselines:h,logicalIndexToCharacterOffsetMap:n?.logicalIndexToCharacterOffsetMap??g})}function d_(e){let t=e.match(/<!--\(openpencil\)(.*?)\(\/openpencil\)-->/s);if(!t)return null;try{let e=Nt(t[1]),n;try{n=v(e)}catch{n=e}let r=JSON.parse(new TextDecoder().decode(n));if(r.format===`openpencil/v1`&&Array.isArray(r.nodes)){let e=m_(r.nodes),t=new Map;if(r.images&&typeof r.images==`object`)for(let[e,n]of Object.entries(r.images))typeof n==`string`&&t.set(e,Nt(n));return{nodes:e,images:t}}}catch(e){console.warn(`Failed to parse OpenPencil clipboard data:`,e)}return null}function f_(e,t){let n=Re();for(let[r,i]of Object.entries(t??{})){let t=r.lastIndexOf(`:`);t===-1?Le(n,e,e,r,i):Le(n,e,r.slice(0,t),r.slice(t+1),i)}return n}function p_(e){return Array.isArray(e)?e.map(e=>({...e,commandsBlob:e.commandsBlob instanceof Uint8Array?e.commandsBlob:Uint8Array.from(Object.values(e.commandsBlob))})):[]}function m_(e){return e.map(e=>{let{children:t,instanceOverrides:n,overrides:r,textPicture:i,...a}=e,o=typeof a.id==`string`?a.id:``,s=n?qe(n):f_(o,r);return{...a,fillGeometry:p_(a.fillGeometry),strokeGeometry:p_(a.strokeGeometry),instanceOverrides:s,textPicture:typeof i==`string`?Nt(i):i,...t?{children:m_(t)}:{}}})}async function h_(){await Ug()}async function g_(e,t){let n=await r_(t),r={sessionID:0,localID:0},i={sessionID:0,localID:1},a={value:100},o=[Uc(r,t.documentColorSpace),Wc(i,r,`!`,`Page 1`)],s=[],c=e=>{e.type===`TEXT`&&s.push(e);for(let n of e.childIds){let e=t.getNode(n);e&&c(e)}},l=new Map,u=new Set,d=[];for(let r=0;r<e.length;r++)c(e[r]),o.push(...a_(e[r],i,r,a,t,d,l,n,void 0,void 0,void 0,u));let f=[...s];return await Promise.all(o.map(async e=>{if(e.type!==`TEXT`)return;let t=f.shift();if(!t)return;e.textAutoResize=`NONE`,e.textUserLayoutVersion=5,e.lineHeight={value:t.lineHeight??100,units:t.lineHeight?`PIXELS`:`PERCENT`};let r=await $g(t).catch(()=>null);e.derivedTextData=await u_(t,n,r,d)})),await qg(o,d,t.images),Kg(o,d,Xt())}var __=new WeakMap;function v_(e,t){__.set(e,t)}function y_(e){return __.get(e)}function b_(e){__.delete(e)}function x_(e,t,n){e.preserveSourceMetadataDuring(()=>{jg(e,t.changeMap,t.guidToNodeId,t.blobs,n)});let r=n??e.getPages(!0).map(e=>e.id);for(let e of r)t.populatedRootIds.add(e)}function S_(e,t,n){let r=[...n].filter(e=>e&&!t.populatedRootIds.has(e));return r.length===0?!1:(x_(e,t,r),!0)}function C_(e,t){let n=y_(e);return n?S_(e,n,t):!1}function w_(e){let t=y_(e);return!t||e.getPages(!0).map(e=>e.id).every(e=>t.populatedRootIds.has(e))?!1:(x_(e,t),!0)}function T_(e,t){e.preserveSourceMetadataDuring(()=>{for(let[,n]of t.created)e.createNodeWithId(n.id,n.type,n.parentId,n);for(let[n,r]of t.updated)e.updateNode(n,r);for(let n of t.deleted)e.deleteNode(n)}),e.instanceIndex=new Map(t.instanceIndex.map(([e,t])=>[e,new Set(t)]))}var E_=2e5,D_=3e4,O_=new WeakMap,k_=new WeakMap;function A_(e){typeof globalThis.dispatchEvent==`function`&&globalThis.dispatchEvent(new CustomEvent(`openpencil:fig-population-worker`,{detail:e}))}function j_(e,t,n){if(e.nodes.size>E_){if(A_({event:`fallback`,reason:`oversized`}),!n){t.terminate();return}O_.set(e,L_(t,n));return}let r=z_(e,t,n);O_.set(e,r),A_({event:`registered`})}function M_(e){return e?.DEV??!1}function N_(e){return M_({BASE_URL:`/studio/`,DEV:!1,MODE:`production`,PROD:!0,SSR:!1})&&O_.has(e)&&y_(e)!==void 0}function P_(e,t){let n={request:t,valid:!0,unbind:()=>void 0},r=()=>{e.isApplyingLayout||(n.valid=!1)};n.unbind=e.onNodeEvents({created:r,updated:r,deleted:r,reparented:r,reordered:r}),k_.set(e,n)}async function F_(e){let t=k_.get(e);if(!t?.valid)return null;let n=await t.request();return k_.get(e)?.valid===!0&&k_.get(e)===t?n:null}function I_(e){O_.get(e)?.terminate(),O_.delete(e),k_.get(e)?.unbind(),k_.delete(e)}function L_(e,t){let n=!1;return{populate:()=>Promise.resolve(null),terminate(){n||(n=!0,A_({event:`terminated`}),t.postMessage({type:`dispose`}),t.close(),e.terminate())}}}function R_(e){return N_(e)?O_.get(e)??null:null}function z_(e,t,n){let r=new Map,i=0,a=!1,o=!1,s=!1,c=()=>{s||a||e.isApplyingLayout||(i++,a=!0,A_({event:`stale`,reason:`graph-mutation`}))},l,u=()=>{l?.(),l=void 0},d=(n=!0)=>{a=!0,n&&A_({event:`fallback`,reason:`worker-error`});for(let e of r.values())clearTimeout(e.timeout),e.abort?.(),e.resolve(null);r.clear(),u(),t.terminate(),O_.delete(e)};l=e.onNodeEvents({created:c,updated:c,deleted:c,reparented:c,reordered:c});let f=t=>{if(t.type===`population-error`)return d();let n=r.get(t.requestId);if(!n)return;if(clearTimeout(n.timeout),n.abort?.(),r.delete(t.requestId),a||i!==n.revision||t.baseRevision!==n.revision)return A_({event:`stale`,reason:`graph-mutation`}),n.resolve(null);s=!0;let o=performance.now();try{T_(e,t.delta);let n=y_(e);n&&(n.populatedRootIds=new Set(t.delta.populatedRootIds))}catch{return s=!1,d(),n.resolve(null)}finally{s=!1}n.resolve(t.populated),A_({event:`populate`,durationMs:performance.now()-n.startedAt,applyMs:performance.now()-o,created:t.delta.created.length,updated:t.delta.updated.length,deleted:t.delta.deleted.length})};return n?(n.onmessage=e=>f(e.data),n.start()):t.onmessage=e=>f(e.data),t.onerror=()=>d(),{populate(e,o){if(o?.throwIfAborted(),a)return Promise.resolve(null);let s=Zt(),c=i;return new Promise((i,a)=>{let l=()=>{let e=r.get(s);e&&(clearTimeout(e.timeout),r.delete(s),d(!1),a(new DOMException(`Aborted`,`AbortError`)))};o?.addEventListener(`abort`,l,{once:!0});let u=setTimeout(()=>d(),D_);r.set(s,{resolve:i,abort:()=>o?.removeEventListener(`abort`,l),revision:c,startedAt:performance.now(),timeout:u}),n?n.postMessage({type:`populate`,requestId:s,baseRevision:c,pageId:e}):t.postMessage({type:`populate`,requestId:s,baseRevision:c,pageId:e},[])})},terminate(){o||(o=!0,A_({event:`terminated`}),n?.postMessage({type:`dispose`}),n?.close(),d(!1))}}}var B_=new WeakMap;async function V_(e){return await B_.get(e)?.()??await F_(e)}function H_(e){B_.delete(e)}var U_=class{ck;renderer=null;_state=null;paragraphNode=null;caretVisible=!0;constructor(e){this.ck=e}paragraphVerticalOffset(){let e=this._state,t=this.paragraphNode;if(!e?.paragraph||!t)return 0;let n=Math.max(0,t.height-e.paragraph.getHeight());return t.textAlignVertical===`CENTER`?n/2:t.textAlignVertical===`BOTTOM`?n:0}paragraphY(e){return e-this.paragraphVerticalOffset()}prepareMove(e){let t=this._state;return t?(e&&t.selectionAnchor===null&&(t.selectionAnchor=t.cursor),e||(t.selectionAnchor=null),t):null}replaceRange(e,t,n){let r=this._state;return r?(r.text=r.text.slice(0,e)+n+r.text.slice(t),r.cursor=e+n.length,r.selectionAnchor=null,r):null}currentLineMetrics(){let e=this._state;if(!e?.paragraph)return null;let t=e.paragraph.getLineNumberAt(e.cursor);return t<0?null:e.paragraph.getLineMetricsAt(t)}collapseSelectionTo(e){let t=this._state;if(!t||!this.hasSelection())return!1;let n=this.getSelectionRange();return n&&(t.cursor=n[e]),t.selectionAnchor=null,!0}get state(){let e=this._state;return e&&this.renderer&&this.paragraphNode&&e.paragraphFontGeneration!==this.renderer.fontGeneration&&this.rebuildParagraph(this.paragraphNode),e}get isActive(){return this._state!==null}get nodeId(){return this._state?.nodeId??null}setRenderer(e){this.renderer=e}start(e){this._state={nodeId:e.id,text:e.text,cursor:e.text.length,selectionAnchor:null,paragraph:null,paragraphFontGeneration:-1,textDirection:Ht(e)},this.rebuildParagraph(e)}stop(){if(!this._state)return null;let e={nodeId:this._state.nodeId,text:this._state.text};return this._state.paragraph?.delete(),this._state=null,this.paragraphNode=null,e}rebuildParagraph(e){let t=this._state;!t||!this.renderer||(t.paragraph?.delete(),this.paragraphNode=e,t.textDirection=Ht(e),t.paragraph=this.renderer.buildParagraph({...e,text:t.text}),t.paragraphFontGeneration=this.renderer.fontGeneration)}hasSelection(){let e=this._state;return e!==null&&e.selectionAnchor!==null&&e.selectionAnchor!==e.cursor}get caretIndex(){return this._state?.cursor??null}getSelectionRange(){let e=this._state;return!e||e.selectionAnchor===null||e.selectionAnchor===e.cursor?null:[Math.min(e.cursor,e.selectionAnchor),Math.max(e.cursor,e.selectionAnchor)]}getSelectedText(){let e=this.getSelectionRange();return!e||!this._state?``:this._state.text.slice(e[0],e[1])}selectAll(){let e=this._state;e&&(e.selectionAnchor=0,e.cursor=e.text.length)}selectWord(e){let t=this._state;if(!t)return;let n=t.text,r=e,i=e;for(;r>0&&!W_(n[r-1]);)r--;for(;i<n.length&&!W_(n[i]);)i++;t.selectionAnchor=r,t.cursor=i}setCursorAt(e,t,n=!1){let r=this._state;if(!r?.paragraph)return;let i=r.paragraph.getGlyphPositionAtCoordinate(e,this.paragraphY(t)).pos;n?r.selectionAnchor===null&&(r.selectionAnchor=r.cursor):r.selectionAnchor=null,r.cursor=i}selectLine(e){let t=this._state;if(!t?.paragraph)return;let n=t.paragraph.getLineNumberAt(e);if(n<0)return;let r=t.paragraph.getLineMetricsAt(n);r&&(t.selectionAnchor=r.startIndex,t.cursor=r.endExcludingWhitespaces)}selectWordAt(e,t){let n=this._state;if(!n?.paragraph)return;let r=n.paragraph.getGlyphPositionAtCoordinate(e,this.paragraphY(t)).pos;this.selectWord(r)}selectLineAt(e,t){let n=this._state;if(!n?.paragraph)return;let r=n.paragraph.getGlyphPositionAtCoordinate(e,this.paragraphY(t)).pos;this.selectLine(r)}insert(e,t){let n=this._state;if(!n)return;let r=this.getSelectionRange()??[n.cursor,n.cursor];this.replaceRange(r[0],r[1],e),this.rebuildParagraph(t)}backspace(e){let t=this._state;if(!t)return;let n=this.getSelectionRange()??(t.cursor>0?[t.cursor-1,t.cursor]:null);n&&this.replaceRange(n[0],n[1],``),this.rebuildParagraph(e)}delete(e){let t=this._state;if(!t)return;let n=this.getSelectionRange()??(t.cursor<t.text.length?[t.cursor,t.cursor+1]:null);n&&this.replaceRange(n[0],n[1],``),this.rebuildParagraph(e)}moveHorizontal(e,t){let n=this._state;if(!n||!e&&this.collapseSelectionTo(t===`left`?0:1))return;this.prepareMove(e);let r=t===`left`==(n.textDirection===`RTL`)?1:-1,i=n.cursor+r;i>=0&&i<=n.text.length&&(n.cursor=i)}moveLeft(e=!1){this.moveHorizontal(e,`left`)}moveRight(e=!1){this.moveHorizontal(e,`right`)}moveVertical(e,t){let n=this._state;if(!n?.paragraph)return;this.prepareMove(e);let r=this.getCaretRect();if(!r)return;let i=n.paragraph.getLineMetrics()[0]?.height??14,a=t===`up`?r.y0-i/2:r.y1+i/2;n.cursor=n.paragraph.getGlyphPositionAtCoordinate(r.x,this.paragraphY(a)).pos}moveUp(e=!1){this.moveVertical(e,`up`)}moveDown(e=!1){this.moveVertical(e,`down`)}moveToLineEdge(e,t){let n=this._state;if(!n?.paragraph)return;this.prepareMove(e);let r=this.currentLineMetrics();if(!r)return;let i=n.textDirection===`RTL`&&t===`start`,a=n.textDirection!==`RTL`&&t===`end`;n.cursor=i||a?r.endExcludingWhitespaces:r.startIndex}moveToLineStart(e=!1){this.moveToLineEdge(e,`start`)}moveToLineEnd(e=!1){this.moveToLineEdge(e,`end`)}moveWord(e,t){let n=this.prepareMove(e);if(!n)return;let r=t===`left`,i=this.skipWordBoundaryRun(n.text,n.cursor,r);i=this.skipWordInteriorRun(n.text,i,r),n.cursor=i}skipWordBoundaryRun(e,t,n){return this.advanceWhile(e,t,n,e=>n===e)}skipWordInteriorRun(e,t,n){return this.advanceWhile(e,t,n,e=>n!==e)}advanceWhile(e,t,n,r){let i=t,a=n?-1:1;for(;(n?i>0:i<e.length)&&r(W_(n?e[i-1]:e[i]));)i+=a;return i}moveWordLeft(e=!1){this.moveWord(e,`left`)}moveWordRight(e=!1){this.moveWord(e,`right`)}getCaretRect(){let e=this._state;if(!e?.paragraph)return null;let t=e.text,n=e.cursor;if(t.length===0){let t=e.paragraph.getLineMetrics();if(t.length===0)return null;let n=t[0],r=this.paragraphVerticalOffset();return{x:n.left,y0:r,y1:r+n.height}}let r,i,a=!1;n===0?(r=0,i=1,a=e.textDirection===`RTL`):n>=t.length?(r=t.length-1,i=t.length,a=e.textDirection!==`RTL`):(r=n,i=n+1);let o=e.paragraph.getRectsForRange(r,i,this.ck.RectHeightStyle.Max,this.ck.RectWidthStyle.Tight);if(o.length===0)return null;let[s,c,l,u]=o[0].rect,d=this.paragraphVerticalOffset();return{x:a?l:s,y0:c+d,y1:u+d}}getSelectionRects(){let e=this._state;if(!e?.paragraph)return[];let t=this.getSelectionRange();if(!t)return[];let n=e.paragraph.getRectsForRange(t[0],t[1],this.ck.RectHeightStyle.Max,this.ck.RectWidthStyle.Tight),r=this.paragraphVerticalOffset();return n.map(e=>{let[t,n,i,a]=e.rect;return{x:t,y:n+r,width:i-t,height:a-n}})}};function W_(e){return/\s|[.,;:!?()[\]{}"'`<>/\\|@#$%^&*~+=\-_]/.test(e)}function G_(e){function t(t,n){if(t.length===0)return;let r=new Map;for(let i of t){let t=e.graph.getNode(i);if(!t)continue;r.set(i,{flipX:t.flipX,flipY:t.flipY});let a=n===`horizontal`?{flipX:!t.flipX}:{flipY:!t.flipY};e.graph.updateNode(i,a)}let i=new Map;for(let[t]of r){let n=e.graph.getNode(t);n&&i.set(t,{flipX:n.flipX,flipY:n.flipY})}e.undo.push({label:`Flip`,forward:()=>{for(let[t,n]of i)e.graph.updateNode(t,n)},inverse:()=>{for(let[t,n]of r)e.graph.updateNode(t,n)}}),e.requestRender()}function n(t,n){if(t.length===0)return;let r=new Map;for(let i of t){let t=e.graph.getNode(i);t&&(r.set(i,t.rotation),e.graph.updateNode(i,{rotation:((t.rotation+n)%360+360)%360}))}let i=new Map;for(let[t]of r){let n=e.graph.getNode(t);n&&i.set(t,n.rotation)}e.undo.push({label:`Rotate`,forward:()=>{for(let[t,n]of i)e.graph.updateNode(t,{rotation:n})},inverse:()=>{for(let[t,n]of r)e.graph.updateNode(t,{rotation:n})}}),e.requestRender()}return{flipNodes:t,rotateNodes:n}}function K_(e,t){let n=new Map;for(let r of t){let t=e.graph.getNode(r);t&&n.set(r,{x:t.x,y:t.y})}return n}function q_(e,t,n,r){e.undo.push({label:t,forward:()=>J_(e,r),inverse:()=>J_(e,n)})}function J_(e,t){for(let[n,r]of t)e.graph.updateNode(n,r),e.runLayoutForNode(n)}function Y_(e,t,n,r){return r===`min`?e:r===`center`?(e+t)/2-n/2:t-n}function X_(e,t,n,r){let i=t.parentId?e.graph.getNode(t.parentId):void 0,a=i?.width??0,o=i?.height??0;n===`horizontal`?e.graph.updateNode(t.id,{x:Y_(0,a,t.width,r)}):e.graph.updateNode(t.id,{y:Y_(0,o,t.height,r)})}function Z_(e,t,n,r){let i=new Map;for(let n of t)i.set(n.id,e.graph.getAbsolutePosition(n.id));let a=it(t,e=>i.get(e)??{x:0,y:0}),o=a.x,s=a.y,c=a.x+a.width,l=a.y+a.height;for(let a of t){if(!i.get(a.id))continue;let t=a.parentId?e.graph.getAbsolutePosition(a.parentId):{x:0,y:0};if(n===`horizontal`){let n=Y_(o,c,a.width,r);e.graph.updateNode(a.id,{x:n-t.x})}else{let n=Y_(s,l,a.height,r);e.graph.updateNode(a.id,{y:n-t.y})}}}function Q_(e,t){let n=t.parentId?e.graph.getNode(t.parentId):void 0;return!n||n.layoutMode===`NONE`||t.layoutPositioning===`ABSOLUTE`}function $_(e,t,n){let r=t.parentId?e.graph.getNode(t.parentId):void 0;if(!r)return n;let i=R.invert(xt(r,e.graph));if(!i)return null;let a=R.mapPoint(i,{x:0,y:0}),o=R.mapPoint(i,n);return{x:o.x-a.x,y:o.y-a.y}}function ev(e,t,n){let r=new Map(t.map(t=>[t.id,Ft(t,e.graph)])),i=n===`horizontal`?`boundX`:`boundY`,a=n===`horizontal`?`width`:`height`,o=[...t].sort((e,t)=>(r.get(e.id)?.[i]??0)-(r.get(t.id)?.[i]??0)||e.id.localeCompare(t.id)),s=o[0],c=o.at(-1);if(!c)return;let l=r.get(s.id)?.[i]??0,u=(r.get(c.id)?.[i]??0)+(r.get(c.id)?.[a]??0),d=o.reduce((e,t)=>e+(r.get(t.id)?.[a]??0),0),f=(u-l-d)/(o.length-1),p=l;for(let t of o){let o=r.get(t.id);if(!o)continue;let s=p-o[i],c=$_(e,t,n===`horizontal`?{x:s,y:0}:{x:0,y:s});c&&(e.graph.updateNode(t.id,{x:t.x+c.x,y:t.y+c.y}),p+=o[a]+f)}}function tv(e){function t(t){let n=t.map(t=>e.graph.getNode(t)).filter(e=>e!=null);return n.length>=3&&n.every(t=>Q_(e,t))}function n(t,n,r){if(t.length===0)return;let i=t.map(t=>e.graph.getNode(t)).filter(e=>e!=null);if(i.length===0)return;let a=K_(e,i.map(e=>e.id));i.length===1?X_(e,i[0],n,r):Z_(e,i,n,r),q_(e,`Align`,a,K_(e,a.keys()));for(let n of t)e.runLayoutForNode(n);e.requestRender()}function r(n,r){let i=n.map(t=>e.graph.getNode(t)).filter(e=>e!=null);if(!t(n))return;let a=K_(e,i.map(e=>e.id));ev(e,i,r),q_(e,`Distribute`,a,K_(e,a.keys()));for(let t of n)e.runLayoutForNode(t);e.requestRender()}let{flipNodes:i,rotateNodes:a}=G_(e);return{alignNodes:n,canDistributeNodes:t,distributeNodes:r,flipNodes:i,rotateNodes:a}}function nv(e,t){return{duplicateSelected:()=>e.duplicateSelected(t.getSelectedNodes()),prepareCopy:()=>e.prepareCopy(t.getSelectedNodes()),pasteSnapshot:e.pasteSnapshot,pasteFromHTML:e.pasteFromHTML,deleteSelected:e.deleteSelected,storeImage:e.storeImage,placeFiles:e.placeFiles,placeImageFiles:e.placeImageFiles,loadFontsForNodes:e.loadFontsForNodes,copySelectionAsText:e.copySelectionAsText,copySelectionAsSVG:e.copySelectionAsSVG,copySelectionAsJSX:e.copySelectionAsJSX}}function rv(e,t,n,r){return{createComponentFromSelection:()=>e.createComponentFromSelection(t.getSelectedNodes(),n.wrapSelectionInContainer),createComponentSetFromComponents:()=>e.createComponentSetFromComponents(t.getSelectedNodes(),n.wrapSelectionInContainer),createInstanceFromComponent:e.createInstanceFromComponent,detachInstance:()=>e.detachInstance(t.getSelectedNode()),focusComponent:t=>e.focusComponent(t,r.switchPage),goToMainComponent:()=>e.goToMainComponent(t.getSelectedNode(),r.switchPage),getComponentSetPropertyDefs:e.getComponentSetPropertyDefs,addPropertyDefinition:e.addPropertyDefinition,removePropertyDefinition:e.removePropertyDefinition,renamePropertyDefinition:e.renamePropertyDefinition,reorderPropertyDefinitions:e.reorderPropertyDefinitions,renameVariantValue:e.renameVariantValue,reorderVariantValues:e.reorderVariantValues,setVariantPropertyValue:e.setVariantPropertyValue,collectVariantOptions:e.collectVariantOptions,findVariantByValues:e.findVariantByValues,getDefaultVariantForComponentSet:e.getDefaultVariantForComponentSet,getComponentSetVariantConflicts:e.getComponentSetVariantConflicts,validateComponentSet:e.validateComponentSet,getVariantOptionAvailability:e.getVariantOptionAvailability,switchInstanceVariant:e.switchInstanceVariant,addVariant:e.addVariant,duplicateVariant:e.duplicateVariant,removeVariant:e.removeVariant,getInstanceComponentPropertyDefinitions:e.getInstanceComponentPropertyDefinitions,getInstanceComponentPropertyValue:e.getInstanceComponentPropertyValue,setInstanceComponentProperty:e.setInstanceComponentProperty}}function iv(e,t){return{wrapInAutoLayout:()=>e.wrapInAutoLayout(t.getSelectedNodes()),groupSelected:()=>e.groupSelected(t.getSelectedNodes()),frameSelection:()=>e.frameSelection(t.getSelectedNodes()),booleanOperationSelected:n=>e.booleanOperationSelected(t.getSelectedNodes(),n),flattenSelected:()=>e.flattenSelected(t.getSelectedNodes()),outlineTextSelected:()=>e.outlineTextSelected(t.getSelectedNodes()),outlineStrokeSelected:()=>e.outlineStrokeSelected(t.getSelectedNodes()),ungroupSelected:()=>e.ungroupSelected(t.getSelectedNode())}}function av(e,t){return{commitMove:e.commitMove,commitMoveWithReparent:e.commitMoveWithReparent,commitDuplicateMove:e.commitDuplicateMove,commitResize:e.commitResize,commitGroupResize:e.commitGroupResize,commitRotation:e.commitRotation,commitNodeUpdate:e.commitNodeUpdate,undoAction:()=>e.undoAction(t.validateEnteredContainer),redoAction:()=>e.redoAction(t.validateEnteredContainer),snapshotPage:e.snapshotPage,restorePageFromSnapshot:e.restorePageFromSnapshot,pushUndoEntry:e.pushUndoEntry}}function ov(e){if(e.state.enteredContainerId)return e.state.enteredContainerId;let t=[...e.state.selectedIds];if(t.length!==1)return e.state.currentPageId;let n=e.graph.getNode(t[0]);return n?Ie.has(n.type)&&n.type!==`CANVAS`?n.id:n.parentId??e.state.currentPageId:e.state.currentPageId}function sv(e,t,n,r){let i=new e.ck.PathBuilder;for(let a of n){let n=r(e,t,a);if(!n)return i.delete(),null;i.addPath(n,N(e,a)),n.delete()}let a=i.getBounds();if(a[2]<=a[0]||a[3]<=a[1])return i.delete(),null;i.transform(e.ck.Matrix.translated(-a[0],-a[1]));let o=i.detachAndDelete(),s=ft(o.toSVGString());return o.delete(),{name:`Flatten`,x:a[0],y:a[1],width:a[2]-a[0],height:a[3]-a[1],fills:et(n[0].fills),vectorNetwork:s}}function cv(e,t,n){return sv(e,t,n,(e,t,n)=>Ae(e,n,t))}function lv(e,t,n){return sv(e,t,n,(e,t,n)=>_e(e,n,t))}function uv(e,t){let n=e.map(e=>(e.name.match(/\//g)??[]).length),r=n[0]??0;if(r===0||!n.every(e=>e===r))return null;let i=Array.from({length:r},(e,n)=>({id:t(),name:n===0?`Variant`:`Property ${n+1}`,type:`VARIANT`,defaultValue:``})),a=new Map(i.map(e=>[e.name,new Set])),o=new Map;for(let t of e){let e=t.name.split(`/`).slice(1),n={};for(let[t,r]of i.entries()){let i=e[t]?.trim()??``;n[r.name]=i,a.get(r.name)?.add(i)}o.set(t.id,{componentPropertyValues:n,name:Object.values(n).join(`, `)})}for(let e of i)e.variantOptions=[...a.get(e.name)??[]],e.defaultValue=e.variantOptions[0]??``;return{definitions:i,variants:o}}var dv=4096,fv=20,pv=new Set([`image/png`,`image/jpeg`,`image/webp`,`image/gif`,`image/avif`]);function mv(e){return e.type===`image/svg+xml`||e.type===``&&e.name.toLowerCase().endsWith(`.svg`)}function hv(e,t){function n(t){let n=An(t);return e.graph.images.set(n,t),n}function r(t){let n=e.getCk();if(!n)return null;let r=n.MakeImageFromEncoded(t);if(!r)return null;let i=r.width(),a=r.height();if(r.delete(),i>dv||a>dv){let e=Math.min(dv/i,dv/a);i=Math.round(i*e),a=Math.round(a*e)}return{width:i,height:a}}async function i(e){if(mv(e)){let t=Nu(await e.text());return t?{kind:`svg`,data:t,name:e.name.replace(/\.svg$/i,``)||`SVG`,width:t.width,height:t.height}:null}if(!pv.has(e.type))return null;let t=new Uint8Array(await e.arrayBuffer()),n=r(t);return n?{kind:`raster`,bytes:t,name:e.name,...n}:null}function a(t,n,r){let i=e.graph.getNode(t);if(!i)return{x:n,y:r};let a=R.invert(xt(i,e.graph));return a?R.mapPoint(a,{x:n,y:r}):{x:n,y:r}}function o(t,r,i,a){let o={type:`IMAGE`,imageHash:n(t.bytes),imageScaleMode:`FILL`,color:l,opacity:1,visible:!0};return e.graph.createNode(`RECTANGLE`,r,{name:t.name.replace(/\.[^.]+$/,``),x:i,y:a,width:t.width,height:t.height,fills:[o]}).id}async function s(n,r,s){let c=(await Promise.all(n.map(i))).filter(e=>e!==null);if(c.length===0)return;let l=new Set(e.state.selectedIds),u=ov(e),d=a(u,r,s),f=c.reduce((e,t)=>e+t.width,0)+fv*(c.length-1),p=Math.max(...c.map(e=>e.height)),m=d.x-f/2,h=d.y-p/2,g=[];try{for(let t of c){let n=t.kind===`raster`?o(t,u,m,h):Pu(e.graph,u,t.data,{name:t.name,x:m,y:h})?.id;n&&g.push(n),m+=t.width+fv}}catch(t){for(let t of g.reverse())e.graph.deleteNode(t);throw t}g.length!==0&&(V(e.graph,e.state.currentPageId),e.setSelectedIds(new Set(g)),t(g,l,`Place files`),e.requestRender())}function c(e,t,n){return s(e.filter(e=>pv.has(e.type)),t,n)}return{storeImage:n,placeFiles:s,placeImageFiles:c}}function gv(e,t){let n=new Map,r=new Map;function i(t){if(n.has(t))return;let a=e.variables.get(t);if(!a)return;n.set(t,structuredClone(a));let o=e.variableCollections.get(a.collectionId);o&&r.set(o.id,structuredClone(o));for(let e of Object.values(a.valuesByMode))typeof e==`object`&&`aliasId`in e&&i(e.aliasId)}for(let e of t)for(let t of Object.values(e.boundVariables))i(t);let a=[];for(let t of r.keys()){let n=e.activeMode.get(t);n&&a.push([t,n])}return{activeModes:a,variables:[...n.values()],collections:[...r.values()]}}function _v(e,t){let n=new Map(t.variables.map(e=>[e.id,crypto.randomUUID()])),r=new Map(t.collections.map(e=>[e.id,crypto.randomUUID()])),i=new Map(t.collections.flatMap(e=>e.modes.map(e=>[e.modeId,crypto.randomUUID()]))),a=t.collections.map(e=>({...structuredClone(e),id:r.get(e.id)??e.id,modes:e.modes.map(e=>({...e,modeId:i.get(e.modeId)??e.modeId})),defaultModeId:i.get(e.defaultModeId)??e.defaultModeId,variableIds:e.variableIds.flatMap(e=>{let t=n.get(e);return t?[t]:[]})})),o=t.variables.map(e=>({...structuredClone(e),id:n.get(e.id)??e.id,collectionId:r.get(e.collectionId)??e.collectionId,valuesByMode:Object.fromEntries(Object.entries(e.valuesByMode).map(([e,t])=>[i.get(e)??e,typeof t==`object`&&`aliasId`in t?{aliasId:n.get(t.aliasId)??t.aliasId}:structuredClone(t)]))}));function s(){for(let t of a)e.addCollection(structuredClone(t));for(let t of o)e.addVariable(structuredClone(t));for(let[n,a]of t.activeModes){let t=r.get(n),o=i.get(a);t&&o&&e.activeMode.set(t,o)}}function c(){for(let t of a)e.removeCollection(t.id)}return{variableIds:n,collectionIds:r,modeIds:i,apply:s,revert:c}}function vv(e,t,n,r=new Map,i=new Map){e.boundVariables=Object.fromEntries(Object.entries(e.boundVariables).map(([e,n])=>[e,t.get(n)??n])),e.variableModes=Object.fromEntries(Object.entries(e.variableModes).map(([e,t])=>[n.get(e)??e,r.get(t)??t]));for(let t of[`fillStyleId`,`strokeStyleId`,`textStyleId`,`effectStyleId`,`gridStyleId`]){let n=e[t];n&&i.has(n)&&(e[t]=i.get(n)??n)}}function yv(e){let t=new Set;for(let n of e)for(let e of[n.fillStyleId,n.strokeStyleId,n.textStyleId,n.effectStyleId,n.gridStyleId])e&&t.add(e);return t}function bv(e,t){let n=new Set(t.map(e=>e.id)),r=t.filter(e=>!e.parentId||!n.has(e.parentId)),i=new Map,a=[];function o(t){a.push(t);for(let n of t.fills){if(!n.imageHash)continue;let t=e.images.get(n.imageHash);t&&i.set(n.imageHash,t.slice())}return{...structuredClone(t),children:e.getChildren(t.id).map(o)}}let s=r.map(o),c=new Map;function l(t){if(c.has(t)||n.has(t))return;let r=e.getNode(t);if(!r||r.type!==`COMPONENT`&&r.type!==`COMPONENT_SET`)return;let i=o(r);c.set(t,i),u(i)}function u(e){e.componentId&&l(e.componentId);for(let t of e.children??[])u(t)}for(let e of s)u(e);let d=yv(a),f=[];for(let t of e.getAllNodes())t.source.id&&d.has(t.source.id)&&f.push(structuredClone(t));return{sourceRootId:e.rootId,componentDependencies:[...c.values()],styleDefinitions:f,variableDependencies:gv(e,a),nodes:s,images:i}}function xv(e,t){let n=new Pt;n.documentColorSpace=e.graph.documentColorSpace,n.images=t.images;function r(e){n.nodes.set(e.id,e);for(let t of e.children??[])r(t)}for(let e of t.nodes)r(e);return n}function Sv(e){async function t(t){if(t.length===0)return{html:``,plainText:``};let n=bv(e.graph,t),r=n.nodes.map(e=>e.name).join(`
`),i=await g_(n.nodes,xv(e,n));if(!i)throw Error(`Could not encode selection for the clipboard`);return{html:i,plainText:r,snapshot:n}}return{prepareCopy:t}}function Cv(e,t){let n=structuredClone(t.nodes),r=structuredClone(t.componentDependencies);if(t.sourceRootId===e.graph.rootId)return{nodes:n,componentDependencies:r.filter(t=>!e.graph.getNode(t.id)),styleSnapshots:[]};let i=new Map,a=[];for(let n of t.styleDefinitions){let t=n.source.id;if(!t)continue;let r=crypto.randomUUID(),o;e.graph.preserveSourceMetadataDuring(()=>{o=e.graph.createNode(n.type,e.state.currentPageId,{...structuredClone(n),id:void 0,parentId:e.state.currentPageId,childIds:[],source:{...n.source,id:r}})}),o&&(i.set(t,r),a.push(structuredClone(o)))}let o=_v(e.graph,t.variableDependencies);function s(e){vv(e,o.variableIds,o.collectionIds,o.modeIds,i);for(let t of e.children??[])s(t)}for(let e of[...n,...r])s(e);return o.apply(),{nodes:n,componentDependencies:r,styleSnapshots:a,applyVariables:o.apply,revertVariables:o.revert}}function wv(e){function t(t){return t.map(t=>e.graph.getNode(t)?.name??t).join(`
`)}function n(t){let n=t.length>0?t:e.graph.getChildren(e.state.currentPageId).map(e=>e.id);return an(e.graph,e.state.currentPageId,n)}function r(t){return t.length>0?xp(t,e.graph):null}return{copySelectionAsText:t,copySelectionAsSVG:n,copySelectionAsJSX:r}}function Tv(e){async function t(t){z.blockNodesUntilFontsResolve(t);try{let n=Bt(e.graph,t),r=z.collectFontKeys(e.graph,t),i=await Promise.all(r.map(([t,r])=>e.loadFont(t,r,n.characters))),a=r.filter((e,t)=>i[t]===null),o=P(n),s=await z.ensureFallbackPack(o,n.characters),c=o.some(e=>(s[e]?.length??0)===0);if(a.length===0&&!c)for(let e of n.nodes)e.type===`TEXT`&&(e.textPicture=null);return V(e.graph,e.state.currentPageId),a}finally{z.unblockNodes(t),e.getRenderer()?.invalidateAllPictures(),e.requestRender()}}return{loadFontsForNodes:t}}function Ev(e,t){let n=[];function r(t){let i=e.getNode(t);if(i){n.push(structuredClone(i));for(let e of i.childIds)r(e)}}for(let e of t)r(e);return n}function Dv(e,t){let n=new Map,r=t=>{let i=e.getNode(t);if(i){n.set(t,structuredClone(i));for(let e of i.childIds)r(e)}};return r(t),n}function Ov(e,t,n,r){let{parentId:i,childIds:a,...o}=t;e.createNode(t.type,n,{...o,id:t.id});for(let n of a){let i=r.get(n);i&&Ov(e,i,t.id,r)}}function kv(e,t,n){for(let r of t)e.graph.createNode(r.type,r.parentId??n,{...r,childIds:[]})}function Av(e,t){for(let n of[...t].reverse())e.graph.deleteNode(n)}function jv(e,t){for(let{id:n,parentId:r,index:i,subtree:a}of[...t].reverse()){let t=a.get(n);t&&Ov(e.graph,t,r,a),i>=0&&e.graph.reorderChild(n,r,i)}}function Mv(e){let t=[...e.state.selectedIds].map(t=>e.graph.getNode(t)).filter(t=>t!=null&&!t.locked&&Tp(e.graph,t.id).editable),n=new Set(t.map(e=>e.id));return t.filter(e=>!e.parentId||!n.has(e.parentId))}function Nv(e,t,n){let r=n[0]?.parentId;if(!r)return;let i=n[0]?.index??0;for(let n=0;n<t.length;n++)e.graph.reorderChild(t[n],r,i+n)}function Pv(e,t,n,r){let i=Ev(e.graph,t),a=e.state.currentPageId;e.undo.push({label:`Paste to replace`,forward:()=>{for(let{id:t}of n)e.graph.deleteNode(t);kv(e,i,a),Nv(e,t,n),V(e.graph,a),e.setSelectedIds(new Set(t))},inverse:()=>{Av(e,t),jv(e,n),V(e.graph,a),e.setSelectedIds(r)}})}function Fv(e,t,n,r,i){if(n.length===0||r.length===0)return!1;let a=r.map(t=>{let n=t.parentId??e.state.currentPageId,r=e.graph.getNode(n);return{id:t.id,parentId:n,index:r?.childIds.indexOf(t.id)??-1,subtree:Dv(e.graph,t.id)}}),o=it(r,t=>e.graph.getAbsolutePosition(t));t(n,o.x+o.width/2,o.y+o.height/2),Nv(e,n,a);for(let{id:t}of a)e.graph.deleteNode(t);return V(e.graph,e.state.currentPageId),e.setSelectedIds(new Set(n)),Pv(e,n,a,i),!0}function Iv(e){function t(t,n,r){let i=t.map(t=>e.graph.getNode(t)).filter(Tn),a=ze(i);if(a.width===0&&a.height===0&&i.length===0)return;let o=n-(a.x+a.width/2),s=r-(a.y+a.height/2);for(let n of t){let t=e.graph.getNode(n);t&&e.graph.updateNode(n,{x:t.x+o,y:t.y+s})}}return{centerNodesAt:t}}function Lv(e){function t(t){let n=new Set(e.state.selectedIds),r=new Set(t.map(e=>e.id)),i=t.filter(e=>!e.parentId||!r.has(e.parentId)),a=[],o=new Map;for(let t of i){let n=t.parentId??e.state.currentPageId,r=e.graph.cloneTree(t.id,n,{name:t.name+` copy`,x:t.x+20,y:t.y+20});if(!r)continue;a.push(r.id);let i=Dv(e.graph,r.id);for(let[e,t]of i)o.set(e,t)}a.length>0&&(e.setSelectedIds(new Set(a)),e.undo.push({label:`Duplicate`,forward:()=>{for(let t of a){let n=o.get(t);if(!n)continue;let r=n.parentId??e.state.currentPageId;Ov(e.graph,n,r,o)}e.setSelectedIds(new Set(a))},inverse:()=>{for(let t of a.slice().reverse())e.graph.deleteNode(t);e.setSelectedIds(n)}}))}function n(t,n,r=`Paste`){let i=Ev(e.graph,t),a=e.state.currentPageId;e.undo.push({label:r,forward:()=>{kv(e,i,a),V(e.graph,a),e.setSelectedIds(new Set(t))},inverse:()=>{Av(e,t),V(e.graph,a),e.setSelectedIds(n)}})}async function r(t,n,r={}){let i=[];e.undo.runBatch(`Paste`,()=>{let o=Cv(e,t);o.styleSnapshots.length>0&&e.undo.push({label:`Import clipboard styles`,forward:()=>{for(let t of o.styleSnapshots)e.graph.preserveSourceMetadataDuring(()=>e.graph.createNode(t.type,e.state.currentPageId,t))},inverse:()=>{for(let t of o.styleSnapshots)e.graph.deleteNode(t.id)}}),o.applyVariables&&o.revertVariables&&e.undo.push({label:`Import clipboard variables`,forward:o.applyVariables,inverse:o.revertVariables}),i=a(o.nodes,t.images,o.componentDependencies,n,r)}),await f.loadFontsForNodes(i)}async function i(t,r,i={}){let o=d_(t);if(o){let e=a(o.nodes,o.images,[],r,i);await f.loadFontsForNodes(e);return}let c=await Pg(t);if(c){let t=new Set(e.state.selectedIds),a=i.replaceSelection?Mv(e):[],o=a[0]?.parentId??ov(e),l=Vg(c.nodes,e.graph,o,0,0,c.blobs);if(l.length===0)return;if(a.length>0)Fv(e,m.centerNodesAt,l,a,t);else{let{width:i,height:a}=e.getViewportSize(),o=r?.x??(-e.state.panX+i/2)/e.state.zoom,s=r?.y??(-e.state.panY+a/2)/e.state.zoom;m.centerNodesAt(l,o,s),V(e.graph,e.state.currentPageId),e.setSelectedIds(new Set(l)),n(l,t)}await Promise.all([s(c.meta.fileKey,l),f.loadFontsForNodes(l)]),e.requestRender()}}function a(t,r,i=[],a,o={}){let s=new Set(e.state.selectedIds),c=o.replaceSelection?Mv(e):[];for(let[t,n]of r)e.graph.images.set(t,n);let l=[],u=new Map,d=(t,n)=>{let{id:r,childIds:i,children:a=[],parentId:o,...s}=t,c=e.graph.createNode(t.type,n,{...structuredClone(s),x:t.x+20,y:t.y+20,childIds:[]});u.set(t.id,c.id);for(let e of a)d(e,c.id);return c.id},f=c[0]?.parentId??ov(e),p=[];for(let t of i)p.push(d(t,e.state.currentPageId));for(let e of t)l.push(d(e,f));for(let t of u.values()){let n=e.graph.getNode(t);if(!n)continue;let r=n.componentId?u.get(n.componentId):void 0,i={self:n.instanceOverrides.self,descendants:new Map([...n.instanceOverrides.descendants].map(([e,t])=>[u.get(e)??e,t]))};e.graph.updateNode(t,{componentId:r??n.componentId,instanceOverrides:i})}if(p.length>0){let t=Ev(e.graph,p);e.undo.push({label:`Import component dependencies`,forward:()=>kv(e,t,e.state.currentPageId),inverse:()=>Av(e,p)})}return l.length===0?l:c.length>0?(Fv(e,m.centerNodesAt,l,c,s),l):(a&&m.centerNodesAt(l,a.x,a.y),V(e.graph,e.state.currentPageId),e.setSelectedIds(new Set(l)),n(l,s),l)}function o(t){let n=new Set;for(let r of Ev(e.graph,t))for(let t of r.fills)t.type===`IMAGE`&&t.imageHash&&!e.graph.images.has(t.imageHash)&&n.add(t.imageHash);return[...n]}async function s(t,n){let r=o(n);if(r.length===0)return;let i=e.resolveFigmaClipboardImages;if(i)try{let n=await i(t,r);for(let t of r){let r=n.get(t);r&&e.graph.images.set(t,r)}}catch(e){console.warn(`Failed to fetch Figma clipboard images`,e)}let a=o(n).length;a>0&&e.emitEditorEvent(`clipboard:images-missing`,{total:r.length,missing:a,fetchAttempted:!!i})}function c(e){return o(e).length>0}function l(){let t=[];for(let n of e.state.selectedIds){let r=e.graph.getNode(n);if(!r||r.locked)continue;let i=r.parentId??e.state.currentPageId,a=e.graph.getNode(i)?.childIds.indexOf(n)??-1;t.push({id:n,parentId:i,index:a,subtree:Dv(e.graph,n)})}if(t.length===0)return;let n=()=>{for(let n of new Set(t.map(e=>e.parentId)))e.runLayoutForNode(n)},r=new Set(e.state.selectedIds);for(let{id:n}of t)e.graph.deleteNode(n);n(),e.undo.push({label:`Delete`,forward:()=>{for(let{id:n}of t)e.graph.deleteNode(n);n(),e.setSelectedIds(new Set)},inverse:()=>{jv(e,t),n(),e.setSelectedIds(r)}}),e.setSelectedIds(new Set)}let u=Sv(e),d=wv(e),f=Tv(e),p=hv(e,n),m=Iv(e);return{collectSubtrees:Ev,...m,...f,duplicateSelected:t,...u,pasteSnapshot:r,pasteFromHTML:i,warnMissingImages:c,deleteSelected:l,...p,...d}}function Rv(e,t){return ve(De(e),{documentColorSpace:t}).color}function zv(e,t,n){return n===`assign`?null:{fills:e.fills.map(e=>{let n=tt(e);if(e.type===`SOLID`){let r=Rv(e.color,t);return n.color=r,n.opacity=r.a,n}return e.gradientStops&&(n.gradientStops=e.gradientStops.map(e=>({...e,color:Rv(e.color,t)}))),n}),strokes:e.strokes.map(e=>{let n=lt(e),r=Rv(e.color,t);return n.color=r,n.opacity=r.a,n}),effects:nt(e.effects).map(e=>({...e,color:Rv(e.color,t)})),styleRuns:ct(e.styleRuns).map(e=>({...e,style:{...e.style,fills:e.style.fills?.map(e=>{let n=tt(e);if(e.type===`SOLID`){let r=Rv(e.color,t);n.color=r,n.opacity=r.a}return n})}}))}}function Bv(e){function t(t,n=`assign`){if(e.graph.documentColorSpace!==t){if(n===`convert`)for(let r of e.graph.getAllNodes()){let i=zv(r,t,n);i&&e.graph.updateNode(r.id,i)}e.graph.documentColorSpace=t,e.emitEditorEvent(`document:color-space-changed`,t),e.requestRender()}}return{setDocumentColorSpace:t}}function Vv(e,t){let n=e.getNode(t);for(;n;){if(n.type===`CANVAS`)return n.id;n=n.parentId?e.getNode(n.parentId):void 0}return null}function Hv(e,t,n){let r=new Set,i=t=>{let n=Vv(e,t);n&&r.add(n)};for(let e of t)i(e);for(let t of n){i(t);for(let n of e.getInstances(t))i(n.id)}return r}function Uv(e,t,n=V){let r=null,i=!1;function a(){let a=r;if(a){r=null,i=!0;try{let r=e(),i=new Set;for(let e of a){let t=r.getNode(e);for(;t;){if(t.type===`COMPONENT`){i.add(t.id);break}t=t.parentId?r.getNode(t.parentId):void 0}}for(let e of i)r.syncInstances(e);if(i.size>0){let e=Hv(r,a,i);if(e.size===0)n(r);else for(let t of e)n(r,t);t()}}finally{i=!1}}}function o(e){i||(r||(r=new Set,queueMicrotask(a)),r.add(e))}return{scheduleComponentSync:o}}function Wv(e){async function t(t,n){let r=e.graph.getNode(t);if(r?.type!==`COMPONENT`&&r?.type!==`COMPONENT_SET`)return;let i=r;for(;i&&i.type!==`CANVAS`;)i=i.parentId?e.graph.getNode(i.parentId):void 0;i&&i.id!==e.state.currentPageId&&await n(i.id),e.setSelectedIds(new Set([r.id]));let a=e.graph.getAbsolutePosition(r.id),{width:o,height:s}=e.getViewportSize();e.state.panX=o/2-(a.x+r.width/2)*e.state.zoom,e.state.panY=s/2-(a.y+r.height/2)*e.state.zoom,e.requestRender()}async function n(n,r){if(!n?.componentId)return;let i=e.graph.getMainComponent(n.id);i&&await t(i.id,r)}return{focusComponent:t,goToMainComponent:n}}function Gv(e){let{childIds:t,parentId:n,type:r,...i}=e;return i}function Kv(e,t,n){let r=It(t,e.graph),i={x:r.x+r.width+40,y:r.y},a=e.graph.getNode(n);if(!a)return{local:i,world:i};let o=R.invert(xt(a,e.graph));return{local:o?R.mapPoint(o,i):i,world:i}}function qv(e,t,n,r){let i=It(t,e.graph),a={x:r.x-i.x,y:r.y-i.y},o=e.graph.getNode(n),s=o?R.invert(xt(o,e.graph)):null;if(!s){e.graph.updateNode(t.id,{x:t.x+a.x,y:t.y+a.y});return}let c=R.mapPoint(s,{x:0,y:0}),l=R.mapPoint(s,a);e.graph.updateNode(t.id,{x:t.x+l.x-c.x,y:t.y+l.y-c.y})}function Jv(e){function t(t,n,r,i=e.state.currentPageId){let a=e.graph.getNode(t);if(a?.type!==`COMPONENT`)return null;let o=new Set(e.state.selectedIds),s=Kv(e,a,i),c=e.graph.createInstance(t,i,{x:n??s.local.x,y:r??s.local.y});if(!c)return null;n===void 0&&r===void 0&&qv(e,c,i,s.world);let l=c.id,u=Gv(c);return e.setSelectedIds(new Set([l])),e.undo.push({label:`Create instance`,forward:()=>{e.graph.createInstance(t,i,{...u}),e.setSelectedIds(new Set([l]))},inverse:()=>{e.graph.deleteNode(l),e.setSelectedIds(new Set(o))}}),l}function n(t){if(t?.type!==`INSTANCE`)return;let n=t.componentId,r=Je(t.instanceOverrides);e.graph.detachInstance(t.id),e.setSelectedIds(new Set([t.id])),e.undo.push({label:`Detach instance`,forward:()=>{e.graph.detachInstance(t.id),e.requestRender()},inverse:()=>{e.graph.updateNode(t.id,{type:`INSTANCE`,componentId:n,instanceOverrides:Je(r)})}})}return{createInstanceFromComponent:t,detachInstance:n}}function Yv(e,t){return pt(e.graph,t)}function Xv(e,t,n){return mt(e.graph,t,n)}function Zv(e,t){return gt(e.graph,t)?.id??null}function Qv(e){return e?e.field===`TEXT`?e.node.text:e.field===`VISIBLE`?String(e.node.visible):e.source.componentId??e.node.componentId??``:``}function $v(e,t,n,r){let i=bt(e.graph,t,n,r);return n.type!==`INSTANCE_SWAP`||i!==null}function ey(e,t){let n=e.graph.getNode(t);if(n?.type!==`INSTANCE`)return;let r=new Map(Yv(e,n).map(e=>[e.id,e]));for(let[i,a]of Object.entries(n.componentPropertyAssignments)){let n=r.get(i);n&&n.type!==`VARIANT`&&$v(e,t,n,a)}}function ty(e,t){function n(t){let n=e.graph.getNode(t);return n?.type===`INSTANCE`?Yv(e,n):[]}function r(t,n){let r=e.graph.getNode(t);if(r?.type!==`INSTANCE`)return n.defaultValue;if(n.type===`VARIANT`)return(r.componentId?e.graph.getNode(r.componentId):null)?.componentPropertyValues[n.name]??n.defaultValue;let i=r.componentPropertyAssignments[n.id]??n.defaultValue;return n.type===`INSTANCE_SWAP`?Zv(e,i)??i:i}function i(n,r,i){let a=e.graph.getNode(n);if(a?.type!==`INSTANCE`)return;X(e.graph,n);let o=Yv(e,a).find(e=>e.id===r);if(!o)return;if(o.type===`VARIANT`){t(n,o.name,i);return}let s={...a.componentPropertyAssignments},c=Je(a.instanceOverrides),l=Xv(e,a,r),u=a.componentPropertyAssignments[r],d=o.type===`INSTANCE_SWAP`&&u?Zv(e,u)??u:Qv(l);$v(e,n,o,i)&&(e.undo.push({label:`Change ${o.name}`,forward:()=>{$v(e,n,o,i),e.requestRender()},inverse:()=>{let t=e.graph.getNode(n);if(t){e.graph.updateNode(n,{componentPropertyAssignments:s,instanceOverrides:Je(c)});let i=Xv(e,t,r);if(i?.field===`TEXT`&&i.node.type===`TEXT`)e.graph.updateNode(i.node.id,{text:d});else if(i?.field===`VISIBLE`)e.graph.updateNode(i.node.id,{visible:d===`true`});else if(i?.field===`INSTANCE_SWAP`){let t=Zv(e,d);t&&i.node.type===`INSTANCE`&&e.graph.swapInstanceComponent(i.node.id,t)}}e.requestRender()}}),e.requestRender())}return{getInstanceComponentPropertyDefinitions:n,getInstanceComponentPropertyValue:r,reapplyInstanceComponentProperties:t=>ey(e,t),setInstanceComponentProperty:i}}function ny(e,t){return e.y-t.y||e.x-t.x||e.name.localeCompare(t.name)}function ry(e){function t(t){let n=e.graph.getNode(t);return n?.type===`COMPONENT_SET`?n:void 0}function n(e){return(t(e)?.componentPropertyDefinitions??[]).filter(e=>e.type===`VARIANT`)}function r(e){return t(e)?.componentPropertyDefinitions??[]}function i(n){let r=t(n);return r?r.childIds.map(t=>e.graph.getNode(t)).filter(e=>e?.type===`COMPONENT`):[]}function a(t){X(e.graph,t);for(let n of i(t))X(e.graph,n.id)}function o(e){let n=t(e);return n?{definitions:structuredClone(n.componentPropertyDefinitions),variants:new Map(i(e).map(e=>[e.id,{componentPropertyValues:structuredClone(e.componentPropertyValues),name:e.name}]))}:null}function s(n,r){if(t(n)){e.graph.updateNode(n,{componentPropertyDefinitions:structuredClone(r.definitions)});for(let[t,n]of r.variants)e.graph.getNode(t)&&e.graph.updateNode(t,{componentPropertyValues:structuredClone(n.componentPropertyValues),name:n.name});e.requestRender()}}function c(t,n,r,i){e.undo.push({label:n,forward:()=>s(t,i),inverse:()=>s(t,r)}),e.requestRender()}function l(t,r){let i=Object.fromEntries(n(t).map(e=>[e.name,r.componentPropertyValues[e.name]??``]));e.graph.updateNode(r.id,{name:Qn(i)})}function u(n){let r=t(n);if(!r)return;let i=y(n),a=r.componentPropertyDefinitions.map(e=>{if(e.type!==`VARIANT`)return e;let t=i.get(e.name)??new Set,n=[...(e.variantOptions??[]).filter(e=>t.has(e)),...[...t].filter(t=>!e.variantOptions?.includes(t))];return{...e,defaultValue:n.includes(e.defaultValue)?e.defaultValue:n[0]??``,variantOptions:n}});e.graph.updateNode(n,{componentPropertyDefinitions:a})}function d(e,t){let r=new Set,a=n(e);for(let n of i(e)){let e=t(n),i=a.map(t=>e[t.name]??``).join(`\0`);if(r.has(i))return!0;r.add(i)}return!1}function f(n,r){a(n);let s=t(n),u=o(n);if(!s||!u)return!1;let d=new Map(s.componentPropertyDefinitions.map(e=>[e.id,e]));if(r.length!==d.size||new Set(r).size!==d.size||r.some(e=>!d.has(e)))return!1;if(r.every((e,t)=>s.componentPropertyDefinitions[t]?.id===e))return!0;e.graph.updateNode(n,{componentPropertyDefinitions:r.flatMap(e=>{let t=d.get(e);return t?[t]:[]})});for(let e of i(n))l(n,e);let f=o(n);return f&&c(n,`Reorder properties`,u,f),!0}function p(r,i,s){a(r);let l=t(r),u=n(r).find(e=>e.id===i),d=u?.variantOptions??[],f=o(r);if(!l||!u||!f||s.length!==d.length||new Set(s).size!==d.length||s.some(e=>!d.includes(e)))return!1;if(s.every((e,t)=>d[t]===e))return!0;e.graph.updateNode(r,{componentPropertyDefinitions:l.componentPropertyDefinitions.map(e=>e.id===i?{...e,variantOptions:[...s],defaultValue:s[0]??``}:e)});let p=o(r);return p&&c(r,`Reorder variant values`,f,p),!0}function m(n,r,s=`VARIANT`,d=``){a(n);let f=t(n),p=r.trim();if(!f||!p||f.componentPropertyDefinitions.some(e=>e.name===p))return;let m=o(n);if(!m)return;let h=`prop:${Zt(8)}`,g={id:h,name:p,type:s,defaultValue:d,variantOptions:s===`VARIANT`?[d]:void 0};if(e.graph.updateNode(n,{componentPropertyDefinitions:[...f.componentPropertyDefinitions,g]}),s===`VARIANT`){for(let t of i(n)){e.graph.updateNode(t.id,{componentPropertyValues:{...t.componentPropertyValues,[p]:d}});let r=e.graph.getNode(t.id);r&&l(n,r)}u(n)}let _=o(n);return _&&c(n,`Add property`,m,_),h}function h(n,r){a(n);let s=t(n),d=s?.componentPropertyDefinitions.find(e=>e.id===r),f=o(n);if(!s||!d||!f)return!1;if(e.graph.updateNode(n,{componentPropertyDefinitions:s.componentPropertyDefinitions.filter(e=>e.id!==r)}),d.type===`VARIANT`){for(let t of i(n)){e.graph.updateNode(t.id,{componentPropertyValues:Et(t.componentPropertyValues,[d.name])});let r=e.graph.getNode(t.id);r&&l(n,r)}u(n)}let p=o(n);return p&&c(n,`Remove property`,f,p),!0}function g(n,r,s){a(n);let u=t(n),d=s.trim(),f=u?.componentPropertyDefinitions.find(e=>e.id===r),p=o(n);if(!u||!f||!p||!d||u.componentPropertyDefinitions.some(e=>e.id!==r&&e.name===d))return!1;if(f.name===d)return!0;if(e.graph.updateNode(n,{componentPropertyDefinitions:u.componentPropertyDefinitions.map(e=>e.id===r?{...e,name:d}:e)}),f.type===`VARIANT`)for(let t of i(n)){let r=t.componentPropertyValues[f.name]??``;e.graph.updateNode(t.id,{componentPropertyValues:{...Et(t.componentPropertyValues,[f.name]),[d]:r}});let i=e.graph.getNode(t.id);i&&l(n,i)}let m=o(n);return m&&c(n,`Rename property`,p,m),!0}function _(r,s,f,p){a(r);let m=n(r).find(e=>e.id===s),h=p.trim(),g=o(r),_=t(r);if(!m||!_||!g||!h||f===h||d(r,e=>({...b(r,e),[m.name]:e.componentPropertyValues[m.name]===f?h:e.componentPropertyValues[m.name]??``})))return!1;e.graph.updateNode(r,{componentPropertyDefinitions:_.componentPropertyDefinitions.map(e=>e.id===s?{...e,defaultValue:e.defaultValue===f?h:e.defaultValue,variantOptions:e.variantOptions?.map(e=>e===f?h:e)}:e)});for(let t of i(r)){if(t.componentPropertyValues[m.name]!==f)continue;e.graph.updateNode(t.id,{componentPropertyValues:{...t.componentPropertyValues,[m.name]:h}});let n=e.graph.getNode(t.id);n&&l(r,n)}u(r);let v=o(r);return v&&c(r,`Rename variant value`,g,v),!0}function v(t,r,i){X(e.graph,t);let a=e.graph.getNode(t),s=a?.parentId;if(a?.type!==`COMPONENT`||!s)return{kind:`invalid`};let d=n(s).find(e=>e.id===r),f=i.trim(),p=o(s);if(!d||!p||!f)return{kind:`invalid`};if(a.componentPropertyValues[d.name]===f)return{kind:`unchanged`};let m=S(s,{...b(s,a),[d.name]:f});if(m&&m.id!==t)return{kind:`conflict`,componentIds:[t,m.id]};e.graph.updateNode(t,{componentPropertyValues:{...a.componentPropertyValues,[d.name]:f}});let h=e.graph.getNode(t);h&&l(s,h),u(s);let g=o(s);return g&&c(s,`Change ${d.name}`,p,g),{kind:`changed`}}function y(e){let t=new Map;for(let r of n(e))t.set(r.name,new Set);for(let r of i(e))for(let i of n(e)){let e=r.componentPropertyValues[i.name];e&&t.get(i.name)?.add(e)}return t}function b(e,t){return Object.fromEntries(n(e).map(e=>[e.name,t.componentPropertyValues[e.name]??``]))}function x(e,t){return i(e).sort(ny).find(e=>Object.entries(t).every(([t,n])=>e.componentPropertyValues[t]===n))}function S(e,t){let r=n(e);if(!r.some(e=>!Object.hasOwn(t,e.name)))return x(e,Object.fromEntries(r.map(e=>[e.name,t[e.name]])))}function C(e){return i(e).sort(ny)[0]}function w(e){let t=n(e),r=new Map;for(let n of i(e)){let i=b(e,n),a=t.map(e=>`${e.name}=${i[e.name]}`).join(`\0`),o=r.get(a)??{values:i,componentIds:[]};o.componentIds.push(n.id),r.set(a,o)}return[...r.values()].filter(e=>e.componentIds.length>1)}function T(e){return[...n(e).flatMap(t=>{let n=i(e).filter(e=>!e.componentPropertyValues[t.name]?.trim()).map(e=>e.id);return n.length>0?[{kind:`missing-value`,propertyId:t.id,propertyName:t.name,componentIds:n}]:[]}),...w(e).map(e=>({kind:`duplicate-combination`,...e}))]}function E(t,n){let r=e.graph.getNode(t),i=r?.componentId?e.graph.getNode(r.componentId):void 0,a=i?.parentId;return r?.type!==`INSTANCE`||i?.type!==`COMPONENT`||!a?[]:[...y(a).get(n)??new Set].map(e=>({value:e,available:!!S(a,{...b(a,i),[n]:e})}))}function D(n,r,i){X(e.graph,n);let a=e.graph.getNode(n);if(a?.type!==`INSTANCE`||!a.componentId)return{kind:`invalid`};let o=e.graph.getNode(a.componentId),s=o?.parentId;if(o?.type!==`COMPONENT`||!s||!t(s))return{kind:`invalid`};let c={...b(s,o),[r]:i},l=S(s,c);if(!l)return{kind:`unavailable`,requested:c};if(l.id===a.componentId)return{kind:`unchanged`,componentId:l.id};let u=a.componentId,d=t=>{e.graph.swapInstanceComponent(n,t),ey(e,n),e.requestRender()};return d(l.id),e.undo.push({label:`Switch variant`,forward:()=>d(l.id),inverse:()=>d(u)}),{kind:`changed`,componentId:l.id}}function O(n){X(e.graph,n);let r=e.graph.getNode(n),i=r?.parentId;if(r?.type!==`COMPONENT`||!i||!t(i))return;let a=e.graph.cloneTree(n,i,{x:r.x+r.width+40,name:r.name});if(!a)return;let o=Dv(e.graph,a.id);return e.setSelectedIds(new Set([a.id])),e.undo.push({label:`Add variant`,forward:()=>{let t=o.get(a.id);t&&Ov(e.graph,t,i,o),e.setSelectedIds(new Set([a.id])),e.requestRender()},inverse:()=>{e.graph.deleteNode(a.id),e.setSelectedIds(new Set([n])),e.requestRender()}}),e.requestRender(),a.id}function k(e){let t=C(e);return t?O(t.id):void 0}function A(t){X(e.graph,t);let n=e.graph.getNode(t),r=n?.parentId;if(n?.type!==`COMPONENT`||!r||i(r).length<=1)return!1;let a=Dv(e.graph,t);return e.graph.deleteNode(t),e.setSelectedIds(new Set([r])),e.undo.push({label:`Remove variant`,forward:()=>{e.graph.deleteNode(t),e.setSelectedIds(new Set([r])),e.requestRender()},inverse:()=>{let n=a.get(t);n&&Ov(e.graph,n,r,a),e.setSelectedIds(new Set([t])),e.requestRender()}}),e.requestRender(),!0}return{getComponentSetPropertyDefs:r,addPropertyDefinition:m,removePropertyDefinition:h,renamePropertyDefinition:g,reorderPropertyDefinitions:f,renameVariantValue:_,reorderVariantValues:p,setVariantPropertyValue:v,parseVariantName:Zn,buildVariantName:Qn,collectVariantOptions:y,findVariantByValues:x,getDefaultVariantForComponentSet:C,getComponentSetVariantConflicts:w,validateComponentSet:T,getVariantOptionAvailability:E,switchInstanceVariant:D,addVariant:k,duplicateVariant:O,removeVariant:A}}function iy(e){function t(t,n){if(t.length===0)return;let r=new Set(e.state.selectedIds);if(t.length===1){let n=t[0],i=n.type;if(n.type===`COMPONENT`)return;if(n.type===`FRAME`||n.type===`GROUP`){e.graph.updateNode(n.id,{type:`COMPONENT`}),e.setSelectedIds(new Set([n.id])),e.undo.push({label:`Create component`,forward:()=>{e.graph.updateNode(n.id,{type:`COMPONENT`}),e.setSelectedIds(new Set([n.id]))},inverse:()=>{e.graph.updateNode(n.id,{type:i}),e.setSelectedIds(r)}});return}}n(`COMPONENT`,t)}function n(t,n){if(t.length<2||!t.every(e=>e.type===`COMPONENT`))return;let r=n(`COMPONENT_SET`,t);if(!r)return;let i=uv(t,()=>`prop:${Zt(8)}`);if(i){for(let[t,n]of i.variants)e.graph.updateNode(t,n);e.graph.updateNode(r,{componentPropertyDefinitions:i.definitions})}}let r=Wv(e),i=Jv(e),a=ry(e),o=ty(e,a.switchInstanceVariant);return{createComponentFromSelection:t,createComponentSetFromComponents:n,...i,...r,...a,...o}}var ay=new Set([`vectorNetwork`,`fillGeometry`,`strokeGeometry`]),oy=new Set([`type`,`visible`,`isMask`,`maskType`]),sy=new Set([`x`,`y`,`rotation`,`flipX`,`flipY`,`parentId`]);function cy(e,t){let n=Object.keys(e);return{geometryCache:n.some(e=>ay.has(e)),nodePicture:!t.preview||n.some(e=>!sy.has(e))}}function ly(e,t,n,r,i){let a=cy(r,{preview:!i});for(let i of t)a.geometryCache&&i.invalidateVectorPath(n),a.nodePicture&&i.invalidateNodePicture(n),Object.keys(r).some(e=>oy.has(e))?i.tiledScene.invalidateStructure():i.tiledScene.invalidateNode(n,e)}function uy(e){let t=null;function n(t,n){ly(e.getGraph(),e.getRenderers(),t,n,!0),e.emitEditorEvent(`node:updated`,t,n),e.scheduleComponentSync(t),e.requestRender()}function r(t,n){let{nodePicture:r}=cy(n,{preview:!0});ly(e.getGraph(),e.getRenderers(),t,n,r),e.emitEditorEvent(`node:previewUpdated`,t,n)}function i(t){for(let n of e.getRenderers())n.invalidateNodePicture(t),n.tiledScene.invalidateStructure();e.scheduleComponentSync(t),e.requestRender()}function a(){t?.(),t=e.getGraph().onNodeEvents({updated:n,previewUpdated:r,created:t=>{e.emitEditorEvent(`node:created`,t),i(t.id)},deleted:(t,n)=>{e.emitEditorEvent(`node:deleted`,t,n),i(t)},reparented:(t,n,r)=>{e.emitEditorEvent(`node:reparented`,t,n,r),i(t)},reordered:(t,n,r,a)=>{e.emitEditorEvent(`node:reordered`,t,n,r,a),i(t)}})}function o(){t?.(),t=null}return{subscribeToGraph:a,unsubscribeFromGraph:o}}function dy(e){return{getNode:t=>e().getNode(t),getImage:t=>e().images.get(t),getChildren:t=>e().getChildren(t),getPages:t=>e().getPages(t)}}function fy(e,t){let n=e.graph.getNode(t);return n?.type===`CANVAS`||n?.type===`FRAME`||n?.type===`COMPONENT`?n:null}function py(e,t,n){let r=e.graph.getNode(t);r&&(e.graph.updateNode(t,{guides:structuredClone(n)}),r.source.editedFields=[...new Set([...r.source.editedFields,`guides`])],e.emitEditorEvent(`guides:changed`,t,structuredClone(n)),e.requestRender())}function my(){return`guide:${crypto.randomUUID()}`}function hy(e){function t(t,n,r){let i=fy(e,t);if(!i||!Number.isFinite(r))return null;let a={id:my(),axis:n,position:r},o=structuredClone(i.guides),s=[...o,a];return py(e,t,s),e.undo.push({label:`Add guide`,forward:()=>py(e,t,s),inverse:()=>py(e,t,o)}),a.id}function n(t,n,r){let i=fy(e,t);if(!i||!Number.isFinite(r))return!1;let a=i.guides.findIndex(e=>e.id===n);if(a===-1||i.guides[a].position===r)return!1;let o=structuredClone(i.guides),s=structuredClone(i.guides);return s[a].position=r,py(e,t,s),e.undo.push({label:`Move guide`,forward:()=>py(e,t,s),inverse:()=>py(e,t,o)}),!0}function r(t,n){let r=fy(e,t);if(!r)return!1;let i=structuredClone(r.guides),a=i.filter(e=>e.id!==n);return a.length===i.length?!1:(py(e,t,a),e.undo.push({label:`Remove guide`,forward:()=>py(e,t,a),inverse:()=>py(e,t,i)}),!0)}function i(t,n,r,i){let a=fy(e,t),o=fy(e,n),s=a?.guides.find(e=>e.id===r);if(!a||!o||!s||!Number.isFinite(i))return!1;let c=structuredClone(a.guides),l=structuredClone(o.guides),u=c.filter(e=>e.id!==r),d=[...l,{...s,position:i}],f=(r,i)=>{py(e,t,r),py(e,n,i)};return f(u,d),e.undo.push({label:`Move guide to frame`,forward:()=>f(u,d),inverse:()=>f(c,l)}),!0}return{addGuide:t,moveGuide:n,removeGuide:r,transferGuide:i}}function gy(e){function t(t){let n=e(),r=n.getNode(t);if(!r)return;V(n,t);let i=r.parentId?n.getNode(r.parentId):void 0;for(;i;)i.layoutMode!==`NONE`&&Yt(n,i.id),i=i.parentId?n.getNode(i.parentId):void 0}function n(t){let n=e(),r=new Set(On(t).filter(e=>n.getNode(e)));return[...r].filter(e=>{let t=n.getNode(e)?.parentId??null;for(;t;){if(r.has(t))return!1;t=n.getNode(t)?.parentId??null}return!0})}async function r(r,i,a){let o=e(),{result:s,impact:c}=await Dn(o,r);await a?.(s);let l=n(c);if(l.length>0)for(let e of l)t(e);else i&&V(o,i);return s}return{runLayoutForNode:t,runMutationWithLayout:r}}function _y(e){function t(t,n){let r=e.graph.getNode(t);if(!r)return;let i=vy(r),a=by(e,r,t,n);e.graph.updateNode(t,a),n!==`NONE`&&Yt(e.graph,t),e.runLayoutForNode(t);let o=e.graph.getNode(t);if(!o)return;let s=yy(o,Object.keys(i));e.undo.push({label:n===`NONE`?`Remove auto layout`:`Add auto layout`,forward:()=>{e.graph.updateNode(t,s),n!==`NONE`&&Yt(e.graph,t),e.runLayoutForNode(t)},inverse:()=>{e.graph.updateNode(t,i),e.runLayoutForNode(t)}})}return{setLayoutMode:t}}function vy(e){return{layoutMode:e.layoutMode,itemSpacing:e.itemSpacing,paddingTop:e.paddingTop,paddingRight:e.paddingRight,paddingBottom:e.paddingBottom,paddingLeft:e.paddingLeft,primaryAxisSizing:e.primaryAxisSizing,counterAxisSizing:e.counterAxisSizing,primaryAxisAlign:e.primaryAxisAlign,counterAxisAlign:e.counterAxisAlign,gridTemplateColumns:e.gridTemplateColumns,gridTemplateRows:e.gridTemplateRows,gridColumnGap:e.gridColumnGap,gridRowGap:e.gridRowGap,width:e.width,height:e.height}}function yy(e,t){return Rn(e,t)}function by(e,t,n,r){let i={layoutMode:r};return r===`GRID`&&t.layoutMode!==`GRID`?xy(e,t,n,i):r!==`NONE`&&t.layoutMode===`NONE`&&Object.assign(i,Sy()),i}function xy(e,t,n,r){let i=e.graph.getChildren(n),a=Math.max(2,Math.ceil(Math.sqrt(i.length))),o=Math.max(1,Math.ceil(i.length/a));if(r.gridTemplateColumns=Array.from({length:a},()=>({sizing:`FR`,value:1})),r.gridTemplateRows=Array.from({length:o},()=>({sizing:`FR`,value:1})),r.gridColumnGap=0,r.gridRowGap=0,r.primaryAxisSizing=`FIXED`,r.counterAxisSizing=`FIXED`,t.primaryAxisSizing===`HUG`||t.counterAxisSizing===`HUG`){let e=Math.max(...i.map(e=>e.width),100),t=Math.max(...i.map(e=>e.height),100);r.width=e*a,r.height=t*o}r.paddingTop=0,r.paddingRight=0,r.paddingBottom=0,r.paddingLeft=0}function Sy(){return{itemSpacing:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0,primaryAxisSizing:`HUG`,counterAxisSizing:`HUG`,primaryAxisAlign:`MIN`,counterAxisAlign:`MIN`}}function Cy(e,t){let n=null;function r(){n?.cancel()}function i(i=`Update`){r();let a=e.graph,o=new Map,s=new Set,c=new Set,l=!1,u,d=[];function f(e,t){!o.has(e.id)&&a.isApplyingLayout&&c.add(e.id),a.isApplyingLayout||c.delete(e.id);let n=o.get(e.id)??{},r=Object.keys(t).filter(e=>!Object.hasOwn(n,e));r.length&&Object.assign(n,structuredClone(Rn(e,r))),o.set(e.id,n)}function p(){l=!0;for(let e of d)e();u?.(),n===m&&(n=null)}let m={get closed(){return l},update(n,r){if(!(l||a!==e.graph||!a.getNode(n))){s.add(n),u??=e.beginInteractiveEdit();try{X(a,n),a.runPreviewUpdates(()=>t(n,r),f),e.requestRepaint()}catch(e){throw m.cancel(),e}}},commit(){if(l)return;try{for(let e of s)X(a,e)}catch(e){throw m.cancel(),e}let t=[];for(let[e,n]of o){let r=a.getNode(e);if(!r)continue;let i=structuredClone(Rn(r,Object.keys(n)));Ve(n,i)||t.push({id:e,before:n,after:i})}if(p(),t.length===0){o.size&&e.requestRender();return}function n(n){for(let e of t){let t=()=>a.updateNode(e.id,structuredClone(e[n]));c.has(e.id)?a.withLayoutMutations(t):t()}e.requestRender()}e.undo.push({label:i,forward:()=>n(`after`),inverse:()=>n(`before`)}),n(`after`)},cancel(){if(!l){p();for(let[e,t]of o)a.updateNodePreview(e,structuredClone(t));o.size&&e.requestRender()}}};for(let t of[`selection:changed`,`page:changed`,`graph:replaced`])d.push(e.onEditorEvent(t,m.cancel));return d.push(e.onEditorEvent(`node:deleted`,e=>{(s.has(e)||o.has(e))&&m.cancel()})),n=m,m}return{beginNodePreview:i,cancelNodePreviews:r}}var wy=300;function Ty(e){let t=null,n=null;function r(){if(!t)return;let r=t;t=null,n=null,q_(e,`Nudge`,r,K_(e,r.keys()))}function i(i,a){let o=[...e.state.selectedIds];if(o.length===0)return;let s=[];for(let t of o){let n=e.graph.getNode(t);n&&!n.locked&&s.push(t)}if(s.length!==0){if(!t){t=new Map;for(let n of s){let r=e.graph.getNode(n);r&&t.set(n,{x:r.x,y:r.y})}}for(let t of s){let n=e.graph.getNode(t);n&&(e.graph.updateNode(t,{x:n.x+i,y:n.y+a}),e.runLayoutForNode(t))}n&&clearTimeout(n),n=setTimeout(r,wy),e.requestRender()}}function a(){n&&(clearTimeout(n),r())}return{nudgeSelected:i,flushNudge:a}}var Ey=new Set([`text`,`fontSize`,`fontFamily`,`fontWeight`,`italic`,`lineHeight`,`letterSpacing`,`styleRuns`,`fontVariations`,`fontFeatures`,`textAutoResize`,`width`,`maxLines`]),Dy=new Set([`text`,`fontSize`,`fontFamily`,`fontWeight`,`italic`,`letterSpacing`,`styleRuns`,`fontVariations`,`fontFeatures`,`textAutoResize`]);function Oy(e){return Object.keys(e).some(e=>Ey.has(e))}function ky(e){return Object.keys(e).some(e=>Dy.has(e))}function Ay(e,t){if(e?.type!==`TEXT`||!Oy(t)||e.textPathData)return{};let n={...e,...t},r=n.textAutoResize;if(r!==`HEIGHT`&&r!==`WIDTH_AND_HEIGHT`)return{};let i=r===`HEIGHT`?n.width:void 0,a=Jt()?.(n,i)??B(n,i),o={derivedLayout:null,derivedTextGlyphs:null};return r===`WIDTH_AND_HEIGHT`&&ky(t)&&a.width>0&&(o.width=a.width),a.height>0&&(o.height=a.height),o}function jy(e,t){if(e?.type!==`TEXT`||typeof t.text!=`string`)return{};if(t.text.trim().length===0)return e.textPathBox?{derivedTextGlyphs:null,strokeGeometry:[]}:{};if(!e.textPathBox||!e.derivedTextGlyphs?.length)return{};let n=F(e);if(!n)return{};let r=t.fontFamily??e.fontFamily,i=t.fontWeight??e.fontWeight,a=t.italic??e.italic,o=t.fontSize??e.fontSize,s=t.letterSpacing??e.letterSpacing,c=Vt(r,Gt(i,a),t.text,o);if(!c)return{};let l=ru(e.derivedTextGlyphs,n,e.textPathBox);if(!l)return{};let u=l.offsets.reduce((e,t)=>e+t,0)/l.offsets.length,d=iu(n,e.textPathBox,l.anchor,u,c.map(e=>({commandsBlob:zs(e.commands,o),fontSize:o,advance:(e.advance+s)/o})));return d?{derivedTextGlyphs:d,strokeGeometry:[]}:{}}function My(e){function t(t,n,r){let i=e.graph.getNode(t);if(!i)return;let a=i.boundVariables[n];e.graph.bindVariable(t,n,r),e.undo.push({label:`Bind variable`,forward:()=>{try{e.graph.bindVariable(t,n,r),e.requestRender()}catch(e){console.warn(`Redo bindVariable failed:`,e instanceof Error?e.message:String(e))}},inverse:()=>{try{a?e.graph.bindVariable(t,n,a):e.graph.unbindVariable(t,n),e.requestRender()}catch(e){console.warn(`Undo bindVariable failed:`,e instanceof Error?e.message:String(e))}}}),e.requestRender()}function n(t,n){let r=e.graph.getNode(t);if(!r)return;let i=r.boundVariables[n];i&&(e.graph.unbindVariable(t,n),e.undo.push({label:`Unbind variable`,forward:()=>{try{e.graph.unbindVariable(t,n),e.requestRender()}catch(e){console.warn(`Redo unbindVariable failed:`,e instanceof Error?e.message:String(e))}},inverse:()=>{try{e.graph.bindVariable(t,n,i),e.requestRender()}catch(e){console.warn(`Undo unbindVariable failed:`,e instanceof Error?e.message:String(e))}}}),e.requestRender())}return{bindVariable:t,unbindVariable:n}}function Ny(e){if(e===`0`||!/^\d+$/.test(e))return 1;let t=Number.parseInt(e,10);if(!Number.isFinite(t))return 1;let n=e.length===1?t*10:t;return Math.min(100,Math.max(0,n))/100}function Py(e){let t=_y(e),n=Ty(e),r=My(e);function i(t,n){let r=e.graph.getNode(t);if(!r)return;let i=St(r,{...n,...Ay(r,n),...jy(r,n)});e.graph.updateNode(t,i),e.runLayoutForNode(t)}function a(t,n,r=`Update`){let i=e.graph.getNode(t);if(!i)return;let a=St(i,{...n,...Ay(i,n),...jy(i,n)}),o=Rn(i,Object.keys(a));e.graph.updateNode(t,a),e.runLayoutForNode(t),e.undo.push({label:r,forward:()=>{e.graph.updateNode(t,a),e.runLayoutForNode(t)},inverse:()=>{e.graph.updateNode(t,o),e.runLayoutForNode(t)}}),e.requestRender()}function o(t,n){if(!Number.isFinite(t))return;let r=Math.max(0,Math.min(1,t)),i=[...e.state.selectedIds];if(i.length===0)return;let o=i.map(t=>e.graph.getNode(t)).filter(e=>e!=null).filter(e=>e.opacity!==r);o.length!==0&&e.undo.runBatch(`Set opacity`,()=>{for(let e of o)a(e.id,{opacity:r},`Set opacity`)},n)}return{updateNode:i,...Cy(e,i),updateNodeWithUndo:a,setOpacity:o,...t,...r,...n}}function Fy(e){let t=new Map;function n(){t.set(e.state.currentPageId,{panX:e.state.panX,panY:e.state.panY,zoom:e.state.zoom,pageColor:{...e.state.pageColor}})}function r(n){let r=t.get(n);if(r){e.state.panX=r.panX,e.state.panY=r.panY,e.state.zoom=r.zoom,e.state.pageColor={...r.pageColor};return}e.state.panX=0,e.state.panY=0,e.state.zoom=1,e.state.pageColor={...p}}function i(e){t.delete(e)}function a(){t.clear()}return{saveCurrentPageViewport:n,restorePageViewport:r,deletePageViewport:i,clearPageViewports:a}}function Iy(e){e?.throwIfAborted()}var Ly=4;function Ry(e){let t=Fy(e),n,r=0,i=0;function a(){return N_(e.graph)?(n??=R_(e.graph),n):null}async function o(t,o,s){Iy(s);let c=a(),l=r,u=c?await c.populate(t,s):null;return Iy(s),l!==r||o!==i?null:u===null?(c?.terminate(),n=void 0,C_(e.graph,[t])):u}async function s(t,n,r){let i=e.graph.getChildren(t).map(e=>e.id),a=z.collectFontKeys(e.graph,i),o=Bt(e.graph,i);r.onProgress?.({phase:`resolving-fonts`,detail:n,completed:0,total:a.length}),z.blockNodesUntilFontsResolve(i);try{let t=0,i=Ln(async([n,i])=>{Iy(r.signal);let s=await e.loadFont(n,i,o.characters,r.signal);return Iy(r.signal),t++,r.onProgress?.({phase:`resolving-fonts`,detail:`${n} ${i}`,completed:t,total:a.length}),s},Ly),s=await Promise.all(a.map(i));Iy(r.signal);let c=P(o);r.onProgress?.({phase:`resolving-fallbacks`,detail:n,completed:0,total:c.length});let l=await z.ensureFallbackPack(c,o.characters,r.signal);Iy(r.signal),r.onProgress?.({phase:`resolving-fallbacks`,detail:n,completed:c.length,total:c.length});let u=s.every(e=>e!==null),d=c.every(e=>(l[e]?.length??0)>0);if(u&&d)for(let e of o.nodes)e.type===`TEXT`&&(e.textPicture=null)}finally{z.unblockNodes(i),e.getRenderer()?.invalidateAllPictures()}}async function c(t,n={}){let r=e.graph.getNode(t);if(r?.type!==`CANVAS`)return null;let a=++i;Iy(n.signal),n.onProgress?.({phase:`populating-page`,detail:r.name});let c=await o(t,a,n.signal);return c===null||a!==i||(await s(t,r.name,n),Iy(n.signal),a!==i)?null:((e.getRenderer()||c)&&(n.onProgress?.({phase:`layout`,detail:r.name}),V(e.graph,t)),Iy(n.signal),a===i?{pageId:t,generation:a}:null)}function l(n){if(n.generation!==i||e.graph.getNode(n.pageId)?.type!==`CANVAS`)return!1;t.saveCurrentPageViewport();let r=e.state.currentPageId;return e.state.currentPageId=n.pageId,e.state.enteredContainerId=null,e.setSelectedIds(new Set),t.restorePageViewport(n.pageId),r!==n.pageId&&e.emitEditorEvent(`page:changed`,n.pageId,r),e.requestRender(),!0}async function u(e,t={}){let n=await c(e,t);n&&l(n)}function d(){r++,i++,n?.terminate(),n=void 0,t.clearPageViewports()}function f(t){let n=e.graph.getPages(),r=t??`Page ${n.length+1}`,i=e.graph.addPage(r);return u(i.id),i.id}function p(n){let r=e.graph.getPages();if(r.length<=1)return;let i=r.findIndex(e=>e.id===n);if(e.graph.deleteNode(n),t.deletePageViewport(n),e.state.currentPageId===n){let t=Math.min(i,r.length-2);u(e.graph.getPages()[t].id)}}function m(t,n){let r=e.graph.getPages(),i=r.findIndex(e=>e.id===t);if(i===-1)return;let a=Math.max(0,Math.min(n,r.length-1));a!==i&&e.graph.insertChildAt(t,e.graph.rootId,a)}function h(t,n){e.graph.updateNode(t,{name:n})}function g(t){e.state.pageColor=t,e.requestRender()}return{preparePage:c,commitPageSwitch:l,switchPage:u,addPage:f,deletePage:p,movePage:m,renamePage:h,setPageColor:g,clearPageViewports:d}}function zy(e){function t(){e.state.enteredContainerId&&!e.graph.getNode(e.state.enteredContainerId)&&(e.state.enteredContainerId=null)}function n(t){e.state.enteredContainerId=t}function r(){let t=e.state.enteredContainerId;if(!t)return;let n=e.graph.getNode(t)?.parentId;n&&n!==e.state.currentPageId?e.state.enteredContainerId=n:e.state.enteredContainerId=null,e.setSelectedIds(new Set(t?[t]:[]))}return{validateEnteredContainer:t,enterContainer:n,exitContainer:r}}function By(e,t,n){function r(t,n,r=!1){if(!e.getRenderer())return null;let i=e.state.enteredContainerId;if(i)if(!e.graph.getNode(i))e.state.enteredContainerId=null;else return r?e.graph.hitTestDeep(t,n,i):e.graph.hitTest(t,n,i);return r?e.graph.hitTestDeep(t,n,e.state.currentPageId):e.graph.hitTest(t,n,e.state.currentPageId)}function i(i,a){let o=r(i,a);o?e.state.selectedIds.has(o.id)||t([o.id]):n()}return{hitTestAtPoint:r,selectAtPoint:i}}function Vy(e){function t(t){e.state.marquee=t,e.requestRepaint()}function n(t){e.state.snapGuides=t,e.requestRepaint()}function r(t){e.state.guides.preview=t,e.requestRepaint()}function i(t){let n=e.state.guides.hovered;n?.ownerId===t?.ownerId&&n?.guideId===t?.guideId||(e.state.guides.hovered=t,e.requestRepaint())}function a(t){e.state.guides.redline=t,e.requestRepaint()}function o(t){e.state.guides.selected=t,t&&e.setSelectedIds(new Set),e.requestRepaint()}function s(t){t===null&&e.state.rotationPreview===null||(e.state.rotationPreview=t,e.emitEditorEvent(`rotation:preview-changed`,t),e.requestRepaint())}function c(t){e.state.hoveredNodeId!==t&&(e.state.hoveredNodeId=t,e.requestRepaint())}function l(t){e.state.measurementMode!==t&&(e.state.measurementMode=t,e.requestRepaint())}function u(t){e.state.dropTargetId!==t&&(e.state.dropTargetId=t,e.requestRepaint())}function d(t){e.state.layoutInsertIndicator!==t&&(e.state.layoutInsertIndicator=t,e.requestRepaint())}function f(t){let n=e.state.autoLayoutHover;n?.nodeId===t?.nodeId&&n?.kind===t?.kind&&n?.index===t?.index&&n?.side===t?.side||(e.state.autoLayoutHover=t,e.requestRepaint())}return{setMarquee:t,setSnapGuides:n,setGuidePreview:r,setHoveredGuide:i,setGuideRedline:a,setSelectedGuide:o,setRotationPreview:s,setHoveredNode:c,setMeasurementMode:l,setDropTarget:u,setLayoutInsertIndicator:d,setAutoLayoutHover:f}}function Hy(e){function t(){let t=[];for(let n of e.state.selectedIds){let r=e.graph.getNode(n);r&&t.push({...r})}return t}function n(){if(e.state.selectedIds.size!==1)return;let t=e.state.selectedIds.values().next().value,n=e.graph.getNode(t);return n?{...n}:void 0}function r(){return e.graph.flattenTree(e.state.currentPageId)}return{getSelectedNodes:t,getSelectedNode:n,getLayerTree:r}}function Uy(e){function t(t,n=!1){if(n){let n=new Set(e.state.selectedIds);for(let e of t)n.has(e)?n.delete(e):n.add(e);e.setSelectedIds(n)}else e.setSelectedIds(new Set(t))}function n(){e.setSelectedIds(new Set)}function r(){let t=e.graph.getChildren(e.state.currentPageId);e.setSelectedIds(new Set(t.map(e=>e.id)))}function i(){let t=e.graph.getChildren(e.state.currentPageId);e.setSelectedIds(new Set(t.filter(t=>!e.state.selectedIds.has(t.id)).map(e=>e.id)))}let a=zy(e),o=By(e,t,n),s=Vy(e),c=Hy(e);return{select:t,clearSelection:n,selectAll:r,selectInverse:i,...s,...a,...c,...o}}function Wy(e,t,n){let r=t.parentId?e.graph.getNode(t.parentId):void 0,i=t.layoutPositioning!==`ABSOLUTE`&&r?.layoutMode!==`NONE`&&(r?.layoutMode===`GRID`||r?.counterAxisAlign===`STRETCH`);return{width:n.width,height:n.height,primaryAxisSizing:`FIXED`,counterAxisSizing:`FIXED`,layoutGrow:0,layoutAlignSelf:t.layoutAlignSelf===`STRETCH`||t.layoutAlignSelf===`AUTO`&&i?`MIN`:t.layoutAlignSelf}}function Gy(e,t){function n(n){let{width:r,height:i}=e.getViewportSize(),a=(r/2-e.state.panX)/e.state.zoom,o=(i/2-e.state.panY)/e.state.zoom,s=new Set(e.state.selectedIds),c=e.undo.runBatch(`Create frame`,()=>{let r=t(`FRAME`,a-n.width/2,o-n.height/2,n.width,n.height,void 0,n.name),i=new Set([r]);return e.setSelectedIds(i),e.undo.push({label:`Select created frame`,forward:()=>e.setSelectedIds(new Set(i)),inverse:()=>e.setSelectedIds(new Set(s))}),r});return e.setActiveTool(`SELECT`),e.requestRender(),c}function r(t,n,r){e.graph.updateNode(t,n);for(let[t,n]of r)e.graph.updateNode(t,n),`vectorNetwork`in n&&e.getRenderer()?.invalidateVectorPath(t);e.runLayoutForNode(t)}function i(t,n,i,a){e.graph.updateNode(t,i);let o=Fh(e.graph,t,n,i,a);for(let[t,n]of o)e.graph.updateNode(t,n);e.runLayoutForNode(t),r(t,i,Fh(e.graph,t,n,i,a))}function a(t,n){let a=e.graph.getNode(t);if(a?.type!==`FRAME`)return;let o={width:a.width,height:a.height,primaryAxisSizing:a.primaryAxisSizing,counterAxisSizing:a.counterAxisSizing,layoutGrow:a.layoutGrow,layoutAlignSelf:a.layoutAlignSelf},s=Wy(e,a,n);if(o.width===s.width&&o.height===s.height&&o.primaryAxisSizing===s.primaryAxisSizing&&o.counterAxisSizing===s.counterAxisSizing&&o.layoutGrow===s.layoutGrow&&o.layoutAlignSelf===s.layoutAlignSelf)return;let c=Ph(e.graph,t)??new Map;i(t,o,s,c);let l=Ph(e.graph,t)??new Map;e.undo.push({label:`Resize frame to preset`,forward:()=>i(t,o,s,c),inverse:()=>{i(t,s,o,l),r(t,o,c)}}),e.requestRender()}return{createFrameFromPreset:n,resizeFrameToPreset:a}}var Ky={color:d,weight:2,opacity:1,visible:!0,align:`CENTER`};function qy(e,t){let n={x:-t.x,y:-t.y},r=Math.hypot(n.x,n.y);if(r<=1e-6)return e;let i={x:n.x/r,y:n.y/r},a=Math.max(0,e.x*i.x+e.y*i.y);return{x:i.x*a,y:i.y*a}}function Jy(e,t,n,r){if(t){if(!n)return;n.start===0?n.tangentStart={x:e.x,y:e.y}:n.end===0&&(n.tangentEnd={x:e.x,y:e.y});return}r&&(r.tangentEnd={x:e.x,y:e.y})}function Yy(e,t){function n(t,n){if(!e.state.penState){e.state.penState={vertices:[{x:t,y:n}],segments:[],dragTangent:null,oppositeDragTangent:null,pendingClose:!1,closingToFirst:!1},e.requestRender();return}let r=e.state.penState,i=r.vertices.length-1;r.vertices.push({x:t,y:n});let a=r.vertices.length-1;r.segments.push({start:i,end:a,tangentStart:r.dragTangent??{x:0,y:0},tangentEnd:{x:0,y:0}}),r.dragTangent=null,r.oppositeDragTangent=null,r.pendingClose=!1,e.requestRender()}function r(t,n,r){if(!e.state.penState)return;let i=e.state.penState,a={x:t,y:n},o=!!i.pendingClose&&i.vertices.length>2,s=o?0:i.vertices.length-1,c=i.segments.length>0?i.segments[i.segments.length-1]:void 0,l=i.segments.length>0?i.segments[0]:void 0,u=r?.oppositeTangent??i.oppositeDragTangent??(c?c.tangentEnd:{x:-t,y:-n});if(r?.constrainToOpposite&&(a=qy(a,u)),i.dragTangent=a,r?.keepOpposite??o)i.oppositeDragTangent={x:u.x,y:u.y},Jy(u,o,l,c),r?.constrainToOpposite?i.vertices[s].handleMirroring=`ANGLE`:i.vertices[s].handleMirroring=`NONE`;else{let e={x:-a.x,y:-a.y};i.oppositeDragTangent=e,Jy(e,o,l,c),i.vertices[s].handleMirroring=`ANGLE_AND_LENGTH`}e.requestRender()}function i(t){e.state.penState&&(e.state.penState.closingToFirst=t,e.requestRender())}function a(t){e.state.penState&&(e.state.penState.pendingClose=t,e.requestRepaint())}function o(t,n){if(!e.state.penState)return;let r=e.state.penState,i=r.pendingClose&&r.vertices.length>2?0:r.vertices.length-1;r.vertices[i].x=t,r.vertices[i].y=n,e.requestRender()}function s(n){let r=e.state.penState;if(!r||r.vertices.length<2){e.state.penState=null,e.state.penCursorX=null,e.state.penCursorY=null;return}if(n&&r.pendingClose&&r.vertices.length>2){let e=r.vertices.length-1;r.segments.push({start:e,end:0,tangentStart:{x:0,y:0},tangentEnd:r.dragTangent??{x:0,y:0}})}let i=n?[{windingRule:`NONZERO`,loops:[r.segments.map((e,t)=>t)]}]:[],a={vertices:r.vertices.map(e=>({...e})),segments:r.segments.map(e=>({...e,tangentStart:{...e.tangentStart},tangentEnd:{...e.tangentEnd}})),regions:i},o=nl(a),s={vertices:a.vertices.map(e=>({...e,x:e.x-o.x,y:e.y-o.y})),segments:a.segments,regions:a.regions},c=r.resumedFills?r.resumedFills.map(e=>({...e})):[],l=r.resumedStrokes?r.resumedStrokes.map(e=>({...e})):[{...Ky}],u=t(`VECTOR`,o.x,o.y,o.width,o.height);e.graph.updateNode(u,{vectorNetwork:s,name:`Vector`,fills:c,strokes:l}),e.setSelectedIds(new Set([u])),e.state.penState=null,e.state.penCursorX=null,e.state.penCursorY=null,e.setActiveTool(`SELECT`),e.requestRender()}function c(){e.state.penState=null,e.state.penCursorX=null,e.state.penCursorY=null,e.setActiveTool(`SELECT`),e.requestRender()}return{penAddVertex:n,penSetDragTangent:r,penSetClosingToFirst:i,penSetPendingClose:a,penSetKnotPosition:o,penCommit:s,penCancel:c}}function Xy(e,t){let n=e.graph.getNode(t);if(n?.type!==`SECTION`)return;let r=n.parentId??e.state.currentPageId,i=e.graph.getChildren(r),a=n.x,o=n.y,s=a+n.width,c=o+n.height,l=[];for(let e of i){if(e.id===t)continue;let n=e.x,r=e.y,i=n+e.width,u=r+e.height;n>=a&&r>=o&&i<=s&&u<=c&&l.push(e.id)}if(l.length===0)return;let u=[];for(let n of l){let i=e.graph.getNode(n);if(!i)continue;let s=i.x-a,c=i.y-o;u.push({id:n,oldParent:r,oldX:i.x,oldY:i.y,newX:s,newY:c}),e.graph.reparentNode(n,t),e.graph.updateNode(n,{x:s,y:c})}e.undo.push({label:`Adopt into section`,forward:()=>{for(let n of u)e.graph.reparentNode(n.id,t),e.graph.updateNode(n.id,{x:n.newX,y:n.newY})},inverse:()=>{for(let t of u)e.graph.reparentNode(t.id,t.oldParent),e.graph.updateNode(t.id,{x:t.oldX,y:t.oldY})}})}var Zy={type:`SOLID`,color:d,opacity:1,visible:!0},Qy={FRAME:r,SECTION:i,RECTANGLE:o,ELLIPSE:o,POLYGON:o,STAR:o,LINE:Zy,TEXT:Zy};function $y(e){function t(t,n,r,i,a,o,c){let l=Qy[t]??Qy.RECTANGLE,u=o??e.state.currentPageId,d={x:n,y:r,width:i,height:a,fills:[{...l}],...c?{name:c}:{}};t===`SECTION`&&(d.strokes=[{...s}],d.cornerRadius=5),t===`POLYGON`&&(d.pointCount=3),t===`STAR`&&(d.pointCount=5,d.starInnerRadius=.38);let f=e.graph.createNode(t,u,d),p=f.id,m={...f};return e.undo.push({label:`Create ${t.toLowerCase()}`,forward:()=>{e.graph.createNode(m.type,u,m)},inverse:()=>{e.graph.deleteNode(p);let t=new Set(e.state.selectedIds);t.delete(p),e.setSelectedIds(t)}}),p}let n=Yy(e,t),r=Gy(e,t);function i(t){e.setActiveTool(t)}return{createShape:t,...n,...r,adoptNodesIntoSection:t=>Xy(e,t),setTool:i}}function eb(e){return{...Dp(),...kp(e)}}function tb(e,t,n){if(n.length===0)return;let r=n[0].parentId??e.state.currentPageId;if(!n.every(t=>(t.parentId??e.state.currentPageId)===r))return;let i=new Set(e.state.selectedIds),a=n.map(e=>({id:e.id,x:e.x,y:e.y,parentId:r})),o=it(n,t=>e.graph.getAbsolutePosition(t)),s=t(r)?{x:0,y:0}:e.graph.getAbsolutePosition(r),c=n.length<=1||o.height>o.width?`VERTICAL`:`HORIZONTAL`,l=e.graph.createNode(`FRAME`,r,{name:`Frame`,x:o.x-s.x,y:o.y-s.y,width:o.width,height:o.height,layoutMode:c,primaryAxisSizing:`HUG`,counterAxisSizing:`HUG`,primaryAxisAlign:`MIN`,counterAxisAlign:`MIN`,fills:[]}),u=l.id,d=n.map(t=>({id:t.id,pos:e.graph.getAbsolutePosition(t.id)})).sort((e,t)=>e.pos.y-t.pos.y||e.pos.x-t.pos.x).map(e=>e.id);for(let t of d)e.graph.reparentNode(t,u);Yt(e.graph,u),e.runLayoutForNode(u),e.setSelectedIds(new Set([u])),e.undo.push({label:`Wrap in auto layout`,forward:()=>{let t=e.graph.createNode(`FRAME`,r,{...l,id:u});for(let n of a)e.graph.reparentNode(n.id,t.id);Yt(e.graph,t.id),e.runLayoutForNode(t.id),e.setSelectedIds(new Set([t.id]))},inverse:()=>{for(let t of a)e.graph.reparentNode(t.id,t.parentId),e.graph.updateNode(t.id,{x:t.x,y:t.y});e.graph.deleteNode(u),e.setSelectedIds(i)}})}function nb(e){let t=new Set(e.map(e=>e.id));return e.filter(e=>!e.parentId||!t.has(e.parentId))}function rb(e,t){let n=nb(t);if(n.length===0||n.some(e=>e.locked))return null;let r=n[0].parentId??e.state.currentPageId;if(!n.every(t=>(t.parentId??e.state.currentPageId)===r))return null;let i=e.graph.getNode(r);return i?{topLevel:n,parentId:r,parent:i}:null}function ib(e,t,n,r){let i=rb(e,n);if(!i||i.topLevel.length<2)return null;let{topLevel:a,parentId:o,parent:s}=i;if(a.some(t=>!ge(t,e.graph)))return null;let c=new Set(e.state.selectedIds),l=a.map(e=>e.id),u=l.map(t=>({id:t,subtree:Dv(e.graph,t)})),d=a.map(e=>({id:e.id,x:e.x,y:e.y})),f=Math.min(...l.map(e=>s.childIds.indexOf(e))),p=t(o)?{x:0,y:0}:e.graph.getAbsolutePosition(o),m=it(a,t=>e.graph.getAbsolutePosition(t)),h=e.graph.createNode(`BOOLEAN_OPERATION`,o,{name:ab(r),x:m.x-p.x,y:m.y-p.y,width:m.width,height:m.height,fills:et(a[0].fills),strokes:Qe(a[0].strokes),booleanOperation:r}),g=h.id;e.graph.insertChildAt(g,o,f);for(let t of l)e.graph.reparentNode(t,g);return e.setSelectedIds(new Set([g])),e.undo.push({label:ab(r),forward:()=>{let t=e.graph.createNode(`BOOLEAN_OPERATION`,o,{...h,childIds:[],id:g});e.graph.insertChildAt(t.id,o,f);for(let n of l)e.graph.reparentNode(n,t.id);e.setSelectedIds(new Set([t.id]))},inverse:()=>{for(let{id:t,subtree:n}of u){let r=n.get(t);r&&(e.graph.getNode(t)?e.graph.reparentNode(t,o):Ov(e.graph,r,o,n))}for(let t=0;t<l.length;t++){let n=l[t],r=d[t];e.graph.insertChildAt(n,o,f+t),e.graph.updateNode(n,{x:r.x,y:r.y})}e.graph.deleteNode(g),e.setSelectedIds(c)}}),g}function ab(e){switch(e){case`UNION`:return`Union`;case`SUBTRACT`:return`Subtract`;case`INTERSECT`:return`Intersect`;case`EXCLUDE`:return`Exclude`;default:return e}}function ob(e,t,n,r,i){if(r.length===0)return null;let a=r[0].parentId??e.state.currentPageId;if(!r.every(t=>(t.parentId??e.state.currentPageId)===a))return null;let o=e.graph.getNode(a);if(!o)return null;let s=new Set(e.state.selectedIds),c=r.map(e=>e.id),l=r.map(e=>({id:e.id,x:e.x,y:e.y})),{x:u,y:d,width:f,height:p}=it(r,t=>e.graph.getAbsolutePosition(t)),m=u+f,h=d+p,g=t(a)?{x:0,y:0}:e.graph.getAbsolutePosition(a),_=Math.min(...c.map(e=>o.childIds.indexOf(e))),v=n===`COMPONENT_SET`?40:0,y={COMPONENT_SET:r[0].name.split(`/`)[0]?.trim()||`Component Set`,COMPONENT:`Component`,GROUP:`Group`,FRAME:`Frame`},b=e.graph.createNode(n,a,{name:y[n]??n,x:u-g.x-v,y:d-g.y-v,width:m-u+v*2,height:h-d+v*2,fills:n===`COMPONENT_SET`?[{type:`SOLID`,color:{r:.96,g:.96,b:.96,a:1},opacity:1,visible:!0}]:[],...i}),x=b.id;e.graph.insertChildAt(x,a,_);for(let t of r)e.graph.reparentNode(t.id,x);return e.setSelectedIds(new Set([x])),e.undo.push({label:`Create ${n.toLowerCase().replace(`_`,` `)}`,forward:()=>{let t=e.graph.createNode(n,a,{...b,...i,id:x});e.graph.insertChildAt(t.id,a,_);for(let n of l)e.graph.reparentNode(n.id,t.id);e.setSelectedIds(new Set([t.id]))},inverse:()=>{for(let t of l)e.graph.reparentNode(t.id,a),e.graph.updateNode(t.id,{x:t.x,y:t.y});e.graph.deleteNode(x),e.setSelectedIds(s)}}),x}function sb(e,t,n={}){let r=n.label??`Flatten`,i=n.canFlattenNode??(t=>ge(t,e.graph)),a=n.vectorPropsFactory??cv,o=e.getRenderer();if(!o)return null;let s=rb(e,t);if(!s)return null;let{topLevel:c,parentId:l,parent:u}=s;if(c.some(e=>!i(e)))return null;let d=c.map(e=>e.id),f=d.map(t=>({id:t,subtree:Dv(e.graph,t)})),p=new Set(e.state.selectedIds),m=Math.min(...d.map(e=>u.childIds.indexOf(e))),h=a(o,e.graph,c);if(!h)return null;let g=e.graph.createNode(`VECTOR`,l,{...h,name:r,strokes:[]}),_=structuredClone(g);e.graph.insertChildAt(g.id,l,m);for(let t of d)e.graph.deleteNode(t);return e.setSelectedIds(new Set([g.id])),e.undo.push({label:r,forward:()=>{let t=e.graph.createNode(`VECTOR`,l,_);e.graph.insertChildAt(t.id,l,m);for(let t of d)e.graph.deleteNode(t);e.setSelectedIds(new Set([t.id]))},inverse:()=>{e.graph.deleteNode(g.id);for(let t=0;t<f.length;t++){let{id:n,subtree:r}=f[t],i=r.get(n);i&&(Ov(e.graph,i,l,r),e.graph.insertChildAt(n,l,m+t))}e.setSelectedIds(p)}}),g.id}function cb(e,t){return sb(e,t,{label:`Outline stroke`,canFlattenNode:t=>ge(t,e.graph)&&le(t,e.graph),vectorPropsFactory:lv})}function lb(e,t){if(t?.type!==`GROUP`)return;let n=t,r=n.parentId??e.state.currentPageId,i=e.graph.getNode(r);if(!i)return;let a=i.childIds.indexOf(n.id),o=[...n.childIds],s=new Set(e.state.selectedIds),c=o.map(t=>{let n=e.graph.getNode(t);return n?{id:t,x:n.x,y:n.y}:{id:t,x:0,y:0}}),l=n.id,u={...n,childIds:[...n.childIds]};for(let t=0;t<o.length;t++)e.graph.reparentNode(o[t],r),e.graph.insertChildAt(o[t],r,a+t);e.graph.deleteNode(n.id),e.setSelectedIds(new Set(o)),e.undo.push({label:`Ungroup`,forward:()=>{for(let t=0;t<o.length;t++)e.graph.reparentNode(o[t],r),e.graph.insertChildAt(o[t],r,a+t);e.graph.deleteNode(l),e.setSelectedIds(new Set(o))},inverse:()=>{let t=e.graph.createNode(`GROUP`,r,{...u,childIds:[],id:l});e.graph.insertChildAt(t.id,r,a);for(let n of c)e.graph.reparentNode(n.id,t.id),e.graph.updateNode(n.id,{x:n.x,y:n.y});e.setSelectedIds(s)}})}function ub(e){let t=e.toLowerCase().replaceAll(`_`,` `);return t.charAt(0).toUpperCase()+t.slice(1)}function db(e,t,n,r){let i=Number.isFinite(r)?Math.trunc(r):1;return e.replace(/\$([nN]+)/g,(e,r)=>{let a=r[0]===`n`?i+t:i+n-t-1;return String(a).padStart(r.length,`0`)})}function fb(e,t){let n;try{n=t.match?new RegExp(t.match):/^.*$/}catch{return{names:new Map,error:`invalid-pattern`}}let r=new Map;return e.forEach((i,a)=>{let o=db(t.replacement,a,e.length,t.startNumber),s=i.name.replace(n,o).trim();r.set(i.id,s||ub(i.type))}),{names:r,error:null}}function pb(e){function t(t,n,r){X(e.graph,t),X(e.graph,n);let i=e.graph.getNode(t);if(i){if(i.parentId!==n){let r=e.graph.getAbsolutePosition(t),i=e.graph.getAbsolutePosition(n);e.graph.updateNode(t,{x:r.x-i.x,y:r.y-i.y})}e.graph.reorderChild(t,n,r),Yt(e.graph,n),e.runLayoutForNode(n)}}function n(n,r,i){let a=e.graph.getNode(r);if(!a||a.layoutMode===`NONE`)return;let o=e.graph.getNode(n);if(!o)return;let s=o.parentId??e.state.currentPageId,c=o.x,l=o.y,u=e.graph.getNode(s)?.childIds.indexOf(n)??-1;t(n,r,i),e.undo.push({label:`Reorder`,forward:()=>{t(n,r,i)},inverse:()=>{e.graph.reorderChild(n,s,u>=0?u:0),e.graph.updateNode(n,{x:c,y:l}),Yt(e.graph,s),e.runLayoutForNode(s),s!==r&&(Yt(e.graph,r),e.runLayoutForNode(r))}})}function r(t,n,r){X(e.graph,t),X(e.graph,n);let i=e.graph.getNode(t);if(!i)return;let a=i.parentId??e.state.currentPageId,o=e.graph.getNode(a)?.childIds.indexOf(t)??0,s=i.x,c=i.y;e.graph.reorderChild(t,n,r),e.runLayoutForNode(n),a!==n&&e.runLayoutForNode(a),e.undo.push({label:`Reorder`,forward:()=>{e.graph.reorderChild(t,n,r),e.runLayoutForNode(n),a!==n&&e.runLayoutForNode(a)},inverse:()=>{e.graph.reorderChild(t,a,o),e.graph.updateNode(t,{x:s,y:c}),e.runLayoutForNode(a),a!==n&&e.runLayoutForNode(n)}})}function i(t,n){X(e.graph,t);for(let t of n)X(e.graph,t);let r=e.graph.getNode(t)?.childIds??[];for(let[i,a]of n.entries())r[i]!==a&&e.graph.insertChildAt(a,t,i);e.runLayoutForNode(t),e.requestRender()}function a(t,n){let r=e.state.selectedIds;for(let t of r)X(e.graph,t);let a=new Set;for(let t of r){let n=e.graph.getNode(t)?.parentId;n&&a.add(n)}let o=new Map,s=new Map;for(let t of a){let a=e.graph.getNode(t)?.childIds;if(!a)continue;let c=n(a,r);c.every((e,t)=>e===a[t])||(o.set(t,[...a]),s.set(t,c),i(t,c))}s.size!==0&&e.undo.push({label:t,forward:()=>{for(let[e,t]of s)i(e,t)},inverse:()=>{for(let[e,t]of o)i(e,t)}})}function o(e,t,n){let r=[...e],i=n===`forward`?r.length-2:1,a=n===`forward`?-1:r.length,o=n===`forward`?-1:1;for(let e=i;e!==a;e+=o){let n=e-o,i=r[e],a=r[n];i&&a&&t.has(i)&&!t.has(a)&&(r[e]=a,r[n]=i)}return r}function s(){a(`Bring forward`,(e,t)=>o(e,t,`forward`))}function c(){a(`Send backward`,(e,t)=>o(e,t,`backward`))}function l(){a(`Bring to front`,(e,t)=>[...e.filter(e=>!t.has(e)),...e.filter(e=>t.has(e))])}function u(){a(`Send to back`,(e,t)=>[...e.filter(e=>t.has(e)),...e.filter(e=>!t.has(e))])}return{reorderInAutoLayout:n,reorderChildWithUndo:r,bringForward:s,sendBackward:c,bringToFront:l,sendToBack:u}}function mb(e){function t(t){X(e.graph,t);let n=e.graph.getNode(t);n&&(e.graph.updateNode(t,{visible:!n.visible}),n.parentId&&e.runLayoutForNode(n.parentId))}function n(t){X(e.graph,t);let n=e.graph.getNode(t);n&&e.graph.updateNode(t,{locked:!n.locked})}function r(){for(let t of e.state.selectedIds)X(e.graph,t);for(let n of e.state.selectedIds)t(n)}function i(){for(let t of e.state.selectedIds)X(e.graph,t);for(let t of e.state.selectedIds)n(t)}return{toggleNodeVisibility:t,toggleNodeLock:n,toggleVisibility:r,toggleLock:i}}function hb(e){let t=pb(e),n=mb(e);function i(t){return!t||t===e.graph.rootId||t===e.state.currentPageId}function a(t,n){let r=e.graph.getNode(n);for(let i of t)e.graph.getNode(i)?.type===`SECTION`&&r&&r.type!==`CANVAS`&&r.type!==`SECTION`||e.graph.reparentNode(i,n)}function o(t,n,r){return ob(e,i,t,n,r)}function s(t){tb(e,i,t)}function c(e){return o(`GROUP`,e)}function l(e){return o(`FRAME`,e,{fills:[structuredClone(r)]})}function u(t,n){return ib(e,i,t,n)}function d(t){lb(e,t)}function f(t){return sb(e,t)}function p(t){return t.length===0||t.some(e=>e.type!==`TEXT`)?null:sb(e,t,{label:`Outline text`})}function m(t){return cb(e,t)}function h(t){if(e.graph.getNode(t)?.type!==`CANVAS`)return;let n=[...e.state.selectedIds];for(let r of n)e.graph.reparentNode(r,t);e.setSelectedIds(new Set)}function g(){return[...e.state.selectedIds].map(t=>e.graph.getNode(t)).filter(e=>e!=null)}function _(e){return fb(g(),e)}function v(t){let n=g();if(n.length===0)return;let r=new Map(n.map(e=>[e.id,e.name])),i=fb(n,t);if(i.error)return;let a=t=>{for(let[n,r]of t)e.graph.updateNode(n,{name:r})};a(i.names),e.undo.push({label:`Rename selection`,forward:()=>a(i.names),inverse:()=>a(r)})}function y(t,n){let r=e.graph.getNode(t);if(!r)return;let i=n.trim();e.graph.updateNode(t,{name:i||ub(r.type)})}return{isTopLevel:i,...t,reparentNodes:a,wrapSelectionInContainer:o,wrapInAutoLayout:s,groupSelected:c,frameSelection:l,booleanOperationSelected:u,ungroupSelected:d,flattenSelected:f,outlineTextSelected:p,outlineStrokeSelected:m,...n,moveToPage:h,previewRenameSelected:_,renameSelected:v,renameNode:y}}function gb(e){return{nodeId:e.id,before:{text:e.text,styleRuns:ct(e.styleRuns),size:{width:e.width,height:e.height}},beforePathText:e.textPathData?{derivedTextGlyphs:rt(e.derivedTextGlyphs),strokeGeometry:Ze(e.strokeGeometry),textPathData:structuredClone(e.textPathData),textPathBox:e.textPathBox?{...e.textPathBox}:null}:null}}function _b(e,t=``){return{text:e?.text??t,styleRuns:e?ct(e.styleRuns):[],size:e?{width:e.width,height:e.height}:void 0}}function vb(e,t){if(!e||!t)return{};let n={};if(e.textAutoResize===`WIDTH_AND_HEIGHT`){let r=Math.ceil(t.getLongestLine());r>0&&r!==e.width&&(n.width=r)}if(e.textAutoResize===`HEIGHT`||e.textAutoResize===`WIDTH_AND_HEIGHT`){let r=Math.ceil(t.getHeight());r>0&&r!==e.height&&(n.height=r)}return n}function yb(e,t){return e.text!==t.text||!xb(e.styleRuns,t.styleRuns)||t.size!==void 0&&!bb(e.size??{},t.size)}function bb(e,t){return e.width===t.width&&e.height===t.height}function xb(e,t){return e.length===t.length&&e.every((e,n)=>Sb(e,t[n]))}function Sb(e,t){return e.start===t.start&&e.length===t.length&&Cb(e.style,t.style)}function Cb(e,t){return e.fontWeight===t.fontWeight&&e.italic===t.italic&&e.textDecoration===t.textDecoration&&e.fontSize===t.fontSize&&e.fontFamily===t.fontFamily&&e.letterSpacing===t.letterSpacing&&e.lineHeight===t.lineHeight&&wb(e.fills??[],t.fills??[])}function wb(e,t){return e.length===t.length&&e.every((e,n)=>Ve(e,t[n]))}function Tb(e){return!e.textPathData||Ut(e.fontFamily,Gt(e.fontWeight,e.italic))}function Eb(e,t=!1){return!e||!t&&!e.textPathData?null:{derivedTextGlyphs:rt(e.derivedTextGlyphs),strokeGeometry:Ze(e.strokeGeometry),textPathData:e.textPathData?structuredClone(e.textPathData):null,textPathBox:e.textPathBox?{...e.textPathBox}:null}}function Db(e,t){let n=[],r=e.graph.getNode(t);for(;r?.parentId;)r=e.graph.getNode(r.parentId),r?.type===`INSTANCE`&&n.push(r.id);return n}function Ob(e,t){return t.flatMap(t=>{let n=e.graph.getNode(t);return n?.type===`INSTANCE`?[{instanceId:t,instanceOverrides:Je(n.instanceOverrides)}]:[]})}function kb(e,t){for(let n of t)e.graph.updateNode(n.instanceId,{instanceOverrides:Je(n.instanceOverrides)})}function Ab(e,t,n,r){for(let i of t){let t=e.graph.getNode(i);t?.type===`INSTANCE`&&(Le(t.instanceOverrides,t.id,n,`text`,r),e.graph.updateNode(t.id,{instanceOverrides:t.instanceOverrides}))}}function jb(e){let t=null;function n(t,n){let r=e.graph.getNode(t);r&&e.graph.updateNode(t,{...n,...jy(r,n)})}function r(n){let r=e.getTextEditor();e.state.editingTextId&&i();let a=e.graph.getNode(n);a&&Tb(a)&&(t=gb(a),e.state.editingTextId=n,r&&(r.setRenderer(e.getRenderer()),r.start(a)),e.requestRender())}function i(){let r=e.getTextEditor();if(!r?.isActive){e.state.editingTextId=null,t=null;return}let i=r.state;if(!i){r.stop(),e.state.editingTextId=null,t=null,e.requestRender();return}let a={nodeId:i.nodeId,text:i.text},o=t?.before??{text:``,styleRuns:[],size:{}},s=t?.beforePathText??null,c=e.graph.getNode(a.nodeId),l=_b(c,a.text);l.text=a.text;let u=o.text===l.text?{}:vb(c,i.paragraph);Object.keys(u).length>0&&(l.size=u);let d=yb(o,l),f=Db(e,a.nodeId),p=Ob(e,f);if(r.stop(),!d){e.state.editingTextId=null,t=null,e.requestRender();return}n(a.nodeId,{text:l.text,styleRuns:l.styleRuns,...u});let m=Eb(e.graph.getNode(a.nodeId),s!==null);o.text!==l.text&&Ab(e,f,a.nodeId,l.text);let h=Ob(e,f);e.state.editingTextId=null,t=null,e.undo.push({label:`Edit text`,forward:()=>{e.graph.updateNode(a.nodeId,{text:l.text,styleRuns:l.styleRuns,...l.size,...m}),kb(e,h)},inverse:()=>{e.graph.updateNode(a.nodeId,{text:o.text,styleRuns:o.styleRuns,...o.size,...s}),kb(e,p)}})}return{startTextEditing:r,updateTextEditNode:n,commitTextEdit:i}}function Mb(e,t){let n=new Map,r=t=>{let i=e.getNode(t);if(i){n.set(t,structuredClone(i));for(let e of i.childIds)r(e)}};return r(t),n}function Nb(e,t){let n=e.state.currentPageId,r=e.graph.getNode(n),i=t.get(n);if(!(!r||!i)){for(let t of r.childIds.slice())e.graph.deleteNode(t);Pb(e.graph,t,n,i.childIds),e.graph.clearAbsPosCache(),V(e.graph,n),e.setSelectedIds(new Set),e.state.hoveredNodeId=null,e.requestRender()}}function Pb(e,t,n,r){for(let i of r){let a=t.get(i);if(!a)continue;let{parentId:o,childIds:s,...c}=a;e.createNode(a.type,n,{...c,childIds:[]}),e.reorderChild(a.id,n,r.indexOf(i)),Pb(e,t,a.id,s)}}function Fb(e){function t(t){for(let n of t.keys())X(e.graph,n);q_(e,`Move`,t,K_(e,t.keys()))}function n(t){for(let n of t.keys())X(e.graph,n);let n=new Map;for(let[r]of t){let t=e.graph.getNode(r);t&&n.set(r,{x:t.x,y:t.y,parentId:t.parentId??e.state.currentPageId})}e.undo.push({label:`Move`,forward:()=>{for(let[t,r]of n)e.graph.reparentNode(t,r.parentId),e.graph.updateNode(t,{x:r.x,y:r.y}),e.runLayoutForNode(t)},inverse:()=>{for(let[n,r]of t)e.graph.reparentNode(n,r.parentId),e.graph.updateNode(n,{x:r.x,y:r.y}),e.runLayoutForNode(n)}})}function r(t,n){let r=new Map;for(let n of t){let t=Dv(e.graph,n);for(let[e,n]of t)r.set(e,n)}let i=new Set(t);e.undo.push({label:`Duplicate`,forward:()=>{for(let n of t){if(e.graph.getNode(n))continue;let t=r.get(n);t&&(Ov(e.graph,t,t.parentId??e.state.currentPageId,r),e.runLayoutForNode(n))}e.setSelectedIds(new Set(i))},inverse:()=>{for(let n of t.toReversed())e.graph.deleteNode(n);e.setSelectedIds(new Set(n))}})}function i(t,n){X(e.graph,t);let r=e.graph.getNode(t);if(!r)return;let i=`vectorNetwork`in n||`fillGeometry`in n||`strokeGeometry`in n||`derivedTextGlyphs`in n||`strokes`in n||`textPathData`in n||`textPathBox`in n?Ah(r):{x:r.x,y:r.y,width:r.width,height:r.height};e.undo.push({label:`Resize`,forward:()=>{X(e.graph,t),e.graph.preserveSourceMetadataDuring(()=>e.graph.updateNode(t,i)),e.runLayoutForNode(t)},inverse:()=>{X(e.graph,t),e.graph.preserveSourceMetadataDuring(()=>e.graph.updateNode(t,n)),e.runLayoutForNode(t)}})}function a(t,n,r){X(e.graph,t);for(let t of r.keys())X(e.graph,t);let i=e.graph.getNode(t);if(!i)return;let a={x:i.x,y:i.y,width:i.width,height:i.height},o=new Map;for(let[t]of r){let n=e.graph.getNode(t);n&&o.set(t,Ah(n))}e.undo.push({label:`Resize`,forward:()=>{X(e.graph,t);for(let t of o.keys())X(e.graph,t);e.graph.preserveSourceMetadataDuring(()=>{e.graph.updateNode(t,a);for(let[t,n]of o)e.graph.updateNode(t,n)}),e.runLayoutForNode(t)},inverse:()=>{X(e.graph,t);for(let t of r.keys())X(e.graph,t);e.graph.preserveSourceMetadataDuring(()=>{e.graph.updateNode(t,n);for(let[t,n]of r)e.graph.updateNode(t,n)}),e.runLayoutForNode(t)}})}function o(t,n){X(e.graph,t);let r=e.graph.getNode(t);if(!r)return;let i=r.rotation;e.undo.push({label:`Rotate`,forward:()=>{e.graph.updateNode(t,{rotation:i})},inverse:()=>{e.graph.updateNode(t,{rotation:n})}})}function s(t,n,r=`Update`){X(e.graph,t);let i=e.graph.getNode(t);if(!i)return;let a={...n,...Ay(i,n)},o=Rn(i,Object.keys(a));Ve(o,a)||e.undo.push({label:r,forward:()=>{e.graph.updateNode(t,o),e.runLayoutForNode(t)},inverse:()=>{e.graph.updateNode(t,a),e.runLayoutForNode(t)}})}function c(t){e.undo.undo(),t(),e.requestRender()}function l(t){e.undo.redo(),t(),e.requestRender()}function u(){return Mb(e.graph,e.state.currentPageId)}function d(t){Nb(e,t)}function f(t){e.undo.push(t)}return{commitMove:t,commitMoveWithReparent:n,commitDuplicateMove:r,commitResize:i,commitGroupResize:a,commitRotation:o,commitNodeUpdate:s,undoAction:c,redoAction:l,snapshotPage:u,restorePageFromSnapshot:d,pushUndoEntry:f}}function Ib(e){function t(t){return e.graph.getVariablesByType(t)}function n(t){return e.graph.variables.get(t)}function r(t){return e.graph.resolveColorVariable(t)}function i(t){return e.graph.resolveNumberVariable(t)}function a(t){return e.graph.getVariablesForCollection(t)}function o(t){return e.graph.variableCollections.get(t)}function s(){return[...e.graph.variableCollections.values()]}function c(){return e.graph.variableCollections.size}function l(){return e.graph.variables.size}function u(t,n){let r=e.graph.variableCollections.get(t);if(!r)return;let i=r.name;r.name=n,e.undo.push({label:`Rename collection`,forward:()=>{let r=e.graph.variableCollections.get(t);r&&(r.name=n),e.requestRender()},inverse:()=>{let n=e.graph.variableCollections.get(t);n&&(n.name=i),e.requestRender()}}),e.requestRender()}function d(t){e.graph.addCollection(t),e.undo.push({label:`Add collection`,forward:()=>{e.graph.addCollection(t),e.requestRender()},inverse:()=>{e.graph.removeCollection(t.id),e.requestRender()}}),e.requestRender()}function f(t){let n=e.graph.variableCollections.get(t);if(!n)return;let r=structuredClone(n),i=r.variableIds.map(t=>e.graph.variables.get(t)).filter(e=>e!=null).map(e=>structuredClone(e));e.graph.removeCollection(t),e.undo.push({label:`Remove collection`,forward:()=>{e.graph.removeCollection(t),e.requestRender()},inverse:()=>{e.graph.addCollection(r);for(let t of i)e.graph.addVariable(t);e.requestRender()}}),e.requestRender()}function p(t){e.graph.addVariable(t),e.undo.push({label:`Add variable`,forward:()=>{e.graph.addVariable(t),e.requestRender()},inverse:()=>{e.graph.removeVariable(t.id),e.requestRender()}}),e.requestRender()}function m(t){let n=e.graph.variables.get(t);if(!n)return;let r=structuredClone(n);e.graph.removeVariable(t),e.undo.push({label:`Remove variable`,forward:()=>{e.graph.removeVariable(t),e.requestRender()},inverse:()=>{e.graph.addVariable(r),e.requestRender()}}),e.requestRender()}function h(t,n){let r=e.graph.variables.get(t);if(!r)return;let i=r.name;r.name=n,e.undo.push({label:`Rename variable`,forward:()=>{let r=e.graph.variables.get(t);r&&(r.name=n),e.requestRender()},inverse:()=>{let n=e.graph.variables.get(t);n&&(n.name=i),e.requestRender()}}),e.requestRender()}function g(t,n){let r=e.graph.variableCollections.get(t);if(!r)return;let i=`mode:${Zt(8)}`,a=n??`Mode ${r.modes.length+1}`;return e.graph.addMode(t,i,a),e.undo.push({label:`Add mode`,forward:()=>{e.graph.addMode(t,i,a),e.requestRender()},inverse:()=>{e.graph.removeMode(t,i),e.requestRender()}}),e.requestRender(),i}function _(t,n){let r=e.graph.variableCollections.get(t);if(!r||r.modes.length<=1)return;let i=r.modes.findIndex(e=>e.modeId===n),a=r.modes[i]?.name??``,o=r.defaultModeId===n,s=new Map;for(let t of r.variableIds){let r=e.graph.variables.get(t);r?.valuesByMode[n]!==void 0&&s.set(t,structuredClone(r.valuesByMode[n]))}e.graph.removeMode(t,n),e.undo.push({label:`Remove mode`,forward:()=>{e.graph.removeMode(t,n),e.requestRender()},inverse:()=>{e.graph.addMode(t,n,a);let r=e.graph.variableCollections.get(t);if(r&&i!==-1){let e=r.modes.pop();e&&r.modes.splice(i,0,e)}for(let[t,r]of s){let i=e.graph.variables.get(t);i&&(i.valuesByMode[n]=structuredClone(r))}o&&e.graph.setDefaultMode(t,n),e.requestRender()}}),e.requestRender()}function v(t,n,r){let i=e.graph.variableCollections.get(t);if(!i)return;let a=i.modes.find(e=>e.modeId===n);if(!a)return;let o=a.name;e.graph.renameMode(t,n,r),e.undo.push({label:`Rename mode`,forward:()=>{e.graph.renameMode(t,n,r),e.requestRender()},inverse:()=>{e.graph.renameMode(t,n,o),e.requestRender()}}),e.requestRender()}function y(t,n){let r=e.graph.variableCollections.get(t);if(!r)return;let i=r.defaultModeId;e.graph.setDefaultMode(t,n),e.undo.push({label:`Set default mode`,forward:()=>{e.graph.setDefaultMode(t,n),e.requestRender()},inverse:()=>{e.graph.setDefaultMode(t,i),e.requestRender()}}),e.requestRender()}function b(t,n){let r=e.graph.variableCollections.get(t);if(!r)return;let i=r.modes.find(e=>e.modeId===n);if(!i)return;let a=`mode:${Zt(8)}`,o=`${i.name} copy`;return e.graph.addMode(t,a,o,n),e.undo.push({label:`Duplicate mode`,forward:()=>{e.graph.addMode(t,a,o,n),e.requestRender()},inverse:()=>{e.graph.removeMode(t,a),e.requestRender()}}),e.requestRender(),a}function x(t,n){e.graph.setActiveMode(t,n),e.requestRender()}function S(t,n,r){let i=e.graph.variables.get(t);if(!i)return;let a=structuredClone(i.valuesByMode[n]),o=structuredClone(r);i.valuesByMode[n]=o,e.undo.push({label:`Update variable value`,forward:()=>{let r=e.graph.variables.get(t);r&&(r.valuesByMode[n]=structuredClone(o)),e.requestRender()},inverse:()=>{let r=e.graph.variables.get(t);r&&(r.valuesByMode[n]=structuredClone(a)),e.requestRender()}}),e.requestRender()}return{getVariablesByType:t,getVariable:n,resolveColorVariable:r,resolveNumberVariable:i,getVariablesForCollection:a,getCollection:o,getCollections:s,getCollectionCount:c,getVariableCount:l,renameCollection:u,addCollection:d,removeCollection:f,addVariable:p,removeVariable:m,renameVariable:h,updateVariableValue:S,addMode:g,removeMode:_,renameMode:v,setDefaultMode:y,duplicateMode:b,setActiveMode:x}}function Lb(e){return e.independentCorners?[e.topLeftRadius,e.topRightRadius,e.bottomRightRadius,e.bottomLeftRadius].some(e=>e>0):e.cornerRadius>0}function Rb(e){return{name:e.name,rotation:e.rotation,flipX:e.flipX,flipY:e.flipY,opacity:e.opacity,visible:e.visible,locked:e.locked,blendMode:e.blendMode,effects:nt(e.effects),strokes:Qe(e.strokes),strokeStyleId:e.strokeStyleId,strokeCap:e.strokeCap,strokeJoin:e.strokeJoin,strokeMiterLimit:e.strokeMiterLimit,dashPattern:[...e.dashPattern],cornerRadius:e.cornerRadius,topLeftRadius:e.topLeftRadius,topRightRadius:e.topRightRadius,bottomRightRadius:e.bottomRightRadius,bottomLeftRadius:e.bottomLeftRadius,independentCorners:e.independentCorners,cornerSmoothing:e.cornerSmoothing,clipsContent:e.clipsContent||Lb(e),horizontalConstraint:e.horizontalConstraint,verticalConstraint:e.verticalConstraint,layoutPositioning:e.layoutPositioning,layoutGrow:e.layoutGrow,layoutAlignSelf:e.layoutAlignSelf,minWidth:e.minWidth,maxWidth:e.maxWidth,minHeight:e.minHeight,maxHeight:e.maxHeight,isMask:e.isMask,maskType:e.maskType,maskIsOutline:e.maskIsOutline}}function zb(e){function t(t,n){let r=e.graph.getNode(t),i=r?.parentId,a=i?e.graph.getNode(i):null;if(!r||!i||!a)return null;let o=a.childIds.indexOf(r.id);if(o===-1)return null;let s=sl(r,n.contentBounds),c=Dv(e.graph,r.id),l=new Set(e.state.selectedIds),u=e.graph.createNode(`FRAME`,i,{...Rb(r),x:s.x,y:s.y,width:s.width,height:s.height,fills:[]});if(e.graph.insertChildAt(u.id,i,o),ml(e.graph,u.id,n,s),u.childIds.length===0)return e.graph.deleteNode(u.id),null;let d=Dv(e.graph,u.id);return e.graph.deleteNode(r.id),e.setSelectedIds(new Set([u.id])),e.undo.push({label:`Vectorize image`,forward:()=>{e.graph.getNode(r.id)&&e.graph.deleteNode(r.id);let t=d.get(u.id);t&&!e.graph.getNode(u.id)&&(Ov(e.graph,t,i,d),e.graph.insertChildAt(u.id,i,o)),e.setSelectedIds(new Set([u.id])),e.requestRender()},inverse:()=>{e.graph.getNode(u.id)&&e.graph.deleteNode(u.id);let t=c.get(r.id);t&&!e.graph.getNode(r.id)&&(Ov(e.graph,t,i,c),e.graph.insertChildAt(r.id,i,o)),e.setSelectedIds(l),e.requestRender()}}),e.requestRender(),u.id}return{replaceNodeWithVectorFrame:t}}function Bb(e){function t(){return{panX:e.state.panX,panY:e.state.panY,zoom:e.state.zoom}}function n(n){let r=t();(r.panX!==n.panX||r.panY!==n.panY||r.zoom!==n.zoom)&&(ye(`viewport:changed`,{panX:r.panX,panY:r.panY,zoom:r.zoom,previousPanX:n.panX,previousPanY:n.panY,previousZoom:n.zoom}),e.emitEditorEvent(`viewport:changed`,r,n))}function r(t,n){return{x:(t-e.state.panX)/e.state.zoom,y:(n-e.state.panY)/e.state.zoom}}function i(r,i,a){let o=t(),s=Math.max(.02,Math.min(256,r));e.state.panX=i-(i-e.state.panX)*(s/e.state.zoom),e.state.panY=a-(a-e.state.panY)*(s/e.state.zoom),e.state.zoom=s,e.requestRepaint(),n(o)}function a(t,n,r){let a=Math.min(c,Math.max(u,Math.exp(-t/50)));i(e.state.zoom*a,n,r)}function o(r,i){let a=t();e.state.panX+=r,e.state.panY+=i,e.requestRepaint(),n(a)}function s(r,i,a,o){let s=t(),c=a-r+160,l=o-i+160,{width:u,height:d}=e.getViewportSize(),f=Math.min(u/c,d/l,1);e.state.zoom=f,e.state.panX=(u-c*f)/2-r*f+80*f,e.state.panY=(d-l*f)/2-i*f+80*f,e.requestRepaint(),n(s)}function l(){let t=e.graph.getChildren(e.state.currentPageId);if(t.length===0)return;let n=ze(t);s(n.x,n.y,n.x+n.width,n.y+n.height)}function d(r){let{width:i,height:a}=e.getViewportSize(),o=(-e.state.panX+i/2)/e.state.zoom,s=(-e.state.panY+a/2)/e.state.zoom,c=t();e.state.zoom=Math.max(.02,Math.min(256,r)),e.state.panX=i/2-o,e.state.panY=a/2-s,e.requestRepaint(),n(c)}function f(){d(1)}function p(){if(e.state.selectedIds.size===0)return;let t=[...e.state.selectedIds].map(t=>e.graph.getNode(t)).filter(e=>e!=null);if(t.length===0)return;let n=it(t,t=>e.graph.getAbsolutePosition(t));s(n.x,n.y,n.x+n.width,n.y+n.height)}return{screenToCanvas:r,setZoomAroundPoint:i,applyZoom:a,pan:o,zoomToBounds:s,zoomToFit:l,zoomTo100:f,zoomToLevel:d,zoomToSelection:p}}function Vb(e){let t=e?.graph??new Pt,n=e?.skipInitialGraphSetup??!1,r=new Fn({onChange:()=>h(`history:changed`)}),i=e?.loadFont??z.loadFont.bind(z),o=e?.getViewportSize??(()=>a?{width:window.innerWidth,height:window.innerHeight}:{width:800,height:600}),s=null,c=null,l=new Set,u=new Set,d=null,f=At(),p=we.subscribe((e,t)=>{f.emit(`font:resolution-changed`,e,t)});h_();let m=e?.state??eb(t.getPages()[0].id);function h(e,...t){f.emit(e,...t)}function g(e,t){return f.on(e,t)}function _(){m.renderVersion++,m.sceneVersion++,ye(`render:requested`,{kind:`render`,renderVersion:m.renderVersion,sceneVersion:m.sceneVersion}),h(`render:requested`,{renderVersion:m.renderVersion,sceneVersion:m.sceneVersion})}function v(){m.renderVersion++,ye(`render:requested`,{kind:`repaint`,renderVersion:m.renderVersion,sceneVersion:m.sceneVersion}),h(`repaint:requested`,{renderVersion:m.renderVersion,sceneVersion:m.sceneVersion})}function y(){let e=Symbol(`interactive-edit`);return u.add(e),v(),()=>{u.delete(e)&&v()}}function b(e,t=0){let n={...m.navigation},r=e===`pan`||e===`zoom`||e===`momentum`,i=n.phase===`pan`||n.phase===`zoom`||n.phase===`momentum`;m.navigation={phase:e,generation:r&&!i?n.generation+1:n.generation,lastInputAt:t||n.lastInputAt},(m.navigation.phase!==n.phase||m.navigation.generation!==n.generation||m.navigation.lastInputAt!==n.lastInputAt)&&(ye(`navigation:phase`,{phase:m.navigation.phase,previousPhase:n.phase,generation:m.navigation.generation,lastInputAt:m.navigation.lastInputAt}),h(`navigation:changed`,m.navigation,n))}function x(e){let t=[...m.selectedIds];m.selectedIds=e,e.size===0&&(m.measurementMode=`off`);let n=[...e];(t.length!==n.length||t.some((e,t)=>e!==n[t]))&&h(`selection:changed`,n,t)}function S(e){let t=m.activeTool;m.activeTool=e,e!==`SELECT`&&(m.measurementMode=`off`),t!==e&&h(`tool:changed`,e,t)}let C=dy(()=>t),{runLayoutForNode:w,runMutationWithLayout:T}=gy(()=>t),{scheduleComponentSync:E}=Uv(()=>t,_),{subscribeToGraph:D,unsubscribeFromGraph:O}=uy({getGraph:()=>t,getRenderers:()=>l,scheduleComponentSync:E,requestRender:_,emitEditorEvent:h});n||D();let k={get graph(){return t},set graph(e){t=e},undo:r,state:m,loadFont:i,resolveFigmaClipboardImages:e?.resolveFigmaClipboardImages??null,getViewportSize:o,getCk:()=>s,getRenderer:()=>c,getTextEditor:()=>d,requestRender:_,requestRepaint:v,beginInteractiveEdit:y,onEditorEvent:g,emitEditorEvent:h,setSelectedIds:x,setActiveTool:S,setNavigationPhase:b,runLayoutForNode:w,runMutationWithLayout:T,subscribeToGraph:D},A=Bb(k),j=Uy(k),M=Ry(k),ee=hy(k),te=$y(k),ne=hb(k),re=iy(k),ie=Lv(k),ae=Bv(k),oe=Fb(k),se=jb(k),ce=Py(k),le=Ib(k),N=zb(k),ue=tv(k),de=nv(ie,j),fe=rv(re,j,ne,M),pe=iv(ne,j),me=av(oe,j);function he(e,t){s=e,c=t,l.add(t),d??=new U_(e),qt(typeof t.measureTextNode==`function`?(e,n)=>t.measureTextNode(e,n):null)}function ge(e){l.delete(e),c===e&&(c=l.values().next().value??null)}function _e(e){ce.cancelNodePreviews(),r.discardBatches(),t=e,D();let n=m.currentPageId;m.currentPageId=t.getPages()[0]?.id??t.rootId,x(new Set),m.hoveredNodeId=null,m.measurementMode=`off`,m.snapGuides=[],m.guides={preview:null,hovered:null,selected:null,redline:null},m.layoutInsertIndicator=null,m.dropTargetId=null,M.clearPageViewports();for(let e of l)e.tiledScene.invalidateStructure();h(`graph:replaced`,t),n!==m.currentPageId&&h(`page:changed`,m.currentPageId,n),_()}function ve(){ce.cancelNodePreviews(),u.clear(),p(),O()}function be(){I_(t),H_(t),b_(t)}return{get graph(){return t},get renderer(){return c},get canvasRenderers(){return[...l]},get textEditor(){return d},undo:r,state:m,runLayoutForNode:w,runMutationWithLayout:T,...C,beginInteractiveEdit:y,isInteractiveEditing:()=>u.size>0,requestRender:_,requestRepaint:v,onEditorEvent:g,setCanvasKit:he,setNavigationPhase:b,removeCanvasRenderer:ge,replaceGraph:_e,subscribeToGraph:D,dispose:ve,releaseGraphResources:be,...j,...M,...ee,...te,...ne,...ce,...ue,...N,...le,...se,...A,...me,setDocumentColorSpace:ae.setDocumentColorSpace,...de,...fe,...pe}}var Hb=Symbol(`open-pencil-editor`);function Ub(e){O(Hb,e)}function Wb(){let e=T(Hb);if(!e)throw Error(`[open-pencil] useEditor() called without an injected editor. Call provideEditor(editor) near the top of your Vue subtree first.`);return e}function Gb(e){let t=j();if(typeof window<`u`){let n=e.subscribe(e=>{t.value=e});E()&&k(n)}else t.value=e.get();return t}var Kb=Symbol(`retained-activity`),qb=Symbol(`retained-scopes-installed`);function Jb(e){e.provide(qb,!0)}function Yb(e){if(!T(qb,!1))throw Error(`Retained activity requires createRetainedScopePlugin`);O(Kb,e)}function Xb(){return C()?T(Kb,void 0):void 0}function Zb(e,t){let n=j(0),r=()=>{n.value++},i=t=>{e.state.selectedIds.has(t)&&r()},a=D(r=>t?.value===!1&&r?r:(n.value,e.state.sceneVersion,e.state.currentPageId,e.getSelectedNodes().map(e=>M(structuredClone(e))))),o=D(()=>new Map(a.value.map(e=>[e.id,e]))),s=D(()=>a.value.length===1?a.value[0]:null);function c(t,n){if(!e.state.selectedIds.has(t))return;let r=o.value.get(t);r&&Object.assign(r,structuredClone(n))}return{nodes:a,node:s,dispose:re(()=>t?.value??!0,(t,n,a)=>{t&&(r(),a(e.onEditorEvent(`node:previewUpdated`,c)),a(e.onEditorEvent(`node:updated`,i)),a(e.onEditorEvent(`selection:changed`,r)),a(e.onEditorEvent(`graph:replaced`,r)),a(e.onEditorEvent(`page:changed`,r)),a(e.onEditorEvent(`node:created`,r)),a(e.onEditorEvent(`node:deleted`,r)),a(e.onEditorEvent(`node:reparented`,r)),a(e.onEditorEvent(`node:reordered`,r)))},{flush:`sync`})}}function Qb(e=Wb()){let t=Zb(e,Xb());return te(t.dispose),t}var $b=class{adapters;constructor(e){this.adapters=e}listFormats(){return this.adapters}getFormat(e){return this.adapters.find(t=>t.id===e)??null}listReadableFormats(){return this.adapters.filter(e=>e.support.readDocument)}listWritableFormats(){return this.adapters.filter(e=>e.support.writeDocument)}listExportFormats(e){return this.adapters.filter(t=>{switch(e){case`document`:return!!t.support.exportDocument;case`page`:return!!t.support.exportPage;case`selection`:return!!t.support.exportSelection;case`node`:return!!t.support.exportNode;default:return!1}})}findReader(e,t){return this.adapters.find(n=>{if(!n.support.readDocument)return!1;if(n.matchesFile)return n.matchesFile(e,t);let r=e.toLowerCase();return n.extensions.some(e=>r.endsWith(`.${e}`))})??null}async readDocument(e,t){let n=this.findReader(e.name??``,e.mimeType);if(!n?.readDocument)throw Error(`Unsupported document format: ${e.name??`unknown`}`);return n.readDocument(e,t)}async writeDocument(e,t,n,r){let i=this.getFormat(e);if(!i?.writeDocument)throw Error(`Format does not support writeDocument: ${e}`);return i.writeDocument(t,n,r)}async exportContent(e,t,n,r){let i=this.getFormat(e);if(!i?.exportContent)throw Error(`Format does not support exportContent: ${e}`);return i.exportContent(t,n,r)}},ex=oe(`rgb`);function tx(e){let t=se(e),n=t?ex(t):null;return n?{r:n.r,g:n.g,b:n.b,a:t?.alpha??1}:structuredClone(We)}function nx(e){return e===`color`?`COLOR`:e===`number`?`FLOAT`:`STRING`}function rx(e,t){return t===`COLOR`&&typeof e==`string`?tx(e):t===`FLOAT`&&typeof e==`number`?e:t===`STRING`?String(e):typeof e==`number`?e:String(e)}function ix(e){return e===`COLOR`?{...We}:e===`FLOAT`?0:e!==`BOOLEAN`&&``}function ax(e){return typeof e==`string`&&e.startsWith(`$`)&&e.length>1}function ox(e){return e.replace(/^\$/,``)}function sx(e,t,n,r){if(!ax(n))return;let i=r.byName.get(ox(n));i&&(e.boundVariables[t]=i.id)}function cx(e,t,n){let r=L(),i=[],a=Object.keys(n);if(a.length>0){let e=a[0];for(let t of n[e])i.push({modeId:L(),name:t})}i.length===0&&i.push({modeId:L(),name:`Default`});let o={id:r,name:`Variables`,modes:i,defaultModeId:i[0].modeId,variableIds:[]};e.addCollection(o);let s=new Map;if(a.length>0){let e=a[0];for(let t of i)s.set(`${e}:${t.name}`,t.modeId)}let c=new Map;for(let[n,a]of Object.entries(t)){let t=L(),o=nx(a.type),l={};if(Array.isArray(a.value))for(let e of a.value)if(e.theme){let[t,n]=Object.entries(e.theme)[0],r=s.get(`${t}:${n}`);r&&(l[r]=rx(e.value,o))}else l[i[0].modeId]=rx(e.value,o);else l[i[0].modeId]=rx(a.value,o);for(let e of i)e.modeId in l||(l[e.modeId]=l[i[0].modeId]??ix(o));let u={id:t,name:n,type:o,collectionId:r,valuesByMode:l,description:``,hiddenFromPublishing:!1};e.addVariable(u),c.set(n,{id:t,variable:u})}let l=i[0].modeId;function u(e){let t=c.get(e.replace(/^\$/,``));if(t)return t.variable.valuesByMode[l]??Object.values(t.variable.valuesByMode)[0]}return{byName:c,activeModeId:l,collectionId:r,modeByThemeName:s,resolveColor(e){let t=u(e);return t===void 0?tx(e):typeof t==`object`&&`r`in t?t:typeof t==`string`?tx(t):{...We}},resolveNumber(e){let t=u(e);return typeof t==`number`?t:0},resolveString(e){let t=u(e);return typeof t==`string`?t:``},setActiveTheme(t){let n=s.get(`theme:${t}`);n&&(l=n,e.activeMode.set(r,n))}}}function lx(e,t){let n=typeof e==`string`?e:e.color;return ax(n)?t.resolveColor(n):tx(n)}function ux(e,t,n){return e===void 0?[]:(Array.isArray(e)?e:[e]).map((e,r)=>{let i=typeof e==`string`||e.enabled!==!1,a=lx(e,t),o={type:`SOLID`,visible:i,opacity:a.a,color:a};return n&&sx(n,`fills[${r}]`,typeof e==`string`?e:e.color,t),o})}function dx(e){return typeof e.thickness==`number`?e.thickness:Math.max(...Object.values(e.thickness))}function fx(e,t,n){if(!e?.fill)return[];let r=ax(e.fill)?t.resolveColor(e.fill):tx(e.fill),i=`CENTER`;e.align===`inside`?i=`INSIDE`:e.align===`outside`&&(i=`OUTSIDE`);let a={visible:!0,color:r,opacity:r.a,weight:dx(e),align:i,dashPattern:[]};return n&&(sx(n,`strokes[0]`,e.fill,t),typeof e.thickness==`object`&&(n.independentStrokeWeights=!0,n.borderTopWeight=e.thickness.top??0,n.borderRightWeight=e.thickness.right??0,n.borderBottomWeight=e.thickness.bottom??0,n.borderLeftWeight=e.thickness.left??0),n.strokeJoin=px(e.join),n.strokeCap=mx(e.cap)),[a]}function px(e){return e===`round`?`ROUND`:e===`bevel`?`BEVEL`:`MITER`}function mx(e){return e===`round`?`ROUND`:e===`square`?`SQUARE`:`NONE`}function hx(e){return e?(Array.isArray(e)?e:[e]).flatMap(e=>{if(e.type!==`shadow`)return[];let t=e.color?tx(e.color):{r:0,g:0,b:0,a:.25};return[{type:e.shadowType===`inner`?`INNER_SHADOW`:`DROP_SHADOW`,visible:!0,blendMode:`NORMAL`,color:t,offset:e.offset??{x:0,y:0},radius:e.blur??0,spread:e.spread??0}]}):[]}function gx(e,t,n){if(t!==void 0){if(Array.isArray(t)){let r=t.map(e=>bx(e,0,n).value);e.independentCorners=!0,e.topLeftRadius=r[0]??0,e.topRightRadius=r[1]??0,e.bottomRightRadius=r[2]??0,e.bottomLeftRadius=r[3]??0;return}e.cornerRadius=bx(t,0,n).value}}function _x(e,t,n){if(t===void 0)return;let r=e=>typeof e==`string`?ax(e)&&n?n.resolveNumber(e):Number(e)||0:e;if(Array.isArray(t)){if(t.length===2){let n=r(t[0]),i=r(t[1]);e.paddingTop=n,e.paddingRight=i,e.paddingBottom=n,e.paddingLeft=i;return}e.paddingTop=r(t[0]??0),e.paddingRight=r(t[1]??0),e.paddingBottom=r(t[2]??0),e.paddingLeft=r(t[3]??0);return}let i=r(t);e.paddingTop=i,e.paddingRight=i,e.paddingBottom=i,e.paddingLeft=i}function vx(e,t){let n=`${t}(`;if(!e.startsWith(n)||!e.endsWith(`)`))return;let r=e.slice(n.length,-1).trim();if(r===``)return;let i=Number(r);return Number.isFinite(i)?i:void 0}function yx(e,t){if(e===`fill_container`)return{value:t,sizing:`FILL`};if(e===`fit_content`||e===`hug_content`)return{value:t,sizing:`HUG`};let n=vx(e,`fill_container`);if(n!==void 0)return{value:n,sizing:`FILL`};let r=vx(e,`fit_content`)??vx(e,`hug_content`);if(r!==void 0)return{value:r,sizing:`HUG`,fitContentFallback:r}}function bx(e,t,n){if(e===void 0)return{value:t,sizing:`FIXED`};if(typeof e==`number`)return{value:e,sizing:`FIXED`};let r=yx(e,t);if(r)return r;if(ax(e)&&n)return{value:n.resolveNumber(e),sizing:`FIXED`};let i=Number(e);return{value:Number.isFinite(i)?i:t,sizing:`FIXED`}}function xx(e){return e.layout===`row`||e.layout===`horizontal`?`HORIZONTAL`:e.layout===`column`||e.layout===`vertical`?`VERTICAL`:e.type===`frame`&&e.layout===void 0?`HORIZONTAL`:`NONE`}function Sx(e){return e===`center`?`CENTER`:e===`end`?`MAX`:e===`space-between`?`SPACE_BETWEEN`:`MIN`}function Cx(e){return e===`center`?`CENTER`:e===`end`?`MAX`:e===`stretch`?`STRETCH`:`MIN`}function wx(e){return e===`center`?`CENTER`:e===`right`||e===`end`?`RIGHT`:e===`justified`?`JUSTIFIED`:`LEFT`}function Tx(e){return e===`center`?`CENTER`:e===`bottom`||e===`end`?`BOTTOM`:`TOP`}function Ex(e){return typeof e==`number`?e:e===`thin`?100:e===`extralight`?200:e===`light`?300:e===`medium`?500:e===`semibold`?600:e===`bold`?700:e===`extrabold`?800:e===`black`?900:400}function Dx(e){return e.type===`frame`?e.reusable?`COMPONENT`:`FRAME`:e.type===`rectangle`?`RECTANGLE`:e.type===`ellipse`?`ELLIPSE`:e.type===`text`||e.type===`icon_font`?`TEXT`:e.type===`path`?`VECTOR`:e.type===`ref`?`INSTANCE`:`FRAME`}function Ox(e,t,n){if(e.vertices.length===0)return;let r=1/0,i=-1/0,a=1/0,o=-1/0;for(let t of e.vertices)r=Math.min(r,t.x),i=Math.max(i,t.x),a=Math.min(a,t.y),o=Math.max(o,t.y);let s=i-r,c=o-a;if(s<.01||c<.01)return;let l=t/s,u=n/c;if(!(Math.abs(l-1)<.01&&Math.abs(u-1)<.01)){for(let t of e.vertices)t.x=(t.x-r)*l,t.y=(t.y-a)*u;for(let t of e.segments)t.tangentStart={x:t.tangentStart.x*l,y:t.tangentStart.y*u},t.tangentEnd={x:t.tangentEnd.x*l,y:t.tangentEnd.y*u}}}function kx(e,t){return e?ax(e)?t.resolveString(e):e:`Inter`}function Ax(e){return{id:e.id,name:e.name??(e.type===`icon_font`?e.iconFontName??`Icon`:e.type),x:e.x??0,y:e.y??0,visible:e.enabled!==!1,opacity:e.opacity??1,rotation:e.rotation??0,flipX:e.flipX??!1,flipY:e.flipY??!1,clipsContent:e.clip??!1,boundVariables:{}}}function jx(e,t,n,r,i,a){e.layoutMode=t,e.primaryAxisAlign=Sx(n.justifyContent),e.counterAxisAlign=Cx(n.alignItems),e.itemSpacing=typeof n.gap==`string`&&ax(n.gap)&&a?a.resolveNumber(n.gap):n.gap??0,t===`VERTICAL`?(e.primaryAxisSizing=i,e.counterAxisSizing=r):(e.primaryAxisSizing=r,e.counterAxisSizing=i)}function Mx(e,t,n){e.text=t.type===`icon_font`?t.iconFontName??``:t.content??``,e.fontFamily=t.type===`icon_font`?t.iconFontFamily??`Material Symbols Sharp`:kx(t.fontFamily,n),e.fontSize=t.fontSize??14,e.fontWeight=Ex(t.fontWeight??(t.type===`icon_font`?t.weight:void 0)),e.textAlignHorizontal=wx(t.textAlign),e.textAlignVertical=Tx(t.textAlignVertical),t.lineHeight!==void 0&&(e.lineHeight=t.lineHeight<5?t.lineHeight*e.fontSize:t.lineHeight),t.letterSpacing!==void 0&&(e.letterSpacing=t.letterSpacing),e.textAutoResize=t.textGrowth===`fixed-width`?`HEIGHT`:`WIDTH_AND_HEIGHT`,t.fontFamily&&ax(t.fontFamily)&&sx(e,`fontFamily`,t.fontFamily,n)}function Nx(e,t){let n=e.type===`text`||e.type===`icon_font`,r=n?20:100,i=n&&e.width===void 0?1e4:r,a=bx(e.width,i,t),o=bx(e.height,r,t),s=xx(e);return e.width===void 0&&s!==`NONE`&&(a.sizing=`HUG`),e.height===void 0&&s!==`NONE`&&(o.sizing=`HUG`),{w:a,h:o,layout:s,isTextLike:n}}function Px(e,t,n){let r=e.layoutMode===`HORIZONTAL`;e.layoutMode=n.layoutMode,e.primaryAxisAlign=n.primaryAxisAlign,e.counterAxisAlign=n.counterAxisAlign;let i=e.layoutMode===`HORIZONTAL`;if(r!==i){let t=e.primaryAxisSizing;e.primaryAxisSizing=e.counterAxisSizing,e.counterAxisSizing=t}let a=i?`primaryAxisSizing`:`counterAxisSizing`,o=i?`counterAxisSizing`:`primaryAxisSizing`;t.width===void 0&&(e[a]=n[a]),t.height===void 0&&(e[o]=n[o]),t.gap===void 0&&(e.itemSpacing=n.itemSpacing),t.padding===void 0&&(e.paddingTop=n.paddingTop,e.paddingRight=n.paddingRight,e.paddingBottom=n.paddingBottom,e.paddingLeft=n.paddingLeft),t.clip===void 0&&(e.clipsContent=n.clipsContent)}function Fx(e,t,n,r){n&&(t.fill===void 0&&n.fill!==void 0&&(e.fills=ux(n.fill,r,e)),t.stroke===void 0&&n.stroke&&(e.strokes=fx(n.stroke,r,e)),t.effect===void 0&&n.effect&&(e.effects=hx(n.effect)),t.cornerRadius===void 0&&gx(e,n.cornerRadius,r))}function Ix(e,t,n,r,i,a){if(!t.ref)return;let o=r.get(t.ref)??t.ref;e.componentId=o;let s=n.getNode(o);s&&(t.width===void 0&&(e.width=s.width),t.height===void 0&&(e.height=s.height),t.layout===void 0&&Px(e,t,s),Fx(e,t,i.get(t.ref),a))}function Lx(e,t,n,r,i){for(let a of e){if(a.type===`ref`){let e=t.getNode(a.id);e&&Ix(e,a,t,n,r,i)}a.children&&Lx(a.children,t,n,r,i)}}function Rx(e,t){let n=Object.values(e)[0];n&&t.setActiveTheme(n)}function zx(e,t,n,r,i,a){if(e.type===`prompt`)return null;e.theme&&Rx(e.theme,r);let{w:o,h:s,layout:c,isTextLike:l}=Nx(e,r),u=Ax(e);u.width=o.value,u.height=s.value;let d=(e.children?.length??0)>0;!d&&o.fitContentFallback!==void 0&&(u.minWidth=o.fitContentFallback),!d&&s.fitContentFallback!==void 0&&(u.minHeight=s.fitContentFallback);let f=n.getNode(t)?.layoutMode??`NONE`;c!==`NONE`&&jx(u,c,e,f===`NONE`&&o.sizing===`FILL`?`FIXED`:o.sizing,f===`NONE`&&s.sizing===`FILL`?`FIXED`:s.sizing,r);let p=n.createNode(Dx(e),t,u);if(e.fill!==void 0&&(p.fills=ux(e.fill,r,p)),e.stroke&&(p.strokes=fx(e.stroke,r,p)),p.effects=hx(e.effect),gx(p,e.cornerRadius,r),_x(p,e.padding,r),l&&(Mx(p,e,r),f===`NONE`&&e.width===void 0&&!e.textGrowth&&(p.textAutoResize=`NONE`,p.width=p.text.length*p.fontSize*.65,p.height=p.fontSize*(p.lineHeight?p.lineHeight/p.fontSize:1.2))),e.type===`path`&&e.geometry){let t=ft(e.geometry);p.vectorNetwork=t,Ox(t,p.width,p.height)}if(f!==`NONE`){let e=f===`VERTICAL`;o.sizing===`FILL`&&(e?p.layoutAlignSelf=`STRETCH`:p.layoutGrow=1),s.sizing===`FILL`&&(e?p.layoutGrow=1:p.layoutAlignSelf=`STRETCH`)}if(e.reusable&&(i.set(e.id,p.id),a.set(e.id,e)),e.children)for(let t of e.children)zx(t,p.id,n,r,i,a);return p.id}function Bx(e,t,n,r,i,a){if(a>2)return;let o=e.getNode(t);if(o)for(let t of o.childIds){let o=e.getNode(t);o&&(o.name===n&&o.type===r&&i.push(o),Bx(e,t,n,r,i,a+1))}}function Vx(e,t,n){let r=e.getNode(t);if(r)for(let t of r.childIds){let r=e.getNode(t);if(!r)continue;if(r.componentId===n)return r;let i=Vx(e,t,n);if(i)return i}}function Hx(e,t,n){let r=e.getNode(n);if(!r)return;let i=[];return Bx(e,t,r.name,r.type,i,0),i.length===1?i[0]:void 0}function Ux(e,t,n){t.fill!==void 0&&(e.fills=ux(t.fill,n,e)),t.content!==void 0&&(e.text=t.content),t.x!==void 0&&(e.x=t.x),t.y!==void 0&&(e.y=t.y),t.enabled!==void 0&&(e.visible=t.enabled),t.width!==void 0&&(e.width=bx(t.width,e.width,n).value),t.height!==void 0&&(e.height=bx(t.height,e.height,n).value),t.rotation!==void 0&&(e.rotation=t.rotation),t.name!==void 0&&(e.name=t.name)}function Wx(e){for(let t of e.getAllNodes())t.type===`INSTANCE`&&t.componentId&&t.childIds.length===0&&e.getNode(t.componentId)&&$e(e,t.id,t.componentId)}function Gx(e,t,n,r,i){if(t.type!==`ref`||!t.descendants)return;let a=e.getNode(t.id);if(a)for(let[o,s]of Object.entries(t.descendants)){let t=Vx(e,a.id,o)??Hx(e,a.id,o);if(t){if(s.children){let a=t.childIds.slice();for(let t of a)e.deleteNode(t);for(let a of s.children)zx(a,t.id,e,n,r,i)}Ux(t,s,n);continue}s.type&&s.id&&zx(s,a.id,e,n,r,i)}}function Kx(e,t,n,r,i){for(let a of e)Gx(t,a,n,r,i),a.children&&Kx(a.children,t,n,r,i)}function qx(e,t){for(let n of e)n.reusable&&t.set(n.id,n.id),n.children&&qx(n.children,t)}function Jx(e,t,n){for(let[r,i]of Object.entries(e.boundVariables)){let a=t.variables.get(i);if(!a)continue;let o=a.valuesByMode[n.activeModeId]??Object.values(a.valuesByMode)[0];if(r.startsWith(`fills[`)&&typeof o==`object`&&`r`in o){let t=Number.parseInt(r.match(/\d+/)?.[0]??`0`,10);e.fills[t]&&(e.fills[t].color=o)}else if(r.startsWith(`strokes[`)&&typeof o==`object`&&`r`in o){let t=Number.parseInt(r.match(/\d+/)?.[0]??`0`,10);e.strokes[t]&&(e.strokes[t].color=o)}}for(let r of e.childIds){let e=t.getNode(r);e&&Jx(e,t,n)}}function Yx(e,t,n){for(let r of e){r.theme&&Rx(r.theme,n);let e=t.getNode(r.id);e&&Jx(e,t,n),r.children&&Yx(r.children,t,n)}}function Xx(e){for(let t of e.getAllNodes()){if(t.type!==`INSTANCE`||!t.componentId)continue;let n=e.getNode(t.componentId);n&&(t.width<=100&&n.width>100&&(t.width=n.width),t.height<=100&&n.height>100&&(t.height=n.height),n.layoutGrow>0&&(t.layoutGrow=n.layoutGrow),n.layoutAlignSelf!==`AUTO`&&(t.layoutAlignSelf=n.layoutAlignSelf),t.fills=et(t.fills),t.strokes=Qe(t.strokes),t.effects=nt(t.effects))}}function Zx(e){for(let t of e.getAllNodes())t.type!==`TEXT`||!t.text||t.text.length<=1||t.width>=t.fontSize*2||(t.width=t.text.length*t.fontSize*.65)}function Qx(e){let t=JSON.parse(e),n=new Pt;for(let e of n.getPages(!0))n.deleteNode(e.id);let r=cx(n,t.variables??{},t.themes??{}),i=new Map,a=new Map;qx(t.children,i);let o=n.addPage(t.children[0]?.name??`Page 1`);for(let e of t.children)zx(e,o.id,n,r,i,a);return Lx(t.children,n,i,a,r),Wx(n),Kx(t.children,n,r,i,a),Wx(n),Yx(t.children,n,r),Xx(n),Zx(n),n.getPages(!0).length===0&&n.addPage(`Page 1`),n}function $x(e,t){e.source.format=`fig`,e.source.orderKey=t.parentIndex?.position??null,t.backgroundColor&&(e.source.fig.rawNodeFields.backgroundColor=structuredClone(t.backgroundColor)),t.backgroundPaints&&(e.source.fig.rawNodeFields.backgroundPaints=structuredClone(t.backgroundPaints)),t.guides&&(e.guides=Jn(t.guides),e.source.fig.rawNodeFields.guides=structuredClone(t.guides)),e.source.fig.rawNodeFields.strokeJoin=t.strokeJoin,e.source.fig.rawNodeFields.strokeWeight=t.strokeWeight,t.pageType&&(e.source.fig.rawNodeFields.pageType=t.pageType)}function eS(e,t){let n=e.getNode(e.rootId);if(!t||!n)return;n.source.format=`fig`,n.pluginData=t.pluginData?t.pluginData.map(e=>({pluginId:e.pluginID,key:e.key,value:e.value})):[],n.source.fig.rawNodeFields.strokeJoin=t.strokeJoin,n.source.fig.rawNodeFields.strokeWeight=t.strokeWeight;let r=da(t,Ji);if(r)try{let t=JSON.parse(r);if(!Array.isArray(t))return;for(let n of t){if(!n||typeof n!=`object`||Array.isArray(n))continue;let t=n;typeof t.libraryId!=`string`||typeof t.revisionId!=`string`||e.enabledLibraries.set(t.libraryId,{libraryId:t.libraryId,revisionId:t.revisionId,enabled:t.enabled===!0})}}catch(e){console.warn(`Ignored malformed OpenPencil library metadata`,e)}}function tS(e){return e.version?`${e.key}@${e.version}`:e.key}function nS(e){let t=new Map;for(let[n,r]of e)typeof r.key==`string`&&((typeof r.version!=`string`||!t.has(r.key))&&t.set(r.key,n),typeof r.version==`string`&&t.set(tS({key:r.key,version:r.version}),n),typeof r.userFacingVersion==`string`&&t.set(tS({key:r.key,version:r.userFacingVersion}),n));return t}function rS(e,t){if(e.guid)return U(e.guid);if(e.assetRef)return t.get(tS(e.assetRef))??t.get(e.assetRef.key)}function iS(e,t){let n=new Map,r=new Map;for(let[t,i]of e){if(i.type!==`VARIABLE`)continue;n.set(t,i.variableDataValues?.entries??[]);let e=i.variableSetID?.guid?U(i.variableSetID.guid):void 0,a=i.parentIndex?.guid?U(i.parentIndex.guid):void 0;e?r.set(t,e):a&&r.set(t,a)}let i=new Map;for(let[t,n]of e){if(n.type!==`VARIABLE_SET`)continue;let e=n.variableSetModes??[];e.length>0&&i.set(t,U(e[0].id))}function a(e,o,s){if(s>10)return null;let c=n.get(e);if(!c?.length)return null;let l=r.get(e),u=l?i.get(l):void 0,d=o?c.find(e=>U(e.modeID)===o):void 0;!d&&u&&(d=c.find(e=>U(e.modeID)===u)),d||=c[0];let f=d.variableData.value;if(!f)return null;if(f.colorValue)return f.colorValue;if(f.alias){let e=rS(f.alias,t);if(e)return a(e,U(d.modeID),s+1)}return null}return function(e){let n=rS(e,t);return n?a(n,void 0,0):null}}function aS(e){let t=new Map,n=new Map,r=new Map;for(let i of e){if(!i.guid||i.phase===`REMOVED`)continue;let e=U(i.guid);if(t.set(e,i),i.parentIndex?.guid){let t=U(i.parentIndex.guid);n.set(e,t);let a=r.get(t);a||(a=[],r.set(t,a)),a.push(e)}}for(let[e,n]of r){let r=t.get(e);r&&Do(n,r,t)}return{changeMap:t,parentMap:n,childrenMap:r}}function oS(e){return e===`COLOR`?`COLOR`:e===`BOOLEAN`?`BOOLEAN`:e===`STRING`?`STRING`:`FLOAT`}function sS(e,t){let n=e.variableData;if(!n.value)return;let r=n.dataType??n.resolvedDataType;if(r===`COLOR`&&n.value.colorValue){let e=n.value.colorValue;return{r:e.r,g:e.g,b:e.b,a:e.a}}if(r===`BOOLEAN`)return n.value.boolValue??!1;if(r===`STRING`)return n.value.textValue??``;if(r===`ALIAS`&&n.value.alias){let e=rS(n.value.alias,t);return e?{aliasId:e}:void 0}return n.value.floatValue??0}function cS(e){return e===`BOOLEAN`?!1:e===`STRING`?``:e===`COLOR`?{...d}:0}function lS(e,t){for(let[n,r]of e){if(r.type!==`VARIABLE_SET`)continue;let e=(r.variableSetModes??[]).map(e=>({modeId:U(e.id),name:e.name}));e.length===0&&e.push({modeId:`default`,name:`Default`}),t.addCollection({id:n,name:r.name??`Variables`,modes:e,defaultModeId:e[0].modeId,variableIds:[]})}}function uS(e,t,n,r){if(e.variableSetID?.guid)return U(e.variableSetID.guid);let i=e.variableSetID?.assetRef;return i?r.get(tS(i))??r.get(i.key)??``:n.get(t)??``}function dS(e,t,n){if(t.variableCollections.has(n))return;let r=e.get(n);t.addCollection({id:n,name:r?.name??`Variables`,modes:[{modeId:`default`,name:`Default`}],defaultModeId:`default`,variableIds:[]})}function fS(e,t,n,r){for(let[i,a]of e){if(a.type!==`VARIABLE`)continue;let o=uS(a,i,t,r);dS(e,n,o);let s=oS(a.variableResolvedType),c={};if(a.variableDataValues?.entries)for(let e of a.variableDataValues.entries){let t=sS(e,r);t!==void 0&&(c[U(e.modeID)]=t)}if(Object.keys(c).length===0){let e=n.variableCollections.get(o)?.defaultModeId??`default`;c[e]=cS(s)}n.addVariable({id:i,name:a.name??`Variable`,type:s,collectionId:o,valuesByMode:c,description:``,hiddenFromPublishing:!1,key:typeof a.key==`string`?a.key:void 0,version:typeof a.version==`string`?a.version:void 0})}}function pS(e,t,n,r,i,a,o){let s=null;for(let[e,n]of t)if(n.type===`DOCUMENT`||e===`0:0`){s=e;break}if(s){eS(e,t.get(s));for(let n of r.get(s)??[]){let s=t.get(n);if(s)if(s.type===`CANVAS`){let t=e.addPage(s.name??`Page`);t.source.id=n,$x(t,s),a.set(n,t.id),s.internalOnly&&(t.internalOnly=!0),i.add(n);for(let e of r.get(n)??[])o(e,t.id)}else o(n,e.getPages()[0]?.id??e.rootId)}}else{let r=[];for(let[e]of t){let i=n.get(e);(!i||!t.has(i))&&r.push(e)}let i=e.getPages()[0]??e.addPage(`Page 1`);for(let e of r)o(e,i.id)}}function mS(e,t,n){for(let[r,i]of e){if(!i.variableConsumptionMap?.entries?.length)continue;let e=t.get(r);if(e)for(let t of i.variableConsumptionMap.entries){let r=Li(t);r&&n.bindVariable(e,r.field,r.variableId)}}}function hS(e,t){e.preserveSourceMetadataDuring(()=>{for(let n of e.getAllNodes()){if(n.type!==`INSTANCE`||!n.componentId)continue;let r=t.get(n.componentId);r&&e.updateNode(n.id,{componentId:r})}})}function gS(e,t){let n=new Map;for(let t of e.getAllNodes())for(let e of t.componentPropertyDefinitions)n.has(e.id)||n.set(e.id,e);e.preserveSourceMetadataDuring(()=>{for(let r of e.getAllNodes()){if(r.componentPropertyDefinitions.length>0){let n=r.componentPropertyDefinitions.map(e=>{if(e.type!==`INSTANCE_SWAP`)return e;let n=e.defaultValue?t.get(e.defaultValue):void 0;return n?{...e,defaultValue:n}:e});n.some((e,t)=>e!==r.componentPropertyDefinitions[t])&&e.updateNode(r.id,{componentPropertyDefinitions:n})}if(Object.keys(r.componentPropertyAssignments).length>0){let i=!1,a={...r.componentPropertyAssignments};for(let[e,r]of Object.entries(a)){if(n.get(e)?.type!==`INSTANCE_SWAP`)continue;let o=t.get(r);o&&(a[e]=o,i=!0)}i&&e.updateNode(r.id,{componentPropertyAssignments:a})}}})}function _S(e){for(let t of e.getAllNodes()){if(t.type!==`COMPONENT`||t.variantPropSpecs.length===0||!t.parentId)continue;let n=e.getNode(t.parentId);if(n?.type!==`COMPONENT_SET`)continue;let r=new Map(n.componentPropertyDefinitions.map(e=>[e.id,e.name])),i={};for(let e of t.variantPropSpecs)i[r.get(e.propDefId)??e.propDefId]=e.value;e.updateNode(t.id,{componentPropertyValues:i})}}function vS(e){return e.find(e=>e.type===`DOCUMENT`)?.documentColorProfile===`DISPLAY_P3`?`display-p3`:`srgb`}function yS(e,t){for(let n of e.values())Xc(e,n,t)}function bS(e,t,n,r,i){v_(e,{changeMap:t,guidToNodeId:n,blobs:r,populatedRootIds:new Set(i)})}function xS(e){let t=new Set;for(let n of e.getAllNodes()){if(n.type!==`COMPONENT`&&n.type!==`COMPONENT_SET`)continue;let r=n.parentId?e.getNode(n.parentId):void 0;for(;r?.parentId&&r.type!==`CANVAS`;)r=e.getNode(r.parentId);r?.type===`CANVAS`&&t.add(r.id)}return t}function SS(e,t=[],n,r={}){let i=new Pt;if(i.documentColorSpace=vS(e),n)for(let[e,t]of n)i.images.set(e,t);for(let e of i.getPages(!0))i.deleteNode(e.id);let{changeMap:a,parentMap:o,childrenMap:s}=aS(e),c=nS(a);yS(a,c),xi(iS(a,c));let l=new Map,u=new Set,d=new Map,f=e=>s.get(e)??[];function p(e,n){if(u.has(e))return;u.add(e);let r=a.get(e);if(!r)return;let{nodeType:s,...c}=lo(r,t);if(c.sharedStyleType&&(c.internalOnly=!0),s===`DOCUMENT`||s===`VARIABLE`||r.type===`VARIABLE_SET`)return;co(r,a.get(o.get(e)??``))&&(c.textAutoResize=`WIDTH_AND_HEIGHT`);let m=l.get(n)??n,h=i.createNode(s,m,c);d.set(e,h.id);for(let t of f(e))p(t,h.id)}pS(i,a,o,s,u,l,p),lS(a,i),fS(a,o,i,c),mS(a,d,i),hS(i,d),gS(i,d),_S(i);let m=i.getPages().find(e=>!e.internalOnly)?.id,h=r.populate===`first-page`?xS(i):new Set,g=r.populate===`first-page`?[m,...h].filter(Tn):void 0;return r.populate!==`none`&&i.preserveSourceMetadataDuring(()=>{jg(i,a,d,t,g)}),Ns(i),g&&bS(i,a,d,t,g),xi(null),i.getPages(!0).length===0&&i.addPage(`Page 1`),i}function CS(e){let t=new Pt;t.rootId=e.rootId,t.nodes=new Map([...e.nodes].map(([e,t])=>[e,{...t,childIds:[...t.childIds]}])),t.images=new Map(e.images),t.variables=new Map(e.variables),t.variableCollections=new Map(e.variableCollections),t.activeMode=new Map(e.activeMode),t.instanceIndex=new Map([...e.instanceIndex].map(([e,t])=>[e,new Set(t)])),t.figKiwiVersion=e.figKiwiVersion,t.figSchemaDeflated=e.figSchemaDeflated,t.documentColorSpace=e.documentColorSpace,t.enabledLibraries=new Map(e.enabledLibraries);let n=y_(e);return n&&v_(t,{changeMap:n.changeMap,guidToNodeId:n.guidToNodeId,blobs:n.blobs,populatedRootIds:new Set(n.populatedRootIds)}),t}function wS(e){return Array.isArray(e.guides)?e:{...e,guides:[]}}function TS(e){let t=new Pt;return t.rootId=e.rootId,t.nodes=new Map(e.nodes.map(([e,t])=>[e,wS(t)])),t.images=new Map(e.images),t.variables=new Map(e.variables),t.variableCollections=new Map(e.variableCollections),t.activeMode=new Map(e.activeMode),t.instanceIndex=new Map(e.instanceIndex.map(([e,t])=>[e,new Set(t)])),t.figKiwiVersion=e.figKiwiVersion,t.figSchemaDeflated=e.figSchemaDeflated,t.documentColorSpace=e.documentColorSpace,t.enabledLibraries=e.enabledLibraries?new Map(e.enabledLibraries):new Map,e.lazyFigImport&&v_(t,{changeMap:new Map(e.lazyFigImport.changeMap),guidToNodeId:new Map(e.lazyFigImport.guidToNodeId),blobs:e.lazyFigImport.blobs,populatedRootIds:new Set(e.lazyFigImport.populatedRootIds)}),t}function ES(){if(typeof Worker>`u`)throw Error(`FIG session workers are unavailable`);return new Worker(new URL(`/studio/assets/worker-NXQSPvz2.js`,``+import.meta.url),{type:`module`})}function DS(e,t={}){let{nodeChanges:n,blobs:r,images:i,figKiwiVersion:a,figSchemaDeflated:o}=Au(e,t.onPages),s=SS(n,r,new Map(i),t);return s.figKiwiVersion=a,s.figSchemaDeflated=o,s}function OS(e,t){return new Promise((n,r)=>{t.signal?.throwIfAborted();let i=ES(),a=new MessageChannel,o=new Map,s=()=>{a.port1.postMessage({type:`dispose`}),a.port1.close(),i.terminate(),r(new DOMException(`Aborted`,`AbortError`))};t.signal?.addEventListener(`abort`,s,{once:!0});let c=()=>t.signal?.removeEventListener(`abort`,s);a.port1.onmessage=e=>{if(e.data.type===`original-archive-result`){let t=o.get(e.data.requestId);if(!t)return;o.delete(e.data.requestId),t(e.data.bytes);return}if(e.data.type===`page-manifest`){t.onPages?.(e.data.pages);return}if(e.data.type===`graph`){if(e.data.error||!e.data.graph){c(),a.port1.close(),i.terminate(),r(Error(e.data.error??`Worker failed to parse .fig file`));return}try{let r=TS(e.data.graph);t.populate===`first-page`?(c(),j_(r,i,a.port1),P_(r,()=>new Promise(e=>{let t=Zt();o.set(t,e),a.port1.postMessage({type:`original-archive`,requestId:t})}))):(c(),a.port1.close(),i.terminate()),n(r)}catch(e){c(),a.port1.close(),i.terminate(),r(e instanceof Error?e:Error(String(e)))}}},a.port1.start(),i.onerror=e=>{c(),a.port1.close(),i.terminate(),r(Error(e.message||`Worker failed to parse .fig file`))};let l=e.slice(0),u=e.slice(0),d={type:`open`,originalBuffer:l,archiveBuffer:u,options:{populate:t.populate},port:a.port2};i.postMessage(d,[l,u,a.port2])})}async function kS(e,t={}){if(t.signal?.throwIfAborted(),typeof Worker<`u`&&a){let n=e.slice(0);try{return await OS(e,t)}catch(e){if(t.signal?.aborted)throw e;console.warn(`Worker parsing failed, falling back to main thread:`,e);let r=DS(n,t);return P_(r,async()=>new Uint8Array(n.slice(0))),r}}return t.signal?.throwIfAborted(),DS(e,t)}async function AS(e,t={}){t.signal?.throwIfAborted();let n=await e.arrayBuffer();return t.signal?.throwIfAborted(),kS(n,t)}function jS(e,t){let n=t.getNode(t.rootId)?.pluginData??[],r=[...t.enabledLibraries.values()],i=n.find(e=>e.pluginId===`open-pencil`&&e.key===`enabledLibraries`),a=r.length>0?{pluginId:Bi,key:Ji,value:JSON.stringify(r)}:i;e.pluginData=pa([...n.filter(e=>!(e.pluginId===`open-pencil`&&e.key===`enabledLibraries`)),...a?[a]:[]])}var MS=`cover`;function NS(e){let t=e.map(e=>({page:e,name:e.name.trim().toLocaleLowerCase()}));return t.find(({name:e})=>e===MS)?.page.id??t.find(({name:e})=>e.includes(MS))?.page.id}var PS=Nt(`iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==`);function FS(e,t,n){return e&&typeof e==`object`&&`aliasId`in e?{value:{alias:{guid:n.get(e.aliasId)??Xn(e.aliasId)}},dataType:`ALIAS`,resolvedDataType:{COLOR:`COLOR`,BOOLEAN:`BOOLEAN`,STRING:`STRING`}[t]??`FLOAT`}:t===`COLOR`&&typeof e==`object`&&`r`in e?{value:{colorValue:hi(e)},dataType:`COLOR`,resolvedDataType:`COLOR`}:t===`BOOLEAN`?{value:{boolValue:!!e},dataType:`BOOLEAN`,resolvedDataType:`BOOLEAN`}:t===`STRING`?{value:{textValue:typeof e==`string`?e:JSON.stringify(e)},dataType:`STRING`,resolvedDataType:`STRING`}:{value:{floatValue:Number(e)},dataType:`FLOAT`,resolvedDataType:`FLOAT`}}function IS(e){let t=[];for(let[n,r]of e.images)t.push({name:`images/${n}`,data:r});return t}var LS=512,RS=512;async function zS(e,t,n,r,i=!1){if(!t)return PS;if(n&&r)return ue(n,r,e,t,LS,RS)??PS;if(!i||a||f)return PS;let{headlessRenderThumbnail:o}=await m(async()=>{let{headlessRenderThumbnail:e}=await import(`./raster-DUFNQWig.js`);return{headlessRenderThumbnail:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8]));return await o(e,t,LS,RS)??PS}function BS(e,t,n,r){if(/^\d+:\d+$/.test(e)&&!n.has(e)&&!r.has(e)){let t=Xn(e);return n.add(e),t}let i={sessionID:0,localID:t.value++};return n.add(`${i.sessionID}:${i.localID}`),i}function VS(e,t,n,r,i,a){for(let[o,s]of e.variableCollections){let e=BS(o,t,i,a);n.set(o,e);for(let e of s.modes){let n=BS(e.modeId,t,i,a);r.set(e.modeId,n)}for(let e of s.variableIds){let r=BS(e,t,i,a);n.set(e,r)}}}function HS(e){let t=new Set,n=0,r=0;for(let n of e.getAllNodes()){for(let e of n.componentPropertyDefinitions)t.add(e.id);for(let e of n.componentPropertyReferences)t.add(e.propertyId);for(let e of Object.keys(n.componentPropertyAssignments))t.add(e);for(let e of n.variantPropSpecs)t.add(e.propDefId)}for(let e of t){let t=/^(\d+):(\d+)$/.exec(e);if(!t)continue;let i=Number.parseInt(t[1],10),a=Number.parseInt(t[2],10);i===0&&(n=Math.max(n,a)),i===1&&(r=Math.max(r,a))}return{ids:[...t],maxLocalId0:n,maxLocalId1:r}}function US(e,t,n,r,i){for(let a of e){let e=BS(a,t,r,i);n.set(a,e)}}function WS(e,t,n,r,i){let a=0;for(let[o,s]of e.variableCollections){let c=r.get(o)??Xn(o);t.push({guid:c,parentIndex:{guid:n,position:Wn(a++)},type:`VARIABLE_SET`,name:s.name,phase:`CREATED`,strokeAlign:`CENTER`,strokeJoin:`BEVEL`,variableSetModes:s.modes.map((e,t)=>({id:i.get(e.modeId)??Xn(e.modeId),name:e.name,sortPosition:Wn(t)}))}),GS(e,t,c,n,s.variableIds,r,i)}}function GS(e,t,n,r,i,a,o){let s=0;for(let c of i){let i=e.variables.get(c);if(!i)continue;let l=a.get(c)??Xn(c),u={COLOR:`COLOR`,BOOLEAN:`BOOLEAN`,STRING:`STRING`}[i.type]??`FLOAT`,d=Object.entries(i.valuesByMode).map(([e,t])=>({modeID:o.get(e)??Xn(e),variableData:FS(t,i.type,a)})),f={guid:l,parentIndex:{guid:r,position:Wn(s++)},type:`VARIABLE`,name:i.name,phase:`CREATED`,strokeAlign:`CENTER`,strokeJoin:`BEVEL`,variableSetID:{guid:n},variableResolvedType:u,variableDataValues:{entries:d},variableScopes:[`ALL_SCOPES`]};i.key&&(f.key=i.key),i.version&&(f.version=i.version),t.push(f)}}function KS(e,t){if(!e.source.id)return;if(`pageType`in e.source.fig.rawNodeFields||delete t.pageType,`backgroundColor`in e.source.fig.rawNodeFields&&(t.backgroundColor=structuredClone(e.source.fig.rawNodeFields.backgroundColor)),`backgroundPaints`in e.source.fig.rawNodeFields&&(t.backgroundPaints=structuredClone(e.source.fig.rawNodeFields.backgroundPaints)),e.guides.length>0){let n=Yn(e.guides),r=e.source.fig.rawNodeFields.guides;t.guides=Array.isArray(r)&&JSON.stringify(Jn(r))===JSON.stringify(e.guides)?structuredClone(r):n}let n=e.source.fig.rawNodeFields.strokeJoin;typeof n==`string`&&(t.strokeJoin=n);let r=e.source.fig.rawNodeFields.strokeWeight;typeof r==`number`&&(t.strokeWeight=r)}function qS(e,t,n,r,i,a){let o=[],s=null;for(let e=0;e<t.length;e++){let c=t[e],l=(()=>{if(!c.source.id)return{sessionID:0,localID:r.value++};let e=Xn(c.source.id),t=`${e.sessionID}:${e.localID}`;return a.has(t)?{sessionID:0,localID:r.value++}:e})();c.source.id&&l.sessionID===0&&(r.value=Math.max(r.value,l.localID+1)),i.set(c.id,l),a.add(`${l.sessionID}:${l.localID}`),c.internalOnly&&(s=l);let u=Wc(l,n,c.source.orderKey??Wn(e),c.name,{backgroundOpacity:1,backgroundColor:{...p},backgroundEnabled:!0});KS(c,u),c.internalOnly&&(u.internalOnly=!0),o.push({page:c,canvasGuid:l,canvasNc:u})}let c=[...e.nodes.values()].some(e=>e.sharedStyleType!==null);return(e.variableCollections.size>0||c)&&s===null&&(s={sessionID:0,localID:r.value++},a.add(`${s.sessionID}:${s.localID}`),o.push({page:{id:``,name:`Internal Only Canvas`,internalOnly:!0},canvasGuid:s,canvasNc:Wc(s,n,Wn(o.length),`Internal Only Canvas`,{internalOnly:!0})})),{canvasEntries:o,internalCanvasGuid:s}}function JS(e){let{graph:t,internalCanvasGuid:n,nodeChanges:r}=e;if(!n)return;let i=[...t.nodes.values()].filter(e=>e.sharedStyleType!==null);for(let a=0;a<i.length;a++)r.push(...a_(i[a],n,a,e.localIdCounter,t,e.blobs,e.nodeIdToGuid,e.fontDigestMap,e.varIdToGuid,e.glyphBlobMap,e.blobIndexByHex,e.assignedGuidValues,e.componentPropertyDefinitionsById,e.modeIdToGuid,e.propertyIdToGuid));t.variableCollections.size>0&&WS(t,r,n,e.varIdToGuid,e.modeIdToGuid)}async function YS(e,t,n,r,i=!1){let a=await V_(e);if(a)return a.slice();let o=CS(e);w_(o),await Ug();let s,c;o.figSchemaDeflated?(s=Ir(zr(new rr(v(o.figSchemaDeflated)))),c=o.figSchemaDeflated):(s=Wg(),c=b(Gg()));let l={sessionID:0,localID:0},u={value:2},d=Uc(l,o.documentColorSpace),p=o.getNode(o.rootId);p&&Object.assign(d,p.source.fig.rawNodeFields),jS(d,o);let h=[d],g=[],_=o.getPages(!0),y=new Map,x=new Set;x.add(`${l.sessionID}:${l.localID}`);let S=new Map,C=new Map,w=new Map,T=await r_(o),E=new Map,D=new Map,O=gs(o),k=u.value-1,A=u.value-1,j=new Set;for(let e of o.nodes.values())if(e.source.id){j.add(e.source.id);let t=Xn(e.source.id);t.sessionID===0&&t.localID>k&&(k=t.localID),t.sessionID===1&&t.localID>A&&(A=t.localID)}let M=HS(o);k=Math.max(k,M.maxLocalId0),A=Math.max(A,M.maxLocalId1),u.value=Math.max(u.value,k+1,A+1);let{canvasEntries:ee,internalCanvasGuid:te}=qS(o,_,l,u,y,x);VS(o,u,S,C,x,j),US(M.ids,u,w,x,j);for(let e of ee)h.push(e.canvasNc);let ne=[...ee.filter(e=>e.page.internalOnly),...ee.filter(e=>!e.page.internalOnly)];for(let{page:e,canvasGuid:t}of ne){let n=o.getChildren(e.id).filter(e=>!e.internalOnly);for(let e=0;e<n.length;e++)h.push(...a_(n[e],t,e,u,o,g,y,T,S,E,D,x,O,C,w))}JS({graph:o,nodeChanges:h,internalCanvasGuid:te,localIdCounter:u,blobs:g,nodeIdToGuid:y,fontDigestMap:T,varIdToGuid:S,modeIdToGuid:C,glyphBlobMap:E,blobIndexByHex:D,assignedGuidValues:x,componentPropertyDefinitionsById:O,propertyIdToGuid:w});let re={type:`NODE_CHANGES`,sessionID:0,ackID:0,nodeChanges:h};g.length>0&&(re.blobs=g.map(e=>({bytes:e})));let ie=s.encodeMessage(re),ae=await zS(o,r??NS(_),t,n,i),oe=JSON.stringify({version:1,app:`OpenPencil`,createdAt:new Date().toISOString()}),se=IS(o),ce=o.figKiwiVersion??void 0;if(f){let{invoke:e}=await m(async()=>{let{invoke:e}=await import(`./core-DQRVmAs7.js`);return{invoke:e}},__vite__mapDeps([9,10]));return new Uint8Array(await e(`build_fig_file`,{schemaDeflated:Array.from(c),kiwiData:Array.from(ie),thumbnailPng:Array.from(ae),metaJson:oe,images:se.map(e=>({name:e.name,data:Array.from(e.data)})),figKiwiVersion:ce}))}return QS(c,ie,ae,oe,se,ce)}function XS(){return typeof Worker<`u`&&a}function ZS(e,t,n,r,i,a){return new Promise((o,s)=>{let c=new Worker(new URL(`/studio/assets/export-worker-BDG1eesu.js`,``+import.meta.url),{type:`module`});c.onmessage=e=>{o(e.data),c.terminate()},c.onerror=e=>{s(Error(e.message)),c.terminate()},c.postMessage({schemaDeflated:e,kiwiData:t,thumbnailPNG:n,metaJSON:r,images:i,figKiwiVersion:a})})}function QS(e,t,n,r,i,a){return XS()?ZS(e,t,n,r,i,a):Promise.resolve(Mu(e,t,n,r,i,a))}function $S(e){return/\.([^.]+)$/.exec(e.toLowerCase())?.[1]??``}function eC(e){return e.scope===`node`?e.nodeId:e.scope===`selection`&&e.nodeIds.length===1?e.nodeIds[0]:null}function tC(e){switch(e.target.scope){case`document`:{let t=e.graph.getPages()[0];return{pageId:t.id,nodeIds:t.childIds}}case`page`:{let t=e.graph.getNode(e.target.pageId);return t?{pageId:t.id,nodeIds:t.childIds}:null}case`selection`:{let t=e.target.nodeIds[0];if(!t)return null;let n=Ot(e.graph,t);if(!n)return null;if(!e.target.nodeIds.every(t=>Ot(e.graph,t)===n))throw Error(`Export selection must stay on a single page`);return{pageId:n,nodeIds:e.target.nodeIds}}case`node`:return tC({...e,target:{scope:`selection`,nodeIds:[e.target.nodeId]}});default:return null}}async function nC(e,t,n){let r=tC(e);if(!r)return null;let i=t.scale??1;return n?.canvasKit&&n.renderer?me(n.canvasKit,n.renderer,e.graph,r.pageId,r.nodeIds,{scale:i,format:t.format,quality:t.quality,trimTransparent:e.target.scope===`page`||e.target.scope===`document`}):Oe(e.graph,r.pageId,r.nodeIds,{scale:i,format:t.format,quality:t.quality,trimTransparent:e.target.scope===`page`||e.target.scope===`document`})}function rC(e){let t=e===`JPG`?`jpg`:e.toLowerCase(),n=`image/png`;return e===`JPG`?n=`image/jpeg`:e===`WEBP`&&(n=`image/webp`),{id:t,label:e,role:`derived-export`,category:`raster`,extensions:[t],mimeTypes:[n],support:{exportDocument:!0,exportPage:!0,exportSelection:!0,exportNode:!0},exportOptions:{scale:!0,quality:e!==`PNG`,colorSpace:!1},async exportContent(r,i,a){let o=await nC(r,{format:e,scale:i?.scale,quality:i?.quality},a);if(!o)throw Error(`Nothing to export`);return{format:t,mimeType:n,extension:t,data:o}}}}var iC={id:`fig`,label:`OpenPencil Document`,role:`native-document`,category:`document`,extensions:[`fig`],mimeTypes:[`application/octet-stream`],support:{readDocument:!0,writeDocument:!0,exportDocument:!0,exportPage:!0,exportSelection:!0,exportNode:!0},exportOptions:{scale:!1,quality:!1},matchesFile(e){return $S(e)===`fig`},async readDocument(e){let t=e.data.slice().buffer;return{graph:await kS(t,{populate:`first-page`}),sourceFormat:`fig`}},async writeDocument(e,t,n){return{format:`fig`,mimeType:`application/octet-stream`,extension:`fig`,data:await YS(e,n?.canvasKit,n?.renderer,t?.thumbnailPageId,t?.renderThumbnail??!1)}},async exportContent(e,t,n){let r=Tt(e.graph,e.target);return{format:`fig`,mimeType:`application/octet-stream`,extension:`fig`,data:await YS(r.graph,n?.canvasKit,n?.renderer,t?.thumbnailPageId??r.pageId??void 0,t?.renderThumbnail??!1)}}},aC={id:`pen`,label:`Pencil Document`,role:`interchange-document`,category:`document`,extensions:[`pen`],mimeTypes:[`application/json`,`text/plain`],support:{readDocument:!0},matchesFile(e,t){return $S(e)===`pen`||t===`application/json`},async readDocument(e){return{graph:Qx(new TextDecoder().decode(e.data)),sourceFormat:`pen`}}},oC=rC(`PNG`),sC=rC(`JPG`),cC=rC(`WEBP`),lC={id:`svg`,label:`SVG`,role:`derived-export`,category:`vector`,extensions:[`svg`],mimeTypes:[`image/svg+xml`],support:{exportDocument:!0,exportPage:!0,exportSelection:!0,exportNode:!0},exportOptions:{scale:!1,quality:!1,colorSpace:!0},async exportContent(e,t){let n=tC(e);if(!n)throw Error(`Nothing to export`);let r=an(e.graph,n.pageId,n.nodeIds,t);if(!r)throw Error(`Nothing to export`);return{format:`svg`,mimeType:`image/svg+xml`,extension:`svg`,data:r,encoding:`utf8`}}},uC={id:`pdf`,label:`PDF`,role:`derived-export`,category:`vector`,extensions:[`pdf`],mimeTypes:[`application/pdf`],support:{exportDocument:!0,exportPage:!0,exportSelection:!0,exportNode:!0},exportOptions:{scale:!1,quality:!1},async exportContent(e){let t=tC(e);if(!t)throw Error(`Nothing to export`);let{renderNodesToPDF:n}=await m(async()=>{let{renderNodesToPDF:e}=await import(`./pdf-DiAVt2Lm.js`);return{renderNodesToPDF:e}},__vite__mapDeps([11,4,1,2,3,5,6,7,8,12,13])),r=await n(e.graph,t.pageId,t.nodeIds);if(!r)throw Error(`Nothing to export`);return{format:`pdf`,mimeType:`application/pdf`,extension:`pdf`,data:r}}};function dC(e){if(e.target.scope!==`document`)return tC(e);let t=e.graph.getPages();return t.length?{pageId:t[0].id,nodeIds:t.flatMap(e=>e.childIds)}:null}var fC=[iC,aC,oC,sC,cC,lC,uC,{id:`pptx`,label:`PowerPoint`,role:`derived-export`,category:`print`,extensions:[`pptx`],mimeTypes:[`application/vnd.openxmlformats-officedocument.presentationml.presentation`],support:{exportDocument:!0,exportPage:!0,exportSelection:!0,exportNode:!0},exportOptions:{scale:!1,quality:!1},async exportContent(e,t,n){let r=dC(e);if(!r)throw Error(`Nothing to export`);let{renderNodesToPPTX:i}=await m(async()=>{let{renderNodesToPPTX:e}=await import(`./pptx-DU5bz93N.js`);return{renderNodesToPPTX:e}},__vite__mapDeps([14,4,13,3,5,7,6])),a=await i(e.graph,r.pageId,r.nodeIds,{...t,context:t?.context??n});if(!a)throw Error(`Nothing to export`);return{format:`pptx`,mimeType:`application/vnd.openxmlformats-officedocument.presentationml.presentation`,extension:`pptx`,data:a}}},{id:`jsx`,label:`JSX`,role:`derived-export`,category:`code`,extensions:[`jsx`],mimeTypes:[`text/plain`,`text/jsx`],support:{exportSelection:!0,exportNode:!0},exportOptions:{scale:!1,quality:!1},async exportContent(e,t){let n=t?.format??`openpencil`,r=eC(e.target),i=``;if(r?i=bp(r,e.graph,n):e.target.scope===`selection`&&(i=xp(e.target.nodeIds,e.graph,n)),!i)throw Error(`Nothing to export`);return{format:`jsx`,mimeType:`text/plain`,extension:`jsx`,data:i,encoding:`utf8`}}}];function pC(e,t,n,r){let i=performance.now(),a=[],o=[],s=null,c=e=>{o.push({name:`animation:frame`,timestamp:e-i,detail:{}}),s=requestAnimationFrame(c)};s=requestAnimationFrame(c);let l=typeof PerformanceObserver<`u`&&PerformanceObserver.supportedEntryTypes.includes(`longtask`)?new PerformanceObserver(e=>{for(let t of e.getEntries())o.push({name:`main:long-task`,timestamp:t.startTime-i,detail:{durationMs:t.duration}})}):null;l?.observe({entryTypes:[`longtask`]});let u=e=>{let t=e;a.push({timeMs:performance.now()-i,deltaX:e.deltaX,deltaY:e.deltaY,deltaMode:e.deltaMode,ctrlKey:e.ctrlKey,metaKey:e.metaKey,shiftKey:e.shiftKey,clientX:e.clientX,clientY:e.clientY,cancelable:e.cancelable,directionInvertedFromDevice:t.webkitDirectionInvertedFromDevice})};e.addEventListener(`wheel`,u,{capture:!0,passive:!0});let d=ke(e=>{o.push({...e,timestamp:e.timestamp-i})});return{stop(){e.removeEventListener(`wheel`,u,{capture:!0}),s!==null&&cancelAnimationFrame(s),l?.disconnect(),d();let i=e.getBoundingClientRect();return{schemaVersion:1,name:t,source:`macos-trackpad`,recordedAt:new Date().toISOString(),environment:{userAgent:navigator.userAgent,platform:navigator.platform,devicePixelRatio:window.devicePixelRatio,viewportWidth:window.innerWidth,viewportHeight:window.innerHeight,canvasWidth:i.width,canvasHeight:i.height},sceneRenderer:r,initialViewport:n,wheel:a,trace:o}}}}var mC=null;function hC(e){return{startRecording(t){if(mC)throw Error(`A navigation recording is already active`);let n=document.querySelector(`[data-test-id="canvas-element"]`);if(!n)throw Error(`Canvas element not found`);mC=pC(n,t,{panX:e.state.panX,panY:e.state.panY,zoom:e.state.zoom},e.canvasRenderers.some(e=>e.tracksSceneSettlement&&e.tiledSceneEnabled)?`tiled`:`retained`)},async waitForSettlement(t=3e4){await new Promise((n,r)=>{let i=null,a=!1,o=(e,t)=>{a||(a=!0,i!==null&&cancelAnimationFrame(i),clearTimeout(s),e===`resolve`?n():r(t??Error(`Navigation settlement failed`)))},s=setTimeout(()=>{let n=e.canvasRenderers.filter(e=>e.tracksSceneSettlement&&e.pageId!==null).map(e=>({tiled:e.tiledSceneEnabled,covered:e.tiledSceneCovered,pending:e.tiledScenePending,backingCrisp:!e.sceneBackingNeedsCrispRender}));o(`reject`,Error(`Navigation renderer did not settle within ${t} ms: ${JSON.stringify({navigationPhase:e.state.navigation.phase,renderers:n})}`))},t),c=()=>{let t=e.canvasRenderers.filter(e=>e.tracksSceneSettlement&&e.pageId!==null);if(e.state.navigation.phase===`idle`&&t.length>0&&t.every(e=>e.tiledSceneEnabled?e.tiledSceneCovered&&!e.tiledScenePending:!e.sceneBackingNeedsCrispRender)){o(`resolve`);return}i=requestAnimationFrame(c)};i=requestAnimationFrame(c)})},stopRecording(){if(!mC)throw Error(`No navigation recording is active`);let e=mC.stop();return mC=null,e}}}var gC=1e3,_C=$t(rn(),en(),tn(1),nn(gC));function vC(e){let t=Qt(_C,e);return t.success?t.output:50}var yC={appearance:{animations:`system`},chat:{reasoningDisplay:`collapsed`,maxAgentSteps:50},version:1,recovery:{enabled:!0},editing:{snapping:{...Ep}},rendering:{canvasMode:`retained`}},bC=`open-pencil:preferences:v1`;function xC(e,t){return typeof e==`boolean`?e:t}function SC(e){return!!e&&typeof e==`object`&&!Array.isArray(e)}function CC(e){return e===`off`?`off`:`system`}function wC(e){return{maxAgentSteps:vC(e?.maxAgentSteps),reasoningDisplay:e?.reasoningDisplay===`expanded`||e?.reasoningDisplay===`while-thinking`?e.reasoningDisplay:`collapsed`}}function TC(e){let t=SC(e)?e:void 0,n=t?.editing?.snapping;return{appearance:{animations:CC(t?.appearance?.animations)},chat:wC(t?.chat),version:1,recovery:{enabled:xC(t?.recovery?.enabled,yC.recovery.enabled)},editing:{snapping:{geometry:xC(n?.geometry,yC.editing.snapping.geometry),objects:xC(n?.objects,yC.editing.snapping.objects),pixelGrid:xC(n?.pixelGrid,yC.editing.snapping.pixelGrid)}},rendering:{canvasMode:t?.rendering?.canvasMode===`tiled`?`tiled`:`retained`}}}var EC=ie(bC,structuredClone(yC),{mergeDefaults:e=>TC(e)});function DC(e){EC.value={...EC.value,appearance:{animations:e}}}function OC(e){let t=structuredClone(EC.value);t.recovery.enabled=e,EC.value=t}function kC(e){EC.value={...EC.value,rendering:{canvasMode:e}}}function AC(e){EC.value={...EC.value,editing:{...EC.value.editing,snapping:{...EC.value.editing.snapping,...e}}}}function jC(e,t=`retained`){let n=new URLSearchParams(e),r=n.get(`renderer`),i=r===`tiled`||r===`retained`?r:t;return{test:n.has(`test`),navigationBenchmark:n.has(`navigation-benchmark`),recentFiles:n.has(`recent-files`),showChrome:!n.has(`no-chrome`),showRulers:!n.has(`no-rulers`),sceneRenderer:i,sceneRendererOverride:r===`tiled`||r===`retained`,collaborationTransport:n.get(`collabTransport`)===`test`?`test`:`default`,collaborationRelayURL:n.get(`collabRelay`)}}var MC=jC(a?window.location.search:``,EC.value.rendering.canvasMode),NC=null;function PC(){return window.openPencil??={},window.openPencil.getStore??=()=>{if(!NC)throw Error(`OpenPencil store not initialized`);return NC},window.openPencil}function FC(e){if(NC=e,!a)return;let t=PC();if(MC.navigationBenchmark){let n=t.test??={};n.navigation=hC(e)}}function IC(e){}function LC(e){PC().setChatTransport=e}function RC(e){PC().openFile=e}async function zC(e,t){if(!e.hasUnsavedChanges())return`saved`;let n=await t();return n===`save`?await e.saveFigFile()&&!e.hasUnsavedChanges()?`saved`:`cancel`:n}var BC=j(null),VC=null,HC=Promise.resolve();function UC(e){let t=VC;VC=null,BC.value=null,t?.(e)}function WC(e,t){let n=HC.then(()=>zC(e,async()=>{if(f){let{chooseNativeDocumentClose:e}=await m(async()=>{let{chooseNativeDocumentClose:e}=await import(`./native-CX6AVU5Y.js`);return{chooseNativeDocumentClose:e}},__vite__mapDeps([15,16,10,17,4,18]));return e(t)}return new Promise(e=>{VC=e,BC.value={documentName:t}})}));return HC=n.then(()=>void 0,()=>void 0),n}async function GC(e,t=WC){let n=e(),r=new Set;function i(){let t=e();return t.length===n.length&&t.every(e=>n.includes(e)&&(r.has(e)||!e.hasUnsavedChanges()))}for(let e of n){let n=await t(e,e.state.documentName);if(n===`cancel`)return!1;n===`discard`&&r.add(e)}if(!i())return!1;for(let e of n)r.has(e)?await e.discardRecovery():await e.persistRecoveryNow();return i()}function KC(e,t){return AS(e,{populate:`first-page`,signal:t})}var qC=8*1024*1024,JC=new Set([`api.fontsource.org`,`cdn.jsdelivr.net`,`fonts.googleapis.com`,`fonts.google.com`,`fonts.gstatic.com`]);function YC(e,t=typeof process>`u`?globalThis.location.origin:``){return async(n,r)=>{let i=new Request(n,r),a=new URL(i.url);if(a.origin===t)return e(i);if(a.protocol!==`https:`||!JC.has(a.hostname))throw Error(`Unsupported web font host: ${a.hostname}`);let o=await e(i);if(Number(o.headers.get(`content-length`)??0)>qC)throw Error(`Web font response exceeds the size limit`);let s=await o.arrayBuffer();if(s.byteLength>qC)throw Error(`Web font response exceeds the size limit`);let c=new Response(s,{status:o.status,statusText:o.statusText,headers:o.headers});return Object.defineProperty(c,"url",{value:o.url}),c}}var XC=YC(globalThis.fetch.bind(globalThis),typeof process>`u`?globalThis.location.origin:``),ZC=`cache/v1`,QC=`open-pencil:cache:v1:`,$C=new TextEncoder,ew=new TextDecoder;function tw(){return f||`window`in globalThis&&`__TAURI_INTERNALS__`in window}function nw(){return`window`in globalThis&&!!window.localStorage}function rw(e){return`${ZC}/${e.split(`/`).map(encodeURIComponent).join(`/`)}`}function iw(e){let t=e.split(`/`).slice(0,-1);return t.length>0?`${ZC}/${t.map(encodeURIComponent).join(`/`)}`:ZC}function aw(e){return`${QC}${e}`}function ow(e){if(nw())for(let t=window.localStorage.length-1;t>=0;t--){let n=window.localStorage.key(t);n?.startsWith(aw(e))&&window.localStorage.removeItem(n)}}async function sw(e){if(tw())try{let{BaseDirectory:t,readFile:n}=await m(async()=>{let{BaseDirectory:e,readFile:t}=await import(`./dist-js-DJskp-xP.js`);return{BaseDirectory:e,readFile:t}},__vite__mapDeps([19,10,20]));return ew.decode(await n(rw(e),{baseDir:t.AppLocalData}))}catch{return null}return nw()?window.localStorage.getItem(aw(e)):null}async function cw(e,t){if(tw()){let{BaseDirectory:n,mkdir:r,writeFile:i}=await m(async()=>{let{BaseDirectory:e,mkdir:t,writeFile:n}=await import(`./dist-js-DJskp-xP.js`);return{BaseDirectory:e,mkdir:t,writeFile:n}},__vite__mapDeps([19,10,20]));await r(iw(e),{baseDir:n.AppLocalData,recursive:!0}),await i(rw(e),$C.encode(t),{baseDir:n.AppLocalData});return}nw()&&window.localStorage.setItem(aw(e),t)}async function lw(e){if(!tw())return null;try{let{BaseDirectory:t,readFile:n}=await m(async()=>{let{BaseDirectory:e,readFile:t}=await import(`./dist-js-DJskp-xP.js`);return{BaseDirectory:e,readFile:t}},__vite__mapDeps([19,10,20])),r=await n(rw(e),{baseDir:t.AppLocalData});return r.buffer.slice(r.byteOffset,r.byteOffset+r.byteLength)}catch{return null}}async function uw(e,t){if(!tw())return;let{BaseDirectory:n,mkdir:r,writeFile:i}=await m(async()=>{let{BaseDirectory:e,mkdir:t,writeFile:n}=await import(`./dist-js-DJskp-xP.js`);return{BaseDirectory:e,mkdir:t,writeFile:n}},__vite__mapDeps([19,10,20]));await r(iw(e),{baseDir:n.AppLocalData,recursive:!0}),await i(rw(e),new Uint8Array(t),{baseDir:n.AppLocalData})}async function dw(e){if(tw()){try{let{BaseDirectory:t,remove:n}=await m(async()=>{let{BaseDirectory:e,remove:t}=await import(`./dist-js-DJskp-xP.js`);return{BaseDirectory:e,remove:t}},__vite__mapDeps([19,10,20]));await n(rw(e),{baseDir:t.AppLocalData,recursive:!0})}catch(t){console.warn(`Cache prefix delete skipped for "${e}":`,t)}return}ow(e)}async function fw(e,t){let n=await sw(e);if(!n)return null;try{let e=JSON.parse(n);return typeof e.updatedAt!=`number`||!(`value`in e)||t!==void 0&&Date.now()-e.updatedAt>t?null:e.value}catch{return null}}async function pw(e,t){await cw(e,JSON.stringify({updatedAt:Date.now(),value:t}))}var mw=`font-cache/v1`,hw=`${mw}/manifest`,gw=`${mw}/files`,_w={version:1,entries:{}},vw=new TextEncoder;async function yw(e,t,n=``){return bw(`${e}\0${t}\0${Array.from(new Set(n)).sort().join(``)}`)}async function bw(e){return Sw(await crypto.subtle.digest(`SHA-256`,vw.encode(e)))}async function xw(e){return Sw(await crypto.subtle.digest(`SHA-256`,e))}function Sw(e){return[...new Uint8Array(e)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}async function Cw(){let e=await fw(hw);return e?.version!==1||!e.entries?_w:{version:1,entries:e.entries}}async function ww(e){await pw(hw,e)}async function Tw(){let e=await Cw(),t=Object.values(e.entries).filter(e=>!!e);return{count:t.length,byteLength:t.reduce((e,t)=>e+t.byteLength,0),updatedAt:t.length>0?Math.max(...t.map(e=>e.updatedAt)):null}}async function Ew(){await dw(mw)}function Dw(){return{async read(e,t,n){let r=(await Cw()).entries[await yw(e,t,n)];if(!r)return null;let i=await lw(`${gw}/${r.file}`);return!i||i.byteLength!==r.byteLength||await xw(i)!==r.sha256?null:i},async write(e,t,n,r){let i=await yw(e,t,r),a=await xw(n),o=`${i}.ttf`;await uw(`${gw}/${o}`,n);let s=await Cw();s.entries[i]={family:e,style:t,file:o,byteLength:n.byteLength,sha256:a,updatedAt:Date.now()},await ww(s)}}}typeof navigator<`u`&&z.setFallbackUserAgent(navigator.userAgent);var Ow=ie(`op-online-fonts-enabled`,!0),kw=ie(`op-font-providers`,Wt);w([Ow,kw],()=>{z.setOnlineFontProviders(Ow.value?Object.fromEntries(zt.map(e=>[e,kw.value[e]&&(H()||e!==`google`)])):{})},{deep:!0,immediate:!0});var Aw=!1;function jw(){Aw||!H()||(Aw=!0,z.setDownloadedFontCache(Dw()),z.setWebFontFetch(Cn),z.setHostFontLoader(Kw))}jw(),H()||z.setWebFontFetch(XC);var Mw=null,Nw=null;async function Pw(){return Mw||(Nw||=m(async()=>{let{invoke:e}=await import(`./core-DQRVmAs7.js`);return{invoke:e}},__vite__mapDeps([9,10])).then(({invoke:e})=>e(`list_system_fonts`)).then(e=>(Mw=e,e)).catch(()=>[]),Nw)}function Fw(){if(jw(),H()){Pw().then(Vw);return}Ow.value&&z.preloadWebFontFamilies()}function Iw(){return H()?`granted`:z.localAccessState()}async function Lw(){return H()||await z.requestLocalFontAccess(),Hw()}async function Rw(){return jw(),H()?Tw():{count:0,byteLength:0,updatedAt:null}}async function zw(){jw(),H()&&await Ew()}async function Bw(){return z.ensureFallbackPack()}function Vw(e){if(!(typeof document>`u`))for(let{family:t}of e){let e=new FontFace(t,`local("${t}")`);document.fonts.add(e)}}async function Hw(){if(jw(),H()){let[e,t]=await Promise.all([Pw(),z.listFamilyOptions()]),n=new Map(t.map(e=>[e.family,e]));for(let t of e)n.set(t.family,{family:t.family,source:`local`});return[...n.values()].sort((e,t)=>e.family.localeCompare(t.family))}return z.listFamilyOptions()}async function Uw(){return jw(),H()?Pw():[]}async function Ww(e,t,n){z.blockNodesUntilFontsResolve(t);try{let n=z.generation(),r=z.collectFontKeys(e,t),i=Bt(e,t),{characters:a}=i;await Promise.all(r.map(([e,t])=>qw(e,t,a)));let o=P(i,{treatUnknownCoverageAsMissing:f});if(o.length>0){let n=await z.ensureFallbackPack(o,a);Object.values(n).some(e=>e.length>0)&&Gw(e,t)}else z.generation()!==n&&Gw(e,t);return z.generation()!==n||o.length>0}finally{z.unblockNodes(t),n?.invalidateAllPictures()}}function Gw(e,t){let n=t=>{let r=e.getNode(t);if(r){r.type===`TEXT`&&(r.textPicture=null);for(let e of r.childIds)n(e)}};for(let e of t)n(e)}async function Kw(e,t=`Regular`){if(!H())return null;try{let{invoke:n}=await m(async()=>{let{invoke:e}=await import(`./core-DQRVmAs7.js`);return{invoke:e}},__vite__mapDeps([9,10])),r=await n(`load_system_font`,{family:e,style:t});return r.byteLength===0?null:r}catch{return null}}async function qw(e,t=`Regular`,n=``,r){return jw(),z.loadFont(e,t,n,r)}async function Jw(e,t,n){let r=t.getPages()[0],i=r?.id??t.rootId,a=Vb({graph:t,loadFont:qw,skipInitialGraphSetup:!0});try{n?.update({phase:`populating-page`,detail:r?.name??null});let o=await a.preparePage(i,{signal:n?.signal,onProgress:e=>n?.update(e)});if(n?.signal.throwIfAborted(),!o)throw Error(`Imported page preparation was superseded`);e.replaceGraph(t),e.undo.clear(),e.clearSelection()}finally{a.dispose()}}var Yw=on({name:cn.recovery,version:1,callbacks:{upgrade(e){e.objectStoreNames.contains(`meta`)||e.createObjectStore(`meta`,{keyPath:`id`}),e.objectStoreNames.contains(`fig`)||e.createObjectStore(`fig`)}}});function Xw(){let e=sn(Yw);return{async list(){return(await(await e).getAll(`meta`)).toSorted((e,t)=>t.updatedAt.localeCompare(e.updatedAt))},async read(t){let n=(await e).transaction([`meta`,`fig`]),[r,i]=await Promise.all([n.objectStore(`meta`).get(t),n.objectStore(`fig`).get(t)]);return await n.done,r&&i?{...r,figBytes:Uint8Array.from(i)}:null},async write(t){let n=(await e).transaction([`meta`,`fig`],`readwrite`),r={id:t.id,documentName:t.documentName||`Untitled`,updatedAt:new Date().toISOString(),sceneVersion:t.sceneVersion,byteLength:t.figBytes.byteLength,formatVersion:1};return await Promise.all([n.objectStore(`meta`).put(r),n.objectStore(`fig`).put(Uint8Array.from(t.figBytes),t.id),n.done]),r},async remove(t){let n=(await e).transaction([`meta`,`fig`],`readwrite`);await Promise.all([n.objectStore(`meta`).delete(t),n.objectStore(`fig`).delete(t),n.done])},async clear(){let t=(await e).transaction([`meta`,`fig`],`readwrite`);await Promise.all([t.objectStore(`meta`).clear(),t.objectStore(`fig`).clear(),t.done])}}}function Zw(){let e=new Map;return{async list(){return[...e.values()].map(({figBytes:e,...t})=>structuredClone(t)).toSorted((e,t)=>t.updatedAt.localeCompare(e.updatedAt))},async read(t){let n=e.get(t);return n?structuredClone(n):null},async write(t){let n={id:t.id,documentName:t.documentName||`Untitled`,updatedAt:new Date().toISOString(),sceneVersion:t.sceneVersion,byteLength:t.figBytes.byteLength,formatVersion:1};return e.set(t.id,{...n,figBytes:new Uint8Array(t.figBytes)}),structuredClone(n)},async remove(t){e.delete(t)},async clear(){e.clear()}}}var Qw=null,$w=!1;function eT(e){$w||=(console.warn(`[Recovery] IndexedDB unavailable; crash recovery is limited to this session`,e),!0)}function tT(e){let t=e,n=Promise.resolve();function r(e){let t=n.then(e,e);return n=t.then(()=>void 0,()=>void 0),t}async function i(n){if(t!==e)return t;eT(n);let r=Zw();try{let t=await e.list();for(let n of t){let t=await e.read(n.id);t&&await r.write(t)}}catch(e){console.warn(`[Recovery] Failed to migrate IndexedDB snapshots to memory:`,e)}return t=r,r}function a(n){return r(async()=>{try{return await n(t)}catch(r){if(t!==e)throw r;return n(await i(r))}})}function o(n){return r(async()=>{await e.remove(n),t!==e&&await t.remove(n)})}function s(){return r(async()=>{await e.clear(),t!==e&&await t.clear()})}return{list:()=>a(e=>e.list()),read:e=>a(t=>t.read(e)),write:e=>a(t=>t.write(e)),remove:o,clear:s}}function nT(){return Qw||(typeof indexedDB>`u`?(eT(),Qw=Zw(),Qw):($w=!1,Qw=tT(Xw()),Qw))}function rT(){let e=new Uint8Array(16);crypto.getRandomValues(e),e[6]=e[6]&15|64,e[8]=e[8]&63|128;let t=[...e].map(e=>e.toString(16).padStart(2,`0`)).join(``);return`${t.slice(0,8)}-${t.slice(8,12)}-${t.slice(12,16)}-${t.slice(16,20)}-${t.slice(20)}`}function iT({state:e,buildFigFile:t,hasWritableSource:n,isEnabled:r=()=>!0,store:i=nT(),recoveryId:a=rT()}){let o=a,s=e.sceneVersion,c=null,l=s,u=0,d=null,f=Promise.resolve(),p=!1;async function m(a){if(p||a!==u||!r()||n()||l===s)return;let d=l,f=await t();a!==u||n()||!r()||(await i.write({id:o,documentName:e.documentName,sceneVersion:d,figBytes:f}),c=d,a===u&&(s=d,l!==d&&await m(a)))}async function h(){await f,!(p||n()||!r())&&(l=e.sceneVersion,l!==s&&(d||=m(u).finally(()=>{d=null}),await d))}let g=ne(()=>e.sceneVersion,()=>{h().catch(e=>console.warn(`[Recovery] Snapshot failed:`,e))},{debounce:3e3,maxWait:1e4}),_=w(r,t=>{if(t){s=e.sceneVersion,l=e.sceneVersion;return}u++;let n=u,r=o;l=e.sceneVersion,s=e.sceneVersion;let a=d;f=f.then(async()=>{await a,await i.remove(r),n===u&&(c=null)}).catch(e=>console.warn(`[Recovery] Failed to disable recovery:`,e))},{flush:`sync`});async function v(){u++,await Promise.all([d,f])}return{getRecoveryId:()=>o,async adoptRecoverySnapshot(e,t){let n=o;await v(),o=e,s=t,c=t,l=t,p=!1,n!==e&&await i.remove(n)},persistNow:h,async markProtectedVersion(t){await v(),s=t,l=e.sceneVersion,(c==null||c<=t)&&(await i.remove(o),c=null)},async discardRecovery(){await v(),s=e.sceneVersion,c=null,l=e.sceneVersion,await i.remove(o)},disposeRecovery(){p=!0,u++,g(),_()}}}var aT=6,oT=15e3;function sT(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function cT(e){if(!sT(e)||e.error===!0||typeof e.status==`number`&&e.status!==200||!sT(e.meta))throw Error(`Figma returned an invalid image response`);let t=e.meta.s3_urls;if(!sT(t))throw Error(`Figma returned an invalid image URL map`);let n={};for(let[e,r]of Object.entries(t))typeof r==`string`&&(n[e]=r);return n}async function lT(e){let t=await crypto.subtle.digest(`SHA-1`,Uint8Array.from(e));return[...new Uint8Array(t)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}async function uT(e,t,n=Cn,r=oT){let i=[...new Set(t)];if(i.length===0)return new Map;let a=await n(`https://www.figma.com/file/${encodeURIComponent(e)}/image/batch`,{method:`POST`,headers:{"content-type":`application/json`},body:JSON.stringify({sha1s:i,needs_compressed_textures:!1}),signal:AbortSignal.timeout(r)});if(!a.ok)throw Error(`Figma image request failed with status ${a.status}`);let o=cT(await a.json()),s=new Map;for(let e=0;e<i.length;e+=aT){let t=i.slice(e,e+aT);await Promise.all(t.map(async e=>{let t=o[e];if(t)try{let i=await n(t,{signal:AbortSignal.timeout(r)});if(!i.ok)throw Error(`status ${i.status}`);let a=new Uint8Array(await i.arrayBuffer());if(await lT(a)!==e.toLowerCase())throw Error(`SHA-1 mismatch`);s.set(e,a)}catch(t){console.warn(`Failed to fetch pasted Figma image ${e}`,t)}}))}return s}function dT({total:e,missing:t,fetchAttempted:n}){let r=yn.get();if(!n){hn.warning(e===1?r.clipboardImageUnavailableWeb:r.clipboardImagesUnavailableWeb({count:e}));return}hn.error(t===1?r.clipboardImageFetchFailed:r.clipboardImagesFetchFailed({count:t}))}function fT(e){return e.onEditorEvent(`clipboard:images-missing`,dT)}function pT(e){return e.type===`pane`?1:e.children.reduce((e,t)=>e+pT(t),0)}function mT(e){return e.type===`pane`?[e.paneId]:e.children.flatMap(mT)}function hT(e,t){return e.type===`pane`?e.paneId===t:e.children.some(e=>hT(e,t))}function gT(e,t){if(e<=0)return[];if(!t||t.length!==e||!t.every(e=>Number.isFinite(e)&&e>0))return Array.from({length:e},()=>100/e);let n=t.reduce((e,t)=>e+t,0);return t.map(e=>e/n*100)}function _T(e,t,n,r,i){return e.type===`pane`?e.paneId===t?{type:`split`,id:r,direction:i,children:[e,{type:`pane`,paneId:n}],sizes:[50,50]}:e:{...e,children:e.children.map(e=>_T(e,t,n,r,i)),sizes:gT(e.children.length,e.sizes)}}function vT(e,t){if(e.type===`pane`)return e.paneId===t?null:e;let n=e.children.map(e=>vT(e,t)).filter(e=>e!==null);return n.length===0?null:n.length===1?n[0]:{...e,children:n,sizes:gT(n.length)}}function yT(e,t,n){return e.type===`pane`?e:e.id===t?n.length!==e.children.length||!n.every(e=>Number.isFinite(e)&&e>0)?e:{...e,sizes:gT(e.children.length,n)}:{...e,children:e.children.map(e=>yT(e,t,n))}}function bT(e,t,n={}){return M({...Ap({...jp(t),...n}),id:e,viewportWidth:0,viewportHeight:0})}function xT(e,t){return M({...Ap(t),id:e,selectedIds:new Set,hoveredNodeId:null,measurementMode:`off`,editingTextId:null,marquee:null,snapGuides:[],guides:{preview:null,hovered:null,selected:null,redline:null},rotationPreview:null,dropTargetId:null,layoutInsertIndicator:null,autoLayoutHover:null,penState:null,penCursorX:null,penCursorY:null,nodeEditState:null,cursorCanvasX:null,cursorCanvasY:null,viewportWidth:t.viewportWidth,viewportHeight:t.viewportHeight})}function ST(e){let t=1,n=1,r=bT(`pane-${t++}`,e),i=j(new Map([[r.id,r]])),a=A(r.id),o=A({type:`pane`,paneId:r.id}),s=D(()=>pT(o.value));function c(e){return i.value.get(e)}function l(t){Object.assign(t,Ap(jp(e)))}function u(t){Object.assign(e,Ap(t))}function d(t){let n=c(t);return!n||t===a.value?e:{...e,...n}}function f(){return c(a.value)??r}function p(t){if(t===a.value)return!0;let n=c(t);if(!hT(o.value,t)||!n)return!1;let r=c(a.value);return r&&l(r),u(n),a.value=t,e.renderVersion++,!0}function m(e,r){let u=c(e);if(!u||s.value>=4)return null;e===a.value&&l(u);let d=xT(`pane-${t++}`,u);return o.value=_T(o.value,e,d.id,`split-${n++}`,r),i.value.set(d.id,d),p(d.id),S(i),d}function h(t){if(s.value<=1||!c(t))return!1;let n=vT(o.value,t);if(!n)return!1;if(i.value.delete(t),o.value=n,a.value===t){let t=mT(n)[0]??r.id,i=c(t);i&&u(i),a.value=t,e.renderVersion++}return S(i),!0}function g(e,t,n){let r=c(e);r&&(r.viewportWidth=t,r.viewportHeight=n)}function _(e,t){o.value=yT(o.value,e,t)}return{panes:i,activePaneId:a,splitTree:o,visiblePaneCount:s,getPane:c,getPaneRenderState:d,getActivePane:f,setActivePane:p,splitPane:m,closePane:h,resizePane:g,setSplitSizes:_,maxVisiblePanes:4}}var CT=1e4;function wT(e,t,n={}){let r=n.presentationTimeoutMs??CT,i=0,a=null,o=null,s=-1,c=new Map,l=t=>e.preparation?.id===t;return{begin(n){o?.(`superseded`);let r=new AbortController;a=r;let s=++i,u=n.kind;e.preparation={id:s,kind:u,phase:n.phase??`reading`,subject:n.subject??null,detail:null,progress:null,startedAt:performance.now()},t?.emit(`preparation:started`,e.preparation);let d=()=>{c.get(s)?.resolve(),c.delete(s),l(s)&&(e.preparation=null),a===r&&(a=null),o===f&&(o=null)},f=(e=`user`)=>{l(s)&&(r.abort(),d(),t?.emit(`preparation:finished`,{id:s,kind:u,status:`cancelled`,reason:e}))};return o=f,{id:s,signal:r.signal,update(n){if(!l(s)||r.signal.aborted)return;let i=n.completed!==void 0&&n.completed!==null&&n.total!==void 0&&n.total!==null&&n.total>0,a=e.preparation;a&&(e.preparation={...a,phase:n.phase,detail:n.detail??null,progress:i?{completed:n.completed??0,total:n.total??0,unit:n.unit??`fonts`}:null},t?.emit(`preparation:updated`,e.preparation,a))},complete(){l(s)&&(d(),t?.emit(`preparation:finished`,{id:s,kind:u,status:`completed`}))},fail(e){if(!l(s))return;let n={id:s,kind:u,...e};d(),t?.emit(`preparation:failed`,n)},cancel:f}},acknowledgePresentation(e){s=Math.max(s,e);for(let[e,t]of c)t.sceneVersion>s||(t.resolve(),c.delete(e))},waitForPresentation(e,t){return!l(e)||s>=t?Promise.resolve():Hn(()=>new Promise(n=>{c.set(e,{sceneVersion:t,resolve:n})}),r).finally(()=>c.delete(e))},dispose(){o?.(`tab-closed`),a?.abort(),a=null,o=null;for(let e of c.values())e.resolve();c.clear(),e.preparation=null}}}function TT(){let e=new Set,t=new Set,n=new Set,r=new Set;return{emit(i,...a){switch(i){case`preparation:started`:for(let t of e)t(a[0]);break;case`preparation:updated`:for(let e of t)e(a[0],a[1]);break;case`preparation:finished`:for(let e of n)e(a[0]);break;case`preparation:failed`:for(let e of r)e(a[0])}},on(i,a){switch(i){case`preparation:started`:return e.add(a),()=>e.delete(a);case`preparation:updated`:return t.add(a),()=>t.delete(a);case`preparation:finished`:return n.add(a),()=>n.delete(a);case`preparation:failed`:return r.add(a),()=>r.delete(a);default:return()=>void 0}}}}function ET(){return a&&typeof window.showSaveFilePicker==`function`}async function DT(e){return!a||typeof window.showSaveFilePicker!=`function`?null:window.showSaveFilePicker(e)}function OT(e){let t=Array.from(e).filter(e=>{let t=e.charCodeAt(0);return t>=32&&t!==127}).join(``).replace(/[/\\]+/g,`_`).replace(/\.{2,}/g,`_`).replace(/^[.\s]+/,``).trim();return t.length>0?t:`export`}function kT(e){let t={},n=new Set;for(let r of e){let e=OT(r.fileName);if(n.has(e)){let t=e.lastIndexOf(`.`),r=t===-1?e:e.slice(0,t),i=t===-1?``:e.slice(t),a=2;for(;n.has(`${r} (${a})${i}`);)a++;e=`${r} (${a})${i}`}n.add(e),t[e]=r.bytes}return _(t)}function AT(e,t){return t.scope===`node`?e.getNode(t.nodeId)?.name??`Export`:t.scope===`selection`&&t.nodeIds.length===1?e.getNode(t.nodeIds[0])?.name??`Export`:t.scope===`page`?e.getNode(t.pageId)?.name??`Page`:`Export`}function jT(e,t){if(e===`png`||e===`jpg`||e===`webp`)return{format:e.toUpperCase(),scale:t?.scale??1,quality:t?.quality};if(e===`jsx`)return{format:t?.jsxFormat??`openpencil`}}function MT(e,t,n,r){return t===`png`||t===`jpg`||t===`webp`?`${e}@${r?.scale??1}x.${n}`:`${e}.${n}`}function NT(e){return typeof e==`string`?new TextEncoder().encode(e):new Uint8Array(e)}function PT(e,t,n){async function r(n,r,i,a=t.currentPageId){let o=e.renderer;if(!o)return null;let s=n.length>0?n:e.graph.getChildren(a).map(e=>e.id);return s.length===0?null:me(o.ck,o,e.graph,a,s,{scale:r,format:i})}function i(){let e=[...t.selectedIds];return e.length>0?{scope:`selection`,nodeIds:e}:{scope:`page`,pageId:t.currentPageId}}function a(){return n.listExportFormats(t.selectedIds.size>0?`selection`:`page`)}return{renderExportImage:r,getSelectionExportTarget:i,listSelectionExportFormats:a}}async function FT(e,t,n){let{save:r}=await m(async()=>{let{save:e}=await import(`./dist-js-DF8XeBgD.js`);return{save:e}},__vite__mapDeps([21,16,10]));return r({defaultPath:e,filters:[{name:t,extensions:[n.slice(1)]}]})}async function IT(e,t){let{writeFile:n}=await m(async()=>{let{writeFile:e}=await import(`./dist-js-DJskp-xP.js`);return{writeFile:e}},__vite__mapDeps([19,10,20]));await n(e,t)}async function LT(e,t,n,r,i,a){if(H()){let i=await FT(t,n,r);if(!i)return;await IT(i,e);return}if(ET())try{let a=await DT({suggestedName:t,types:[{description:`${n} file`,accept:{[i]:[r]}}]});if(a){let t=await a.createWritable();await t.write(new Uint8Array(e)),await t.close()}return}catch(e){if(e.name===`AbortError`)return}a(e,t,i)}function RT(e,t,n,r){let{renderExportImage:i,getSelectionExportTarget:a,listSelectionExportFormats:o}=PT(e,t,n);async function s(t,r,i){let a=n.getFormat(r);if(!a)throw Error(`Unknown export format: ${r}`);let o=jT(r,i),s=await n.exportContent(r,{graph:e.graph,target:t},o,e.renderer?{canvasKit:e.renderer.ck,renderer:e.renderer}:void 0),c=AT(e.graph,t);return{bytes:NT(s.data),fileName:MT(c,r,s.extension,i),format:a.label,ext:`.${s.extension}`,mime:s.mimeType}}async function c(e){await LT(e.bytes,e.fileName,e.format,e.ext,e.mime,r)}async function l(e,t,n){await c(await s(e,t,n))}async function u(t){if(t.length===0)return;let n=[];for(let e of t)n.push(await s(e.target,e.formatId,e.options));if(n.length===1){await c(n[0]);return}let i=new Set(t.map(t=>AT(e.graph,t.target))),a=i.size===1?[...i][0]:`export`;await LT(kT(n),`${a}.zip`,`ZIP`,`.zip`,`application/zip`,r)}async function d(e,t){await l(a(),t,{scale:e})}return{renderExportImage:i,listSelectionExportFormats:o,exportTarget:l,exportTargets:u,exportSelection:d}}var zT=64*1024*1024;function BT(e){return`exceeds ${Math.floor(e/(1024*1024))} MiB`}async function VT(e,t,{onExceeded:n,sizeError:r}={}){let i=()=>{throw n?.(),Error(r??BT(t))},a=Number(e.headers.get(`content-length`));if(Number.isFinite(a)&&a>t&&i(),!e.body){let n=new Uint8Array(await e.arrayBuffer());return n.byteLength>t&&i(),n}let o=e.body.getReader(),s=[],c=0;try{for(;;){let{done:e,value:n}=await o.read();if(e)break;c+=n.byteLength,c>t&&i(),s.push(n)}}catch(e){throw await o.cancel().catch(()=>void 0),e}finally{o.releaseLock()}let l=new Uint8Array(c),u=0;for(let e of s)l.set(e,u),u+=e.byteLength;return l}function HT(e){let t=new URL(e,window.location.href);return t.hash=``,t}function UT(){return new Promise(e=>{requestAnimationFrame(()=>e())})}function WT(e,t){function n(e,n){t.width=e,t.height=n}async function r(){await UT(),e.zoomToFit()}return{setViewportSize:n,fitCurrentPageToViewport:r}}function GT(e,t,n){let r=new Blob([e.buffer],{type:n}),i=URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=t,a.style.display=`none`,document.body.appendChild(a),a.click(),setTimeout(()=>{document.body.removeChild(a),URL.revokeObjectURL(i)},100)}function KT(...e){let t=e.map(e=>e?.trim()).filter(e=>!!e);return t.length>0?t.join(`
`):void 0}var qT=new Set([`area`,`base`,`br`,`col`,`embed`,`hr`,`img`,`input`,`link`,`meta`,`param`,`source`,`track`,`wbr`]);function JT(e){let t=[],n=``;for(let r of e)r===` `||r===`
`||r===`	`||r===`\r`||r===`\f`?(n.length>0&&t.push(n),n=``):n+=r;return n.length>0&&t.push(n),t}function YT(e){return e.replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`)}function XT(e){return YT(e).replaceAll(`"`,`&quot;`)}function ZT(e){return YT(e.text)}function QT(e){if(!(!e.inlineStyle||Object.keys(e.inlineStyle).length===0))return Object.entries(e.inlineStyle).filter(([,e])=>e!==``).map(([e,t])=>`${e}: ${t}`).join(`; `)}function $T(e){let t=QT(e);if(!t)return;let n=Wf(t);return n.length>0?n:void 0}function eE(...e){let t=e.flatMap(e=>e?JT(e):[]).map(e=>e.trim()).filter(e=>e.length>0).join(` `);return t.length>0?t:void 0}function tE(e,t){let n=QT(e),r=t.style===`tailwind`?$T(e):void 0,i={...e.attrs};delete i.style;let a={...t.style===`tailwind`&&r?i:e.attrs};r&&(a.class=eE(e.attrs.class,r)),n&&t.style!==`tailwind`&&(a.style=n);let o=Object.entries(a).filter(e=>typeof e[1]==`string`&&e[1]!==``).map(([e,t])=>`${e}="${XT(t)}"`);return o.length===0?``:` ${o.join(` `)}`}function nE(e,t){let n=e.tagName.toLowerCase(),r=tE(e,t);return qT.has(n)?`<${n}${r}>`:`<${n}${r}>${e.children.map(e=>rE(e,t)).join(``)}</${n}>`}function rE(e,t={}){return e.type===`text`?ZT(e):nE(e,t)}function iE(e,t={}){return e.children.map(e=>rE(e,t)).join(``)}var aE=`align-items.aspect-ratio.background-color.background-image.border-bottom-color.border-bottom-style.border-bottom-left-radius.border-bottom-right-radius.border-bottom-width.border-left-color.border-left-style.border-left-width.border-radius.border-right-color.border-right-style.border-right-width.border-top-color.border-top-style.border-top-left-radius.border-top-right-radius.border-top-width.box-shadow.color.column-gap.display.align-self.bottom.flex-direction.flex-wrap.font-family.font-size.font-style.font-weight.gap.height.justify-content.letter-spacing.left.line-height.max-height.max-width.min-height.min-width.object-fit.opacity.overflow.padding-bottom.padding-left.padding-right.padding-top.position.right.row-gap.text-align.text-decoration-line.text-shadow.text-transform.top.white-space.width`.split(`.`);function oE(e){if(e)return e;if(typeof document>`u`)throw TypeError(`Browser CSS runtime requires a DOM document`);return document}function sE(e){let t={};for(let n of Array.from(e.attributes))t[n.name]=n.value;return t}function cE(e){let t={};for(let n of Array.from(e)){let r=e.getPropertyValue(n);r&&(t[n]=r)}return Object.keys(t).length>0?t:void 0}var lE=new Set([`head`,`link`,`meta`,`script`,`style`,`template`,`title`]);function uE(e){if(e.nodeType===3){let t=e.textContent??``;return t.length>0?{type:`text`,text:t}:null}if(e.nodeType!==1)return null;let t=e;if(lE.has(t.tagName.toLowerCase()))return null;let n=Array.from(t.childNodes).map(uE).filter(e=>e!==null),r=`style`in t?t.style:void 0;return{type:`element`,tagName:t.tagName.toLowerCase(),attrs:sE(t),children:n,inlineStyle:r?cE(r):void 0}}function dE(e,t){let n=e.defaultView?.DOMParser;if(!n)throw TypeError(`Browser CSS runtime requires DOMParser`);let r=new n().parseFromString(t,`text/html`);return{type:`document`,children:Array.from(r.body.childNodes).map(uE).filter(e=>e!==null)}}function fE(e,t,n){if(e.type===`text`)return;let r=t.ownerDocument?.defaultView;if(!r||!(t instanceof r.Element))return;n.push([e,t]);let i=e.children.filter(e=>e.type===`element`),a=Array.from(t.children);for(let[e,t]of i.entries()){let r=a.at(e);r&&fE(t,r,n)}}function pE(e,t){let n={},r=t.includeBrowserDefaults?Array.from(e):aE;for(let t of r){let r=e.getPropertyValue(t);r&&(n[t]=r)}return n}function mE(e){let t=e.defaultView?.requestAnimationFrame;return t?new Promise(e=>{t(()=>e())}):Promise.resolve()}function hE(e){e.style.cssText=[`position: fixed`,`left: -100000px`,`top: 0`,`width: 1000px`,`height: auto`,`visibility: hidden`,`pointer-events: none`,`contain: layout style paint`].join(`;`)}async function gE(e,t,n,r){let i=e.createElement(`div`);hE(i);let a=i.attachShadow({mode:`open`}),o=e.createElement(`style`);o.textContent=n,a.append(o);let s=e.createElement(`div`);s.innerHTML=iE(t),a.append(s),e.body.append(i);try{return await mE(e),vE(t,s,r)}finally{i.remove()}}async function _E(e,t,n,r){let i=e.createElement(`iframe`);hE(i),e.body.append(i);try{let e=i.contentDocument;if(!e)throw TypeError(`Browser CSS runtime could not create iframe document`);e.open(),e.write(`<!doctype html><html><head></head><body></body></html>`),e.close();let a=e.createElement(`style`);a.textContent=n,e.head.append(a);let o=e.createElement(`div`);return o.innerHTML=iE(t),e.body.append(o),await mE(e),vE(t,o,r)}finally{i.remove()}}function vE(e,t,n){let r=t.ownerDocument.defaultView;if(!r)throw TypeError(`Browser CSS runtime requires getComputedStyle`);let i=structuredClone(e),a=[],o=Array.from(t.childNodes);for(let[e,t]of i.children.entries()){let n=o.at(e);n&&fE(t,n,a)}for(let[e,t]of a)e.computedStyle=pE(r.getComputedStyle(t),n);return i}function yE(e={}){let t=oE(e.document),n=e.sandbox??`shadow-root`;return{kind:`browser`,parseHTML:e=>dE(t,e),serializeHTML:iE,computeStyles:(e,r=``,i={})=>n===`iframe`?_E(t,e,r,i):gE(t,e,r,i)}}var bE=n(((e,t)=>{var n=/^[a-f0-9?-]+$/i;t.exports=function(e){for(var t=[],r=e,i,a,o,s,c,l,u,d,f=0,p=r.charCodeAt(f),m=r.length,h=[{nodes:t}],g=0,_,v=``,y=``,b=``;f<m;)if(p<=32){i=f;do i+=1,p=r.charCodeAt(i);while(p<=32);s=r.slice(f,i),o=t[t.length-1],p===41&&g?b=s:o&&o.type===`div`?(o.after=s,o.sourceEndIndex+=s.length):p===44||p===58||p===47&&r.charCodeAt(i+1)!==42&&(!_||_&&_.type===`function`&&_.value!==`calc`)?y=s:t.push({type:`space`,sourceIndex:f,sourceEndIndex:i,value:s}),f=i}else if(p===39||p===34){i=f,a=p===39?`'`:`"`,s={type:`string`,sourceIndex:f,quote:a};do if(c=!1,i=r.indexOf(a,i+1),~i)for(l=i;r.charCodeAt(l-1)===92;)--l,c=!c;else r+=a,i=r.length-1,s.unclosed=!0;while(c);s.value=r.slice(f+1,i),s.sourceEndIndex=s.unclosed?i:i+1,t.push(s),f=i+1,p=r.charCodeAt(f)}else if(p===47&&r.charCodeAt(f+1)===42)i=r.indexOf(`*/`,f),s={type:`comment`,sourceIndex:f,sourceEndIndex:i+2},i===-1&&(s.unclosed=!0,i=r.length,s.sourceEndIndex=i),s.value=r.slice(f+2,i),t.push(s),f=i+2,p=r.charCodeAt(f);else if((p===47||p===42)&&_&&_.type===`function`&&_.value===`calc`)s=r[f],t.push({type:`word`,sourceIndex:f-y.length,sourceEndIndex:f+s.length,value:s}),f+=1,p=r.charCodeAt(f);else if(p===47||p===44||p===58)s=r[f],t.push({type:`div`,sourceIndex:f-y.length,sourceEndIndex:f+s.length,value:s,before:y,after:``}),y=``,f+=1,p=r.charCodeAt(f);else if(p===40){i=f;do i+=1,p=r.charCodeAt(i);while(p<=32);if(d=f,s={type:`function`,sourceIndex:f-v.length,value:v,before:r.slice(d+1,i)},f=i,v===`url`&&p!==39&&p!==34){--i;do if(c=!1,i=r.indexOf(`)`,i+1),~i)for(l=i;r.charCodeAt(l-1)===92;)--l,c=!c;else r+=`)`,i=r.length-1,s.unclosed=!0;while(c);u=i;do--u,p=r.charCodeAt(u);while(p<=32);d<u?(f===u+1?s.nodes=[]:s.nodes=[{type:`word`,sourceIndex:f,sourceEndIndex:u+1,value:r.slice(f,u+1)}],s.unclosed&&u+1!==i?(s.after=``,s.nodes.push({type:`space`,sourceIndex:u+1,sourceEndIndex:i,value:r.slice(u+1,i)})):(s.after=r.slice(u+1,i),s.sourceEndIndex=i)):(s.after=``,s.nodes=[]),f=i+1,s.sourceEndIndex=s.unclosed?i:f,p=r.charCodeAt(f),t.push(s)}else g+=1,s.after=``,s.sourceEndIndex=f+1,t.push(s),h.push(s),t=s.nodes=[],_=s;v=``}else if(p===41&&g)f+=1,p=r.charCodeAt(f),_.after=b,_.sourceEndIndex+=b.length,b=``,--g,h[h.length-1].sourceEndIndex=f,h.pop(),_=h[g],t=_.nodes;else{i=f;do p===92&&(i+=1),i+=1,p=r.charCodeAt(i);while(i<m&&!(p<=32||p===39||p===34||p===44||p===58||p===47||p===40||p===42&&_&&_.type===`function`&&_.value===`calc`||p===47&&_.type===`function`&&_.value===`calc`||p===41&&g));s=r.slice(f,i),p===40?v=s:(s.charCodeAt(0)===117||s.charCodeAt(0)===85)&&s.charCodeAt(1)===43&&n.test(s.slice(2))?t.push({type:`unicode-range`,sourceIndex:f,sourceEndIndex:i,value:s}):t.push({type:`word`,sourceIndex:f,sourceEndIndex:i,value:s}),f=i}for(f=h.length-1;f;--f)h[f].unclosed=!0,h[f].sourceEndIndex=r.length;return h[0].nodes}})),xE=n(((e,t)=>{t.exports=function e(t,n,r){var i,a,o,s;for(i=0,a=t.length;i<a;i+=1)o=t[i],r||(s=n(o,i,t)),s!==!1&&o.type===`function`&&Array.isArray(o.nodes)&&e(o.nodes,n,r),r&&n(o,i,t)}})),SE=n(((e,t)=>{function n(e,t){var n=e.type,i=e.value,a,o;return t&&(o=t(e))!==void 0?o:n===`word`||n===`space`?i:n===`string`?(a=e.quote||``,a+i+(e.unclosed?``:a)):n===`comment`?`/*`+i+(e.unclosed?``:`*/`):n===`div`?(e.before||``)+i+(e.after||``):Array.isArray(e.nodes)?(a=r(e.nodes,t),n===`function`?i+`(`+(e.before||``)+a+(e.after||``)+(e.unclosed?``:`)`):a):i}function r(e,t){var r,i;if(Array.isArray(e)){for(r=``,i=e.length-1;~i;--i)r=n(e[i],t)+r;return r}return n(e,t)}t.exports=r})),CE=n(((e,t)=>{function n(e){var t=e.charCodeAt(0),n;if(t===43||t===45){if(n=e.charCodeAt(1),n>=48&&n<=57)return!0;var r=e.charCodeAt(2);return n===46&&r>=48&&r<=57}return t===46?(n=e.charCodeAt(1),n>=48&&n<=57):t>=48&&t<=57}t.exports=function(e){var t=0,r=e.length,i,a,o;if(r===0||!n(e))return!1;for(i=e.charCodeAt(t),(i===43||i===45)&&t++;t<r&&(i=e.charCodeAt(t),!(i<48||i>57));)t+=1;if(i=e.charCodeAt(t),a=e.charCodeAt(t+1),i===46&&a>=48&&a<=57)for(t+=2;t<r&&(i=e.charCodeAt(t),!(i<48||i>57));)t+=1;if(i=e.charCodeAt(t),a=e.charCodeAt(t+1),o=e.charCodeAt(t+2),(i===101||i===69)&&(a>=48&&a<=57||(a===43||a===45)&&o>=48&&o<=57))for(t+=a===43||a===45?3:2;t<r&&(i=e.charCodeAt(t),!(i<48||i>57));)t+=1;return{number:e.slice(0,t),unit:e.slice(t)}}})),wE=t(n(((e,t)=>{var n=bE(),r=xE(),i=SE();function a(e){return this instanceof a?(this.nodes=n(e),this):new a(e)}a.prototype.toString=function(){return Array.isArray(this.nodes)?i(this.nodes):``},a.prototype.walk=function(e,t){return r(this.nodes,e,t),this},a.unit=CE(),a.walk=r,a.stringify=i,t.exports=a}))(),1),TE=new Set([`transparent`,`rgba(0, 0, 0, 0)`,`rgb(0 0 0 / 0)`]);function EE(e){if(!e)return null;let t=e.trim();if(t.length===0||t===`auto`)return null;let n=Number.parseFloat(t);return Number.isFinite(n)?t.endsWith(`rem`)?n*16:n:null}function DE(e){if(!e)return null;let t=e.trim();return t.length===0||TE.has(t.toLowerCase())?null:I(t)}function OE(e){let t=DE(e);return t?[{type:`SOLID`,color:t,opacity:t.a,visible:!0}]:[]}function kE(e,t){let n=DE(e),r=EE(t);return!n||r===null||r<=0?[]:[{color:n,weight:r,opacity:n.a,visible:!0,align:`INSIDE`}]}function AE(e){let t=[];for(let n of(0,wE.default)(e).nodes){if(n.type===`div`&&n.value===`,`)return t;t.push(n)}return t}function jE(e){for(let t of e){if(t.type===`function`){let e=DE(wE.default.stringify(t));if(e)return e;continue}if(t.type!==`word`)continue;let e=DE(t.value);if(e)return e}return null}function ME(e){return e.filter(e=>e.type===`word`&&wE.default.unit(e.value)!==!1).map(e=>EE(e.value)).filter(e=>e!==null)}function NE(e){if(!e||e.trim()===`none`)return[];let t=AE(e);if(t.some(e=>e.type===`word`&&e.value===`inset`))return[];let n=jE(t);if(!n)return[];let[r=0,i=0,a=0,o=0]=ME(t);return[{type:`DROP_SHADOW`,color:n,offset:{x:r,y:i},radius:a,spread:o,visible:!0,blendMode:`NORMAL`}]}function Z(e,t){return e?.[t]}function PE(e){return{...e.inlineStyle,...e.computedStyle}}var FE=`open-pencil-dom-css`,IE=`image-source-url`;function LE(e){return e.type===`text`?e.text:e.children.map(LE).join(``)}function RE(e){return[`span`,`p`,`label`,`strong`,`em`,`button`,`a`,`h1`,`h2`,`h3`,`h4`,`h5`,`h6`].includes(e.tagName.toLowerCase())}function Q(e,...t){for(let n of t){let t=EE(Z(e,n));if(t!==null)return t}return null}function zE(e,t){return OE(Z(e,t))}function BE(e){if(!e||e===`auto`)return null;let t=e.split(`/`).map(e=>Number.parseFloat(e.trim())).filter(Number.isFinite);return t.length===1&&t[0]>0?t[0]:t.length===2&&t[0]>0&&t[1]>0?t[0]/t[1]:null}function VE(e,t){let n=Q(t,`width`),r=Q(t,`height`),i=Q(t,`min-width`),a=Q(t,`max-width`),o=Q(t,`min-height`),s=Q(t,`max-height`),c=BE(Z(t,`aspect-ratio`));n!==null&&(e.width=n),r!==null&&(e.height=r),r===null&&n!==null&&c!==null&&(e.height=n/c),n===null&&r!==null&&c!==null&&(e.width=r*c),i!==null&&(e.minWidth=i),a!==null&&(e.maxWidth=a),o!==null&&(e.minHeight=o),s!==null&&(e.maxHeight=s)}function HE(e){return Z(e,`border-color`)??Z(e,`border-top-color`)??Z(e,`border-right-color`)??Z(e,`border-bottom-color`)??Z(e,`border-left-color`)}function UE(e){let t=Q(e,`border-width`);if(t!==null)return t;let n=[Q(e,`border-top-width`),Q(e,`border-right-width`),Q(e,`border-bottom-width`),Q(e,`border-left-width`)].filter(e=>e!==null);return n.length===0?null:Math.max(...n)}function WE(e){return Z(e,`border-style`)??Z(e,`border-top-style`)??Z(e,`border-right-style`)??Z(e,`border-bottom-style`)??Z(e,`border-left-style`)}function GE(e,t){let n=WE(e);return n===`dashed`?[t*3,t*2]:n===`dotted`?[t,t]:[]}function KE(e,t,n){let r=Q(t,`border-top-width`)??n.weight,i=Q(t,`border-right-width`)??n.weight,a=Q(t,`border-bottom-width`)??n.weight,o=Q(t,`border-left-width`)??n.weight;e.borderTopWeight=r,e.borderRightWeight=i,e.borderBottomWeight=a,e.borderLeftWeight=o,e.independentStrokeWeights=[r,i,a,o].some(e=>e!==n.weight)}function qE(e,t){let n=Q(t,`border-radius`),r=Q(t,`border-top-left-radius`),i=Q(t,`border-top-right-radius`),a=Q(t,`border-bottom-right-radius`),o=Q(t,`border-bottom-left-radius`);if(n!==null&&(e.cornerRadius=n),r===null&&i===null&&a===null&&o===null)return;let s=n??0;e.topLeftRadius=r??s,e.topRightRadius=i??s,e.bottomRightRadius=a??s,e.bottomLeftRadius=o??s,e.independentCorners=[e.topLeftRadius,e.topRightRadius,e.bottomRightRadius,e.bottomLeftRadius].some(e=>e!==s)}function JE(e){return e===`center`?`CENTER`:e===`end`||e===`flex-end`?`MAX`:e===`space-between`?`SPACE_BETWEEN`:`MIN`}function YE(e){return e===`center`?`CENTER`:e===`end`||e===`flex-end`?`MAX`:e===`stretch`?`STRETCH`:e===`baseline`?`BASELINE`:`MIN`}function XE(e){return e===`center`?`CENTER`:e===`end`||e===`flex-end`?`MAX`:e===`stretch`?`STRETCH`:e===`baseline`?`BASELINE`:e===`start`||e===`flex-start`?`MIN`:`AUTO`}function ZE(e){return e===`uppercase`?`UPPER`:e===`lowercase`?`LOWER`:e===`capitalize`?`TITLE`:`ORIGINAL`}function QE(e,t){let n=Q(t,`gap`),r=Q(t,`row-gap`),i=Q(t,`column-gap`),a=e.layoutMode===`HORIZONTAL`,o=e.layoutWrap===`WRAP`;e.itemSpacing=(a?i:r)??n??0,e.counterAxisSpacing=(a?r:i)??(o?n??0:0)}function $E(e,t){let n=Z(t,`position`);(n===`absolute`||n===`fixed`)&&(e.layoutPositioning=`ABSOLUTE`);let r=Q(t,`left`),i=Q(t,`top`);r!==null&&(e.x=r),i!==null&&(e.y=i)}function eD(e,t){e.paddingTop=Q(t,`padding-top`,`padding-block`,`padding`)??0,e.paddingRight=Q(t,`padding-right`,`padding-inline`,`padding`)??0,e.paddingBottom=Q(t,`padding-bottom`,`padding-block`,`padding`)??0,e.paddingLeft=Q(t,`padding-left`,`padding-inline`,`padding`)??0}function tD(e){return e===`contain`||e===`scale-down`?`FIT`:e===`cover`?`FILL`:null}function nD(e){if(!e?.startsWith(`data:`))return null;let t=e.indexOf(`,`);if(t===-1)return null;let n=e.slice(0,t),r=e.slice(t+1);return n.endsWith(`;base64`)?Nt(r):null}function rD(e,t,n,r){if(n.tagName.toLowerCase()!==`img`)return;let i=n.attrs.src,a=nD(i);if(!a){i&&t.pluginData.push({pluginId:FE,key:IE,value:i});return}let o=An(a);e.images.set(o,a),t.fills=[{type:`IMAGE`,imageHash:o,imageScaleMode:tD(Z(r,`object-fit`))??`FILL`,color:Me,opacity:1,visible:!0}]}function iD(e,t,n,r){VE(t,r),$E(t,r),eD(t,r);let i=zE(r,`background-color`);i.length>0&&(t.fills=i),rD(e,t,n,r);let a=kE(HE(r),UE(r)?.toString());if(a.length>0){let e=GE(r,a[0].weight);e.length>0&&(a[0].dashPattern=e,t.dashPattern=e),t.strokes=a,KE(t,r,a[0])}let o=NE(Z(r,`box-shadow`));o.length>0&&(t.effects=o);let s=EE(Z(r,`opacity`));s!==null&&(t.opacity=s),qE(t,r);let c=Z(r,`overflow`);(c===`hidden`||c===`clip`)&&(t.clipsContent=!0);let l=XE(Z(r,`align-self`));l!==`AUTO`&&(t.layoutAlignSelf=l);let u=Z(r,`display`);(u===`flex`||u===`inline-flex`)&&(t.layoutMode=Z(r,`flex-direction`)===`column`?`VERTICAL`:`HORIZONTAL`,t.primaryAxisAlign=JE(Z(r,`justify-content`)),t.counterAxisAlign=YE(Z(r,`align-items`)),t.layoutWrap=Z(r,`flex-wrap`)===`wrap`?`WRAP`:`NO_WRAP`,QE(t,r))}function aD(e,t){VE(e,t),$E(e,t);let n=zE(t,`color`);n.length>0&&(e.fills=n);let r=EE(Z(t,`font-size`));r!==null&&(e.fontSize=r);let i=EE(Z(t,`font-weight`));i!==null&&(e.fontWeight=i);let a=EE(Z(t,`line-height`));a!==null&&(e.lineHeight=a);let o=EE(Z(t,`letter-spacing`));o!==null&&(e.letterSpacing=o);let s=EE(Z(t,`opacity`));s!==null&&(e.opacity=s);let c=NE(Z(t,`text-shadow`));c.length>0&&(e.effects=c);let l=Z(t,`font-family`);l&&(e.fontFamily=l.split(`,`)[0]?.replaceAll(`"`,``).trim()||e.fontFamily),e.italic=Z(t,`font-style`)===`italic`;let u=Z(t,`text-align`)?.toUpperCase();(u===`CENTER`||u===`RIGHT`||u===`JUSTIFIED`)&&(e.textAlignHorizontal=u);let d=Z(t,`text-decoration-line`);d===`underline`&&(e.textDecoration=`UNDERLINE`),d===`line-through`&&(e.textDecoration=`STRIKETHROUGH`);let f=ZE(Z(t,`text-transform`));f!==`ORIGINAL`&&(e.textCase=f),Z(t,`white-space`)===`nowrap`&&(e.maxLines=1)}function oD(e,t,n,r){let i=e.createNode(`TEXT`,t,{name:n.slice(0,32)||`Text`,text:n,width:Math.max(n.length*8,1),height:20});return aD(i,r),i}function sD(e){return`aspect-ratio.background-color.border-color.border-style.border-width.border-top-style.border-top-width.border-right-style.border-right-width.border-bottom-style.border-bottom-width.border-left-style.border-left-width.border-radius.box-shadow.display.height.padding.padding-top.padding-right.padding-bottom.padding-left.padding-block.padding-inline.width.min-width.max-width.min-height.max-height.object-fit.overflow.position.top.right.bottom.left.flex-wrap.align-self`.split(`.`).some(t=>Z(e,t)!==void 0)}function cD(e,t,n){let r=PE(n);if(RE(n)&&!sD(r)&&n.children.every(e=>e.type===`text`))return oD(e,t,LE(n),r);let i=e.createNode(`FRAME`,t,{name:n.attrs.id||n.attrs.class||n.tagName,clipsContent:!1});iD(e,i,n,r);for(let t of n.children)lD(e,i.id,t,r);return i}function lD(e,t,n,r={}){return n.type===`text`?n.text.trim().length===0?null:oD(e,t,n.text,r):cD(e,t,n)}function uD(e,t){let n=t.getChildren(e.id);n.length!==0&&(e.width=Math.max(...n.map(e=>e.x+e.width)),e.height=Math.max(...n.map(e=>e.y+e.height)))}function dD(e,t={}){let n=new Pt,r=n.getPages().find(e=>e.type===`CANVAS`)??n.addPage(`DesignDOM`);r.name=t.pageName??`DesignDOM`;for(let t of e.children)lD(n,r.id,t);return uD(r,n),n}function fD(e){return yE({sandbox:`iframe`,...e})}function pD(e){if(e)return e;if(typeof document>`u`)throw TypeError(`Browser DOM/CSS helpers require a DOM document`);return document}function mD(e,t){let n=t.defaultView?.DOMParser;if(!n)throw TypeError(`Browser DOM/CSS helpers require DOMParser`);let r=new n().parseFromString(e,`text/html`),i=Array.from(r.querySelectorAll(`style`)).map(e=>e.textContent?e.textContent.trim():``).filter(e=>!!e);return i.length>0?i.join(`
`):void 0}async function hD(e,t={}){t.signal?.throwIfAborted();let n=pD(t.document),r=fD({...t,document:n}),i=r.parseHTML(e),a=KT(mD(e,n),t.cssText);return r.computeStyles(i,a,t.compute)}async function gD(e,t={}){let n=await hD(e,t);t.signal?.throwIfAborted();let r=dD(n,t);return t.signal?.throwIfAborted(),r}var _D={chatInitializationFailed:vn(`Could not initialize chat: {error}`),linkCopied:`Link copied to clipboard.`,clipboardMissingDesignData:`Clipboard does not contain design data.`,clipboardAccessBlocked:`Clipboard access is blocked in this browser context.`,copiedAs:vn(`Copied as {format}.`),nodeID:`node ID`,nodeIDs:`node IDs`,xPath:`XPath`,xPaths:`XPaths`,pngClipboardUnavailable:`PNG clipboard export is not available in this browser.`,openFileFailed:vn(`Could not open “{name}”: {error}`),importedDOMCSS:`Imported DOM/CSS document.`,importDOMCSSFailed:vn(`Could not import DOM/CSS: {error}`),openDOMCSSFailed:vn(`Could not open DOM/CSS file: {error}`),vectorizeCredentialRequired:vn(`Add a {provider} API key in Settings → Media.`),vectorizeImageMissing:`Image data is missing for this layer.`,vectorizingImage:`Vectorizing image…`,imageConvertedToVectors:`Image converted to vectors.`,vectorizeCredentialFailed:vn(`{error}. Update it in Settings → Media.`),vectorizeFailed:vn(`{provider} could not vectorize this image: {error}`),operationFailed:vn(`Operation failed: {error}`),storageConnected:`Connected. Storage namespace is ready.`,storageConnectionFailed:vn(`Could not connect to storage: {error}`),deepLinkLocateFile:vn(`Locate “{file}” to follow this link.`),deepLinkPickerDismissed:`Link cancelled: no file was chosen.`,deepLinkCancelled:vn(`Link cancelled: expected a file ending in “{file}”.`),deepLinkNodeNotFound:vn(`Node “{node}” was not found in “{file}”.`),openQueuedFilesFailed:vn(`Could not open the files handed to OpenPencil: {error}`)},vD={de:()=>m(()=>import(`./de-BM_qfvV8.js`),[]),es:()=>m(()=>import(`./es-BUaGYNMH.js`),[]),fr:()=>m(()=>import(`./fr-DQyn4nG2.js`),[]),it:()=>m(()=>import(`./it-BXFHwWft.js`),[]),ja:()=>m(()=>import(`./ja-CybkYF_v.js`),[]),pl:()=>m(()=>import(`./pl-DNiC-cpc.js`),[]),ru:()=>m(()=>import(`./ru-FgEUw-E9.js`),[]),"zh-CN":()=>m(()=>import(`./zh-cn-dDQ_jSxy.js`),[])},yD=_n(gn,{baseLocale:`en`,async get(e){return e===`en`?{}:{notifications:(await vD[e]()).default}}})(`notifications`,_D);function bD(){return Gb(yD)}function xD(e){return e instanceof Error?e.message:String(e)}function SD(e){return e.name.replace(/\.(html?|xhtml)$/i,``)}function CD({editor:e,state:t,setDocumentSource:n,fitCurrentPageToViewport:r,preparationController:i}){async function a(n,i,a){await UT();let o=i.documentName??`DOM Import`;a.update({phase:`decoding`,detail:o});let s=await gD(n,{cssText:i.cssText,pageName:o,signal:a.signal});return a.signal.throwIfAborted(),await UT(),await Jw(e,s,a),t.documentName=o,await r(),e.requestRender(),o}async function o(e,t={}){let r=i.begin({kind:`dom-import`,subject:t.documentName??`DOM Import`}),o=!1;try{n(`${await a(e,t,r)}.html`,`html`),hn.info(yD.get().importedDOMCSS),o=!0}catch(e){if(r.signal.aborted)throw e;let t=mn(e);throw r.fail({code:`decode-failed`,message:xD(e),retryable:t.retryable??!0}),ln({operation:`import`,format:`dom-css`,...t,retryable:t.retryable}),console.error(`Failed to import DOM/CSS:`,e),hn.error(yD.get().importDOMCSSFailed({error:xD(e)})),e}finally{o&&r.complete()}}async function s(e,t={}){let r=t.preparation??i.begin({kind:`dom-import`,subject:e.name}),o=t.preparation===void 0,s=!1;try{await a(await e.text(),{cssText:t.cssText,documentName:SD(e)},r),n(e.name,`html`,t.handle,t.path),s=!0}catch(e){if(r.signal.aborted||!o)throw e;let t=mn(e);r.fail({code:`decode-failed`,message:xD(e),retryable:t.retryable??!0}),ln({operation:`open`,format:`dom-css`,...t,retryable:t.retryable}),console.error(`Failed to open DOM/CSS file:`,e),hn.error(yD.get().openDOMCSSFailed({error:xD(e)}))}finally{o&&s&&r.complete()}}return{openDOMFile:s,importDOMText:o}}async function wD({documentName:e,filePath:t,fileHandle:n,signal:r}){if(r?.throwIfAborted(),t&&H()){let{readFile:n}=await m(async()=>{let{readFile:e}=await import(`./dist-js-DJskp-xP.js`);return{readFile:e}},__vite__mapDeps([19,10,20])),i=await n(t);r?.throwIfAborted();let a=new Blob([i]);return AS(new File([a],`${e}.fig`),{populate:`first-page`,signal:r})}if(n){let e=await n.getFile();return r?.throwIfAborted(),AS(e,{populate:`first-page`,signal:r})}return null}function TD(e){return{viewport:{panX:e.panX,panY:e.panY,zoom:e.zoom},pageId:e.currentPageId}}function ED(e,t,n){e.clearSelection(),e.graph.getNode(n.pageId)?t.currentPageId=n.pageId:t.currentPageId=e.graph.getPages()[0]?.id??e.graph.rootId,t.panX=n.viewport.panX,t.panY=n.viewport.panY,t.zoom=n.viewport.zoom}function DD({editor:e,state:t,setDocumentSource:n,fitCurrentPageToViewport:r,preparationController:i}){async function a(a,o,s){let c=i.begin({kind:`document-open`,subject:a.name}),l=!1;try{c.update({phase:`reading`,detail:a.name}),await UT(),c.update({phase:`decoding`,detail:a.name});let i=await KC(a,c.signal);await UT(),c.update({phase:`materializing`,detail:a.name}),await Jw(e,i,c),t.documentName=a.name.replace(/\.fig$/i,``),n(a.name,`fig`,o,s),await r(),c.update({phase:`preparing-render`,detail:t.documentName}),e.requestRender(),l=!0}catch(e){if(c.signal.aborted)return;let t=mn(e);c.fail({code:`decode-failed`,message:e instanceof Error?e.message:String(e),retryable:t.retryable??!0}),ln({operation:`open`,format:`fig`,...t,retryable:t.retryable}),console.error(`Failed to open .fig file:`,e),hn.error(yD.get().openFileFailed({name:a.name,error:e instanceof Error?e.message:String(e)}))}finally{l&&c.complete()}}return{openFigFile:a}}function OD({editor:e,state:t,getFilePath:n,getFileHandle:r,setSavedVersion:i,preparationController:a}){async function o(){let o=a.begin({kind:`document-reload`,subject:t.documentName}),s=!1;try{let a=TD(t);o.update({phase:`reading`,detail:t.documentName});let c=await wD({documentName:t.documentName,filePath:n(),fileHandle:r(),signal:o.signal});if(!c){s=!0;return}await Jw(e,c,o),ED(e,t,a),e.requestRender(),i(t.sceneVersion),s=!0}catch(e){if(o.signal.aborted)return;let n=mn(e);o.fail({code:`decode-failed`,message:e instanceof Error?e.message:String(e),retryable:n.retryable??!0}),ln({operation:`open`,format:`fig`,...n,retryable:n.retryable}),hn.error(yD.get().openFileFailed({name:t.documentName,error:e instanceof Error?e.message:String(e)}))}finally{s&&o.complete()}}return{reloadFromDisk:o}}function kD({state:e,getSavedVersion:t,hasWritableSource:n,saveCurrentDocument:r}){let i=null,a=null,o=!1;function s(r){return r>t()&&e.autosaveEnabled&&n()}async function c(){for(;i!==null;){if(o)return;let e=i;i=null,s(e)&&await r(e)}}function l(e){console.warn(`Autosave failed:`,e)}function u(e){return o||!s(e)?Promise.resolve():(i=Math.max(i??e,e),a||=c().finally(()=>{a=null,!o&&i!==null&&u(i).catch(l)}),a)}let d=ne(()=>e.sceneVersion,e=>{u(e).catch(l)},{debounce:3e3});return{requestSave:u,disposeAutosave(){o=!0,i=null,d()}}}function AD(e){let t=A(0),n=A(0),r=D(()=>t.value!==n.value),i=()=>{t.value++},a=[e.onEditorEvent(`node:created`,i),e.onEditorEvent(`node:updated`,i),e.onEditorEvent(`node:deleted`,i),e.onEditorEvent(`node:reparented`,i),e.onEditorEvent(`node:reordered`,i),e.onEditorEvent(`graph:replaced`,i),e.onEditorEvent(`history:changed`,i)];return{hasUnsavedChanges:()=>r.value,capture:()=>t.value,markSaved:(e=t.value)=>{n.value=e},markChanged:i,dispose:()=>{for(let e of a)e()}}}function jD(e){return e.split(/[\\/]/).pop()?.replace(/\.fig$/i,``)??`Untitled`}function MD(e){return e.split(/[\\/]/).pop()??`Untitled.fig`}function ND(e,t){return t===`fig`?e:e.replace(/\.[^.]+$/i,`.fig`)}async function PD(){let{save:e}=await m(async()=>{let{save:e}=await import(`./dist-js-DF8XeBgD.js`);return{save:e}},__vite__mapDeps([21,16,10]));return e({defaultPath:`Untitled.fig`,filters:[{name:`Figma file`,extensions:[`fig`]}]})}async function FD(){try{return await DT({suggestedName:`Untitled.fig`,types:[{description:`Figma file`,accept:{"application/octet-stream":[`.fig`]}}]})}catch(e){if(e.name===`AbortError`)return null;throw e}}function ID(e,t){return(t?e:e.filter(e=>!e.tombstoned)).sort((e,t)=>t.updatedAt.localeCompare(e.updatedAt))}function LD(e,t,n){return{id:e.id,providerId:e.providerId,name:e.name,updatedAt:e.updatedAt??new Date().toISOString(),revision:e.revision??(t?t.revision+1:1),syncStatus:e.syncStatus??`pending`,lastSyncedAt:t?.lastSyncedAt??null,lastSyncError:e.syncStatus===`synced`?null:t?.lastSyncError??null,tombstoned:t?.tombstoned??!1,hasFig:!0,hasThumb:n,figSize:e.figBytes.byteLength,lastOpenedAt:t?.lastOpenedAt}}function RD(e,t){return{id:e.id,providerId:e.providerId,name:e.name,updatedAt:e.updatedAt,revision:e.revision??t?.revision??1,syncStatus:e.syncStatus,lastSyncedAt:e.lastSyncedAt,lastSyncError:e.lastSyncError,tombstoned:!1,hasFig:e.hasFig??t?.hasFig??!1,hasThumb:e.hasThumb??t?.hasThumb??!1}}var zD=on({name:cn.localCanvas,version:1,callbacks:{upgrade(e){e.objectStoreNames.contains(`meta`)||e.createObjectStore(`meta`,{keyPath:`id`}),e.objectStoreNames.contains(`fig`)||e.createObjectStore(`fig`),e.objectStoreNames.contains(`thumb`)||e.createObjectStore(`thumb`)}}});async function BD(e){return e?e instanceof ArrayBuffer?new Uint8Array(e):e instanceof Uint8Array?Uint8Array.from(e):new Uint8Array(await e.arrayBuffer()):null}function VD(){return sn(zD)}function HD(){let e=VD();async function t(t,n){return BD(await(await e).get(t,n))}return{async listMetas(t=!1){return ID(await(await e).getAll(`meta`),t)},async getMeta(t){return await(await e).get(`meta`,t)??null},async readFig(e){return t(`fig`,e)},async readThumb(e){return t(`thumb`,e)},async writeCanvas(t){let n=(await e).transaction([`meta`,`fig`,`thumb`],`readwrite`),r=n.objectStore(`fig`),i=n.objectStore(`thumb`),a=n.objectStore(`meta`),o=await a.get(t.id)??null,s=o?.hasThumb??!1;await r.put(Uint8Array.from(t.figBytes),t.id),t.thumbBytes!=null&&(t.thumbBytes.byteLength>0?(await i.put(Uint8Array.from(t.thumbBytes),t.id),s=!0):(await i.delete(t.id),s=!1));let c=LD(t,o,s);return await a.put(c),await n.done,c},async upsertIndexMeta(t){let n=(await e).transaction(`meta`,`readwrite`),r=n.objectStore(`meta`),i=RD(t,await r.get(t.id)??null);return await r.put(i),await n.done,i},async writeThumb(t,n){let r=(await e).transaction([`meta`,`thumb`],`readwrite`),i=r.objectStore(`meta`),a=await i.get(t);if(!a)return await r.done,null;await r.objectStore(`thumb`).put(Uint8Array.from(n),t);let o={...a,hasThumb:!0};return await i.put(o),await r.done,o},async updateMeta(t,n,r){let i=(await e).transaction(`meta`,`readwrite`),a=i.objectStore(`meta`),o=await a.get(t);if(!o||r?.expectedRevision!=null&&o.revision!==r.expectedRevision)return await i.done,null;let s={...o,...n,id:o.id};return await a.put(s),await i.done,s},async tombstone(e){return this.updateMeta(e,{tombstoned:!0,syncStatus:`pending`,updatedAt:new Date().toISOString()})},async clearFig(t){let n=(await e).transaction([`meta`,`fig`],`readwrite`),r=n.objectStore(`meta`),i=await r.get(t);if(!i)return await n.done,null;await n.objectStore(`fig`).delete(t);let a={...i,hasFig:!1,figSize:0};return await r.put(a),await n.done,a},async remove(t){let n=(await e).transaction([`meta`,`fig`,`thumb`],`readwrite`);await Promise.all([n.objectStore(`meta`).delete(t),n.objectStore(`fig`).delete(t),n.objectStore(`thumb`).delete(t)]),await n.done},async clearAll(){let t=(await e).transaction([`meta`,`fig`,`thumb`],`readwrite`);await Promise.all([t.objectStore(`meta`).clear(),t.objectStore(`fig`).clear(),t.objectStore(`thumb`).clear()]),await t.done}}}function UD(){let e=new Map,t=new Map,n=new Map;return{async listMetas(t=!1){return ID([...e.values()],t)},async getMeta(t){return e.get(t)??null},async readFig(e){let n=t.get(e);return n?new Uint8Array(n):null},async readThumb(e){let t=n.get(e);return t?new Uint8Array(t):null},async writeCanvas(r){let i=e.get(r.id)??null;t.set(r.id,new Uint8Array(r.figBytes));let a=i?.hasThumb??!1;r.thumbBytes!=null&&(r.thumbBytes.byteLength>0?(n.set(r.id,new Uint8Array(r.thumbBytes)),a=!0):(n.delete(r.id),a=!1));let o=LD(r,i,a);return e.set(r.id,o),o},async upsertIndexMeta(t){let n=RD(t,e.get(t.id)??null);return e.set(t.id,n),n},async writeThumb(t,r){let i=e.get(t);if(!i)return null;n.set(t,new Uint8Array(r));let a={...i,hasThumb:!0};return e.set(t,a),a},async updateMeta(t,n,r){let i=e.get(t);if(!i||r?.expectedRevision!=null&&i.revision!==r.expectedRevision)return null;let a={...i,...n,id:i.id};return e.set(t,a),a},async tombstone(t){let n=e.get(t);if(!n)return null;let r={...n,tombstoned:!0,syncStatus:`pending`,updatedAt:new Date().toISOString()};return e.set(t,r),r},async clearFig(n){let r=e.get(n);if(!r)return null;t.delete(n);let i={...r,hasFig:!1,figSize:0};return e.set(n,i),i},async remove(r){e.delete(r),t.delete(r),n.delete(r)},async clearAll(){e.clear(),t.clear(),n.clear()}}}var WD=null;function GD(){if(WD)return WD;try{if(typeof indexedDB<`u`)return WD=HD(),WD}catch(e){console.warn(`[Storage] IndexedDB local store unavailable, using memory:`,e)}return WD=UD(),WD}var KD=500*1024*1024;async function qD(e=new Set,t=KD){let n=GD(),r=await n.listMetas(!0),i=0,a=[];for(let t of r){if(!t.hasFig)continue;let r=t.figSize;r??(r=(await n.readFig(t.id))?.byteLength??0,await n.updateMeta(t.id,{figSize:r})),i+=r,!(t.tombstoned||t.syncStatus!==`synced`||e.has(t.id))&&a.push({id:t.id,size:r,lastUsed:t.lastOpenedAt??t.lastSyncedAt??t.updatedAt})}if(i<=t)return 0;a.sort((e,t)=>e.lastUsed.localeCompare(t.lastUsed));let o=0;for(let e of a){if(i<=t)break;await n.clearFig(e.id),i-=e.size,o+=1}return o>0&&console.warn(`[Storage] Evicted ${o} cached fig(s) to fit cache budget`),o}var JD=class{#e;constructor(e){let t=e.map(e=>[e.id,e]);if(new Set(t.map(([e])=>e)).size!==t.length)throw Error(`Storage provider IDs must be unique`);this.#e=new Map(t)}list(){return[...this.#e.values()]}get(e){let t=this.#e.get(e);if(!t)throw Error(`Unknown storage provider: ${e}`);return t}createAdapter(e,t){let n=this.get(e),r=new Set(n.credentialFields.map(e=>e.id)),i=t.profileId??`default`;return n.createAdapter({preferences:t.preferences,resolveCredential(n){return r.has(n)?t.credentials.resolve(un(e,n,i)):Promise.reject(Error(`Unknown credential field for ${e}: ${n}`))}})}};function YD(e){return e}var XD=`open_pencil_storage`,ZD=`${XD}/.openpencil-namespace`,QD=`${XD}/canvases/`;function $D(e){return`${QD}${e}.fig`}function eO(e){return`${QD}${e}.meta.json`}function tO(e){return`${QD}${e}.thumb.jpg`}function nO(e){if(!e.startsWith(QD)||!e.endsWith(`.fig`))return null;let t=e.slice(QD.length,-4);return!t||t.includes(`/`)?null:t}var rO=JSON.stringify({app:`open-pencil`,version:1}),iO=new TextEncoder,aO={appstream2:`appstream`,cloudhsmv2:`cloudhsm`,email:`ses`,marketplace:`aws-marketplace`,mobile:`AWSMobileHubService`,pinpoint:`mobiletargeting`,queue:`sqs`,"git-codecommit":`codecommit`,"mturk-requester-sandbox":`mturk-requester`,"personalize-runtime":`personalize`},oO=new Set([`authorization`,`content-type`,`content-length`,`user-agent`,`presigned-expires`,`expect`,`x-amzn-trace-id`,`range`,`connection`]),sO=class{constructor({accessKeyId:e,secretAccessKey:t,sessionToken:n,service:r,region:i,cache:a,retries:o,initRetryMs:s}){if(e==null)throw TypeError(`accessKeyId is a required option`);if(t==null)throw TypeError(`secretAccessKey is a required option`);this.accessKeyId=e,this.secretAccessKey=t,this.sessionToken=n,this.service=r,this.region=i,this.cache=a||new Map,this.retries=o??10,this.initRetryMs=s||50}async sign(e,t){if(e instanceof Request){let{method:n,url:r,headers:i,body:a}=e;t=Object.assign({method:n,url:r,headers:i},t),t.body==null&&i.has(`Content-Type`)&&(t.body=a!=null&&i.has(`X-Amz-Content-Sha256`)?a:await e.clone().arrayBuffer()),e=r}let n=new cO(Object.assign({url:e.toString()},t,this,t&&t.aws)),r=Object.assign({},t,await n.sign());delete r.aws;try{return new Request(r.url.toString(),r)}catch(e){if(e instanceof TypeError)return new Request(r.url.toString(),Object.assign({duplex:`half`},r));throw e}}async fetch(e,t){for(let n=0;n<=this.retries;n++){let r=fetch(await this.sign(e,t));if(n===this.retries)return r;let i=await r;if(i.status<500&&i.status!==429)return i;await new Promise(e=>setTimeout(e,Math.random()*this.initRetryMs*2**n))}throw Error(`An unknown error occurred, ensure retries is not negative`)}},cO=class{constructor({method:e,url:t,headers:n,body:r,accessKeyId:i,secretAccessKey:a,sessionToken:o,service:s,region:c,cache:l,datetime:u,signQuery:d,appendSessionToken:f,allHeaders:p,singleEncode:m}){if(t==null)throw TypeError(`url is a required option`);if(i==null)throw TypeError(`accessKeyId is a required option`);if(a==null)throw TypeError(`secretAccessKey is a required option`);this.method=e||(r?`POST`:`GET`),this.url=new URL(t),this.headers=new Headers(n||{}),this.body=r,this.accessKeyId=i,this.secretAccessKey=a,this.sessionToken=o;let h,g;(!s||!c)&&([h,g]=mO(this.url,this.headers)),this.service=s||h||``,this.region=c||g||`us-east-1`,this.cache=l||new Map,this.datetime=u||new Date().toISOString().replace(/[:-]|\.\d{3}/g,``),this.signQuery=d,this.appendSessionToken=f||this.service===`iotdevicegateway`,this.headers.delete(`Host`),this.service===`s3`&&!this.signQuery&&!this.headers.has(`X-Amz-Content-Sha256`)&&this.headers.set(`X-Amz-Content-Sha256`,`UNSIGNED-PAYLOAD`);let _=this.signQuery?this.url.searchParams:this.headers;if(_.set(`X-Amz-Date`,this.datetime),this.sessionToken&&!this.appendSessionToken&&_.set(`X-Amz-Security-Token`,this.sessionToken),this.signableHeaders=[`host`,...this.headers.keys()].filter(e=>p||!oO.has(e)).sort(),this.signedHeaders=this.signableHeaders.join(`;`),this.canonicalHeaders=this.signableHeaders.map(e=>e+`:`+(e===`host`?this.url.host:(this.headers.get(e)||``).replace(/\s+/g,` `))).join(`
`),this.credentialString=[this.datetime.slice(0,8),this.region,this.service,`aws4_request`].join(`/`),this.signQuery&&(this.service===`s3`&&!_.has(`X-Amz-Expires`)&&_.set(`X-Amz-Expires`,`86400`),_.set(`X-Amz-Algorithm`,`AWS4-HMAC-SHA256`),_.set(`X-Amz-Credential`,this.accessKeyId+`/`+this.credentialString),_.set(`X-Amz-SignedHeaders`,this.signedHeaders)),this.service===`s3`)try{this.encodedPath=decodeURIComponent(this.url.pathname.replace(/\+/g,` `))}catch{this.encodedPath=this.url.pathname}else this.encodedPath=this.url.pathname.replace(/\/+/g,`/`);m||(this.encodedPath=encodeURIComponent(this.encodedPath).replace(/%2F/g,`/`)),this.encodedPath=pO(this.encodedPath);let v=new Set;this.encodedSearch=[...this.url.searchParams].filter(([e])=>{if(!e)return!1;if(this.service===`s3`){if(v.has(e))return!1;v.add(e)}return!0}).map(e=>e.map(e=>pO(encodeURIComponent(e)))).sort(([e,t],[n,r])=>e<n?-1:e>n?1:t<r?-1:+(t>r)).map(e=>e.join(`=`)).join(`&`)}async sign(){return this.signQuery?(this.url.searchParams.set(`X-Amz-Signature`,await this.signature()),this.sessionToken&&this.appendSessionToken&&this.url.searchParams.set(`X-Amz-Security-Token`,this.sessionToken)):this.headers.set(`Authorization`,await this.authHeader()),{method:this.method,url:this.url,headers:this.headers,body:this.body}}async authHeader(){return[`AWS4-HMAC-SHA256 Credential=`+this.accessKeyId+`/`+this.credentialString,`SignedHeaders=`+this.signedHeaders,`Signature=`+await this.signature()].join(`, `)}async signature(){let e=this.datetime.slice(0,8),t=[this.secretAccessKey,e,this.region,this.service].join(),n=this.cache.get(t);return n||(n=await lO(await lO(await lO(await lO(`AWS4`+this.secretAccessKey,e),this.region),this.service),`aws4_request`),this.cache.set(t,n)),fO(await lO(n,await this.stringToSign()))}async stringToSign(){return[`AWS4-HMAC-SHA256`,this.datetime,this.credentialString,fO(await uO(await this.canonicalString()))].join(`
`)}async canonicalString(){return[this.method.toUpperCase(),this.encodedPath,this.encodedSearch,this.canonicalHeaders+`
`,this.signedHeaders,await this.hexBodyHash()].join(`
`)}async hexBodyHash(){let e=this.headers.get(`X-Amz-Content-Sha256`)||(this.service===`s3`&&this.signQuery?`UNSIGNED-PAYLOAD`:null);if(e==null){if(this.body&&typeof this.body!=`string`&&!(`byteLength`in this.body))throw Error(`body must be a string, ArrayBuffer or ArrayBufferView, unless you include the X-Amz-Content-Sha256 header`);e=fO(await uO(this.body||``))}return e}};async function lO(e,t){let n=await crypto.subtle.importKey(`raw`,typeof e==`string`?iO.encode(e):e,{name:`HMAC`,hash:{name:`SHA-256`}},!1,[`sign`]);return crypto.subtle.sign(`HMAC`,n,iO.encode(t))}async function uO(e){return crypto.subtle.digest(`SHA-256`,typeof e==`string`?iO.encode(e):e)}var dO=[`0`,`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`a`,`b`,`c`,`d`,`e`,`f`];function fO(e){let t=new Uint8Array(e),n=``;for(let e=0;e<t.length;e++){let r=t[e];n+=dO[r>>>4&15],n+=dO[r&15]}return n}function pO(e){return e.replace(/[!'()*]/g,e=>`%`+e.charCodeAt(0).toString(16).toUpperCase())}function mO(e,t){let{hostname:n,pathname:r}=e;if(n.endsWith(`.on.aws`)){let e=n.match(/^[^.]{1,63}\.lambda-url\.([^.]{1,63})\.on\.aws$/);return e==null?[``,``]:[`lambda`,e[1]||``]}if(n.endsWith(`.r2.cloudflarestorage.com`))return[`s3`,`auto`];if(n.endsWith(`.backblazeb2.com`)){let e=n.match(/^(?:[^.]{1,63}\.)?s3\.([^.]{1,63})\.backblazeb2\.com$/);return e==null?[``,``]:[`s3`,e[1]||``]}let i=n.replace(`dualstack.`,``).match(/([^.]{1,63})\.(?:([^.]{0,63})\.)?amazonaws\.com(?:\.cn)?$/),a=i&&i[1]||``,o=i&&i[2];if(o===`us-gov`)o=`us-gov-west-1`;else if(o===`s3`||o===`s3-accelerate`)o=`us-east-1`,a=`s3`;else if(a===`iot`)a=n.startsWith(`iot.`)?`execute-api`:n.startsWith(`data.jobs.iot.`)?`iot-jobs-data`:r===`/mqtt`?`iotdevicegateway`:`iotdata`;else if(a===`autoscaling`){let e=(t.get(`X-Amz-Target`)||``).split(`.`)[0];e===`AnyScaleFrontendService`?a=`application-autoscaling`:e===`AnyScaleScalingPlannerFrontendService`&&(a=`autoscaling-plans`)}else o==null&&a.startsWith(`s3-`)?(o=a.slice(3).replace(/^fips-|^external-1/,``),a=`s3`):a.endsWith(`-fips`)?a=a.slice(0,-5):o&&/-\d$/.test(a)&&!/-\d$/.test(o)&&([a,o]=[o,a]);return[aO[a]||a,o||``]}var hO=2e4;function gO(e){let t=AbortSignal.timeout(hO);return{signal:e?AbortSignal.any([e,t]):t,timedOut:()=>t.aborted}}async function _O(e,t){let{signal:n,timedOut:r}=gO(t?.signal);try{if(H()){let{tauriFetch:r}=await m(async()=>{let{tauriFetch:e}=await import(`./http-CB2UyfyP.js`);return{tauriFetch:e}},__vite__mapDeps([22,23,4]));return await r(e,{...t,signal:n})}return e instanceof Request?await fetch(new Request(e,{signal:n})):await fetch(e,{...t,signal:n})}catch(e){throw r()?Error(`Storage request timed out. Check the endpoint URL, network, and bucket CORS settings.`):e}}function vO(e,t=`us-east-1`){let n=e.trim();if(!n)return t;let r;try{let e=n.startsWith(`http://`)||n.startsWith(`https://`)?n:`https://${n}`;r=new URL(e).hostname.toLowerCase()}catch{return t}let i=r.match(/^s3\.([a-z0-9-]+)\.backblazeb2\.com$/);if(i?.[1])return i[1];let a=r.match(/^s3[.-]([a-z0-9-]+)\.amazonaws\.com$/);if(a?.[1]&&a[1]!==`dualstack`&&a[1]!==`control`)return a[1];let o=r.match(/\.s3[.-]([a-z0-9-]+)\.amazonaws\.com$/);return o?.[1]&&o[1]!==`dualstack`?o[1]:r.endsWith(`.r2.cloudflarestorage.com`)||r===`r2.cloudflarestorage.com`?`auto`:t}var yO=ht();function bO(e){try{return new yO.DOMParser({onError:(e,t)=>{if(e!==`warning`)throw Error(t)}}).parseFromString(e,`application/xml`)}catch{return null}}function xO(e,t){return Array.from(e.getElementsByTagNameNS(`*`,t))}function SO(e,t){return xO(e,t)[0]?.textContent??null}function CO(e,t){let n=bO(e),r=n?SO(n,`Code`):null;return{message:(n?SO(n,`Message`):null)??(e.trim()?e.trim().slice(0,200):`S3 request failed with status ${t}`),code:r}}function wO(e){let t=bO(e);return t?{objects:xO(t,`Contents`).flatMap(e=>{let t=SO(e,`Key`);if(!t)return[];let n=SO(e,`Size`),r=n?Number(n):null;return[{key:t,lastModified:SO(e,`LastModified`),size:Number.isFinite(r)?r:null}]}),isTruncated:SO(t,`IsTruncated`)?.trim().toLowerCase()===`true`,nextContinuationToken:SO(t,`NextContinuationToken`)}:{objects:[],isTruncated:!1,nextContinuationToken:null}}function TO(e){return e.region?.trim()||vO(e.endpoint)}var EO=class extends Error{status;code;constructor(e,t,n=null){super(t),this.name=`S3HttpError`,this.status=e,this.code=n}};function DO(e){let t=e.trim().replace(/\/+$/,``);if(!t)throw Error(`S3 endpoint is required`);return t.startsWith(`http://`)||t.startsWith(`https://`)?t:`https://${t}`}function OO(e,t){let n=DO(e.endpoint),r=t.split(`/`).map(e=>encodeURIComponent(e)).join(`/`);return`${n}/${encodeURIComponent(e.bucket)}/${r}`}function kO(e){return new sO({accessKeyId:e.accessKeyId,secretAccessKey:e.secretAccessKey,region:TO(e),service:`s3`})}async function AO(e){return CO(await e.text().catch(()=>``),e.status)}function jO(e){return e==null?null:typeof e==`string`?new TextEncoder().encode(e).byteLength:e instanceof ArrayBuffer||ArrayBuffer.isView(e)?e.byteLength:typeof Blob<`u`&&e instanceof Blob?e.size:null}function MO(e,t,n,r,i){return new Promise((a,o)=>{let s=new XMLHttpRequest;s.open(t,e),n.forEach((e,t)=>{/^(content-length|host)$/i.test(t)||s.setRequestHeader(t,e)}),s.responseType=`text`,s.upload.onprogress=e=>{i({sentBytes:e.loaded,totalBytes:e.lengthComputable?e.total:null})},s.onload=()=>a(new Response(s.responseText,{status:s.status})),s.onerror=()=>o(TypeError(`Failed to fetch`)),s.send(r)})}async function NO(e,t,n={},r){let i=kO(e),a=jO(n.body??null),o=new Headers(n.headers);a!=null&&!o.has(`Content-Length`)&&o.set(`Content-Length`,String(a));let s=await i.sign(t,{...n,headers:o,credentials:`omit`}),c;try{c=r&&typeof XMLHttpRequest<`u`?await MO(s.url,s.method,s.headers,n.body??void 0,r):await _O(s.url,{method:s.method,headers:s.headers,body:n.body??void 0,credentials:`omit`,signal:n.signal})}catch(e){let{CloudCORSError:t,isLikelyCORSOrNetworkError:n,formatBrowserCORSHelpMessage:r}=await m(async()=>{let{CloudCORSError:e,isLikelyCORSOrNetworkError:t,formatBrowserCORSHelpMessage:n}=await import(`./cors-ca2EdqPy.js`);return{CloudCORSError:e,isLikelyCORSOrNetworkError:t,formatBrowserCORSHelpMessage:n}},__vite__mapDeps([24,25,3,26]));throw n(e)?new t(r()):e}if(c.ok||c.status===404)return c;let{message:l,code:u}=await AO(c);throw new EO(c.status,l,u)}async function PO(e,t){return(await NO(e,OO(e,t),{method:`HEAD`})).status!==404}async function FO(e,t){let n=await NO(e,OO(e,t),{method:`HEAD`});if(n.status===404)return null;let r=n.headers.get(`content-length`);if(r==null)return null;let i=Number(r);return Number.isSafeInteger(i)&&i>=0?i:null}async function IO(e,t,n,r){if(!Number.isSafeInteger(n)||n<0||!Number.isSafeInteger(r)||r<=n)throw Error(`Invalid S3 byte range`);let i=await NO(e,OO(e,t),{method:`GET`,headers:{Range:`bytes=${n}-${r-1}`}});if(i.status===404)return null;if(i.status!==206)throw Error(`Storage provider did not honor the thumbnail byte range`);return new Uint8Array(await i.arrayBuffer())}async function LO(e,t,n,r,i,a){let o=typeof n==`string`?new TextEncoder().encode(n):n,s=o.buffer.slice(o.byteOffset,o.byteOffset+o.byteLength),c={"Content-Type":r};a?.ifMatch&&(c[`If-Match`]=a.ifMatch),a?.ifNoneMatch&&(c[`If-None-Match`]=a.ifNoneMatch);let l=await NO(e,OO(e,t),{method:`PUT`,headers:c,body:s},i);if(!l.ok)throw new EO(l.status,`Failed to upload ${t}`)}async function RO(e,t){let n=await NO(e,OO(e,t),{method:`GET`});return n.status===404?{bytes:null,etag:null}:{bytes:new Uint8Array(await n.arrayBuffer()),etag:n.headers.get(`etag`)}}async function zO(e,t,n){if(n?.throwIfAborted(),!t||!e.body)return new Uint8Array(await e.arrayBuffer());let r=Number(e.headers.get(`content-length`)),i=Number.isFinite(r)&&r>0?r:null,a=e.body.getReader(),o=[],s=0;try{for(;;){let{done:e,value:r}=await a.read();if(n?.throwIfAborted(),e)break;o.push(r),s+=r.byteLength,t({receivedBytes:s,totalBytes:i})}}catch(e){throw await a.cancel().catch(()=>void 0),e}let c=new Uint8Array(s),l=0;for(let e of o)c.set(e,l),l+=e.byteLength;return c}async function BO(e,t,n,r){r?.throwIfAborted();let i=await NO(e,OO(e,t),{method:`GET`,signal:r});return i.status===404?null:zO(i,n,r)}async function VO(e,t){let n=await NO(e,OO(e,t),{method:`DELETE`});if(!n.ok&&n.status!==404)throw new EO(n.status,`Failed to delete ${t}`)}async function HO(e,t){let n=DO(e.endpoint),r=[],i=null;for(let a=0;a<50;a++){let o=new URLSearchParams({"list-type":`2`,prefix:t,"max-keys":`1000`});i&&o.set(`continuation-token`,i);let s=await NO(e,`${n}/${encodeURIComponent(e.bucket)}?${o.toString()}`,{method:`GET`});if(!s.ok)throw new EO(s.status,`Failed to list objects`);let c=wO(await s.text());if(r.push(...c.objects),!c.isTruncated||!c.nextContinuationToken)break;if(a===49)throw Error(`S3 listing exceeded the 50,000-object safety limit`);i=c.nextContinuationToken}return r}var UO=`endpoint`,WO=`bucket`,GO=`region`,KO=`access-key-id`,qO=`secret-access-key`;function JO(e,t){let n=e.preferences[t]?.trim();if(!n)throw Error(`S3 ${t} is required`);return n}async function YO(e){let[t,n]=await Promise.all([e.resolveCredential(KO),e.resolveCredential(qO)]);if(!t||!n)throw Error(`S3 credentials are required`);let r=e.preferences[GO]?.trim();return{endpoint:JO(e,UO),bucket:JO(e,WO),accessKeyId:t,secretAccessKey:n,...r?{region:r}:{}}}function XO(e,t){if(!e)return{metadata:t,authoritative:!1};try{let n=JSON.parse(new TextDecoder().decode(e)),r=typeof n.name==`string`&&n.name.trim()?n.name:null,i=typeof n.updatedAt==`string`&&n.updatedAt?n.updatedAt:null;return{metadata:{name:r??t.name,updatedAt:i??t.updatedAt},authoritative:r!==null&&i!==null}}catch{return{metadata:t,authoritative:!1}}}function ZO(e,t){return t?bn():e instanceof Error?e.message:String(e)}async function QO(e){if(!await PO(e,ZD))try{await LO(e,ZD,rO,`application/json`)}catch(e){throw e instanceof EO&&(e.status===403||e.status===401)?Error(`Cannot write to this bucket. Check access permissions and bucket name.`):e}}function $O(e){return{async testConnection(){let t=await YO(e);try{await QO(t),await HO(t,QD)}catch(e){let t=e instanceof Sn||!H()&&xn(e);return{ok:!1,message:ZO(e,t),corsApplied:!1,isCORSFailure:t,corsError:null}}return{ok:!0,message:`Connected. Storage namespace is ready.`,corsApplied:!1,isCORSFailure:!1,corsError:null}},async listDocuments(){let t=await YO(e),n=(await HO(t,QD)).map(e=>{let t=nO(e.key);return t?{id:t,lastModified:e.lastModified}:null}).filter(e=>e!==null),r=[];for(let e=0;e<n.length;e+=12){let i=n.slice(e,e+12);r.push(...await Promise.all(i.map(async({id:e,lastModified:n})=>{let r={name:e,updatedAt:n??new Date(0).toISOString()},{metadata:i,authoritative:a}=XO(await BO(t,eO(e)).catch(t=>(console.warn(`[Storage] Document metadata fetch failed:`,e,t),null)),r);return{id:e,...i,metadataAuthoritative:a}})))}return r.sort((e,t)=>t.updatedAt.localeCompare(e.updatedAt))},async getDocument(t,n,r){r?.throwIfAborted();let i=await YO(e);r?.throwIfAborted();let a=await BO(i,$D(t),n?e=>n({transferredBytes:e.receivedBytes,totalBytes:e.totalBytes}):void 0,r);if(!a)throw Error(`Document not found: ${t}`);return a},async putDocument(t,n,r,i){let a=await YO(e);await LO(a,$D(t),n,`application/octet-stream`,i?e=>i({transferredBytes:e.sentBytes,totalBytes:e.totalBytes}):void 0),await LO(a,eO(t),JSON.stringify({name:r.name,updatedAt:r.updatedAt||new Date().toISOString()}),`application/json`)},async getDocumentMetadata(t){let n=await BO(await YO(e),eO(t));if(!n)return null;let r=XO(n,{name:t,updatedAt:new Date(0).toISOString()});return r.authoritative?r.metadata:null},async deleteDocument(t){let n=await YO(e),r=(await Promise.allSettled([VO(n,$D(t)),VO(n,eO(t)),VO(n,tO(t))])).find(e=>e.status===`rejected`);if(r)throw r.reason},async getUsage(){let t=await HO(await YO(e),`${XD}/`);return{bytesUsed:t.reduce((e,t)=>e+(t.size??0),0),objectCount:t.length,documentCount:t.filter(e=>nO(e.key)).length}},async putThumbnail(t,n){await LO(await YO(e),tO(t),n,`image/jpeg`)},async getThumbnail(t){let n=await YO(e),r=$D(t),i=await FO(n,r);return i==null?null:Tu({size:i,async read(e,t){return await IO(n,r,e,t)??new Uint8Array}})},libraryObjects:{async getObject(t){return BO(await YO(e),t)},async getObjectValue(t){return RO(await YO(e),t)},async putObject(t,n,r,i){try{await LO(await YO(e),t,n,r,void 0,i)}catch(e){throw e instanceof EO&&(e.status===409||e.status===412)?Error(`Library revision conflict: latest revision has changed`):e}},async listObjects(t){return(await HO(await YO(e),t)).map(e=>({key:e.key,size:e.size,etag:null}))}}}}var ek=new JD([YD({id:`s3-compatible`,label:`S3 storage`,description:`AWS S3, Backblaze B2, Cloudflare R2, MinIO, and compatible storage`,preferenceFields:[{id:`endpoint`,label:`Endpoint`,kind:`url`,required:!0},{id:`bucket`,label:`Bucket`,kind:`text`,required:!0},{id:`region`,label:`Region`,kind:`text`}],credentialFields:[{id:`access-key-id`,label:`Access key ID`,required:!0},{id:`secret-access-key`,label:`Secret access key`,required:!0}],createAdapter:$O})]),tk=ie(`open-pencil:storage:provider`,`s3-compatible`),nk=ie(`open-pencil:storage:preferences`,{});function rk(e){return{...nk.value[e]}}function ik(e,t,n){if(!ek.get(e).preferenceFields.some(e=>e.id===t))throw Error(`Unknown preference field for ${e}: ${t}`);nk.value={...nk.value,[e]:{...nk.value[e],[t]:n.trim()}}}function ak(e){let t=ek.get(e),n=rk(e);return t.preferenceFields.every(e=>!e.required||!!n[e.id]?.trim())}function ok(e,t=`default`){return ek.get(e).credentialFields.map(n=>un(e,n.id,t))}async function sk(e,t=`default`){let n=ek.get(e),r=await Promise.all(n.credentialFields.map(async n=>{let r=await pn.manager.status(un(e,n.id,t));return[n.id,r]}));return Object.fromEntries(r)}function ck(e=tk.value,t=`default`){return ek.createAdapter(e,{preferences:rk(e),credentials:pn.resolver,profileId:t})}function lk(e,t,n){return e.filter(e=>e.canvasId!==t||e.type!==`putCanvas`||e.revision>=n)}function uk(){let e=new Uint8Array(8);return crypto.getRandomValues(e),[...e].map(e=>e.toString(16).padStart(2,`0`)).join(``)}var dk=`jobs`,fk=on({name:cn.outbox,version:1,callbacks:{upgrade(e){e.objectStoreNames.contains(dk)||e.createObjectStore(dk,{keyPath:`id`})}}});function pk(){return sn(fk)}function mk(e){return{id:e.id??uk(),canvasId:e.canvasId,type:e.type,revision:e.revision,createdAt:Date.now(),attempts:e.attempts??0,nextAttemptAt:e.nextAttemptAt??Date.now()}}function hk(e,t){let n=e;return t.type===`putCanvas`&&(n=lk(n,t.canvasId,t.revision)),n=n.filter(e=>!(e.canvasId===t.canvasId&&e.type===t.type&&e.type!==`putCanvas`)),[...n,t]}function gk(){let e=[];return{async list(){return[...e].sort((e,t)=>e.createdAt-t.createdAt)},async enqueue(t){let n=mk(t);return e=hk(e,n),n},async update(t){e=e.map(e=>e.id===t.id?t:e)},async remove(t){e=e.filter(e=>e.id!==t)},async clear(){e=[]}}}function _k(){let e=pk();return{async list(){return(await(await e).getAll(dk)).sort((e,t)=>e.createdAt-t.createdAt)},async enqueue(t){let n=mk(t),r=(await e).transaction(dk,`readwrite`),i=r.objectStore(dk),a=await i.getAll(),o=hk(a,n);for(let e of a)o.some(t=>t.id===e.id)||await i.delete(e.id);return await i.put(n),await r.done,n},async update(t){await(await e).put(dk,t)},async remove(t){await(await e).delete(dk,t)},async clear(){await(await e).clear(dk)}}}var vk=null;function yk(){if(vk)return vk;try{if(typeof indexedDB<`u`)return vk=_k(),vk}catch(e){console.warn(`[Storage] Outbox IDB unavailable, using memory:`,e)}return vk=gk(),vk}var bk=A(new Map);function xk(e,t){let n=new Map(bk.value);t==null?n.delete(e):n.set(e,Math.max(0,Math.min(1,t))),bk.value=n}var Sk=A(`idle`),Ck=A(null),wk=A(0);D(()=>{switch(Sk.value){case`syncing`:return Ck.value??`Syncing…`;case`offline`:return`Offline · will sync`;case`error`:return Ck.value??`Sync failed`;default:return null}});function Tk(e,t=null){Sk.value=e,Ck.value=t}function Ek(e){wk.value=e}var Dk=new Set;function Ok(e){for(let t of Dk)try{t(e)}catch(e){console.error(`[Storage] Workspace event listener failed:`,e)}}function kk(e){return Dk.add(e),()=>Dk.delete(e)}var Ak=8,jk=1500,Mk=6e4,Nk=class extends Error{constructor(e){super(e),this.name=`StorageSyncBlockedError`}},Pk=!1,Fk=null,Ik=!1;function Lk(){return typeof navigator>`u`||navigator.onLine}function Rk(e){let t=Math.min(Mk,jk*2**Math.max(0,e-1));return t+Math.floor(t*.2*((crypto.getRandomValues(new Uint8Array(1))[0]??0)/255))}function zk(e,t=Date.now()){if(e.length===0)return null;let n=Math.min(...e.map(e=>e.nextAttemptAt));return n===2**53-1?null:Math.max(250,n-t)}function Bk(e){if(!(e instanceof Error))return!1;let t=e.message.toLowerCase();return t.includes(`403`)||t.includes(`401`)||t.includes(`access denied`)||t.includes(`invalid access key`)||t.includes(`not configured`)}async function Vk(e){let t=GD(),n=await t.getMeta(e.canvasId),r=n?.providerId??tk.value;if(!ak(r))throw new Nk(`Storage is not configured`);let i=ek.get(r),a=await sk(r);if(i.credentialFields.some(e=>e.required&&a[e.id]!==`configured`))throw new Nk(`Storage credentials are unavailable`);let o=ck(r);if(e.type===`deleteCanvas`){await o.deleteDocument(e.canvasId),await t.updateMeta(e.canvasId,{syncStatus:`synced`,lastSyncError:null});return}if(!n||n.tombstoned)return;if(e.type===`putCanvas`){if(n.revision>e.revision||!n.hasFig)return;let i=await t.readFig(e.canvasId);if(!i||i.byteLength===0)throw Error(`Local document missing for sync`);xk(e.canvasId,0);try{await o.putDocument(e.canvasId,i,{name:n.name,updatedAt:n.updatedAt},({transferredBytes:t,totalBytes:n})=>{n&&xk(e.canvasId,t/n)})}finally{xk(e.canvasId,null)}let a=await t.getMeta(e.canvasId);a&&a.revision===e.revision&&!a.tombstoned&&(await t.updateMeta(e.canvasId,{syncStatus:`synced`,lastSyncedAt:new Date().toISOString(),lastSyncError:null},{expectedRevision:e.revision}),await qD(new Set([e.canvasId])),Ok({providerId:r,documentId:e.canvasId,kind:`synced`}));return}if(!o.putThumbnail)return;let s=await t.readThumb(e.canvasId);s&&await o.putThumbnail(e.canvasId,s)}async function Hk(){let e=yk(),t=await e.list();if(Ek(t.length),t.length===0){Lk()&&Tk(`idle`);return}if(!Lk()){Tk(`offline`),Uk(5e3);return}Tk(`syncing`);let n=Date.now(),r=t.find(e=>e.nextAttemptAt<=n);if(!r){let e=zk(t,n);e!=null&&Uk(e);return}try{await Vk(r),await e.remove(r.id);let t=await e.list();Ek(t.length),t.length===0?Tk(`idle`):Uk(50)}catch(t){let{errorName:n,errorCode:i,retryable:a}=mn(t);fn({operation:Sp(r.type),errorName:n,errorCode:i,retryable:a});let o=t instanceof Error?t.message:String(t);if(t instanceof Nk){await e.update({...r,nextAttemptAt:2**53-1}),Tk(`error`,o);return}let s=r.attempts+1,c=Bk(t)||s>=Ak;if(console.warn(`[Storage sync] job failed:`,r.type,r.canvasId,o),c){if(r.type===`putThumb`?await GD().updateMeta(r.canvasId,{lastSyncError:o}):(await GD().updateMeta(r.canvasId,{syncStatus:`error`,lastSyncError:o}),Tk(`error`,o.slice(0,120))),r.type===`putThumb`){await e.remove(r.id);let t=await e.list();Ek(t.length),t.length>0?Uk(1e3):Tk(`idle`)}else await e.update({...r,attempts:s,nextAttemptAt:2**53-1});return}let l={...r,attempts:s,nextAttemptAt:Date.now()+Rk(s)};await e.update(l),r.type!==`putThumb`&&await GD().updateMeta(r.canvasId,{syncStatus:`pending`,lastSyncError:o});let u=await e.list(),d=Math.min(...u.map(e=>e.nextAttemptAt));Uk(Math.max(250,d-Date.now()))}}function Uk(e){Fk!=null&&clearTimeout(Fk),Fk=setTimeout(()=>{Fk=null,Gk()},e)}function Wk(){Ik||!a||(Ik=!0,window.addEventListener(`online`,()=>{Tk(`syncing`),Gk()}),window.addEventListener(`offline`,()=>{Tk(`offline`)}))}async function Gk(){if(Wk(),Pk)return;Pk=!0;let e=!1;try{for(let e=0;e<3;e++){let e=(await yk().list()).length;await Hk();let t=(await yk().list()).length;if(t===0||t>=e)break}}catch(t){e=!0,console.warn(`[Storage sync] pump failed:`,t),Uk(5e3)}finally{Pk=!1}e||!Lk()||(await yk().list()).some(e=>e.nextAttemptAt<=Date.now())&&Uk(250)}async function Kk(e,t){await yk().enqueue({canvasId:e,type:`putCanvas`,revision:t}),Gk()}async function qk(){let e=yk(),t=await e.list(),n=Date.now();await Promise.all(t.map(t=>e.update({...t,nextAttemptAt:n}))),t.length>0&&Tk(`syncing`),Gk()}async function Jk(e,t){let n=t??{store:GD(),enqueueCanvas:Kk},r=await Tu({size:e.figBytes.byteLength,async read(t,n){return e.figBytes.subarray(t,n)}}),i=await n.store.writeCanvas({id:e.canvasId,providerId:e.providerId,name:e.name,figBytes:e.figBytes,thumbBytes:r,syncStatus:`pending`});return await n.enqueueCanvas(e.canvasId,i.revision),Ok({providerId:e.providerId,documentId:e.canvasId,kind:`changed`}),{revision:i.revision}}async function Yk(e){await GD().writeCanvas({id:e.canvasId,providerId:e.providerId,name:e.name,updatedAt:e.updatedAt,figBytes:e.figBytes,thumbBytes:e.thumbnailBytes,syncStatus:e.markSynced===!1?`pending`:`synced`}),e.markSynced!==!1&&(await GD().updateMeta(e.canvasId,{lastSyncedAt:e.updatedAt||new Date().toISOString(),syncStatus:`synced`,lastSyncError:null}),await qD(new Set([e.canvasId])))}function Xk({state:e,getFilePath:t,getFileHandle:n,getStorageBinding:r,setSavedVersion:i,setLastWriteTime:a,onWriteSuccess:o}){async function s(e){i(e);try{await o?.(e)}catch(e){console.warn(`[Recovery] Cleanup after document write failed:`,e)}return!0}return async function(i,o=e.sceneVersion){a(Date.now());try{let a=r();if(a)return await Jk({providerId:a.providerId,canvasId:a.documentId,name:e.documentName||`Untitled`,figBytes:i}),await s(o);let c=t(),l=n();if(c&&H()){let{writeFile:e}=await m(async()=>{let{writeFile:e}=await import(`./dist-js-DJskp-xP.js`);return{writeFile:e}},__vite__mapDeps([19,10,20]));return await e(c,i),await s(o)}if(l){let e=await l.createWritable();return await e.write(new Uint8Array(i)),await e.close(),await s(o)}return!1}catch(e){throw ln({operation:`save`,format:`fig`,...mn(e),retryable:mn(e).retryable}),e}}}function Zk({state:e,buildFigFile:t,getFilePath:n,setFilePath:r,getFileHandle:i,setFileHandle:a,getDownloadName:o,setDownloadName:s,getStorageBinding:c,setStorageBinding:l,setSourceIdentity:u,setSavedVersion:d,setLastWriteTime:p,startWatchingFile:m,onWriteSuccess:h,onDownloadSuccess:g}){let _=Xk({state:e,getFilePath:n,getFileHandle:i,getStorageBinding:c,setSavedVersion:d,setLastWriteTime:p,onWriteSuccess:h});async function v(){let n=e.sceneVersion;return{data:await t(),version:n}}async function y(){let e=n(),t=i(),r=c(),a=o();if(r||e||t){let{data:n,version:i}=await v(),a=await _(n,i);return a&&!r&&u({handle:t,path:e}),a}if(a){let{data:e,version:t}=await v();return GT(new Uint8Array(e),a,`application/octet-stream`),await g?.(t),!0}return b()}async function b(){let{data:t,version:n}=await v();if(f){let i=await PD();if(!i)return!1;l(null),r(i),a(null),e.documentName=jD(i);let o=await _(t,n);return o&&u({handle:null,path:i}),m(),o}let i=await FD();if(i){l(null),a(i),r(null),e.documentName=jD(i.name);let o=await _(t,n);return o&&u({handle:i,path:null}),m(),o}let c=prompt(yn.get().saveAsPrompt,o()??`Untitled.fig`);return c?(l(null),s(c),e.documentName=jD(c),GT(new Uint8Array(t),c,`application/octet-stream`),await g?.(n),!0):!1}return{saveFigFile:y,saveFigFileAs:b,writeFile:_}}function Qk(){let e=null,t=null,n=null,r={handle:null,path:null},i=null,a=0,o=0;return{getFileHandle:()=>e,setFileHandle:t=>{e=t},getFilePath:()=>t,setFilePath:e=>{t=e},getDownloadName:()=>n,setDownloadName:e=>{n=e},getSourceIdentity:()=>r,setSourceIdentity:e=>{r=e},getStorageBinding:()=>i,setStorageBinding:e=>{i=e},getSavedVersion:()=>a,setSavedVersion:e=>{a=e},getLastWriteTime:()=>o,setLastWriteTime:e=>{o=e}}}var $k=j(null),eA=D(()=>$k.value??EC.value.recovery.enabled);function tA(e){OC(e)}function nA({editor:e,state:t,stopWatchingFile:n,startWatchingFile:r,getFileHandle:i,setFileHandle:a,getFilePath:o,setFilePath:s,getDownloadName:c,setDownloadName:l,getStorageBinding:u,setStorageBinding:d,setSourceIdentity:f,getSavedVersion:p,setSavedVersion:m,setLastWriteTime:h,getRenderer:g}){let _=AD(e);async function v(e){let t=_.capture(),n=await e();return n&&_.markSaved(t),n}function y(){let n=g();return YS(e.graph,n?.ck,n??void 0,t.currentPageId)}function b(){return YS(e.graph,void 0,void 0,t.currentPageId)}let x=iT({state:t,isEnabled:()=>eA.value,buildFigFile:b,hasWritableSource:()=>!!i()||!!o()||!!u()}),{saveFigFile:S,saveFigFileAs:C,writeFile:w}=Zk({state:t,buildFigFile:y,getFilePath:o,setFilePath:s,getFileHandle:i,setFileHandle:a,getDownloadName:c,setDownloadName:l,getStorageBinding:u,setStorageBinding:d,setSourceIdentity:f,setSavedVersion:m,setLastWriteTime:h,startWatchingFile:()=>{r()},onWriteSuccess:e=>x.markProtectedVersion(e),onDownloadSuccess:e=>x.markProtectedVersion(e)}),T=kD({state:t,getSavedVersion:p,hasWritableSource:()=>!!i()||!!o()||!!u(),saveCurrentDocument:async e=>{let t=_.capture(),n=await y();await w(n,e)&&_.markSaved(t)}});function E(e,i,o,c){n(),d(null);let u=i===`fig`;a(u?o??null:null),s(u?c??null:null),l(ND(e,i)),f({handle:o??null,path:c??null}),m(t.sceneVersion),_.markSaved(),x.markProtectedVersion(t.sceneVersion),u&&(o||c)&&r()}function D(e,r){n(),a(null),s(null),l(`${r}.fig`),f({handle:null,path:null}),d(e),t.documentName=r,t.autosaveEnabled=!0,m(t.sceneVersion),_.markSaved(),x.markProtectedVersion(t.sceneVersion)}function O(e){n(),d(null),a(null),s(e);let r=MD(e);l(r),t.documentName=jD(r)}function k(){r()}function A(){_.dispose(),n(),T.disposeAutosave(),x.disposeRecovery()}return{setDocumentSource:E,setStorageDocumentSource:D,setPlannedFilePath:O,startWatchingCurrentFile:k,disposeDocumentIO:A,saveFigFile:()=>v(S),saveFigFileAs:()=>v(C),hasUnsavedChanges:_.hasUnsavedChanges,markDocumentSaved:_.markSaved,getStorageBinding:u,getRecoveryId:()=>x.getRecoveryId(),adoptRecoverySnapshot:(e,t)=>(_.markChanged(),x.adoptRecoverySnapshot(e,t)),persistRecoveryNow:()=>x.persistNow(),discardRecovery:()=>x.discardRecovery()}}var rA=1e3,iA=2e3,aA=500;async function oA(e,t,n){let{watch:r}=await m(async()=>{let{watch:e}=await import(`./dist-js-DJskp-xP.js`);return{watch:e}},__vite__mapDeps([19,10,20])),i=await r(e,e=>{typeof e.type!=`object`||!(`modify`in e.type)||Date.now()-t()<rA||n()},{delayMs:aA});return()=>i()}async function sA(e,t,n,r,i){let a=(await e.getFile()).lastModified,{pause:o,resume:s}=ae(()=>{c(e)},iA,{immediate:!1});s();async function c(e){if(t()!==e){i();return}try{let t=await e.getFile();if(t.lastModified>a){if(a=t.lastModified,Date.now()-n()<rA)return;r()}}catch{i()}}return o}function cA({getFilePath:e,getFileHandle:t,getLastWriteTime:n,reloadFromDisk:r}){let i=null;function a(){i&&=(i(),null)}async function o(){a();let o=e(),s=t();o&&f?i=await oA(o,n,r):s&&(i=await sA(s,t,n,r,a))}return{startWatchingFile:o,stopWatchingFile:a}}function lA(e,t,n,r){let i=Qk();h_();let{reloadFromDisk:a}=OD({editor:e,state:t,getFilePath:i.getFilePath,getFileHandle:i.getFileHandle,setSavedVersion:e=>{i.setSavedVersion(e),u.markDocumentSaved()},preparationController:r}),{startWatchingFile:o,stopWatchingFile:s}=cA({getFilePath:i.getFilePath,getFileHandle:i.getFileHandle,getLastWriteTime:i.getLastWriteTime,reloadFromDisk:()=>{a()}}),{setViewportSize:c,fitCurrentPageToViewport:l}=WT(e,n),u=nA({editor:e,state:t,stopWatchingFile:s,startWatchingFile:o,getRenderer:()=>e.renderer,...i}),{openFigFile:d}=DD({editor:e,state:t,setDocumentSource:u.setDocumentSource,fitCurrentPageToViewport:l,preparationController:r}),{openDOMFile:f,importDOMText:p}=CD({editor:e,state:t,setDocumentSource:u.setDocumentSource,fitCurrentPageToViewport:l,preparationController:r});return{downloadBlob:GT,setViewportSize:c,fitCurrentPageToViewport:l,getDocumentFilePath:i.getFilePath,getSourceIdentity:i.getSourceIdentity,getStorageBinding:i.getStorageBinding,getRecoveryId:u.getRecoveryId,adoptRecoverySnapshot:u.adoptRecoverySnapshot,persistRecoveryNow:u.persistRecoveryNow,discardRecovery:u.discardRecovery,setDocumentSource:u.setDocumentSource,setStorageDocumentSource:u.setStorageDocumentSource,setPlannedFilePath:u.setPlannedFilePath,startWatchingCurrentFile:u.startWatchingCurrentFile,disposeDocumentIO:u.disposeDocumentIO,openFigFile:d,openDOMFile:f,importDOMText:p,hasUnsavedChanges:u.hasUnsavedChanges,saveFigFile:u.saveFigFile,saveFigFileAs:u.saveFigFileAs}}function uA(e,t){let n=0;function r(){if(!e.renderer?.hasActiveFlashes){n=0;return}t.renderVersion++,n=requestAnimationFrame(r)}function i(t){let i=e.renderer;if(i){for(let e of t)i.flashNode(e);n||r()}}function a(t){e.renderer&&(e.renderer.aiMarkActive(t),n||r())}function o(t){e.renderer&&(e.renderer.aiMarkDone(t),n||r())}function s(t){e.renderer&&(e.renderer.aiFlashDone(t),n||r())}function c(){e.renderer?.aiClearAll()}return{flashNodes:i,aiMarkActive:a,aiMarkDone:o,aiFlashDone:s,aiClearAll:c}}var dA={html:``,plainText:``};function fA(e){dA=e}function pA(e){return e&&e===dA.html?dA.snapshot:void 0}function mA(e){return e!==void 0&&(dA.plainText===``||dA.plainText!==e)?``:dA.html}function hA(){dA={html:``,plainText:``}}async function gA(e,t,n,r={}){let i=pA(t);i?await e.pasteSnapshot(i,n,r):await e.pasteFromHTML(t,n,r)}function _A(e){async function t(){let t=await e.prepareCopy();return t.html?(fA(t),!0):!1}async function n(){let n=new Set(e.state.selectedIds);await t()&&(n.size!==e.state.selectedIds.size||[...n].some(t=>!e.state.selectedIds.has(t))||e.deleteSelected())}async function r(){let t=mA();t&&await gA(e,t)}return{mobileCopy:t,mobileCut:n,mobilePaste:r}}function vA(e,t,n){return{vertices:t,segments:n,dragTangent:null,oppositeDragTangent:null,closingToFirst:!1,pendingClose:!1,resumingNodeId:e.id,resumedFills:[...e.fills],resumedStrokes:[...e.strokes]}}function yA(e,t){let n=t,r=new Set([t]);for(;;){let t=!1;for(let i of e){let e=-1;if(i.start===n&&!r.has(i.end)?e=i.end:i.end===n&&!r.has(i.start)&&(e=i.start),e!==-1){r.add(e),n=e,t=!0;break}}if(!t)break}return n}function bA(e,t,n){let r=[],i=[],a=new Set,o=n;for(r.push(e[o]),a.add(o);;){let n=!1;for(let s of t){let t=-1,c=!1;if(s.start===o&&!a.has(s.end)?(t=s.end,c=!0):s.end===o&&!a.has(s.start)&&(t=s.start),t===-1)continue;let l=r.length-1;r.push(e[t]);let u=r.length-1;i.push({start:l,end:u,tangentStart:c?{...s.tangentStart}:{...s.tangentEnd},tangentEnd:c?{...s.tangentEnd}:{...s.tangentStart}}),a.add(t),o=t,n=!0;break}if(!n)break}return{orderedVertices:r,orderedSegments:i}}function xA(e,t){function n(n){t.penState&&n!==`PEN`&&n!==`HAND`&&e.penCommit(!1),e.setTool(n)}function r(n){let r=e.graph.getNode(n);if(r?.type!==`VECTOR`||!r.vectorNetwork)return;let i=je(xt(r,e.graph),r.vectorNetwork);t.penState=vA(r,i.vertices,i.segments),e.graph.deleteNode(n),e.clearSelection(),e.setTool(`PEN`),e.requestRender()}function i(n,r){let i=e.graph.getNode(n);if(i?.type!==`VECTOR`||!i.vectorNetwork)return;let a=je(xt(i,e.graph),i.vectorNetwork),o=a.vertices,s=a.segments,{orderedVertices:c,orderedSegments:l}=bA(o,s,yA(s,r));t.penState=vA(i,c,l),e.graph.deleteNode(n),e.clearSelection(),e.setTool(`PEN`),e.requestRender()}return{setTool:n,penResumeOnPath:r,penResumeFromEndpoint:i}}function SA(e){function t(){return document.querySelector(`[data-active-pane="true"] [data-test-id="canvas-element"]`)??document.querySelector(`[data-test-id="canvas-element"]`)}function n(){let e=t();if(e){let t=e.getBoundingClientRect();return{x:t.left+t.width/2,y:t.top+t.height/2}}return{x:window.innerWidth/2,y:window.innerHeight/2}}function r(){let e=t();if(e){let t=e.getBoundingClientRect();return{x:t.width/2,y:t.height/2}}return{x:window.innerWidth/2,y:window.innerHeight/2}}function i(){let t=!(e.renderer?.profiler.hudVisible??!1);for(let n of e.canvasRenderers)n.profiler.setVisible(t);e.requestRepaint()}return{viewportScreenCenter:n,viewportCanvasCenter:r,toggleProfiler:i}}function CA(e,t,n){return Math.hypot(e.x,e.y)>1e-6?e:{x:t.x-n.x,y:t.y-n.y}}function wA(e,t,n,r){let i=t[0],a=Math.hypot(n.x,n.y);if(a<=1e-6)return i;let o={x:n.x/a,y:n.y/a},s=1/0;for(let n of t){let t=e.segments[n.segmentIndex],a=e.vertices[r],c=e.vertices[n.neighborIndex],l=CA(t[n.tangentField],c,a),u=Math.hypot(l.x,l.y);if(u<1e-6)continue;let d={x:l.x/u,y:l.y/u},f=o.x*d.x+o.y*d.y;f<s&&(s=f,i=n)}return i}function TA(e,t,n,r,i,a,o,s){let c=r.filter(e=>!(e.segmentIndex===n.segmentIndex&&e.tangentField===n.tangentField));if(c.length===0)return null;let l=e.vertices[n.neighborIndex],u=wA(e,c,CA(i[a],l,s),o),d=e.segments[u.segmentIndex],f=e.vertices[u.neighborIndex],p=CA(d[u.tangentField],f,s),m=Math.hypot(p.x,p.y);if(m<=1e-6)return null;let h={x:-p.x/m,y:-p.y/m},g=Math.max(0,t.x*h.x+t.y*h.y);return s.handleMirroring=`ANGLE`,{x:h.x*g,y:h.y*g}}function EA(e){return Pe({vertices:e.vertices,segments:e.segments,regions:e.regions})}function DA(e){e.history.push(EA(e))}function OA(e,t){!e.futureBaseline||e.future.length===0||Be(e.futureBaseline,t)||(e.future=[],e.futureBaseline=null)}function kA(e,t){function n(){let e=t.nodeEditState;e&&DA(e)}function r(t,n){let r=Pe(n);t.vertices=r.vertices,t.segments=r.segments,t.regions=r.regions,t.futureBaseline=Pe(n),t.selectedVertexIndices=new Set,t.selectedHandles=new Set,t.hoveredHandleInfo=null,e.requestRender()}function i(){let e=t.nodeEditState;if(!e)return;let n=EA(e);OA(e,n);let i=e.history.pop();for(;i&&Be(i,n);)i=e.history.pop();i&&(e.future.push(n),r(e,i))}function a(){let e=t.nodeEditState;if(!e)return;let n=EA(e);OA(e,n);let i=e.future.pop();i&&(e.history.push(n),r(e,i))}return{nodeEditPushHistory:n,nodeEditUndo:i,nodeEditRedo:a}}function AA(e,t){e.vertices=t.vertices.map(e=>({...e})),e.segments=t.segments.map(e=>({...e,tangentStart:{...e.tangentStart},tangentEnd:{...e.tangentEnd}})),e.regions=t.regions.map(e=>({windingRule:e.windingRule,loops:e.loops.map(e=>[...e])}))}function jA(e){return{vertices:e.vertices.map(e=>({...e})),segments:e.segments.map(e=>({...e,tangentStart:{...e.tangentStart},tangentEnd:{...e.tangentEnd}})),regions:e.regions.map(e=>({windingRule:e.windingRule,loops:e.loops.map(e=>[...e])}))}}function MA(e,t,n){function r(t,r){let i=n();if(!i||t===r||t<0||r<0||t>=i.vertices.length||r>=i.vertices.length)return;DA(i);let a=t,o=r>t?r-1:r,s=e=>e===a?o:e>a?e-1:e;AA(i,{vertices:i.vertices.filter((e,t)=>t!==a),segments:i.segments.map(e=>({...e,tangentStart:{...e.tangentStart},tangentEnd:{...e.tangentEnd},start:s(e.start),end:s(e.end)})).filter(e=>e.start!==e.end),regions:[]}),i.selectedVertexIndices=new Set([o]),i.selectedHandles=new Set,e.requestRender()}function i(r,i){let a=n();if(!a)return;let o=jA(a),s=al(r,i,o,8/t.zoom);if(!s)return;DA(a);let c=Wl(o,s.segmentIndex,s.t);AA(a,c.network),a.selectedVertexIndices=new Set([c.newVertexIndex]),a.selectedHandles=new Set,e.requestRender()}function a(t){let r=n();if(!r)return;let i=Jl(jA(r),t);i&&(DA(r),AA(r,i),r.selectedVertexIndices=new Set,r.selectedHandles=new Set,e.requestRender())}return{nodeEditConnectEndpoints:r,nodeEditAddVertex:i,nodeEditRemoveVertex:a}}function NA(e,t){function n(n,r,i,a){let o=t();if(!o)return;let s=o.segments[n],c=a?.breakMirroring??!1,l=a?.continuous??!1,u=a?.lockDirection??!1,d=r===`tangentStart`?s.start:s.end,f=o.vertices[d],p=jA(o),m=$l(p,d),h=m.find(e=>e.segmentIndex===n&&e.tangentField===r),g={x:i.x,y:i.y};l&&h&&(g=TA(o,i,h,m,s,r,d,f)??g),s[r]=g;let _=f.handleMirroring??`NONE`;if(u&&_===`NONE`){s[r]={x:i.x,y:i.y},e.requestRepaint();return}if(c){f.handleMirroring=`NONE`,e.requestRepaint();return}if(_===`NONE`){e.requestRepaint();return}let v=Ql(p,d,n);if(!v){e.requestRepaint();return}let y=o.segments[v.segmentIndex],b=y[v.tangentField],x=_===`ANGLE`?Math.hypot(b.x,b.y):void 0,S=Zl(g,_,x);S&&(y[v.tangentField]=S),e.requestRepaint()}function r(n,r,i,a,o,s){let c=t();if(!c||o==null||s==null)return;let l=$l(jA(c),n);if(l.length===0)return;let u=l.filter(e=>e.segmentIndex===o&&e.tangentField===s);if(u.length===0)return;let d={x:r,y:i},f=a?{x:r,y:i}:{x:-r,y:-i},p=u[0];c.segments[p.segmentIndex][p.tangentField]=d;for(let e=1;e<u.length;e++){let t=u[e];c.segments[t.segmentIndex][t.tangentField]=d}if(!a)for(let e of l)u.includes(e)||(c.segments[e.segmentIndex][e.tangentField]=f);c.vertices[n].handleMirroring=a?`NONE`:`ANGLE_AND_LENGTH`,e.requestRepaint()}function i(n){let r=t();if(!r)return;DA(r);let i=$l(jA(r),n);for(let e of i)r.segments[e.segmentIndex][e.tangentField]={x:0,y:0};r.vertices[n].handleMirroring=`NONE`,e.requestRepaint()}return{nodeEditSetHandle:n,nodeEditBendHandle:r,nodeEditZeroVertexHandles:i}}function PA(e,t){function n(){return t.nodeEditState}function r(t){let n=e.graph.getNode(t.nodeId);if(n?.type!==`VECTOR`||Be(jA(t),t.origAbsNetwork))return;let r=xt(n,e.graph),i=R.invert(r);if(!i)return;let a=je(i,jA(t)),o=nl(a),s={vertices:a.vertices.map(e=>({...e,x:e.x-o.x,y:e.y-o.y})),segments:a.segments,regions:a.regions},c=wt(n),l=R.mapPoint(c,{x:o.x+o.width/2,y:o.y+o.height/2});e.updateNodeWithUndo(n.id,{x:l.x-o.width/2,y:l.y-o.height/2,width:o.width,height:o.height,vectorNetwork:s,fillGeometry:ce(s,n.fillGeometry),strokeGeometry:[]},`Edit vector`);let u=e.graph.getNode(t.nodeId);if(u?.type===`VECTOR`&&u.vectorNetwork){let n=xt(u,e.graph);t.origNetwork=Pe(u.vectorNetwork),t.origBounds={x:u.x,y:u.y,width:u.width,height:u.height},t.origAbsNetwork=Pe(je(n,u.vectorNetwork))}e.requestRender()}function i(n){let r=e.graph.getNode(n);if(r?.type!==`VECTOR`||!r.vectorNetwork)return;let i=je(xt(r,e.graph),r.vectorNetwork);t.snapGuides=[],t.nodeEditState={nodeId:n,origNetwork:Pe(r.vectorNetwork),origBounds:{x:r.x,y:r.y,width:r.width,height:r.height},origAbsNetwork:Pe(i),vertices:i.vertices,segments:i.segments,regions:i.regions,history:[],future:[],selectedVertexIndices:new Set,draggedHandleInfo:null,selectedHandles:new Set,hoveredHandleInfo:null},e.select([n]),e.requestRender()}function a(i){let a=n();if(a){if(t.snapGuides=[],e.requestRender(),e.graph.getNode(a.nodeId)?.type!==`VECTOR`){t.nodeEditState=null,e.requestRender();return}i?r(a):(e.graph.updateNode(a.nodeId,{x:a.origBounds.x,y:a.origBounds.y,width:a.origBounds.width,height:a.origBounds.height,vectorNetwork:Pe(a.origNetwork)}),e.requestRender()),t.nodeEditState=null}}return{getNodeEditState:n,commitNodeEditChanges:r,enterNodeEditMode:i,exitNodeEditMode:a}}function FA(e,t){function n(){return t.nodeEditState}function r(t,r){let i=n();if(i){if(r){let e=new Set(i.selectedVertexIndices);e.has(t)?e.delete(t):e.add(t),i.selectedVertexIndices=e}else i.selectedVertexIndices=new Set([t]);e.requestRepaint()}}function i(t,r){let i=n();if(!i||i.selectedVertexIndices.size<2)return;DA(i);let a=[...i.selectedVertexIndices],o=t===`horizontal`?`x`:`y`,s=1/0,c=-1/0;for(let e of a){let t=i.vertices[e][o];t<s&&(s=t),t>c&&(c=t)}let l=(s+c)/2;r===`min`?l=s:r===`max`&&(l=c);for(let e of a)i.vertices[e]={...i.vertices[e],[o]:l};e.requestRepaint()}function a(){let t=n();if(!t||t.selectedHandles.size===0&&t.selectedVertexIndices.size===0)return;DA(t);let r=jA(t);for(let e of t.selectedHandles){let t=Ce(e);if(!t||t.segmentIndex>=r.segments.length)continue;let n=r.segments[t.segmentIndex];t.tangentField===`tangentStart`?n.tangentStart={x:0,y:0}:n.tangentEnd={x:0,y:0}}let i=[...t.selectedVertexIndices].sort((e,t)=>t-e);for(let e of i){let t=Yl(r,e);if(!t)break;r=t}AA(t,r),t.selectedVertexIndices=new Set,t.selectedHandles=new Set,e.requestRender()}function o(){let t=n();if(!t||t.selectedVertexIndices.size===0)return;DA(t);let[r]=t.selectedVertexIndices;AA(t,Xl(jA(t),r)),t.selectedHandles=new Set,t.selectedVertexIndices=new Set([r]),e.requestRender()}return{nodeEditSelectVertex:r,nodeEditAlignVertices:i,nodeEditDeleteSelected:a,nodeEditBreakAtVertex:o}}function IA(e,t){let{getNodeEditState:n,commitNodeEditChanges:r,enterNodeEditMode:i,exitNodeEditMode:a}=PA(e,t),{nodeEditSelectVertex:o,nodeEditAlignVertices:s,nodeEditDeleteSelected:c,nodeEditBreakAtVertex:l}=FA(e,t),{nodeEditSetHandle:u,nodeEditBendHandle:d,nodeEditZeroVertexHandles:f}=NA(e,n),{nodeEditPushHistory:p,nodeEditUndo:m,nodeEditRedo:h}=kA(e,t),{nodeEditConnectEndpoints:g,nodeEditAddVertex:_,nodeEditRemoveVertex:v}=MA(e,t,n);function y(){let t=n();if(!t)return;let r=t.history.at(-1);r&&(AA(t,r),t.history.pop(),e.requestRender())}return{getNodeEditState:n,setNodeEditNetwork:AA,getLiveNetwork:jA,commitNodeEditChanges:()=>{let e=n();e&&r(e)},nodeEditCancelDrag:()=>{n()&&y()},enterNodeEditMode:i,exitNodeEditMode:a,nodeEditSelectVertex:o,nodeEditSetHandle:u,nodeEditBendHandle:d,nodeEditZeroVertexHandles:f,nodeEditConnectEndpoints:g,nodeEditAddVertex:_,nodeEditRemoveVertex:v,nodeEditAlignVertices:s,nodeEditDeleteSelected:c,nodeEditBreakAtVertex:l,nodeEditPushHistory:p,nodeEditUndo:m,nodeEditRedo:h}}function LA(e,t){Object.defineProperties(e,{graph:{enumerable:!0,get:()=>t.graph},renderer:{enumerable:!0,get:()=>t.renderer},canvasRenderers:{enumerable:!0,get:()=>t.canvasRenderers},textEditor:{enumerable:!0,get:()=>t.textEditor}})}function RA(e,t){let{nodes:n,dispose:r}=Zb(e);return{selectedNodes:n,selectedNode:D(()=>n.value.length===1?n.value[0]:void 0),layerTree:D(()=>(t.sceneVersion,e.getLayerTree())),disposeSelection:r}}function zA(e,t,n,r,i){let a=uA(e,t),o=xA(e,t),s=IA(e,t),c=lA(e,t,r,i),l=RT(e,t,n,c.downloadBlob),u=_A(e),d=SA(e);return{...a,...o,...s,openFigFile:c.openFigFile,openDOMFile:c.openDOMFile,importDOMText:c.importDOMText,setViewportSize:c.setViewportSize,fitCurrentPageToViewport:c.fitCurrentPageToViewport,hasUnsavedChanges:c.hasUnsavedChanges,saveFigFile:c.saveFigFile,saveFigFileAs:c.saveFigFileAs,getDocumentFilePath:c.getDocumentFilePath,getSourceIdentity:c.getSourceIdentity,getStorageBinding:c.getStorageBinding,getRecoveryId:c.getRecoveryId,adoptRecoverySnapshot:c.adoptRecoverySnapshot,persistRecoveryNow:c.persistRecoveryNow,discardRecovery:c.discardRecovery,setDocumentSource:c.setDocumentSource,setStorageDocumentSource:c.setStorageDocumentSource,setPlannedFilePath:c.setPlannedFilePath,startWatchingCurrentFile:c.startWatchingCurrentFile,dispose:()=>{e.releaseGraphResources(),e.dispose(),e.clearPageViewports(),c.disposeDocumentIO(),i.dispose()},...l,...u,...d}}function BA(e){return{...eb(e),snappingPreferences:{...EC.value.editing.snapping},showUI:!0,showRulers:!0,showRemoteCursors:!0,activeRibbonTab:`panels`,panelMode:`design`,actionToast:null,mobileDrawerSnap:`closed`,autosaveEnabled:!1,cursorCanvasX:null,cursorCanvasY:null,nodeEditState:null,renameSelectionOpen:!1,renameNodeId:null,numberFieldFocused:!1,preparation:null,canvasPresentation:null,documentColorSpace:`srgb`}}function VA(){let e=()=>void 0,t=()=>void 0;return{promise:new Promise((n,r)=>{e=n,t=r}),resolve:e,reject:t}}function HA(e){let t=e??new Pt,n=M(BA(t.getPages()[0].id)),r={width:0,height:0},i=Vb({graph:t,state:n,loadFont:qw,resolveFigmaClipboardImages:f?uT:void 0,skipInitialGraphSetup:!!e,getViewportSize:()=>r.width>0&&r.height>0?r:{width:a?window.innerWidth:1920,height:a?window.innerHeight:1080}}),o=VA(),s=new $b(fC);fT(i),e&&i.subscribeToGraph();let{selectedNodes:c,selectedNode:l,layerTree:u,disposeSelection:d}=RA(i,n),p=()=>{n.documentColorSpace=i.graph.documentColorSpace};p();let m=i.onEditorEvent(`document:color-space-changed`,p);i.onEditorEvent(`graph:replaced`,p);let h=TT(),g=new Map;h.on(`preparation:started`,e=>{g.set(e.id,{kind:e.kind,phase:e.phase,startedAt:e.startedAt})}),h.on(`preparation:updated`,e=>{let t=g.get(e.id);t&&(t.phase=e.phase)}),h.on(`preparation:finished`,e=>{let t=g.get(e.id);t&&(dn({kind:e.kind,outcome:e.status,cancellationReason:e.status===`cancelled`?e.reason:null,failureCode:null,terminalPhase:t.phase,durationMs:performance.now()-t.startedAt}),g.delete(e.id))}),h.on(`preparation:failed`,e=>{let t=g.get(e.id);t&&(dn({kind:e.kind,outcome:`failed`,cancellationReason:null,failureCode:e.code,terminalPhase:t.phase,durationMs:performance.now()-t.startedAt}),g.delete(e.id))});let _=wT(n,h),v=zA(i,n,s,r,_),y=ST(n);function b(e){if(e===`resolving-fonts`)return`fonts`;if(e===`populating-page`)return`pages`}async function x(e,t={}){let n=i.graph.getNode(e),r=t.preparation??_.begin({kind:`page-switch`,phase:`populating-page`,subject:n?.name??null}),a=t.preparation===void 0,o=!1;try{let a=await i.preparePage(e,{signal:r.signal,onProgress:e=>{t.onProgress?.(e),r.update({...e,unit:b(e.phase)})}});r.signal.throwIfAborted(),a&&(i.commitPageSwitch(a),r.update({phase:`preparing-render`,detail:n?.name??null}),await _.waitForPresentation(r.id,i.state.sceneVersion),r.signal.throwIfAborted()),o=!0}catch(e){if(r.signal.aborted)throw e;if(a){let t=e instanceof Error&&e.message===`The operation was timed out`;r.fail({code:t?`render-failed`:`layout-failed`,message:e instanceof Error?e.message:String(e),retryable:!0}),t&&hn.error(yD.get().operationFailed({error:e instanceof Error?e.message:String(e)}))}throw e}finally{a&&o&&r.complete()}}let S={...i,state:n,preparationController:_,canvasReady:o.promise,markCanvasReady:()=>o.resolve(void 0),onPreparationEvent(e,t){return h.on(e,t)},panes:y,selectedNodes:c,selectedNode:l,layerTree:u,splitTree:y.splitTree,activePaneId:y.activePaneId,visiblePaneCount:y.visiblePaneCount,getPaneRenderState:y.getPaneRenderState,setActivePane:y.setActivePane,switchPage:x,splitPane:y.splitPane,closePane:y.closePane,resizePane:y.resizePane,setSplitSizes:y.setSplitSizes,...v,dispose(){m(),d(),v.dispose()}};return LA(S,i),S}var UA=`recent-file-thumbnails/v2`;async function WA(e){let t=e;try{let{stat:n}=await m(async()=>{let{stat:e}=await import(`./dist-js-DJskp-xP.js`);return{stat:e}},__vite__mapDeps([19,10,20])),r=await n(e);t=`${e}\0${r.size}\0${r.mtime?.getTime()??0}`}catch(e){console.warn(`[Recent files] Could not stat the file for thumbnail caching`,e)}let n=await crypto.subtle.digest(`SHA-256`,new TextEncoder().encode(t));return`${UA}/${[...new Uint8Array(n)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}.png`}async function GA(e){if(!H())return null;let t=await lw(await WA(e));return t?new Uint8Array(t):null}async function KA(e,t){H()&&await uw(await WA(e),Uint8Array.from(t).buffer)}function qA(){return dw(UA)}async function JA(e){if(!H()||!e.toLowerCase().endsWith(`.fig`))return null;let t=await GA(e);if(t)return t;let{open:n,SeekMode:r}=await m(async()=>{let{open:e,SeekMode:t}=await import(`./dist-js-DJskp-xP.js`);return{open:e,SeekMode:t}},__vite__mapDeps([19,10,20])),i=await n(e,{read:!0});try{return await Tu({size:(await i.stat()).size,async read(e,t){await i.seek(e,r.Start);let n=new Uint8Array(t-e),a=0;for(;a<n.byteLength;){let e=await i.read(n.subarray(a));if(e===null)break;a+=e}return a===n.byteLength?n:n.subarray(0,a)}})}finally{await i.close()}}var YA=10,XA=ie(`open-pencil:recent-documents`,[]);function ZA(e){return e.split(/[\\/]/).pop()??e}function QA(e){return`local:${e}`}function $A(e,t){return`storage:${e}:${t}`}function ej(){return XA.value.slice(0,YA)}var tj=D(ej),nj=D(()=>ej().flatMap(e=>e.kind===`local`?[e.path]:[]));function rj(e){XA.value=[e,...ej().filter(t=>t.id!==e.id)].slice(0,YA)}function ij(e){rj({id:QA(e),kind:`local`,path:e,name:ZA(e),updatedAt:new Date().toISOString()})}function aj(e,t,n){rj({id:$A(e,t),kind:`storage`,providerId:e,documentId:t,name:n,updatedAt:new Date().toISOString()})}function oj(e){XA.value=ej().filter(t=>t.id!==e)}function sj(e){oj(QA(e))}async function cj(){XA.value=[],await qA()}function lj(e){return nj.value[e]??null}function uj(e){return!!(e.handle||e.path)}async function dj(e,t){if(!e||!t)return!1;if(e===t)return!0;try{return await e.isSameEntry(t)}catch{return!1}}async function fj(e,t){return e.path&&t.path&&e.path===t.path?!0:dj(e.handle,t.handle)}async function pj(e,t){if(!uj(t))return null;for(let n of e){let e=n.store.getSourceIdentity();if(await fj(e,t)&&n.store.getSourceIdentity()===e)return n}return null}function mj(){let e=[],t=Promise.resolve();async function n(e){let n=t,r=()=>void 0;t=new Promise(e=>{r=e}),await n;try{return await e()}finally{r()}}async function r(t){if(!uj(t))return null;for(let n of e)if(await fj(n.identity,t))return n;return null}function i(t){e.push(t)}function a(t){let n=e.indexOf(t);n!==-1&&e.splice(n,1)}return{add:i,decide:n,findPending:r,remove:a}}var hj=new $b(fC),gj=mj(),_j=512,vj=new WeakMap,yj=1;function bj(){return`tab-${yj++}`}var $=j([]),xj=j(``),Sj=D(()=>$.value.find(e=>e.id===xj.value)),Cj=D(()=>$.value.map(e=>({id:e.id,name:e.store.state.documentName,isHome:e.kind===`home`,isDirty:e.kind===`document`&&e.store.hasUnsavedChanges(),isPreparing:e.store.state.preparation!==null,preparationProgress:e.store.state.preparation?.progress??null,isActive:e.id===xj.value})));function wj(){let e=$.value.find(e=>e.id===xj.value);if(!e)throw Error(`No active tab`);return e.store}function Tj(){return xj.value}function Ej(e){return $.value.find(t=>t.id===e)}function Dj(e){return $.value.find(t=>t.store===e)}function Oj(){return[...$.value]}function kj(e,t){let n=e??HA(t),r={id:bj(),store:n,kind:`document`};return $.value=[...$.value,r],Pj(r),r}function Aj(){let e={id:bj(),store:HA(),kind:`home`};return $.value=[...$.value,e],Pj(e),e}function jj(e){let t=$.value.findIndex(t=>t.id===e);if(t===-1)return;let n=$.value[t];n.kind===`home`&&($.value=$.value.with(t,{...n,kind:`document`}))}function Mj(){let e=Sj.value;return e?.kind===`home`?(jj(e.id),Ej(e.id)??e):kj()}function Nj(){let e=$.value.find(e=>e.kind===`home`);if(e){Fj(e.id);return}Aj()}function Pj(e){let t=$.value.find(e=>e.id===xj.value);t?.store.setSnapGuides([]),t?.store.setLayoutInsertIndicator(null),t?.store.setDropTarget(null),xj.value=e.id,wn(e.store),S($),FC(e.store)}function Fj(e){let t=$.value.find(t=>t.id===e);return t?(Pj(t),!0):!1}async function Ij(e){let t=$.value.findIndex(t=>t.id===e);if(t===-1)return;let n=$.value[t];if(n.kind===`home`&&$.value.length===1)return;let r=await WC(n.store,n.store.state.documentName);if(r===`cancel`||(r===`discard`?await n.store.discardRecovery():await n.store.persistRecoveryNow(),!$.value.includes(n))||r!==`discard`&&n.store.hasUnsavedChanges())return;let i=xj.value===e;if(vj.get(n.store)?.(),vj.delete(n.store),n.store.preparationController.dispose(),n.store.dispose(),$.value=$.value.filter(t=>t.id!==e),$.value.length===0){Aj();return}if(i){let e=Math.min(t,$.value.length-1);Pj($.value[e])}}function Lj(){return new Promise(e=>{requestAnimationFrame(()=>e())})}function Rj(e){return/\.(html?|xhtml)$/i.test(e.name)}function zj(){let e=Sj.value;return e?.kind===`home`||e?.store.state.documentName===`Untitled`&&!e.store.undo.canUndo?(jj(e.id),{store:e.store,created:!1}):{store:kj().store,created:!0}}async function Bj(e,t){let n=await KC(e,t),r=n.getPages()[0]?.id;r&&V(n,r);let i=NS(n.getPages());return i&&i!==r&&(C_(n,[i]),V(n,i)),n}async function Vj(e,t,n,r){r?.update({phase:`materializing`,detail:e.state.documentName}),await Jw(e,t,r),r?.signal.throwIfAborted(),await n?.(),r?.signal.throwIfAborted();let i=e.graph.getPages()[0]?.id??e.graph.rootId;r?.update({phase:`populating-page`,detail:e.graph.getNode(i)?.name??null}),await e.switchPage(i,{preparation:r}),r?.signal.throwIfAborted(),r?.update({phase:`preparing-render`,detail:e.state.documentName}),await e.fitCurrentPageToViewport()}async function Hj(e,t){if(await GA(e))return;let n=NS(t.graph.getPages());if(!n)return;for(let e=0;e<240&&!t.renderer;e++)await ee(250);let r=t.renderer;if(!r){console.warn(`[Recent files] Cover thumbnail skipped because the renderer was unavailable`);return}let i=ue(r.ck,r,t.graph,n,_j,_j);if(!i){console.warn(`[Recent files] Cover thumbnail skipped because the Cover page was empty`);return}await KA(e,i)}function Uj(e,t){vj.get(t)?.();let n=NS(t.graph.getPages());n&&vj.set(t,t.onEditorEvent(`page:changed`,r=>{r===n&&Hj(e,t).catch(e=>{console.warn(`[Recent files] Failed to cache the Cover thumbnail`,e)})}))}function Wj(e,t){return $.value.find(n=>{let r=n.store.getStorageBinding();return r?.providerId===e&&r.documentId===t})}function Gj(e,t,n){e.signal.aborted||e.fail({code:t,message:n instanceof Error?n.message:String(n),retryable:!0})}async function Kj(e){let t=tk.value,n=Wj(t,e.id);if(n){Fj(n.id),aj(t,e.id,e.name);return}let{store:r,created:i}=zj();r.state.documentName=e.name;let a=r.preparationController.begin({kind:`storage-open`,subject:e.name}),o=!1;try{a.update({phase:`reading`,detail:e.name});let n=GD(),i=await n.getMeta(e.id);a.signal.throwIfAborted();let s=i?.hasFig?await n.readFig(e.id):null;a.signal.throwIfAborted();let c=i?.syncStatus!==`synced`||!e.metadataAuthoritative||i.updatedAt>=e.updatedAt,l=s&&c?s:null;l||(l=await ck(t).getDocument(e.id,t=>a.update({phase:`reading`,detail:e.name,completed:t.transferredBytes,total:t.totalBytes,unit:`bytes`}),a.signal),await Yk({providerId:t,canvasId:e.id,name:e.name,updatedAt:e.updatedAt,figBytes:l}),a.signal.throwIfAborted());let u=new Uint8Array(l.byteLength);u.set(l);let d=new File([u.buffer],`${e.name}.fig`,{type:`application/octet-stream`});a.update({phase:`decoding`,detail:e.name}),await Vj(r,await Bj(d,a.signal),()=>r.setStorageDocumentSource({providerId:t,documentId:e.id},e.name),a),aj(t,e.id,e.name),o=!0}catch(t){if(!a.signal.aborted){let n=mn(t);a.fail({code:`read-failed`,message:t instanceof Error?t.message:String(t),retryable:n.retryable??!0}),fn({operation:`download`,...n}),hn.error(yD.get().openFileFailed({name:e.name,error:t instanceof Error?t.message:String(t)}))}if(i){let e=Dj(r);e&&await Ij(e.id)}throw t}finally{o&&a.complete()}}async function qj(e,t,n){let r={handle:t??null,path:n??null},i=await gj.decide(async()=>{let t=await gj.findPending(r);if(t){let e=Dj(t.store);return e&&Fj(e.id),{kind:`pending`,completion:t.completion}}let i=await pj($.value,r);if(i)return Fj(i.id),n?.toLowerCase().endsWith(`.fig`)&&(Uj(n,i.store),Hj(n,i.store).catch(e=>{console.warn(`[Recent files] Failed to cache the Cover thumbnail`,e)})),{kind:`existing`};let{store:a,created:o}=zj();a.state.documentName=e.name.replace(/\.[^.]+$/i,``);let s=a.preparationController.begin({kind:Rj(e)?`dom-import`:`document-open`,subject:e.name}),c=VA();c.promise.catch(()=>void 0);let l={completion:c.promise,identity:r,store:a};return gj.add(l),{kind:`owner`,completion:c,pendingOpen:l,store:a,created:o,load:s}});if(i.kind===`existing`)return;if(i.kind===`pending`){await i.completion;return}let{completion:a,pendingOpen:o,store:s,created:c,load:l}=i,u=!1;try{if(Rj(e)){await s.openDOMFile(e,{handle:t,path:n,preparation:l}),a.resolve(void 0),u=!0;return}await Lj(),l.update({phase:`reading`,detail:e.name});let r=e.name.toLowerCase().endsWith(`.fig`),i,o;if(r)l.update({phase:`decoding`,detail:e.name}),i=await Bj(e,l.signal),o=`fig`;else{let t=await hj.readDocument({name:e.name,mimeType:e.type||void 0,data:new Uint8Array(await e.arrayBuffer())});i=t.graph,o=t.sourceFormat}let c=i.getPages()[0]?.id;!r&&c&&V(i,c),await Vj(s,i,()=>{s.setDocumentSource(e.name,o,t,n),r&&n&&Uj(n,s)},l),r&&n&&Hj(n,s).catch(e=>{console.warn(`[Recent files] Failed to cache the Cover thumbnail`,e)}),a.resolve(void 0),u=!0}catch(e){if(Gj(l,`decode-failed`,e),a.reject(e),c){let e=Dj(s);e&&await Ij(e.id)}throw e}finally{u&&l.complete(),gj.remove(o)}}async function Jj(){return nT().list()}async function Yj(e){await nT().remove(e)}async function Xj(e){let t=await nT().read(e);if(!t)throw Error(`Recovery snapshot is no longer available`);let{store:n}=zj(),r=n.preparationController.begin({kind:`recovery-restore`,subject:t.documentName}),i=!1;try{r.update({phase:`reading`,detail:t.documentName});let a=new Uint8Array(t.figBytes),o=new File([a.buffer],`${t.documentName}.fig`,{type:`application/octet-stream`});r.update({phase:`decoding`,detail:t.documentName}),await Vj(n,await Bj(o,r.signal),async()=>{n.state.documentName=t.documentName,await n.adoptRecoverySnapshot(e,t.sceneVersion)},r),i=!0}catch(e){throw Gj(r,`decode-failed`,e),e}finally{i&&r.complete()}}function Zj(){return GC(()=>$.value.filter(e=>e.kind===`document`).map(e=>e.store))}async function Qj(){await Promise.all($.value.map(e=>e.store.persistRecoveryNow()))}function $j(){return $.value.length}function eM(){return{tabs:Cj,activeTabId:xj,createHomeTab:Aj,createDocumentInCurrentTab:Mj,createTab:kj,leaveHome:jj,switchTab:Fj,closeTab:Ij,getActiveTabId:Tj,getTabById:Ej,getTabForStore:Dj,getTabsSnapshot:Oj,openFileInNewTab:qj,openStorageDocumentInNewTab:Kj,listRecoverySnapshots:Jj,restoreRecoverySnapshot:Xj,discardRecoverySnapshot:Yj,prepareForReload:Qj,getActiveStore:wj,tabCount:$j}}export{gD as $,Pu as $t,nj as A,vC as At,qk as B,Ny as Bt,eM as C,RC as Ct,sj as D,kC as Dt,oj as E,DC as Et,mA as F,Yb as Ft,tk as G,Ph as Gt,ck as H,uv as Ht,fA as I,Xb as It,ik as J,Nh as Jt,rk as K,Fh as Kt,eA as L,Gb as Lt,JA as M,$b as Mt,gA as N,Qb as Nt,tj as O,AC as Ot,hA as P,Jb as Pt,bD as Q,Fu as Qt,tA as R,Ub as Rt,$j as S,IC as St,cj as T,EC as Tt,ok as U,cv as Ut,kk as V,ey as Vt,sk as W,Xg as Wt,GD as X,bp as Xt,ek as Y,X as Yt,yD as Z,xp as Zt,Zj as _,fw as _t,Aj as a,Oi as an,zw as at,Nj as b,BC as bt,wj as c,jn as cn,kw as ct,Dj as d,qw as dt,Nu as en,zT as et,Oj as f,Iw as ft,Kj as g,Lw as gt,qj as h,Fw as ht,Mj as i,nl as in,ET as it,ij as j,fC as jt,lj as k,gC as kt,Tj as l,Nn as ln,Hw as lt,Jj as m,Bw as mt,Cj as n,au as nn,HT as nt,kj as o,gi as on,Rw as ot,jj as p,Ow as pt,ak as q,Ah as qt,Ij as r,Bl as rn,UT as rt,Yj as s,Mn as sn,Ww as st,Sj as t,ru as tn,VT as tt,Ej as u,An as un,Uw as ut,Qj as v,pw as vt,pj as w,MC as wt,Fj as x,LC as xt,Xj as y,UC as yt,Gk as z,Wb as zt};