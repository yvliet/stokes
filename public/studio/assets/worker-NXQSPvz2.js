(function(){var e=Uint8Array,t=Uint16Array,n=Int32Array,r=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=function(e,r){for(var i=new t(31),a=0;a<31;++a)i[a]=r+=1<<e[a-1];for(var o=new n(i[30]),a=1;a<30;++a)for(var s=i[a];s<i[a+1];++s)o[s]=s-i[a]<<5|a;return{b:i,r:o}},s=o(r,2),c=s.b,l=s.r;c[28]=258,l[258]=28;var u=o(i,0),d=u.b;u.r;for(var f=new t(32768),p=0;p<32768;++p){var m=(p&43690)>>1|(p&21845)<<1;m=(m&52428)>>2|(m&13107)<<2,m=(m&61680)>>4|(m&3855)<<4,f[p]=((m&65280)>>8|(m&255)<<8)>>1}for(var h=(function(e,n,r){for(var i=e.length,a=0,o=new t(n);a<i;++a)e[a]&&++o[e[a]-1];var s=new t(n);for(a=1;a<n;++a)s[a]=s[a-1]+o[a-1]<<1;var c;if(r){c=new t(1<<n);var l=15-n;for(a=0;a<i;++a)if(e[a])for(var u=a<<4|e[a],d=n-e[a],p=s[e[a]-1]++<<d,m=p|(1<<d)-1;p<=m;++p)c[f[p]>>l]=u}else for(c=new t(i),a=0;a<i;++a)e[a]&&(c[a]=f[s[e[a]-1]++]>>15-e[a]);return c}),g=new e(288),p=0;p<144;++p)g[p]=8;for(var p=144;p<256;++p)g[p]=9;for(var p=256;p<280;++p)g[p]=7;for(var p=280;p<288;++p)g[p]=8;for(var _=new e(32),p=0;p<32;++p)_[p]=5;var v=h(g,9,1),y=h(_,5,1),b=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},x=function(e,t,n){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(t&7)&n},S=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(t&7)},C=function(e){return(e+7)/8|0},w=function(t,n,r){return(n==null||n<0)&&(n=0),(r==null||r>t.length)&&(r=t.length),new e(t.subarray(n,r))},T=[`unexpected EOF`,`invalid block type`,`invalid length/literal`,`invalid distance`,`stream finished`,`no stream handler`,,`no callback`,`invalid UTF-8 data`,`extra field too long`,`date not in range 1980-2099`,`filename too long`,`stream finishing`,`invalid zip data`],E=function(e,t,n){var r=Error(t||T[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,E),!n)throw r;return r},D=function(t,n,o,s){var l=t.length,u=s?s.length:0;if(!l||n.f&&!n.l)return o||new e(0);var f=!o,p=f||n.i!=2,m=n.i;f&&(o=new e(l*3));var g=function(t){var n=o.length;if(t>n){var r=new e(Math.max(n*2,t));r.set(o),o=r}},_=n.f||0,T=n.p||0,D=n.b||0,O=n.l,k=n.d,A=n.m,j=n.n,M=l*8;do{if(!O){_=x(t,T,1);var N=x(t,T+1,3);if(T+=3,!N){var P=C(T)+4,ee=t[P-4]|t[P-3]<<8,te=P+ee;if(te>l){m&&E(0);break}p&&g(D+ee),o.set(t.subarray(P,te),D),n.b=D+=ee,n.p=T=te*8,n.f=_;continue}else if(N==1)O=v,k=y,A=9,j=5;else if(N==2){var ne=x(t,T,31)+257,re=x(t,T+10,15)+4,ie=ne+x(t,T+5,31)+1;T+=14;for(var ae=new e(ie),F=new e(19),I=0;I<re;++I)F[a[I]]=x(t,T+I*3,7);T+=re*3;for(var oe=b(F),se=(1<<oe)-1,ce=h(F,oe,1),I=0;I<ie;){var le=ce[x(t,T,se)];T+=le&15;var P=le>>4;if(P<16)ae[I++]=P;else{var L=0,R=0;for(P==16?(R=3+x(t,T,3),T+=2,L=ae[I-1]):P==17?(R=3+x(t,T,7),T+=3):P==18&&(R=11+x(t,T,127),T+=7);R--;)ae[I++]=L}}var z=ae.subarray(0,ne),B=ae.subarray(ne);A=b(z),j=b(B),O=h(z,A,1),k=h(B,j,1)}else E(1);if(T>M){m&&E(0);break}}p&&g(D+131072);for(var ue=(1<<A)-1,de=(1<<j)-1,V=T;;V=T){var L=O[S(t,T)&ue],H=L>>4;if(T+=L&15,T>M){m&&E(0);break}if(L||E(2),H<256)o[D++]=H;else if(H==256){V=T,O=null;break}else{var fe=H-254;if(H>264){var I=H-257,pe=r[I];fe=x(t,T,(1<<pe)-1)+c[I],T+=pe}var me=k[S(t,T)&de],he=me>>4;me||E(3),T+=me&15;var B=d[he];if(he>3){var pe=i[he];B+=S(t,T)&(1<<pe)-1,T+=pe}if(T>M){m&&E(0);break}p&&g(D+131072);var U=D+fe;if(D<B){var ge=u-B,_e=Math.min(B,U);for(ge+D<0&&E(3);D<_e;++D)o[D]=s[ge+D]}for(;D<U;++D)o[D]=o[D-B]}}n.l=O,n.p=V,n.b=D,n.f=_,O&&(_=1,n.m=A,n.d=k,n.n=j)}while(!_);return D!=o.length&&f?w(o,0,D):o.subarray(0,D)},O=new e(0),k=function(e,t){return e[t]|e[t+1]<<8},A=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},j=function(e,t){return A(e,t)+A(e,t+4)*4294967296};function M(e,t){return D(e,{i:2},t&&t.out,t&&t.dictionary)}var N=typeof TextDecoder<`u`&&new TextDecoder;try{N.decode(O,{stream:!0})}catch{}var P=function(e){for(var t=``,n=0;;){var r=e[n++],i=(r>127)+(r>223)+(r>239);if(n+i>e.length)return{s:t,r:w(e,n-1)};i?i==3?(r=((r&15)<<18|(e[n++]&63)<<12|(e[n++]&63)<<6|e[n++]&63)-65536,t+=String.fromCharCode(55296|r>>10,56320|r&1023)):i&1?t+=String.fromCharCode((r&31)<<6|e[n++]&63):t+=String.fromCharCode((r&15)<<12|(e[n++]&63)<<6|e[n++]&63):t+=String.fromCharCode(r)}};function ee(e,t){if(t){for(var n=``,r=0;r<e.length;r+=16384)n+=String.fromCharCode.apply(null,e.subarray(r,r+16384));return n}else if(N)return N.decode(e);else{var i=P(e),a=i.s,n=i.r;return n.length&&E(8),a}}var te=function(e,t){return t+30+k(e,t+26)+k(e,t+28)},ne=function(e,t,n){var r=k(e,t+28),i=k(e,t+30),a=ee(e.subarray(t+46,t+46+r),!(k(e,t+8)&2048)),o=t+46+r,s=re(e,o,i,n,A(e,t+20),A(e,t+24),A(e,t+42)),c=s[0],l=s[1],u=s[2];return[k(e,t+10),c,l,a,o+i+k(e,t+32),u]},re=function(e,t,n,r,i,a,o){var s=i==4294967295,c=a==4294967295,l=o==4294967295,u=t+n,d=s+c+l;if(r&&d){for(;t+4<u;t+=4+k(e,t+2))if(k(e,t)==1)return[s?j(e,t+4+8*c):i,c?j(e,t+4):a,l?j(e,t+4+8*(c+s)):o,1];r<2&&E(13)}return[i,a,o,0]};function ie(t,n){for(var r={},i=t.length-22;A(t,i)!=101010256;--i)(!i||t.length-i>65558)&&E(13);var a=k(t,i+8);if(!a)return{};var o=A(t,i+16),s=A(t,i-20)==117853008;if(s){var c=A(t,i-12);s=A(t,c)==101075792,s&&(a=A(t,c+32),o=A(t,c+48))}for(var l=n&&n.filter,u=0;u<a;++u){var d=ne(t,o,s),f=d[0],p=d[1],m=d[2],h=d[3],g=d[4],_=d[5],v=te(t,_);o=g,(!l||l({name:h,size:p,originalSize:m,compression:f}))&&(f?f==8?r[h]=M(t.subarray(v,v+p),{out:new e(m)}):E(14,`unknown compression type `+f):r[h]=w(t,v,v+p))}return r}var ae=ArrayBuffer,F=Uint8Array,I=Uint16Array,oe=Int16Array,se=Int32Array,ce=function(e,t,n){if(F.prototype.slice)return F.prototype.slice.call(e,t,n);(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length);var r=new F(n-t);return r.set(e.subarray(t,n)),r},le=function(e,t,n,r){if(F.prototype.fill)return F.prototype.fill.call(e,t,n,r);for((n==null||n<0)&&(n=0),(r==null||r>e.length)&&(r=e.length);n<r;++n)e[n]=t;return e},L=function(e,t,n,r){if(F.prototype.copyWithin)return F.prototype.copyWithin.call(e,t,n,r);for((n==null||n<0)&&(n=0),(r==null||r>e.length)&&(r=e.length);n<r;)e[t++]=e[n++]},R=[`invalid zstd data`,`window size too large (>2046MB)`,`invalid block type`,`FSE accuracy too high`,`match distance too far back`,`unexpected EOF`],z=function(e,t,n){var r=Error(t||R[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,z),!n)throw r;return r},B=function(e,t,n){for(var r=0,i=0;r<n;++r)i|=e[t++]<<(r<<3);return i},ue=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},de=function(e,t){var n=e[0]|e[1]<<8|e[2]<<16;if(n==3126568&&e[3]==253){var r=e[4],i=r>>5&1,a=r>>2&1,o=r&3,s=r>>6;r&8&&z(0);var c=6-i,l=o==3?4:o,u=B(e,c,l);c+=l;var d=s?1<<s:i,f=B(e,c,d)+(s==1&&256),p=f;if(!i){var m=1<<10+(e[5]>>3);p=m+(m>>3)*(e[5]&7)}p>2145386496&&z(1);var h=new F((t==1?f||p:t?0:p)+12);return h[0]=1,h[4]=4,h[8]=8,{b:c+d,y:0,l:0,d:u,w:t&&t!=1?t:h.subarray(12),e:p,o:new se(h.buffer,0,3),u:f,c:a,m:Math.min(131072,p)}}else if((n>>4|e[3]<<20)==25481893)return ue(e,4)+8;z(0)},V=function(e){for(var t=0;1<<t<=e;++t);return t-1},H=function(e,t,n){var r=(t<<3)+4,i=(e[t]&15)+5;i>n&&z(3);for(var a=1<<i,o=a,s=-1,c=-1,l=-1,u=a,d=new ae(512+(a<<2)),f=new oe(d,0,256),p=new I(d,0,256),m=new I(d,512,a),h=512+(a<<1),g=new F(d,h,a),_=new F(d,h+a);s<255&&o>0;){var v=V(o+1),y=r>>3,b=(1<<v+1)-1,x=(e[y]|e[y+1]<<8|e[y+2]<<16)>>(r&7)&b,S=(1<<v)-1,C=b-o-1,w=x&S;if(w<C?(r+=v,x=w):(r+=v+1,x>S&&(x-=C)),f[++s]=--x,x==-1?(o+=x,g[--u]=s):o-=x,!x)do{var T=r>>3;c=(e[T]|e[T+1]<<8)>>(r&7)&3,r+=2,s+=c}while(c==3)}(s>255||o)&&z(0);for(var E=0,D=(a>>1)+(a>>3)+3,O=a-1,k=0;k<=s;++k){var A=f[k];if(A<1){p[k]=-A;continue}for(l=0;l<A;++l){g[E]=k;do E=E+D&O;while(E>=u)}}for(E&&z(0),l=0;l<a;++l){var j=p[g[l]]++;m[l]=(j<<(_[l]=i-V(j)))-a}return[r+7>>3,{b:i,s:g,n:_,t:m}]},fe=function(e,t){var n=0,r=-1,i=new F(292),a=e[t],o=i.subarray(0,256),s=i.subarray(256,268),c=new I(i.buffer,268);if(a<128){var l=H(e,t+1,6),u=l[0],d=l[1];t+=a;var f=u<<3,p=e[t];p||z(0);for(var m=0,h=0,g=d.b,_=g,v=(++t<<3)-8+V(p);v-=g,!(v<f);){var y=v>>3;if(m+=(e[y]|e[y+1]<<8)>>(v&7)&(1<<g)-1,o[++r]=d.s[m],v-=_,v<f)break;y=v>>3,h+=(e[y]|e[y+1]<<8)>>(v&7)&(1<<_)-1,o[++r]=d.s[h],g=d.n[m],m=d.t[m],_=d.n[h],h=d.t[h]}++r>255&&z(0)}else{for(r=a-127;n<r;n+=2){var b=e[++t];o[n]=b>>4,o[n+1]=b&15}++t}var x=0;for(n=0;n<r;++n){var S=o[n];S>11&&z(0),x+=S&&1<<S-1}var C=V(x)+1,w=1<<C,T=w-x;for(T&T-1&&z(0),o[r++]=V(T)+1,n=0;n<r;++n){var S=o[n];++s[o[n]=S&&C+1-S]}var E=new F(w<<1),D=E.subarray(0,w),O=E.subarray(w);for(c[C]=0,n=C;n>0;--n){var k=c[n];le(O,n,k,c[n-1]=k+s[n]*(1<<C-n))}for(c[0]!=w&&z(0),n=0;n<r;++n){var A=o[n];if(A){var j=c[A];le(D,n,j,c[A]=j+(1<<C-A))}}return[t,{n:O,b:C,s:D}]},pe=H(new F([81,16,99,140,49,198,24,99,12,33,196,24,99,102,102,134,70,146,4]),0,6)[1],me=H(new F([33,20,196,24,99,140,33,132,16,66,8,33,132,16,66,8,33,68,68,68,68,68,68,68,68,36,9]),0,6)[1],he=H(new F([32,132,16,66,102,70,68,68,68,68,36,73,2]),0,5)[1],U=function(e,t){for(var n=e.length,r=new se(n),i=0;i<n;++i)r[i]=t,t+=1<<e[i];return r},ge=new F(new se([0,0,0,0,16843009,50528770,134678020,202050057,269422093]).buffer,0,36),_e=U(ge,0),ve=new F(new se([0,0,0,0,0,0,0,0,16843009,50528770,117769220,185207048,252579084,16]).buffer,0,53),ye=U(ve,3),be=function(e,t,n){var r=e.length,i=t.length,a=e[r-1],o=(1<<n.b)-1,s=-n.b;a||z(0);for(var c=0,l=n.b,u=(r<<3)-8+V(a)-l,d=-1;u>s&&d<i;){var f=u>>3,p=(e[f]|e[f+1]<<8|e[f+2]<<16)>>(u&7);c=(c<<l|p)&o,t[++d]=n.s[c],u-=l=n.n[c]}(u!=s||d+1!=i)&&z(0)},xe=function(e,t,n){var r=6,i=t.length+3>>2,a=i<<1,o=i+a;be(e.subarray(r,r+=e[0]|e[1]<<8),t.subarray(0,i),n),be(e.subarray(r,r+=e[2]|e[3]<<8),t.subarray(i,a),n),be(e.subarray(r,r+=e[4]|e[5]<<8),t.subarray(a,o),n),be(e.subarray(r),t.subarray(o),n)},Se=function(e,t,n){var r,i=t.b,a=e[i],o=a>>1&3;t.l=a&1;var s=a>>3|e[i+1]<<5|e[i+2]<<13,c=(i+=3)+s;if(o==1)return i>=e.length?void 0:(t.b=i+1,n?(le(n,e[i],t.y,t.y+=s),n):le(new F(s),e[i]));if(!(c>e.length)){if(o==0)return t.b=c,n?(n.set(e.subarray(i,c),t.y),t.y+=s,n):ce(e,i,c);if(o==2){var l=e[i],u=l&3,d=l>>2&3,f=l>>4,p=0,m=0;u<2?d&1?f|=e[++i]<<4|(d&2&&e[++i]<<12):f=l>>3:(m=d,d<2?(f|=(e[++i]&63)<<4,p=e[i]>>6|e[++i]<<2):d==2?(f|=e[++i]<<4|(e[++i]&3)<<12,p=e[i]>>2|e[++i]<<6):(f|=e[++i]<<4|(e[++i]&63)<<12,p=e[i]>>6|e[++i]<<2|e[++i]<<10)),++i;var h=n?n.subarray(t.y,t.y+t.m):new F(t.m),g=h.length-f;if(u==0)h.set(e.subarray(i,i+=f),g);else if(u==1)le(h,e[i++],g);else{var _=t.h;if(u==2){var v=fe(e,i);p+=i-(i=v[0]),t.h=_=v[1]}else _||z(0);(m?xe:be)(e.subarray(i,i+=p),h.subarray(g),_)}var y=e[i++];if(y){y==255?y=(e[i++]|e[i++]<<8)+32512:y>127&&(y=y-128<<8|e[i++]);var b=e[i++];b&3&&z(0);for(var x=[me,he,pe],S=2;S>-1;--S){var C=b>>(S<<1)+2&3;if(C==1){var w=new F([0,0,e[i++]]);x[S]={s:w.subarray(2,3),n:w.subarray(0,1),t:new I(w.buffer,0,1),b:0}}else C==2?(r=H(e,i,9-(S&1)),i=r[0],x[S]=r[1]):C==3&&(t.t||z(0),x[S]=t.t[S])}var T=t.t=x,E=T[0],D=T[1],O=T[2],k=e[c-1];k||z(0);var A=(c<<3)-8+V(k)-O.b,j=A>>3,M=0,N=(e[j]|e[j+1]<<8)>>(A&7)&(1<<O.b)-1;j=(A-=D.b)>>3;var P=(e[j]|e[j+1]<<8)>>(A&7)&(1<<D.b)-1;j=(A-=E.b)>>3;var ee=(e[j]|e[j+1]<<8)>>(A&7)&(1<<E.b)-1;for(++y;--y;){var te=O.s[N],ne=O.n[N],re=E.s[ee],ie=E.n[ee],ae=D.s[P],oe=D.n[P];j=(A-=ae)>>3;var se=1<<ae,L=se+((e[j]|e[j+1]<<8|e[j+2]<<16|e[j+3]<<24)>>>(A&7)&se-1);j=(A-=ve[re])>>3;var R=ye[re]+((e[j]|e[j+1]<<8|e[j+2]<<16)>>(A&7)&(1<<ve[re])-1);j=(A-=ge[te])>>3;var B=_e[te]+((e[j]|e[j+1]<<8|e[j+2]<<16)>>(A&7)&(1<<ge[te])-1);if(j=(A-=ne)>>3,N=O.t[N]+((e[j]|e[j+1]<<8)>>(A&7)&(1<<ne)-1),j=(A-=ie)>>3,ee=E.t[ee]+((e[j]|e[j+1]<<8)>>(A&7)&(1<<ie)-1),j=(A-=oe)>>3,P=D.t[P]+((e[j]|e[j+1]<<8)>>(A&7)&(1<<oe)-1),L>3)t.o[2]=t.o[1],t.o[1]=t.o[0],t.o[0]=L-=3;else{var ue=L-(B!=0);ue?(L=ue==3?t.o[0]-1:t.o[ue],ue>1&&(t.o[2]=t.o[1]),t.o[1]=t.o[0],t.o[0]=L):L=t.o[0]}for(var S=0;S<B;++S)h[M+S]=h[g+S];M+=B,g+=B;var de=M-L;if(de<0){var U=-de,Se=t.e+de;U>R&&(U=R);for(var S=0;S<U;++S)h[M+S]=t.w[Se+S];M+=U,R-=U,de=0}for(var S=0;S<R;++S)h[M+S]=h[de+S];M+=R}if(M!=g)for(;g<h.length;)h[M++]=h[g++];else M=h.length;n?t.y+=M:h=ce(h,0,M)}else if(n){if(t.y+=f,g)for(var S=0;S<f;++S)h[S]=h[g+S]}else g&&(h=ce(h,g));return t.b=c,h}z(2)}},Ce=function(e,t){if(e.length==1)return e[0];for(var n=new F(t),r=0,i=0;r<e.length;++r){var a=e[r];n.set(a,i),i+=a.length}return n};function we(e,t){for(var n=[],r=+!t,i=0,a=0;e.length;){var o=de(e,r||t);if(typeof o==`object`){for(r?(t=null,o.w.length==o.u&&(n.push(t=o.w),a+=o.u)):(n.push(t),o.e=0);!o.l;){var s=Se(e,o,t);s||z(5),t?o.e=o.y:(n.push(s),a+=s.length,L(o.w,0,s.length),o.w.set(s,o.w.length-s.length))}i=o.b+o.c*4}else i=o;e=e.subarray(i)}return Ce(n,a)}new Uint8Array([40,181,47,253]);function Te(e){return e.length>=4&&e[0]===40&&e[1]===181&&e[2]===47&&e[3]===253}function Ee(e){if(new TextDecoder().decode(e.slice(0,8))!==`fig-kiwi`)return null;let t=new DataView(e.buffer,e.byteOffset,e.byteLength),n=12,r=[];for(;n<e.length;){let i=t.getUint32(n,!0);n+=4,r.push(e.slice(n,n+i)),n+=i}return r.length>=2?r:null}let De=new Int32Array(1),Oe=new Float32Array(De.buffer),ke=new TextDecoder;var Ae=class{_data;_index;length;constructor(e){if(e&&!(e instanceof Uint8Array))throw Error(`Must initialize a ByteBuffer with a Uint8Array`);this._data=e||new Uint8Array(256),this._index=0,this.length=e?e.length:0}get offset(){return this._index}set offset(e){this._index=e}toUint8Array(){return this._data.subarray(0,this.length)}readByte(){return this._data[this._index++]}readByteArray(){let e=this.readVarUint(),t=this._index;return this._index=t+e,this._data.slice(t,t+e)}skipByteArray(){let e=this.readVarUint();this._index+=e}readVarFloat(){let e=this._index,t=this._data,n=t[e];if(n===0)return this._index=e+1,0;let r=n|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24;return this._index=e+4,r=r<<23|r>>>9,De[0]=r,Oe[0]}readVarUint(){let e=this._data,t=this._index,n=e[t++],r=n&127;return n<128||(n=e[t++],r|=(n&127)<<7,n<128)||(n=e[t++],r|=(n&127)<<14,n<128)||(n=e[t++],r|=(n&127)<<21,n<128)?(this._index=t,r):(n=e[t++],r|=(n&127)<<28,this._index=t,r>>>0)}readVarInt(){let e=this.readVarUint()|0;return e&1?~(e>>>1):e>>>1}readVarUint64(){let e=BigInt(0),t=BigInt(0),n=BigInt(7),r=this.readByte();for(;r&128&&t<56;)e|=BigInt(r&127)<<t,t+=n,r=this.readByte();return e|=BigInt(r)<<t,e}readVarInt64(){let e=this.readVarUint64(),t=BigInt(1),n=e&t;return e>>=t,n?~e:e}readString(){let e=this._index,t=this.findStringTerminator(e);return this._index=t+1,ke.decode(this._data.subarray(e,t))}skipString(){this._index=this.findStringTerminator(this._index)+1}findStringTerminator(e){let t=this._data,n=e;for(;n<t.length&&t[n]!==0;)n++;if(n>=t.length)throw Error(`Unterminated string in Kiwi message`);return n}_growBy(e){if(this.length+e>this._data.length){let t=new Uint8Array(this.length+e<<1);t.set(this._data),this._data=t}this.length+=e}writeByte(e){let t=this.length;this._growBy(1),this._data[t]=e}writeByteArray(e){this.writeVarUint(e.length);let t=this.length;this._growBy(e.length),this._data.set(e,t)}writeVarFloat(e){let t=this.length;Oe[0]=e;let n=De[0];if(n=n>>>23|n<<9,!(n&255)){this.writeByte(0);return}this._growBy(4);let r=this._data;r[t]=n,r[t+1]=n>>8,r[t+2]=n>>16,r[t+3]=n>>24}writeVarUint(e){if(e<0||e>4294967295)throw Error(`Outside uint range: `+e);do{let t=e&127;e>>>=7,this.writeByte(e?t|128:t)}while(e)}writeVarInt(e){if(e<-2147483648||e>2147483647)throw Error(`Outside int range: `+e);this.writeVarUint((e<<1^e>>31)>>>0)}writeVarUint64(e){if(typeof e==`string`)e=BigInt(e);else if(typeof e!=`bigint`)throw Error(`Expected bigint but got ${typeof e}: ${String(e)}`);if(e<0||e>BigInt(`0xFFFFFFFFFFFFFFFF`))throw Error(`Outside uint64 range: `+e);let t=BigInt(127),n=BigInt(7);for(let r=0;e>t&&r<8;r++)this.writeByte(Number(e&t)|128),e>>=n;this.writeByte(Number(e))}writeVarInt64(e){if(typeof e==`string`)e=BigInt(e);else if(typeof e!=`bigint`)throw Error(`Expected bigint but got ${typeof e}: ${String(e)}`);if(e<-BigInt(`0x8000000000000000`)||e>BigInt(`0x7FFFFFFFFFFFFFFF`))throw Error(`Outside int64 range: `+e);let t=BigInt(1);this.writeVarUint64(e<0?~(e<<t):e<<t)}writeString(e){let t;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(n+1===e.length||r<55296||r>=56320)t=r;else{let i=e.charCodeAt(++n);t=(r<<10)+i+-56613888}if(t===0)throw Error(`Cannot encode a string containing the null character`);t<128?this.writeByte(t):(t<2048?this.writeByte(t>>6&31|192):(t<65536?this.writeByte(t>>12&15|224):(this.writeByte(t>>18&7|240),this.writeByte(t>>12&63|128)),this.writeByte(t>>6&63|128)),this.writeByte(t&63|128))}this.writeByte(0)}};function W(e){return JSON.stringify(e)}function G(e,t,n){var r=Error(e);throw r.line=t,r.column=n,r}let je=[`bool`,`byte`,`float`,`int`,`int64`,`string`,`uint`,`uint64`],Me=[`ByteBuffer`,`package`],Ne=/((?:-|\b)\d+\b|[=;{}]|\[\]|\[deprecated\]|\b[A-Za-z_][A-Za-z0-9_]*\b|\/\/.*|\s+)/g,Pe=/^[A-Za-z_][A-Za-z0-9_]*$/,Fe=/^\/\/.*|\s+$/,Ie=/^=$/,Le=/^$/,Re=/^;$/,ze=/^-?\d+$/,Be=/^\{$/,Ve=/^\}$/,He=/^\[\]$/,Ue=/^enum$/,We=/^struct$/,Ge=/^message$/,Ke=/^package$/,qe=/^\[deprecated\]$/;function Je(e){let t=e.split(Ne),n=[],r=0,i=0;for(let e=0;e<t.length;e++){let a=t[e];e&1?Fe.test(a)||n.push({text:a,line:i+1,column:r+1}):a!==``&&G(`Syntax error `+W(a),i+1,r+1);let o=a.split(`
`);o.length>1&&(r=0),i+=o.length-1,r+=o[o.length-1].length}return n.push({text:``,line:i,column:r}),n}function Ye(e){function t(){return e[s]}function n(e){return e.test(t().text)?(s++,!0):!1}function r(e,r){if(!n(e)){let e=t();G(`Expected `+r+` but found `+W(e.text),e.line,e.column)}}function i(){let e=t();G(`Unexpected token `+W(e.text),e.line,e.column)}let a=[],o=null,s=0;for(n(Ke)&&(o=t().text,r(Pe,`identifier`),r(Re,`";"`));s<e.length&&!n(Le);){let e=[],o;n(Ue)?o=`ENUM`:n(We)?o=`STRUCT`:n(Ge)?o=`MESSAGE`:i();let s=t();for(r(Pe,`identifier`),r(Be,`"{"`);!n(Ve);){let i=null,a=!1,s=!1;o!==`ENUM`&&(i=t().text,r(Pe,`identifier`),a=n(He));let c=t();r(Pe,`identifier`);let l=null;o!==`STRUCT`&&(r(Ie,`"="`),l=t(),r(ze,`integer`),(l.text|0)+``!==l.text&&G(`Invalid integer `+W(l.text),l.line,l.column));let u=t();n(qe)&&(o!==`MESSAGE`&&G(`Cannot deprecate this field`,u.line,u.column),s=!0),r(Re,`";"`),e.push({name:c.text,line:c.line,column:c.column,type:i,isArray:a,isDeprecated:s,value:l===null?e.length+1:l.text|0})}a.push({name:s.text,line:s.line,column:s.column,kind:o,fields:e})}return{package:o,definitions:a}}function Xe(e){let t=je.slice(),n={};for(let r=0;r<e.definitions.length;r++){let i=e.definitions[r];t.includes(i.name)&&G(`The type `+W(i.name)+` is defined twice`,i.line,i.column),Me.includes(i.name)&&G(`The type name `+W(i.name)+` is reserved`,i.line,i.column),t.push(i.name),n[i.name]=i}for(let n=0;n<e.definitions.length;n++){let r=e.definitions[n],i=r.fields;if(r.kind===`ENUM`||i.length===0)continue;for(let e=0;e<i.length;e++){let n=i[e];t.includes(n.type)||G(`The type `+W(n.type)+` is not defined for field `+W(n.name),n.line,n.column)}let a=[];for(let e=0;e<i.length;e++){let t=i[e];a.includes(t.value)&&G(`The id for field `+W(t.name)+` is used twice`,t.line,t.column),t.value<=0&&G(`The id for field `+W(t.name)+` must be positive`,t.line,t.column),a.push(t.value)}}let r={},i=e=>{let t=n[e];if(t&&t.kind===`STRUCT`&&(r[e]===1&&G(`Recursive nesting of `+W(e)+` is not allowed`,t.line,t.column),r[e]!==2&&t)){r[e]=1;let n=t.fields;for(let e=0;e<n.length;e++){let t=n[e];t.isArray||i(t.type)}r[e]=2}return!0};for(let t=0;t<e.definitions.length;t++)i(e.definitions[t].name)}function Ze(e){let t=Ye(Je(e));return Xe(t),t}function Qe(e){return e}function $e(e){return e}function et(e){return e}function tt(e,t){return Object.hasOwn(e,t)}function nt(e){let t=Object.values(e);for(let n=0;n<t.length;n++){let r=t[n];if(r.kind!==`ENUM`)for(let t=0;t<r.fields.length;t++){let n=r.fields[t],i=n.type;i===null&&G(`Invalid type null for field `+W(n.name),n.line,n.column),!je.includes(i)&&!tt(e,i)&&G(`Invalid type `+W(i)+` for field `+W(n.name),n.line,n.column)}}}function rt(e,t,n,r){switch(n){case`bool`:return!!r.readByte();case`byte`:return r.readByte();case`int`:return r.readVarInt();case`uint`:return r.readVarUint();case`float`:return r.readVarFloat();case`string`:return r.readString();case`int64`:return r.readVarInt64();case`uint64`:return r.readVarUint64();default:{let i=t[n];return i||G(`Invalid type `+W(n),0,0),i.kind===`ENUM`?et(e[i.name])[r.readVarUint()]:Qe(e[`decode`+i.name])(r)}}}function it(e,t,n,r,i){switch(n){case`bool`:case`byte`:i.writeByte(r);return;case`int`:i.writeVarInt(r);return;case`uint`:i.writeVarUint(r);return;case`float`:i.writeVarFloat(r);return;case`string`:i.writeString(r);return;case`int64`:i.writeVarInt64(r);return;case`uint64`:i.writeVarUint64(r);return;default:{let a=t[n];if(a||G(`Invalid type `+W(n),0,0),a.kind===`ENUM`){let t=et(e[a.name])[r];if(t===void 0)throw Error(`Invalid value `+JSON.stringify(r)+` for enum `+W(a.name));i.writeVarUint(t)}else $e(e[`encode`+a.name])(r,i)}}}function at(e,t,n,r,i){let a=n.type;if(a===null&&G(`Invalid type null for field `+W(n.name),n.line,n.column),n.isArray){if(n.isDeprecated){if(a===`byte`)r.readByteArray();else{let n=r.readVarUint();for(;n-->0;)rt(e,t,a,r)}return}if(a===`byte`){i[n.name]=r.readByteArray();return}let o=r.readVarUint(),s=Array.from({length:o});i[n.name]=s;for(let n=0;n<o;n++)s[n]=rt(e,t,a,r);return}if(n.isDeprecated){rt(e,t,a,r);return}i[n.name]=rt(e,t,a,r)}function ot(e,t,n,r,i){let a=n.type;if(a===null&&G(`Invalid type null for field `+W(n.name),n.line,n.column),n.isArray){if(a===`byte`){i.writeByteArray(r);return}let n=r;i.writeVarUint(n.length);for(let r=0;r<n.length;r++)it(e,t,a,n[r],i);return}it(e,t,a,r,i)}function st(e,t,n){let r=new Map;for(let e=0;e<n.fields.length;e++)r.set(n.fields[e].value,n.fields[e]);return function(i){let a=i instanceof e.ByteBuffer?i:new e.ByteBuffer(i),o={};if(n.kind===`MESSAGE`)for(;;){let n=a.readVarUint();if(n===0)return o;let i=r.get(n);if(!i)throw Error(`Attempted to parse invalid message`);at(e,t,i,a,o)}else{for(let r=0;r<n.fields.length;r++)at(e,t,n.fields[r],a,o);return o}}}function ct(e,t,n){return function(r,i){let a=!i,o=i||new e.ByteBuffer;for(let i=0;i<n.fields.length;i++){let a=n.fields[i];if(a.isDeprecated)continue;let s=r[a.name];if(s!=null)n.kind===`MESSAGE`&&o.writeVarUint(a.value),ot(e,t,a,s,o);else if(n.kind===`STRUCT`)throw Error(`Missing required field `+W(a.name))}if(n.kind===`MESSAGE`&&o.writeVarUint(0),a)return o.toUint8Array()}}function lt(e){let t=Object.create(null);for(let n=0;n<e.definitions.length;n++)t[e.definitions[n].name]=e.definitions[n];nt(t);let n={ByteBuffer:Ae};for(let r=0;r<e.definitions.length;r++){let i=e.definitions[r];switch(i.kind){case`ENUM`:{let e={};for(let t=0;t<i.fields.length;t++){let n=i.fields[t];e[n.name]=n.value,e[n.value]=n.name}n[i.name]=e;break}case`STRUCT`:case`MESSAGE`:n[`decode`+i.name]=st(n,t,i),n[`encode`+i.name]=ct(n,t,i);break;default:G(`Invalid definition kind `+W(i.kind),i.line,i.column);break}}return n}let ut=[`bool`,`byte`,`int`,`uint`,`float`,`string`,`int64`,`uint64`],dt=[`ENUM`,`STRUCT`,`MESSAGE`];function ft(e){let t=e instanceof Ae?e:new Ae(e),n=t.readVarUint(),r=[];for(let e=0;e<n;e++){let e=t.readString(),n=t.readByte(),i=t.readVarUint(),a=[];for(let e=0;e<i;e++){let e=t.readString(),r=t.readVarInt(),i=!!(t.readByte()&1),o=t.readVarUint();a.push({name:e,line:0,column:0,type:dt[n]===`ENUM`?null:r,isArray:i,isDeprecated:!1,value:o})}r.push({name:e,line:0,column:0,kind:dt[n],fields:a})}for(let e=0;e<n;e++){let t=r[e].fields;for(let e=0;e<t.length;e++){let n=t[e],i=n.type;if(i!==null&&i<0){if(~i>=ut.length)throw Error(`Invalid type `+i);n.type=ut[~i]}else{if(i!==null&&i>=r.length)throw Error(`Invalid type `+i);n.type=i===null?null:r[i].name}}}return{package:null,definitions:r}}function pt(e){for(let t of e.definitions)mt(t),t.kind===`ENUM`&&ht(t)}function mt(e){let t=new Set;for(let n of e.fields)t.has(n.name)&&G(`The field ${W(n.name)} is defined twice in ${W(e.name)}`,n.line,n.column),t.add(n.name)}function ht(e){let t=new Set;for(let n of e.fields)t.has(n.value)&&G(`The enum value ${n.value} is used twice in ${W(e.name)}`,n.line,n.column),t.add(n.value)}function gt(e){return new Map(e.fields.map(e=>[e.value,e]))}function _t(e,t){let n=e.fields.get(t.name);return n||(n=gt(t),e.fields.set(t.name,n)),n}function vt(e,t,n){switch(t.type){case`bool`:case`byte`:e.readByte();return;case`int`:e.readVarInt();return;case`uint`:e.readVarUint();return;case`float`:e.readVarFloat();return;case`string`:e.skipString();return;case`int64`:e.readVarInt64();return;case`uint64`:e.readVarUint64();return}let r=t.type?n.definitions.get(t.type):void 0;if(!r)throw Error(`Invalid Kiwi field type: ${String(t.type)}`);if(r.kind===`ENUM`){e.readVarUint();return}bt(e,r,n)}function yt(e,t,n){if(!t.isArray){vt(e,t,n);return}if(t.type===`byte`){e.skipByteArray();return}let r=e.readVarUint();for(;r-->0;)vt(e,t,n)}function bt(e,t,n){if(t.kind===`STRUCT`){for(let r of t.fields)yt(e,r,n);return}let r=_t(n,t);for(;;){let i=e.readVarUint();if(i===0)return;let a=r.get(i);if(!a)throw Error(`Invalid field ${i} in Kiwi ${t.name}`);yt(e,a,n)}}function xt(e,t,n){let r=e.readVarUint(),i=t.type?n.definitions.get(t.type):void 0;return i?.kind===`ENUM`?i.fields.find(e=>e.value===r)?.name??null:null}function St(e,t,n){let r=_t(n,t),i=null,a=null,o=null,s=null,c=null,l=null,u=null,d=null,f=!1;for(;;){let t=e.readVarUint();if(t===0)break;let p=r.get(t);if(!p)throw Error(`Invalid field ${t} in Kiwi NodeChange`);switch(p.name){case`guid`:i=e.readVarUint(),a=e.readVarUint();break;case`parentIndex`:o=e.readVarUint(),s=e.readVarUint(),c=e.offset,e.skipString();break;case`phase`:l=xt(e,p,n);break;case`type`:u=xt(e,p,n);break;case`name`:u===`DOCUMENT`||u===`CANVAS`?d=e.readString():e.skipString();break;case`internalOnly`:f=!!e.readByte();break;default:yt(e,p,n)}}if(u!==`DOCUMENT`&&u!==`CANVAS`||i===null||a===null)return null;let p=null;if(c!==null){let t=e.offset;e.offset=c,p=e.readString(),e.offset=t}let m=o===null||s===null?null:`${o}:${s}`;return{sourceId:`${i}:${a}`,parentId:m,position:p,phase:l,type:u,name:d??`Page`,internalOnly:f}}function Ct(e,t){let n=new Map(e.definitions.map(e=>[e.name,e])),r={definitions:n,fields:new Map},i=n.get(`Message`),a=n.get(`NodeChange`);if(i?.kind!==`MESSAGE`||a?.kind!==`MESSAGE`)return[];let o=new Ae(t),s=_t(r,i),c=[];for(;;){let e=o.readVarUint();if(e===0)break;let t=s.get(e);if(!t)throw Error(`Invalid field ${e} in Kiwi Message`);if(t.name!==`nodeChanges`||!t.isArray){yt(o,t,r);continue}let n=o.readVarUint();for(;n-->0;){let e=St(o,a,r);e&&c.push(e)}break}let l=c.find(e=>e.type===`DOCUMENT`&&e.phase!==`REMOVED`)?.sourceId;return c.filter(e=>e.type===`CANVAS`&&e.phase!==`REMOVED`&&(!l||e.parentId===l)).sort((e,t)=>{let n=e.position??``,r=t.position??``;return n<r?-1:+(n>r)}).map(({sourceId:e,name:t,position:n,internalOnly:r})=>({sourceId:e,name:t,position:n,internalOnly:r}))}function wt(e){for(let t of e){if(t.pluginData&&t.pluginData.length>1){let e=new Map;for(let n of t.pluginData)e.set(`${n.pluginID}\0${n.key}\0${n.value}`,n);e.size<t.pluginData.length&&(t.pluginData=[...e.values()])}if(t.pluginRelaunchData&&t.pluginRelaunchData.length>1){let e=new Map;for(let n of t.pluginRelaunchData)e.set(`${n.pluginID}\0${n.command}\0${n.message}\0${n.isDeleted}`,n);e.size<t.pluginRelaunchData.length&&(t.pluginRelaunchData=[...e.values()])}}}function Tt(e){if(new TextDecoder().decode(e.slice(0,8))!==`fig-kiwi`)return null;let t=new DataView(e.buffer,e.byteOffset,e.byteLength),n=t.getUint32(8,!0),r=12,i=[];for(;r<e.length&&!(r+4>e.length);){let n=t.getUint32(r,!0);if(r+=4,r+n>e.length)throw Error(`Corrupted .fig file: chunk at offset ${r-4} declares length ${n} but only ${e.length-r} bytes remain`);i.push(e.slice(r,r+n)),r+=n}if(i.length<2)return null;let a=i[1],o;if(Te(a))o=we(a);else try{o=M(a)}catch{throw Error(`Failed to decompress fig-kiwi data chunk`)}return{schemaDeflated:i[0],dataRaw:o,version:n}}function Et(e,t){let n=Tt(e);if(!n)throw Error(`Invalid fig-kiwi container`);let r=ft(new Ae(M(n.schemaDeflated)));if(t)try{let e=Ct(r,n.dataRaw);e.length>0&&t(e)}catch(e){console.warn(`Failed to scan FIG page manifest; continuing with full decode:`,e)}let i=lt(r).decodeMessage(n.dataRaw),a=i.nodeChanges;if(!a||a.length===0)throw Error(`No nodes found in .fig file`);return wt(a),{nodeChanges:a,blobs:(i.blobs??[]).map(e=>e.bytes instanceof Uint8Array?e.bytes:new Uint8Array(Object.values(e.bytes))),figKiwiVersion:n.version,figSchemaDeflated:n.schemaDeflated}}let Dt=new Uint8Array([137,80,78,71,13,10,26,10]);function Ot(e){return Dt.every((t,n)=>e[n]===t)}function kt(e){let t=e.toLowerCase();return t.endsWith(`.png`)||t.endsWith(`.jpg`)||t.endsWith(`.json`)}function At(e){let t=e[`canvas.fig`]??e.canvas;if(t)return t;let n=null;for(let[t,r]of Object.entries(e))!r||kt(t)||(!n||r.byteLength>n.byteLength)&&(n=r);return n}function jt(e){return e===`canvas.fig`||e===`canvas`}function Mt(e,t){let n=Ee(e);if(!n)return null;let r=Et(e,t),i=n.slice(2).find(Ot)??null;return{...r,images:[],thumbnailPNG:i,metaJSON:null}}function Nt(e,t){let n=new Uint8Array(e),r=Mt(n,t);if(r)return r;let i=At(ie(n,{filter:({name:e})=>jt(e)})),a,o;if(i)o=Et(i,t),a=ie(n,{filter:({name:e})=>!jt(e)});else{if(a=ie(n),i=At(a),!i)throw Error(`No canvas data found in .fig file. Entries: ${Object.keys(a).join(`, `)}`);o=Et(i,t)}let s=a[`meta.json`],c=Object.entries(a).filter(([e])=>e.startsWith(`images/`)&&e!==`images/`).map(([e,t])=>[e.slice(7),t]);return{...o,images:c,thumbnailPNG:a[`thumbnail.png`]??null,metaJSON:Object.hasOwn(a,`meta.json`)?new TextDecoder().decode(s):null}}let K=[`textData`,`derivedTextData`,`textUserLayoutVersion`,`textExplicitLayoutVersion`],q=[`strokeGeometry`,`vectorData`],Pt={fillStyleId:[`styleIdForFill`],strokeStyleId:[`styleIdForStrokeFill`],textStyleId:[`styleIdForText`],effectStyleId:[`styleIdForEffect`],gridStyleId:[`styleIdForGrid`],fills:[`fillPaints`,`backgroundPaints`,`backgroundColor`],strokes:[`strokePaints`],effects:[`effects`],blendMode:[`blendMode`],layoutGrids:[`layoutGrids`],guides:[`guides`],exportSettings:[`exportSettings`],cornerRadius:[`cornerRadius`],independentCorners:[`rectangleCornerRadiiIndependent`],topLeftRadius:[`rectangleTopLeftCornerRadius`,`rectangleCornerRadiiIndependent`],topRightRadius:[`rectangleTopRightCornerRadius`,`rectangleCornerRadiiIndependent`],bottomLeftRadius:[`rectangleBottomLeftCornerRadius`,`rectangleCornerRadiiIndependent`],bottomRightRadius:[`rectangleBottomRightCornerRadius`,`rectangleCornerRadiiIndependent`],cornerSmoothing:[`cornerSmoothing`],borderTopWeight:[`borderTopWeight`,...q],borderRightWeight:[`borderRightWeight`,...q],borderBottomWeight:[`borderBottomWeight`,...q],borderLeftWeight:[`borderLeftWeight`,...q],independentStrokeWeights:[`borderStrokeWeightsIndependent`,`borderTopWeight`,`borderRightWeight`,`borderBottomWeight`,`borderLeftWeight`,...q],strokeWeight:[`strokeWeight`,...q],strokeJoin:[`strokeJoin`,...q],strokeMiterLimit:[`miterLimit`,...q],strokeCap:[...q],dashPattern:[...q],text:[...K],styleRuns:[...K],fontSize:[`fontSize`,...K],fontFamily:[`fontName`,`fontVersion`,...K],fontWeight:[`semanticWeight`,...K],italic:[`semanticItalic`,...K],textAlignHorizontal:[`textAlignHorizontal`,...K],textAlignVertical:[`textAlignVertical`,...K],lineHeight:[`lineHeight`,...K],letterSpacing:[`letterSpacing`,`textTracking`,...K],textAutoResize:[`textAutoResize`,...K],textDecorationStyle:[`textDecorationStyle`,...K],textDecorationThickness:[`textDecorationThickness`,...K],textDecorationFills:[`textDecorationFillPaints`,...K],textUnderlineOffset:[`textUnderlineOffset`,...K],leadingTrim:[`leadingTrim`,...K],maxLines:[`maxLines`,...K],fontVariations:[`fontVariations`,...K],fontFeatures:[`fontVariantCommonLigatures`,`fontVariantContextualLigatures`,`toggledOnOTFeatures`,`toggledOffOTFeatures`,...K],minWidth:[`minSize`],minHeight:[`minSize`],maxWidth:[`maxSize`],maxHeight:[`maxSize`],vectorNetwork:[`vectorData`,`fillGeometry`,`strokeGeometry`],fillGeometry:[`fillGeometry`,`vectorData`],strokeGeometry:[`strokeGeometry`,`vectorData`],isMask:[`mask`],maskType:[`maskType`],maskIsOutline:[`maskIsOutline`],componentPropertyDefinitions:[`componentPropDefs`],componentPropertyReferences:[`componentPropRefs`],componentPropertyAssignments:[`componentPropAssignments`],variantPropSpecs:[`variantPropSpecs`]};function Ft(e=[]){return new Set(e.flatMap(e=>Pt[e]??[]))}function It(e,t){if(!Ft(e.source.editedFields??[]).has(t))return e.source.fig.rawNodeFields[t]}let Lt=typeof globalThis==`object`&&globalThis||typeof window==`object`&&window||typeof self==`object`&&self||typeof global==`object`&&global||(function(){return this})();function Rt(e){return Lt.Buffer!==void 0&&Lt.Buffer.isBuffer(e)}function zt(e){if(!e||typeof e!=`object`)return!1;let t=Object.getPrototypeOf(e);return t===null||t===Object.prototype||Object.getPrototypeOf(t)===null?Object.prototype.toString.call(e)===`[object Object]`:!1}function Bt(e){return Object.getOwnPropertySymbols(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))}function Vt(e){return e==null?e===void 0?`[object Undefined]`:`[object Null]`:Object.prototype.toString.call(e)}let Ht=`[object Object]`;function Ut(e,t){return e===t||Number.isNaN(e)&&Number.isNaN(t)}function Wt(e,t,n){return Gt(e,t,void 0,void 0,void 0,void 0,n)}function Gt(e,t,n,r,i,a,o){let s=o(e,t,n,r,i,a);if(s!==void 0)return s;if(typeof e==typeof t)switch(typeof e){case`bigint`:case`string`:case`boolean`:case`symbol`:case`undefined`:return e===t;case`number`:return e===t||Object.is(e,t);case`function`:return e===t;case`object`:return Kt(e,t,a,o)}return Kt(e,t,a,o)}function Kt(e,t,n,r){if(Object.is(e,t))return!0;let i=Vt(e),a=Vt(t);if(i===`[object Arguments]`&&(i=Ht),a===`[object Arguments]`&&(a=Ht),i!==a)return!1;switch(i){case`[object String]`:return e.toString()===t.toString();case`[object Number]`:return Ut(e.valueOf(),t.valueOf());case`[object Boolean]`:case`[object Date]`:case`[object Symbol]`:return Object.is(e.valueOf(),t.valueOf());case`[object RegExp]`:return e.source===t.source&&e.flags===t.flags;case`[object Function]`:return e===t}n??=new Map;let o=n.get(e),s=n.get(t);if(o!=null&&s!=null)return o===t;n.set(e,t),n.set(t,e);try{switch(i){case`[object Map]`:if(e.size!==t.size)return!1;for(let[i,a]of e.entries())if(!t.has(i)||!Gt(a,t.get(i),i,e,t,n,r))return!1;return!0;case`[object Set]`:{if(e.size!==t.size)return!1;let i=Array.from(e.values()),a=Array.from(t.values());for(let o=0;o<i.length;o++){let s=i[o],c=a.findIndex(i=>Gt(s,i,void 0,e,t,n,r));if(c===-1)return!1;a.splice(c,1)}return!0}case`[object Array]`:case`[object Uint8Array]`:case`[object Uint8ClampedArray]`:case`[object Uint16Array]`:case`[object Uint32Array]`:case`[object BigUint64Array]`:case`[object Int8Array]`:case`[object Int16Array]`:case`[object Int32Array]`:case`[object BigInt64Array]`:case`[object Float32Array]`:case`[object Float64Array]`:if(Rt(e)!==Rt(t)||e.length!==t.length)return!1;for(let i=0;i<e.length;i++)if(!Gt(e[i],t[i],i,e,t,n,r))return!1;return!0;case`[object ArrayBuffer]`:return e.byteLength===t.byteLength&&Kt(new Uint8Array(e),new Uint8Array(t),n,r);case`[object DataView]`:return e.byteLength!==t.byteLength||e.byteOffset!==t.byteOffset?!1:Kt(new Uint8Array(e),new Uint8Array(t),n,r);case`[object Error]`:return e.name===t.name&&e.message===t.message;case Ht:{if(!(Kt(e.constructor,t.constructor,n,r)||zt(e)&&zt(t)))return!1;let i=[...Object.keys(e),...Bt(e)],a=[...Object.keys(t),...Bt(t)];if(i.length!==a.length)return!1;for(let a=0;a<i.length;a++){let o=i[a],s=e[o];if(!Object.hasOwn(t,o))return!1;let c=t[o];if(!Gt(s,c,o,e,t,n,r))return!1}return!0}default:return!1}}finally{n.delete(e),n.delete(t)}}function qt(){}function Jt(e,t){return Wt(e,t,qt)}function Yt(e){return e!=null}function Xt(e){if(!e||typeof e!=`object`)return!1;let t=e;return Number.isFinite(t.sessionID)&&Number.isFinite(t.localID)}function Zt(e,t){return e?`fig-guide:${e.sessionID}:${e.localID}`:`guide:${t}`}function Qt(e){if(!Array.isArray(e))return[];let t=[];for(let[n,r]of e.entries()){if(!r||typeof r!=`object`)continue;let e=r;if(typeof e.offset!=`number`||!Number.isFinite(e.offset))continue;let i=Xt(e.guid)?e.guid:void 0;e.axis===`X`?t.push({id:Zt(i,n),axis:`x`,position:e.offset,...i?{figGuid:i}:{}}):e.axis===`Y`&&t.push({id:Zt(i,n),axis:`y`,position:e.offset,...i?{figGuid:i}:{}})}return t}function J(e){return`${e.sessionID}:${e.localID}`}function $t(){return{self:new Map,descendants:new Map}}function en(e){return{self:new Map([...e.self].map(([e,t])=>[e,structuredClone(t)])),descendants:new Map([...e.descendants].map(([e,t])=>[e,new Map([...t].map(([e,t])=>[e,structuredClone(t)]))]))}}function tn(e,t,n,r){return n===t?e.self.get(r):e.descendants.get(n)?.get(r)}function nn(e,t,n,r){return(n===t?e.self:e.descendants.get(n))?.has(r)??!1}function rn(e,t,n,r,i=!0){if(n===t){e.self.set(r,i);return}let a=e.descendants.get(n)??new Map;a.set(r,i),e.descendants.set(n,a)}function an(e){e.self.clear(),e.descendants.clear()}function on(){return{minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function sn(e,t,n){e.minX=Math.min(e.minX,t),e.minY=Math.min(e.minY,n),e.maxX=Math.max(e.maxX,t),e.maxY=Math.max(e.maxY,n)}function cn(e){return e.minX===1/0?{x:0,y:0,width:0,height:0}:{x:e.minX,y:e.minY,width:e.maxX-e.minX,height:e.maxY-e.minY}}function ln(e){return e===0?0:e===1||e===2?1:e===3?2:e===4?3:null}function un(e){let t=on();for(let n of e){let e=n.commandsBlob,r=new DataView(e.buffer,e.byteOffset,e.byteLength),i=0;for(;i<e.length;){let n=e[i++],a=ln(n);if(a==null)break;for(let n=0;n<a&&!(i+8>e.length);n++)sn(t,r.getFloat32(i,!0),r.getFloat32(i+4,!0)),i+=8}}return t.minX===1/0?null:cn(t)}let dn={r:0,g:0,b:0,a:1};function fn(){return{format:null,id:null,orderKey:null,editedFields:[],fig:{rawSize:null,rawTransform:null,rawNodeFields:{},layout:null,symbolOverrides:[],componentPropAssignments:[],derivedSymbolData:[],derivedSymbolDataLayoutVersion:null,uniformScaleFactor:null}}}function pn(e,t,n={}){return{id:e(),type:t,name:t.charAt(0)+t.slice(1).toLowerCase(),parentId:null,childIds:[],x:0,y:0,width:100,height:100,rotation:0,source:fn(),derivedLayout:null,fills:t===`TEXT`?[{type:`SOLID`,color:dn,opacity:1,visible:!0}]:[],strokes:[],effects:[],layoutGrids:[],guides:[],fillStyleId:null,strokeStyleId:null,textStyleId:null,effectStyleId:null,gridStyleId:null,sharedStyleType:null,opacity:1,cornerRadius:0,topLeftRadius:0,topRightRadius:0,bottomRightRadius:0,bottomLeftRadius:0,independentCorners:!1,cornerSmoothing:0,visible:!0,locked:!1,clipsContent:!1,text:``,fontSize:14,fontFamily:`Inter`,fontWeight:400,italic:!1,textAlignHorizontal:`LEFT`,textDirection:`AUTO`,textLanguage:null,leadingTrim:`NONE`,lineHeight:null,letterSpacing:0,layoutMode:`NONE`,layoutDirection:`AUTO`,layoutWrap:`NO_WRAP`,primaryAxisAlign:`MIN`,counterAxisAlign:`MIN`,primaryAxisSizing:`FIXED`,counterAxisSizing:`FIXED`,itemSpacing:0,counterAxisSpacing:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0,blendMode:`PASS_THROUGH`,layoutPositioning:`AUTO`,layoutGrow:0,layoutAlignSelf:`AUTO`,vectorNetwork:null,handleMirroring:`NONE`,fillGeometry:[],strokeGeometry:[],arcData:null,textAlignVertical:`TOP`,textAutoResize:`NONE`,textCase:`ORIGINAL`,textDecoration:`NONE`,textDecorationStyle:`SOLID`,textDecorationThickness:null,textDecorationFills:[],textDecorationSkipInk:!0,textUnderlineOffset:null,maxLines:null,styleRuns:[],fontVariations:[],fontFeatures:[],horizontalConstraint:`MIN`,verticalConstraint:`MIN`,strokeCap:`NONE`,strokeJoin:`MITER`,dashPattern:[],borderTopWeight:0,borderRightWeight:0,borderBottomWeight:0,borderLeftWeight:0,independentStrokeWeights:!1,strokeMiterLimit:4,minWidth:null,maxWidth:null,minHeight:null,maxHeight:null,isMask:!1,maskType:`ALPHA`,maskIsOutline:!1,gridTemplateColumns:[],gridTemplateRows:[],gridColumnGap:0,gridRowGap:0,gridPosition:null,counterAxisAlignContent:`AUTO`,itemReverseZIndex:!1,strokesIncludedInLayout:!1,expanded:!0,textTruncation:`DISABLED`,autoRename:!0,pointCount:5,starInnerRadius:.38,componentId:null,instanceOverrides:$t(),componentPropertyDefinitions:[],componentPropertyReferences:[],componentPropertyAssignments:{},componentPropertyValues:{},componentKey:null,sourceLibraryKey:null,publishId:null,overrideKey:null,sharedSymbolVersion:null,publishedVersion:null,librarySource:null,isPublishable:!1,isSymbolPublishable:!1,symbolDescription:``,symbolLinks:[],variantPropSpecs:[],boundVariables:{},variableModes:{},exportSettings:[],pluginData:[],pluginRelaunchData:[],internalOnly:!1,flipX:!1,flipY:!1,textPicture:null,derivedTextGlyphs:null,textPathData:null,textPathBox:null,...n}}let mn=new Set([`CANVAS`,`FRAME`,`GROUP`,`BOOLEAN_OPERATION`,`SECTION`,`COMPONENT`,`COMPONENT_SET`,`INSTANCE`]);function hn(e){return{vertices:e.vertices.map(e=>({...e})),segments:e.segments.map(e=>({...e,tangentStart:{...e.tangentStart},tangentEnd:{...e.tangentEnd}})),regions:e.regions.map(e=>({windingRule:e.windingRule,loops:e.loops.map(e=>[...e])}))}}function gn(e){let t={x:0,y:0};return{vertices:e.vertices,segments:e.segments.map(e=>({start:e.start,end:e.end,tangentStart:e.tangentStart??{...t},tangentEnd:e.tangentEnd??{...t}})),regions:e.regions??[]}}function _n(e){let t={...e,color:{...e.color}};return e.gradientStops&&(t.gradientStops=e.gradientStops.map(Mn)),e.gradientTransform&&(t.gradientTransform={...e.gradientTransform}),e.imageTransform&&(t.imageTransform={...e.imageTransform}),e.patternSpacing&&(t.patternSpacing={...e.patternSpacing}),e.noiseSize&&(t.noiseSize={...e.noiseSize}),t}function vn(e){let t={...e,color:{...e.color}};return e.dashPattern&&(t.dashPattern=[...e.dashPattern]),t}function yn(e){return{...e,color:{...e.color},offset:{...e.offset}}}function bn(e){return{...e,style:{...e.style,fills:e.style.fills?e.style.fills.map(_n):void 0,textDecorationFills:e.style.textDecorationFills?e.style.textDecorationFills.map(_n):void 0,fontVariations:e.style.fontVariations?e.style.fontVariations.map(e=>({...e})):void 0,fontFeatures:e.style.fontFeatures?e.style.fontFeatures.map(e=>({...e})):void 0}}}let xn=new WeakMap;function Y(e,t){return xn.set(t,xn.get(e)??e),t}function Sn(e,t){return e===t||(xn.get(e)??e)===(xn.get(t)??t)}function X(e){return e.map(_n)}function Cn(e){return e.map(vn)}function wn(e){return e.map(yn)}function Tn(e){return e.map(e=>({...e,color:e.color?{...e.color}:void 0}))}function En(e){return e.map(bn)}function Dn(e,t){return{windingRule:e.windingRule,commandsBlob:t,...e.fills?{fills:X(e.fills)}:{}}}function On(e){return e.map(e=>Dn(e,e.commandsBlob.slice()))}function kn(e,t,n,r,i,a=0,o=0){let s=e.slice(),c=new DataView(s.buffer,s.byteOffset,s.byteLength),l=0;for(;l<s.length;){let e=s[l++],u=ln(e);if(u==null)break;for(let e=0;e<u&&!(l+8>s.length);e++){let e=c.getFloat32(l,!0),s=c.getFloat32(l+4,!0);c.setFloat32(l,t*e+n*s+a,!0),c.setFloat32(l+4,r*e+i*s+o,!0),l+=8}}return s}function An(e,t,n,r,i,a=0,o=0){return e.map(e=>Dn(e,kn(e.commandsBlob,t,n,r,i,a,o)))}function jn(e,t,n){return t===1&&n===1?On(e):An(e,t,0,0,n)}function Z(e,t){if(e!==void 0)return e.length>0?t(e):[]}function Mn(e){return{color:{...e.color},position:e.position}}function Nn(e){return e?.map(e=>({...e}))??[]}function Pn(e){return e?.map(e=>({...e,variantOptions:e.variantOptions?[...e.variantOptions]:void 0,preferredValues:e.preferredValues?[...e.preferredValues]:void 0}))??[]}function Fn(e){return e?e.map(e=>({...e,commandsBlob:new Uint8Array(e.commandsBlob)})):null}function In(e){return{startingAngle:e.startingAngle,endingAngle:e.endingAngle,innerRadius:e.innerRadius}}function Ln(e,t,n=`deep`){let{id:r,parentId:i,childIds:a,...o}=e;return n===`fig-import`?{...o,...t===null?{}:{componentId:t},source:fn(),boundVariables:{...e.boundVariables},variableModes:{...e.variableModes},instanceOverrides:en(e.instanceOverrides),componentPropertyAssignments:{...e.componentPropertyAssignments},componentPropertyValues:{...e.componentPropertyValues}}:{...o,...t===null?{}:{componentId:t},boundVariables:{...e.boundVariables},variableModes:{...e.variableModes},instanceOverrides:en(e.instanceOverrides),fills:Z(e.fills,e=>Y(e,X(e))),strokes:Z(e.strokes,e=>Y(e,Cn(e))),effects:Z(e.effects,e=>Y(e,wn(e))),layoutGrids:Z(e.layoutGrids,Tn),guides:Z(e.guides,e=>e.map(e=>({...e}))),styleRuns:Z(e.styleRuns,e=>Y(e,En(e))),source:t===null?structuredClone(e.source):fn(),dashPattern:Z(e.dashPattern,e=>[...e]),fontVariations:Z(e.fontVariations,e=>e.map(e=>({...e}))),fontFeatures:Z(e.fontFeatures,e=>e.map(e=>({...e}))),textDecorationFills:Z(e.textDecorationFills,X),fillGeometry:Z(e.fillGeometry,On),strokeGeometry:Z(e.strokeGeometry,On),gridTemplateColumns:Nn(e.gridTemplateColumns),gridTemplateRows:Nn(e.gridTemplateRows),componentPropertyDefinitions:Pn(e.componentPropertyDefinitions),componentPropertyReferences:Nn(e.componentPropertyReferences),componentPropertyAssignments:{...e.componentPropertyAssignments},symbolLinks:Nn(e.symbolLinks),variantPropSpecs:Nn(e.variantPropSpecs),pluginData:Nn(e.pluginData),pluginRelaunchData:Nn(e.pluginRelaunchData),exportSettings:Nn(e.exportSettings),componentPropertyValues:{...e.componentPropertyValues},derivedLayout:e.derivedLayout?{...e.derivedLayout}:null,arcData:e.arcData?In(e.arcData):null,vectorNetwork:e.vectorNetwork?hn(e.vectorNetwork):null,textPicture:e.textPicture?new Uint8Array(e.textPicture):null,derivedTextGlyphs:e.derivedTextGlyphs?Y(e.derivedTextGlyphs,Fn(e.derivedTextGlyphs)??[]):null,textPathData:e.textPathData?structuredClone(e.textPathData):null,textPathBox:e.textPathBox?{...e.textPathBox}:null,gridPosition:e.gridPosition?{...e.gridPosition}:null}}let Rn=[`name`,`text`,`fontSize`,`fontWeight`,`fontFamily`,`textDirection`],zn=`width.height.minWidth.maxWidth.minHeight.maxHeight.fills.strokes.effects.opacity.cornerRadius.topLeftRadius.topRightRadius.bottomRightRadius.bottomLeftRadius.independentCorners.layoutMode.layoutDirection.layoutWrap.primaryAxisAlign.counterAxisAlign.primaryAxisSizing.counterAxisSizing.itemSpacing.counterAxisSpacing.paddingTop.paddingRight.paddingBottom.paddingLeft.gridTemplateColumns.gridTemplateRows.gridColumnGap.gridRowGap.gridPosition.clipsContent.independentStrokeWeights.borderTopWeight.borderRightWeight.borderBottomWeight.borderLeftWeight.boundVariables.variableModes`.split(`.`),Bn=[...zn,...Rn];function Vn(e,t,n){e[t]=n}function Hn(e,t,n){if(n===`fills`)Vn(e,n,X(t.fills));else if(n===`strokes`)Vn(e,n,Cn(t.strokes));else if(n===`effects`)Vn(e,n,wn(t.effects));else if(n===`styleRuns`)Vn(e,n,En(t.styleRuns));else if(n===`boundVariables`)Vn(e,n,{...t.boundVariables});else if(n===`variableModes`)Vn(e,n,{...t.variableModes});else if(n===`gridPosition`)Vn(e,n,t.gridPosition?{...t.gridPosition}:null);else{let r=t[n];Vn(e,n,Array.isArray(r)?structuredClone(r):r)}}function Un(e,t,n,r=`deep`){if(t===n||e.isDescendant(n,t))return;let i=e.nodes.get(t);if(i)for(let t of i.childIds){let i=e.nodes.get(t);if(!i)continue;let a=e.createNode(i.type,n,Ln(i,t,r));i.childIds.length>0&&Un(e,t,a.id,r)}}function Wn(e,t,n,r){n.type===`INSTANCE`?rn(e,t,n.id,`sourceComponentId`,r):n.componentId=r}function Gn(e,t,n,r,i,a,o){let s=new Map,c=new Map,l=new Map;for(let n of t.childIds){if(a.has(n))continue;let t=e.nodes.get(n);t&&l.set(t.type,(l.get(t.type)??0)+1)}for(let t of n.childIds){let n=e.nodes.get(t);if(!n||o.has(n.id))continue;c.set(n.type,(c.get(n.type)??0)+1);let r=s.get(n.type);r||(r=new Map,s.set(n.type,r));let i=r.get(n.name);i?i.push(n):r.set(n.name,[n])}for(let n of t.childIds){if(a.has(n))continue;let t=e.nodes.get(n);if(!t)continue;let u=s.get(t.type),d=c.get(t.type)??0;if(d>(l.get(t.type)??0))continue;let f=u?.get(t.name)?.shift();f&&(c.set(t.type,d-1),a.set(n,f),o.add(f.id),Wn(i,r,f,n))}}function Kn(e,t,n,r,i){let a=new Map;for(let e=0;e<r.length;e++)a.set(r[e],e);let o=new Map;for(let s=0;s<t.childIds.length;s++){let c=t.childIds[s],l=e.nodes.get(c),u=l?tn(i,n,l.id,`sourceComponentId`):void 0,d=typeof u==`string`?u:l?.componentId,f=d?a.get(d):void 0;o.set(c,f??r.length+s)}t.childIds.sort((e,t)=>(o.get(e)??0)-(o.get(t)??0))}function qn(e,t,n){return t===n||e.isDescendant(n,t)}function Jn(e,t,n,r){if(qn(e,t,n))return;let i=e.nodes.get(t),a=e.nodes.get(n);if(!i||!a)return;let o=new Map,s=new Set,c=new Set(i.childIds);for(let t of a.childIds){let i=e.nodes.get(t);if(!i)continue;let a=tn(r,n,i.id,`sourceComponentId`),l=typeof a==`string`?a:i.componentId;l&&c.has(l)&&(o.set(l,i),s.add(i.id))}Gn(e,i,a,n,r,o,s);for(let t of i.childIds)if(!o.has(t)){let r=e.nodes.get(t);if(!r)continue;let i=e.createNode(r.type,n,Ln(r,t));r.childIds.length>0&&Un(e,t,i.id),o.set(t,i),s.add(i.id)}for(let t of i.childIds){let i=e.nodes.get(t),a=o.get(t);if(!(!i||!a)){for(let e of Bn)nn(r,n,a.id,e)||Hn(a,i,e);i.childIds.length>0&&!nn(r,n,a.id,`componentId`)&&Jn(e,t,a.id,r)}}Kn(e,a,n,i.childIds,r)}function Yn(e){let t={};for(let n of zn)Hn(t,e,n);return t}function Xn(e,t,n,r={}){let i=e.nodes.get(t);if(i?.type!==`COMPONENT`)return null;let a={...Yn(i),name:i.name,componentId:t},o=e.createNode(`INSTANCE`,n,{...a,...r});return Un(e,i.id,o.id),o}function Zn(e,t,n,r=`deep`){let i=e.nodes.get(t),a=e.nodes.get(n);!i||!a||i.type!==`INSTANCE`||Un(e,n,t,r)}function Qn(e,t,n){let r=e.nodes.get(t),i=e.nodes.get(n);if(!r||i?.type!==`COMPONENT`||r.type!==`INSTANCE`)return;let a=r.componentId?e.nodes.get(r.componentId):void 0,o={componentId:n};for(let e of zn)nn(r.instanceOverrides,r.id,r.id,e)||Hn(o,i,e);(!a||r.name===a.name)&&(o.name=i.name);let s=Array.from(r.childIds);for(let t of s)e.deleteNode(t);e.updateNode(t,o),Un(e,n,t)}let $n=new WeakMap;function er(e,t){let n=e.nodes.get(t);if(n?.type!==`COMPONENT`)return;let r=$n.get(e);if(r||(r=new Set,$n.set(e,r)),!r.has(t)){r.add(t);try{for(let r of rr(e,t)){for(let e of zn)nn(r.instanceOverrides,r.id,r.id,e)||Hn(r,n,e);Jn(e,n.id,r.id,r.instanceOverrides)}}finally{r.delete(t)}}}function tr(e,t){let n=e.nodes.get(t);n?.type===`INSTANCE`&&(n.componentId&&e.instanceIndex.get(n.componentId)?.delete(t),n.type=`FRAME`,n.componentId=null,an(n.instanceOverrides))}function nr(e,t){let n=e.nodes.get(t);if(n?.componentId)return e.nodes.get(n.componentId)}function rr(e,t){let n=e.instanceIndex.get(t);if(!n)return[];let r=[];for(let t of n){let n=e.nodes.get(t);n&&r.push(n)}return r}function ir(e,t){let n=e.nodes.get(t);for(;n;){if(n.type===`INSTANCE`)return n;n=n.parentId?e.nodes.get(n.parentId):void 0}}function ar(e,t,n){let r=ir(e,t);return r?nn(r.instanceOverrides,r.id,t,n):!1}function or(e){return Math.min(1024,Math.max(.01,e))}let sr=()=>[1,0,0,0,1,0,0,0,1],cr=(e,t)=>[e[0]*t[0]+e[1]*t[3]+e[2]*t[6],e[0]*t[1]+e[1]*t[4]+e[2]*t[7],e[0]*t[2]+e[1]*t[5]+e[2]*t[8],e[3]*t[0]+e[4]*t[3]+e[5]*t[6],e[3]*t[1]+e[4]*t[4]+e[5]*t[7],e[3]*t[2]+e[4]*t[5]+e[5]*t[8],e[6]*t[0]+e[7]*t[3]+e[8]*t[6],e[6]*t[1]+e[7]*t[4]+e[8]*t[7],e[6]*t[2]+e[7]*t[5]+e[8]*t[8]],lr=(...e)=>{if(e.length===0)return sr();let t=e[0].slice();for(let n=1;n<e.length;n++)t=cr(t,e[n]);return t},ur=(e,t)=>[1,0,e,0,1,t,0,0,1],dr=(e,t=0,n=0)=>{let r=Math.sin(e),i=Math.cos(e);return[i,-r,r*n+(1-i)*t,r,i,-r*t+(1-i)*n,0,0,1]},fr=(e,t,n=0,r=0)=>[e,0,n-e*n,0,t,r-t*r,0,0,1],pr=e=>{let t=e[0]*e[4]*e[8]+e[1]*e[5]*e[6]+e[2]*e[3]*e[7]-e[2]*e[4]*e[6]-e[1]*e[3]*e[8]-e[0]*e[5]*e[7];return t?[(e[4]*e[8]-e[5]*e[7])/t,(e[2]*e[7]-e[1]*e[8])/t,(e[1]*e[5]-e[2]*e[4])/t,(e[5]*e[6]-e[3]*e[8])/t,(e[0]*e[8]-e[2]*e[6])/t,(e[2]*e[3]-e[0]*e[5])/t,(e[3]*e[7]-e[4]*e[6])/t,(e[1]*e[6]-e[0]*e[7])/t,(e[0]*e[4]-e[1]*e[3])/t]:null},mr=(e,t)=>{if(t.length%2)throw Error(`mapPoints requires even length [x,y,...].`);let n=t.slice();for(let t=0;t<n.length;t+=2){let r=n[t],i=n[t+1],a=e[6]*r+e[7]*i+e[8],o=e[0]*r+e[1]*i+e[2],s=e[3]*r+e[4]*i+e[5];n[t]=o/a,n[t+1]=s/a}return n},Q={identity:sr,multiply:lr,translated:ur,rotated:dr,scaled:fr,invert:pr,mapPoints:mr,mapPoint:(e,t)=>{let n=mr(e,[t.x,t.y]);return{x:n[0],y:n[1]}}};function hr(e,t){let n=[],r=e;for(;r&&(n.unshift(r),r.parentId);)r=t.getNode(r.parentId);let i=Q.identity();for(let e of n){let t=vr(e);i=Q.multiply(i,t)}return i}function gr(e,t){let n=hr(e,t),r=Q.mapPoints(n,[0,0]);return{x:r[0],y:r[1]}}function _r(e){return e.type===`LINE`?{x:0,y:0}:{x:e.width/2,y:e.height/2}}function vr(e,t=e){let n=Q.translated(t.x,t.y);if((e.flipX||e.flipY)&&(n=Q.multiply(n,Q.scaled(e.flipX?-1:1,e.flipY?-1:1,e.width/2,e.height/2))),e.rotation){let t=_r(e);n=Q.multiply(n,Q.rotated(e.rotation*Math.PI/180,t.x,t.y))}return n}let yr=new Map([{weight:100,names:[`thin`,`hairline`,`extrathin`,`ultrathin`]},{weight:200,names:[`extralight`,`ultralight`]},{weight:300,names:[`light`]},{weight:400,names:[`regular`,`normal`,`book`,`roman`,`plain`]},{weight:500,names:[`medium`]},{weight:600,names:[`semibold`,`demibold`]},{weight:700,names:[`bold`]},{weight:800,names:[`extrabold`,`ultrabold`]},{weight:900,names:[`black`,`heavy`]}].flatMap(({names:e,weight:t})=>e.map(e=>[e,t])));function br(e){return e.toLowerCase().replace(/italic|oblique/u,``).replace(/[^a-z0-9]+/gu,``)}function xr(e){let t=e??``,n=/(?:italic|oblique)/iu.test(t),r=br(t),i=r.match(/(?:^|[^0-9])([1-9]00)(?:[^0-9]|$)/u)?.[1];return{weight:i?Number(i):yr.get(r)??400,italic:n}}function Sr(e){return xr(e).weight}let Cr=new Set([`fontFamily`,`fontWeight`,`italic`,`fontSize`,`lineHeight`,`letterSpacing`,`textDecoration`,`textCase`,`fontFeatures`]);function wr(e,t){let n={...t};return`fills`in t&&!(`fillStyleId`in t)&&e.fillStyleId&&(n.fillStyleId=null),`strokes`in t&&!(`strokeStyleId`in t)&&e.strokeStyleId&&(n.strokeStyleId=null),`effects`in t&&!(`effectStyleId`in t)&&e.effectStyleId&&(n.effectStyleId=null),`layoutGrids`in t&&!(`gridStyleId`in t)&&e.gridStyleId&&(n.gridStyleId=null),Object.keys(t).some(e=>Cr.has(e))&&!(`textStyleId`in t)&&e.textStyleId&&(n.textStyleId=null),n}let Tr=()=>({emit(e,...t){for(let n=this.events[e]||[],r=0,i=n.length;r<i;r++)n[r](...t)},events:{},on(e,t){return(this.events[e]||=[]).push(t),()=>{this.events[e]=this.events[e]?.filter(e=>t!==e)}}});function Er(e,t){let n={...e};for(let e=0;e<t.length;e++){let r=t[e];delete n[r]}return n}function Dr(e,t){let n={},r=Object.keys(e);for(let i=0;i<r.length;i++){let a=r[i],o=e[a];t(o,a)||(n[a]=o)}return n}function Or(e,t,n){let r=e[t].length,i=Object.keys(e.boundVariables).filter(e=>{if(e===t)return!0;if(!e.startsWith(`${t}/`))return!1;let n=Number.parseInt(e.split(`/`)[1]??``,10);return Number.isNaN(n)||n<0||n>=r});i.length!==0&&(e.boundVariables=Er(e.boundVariables,i),n.boundVariables={...e.boundVariables})}function kr(e,t){let n=[t.created?e.on(`node:created`,t.created):null,t.updated?e.on(`node:updated`,t.updated):null,t.previewUpdated?e.on(`node:previewUpdated`,t.previewUpdated):null,t.deleted?e.on(`node:deleted`,t.deleted):null,t.reparented?e.on(`node:reparented`,t.reparented):null,t.reordered?e.on(`node:reordered`,t.reordered):null].filter(e=>!!e);return()=>{for(let e of n)e()}}let Ar=new Set([`CANVAS`,`FRAME`,`GROUP`,`SECTION`,`COMPONENT`,`COMPONENT_SET`,`INSTANCE`]),jr=new Set([`COMPONENT`,`INSTANCE`]);function Mr(e){return e.fills.some(e=>e.visible)||e.strokes.some(e=>e.visible)}function Nr(e,t,n){let r=n.get(e.id);if(r!==void 0)return r;let i=e.parentId?t.getNode(e.parentId):void 0,a=e.rotation!==0||e.flipX||e.flipY||(i?Nr(i,t,n):!1);return n.set(e.id,a),a}function Pr(e,t,n,r,i){if(!Nr(n,r,i)){let i=r.getAbsolutePosition(n.id);return e>=i.x&&e<=i.x+n.width&&t>=i.y&&t<=i.y+n.height}let a=hr(n,r),o=Q.invert(a);if(!o)return!1;let[s,c]=Q.mapPoints(o,[e,t]);return s>=0&&s<=n.width&&c>=0&&c<=n.height}function Fr(e,t,n,r,i,a,o){return Pr(t,n,r,e,o)&&(Lr(e,t,n,i,a,o)||Mr(r))?r:null}function Ir(e,t,n,r,i,a,o){if(r.type===`GROUP`)return Pr(t,n,r,e,o)?a?Lr(e,t,n,i,a,o)??r:r:null;let s=Lr(e,t,n,i,a,o);return s?r.locked?r:s:Pr(t,n,r,e,o)&&Mr(r)?r:null}function Lr(e,t,n,r,i=!1,a=new Map){let o=e.nodes.get(r);if(!o||o.clipsContent&&!Pr(t,n,o,e,a))return null;for(let r=o.childIds.length-1;r>=0;r--){let s=o.childIds[r],c=e.nodes.get(s);if(!(!c||c.internalOnly||!c.visible)){if(Ar.has(c.type)){if(jr.has(c.type)&&!i){let r=Fr(e,t,n,c,s,i,a);if(r)return r;continue}let r=Ir(e,t,n,c,s,i,a);if(r)return r;continue}if(Pr(t,n,c,e,a))return c}}return null}function Rr(e,t,n,r){return Lr(e,t,n,r??e.rootId,!1)}function zr(e,t,n,r){return Lr(e,t,n,r??e.rootId,!0)}function Br(e,t,n,r,i,a,o){let s=e.nodes.get(r);if(!s)return null;let c=null;for(let r of s.childIds){if(o.has(r))continue;let s=e.nodes.get(r);if(!s||s.internalOnly||!s.visible)continue;let l=i+s.x,u=a+s.y;if(!Ar.has(s.type)||t<l||t>l+s.width||n<u||n>u+s.height)continue;c=s;let d=Br(e,t,n,r,l,u,o);d&&(c=d)}return c}function Vr(e,t,n,r,i){return Br(e,t,n,i??e.rootId,0,0,r)}let Hr=new Set([`text`,`fontSize`,`fontFamily`,`fontWeight`,`italic`,`textAlignHorizontal`,`textDirection`,`textAlignVertical`,`lineHeight`,`letterSpacing`,`textDecoration`,`textCase`,`styleRuns`,`fills`,`width`,`height`]),Ur=new Set([`text`,`fontSize`,`fontFamily`,`fontWeight`,`italic`,`textDirection`,`lineHeight`,`letterSpacing`,`textCase`,`styleRuns`]);function Wr(e,t){let n={},r=Object.keys(t);e.textPicture&&r.some(e=>Hr.has(e))&&(n.textPicture=null);let i=r.some(e=>Ur.has(e));return e.derivedTextGlyphs&&i&&!t.derivedTextGlyphs&&(n.derivedTextGlyphs=null,n.textPathData=null),n}function Gr(e,t){Object.assign(e,Wr(e,t))}let Kr=new Set(`x.y.width.height.rotation.flipX.flipY.parentId.childIds.layoutMode.layoutDirection.layoutWrap.primaryAxisSizing.counterAxisSizing.itemSpacing.counterAxisSpacing.paddingTop.paddingRight.paddingBottom.paddingLeft.layoutGrow.layoutAlignSelf.layoutPositioning.minWidth.maxWidth.minHeight.maxHeight.visible.text.fontSize.lineHeight.letterSpacing.styleRuns.textAutoResize`.split(`.`));function qr(e,t,n,r){let i=e.nodes.get(t);if(!i||(n=Object.fromEntries(Object.entries(n).filter(([,e])=>e!==void 0)),Object.keys(n).every(e=>i[e]===n[e])))return null;Object.keys(n).some(e=>Kr.has(e))&&e.clearAbsPosCache();let a=n;return i.type===`TEXT`&&(a={...Wr(i,n),...n}),n.vectorNetwork&&(a={...a,vectorNetwork:gn(n.vectorNetwork)}),r?.(i,a),e.positionPreviewVersion++,Object.assign(i,a),a}function Jr(e,t){if(t.length===0)return;let n=new Set(e.source.editedFields);for(let e of t)n.add(e);e.source.editedFields=[...n]}function Yr(e,t){e.variables.set(t.id,t);let n=e.variableCollections.get(t.collectionId);n&&!n.variableIds.includes(t.id)&&n.variableIds.push(t.id)}function Xr(e,t){let n=e.variables.get(t);if(!n)return;e.variables.delete(t);let r=e.variableCollections.get(n.collectionId);r&&(r.variableIds=r.variableIds.filter(e=>e!==t));for(let n of e.nodes.values())Object.values(n.boundVariables).includes(t)&&(n.boundVariables=Dr(n.boundVariables,e=>e===t),e.emitter.emit(`node:updated`,n.id,{boundVariables:{...n.boundVariables}}),xi(e,n.id))}function Zr(e,t){e.variableCollections.set(t.id,t),e.activeMode.has(t.id)||e.activeMode.set(t.id,t.defaultModeId)}function Qr(e,t){return t===void 0?e===`COLOR`?{...dn}:e===`FLOAT`?0:e!==`BOOLEAN`&&``:t}function $r(e,t,n,r,i,a){let o=e.variableCollections.get(i);if(!o)throw Error(`Collection "${i}" not found`);let s=t(),c=Qr(r,a),l={};for(let e of o.modes)l[e.modeId]=structuredClone(c);let u={id:s,name:n,type:r,collectionId:i,valuesByMode:l,description:``,hiddenFromPublishing:!1};return Yr(e,u),u}function ei(e,t,n){let r=t(),i=t(),a={id:r,name:n,modes:[{modeId:i,name:`Mode 1`}],defaultModeId:i,variableIds:[]};return Zr(e,a),a}function ti(e,t){let n=e.variableCollections.get(t);if(n)for(let t of Array.from(n.variableIds))Xr(e,t);e.variableCollections.delete(t),e.activeMode.delete(t)}function ni(e,t){return e.activeMode.get(t)||(e.variableCollections.get(t)?.defaultModeId??``)}function ri(e,t,n){let r=e.nodes.get(t);for(;r;){let t=r.variableModes[n];if(t)return t;r=r.parentId?e.nodes.get(r.parentId):void 0}return ni(e,n)}function ii(e,t,n){e.activeMode.set(t,n)}function ai(e,t,n,r,i){let a=e.variableCollections.get(t);if(!a)return;a.modes.push({modeId:n,name:r});let o=i??a.defaultModeId;for(let t of a.variableIds){let r=e.variables.get(t);r&&(r.valuesByMode[n]=structuredClone(r.valuesByMode[o]??Object.values(r.valuesByMode)[0]))}}function oi(e,t,n){let r=e.variableCollections.get(t);if(!(!r||r.modes.length<=1)){r.modes=r.modes.filter(e=>e.modeId!==n),r.defaultModeId===n&&(r.defaultModeId=r.modes[0].modeId);for(let t of r.variableIds){let r=e.variables.get(t);r&&(r.valuesByMode=Er(r.valuesByMode,[n]))}e.activeMode.get(t)===n&&e.activeMode.set(t,r.defaultModeId)}}function si(e,t,n,r){let i=e.variableCollections.get(t);if(!i)return;let a=i.modes.find(e=>e.modeId===n);a&&(a.name=r)}function ci(e,t,n){let r=e.variableCollections.get(t);r&&r.modes.some(e=>e.modeId===n)&&(r.defaultModeId=n)}function li(e,t,n,r){if(r?.has(t))return;let i=e.variables.get(t);if(!i)return;let a=e.variableCollections.get(i.collectionId),o=n??ni(e,i.collectionId),s=a?.defaultModeId,c=Object.hasOwn(i.valuesByMode,o)?i.valuesByMode[o]:void 0;if(c===void 0&&s&&Object.hasOwn(i.valuesByMode,s)&&(c=i.valuesByMode[s]),c??=Object.values(i.valuesByMode)[0],c&&typeof c==`object`&&`aliasId`in c){let n=r??new Set;return n.add(t),li(e,c.aliasId,o,n)}return c}function ui(e,t){let n=li(e,t);if(n&&typeof n==`object`&&`r`in n)return n}function di(e,t){let n=li(e,t);return typeof n==`number`?n:void 0}function fi(e,t,n){let r=e.variables.get(n);if(!r)return;let i=li(e,n,ri(e,t,r.collectionId));if(i&&typeof i==`object`&&`r`in i)return i}function pi(e,t,n){let r=e.variables.get(n);if(!r)return;let i=li(e,n,ri(e,t,r.collectionId));return typeof i==`number`?i:void 0}function mi(e,t){let n=e.variableCollections.get(t);return n?n.variableIds.map(t=>e.variables.get(t)).filter(e=>e!==void 0):[]}function hi(e,t){return[...e.variables.values()].filter(e=>e.type===t)}let gi=new Set(`opacity.width.height.cornerRadius.fontSize.letterSpacing.lineHeight.itemSpacing.strokeWeight.paddingLeft.paddingRight.paddingTop.paddingBottom.counterAxisSpacing.topLeftRadius.topRightRadius.bottomLeftRadius.bottomRightRadius.rotation.x.y.minWidth.maxWidth.minHeight.maxHeight.borderTopWeight.borderBottomWeight.borderLeftWeight.borderRightWeight.gridRowGap.gridColumnGap`.split(`.`)),_i=new Set([`fontFamily`]),vi=new Set([`visible`]);function yi(e,t,n,r){let i=e.nodes.get(t);if(!i)return;let a=e.variables.get(r);if(!a)throw Error(`Variable "${r}" not found`);let o=n.match(/^(fills|strokes)\/(\d+)\/color$/);if(o){if(a.type!==`COLOR`)throw Error(`Cannot bind ${a.type} variable to color field "${n}"`);let e=o[1],t=Number.parseInt(o[2],10),r=i[e]?.length??0;if(t>=r)throw Error(`Index ${t} out of range for ${e} (length ${r})`);let s=o[1];s in i.boundVariables&&(i.boundVariables=Er(i.boundVariables,[s]))}if(gi.has(n)&&a.type!==`FLOAT`)throw Error(`Cannot bind ${a.type} variable to scalar field "${n}"`);if(_i.has(n)&&a.type!==`STRING`)throw Error(`Cannot bind ${a.type} variable to string field "${n}"`);if(vi.has(n)&&a.type!==`BOOLEAN`)throw Error(`Cannot bind ${a.type} variable to boolean field "${n}"`);if(!(gi.has(n)||_i.has(n)||vi.has(n)||o))throw Error(`Unknown binding field "${n}"`);i.boundVariables={...i.boundVariables,[n]:r},e.emitter.emit(`node:updated`,t,{boundVariables:{...i.boundVariables}}),xi(e,t)}function bi(e,t,n){let r=e.nodes.get(t);r&&n in r.boundVariables&&(r.boundVariables=Er(r.boundVariables,[n]),e.emitter.emit(`node:updated`,t,{boundVariables:{...r.boundVariables}}),xi(e,t))}function xi(e,t){let n=e.nodes.get(t);if(!n)return;if(n.type===`INSTANCE`){rn(n.instanceOverrides,n.id,n.id,`boundVariables`);return}let r=n;for(;r.parentId;){let n=e.nodes.get(r.parentId);if(!n)break;if(n.type===`INSTANCE`){rn(n.instanceOverrides,n.id,t,`boundVariables`);break}r=n}}let Si=1;function Ci(){return`0:${Si++}`}function wi(e){let t={};for(let n of Object.keys(e)){let r=e[n];r!==void 0&&(t[n]=r)}return t}var Ti=class e{nodes=new Map;images=new Map;variables=new Map;variableCollections=new Map;activeMode=new Map;rootId;figKiwiVersion=null;figSchemaDeflated=null;documentColorSpace=`srgb`;enabledLibraries=new Map;emitter=Tr();absPosCache=new Map;previewMutationDepth=0;previewObservers=[];sourceMetadataPreservationDepth=0;layoutMutationDepth=0;positionPreviewVersion=0;instanceIndex=new Map;constructor(){let e=pn(Ci,`FRAME`,{name:`Document`,width:0,height:0});this.rootId=e.id,this.nodes.set(e.id,e),this.addPage(`Page 1`)}addPage(e){return this.createNode(`CANVAS`,this.rootId,{name:e,width:0,height:0})}getPages(e=!1){return this.getChildren(this.rootId).filter(t=>t.type===`CANVAS`&&(e||!t.internalOnly))}getAllNodes(){return this.nodes.values()}getNode(e){return this.nodes.get(e)}onNodeEvents(e){return kr(this.emitter,e)}countDescendants(e){let t=this.nodes.get(e);if(!t)return 0;let n=0,r=[...t.childIds];for(;r.length>0;){let e=r.pop();if(e===void 0)break;n++;let t=this.nodes.get(e);if(t)for(let e of t.childIds)r.push(e)}return n}addVariable(e){Yr(this,e)}removeVariable(e){Xr(this,e)}addCollection(e){Zr(this,e)}createVariable(e,t,n,r){return $r(this,Ci,e,t,n,r)}createCollection(e){return ei(this,Ci,e)}removeCollection(e){ti(this,e)}getActiveModeId(e){return ni(this,e)}getNodeVariableModeId(e,t){return ri(this,e,t)}setActiveMode(e,t){ii(this,e,t)}addMode(e,t,n,r){ai(this,e,t,n,r)}removeMode(e,t){oi(this,e,t)}renameMode(e,t,n){si(this,e,t,n)}setDefaultMode(e,t){ci(this,e,t)}resolveVariable(e,t,n){return li(this,e,t,n)}resolveColorVariable(e){return ui(this,e)}resolveNumberVariable(e){return di(this,e)}resolveColorVariableForNode(e,t){return fi(this,e,t)}resolveNumberVariableForNode(e,t){return pi(this,e,t)}getVariablesForCollection(e){return mi(this,e)}getVariablesByType(e){return hi(this,e)}bindVariable(e,t,n){yi(this,e,t,n)}unbindVariable(e,t){bi(this,e,t)}getChildren(e){let t=this.nodes.get(e);return t?t.childIds.map(e=>this.nodes.get(e)).filter(e=>e!==void 0):[]}isContainer(e){let t=this.nodes.get(e);return t?mn.has(t.type):!1}isDescendant(e,t){let n=this.nodes.get(e);for(;n;){if(n.id===t)return!0;n=n.parentId?this.nodes.get(n.parentId):void 0}return!1}clearAbsPosCache(){this.absPosCache.clear()}getAbsolutePosition(e){let t=this.absPosCache.get(e);if(t)return t;let n=this.getNode(e);if(!n)return{x:0,y:0};let r=gr(n,this);return this.absPosCache.set(e,r),r}getAbsoluteBounds(e){let t=this.getAbsolutePosition(e),n=this.nodes.get(e);return{x:t.x,y:t.y,width:n?.width??0,height:n?.height??0}}generateNodeId(){let e=Ci();for(;this.nodes.has(e);)e=Ci();return e}registerNode(e,t){if(e.parentId=t,this.nodes.set(e.id,e),e.type===`INSTANCE`&&e.componentId){let t=this.instanceIndex.get(e.componentId);t||(t=new Set,this.instanceIndex.set(e.componentId,t)),t.add(e.id)}return this.emitter.emit(`node:created`,e),e}createNode(e,t,n={}){let r=pn(()=>this.generateNodeId(),e,n);return this.nodes.get(t)?.childIds.push(r.id),this.registerNode(r,t)}createNodeWithId(e,t,n,r={}){let i=pn(()=>e,t,r);i.id=e;let a=n?this.nodes.get(n):void 0;return a&&!a.childIds.includes(e)&&a.childIds.push(e),this.registerNode(i,n)}static TEXT_PICTURE_KEYS=Hr;static GLYPH_AFFECTING_KEYS=Ur;static LAYOUT_AFFECTING_KEYS=new Set(`x.y.width.height.rotation.flipX.flipY.layoutMode.layoutDirection.itemSpacing.counterAxisSpacing.paddingLeft.paddingRight.paddingTop.paddingBottom.primaryAxisAlign.counterAxisAlign.counterAxisAlignContent.layoutWrap.primaryAxisSizing.counterAxisSizing.layoutPositioning.layoutGrow.layoutAlignSelf.strokesIncludedInLayout.horizontalConstraint.verticalConstraint.gridTemplateColumns.gridTemplateRows.gridColumnGap.gridRowGap.gridPosition.minWidth.maxWidth.minHeight.maxHeight`.split(`.`));runPreviewUpdates(e,t){this.previewMutationDepth++,t&&this.previewObservers.push(t);try{e()}finally{t&&this.previewObservers.pop(),this.previewMutationDepth--}}preserveSourceMetadataDuring(e){this.sourceMetadataPreservationDepth++;try{e()}finally{this.sourceMetadataPreservationDepth--}}withLayoutMutations(e){this.layoutMutationDepth++;try{e()}finally{this.layoutMutationDepth--}}get isApplyingLayout(){return this.layoutMutationDepth>0}updateNodePositionPreview(e,t,n){this.updateNodePreview(e,{x:t,y:n})}updateNodePreview(e,t){let n=qr(this,e,t,(e,t)=>{for(let n of this.previewObservers)n(e,t)});n&&this.emitter.emit(`node:previewUpdated`,e,n)}updateNode(e,t){if(this.previewMutationDepth>0){this.updateNodePreview(e,t);return}let n=this.nodes.get(e);n&&(t=wi(wr(n,wi(t))),this.applyNodeChanges(n,t))}restoreNodeProperties(e,t,n){let r=this.nodes.get(e);r&&this.applyNodeChanges(r,t,n)}applyNodeChanges(t,n,r=[]){let{id:i}=t;if(r.length){n={...n};for(let e of r)Reflect.set(n,e,void 0)}if(Object.keys(n).some(t=>e.LAYOUT_AFFECTING_KEYS.has(t))&&this.absPosCache.clear(),t.type===`INSTANCE`&&`componentId`in n&&n.componentId!==t.componentId&&(t.componentId&&this.instanceIndex.get(t.componentId)?.delete(i),n.componentId)){let e=this.instanceIndex.get(n.componentId);e||(e=new Set,this.instanceIndex.set(n.componentId,e)),e.add(i)}t.type===`TEXT`&&Gr(t,n),this.sourceMetadataPreservationDepth===0&&Jr(t,Object.keys(n)),n.vectorNetwork&&(n={...n,vectorNetwork:gn(n.vectorNetwork)}),Object.assign(t,n),n.fills&&Or(t,`fills`,n),n.strokes&&Or(t,`strokes`,n);for(let e of r)Reflect.deleteProperty(t,e);this.emitter.emit(`node:updated`,i,n)}reparentNode(e,t){let n=this.nodes.get(e);if(!n||e===this.rootId||this.isDescendant(t,e))return;let r=n.parentId?this.nodes.get(n.parentId):void 0,i=this.nodes.get(t);if(!i||n.parentId===t)return;let a=n.parentId;this.absPosCache.clear();let o=this.getAbsolutePosition(e),s=this.nodes.get(t),c=t===this.rootId||s?.type===`CANVAS`?{x:0,y:0}:this.getAbsolutePosition(t);r&&(r.childIds=r.childIds.filter(t=>t!==e)),n.parentId=t,i.childIds.push(e),n.x=o.x-c.x,n.y=o.y-c.y,this.emitter.emit(`node:reparented`,e,a,t)}reorderChild(e,t,n){let r=this.nodes.get(e);if(!r)return;let i=r.parentId,a=i?this.nodes.get(i):void 0,o=this.nodes.get(t);if(!o||this.isDescendant(t,e))return;a&&(a.childIds=a.childIds.filter(t=>t!==e));let s=n;a===o&&a.childIds.includes(e)&&a.childIds.length,r.parentId=t,this.absPosCache.clear(),s=Math.min(s,o.childIds.length),o.childIds.splice(s,0,e),this.emitter.emit(`node:reordered`,e,t,s,i)}insertChildAt(e,t,n){let r=this.getNode(e),i=this.getNode(t);if(!r||!i||e===t||this.isDescendant(t,e))return;let a=r.parentId,o=a?this.getNode(a):void 0;o&&(o.childIds=o.childIds.filter(t=>t!==e)),i.childIds=i.childIds.filter(t=>t!==e),i.childIds.splice(n,0,e),r.parentId=t,this.clearAbsPosCache(),this.emitter.emit(`node:reordered`,e,t,n,a)}deleteNode(e){let t=this.nodes.get(e);if(!(!t||e===this.rootId)){if(t.parentId){let n=this.nodes.get(t.parentId);n&&(n.childIds=n.childIds.filter(t=>t!==e))}for(let e of Array.from(t.childIds))this.deleteNode(e);t.type===`INSTANCE`&&t.componentId&&this.instanceIndex.get(t.componentId)?.delete(e),this.nodes.delete(e),this.emitter.emit(`node:deleted`,e,t.parentId)}}hitTest(e,t,n){return Rr(this,e,t,n)}hitTestDeep(e,t,n){return zr(this,e,t,n)}hitTestFrame(e,t,n,r){return Vr(this,e,t,n,r)}cloneTree(e,t,n={}){let r=this.nodes.get(e);if(!r)return null;let i=Ln(r,null);i.source={...i.source,id:null,orderKey:null};let a=this.createNode(r.type,t,{...i,...n});for(let e of r.childIds)this.cloneTree(e,a.id);return a}createInstance(e,t,n={}){return Xn(this,e,t,n)}populateInstanceChildren(e,t,n=`deep`){Zn(this,e,t,n)}swapInstanceComponent(e,t){Qn(this,e,t)}syncInstances(e){er(this,e)}detachInstance(e){tr(this,e)}getMainComponent(e){return nr(this,e)}getInstances(e){return rr(this,e)}flattenTree(e,t=0){let n=e??this.rootId,r=this.nodes.get(n);if(!r)return[];let i=[];for(let e of r.childIds){let n=this.nodes.get(e);n&&(i.push({node:n,depth:t}),n.childIds.length>0&&i.push(...this.flattenTree(e,t+1)))}return i}};function Ei(e){let t={};for(let n of e.split(`,`).map(e=>e.trim())){let e=n.indexOf(`=`);e!==-1&&(t[n.slice(0,e).trim()]=n.slice(e+1).trim())}return t}function Di(e,t){return(e?.glyphs??[]).map(e=>e.commandsBlob===void 0?null:{commandsBlob:t[e.commandsBlob],x:e.position.x,y:e.position.y,fontSize:e.fontSize,rotation:e.rotation}).filter(e=>!!e)}let Oi=Ze(`enum MessageType {\r
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
`);pt(Oi),new Set((Oi.definitions.find(e=>e.name===`OpenTypeFeature`)?.fields??[]).map(e=>e.name));let ki=[[`fontVariantCommonLigatures`,`LIGA`],[`fontVariantContextualLigatures`,`CALT`],[`fontVariantDiscretionaryLigatures`,`DLIG`],[`fontVariantHistoricalLigatures`,`HLIG`],[`fontVariantOrdinal`,`ORDN`],[`fontVariantSlashedZero`,`ZERO`]],Ai=[[`fontVariantNumericFigure`,{LINING:`LNUM`,OLDSTYLE:`ONUM`}],[`fontVariantNumericSpacing`,{PROPORTIONAL:`PNUM`,TABULAR:`TNUM`}],[`fontVariantNumericFraction`,{DIAGONAL:`FRAC`,STACKED:`AFRC`}],[`fontVariantCaps`,{SMALL:`SMCP`,PETITE:`PCAP`,ALL_SMALL:[`SMCP`,`C2SC`],ALL_PETITE:[`PCAP`,`C2PC`],UNICASE:`UNIC`,TITLING:`TITL`}]];Object.fromEntries(ki.map(([e,t])=>[t,e]));function ji(e,t,n){let r=t.toUpperCase();e.some(e=>e.tag===r)||e.push({tag:r,enabled:n})}function Mi(e){let t=[];for(let[n,r]of ki){let i=e[n];i!==void 0&&ji(t,r,i)}for(let[n,r]of Ai){let i=r[String(e[n])];if(Array.isArray(i))for(let e of i)ji(t,e,!0);else i&&ji(t,i,!0)}for(let n of e.toggledOnOTFeatures??[])ji(t,n,!0);for(let n of e.toggledOffOTFeatures??[])ji(t,n,!1);return t}function Ni(e){return String.fromCharCode(e>>24&255,e>>16&255,e>>8&255,e&255)}function Pi(e){let t=[];for(let n of e.fontVariations??[]){if(typeof n.value!=`number`)continue;let e=typeof n.axisTag==`number`?Ni(n.axisTag):n.axisName||``;e&&t.push({axis:e,value:n.value})}return t}function Fi(e){return e?{r:e.r??0,g:e.g??0,b:e.b??0,a:e.a??1}:{...dn}}function Ii(e){return Object.keys(e).sort((e,t)=>Number(e)-Number(t)).map(t=>e[Number(t)]).map(e=>e.toString(16).padStart(2,`0`)).join(``)}function Li(e){if(e)return{m00:e.m00,m01:e.m01,m02:e.m02,m10:e.m10,m11:e.m11,m12:e.m12}}let Ri=null;function zi(e){Ri=e}function Bi(e){let t=e.colorVar?.value?.alias;if(!(!t||!Ri))return Ri(t)??void 0}function Vi(e){let t=Bi(e);return t?{color:{...t,a:e.color?.a??1},opacity:e.opacity??t.a}:{color:Fi(e.color),opacity:e.opacity??1}}function Hi(e){let{color:t,opacity:n}=Vi(e);return{type:e.type,color:t,opacity:n,visible:e.visible??!0,blendMode:e.blendMode??`NORMAL`}}function Ui(e,t){!t.type.startsWith(`GRADIENT`)||!t.stops||(e.gradientStops=t.stops.map(e=>({color:Fi(e.color),position:e.position})),t.transform&&(e.gradientTransform=Li(t.transform)))}function Wi(e,t){if(t.type===`IMAGE`){if(t.image&&typeof t.image==`object`){let n=t.image;typeof n.hash==`object`?e.imageHash=Ii(n.hash):typeof n.hash==`string`&&(e.imageHash=n.hash)}e.imageScaleMode=t.imageScaleMode??`FILL`,t.transform&&(e.imageTransform=Li(t.transform))}}function Gi(e,t){t.sourceNodeId&&(e.sourceNodeId=J(t.sourceNodeId)),t.scale&&(e.scale=t.scale),t.spacing&&(e.spacing=t.spacing),t.patternSpacing&&(e.patternSpacing=t.patternSpacing),t.patternTileType&&(e.patternTileType=t.patternTileType),t.verticalAlignment&&(e.verticalAlignment=t.verticalAlignment),t.horizontalAlignment&&(e.horizontalAlignment=t.horizontalAlignment),t.noiseType&&(e.noiseType=t.noiseType),t.density!==void 0&&(e.density=t.density),t.noiseSize&&(e.noiseSize=t.noiseSize),t.customEffectId?.guid&&(e.customEffectId=J(t.customEffectId.guid))}function Ki(e){return e?e.map(e=>{let t=Hi(e);return Ui(t,e),Wi(t,e),Gi(t,e),t}):[]}function qi(e,t,n,r,i,a){if(!e)return[];let o=`CENTER`;return n===`INSIDE`?o=`INSIDE`:n===`OUTSIDE`&&(o=`OUTSIDE`),e.map(e=>{let{color:n,opacity:s}=Vi(e);return{color:n,weight:t??1,opacity:s,visible:e.visible??!0,align:o,cap:r??`NONE`,join:i??`MITER`,dashPattern:a??[]}})}function Ji(e){return e?e.map(e=>({type:e.type,color:Fi(e.color),offset:e.offset??{x:0,y:0},radius:e.radius??0,spread:e.spread??0,visible:e.visible??!0,blendMode:e.blendMode??`NORMAL`,showShadowBehindNode:e.showShadowBehindNode??!0})):[]}function Yi(e,t,n){return t===0&&n===0?e:An(e,1,0,0,1,t,n)}function Xi(e,t,n){let r=[...e.fillGeometry??[],...e.strokeGeometry??[]],i=r.length>0?un(r):null,a=i?.x??0,o=i?.y??0,s=i?i.x+i.width:t,c=i?i.y+i.height:n;for(let t of e.derivedTextGlyphs??[]){let e=t.fontSize||0;a=Math.min(a,t.x-e*.25),o=Math.min(o,t.y-e),s=Math.max(s,t.x+e),c=Math.max(c,t.y+e*.35)}return{left:Math.max(0,-a+ +(a<0)),top:Math.max(0,-o+ +(o<0)),right:Math.max(0,s-t+ +(s>t)),bottom:Math.max(0,c-n+ +(c>n))}}function Zi(e,t,n){e.strokeGeometry&&e.strokeGeometry.length>0&&(e.strokeGeometry=Yi(e.strokeGeometry,t,n)),e.fillGeometry&&e.fillGeometry.length>0&&(e.fillGeometry=Yi(e.fillGeometry,t,n)),e.derivedTextGlyphs?.length&&(e.derivedTextGlyphs=e.derivedTextGlyphs.map(e=>({...e,x:e.x+t,y:e.y+n})))}function Qi(e,t){if(e.nodeType!==`TEXT`||!t)return;e.textPathData=t;let n=e.width??0,r=e.height??0;e.textPathBox={x:0,y:0,width:n,height:r};let i=Xi(e,n,r);if(i.left===0&&i.top===0&&i.right===0&&i.bottom===0)return;let a=i.left,o=i.top;e.x=(e.x??0)-a,e.y=(e.y??0)-o,e.width=n+i.left+i.right,e.height=r+i.top+i.bottom,(a!==0||o!==0)&&(e.textPathBox={x:a,y:o,width:n,height:r},Zi(e,a,o))}let $i=Object.fromEntries(Object.entries({cornerRadius:`CORNER_RADIUS`,topLeftRadius:`RECTANGLE_TOP_LEFT_CORNER_RADIUS`,topRightRadius:`RECTANGLE_TOP_RIGHT_CORNER_RADIUS`,bottomLeftRadius:`RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS`,bottomRightRadius:`RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS`,strokeWeight:`STROKE_WEIGHT`,borderTopWeight:`BORDER_TOP_WEIGHT`,borderBottomWeight:`BORDER_BOTTOM_WEIGHT`,borderLeftWeight:`BORDER_LEFT_WEIGHT`,borderRightWeight:`BORDER_RIGHT_WEIGHT`,itemSpacing:`STACK_SPACING`,paddingLeft:`STACK_PADDING_LEFT`,paddingTop:`STACK_PADDING_TOP`,paddingRight:`STACK_PADDING_RIGHT`,paddingBottom:`STACK_PADDING_BOTTOM`,counterAxisSpacing:`STACK_COUNTER_SPACING`,gridRowGap:`GRID_ROW_GAP`,gridColumnGap:`GRID_COLUMN_GAP`,visible:`VISIBLE`,opacity:`OPACITY`,width:`WIDTH`,height:`HEIGHT`,minWidth:`MIN_WIDTH`,maxWidth:`MAX_WIDTH`,minHeight:`MIN_HEIGHT`,maxHeight:`MAX_HEIGHT`,x:`X_POSITION`,y:`Y_POSITION`,rotation:`ROTATION`,fontSize:`FONT_SIZE`,letterSpacing:`LETTER_SPACING`,lineHeight:`LINE_HEIGHT`,fontFamily:`FONT_FAMILY`}).map(([e,t])=>[t,e]));function ea(e){let t=e.variableField?$i[e.variableField]:void 0,n=e.variableData?.value?.alias?.guid;return t&&n?{field:t,variableId:J(n)}:void 0}let ta=new Set(`cornerRadius.topLeftRadius.topRightRadius.bottomLeftRadius.bottomRightRadius.strokeWeight.borderTopWeight.borderBottomWeight.borderLeftWeight.borderRightWeight.itemSpacing.paddingLeft.paddingTop.paddingRight.paddingBottom.counterAxisSpacing.gridRowGap.gridColumnGap.width.height.minWidth.maxWidth.minHeight.maxHeight.x.y.rotation.fontSize.letterSpacing.lineHeight`.split(`.`));function na(e,t){return e===`opacity`?{opacity:Math.max(0,Math.min(1,t/100))}:ta.has(e)?{[e]:t}:void 0}let ra={PNG:`png`,JPEG:`jpg`,SVG:`svg`,PDF:`pdf`};function ia(e){let t=ma(e,`textPathBox`);if(!t)return null;try{let e=JSON.parse(t);if(!e||typeof e!=`object`)return null;let{x:n,y:r,width:i,height:a}=e;return typeof n!=`number`||typeof r!=`number`||typeof i!=`number`||typeof a!=`number`||!Number.isFinite(n+r+i+a)||i<=0||a<=0?null:{x:n,y:r,width:i,height:a}}catch{return null}}function aa(e){if(!e)return{};try{let t=JSON.parse(e);return!t||typeof t!=`object`||Array.isArray(t)?{}:Object.fromEntries(Object.entries(t).filter(e=>typeof e[0]==`string`&&typeof e[1]==`string`))}catch{return{}}}function oa(e){let t=aa(ma(e,`boundVariables`));for(let n of e.variableConsumptionMap?.entries??[]){let e=ea(n);e&&(t[e.field]=e.variableId)}return e.fillPaints?.forEach((e,n)=>{let r=e.colorVariableBinding?.variableID??e.colorVar?.value?.alias?.guid;r&&(t[`fills/${n}/color`]=J(r))}),e.strokePaints?.forEach((e,n)=>{let r=e.colorVariableBinding?.variableID??e.colorVar?.value?.alias?.guid;r&&(t[`strokes/${n}/color`]=J(r))}),t}function sa(e){return e===`png`||e===`jpg`||e===`webp`||e===`svg`||e===`pdf`}function ca(e){if(!e)return null;try{let t=JSON.parse(e);if(!Array.isArray(t))return null;let n=t.flatMap(e=>{if(!e||typeof e!=`object`||Array.isArray(e))return[];let t=e.scale,n=e.format;return typeof t!=`number`||!Number.isFinite(t)||!sa(n)?[]:[{scale:or(t),format:n}]});return n.length===t.length?n:null}catch{return null}}function la(e){return typeof e==`string`?ra[e]??null:e===0?`png`:e===1?`jpg`:e===2?`svg`:e===3?`pdf`:null}function ua(e){if(!e||typeof e!=`object`||Array.isArray(e))return 1;let t=e.type;if(t!==`CONTENT_SCALE`&&t!==0)return 1;let n=e.value;return typeof n==`number`&&Number.isFinite(n)?or(n):1}function da(e){return ca(ma(e,`exportSettings`))||(e.exportSettings??[]).flatMap(e=>{if(!e||typeof e!=`object`||Array.isArray(e))return[];let t=la(e.imageType);return t?[{scale:ua(e.constraint),format:t}]:[]})}function fa(e){return(e.pluginData??[]).map(e=>({pluginId:e.pluginID,key:e.key,value:e.value}))}function pa(e){let t=ma(e,`librarySource`);if(!t)return null;try{let e=JSON.parse(t);if(!e||typeof e!=`object`||Array.isArray(e))return null;let n=e;return typeof n.identity?.libraryId!=`string`||typeof n.identity.assetKey!=`string`||typeof n.identity.revisionId!=`string`?null:{identity:{libraryId:n.identity.libraryId,assetKey:n.identity.assetKey,revisionId:n.identity.revisionId},sourceNodeId:typeof n.sourceNodeId==`string`?n.sourceNodeId:null,readOnly:n.readOnly===!0}}catch{return null}}function ma(e,t){return e.pluginData?.find(e=>e.pluginID===`open-pencil`&&e.key===t)?.value??null}function ha(e){return(e.pluginRelaunchData??[]).map(e=>({pluginId:e.pluginID,command:e.command,message:e.message,isDeleted:e.isDeleted}))}function ga(e){switch(e){case`UNDERLINE`:return`UNDERLINE`;case`STRIKETHROUGH`:return`STRIKETHROUGH`;default:return`NONE`}}function _a(e,t){return e?e.units===`PIXELS`?e.value:e.units===`PERCENT`?e.value/100*(t??14):e.units===`RAW`?e.value*(t??14):null:null}function va(e,t){return e?e.units===`PIXELS`?e.value:e.units===`PERCENT`?e.value/100*(t??14):e.value:0}function ya(e,t){let n=t.textDecoration;if(n&&(e.textDecoration=ga(n)),t.textDecorationStyle&&(e.textDecorationStyle=t.textDecorationStyle),t.textDecorationThickness&&(e.textDecorationThickness=t.textDecorationThickness.value??null),t.textDecorationSkipInk!==void 0&&(e.textDecorationSkipInk=t.textDecorationSkipInk),t.textUnderlineOffset&&(e.textUnderlineOffset=t.textUnderlineOffset.value??null),t.textDecorationFillPaints){let n=Ki(t.textDecorationFillPaints);n.length>0&&(e.textDecorationFills=n)}}function ba(e,t){let n={};e.fontName&&(n.fontFamily=e.fontName.family,n.fontWeight=Sr(e.fontName.style),n.italic=e.fontName.style.toLowerCase().includes(`italic`)),e.fontSize!==void 0&&(n.fontSize=e.fontSize);let r=Pi(e);r.length>0&&(n.fontVariations=r);let i=Mi(e);if(i.length>0&&(n.fontFeatures=i),e.letterSpacing&&(n.letterSpacing=va(e.letterSpacing,e.fontSize??t)),e.lineHeight){let r=_a(e.lineHeight,e.fontSize??t);r!=null&&(n.lineHeight=r)}if(ya(n,e),e.fillPaints){let t=Ki(e.fillPaints);t.length>0&&(n.fills=t)}return n}function xa(e,t){let n=new Map;for(let r of e){let e=r.styleID;if(e===void 0)continue;let i=ba(r,t);Object.keys(i).length>0&&n.set(e,i)}return n}function Sa(e,t){let n=[],r=e[0],i=0;for(let a=1;a<=e.length;a++)if(a===e.length||e[a]!==r){if(r!==0){let e=t.get(r);e&&n.push({start:i,length:a-i,style:e})}a<e.length&&(r=e[a],i=a)}return n}function Ca(e){let t=e.textData;if(!t?.characterStyleIDs||!t.styleOverrideTable)return[];let n=t.characterStyleIDs;if(n.length===0||t.styleOverrideTable.length===0)return[];let r=xa(t.styleOverrideTable,e.fontSize);return r.size===0?[]:Sa(n,r)}function wa(e,t){let n=new DataView(e.buffer,e.byteOffset,e.byteLength),r=0,i=n.getUint32(r,!0);r+=4;let a=n.getUint32(r,!0);r+=4;let o=n.getUint32(r,!0);r+=4;let s=new Map;for(let e of t??[])s.set(e.styleID,e);let c=[];for(let e=0;e<i;e++){let e=n.getUint32(r,!0);r+=4;let t=n.getFloat32(r,!0);r+=4;let i=n.getFloat32(r,!0);r+=4;let a=s.get(e),o={x:t,y:i,handleMirroring:a?.handleMirroring??`NONE`};a?.strokeCap&&(o.strokeCap=a.strokeCap),c.push(o)}let l=[];for(let e=0;e<a;e++){r+=4;let e=n.getUint32(r,!0);r+=4;let t=n.getFloat32(r,!0);r+=4;let i=n.getFloat32(r,!0);r+=4;let a=n.getUint32(r,!0);r+=4;let o=n.getFloat32(r,!0);r+=4;let s=n.getFloat32(r,!0);r+=4,l.push({start:e,end:a,tangentStart:{x:t,y:i},tangentEnd:{x:o,y:s}})}let u=[];for(let e=0;e<o;e++){let e=n.getUint32(r,!0)===0?`EVENODD`:`NONZERO`;r+=4;let t=n.getUint32(r,!0);r+=4;let i=[];for(let e=0;e<t;e++){let e=n.getUint32(r,!0);r+=4;let t=[];for(let i=0;i<e;i++)t.push(n.getUint32(r,!0)),r+=4;i.push(t)}u.push({windingRule:e,loops:i})}return{vertices:c,segments:l,regions:u}}function Ta(e,t){let n=t?.regions??[];return e.length===n.length?e.map((e,t)=>({...e,windingRule:n[t].windingRule})):e.length===1&&n.length>0&&n.every(e=>e.windingRule===n[0].windingRule)?[{...e[0],windingRule:n[0].windingRule}]:e}function Ea(e,t){let n=e.vectorData;if(n?.vectorNetworkBlob===void 0)return null;let r=n.vectorNetworkBlob;if(r<0||r>=t.length)return null;try{let i=wa(t[r],n.styleOverrideTable),a=n.normalizedSize,o=e.size?.x??0,s=e.size?.y??0;if(a&&o>0&&s>0&&(a.x!==o||a.y!==s)){let e=o/a.x,t=s/a.y;for(let n of i.vertices)n.x*=e,n.y*=t;for(let n of i.segments)n.tangentStart={x:n.tangentStart.x*e,y:n.tangentStart.y*t},n.tangentEnd={x:n.tangentEnd.x*e,y:n.tangentEnd.y*t}}return i}catch{return null}}function Da(e){let t=new Map;for(let n of e??[])n.fillPaints&&n.fillPaints.length>0&&t.set(n.styleID,Ki(n.fillPaints));return t}function Oa(e){let t=e.vectorData;return Da(t?.styleOverrideTable)}function ka(e,t,n){if(!e||e.length===0)return[];let r=[];for(let i of e){if(i.commandsBlob===void 0||i.commandsBlob<0||i.commandsBlob>=t.length)continue;let e=t[i.commandsBlob];if(e.length===0)continue;let a=i.styleID?n?.get(i.styleID):void 0;r.push({windingRule:i.windingRule===`EVENODD`?`EVENODD`:`NONZERO`,commandsBlob:e,fills:a&&a.length>0?X(a):void 0})}return r}function Aa(e){let t={},n=e.variableModeBySetMap;for(let e of n?.entries??[]){let n=e.variableSetID?.guid,r=e.variableModeID;!n||!r||(t[J(n)]=J(r))}return t}let ja={DOCUMENT:`DOCUMENT`,VARIABLE:`VARIABLE`,CANVAS:`CANVAS`,FRAME:`FRAME`,RECTANGLE:`RECTANGLE`,ROUNDED_RECTANGLE:`ROUNDED_RECTANGLE`,ELLIPSE:`ELLIPSE`,TEXT:`TEXT`,LINE:`LINE`,STAR:`STAR`,REGULAR_POLYGON:`POLYGON`,VECTOR:`VECTOR`,BOOLEAN_OPERATION:`BOOLEAN_OPERATION`,GROUP:`GROUP`,SECTION:`SECTION`,COMPONENT:`COMPONENT`,COMPONENT_SET:`COMPONENT_SET`,INSTANCE:`INSTANCE`,SYMBOL:`COMPONENT`,CONNECTOR:`CONNECTOR`,SHAPE_WITH_TEXT:`SHAPE_WITH_TEXT`,TEXT_PATH:`TEXT`};function Ma(e){return e?ja[e]??`RECTANGLE`:`RECTANGLE`}function Na(e){if(e.type!==`BOOLEAN_OPERATION`)return;let t=e.booleanOperation;switch(t){case`SUBTRACT`:case`INTERSECT`:return t;case`EXCLUDE`:case`XOR`:return`EXCLUDE`;default:return`UNION`}}function Pa(e){switch(e){case`HORIZONTAL`:return`HORIZONTAL`;case`VERTICAL`:return`VERTICAL`;default:return`NONE`}}function Fa(e){switch(e){case`RESIZE_TO_FIT`:case`RESIZE_TO_FIT_WITH_IMPLICIT_SIZE`:return`HUG`;case`FILL`:return`FILL`;default:return`FIXED`}}function Ia(e){switch(e){case`CENTER`:return`CENTER`;case`MAX`:return`MAX`;case`SPACE_BETWEEN`:case`SPACE_EVENLY`:return`SPACE_BETWEEN`;default:return`MIN`}}function La(e){switch(e){case`CENTER`:return`CENTER`;case`MAX`:return`MAX`;case`STRETCH`:return`STRETCH`;case`BASELINE`:return`BASELINE`;default:return`MIN`}}function Ra(e){switch(e){case`MIN`:return`MIN`;case`CENTER`:return`CENTER`;case`MAX`:return`MAX`;case`STRETCH`:return`STRETCH`;case`BASELINE`:return`BASELINE`;default:return`AUTO`}}function za(e){switch(e){case`CENTER`:return`CENTER`;case`MAX`:return`MAX`;case`STRETCH`:return`STRETCH`;case`SCALE`:return`SCALE`;default:return`MIN`}}function Ba(e){return e?{startingAngle:e.startingAngle??0,endingAngle:e.endingAngle??2*Math.PI,innerRadius:e.innerRadius??0}:null}function Va(e){let t=e.size?.x??100,n=e.size?.y??100,r=e.transform?.m02??0,i=e.transform?.m12??0,a=0,o=!1;if(e.transform){let s=e.transform;s.m00*s.m11-s.m01*s.m10<0&&(o=!0),a=Math.atan2(s.m10,o?s.m11:s.m00)*(180/Math.PI);let c=a*Math.PI/180,l=Math.cos(c),u=Math.sin(c),d=t/2,f=n/2,p=o?-l:l,m=o?u:-u,h=u,g=l;r=s.m02-d+p*d+m*f,i=s.m12-f+h*d+g*f}return{x:r,y:i,width:t,height:n,rotation:a,flipX:o,flipY:!1}}function Ha(e){return{cornerRadius:e.cornerRadius??0,topLeftRadius:e.rectangleTopLeftCornerRadius??e.cornerRadius??0,topRightRadius:e.rectangleTopRightCornerRadius??e.cornerRadius??0,bottomRightRadius:e.rectangleBottomRightCornerRadius??e.cornerRadius??0,bottomLeftRadius:e.rectangleBottomLeftCornerRadius??e.cornerRadius??0,independentCorners:e.rectangleCornerRadiiIndependent??!1,cornerSmoothing:e.cornerSmoothing??0}}function Ua(e){let t=e.derivedTextData?.baselines?.[0]?.lineHeight;return t!==void 0&&Number.isFinite(t)?t:_a(e.lineHeight,e.fontSize)}function Wa(e){return{textDecoration:ga(e.textDecoration),textDecorationStyle:e.textDecorationStyle??`SOLID`,textDecorationThickness:e.textDecorationThickness?.value??null,textDecorationFills:Ki(e.textDecorationFillPaints),textDecorationSkipInk:e.textDecorationSkipInk??!0,textUnderlineOffset:e.textUnderlineOffset?.value??null}}function Ga(e,t){return{text:e.textData?.characters??``,fontSize:e.fontSize??14,fontFamily:e.fontName?.family??`Inter`,fontWeight:Sr(e.fontName?.style??``),italic:e.fontName?.style.toLowerCase().includes(`italic`)??!1,textAlignHorizontal:e.textAlignHorizontal??`LEFT`,textAlignVertical:e.textAlignVertical??`TOP`,textAutoResize:e.textAutoResize??`NONE`,textCase:e.textCase??`ORIGINAL`,...Wa(e),leadingTrim:e.leadingTrim??`NONE`,lineHeight:Ua(e),letterSpacing:va(e.letterSpacing,e.fontSize),maxLines:e.maxLines??null,styleRuns:Ca(e),fontVariations:Pi(e),fontFeatures:Mi(e),textTruncation:e.textTruncation===`ENDING`?`ENDING`:`DISABLED`,textDirection:ma(e,`textDirection`)||`AUTO`,derivedLayout:e.derivedTextData?.layoutSize?{width:e.derivedTextData.layoutSize.x,height:e.derivedTextData.layoutSize.y}:null,derivedTextGlyphs:Di(e.derivedTextData,t)}}function Ka(e){let t=e.stackPadding??0;return{paddingTop:e.stackVerticalPadding??t,paddingBottom:e.stackPaddingBottom??t,paddingLeft:e.stackHorizontalPadding??t,paddingRight:e.stackPaddingRight??t}}function qa(e,t,n,r){let i=n===`HUG`||r===`HUG`,a=(e.fillPaints?.some(e=>e.visible!==!1)??!1)||(e.strokePaints?.some(e=>e.visible!==!1)??!1);if(!(t===`NONE`||!i||!a))return{x:e.transform?.m02??0,y:e.transform?.m12??0,width:e.size?.x??100,height:e.size?.y??100}}function Ja(e,t){let n=e?.value?.[t];return typeof n==`number`&&Number.isFinite(n)&&n>0?n:null}function Ya(e,t){let n=e?.value?.[t];return typeof n==`number`&&Number.isFinite(n)&&n>=0?n:null}function Xa(e){let t=Pa(e.stackMode),n=Fa(e.stackPrimarySizing),r=Fa(e.stackCounterSizing),i=qa(e,t,n,r);return{layoutMode:t,itemSpacing:e.stackSpacing??0,...Ka(e),primaryAxisSizing:n,counterAxisSizing:r,primaryAxisAlign:Ia(e.stackPrimaryAlignItems??e.stackJustify),counterAxisAlign:La(e.stackCounterAlignItems??e.stackCounterAlign),layoutWrap:e.stackWrap===`WRAP`?`WRAP`:`NO_WRAP`,counterAxisSpacing:e.stackCounterSpacing??0,layoutPositioning:e.stackPositioning===`ABSOLUTE`?`ABSOLUTE`:`AUTO`,layoutGrow:e.stackChildPrimaryGrow??0,layoutAlignSelf:Ra(e.stackChildAlignSelf),counterAxisAlignContent:e.stackCounterAlignContent===`SPACE_BETWEEN`?`SPACE_BETWEEN`:`AUTO`,itemReverseZIndex:e.stackReverseZIndex??!1,strokesIncludedInLayout:e.strokesIncludedInLayout??!1,layoutDirection:ma(e,`layoutDirection`)||`AUTO`,...i?{derivedLayout:i}:{}}}function Za(e){return e.strokeCap??`NONE`}function Qa(e,t){return e.strokeJoin??t?.vertices.find(e=>e.strokeJoin)?.strokeJoin??`MITER`}function $a(e){if(!e||typeof e!=`object`||!(`guid`in e))return null;let t=e.guid;return!t||typeof t!=`object`?null:J(t)}function eo(e){return e===`FILL`||e===`TEXT`||e===`EFFECT`||e===`GRID`?e:null}function to(e){return Array.isArray(e)?structuredClone(e):[]}function no(e,t){if(e.type!==`TEXT_PATH`)return null;let n=e.vectorData,r=n?.vectorNetworkBlob,i=n?.normalizedSize;if(typeof r!=`number`||!i||i.x<=0||i.y<=0)return null;let a=t[r],o=e.textPathStart;try{return{network:wa(a,n.styleOverrideTable),normalizedSize:{x:i.x,y:i.y},tValue:o?.tValue??0,forward:o?.forward??!0}}catch{return null}}function ro(e,t){let n=Ea(e,t),r=Za(e),i=Qa(e,n);return{vectorNetwork:n,fillGeometry:Ta(ka(e.fillGeometry,t,Oa(e)),n),strokeGeometry:ka(e.strokeGeometry,t),arcData:Ba(e.arcData),strokeCap:r,strokeJoin:i,dashPattern:e.dashPattern??[],borderTopWeight:e.borderTopWeight??0,borderRightWeight:e.borderRightWeight??0,borderBottomWeight:e.borderBottomWeight??0,borderLeftWeight:e.borderLeftWeight??0,independentStrokeWeights:e.borderStrokeWeightsIndependent??!1,strokeMiterLimit:e.miterLimit??4}}function io(e){let t=Ma(e.type);return t===`FRAME`&&So(e)||ma(e,`nodeType`)===`COMPONENT_SET`?`COMPONENT_SET`:t===`FRAME`&&e.resizeToFit===!0&&(e.stackMode===void 0||e.stackMode===`NONE`)?`GROUP`:t}function ao(e,t){return Math.abs((e??0)-(t??0))<=.5}function oo(e,t){if(e.type!==`TEXT`||e.textAutoResize!==`NONE`||t?.stackMode!==`HORIZONTAL`&&t?.stackMode!==`VERTICAL`||!e.textData?.characters)return!1;let n=e.derivedTextData?.layoutSize;return!n||!e.size?!1:ao(n.x,e.size.x)&&ao(n.y,e.size.y)}function so(e,t){let n=io(e),r=ro(e,t),i=no(e,t),a={nodeType:n,name:e.name??n,source:wo(e,t),...Va(e),opacity:e.opacity??1,visible:e.visible??!0,locked:e.locked??!1,blendMode:e.blendMode??`PASS_THROUGH`,booleanOperation:Na(e),fills:Ki(e.fillPaints),strokes:qi(e.strokePaints,e.strokeWeight,e.strokeAlign,r.strokeCap,r.strokeJoin,e.dashPattern??[]),effects:Ji(e.effects),layoutGrids:to(e.layoutGrids),guides:Qt(e.guides),fillStyleId:$a(e.styleIdForFill),strokeStyleId:$a(e.styleIdForStrokeFill),textStyleId:$a(e.styleIdForText),effectStyleId:$a(e.styleIdForEffect),gridStyleId:$a(e.styleIdForGrid),sharedStyleType:eo(e.styleType),...Ha(e),...Ga(e,t),horizontalConstraint:za(e.horizontalConstraint),verticalConstraint:za(e.verticalConstraint),...Xa(e),...r,minWidth:Ja(e.minSize,`x`),maxWidth:Ya(e.maxSize,`x`),minHeight:Ja(e.minSize,`y`),maxHeight:Ya(e.maxSize,`y`),isMask:e.mask??!1,maskType:e.maskType??`ALPHA`,maskIsOutline:e.maskIsOutline??!1,expanded:!0,autoRename:e.autoRename??!0,boundVariables:oa(e),variableModes:Aa(e),exportSettings:da(e),pluginData:fa(e),librarySource:pa(e),pluginRelaunchData:ha(e),clipsContent:e.frameMaskDisabled===!1&&e.resizeToFit!==!0,componentId:Ao(e),componentPropertyDefinitions:uo(e),componentPropertyReferences:fo(e),componentPropertyAssignments:mo(e),componentPropertyValues:go(e),...xo(e)};Qi(a,i);let o=ia(e);return o&&a.textPathBox&&(a.textPathBox={x:o.x+a.textPathBox.x,y:o.y+a.textPathBox.y,width:o.width,height:o.height}),a}let co={VARIANT:`VARIANT`,TEXT:`TEXT`,BOOL:`BOOLEAN`,BOOLEAN:`BOOLEAN`,INSTANCE_SWAP:`INSTANCE_SWAP`};function lo(e){if(!e||typeof e!=`object`)return``;let t=e;return typeof t.boolValue==`boolean`?String(t.boolValue):typeof t.textValue==`string`?t.textValue:t.textValue&&typeof t.textValue==`object`?t.textValue.characters??``:t.guidValue?J(t.guidValue):``}function uo(e){let t=e.componentPropDefs;if(!t?.length)return[];let n=[];for(let e of t){if(!e.id||!e.name)continue;let t=co[e.type??``]??`VARIANT`;n.push({id:J(e.id),name:e.name,type:t,defaultValue:lo(e.initialValue),variantOptions:t===`VARIANT`?e.preferredValues?.stringValues:void 0,preferredValues:t===`INSTANCE_SWAP`?e.preferredValues?.instanceSwapValues?.map(e=>e.key).filter(e=>e!==void 0):void 0})}return n}function fo(e){let t=e.componentPropRefs;if(!t?.length)return[];let n={0:`VISIBLE`,1:`TEXT`,2:`INSTANCE_SWAP`,VISIBLE:`VISIBLE`,TEXT_DATA:`TEXT`,OVERRIDDEN_SYMBOL_ID:`INSTANCE_SWAP`};return t.flatMap(e=>{let t=n[String(e.componentPropNodeField)];return e.defID&&t&&!e.isDeleted?[{propertyId:J(e.defID),field:t}]:[]})}function po(e){if(e.value&&(e.value.boolValue!==void 0||e.value.textValue!==void 0||e.value.guidValue!==void 0))return lo(e.value);let t=e.varValue?.value;return t?.symbolIdValue?.guid?J(t.symbolIdValue.guid):t?.boolValue===void 0?t?.textValue===void 0?t?.textDataValue?.characters??``:t.textValue:String(t.boolValue)}function mo(e){let t=e.componentPropAssignments;return t?.length?Object.fromEntries(t.flatMap(e=>e.defID?[[J(e.defID),po(e)]]:[])):{}}function ho(e){let t=e.variantPropSpecs;return t?.length?t.filter(e=>!!e.propDefId).map(e=>({propDefId:J(e.propDefId),value:e.value??``})):[]}function go(e){let t=ho(e),n=new Map(uo(e).map(e=>[e.id,e.name]));if(t.length>0&&n.size>0){let e={};for(let r of t)e[n.get(r.propDefId)??r.propDefId]=r.value;return e}let r=e.name;return r?.includes(`=`)?Ei(r):{}}function _o(e){if(!e||typeof e!=`object`)return null;let t=e;return typeof t.sessionID!=`number`||typeof t.localID!=`number`?null:J({sessionID:t.sessionID,localID:t.localID})}function vo(e){return typeof e==`string`?e:null}function yo(e){return typeof e==`string`?e:``}function bo(e){return typeof e==`boolean`&&e}function xo(e){let t=e.symbolLinks??[];return{componentKey:vo(e.componentKey),sourceLibraryKey:vo(e.sourceLibraryKey),publishId:_o(e.publishID),overrideKey:_o(e.overrideKey),sharedSymbolVersion:vo(e.sharedSymbolVersion),publishedVersion:vo(e.publishedVersion),isPublishable:bo(e.isPublishable),isSymbolPublishable:bo(e.isSymbolPublishable),symbolDescription:yo(e.symbolDescription),symbolLinks:t.filter(e=>typeof e.uri==`string`).map(e=>({uri:e.uri,displayName:e.displayName,displayText:e.displayText})),variantPropSpecs:ho(e)}}function So(e){let t=e.componentPropDefs;return t?.length?t.some(e=>e.type===`VARIANT`):!1}function Co(e){return{stackMode:e.stackMode,stackSpacing:e.stackSpacing,stackPadding:e.stackPadding,stackPaddingRight:e.stackPaddingRight,stackPaddingBottom:e.stackPaddingBottom,stackCounterAlign:e.stackCounterAlign,stackJustify:e.stackJustify,stackCounterAlignItems:e.stackCounterAlignItems,stackPrimaryAlignItems:e.stackPrimaryAlignItems,stackPrimarySizing:e.stackPrimarySizing,stackCounterSizing:e.stackCounterSizing,stackVerticalPadding:e.stackVerticalPadding,stackHorizontalPadding:e.stackHorizontalPadding,stackWrap:e.stackWrap,stackPositioning:e.stackPositioning,stackChildPrimaryGrow:e.stackChildPrimaryGrow,stackChildAlignSelf:e.stackChildAlignSelf,stackCounterSpacing:e.stackCounterSpacing,bordersTakeSpace:e.bordersTakeSpace,stackReverseZIndex:e.stackReverseZIndex}}function wo(e,t){return{format:`fig`,id:e.guid?J(e.guid):null,orderKey:e.parentIndex?.position??null,editedFields:[],fig:{...Oo(e,t),...ko(e,t),layout:Co(e)}}}function To(e,t,n){let r=t.stackMode,i=r===`HORIZONTAL`,a=r===`VERTICAL`;e.sort((e,t)=>{let r=n.get(e)?.parentIndex?.position??``,o=n.get(t)?.parentIndex?.position??``;if(r<o)return-1;if(r>o)return 1;if(i||a){let r=i?`m02`:`m12`,a=n.get(e)?.transform?.[r]??0,o=n.get(t)?.transform?.[r]??0;if(a!==o)return a-o}return 0})}function Eo(e,t){if(e instanceof Uint8Array)return e;if(Array.isArray(e))return e.map(e=>Eo(e,t));if(!e||typeof e!=`object`)return e;let n={};for(let[r,i]of Object.entries(e))if((r===`commandsBlob`||r===`vectorNetworkBlob`)&&typeof i==`number`){let e=t[i];e==null?n[r]=i:n[r]={__openPencilFigmaBlob:e instanceof Uint8Array?e:new Uint8Array(Object.values(e))}}else n[r]=Eo(i,t);return n}let Do=`styleIdForFill.styleIdForStrokeFill.styleIdForText.styleIdForEffect.styleIdForGrid.styleType.componentPropAssignments.backgroundPaints.layoutGrids.exportSettings.componentPropDefs.componentPropRefs.variantPropSpecs.stateGroupPropertyValueOrders.isStateGroup.version.sourceLibraryKey.userFacingVersion.description.key.sortPosition.detachedSymbolId.documentColorProfile.variableConsumptionMap.variableModeBySetMap.parameterConsumptionMap.editInfo.backgroundColor.blendMode.pageType.isPageDivider.guides.handoffStatusMap.annotationCategories.miterLimit.mask.maskType.maskIsOutline.strokeWeight.strokeJoin.borderStrokeWeightsIndependent.borderTopWeight.borderRightWeight.borderBottomWeight.borderLeftWeight.minSize.maxSize.targetAspectRatio.gridRows.gridColumns.gridRowAnchor.gridColumnAnchor.gridColumnsSizing.gridRowsSizing.gridChildVerticalAlign.gridChildHorizontalAlign.textAutoResize.textAlignHorizontal.textAlignVertical.textData.lineHeight.fontName.fontSize.letterSpacing.textTracking.fontVersion.textUserLayoutVersion.textExplicitLayoutVersion.fontVariations.fontVariantCommonLigatures.fontVariantContextualLigatures.toggledOnOTFeatures.toggledOffOTFeatures.leadingTrim.textDecorationFillPaints.textUnderlineOffset.textDecorationThickness.textDecorationStyle.semanticWeight.semanticItalic.maxLines.textPathStart.derivedTextData.fillPaints.strokePaints.effects.sectionStatusInfo.prototypeStartNodeID.prototypeInteractions.transitionInfo.codeSyntax.lockMode.slideThemeMap.isSoftDeleted.brushType.scatterStrokeSettings.vectorOperationVersion.vectorData.fillGeometry.strokeGeometry`.split(`.`);function Oo(e,t){let n={};for(let r of Do){let i=e[r];i!==void 0&&(n[r]=Eo(i,t))}return{rawSize:e.size?{...e.size}:null,rawTransform:e.transform?{...e.transform}:null,rawNodeFields:n}}function ko(e,t){let n=e.symbolData;return{symbolOverrides:Eo(n?.symbolOverrides??[],t),componentPropAssignments:Eo(e.componentPropAssignments??[],t),derivedSymbolData:Eo(e.derivedSymbolData??[],t),derivedSymbolDataLayoutVersion:typeof e.derivedSymbolDataLayoutVersion==`number`?e.derivedSymbolDataLayoutVersion:null,uniformScaleFactor:typeof n?.uniformScaleFactor==`number`?n.uniformScaleFactor:null}}function Ao(e){let t=e.symbolData;return t?.symbolID?J(t.symbolID):``}function jo(e,t,n,r){let i=e.getNode(t),a=e.getNode(n);if(!i||!a)return;let o=e.getNode(r)?.instanceOverrides,s=i.childIds.map(t=>e.getNode(t)).filter(e=>e!==void 0),c=a.childIds.map(t=>e.getNode(t)).filter(e=>e!==void 0),l=new Set,u=new Set,d=(t,n)=>{n.type===`INSTANCE`?o&&rn(o,r,n.id,`sourceComponentId`,t.id):n.componentId||=t.id,l.add(t.id),u.add(n.id),n.type!==`INSTANCE`&&t.childIds.length>0&&n.childIds.length>0&&jo(e,t.id,n.id,r)};for(let e of c){if(!e.overrideKey||u.has(e.id))continue;let t=s.find(t=>!l.has(t.id)&&t.overrideKey===e.overrideKey&&t.type===e.type);t&&d(t,e)}let f=s.filter(e=>!l.has(e.id)),p=c.filter(e=>!u.has(e.id));if(f.length===p.length&&f.every((e,t)=>e.type===p[t]?.type))for(let e=0;e<f.length;e++){let t=f[e],n=p[e];d(t,n)}}function Mo(e,t){e.preserveSourceMetadataDuring(()=>{for(let n of e.getAllNodes()){if(n.type!==`INSTANCE`||!n.componentId||t&&!t.has(n.id))continue;let r=e.getNode(n.componentId);r&&jo(e,r.id,n.id,n.id)}})}let No=[`fontSize`,`fontName`,`lineHeight`,`letterSpacing`,`textDecoration`,`textCase`];function Po(e,t,n){if(t?.guid)return e.get(J(t.guid));if(!t?.assetRef||!n)return;let{key:r,version:i}=t.assetRef,a=(i?n.get(`${r}@${i}`):void 0)??n.get(r);return a?e.get(a):void 0}function Fo(e,t,n){let r=Po(e,t.styleIdForFill,n);r?.styleType===`FILL`&&r.fillPaints&&(t.fillPaints=r.fillPaints);let i=Po(e,t.styleIdForStrokeFill,n);i?.styleType===`FILL`&&i.fillPaints&&(t.strokePaints=i.fillPaints)}function Io(e,t,n){let r=Po(e,t.styleIdForEffect,n);r?.styleType===`EFFECT`&&r.effects&&(t.effects=r.effects);let i=Po(e,t.styleIdForGrid,n);i?.styleType===`GRID`&&i.layoutGrids&&(t.layoutGrids=i.layoutGrids)}function Lo(e,t,n){let r=Po(e,t.styleIdForText,n);if(!(r?.type!==`TEXT`||r.styleType!==`TEXT`))for(let e of No)e===`textDecoration`?t.textDecoration=r.textDecoration:r[e]!==void 0&&Object.assign(t,{[e]:r[e]})}function Ro(e,t,n){Fo(e,t,n),Io(e,t,n),Lo(e,t,n)}function zo(e,t,n){let r={},i=ka(e.fillGeometry,n,Oa(e)),a=ka(e.strokeGeometry,n);if(i.length>0?r.fillGeometry=Ta(i,t.vectorNetwork):e.size&&t.fillGeometry.length>0&&t.width>0&&t.height>0&&(r.fillGeometry=jn(t.fillGeometry,e.size.x/t.width,e.size.y/t.height)),a.length>0?r.strokeGeometry=a:e.size&&t.strokeGeometry.length>0&&t.width>0&&t.height>0&&(r.strokeGeometry=jn(t.strokeGeometry,e.size.x/t.width,e.size.y/t.height)),e.size&&t.vectorNetwork?.vertices.length){let n=hn(t.vectorNetwork),i=Math.min(...n.vertices.map(({x:e})=>e)),a=Math.min(...n.vertices.map(({y:e})=>e)),o=n.vertices.map(({x:e})=>e),s=n.vertices.map(({y:e})=>e),c=Math.max(...o)-Math.min(...o),l=Math.max(...s)-Math.min(...s),u=c===0?1:e.size.x/c,d=l===0?1:e.size.y/l;for(let e of n.vertices)e.x=i+(e.x-i)*u,e.y=a+(e.y-a)*d;for(let e of n.segments)e.tangentStart.x*=u,e.tangentStart.y*=d,e.tangentEnd.x*=u,e.tangentEnd.y*=d;r.vectorNetwork=n}return r}function Bo(e,t,n){let r=t.get(n);if(r!==void 0)return r;let i=e.graph.getChildren(n).filter(e=>e.visible).length;return t.set(n,i),i}function Vo(e,t,n){if(!n.parentId||Bo(e,t,n.parentId)!==1||!n.componentId)return null;let r=e.graph.getNode(n.componentId),i=e.graph.getNode(n.parentId);return!r||!i?null:r.x>=0&&r.y>=0&&r.x+r.width<=i.width+.01&&r.y+r.height<=i.height+.01?{x:r.x,y:r.y}:null}function Ho(e,t,n){if(e.rotation===0&&!e.flipX&&!e.flipY)return null;let r=vr(e),i=t/2,a=n/2;return{x:r[2]-i+r[0]*i+r[1]*a,y:r[5]-a+r[3]*i+r[4]*a}}function Uo(e,t,n){let r={};e.fontSize!==void 0&&(r.fontSize=e.fontSize),e.lineHeight!==void 0&&(r.lineHeight=_a(e.lineHeight,e.fontSize)),e.letterSpacing!==void 0&&(r.letterSpacing=va(e.letterSpacing,e.fontSize)),e.strokeWeight!==void 0&&n.strokes.length>0&&(r.strokes=n.strokes.map(t=>({...t,weight:e.strokeWeight})));let i=Di(e.derivedTextData,t);return i.length>0&&(r.derivedTextGlyphs=i),r}function Wo(e,t,n,r){let i=Uo(n,e.blobs,r),a={};if(n.size&&(i.width=n.size.x,i.height=n.size.y,a.width=n.size.x,a.height=n.size.y),n.transform){let e=Va({transform:n.transform,size:n.size??{x:r.width,y:r.height}});i.x=e.x,i.y=e.y,i.rotation=e.rotation,i.flipX=e.flipX,i.flipY=e.flipY,a.x=e.x,a.y=e.y}else if(n.size){let o=Ho(r,n.size.x,n.size.y)??Vo(e,t,r);o&&(i.x=o.x,i.y=o.y,a.x=o.x,a.y=o.y)}return Object.keys(a).length>0&&(i.derivedLayout=a),Object.assign(i,zo(n,r,e.blobs)),{updates:i,hasSize:n.size!==void 0}}function*Go(e,t){if(!t){yield*e.getAllNodes();return}for(let n of t){let t=e.getNode(n);t&&(yield t)}}function Ko(e,t,n={}){return{...Yn(e),componentId:t,derivedLayout:e.derivedLayout?{...e.derivedLayout}:null,...n}}let qo=new WeakSet,Jo=new WeakMap;function Yo(e){let t=Jo.get(e);return t||(t=new Map([...e].map(([e,t])=>[e,new Set(t)])),Jo.set(e,t)),t}function Xo(e,t,n){if(qo.has(t))return;let r=Yo(t);for(let i of Go(e,n)){if(!i.componentId)continue;let e=r.get(i.componentId);e||(e=new Set,r.set(i.componentId,e),t.set(i.componentId,[])),!e.has(i.id)&&(e.add(i.id),t.get(i.componentId)?.push(i.id))}qo.add(t)}function Zo(e,t,n){let r=Yo(n);for(let i of t){let t=e.getNode(i);if(!t?.componentId)continue;let a=r.get(t.componentId);if(a||(a=new Set,r.set(t.componentId,a)),a.has(t.id))continue;a.add(t.id);let o=n.get(t.componentId);o?o.push(t.id):n.set(t.componentId,[t.id])}}function Qo(e,t,n){let r=[],i=[t],a=0;for(;a<i.length;){let t=e.getNode(i[a]);a++,t&&(r.push(t.id),i.push(...t.childIds))}Zo(e,r,n)}function $o(e,t){let n=[],r=e.getNode(t);if(!r)return n;let i=(t,r)=>{let a=e.getNode(t);a&&(n.push({id:a.id,path:r,type:a.type}),a.childIds.forEach((e,t)=>i(e,[...r,t])))};return r.childIds.forEach((e,t)=>i(e,[t])),n}function es(e,t,n){let r=e.getNode(t);if(!r)return null;for(let t of n){let n=r.childIds[t];if(!n||(r=e.getNode(n),!r))return null}return r}function ts(e,t,n,r){return new Set([...r?.get(t)??[],...r?.get(n)??[],...e.instanceIndex.get(t)??[],...e.instanceIndex.get(n)??[]])}function ns(e,t,n){if(!e)return;let r=Yo(e),i=r.get(t);if(i||(i=new Set,r.set(t,i)),i.has(n))return;i.add(n);let a=e.get(t);a||(a=[],e.set(t,a)),a.push(n)}function rs(e,t,n,r,i){r&&Xo(e,r,i);for(let i of n){let n=es(e,t,i.path);if(!n||n.type!==i.type)continue;let a=ts(e,i.id,n.id,r);for(let t of a){let a=e.getNode(t);a?.componentId!==i.id&&a?.componentId!==n.id||(e.updateNode(t,Ko(n,n.id)),ns(r,n.id,t))}}}let is=new WeakMap,as=new WeakMap,os=new WeakMap,ss=new WeakMap,cs=new WeakMap,ls=new WeakMap;function us(e){function t(n,r=0){let i=e.preComputedRoot.get(n);if(i!==void 0)return i;if(r>20)return n;let a=e.graph.getNode(n);if(a?.componentId&&a.componentId!==n){let i=t(a.componentId,r+1);return e.preComputedRoot.set(n,i),i}return e.preComputedRoot.set(n,n),n}for(let n of Go(e.graph,e.activeNodeIds)){if(!n.componentId)continue;t(n.id);let r=e.preComputedClones.get(n.componentId);r?r.push(n.id):e.preComputedClones.set(n.componentId,[n.id])}}function $(e,t,n=0){let r=e.componentIdRoot.get(t);if(r!==void 0)return r;if(n>20)return e.componentIdRoot.set(t,t),t;let i=e.graph.getNode(t);if(i?.componentId){let r=$(e,i.componentId,n+1);return e.componentIdRoot.set(t,r),r}let a=e.nodeIdToGuid.get(t);if(a){let r=e.changeMap.get(a)?.symbolData?.symbolID;if(r){let i=e.guidToNodeId.get(J(r));if(i&&i!==t){let r=$(e,i,n+1);return e.componentIdRoot.set(t,r),r}}}return e.componentIdRoot.set(t,t),t}function ds(e){let t=new Map;for(let[n,r]of e.changeMap){let e=r.parentIndex?.guid?J(r.parentIndex.guid):null,i=r.symbolData?.symbolID?J(r.symbolData.symbolID):null;if(!e||!i)continue;let a=`${e}\0${i}`,o=t.get(a);o?o.push(n):t.set(a,[n])}for(let n of t.values())n.sort((t,n)=>{let r=e.changeMap.get(t),i=e.changeMap.get(n);return(r?.transform?.m12??0)-(i?.transform?.m12??0)||(r?.transform?.m02??0)-(i?.transform?.m02??0)});return t}function fs(e){let t=as.get(e);if(t)return t;let n=ds(e);return as.set(e,n),n}function ps(e,t){let n=is.get(e);if(n||(n=new Map,is.set(e,n)),n.has(t))return n.get(t)??null;let r=e.changeMap.get(t),i=r?.parentIndex?.guid?J(r.parentIndex.guid):null,a=r?.symbolData?.symbolID?J(r.symbolData.symbolID):null;if(!r||!i||!a)return n.set(t,null),null;let o=(fs(e).get(`${i}\0${a}`)??[]).indexOf(t),s=o===-1?null:o;return n.set(t,s),s}function ms(e,t,n){let r=cs.get(e);r||(r=new Map,cs.set(e,r));let i=`${t}\0${n}`;if(r.has(i))return r.get(i)??null;let a=(t,r)=>{let i=e.graph.getNode(t);if(!i)return null;if(t===n||i.componentId===n)return r;for(let e=0;e<i.childIds.length;e++){let t=a(i.childIds[e],[...r,e]);if(t)return t}return null},o=a(t,[]);return r.set(i,o),o}function hs(e,t,n){let r=e.graph.getNode(t);if(!r?.componentId)return null;let i=ms(e,r.componentId,n);if(!i)return null;let a=r;for(let t of i){let n=a.childIds[t];if(!n)return null;let r=e.graph.getNode(n);if(!r)return null;a=r}return a.id}function gs(e,t,n,r){if(!n||!r)return null;let i=null,a=0,o=t=>{if(a>1)return;let s=e.graph.getNode(t);if(s){s.name===n&&s.type===r&&(a++,i=t);for(let e of s.childIds)o(e)}};return o(t),a===1?i:null}function _s(e,t,n,r){let i=ps(e,r);if(i==null)return null;let a=e.preComputedRoot.get(n)??$(e,n),o=os.get(e);o||(o=new Map,os.set(e,o));let s=`${t}\0${a}`,c=o.get(s);if(!c){c=[];let n=t=>{let r=e.graph.getNode(t);if(r){r.componentId&&(e.preComputedRoot.get(r.componentId)??$(e,r.componentId))===a&&c?.push(t);for(let e of r.childIds)n(e)}};n(t),c.sort((t,n)=>{let r=e.graph.getNode(t),i=e.graph.getNode(n);return(r?.y??0)-(i?.y??0)||(r?.x??0)-(i?.x??0)}),o.set(s,c)}return c[i]??null}function vs(e,t,n){let r=ss.get(e);r||(r=new Map,ss.set(e,r));let i=`${t}\0${n}`;if(r.has(i))return r.get(i)??null;let a=e.graph.getNode(t);if(!a)return null;for(let t of a.childIds)if(e.graph.getNode(t)?.componentId===n)return r.set(i,t),t;let o=e.preComputedRoot.get(n)??$(e,n);if(o){let t=null,n=!1;for(let r of a.childIds){let i=e.graph.getNode(r);if(i?.componentId&&(e.preComputedRoot.get(i.componentId)??$(e,i.componentId))===o){if(t){n=!0;break}t=r}}if(t&&!n)return r.set(i,t),t}for(let t of a.childIds){let a=vs(e,t,n);if(a)return r.set(i,a),a}return null}function ys(e,t,n,r,i){return r?e.graph.getNode(t)?.componentId===r?t:hs(e,t,r)??vs(e,t,r)??_s(e,t,r,n)??gs(e,t,i?.name,i?.type):gs(e,t,i?.name,i?.type)}function bs(e,t,n){let r=ls.get(e);r||(r=new Map,ls.set(e,r));let i=t,a=[];for(let o=0;o<n.length;o++){let s=J(n[o]);a.push(s);let c=`${t}\0${a.join(`/`)}`,l=r.get(c);if(l&&e.graph.getNode(l)){i=l;continue}l&&r.delete(c);let u=e.overrideKeyToGuid.get(s)??s,d=e.changeMap.get(u),f=d?.symbolData?.symbolID?J(d.symbolData.symbolID):null,p=e.guidToNodeId.get(u)??(f?e.guidToNodeId.get(f):void 0),m=ys(e,i,u,p,d);if(m){i=m,r.set(c,m);continue}let h=e.graph.getNode(i);if(h?.childIds.length===1){i=h.childIds[0],o--,a.pop();continue}return null}return i}function xs(e,t){let n=[],r=t=>{let i=e.graph.getNode(t);if(i){i.strokes.length>0&&n.push(Cn(i.strokes));for(let e of i.childIds)r(e)}};return r(t),n}function Ss(e,t,n){let r=0,i=t=>{let a=e.graph.getNode(t);if(a){a.strokes.length>0&&(r<n.length&&e.graph.preserveSourceMetadataDuring(()=>{e.graph.updateNode(t,{strokes:Cn(n[r])})}),r++);for(let e of a.childIds)i(e)}};i(t)}function Cs(e,t){if(!t)return``;let n=t.parentId?e.graph.getNode(t.parentId):void 0;return n?.type===`COMPONENT_SET`?n.name:t.name}function ws(e,t){let n=Yn(t);n.width=e.width,n.height=e.height,n.boundVariables={...n.boundVariables};for(let t of[`width`,`height`]){let r=e.boundVariables[t];r&&(n.boundVariables[t]=r)}return n}function Ts(e,t,n){let r=e.graph.getNode(t);if(r?.type!==`INSTANCE`)return;let i=xs(e,t),a=$o(e.graph,t),o=r.componentId?$(e,r.componentId):void 0,s=o?e.graph.getNode(o):void 0;for(let t of Array.from(r.childIds))e.graph.deleteNode(t);let c=e.graph.getNode(n),l=c?{...ws(r,c),componentId:n}:{componentId:n},u=Cs(e,s),d=Cs(e,c);d&&u&&(r.name===u||r.name===s?.name)&&(l.name=d),e.graph.preserveSourceMetadataDuring(()=>e.graph.updateNode(t,l)),c&&c.childIds.length>0&&(e.graph.populateInstanceChildren(t,n,`fig-import`),Qo(e.graph,t,e.preComputedClones),Ss(e,t,i)),rs(e.graph,t,a,e.preComputedClones,e.activeNodeIds),e.swappedInstances.add(t),e.componentIdRoot.clear(),os.delete(e),ss.delete(e)}let Es={text:`text`,visible:`visible`,opacity:`opacity`,fills:`fills`,strokes:`strokes`,effects:`effects`,styleRuns:`styleRuns`,layoutGrow:`layoutGrow`,textAutoResize:`textAutoResize`,locked:`locked`,x:`x`,y:`y`,width:`width`,height:`height`,derivedLayout:`derivedLayout`,fontSize:`fontSize`,lineHeight:`lineHeight`,letterSpacing:`letterSpacing`,fillGeometry:`fillGeometry`,strokeGeometry:`strokeGeometry`};function Ds(e,t,n){let r=e.get(t);r?r.add(n):e.set(t,new Set([n]))}function Os(e,t,n){for(let r of Object.keys(n)){let n=Es[r];n&&Ds(e,t,n)}}function ks(e,t,n){return e?.get(t)?.has(n)===!0}function As(e,t){t.strokes&&=t.strokes.map((t,n)=>{if(n>=e.strokes.length)return{...t,cap:e.strokeCap,join:e.strokeJoin,dashPattern:e.dashPattern};let r=e.strokes[n];return{...t,cap:r.cap,join:r.join,dashPattern:r.dashPattern}})}function js(e,t){let n=!1;if(t.swapComponentId&&(Ts(e,t.targetId,t.swapComponentId),Ds(e.protectedFields,t.targetId,`structure`),n=!0),t.props&&Object.keys(t.props).length>0){let r=e.graph.getNode(t.targetId);if(r){let i=t.props;i.boundVariables&&={...r.boundVariables,...i.boundVariables},As(r,i),e.graph.preserveSourceMetadataDuring(()=>e.graph.updateNode(t.targetId,i)),Os(e.protectedFields,t.targetId,i),n=!0}}return n}function Ms(e,t,n){return!ks(e,t,n)}function Ns(e,t,n){switch(e){case`text`:n.text=t.text;break;case`visible`:n.visible=t.visible;break;case`opacity`:n.opacity=t.opacity;break;case`locked`:n.locked=t.locked;break;case`layoutGrow`:n.layoutGrow=t.layoutGrow;break;case`textAutoResize`:n.textAutoResize=t.textAutoResize;break}}function Ps(e,t){return(n,r,i,a)=>{n[e]!==r[e]&&Ms(a,r.id,t)&&Ns(e,n,i)}}let Fs=[Ps(`text`,`text`),Ps(`visible`,`visible`),Ps(`opacity`,`opacity`),Ps(`locked`,`locked`),Ps(`layoutGrow`,`layoutGrow`),Ps(`textAutoResize`,`textAutoResize`)];function Is(e,t,n){switch(e){case`fills`:n.fills=Y(t.fills,X(t.fills));break;case`strokes`:n.strokes=Y(t.strokes,Cn(t.strokes));break;case`effects`:n.effects=Y(t.effects,wn(t.effects));break;case`styleRuns`:n.styleRuns=Y(t.styleRuns,En(t.styleRuns));break}}function Ls(e,t,n,r){let i=`${e}/`,a=r.boundVariables??n.boundVariables,o=Er(a,Object.keys(a).filter(e=>e.startsWith(i)));for(let[e,n]of Object.entries(t.boundVariables))e.startsWith(i)&&(o[e]=n);r.boundVariables=o}function Rs(e,t){return(n,r,i,a)=>{!Sn(n[e],r[e])&&Ms(a,r.id,t)&&(Is(e,n,i),(e===`fills`||e===`strokes`)&&Ls(e,n,r,i))}}let zs=[Rs(`fills`,`fills`),Rs(`strokes`,`strokes`),Rs(`effects`,`effects`),Rs(`styleRuns`,`styleRuns`)];function Bs(e,t,n,r){let i=t.boundVariables[e];if(n.boundVariables[e]===i)return;let a={...r.boundVariables??n.boundVariables};i&&(a[e]=i),r.boundVariables=i?a:Er(a,[e])}function Vs(e,t,n,r){for(let i of Fs)i(e,t,n,r);for(let i of zs)i(e,t,n,r);Bs(`opacity`,e,t,n)}function Hs(e,t,n,r){let i={};Vs(t,n,i,r),Object.keys(i).length>0&&e.updateNode(n.id,i)}function Us(e,t,n,r,i,a,o){let s=e.getNode(t);if(!s)return;let c=a??Gs(e,o),l=$o(e,n.id);for(let t of Array.from(n.childIds))e.deleteNode(t);e.updateNode(n.id,Ko(s,s.componentId,{name:s.name})),Hs(e,s,n,i),s.childIds.length>0&&(e.populateInstanceChildren(n.id,t,`fig-import`),Qo(e,n.id,c)),rs(e,n.id,l,c,o),r.add(n.id)}function Ws(e,t,n,r,i,a,o,s){let c=e.getNode(t),l=e.getNode(n);if(!c||!l)return;let u=o??Gs(e,s),d=Math.min(c.childIds.length,l.childIds.length);for(let t=0;t<d;t++){if(i?.has(l.childIds[t]))continue;let n=e.getNode(c.childIds[t]),o=e.getNode(l.childIds[t]);if(!(!n||!o||n.type!==o.type)){if(n.type===`INSTANCE`&&n.componentId!==o.componentId){Us(e,c.childIds[t],o,r,a,u,s);continue}Hs(e,n,o,a),Ws(e,c.childIds[t],l.childIds[t],r,i,a,u,s)}}}function Gs(e,t){let n=new Map;for(let r of Go(e,t)){if(!r.componentId)continue;let e=n.get(r.componentId);e||(e=[],n.set(r.componentId,e)),e.push(r.id)}return n}function Ks(e,t){let n=new Set(t);for(let r of t){let t=e.getNode(r);for(;t?.parentId;){let r=e.getNode(t.parentId);if(!r)break;(r.type===`INSTANCE`||r.type===`COMPONENT`)&&n.add(r.id),t=r}}return n}function qs(e,t){let n=new Set,r=[...e];for(let e=r.pop();e!==void 0;e=r.pop()){let i=t.get(e);if(i)for(let e of i)n.has(e)||(n.add(e),r.push(e))}return n}function Js(e,t){if(!t)return e;let n=new Map;for(let r of[t,e])for(let[e,t]of r){let r=n.get(e);if(r)for(let e of t)r.includes(e)||r.push(e);else n.set(e,[...t])}return n}function Ys(e,t,n,r,i){if(t.size===0)return;let a=Js(Gs(e,n),i),o=new Set(t),s=[...t].map(e=>({lineageId:e,sourceId:e})),c=0;for(;c<s.length;){let{lineageId:t,sourceId:n}=s[c];c++;let i=e.getNode(n);if(i)for(let c of a.get(t)??[]){if(o.has(c))continue;o.add(c);let t=e.getNode(c);t&&Hs(e,i,t,r),s.push({lineageId:c,sourceId:t?.id??n})}}}function Xs(e,t,n,r,i,a,o){if(t.size===0)return;r.clear();let s=Gs(e,a),c=Ks(e,t),l=qs(c,s),u=i&&i.size>0?new Set([...t,...i]):t,d=new Set,f=[...c],p=0;for(;p<f.length;){let t=f[p];p++;let r=s.get(t);if(!r)continue;let i=e.getNode(t);if(i)for(let c of r){if(!l.has(c)||d.has(c))continue;d.add(c);let r=e.getNode(c);if(r){if(u.has(c)){i.type===`TEXT`&&r.type===`TEXT`&&!ks(o,r.id,`text`)&&e.updateNode(r.id,{text:i.text}),f.push(c);continue}if(Hs(e,i,r,o),i.childIds.length!==r.childIds.length){let n=$o(e,r.id);for(let t of Array.from(r.childIds))e.deleteNode(t);i.childIds.length>0&&(e.populateInstanceChildren(r.id,t,`fig-import`),Qo(e,r.id,s)),rs(e,r.id,n,s,a)}else i.childIds.length>0&&r.childIds.length>0&&Ws(e,t,r.id,n,u,o,s,a);f.push(c)}}}}function Zs(e,t){if(t.type!==`INSTANCE`||!e.derivedLayout)return{};let n=e.derivedLayout,r={derivedLayout:{...n,...t.derivedLayout,x:n.x??t.derivedLayout?.x,y:n.y??t.derivedLayout?.y}};return n.x!==void 0&&(r.x=n.x),n.y!==void 0&&(r.y=n.y),r}function Qs(e,t,n,r,i){let a={};return i.has(r)?Zs(t,n):(t.width!==n.width&&(a.width=t.width),t.height!==n.height&&(a.height=t.height),t.x!==n.x&&(a.x=t.x),t.y!==n.y&&(a.y=t.y),e.geometryOverrideNodes.has(r)||(t.fillGeometry!==n.fillGeometry&&(a.fillGeometry=On(t.fillGeometry)),t.strokeGeometry!==n.strokeGeometry&&(a.strokeGeometry=On(t.strokeGeometry))),t.text===n.text&&t.derivedTextGlyphs&&(a.derivedTextGlyphs=structuredClone(t.derivedTextGlyphs)),t.text===n.text&&t.derivedLayout&&(a.derivedLayout={...t.derivedLayout}),a)}function $s(e,t){ec(e,t),rc(e)}function ec(e,t){for(let n of t){let t=e.graph.getNode(n);if(t?.layoutMode!==`NONE`||t.childIds.length!==1)continue;let r=e.graph.getNode(t.childIds[0]);if(!r||r.childIds.length>0||r.horizontalConstraint!==`SCALE`||r.verticalConstraint!==`SCALE`)continue;let i=r.derivedLayout?.width,a=r.derivedLayout?.height,o=i!==void 0&&a!==void 0,s=!o&&r.type===`ROUNDED_RECTANGLE`&&r.fills.some(e=>e.type===`IMAGE`);if(!o&&!s)continue;let c=i??t.width,l=a??t.height;r.width===c&&r.height===l||e.graph.updateNode(r.id,{width:c,height:l})}}function tc(e,t){return e.counterAxisAlign===`CENTER`?e.layoutMode===`HORIZONTAL`?t.height<=1&&t.width>t.height:e.layoutMode===`VERTICAL`&&t.width<=1&&t.height>t.width:!1}function nc(e,t){if(t.source.format!==null||!t.componentId||!t.name.endsWith(`Divider`)||!t.parentId||t.derivedLayout?.x!==void 0||t.derivedLayout?.y!==void 0)return null;let n=e.getNode(t.parentId),r=e.getNode(t.componentId),i=r?.derivedLayout;return!n||!r||i?.x===void 0||i.y===void 0||t.width!==r.width||t.height!==r.height||!tc(n,t)?null:n.layoutMode===`HORIZONTAL`?{axis:`y`,position:i.y}:{axis:`x`,position:i.x}}function rc(e){for(let t of Go(e.graph,e.activeNodeIds)){let n=nc(e.graph,t);n&&e.graph.updateNode(t.id,{derivedLayout:{...t.derivedLayout,[n.axis]:n.position}})}}function ic(e){for(let t of Go(e.graph,e.activeNodeIds)){if(t.source.format===`fig`||!t.derivedLayout||!t.parentId||t.layoutPositioning===`ABSOLUTE`)continue;let n=e.graph.getNode(t.parentId);if(!n||n.source.format===`fig`||n.layoutMode!==`NONE`||!n.derivedLayout)continue;let r={};t.horizontalConstraint===`STRETCH`&&t.derivedLayout.width!==void 0&&t.derivedLayout.width===n.derivedLayout.width&&(r.width=t.derivedLayout.width),t.verticalConstraint===`STRETCH`&&t.derivedLayout.height!==void 0&&t.derivedLayout.height===n.derivedLayout.height&&(r.height=t.derivedLayout.height),Object.keys(r).length>0&&e.graph.updateNode(t.id,r)}}function ac(e,t,n){if(t.size===0)return;let r=Gs(e.graph,e.activeNodeIds),i=[...t],a=new Set,o=0;for(;o<i.length;){let t=i[o];o++;let s=e.graph.getNode(t);if(!s)continue;let c=r.get(t);if(c)for(let t of c){if(a.has(t))continue;a.add(t);let r=e.graph.getNode(t);if(!r)continue;let o=Qs(e,s,r,t,n);Object.keys(o).length>0&&e.graph.preserveSourceMetadataDuring(()=>e.graph.updateNode(t,o)),i.push(t)}}}function oc(e){let t=new Map;for(let[n,r]of e.graph.instanceIndex)for(let i of r){if(e.activeNodeIds&&!e.activeNodeIds.has(i)||e.graph.getNode(i)?.type!==`INSTANCE`)continue;let r=t.get(n);r?r.push(i):t.set(n,[i])}return t}function sc(e,t,n){let r=n.get(e);if(r)return r;let i=[],a=new Set,o=e=>{if(!a.has(e)){a.add(e),i.push(e);for(let n of t.get(e)??[])o(n)}};return o(e),n.set(e,i),i}function cc(e){return e.toLowerCase().replace(/[^a-z0-9]/g,``)}function lc(e){let[t,n]=e.split(`:`).map(Number);return{sessionID:t,localID:n}}function uc(e){return typeof e.textValue==`string`?e.textValue:e.textValue?.characters??e.textDataValue?.characters}function dc(e){return!e||e.boolValue===void 0&&e.textValue===void 0&&e.textDataValue===void 0&&e.guidValue===void 0}function fc(e,t,n,r){let i=t.value;if(i&&!dc(i))return i;let a=t.varValue?.value;return a?.symbolIdValue?.guid?{guidValue:a.symbolIdValue.guid}:a?.boolValue===void 0?a?.textValue===void 0?a?.textDataValue===void 0?r?e.propDefaults.get(n)??t.value:t.value:{textDataValue:a.textDataValue}:{textValue:a.textValue}:{boolValue:a.boolValue}}function pc(e,t,n=!1){let r=new Map;for(let i of t){if(!i.defID)continue;let t=J(i.defID),a=fc(e,i,t,n);a&&r.set(t,a)}return r}function mc(e,t,n,r){js(e,n)&&r?.add(t)}function hc(e,t,n,r){n.boolValue!==void 0&&mc(e,t,{targetId:t,source:`component-prop`,props:{visible:n.boolValue}},r)}function gc(e,t,n,r){let i=e.graph.getNode(t),a=uc(n);if(a===void 0||i?.type!==`TEXT`)return;let o=i.componentId?e.graph.getNode(i.componentId):null,s={text:a};o?.type===`TEXT`&&o.text===a&&(s.width=o.width,s.height=o.height,s.fills=X(o.fills),s.styleRuns=En(o.styleRuns),s.derivedTextGlyphs=o.derivedTextGlyphs?structuredClone(o.derivedTextGlyphs):void 0),mc(e,t,{targetId:t,source:`component-prop`,props:s},r)}function _c(e,t,n,r){let i=uc(n)??(n.guidValue?J(n.guidValue):void 0),a=i?e.guidToNodeId.get(i):void 0;if(!a)return;let o=e.graph.getNode(t)?.componentId;o&&$(e,o)===$(e,a)||mc(e,t,{targetId:t,source:`component-prop`,swapComponentId:$(e,a)},r)}function vc(e,t,n,r,i){switch(n.componentPropNodeField){case`VISIBLE`:hc(e,t,r,i);break;case`TEXT_DATA`:gc(e,t,r,i);break;case`OVERRIDDEN_SYMBOL_ID`:_c(e,t,r,i);break}}function yc(e,t,n){let r=t;for(let t=0;r&&t<10;t++){let t=e.graph.getNode(r),i=t?.overrideKey?e.overrideKeyToGuid.get(t.overrideKey)??t.overrideKey:void 0,a=e.nodeIdToGuid.get(r)??i;if(a){let e=n.get(a);if(e)return e}let o=t?.componentId??void 0;if(o===r)break;r=o}}function bc(e,t,n){let r=cc(t),i=[];for(let t of n.keys()){let n=e.propNames.get(t);n&&cc(n)===r&&i.push({defID:lc(t),componentPropNodeField:`VISIBLE`})}return i.length>0?i:void 0}function xc(e,t){return e.defID?t.get(J(e.defID)):void 0}function Sc(e,t,n,r,i){if(n)for(let a of n){let n=xc(a,r);n&&vc(e,t,a,n,i)}}function Cc(e,t,n,r){if(!t)return;let i=e.graph.getNode(t);if(!i)return;let a;for(let t of i.childIds){let i=e.graph.getNode(t);if(i){if(i.id===n.componentId||i.componentId&&i.componentId===n.componentId)return yc(e,i.id,r)??[];!a&&i.name===n.name&&i.type===n.type&&(a=i.id)}}return a?yc(e,a,r):void 0}function wc(e,t,n,r,i){let a=e.graph.getNode(t);if(a)for(let t of a.childIds){let o=e.graph.getNode(t);if(!o?.componentId){wc(e,t,n,r,i);continue}Sc(e,t,Cc(e,a.componentId,o,r)??yc(e,o.componentId,r)??bc(e,o.name,n),n,i),wc(e,t,n,r,i)}}function Tc(e,t,n,r){for(let[i,a]of t){let t=e.guidToNodeId.get(i);!t||e.activeNodeIds&&!e.activeNodeIds.has(t)||e.graph.getNode(t)?.type===`INSTANCE`&&wc(e,t,pc(e,a),n,r)}}function Ec(e,t,n){let r=oc(e),i=new Map;for(let[a,o]of e.changeMap){let s=e.guidToNodeId.get(a);if(!s||e.activeNodeIds&&!e.activeNodeIds.has(s)||e.graph.getNode(s)?.type!==`INSTANCE`)continue;let c=o.symbolData?.symbolOverrides;if(c)for(let a of c){if(!a.componentPropAssignments?.length)continue;let o=a.guidPath?.guids;if(!o?.length)continue;let c=pc(e,a.componentPropAssignments,!0);for(let a of sc(s,r,i)){let r=bs(e,a,o);r&&wc(e,r,c,t,n)}}}}function Dc(e){if(e.componentPropRefsMap)return e.componentPropRefsMap;let t=new Map;for(let[n,r]of e.changeMap)r.componentPropRefs?.length&&t.set(n,r.componentPropRefs);return e.componentPropRefsMap=t,t}function Oc(e){if(e.componentPropAssignmentsMap)return e.componentPropAssignmentsMap;let t=new Map;for(let[n,r]of e.changeMap)r.componentPropAssignments?.length&&t.set(n,r.componentPropAssignments);return e.componentPropAssignmentsMap=t,t}function kc(e){let t=new Set,n=Dc(e);return n.size===0?t:(Tc(e,Oc(e),n,t),Ec(e,n,t),t)}function Ac(e,t,n,r,i){let a=r-n;if(i===`MAX`)return{position:e+a,size:t};if(i===`CENTER`)return{position:e+a/2,size:t};if(i===`STRETCH`)return{position:e,size:Math.max(1,t+a)};if(i===`SCALE`&&n>0){let i=r/n;return{position:e*i,size:Math.max(1,t*i)}}return{position:e,size:t}}function jc(e,t,n,r,i){let a=Ac(e.x,e.width,t.width,n.width,r),o=Ac(e.y,e.height,t.height,n.height,i);return{x:Math.round(a.position),y:Math.round(o.position),width:Math.round(a.size),height:Math.round(o.size)}}function Mc(e){let{graph:t}=e,n=new Set;for(let r of Go(t,e.activeNodeIds)){if(r.type!==`INSTANCE`||!r.componentId)continue;let i=t.getNode(r.componentId);if(!i||i.width<=0||i.height<=0)continue;let a=Nc(t,r,i);if(!a||(zc(e,r,a.basis),r.layoutMode!==`NONE`))continue;let{sx:o,sy:s}=a;if(Math.abs(o-1)<.001&&Math.abs(s-1)<.001)continue;let c=e.nodeIdToGuid.get(r.id),l=c?e.changeMap.get(c)?.strokeWeight:void 0;Kc(t,r,i,o,s,n,e.geometryOverrideNodes,a.useCurrentChildAsSource,l,a.scaleThroughFixedWrappers)}n.size>0&&qc(e,n)}function Nc(e,t,n){let r=Pc(t),i=Bc(e,t,n);if(!r&&!i)return null;let a=i??n;return{basis:a,scaleThroughFixedWrappers:r!==null,sx:t.width/a.width,sy:t.height/a.height,useCurrentChildAsSource:a!==n}}function Pc(e){let t=It(e,`targetAspectRatio`);if(!t||typeof t!=`object`||!(`value`in t))return null;let n=t.value;if(!n||typeof n!=`object`||!(`x`in n)||!(`y`in n))return null;let{x:r,y:i}=n;return typeof r!=`number`||typeof i!=`number`||!Number.isFinite(r)||!Number.isFinite(i)||r<=0||i<=0?null:{width:r,height:i}}function Fc(e,t,n){let r=t;for(let t=0;t<10&&r?.componentId;t++){if(r.componentId===n)return!0;r=e.getNode(r.componentId)}return!1}function Ic(e,t,n){let r={},i=t.horizontalConstraint===`MAX`||t.horizontalConstraint===`CENTER`,a=t.verticalConstraint===`MAX`||t.verticalConstraint===`CENTER`;return i&&t.derivedLayout?.x===void 0&&!ks(e.protectedFields,t.id,`x`)&&t.x!==n.x&&(r.x=n.x),a&&t.derivedLayout?.y===void 0&&!ks(e.protectedFields,t.id,`y`)&&t.y!==n.y&&(r.y=n.y),r}function Lc(e,t,n){let r={};return t.horizontalConstraint===`STRETCH`&&t.derivedLayout?.width===void 0&&!ks(e.protectedFields,t.id,`width`)&&t.width!==n.width&&(r.width=n.width),t.verticalConstraint===`STRETCH`&&t.derivedLayout?.height===void 0&&!ks(e.protectedFields,t.id,`height`)&&t.height!==n.height&&(r.height=n.height),r}function Rc(e,t,n){return{...Ic(e,t,n),...Lc(e,t,n)}}function zc(e,t,n){let r=Math.min(t.childIds.length,n.childIds.length);for(let i=0;i<r;i++){let r=e.graph.getNode(t.childIds[i]),a=e.graph.getNode(n.childIds[i]);if(!r||!a||r.layoutPositioning!==`ABSOLUTE`||r.componentId&&!Fc(e.graph,r,a.id))continue;let o=Rc(e,r,jc(a,n,t,r.horizontalConstraint,r.verticalConstraint));Object.keys(o).length>0&&e.graph.updateNode(r.id,o)}}function Bc(e,t,n){if(t.width!==n.width||t.height!==n.height)return n;let r=n;for(let n=0;n<10&&r.type===`INSTANCE`&&r.componentId;n++){let n=e.getNode(r.componentId);if(!n||n.width<=0||n.height<=0)break;if(t.width!==n.width||t.height!==n.height)return n;r=n}return null}function Vc(e,t,n){return e?{vertices:e.vertices.map(e=>({...e,x:e.x*t,y:e.y*n})),segments:e.segments.map(e=>({...e,tangentStart:{x:e.tangentStart.x*t,y:e.tangentStart.y*n},tangentEnd:{x:e.tangentEnd.x*t,y:e.tangentEnd.y*n}})),regions:structuredClone(e.regions)}:null}function Hc(e,t,n,r,i){if(e.strokes.length!==t.strokes.length||Math.abs(n-r)>=.001)return;let a=i??1;return t.strokes.map((t,n)=>({...t,weight:e.strokes[n].weight*a}))}function Uc(e,t,n,r){let i={};return!r&&e.fillGeometry.length>0&&(i.fillGeometry=jn(e.fillGeometry,t,n)),!r&&e.strokeGeometry.length>0&&(i.strokeGeometry=jn(e.strokeGeometry,t,n)),e.vectorNetwork&&(i.vectorNetwork=Vc(e.vectorNetwork,t,n)),i}function Wc(e,t,n){let r=n.get(t.id);if(r)return r;let i={horizontal:!1,vertical:!1};for(let r of e.getChildren(t.id)){let t=Wc(e,r,n);if(i.horizontal||=r.horizontalConstraint===`SCALE`||t.horizontal,i.vertical||=r.verticalConstraint===`SCALE`||t.vertical,i.horizontal&&i.vertical)break}return n.set(t.id,i),i}function Gc(e,t,n,r){let i=Wc(e,t,r);return{horizontal:t.horizontalConstraint===`SCALE`||n&&i.horizontal,vertical:t.verticalConstraint===`SCALE`||n&&i.vertical}}function Kc(e,t,n,r,i,a,o,s=!1,c,l=!1,u=new Map){let d=Math.min(t.childIds.length,n.childIds.length);for(let f=0;f<d;f++){let d=e.getNode(t.childIds[f]),p=e.getNode(n.childIds[f]);if(!d||!p)continue;let m=Gc(e,d,l,u),h=m.horizontal,g=m.vertical;if(!h&&!g)continue;let _={},v=s?d:p;h&&(_.x=v.x*r,_.width=v.width*r),g&&(_.y=v.y*i,_.height=v.height*i);let y=h?r:1,b=g?i:1;Object.assign(_,Uc(v,y,b,o.has(d.id))),_.strokes=Hc(v,d,y,b,c),e.updateNode(d.id,_),a.add(d.id),d.childIds.length>0&&p.childIds.length>0&&Kc(e,d,p,h?r:1,g?i:1,a,o,s,c,l,u)}}function qc(e,t){let{graph:n}=e,r=Gs(n,e.activeNodeIds),i=[...t],a=new Set,o=0;for(;o<i.length;){let t=i[o];o++;let s=n.getNode(t);if(!s)continue;let c=r.get(t);if(c)for(let t of c){if(a.has(t))continue;a.add(t);let r=n.getNode(t);if(!r)continue;let o={};r.width!==s.width&&(o.width=s.width),r.height!==s.height&&(o.height=s.height),r.x!==s.x&&(o.x=s.x),r.y!==s.y&&(o.y=s.y),e.geometryOverrideNodes.has(t)||(s.fillGeometry.length>0&&(o.fillGeometry=On(s.fillGeometry)),s.strokeGeometry.length>0&&(o.strokeGeometry=On(s.strokeGeometry)),s.vectorNetwork&&(o.vectorNetwork=structuredClone(s.vectorNetwork))),s.strokes.length===r.strokes.length&&(o.strokes=r.strokes.map((e,t)=>({...e,weight:s.strokes[t].weight}))),Object.keys(o).length>0&&n.updateNode(t,o),i.push(t)}}}function Jc(e,t,n,r,i,a){let o=r.guidPath?.guids;if(!o?.length)return;let s=bs(e,n,o);if(!s)return;if(s===n){a.add(n);return}let c=e.graph.getNode(s);if(!c)return;let{updates:l,hasSize:u}=Wo(e,t,r,c);(r.fillGeometry?.length||r.strokeGeometry?.length)&&e.geometryOverrideNodes.add(s),Object.keys(l).length!==0&&(js(e,{targetId:s,source:`derived-symbol-data`,props:l})&&i.add(s),u&&a.add(s))}function Yc(e){let t=new Set,n=new Set,r=new Map;for(let[i,a]of e.changeMap){if(a.type!==`INSTANCE`)continue;let o=a.derivedSymbolData;if(!o?.length)continue;let s=e.guidToNodeId.get(i);if(!(!s||e.activeNodeIds&&!e.activeNodeIds.has(s)))for(let i of o)Jc(e,r,s,i,t,n)}return{modified:t,sizeSet:n}}function Xc(e){let{modified:t,sizeSet:n}=Yc(e);ac(e,t,n)}function Zc(e,t){let n=new Set,r=[...t],i=0;for(;i<r.length;){let t=r[i];if(i++,n.has(t))continue;n.add(t);let a=e.getNode(t);a&&r.push(...a.childIds)}return n}function Qc(e,t){let n=new Set;function r(t){let i=e.getNode(t);if(i?.type!==`INSTANCE`||!i.componentId||i.childIds.length>0||n.has(t))return;n.add(t);let a=e.getNode(i.componentId);if(a){a.type===`INSTANCE`&&a.componentId&&a.childIds.length===0&&r(a.id);for(let t of a.childIds){let n=e.getNode(t);n?.type===`INSTANCE`&&n.componentId&&n.childIds.length===0&&r(t)}a.childIds.length>0&&i.childIds.length===0&&e.populateInstanceChildren(t,i.componentId,`fig-import`)}}if(!t){for(let t of e.nodes.values())t.type===`INSTANCE`&&t.componentId&&t.childIds.length===0&&r(t.id);return}let i=[...t],a=new Set,o=0;for(;o<i.length;){let t=i[o];if(o++,!t||a.has(t))continue;a.add(t),r(t);let n=e.getNode(t);n&&i.push(...n.childIds)}return Zc(e,t)}function $c(e,t){if(e.textData!=null){let n=e.textData;n.characters!=null&&(t.text=n.characters);let r=Ca(e);r.length>0&&(t.styleRuns=r)}if(e.fillPaints!=null&&(t.fills=Ki(e.fillPaints)),e.strokePaints!=null&&(t.strokes=qi(e.strokePaints,e.strokeWeight,e.strokeAlign)),e.fillPaints!=null||e.strokePaints!=null){let n=oa(e);Object.keys(n).length>0&&(t.boundVariables=n)}e.effects!=null&&(t.effects=Ji(e.effects)),e.visible!=null&&(t.visible=e.visible),e.opacity!=null&&(t.opacity=e.opacity),e.name!=null&&(t.name=e.name),e.locked!=null&&(t.locked=e.locked)}function el(e,t){if(e.size!=null){let n=e.size;n.x!=null&&(t.width=n.x),n.y!=null&&(t.height=n.y)}e.cornerRadius!=null&&(t.cornerRadius=e.cornerRadius),e.rectangleTopLeftCornerRadius!=null&&(t.topLeftRadius=e.rectangleTopLeftCornerRadius),e.rectangleTopRightCornerRadius!=null&&(t.topRightRadius=e.rectangleTopRightCornerRadius),e.rectangleBottomRightCornerRadius!=null&&(t.bottomRightRadius=e.rectangleBottomRightCornerRadius),e.rectangleBottomLeftCornerRadius!=null&&(t.bottomLeftRadius=e.rectangleBottomLeftCornerRadius),e.rectangleCornerRadiiIndependent!=null&&(t.independentCorners=e.rectangleCornerRadiiIndependent),e.arcData!=null&&(t.arcData=Ba(e.arcData)),e.frameMaskDisabled!=null&&(t.clipsContent=e.frameMaskDisabled===!1)}function tl(e,t){e.stackSpacing!=null&&(t.itemSpacing=e.stackSpacing),e.stackPrimarySizing!=null&&(t.primaryAxisSizing=Fa(e.stackPrimarySizing)),e.stackCounterSizing!=null&&(t.counterAxisSizing=Fa(e.stackCounterSizing)),e.stackPrimaryAlignItems!=null&&(t.primaryAxisAlign=Ia(e.stackPrimaryAlignItems)),e.stackCounterAlignItems!=null&&(t.counterAxisAlign=La(e.stackCounterAlignItems)),e.stackChildPrimaryGrow!=null&&(t.layoutGrow=e.stackChildPrimaryGrow),e.stackChildAlignSelf!=null&&(t.layoutAlignSelf=Ra(e.stackChildAlignSelf)),e.stackPositioning!=null&&(t.layoutPositioning=e.stackPositioning===`ABSOLUTE`?`ABSOLUTE`:`AUTO`),e.stackVerticalPadding!=null&&(t.paddingTop=e.stackVerticalPadding,e.stackPaddingBottom??(t.paddingBottom=e.stackVerticalPadding)),e.stackHorizontalPadding!=null&&(t.paddingLeft=e.stackHorizontalPadding,e.stackPaddingRight??(t.paddingRight=e.stackHorizontalPadding)),e.stackPaddingBottom!=null&&(t.paddingBottom=e.stackPaddingBottom),e.stackPaddingRight!=null&&(t.paddingRight=e.stackPaddingRight)}function nl(e,t){if(e.strokeWeight!=null&&!e.strokePaints&&t.strokes)for(let n of t.strokes)n.weight=e.strokeWeight;if(e.strokeAlign!=null&&t.strokes){let n=`CENTER`;e.strokeAlign===`INSIDE`?n=`INSIDE`:e.strokeAlign===`OUTSIDE`&&(n=`OUTSIDE`);for(let e of t.strokes)e.align=n}e.borderTopWeight!=null&&(t.borderTopWeight=e.borderTopWeight),e.borderRightWeight!=null&&(t.borderRightWeight=e.borderRightWeight),e.borderBottomWeight!=null&&(t.borderBottomWeight=e.borderBottomWeight),e.borderLeftWeight!=null&&(t.borderLeftWeight=e.borderLeftWeight),e.borderStrokeWeightsIndependent!=null&&(t.independentStrokeWeights=e.borderStrokeWeightsIndependent)}function rl(e,t){if(e.fontName!=null){let n=e.fontName;n.family&&(t.fontFamily=n.family),n.style&&(t.fontWeight=Sr(n.style),t.italic=n.style.toLowerCase().includes(`italic`))}e.fontSize!=null&&(t.fontSize=e.fontSize),e.textAlignHorizontal!=null&&(t.textAlignHorizontal=e.textAlignHorizontal),e.textAutoResize!=null&&(t.textAutoResize=e.textAutoResize),e.lineHeight!=null&&(t.lineHeight=_a(e.lineHeight,e.fontSize)),e.letterSpacing!=null&&(t.letterSpacing=va(e.letterSpacing,e.fontSize)),e.maxLines!=null&&(t.maxLines=e.maxLines),e.textTruncation!=null&&(t.textTruncation=e.textTruncation===`ENDING`?`ENDING`:`DISABLED`),e.textDecoration!=null&&(t.textDecoration=ga(e.textDecoration))}function il(e){let t={};return $c(e,t),el(e,t),tl(e,t),nl(e,t),rl(e,t),t}let al=new Set([`RECTANGLE_TOP_LEFT_CORNER_RADIUS`,`RECTANGLE_TOP_RIGHT_CORNER_RADIUS`,`RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS`,`RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS`]);function ol(e){return e.version?`${e.key}@${e.version}`:e.key}function sl(e,t){if(e.guid)return J(e.guid);let n=e.assetRef;if(n?.key)return t.get(ol(n))??t.get(n.key)}function cl(e,t,n,r=0){if(r>10)return;let i=e.changeMap.get(t)?.variableDataValues?.entries?.[0];if(!i)return;let a=i.variableData.value;if(!a)return;if(typeof a.floatValue==`number`)return a.floatValue;let o=a.alias,s=o?sl(o,n):void 0;return s?cl(e,s,n,r+1):void 0}function ll(e,t,n){let r=t.variableConsumptionMap?.entries;if(!r?.length)return;let i=e.assetRefToGuid;for(let t of r){let r=t.variableField;if(!r||!al.has(r))continue;let a=t.variableData?.value?.alias,o=a?sl(a,i):void 0,s=o?cl(e,o,i):void 0;if(typeof s!=`number`)continue;let c=$i[r];c===`topLeftRadius`?n.topLeftRadius=s:c===`topRightRadius`?n.topRightRadius=s:c===`bottomRightRadius`?n.bottomRightRadius=s:c===`bottomLeftRadius`&&(n.bottomLeftRadius=s)}}function ul(e,t,n){let r={targetId:t,source:`symbol-override`};if(n.overriddenSymbolID){let t=J(n.overriddenSymbolID);r.swapComponentId=e.guidToNodeId.get(t)}let i={...n};if(delete i.guidPath,delete i.overriddenSymbolID,delete i.componentPropAssignments,Object.keys(i).length>0){Ro(e.changeMap,i);let t=il(i);ll(e,i,t),Object.keys(t).length>0&&(r.props=t)}return r.swapComponentId||r.props?r:null}function dl(e,t,n){if(!n?.props)return;let r=Object.fromEntries(Object.entries(n.props).filter(([n])=>!ar(e.graph,t,n)));n.props=Object.keys(r).length>0?r:void 0}function fl(e,t){return t!==void 0&&(!e.activeNodeIds||e.activeNodeIds.has(t))}function pl(e,t,n,r){!e||n!==t||!r?.props||(delete r.props.width,delete r.props.height)}function ml(e,t=!1){let n=new Set;e.componentIdRoot.clear();for(let[r,i]of e.changeMap){if(i.type!==`INSTANCE`)continue;let a=i.symbolData?.symbolOverrides;if(!a?.length)continue;let o=e.guidToNodeId.get(r);if(fl(e,o))for(let r of a){let a=r.guidPath?.guids;if(!a?.length)continue;let s=bs(e,o,a);if(!s||s===o&&e.kiwiPropertyNodes.has(o))continue;let c=ul(e,s,r);c&&(dl(e,s,c),pl(i.size!==void 0,o,s,c),t&&(c.swapComponentId=void 0),!(!c.swapComponentId&&!c.props)&&(n.add(s),js(e,c)))}}return n}function*hl(e,t){for(let[n,r]of t){let t=e.get(n);t&&(yield[r,t])}}function gl(e,t,n){let r=new Set;for(let[i,a]of hl(t,n)){let t=a,n=e.getNode(i);if(!n?.componentId)continue;let o=e.getNode(n.componentId);if(!o)continue;let s=(t.cornerRadius!==void 0||t.rectangleCornerRadiiIndependent!==void 0)&&n.cornerRadius!==o.cornerRadius,c=t.visible===!1&&o.visible,l=t.fillPaints!==void 0&&!Jt(n.fills,o.fills),u=t.strokePaints!==void 0&&!Jt(n.strokes,o.strokes),d=t.textData!==void 0&&n.type===`TEXT`&&o.type===`TEXT`&&n.text!==o.text;(s||c||l||u||d)&&r.add(i)}return r}function _l(e,t){let n=new Set;for(let[r,i]of hl(e,t))(i.fillGeometry?.length||i.strokeGeometry?.length)&&n.add(r);return n}function vl(e){let t=[];for(let n of e.getAllNodes())n.componentId&&t.push(n);return t}function yl(e){let t=[];for(let n of e.getAllNodes()){if(n.type!==`INSTANCE`||!n.componentId)continue;let r=e.getNode(n.componentId);if(!(!r||r.childIds.length!==n.childIds.length))for(let e=0;e<n.childIds.length;e++)t.push({sourceChildId:r.childIds[e],childId:n.childIds[e]})}return t}function bl(e,t,n=vl(e)){for(let r=0;r<10;r++){let r=!1;for(let i of n){if(!i.componentId)continue;let n=e.getNode(i.componentId);!n||Jt(n.fills,i.fills)||t.has(i.id)&&!t.has(n.id)||ar(e,i.id,`fills`)||(e.updateNode(i.id,{fills:X(n.fills)}),r=!0)}if(!r)return}}function xl(e,t=yl(e)){for(let n=0;n<10;n++){let n=!1;for(let r of t){let t=e.getNode(r.sourceChildId),i=e.getNode(r.childId);if(!t||!i||t.overrideKey&&i.overrideKey&&t.overrideKey!==i.overrideKey)continue;let a={};!t.visible&&i.visible&&(a.visible=!1),t.x!==i.x&&(a.x=t.x),t.y!==i.y&&(a.y=t.y),Object.keys(a).length!==0&&(e.updateNode(i.id,a),n=!0)}if(!n)return}}function Sl(e,t){return e===t?!0:!e||!t?!1:Sn(e,t)}function Cl(e,t){let n=[],r=new Set,i=new Set,a=t=>{if(r.has(t.id)||i.has(t.id))return;i.add(t.id);let o=t.componentId?e.getNode(t.componentId):void 0;o?.type===`TEXT`&&a(o),i.delete(t.id),r.add(t.id),t.type===`TEXT`&&t.componentId&&n.push(t)};for(let n of t??e.nodes.keys()){let t=e.getNode(n);t?.type===`TEXT`&&t.componentId&&a(t)}for(let t of n){let n=t.componentId?e.getNode(t.componentId):void 0;n?.type!==`TEXT`||n.text!==t.text||n.width===t.width&&n.height===t.height&&Jt(n.fills,t.fills)&&Jt(n.styleRuns,t.styleRuns)&&Sl(n.derivedTextGlyphs,t.derivedTextGlyphs)||e.updateNode(t.id,{width:n.width,height:n.height,fills:X(n.fills),styleRuns:En(n.styleRuns),derivedTextGlyphs:n.derivedTextGlyphs?Y(n.derivedTextGlyphs,structuredClone(n.derivedTextGlyphs)):void 0})}}function wl(e,t,n,r,i){let a=new Map,o=new Map;for(let[e,n]of t)n.overrideKey&&a.set(J(n.overrideKey),e),typeof n.key==`string`&&(o.set(n.key,e),typeof n.version==`string`&&o.set(`${n.key}@${n.version}`,e));let s=new Map,c=new Map;for(let[,e]of t)if(e.componentPropDefs?.length)for(let t of e.componentPropDefs){if(!t.id)continue;let e=J(t.id);t.initialValue&&s.set(e,t.initialValue),t.name&&c.set(e,t.name)}let l=new Map;for(let[e,t]of n)l.set(t,e);let u=gl(e,t,n),d=_l(t,n);return{graph:e,changeMap:t,guidToNodeId:n,blobs:r,overrideKeyToGuid:a,assetRefToGuid:o,nodeIdToGuid:l,propDefaults:s,propNames:c,preComputedRoot:new Map,preComputedClones:new Map,componentIdRoot:new Map,swappedInstances:new Set,protectedFields:new Map,kiwiPropertyNodes:u,geometryOverrideNodes:d,activeNodeIds:i}}function Tl(e,t){for(let n of Go(e,t)){let t={};for(let[r,i]of Object.entries(n.boundVariables)){if(Array.isArray(i))continue;let a=e.resolveNumberVariableForNode(n.id,i);a!==void 0&&Object.assign(t,na(r,a))}Object.keys(t).length>0&&e.updateNode(n.id,t)}}function El(e,t,n,r=[],i){let a=wl(e,t,n,r,Qc(e,i));us(a);let o=ml(a);for(let e of a.kiwiPropertyNodes)o.add(e);Xs(e,o,a.swappedInstances,a.componentIdRoot,void 0,a.activeNodeIds,a.protectedFields);let s=kc(a);if(s.size>0&&Xs(e,s,a.swappedInstances,a.componentIdRoot,o,a.activeNodeIds,a.protectedFields),i){let t=Qc(e,i);t&&(a.activeNodeIds=t,Zo(e,t,a.preComputedClones));let n=kc(a),r=new Set([...o,...s,...n]);r.size>0&&Xs(e,r,a.swappedInstances,a.componentIdRoot,o,a.activeNodeIds,a.protectedFields),xl(e)}Xc(a),bl(e,new Set([...a.kiwiPropertyNodes,...o])),Cl(e,a.activeNodeIds),Mc(a);let c=new Set;for(let t of Go(e,a.activeNodeIds)){if(t.type!==`INSTANCE`||!t.componentId)continue;let n=e.getNode(t.componentId);n&&(t.width!==n.width||t.height!==n.height)&&c.add(t.id)}kc(a),Ys(e,ml(a,!0),a.activeNodeIds,a.protectedFields,a.preComputedClones),$s(a,c),Tl(e,a.activeNodeIds),ic(a)}self.location.href,typeof window<`u`&&`__TAURI_INTERNALS__`in window;let Dl={r:0,g:0,b:0,a:1};[{id:`harness:pi`,name:`Pi`,keyPlaceholder:`Provider API key`,keyURL:``,defaultModel:``,supportsCustomModel:!0,models:[]},{id:`openrouter`,name:`OpenRouter`,keyPlaceholder:`sk-or-…`,keyURL:`https://openrouter.ai/keys`,defaultModel:`anthropic/claude-sonnet-5`,supportsCustomModel:!0,models:[{id:`anthropic/claude-sonnet-5`,name:`Claude Sonnet 5`,tag:`Best for design`,capabilities:[`tools`,`vision`]},{id:`anthropic/claude-opus-5`,name:`Claude Opus 5`,tag:`Smartest`,capabilities:[`tools`,`vision`]},{id:`anthropic/claude-fable-5.1`,name:`Claude Fable 5.1`,tag:`Latest Anthropic`,capabilities:[`tools`,`vision`]},{id:`openai/gpt-5.6`,name:`GPT-5.6`,tag:`Latest OpenAI`,capabilities:[`tools`,`vision`]},{id:`google/gemini-3.8-flash`,name:`Gemini 3.8 Flash`,tag:`Fast`,capabilities:[`tools`,`vision`]},{id:`z-ai/glm-5.3`,name:`GLM-5.3`,capabilities:[`tools`]},{id:`deepseek/deepseek-v4-pro`,name:`DeepSeek V4 Pro`,tag:`Reasoning`,capabilities:[`tools`]},{id:`moonshotai/kimi-k3`,name:`Kimi K3`,tag:`Vision + code`,capabilities:[`tools`,`vision`]},{id:`qwen/qwen3-coder:free`,name:`Qwen3 Coder`,tag:`Free`},{id:`openai/gpt-oss-120b:free`,name:`GPT-OSS 120B`,tag:`Free`}]},{id:`anthropic`,name:`Anthropic`,keyPlaceholder:`sk-ant-…`,keyURL:`https://console.anthropic.com/settings/keys`,defaultModel:`claude-sonnet-5`,models:[{id:`claude-sonnet-5`,name:`Claude Sonnet 5`,tag:`Best for design`,capabilities:[`tools`,`vision`]},{id:`claude-opus-5`,name:`Claude Opus 5`,tag:`Smartest`,capabilities:[`tools`,`vision`]},{id:`claude-fable-5-1`,name:`Claude Fable 5.1`,tag:`Latest`,capabilities:[`tools`,`vision`]}]},{id:`openai`,name:`OpenAI`,keyPlaceholder:`sk-…`,keyURL:`https://platform.openai.com/api-keys`,defaultModel:`gpt-5.6`,models:[{id:`gpt-5.6`,name:`GPT-5.6`,tag:`Best`,capabilities:[`tools`,`vision`]},{id:`gpt-5.5`,name:`GPT-5.5`,capabilities:[`tools`,`vision`]},{id:`gpt-5.4-mini`,name:`GPT-5.4 mini`,tag:`Fast`,capabilities:[`tools`,`vision`]},{id:`gpt-5.4-nano`,name:`GPT-5.4 nano`,tag:`Cheap`,capabilities:[`tools`,`vision`]}]},{id:`google`,name:`Google AI`,keyPlaceholder:`AIza…`,keyURL:`https://aistudio.google.com/apikey`,defaultModel:`gemini-3.8-flash`,models:[{id:`gemini-3.8-flash`,name:`Gemini 3.8 Flash`,tag:`Latest`,capabilities:[`tools`,`vision`]},{id:`gemini-3.7-flash`,name:`Gemini 3.7 Flash`,capabilities:[`tools`,`vision`]},{id:`gemini-flash-latest`,name:`Gemini Flash Latest`,tag:`Alias`,capabilities:[`tools`,`vision`]},{id:`gemini-3.1-pro-preview`,name:`Gemini 3.1 Pro`,tag:`Pro`,capabilities:[`tools`,`vision`]}]},{id:`deepseek`,name:`DeepSeek`,keyPlaceholder:`sk-…`,keyURL:`https://platform.deepseek.com/api_keys`,defaultModel:`deepseek-v4-flash`,models:[{id:`deepseek-v4-flash`,name:`DeepSeek V4 Flash`,tag:`Fast`},{id:`deepseek-v4-pro`,name:`DeepSeek V4 Pro`,tag:`Reasoning`}]},{id:`zai`,name:`Z.ai`,keyPlaceholder:`API key`,keyURL:`https://docs.z.ai/devpack/quick-start`,defaultModel:`glm-5.3`,models:[{id:`glm-5.3`,name:`GLM-5.3`,tag:`Best`},{id:`glm-5.3-flash`,name:`GLM-5.3-Flash`,tag:`Fast`},{id:`glm-5.2`,name:`GLM-5.2`},{id:`glm-5v-turbo`,name:`GLM-5V-Turbo`,tag:`Vision`,capabilities:[`tools`,`vision`]},{id:`glm-5.1`,name:`GLM-5.1`},{id:`glm-5`,name:`GLM-5`},{id:`glm-5-code`,name:`GLM-5-Code`},{id:`glm-4.7`,name:`GLM-4.7`},{id:`glm-4.7-flashx`,name:`GLM-4.7-FlashX`},{id:`glm-4.6`,name:`GLM-4.6`},{id:`glm-4.5`,name:`GLM-4.5`},{id:`glm-4.5-x`,name:`GLM-4.5-X`},{id:`glm-4.5-air`,name:`GLM-4.5-Air`},{id:`glm-4.5-airx`,name:`GLM-4.5-AirX`},{id:`glm-4-32b-0414-128k`,name:`GLM-4-32B-0414-128K`},{id:`glm-4.7-flash`,name:`GLM-4.7-Flash`,tag:`Free`},{id:`glm-4.5-flash`,name:`GLM-4.5-Flash`,tag:`Free`}]},{id:`minimax`,name:`MiniMax`,keyPlaceholder:`API key`,keyURL:`https://platform.minimax.io/user-center/basic-information/interface-key`,defaultModel:`MiniMax-M3`,models:[{id:`MiniMax-M3`,name:`MiniMax-M3`,tag:`Best`},{id:`MiniMax-M2.7`,name:`MiniMax-M2.7`},{id:`MiniMax-M2.7-highspeed`,name:`MiniMax-M2.7-highspeed`,tag:`Fast`},{id:`MiniMax-M2.5`,name:`MiniMax-M2.5`},{id:`MiniMax-M2.5-highspeed`,name:`MiniMax-M2.5 Highspeed`,tag:`Fast`},{id:`MiniMax-M2.1`,name:`MiniMax-M2.1`},{id:`MiniMax-M2.1-highspeed`,name:`MiniMax-M2.1 Highspeed`,tag:`Fast`},{id:`MiniMax-M2`,name:`MiniMax-M2`}]},{id:`openai-compatible`,name:`OpenAI-compatible`,keyPlaceholder:`API key`,keyURL:``,defaultModel:``,models:[],supportsCustomBaseURL:!0,supportsCustomModel:!0},{id:`anthropic-compatible`,name:`Anthropic-compatible`,keyPlaceholder:`API key`,keyURL:``,defaultModel:``,models:[],supportsCustomBaseURL:!0,supportsCustomModel:!0}].find(e=>e.id===`openai-compatible`)?.defaultModel;let Ol=new WeakMap;function kl(e,t){Ol.set(e,t)}function Al(e){return Ol.get(e)}function jl(e,t,n){e.preserveSourceMetadataDuring(()=>{El(e,t.changeMap,t.guidToNodeId,t.blobs,n)});let r=n??e.getPages(!0).map(e=>e.id);for(let e of r)t.populatedRootIds.add(e)}function Ml(e,t,n){let r=[...n].filter(e=>e&&!t.populatedRootIds.has(e));return r.length===0?!1:(jl(e,t,r),!0)}function Nl(e,t){let n=Al(e);return n?Ml(e,n,t):!1}function Pl(e,t){e.source.format=`fig`,e.source.orderKey=t.parentIndex?.position??null,t.backgroundColor&&(e.source.fig.rawNodeFields.backgroundColor=structuredClone(t.backgroundColor)),t.backgroundPaints&&(e.source.fig.rawNodeFields.backgroundPaints=structuredClone(t.backgroundPaints)),t.guides&&(e.guides=Qt(t.guides),e.source.fig.rawNodeFields.guides=structuredClone(t.guides)),e.source.fig.rawNodeFields.strokeJoin=t.strokeJoin,e.source.fig.rawNodeFields.strokeWeight=t.strokeWeight,t.pageType&&(e.source.fig.rawNodeFields.pageType=t.pageType)}function Fl(e,t){let n=e.getNode(e.rootId);if(!t||!n)return;n.source.format=`fig`,n.pluginData=t.pluginData?t.pluginData.map(e=>({pluginId:e.pluginID,key:e.key,value:e.value})):[],n.source.fig.rawNodeFields.strokeJoin=t.strokeJoin,n.source.fig.rawNodeFields.strokeWeight=t.strokeWeight;let r=ma(t,`enabledLibraries`);if(r)try{let t=JSON.parse(r);if(!Array.isArray(t))return;for(let n of t){if(!n||typeof n!=`object`||Array.isArray(n))continue;let t=n;typeof t.libraryId!=`string`||typeof t.revisionId!=`string`||e.enabledLibraries.set(t.libraryId,{libraryId:t.libraryId,revisionId:t.revisionId,enabled:t.enabled===!0})}}catch(e){console.warn(`Ignored malformed OpenPencil library metadata`,e)}}function Il(e){return e.version?`${e.key}@${e.version}`:e.key}function Ll(e){let t=new Map;for(let[n,r]of e)typeof r.key==`string`&&((typeof r.version!=`string`||!t.has(r.key))&&t.set(r.key,n),typeof r.version==`string`&&t.set(Il({key:r.key,version:r.version}),n),typeof r.userFacingVersion==`string`&&t.set(Il({key:r.key,version:r.userFacingVersion}),n));return t}function Rl(e,t){if(e.guid)return J(e.guid);if(e.assetRef)return t.get(Il(e.assetRef))??t.get(e.assetRef.key)}function zl(e,t){let n=new Map,r=new Map;for(let[t,i]of e){if(i.type!==`VARIABLE`)continue;n.set(t,i.variableDataValues?.entries??[]);let e=i.variableSetID?.guid?J(i.variableSetID.guid):void 0,a=i.parentIndex?.guid?J(i.parentIndex.guid):void 0;e?r.set(t,e):a&&r.set(t,a)}let i=new Map;for(let[t,n]of e){if(n.type!==`VARIABLE_SET`)continue;let e=n.variableSetModes??[];e.length>0&&i.set(t,J(e[0].id))}function a(e,o,s){if(s>10)return null;let c=n.get(e);if(!c?.length)return null;let l=r.get(e),u=l?i.get(l):void 0,d=o?c.find(e=>J(e.modeID)===o):void 0;!d&&u&&(d=c.find(e=>J(e.modeID)===u)),d||=c[0];let f=d.variableData.value;if(!f)return null;if(f.colorValue)return f.colorValue;if(f.alias){let e=Rl(f.alias,t);if(e)return a(e,J(d.modeID),s+1)}return null}return function(e){let n=Rl(e,t);return n?a(n,void 0,0):null}}function Bl(e){let t=new Map,n=new Map,r=new Map;for(let i of e){if(!i.guid||i.phase===`REMOVED`)continue;let e=J(i.guid);if(t.set(e,i),i.parentIndex?.guid){let t=J(i.parentIndex.guid);n.set(e,t);let a=r.get(t);a||(a=[],r.set(t,a)),a.push(e)}}for(let[e,n]of r){let r=t.get(e);r&&To(n,r,t)}return{changeMap:t,parentMap:n,childrenMap:r}}function Vl(e){return e===`COLOR`?`COLOR`:e===`BOOLEAN`?`BOOLEAN`:e===`STRING`?`STRING`:`FLOAT`}function Hl(e,t){let n=e.variableData;if(!n.value)return;let r=n.dataType??n.resolvedDataType;if(r===`COLOR`&&n.value.colorValue){let e=n.value.colorValue;return{r:e.r,g:e.g,b:e.b,a:e.a}}if(r===`BOOLEAN`)return n.value.boolValue??!1;if(r===`STRING`)return n.value.textValue??``;if(r===`ALIAS`&&n.value.alias){let e=Rl(n.value.alias,t);return e?{aliasId:e}:void 0}return n.value.floatValue??0}function Ul(e){return e===`BOOLEAN`?!1:e===`STRING`?``:e===`COLOR`?{...Dl}:0}function Wl(e,t){for(let[n,r]of e){if(r.type!==`VARIABLE_SET`)continue;let e=(r.variableSetModes??[]).map(e=>({modeId:J(e.id),name:e.name}));e.length===0&&e.push({modeId:`default`,name:`Default`}),t.addCollection({id:n,name:r.name??`Variables`,modes:e,defaultModeId:e[0].modeId,variableIds:[]})}}function Gl(e,t,n,r){if(e.variableSetID?.guid)return J(e.variableSetID.guid);let i=e.variableSetID?.assetRef;return i?r.get(Il(i))??r.get(i.key)??``:n.get(t)??``}function Kl(e,t,n){if(t.variableCollections.has(n))return;let r=e.get(n);t.addCollection({id:n,name:r?.name??`Variables`,modes:[{modeId:`default`,name:`Default`}],defaultModeId:`default`,variableIds:[]})}function ql(e,t,n,r){for(let[i,a]of e){if(a.type!==`VARIABLE`)continue;let o=Gl(a,i,t,r);Kl(e,n,o);let s=Vl(a.variableResolvedType),c={};if(a.variableDataValues?.entries)for(let e of a.variableDataValues.entries){let t=Hl(e,r);t!==void 0&&(c[J(e.modeID)]=t)}if(Object.keys(c).length===0){let e=n.variableCollections.get(o)?.defaultModeId??`default`;c[e]=Ul(s)}n.addVariable({id:i,name:a.name??`Variable`,type:s,collectionId:o,valuesByMode:c,description:``,hiddenFromPublishing:!1,key:typeof a.key==`string`?a.key:void 0,version:typeof a.version==`string`?a.version:void 0})}}function Jl(e,t,n,r,i,a,o){let s=null;for(let[e,n]of t)if(n.type===`DOCUMENT`||e===`0:0`){s=e;break}if(s){Fl(e,t.get(s));for(let n of r.get(s)??[]){let s=t.get(n);if(s)if(s.type===`CANVAS`){let t=e.addPage(s.name??`Page`);t.source.id=n,Pl(t,s),a.set(n,t.id),s.internalOnly&&(t.internalOnly=!0),i.add(n);for(let e of r.get(n)??[])o(e,t.id)}else o(n,e.getPages()[0]?.id??e.rootId)}}else{let r=[];for(let[e]of t){let i=n.get(e);(!i||!t.has(i))&&r.push(e)}let i=e.getPages()[0]??e.addPage(`Page 1`);for(let e of r)o(e,i.id)}}function Yl(e,t,n){for(let[r,i]of e){if(!i.variableConsumptionMap?.entries?.length)continue;let e=t.get(r);if(e)for(let t of i.variableConsumptionMap.entries){let r=ea(t);r&&n.bindVariable(e,r.field,r.variableId)}}}function Xl(e,t){e.preserveSourceMetadataDuring(()=>{for(let n of e.getAllNodes()){if(n.type!==`INSTANCE`||!n.componentId)continue;let r=t.get(n.componentId);r&&e.updateNode(n.id,{componentId:r})}})}function Zl(e,t){let n=new Map;for(let t of e.getAllNodes())for(let e of t.componentPropertyDefinitions)n.has(e.id)||n.set(e.id,e);e.preserveSourceMetadataDuring(()=>{for(let r of e.getAllNodes()){if(r.componentPropertyDefinitions.length>0){let n=r.componentPropertyDefinitions.map(e=>{if(e.type!==`INSTANCE_SWAP`)return e;let n=e.defaultValue?t.get(e.defaultValue):void 0;return n?{...e,defaultValue:n}:e});n.some((e,t)=>e!==r.componentPropertyDefinitions[t])&&e.updateNode(r.id,{componentPropertyDefinitions:n})}if(Object.keys(r.componentPropertyAssignments).length>0){let i=!1,a={...r.componentPropertyAssignments};for(let[e,r]of Object.entries(a)){if(n.get(e)?.type!==`INSTANCE_SWAP`)continue;let o=t.get(r);o&&(a[e]=o,i=!0)}i&&e.updateNode(r.id,{componentPropertyAssignments:a})}}})}function Ql(e){for(let t of e.getAllNodes()){if(t.type!==`COMPONENT`||t.variantPropSpecs.length===0||!t.parentId)continue;let n=e.getNode(t.parentId);if(n?.type!==`COMPONENT_SET`)continue;let r=new Map(n.componentPropertyDefinitions.map(e=>[e.id,e.name])),i={};for(let e of t.variantPropSpecs)i[r.get(e.propDefId)??e.propDefId]=e.value;e.updateNode(t.id,{componentPropertyValues:i})}}function $l(e){return e.find(e=>e.type===`DOCUMENT`)?.documentColorProfile===`DISPLAY_P3`?`display-p3`:`srgb`}function eu(e,t){for(let n of e.values())Ro(e,n,t)}function tu(e,t,n,r,i){kl(e,{changeMap:t,guidToNodeId:n,blobs:r,populatedRootIds:new Set(i)})}function nu(e){let t=new Set;for(let n of e.getAllNodes()){if(n.type!==`COMPONENT`&&n.type!==`COMPONENT_SET`)continue;let r=n.parentId?e.getNode(n.parentId):void 0;for(;r?.parentId&&r.type!==`CANVAS`;)r=e.getNode(r.parentId);r?.type===`CANVAS`&&t.add(r.id)}return t}function ru(e,t=[],n,r={}){let i=new Ti;if(i.documentColorSpace=$l(e),n)for(let[e,t]of n)i.images.set(e,t);for(let e of i.getPages(!0))i.deleteNode(e.id);let{changeMap:a,parentMap:o,childrenMap:s}=Bl(e),c=Ll(a);eu(a,c),zi(zl(a,c));let l=new Map,u=new Set,d=new Map,f=e=>s.get(e)??[];function p(e,n){if(u.has(e))return;u.add(e);let r=a.get(e);if(!r)return;let{nodeType:s,...c}=so(r,t);if(c.sharedStyleType&&(c.internalOnly=!0),s===`DOCUMENT`||s===`VARIABLE`||r.type===`VARIABLE_SET`)return;oo(r,a.get(o.get(e)??``))&&(c.textAutoResize=`WIDTH_AND_HEIGHT`);let m=l.get(n)??n,h=i.createNode(s,m,c);d.set(e,h.id);for(let t of f(e))p(t,h.id)}Jl(i,a,o,s,u,l,p),Wl(a,i),ql(a,o,i,c),Yl(a,d,i),Xl(i,d),Zl(i,d),Ql(i);let m=i.getPages().find(e=>!e.internalOnly)?.id,h=r.populate===`first-page`?nu(i):new Set,g=r.populate===`first-page`?[m,...h].filter(Yt):void 0;return r.populate!==`none`&&i.preserveSourceMetadataDuring(()=>{El(i,a,d,t,g)}),Mo(i),g&&tu(i,a,d,t,g),zi(null),i.getPages(!0).length===0&&i.addPage(`Page 1`),i}function iu(e){let t=Al(e);return{rootId:e.rootId,nodes:[...e.nodes],images:[...e.images],variables:[...e.variables],variableCollections:[...e.variableCollections],activeMode:[...e.activeMode],instanceIndex:[...e.instanceIndex].map(([e,t])=>[e,[...t]]),figKiwiVersion:e.figKiwiVersion,figSchemaDeflated:e.figSchemaDeflated,documentColorSpace:e.documentColorSpace,enabledLibraries:[...e.enabledLibraries],lazyFigImport:t?{changeMap:[...t.changeMap],guidToNodeId:[...t.guidToNodeId],blobs:t.blobs,populatedRootIds:[...t.populatedRootIds]}:void 0}}function au(e){let t=new Set(e.nodes.keys()),n=new Map,r=new Set,i=new Set,a={createNode:e.createNode.bind(e),createNodeWithId:e.createNodeWithId.bind(e),updateNode:e.updateNode.bind(e),deleteNode:e.deleteNode.bind(e)};function o(t,i){if(!t||r.has(t))return;let a=e.getNode(t);if(!a)return;let o=n.get(t)??{};n.set(t,o);for(let e of i)e in o||Object.assign(o,{[e]:structuredClone(a[e])})}return e.createNode=((e,t,n)=>{o(t,[`childIds`]);let i=a.createNode(e,t,n);return r.add(i.id),i}),e.createNodeWithId=((e,t,n,i)=>{o(n,[`childIds`]);let s=a.createNodeWithId(e,t,n,i);return r.add(s.id),s}),e.updateNode=((t,n)=>{let r=e.getNode(t);if(r){let e=Object.keys(n).filter(e=>!Jt(r[e],n[e]));e.length>0&&e.push(`source`),`componentId`in n&&e.push(`componentId`),(`fills`in n||`strokes`in n)&&e.push(`boundVariables`),o(t,e)}a.updateNode(t,n)}),e.deleteNode=(s=>{let c=e.getNode(s);o(c?.parentId,[`childIds`]);let l=c?[s]:[];for(;l.length>0;){let a=l.pop();if(!a)continue;let o=e.getNode(a);o&&l.push(...o.childIds),t.has(a)?i.add(a):(r.delete(a),n.delete(a))}a.deleteNode(s)}),{before:n,created:r,deleted:i,stop(){e.createNode=a.createNode,e.createNodeWithId=a.createNodeWithId,e.updateNode=a.updateNode,e.deleteNode=a.deleteNode}}}function ou(e,t,n){let r=[];for(let[n,i]of t.before){let a=e.getNode(n);if(!a||t.deleted.has(n))continue;let o={};for(let e of Object.keys(i))Jt(i[e],a[e])||Object.assign(o,{[e]:structuredClone(a[e])});Object.keys(o).length>0&&r.push([n,o])}return{created:[...t.created].map(t=>e.getNode(t)).filter(e=>e!==void 0).map(e=>[e.id,structuredClone(e)]),updated:r,deleted:[...t.deleted],instanceIndex:[...e.instanceIndex].map(([e,t])=>[e,[...t]]),populatedRootIds:[...n]}}let su,cu,lu;function uu(e){lu?.postMessage(e)}function du(e){if(!su)throw Error(`FIG session has no retained graph`);let t=au(su);try{let n=Nl(su,[e.pageId]),r=Al(su);if(!r)throw Error(`FIG session has no lazy import context`);uu({type:`population-result`,requestId:e.requestId,baseRevision:e.baseRevision,populated:n,delta:ou(su,t,r.populatedRootIds)})}finally{t.stop()}}function fu(e){try{if(e.type===`original-archive`){if(!cu)throw Error(`FIG session has no original archive`);let t=cu.slice();lu?.postMessage({type:`original-archive-result`,requestId:e.requestId,bytes:t},[t.buffer]);return}if(e.type===`dispose`){su=void 0,cu=void 0,uu({type:`disposed`}),lu?.close(),lu=void 0,self.close();return}if(e.type===`cancel`)return;du(e)}catch(t){uu({type:`population-error`,requestId:e.type===`populate`?e.requestId:void 0,error:t instanceof Error?t.message:String(t)})}}self.onmessage=e=>{let t=e.data;lu=t.port,lu.onmessage=e=>fu(e.data),lu.start(),cu=new Uint8Array(t.archiveBuffer);try{let{nodeChanges:e,blobs:n,images:r,figKiwiVersion:i,figSchemaDeflated:a}=Nt(t.originalBuffer,e=>uu({type:`page-manifest`,pages:e})),o=ru(e,n,new Map(r),t.options);o.figKiwiVersion=i,o.figSchemaDeflated=a,su=t.options?.populate===`first-page`?o:void 0,uu({type:`graph`,graph:iu(o)})}catch(e){uu({type:`graph`,error:e instanceof Error?e.message:String(e)})}}})();