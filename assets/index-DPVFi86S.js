var qp=Object.defineProperty;var Yp=(n,e,t)=>e in n?qp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Te=(n,e,t)=>Yp(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yc="186",$p=0,ah=1,Kp=2,Ja=1,Jp=2,Is=3,_r=0,li=1,Mn=2,on=0,Bs=1,Kt=2,oh=3,lh=4,Zp=5,Jr=100,Qp=101,jp=102,em=103,tm=104,im=200,nm=201,rm=202,sm=203,$d=204,Kd=205,am=206,om=207,lm=208,cm=209,um=210,hm=211,dm=212,fm=213,pm=214,Nl=0,Ol=1,Fl=2,Ks=3,Bl=4,zl=5,kl=6,Hl=7,$c=0,mm=1,gm=2,ln=0,Kc=1,Jc=2,Zc=3,Qc=4,jc=5,eu=6,tu=7,Jd=300,vr=301,os=302,Oo=303,Fo=304,wo=306,Gl=1e3,yn=1001,Vl=1002,Ht=1003,_m=1004,_a=1005,Zt=1006,Bo=1007,cr=1008,yi=1009,Zd=1010,Qd=1011,Js=1012,iu=1013,cn=1014,Wi=1015,ci=1016,nu=1017,ru=1018,Zs=1020,jd=35902,ef=35899,tf=1021,nf=1022,Xi=1023,An=1026,ur=1027,su=1028,au=1029,xr=1030,ou=1031,lu=1033,Za=33776,Qa=33777,ja=33778,eo=33779,Wl=35840,Xl=35841,ql=35842,Yl=35843,$l=36196,Kl=37492,Jl=37496,Zl=37488,Ql=37489,ao=37490,jl=37491,ec=37808,tc=37809,ic=37810,nc=37811,rc=37812,sc=37813,ac=37814,oc=37815,lc=37816,cc=37817,uc=37818,hc=37819,dc=37820,fc=37821,pc=36492,mc=36494,gc=36495,_c=36283,vc=36284,oo=36285,xc=36286,vm=3200,lo=0,xm=1,Vn="",$t="srgb",co="srgb-linear",uo="linear",it="srgb",zo=7680,Sm=519,Mm=512,ym=513,bm=514,cu=515,Tm=516,Em=517,uu=518,wm=519,rf=35044,ch="300 es",nn=2e3,Qs=2001;function Am(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function js(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Cm(){const n=js("canvas");return n.style.display="block",n}const uh={};function ho(...n){const e="THREE."+n.shift();console.log(e,...n)}function sf(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ie(...n){n=sf(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Je(...n){n=sf(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ts(...n){const e=n.join(" ");e in uh||(uh[e]=!0,Ie(...n))}function Rm(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Pm={[Nl]:Ol,[Fl]:kl,[Bl]:Hl,[Ks]:zl,[Ol]:Nl,[kl]:Fl,[Hl]:Bl,[zl]:Ks};class Mr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hh=1234567;const zs=Math.PI/180,ea=180/Math.PI;function bn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function Ge(n,e,t){return Math.max(e,Math.min(t,n))}function hu(n,e){return(n%e+e)%e}function Lm(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Dm(n,e,t){return n!==e?(t-n)/(e-n):0}function ks(n,e,t){return(1-t)*n+t*e}function Im(n,e,t,i){return ks(n,e,1-Math.exp(-t*i))}function Um(n,e=1){return e-Math.abs(hu(n,e*2)-e)}function Nm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Om(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Fm(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Bm(n,e){return n+Math.random()*(e-n)}function zm(n){return n*(.5-Math.random())}function km(n){n!==void 0&&(hh=n);let e=hh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Hm(n){return n*zs}function Gm(n){return n*ea}function Vm(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Wm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Xm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function qm(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),h=s((e-i)/2),d=a((e-i)/2),f=s((i-e)/2),p=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*h,l*d,o*c);break;case"YZY":n.set(l*d,o*u,l*h,o*c);break;case"ZXZ":n.set(l*h,l*d,o*u,o*c);break;case"XZX":n.set(o*u,l*p,l*f,o*c);break;case"YXY":n.set(l*f,o*u,l*p,o*c);break;case"ZYZ":n.set(l*p,l*f,o*u,o*c);break;default:Ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Vi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function rt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const bi={DEG2RAD:zs,RAD2DEG:ea,generateUUID:bn,clamp:Ge,euclideanModulo:hu,mapLinear:Lm,inverseLerp:Dm,lerp:ks,damp:Im,pingpong:Um,smoothstep:Nm,smootherstep:Om,randInt:Fm,randFloat:Bm,randFloatSpread:zm,seededRandom:km,degToRad:Hm,radToDeg:Gm,isPowerOfTwo:Vm,ceilPowerOfTwo:Wm,floorPowerOfTwo:Xm,setQuaternionFromProperEuler:qm,normalize:rt,denormalize:Vi},Xu=class Xu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Xu.prototype.isVector2=!0;let fe=Xu;class gs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3],d=s[a+0],f=s[a+1],p=s[a+2],_=s[a+3];if(h!==_||l!==d||c!==f||u!==p){let m=l*d+c*f+u*p+h*_;m<0&&(d=-d,f=-f,p=-p,_=-_,m=-m);let g=1-o;if(m<.9995){const M=Math.acos(m),w=Math.sin(M);g=Math.sin(g*M)/w,o=Math.sin(o*M)/w,l=l*g+d*o,c=c*g+f*o,u=u*g+p*o,h=h*g+_*o}else{l=l*g+d*o,c=c*g+f*o,u=u*g+p*o,h=h*g+_*o;const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[a],d=s[a+1],f=s[a+2],p=s[a+3];return e[t]=o*p+u*h+l*f-c*d,e[t+1]=l*p+u*d+c*h-o*f,e[t+2]=c*p+u*f+o*d-l*h,e[t+3]=u*p-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(s/2),d=l(i/2),f=l(r/2),p=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-r)*f}else if(i>o&&i>h){const f=2*Math.sqrt(1+i-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-i-h);this._w=(s-c)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-i-o);this._w=(a-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const qu=class qu{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ko.copy(this).projectOnVector(e),this.sub(ko)}reflect(e){return this.sub(ko.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};qu.prototype.isVector3=!0;let P=qu;const ko=new P,dh=new gs,Yu=class Yu{constructor(e,t,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],p=i[8],_=r[0],m=r[3],g=r[6],M=r[1],w=r[4],S=r[7],y=r[2],E=r[5],A=r[8];return s[0]=a*_+o*M+l*y,s[3]=a*m+o*w+l*E,s[6]=a*g+o*S+l*A,s[1]=c*_+u*M+h*y,s[4]=c*m+u*w+h*E,s[7]=c*g+u*S+h*A,s[2]=d*_+f*M+p*y,s[5]=d*m+f*w+p*E,s[8]=d*g+f*S+p*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,f=c*s-a*l,p=t*h+i*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=h*_,e[1]=(r*c-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=d*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=f*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ts("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ho.makeScale(e,t)),this}rotate(e){return ts("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ho.makeRotation(-e)),this}translate(e,t){return ts("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ho.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Yu.prototype.isMatrix3=!0;let Oe=Yu;const Ho=new Oe,fh=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ph=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ym(){const n={enabled:!0,workingColorSpace:co,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===it&&(r.r=Tn(r.r),r.g=Tn(r.g),r.b=Tn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(r.r=is(r.r),r.g=is(r.g),r.b=is(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Vn?uo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ts("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ts("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[co]:{primaries:e,whitePoint:i,transfer:uo,toXYZ:fh,fromXYZ:ph,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:$t},outputColorSpaceConfig:{drawingBufferColorSpace:$t}},[$t]:{primaries:e,whitePoint:i,transfer:it,toXYZ:fh,fromXYZ:ph,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:$t}}}),n}const Ye=Ym();function Tn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function is(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Rr;class $m{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Rr===void 0&&(Rr=js("canvas")),Rr.width=e.width,Rr.height=e.height;const r=Rr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Rr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=js("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Tn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Tn(t[i]/255)*255):t[i]=Tn(t[i]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Km=0;class du{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=bn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Go(r[a].image)):s.push(Go(r[a]))}else s=Go(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Go(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?$m.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let Jm=0;const Vo=new P;class zt extends Mr{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,i=yn,r=yn,s=Zt,a=cr,o=Xi,l=yi,c=zt.DEFAULT_ANISOTROPY,u=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=bn(),this.name="",this.source=new du(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Vo).x}get height(){return this.source.getSize(Vo).y}get depth(){return this.source.getSize(Vo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gl:e.x=e.x-Math.floor(e.x);break;case yn:e.x=e.x<0?0:1;break;case Vl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gl:e.y=e.y-Math.floor(e.y);break;case yn:e.y=e.y<0?0:1;break;case Vl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Jd;zt.DEFAULT_ANISOTROPY=1;const $u=class $u{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,S=(f+1)/2,y=(g+1)/2,E=(u+d)/4,A=(h+_)/4,v=(p+m)/4;return w>S&&w>y?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=E/i,s=A/i):S>y?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=E/r,s=v/r):y<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(y),i=A/s,r=v/s),this.set(i,r,s,t),this}let M=Math.sqrt((m-p)*(m-p)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-p)/M,this.y=(h-_)/M,this.z=(d-u)/M,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this.w=Ge(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this.w=Ge(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};$u.prototype.isVector4=!0;let St=$u;class Zm extends Mr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new zt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new du(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jt extends Zm{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class af extends zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qm extends zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Eo=class Eo{constructor(e,t,i,r,s,a,o,l,c,u,h,d,f,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,h,d,f,p,_,m)}set(e,t,i,r,s,a,o,l,c,u,h,d,f,p,_,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=d,g[3]=f,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Eo().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Pr.setFromMatrixColumn(e,0).length(),s=1/Pr.setFromMatrixColumn(e,1).length(),a=1/Pr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,f=a*h,p=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+p*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,p=c*u,_=c*h;t[0]=d+_*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-p,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,p=c*u,_=c*h;t[0]=d-_*o,t[4]=-a*h,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,f=a*h,p=o*u,_=o*h;t[0]=l*u,t[4]=p*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,p=o*l,_=o*c;t[0]=l*u,t[4]=_-d*h,t[8]=p*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+p,t[10]=d-_*h}else if(e.order==="XZY"){const d=a*l,f=a*c,p=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=a*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jm,e,e0)}lookAt(e,t,i){const r=this.elements;return vi.subVectors(e,t),vi.lengthSq()===0&&(vi.z=1),vi.normalize(),On.crossVectors(i,vi),On.lengthSq()===0&&(Math.abs(i.z)===1?vi.x+=1e-4:vi.z+=1e-4,vi.normalize(),On.crossVectors(i,vi)),On.normalize(),va.crossVectors(vi,On),r[0]=On.x,r[4]=va.x,r[8]=vi.x,r[1]=On.y,r[5]=va.y,r[9]=vi.y,r[2]=On.z,r[6]=va.z,r[10]=vi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],p=i[2],_=i[6],m=i[10],g=i[14],M=i[3],w=i[7],S=i[11],y=i[15],E=r[0],A=r[4],v=r[8],T=r[12],R=r[1],I=r[5],N=r[9],L=r[13],D=r[2],U=r[6],q=r[10],z=r[14],Q=r[3],X=r[7],Z=r[11],ee=r[15];return s[0]=a*E+o*R+l*D+c*Q,s[4]=a*A+o*I+l*U+c*X,s[8]=a*v+o*N+l*q+c*Z,s[12]=a*T+o*L+l*z+c*ee,s[1]=u*E+h*R+d*D+f*Q,s[5]=u*A+h*I+d*U+f*X,s[9]=u*v+h*N+d*q+f*Z,s[13]=u*T+h*L+d*z+f*ee,s[2]=p*E+_*R+m*D+g*Q,s[6]=p*A+_*I+m*U+g*X,s[10]=p*v+_*N+m*q+g*Z,s[14]=p*T+_*L+m*z+g*ee,s[3]=M*E+w*R+S*D+y*Q,s[7]=M*A+w*I+S*U+y*X,s[11]=M*v+w*N+S*q+y*Z,s[15]=M*T+w*L+S*z+y*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],_=e[7],m=e[11],g=e[15],M=l*f-c*d,w=o*f-c*h,S=o*d-l*h,y=a*f-c*u,E=a*d-l*u,A=a*h-o*u;return t*(_*M-m*w+g*S)-i*(p*M-m*y+g*E)+r*(p*w-_*y+g*A)-s*(p*S-_*E+m*A)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(s*u-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],_=e[13],m=e[14],g=e[15],M=t*o-i*a,w=t*l-r*a,S=t*c-s*a,y=i*l-r*o,E=i*c-s*o,A=r*c-s*l,v=u*_-h*p,T=u*m-d*p,R=u*g-f*p,I=h*m-d*_,N=h*g-f*_,L=d*g-f*m,D=M*L-w*N+S*I+y*R-E*T+A*v;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/D;return e[0]=(o*L-l*N+c*I)*U,e[1]=(r*N-i*L-s*I)*U,e[2]=(_*A-m*E+g*y)*U,e[3]=(d*E-h*A-f*y)*U,e[4]=(l*R-a*L-c*T)*U,e[5]=(t*L-r*R+s*T)*U,e[6]=(m*S-p*A-g*w)*U,e[7]=(u*A-d*S+f*w)*U,e[8]=(a*N-o*R+c*v)*U,e[9]=(i*R-t*N-s*v)*U,e[10]=(p*E-_*S+g*M)*U,e[11]=(h*S-u*E-f*M)*U,e[12]=(o*T-a*I-l*v)*U,e[13]=(t*I-i*T+r*v)*U,e[14]=(_*w-p*y-m*M)*U,e[15]=(u*y-h*w+d*M)*U,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,f=s*u,p=s*h,_=a*u,m=a*h,g=o*h,M=l*c,w=l*u,S=l*h,y=i.x,E=i.y,A=i.z;return r[0]=(1-(_+g))*y,r[1]=(f+S)*y,r[2]=(p-w)*y,r[3]=0,r[4]=(f-S)*E,r[5]=(1-(d+g))*E,r[6]=(m+M)*E,r[7]=0,r[8]=(p+w)*A,r[9]=(m-M)*A,r[10]=(1-(d+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Pr.set(r[0],r[1],r[2]).length();const o=Pr.set(r[4],r[5],r[6]).length(),l=Pr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),zi.copy(this);const c=1/a,u=1/o,h=1/l;return zi.elements[0]*=c,zi.elements[1]*=c,zi.elements[2]*=c,zi.elements[4]*=u,zi.elements[5]*=u,zi.elements[6]*=u,zi.elements[8]*=h,zi.elements[9]*=h,zi.elements[10]*=h,t.setFromRotationMatrix(zi),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=nn,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let p,_;if(l)p=s/(a-s),_=a*s/(a-s);else if(o===nn)p=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Qs)p=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=nn,l=!1){const c=this.elements,u=2/(t-e),h=2/(i-r),d=-(t+e)/(t-e),f=-(i+r)/(i-r);let p,_;if(l)p=1/(a-s),_=a/(a-s);else if(o===nn)p=-2/(a-s),_=-(a+s)/(a-s);else if(o===Qs)p=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Eo.prototype.isMatrix4=!0;let je=Eo;const Pr=new P,zi=new je,jm=new P(0,0,0),e0=new P(1,1,1),On=new P,va=new P,vi=new P,mh=new je,gh=new gs;class Cn{constructor(e=0,t=0,i=0,r=Cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return mh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gh.setFromEuler(this),this.setFromQuaternion(gh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cn.DEFAULT_ORDER="XYZ";class fu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let t0=0;const _h=new P,Lr=new gs,fn=new je,xa=new P,xs=new P,i0=new P,n0=new gs,vh=new P(1,0,0),xh=new P(0,1,0),Sh=new P(0,0,1),Mh={type:"added"},r0={type:"removed"},Dr={type:"childadded",child:null},Wo={type:"childremoved",child:null};class Lt extends Mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new P,t=new Cn,i=new gs,r=new P(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new je},normalMatrix:{value:new Oe}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Lr.setFromAxisAngle(e,t),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(e,t){return Lr.setFromAxisAngle(e,t),this.quaternion.premultiply(Lr),this}rotateX(e){return this.rotateOnAxis(vh,e)}rotateY(e){return this.rotateOnAxis(xh,e)}rotateZ(e){return this.rotateOnAxis(Sh,e)}translateOnAxis(e,t){return _h.copy(e).applyQuaternion(this.quaternion),this.position.add(_h.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vh,e)}translateY(e){return this.translateOnAxis(xh,e)}translateZ(e){return this.translateOnAxis(Sh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?xa.copy(e):xa.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(xs,xa,this.up):fn.lookAt(xa,xs,this.up),this.quaternion.setFromRotationMatrix(fn),r&&(fn.extractRotation(r.matrixWorld),Lr.setFromRotationMatrix(fn),this.quaternion.premultiply(Lr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mh),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(r0),Wo.child=e,this.dispatchEvent(Wo),Wo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mh),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,e,i0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,n0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Lt.DEFAULT_UP=new P(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class rn extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const s0={type:"move"};class Xo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(s0)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new rn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const of={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},Sa={h:0,s:0,l:0};function qo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Le{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ye.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ye.workingColorSpace){if(e=hu(e,1),t=Ge(t,0,1),i=Ge(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=qo(a,s,e+1/3),this.g=qo(a,s,e),this.b=qo(a,s,e-1/3)}return Ye.colorSpaceToWorking(this,r),this}setStyle(e,t=$t){function i(s){s!==void 0&&parseFloat(s)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$t){const i=of[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tn(e.r),this.g=Tn(e.g),this.b=Tn(e.b),this}copyLinearToSRGB(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return Ye.workingToColorSpace(qt.copy(this),e),Math.round(Ge(qt.r*255,0,255))*65536+Math.round(Ge(qt.g*255,0,255))*256+Math.round(Ge(qt.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(qt.copy(this),t);const i=qt.r,r=qt.g,s=qt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=$t){Ye.workingToColorSpace(qt.copy(this),e);const t=qt.r,i=qt.g,r=qt.b;return e!==$t?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Fn),this.setHSL(Fn.h+e,Fn.s+t,Fn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Fn),e.getHSL(Sa);const i=ks(Fn.h,Sa.h,t),r=ks(Fn.s,Sa.s,t),s=ks(Fn.l,Sa.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new Le;Le.NAMES=of;class da{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Le(e),this.near=t,this.far=i}clone(){return new da(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class yr extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ki=new P,pn=new P,Yo=new P,mn=new P,Ir=new P,Ur=new P,yh=new P,$o=new P,Ko=new P,Jo=new P,Zo=new St,Qo=new St,jo=new St;class Ni{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ki.subVectors(e,t),r.cross(ki);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ki.subVectors(r,t),pn.subVectors(i,t),Yo.subVectors(e,t);const a=ki.dot(ki),o=ki.dot(pn),l=ki.dot(Yo),c=pn.dot(pn),u=pn.dot(Yo),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,p=(a*u-o*l)*d;return s.set(1-f-p,p,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,mn.x),l.addScaledVector(a,mn.y),l.addScaledVector(o,mn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Zo.setScalar(0),Qo.setScalar(0),jo.setScalar(0),Zo.fromBufferAttribute(e,t),Qo.fromBufferAttribute(e,i),jo.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Zo,s.x),a.addScaledVector(Qo,s.y),a.addScaledVector(jo,s.z),a}static isFrontFacing(e,t,i,r){return ki.subVectors(i,t),pn.subVectors(e,t),ki.cross(pn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ki.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),ki.cross(pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ni.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Ni.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Ir.subVectors(r,i),Ur.subVectors(s,i),$o.subVectors(e,i);const l=Ir.dot($o),c=Ur.dot($o);if(l<=0&&c<=0)return t.copy(i);Ko.subVectors(e,r);const u=Ir.dot(Ko),h=Ur.dot(Ko);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Ir,a);Jo.subVectors(e,s);const f=Ir.dot(Jo),p=Ur.dot(Jo);if(p>=0&&f<=p)return t.copy(s);const _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(i).addScaledVector(Ur,o);const m=u*p-f*h;if(m<=0&&h-u>=0&&f-p>=0)return yh.subVectors(s,r),o=(h-u)/(h-u+(f-p)),t.copy(r).addScaledVector(yh,o);const g=1/(m+_+d);return a=_*g,o=d*g,t.copy(i).addScaledVector(Ir,a).addScaledVector(Ur,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class br{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Hi):Hi.fromBufferAttribute(s,a),Hi.applyMatrix4(e.matrixWorld),this.expandByPoint(Hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ma.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ma.copy(i.boundingBox)),Ma.applyMatrix4(e.matrixWorld),this.union(Ma)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hi),Hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ss),ya.subVectors(this.max,Ss),Nr.subVectors(e.a,Ss),Or.subVectors(e.b,Ss),Fr.subVectors(e.c,Ss),Bn.subVectors(Or,Nr),zn.subVectors(Fr,Or),tr.subVectors(Nr,Fr);let t=[0,-Bn.z,Bn.y,0,-zn.z,zn.y,0,-tr.z,tr.y,Bn.z,0,-Bn.x,zn.z,0,-zn.x,tr.z,0,-tr.x,-Bn.y,Bn.x,0,-zn.y,zn.x,0,-tr.y,tr.x,0];return!el(t,Nr,Or,Fr,ya)||(t=[1,0,0,0,1,0,0,0,1],!el(t,Nr,Or,Fr,ya))?!1:(ba.crossVectors(Bn,zn),t=[ba.x,ba.y,ba.z],el(t,Nr,Or,Fr,ya))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const gn=[new P,new P,new P,new P,new P,new P,new P,new P],Hi=new P,Ma=new br,Nr=new P,Or=new P,Fr=new P,Bn=new P,zn=new P,tr=new P,Ss=new P,ya=new P,ba=new P,ir=new P;function el(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){ir.fromArray(n,s);const o=r.x*Math.abs(ir.x)+r.y*Math.abs(ir.y)+r.z*Math.abs(ir.z),l=e.dot(ir),c=t.dot(ir),u=i.dot(ir);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ct=new P,Ta=new fe;let a0=0;class Ai extends Mr{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:a0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=rf,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ta.fromBufferAttribute(this,t),Ta.applyMatrix3(e),this.setXY(t,Ta.x,Ta.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Vi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=rt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),r=rt(r,this.array),s=rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class lf extends Ai{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class cf extends Ai{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ui extends Ai{constructor(e,t,i){super(new Float32Array(e),t,i)}}const o0=new br,Ms=new P,tl=new P;class Tr{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):o0.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ms.subVectors(e,this.center);const t=Ms.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ms,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ms.copy(e.center).add(tl)),this.expandByPoint(Ms.copy(e.center).sub(tl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let l0=0;const Di=new je,il=new Lt,Br=new P,xi=new br,ys=new br,Ft=new P;class ti extends Mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=bn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Am(e)?cf:lf)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Di.makeRotationFromQuaternion(e),this.applyMatrix4(Di),this}rotateX(e){return Di.makeRotationX(e),this.applyMatrix4(Di),this}rotateY(e){return Di.makeRotationY(e),this.applyMatrix4(Di),this}rotateZ(e){return Di.makeRotationZ(e),this.applyMatrix4(Di),this}translate(e,t,i){return Di.makeTranslation(e,t,i),this.applyMatrix4(Di),this}scale(e,t,i){return Di.makeScale(e,t,i),this.applyMatrix4(Di),this}lookAt(e){return il.lookAt(e),il.updateMatrix(),this.applyMatrix4(il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ui(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new br);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];xi.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(xi.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ys.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(xi.min,ys.min),xi.expandByPoint(Ft),Ft.addVectors(xi.max,ys.max),xi.expandByPoint(Ft)):(xi.expandByPoint(ys.min),xi.expandByPoint(ys.max))}xi.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ft));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ft.fromBufferAttribute(o,c),l&&(Br.fromBufferAttribute(e,c),Ft.add(Br)),r=Math.max(r,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Ai(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new P,l[v]=new P;const c=new P,u=new P,h=new P,d=new fe,f=new fe,p=new fe,_=new P,m=new P;function g(v,T,R){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,T),h.fromBufferAttribute(i,R),d.fromBufferAttribute(s,v),f.fromBufferAttribute(s,T),p.fromBufferAttribute(s,R),u.sub(c),h.sub(c),f.sub(d),p.sub(d);const I=1/(f.x*p.y-p.x*f.y);isFinite(I)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(I),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(I),o[v].add(_),o[T].add(_),o[R].add(_),l[v].add(m),l[T].add(m),l[R].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let v=0,T=M.length;v<T;++v){const R=M[v],I=R.start,N=R.count;for(let L=I,D=I+N;L<D;L+=3)g(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const w=new P,S=new P,y=new P,E=new P;function A(v){y.fromBufferAttribute(r,v),E.copy(y);const T=o[v];w.copy(T),w.sub(y.multiplyScalar(y.dot(T))).normalize(),S.crossVectors(E,T);const I=S.dot(l[v])<0?-1:1;a.setXYZW(v,w.x,w.y,w.z,I)}for(let v=0,T=M.length;v<T;++v){const R=M[v],I=R.start,N=R.count;for(let L=I,D=I+N;L<D;L+=3)A(e.getX(L+0)),A(e.getX(L+1)),A(e.getX(L+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Ai(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new P,s=new P,a=new P,o=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,p),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,p=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let g=0;g<u;g++)d[p++]=c[f++]}return new Ai(d,u,h)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ti,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class c0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=rf,this.updateRanges=[],this.version=0,this.uuid=bn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const ni=new P;class fo{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)ni.fromBufferAttribute(this,t),ni.applyMatrix4(e),this.setXYZ(t,ni.x,ni.y,ni.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ni.fromBufferAttribute(this,t),ni.applyNormalMatrix(e),this.setXYZ(t,ni.x,ni.y,ni.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ni.fromBufferAttribute(this,t),ni.transformDirection(e),this.setXYZ(t,ni.x,ni.y,ni.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Vi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=rt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),r=rt(r,this.array),s=rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){ho("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Ai(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new fo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ho("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const nl=new P,u0=new P,h0=new Oe;class Gn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=nl.subVectors(i,t).cross(u0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(nl),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||h0.getNormalMatrix(e),r=this.coplanarPoint(nl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let d0=0;class Ln extends Mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=bn(),this.name="",this.type="Material",this.blending=Bs,this.side=_r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$d,this.blendDst=Kd,this.blendEquation=Jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zo,this.stencilZFail=zo,this.stencilZPass=zo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Le().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Gn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new fe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new fe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class hr extends Ln{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let zr;const bs=new P,kr=new P,Hr=new P,Gr=new fe,Ts=new fe,uf=new je,Ea=new P,Es=new P,wa=new P,bh=new fe,rl=new fe,Th=new fe;class Zr extends Lt{constructor(e=new hr){if(super(),this.isSprite=!0,this.type="Sprite",zr===void 0){zr=new ti;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new c0(t,5);zr.setIndex([0,1,2,0,2,3]),zr.setAttribute("position",new fo(i,3,0,!1)),zr.setAttribute("uv",new fo(i,2,3,!1))}this.geometry=zr,this.material=e,this.center=new fe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Je('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),kr.setFromMatrixScale(this.matrixWorld),uf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Hr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&kr.multiplyScalar(-Hr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;Aa(Ea.set(-.5,-.5,0),Hr,a,kr,r,s),Aa(Es.set(.5,-.5,0),Hr,a,kr,r,s),Aa(wa.set(.5,.5,0),Hr,a,kr,r,s),bh.set(0,0),rl.set(1,0),Th.set(1,1);let o=e.ray.intersectTriangle(Ea,Es,wa,!1,bs);if(o===null&&(Aa(Es.set(-.5,.5,0),Hr,a,kr,r,s),rl.set(0,1),o=e.ray.intersectTriangle(Ea,wa,Es,!1,bs),o===null))return;const l=e.ray.origin.distanceTo(bs);l<e.near||l>e.far||t.push({distance:l,point:bs.clone(),uv:Ni.getInterpolation(bs,Ea,Es,wa,bh,rl,Th,new fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Aa(n,e,t,i,r,s){Gr.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Ts.x=s*Gr.x-r*Gr.y,Ts.y=r*Gr.x+s*Gr.y):Ts.copy(Gr),n.copy(e),n.x+=Ts.x,n.y+=Ts.y,n.applyMatrix4(uf)}const _n=new P,sl=new P,Ca=new P,Ra=new P;class Ao{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_n.copy(this.origin).addScaledVector(this.direction,t),_n.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){sl.copy(e).add(t).multiplyScalar(.5),Ca.copy(t).sub(e).normalize(),Ra.copy(this.origin).sub(sl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ca),o=Ra.dot(this.direction),l=-Ra.dot(Ca),c=Ra.lengthSq(),u=Math.abs(1-a*a);let h,d,f,p;if(u>0)if(h=a*l-o,d=a*o-l,p=s*u,h>=0)if(d>=-p)if(d<=p){const _=1/u;h*=_,d*=_,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(sl).addScaledVector(Ca,d),f}intersectSphere(e,t){if(e.radius<0)return null;_n.subVectors(e.center,this.origin);const i=_n.dot(this.direction),r=_n.dot(_n)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,_n)!==null}intersectTriangle(e,t,i,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,h=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,_=t.y-a.y,m=t.z-a.z,g=i.x-a.x,M=i.y-a.y,w=i.z-a.z,S=Math.abs(l),y=Math.abs(c),E=Math.abs(u);let A,v,T,R,I,N,L,D,U,q,z,Q;if(S>=y&&S>=E?(T=l,N=h,U=p,Q=g,l>=0?(A=c,v=u,R=d,I=f,L=_,D=m,q=M,z=w):(A=u,v=c,R=f,I=d,L=m,D=_,q=w,z=M)):y>=E?(T=c,N=d,U=_,Q=M,c>=0?(A=u,v=l,R=f,I=h,L=m,D=p,q=w,z=g):(A=l,v=u,R=h,I=f,L=p,D=m,q=g,z=w)):(T=u,N=f,U=m,Q=w,u>=0?(A=l,v=c,R=h,I=d,L=p,D=_,q=g,z=M):(A=c,v=l,R=d,I=h,L=_,D=p,q=M,z=g)),T===0)return null;const X=A/T,Z=v/T,ee=1/T,ne=R-X*N,Se=I-Z*N,Be=L-X*U,Ue=D-Z*U,$e=q-X*Q,$=z-Z*Q,te=$e*Ue-$*Be,xe=ne*$-Se*$e,Ne=Be*Se-Ue*ne;if(r){if(te<0||xe<0||Ne<0)return null}else if((te<0||xe<0||Ne<0)&&(te>0||xe>0||Ne>0))return null;const _e=te+xe+Ne;if(_e===0)return null;const He=ee*(te*N+xe*U+Ne*Q);return(_e>0?He<0:He>0)?null:this.at(He/_e,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt extends Ln{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=$c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Eh=new je,nr=new Ao,Pa=new Tr,wh=new P,La=new P,Da=new P,Ia=new P,al=new P,Ua=new P,Ah=new P,Na=new P;class Xe extends Lt{constructor(e=new ti,t=new Qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ua.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(al.fromBufferAttribute(h,e),a?Ua.addScaledVector(al,u):Ua.addScaledVector(al.sub(t),u))}t.add(Ua)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Pa.copy(i.boundingSphere),Pa.applyMatrix4(s),nr.copy(e.ray).recast(e.near),!(Pa.containsPoint(nr.origin)===!1&&(nr.intersectSphere(Pa,wh)===null||nr.origin.distanceToSquared(wh)>(e.far-e.near)**2))&&(Eh.copy(s).invert(),nr.copy(e.ray).applyMatrix4(Eh),!(i.boundingBox!==null&&nr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,nr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=d.length;p<_;p++){const m=d[p],g=a[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=M,y=w;S<y;S+=3){const E=o.getX(S),A=o.getX(S+1),v=o.getX(S+2);r=Oa(this,g,e,i,c,u,h,E,A,v),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const p=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){const M=o.getX(m),w=o.getX(m+1),S=o.getX(m+2);r=Oa(this,a,e,i,c,u,h,M,w,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,_=d.length;p<_;p++){const m=d[p],g=a[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=M,y=w;S<y;S+=3){const E=S,A=S+1,v=S+2;r=Oa(this,g,e,i,c,u,h,E,A,v),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){const M=m,w=m+1,S=m+2;r=Oa(this,a,e,i,c,u,h,M,w,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function f0(n,e,t,i,r,s,a,o){let l;if(e.side===li?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===_r,o),l===null)return null;Na.copy(o),Na.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Na);return c<t.near||c>t.far?null:{distance:c,point:Na.clone(),object:n}}function Oa(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,La),n.getVertexPosition(l,Da),n.getVertexPosition(c,Ia);const u=f0(n,e,t,i,La,Da,Ia,Ah);if(u){const h=new P;Ni.getBarycoord(Ah,La,Da,Ia,h),r&&(u.uv=Ni.getInterpolatedAttribute(r,o,l,c,h,new fe)),s&&(u.uv1=Ni.getInterpolatedAttribute(s,o,l,c,h,new fe)),a&&(u.normal=Ni.getInterpolatedAttribute(a,o,l,c,h,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new P,materialIndex:0};Ni.getNormal(La,Da,Ia,d.normal),u.face=d,u.barycoord=h}return u}class hf extends zt{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Ht,u=Ht,h,d){super(null,a,o,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ch extends Ai{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Vr=new je,Rh=new je,Fa=[],Ph=new br,p0=new je,ws=new Xe,As=new Tr;class df extends Xe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ch(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,p0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new br),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Vr),Ph.copy(e.boundingBox).applyMatrix4(Vr),this.boundingBox.union(Ph)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Tr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Vr),As.copy(e.boundingSphere).applyMatrix4(Vr),this.boundingSphere.union(As)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(ws.geometry=this.geometry,ws.material=this.material,ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),As.copy(this.boundingSphere),As.applyMatrix4(i),e.ray.intersectsSphere(As)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Vr),Rh.multiplyMatrices(i,Vr),ws.matrixWorld=Rh,ws.raycast(e,Fa);for(let a=0,o=Fa.length;a<o;a++){const l=Fa[a];l.instanceId=s,l.object=this,t.push(l)}Fa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ch(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new hf(new Float32Array(r*this.count),r,this.count,su,Wi));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const rr=new Tr,m0=new fe(.5,.5),Ba=new P;class pu{constructor(e=new Gn,t=new Gn,i=new Gn,r=new Gn,s=new Gn,a=new Gn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=nn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],f=s[7],p=s[8],_=s[9],m=s[10],g=s[11],M=s[12],w=s[13],S=s[14],y=s[15];if(r[0].setComponents(c-a,f-u,g-p,y-M).normalize(),r[1].setComponents(c+a,f+u,g+p,y+M).normalize(),r[2].setComponents(c+o,f+h,g+_,y+w).normalize(),r[3].setComponents(c-o,f-h,g-_,y-w).normalize(),i)r[4].setComponents(l,d,m,S).normalize(),r[5].setComponents(c-l,f-d,g-m,y-S).normalize();else if(r[4].setComponents(c-l,f-d,g-m,y-S).normalize(),t===nn)r[5].setComponents(c+l,f+d,g+m,y+S).normalize();else if(t===Qs)r[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){rr.center.set(0,0,0);const t=m0.distanceTo(e.center);return rr.radius=.7071067811865476+t,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ba.x=r.normal.x>0?e.max.x:e.min.x,Ba.y=r.normal.y>0?e.max.y:e.min.y,Ba.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ba)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ff extends Ln{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const po=new P,mo=new P,Lh=new je,Cs=new Ao,za=new Tr,ol=new P,Dh=new P;class g0 extends Lt{constructor(e=new ti,t=new ff){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)po.fromBufferAttribute(t,r-1),mo.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=po.distanceTo(mo);e.setAttribute("lineDistance",new ui(i,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),za.copy(i.boundingSphere),za.applyMatrix4(r),za.radius+=s,e.ray.intersectsSphere(za)===!1)return;Lh.copy(r).invert(),Cs.copy(e.ray).applyMatrix4(Lh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=f,m=p-1;_<m;_+=c){const g=u.getX(_),M=u.getX(_+1),w=ka(this,e,Cs,l,g,M,_);w&&t.push(w)}if(this.isLineLoop){const _=u.getX(p-1),m=u.getX(f),g=ka(this,e,Cs,l,_,m,p-1);g&&t.push(g)}}else{const f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let _=f,m=p-1;_<m;_+=c){const g=ka(this,e,Cs,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){const _=ka(this,e,Cs,l,p-1,f,p-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ka(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(po.fromBufferAttribute(o,r),mo.fromBufferAttribute(o,s),t.distanceSqToSegment(po,mo,ol,Dh)>i)return;ol.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ol);if(!(c<e.near||c>e.far))return{distance:c,point:Dh.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}class _0 extends Ln{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ih=new je,Sc=new Ao,Ha=new Tr,Ga=new P;class v0 extends Lt{constructor(e=new ti,t=new _0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ha.copy(i.boundingSphere),Ha.applyMatrix4(r),Ha.radius+=s,e.ray.intersectsSphere(Ha)===!1)return;Ih.copy(r).invert(),Sc.copy(e.ray).applyMatrix4(Ih);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=d,_=f;p<_;p++){const m=c.getX(p);Ga.fromBufferAttribute(h,m),Uh(Ga,m,l,r,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let p=d,_=f;p<_;p++)Ga.fromBufferAttribute(h,p),Uh(Ga,p,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Uh(n,e,t,i,r,s,a){const o=Sc.distanceSqToPoint(n);if(o<t){const l=new P;Sc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class pf extends zt{constructor(e=[],t=vr,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class x0 extends zt{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ta extends zt{constructor(e,t,i=cn,r,s,a,o=Ht,l=Ht,c,u=An,h=1){if(u!==An&&u!==ur)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new du(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class S0 extends ta{constructor(e,t=cn,i=vr,r,s,a=Ht,o=Ht,l,c=An){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class mf extends zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Qn extends ti{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;p("z","y","x",-1,-1,i,t,e,a,s,0),p("z","y","x",1,-1,i,t,-e,a,s,1),p("x","z","y",1,1,e,i,t,r,a,2),p("x","z","y",1,-1,e,i,-t,r,a,3),p("x","y","z",1,-1,e,t,i,r,s,4),p("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ui(c,3)),this.setAttribute("normal",new ui(u,3)),this.setAttribute("uv",new ui(h,2));function p(_,m,g,M,w,S,y,E,A,v,T){const R=S/A,I=y/v,N=S/2,L=y/2,D=E/2,U=A+1,q=v+1;let z=0,Q=0;const X=new P;for(let Z=0;Z<q;Z++){const ee=Z*I-L;for(let ne=0;ne<U;ne++){const Se=ne*R-N;X[_]=Se*M,X[m]=ee*w,X[g]=D,c.push(X.x,X.y,X.z),X[_]=0,X[m]=0,X[g]=E>0?1:-1,u.push(X.x,X.y,X.z),h.push(ne/A),h.push(1-Z/v),z+=1}}for(let Z=0;Z<v;Z++)for(let ee=0;ee<A;ee++){const ne=d+ee+U*Z,Se=d+ee+U*(Z+1),Be=d+(ee+1)+U*(Z+1),Ue=d+(ee+1)+U*Z;l.push(ne,Se,Ue),l.push(Se,Be,Ue),Q+=6}o.addGroup(f,Q,T),f+=Q,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Dn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ie("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let a;t?a=t:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const u=i[r],d=i[r+1]-u,f=(a-u)/d;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new fe:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new P,r=[],s=[],a=[],o=new P,l=new je;for(let f=0;f<=e;f++){const p=f/e;r[f]=this.getTangentAt(p,new P)}s[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(r[f-1],r[f]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(Ge(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(Ge(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let p=1;p<=e;p++)s[p].applyMatrix4(l.makeRotationAxis(r[p],f*p)),a[p].crossVectors(r[p],s[p])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class gf extends Dn{constructor(e=0,t=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new fe){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class M0 extends gf{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function mu(){let n=0,e=0,t=0,i=0;function r(s,a,o,l){n=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let d=(a-s)/c-(o-s)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,f*=u,r(a,o,d,f)},calc:function(s){const a=s*s,o=a*s;return n+e*s+t*a+i*o}}}const Nh=new P,Oh=new P,ll=new mu,cl=new mu,ul=new mu;class gu extends Dn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new P){const i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(Oh.subVectors(r[0],r[1]).add(r[0]),c=Oh);const h=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(Nh.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Nh),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),ll.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,p,_,m),cl.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,p,_,m),ul.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,p,_,m)}else this.curveType==="catmullrom"&&(ll.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),cl.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),ul.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(ll.calc(l),cl.calc(l),ul.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new P().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Fh(n,e,t,i,r){const s=(i-e)*.5,a=(r-t)*.5,o=n*n,l=n*o;return(2*t-2*i+s+a)*l+(-3*t+3*i-2*s-a)*o+s*n+t}function y0(n,e){const t=1-n;return t*t*e}function b0(n,e){return 2*(1-n)*n*e}function T0(n,e){return n*n*e}function Hs(n,e,t,i){return y0(n,e)+b0(n,t)+T0(n,i)}function E0(n,e){const t=1-n;return t*t*t*e}function w0(n,e){const t=1-n;return 3*t*t*n*e}function A0(n,e){return 3*(1-n)*n*n*e}function C0(n,e){return n*n*n*e}function Gs(n,e,t,i,r){return E0(n,e)+w0(n,t)+A0(n,i)+C0(n,r)}class R0 extends Dn{constructor(e=new fe,t=new fe,i=new fe,r=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new fe){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Gs(e,r.x,s.x,a.x,o.x),Gs(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class P0 extends Dn{constructor(e=new P,t=new P,i=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new P){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Gs(e,r.x,s.x,a.x,o.x),Gs(e,r.y,s.y,a.y,o.y),Gs(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class L0 extends Dn{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class D0 extends Dn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class I0 extends Dn{constructor(e=new fe,t=new fe,i=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new fe){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(Hs(e,r.x,s.x,a.x),Hs(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _f extends Dn{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(Hs(e,r.x,s.x,a.x),Hs(e,r.y,s.y,a.y),Hs(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class U0 extends Dn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){const i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return i.set(Fh(o,l.x,c.x,u.x,h.x),Fh(o,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new fe().fromArray(r))}return this}}var N0=Object.freeze({__proto__:null,ArcCurve:M0,CatmullRomCurve3:gu,CubicBezierCurve:R0,CubicBezierCurve3:P0,EllipseCurve:gf,LineCurve:L0,LineCurve3:D0,QuadraticBezierCurve:I0,QuadraticBezierCurve3:_f,SplineCurve:U0});class It extends ti{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=e/o,d=t/l,f=[],p=[],_=[],m=[];for(let g=0;g<u;g++){const M=g*d-a;for(let w=0;w<c;w++){const S=w*h-s;p.push(S,-M,0),_.push(0,0,1),m.push(w/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<o;M++){const w=M+c*g,S=M+c*(g+1),y=M+1+c*(g+1),E=M+1+c*g;f.push(w,S,E),f.push(S,y,E)}this.setIndex(f),this.setAttribute("position",new ui(p,3)),this.setAttribute("normal",new ui(_,3)),this.setAttribute("uv",new ui(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new It(e.width,e.height,e.widthSegments,e.heightSegments)}}class _u extends ti{constructor(e=new _f(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new P,l=new P,c=new fe;let u=new P;const h=[],d=[],f=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new ui(h,3)),this.setAttribute("normal",new ui(d,3)),this.setAttribute("uv",new ui(f,2));function _(){for(let w=0;w<t;w++)m(w);m(s===!1?t:0),M(),g()}function m(w){u=e.getPointAt(w/t,u);const S=a.normals[w],y=a.binormals[w];for(let E=0;E<=r;E++){const A=E/r*Math.PI*2,v=Math.sin(A),T=-Math.cos(A);l.x=T*S.x+v*y.x,l.y=T*S.y+v*y.y,l.z=T*S.z+v*y.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=u.x+i*l.x,o.y=u.y+i*l.y,o.z=u.z+i*l.z,h.push(o.x,o.y,o.z)}}function g(){for(let w=1;w<=t;w++)for(let S=1;S<=r;S++){const y=(r+1)*(w-1)+(S-1),E=(r+1)*w+(S-1),A=(r+1)*w+S,v=(r+1)*(w-1)+S;p.push(y,E,v),p.push(E,A,v)}}function M(){for(let w=0;w<=t;w++)for(let S=0;S<=r;S++)c.x=w/t,c.y=S/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new _u(new N0[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function ls(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(Bh(r))r.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Bh(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function ri(n){const e={};for(let t=0;t<n.length;t++){const i=ls(n[t]);for(const r in i)e[r]=i[r]}return e}function Bh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function O0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function vf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const ia={clone:ls,merge:ri};var F0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,B0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Et extends Ln{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=F0,this.fragmentShader=B0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ls(e.uniforms),this.uniformsGroups=O0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new Le().setHex(r.value);break;case"v2":this.uniforms[i].value=new fe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new P().fromArray(r.value);break;case"v4":this.uniforms[i].value=new St().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Oe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new je().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class xf extends Et{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Mc extends Ln{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lo,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class z0 extends Ln{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lo,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=$c,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class k0 extends Ln{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class H0 extends Ln{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hl={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(zh(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!zh(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function zh(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class G0{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const V0=new G0;class vu{constructor(e){this.manager=e!==void 0?e:V0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}vu.DEFAULT_MATERIAL_NAME="__DEFAULT";const Wr=new WeakMap;class W0 extends vu{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=hl.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=Wr.get(a);h===void 0&&(h=[],Wr.set(a,h)),h.push({onLoad:t,onError:r})}return a}const o=js("img");function l(){u(),t&&t(this);const h=Wr.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}Wr.delete(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),hl.remove(`image:${e}`);const d=Wr.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onError&&p.onError(h)}Wr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),hl.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Sf extends vu{constructor(e){super(e)}load(e,t,i,r){const s=new zt,a=new W0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class xu extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const dl=new je,kh=new P,Hh=new P;class Mf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.mapType=yi,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pu,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;kh.setFromMatrixPosition(e.matrixWorld),t.position.copy(kh),Hh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){dl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(dl,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===Qs||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(dl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Va=new P,Wa=new gs,Ki=new P;class yf extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Va,Wa,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Va,Wa,Ki.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Va,Wa,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Va,Wa,Ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const kn=new P,Gh=new fe,Vh=new fe;class Bt extends yf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ea*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ea*2*Math.atan(Math.tan(zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(kn.x,kn.y).multiplyScalar(-e/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(kn.x,kn.y).multiplyScalar(-e/kn.z)}getViewSize(e,t){return this.getViewBounds(e,Gh,Vh),t.subVectors(Vh,Gh)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zs*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class X0 extends Mf{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0}}class Su extends xu{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new X0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Co extends yf{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class q0 extends Mf{constructor(){super(new Co(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Y0 extends xu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new q0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class $0 extends xu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Xr=-90,qr=1;class K0 extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Bt(Xr,qr,e,t);r.layers=this.layers,this.add(r);const s=new Bt(Xr,qr,e,t);s.layers=this.layers,this.add(s);const a=new Bt(Xr,qr,e,t);a.layers=this.layers,this.add(a);const o=new Bt(Xr,qr,e,t);o.layers=this.layers,this.add(o);const l=new Bt(Xr,qr,e,t);l.layers=this.layers,this.add(l);const c=new Bt(Xr,qr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===nn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class J0 extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Z0{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Q0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Q0(){this._document.hidden===!1&&this.reset()}const Wh=new je;class j0{constructor(e,t,i=0,r=1/0){this.ray=new Ao(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new fu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Wh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wh),this}intersectObject(e,t=!0,i=[]){return yc(e,this,i,t),i.sort(Xh),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)yc(e[r],this,i,t);return i.sort(Xh),i}}function Xh(n,e){return n.distance-e.distance}function yc(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)yc(s[a],e,t,!0)}}class eg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ie("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Ku=class Ku{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};Ku.prototype.isMatrix2=!0;let qh=Ku;function Yh(n,e,t,i){const r=tg(i);switch(t){case tf:return n*e;case su:return n*e/r.components*r.byteLength;case au:return n*e/r.components*r.byteLength;case xr:return n*e*2/r.components*r.byteLength;case ou:return n*e*2/r.components*r.byteLength;case nf:return n*e*3/r.components*r.byteLength;case Xi:return n*e*4/r.components*r.byteLength;case lu:return n*e*4/r.components*r.byteLength;case Za:case Qa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ja:case eo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xl:case Yl:return Math.max(n,16)*Math.max(e,8)/4;case Wl:case ql:return Math.max(n,8)*Math.max(e,8)/2;case $l:case Kl:case Zl:case Ql:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Jl:case ao:case jl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ec:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case tc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ic:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case nc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case rc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case sc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ac:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case oc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case lc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case cc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case uc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case hc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case dc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case fc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case pc:case mc:case gc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case _c:case vc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case oo:case xc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tg(n){switch(n){case yi:case Zd:return{byteLength:1,components:1};case Js:case Qd:case ci:return{byteLength:2,components:1};case nu:case ru:return{byteLength:2,components:4};case cn:case iu:case Wi:return{byteLength:4,components:1};case jd:case ef:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yc}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function bf(){let n=null,e=!1,t=null,i=null;function r(s,a){i=n.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function ig(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){const p=h[d],_=h[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){const _=h[f];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var ng=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ag=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,og=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ug=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,dg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_g=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Tg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Eg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,wg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ag=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Cg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Rg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ig="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ug=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ng=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Og=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Fg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Bg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$g=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Kg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Jg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,e_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,t_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,i_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,n_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,r_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,s_=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,a_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,o_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,u_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,h_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,d_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,f_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,m_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,g_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,__=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,v_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,S_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,y_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,b_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,w_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,A_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,C_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,R_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,P_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,L_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,D_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,I_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,U_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,N_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,O_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,B_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,z_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,k_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,H_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,G_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,V_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,X_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,q_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Y_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,K_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,J_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Z_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Q_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,j_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ev=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,iv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,av=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ov=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,uv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_v=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Tv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ev=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Av=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Cv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Dv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Iv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ov=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:ng,alphahash_pars_fragment:rg,alphamap_fragment:sg,alphamap_pars_fragment:ag,alphatest_fragment:og,alphatest_pars_fragment:lg,aomap_fragment:cg,aomap_pars_fragment:ug,batching_pars_vertex:hg,batching_vertex:dg,begin_vertex:fg,beginnormal_vertex:pg,bsdfs:mg,iridescence_fragment:gg,bumpmap_pars_fragment:_g,clipping_planes_fragment:vg,clipping_planes_pars_fragment:xg,clipping_planes_pars_vertex:Sg,clipping_planes_vertex:Mg,color_fragment:yg,color_pars_fragment:bg,color_pars_vertex:Tg,color_vertex:Eg,common:wg,cube_uv_reflection_fragment:Ag,defaultnormal_vertex:Cg,displacementmap_pars_vertex:Rg,displacementmap_vertex:Pg,emissivemap_fragment:Lg,emissivemap_pars_fragment:Dg,colorspace_fragment:Ig,colorspace_pars_fragment:Ug,envmap_fragment:Ng,envmap_common_pars_fragment:Og,envmap_pars_fragment:Fg,envmap_pars_vertex:Bg,envmap_physical_pars_fragment:Kg,envmap_vertex:zg,fog_vertex:kg,fog_pars_vertex:Hg,fog_fragment:Gg,fog_pars_fragment:Vg,gradientmap_pars_fragment:Wg,lightmap_pars_fragment:Xg,lights_lambert_fragment:qg,lights_lambert_pars_fragment:Yg,lights_pars_begin:$g,lights_toon_fragment:Jg,lights_toon_pars_fragment:Zg,lights_phong_fragment:Qg,lights_phong_pars_fragment:jg,lights_physical_fragment:e_,lights_physical_pars_fragment:t_,lights_fragment_begin:i_,lights_fragment_maps:n_,lights_fragment_end:r_,lightprobes_pars_fragment:s_,logdepthbuf_fragment:a_,logdepthbuf_pars_fragment:o_,logdepthbuf_pars_vertex:l_,logdepthbuf_vertex:c_,map_fragment:u_,map_pars_fragment:h_,map_particle_fragment:d_,map_particle_pars_fragment:f_,metalnessmap_fragment:p_,metalnessmap_pars_fragment:m_,morphinstance_vertex:g_,morphcolor_vertex:__,morphnormal_vertex:v_,morphtarget_pars_vertex:x_,morphtarget_vertex:S_,normal_fragment_begin:M_,normal_fragment_maps:y_,normal_pars_fragment:b_,normal_pars_vertex:T_,normal_vertex:E_,normalmap_pars_fragment:w_,clearcoat_normal_fragment_begin:A_,clearcoat_normal_fragment_maps:C_,clearcoat_pars_fragment:R_,iridescence_pars_fragment:P_,opaque_fragment:L_,packing:D_,premultiplied_alpha_fragment:I_,project_vertex:U_,dithering_fragment:N_,dithering_pars_fragment:O_,roughnessmap_fragment:F_,roughnessmap_pars_fragment:B_,shadowmap_pars_fragment:z_,shadowmap_pars_vertex:k_,shadowmap_vertex:H_,shadowmask_pars_fragment:G_,skinbase_vertex:V_,skinning_pars_vertex:W_,skinning_vertex:X_,skinnormal_vertex:q_,specularmap_fragment:Y_,specularmap_pars_fragment:$_,tonemapping_fragment:K_,tonemapping_pars_fragment:J_,transmission_fragment:Z_,transmission_pars_fragment:Q_,uv_pars_fragment:j_,uv_pars_vertex:ev,uv_vertex:tv,worldpos_vertex:iv,background_vert:nv,background_frag:rv,backgroundCube_vert:sv,backgroundCube_frag:av,cube_vert:ov,cube_frag:lv,depth_vert:cv,depth_frag:uv,distance_vert:hv,distance_frag:dv,equirect_vert:fv,equirect_frag:pv,linedashed_vert:mv,linedashed_frag:gv,meshbasic_vert:_v,meshbasic_frag:vv,meshlambert_vert:xv,meshlambert_frag:Sv,meshmatcap_vert:Mv,meshmatcap_frag:yv,meshnormal_vert:bv,meshnormal_frag:Tv,meshphong_vert:Ev,meshphong_frag:wv,meshphysical_vert:Av,meshphysical_frag:Cv,meshtoon_vert:Rv,meshtoon_frag:Pv,points_vert:Lv,points_frag:Dv,shadow_vert:Iv,shadow_frag:Uv,sprite_vert:Nv,sprite_frag:Ov},he={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},en={basic:{uniforms:ri([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:ri([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Le(0)},envMapIntensity:{value:1}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:ri([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:ri([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:ri([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Le(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:ri([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:ri([he.points,he.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:ri([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:ri([he.common,he.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:ri([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:ri([he.sprite,he.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distance:{uniforms:ri([he.common,he.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distance_vert,fragmentShader:ke.distance_frag},shadow:{uniforms:ri([he.lights,he.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};en.physical={uniforms:ri([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Xa={r:0,b:0,g:0},Fv=new je,Tf=new Oe;Tf.set(-1,0,0,0,1,0,0,0,1);function Bv(n,e,t,i,r,s){const a=new Le(0);let o=r===!0?0:1,l,c,u=null,h=0,d=null;function f(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){const S=M.backgroundBlurriness>0;w=e.get(w,S)}return w}function p(M){let w=!1;const S=f(M);S===null?m(a,o):S&&S.isColor&&(m(S,1),w=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,s):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(M,w){const S=f(w);S&&(S.isCubeTexture||S.mapping===wo)?(c===void 0&&(c=new Xe(new Qn(1,1,1),new Et({name:"BackgroundCubeMaterial",uniforms:ls(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Fv.makeRotationFromEuler(w.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Tf),c.material.toneMapped=Ye.getTransfer(S.colorSpace)!==it,(u!==S||h!==S.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,h=S.version,d=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Xe(new It(2,2),new Et({name:"BackgroundMaterial",uniforms:ls(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:_r,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(S.colorSpace)!==it,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||h!==S.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,h=S.version,d=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,w){M.getRGB(Xa,vf(n)),t.buffers.color.setClear(Xa.r,Xa.g,Xa.b,w,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,w=1){a.set(M),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:p,addToRenderList:_,dispose:g}}function zv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(I,N,L,D,U){let q=!1;const z=h(I,D,L,N);s!==z&&(s=z,c(s.object)),q=f(I,D,L,U),q&&p(I,D,L,U),U!==null&&e.update(U,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,S(I,N,L,D),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return n.createVertexArray()}function c(I){return n.bindVertexArray(I)}function u(I){return n.deleteVertexArray(I)}function h(I,N,L,D){const U=D.wireframe===!0;let q=i[N.id];q===void 0&&(q={},i[N.id]=q);const z=I.isInstancedMesh===!0?I.id:0;let Q=q[z];Q===void 0&&(Q={},q[z]=Q);let X=Q[L.id];X===void 0&&(X={},Q[L.id]=X);let Z=X[U];return Z===void 0&&(Z=d(l()),X[U]=Z),Z}function d(I){const N=[],L=[],D=[];for(let U=0;U<t;U++)N[U]=0,L[U]=0,D[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:L,attributeDivisors:D,object:I,attributes:{},index:null}}function f(I,N,L,D){const U=s.attributes,q=N.attributes;let z=0;const Q=L.getAttributes();for(const X in Q)if(Q[X].location>=0){const ee=U[X];let ne=q[X];if(ne===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(ne=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(ne=I.instanceColor)),ee===void 0||ee.attribute!==ne||ne&&ee.data!==ne.data)return!0;z++}return s.attributesNum!==z||s.index!==D}function p(I,N,L,D){const U={},q=N.attributes;let z=0;const Q=L.getAttributes();for(const X in Q)if(Q[X].location>=0){let ee=q[X];ee===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(ee=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(ee=I.instanceColor));const ne={};ne.attribute=ee,ee&&ee.data&&(ne.data=ee.data),U[X]=ne,z++}s.attributes=U,s.attributesNum=z,s.index=D}function _(){const I=s.newAttributes;for(let N=0,L=I.length;N<L;N++)I[N]=0}function m(I){g(I,0)}function g(I,N){const L=s.newAttributes,D=s.enabledAttributes,U=s.attributeDivisors;L[I]=1,D[I]===0&&(n.enableVertexAttribArray(I),D[I]=1),U[I]!==N&&(n.vertexAttribDivisor(I,N),U[I]=N)}function M(){const I=s.newAttributes,N=s.enabledAttributes;for(let L=0,D=N.length;L<D;L++)N[L]!==I[L]&&(n.disableVertexAttribArray(L),N[L]=0)}function w(I,N,L,D,U,q,z){z===!0?n.vertexAttribIPointer(I,N,L,U,q):n.vertexAttribPointer(I,N,L,D,U,q)}function S(I,N,L,D){_();const U=D.attributes,q=L.getAttributes(),z=N.defaultAttributeValues;for(const Q in q){const X=q[Q];if(X.location>=0){let Z=U[Q];if(Z===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor)),Z!==void 0){const ee=Z.normalized,ne=Z.itemSize,Se=e.get(Z);if(Se===void 0)continue;const Be=Se.buffer,Ue=Se.type,$e=Se.bytesPerElement,$=Ue===n.INT||Ue===n.UNSIGNED_INT||Z.gpuType===iu;if(Z.isInterleavedBufferAttribute){const te=Z.data,xe=te.stride,Ne=Z.offset;if(te.isInstancedInterleavedBuffer){for(let _e=0;_e<X.locationSize;_e++)g(X.location+_e,te.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let _e=0;_e<X.locationSize;_e++)m(X.location+_e);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let _e=0;_e<X.locationSize;_e++)w(X.location+_e,ne/X.locationSize,Ue,ee,xe*$e,(Ne+ne/X.locationSize*_e)*$e,$)}else{if(Z.isInstancedBufferAttribute){for(let te=0;te<X.locationSize;te++)g(X.location+te,Z.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let te=0;te<X.locationSize;te++)m(X.location+te);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let te=0;te<X.locationSize;te++)w(X.location+te,ne/X.locationSize,Ue,ee,ne*$e,ne/X.locationSize*te*$e,$)}}else if(z!==void 0){const ee=z[Q];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv(X.location,ee);break;case 3:n.vertexAttrib3fv(X.location,ee);break;case 4:n.vertexAttrib4fv(X.location,ee);break;default:n.vertexAttrib1fv(X.location,ee)}}}}M()}function y(){T();for(const I in i){const N=i[I];for(const L in N){const D=N[L];for(const U in D){const q=D[U];for(const z in q)u(q[z].object),delete q[z];delete D[U]}}delete i[I]}}function E(I){if(i[I.id]===void 0)return;const N=i[I.id];for(const L in N){const D=N[L];for(const U in D){const q=D[U];for(const z in q)u(q[z].object),delete q[z];delete D[U]}}delete i[I.id]}function A(I){for(const N in i){const L=i[N];for(const D in L){const U=L[D];if(U[I.id]===void 0)continue;const q=U[I.id];for(const z in q)u(q[z].object),delete q[z];delete U[I.id]}}}function v(I){for(const N in i){const L=i[N],D=I.isInstancedMesh===!0?I.id:0,U=L[D];if(U!==void 0){for(const q in U){const z=U[q];for(const Q in z)u(z[Q].object),delete z[Q];delete U[q]}delete L[D],Object.keys(L).length===0&&delete i[N]}}}function T(){R(),a=!0,s!==r&&(s=r,c(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:R,dispose:y,releaseStatesOfGeometry:E,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function kv(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];t.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Hv(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==Xi&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const v=A===ci&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==yi&&A!==Wi&&!v&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ie("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:S,maxSamples:y,samples:E}}function Gv(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Gn,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||r;return r=d,i=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const p=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,g=n.get(h);if(!r||p===null||p.length===0||s&&!m)s?u(null):c();else{const M=s?0:i,w=M*4;let S=g.clippingState||null;l.value=S,S=u(p,d,w,f);for(let y=0;y!==w;++y)S[y]=t[y];g.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,p){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,p!==!0||m===null){const g=f+_*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<g)&&(m=new Float32Array(g));for(let w=0,S=f;w!==_;++w,S+=4)a.copy(h[w]).applyMatrix4(M,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const Qr=4,Vv=6,Wv=20,Xv=256,Rs=new Co,$h=new Le;let fl=null,pl=0,ml=0,gl=!1;const qv=new P,sr=new P;class bc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=qv}=s;fl=this._renderer.getRenderTarget(),pl=this._renderer.getActiveCubeFace(),ml=this._renderer.getActiveMipmapLevel(),gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(fl,pl,ml),this._renderer.xr.enabled=gl,e.scissorTest=!1,Yr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vr||e.mapping===os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fl=this._renderer.getRenderTarget(),pl=this._renderer.getActiveCubeFace(),ml=this._renderer.getActiveMipmapLevel(),gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:ci,format:Xi,colorSpace:co,depthBuffer:!1},r=Kh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kh(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Yv(s)),this._blurMaterial=Kv(s,e,t),this._ggxMaterial=$v(s,e,t)}return r}_compileMaterial(e){const t=new Xe(new ti,e);this._renderer.compile(t,Rs)}_sceneToCubeUV(e,t,i,r,s){const l=new Bt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor($h),h.toneMapping=ln,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xe(new Qn,new Qt({name:"PMREM.Background",side:li,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let g=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,g=!0):(m.color.copy($h),g=!0);for(let w=0;w<6;w++){const S=w%3;S===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[w],s.y,s.z)):S===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[w]));const y=this._cubeSize;Yr(r,S*y,w>2?y:0,y,y),h.setRenderTarget(r),g&&h.render(_,l),h.render(e,l)}h.toneMapping=f,h.autoClear=d,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===vr||e.mapping===os;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jh());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Yr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Rs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=c*1.25,f=h*d,{_lodMax:p}=this,_=this._sizeLods[i],m=3*_*(i>p-Qr?i-p+Qr:0),g=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,Yr(s,m,g,3*_,2*_),r.setRenderTarget(s),r.render(o,Rs),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-i,Yr(e,m,g,3*_,2*_),r.setRenderTarget(e),r.render(o,Rs)}_blur(e,t,i,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,i,a),this._blurPass(s,e,i,i,a)}_blurPass(e,t,i,r,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[r];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;const u=this._sizeLods[r],h=3*u*(r>this._lodMax-Qr?r-this._lodMax+Qr:0),d=4*(this._cubeSize-u);Yr(t,h,d,3*u,2*u),a.setRenderTarget(t),a.render(l,Rs)}}function Yv(n){const e=[],t=[];let i=n;const r=n-Qr+1+Vv;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,d=6,f=3,p=new Float32Array(f*d*h),_=new Float32Array(f*d*h);for(let g=0;g<h;g++){const M=g%3*2/3-1,w=g>2?0:-1,S=[M,w,0,M+2/3,w,0,M+2/3,w+1,0,M,w,0,M+2/3,w+1,0,M,w+1,0];p.set(S,f*d*g);for(let y=0;y<d;y++){const E=u[y*2]*2-1,A=u[y*2+1]*2-1;g===0?sr.set(1,A,E):g===1?sr.set(-E,1,-A):g===2?sr.set(-E,A,1):g===3?sr.set(-1,A,-E):g===4?sr.set(-E,-1,A):sr.set(E,A,-1),sr.toArray(_,(g*d+y)*f)}}const m=new ti;m.setAttribute("position",new Ai(p,f)),m.setAttribute("outputDirection",new Ai(_,f)),t.push(new Xe(m,null)),i>Qr&&i--}return{lodMeshes:t,sizeLods:e}}function Kh(n,e,t){const i=new jt(n,e,t);return i.texture.mapping=wo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Yr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function $v(n,e,t){return new Et({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Xv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ro(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:on,depthTest:!1,depthWrite:!1})}function Kv(n,e,t){return new Et({name:"SphericalGaussianBlur",defines:{SAMPLES:Wv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ro(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:on,depthTest:!1,depthWrite:!1})}function Jh(){return new Et({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:on,depthTest:!1,depthWrite:!1})}function Zh(){return new Et({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:on,depthTest:!1,depthWrite:!1})}function Ro(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Ef extends jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new pf(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Qn(5,5,5),s=new Et({name:"CubemapFromEquirect",uniforms:ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:li,blending:on});s.uniforms.tEquirect.value=t;const a=new Xe(r,s),o=t.minFilter;return t.minFilter===cr&&(t.minFilter=Zt),new K0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function Jv(n){let e=new WeakMap,t=new WeakMap,i=null;function r(d,f=!1){return d==null?null:f?a(d):s(d)}function s(d){if(d&&d.isTexture){const f=d.mapping;if(f===Oo||f===Fo)if(e.has(d)){const p=e.get(d).texture;return o(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const _=new Ef(p.height);return _.fromEquirectangularTexture(n,d),e.set(d,_),d.addEventListener("dispose",c),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const f=d.mapping,p=f===Oo||f===Fo,_=f===vr||f===os;if(p||_){let m=t.get(d);const g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return i===null&&(i=new bc(n)),m=p?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const M=d.image;return p&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new bc(n)),m=p?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function o(d,f){return f===Oo?d.mapping=vr:f===Fo&&(d.mapping=os),d}function l(d){let f=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&f++;return f===p}function c(d){const f=d.target;f.removeEventListener("dispose",c);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(d){const f=d.target;f.removeEventListener("dispose",u);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function Zv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ts("WebGLRenderer: "+i+" extension not supported."),r}}}function Qv(n,e,t,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",a),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],n.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,p=h.attributes.position;let _=0;if(p===void 0)return;if(f!==null){const M=f.array;_=f.version;for(let w=0,S=M.length;w<S;w+=3){const y=M[w+0],E=M[w+1],A=M[w+2];d.push(y,E,E,A,A,y)}}else{const M=p.array;_=p.version;for(let w=0,S=M.length/3-1;w<S;w+=3){const y=w+0,E=w+1,A=w+2;d.push(y,E,E,A,A,y)}}const m=new(p.count>=65535?cf:lf)(d,1);m.version=_;const g=s.get(h);g&&e.remove(g),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function jv(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*a),t.update(d,i,1)}function c(h,d,f){f!==0&&(n.drawElementsInstanced(i,d,s,h*a,f),t.update(d,i,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,f);let _=0;for(let m=0;m<f;m++)_+=d[m];t.update(_,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function ex(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:Je("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function tx(n,e,t){const i=new WeakMap,r=new St;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let R=function(){v.dispose(),i.delete(o),o.removeEventListener("dispose",R)};var f=R;d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let S=0;p===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let y=o.attributes.position.count*S,E=1;y>e.maxTextureSize&&(E=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const A=new Float32Array(y*E*4*h),v=new af(A,y,E,h);v.type=Wi,v.needsUpdate=!0;const T=S*4;for(let I=0;I<h;I++){const N=g[I],L=M[I],D=w[I],U=y*E*4*I;for(let q=0;q<N.count;q++){const z=q*T;p===!0&&(r.fromBufferAttribute(N,q),A[U+z+0]=r.x,A[U+z+1]=r.y,A[U+z+2]=r.z,A[U+z+3]=0),_===!0&&(r.fromBufferAttribute(L,q),A[U+z+4]=r.x,A[U+z+5]=r.y,A[U+z+6]=r.z,A[U+z+7]=0),m===!0&&(r.fromBufferAttribute(D,q),A[U+z+8]=r.x,A[U+z+9]=r.y,A[U+z+10]=r.z,A[U+z+11]=D.itemSize===4?r.w:1)}}d={count:h,texture:v,size:new fe(y,E)},i.set(o,d),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let m=0;m<c.length;m++)p+=c[m];const _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function ix(n,e,t,i,r){let s=new WeakMap;function a(c){const u=r.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return d}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const nx={[Kc]:"LINEAR_TONE_MAPPING",[Jc]:"REINHARD_TONE_MAPPING",[Zc]:"CINEON_TONE_MAPPING",[Qc]:"ACES_FILMIC_TONE_MAPPING",[eu]:"AGX_TONE_MAPPING",[tu]:"NEUTRAL_TONE_MAPPING",[jc]:"CUSTOM_TONE_MAPPING"};function rx(n,e,t,i,r,s){const a=new jt(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new ti;c.setAttribute("position",new ui([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ui([0,2,0,0,2,0],2));const u=new xf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Xe(c,u),d=new Co(-1,1,1,-1,0,1);let f=null,p=null,_=!1,m,g=null,M=[],w=!1;this.setSize=function(S,y){a.setSize(S,y),o!==null&&o.setSize(S,y),l!==null&&l.setSize(S,y);for(let E=0;E<M.length;E++){const A=M[E];A.setSize&&A.setSize(S,y)}},this.setEffects=function(S){M=S,w=M.length>0&&M[0].isRenderPass===!0;const y=a.width,E=a.height;M.length>0&&o===null&&(o=new jt(y,E,{type:ci,depthBuffer:!1,stencilBuffer:!1}),l=new jt(y,E,{type:ci,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<M.length;A++){const v=M[A];v.setSize&&v.setSize(y,E)}},this.begin=function(S,y){if(_||S.toneMapping===ln&&M.length===0)return!1;if(g=y,y!==null){const E=y.width,A=y.height;(a.width!==E||a.height!==A)&&this.setSize(E,A)}return w===!1&&S.setRenderTarget(a),m=S.toneMapping,S.toneMapping=ln,!0},this.hasRenderPass=function(){return w},this.end=function(S,y){S.toneMapping=m,_=!0;let E=a,A=o;for(let v=0;v<M.length;v++){const T=M[v];T.enabled!==!1&&(T.render(S,A,E,y),T.needsSwap!==!1&&(E=A,A=A===o?l:o))}if(f!==S.outputColorSpace||p!==S.toneMapping){f=S.outputColorSpace,p=S.toneMapping,u.defines={},Ye.getTransfer(f)===it&&(u.defines.SRGB_TRANSFER="");const v=nx[p];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,S.setRenderTarget(g),S.render(h,d),g=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const wf=new zt,Tc=new ta(1,1),Af=new af,Cf=new Qm,Rf=new pf,Qh=[],jh=[],ed=new Float32Array(16),td=new Float32Array(9),id=new Float32Array(4);function _s(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Qh[r];if(s===void 0&&(s=new Float32Array(r),Qh[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Ut(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Nt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Po(n,e){let t=jh[e];t===void 0&&(t=new Int32Array(e),jh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function sx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ax(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2fv(this.addr,e),Nt(t,e)}}function ox(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;n.uniform3fv(this.addr,e),Nt(t,e)}}function lx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4fv(this.addr,e),Nt(t,e)}}function cx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,i))return;id.set(i),n.uniformMatrix2fv(this.addr,!1,id),Nt(t,i)}}function ux(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,i))return;td.set(i),n.uniformMatrix3fv(this.addr,!1,td),Nt(t,i)}}function hx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,i))return;ed.set(i),n.uniformMatrix4fv(this.addr,!1,ed),Nt(t,i)}}function dx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function fx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2iv(this.addr,e),Nt(t,e)}}function px(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;n.uniform3iv(this.addr,e),Nt(t,e)}}function mx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4iv(this.addr,e),Nt(t,e)}}function gx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function _x(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2uiv(this.addr,e),Nt(t,e)}}function vx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;n.uniform3uiv(this.addr,e),Nt(t,e)}}function xx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4uiv(this.addr,e),Nt(t,e)}}function Sx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Tc.compareFunction=t.isReversedDepthBuffer()?uu:cu,s=Tc):s=wf,t.setTexture2D(e||s,r)}function Mx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Cf,r)}function yx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Rf,r)}function bx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Af,r)}function Tx(n){switch(n){case 5126:return sx;case 35664:return ax;case 35665:return ox;case 35666:return lx;case 35674:return cx;case 35675:return ux;case 35676:return hx;case 5124:case 35670:return dx;case 35667:case 35671:return fx;case 35668:case 35672:return px;case 35669:case 35673:return mx;case 5125:return gx;case 36294:return _x;case 36295:return vx;case 36296:return xx;case 35678:case 36198:case 36298:case 36306:case 35682:return Sx;case 35679:case 36299:case 36307:return Mx;case 35680:case 36300:case 36308:case 36293:return yx;case 36289:case 36303:case 36311:case 36292:return bx}}function Ex(n,e){n.uniform1fv(this.addr,e)}function wx(n,e){const t=_s(e,this.size,2);n.uniform2fv(this.addr,t)}function Ax(n,e){const t=_s(e,this.size,3);n.uniform3fv(this.addr,t)}function Cx(n,e){const t=_s(e,this.size,4);n.uniform4fv(this.addr,t)}function Rx(n,e){const t=_s(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Px(n,e){const t=_s(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Lx(n,e){const t=_s(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Dx(n,e){n.uniform1iv(this.addr,e)}function Ix(n,e){n.uniform2iv(this.addr,e)}function Ux(n,e){n.uniform3iv(this.addr,e)}function Nx(n,e){n.uniform4iv(this.addr,e)}function Ox(n,e){n.uniform1uiv(this.addr,e)}function Fx(n,e){n.uniform2uiv(this.addr,e)}function Bx(n,e){n.uniform3uiv(this.addr,e)}function zx(n,e){n.uniform4uiv(this.addr,e)}function kx(n,e,t){const i=this.cache,r=e.length,s=Po(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),Nt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Tc:a=wf;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Hx(n,e,t){const i=this.cache,r=e.length,s=Po(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Cf,s[a])}function Gx(n,e,t){const i=this.cache,r=e.length,s=Po(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Rf,s[a])}function Vx(n,e,t){const i=this.cache,r=e.length,s=Po(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Af,s[a])}function Wx(n){switch(n){case 5126:return Ex;case 35664:return wx;case 35665:return Ax;case 35666:return Cx;case 35674:return Rx;case 35675:return Px;case 35676:return Lx;case 5124:case 35670:return Dx;case 35667:case 35671:return Ix;case 35668:case 35672:return Ux;case 35669:case 35673:return Nx;case 5125:return Ox;case 36294:return Fx;case 36295:return Bx;case 36296:return zx;case 35678:case 36198:case 36298:case 36306:case 35682:return kx;case 35679:case 36299:case 36307:return Hx;case 35680:case 36300:case 36308:case 36293:return Gx;case 36289:case 36303:case 36311:case 36292:return Vx}}class Xx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Tx(t.type)}}class qx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Wx(t.type)}}class Yx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const _l=/(\w+)(\])?(\[|\.)?/g;function nd(n,e){n.seq.push(e),n.map[e.id]=e}function $x(n,e,t){const i=n.name,r=i.length;for(_l.lastIndex=0;;){const s=_l.exec(i),a=_l.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){nd(t,c===void 0?new Xx(o,n,e):new qx(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new Yx(o),nd(t,h)),t=h}}}class to{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);$x(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function rd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Kx=37297;let Jx=0;function Zx(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const sd=new Oe;function Qx(n){Ye._getMatrix(sd,Ye.workingColorSpace,n);const e=`mat3( ${sd.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(n)){case uo:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ad(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Zx(n.getShaderSource(e),o)}else return s}function jx(n,e){const t=Qx(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const eS={[Kc]:"Linear",[Jc]:"Reinhard",[Zc]:"Cineon",[Qc]:"ACESFilmic",[eu]:"AgX",[tu]:"Neutral",[jc]:"Custom"};function tS(n,e){const t=eS[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const qa=new P;function iS(){Ye.getLuminanceCoefficients(qa);const n=qa.x.toFixed(4),e=qa.y.toFixed(4),t=qa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Us).join(`
`)}function rS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function sS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Us(n){return n!==""}function od(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ld(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ec(n){return n.replace(aS,lS)}const oS=new Map;function lS(n,e){let t=ke[e];if(t===void 0){const i=oS.get(e);if(i!==void 0)t=ke[i],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ec(t)}const cS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cd(n){return n.replace(cS,uS)}function uS(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ud(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const hS={[Ja]:"SHADOWMAP_TYPE_PCF",[Is]:"SHADOWMAP_TYPE_VSM"};function dS(n){return hS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const fS={[vr]:"ENVMAP_TYPE_CUBE",[os]:"ENVMAP_TYPE_CUBE",[wo]:"ENVMAP_TYPE_CUBE_UV"};function pS(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":fS[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const mS={[os]:"ENVMAP_MODE_REFRACTION"};function gS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":mS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const _S={[$c]:"ENVMAP_BLENDING_MULTIPLY",[mm]:"ENVMAP_BLENDING_MIX",[gm]:"ENVMAP_BLENDING_ADD"};function vS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":_S[n.combine]||"ENVMAP_BLENDING_NONE"}function xS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function SS(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=dS(t),c=pS(t),u=gS(t),h=vS(t),d=xS(t),f=nS(t),p=rS(s),_=r.createProgram();let m,g,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Us).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Us).join(`
`),g.length>0&&(g+=`
`)):(m=[ud(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),g=[ud(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ln?"#define TONE_MAPPING":"",t.toneMapping!==ln?ke.tonemapping_pars_fragment:"",t.toneMapping!==ln?tS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,jx("linearToOutputTexel",t.outputColorSpace),iS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Us).join(`
`)),a=Ec(a),a=od(a,t),a=ld(a,t),o=Ec(o),o=od(o,t),o=ld(o,t),a=cd(a),o=cd(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const w=M+m+a,S=M+g+o,y=rd(r,r.VERTEX_SHADER,w),E=rd(r,r.FRAGMENT_SHADER,S);r.attachShader(_,y),r.attachShader(_,E),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(I){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(_)||"",L=r.getShaderInfoLog(y)||"",D=r.getShaderInfoLog(E)||"",U=N.trim(),q=L.trim(),z=D.trim();let Q=!0,X=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,y,E);else{const Z=ad(r,y,"vertex"),ee=ad(r,E,"fragment");Je("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+U+`
`+Z+`
`+ee)}else U!==""?Ie("WebGLProgram: Program Info Log:",U):(q===""||z==="")&&(X=!1);X&&(I.diagnostics={runnable:Q,programLog:U,vertexShader:{log:q,prefix:m},fragmentShader:{log:z,prefix:g}})}r.deleteShader(y),r.deleteShader(E),v=new to(r,_),T=sS(r,_)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(_,Kx)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Jx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=E,this}let MS=0;class yS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new bS(e),t.set(e,i)),i}}class bS{constructor(e){this.id=MS++,this.code=e,this.usedTimes=0}}function TS(n){return n===xr||n===ao||n===oo}function ES(n,e,t,i,r,s){const a=new fu,o=new yS,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer;let d=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,T,R,I,N,L){const D=I.fog,U=N.geometry,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Q=e.get(v.envMap||q,z),X=Q&&Q.mapping===wo?Q.image.height:null,Z=f[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&Ie("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const ee=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ne=ee!==void 0?ee.length:0;let Se=0;U.morphAttributes.position!==void 0&&(Se=1),U.morphAttributes.normal!==void 0&&(Se=2),U.morphAttributes.color!==void 0&&(Se=3);let Be,Ue,$e,$;if(Z){const ut=en[Z];Be=ut.vertexShader,Ue=ut.fragmentShader}else{Be=v.vertexShader,Ue=v.fragmentShader;const ut=o.getVertexShaderStage(v),et=o.getFragmentShaderStage(v);o.update(v,ut,et),$e=ut.id,$=et.id}const te=n.getRenderTarget(),xe=n.state.buffers.depth.getReversed(),Ne=N.isInstancedMesh===!0,_e=N.isBatchedMesh===!0,He=!!v.map,Dt=!!v.matcap,Ve=!!Q,Qe=!!v.aoMap,ct=!!v.lightMap,qe=!!v.bumpMap&&v.wireframe===!1,pt=!!v.normalMap,Ot=!!v.displacementMap,hi=!!v.emissiveMap,gt=!!v.metalnessMap,wt=!!v.roughnessMap,B=v.anisotropy>0,Vt=v.clearcoat>0,nt=v.dispersion>0,C=v.retroreflectivity>0,x=v.iridescence>0,k=v.sheen>0,V=v.transmission>0,Y=B&&!!v.anisotropyMap,re=Vt&&!!v.clearcoatMap,se=Vt&&!!v.clearcoatNormalMap,K=Vt&&!!v.clearcoatRoughnessMap,j=x&&!!v.iridescenceMap,ae=x&&!!v.iridescenceThicknessMap,Ce=k&&!!v.sheenColorMap,ue=k&&!!v.sheenRoughnessMap,oe=!!v.specularMap,Re=!!v.specularColorMap,De=!!v.specularIntensityMap,Fe=V&&!!v.transmissionMap,F=V&&!!v.thicknessMap,le=!!v.gradientMap,J=!!v.alphaMap,ce=v.alphaTest>0,me=!!v.alphaHash,ie=!!v.extensions;let Pe=ln;v.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Pe=n.toneMapping);const be={shaderID:Z,shaderType:v.type,shaderName:v.name,vertexShader:Be,fragmentShader:Ue,defines:v.defines,customVertexShaderID:$e,customFragmentShaderID:$,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:_e,batchingColor:_e&&N._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&N.instanceColor!==null,instancingMorph:Ne&&N.morphTexture!==null,outputColorSpace:te===null?n.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:He,matcap:Dt,envMap:Ve,envMapMode:Ve&&Q.mapping,envMapCubeUVHeight:X,aoMap:Qe,lightMap:ct,bumpMap:qe,normalMap:pt,displacementMap:Ot,emissiveMap:hi,normalMapObjectSpace:pt&&v.normalMapType===xm,normalMapTangentSpace:pt&&v.normalMapType===lo,packedNormalMap:pt&&v.normalMapType===lo&&TS(v.normalMap.format),metalnessMap:gt,roughnessMap:wt,anisotropy:B,anisotropyMap:Y,clearcoat:Vt,clearcoatMap:re,clearcoatNormalMap:se,clearcoatRoughnessMap:K,dispersion:nt,retroreflection:C,iridescence:x,iridescenceMap:j,iridescenceThicknessMap:ae,sheen:k,sheenColorMap:Ce,sheenRoughnessMap:ue,specularMap:oe,specularColorMap:Re,specularIntensityMap:De,transmission:V,transmissionMap:Fe,thicknessMap:F,gradientMap:le,opaque:v.transparent===!1&&v.blending===Bs&&v.alphaToCoverage===!1,alphaMap:J,alphaTest:ce,alphaHash:me,combine:v.combine,mapUv:He&&p(v.map.channel),aoMapUv:Qe&&p(v.aoMap.channel),lightMapUv:ct&&p(v.lightMap.channel),bumpMapUv:qe&&p(v.bumpMap.channel),normalMapUv:pt&&p(v.normalMap.channel),displacementMapUv:Ot&&p(v.displacementMap.channel),emissiveMapUv:hi&&p(v.emissiveMap.channel),metalnessMapUv:gt&&p(v.metalnessMap.channel),roughnessMapUv:wt&&p(v.roughnessMap.channel),anisotropyMapUv:Y&&p(v.anisotropyMap.channel),clearcoatMapUv:re&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:se&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:ue&&p(v.sheenRoughnessMap.channel),specularMapUv:oe&&p(v.specularMap.channel),specularColorMapUv:Re&&p(v.specularColorMap.channel),specularIntensityMapUv:De&&p(v.specularIntensityMap.channel),transmissionMapUv:Fe&&p(v.transmissionMap.channel),thicknessMapUv:F&&p(v.thicknessMap.channel),alphaMapUv:J&&p(v.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(pt||B),vertexNormals:!!U.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!U.attributes.uv&&(He||J),fog:!!D,useFog:v.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||U.attributes.normal===void 0&&pt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:xe,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:Se,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:Pe,decodeVideoTexture:He&&v.map.isVideoTexture===!0&&Ye.getTransfer(v.map.colorSpace)===it,decodeVideoTextureEmissive:hi&&v.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(v.emissiveMap.colorSpace)===it,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Mn,flipSided:v.side===li,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ie&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&v.extensions.multiDraw===!0||_e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return be.vertexUv1s=l.has(1),be.vertexUv2s=l.has(2),be.vertexUv3s=l.has(3),l.clear(),be}function m(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const R in v.defines)T.push(R),T.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(g(T,v),M(T,v),T.push(n.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function g(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function M(v,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function w(v){const T=f[v.type];let R;if(T){const I=en[T];R=ia.clone(I.uniforms)}else R=v.uniforms;return R}function S(v,T){let R=u.get(T);return R!==void 0?++R.usedTimes:(R=new SS(n,T,v,r),c.push(R),u.set(T,R)),R}function y(v){if(--v.usedTimes===0){const T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function E(v){o.remove(v)}function A(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:w,acquireProgram:S,releaseProgram:y,releaseShaderCache:E,programs:c,dispose:A}}function wS(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function AS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function hd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function dd(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,p,_,m,g){let M=n[e];return M===void 0?(M={id:d.id,object:d,geometry:f,material:p,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:m,group:g},n[e]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=p,M.materialVariant=a(d),M.groupOrder=_,M.renderOrder=d.renderOrder,M.z=m,M.group=g),e++,M}function l(d,f,p,_,m,g,M){M.reversedDepth===!0&&(m=-m);const w=o(d,f,p,_,m,g);p.transmission>0?i.push(w):p.transparent===!0?r.push(w):t.push(w)}function c(d,f,p,_,m,g){const M=o(d,f,p,_,m,g);p.transmission>0?i.unshift(M):p.transparent===!0?r.unshift(M):t.unshift(M)}function u(d,f){t.length>1&&t.sort(d||AS),i.length>1&&i.sort(f||hd),r.length>1&&r.sort(f||hd)}function h(){for(let d=e,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function CS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new dd,n.set(i,[a])):r>=s.length?(a=new dd,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function RS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new Le};break;case"SpotLight":t={position:new P,direction:new P,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function PS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let LS=0;function DS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function IS(n){const e=new RS,t=PS(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);const r=new P,s=new je,a=new je;function o(c){let u=0,h=0,d=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let f=0,p=0,_=0,m=0,g=0,M=0,w=0,S=0,y=0,E=0,A=0,v=0,T=0,R=0;c.sort(DS);for(let N=0,L=c.length;N<L;N++){const D=c[N],U=D.color,q=D.intensity,z=D.distance;let Q=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===xr?Q=D.shadow.map.texture:Q=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=U.r*q,h+=U.g*q,d+=U.b*q;else if(D.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(D.sh.coefficients[X],q);R++}else if(D.isSunLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Z=D.shadow,ee=t.get(D);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),i.sunShadow[p]=ee,i.sunShadowMap[p]=Q;const ne=Z.getViewportCount();for(let Se=0;Se<ne;Se++)i.sunShadowMatrix[_+Se]=Z.getMatrix(Se),i.sunShadowCascade[_+Se]=Z._cascadeData[Se];_+=ne,p++}i.sun[f]=X,f++}else if(D.isDirectionalLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Z=D.shadow,ee=t.get(D);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,i.directionalShadow[m]=ee,i.directionalShadowMap[m]=Q,i.directionalShadowMatrix[m]=D.shadow.matrix,y++}i.directional[m]=X,m++}else if(D.isSpotLight){const X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(U).multiplyScalar(q),X.distance=z,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,i.spot[M]=X;const Z=D.shadow;if(D.map&&(i.spotLightMap[v]=D.map,v++,Z.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[M]=Z.matrix,D.castShadow){const ee=t.get(D);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,i.spotShadow[M]=ee,i.spotShadowMap[M]=Q,A++}M++}else if(D.isRectAreaLight){const X=e.get(D);X.color.copy(U).multiplyScalar(q),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),i.rectArea[w]=X,w++}else if(D.isPointLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const Z=D.shadow,ee=t.get(D);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,ee.shadowCameraNear=Z.camera.near,ee.shadowCameraFar=Z.camera.far,i.pointShadow[g]=ee,i.pointShadowMap[g]=Q,i.pointShadowMatrix[g]=D.shadow.matrix,E++}i.point[g]=X,g++}else if(D.isHemisphereLight){const X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(q),X.groundColor.copy(D.groundColor).multiplyScalar(q),i.hemi[S]=X,S++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const I=i.hash;(I.sunLength!==f||I.directionalLength!==m||I.pointLength!==g||I.spotLength!==M||I.rectAreaLength!==w||I.hemiLength!==S||I.numSunShadows!==p||I.numDirectionalShadows!==y||I.numPointShadows!==E||I.numSpotShadows!==A||I.numSpotMaps!==v||I.numLightProbes!==R)&&(i.sun.length=f,i.directional.length=m,i.spot.length=M,i.rectArea.length=w,i.point.length=g,i.hemi.length=S,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.directionalShadowMatrix.length=y,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+v-T,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,I.sunLength=f,I.directionalLength=m,I.pointLength=g,I.spotLength=M,I.rectAreaLength=w,I.hemiLength=S,I.numSunShadows=p,I.numDirectionalShadows=y,I.numPointShadows=E,I.numSpotShadows=A,I.numSpotMaps=v,I.numLightProbes=R,i.version=LS++)}function l(c,u){let h=0,d=0,f=0,p=0,_=0,m=0;const g=u.matrixWorldInverse;for(let M=0,w=c.length;M<w;M++){const S=c[M];if(S.isSunLight){const y=i.sun[h];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(g),h++}else if(S.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),d++}else if(S.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),p++}else if(S.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),a.identity(),s.copy(S.matrixWorld),s.premultiply(g),a.extractRotation(s),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),f++}else if(S.isHemisphereLight){const y=i.hemi[m];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:i}}function fd(n){const e=new IS(n),t=[],i=[],r=[];function s(d){h.camera=d,t.length=0,i.length=0,r.length=0}function a(d){t.push(d)}function o(d){i.push(d)}function l(d){r.push(d)}function c(){e.setup(t)}function u(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function US(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new fd(n),e.set(r,[o])):s>=a.length?(o=new fd(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const NS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,FS=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],BS=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],pd=new je,Ps=new P,vl=new P;function zS(n,e,t){let i=new pu;const r=new fe,s=new fe,a=new St,o=new k0,l=new H0,c={},u=t.maxTextureSize,h={[_r]:li,[li]:_r,[Mn]:Mn},d=new Et({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:NS,fragmentShader:OS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new ti;p.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Xe(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ja;let g=this.type;this.render=function(E,A,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Jp&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ja);const T=n.getRenderTarget(),R=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),N=n.state;N.setBlending(on),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const L=g!==this.type;L&&A.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(U=>U.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,U=E.length;D<U;D++){const q=E[D],z=q.shadow;if(z===void 0){Ie("WebGLShadowMap:",q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const Q=z.getFrameExtents();r.multiply(Q),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Q.x),r.x=s.x*Q.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Q.y),r.y=s.y*Q.y,z.mapSize.y=s.y));const X=n.state.buffers.depth.getReversed();if(z.camera._reversedDepth=X,z.map===null||L===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Is){if(q.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new jt(r.x,r.y,{format:xr,type:ci,minFilter:Zt,magFilter:Zt,generateMipmaps:!1}),z.map.texture.name=q.name+".shadowMap",z.map.depthTexture=new ta(r.x,r.y,Wi),z.map.depthTexture.name=q.name+".shadowMapDepth",z.map.depthTexture.format=An,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ht,z.map.depthTexture.magFilter=Ht}else q.isPointLight?(z.map=new Ef(r.x),z.map.depthTexture=new S0(r.x,cn)):(z.map=new jt(r.x,r.y),z.map.depthTexture=new ta(r.x,r.y,cn)),z.map.depthTexture.name=q.name+".shadowMap",z.map.depthTexture.format=An,this.type===Ja?(z.map.depthTexture.compareFunction=X?uu:cu,z.map.depthTexture.minFilter=Zt,z.map.depthTexture.magFilter=Zt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ht,z.map.depthTexture.magFilter=Ht);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==r.x||z.map.height!==r.y)&&z.map.setSize(r.x,r.y);const Z=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();q.isPointLight!==!0&&z.updateMatrices(q,v);for(let ee=0;ee<Z;ee++){const ne=z.getCamera(ee);if(q.isPointLight){const Se=z.camera,Be=z.matrix,Ue=q.distance||Se.far;Ue!==Se.far&&(Se.far=Ue,Se.updateProjectionMatrix()),Ps.setFromMatrixPosition(q.matrixWorld),Se.position.copy(Ps),vl.copy(Se.position),vl.add(FS[ee]),Se.up.copy(BS[ee]),Se.lookAt(vl),Se.updateMatrixWorld(),Be.makeTranslation(-Ps.x,-Ps.y,-Ps.z),pd.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),z._frustum.setFromProjectionMatrix(pd,Se.coordinateSystem,Se.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)n.setRenderTarget(z.map,ee),n.clear();else{ee===0&&(n.setRenderTarget(z.map),n.clear());const Se=z.getViewport(ee);a.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),N.viewport(a)}i=z.getFrustum(ee),S(A,v,ne,q,this.type)}z.isPointLightShadow!==!0&&this.type===Is&&M(z,v),z.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(T,R,I)};function M(E,A){const v=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new jt(r.x,r.y,{format:xr,type:ci}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(A,null,v,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(A,null,v,f,_,null)}function w(E,A,v,T){let R=null;const I=v.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)R=I;else if(R=v.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const N=R.uuid,L=A.uuid;let D=c[N];D===void 0&&(D={},c[N]=D);let U=D[L];U===void 0&&(U=R.clone(),D[L]=U,A.addEventListener("dispose",y)),R=U}if(R.visible=A.visible,R.wireframe=A.wireframe,T===Is?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:h[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const N=n.properties.get(R);N.light=v}return R}function S(E,A,v,T,R){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===Is)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,E.matrixWorld);const L=e.update(E),D=E.material;if(Array.isArray(D)){const U=L.groups;for(let q=0,z=U.length;q<z;q++){const Q=U[q],X=D[Q.materialIndex];if(X&&X.visible){const Z=w(E,X,T,R);E.onBeforeShadow(n,E,A,v,L,Z,Q),n.renderBufferDirect(v,null,L,Z,E,Q),E.onAfterShadow(n,E,A,v,L,Z,Q)}}}else if(D.visible){const U=w(E,D,T,R);E.onBeforeShadow(n,E,A,v,L,U,null),n.renderBufferDirect(v,null,L,U,E,null),E.onAfterShadow(n,E,A,v,L,U,null)}}const N=E.children;for(let L=0,D=N.length;L<D;L++)S(N[L],A,v,T,R)}function y(E){E.target.removeEventListener("dispose",y);for(const v in c){const T=c[v],R=E.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function kS(n,e){function t(){let F=!1;const le=new St;let J=null;const ce=new St(0,0,0,0);return{setMask:function(me){J!==me&&!F&&(n.colorMask(me,me,me,me),J=me)},setLocked:function(me){F=me},setClear:function(me,ie,Pe,be,ut){ut===!0&&(me*=be,ie*=be,Pe*=be),le.set(me,ie,Pe,be),ce.equals(le)===!1&&(n.clearColor(me,ie,Pe,be),ce.copy(le))},reset:function(){F=!1,J=null,ce.set(-1,0,0,0)}}}function i(){let F=!1,le=!1,J=null,ce=null,me=null;return{setReversed:function(ie){if(le!==ie){const Pe=e.get("EXT_clip_control");ie?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),le=ie;const be=me;me=null,this.setClear(be)}},getReversed:function(){return le},setTest:function(ie){ie?te(n.DEPTH_TEST):xe(n.DEPTH_TEST)},setMask:function(ie){J!==ie&&!F&&(n.depthMask(ie),J=ie)},setFunc:function(ie){if(le&&(ie=Pm[ie]),ce!==ie){switch(ie){case Nl:n.depthFunc(n.NEVER);break;case Ol:n.depthFunc(n.ALWAYS);break;case Fl:n.depthFunc(n.LESS);break;case Ks:n.depthFunc(n.LEQUAL);break;case Bl:n.depthFunc(n.EQUAL);break;case zl:n.depthFunc(n.GEQUAL);break;case kl:n.depthFunc(n.GREATER);break;case Hl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=ie}},setLocked:function(ie){F=ie},setClear:function(ie){me!==ie&&(me=ie,le&&(ie=1-ie),n.clearDepth(ie))},reset:function(){F=!1,J=null,ce=null,me=null,le=!1}}}function r(){let F=!1,le=null,J=null,ce=null,me=null,ie=null,Pe=null,be=null,ut=null;return{setTest:function(et){F||(et?te(n.STENCIL_TEST):xe(n.STENCIL_TEST))},setMask:function(et){le!==et&&!F&&(n.stencilMask(et),le=et)},setFunc:function(et,Bi,Yi){(J!==et||ce!==Bi||me!==Yi)&&(n.stencilFunc(et,Bi,Yi),J=et,ce=Bi,me=Yi)},setOp:function(et,Bi,Yi){(ie!==et||Pe!==Bi||be!==Yi)&&(n.stencilOp(et,Bi,Yi),ie=et,Pe=Bi,be=Yi)},setLocked:function(et){F=et},setClear:function(et){ut!==et&&(n.clearStencil(et),ut=et)},reset:function(){F=!1,le=null,J=null,ce=null,me=null,ie=null,Pe=null,be=null,ut=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},d={},f=new WeakMap,p=[],_=null,m=!1,g=null,M=null,w=null,S=null,y=null,E=null,A=null,v=new Le(0,0,0),T=0,R=!1,I=null,N=null,L=null,D=null,U=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Q=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(X)[1]),z=Q>=1):X.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),z=Q>=2);let Z=null,ee={};const ne=n.getParameter(n.SCISSOR_BOX),Se=n.getParameter(n.VIEWPORT),Be=new St().fromArray(ne),Ue=new St().fromArray(Se);function $e(F,le,J,ce){const me=new Uint8Array(4),ie=n.createTexture();n.bindTexture(F,ie),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Pe=0;Pe<J;Pe++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(le,0,n.RGBA,1,1,ce,0,n.RGBA,n.UNSIGNED_BYTE,me):n.texImage2D(le+Pe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,me);return ie}const $={};$[n.TEXTURE_2D]=$e(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=$e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=$e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=$e(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(n.DEPTH_TEST),a.setFunc(Ks),qe(!1),pt(ah),te(n.CULL_FACE),Qe(on);function te(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function xe(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function Ne(F,le){return d[F]!==le?(n.bindFramebuffer(F,le),d[F]=le,F===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=le),F===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=le),!0):!1}function _e(F,le){let J=p,ce=!1;if(F){J=f.get(le),J===void 0&&(J=[],f.set(le,J));const me=F.textures;if(J.length!==me.length||J[0]!==n.COLOR_ATTACHMENT0){for(let ie=0,Pe=me.length;ie<Pe;ie++)J[ie]=n.COLOR_ATTACHMENT0+ie;J.length=me.length,ce=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,ce=!0);ce&&n.drawBuffers(J)}function He(F){return _!==F?(n.useProgram(F),_=F,!0):!1}const Dt={[Jr]:n.FUNC_ADD,[Qp]:n.FUNC_SUBTRACT,[jp]:n.FUNC_REVERSE_SUBTRACT};Dt[em]=n.MIN,Dt[tm]=n.MAX;const Ve={[im]:n.ZERO,[nm]:n.ONE,[rm]:n.SRC_COLOR,[$d]:n.SRC_ALPHA,[um]:n.SRC_ALPHA_SATURATE,[lm]:n.DST_COLOR,[am]:n.DST_ALPHA,[sm]:n.ONE_MINUS_SRC_COLOR,[Kd]:n.ONE_MINUS_SRC_ALPHA,[cm]:n.ONE_MINUS_DST_COLOR,[om]:n.ONE_MINUS_DST_ALPHA,[hm]:n.CONSTANT_COLOR,[dm]:n.ONE_MINUS_CONSTANT_COLOR,[fm]:n.CONSTANT_ALPHA,[pm]:n.ONE_MINUS_CONSTANT_ALPHA};function Qe(F,le,J,ce,me,ie,Pe,be,ut,et){if(F===on){m===!0&&(xe(n.BLEND),m=!1);return}if(m===!1&&(te(n.BLEND),m=!0),F!==Zp){if(F!==g||et!==R){if((M!==Jr||y!==Jr)&&(n.blendEquation(n.FUNC_ADD),M=Jr,y=Jr),et)switch(F){case Bs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kt:n.blendFunc(n.ONE,n.ONE);break;case oh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case lh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Je("WebGLState: Invalid blending: ",F);break}else switch(F){case Bs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kt:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case oh:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lh:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",F);break}w=null,S=null,E=null,A=null,v.set(0,0,0),T=0,g=F,R=et}return}me=me||le,ie=ie||J,Pe=Pe||ce,(le!==M||me!==y)&&(n.blendEquationSeparate(Dt[le],Dt[me]),M=le,y=me),(J!==w||ce!==S||ie!==E||Pe!==A)&&(n.blendFuncSeparate(Ve[J],Ve[ce],Ve[ie],Ve[Pe]),w=J,S=ce,E=ie,A=Pe),(be.equals(v)===!1||ut!==T)&&(n.blendColor(be.r,be.g,be.b,ut),v.copy(be),T=ut),g=F,R=!1}function ct(F,le){F.side===Mn?xe(n.CULL_FACE):te(n.CULL_FACE);let J=F.side===li;le&&(J=!J),qe(J),F.blending===Bs&&F.transparent===!1?Qe(on):Qe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const ce=F.stencilWrite;o.setTest(ce),ce&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),hi(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?te(n.SAMPLE_ALPHA_TO_COVERAGE):xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function qe(F){I!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),I=F)}function pt(F){F!==$p?(te(n.CULL_FACE),F!==N&&(F===ah?n.cullFace(n.BACK):F===Kp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xe(n.CULL_FACE),N=F}function Ot(F){F!==L&&(z&&n.lineWidth(F),L=F)}function hi(F,le,J){F?(te(n.POLYGON_OFFSET_FILL),(D!==le||U!==J)&&(D=le,U=J,a.getReversed()&&(le=-le),n.polygonOffset(le,J))):xe(n.POLYGON_OFFSET_FILL)}function gt(F){F?te(n.SCISSOR_TEST):xe(n.SCISSOR_TEST)}function wt(F){F===void 0&&(F=n.TEXTURE0+q-1),Z!==F&&(n.activeTexture(F),Z=F)}function B(F,le,J){J===void 0&&(Z===null?J=n.TEXTURE0+q-1:J=Z);let ce=ee[J];ce===void 0&&(ce={type:void 0,texture:void 0},ee[J]=ce),(ce.type!==F||ce.texture!==le)&&(Z!==J&&(n.activeTexture(J),Z=J),n.bindTexture(F,le||$[F]),ce.type=F,ce.texture=le)}function Vt(){const F=ee[Z];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function nt(){try{n.compressedTexImage2D(...arguments)}catch(F){Je("WebGLState:",F)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(F){Je("WebGLState:",F)}}function x(){try{n.texSubImage2D(...arguments)}catch(F){Je("WebGLState:",F)}}function k(){try{n.texSubImage3D(...arguments)}catch(F){Je("WebGLState:",F)}}function V(){try{n.compressedTexSubImage2D(...arguments)}catch(F){Je("WebGLState:",F)}}function Y(){try{n.compressedTexSubImage3D(...arguments)}catch(F){Je("WebGLState:",F)}}function re(){try{n.texStorage2D(...arguments)}catch(F){Je("WebGLState:",F)}}function se(){try{n.texStorage3D(...arguments)}catch(F){Je("WebGLState:",F)}}function K(){try{n.texImage2D(...arguments)}catch(F){Je("WebGLState:",F)}}function j(){try{n.texImage3D(...arguments)}catch(F){Je("WebGLState:",F)}}function ae(F){return h[F]!==void 0?h[F]:n.getParameter(F)}function Ce(F,le){h[F]!==le&&(n.pixelStorei(F,le),h[F]=le)}function ue(F){Be.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Be.copy(F))}function oe(F){Ue.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Ue.copy(F))}function Re(F,le){let J=c.get(le);J===void 0&&(J=new WeakMap,c.set(le,J));let ce=J.get(F);ce===void 0&&(ce=n.getUniformBlockIndex(le,F.name),J.set(F,ce))}function De(F,le){const ce=c.get(le).get(F);l.get(le)!==ce&&(n.uniformBlockBinding(le,ce,F.__bindingPointIndex),l.set(le,ce))}function Fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},Z=null,ee={},d={},f=new WeakMap,p=[],_=null,m=!1,g=null,M=null,w=null,S=null,y=null,E=null,A=null,v=new Le(0,0,0),T=0,R=!1,I=null,N=null,L=null,D=null,U=null,Be.set(0,0,n.canvas.width,n.canvas.height),Ue.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:te,disable:xe,bindFramebuffer:Ne,drawBuffers:_e,useProgram:He,setBlending:Qe,setMaterial:ct,setFlipSided:qe,setCullFace:pt,setLineWidth:Ot,setPolygonOffset:hi,setScissorTest:gt,activeTexture:wt,bindTexture:B,unbindTexture:Vt,compressedTexImage2D:nt,compressedTexImage3D:C,texImage2D:K,texImage3D:j,pixelStorei:Ce,getParameter:ae,updateUBOMapping:Re,uniformBlockBinding:De,texStorage2D:re,texStorage3D:se,texSubImage2D:x,texSubImage3D:k,compressedTexSubImage2D:V,compressedTexSubImage3D:Y,scissor:ue,viewport:oe,reset:Fe}}function HS(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new fe,u=new WeakMap,h=new Set;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,x){return p?new OffscreenCanvas(C,x):js("canvas")}function m(C,x,k){let V=1;const Y=nt(C);if((Y.width>k||Y.height>k)&&(V=k/Math.max(Y.width,Y.height)),V<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const re=Math.floor(V*Y.width),se=Math.floor(V*Y.height);d===void 0&&(d=_(re,se));const K=x?_(re,se):d;return K.width=re,K.height=se,K.getContext("2d").drawImage(C,0,0,re,se),Ie("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+re+"x"+se+")."),K}else return"data"in C&&Ie("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),C;return C}function g(C){return C.generateMipmaps}function M(C){n.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(C,x,k,V,Y,re=!1){if(C!==null){if(n[C]!==void 0)return n[C];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let se;V&&(se=e.get("EXT_texture_norm16"),se||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=x;if(x===n.RED&&(k===n.FLOAT&&(K=n.R32F),k===n.HALF_FLOAT&&(K=n.R16F),k===n.UNSIGNED_BYTE&&(K=n.R8),k===n.UNSIGNED_SHORT&&se&&(K=se.R16_EXT),k===n.SHORT&&se&&(K=se.R16_SNORM_EXT)),x===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.R8UI),k===n.UNSIGNED_SHORT&&(K=n.R16UI),k===n.UNSIGNED_INT&&(K=n.R32UI),k===n.BYTE&&(K=n.R8I),k===n.SHORT&&(K=n.R16I),k===n.INT&&(K=n.R32I)),x===n.RG&&(k===n.FLOAT&&(K=n.RG32F),k===n.HALF_FLOAT&&(K=n.RG16F),k===n.UNSIGNED_BYTE&&(K=n.RG8),k===n.UNSIGNED_SHORT&&se&&(K=se.RG16_EXT),k===n.SHORT&&se&&(K=se.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.RG8UI),k===n.UNSIGNED_SHORT&&(K=n.RG16UI),k===n.UNSIGNED_INT&&(K=n.RG32UI),k===n.BYTE&&(K=n.RG8I),k===n.SHORT&&(K=n.RG16I),k===n.INT&&(K=n.RG32I)),x===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.RGB8UI),k===n.UNSIGNED_SHORT&&(K=n.RGB16UI),k===n.UNSIGNED_INT&&(K=n.RGB32UI),k===n.BYTE&&(K=n.RGB8I),k===n.SHORT&&(K=n.RGB16I),k===n.INT&&(K=n.RGB32I)),x===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),k===n.UNSIGNED_INT&&(K=n.RGBA32UI),k===n.BYTE&&(K=n.RGBA8I),k===n.SHORT&&(K=n.RGBA16I),k===n.INT&&(K=n.RGBA32I)),x===n.RGB&&(k===n.UNSIGNED_SHORT&&se&&(K=se.RGB16_EXT),k===n.SHORT&&se&&(K=se.RGB16_SNORM_EXT),k===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),x===n.RGBA){const j=re?uo:Ye.getTransfer(Y);k===n.FLOAT&&(K=n.RGBA32F),k===n.HALF_FLOAT&&(K=n.RGBA16F),k===n.UNSIGNED_BYTE&&(K=j===it?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT&&se&&(K=se.RGBA16_EXT),k===n.SHORT&&se&&(K=se.RGBA16_SNORM_EXT),k===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function y(C,x){let k;return C?x===null||x===cn||x===Zs?k=n.DEPTH24_STENCIL8:x===Wi?k=n.DEPTH32F_STENCIL8:x===Js&&(k=n.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===cn||x===Zs?k=n.DEPTH_COMPONENT24:x===Wi?k=n.DEPTH_COMPONENT32F:x===Js&&(k=n.DEPTH_COMPONENT16),k}function E(C,x){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ht&&C.minFilter!==Zt?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function A(C){const x=C.target;x.removeEventListener("dispose",A),T(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&h.delete(x)}function v(C){const x=C.target;x.removeEventListener("dispose",v),I(x)}function T(C){const x=i.get(C);if(x.__webglInit===void 0)return;const k=C.source,V=f.get(k);if(V){const Y=V[x.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&R(C),Object.keys(V).length===0&&f.delete(k)}i.remove(C)}function R(C){const x=i.get(C);n.deleteTexture(x.__webglTexture);const k=C.source,V=f.get(k);delete V[x.__cacheKey],a.memory.textures--}function I(C){const x=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(x.__webglFramebuffer[V]))for(let Y=0;Y<x.__webglFramebuffer[V].length;Y++)n.deleteFramebuffer(x.__webglFramebuffer[V][Y]);else n.deleteFramebuffer(x.__webglFramebuffer[V]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[V])}else{if(Array.isArray(x.__webglFramebuffer))for(let V=0;V<x.__webglFramebuffer.length;V++)n.deleteFramebuffer(x.__webglFramebuffer[V]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let V=0;V<x.__webglColorRenderbuffer.length;V++)x.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[V]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const k=C.textures;for(let V=0,Y=k.length;V<Y;V++){const re=i.get(k[V]);re.__webglTexture&&(n.deleteTexture(re.__webglTexture),a.memory.textures--),i.remove(k[V])}i.remove(C)}let N=0;function L(){N=0}function D(){return N}function U(C){N=C}function q(){const C=N;return C>=r.maxTextures&&Ie("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+r.maxTextures),N+=1,C}function z(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function Q(C,x){const k=i.get(C);if(C.isVideoTexture&&B(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){const V=C.image;if(V===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(k,C,x);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+x)}function X(C,x){const k=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){xe(k,C,x);return}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+x)}function Z(C,x){const k=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){xe(k,C,x);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+x)}function ee(C,x){const k=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&k.__version!==C.version){Ne(k,C,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+x)}const ne={[Gl]:n.REPEAT,[yn]:n.CLAMP_TO_EDGE,[Vl]:n.MIRRORED_REPEAT},Se={[Ht]:n.NEAREST,[_m]:n.NEAREST_MIPMAP_NEAREST,[_a]:n.NEAREST_MIPMAP_LINEAR,[Zt]:n.LINEAR,[Bo]:n.LINEAR_MIPMAP_NEAREST,[cr]:n.LINEAR_MIPMAP_LINEAR},Be={[Mm]:n.NEVER,[wm]:n.ALWAYS,[ym]:n.LESS,[cu]:n.LEQUAL,[bm]:n.EQUAL,[uu]:n.GEQUAL,[Tm]:n.GREATER,[Em]:n.NOTEQUAL};function Ue(C,x){if(x.type===Wi&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Zt||x.magFilter===Bo||x.magFilter===_a||x.magFilter===cr||x.minFilter===Zt||x.minFilter===Bo||x.minFilter===_a||x.minFilter===cr)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,ne[x.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,ne[x.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,ne[x.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,Se[x.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,Se[x.minFilter]),x.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Be[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ht||x.minFilter!==_a&&x.minFilter!==cr||x.type===Wi&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function $e(C,x){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",A));const V=x.source;let Y=f.get(V);Y===void 0&&(Y={},f.set(V,Y));const re=z(x);if(re!==C.__cacheKey){Y[re]===void 0&&(Y[re]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Y[re].usedTimes++;const se=Y[C.__cacheKey];se!==void 0&&(Y[C.__cacheKey].usedTimes--,se.usedTimes===0&&R(x)),C.__cacheKey=re,C.__webglTexture=Y[re].texture}return k}function $(C,x,k){return Math.floor(Math.floor(C/k)/x)}function te(C,x,k,V){const re=C.updateRanges;if(re.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,k,V,x.data);else{re.sort((Ce,ue)=>Ce.start-ue.start);let se=0;for(let Ce=1;Ce<re.length;Ce++){const ue=re[se],oe=re[Ce],Re=ue.start+ue.count,De=$(oe.start,x.width,4),Fe=$(ue.start,x.width,4);oe.start<=Re+1&&De===Fe&&$(oe.start+oe.count-1,x.width,4)===De?ue.count=Math.max(ue.count,oe.start+oe.count-ue.start):(++se,re[se]=oe)}re.length=se+1;const K=t.getParameter(n.UNPACK_ROW_LENGTH),j=t.getParameter(n.UNPACK_SKIP_PIXELS),ae=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let Ce=0,ue=re.length;Ce<ue;Ce++){const oe=re[Ce],Re=Math.floor(oe.start/4),De=Math.ceil(oe.count/4),Fe=Re%x.width,F=Math.floor(Re/x.width),le=De,J=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Fe),t.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,Fe,F,le,J,k,V,x.data)}C.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,K),t.pixelStorei(n.UNPACK_SKIP_PIXELS,j),t.pixelStorei(n.UNPACK_SKIP_ROWS,ae)}}function xe(C,x,k){let V=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(V=n.TEXTURE_3D);const Y=$e(C,x),re=x.source;t.bindTexture(V,C.__webglTexture,n.TEXTURE0+k);const se=i.get(re);if(re.version!==se.__version||Y===!0){if(t.activeTexture(n.TEXTURE0+k),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const J=Ye.getPrimaries(Ye.workingColorSpace),ce=x.colorSpace===Vn?null:Ye.getPrimaries(x.colorSpace),me=x.colorSpace===Vn||J===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let j=m(x.image,!1,r.maxTextureSize);j=Vt(x,j);const ae=s.convert(x.format,x.colorSpace),Ce=s.convert(x.type);let ue=S(x.internalFormat,ae,Ce,x.normalized,x.colorSpace,x.isVideoTexture);Ue(V,x);let oe;const Re=x.mipmaps,De=x.isVideoTexture!==!0,Fe=se.__version===void 0||Y===!0,F=re.dataReady,le=E(x,j);if(x.isDepthTexture)ue=y(x.format===ur,x.type),Fe&&(De?t.texStorage2D(n.TEXTURE_2D,1,ue,j.width,j.height):t.texImage2D(n.TEXTURE_2D,0,ue,j.width,j.height,0,ae,Ce,null));else if(x.isDataTexture)if(Re.length>0){De&&Fe&&t.texStorage2D(n.TEXTURE_2D,le,ue,Re[0].width,Re[0].height);for(let J=0,ce=Re.length;J<ce;J++)oe=Re[J],De?F&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,oe.width,oe.height,ae,Ce,oe.data):t.texImage2D(n.TEXTURE_2D,J,ue,oe.width,oe.height,0,ae,Ce,oe.data);x.generateMipmaps=!1}else De?(Fe&&t.texStorage2D(n.TEXTURE_2D,le,ue,j.width,j.height),F&&te(x,j,ae,Ce)):t.texImage2D(n.TEXTURE_2D,0,ue,j.width,j.height,0,ae,Ce,j.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){De&&Fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,ue,Re[0].width,Re[0].height,j.depth);for(let J=0,ce=Re.length;J<ce;J++)if(oe=Re[J],x.format!==Xi)if(ae!==null)if(De){if(F)if(x.layerUpdates.size>0){const me=Yh(oe.width,oe.height,x.format,x.type);for(const ie of x.layerUpdates){const Pe=oe.data.subarray(ie*me/oe.data.BYTES_PER_ELEMENT,(ie+1)*me/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,ie,oe.width,oe.height,1,ae,Pe)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,oe.width,oe.height,j.depth,ae,oe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,ue,oe.width,oe.height,j.depth,0,oe.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,oe.width,oe.height,j.depth,ae,Ce,oe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,ue,oe.width,oe.height,j.depth,0,ae,Ce,oe.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{De&&Fe&&t.texStorage2D(n.TEXTURE_2D,le,ue,Re[0].width,Re[0].height);for(let J=0,ce=Re.length;J<ce;J++)oe=Re[J],x.format!==Xi?ae!==null?De?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,oe.width,oe.height,ae,oe.data):t.compressedTexImage2D(n.TEXTURE_2D,J,ue,oe.width,oe.height,0,oe.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?F&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,oe.width,oe.height,ae,Ce,oe.data):t.texImage2D(n.TEXTURE_2D,J,ue,oe.width,oe.height,0,ae,Ce,oe.data)}else if(x.isDataArrayTexture)if(De){if(Fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,ue,j.width,j.height,j.depth),F)if(x.layerUpdates.size>0){const J=Yh(j.width,j.height,x.format,x.type);for(const ce of x.layerUpdates){const me=j.data.subarray(ce*J/j.data.BYTES_PER_ELEMENT,(ce+1)*J/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ce,j.width,j.height,1,ae,Ce,me)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ae,Ce,j.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ue,j.width,j.height,j.depth,0,ae,Ce,j.data);else if(x.isData3DTexture)De?(Fe&&t.texStorage3D(n.TEXTURE_3D,le,ue,j.width,j.height,j.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ae,Ce,j.data)):t.texImage3D(n.TEXTURE_3D,0,ue,j.width,j.height,j.depth,0,ae,Ce,j.data);else if(x.isFramebufferTexture){if(Fe)if(De)t.texStorage2D(n.TEXTURE_2D,le,ue,j.width,j.height);else{let J=j.width,ce=j.height;for(let me=0;me<le;me++)t.texImage2D(n.TEXTURE_2D,me,ue,J,ce,0,ae,Ce,null),J>>=1,ce>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){const J=n.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),j.parentNode!==J){J.appendChild(j),h.add(x),J.onpaint=ce=>{const me=ce.changedElements;for(const ie of h)me.includes(ie.image)&&(ie.needsUpdate=!0)},J.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,j);else{const me=n.RGBA,ie=n.RGBA,Pe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,me,ie,Pe,j)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Re.length>0){if(De&&Fe){const J=nt(Re[0]);t.texStorage2D(n.TEXTURE_2D,le,ue,J.width,J.height)}for(let J=0,ce=Re.length;J<ce;J++)oe=Re[J],De?F&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ae,Ce,oe):t.texImage2D(n.TEXTURE_2D,J,ue,ae,Ce,oe);x.generateMipmaps=!1}else if(De){if(Fe){const J=nt(j);t.texStorage2D(n.TEXTURE_2D,le,ue,J.width,J.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae,Ce,j)}else t.texImage2D(n.TEXTURE_2D,0,ue,ae,Ce,j);g(x)&&M(V),se.__version=re.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function Ne(C,x,k){if(x.image.length!==6)return;const V=$e(C,x),Y=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+k);const re=i.get(Y);if(Y.version!==re.__version||V===!0){t.activeTexture(n.TEXTURE0+k);const se=Ye.getPrimaries(Ye.workingColorSpace),K=x.colorSpace===Vn?null:Ye.getPrimaries(x.colorSpace),j=x.colorSpace===Vn||se===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);const ae=x.isCompressedTexture||x.image[0].isCompressedTexture,Ce=x.image[0]&&x.image[0].isDataTexture,ue=[];for(let ie=0;ie<6;ie++)!ae&&!Ce?ue[ie]=m(x.image[ie],!0,r.maxCubemapSize):ue[ie]=Ce?x.image[ie].image:x.image[ie],ue[ie]=Vt(x,ue[ie]);const oe=ue[0],Re=s.convert(x.format,x.colorSpace),De=s.convert(x.type),Fe=S(x.internalFormat,Re,De,x.normalized,x.colorSpace),F=x.isVideoTexture!==!0,le=re.__version===void 0||V===!0,J=Y.dataReady;let ce=E(x,oe);Ue(n.TEXTURE_CUBE_MAP,x);let me;if(ae){F&&le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,Fe,oe.width,oe.height);for(let ie=0;ie<6;ie++){me=ue[ie].mipmaps;for(let Pe=0;Pe<me.length;Pe++){const be=me[Pe];x.format!==Xi?Re!==null?F?J&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe,0,0,be.width,be.height,Re,be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe,Fe,be.width,be.height,0,be.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe,0,0,be.width,be.height,Re,De,be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe,Fe,be.width,be.height,0,Re,De,be.data)}}}else{if(me=x.mipmaps,F&&le){me.length>0&&ce++;const ie=nt(ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,Fe,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Ce){F?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ue[ie].width,ue[ie].height,Re,De,ue[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Fe,ue[ie].width,ue[ie].height,0,Re,De,ue[ie].data);for(let Pe=0;Pe<me.length;Pe++){const ut=me[Pe].image[ie].image;F?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe+1,0,0,ut.width,ut.height,Re,De,ut.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe+1,Fe,ut.width,ut.height,0,Re,De,ut.data)}}else{F?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Re,De,ue[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Fe,Re,De,ue[ie]);for(let Pe=0;Pe<me.length;Pe++){const be=me[Pe];F?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe+1,0,0,Re,De,be.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe+1,Fe,Re,De,be.image[ie])}}}g(x)&&M(n.TEXTURE_CUBE_MAP),re.__version=Y.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function _e(C,x,k,V,Y,re){const se=s.convert(k.format,k.colorSpace),K=s.convert(k.type),j=S(k.internalFormat,se,K,k.normalized,k.colorSpace),ae=i.get(x),Ce=i.get(k);if(Ce.__renderTarget=x,!ae.__hasExternalTextures){const ue=Math.max(1,x.width>>re),oe=Math.max(1,x.height>>re);Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?t.texImage3D(Y,re,j,ue,oe,x.depth,0,se,K,null):t.texImage2D(Y,re,j,ue,oe,0,se,K,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),wt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,Y,Ce.__webglTexture,0,gt(x)):(Y===n.TEXTURE_2D||Y>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,Y,Ce.__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function He(C,x,k){if(n.bindRenderbuffer(n.RENDERBUFFER,C),x.depthBuffer){const V=x.depthTexture,Y=V&&V.isDepthTexture?V.type:null,re=y(x.stencilBuffer,Y),se=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;wt(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,gt(x),re,x.width,x.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,gt(x),re,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,re,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,C)}else{const V=x.textures;for(let Y=0;Y<V.length;Y++){const re=V[Y],se=s.convert(re.format,re.colorSpace),K=s.convert(re.type),j=S(re.internalFormat,se,K,re.normalized,re.colorSpace);wt(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,gt(x),j,x.width,x.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,gt(x),j,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,j,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Dt(C,x,k){const V=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Y=i.get(x.depthTexture);if(Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,x.depthTexture.addEventListener("dispose",A)),Y.__webglTexture===void 0){Y.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Ue(n.TEXTURE_CUBE_MAP,x.depthTexture);const ae=s.convert(x.depthTexture.format),Ce=s.convert(x.depthTexture.type);let ue;x.depthTexture.format===An?ue=n.DEPTH_COMPONENT24:x.depthTexture.format===ur&&(ue=n.DEPTH24_STENCIL8);for(let oe=0;oe<6;oe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ue,x.width,x.height,0,ae,Ce,null)}}else Q(x.depthTexture,0);const re=Y.__webglTexture,se=gt(x),K=V?n.TEXTURE_CUBE_MAP_POSITIVE_X+k:n.TEXTURE_2D,j=x.depthTexture.format===ur?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===An)wt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,K,re,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,j,K,re,0);else if(x.depthTexture.format===ur)wt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,K,re,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,j,K,re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ve(C){const x=i.get(C),k=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){const V=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),V){const Y=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,V.removeEventListener("dispose",Y)};V.addEventListener("dispose",Y),x.__depthDisposeCallback=Y}x.__boundDepthTexture=V}if(C.depthTexture&&!x.__autoAllocateDepthBuffer)if(k)for(let V=0;V<6;V++)Dt(x.__webglFramebuffer[V],C,V);else{const V=C.texture.mipmaps;V&&V.length>0?Dt(x.__webglFramebuffer[0],C,0):Dt(x.__webglFramebuffer,C,0)}else if(k){x.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[V]),x.__webglDepthbuffer[V]===void 0)x.__webglDepthbuffer[V]=n.createRenderbuffer(),He(x.__webglDepthbuffer[V],C,!1);else{const Y=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=x.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,re)}}else{const V=C.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),He(x.__webglDepthbuffer,C,!1);else{const Y=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,re)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Qe(C,x,k){const V=i.get(C);x!==void 0&&_e(V.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Ve(C)}function ct(C){const x=C.texture,k=i.get(C),V=i.get(x);C.addEventListener("dispose",v);const Y=C.textures,re=C.isWebGLCubeRenderTarget===!0,se=Y.length>1;if(se||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=x.version,a.memory.textures++),re){k.__webglFramebuffer=[];for(let K=0;K<6;K++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[K]=[];for(let j=0;j<x.mipmaps.length;j++)k.__webglFramebuffer[K][j]=n.createFramebuffer()}else k.__webglFramebuffer[K]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let K=0;K<x.mipmaps.length;K++)k.__webglFramebuffer[K]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(se)for(let K=0,j=Y.length;K<j;K++){const ae=i.get(Y[K]);ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&wt(C)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let K=0;K<Y.length;K++){const j=Y[K];k.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[K]);const ae=s.convert(j.format,j.colorSpace),Ce=s.convert(j.type),ue=S(j.internalFormat,ae,Ce,j.normalized,j.colorSpace,C.isXRRenderTarget===!0),oe=gt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,ue,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,k.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),He(k.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),Ue(n.TEXTURE_CUBE_MAP,x);for(let K=0;K<6;K++)if(x.mipmaps&&x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)_e(k.__webglFramebuffer[K][j],C,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,j);else _e(k.__webglFramebuffer[K],C,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);g(x)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let K=0,j=Y.length;K<j;K++){const ae=Y[K],Ce=i.get(ae);let ue=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ue=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,Ce.__webglTexture),Ue(ue,ae),_e(k.__webglFramebuffer,C,ae,n.COLOR_ATTACHMENT0+K,ue,0),g(ae)&&M(ue)}t.unbindTexture()}else{let K=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(K=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(K,V.__webglTexture),Ue(K,x),x.mipmaps&&x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)_e(k.__webglFramebuffer[j],C,x,n.COLOR_ATTACHMENT0,K,j);else _e(k.__webglFramebuffer,C,x,n.COLOR_ATTACHMENT0,K,0);g(x)&&M(K),t.unbindTexture()}C.depthBuffer&&Ve(C)}function qe(C){const x=C.textures;for(let k=0,V=x.length;k<V;k++){const Y=x[k];if(g(Y)){const re=w(C),se=i.get(Y).__webglTexture;t.bindTexture(re,se),M(re),t.unbindTexture()}}}const pt=[],Ot=[];function hi(C){if(C.samples>0){if(wt(C)===!1){const x=C.textures,k=C.width,V=C.height;let Y=n.COLOR_BUFFER_BIT;const re=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=i.get(C),K=x.length>1;if(K)for(let ae=0;ae<x.length;ae++)t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);const j=C.texture.mipmaps;j&&j.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let ae=0;ae<x.length;ae++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Y|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Y|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,se.__webglColorRenderbuffer[ae]);const Ce=i.get(x[ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ce,0)}n.blitFramebuffer(0,0,k,V,0,0,k,V,Y,n.NEAREST),l===!0&&(pt.length=0,Ot.length=0,pt.push(n.COLOR_ATTACHMENT0+ae),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(pt.push(re),Ot.push(re),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ot)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,pt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let ae=0;ae<x.length;ae++){t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,se.__webglColorRenderbuffer[ae]);const Ce=i.get(x[ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,Ce,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){const x=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function gt(C){return Math.min(r.maxSamples,C.samples)}function wt(C){const x=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function B(C){const x=a.render.frame;u.get(C)!==x&&(u.set(C,x),C.update())}function Vt(C,x){const k=C.colorSpace,V=C.format,Y=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==co&&k!==Vn&&(Ye.getTransfer(k)===it?(V!==Xi||Y!==yi)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",k)),x}function nt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=L,this.getTextureUnits=D,this.setTextureUnits=U,this.setTexture2D=Q,this.setTexture2DArray=X,this.setTexture3D=Z,this.setTextureCube=ee,this.rebindTextures=Qe,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=hi,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=wt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function GS(n,e){function t(i,r=Vn){let s;const a=Ye.getTransfer(r);if(i===yi)return n.UNSIGNED_BYTE;if(i===nu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ru)return n.UNSIGNED_SHORT_5_5_5_1;if(i===jd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ef)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Zd)return n.BYTE;if(i===Qd)return n.SHORT;if(i===Js)return n.UNSIGNED_SHORT;if(i===iu)return n.INT;if(i===cn)return n.UNSIGNED_INT;if(i===Wi)return n.FLOAT;if(i===ci)return n.HALF_FLOAT;if(i===tf)return n.ALPHA;if(i===nf)return n.RGB;if(i===Xi)return n.RGBA;if(i===An)return n.DEPTH_COMPONENT;if(i===ur)return n.DEPTH_STENCIL;if(i===su)return n.RED;if(i===au)return n.RED_INTEGER;if(i===xr)return n.RG;if(i===ou)return n.RG_INTEGER;if(i===lu)return n.RGBA_INTEGER;if(i===Za||i===Qa||i===ja||i===eo)if(a===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Za)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Za)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ja)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===eo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Wl||i===Xl||i===ql||i===Yl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Wl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ql)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Yl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$l||i===Kl||i===Jl||i===Zl||i===Ql||i===ao||i===jl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===$l||i===Kl)return a===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Jl)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Zl)return s.COMPRESSED_R11_EAC;if(i===Ql)return s.COMPRESSED_SIGNED_R11_EAC;if(i===ao)return s.COMPRESSED_RG11_EAC;if(i===jl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ec||i===tc||i===ic||i===nc||i===rc||i===sc||i===ac||i===oc||i===lc||i===cc||i===uc||i===hc||i===dc||i===fc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ec)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===tc)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ic)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===nc)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===rc)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===sc)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ac)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===oc)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===lc)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===cc)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===uc)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===hc)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===dc)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===fc)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===pc||i===mc||i===gc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===pc)return a===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===mc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===gc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_c||i===vc||i===oo||i===xc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===_c)return s.COMPRESSED_RED_RGTC1_EXT;if(i===vc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===oo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===xc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const VS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class XS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new mf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Et({vertexShader:VS,fragmentShader:WS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xe(new It(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qS extends Mr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,p=null;const _=typeof XRWebGLBinding<"u",m=new XS,g={},M=t.getContextAttributes();let w=null,S=null;const y=[],E=[],A=new fe;let v=null,T=null;const R=new Bt;R.viewport=new St;const I=new Bt;I.viewport=new St;const N=[R,I],L=new J0;let D=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let te=y[$];return te===void 0&&(te=new Xo,y[$]=te),te.getTargetRaySpace()},this.getControllerGrip=function($){let te=y[$];return te===void 0&&(te=new Xo,y[$]=te),te.getGripSpace()},this.getHand=function($){let te=y[$];return te===void 0&&(te=new Xo,y[$]=te),te.getHandSpace()};function q($){const te=E.indexOf($.inputSource);if(te===-1)return;const xe=y[te];xe!==void 0&&(xe.update($.inputSource,$.frame,c||a),xe.dispatchEvent({type:$.type,data:$.inputSource}))}function z(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",Q);for(let $=0;$<y.length;$++){const te=E[$];te!==null&&(E[$]=null,y[$].disconnect(te))}D=null,U=null,m.reset();for(const $ in g)delete g[$];if(e.setRenderTarget(w),f=null,d=null,h=null,r=null,S=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(A.width,A.height,!1),T!==null){const $=T.camera;$.fov=T.fov,$.zoom=T.zoom,$.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",z),r.addEventListener("inputsourceschange",Q),M.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Ne=null,_e=null;M.depth&&(_e=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=M.stencil?ur:An,Ne=M.stencil?Zs:cn);const He={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(He),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new jt(d.textureWidth,d.textureHeight,{format:Xi,type:yi,depthTexture:new ta(d.textureWidth,d.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const xe={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,xe),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new jt(f.framebufferWidth,f.framebufferHeight,{format:Xi,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),$e.setContext(r),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q($){for(let te=0;te<$.removed.length;te++){const xe=$.removed[te],Ne=E.indexOf(xe);Ne>=0&&(E[Ne]=null,y[Ne].disconnect(xe))}for(let te=0;te<$.added.length;te++){const xe=$.added[te];let Ne=E.indexOf(xe);if(Ne===-1){for(let He=0;He<y.length;He++)if(He>=E.length){E.push(xe),Ne=He;break}else if(E[He]===null){E[He]=xe,Ne=He;break}if(Ne===-1)break}const _e=y[Ne];_e&&_e.connect(xe)}}const X=new P,Z=new P;function ee($,te,xe){X.setFromMatrixPosition(te.matrixWorld),Z.setFromMatrixPosition(xe.matrixWorld);const Ne=X.distanceTo(Z),_e=te.projectionMatrix.elements,He=xe.projectionMatrix.elements,Dt=_e[14]/(_e[10]-1),Ve=_e[14]/(_e[10]+1),Qe=(_e[9]+1)/_e[5],ct=(_e[9]-1)/_e[5],qe=(_e[8]-1)/_e[0],pt=(He[8]+1)/He[0],Ot=Dt*qe,hi=Dt*pt,gt=Ne/(-qe+pt),wt=gt*-qe;if(te.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(wt),$.translateZ(gt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),_e[10]===-1)$.projectionMatrix.copy(te.projectionMatrix),$.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const B=Dt+gt,Vt=Ve+gt,nt=Ot-wt,C=hi+(Ne-wt),x=Qe*Ve/Vt*B,k=ct*Ve/Vt*B;$.projectionMatrix.makePerspective(nt,C,x,k,B,Vt),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ne($,te){te===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(te.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let te=$.near,xe=$.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),L.near=I.near=R.near=te,L.far=I.far=R.far=xe,(D!==L.near||U!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),D=L.near,U=L.far),L.layers.mask=$.layers.mask|6,R.layers.mask=L.layers.mask&-5,I.layers.mask=L.layers.mask&-3;const Ne=$.parent,_e=L.cameras;ne(L,Ne);for(let He=0;He<_e.length;He++)ne(_e[He],Ne);_e.length===2?ee(L,R,I):L.projectionMatrix.copy(R.projectionMatrix),T===null&&$.isPerspectiveCamera&&(T={camera:$,fov:$.fov,zoom:$.zoom}),Se($,L,Ne)};function Se($,te,xe){xe===null?$.matrix.copy(te.matrixWorld):($.matrix.copy(xe.matrixWorld),$.matrix.invert(),$.matrix.multiply(te.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(te.projectionMatrix),$.projectionMatrixInverse.copy(te.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ea*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function($){return g[$]};let Be=null;function Ue($,te){if(u=te.getViewerPose(c||a),p=te,u!==null){const xe=u.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let Ne=!1;xe.length!==L.cameras.length&&(L.cameras.length=0,Ne=!0);for(let Ve=0;Ve<xe.length;Ve++){const Qe=xe[Ve];let ct=null;if(f!==null)ct=f.getViewport(Qe);else{const pt=h.getViewSubImage(d,Qe);ct=pt.viewport,Ve===0&&(e.setRenderTargetTextures(S,pt.colorTexture,pt.depthStencilTexture),e.setRenderTarget(S))}let qe=N[Ve];qe===void 0&&(qe=new Bt,qe.layers.enable(Ve),qe.viewport=new St,N[Ve]=qe),qe.matrix.fromArray(Qe.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(Qe.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(ct.x,ct.y,ct.width,ct.height),Ve===0&&(L.matrix.copy(qe.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Ne===!0&&L.cameras.push(qe)}const _e=r.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){h=i.getBinding();const Ve=h.getDepthInformation(xe[0]);Ve&&Ve.isValid&&Ve.texture&&m.init(Ve,r.renderState)}if(_e&&_e.includes("camera-access")&&_){e.state.unbindTexture(),h=i.getBinding();for(let Ve=0;Ve<xe.length;Ve++){const Qe=xe[Ve].camera;if(Qe){let ct=g[Qe];ct||(ct=new mf,g[Qe]=ct);const qe=h.getCameraImage(Qe);ct.sourceTexture=qe}}}}for(let xe=0;xe<y.length;xe++){const Ne=E[xe],_e=y[xe];Ne!==null&&_e!==void 0&&_e.update(Ne,te,c||a)}Be&&Be($,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),p=null}const $e=new bf;$e.setAnimationLoop(Ue),this.setAnimationLoop=function($){Be=$},this.dispose=function(){}}}const YS=new je,Pf=new Oe;Pf.set(-1,0,0,0,1,0,0,0,1);function $S(n,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,vf(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function r(m,g,M,w,S){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),h(m,g)):g.isMeshPhongMaterial?(s(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,S)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),_(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,M,w):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===li&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===li&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const M=e.get(g),w=M.envMap,S=M.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(YS.makeRotationFromEuler(S)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Pf),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,M,w){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*M,m.scale.value=w*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,M){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===li&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){const M=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function KS(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){const E=y.program;i.uniformBlockBinding(S,E)}function c(S,y){let E=r[S.id];E===void 0&&(m(S),E=u(S),r[S.id]=E,S.addEventListener("dispose",M));const A=y.program;i.updateUBOMapping(S,A);const v=e.render.frame;s[S.id]!==v&&(d(S),s[S.id]=v)}function u(S){const y=h();S.__bindingPointIndex=y;const E=n.createBuffer(),A=S.__size,v=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,A,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,E),E}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const y=r[S.id],E=S.uniforms,A=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let v=0,T=E.length;v<T;v++){const R=E[v];if(Array.isArray(R))for(let I=0,N=R.length;I<N;I++)f(R[I],v,I,A);else f(R,v,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(S,y,E,A){if(_(S,y,E,A)===!0){const v=S.__offset,T=S.value;if(Array.isArray(T)){let R=0;for(let I=0;I<T.length;I++){const N=T[I],L=g(N);p(N,S.__data,R),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(R+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,S.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,S.__data)}}function p(S,y,E){typeof S=="number"||typeof S=="boolean"?y[0]=S:S.isMatrix3?(y[0]=S.elements[0],y[1]=S.elements[1],y[2]=S.elements[2],y[3]=0,y[4]=S.elements[3],y[5]=S.elements[4],y[6]=S.elements[5],y[7]=0,y[8]=S.elements[6],y[9]=S.elements[7],y[10]=S.elements[8],y[11]=0):ArrayBuffer.isView(S)?y.set(new S.constructor(S.buffer,S.byteOffset,y.length)):S.toArray(y,E)}function _(S,y,E,A){const v=S.value,T=y+"_"+E;if(A[T]===void 0)return typeof v=="number"||typeof v=="boolean"?A[T]=v:ArrayBuffer.isView(v)?A[T]=v.slice():A[T]=v.clone(),!0;{const R=A[T];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return A[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function m(S){const y=S.uniforms;let E=0;const A=16;for(let T=0,R=y.length;T<R;T++){const I=Array.isArray(y[T])?y[T]:[y[T]];for(let N=0,L=I.length;N<L;N++){const D=I[N],U=Array.isArray(D.value)?D.value:[D.value];for(let q=0,z=U.length;q<z;q++){const Q=U[q],X=g(Q),Z=E%A,ee=Z%X.boundary,ne=Z+ee;E+=ee,ne!==0&&A-ne<X.storage&&(E+=A-ne),D.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=E,E+=X.storage}}}const v=E%A;return v>0&&(E+=A-v),S.__size=E,S.__cache={},this}function g(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(y.boundary=16,y.storage=S.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",S),y}function M(S){const y=S.target;y.removeEventListener("dispose",M);const E=a.indexOf(y.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function w(){for(const S in r)n.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:w}}const JS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ji=null;function ZS(){return Ji===null&&(Ji=new hf(JS,16,16,xr,ci),Ji.name="DFG_LUT",Ji.minFilter=Zt,Ji.magFilter=Zt,Ji.wrapS=yn,Ji.wrapT=yn,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}class QS{constructor(e={}){const{canvas:t=Cm(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=yi}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const _=f,m=new Set([lu,ou,au]),g=new Set([yi,cn,Js,Zs,nu,ru]),M=new Uint32Array(4),w=new Int32Array(4),S=new P;let y=null,E=null;const A=[],v=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let I=!1,N=null,L=null,D=null,U=null;this._outputColorSpace=$t;let q=0,z=0,Q=null,X=-1,Z=null;const ee=new St,ne=new St;let Se=null;const Be=new Le(0);let Ue=0,$e=t.width,$=t.height,te=1,xe=null,Ne=null;const _e=new St(0,0,$e,$),He=new St(0,0,$e,$);let Dt=!1;const Ve=new pu;let Qe=!1,ct=!1;const qe=new je,pt=new P,Ot=new St,hi={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function wt(){return Q===null?te:1}let B=i;function Vt(b,O){return t.getContext(b,O)}let nt,C,x,k,V,Y,re,se,K,j,ae,Ce,ue,oe,Re,De,Fe,F,le,J,ce,me,ie;try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yc}`),t.addEventListener("webglcontextlost",ut,!1),t.addEventListener("webglcontextrestored",et,!1),t.addEventListener("webglcontextcreationerror",Bi,!1),B===null){const O="webgl2";if(B=Vt(O,b),B===null)throw Vt(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Pe()}catch(b){throw t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",et,!1),t.removeEventListener("webglcontextcreationerror",Bi,!1),Je("WebGLRenderer: "+b.message),b}function Pe(){nt=new Zv(B),nt.init(),ce=new GS(B,nt),C=new Hv(B,nt,e,ce),x=new kS(B,nt),C.reversedDepthBuffer&&d&&x.buffers.depth.setReversed(!0),L=B.createFramebuffer(),D=B.createFramebuffer(),U=B.createFramebuffer(),k=new ex(B),V=new wS,Y=new HS(B,nt,x,V,C,ce,k),re=new Jv(R),se=new ig(B),me=new zv(B,se),K=new Qv(B,se,k,me),j=new ix(B,K,se,me,k),F=new tx(B,C,Y),Re=new Gv(V),ae=new ES(R,re,nt,C,me,Re),Ce=new $S(R,V),ue=new CS,oe=new US(nt),Fe=new Bv(R,re,x,j,p,l),De=new zS(R,j,C),ie=new KS(B,k,C,x),le=new kv(B,nt,k),J=new jv(B,nt,k),k.programs=ae.programs,R.capabilities=C,R.extensions=nt,R.properties=V,R.renderLists=ue,R.shadowMap=De,R.state=x,R.info=k}_!==yi&&(T=new rx(_,t.width,t.height,o,r,s));const be=new qS(R,B);this.xr=be,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const b=nt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=nt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(b){b!==void 0&&(te=b,this.setSize($e,$,!1))},this.getSize=function(b){return b.set($e,$)},this.setSize=function(b,O,W=!0){if(be.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}$e=b,$=O,t.width=Math.floor(b*te),t.height=Math.floor(O*te),W===!0&&(t.style.width=b+"px",t.style.height=O+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set($e*te,$*te).floor()},this.setDrawingBufferSize=function(b,O,W){$e=b,$=O,te=W,t.width=Math.floor(b*W),t.height=Math.floor(O*W),this.setViewport(0,0,b,O)},this.setEffects=function(b){if(_===yi){Je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let O=0;O<b.length;O++)if(b[O].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ee)},this.getViewport=function(b){return b.copy(_e)},this.setViewport=function(b,O,W,H){b.isVector4?_e.set(b.x,b.y,b.z,b.w):_e.set(b,O,W,H),x.viewport(ee.copy(_e).multiplyScalar(te).round())},this.getScissor=function(b){return b.copy(He)},this.setScissor=function(b,O,W,H){b.isVector4?He.set(b.x,b.y,b.z,b.w):He.set(b,O,W,H),x.scissor(ne.copy(He).multiplyScalar(te).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(b){x.setScissorTest(Dt=b)},this.setOpaqueSort=function(b){xe=b},this.setTransparentSort=function(b){Ne=b},this.getClearColor=function(b){return b.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(b=!0,O=!0,W=!0){let H=0;if(b){let G=!1;if(Q!==null){const pe=Q.texture.format;G=m.has(pe)}if(G){const pe=Q.texture.type,ve=g.has(pe),de=Fe.getClearColor(),Me=Fe.getClearAlpha(),Ee=de.r,ze=de.g,We=de.b;ve?(M[0]=Ee,M[1]=ze,M[2]=We,M[3]=Me,B.clearBufferuiv(B.COLOR,0,M)):(w[0]=Ee,w[1]=ze,w[2]=We,w[3]=Me,B.clearBufferiv(B.COLOR,0,w))}else H|=B.COLOR_BUFFER_BIT}O&&(H|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(H|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&B.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),N=b},this.dispose=function(){t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",et,!1),t.removeEventListener("webglcontextcreationerror",Bi,!1),Fe.dispose(),ue.dispose(),oe.dispose(),V.dispose(),re.dispose(),j.dispose(),me.dispose(),ie.dispose(),ae.dispose(),be.dispose(),be.removeEventListener("sessionstart",Zu),be.removeEventListener("sessionend",Qu),er.stop()};function ut(b){b.preventDefault(),ho("WebGLRenderer: Context Lost."),I=!0}function et(){ho("WebGLRenderer: Context Restored."),I=!1;const b=k.autoReset,O=De.enabled,W=De.autoUpdate,H=De.needsUpdate,G=De.type;Pe(),k.autoReset=b,De.enabled=O,De.autoUpdate=W,De.needsUpdate=H,De.type=G}function Bi(b){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Yi(b){const O=b.target;O.removeEventListener("dispose",Yi),zp(O)}function zp(b){kp(b),V.remove(b)}function kp(b){const O=V.get(b).programs;O!==void 0&&(O.forEach(function(W){ae.releaseProgram(W)}),b.isShaderMaterial&&ae.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,W,H,G,pe){O===null&&(O=hi);const ve=G.isMesh&&G.matrixWorld.determinantAffine()<0,de=Vp(b,O,W,H,G);x.setMaterial(H,ve);let Me=W.index,Ee=1;if(H.wireframe===!0){if(Me=K.getWireframeAttribute(W),Me===void 0)return;Ee=2}const ze=W.drawRange,We=W.attributes.position;let ye=ze.start*Ee,tt=(ze.start+ze.count)*Ee;pe!==null&&(ye=Math.max(ye,pe.start*Ee),tt=Math.min(tt,(pe.start+pe.count)*Ee)),Me!==null?(ye=Math.max(ye,0),tt=Math.min(tt,Me.count)):We!=null&&(ye=Math.max(ye,0),tt=Math.min(tt,We.count));const At=tt-ye;if(At<0||At===1/0)return;me.setup(G,H,de,W,Me);let dt,at=le;if(Me!==null&&(dt=se.get(Me),at=J,at.setIndex(dt)),G.isMesh)H.wireframe===!0?(x.setLineWidth(H.wireframeLinewidth*wt()),at.setMode(B.LINES)):at.setMode(B.TRIANGLES);else if(G.isLine){let Wt=H.linewidth;Wt===void 0&&(Wt=1),x.setLineWidth(Wt*wt()),G.isLineSegments?at.setMode(B.LINES):G.isLineLoop?at.setMode(B.LINE_LOOP):at.setMode(B.LINE_STRIP)}else G.isPoints?at.setMode(B.POINTS):G.isSprite&&at.setMode(B.TRIANGLES);if(G.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))at.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Wt=G._multiDrawStarts,ge=G._multiDrawCounts,ii=G._multiDrawCount,Ze=Me?se.get(Me).bytesPerElement:1,Li=V.get(H).currentProgram.getUniforms();for(let $i=0;$i<ii;$i++)Li.setValue(B,"_gl_DrawID",$i),at.render(Wt[$i]/Ze,ge[$i])}else if(G.isInstancedMesh)at.renderInstances(ye,At,G.count);else if(W.isInstancedBufferGeometry){const Wt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ge=Math.min(W.instanceCount,Wt);at.renderInstances(ye,At,ge)}else at.render(ye,At)};function Ju(b,O,W,H){N!==null&&b.isNodeMaterial&&N.setObject(H,b),Qe===!0&&Re.setState(b,W,!1),b.transparent===!0&&b.side===Mn&&b.forceSinglePass===!1?(b.side=li,b.needsUpdate=!0,ga(b,O,H),b.side=_r,b.needsUpdate=!0,ga(b,O,H),b.side=Mn):ga(b,O,H)}this.compile=function(b,O,W=null){W===null&&(W=b),N!==null&&N.renderStart(b,O,W),E=oe.get(W),E.init(O),v.push(E),W.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),b!==W&&b.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),E.setupLights(),N!==null&&N.updateLights(E.state.lightsArray),ct=this.localClippingEnabled,Qe=Re.init(this.clippingPlanes,ct),Qe===!0&&Re.setGlobalState(this.clippingPlanes,O),N!==null&&De.render(E.state.shadowsArray,W,O);const H=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const pe=G.material;if(pe)if(Array.isArray(pe))for(let ve=0;ve<pe.length;ve++){const de=pe[ve];Ju(de,W,O,G),H.add(de)}else Ju(pe,W,O,G),H.add(pe)}),E=v.pop(),N!==null&&N.renderEnd(),H},this.compileAsync=function(b,O,W=null){const H=this.compile(b,O,W);return new Promise(G=>{function pe(){if(H.forEach(function(ve){const Me=V.get(ve).currentProgram;(Me===void 0||Me.isReady())&&H.delete(ve)}),H.size===0){G(b);return}setTimeout(pe,10)}nt.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Uo=null;function Hp(b){Uo&&Uo(b)}function Zu(){er.stop()}function Qu(){er.start()}const er=new bf;er.setAnimationLoop(Hp),typeof self<"u"&&er.setContext(self),this.setAnimationLoop=function(b){Uo=b,be.setAnimationLoop(b),b===null?er.stop():er.start()},be.addEventListener("sessionstart",Zu),be.addEventListener("sessionend",Qu),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;N!==null&&N.renderStart(b,O);const W=be.enabled===!0&&be.isPresenting===!0,H=T!==null&&(Q===null||W)&&T.begin(R,Q);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(O),O=be.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,O,Q),E=oe.get(b,v.length),E.init(O),E.state.textureUnits=Y.getTextureUnits(),v.push(E),qe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ve.setFromProjectionMatrix(qe,nn,O.reversedDepth),ct=this.localClippingEnabled,Qe=Re.init(this.clippingPlanes,ct),y=ue.get(b,A.length),y.init(),A.push(y),be.enabled===!0&&be.isPresenting===!0){const ve=R.xr.getDepthSensingMesh();ve!==null&&No(ve,O,-1/0,R.sortObjects)}No(b,O,0,R.sortObjects),y.finish(),N!==null&&N.updateLights(E.state.lightsArray),R.sortObjects===!0&&y.sort(xe,Ne),gt=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,gt&&Fe.addToRenderList(y,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Qe===!0&&Re.beginShadows();const G=E.state.shadowsArray;if(De.render(G,b,O),Qe===!0&&Re.endShadows(),(H&&T.hasRenderPass())===!1){const ve=y.opaque,de=y.transmissive;if(E.setupLights(),O.isArrayCamera){const Me=O.cameras;if(de.length>0)for(let Ee=0,ze=Me.length;Ee<ze;Ee++){const We=Me[Ee];eh(ve,de,b,We)}gt&&Fe.render(b);for(let Ee=0,ze=Me.length;Ee<ze;Ee++){const We=Me[Ee];ju(y,b,We,We.viewport)}}else de.length>0&&eh(ve,de,b,O),gt&&Fe.render(b),ju(y,b,O)}Q!==null&&z===0&&(Y.updateMultisampleRenderTarget(Q),Y.updateRenderTargetMipmap(Q)),H&&T.end(R),b.isScene===!0&&b.onAfterRender(R,b,O),me.resetDefaultState(),X=-1,Z=null,v.pop(),v.length>0?(E=v[v.length-1],Y.setTextureUnits(E.state.textureUnits),Qe===!0&&Re.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?y=A[A.length-1]:y=null,N!==null&&N.renderEnd()};function No(b,O,W,H){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLightProbeGrid)E.pushLightProbeGrid(b);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(Ve)){H&&Ot.setFromMatrixPosition(b.matrixWorld).applyMatrix4(qe);const ve=j.update(b),de=b.material;de.visible&&y.push(b,ve,de,W,Ot.z,null,O)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(Ve))){const ve=j.update(b),de=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ot.copy(b.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Ot.copy(ve.boundingSphere.center)),Ot.applyMatrix4(b.matrixWorld).applyMatrix4(qe)),Array.isArray(de)){const Me=ve.groups;for(let Ee=0,ze=Me.length;Ee<ze;Ee++){const We=Me[Ee],ye=de[We.materialIndex];ye&&ye.visible&&y.push(b,ve,ye,W,Ot.z,We,O)}}else de.visible&&y.push(b,ve,de,W,Ot.z,null,O)}}const pe=b.children;for(let ve=0,de=pe.length;ve<de;ve++)No(pe[ve],O,W,H)}function ju(b,O,W,H){const{opaque:G,transmissive:pe,transparent:ve}=b;E.setupLightsView(W),Qe===!0&&Re.setGlobalState(R.clippingPlanes,W),H&&x.viewport(ee.copy(H)),G.length>0&&ma(G,O,W),pe.length>0&&ma(pe,O,W),ve.length>0&&ma(ve,O,W),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function eh(b,O,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[H.id]===void 0){const ye=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[H.id]=new jt(1,1,{generateMipmaps:!0,type:ye?ci:yi,minFilter:cr,samples:Math.max(4,C.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}const pe=E.state.transmissionRenderTarget[H.id],ve=H.viewport||ee;pe.setSize(ve.z*R.transmissionResolutionScale,ve.w*R.transmissionResolutionScale);const de=R.getRenderTarget(),Me=R.getActiveCubeFace(),Ee=R.getActiveMipmapLevel();R.setRenderTarget(pe),R.getClearColor(Be),Ue=R.getClearAlpha(),Ue<1&&R.setClearColor(16777215,.5),R.clear(),gt&&Fe.render(W);const ze=R.toneMapping;R.toneMapping=ln;const We=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),E.setupLightsView(H),Qe===!0&&Re.setGlobalState(R.clippingPlanes,H),ma(b,W,H),Y.updateMultisampleRenderTarget(pe),Y.updateRenderTargetMipmap(pe),nt.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let tt=0,At=O.length;tt<At;tt++){const dt=O[tt],{object:at,geometry:Wt,material:ge,group:ii}=dt;if(ge.side===Mn&&at.layers.test(H.layers)){const Ze=ge.side;ge.side=li,ge.needsUpdate=!0,th(at,W,H,Wt,ge,ii),ge.side=Ze,ge.needsUpdate=!0,ye=!0}}ye===!0&&(Y.updateMultisampleRenderTarget(pe),Y.updateRenderTargetMipmap(pe))}R.setRenderTarget(de,Me,Ee),R.setClearColor(Be,Ue),We!==void 0&&(H.viewport=We),R.toneMapping=ze}function ma(b,O,W){const H=O.isScene===!0?O.overrideMaterial:null;for(let G=0,pe=b.length;G<pe;G++){const ve=b[G],{object:de,geometry:Me,group:Ee}=ve;let ze=ve.material;ze.allowOverride===!0&&H!==null&&(ze=H),de.layers.test(W.layers)&&th(de,O,W,Me,ze,Ee)}}function th(b,O,W,H,G,pe){N!==null&&G.isNodeMaterial&&N.setObject(b,G),b.onBeforeRender(R,O,W,H,G,pe),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(R,O,W,H,b,pe),G.transparent===!0&&G.side===Mn&&G.forceSinglePass===!1?(G.side=li,G.needsUpdate=!0,R.renderBufferDirect(W,O,H,G,b,pe),G.side=_r,G.needsUpdate=!0,R.renderBufferDirect(W,O,H,G,b,pe),G.side=Mn):R.renderBufferDirect(W,O,H,G,b,pe),b.onAfterRender(R,O,W,H,G,pe)}function ga(b,O,W){O.isScene!==!0&&(O=hi);const H=V.get(b),G=E.state.lights,pe=E.state.shadowsArray,ve=G.state.version,de=ae.getParameters(b,G.state,pe,O,W,E.state.lightProbeGridArray),Me=ae.getProgramCacheKey(de);let Ee=H.programs;H.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?O.environment:null,H.fog=O.fog;const ze=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;H.envMap=re.get(b.envMap||H.environment,ze),H.envMapRotation=H.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Ee===void 0&&(b.addEventListener("dispose",Yi),Ee=new Map,H.programs=Ee);let We=Ee.get(Me);if(We!==void 0){if(H.currentProgram===We&&H.lightsStateVersion===ve)return nh(b,de),We}else de.uniforms=ae.getUniforms(b),N!==null&&b.isNodeMaterial&&N.build(b,W,de),b.onBeforeCompile(de,R),We=ae.acquireProgram(de,Me),Ee.set(Me,We),H.uniforms=de.uniforms;const ye=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ye.clippingPlanes=Re.uniform),nh(b,de),H.needsLights=Xp(b),H.lightsStateVersion=ve,H.needsLights&&(ye.ambientLightColor.value=G.state.ambient,ye.lightProbe.value=G.state.probe,ye.sunLights.value=G.state.sun,ye.sunLightShadows.value=G.state.sunShadow,ye.directionalLights.value=G.state.directional,ye.directionalLightShadows.value=G.state.directionalShadow,ye.spotLights.value=G.state.spot,ye.spotLightShadows.value=G.state.spotShadow,ye.rectAreaLights.value=G.state.rectArea,ye.ltc_1.value=G.state.rectAreaLTC1,ye.ltc_2.value=G.state.rectAreaLTC2,ye.pointLights.value=G.state.point,ye.pointLightShadows.value=G.state.pointShadow,ye.hemisphereLights.value=G.state.hemi,ye.sunShadowMatrix.value=G.state.sunShadowMatrix,ye.sunShadowCascade.value=G.state.sunShadowCascade,ye.directionalShadowMatrix.value=G.state.directionalShadowMatrix,ye.spotLightMatrix.value=G.state.spotLightMatrix,ye.spotLightMap.value=G.state.spotLightMap,ye.pointShadowMatrix.value=G.state.pointShadowMatrix),H.lightProbeGrid=E.state.lightProbeGridArray.length>0,H.currentProgram=We,H.uniformsList=null,We}function ih(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=to.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function nh(b,O){const W=V.get(b);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function Gp(b,O){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;S.setFromMatrixPosition(O.matrixWorld);for(let W=0,H=b.length;W<H;W++){const G=b[W];if(G.texture!==null&&G.boundingBox.containsPoint(S))return G}return null}function Vp(b,O,W,H,G){O.isScene!==!0&&(O=hi),Y.resetTextureUnits();const pe=O.fog,ve=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?O.environment:null,de=Q===null?R.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Ye.workingColorSpace,Me=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ee=re.get(H.envMap||ve,Me),ze=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,We=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),ye=!!W.morphAttributes.position,tt=!!W.morphAttributes.normal,At=!!W.morphAttributes.color;let dt=ln;H.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(dt=R.toneMapping);const at=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Wt=at!==void 0?at.length:0,ge=V.get(H),ii=E.state.lights;if(Qe===!0&&(ct===!0||b!==Z)){const ht=b===Z&&H.id===X;Re.setState(H,b,ht)}let Ze=!1;H.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==ii.state.version||ge.outputColorSpace!==de||G.isBatchedMesh&&ge.batching===!1||!G.isBatchedMesh&&ge.batching===!0||G.isBatchedMesh&&ge.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&ge.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&ge.instancing===!1||!G.isInstancedMesh&&ge.instancing===!0||G.isSkinnedMesh&&ge.skinning===!1||!G.isSkinnedMesh&&ge.skinning===!0||G.isInstancedMesh&&ge.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&ge.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&ge.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&ge.instancingMorph===!1&&G.morphTexture!==null||ge.envMap!==Ee||H.fog===!0&&ge.fog!==pe||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==Re.numPlanes||ge.numIntersection!==Re.numIntersection)||ge.vertexAlphas!==ze||ge.vertexTangents!==We||ge.morphTargets!==ye||ge.morphNormals!==tt||ge.morphColors!==At||ge.toneMapping!==dt||ge.morphTargetsCount!==Wt||!!ge.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Ze=!0):(Ze=!0,ge.__version=H.version);let Li=ge.currentProgram;Ze===!0&&(Li=ga(H,O,G),N&&H.isNodeMaterial&&N.onUpdateProgram(H,Li,ge));let $i=!1,In=!1,Ar=!1;const st=Li.getUniforms(),bt=ge.uniforms;if(x.useProgram(Li.program)&&($i=!0,In=!0,Ar=!0),H.id!==X&&(X=H.id,In=!0),ge.needsLights){const ht=Gp(E.state.lightProbeGridArray,G);ge.lightProbeGrid!==ht&&(ge.lightProbeGrid=ht,In=!0)}if($i||Z!==b){x.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),st.setValue(B,"projectionMatrix",b.projectionMatrix),st.setValue(B,"viewMatrix",b.matrixWorldInverse);const Nn=st.map.cameraPosition;Nn!==void 0&&Nn.setValue(B,pt.setFromMatrixPosition(b.matrixWorld)),C.logarithmicDepthBuffer&&st.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&st.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),Z!==b&&(Z=b,In=!0,Ar=!0)}if(ge.needsLights&&(ii.state.sunShadowMap.length>0&&st.setValue(B,"sunShadowMap",ii.state.sunShadowMap,Y),ii.state.directionalShadowMap.length>0&&st.setValue(B,"directionalShadowMap",ii.state.directionalShadowMap,Y),ii.state.spotShadowMap.length>0&&st.setValue(B,"spotShadowMap",ii.state.spotShadowMap,Y),ii.state.pointShadowMap.length>0&&st.setValue(B,"pointShadowMap",ii.state.pointShadowMap,Y)),G.isSkinnedMesh){st.setOptional(B,G,"bindMatrix"),st.setOptional(B,G,"bindMatrixInverse");const ht=G.skeleton;ht&&(ht.boneTexture===null&&ht.computeBoneTexture(),st.setValue(B,"boneTexture",ht.boneTexture,Y))}G.isBatchedMesh&&(st.setOptional(B,G,"batchingTexture"),st.setValue(B,"batchingTexture",G._matricesTexture,Y),st.setOptional(B,G,"batchingIdTexture"),st.setValue(B,"batchingIdTexture",G._indirectTexture,Y),st.setOptional(B,G,"batchingColorTexture"),G._colorsTexture!==null&&st.setValue(B,"batchingColorTexture",G._colorsTexture,Y));const Un=W.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&F.update(G,W,Li),(In||ge.receiveShadow!==G.receiveShadow)&&(ge.receiveShadow=G.receiveShadow,st.setValue(B,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&O.environment!==null&&(bt.envMapIntensity.value=O.environmentIntensity),bt.dfgLUT!==void 0&&(bt.dfgLUT.value=ZS()),In){if(st.setValue(B,"toneMappingExposure",R.toneMappingExposure),ge.needsLights&&Wp(bt,Ar),pe&&H.fog===!0&&Ce.refreshFogUniforms(bt,pe),Ce.refreshMaterialUniforms(bt,H,te,$,E.state.transmissionRenderTarget[b.id]),ge.needsLights&&ge.lightProbeGrid){const ht=ge.lightProbeGrid;bt.probesSH.value=ht.texture,bt.probesMin.value.copy(ht.boundingBox.min),bt.probesMax.value.copy(ht.boundingBox.max),bt.probesResolution.value.copy(ht.resolution)}to.upload(B,ih(ge),bt,Y)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(to.upload(B,ih(ge),bt,Y),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&st.setValue(B,"center",G.center),st.setValue(B,"modelViewMatrix",G.modelViewMatrix),st.setValue(B,"normalMatrix",G.normalMatrix),st.setValue(B,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){const ht=H.uniformsGroups;for(let Nn=0,Cr=ht.length;Nn<Cr;Nn++){const sh=ht[Nn];ie.update(sh,Li),ie.bind(sh,Li)}}return Li}function Wp(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.sunLights.needsUpdate=O,b.sunLightShadows.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function Xp(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(b,O,W){const H=V.get(b);H.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),V.get(b.texture).__webglTexture=O,V.get(b.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,O){const W=V.get(b);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,W=0){Q=b,q=O,z=W;let H=null,G=!1,pe=!1;if(b){const de=V.get(b);if(de.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(B.FRAMEBUFFER,de.__webglFramebuffer),ee.copy(b.viewport),ne.copy(b.scissor),Se=b.scissorTest,x.viewport(ee),x.scissor(ne),x.setScissorTest(Se),X=-1;return}else if(de.__webglFramebuffer===void 0)Y.setupRenderTarget(b);else if(de.__hasExternalTextures)Y.rebindTextures(b,V.get(b.texture).__webglTexture,V.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const ze=b.depthTexture;if(de.__boundDepthTexture!==ze){if(ze!==null&&V.has(ze)&&(b.width!==ze.image.width||b.height!==ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(b)}}const Me=b.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(pe=!0);const Ee=V.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ee[O])?H=Ee[O][W]:H=Ee[O],G=!0):b.samples>0&&Y.useMultisampledRTT(b)===!1?H=V.get(b).__webglMultisampledFramebuffer:Array.isArray(Ee)?H=Ee[W]:H=Ee,ee.copy(b.viewport),ne.copy(b.scissor),Se=b.scissorTest}else ee.copy(_e).multiplyScalar(te).floor(),ne.copy(He).multiplyScalar(te).floor(),Se=Dt;if(W!==0&&(H=L),x.bindFramebuffer(B.FRAMEBUFFER,H)&&x.drawBuffers(b,H),x.viewport(ee),x.scissor(ne),x.setScissorTest(Se),G){const de=V.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+O,de.__webglTexture,W)}else if(pe){const de=O;for(let Me=0;Me<b.textures.length;Me++){const Ee=V.get(b.textures[Me]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Me,Ee.__webglTexture,W,de)}}else if(b!==null&&W!==0){const de=V.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,de.__webglTexture,W)}X=-1};function rh(b){const O=V.get(b);return(O.__readFormat!==b.format||O.__readType!==b.type)&&(O.__readFormat=b.format,O.__readType=b.type,O.__formatReadable=C.textureFormatReadable(b.format),O.__typeReadable=C.textureTypeReadable(b.type)),O}this.readRenderTargetPixels=function(b,O,W,H,G,pe,ve,de=0){if(!(b&&b.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=V.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me){x.bindFramebuffer(B.FRAMEBUFFER,Me);try{const Ee=b.textures[de],ze=Ee.format,We=Ee.type;b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+de);const ye=rh(Ee);if(ye.__formatReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ye.__typeReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-H&&W>=0&&W<=b.height-G&&B.readPixels(O,W,H,G,ce.convert(ze),ce.convert(We),pe)}finally{const Ee=Q!==null?V.get(Q).__webglFramebuffer:null;x.bindFramebuffer(B.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(b,O,W,H,G,pe,ve,de=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=V.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me)if(O>=0&&O<=b.width-H&&W>=0&&W<=b.height-G){x.bindFramebuffer(B.FRAMEBUFFER,Me);const Ee=b.textures[de],ze=Ee.format,We=Ee.type;b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+de);const ye=rh(Ee);if(ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,tt),B.bufferData(B.PIXEL_PACK_BUFFER,pe.byteLength,B.STREAM_READ),B.readPixels(O,W,H,G,ce.convert(ze),ce.convert(We),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);const At=Q!==null?V.get(Q).__webglFramebuffer:null;x.bindFramebuffer(B.FRAMEBUFFER,At);const dt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Rm(B,dt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,tt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,pe),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(tt),B.deleteSync(dt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,O=null,W=0){const H=Math.pow(2,-W),G=Math.floor(b.image.width*H),pe=Math.floor(b.image.height*H),ve=O!==null?O.x:0,de=O!==null?O.y:0;Y.setTexture2D(b,0),B.copyTexSubImage2D(B.TEXTURE_2D,W,0,0,ve,de,G,pe),x.unbindTexture()},this.copyTextureToTexture=function(b,O,W=null,H=null,G=0,pe=0){let ve,de,Me,Ee,ze,We,ye,tt,At;const dt=b.isCompressedTexture?b.mipmaps[pe]:b.image;if(W!==null)ve=W.max.x-W.min.x,de=W.max.y-W.min.y,Me=W.isBox3?W.max.z-W.min.z:1,Ee=W.min.x,ze=W.min.y,We=W.isBox3?W.min.z:0;else{const bt=Math.pow(2,-G);ve=Math.floor(dt.width*bt),de=Math.floor(dt.height*bt),b.isDataArrayTexture?Me=dt.depth:b.isData3DTexture?Me=Math.floor(dt.depth*bt):Me=1,Ee=0,ze=0,We=0}H!==null?(ye=H.x,tt=H.y,At=H.z):(ye=0,tt=0,At=0);const at=ce.convert(O.format),Wt=ce.convert(O.type);let ge;O.isData3DTexture?(Y.setTexture3D(O,0),ge=B.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Y.setTexture2DArray(O,0),ge=B.TEXTURE_2D_ARRAY):(Y.setTexture2D(O,0),ge=B.TEXTURE_2D),x.activeTexture(B.TEXTURE0),x.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,O.flipY),x.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),x.pixelStorei(B.UNPACK_ALIGNMENT,O.unpackAlignment);const ii=x.getParameter(B.UNPACK_ROW_LENGTH),Ze=x.getParameter(B.UNPACK_IMAGE_HEIGHT),Li=x.getParameter(B.UNPACK_SKIP_PIXELS),$i=x.getParameter(B.UNPACK_SKIP_ROWS),In=x.getParameter(B.UNPACK_SKIP_IMAGES);x.pixelStorei(B.UNPACK_ROW_LENGTH,dt.width),x.pixelStorei(B.UNPACK_IMAGE_HEIGHT,dt.height),x.pixelStorei(B.UNPACK_SKIP_PIXELS,Ee),x.pixelStorei(B.UNPACK_SKIP_ROWS,ze),x.pixelStorei(B.UNPACK_SKIP_IMAGES,We);const Ar=b.isDataArrayTexture||b.isData3DTexture,st=O.isDataArrayTexture||O.isData3DTexture;if(b.isDepthTexture){const bt=V.get(b),Un=V.get(O),ht=V.get(bt.__renderTarget),Nn=V.get(Un.__renderTarget);x.bindFramebuffer(B.READ_FRAMEBUFFER,ht.__webglFramebuffer),x.bindFramebuffer(B.DRAW_FRAMEBUFFER,Nn.__webglFramebuffer);for(let Cr=0;Cr<Me;Cr++)Ar&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,V.get(b).__webglTexture,G,We+Cr),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,V.get(O).__webglTexture,pe,At+Cr)),B.blitFramebuffer(Ee,ze,ve,de,ye,tt,ve,de,B.DEPTH_BUFFER_BIT,B.NEAREST);x.bindFramebuffer(B.READ_FRAMEBUFFER,null),x.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||V.has(b)){const bt=V.get(b),Un=V.get(O);x.bindFramebuffer(B.READ_FRAMEBUFFER,D),x.bindFramebuffer(B.DRAW_FRAMEBUFFER,U);for(let ht=0;ht<Me;ht++)Ar?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,bt.__webglTexture,G,We+ht):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,bt.__webglTexture,G),st?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Un.__webglTexture,pe,At+ht):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Un.__webglTexture,pe),G!==0?B.blitFramebuffer(Ee,ze,ve,de,ye,tt,ve,de,B.COLOR_BUFFER_BIT,B.NEAREST):st?B.copyTexSubImage3D(ge,pe,ye,tt,At+ht,Ee,ze,ve,de):B.copyTexSubImage2D(ge,pe,ye,tt,Ee,ze,ve,de);x.bindFramebuffer(B.READ_FRAMEBUFFER,null),x.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else st?b.isDataTexture||b.isData3DTexture?B.texSubImage3D(ge,pe,ye,tt,At,ve,de,Me,at,Wt,dt.data):O.isCompressedArrayTexture?B.compressedTexSubImage3D(ge,pe,ye,tt,At,ve,de,Me,at,dt.data):B.texSubImage3D(ge,pe,ye,tt,At,ve,de,Me,at,Wt,dt):b.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,pe,ye,tt,ve,de,at,Wt,dt.data):b.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,pe,ye,tt,dt.width,dt.height,at,dt.data):B.texSubImage2D(B.TEXTURE_2D,pe,ye,tt,ve,de,at,Wt,dt);x.pixelStorei(B.UNPACK_ROW_LENGTH,ii),x.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ze),x.pixelStorei(B.UNPACK_SKIP_PIXELS,Li),x.pixelStorei(B.UNPACK_SKIP_ROWS,$i),x.pixelStorei(B.UNPACK_SKIP_IMAGES,In),pe===0&&O.generateMipmaps&&B.generateMipmap(ge),x.unbindTexture()},this.initRenderTarget=function(b){V.get(b).__webglFramebuffer===void 0&&Y.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Y.setTextureCube(b,0):b.isData3DTexture?Y.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Y.setTexture2DArray(b,0):Y.setTexture2D(b,0),x.unbindTexture()},this.resetState=function(){q=0,z=0,Q=null,x.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}var md="1.3.27";function Lf(n,e,t){return Math.max(n,Math.min(e,t))}function jS(n,e,t){return(1-t)*n+t*e}function eM(n,e,t,i){return jS(n,e,1-Math.exp(-t*i))}function tM(n,e){return(n%e+e)%e}var iM=class{constructor(){Te(this,"isRunning",!1);Te(this,"value",0);Te(this,"from",0);Te(this,"to",0);Te(this,"currentTime",0);Te(this,"lerp");Te(this,"duration");Te(this,"easing");Te(this,"onUpdate")}advance(n){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=n;const i=Lf(0,this.currentTime/this.duration,1);e=i>=1;const r=e?1:this.easing(i);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=eM(this.value,this.to,this.lerp*60,n),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(n,e,{lerp:t,duration:i,easing:r,onStart:s,onUpdate:a}){this.from=this.value=n,this.to=e,this.lerp=t,this.duration=i,this.easing=r,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=a}};function nM(n,e){let t;return function(...i){clearTimeout(t),t=setTimeout(()=>{t=void 0,n.apply(this,i)},e)}}var rM=class{constructor(n,e,{autoResize:t=!0,debounce:i=250}={}){Te(this,"width",0);Te(this,"height",0);Te(this,"scrollHeight",0);Te(this,"scrollWidth",0);Te(this,"debouncedResize");Te(this,"wrapperResizeObserver");Te(this,"contentResizeObserver");Te(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Te(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Te(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=n,this.content=e,t&&(this.debouncedResize=nM(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var n,e;(n=this.wrapperResizeObserver)==null||n.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Df=class{constructor(){Te(this,"events",{})}emit(n,...e){var i;const t=this.events[n]||[];for(let r=0,s=t.length;r<s;r++)(i=t[r])==null||i.call(t,...e)}on(n,e){return this.events[n]?this.events[n].push(e):this.events[n]=[e],()=>{var t;this.events[n]=(t=this.events[n])==null?void 0:t.filter(i=>e!==i)}}off(n,e){var t;this.events[n]=(t=this.events[n])==null?void 0:t.filter(i=>e!==i)}destroy(){this.events={}}};const sM=100/6,Hn={passive:!1};function gd(n,e){return n===1?sM:n===2?e:1}var aM=class{constructor(n,e={wheelMultiplier:1,touchMultiplier:1}){Te(this,"touchStart",{x:0,y:0});Te(this,"lastDelta",{x:0,y:0});Te(this,"window",{width:0,height:0});Te(this,"emitter",new Df);Te(this,"onTouchStart",n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:n})});Te(this,"onTouchMove",n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n,i=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:i,y:r},this.emitter.emit("scroll",{deltaX:i,deltaY:r,event:n})});Te(this,"onTouchEnd",n=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:n})});Te(this,"onWheel",n=>{let{deltaX:e,deltaY:t,deltaMode:i}=n;const r=gd(i,this.window.width),s=gd(i,this.window.height);e*=r,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:n})});Te(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=n,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Hn),this.element.addEventListener("touchstart",this.onTouchStart,Hn),this.element.addEventListener("touchmove",this.onTouchMove,Hn),this.element.addEventListener("touchend",this.onTouchEnd,Hn)}on(n,e){return this.emitter.on(n,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Hn),this.element.removeEventListener("touchstart",this.onTouchStart,Hn),this.element.removeEventListener("touchmove",this.onTouchMove,Hn),this.element.removeEventListener("touchend",this.onTouchEnd,Hn)}};const _d=n=>Math.min(1,1.001-2**(-10*n));var oM=class{constructor({wrapper:n=window,content:e=document.documentElement,eventsTarget:t=n,smoothWheel:i=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:a=1.7,duration:o,easing:l,lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:d=h==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:p=1,autoResize:_=!0,prevent:m,virtualScroll:g,overscroll:M=!0,autoRaf:w=!1,anchors:S=!1,autoToggle:y=!1,allowNestedScroll:E=!1,__experimental__naiveDimensions:A=!1,naiveDimensions:v=A,stopInertiaOnNavigate:T=!1,respectReducedMotion:R=!0}={}){Te(this,"_isScrolling",!1);Te(this,"_isStopped",!1);Te(this,"_isLocked",!1);Te(this,"_preventNextNativeScrollEvent",!1);Te(this,"_resetVelocityTimeout",null);Te(this,"_rafId",null);Te(this,"_isDraggingSelection",!1);Te(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Te(this,"isTouching");Te(this,"isIos");Te(this,"time",0);Te(this,"userData",{});Te(this,"lastVelocity",0);Te(this,"velocity",0);Te(this,"direction",0);Te(this,"options");Te(this,"targetScroll");Te(this,"animatedScroll");Te(this,"animate",new iM);Te(this,"emitter",new Df);Te(this,"dimensions");Te(this,"virtualScroll");Te(this,"onScrollEnd",n=>{n instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&n.stopPropagation()});Te(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Te(this,"onTransitionEnd",n=>{var e;(e=n.propertyName)!=null&&e.includes("overflow")&&n.target===this.rootElement&&this.checkOverflow()});Te(this,"onClick",n=>{const e=n.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),t=new URL(window.location.href);if(this.options.anchors){const i=e.find(r=>t.host===r.host&&t.pathname===r.pathname&&r.hash);if(i){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(i.hash);this.scrollTo(s,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(i=>t.host===i.host&&t.pathname!==i.pathname)){this.reset();return}});Te(this,"onPointerDown",n=>{n.button===1&&this.reset()});Te(this,"onVirtualScroll",n=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(n)===!1)return;const{deltaX:e,deltaY:t,event:i}=n;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const r=i.type.includes("touch"),s=i.type.includes("wheel");if(r&&this.isIos&&(i.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(i)),this._isDraggingSelection)){i.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=i.type==="touchstart"||i.type==="touchmove";const a=e===0&&t===0;if(this.options.syncTouch&&r&&i.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}const o=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(a||o)return;let l=i.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(p=>{var _,m,g,M,w;return p instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(p))||((_=p.hasAttribute)==null?void 0:_.call(p,"data-lenis-prevent"))||u==="vertical"&&((m=p.hasAttribute)==null?void 0:m.call(p,"data-lenis-prevent-vertical"))||u==="horizontal"&&((g=p.hasAttribute)==null?void 0:g.call(p,"data-lenis-prevent-horizontal"))||r&&((M=p.hasAttribute)==null?void 0:M.call(p,"data-lenis-prevent-touch"))||s&&((w=p.hasAttribute)==null?void 0:w.call(p,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let h=t;this.options.gestureOrientation==="both"?h=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(h=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const d=r&&this.options.syncTouch,f=r&&i.type==="touchend";f&&(h=Math.sign(h)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+h,{programmatic:!1,...d?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Te(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const n=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-n,this.direction=Math.sign(this.animatedScroll-n),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Te(this,"raf",n=>{const e=n-(this.time||n);this.time=n,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=md,window.lenis||(window.lenis={}),window.lenis.version=md,h==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!n||n===document.documentElement)&&(n=window),typeof o=="number"&&typeof l!="function"?l=_d:typeof l=="function"&&typeof o!="number"&&(o=1),this.options={wrapper:n,content:e,eventsTarget:t,smoothWheel:i,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:a,duration:o,easing:l,lerp:c,infinite:u,gestureOrientation:d,orientation:h,touchMultiplier:f,wheelMultiplier:p,autoResize:_,prevent:m,virtualScroll:g,overscroll:M,autoRaf:w,anchors:S,autoToggle:y,allowNestedScroll:E,naiveDimensions:v,stopInertiaOnNavigate:T,respectReducedMotion:R},this.dimensions=new rM(n,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new aM(t,{touchMultiplier:f,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(n,e){return this.emitter.on(n,e)}off(n,e){return this.emitter.off(n,e)}get overflow(){const n=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[n]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(n){this.isHorizontal?this.options.wrapper.scrollTo({left:n,behavior:"instant"}):this.options.wrapper.scrollTo({top:n,behavior:"instant"})}isTouchOnSelectionHandle(n){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=n.targetTouches[0]??n.changedTouches[0];if(!t)return!1;const i=e.getRangeAt(0).getClientRects();if(i.length===0)return!1;const r=i[0],s=i[i.length-1],a=40,o=Math.hypot(t.clientX-r.left,t.clientY-r.top)<=a,l=Math.hypot(t.clientX-s.right,t.clientY-s.bottom)<=a;return o||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(n,{offset:e=0,immediate:t=!1,lock:i=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:a=r?this.options.duration:void 0,easing:o=r?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:h}={}){if(this.prefersReducedMotion&&(r?t=!0:(s=1,a=void 0,o=void 0)),(this.isStopped||this.isLocked)&&!u)return;let d=n,f=e;if(typeof d=="string"&&["top","left","start","#"].includes(d))d=0;else if(typeof d=="string"&&["bottom","right","end"].includes(d))d=this.limit;else{let p=null;if(typeof d=="string"?(p=d.startsWith("#")?document.getElementById(d.slice(1)):document.querySelector(d),p||(d==="#top"?d=0:console.warn("Lenis: Target not found",d))):d instanceof Element&&(p=d),p){if(this.options.wrapper!==window){const S=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?S.left:S.top}const _=p.getBoundingClientRect(),m=getComputedStyle(p),g=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),M=getComputedStyle(this.rootElement),w=this.isHorizontal?Number.parseFloat(M.scrollPaddingLeft):Number.parseFloat(M.scrollPaddingTop);d=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(w)?0:w)}}if(typeof d=="number"){if(d+=f,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const p=d-this.animatedScroll;p>this.limit/2?d-=this.limit:p<-this.limit/2&&(d+=this.limit)}}else d=Lf(0,d,this.limit);if(d===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=d,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=d),typeof a=="number"&&typeof o!="function"?o=_d:typeof o=="function"&&typeof a!="number"&&(a=1),this.animate.fromTo(this.animatedScroll,d,{duration:a,easing:o,lerp:s,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(p,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),r&&(this.targetScroll=p),_||this.emit(),_&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(n,{deltaX:e,deltaY:t}){const i=Date.now();n._lenis||(n._lenis={});const r=n._lenis;let s,a,o,l,c,u,h,d,f,p;if(i-(r.time??0)>2e3){r.time=Date.now();const E=window.getComputedStyle(n);if(r.computedStyle=E,s=["auto","overlay","scroll"].includes(E.overflowX),a=["auto","overlay","scroll"].includes(E.overflowY),c=["auto"].includes(E.overscrollBehaviorX),u=["auto"].includes(E.overscrollBehaviorY),r.hasOverflowX=s,r.hasOverflowY=a,!(s||a))return!1;h=n.scrollWidth,d=n.scrollHeight,f=n.clientWidth,p=n.clientHeight,o=h>f,l=d>p,r.isScrollableX=o,r.isScrollableY=l,r.scrollWidth=h,r.scrollHeight=d,r.clientWidth=f,r.clientHeight=p,r.hasOverscrollBehaviorX=c,r.hasOverscrollBehaviorY=u}else o=r.isScrollableX,l=r.isScrollableY,s=r.hasOverflowX,a=r.hasOverflowY,h=r.scrollWidth,d=r.scrollHeight,f=r.clientWidth,p=r.clientHeight,c=r.hasOverscrollBehaviorX,u=r.hasOverscrollBehaviorY;if(!(s&&o||a&&l))return!1;const _=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let m,g,M,w,S,y;if(_==="horizontal")m=Math.round(n.scrollLeft),g=h-f,M=e,w=s,S=o,y=c;else if(_==="vertical")m=Math.round(n.scrollTop),g=d-p,M=t,w=a,S=l,y=u;else return!1;return!y&&(m>=g||m<=0)?!0:(M>0?m<g:m>0)&&w&&S}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const n=this.options.wrapper;return this.isHorizontal?n.scrollX??n.scrollLeft:n.scrollY??n.scrollTop}get scroll(){return this.options.infinite?tM(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(n){this._isScrolling!==n&&(this._isScrolling=n,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(n){this._isStopped!==n&&(this._isStopped=n,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(n){this._isLocked!==n&&(this._isLocked=n,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let n="lenis";return this.options.autoToggle&&(n+=" lenis-autoToggle"),this.isStopped&&(n+=" lenis-stopped"),this.isLocked&&(n+=" lenis-locked"),this.isScrolling&&(n+=" lenis-scrolling"),this.isScrolling==="smooth"&&(n+=" lenis-smooth"),n}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(n=>{this.rootElement.classList.add(n)})}cleanUpClassName(){for(const n of Array.from(this.rootElement.classList))(n==="lenis"||n.startsWith("lenis-"))&&this.rootElement.classList.remove(n)}};function xn(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function If(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ci={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},na={duration:.5,overwrite:!1,delay:0},Mu,Gt,mt,Oi=1e8,lt=1/Oi,wc=Math.PI*2,lM=wc/4,cM=0,Uf=Math.sqrt,uM=Math.cos,hM=Math.sin,kt=function(e){return typeof e=="string"},yt=function(e){return typeof e=="function"},Rn=function(e){return typeof e=="number"},yu=function(e){return typeof e>"u"},un=function(e){return typeof e=="object"},fi=function(e){return e!==!1},bu=function(){return typeof window<"u"},Ya=function(e){return yt(e)||kt(e)},Nf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ei=Array.isArray,dM=/random\([^)]+\)/g,fM=/,\s*/g,vd=/(?:-?\.?\d|\.)+/gi,Of=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,jr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,xl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ff=/[+-]=-?[.\d]+/,pM=/[^,'"\[\]\s]+/gi,mM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,vt,Qi,Ac,Tu,Ri={},go={},Bf,zf=function(e){return(go=cs(e,Ri))&&_i},Eu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ra=function(e,t){return!t&&console.warn(e)},kf=function(e,t){return e&&(Ri[e]=t)&&go&&(go[e]=t)||Ri},sa=function(){return 0},gM={suppressEvents:!0,isStart:!0,kill:!1},io={suppressEvents:!0,kill:!1},_M={suppressEvents:!0},wu={},Yn=[],Cc={},Hf,Mi={},Sl={},xd=30,no=[],Au="",Cu=function(e){var t=e[0],i,r;if(un(t)||yt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=no.length;r--&&!no[r].targetTest(t););i=no[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new cp(e[r],i)))||e.splice(r,1);return e},fr=function(e){return e._gsap||Cu(Fi(e))[0]._gsap},Gf=function(e,t,i){return(i=e[t])&&yt(i)?e[t]():yu(i)&&e.getAttribute&&e.getAttribute(t)||i},pi=function(e,t){return(e=e.split(",")).forEach(t)||e},Tt=function(e){return Math.round(e*1e5)/1e5||0},_t=function(e){return Math.round(e*1e7)/1e7||0},ns=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},vM=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},_o=function(){var e=Yn.length,t=Yn.slice(0),i,r;for(Cc={},Yn.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Ru=function(e){return!!(e._initted||e._startAt||e.add)},Vf=function(e,t,i,r){Yn.length&&!Gt&&_o(),e.render(t,i,!!(Gt&&t<0&&Ru(e))),Yn.length&&!Gt&&_o()},Wf=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(pM).length<2?t:kt(e)?e.trim():e},Xf=function(e){return e},Pi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},xM=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},cs=function(e,t){for(var i in t)e[i]=t[i];return e},Sd=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=un(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},vo=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Vs=function(e){var t=e.parent||vt,i=e.keyframes?xM(ei(e.keyframes)):Pi;if(fi(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},SM=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},qf=function(e,t,i,r,s){var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Lo=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[i]===t&&(e[i]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Kn=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},pr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},MM=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Rc=function(e,t,i,r){return e._startAt&&(Gt?e._startAt.revert(io):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},yM=function n(e){return!e||e._ts&&n(e.parent)},Md=function(e){return e._repeat?us(e._tTime,e=e.duration()+e._rDelay)*e:0},us=function(e,t){var i=Math.floor(e=_t(e/t));return e&&i===e?i-1:i},xo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Do=function(e){return e._end=_t(e._start+(e._tDur/Math.abs(e._ts||e._rts||lt)||0))},Io=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=_t(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Do(e),i._dirty||pr(i,e)),e},Yf=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=xo(e.rawTime(),t),(!t._dur||fa(0,t.totalDuration(),i)-t._tTime>lt)&&t.render(i,!0)),pr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-lt}},tn=function(e,t,i,r){return t.parent&&Kn(t),t._start=_t((Rn(i)?i:i||e!==vt?Ui(e,i,t):e._time)+t._delay),t._end=_t(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),qf(e,t,"_first","_last",e._sort?"_start":0),Pc(t)||(e._recent=t),r||Yf(e,t),e._ts<0&&Io(e,e._tTime),e},$f=function(e,t){return(Ri.ScrollTrigger||Eu("scrollTrigger",t))&&Ri.ScrollTrigger.create(t,e)},Kf=function(e,t,i,r,s){if(Lu(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Gt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Hf!==Ti.frame)return Yn.push(e),e._lazy=[s,r],1},bM=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Pc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},TM=function(e,t,i,r){var s=e.ratio,a=t<0||!t&&(!e._start&&bM(e)&&!(!e._initted&&Pc(e))||(e._ts<0||e._dp._ts<0)&&!Pc(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=fa(0,e._tDur,t),u=us(l,o),e._yoyo&&u&1&&(a=1-a),u!==us(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Gt||r||e._zTime===lt||!t&&e._zTime){if(!e._initted&&Kf(e,t,r,i,l))return;for(h=e._zTime,e._zTime=t||(i?lt:0),i||(i=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Rc(e,t,i,!0),e._onUpdate&&!i&&Ei(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Ei(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Kn(e,1),!i&&!Gt&&(Ei(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},EM=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},hs=function(e,t,i,r){var s=e._repeat,a=_t(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:_t(a*(s+1)+e._rDelay*s):a,o>0&&!r&&Io(e,e._tTime=e._tDur*o),e.parent&&Do(e),i||pr(e.parent,e),e},yd=function(e){return e instanceof di?pr(e):hs(e,e._dur)},wM={_start:0,endTime:sa,totalDuration:sa},Ui=function n(e,t,i){var r=e.labels,s=e._recent||wM,a=e.duration()>=Oi?s.endTime(!1):e._dur,o,l,c;return kt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:i).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&i&&(l=l/100*(ei(i)?i[0]:i).totalDuration()),o>1?n(e,t.substr(0,o-1),i)+l:a+l)):t==null?a:+t},Ws=function(e,t,i){var r=Rn(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,l;if(r&&(a.duration=t[1]),a.parent=i,e){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=fi(l.vars.inherit)&&l.parent;a.immediateRender=fi(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Pt(t[0],a,t[s+1])},jn=function(e,t){return e||e===0?t(e):t},fa=function(e,t,i){return i<e?e:i>t?t:i},Jt=function(e,t){return!kt(e)||!(t=mM.exec(e))?"":t[1]},AM=function(e,t,i){return jn(i,function(r){return fa(e,t,r)})},Lc=[].slice,Jf=function(e,t){return e&&un(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&un(e[0]))&&!e.nodeType&&e!==Qi},CM=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return kt(r)&&!t||Jf(r,1)?(s=i).push.apply(s,Fi(r)):i.push(r)})||i},Fi=function(e,t,i){return mt&&!t&&mt.selector?mt.selector(e):kt(e)&&!i&&(Ac||!ds())?Lc.call((t||Tu).querySelectorAll(e),0):ei(e)?CM(e,i):Jf(e)?Lc.call(e,0):e?[e]:[]},Dc=function(e){return e=Fi(e)[0]||ra("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Fi(t,i.querySelectorAll?i:i===e?ra("Invalid scope")||Tu.createElement("div"):e)}},Zf=function(e){return e.sort(function(){return .5-Math.random()})},Qf=function(e){if(yt(e))return e;var t=un(e)?e:{each:e},i=mr(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=t.axis,u=r,h=r;return kt(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],h=r[1]),function(d,f,p){var _=(p||t).length,m=a[_],g,M,w,S,y,E,A,v,T;if(!m){if(T=t.grid==="auto"?0:(t.grid||[1,Oi])[1],!T){for(A=-Oi;A<(A=p[T++].getBoundingClientRect().left)&&T<_;);T<_&&T--}for(m=a[_]=[],g=l?Math.min(T,_)*u-.5:r%T,M=T===Oi?0:l?_*h/T-.5:r/T|0,A=0,v=Oi,E=0;E<_;E++)w=E%T-g,S=M-(E/T|0),m[E]=y=c?Math.abs(c==="y"?S:w):Uf(w*w+S*S),y>A&&(A=y),y<v&&(v=y);r==="random"&&Zf(m),m.max=A-v,m.min=v,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(T>_?_-1:c?c==="y"?_/T:T:Math.max(T,_/T))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Jt(t.amount||t.each)||0,i=i&&_<0?HM(i):i}return _=(m[d]-m.min)/m.max||0,_t(m.b+(i?i(_):_)*m.v)+m.u}},Ic=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=_t(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Rn(i)?0:Jt(i))}},jf=function(e,t){var i=ei(e),r,s;return!i&&un(e)&&(r=i=e.radius||Oi,e.values?(e=Fi(e.values),(s=!Rn(e[0]))&&(r*=r)):e=Ic(e.increment)),jn(t,i?yt(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Oi,u=0,h=e.length,d,f;h--;)s?(d=e[h].x-o,f=e[h].y-l,d=d*d+f*f):d=Math.abs(e[h]-o),d<c&&(c=d,u=h);return u=!r||c<=r?e[u]:a,s||u===a||Rn(a)?u:u+Jt(a)}:Ic(e))},ep=function(e,t,i,r){return jn(ei(e)?!t:i===!0?!!(i=0):!r,function(){return ei(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},RM=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,a){return a(s)},r)}},PM=function(e,t){return function(i){return e(parseFloat(i))+(t||Jt(i))}},LM=function(e,t,i){return ip(e,t,0,1,i)},tp=function(e,t,i){return jn(i,function(r){return e[~~t(r)]})},DM=function n(e,t,i){var r=t-e;return ei(e)?tp(e,n(0,e.length),t):jn(i,function(s){return(r+(s-e)%r)%r+e})},IM=function n(e,t,i){var r=t-e,s=r*2;return ei(e)?tp(e,n(0,e.length-1),t):jn(i,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},aa=function(e){return e.replace(dM,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(fM);return ep(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},ip=function(e,t,i,r,s){var a=t-e,o=r-i;return jn(s,function(l){return i+((l-e)/a*o||0)})},UM=function n(e,t,i,r){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=kt(e),o={},l,c,u,h,d;if(i===!0&&(r=1)&&(i=null),a)e={p:e},t={p:t};else if(ei(e)&&!ei(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(n(e[c-1],e[c]));h--,s=function(p){p*=h;var _=Math.min(d,~~p);return u[_](p-_)},i=t}else r||(e=cs(ei(e)?[]:{},e));if(!u){for(l in t)Pu.call(o,e,l,"get",t[l]);s=function(p){return Uu(p,o)||(a?e.p:e)}}}return jn(i,s)},bd=function(e,t,i){var r=e.labels,s=Oi,a,o,l;for(a in r)o=r[a]-t,o<0==!!i&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Ei=function(e,t,i){var r=e.vars,s=r[t],a=mt,o=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,i&&Yn.length&&_o(),o&&(mt=o),u=l?s.apply(c,l):s.call(c),mt=a,u},Ns=function(e){return Kn(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Gt),e.progress()<1&&Ei(e,"onInterrupt"),e},es,np=[],rp=function(e){if(e)if(e=!e.name&&e.default||e,bu()||e.headless){var t=e.name,i=yt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:sa,render:Uu,add:Pu,kill:ZM,modifier:JM,rawVars:0},a={targetTest:0,get:0,getSetter:Iu,aliases:{},register:0};if(ds(),e!==r){if(Mi[t])return;Pi(r,Pi(vo(e,s),a)),cs(r.prototype,cs(s,vo(e,a))),Mi[r.prop=t]=r,e.targetTest&&(no.push(r),wu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}kf(t,r),e.register&&e.register(_i,r,mi)}else np.push(e)},ot=255,Os={aqua:[0,ot,ot],lime:[0,ot,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ot],navy:[0,0,128],white:[ot,ot,ot],olive:[128,128,0],yellow:[ot,ot,0],orange:[ot,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ot,0,0],pink:[ot,192,203],cyan:[0,ot,ot],transparent:[ot,ot,ot,0]},Ml=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*ot+.5|0},sp=function(e,t,i){var r=e?Rn(e)?[e>>16,e>>8&ot,e&ot]:0:Os.black,s,a,o,l,c,u,h,d,f,p;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Os[e])r=Os[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&ot,r&ot,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&ot,e&ot]}else if(e.substr(0,3)==="hsl"){if(r=p=e.match(vd),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=Ml(l+1/3,s,a),r[1]=Ml(l,s,a),r[2]=Ml(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(Of),i&&r.length<4&&(r[3]=1),r}else r=e.match(vd)||Os.transparent;r=r.map(Number)}return t&&!p&&(s=r[0]/ot,a=r[1]/ot,o=r[2]/ot,h=Math.max(s,a,o),d=Math.min(s,a,o),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===s?(a-o)/f+(a<o?6:0):h===a?(o-s)/f+2:(s-a)/f+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},ap=function(e){var t=[],i=[],r=-1;return e.split($n).forEach(function(s){var a=s.match(jr)||[];t.push.apply(t,a),i.push(r+=a.length+1)}),t.c=i,t},Td=function(e,t,i){var r="",s=(e+r).match($n),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return e;if(s=s.map(function(d){return(d=sp(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(u=ap(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace($n,"1").split(jr),h=c.length-1;o<h;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split($n),h=c.length-1;o<h;o++)r+=c[o]+s[o];return r+c[h]},$n=(function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Os)n+="|"+e+"\\b";return new RegExp(n+")","gi")})(),NM=/hsl[a]?\(/,op=function(e){var t=e.join(" "),i;if($n.lastIndex=0,$n.test(t))return i=NM.test(t),e[1]=Td(e[1],i),e[0]=Td(e[0],i,ap(e[1])),!0},oa,Ti=(function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,a=s,o=[],l,c,u,h,d,f,p=function _(m){var g=n()-r,M=m===!0,w,S,y,E;if((g>e||g<0)&&(i+=g-t),r+=g,y=r-i,w=y-a,(w>0||M)&&(E=++h.frame,d=y-h.time*1e3,h.time=y=y/1e3,a+=w+(w>=s?4:s-w),S=1),M||(l=c(_)),S)for(f=0;f<o.length;f++)o[f](y,d,E,m)};return h={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Bf&&(!Ac&&bu()&&(Qi=Ac=window,Tu=Qi.document||{},Ri.gsap=_i,(Qi.gsapVersions||(Qi.gsapVersions=[])).push(_i.version),zf(go||Qi.GreenSockGlobals||!Qi.gsap&&Qi||{}),np.forEach(rp)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},oa=1,p(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),oa=0,c=sa},lagSmoothing:function(m,g){e=m||1/0,t=Math.min(g||33,e)},fps:function(m){s=1e3/(m||240),a=h.time*1e3+s},add:function(m,g,M){var w=g?function(S,y,E,A){m(S,y,E,A),h.remove(w)}:m;return h.remove(m),o[M?"unshift":"push"](w),ds(),w},remove:function(m,g){~(g=o.indexOf(m))&&o.splice(g,1)&&f>=g&&f--},_listeners:o},h})(),ds=function(){return!oa&&Ti.wake()},Ke={},OM=/^[\d.\-M][\d.\-,\s]/,FM=/["']/g,BM=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,a=i.length,o,l,c;s<a;s++)l=i[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[r]=isNaN(c)?c.replace(FM,"").trim():+c,r=l.substr(o+1).trim();return t},zM=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},kM=function(e){var t=(e+"").split("("),i=Ke[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[BM(t[1])]:zM(e).split(",").map(Wf)):Ke._CE&&OM.test(e)?Ke._CE("",e):i},HM=function(e){return function(t){return 1-e(1-t)}},mr=function(e,t){return e&&(yt(e)?e:Ke[e]||kM(e))||t},Er=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},a;return pi(e,function(o){Ke[o]=Ri[o]=s,Ke[a=o.toLowerCase()]=i;for(var l in s)Ke[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ke[o+"."+l]=s[l]}),s},lp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},yl=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),a=s/wc*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*hM((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:lp(o);return s=wc/s,l.config=function(c,u){return n(e,c,u)},l},bl=function n(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:lp(i);return r.config=function(s){return n(e,s)},r};pi("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Er(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Ke.Linear.easeNone=Ke.none=Ke.Linear.easeIn;Er("Elastic",yl("in"),yl("out"),yl());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(o){return o<t?n*o*o:o<i?n*Math.pow(o-1.5/e,2)+.75:o<r?n*(o-=2.25/e)*o+.9375:n*Math.pow(o-2.625/e,2)+.984375};Er("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Er("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Er("Circ",function(n){return-(Uf(1-n*n)-1)});Er("Sine",function(n){return n===1?1:-uM(n*lM)+1});Er("Back",bl("in"),bl("out"),bl());Ke.SteppedEase=Ke.steps=Ri.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,a=1-lt;return function(o){return((r*fa(0,a,o)|0)+s)*i}}};na.ease=Ke["quad.out"];pi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Au+=n+","+n+"Params,"});var cp=function(e,t){this.id=cM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Gf,this.set=t?t.getSetter:Iu},la=(function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,hs(this,+t.duration,1,1),this.data=t.data,mt&&(this._ctx=mt,mt.data.push(this)),oa||Ti.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,hs(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(ds(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Io(this,i),!s._dp||s.parent||Yf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&tn(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===lt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Vf(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Md(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Md(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?us(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-lt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?xo(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-lt?0:this._rts,this.totalTime(fa(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Do(this),MM(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ds(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==lt&&(this._tTime-=lt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=_t(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&tn(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(fi(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?xo(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=_M);var r=Gt;return Gt=i,Ru(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Gt=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,yd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,yd(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Ui(this,i),fi(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,fi(r)),this._dur||(this._zTime=-lt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-lt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-lt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-lt)},e.eventCallback=function(i,r,s){var a=this.vars;return arguments.length>1?(r?(a[i]=r,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete a[i],this):a[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(a){var o=yt(i)?i:Xf,l=function(){var u=r.then;r.then=null,s&&s(),yt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),a(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Ns(this)},n})();Pi(la.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-lt,_prom:0,_ps:!1,_rts:1});var di=(function(n){If(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=fi(i.sortChildren),vt&&tn(i.parent||vt,xn(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&$f(xn(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return Ws(0,arguments,this),this},t.from=function(r,s,a){return Ws(1,arguments,this),this},t.fromTo=function(r,s,a,o){return Ws(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,Vs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Pt(r,s,Ui(this,a),1),this},t.call=function(r,s,a){return tn(this,Pt.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Pt(r,a,Ui(this,l)),this},t.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,Vs(a).immediateRender=fi(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},t.staggerFromTo=function(r,s,a,o,l,c,u,h){return o.startAt=a,Vs(o).immediateRender=fi(o.immediateRender),this.staggerTo(r,s,o,l,c,u,h)},t.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:_t(r),h=this._zTime<0!=r<0&&(this._initted||!c),d,f,p,_,m,g,M,w,S,y,E,A;if(this!==vt&&u>l&&r>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),d=u,S=this._start,w=this._ts,g=!w,h&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,a);if(d=_t(u%m),u===l?(_=this._repeat,d=c):(y=_t(u/m),_=~~y,_&&_===y&&(d=c,_--),d>c&&(d=c)),y=us(this._tTime,m),!o&&this._tTime&&y!==_&&this._tTime-y*m-this._dur<=0&&(y=_),E&&_&1&&(d=c-d,A=1),_!==y&&!this._lock){var v=E&&y&1,T=v===(E&&_&1);if(_<y&&(v=!v),o=v?0:u%c?c:u,this._lock=1,this.render(o||(A?0:_t(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Ei(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,y=_),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,o=v?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=EM(this,_t(o),_t(d)),M&&(u-=d-(d=M._start))),this._tTime=u,this._time=d,this._act=!!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&u&&c&&!s&&!y&&(Ei(this,"onStart"),this._tTime!==u))return this;if(d>=o&&r>=0)for(f=this._first;f;){if(p=f._next,(f._act||d>=f._start)&&f._ts&&M!==f){if(f.parent!==this)return this.render(r,s,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,a),d!==this._time||!this._ts&&!g){M=0,p&&(u+=this._zTime=-lt);break}}f=p}else{f=this._last;for(var R=r<0?r:d;f;){if(p=f._prev,(f._act||R<=f._end)&&f._ts&&M!==f){if(f.parent!==this)return this.render(r,s,a);if(f.render(f._ts>0?(R-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(R-f._start)*f._ts,s,a||Gt&&Ru(f)),d!==this._time||!this._ts&&!g){M=0,p&&(u+=this._zTime=R?-lt:lt);break}}f=p}}if(M&&!s&&(this.pause(),M.render(d>=o?0:-lt)._zTime=d>=o?1:-1,this._ts))return this._start=S,Do(this),this.render(r,s,a);this._onUpdate&&!s&&Ei(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(S===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Kn(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(Ei(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(Rn(s)||(s=Ui(this,s,r)),!(r instanceof la)){if(ei(r))return r.forEach(function(o){return a.add(o,s)}),this;if(kt(r))return this.addLabel(r,s);if(yt(r))r=Pt.delayedCall(0,r);else return this}return this!==r?tn(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Oi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Pt?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return kt(r)?this.removeLabel(r):yt(r)?this.killTweensOf(r):(r.parent===this&&Lo(this,r),r===this._recent&&(this._recent=this._last),pr(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=_t(Ti.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Ui(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=Pt.delayedCall(0,s||sa,a);return o.data="isPause",this._hasPause=1,tn(this,o,Ui(this,r))},t.removePause=function(r){var s=this._first;for(r=Ui(this,r);s;)s._start===r&&s.data==="isPause"&&Kn(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)Wn!==o[l]&&o[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=Fi(r),l=this._first,c=Rn(s),u;l;)l instanceof Pt?vM(l._targets,o)&&(c?(!Wn||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=Ui(a,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,p=Pt.to(a,Pi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||lt,onStart:function(){if(a.pause(),!f){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());p._dur!==m&&hs(p,m,0,1).render(p._time,!0,!0),f=1}u&&u.apply(p,h||[])}},s));return d?p.render(0):p},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,Pi({startAt:{time:Ui(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),bd(this,Ui(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),bd(this,Ui(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+lt)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(r=_t(r);o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return pr(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),pr(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,l=Oi,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,tn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=_t(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;hs(a,a===vt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(vt._ts&&(Vf(vt,xo(r,vt)),Hf=Ti.frame),Ti.frame>=xd){xd+=Ci.autoSleep||120;var s=vt._first;if((!s||!s._ts)&&Ci.autoSleep&&Ti._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Ti.sleep()}}},e})(la);Pi(di.prototype,{_lock:0,_hasPause:0,_forcing:0});var GM=function(e,t,i,r,s,a,o){var l=new mi(this._pt,e,t,0,1,mp,null,s),c=0,u=0,h,d,f,p,_,m,g,M;for(l.b=i,l.e=r,i+="",r+="",(g=~r.indexOf("random("))&&(r=aa(r)),a&&(M=[i,r],a(M,e,t),i=M[0],r=M[1]),d=i.match(xl)||[];h=xl.exec(r);)p=h[0],_=r.substring(c,h.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),p!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:p.charAt(1)==="="?ns(m,p)-m:parseFloat(p)-m,m:f&&f<4?Math.round:0},c=xl.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(Ff.test(r)||g)&&(l.e=0),this._pt=l,l},Pu=function(e,t,i,r,s,a,o,l,c,u){yt(r)&&(r=r(s||0,e,a));var h=e[t],d=i!=="get"?i:yt(h)?c?e[t.indexOf("set")||!yt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,f=yt(h)?c?YM:fp:Du,p;if(kt(r)&&(~r.indexOf("random(")&&(r=aa(r)),r.charAt(1)==="="&&(p=ns(d,r)+(Jt(d)||0),(p||p===0)&&(r=p))),!u||d!==r||Uc)return!isNaN(d*r)&&r!==""?(p=new mi(this._pt,e,t,+d||0,r-(d||0),typeof h=="boolean"?KM:pp,0,f),c&&(p.fp=c),o&&p.modifier(o,this,e),this._pt=p):(!h&&!(t in e)&&Eu(t,r),GM.call(this,e,t,d,r,f,l||Ci.stringFilter,c))},VM=function(e,t,i,r,s){if(yt(e)&&(e=Xs(e,s,t,i,r)),!un(e)||e.style&&e.nodeType||ei(e)||Nf(e))return kt(e)?Xs(e,s,t,i,r):e;var a={},o;for(o in e)a[o]=Xs(e[o],s,t,i,r);return a},up=function(e,t,i,r,s,a){var o,l,c,u;if(Mi[e]&&(o=new Mi[e]).init(s,o.rawVars?t[e]:VM(t[e],r,s,a,i),i,r,a)!==!1&&(i._pt=l=new mi(i._pt,s,e,0,1,o.render,o,0,o.priority),i!==es))for(c=i._ptLookup[i._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Wn,Uc,Lu=function n(e,t,i){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,h=r.yoyoEase,d=r.keyframes,f=r.autoRevert,p=e._dur,_=e._startAt,m=e._targets,g=e.parent,M=g&&g.data==="nested"?g.vars.targets:m,w=e._overwrite==="auto"&&!Mu,S=e.timeline,y=r.easeReverse||h,E,A,v,T,R,I,N,L,D,U,q,z,Q;if(S&&(!d||!s)&&(s="none"),e._ease=mr(s,na.ease),e._rEase=y&&(mr(y)||e._ease),e._from=!S&&!!r.runBackwards,e._from&&(e.ratio=1),!S||d&&!r.stagger){if(L=m[0]?fr(m[0]).harness:0,z=L&&r[L.prop],E=vo(r,wu),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!f?_.render(-1,!0):_.revert(u&&p?io:gM),_._lazy=0),a){if(Kn(e._startAt=Pt.set(m,Pi({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&fi(l),startAt:null,delay:0,onUpdate:c&&function(){return Ei(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Gt||!o&&!f)&&e._startAt.revert(io),o&&p&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&p&&!_){if(t&&(o=!1),v=Pi({overwrite:!1,data:"isFromStart",lazy:o&&!_&&fi(l),immediateRender:o,stagger:0,parent:g},E),z&&(v[L.prop]=z),Kn(e._startAt=Pt.set(m,v)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Gt?e._startAt.revert(io):e._startAt.render(-1,!0)),e._zTime=t,!o)n(e._startAt,lt,lt);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&fi(l)||l&&!p,A=0;A<m.length;A++){if(R=m[A],N=R._gsap||Cu(m)[A]._gsap,e._ptLookup[A]=U={},Cc[N.id]&&Yn.length&&_o(),q=M===m?A:M.indexOf(R),L&&(D=new L).init(R,z||E,e,q,M)!==!1&&(e._pt=T=new mi(e._pt,R,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function(X){U[X]=T}),D.priority&&(I=1)),!L||z)for(v in E)Mi[v]&&(D=up(v,E,e,q,R,M))?D.priority&&(I=1):U[v]=T=Pu.call(e,R,v,"get",E[v],q,M,0,r.stringFilter);e._op&&e._op[A]&&e.kill(R,e._op[A]),w&&e._pt&&(Wn=e,vt.killTweensOf(R,U,e.globalTime(t)),Q=!e.parent,Wn=0),e._pt&&l&&(Cc[N.id]=1)}I&&gp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Q,d&&t<=0&&S.render(Oi,!0,!0)},WM=function(e,t,i,r,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Uc=1,e.vars[t]="+=0",Lu(e,o),Uc=0,l?ra(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=i-u.s,h.e&&(h.e=Tt(i)+Jt(h.e)),h.b&&(h.b=u.s+Jt(h.b))},XM=function(e,t){var i=e[0]?fr(e[0]).harness:0,r=i&&i.aliases,s,a,o,l;if(!r)return t;s=cs({},t);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},qM=function(e,t,i,r){var s=t.ease||r||"power1.inOut",a,o;if(ei(t))o=i[e]||(i[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Xs=function(e,t,i,r,s){return yt(e)?e.call(t,i,r,s):kt(e)&&~e.indexOf("random(")?aa(e):e},hp=Au+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",dp={};pi(hp+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return dp[n]=1});var Pt=(function(n){If(e,n);function e(i,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=n.call(this,a?r:Vs(r))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,p=l.keyframes,_=l.defaults,m=l.scrollTrigger,g=r.parent||vt,M=(ei(i)||Nf(i)?Rn(i[0]):"length"in r)?[i]:Fi(i),w,S,y,E,A,v,T,R;if(o._targets=M.length?Cu(M):ra("GSAP target "+i+" not found. https://gsap.com",!Ci.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,p||d||Ya(c)||Ya(u)){r=o.vars;var I=r.easeReverse||r.yoyoEase;if(w=o.timeline=new di({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:M}),w.kill(),w.parent=w._dp=xn(o),w._start=0,d||Ya(c)||Ya(u)){if(E=M.length,T=d&&Qf(d),un(d))for(A in d)~hp.indexOf(A)&&(R||(R={}),R[A]=d[A]);for(S=0;S<E;S++)y=vo(r,dp),y.stagger=0,I&&(y.easeReverse=I),R&&cs(y,R),v=M[S],y.duration=+Xs(c,xn(o),S,v,M),y.delay=(+Xs(u,xn(o),S,v,M)||0)-o._delay,!d&&E===1&&y.delay&&(o._delay=u=y.delay,o._start+=u,y.delay=0),w.to(v,y,T?T(S,v,M):0),w._ease=Ke.none;w.duration()?c=u=0:o.timeline=0}else if(p){Vs(Pi(w.vars.defaults,{ease:"none"})),w._ease=mr(p.ease||r.ease||"none");var N=0,L,D,U;if(ei(p))p.forEach(function(q){return w.to(M,q,">")}),w.duration();else{y={};for(A in p)A==="ease"||A==="easeEach"||qM(A,p[A],y,p.easeEach);for(A in y)for(L=y[A].sort(function(q,z){return q.t-z.t}),N=0,S=0;S<L.length;S++)D=L[S],U={ease:D.e,duration:(D.t-(S?L[S-1].t:0))/100*c},U[A]=D.v,w.to(M,U,N),N+=U.duration;w.duration()<c&&w.to({},{duration:c-w.duration()})}}c||o.duration(c=w.duration())}else o.timeline=0;return f===!0&&!Mu&&(Wn=xn(o),vt.killTweensOf(M),Wn=0),tn(g,xn(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(h||!c&&!p&&o._start===_t(g._time)&&fi(h)&&yM(xn(o))&&g.data!=="nested")&&(o._tTime=-lt,o.render(Math.max(0,-u)||0)),m&&$f(xn(o),m),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-lt&&!u?l:r<lt?0:r,d,f,p,_,m,g,M,w;if(!c)TM(this,r,s,a);else if(h!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,w=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,a);if(d=_t(h%_),h===l?(p=this._repeat,d=c):(m=_t(h/_),p=~~m,p&&p===m?(d=c,p--):d>c&&(d=c)),g=this._yoyo&&p&1,g&&(d=c-d),m=us(this._tTime,_),d===o&&!a&&this._initted&&p===m)return this._tTime=h,this;p!==m&&this.vars.repeatRefresh&&!g&&!this._lock&&d!==_&&this._initted&&(this._lock=a=1,this.render(_t(_*p),!0).invalidate()._lock=0)}if(!this._initted){if(Kf(this,u?r:d,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._rEase){var S=d<o;if(S!==this._inv){var y=S?o:c-o;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=y?(S?-1:1)/y:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=M=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=M=this._ease(d/c);if(this._from&&(this.ratio=M=1-M),this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&h&&!s&&!m&&(Ei(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(M,f.d),f=f._next;w&&w.render(r<0?r:w._dur*w._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Rc(this,r,s,a),Ei(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!s&&this.parent&&Ei(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Rc(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Kn(this,1),!s&&!(u&&!o)&&(h||o||g)&&(Ei(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,l){oa||Ti.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Lu(this,c),u=this._ease(c/this._dur),WM(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):(Io(this,0),this.parent||qf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ns(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Gt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Wn&&Wn.vars.overwrite!==!0)._first||Ns(this),this.parent&&a!==this.timeline.totalDuration()&&hs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?Fi(r):o,c=this._ptLookup,u=this._pt,h,d,f,p,_,m,g;if((!s||s==="all")&&SM(o,l))return s==="all"&&(this._pt=0),Ns(this);for(h=this._op=this._op||[],s!=="all"&&(kt(s)&&(_={},pi(s,function(M){return _[M]=1}),s=_),s=XM(o,s)),g=o.length;g--;)if(~l.indexOf(o[g])){d=c[g],s==="all"?(h[g]=s,p=d,f={}):(f=h[g]=h[g]||{},p=s);for(_ in p)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Lo(this,m,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&Ns(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Ws(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return Ws(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return vt.killTweensOf(r,s,a)},e})(la);Pi(Pt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});pi("staggerTo,staggerFrom,staggerFromTo",function(n){Pt[n]=function(){var e=new di,t=Lc.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Du=function(e,t,i){return e[t]=i},fp=function(e,t,i){return e[t](i)},YM=function(e,t,i,r){return e[t](r.fp,i)},$M=function(e,t,i){return e.setAttribute(t,i)},Iu=function(e,t){return yt(e[t])?fp:yu(e[t])&&e.setAttribute?$M:Du},pp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},KM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},mp=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Uu=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},JM=function(e,t,i,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,i),s=a},ZM=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Lo(this,t,"_pt"):t.dep||(i=1),t=r;return!i},QM=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},gp=function(e){for(var t=e._pt,i,r,s,a;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=i}e._pt=s},mi=(function(){function n(t,i,r,s,a,o,l,c,u){this.t=i,this.s=s,this.c=a,this.p=r,this.r=o||pp,this.d=l||this,this.set=c||Du,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=QM,this.m=i,this.mt=s,this.tween=r},n})();pi(Au+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return wu[n]=1});Ri.TweenMax=Ri.TweenLite=Pt;Ri.TimelineLite=Ri.TimelineMax=di;vt=new di({sortChildren:!1,defaults:na,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ci.stringFilter=op;var gr=[],ro={},jM=[],Ed=0,ey=0,Tl=function(e){return(ro[e]||jM).map(function(t){return t()})},Nc=function(){var e=Date.now(),t=[];e-Ed>2&&(Tl("matchMediaInit"),gr.forEach(function(i){var r=i.queries,s=i.conditions,a,o,l,c;for(o in r)a=Qi.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(i.revert(),l&&t.push(i))}),Tl("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Ed=e,Tl("matchMedia"))},_p=(function(){function n(t,i){this.selector=i&&Dc(i),this.data=[],this._r=[],this.isReverted=!1,this.id=ey++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){yt(i)&&(s=r,r=i,i=yt);var a=this,o=function(){var c=mt,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=Dc(s)),mt=a,h=r.apply(a,arguments),yt(h)&&a._r.push(h),mt=c,a.selector=u,a.isReverted=!1,h};return a.last=o,i===yt?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},e.ignore=function(i){var r=mt;mt=null,i(this),mt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Pt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof di?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Pt)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=gr.length;a--;)gr[a].id===this.id&&gr.splice(a,1)},e.revert=function(i){this.kill(i||{})},n})(),ty=(function(){function n(t){this.contexts=[],this.scope=t,mt&&mt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){un(i)||(i={matches:i});var a=new _p(0,s||this.scope),o=a.conditions={},l,c,u;mt&&!a.selector&&(a.selector=mt.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=i;for(c in i)c==="all"?u=1:(l=Qi.matchMedia(i[c]),l&&(gr.indexOf(a)<0&&gr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Nc):l.addEventListener("change",Nc)));return u&&r(a,function(h){return a.add(null,h)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n})(),So={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return rp(r)})},timeline:function(e){return new di(e)},getTweensOf:function(e,t){return vt.getTweensOf(e,t)},getProperty:function(e,t,i,r){kt(e)&&(e=Fi(e)[0]);var s=fr(e||{}).get,a=i?Xf:Wf;return i==="native"&&(i=""),e&&(t?a((Mi[t]&&Mi[t].get||s)(e,t,i,r)):function(o,l,c){return a((Mi[o]&&Mi[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,i){if(e=Fi(e),e.length>1){var r=e.map(function(u){return _i.quickSetter(u,t,i)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}e=e[0]||{};var a=Mi[t],o=fr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;es._pt=0,h.init(e,i?u+i:u,es,0,[e]),h.render(1,h),es._pt&&Uu(1,es)}:o.set(e,l);return a?c:function(u){return c(e,l,i?u+i:u,o,1)}},quickTo:function(e,t,i){var r,s=_i.to(e,Pi((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return vt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=mr(e.ease,na.ease)),Sd(na,e||{})},config:function(e){return Sd(Ci,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!Mi[o]&&!Ri[o]&&ra(t+" effect requires "+o+" plugin.")}),Sl[t]=function(o,l,c){return i(Fi(o),Pi(l||{},s),c)},a&&(di.prototype[t]=function(o,l,c){return this.add(Sl[t](o,un(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ke[e]=mr(t)},parseEase:function(e,t){return arguments.length?mr(e,t):Ke},getById:function(e){return vt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new di(e),r,s;for(i.smoothChildTiming=fi(e.smoothChildTiming),vt.remove(i),i._dp=0,i._time=i._tTime=vt._time,r=vt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Pt&&r.vars.onComplete===r._targets[0]))&&tn(i,r,r._start-r._delay),r=s;return tn(vt,i,0),i},context:function(e,t){return e?new _p(e,t):mt},matchMedia:function(e){return new ty(e)},matchMediaRefresh:function(){return gr.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Nc()},addEventListener:function(e,t){var i=ro[e]||(ro[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=ro[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:DM,wrapYoyo:IM,distribute:Qf,random:ep,snap:jf,normalize:LM,getUnit:Jt,clamp:AM,splitColor:sp,toArray:Fi,selector:Dc,mapRange:ip,pipe:RM,unitize:PM,interpolate:UM,shuffle:Zf},install:zf,effects:Sl,ticker:Ti,updateRoot:di.updateRoot,plugins:Mi,globalTimeline:vt,core:{PropTween:mi,globals:kf,Tween:Pt,Timeline:di,Animation:la,getCache:fr,_removeLinkedListItem:Lo,reverting:function(){return Gt},context:function(e){return e&&mt&&(mt.data.push(e),e._ctx=mt),mt},suppressOverwrites:function(e){return Mu=e}}};pi("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return So[n]=Pt[n]});Ti.add(di.updateRoot);es=So.to({},{duration:0});var iy=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},ny=function(e,t){var i=e._targets,r,s,a;for(r in t)for(s=i.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=iy(a,r)),a&&a.modifier&&a.modifier(t[r],e,i[s],r))},El=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(kt(s)&&(l={},pi(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}ny(o,s)}}}},_i=So.registerPlugin({name:"attr",init:function(e,t,i,r,s){var a,o,l;this.tween=i;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var i=t._pt;i;)Gt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},El("roundProps",Ic),El("modifiers"),El("snap",jf))||So;Pt.version=di.version=_i.version="3.15.0";Bf=1;bu()&&ds();Ke.Power0;Ke.Power1;Ke.Power2;Ke.Power3;Ke.Power4;Ke.Linear;Ke.Quad;Ke.Cubic;Ke.Quart;Ke.Quint;Ke.Strong;Ke.Elastic;Ke.Back;Ke.SteppedEase;Ke.Bounce;Ke.Sine;Ke.Expo;Ke.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var wd,Xn,rs,Nu,dr,Ad,Ou,ry=function(){return typeof window<"u"},Pn={},lr=180/Math.PI,ss=Math.PI/180,$r=Math.atan2,Cd=1e8,Fu=/([A-Z])/g,sy=/(left|right|width|margin|padding|x)/i,ay=/[\s,\(]\S/,sn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Oc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},oy=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ly=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},cy=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},uy=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},vp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},xp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},hy=function(e,t,i){return e.style[t]=i},dy=function(e,t,i){return e.style.setProperty(t,i)},fy=function(e,t,i){return e._gsap[t]=i},py=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},my=function(e,t,i,r,s){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},gy=function(e,t,i,r,s){var a=e._gsap;a[t]=i,a.renderTransform(s,a)},Mt="transform",gi=Mt+"Origin",_y=function n(e,t){var i=this,r=this.target,s=r.style,a=r._gsap;if(e in Pn&&s){if(this.tfm=this.tfm||{},e!=="transform")e=sn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=Sn(r,o)}):this.tfm[e]=a.x?a[e]:Sn(r,e),e===gi&&(this.tfm.zOrigin=a.zOrigin);else return sn.transform.split(",").forEach(function(o){return n.call(i,o,t)});if(this.props.indexOf(Mt)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(gi,t,"")),e=Mt}(s||t)&&this.props.push(e,t,s[e])},Sp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},vy=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Fu,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Ou(),(!s||!s.isStart)&&!i[Mt]&&(Sp(i),r.zOrigin&&i[gi]&&(i[gi]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Mp=function(e,t){var i={target:e,props:[],revert:vy,save:_y};return e._gsap||_i.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},yp,Fc=function(e,t){var i=Xn.createElementNS?Xn.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Xn.createElement(e);return i&&i.style?i:Xn.createElement(e)},wi=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Fu,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,fs(t)||t,1)||""},Rd="O,Moz,ms,Ms,Webkit".split(","),fs=function(e,t,i){var r=t||dr,s=r.style,a=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Rd[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Rd[a]:"")+e},Bc=function(){ry()&&window.document&&(wd=window,Xn=wd.document,rs=Xn.documentElement,dr=Fc("div")||{style:{}},Fc("div"),Mt=fs(Mt),gi=Mt+"Origin",dr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",yp=!!fs("perspective"),Ou=_i.core.reverting,Nu=1)},Pd=function(e){var t=e.ownerSVGElement,i=Fc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),rs.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),rs.removeChild(i),s},Ld=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},bp=function(e){var t,i;try{t=e.getBBox()}catch{t=Pd(e),i=1}return t&&(t.width||t.height)||i||(t=Pd(e)),t&&!t.width&&!t.x&&!t.y?{x:+Ld(e,["x","cx","x1"])||0,y:+Ld(e,["y","cy","y1"])||0,width:0,height:0}:t},Tp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&bp(e))},Jn=function(e,t){if(t){var i=e.style,r;t in Pn&&t!==gi&&(t=Mt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Fu,"-$1").toLowerCase())):i.removeAttribute(t)}},qn=function(e,t,i,r,s,a){var o=new mi(e._pt,t,i,0,1,a?xp:vp);return e._pt=o,o.b=r,o.e=s,e._props.push(i),o},Dd={deg:1,rad:1,turn:1},xy={grid:1,flex:1},Zn=function n(e,t,i,r){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=dr.style,l=sy.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=r==="px",f=r==="%",p,_,m,g;if(r===a||!s||Dd[r]||Dd[a])return s;if(a!=="px"&&!d&&(s=n(e,t,i,"px")),g=e.getCTM&&Tp(e),(f||a==="%")&&(Pn[t]||~t.indexOf("adius")))return p=g?e.getBBox()[l?"width":"height"]:e[u],Tt(f?s/p*h:s/100*p);if(o[l?"width":"height"]=h+(d?a:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Xn||!_.appendChild)&&(_=Xn.body),m=_._gsap,m&&f&&m.width&&l&&m.time===Ti.time&&!m.uncache)return Tt(s/m.width*h);if(f&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=h+r,p=e[u],M?e.style[t]=M:Jn(e,t)}else(f||a==="%")&&!xy[wi(_,"display")]&&(o.position=wi(e,"position")),_===e&&(o.position="static"),_.appendChild(dr),p=dr[u],_.removeChild(dr),o.position="absolute";return l&&f&&(m=fr(_),m.time=Ti.time,m.width=_[u]),Tt(d?p*s/h:p&&s?h/p*s:0)},Sn=function(e,t,i,r){var s;return Nu||Bc(),t in sn&&t!=="transform"&&(t=sn[t],~t.indexOf(",")&&(t=t.split(",")[0])),Pn[t]&&t!=="transform"?(s=ua(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:yo(wi(e,gi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Mo[t]&&Mo[t](e,t,i)||wi(e,t)||Gf(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Zn(e,t,s,i)+i:s},Sy=function(e,t,i,r){if(!i||i==="none"){var s=fs(t,e,1),a=s&&wi(e,s,1);a&&a!==i?(t=s,i=a):t==="borderColor"&&(i=wi(e,"borderTopColor"))}var o=new mi(this._pt,e.style,t,0,1,mp),l=0,c=0,u,h,d,f,p,_,m,g,M,w,S,y;if(o.b=i,o.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=wi(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=wi(e,t)||r,_?e.style[t]=_:Jn(e,t)),u=[i,r],op(u),i=u[0],r=u[1],d=i.match(jr)||[],y=r.match(jr)||[],y.length){for(;h=jr.exec(r);)m=h[0],M=r.substring(l,h.index),p?p=(p+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(p=1),m!==(_=d[c++]||"")&&(f=parseFloat(_)||0,S=_.substr((f+"").length),m.charAt(1)==="="&&(m=ns(f,m)+S),g=parseFloat(m),w=m.substr((g+"").length),l=jr.lastIndex-w.length,w||(w=w||Ci.units[t]||S,l===r.length&&(r+=w,o.e+=w)),S!==w&&(f=Zn(e,t,_,w)||0),o._pt={_next:o._pt,p:M||c===1?M:",",s:f,c:g-f,m:p&&p<4||t==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=t==="display"&&r==="none"?xp:vp;return Ff.test(r)&&(o.e=0),this._pt=o,o},Id={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},My=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=Id[i]||i,t[1]=Id[r]||r,t.join(" ")},yy=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,a=i._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Pn[o]&&(l=1,o=o==="transformOrigin"?gi:Mt),Jn(i,o);l&&(Jn(i,Mt),a&&(a.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",ua(i,1),a.uncache=1,Sp(r)))}},Mo={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var a=e._pt=new mi(e._pt,t,i,0,0,yy);return a.u=r,a.pr=-10,a.tween=s,e._props.push(i),1}}},ca=[1,0,0,1,0,0],Ep={},wp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Ud=function(e){var t=wi(e,Mt);return wp(t)?ca:t.substr(7).match(Of).map(Tt)},Bu=function(e,t){var i=e._gsap||fr(e),r=e.style,s=Ud(e),a,o,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ca:s):(s===ca&&!e.offsetParent&&e!==rs&&!i.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,rs.appendChild(e)),s=Ud(e),l?r.display=l:Jn(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):rs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},zc=function(e,t,i,r,s,a){var o=e._gsap,l=s||Bu(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,d=o.yOffset||0,f=l[0],p=l[1],_=l[2],m=l[3],g=l[4],M=l[5],w=t.split(" "),S=parseFloat(w[0])||0,y=parseFloat(w[1])||0,E,A,v,T;i?l!==ca&&(A=f*m-p*_)&&(v=S*(m/A)+y*(-_/A)+(_*M-m*g)/A,T=S*(-p/A)+y*(f/A)-(f*M-p*g)/A,S=v,y=T):(E=bp(e),S=E.x+(~w[0].indexOf("%")?S/100*E.width:S),y=E.y+(~(w[1]||w[0]).indexOf("%")?y/100*E.height:y)),r||r!==!1&&o.smooth?(g=S-c,M=y-u,o.xOffset=h+(g*f+M*_)-g,o.yOffset=d+(g*p+M*m)-M):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=y,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!i,e.style[gi]="0px 0px",a&&(qn(a,o,"xOrigin",c,S),qn(a,o,"yOrigin",u,y),qn(a,o,"xOffset",h,o.xOffset),qn(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",S+" "+y)},ua=function(e,t){var i=e._gsap||new cp(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=wi(e,gi)||"0",u,h,d,f,p,_,m,g,M,w,S,y,E,A,v,T,R,I,N,L,D,U,q,z,Q,X,Z,ee,ne,Se,Be,Ue;return u=h=d=_=m=g=M=w=S=0,f=p=1,i.svg=!!(e.getCTM&&Tp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Mt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Mt]!=="none"?l[Mt]:"")),r.scale=r.rotate=r.translate="none"),A=Bu(e,i.svg),i.svg&&(i.uncache?(Q=e.getBBox(),c=i.xOrigin-Q.x+"px "+(i.yOrigin-Q.y)+"px",z=""):z=!t&&e.getAttribute("data-svg-origin"),zc(e,z||c,!!z||i.originIsAbsolute,i.smooth!==!1,A)),y=i.xOrigin||0,E=i.yOrigin||0,A!==ca&&(I=A[0],N=A[1],L=A[2],D=A[3],u=U=A[4],h=q=A[5],A.length===6?(f=Math.sqrt(I*I+N*N),p=Math.sqrt(D*D+L*L),_=I||N?$r(N,I)*lr:0,M=L||D?$r(L,D)*lr+_:0,M&&(p*=Math.abs(Math.cos(M*ss))),i.svg&&(u-=y-(y*I+E*L),h-=E-(y*N+E*D))):(Ue=A[6],Se=A[7],Z=A[8],ee=A[9],ne=A[10],Be=A[11],u=A[12],h=A[13],d=A[14],v=$r(Ue,ne),m=v*lr,v&&(T=Math.cos(-v),R=Math.sin(-v),z=U*T+Z*R,Q=q*T+ee*R,X=Ue*T+ne*R,Z=U*-R+Z*T,ee=q*-R+ee*T,ne=Ue*-R+ne*T,Be=Se*-R+Be*T,U=z,q=Q,Ue=X),v=$r(-L,ne),g=v*lr,v&&(T=Math.cos(-v),R=Math.sin(-v),z=I*T-Z*R,Q=N*T-ee*R,X=L*T-ne*R,Be=D*R+Be*T,I=z,N=Q,L=X),v=$r(N,I),_=v*lr,v&&(T=Math.cos(v),R=Math.sin(v),z=I*T+N*R,Q=U*T+q*R,N=N*T-I*R,q=q*T-U*R,I=z,U=Q),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,g=180-g),f=Tt(Math.sqrt(I*I+N*N+L*L)),p=Tt(Math.sqrt(q*q+Ue*Ue)),v=$r(U,q),M=Math.abs(v)>2e-4?v*lr:0,S=Be?1/(Be<0?-Be:Be):0),i.svg&&(z=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!wp(wi(e,Mt)),z&&e.setAttribute("transform",z))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(f*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,M+=M<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=h-((i.yPercent=h&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=d+a,i.scaleX=Tt(f),i.scaleY=Tt(p),i.rotation=Tt(_)+o,i.rotationX=Tt(m)+o,i.rotationY=Tt(g)+o,i.skewX=M+o,i.skewY=w+o,i.transformPerspective=S+a,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(r[gi]=yo(c)),i.xOffset=i.yOffset=0,i.force3D=Ci.force3D,i.renderTransform=i.svg?Ty:yp?Ap:by,i.uncache=0,i},yo=function(e){return(e=e.split(" "))[0]+" "+e[1]},wl=function(e,t,i){var r=Jt(t);return Tt(parseFloat(t)+parseFloat(Zn(e,"x",i+"px",r)))+r},by=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Ap(e,t)},ar="0deg",Ls="0px",or=") ",Ap=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,u=i.rotationY,h=i.rotationX,d=i.skewX,f=i.skewY,p=i.scaleX,_=i.scaleY,m=i.transformPerspective,g=i.force3D,M=i.target,w=i.zOrigin,S="",y=g==="auto"&&e&&e!==1||g===!0;if(w&&(h!==ar||u!==ar)){var E=parseFloat(u)*ss,A=Math.sin(E),v=Math.cos(E),T;E=parseFloat(h)*ss,T=Math.cos(E),a=wl(M,a,A*T*-w),o=wl(M,o,-Math.sin(E)*-w),l=wl(M,l,v*T*-w+w)}m!==Ls&&(S+="perspective("+m+or),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(y||a!==Ls||o!==Ls||l!==Ls)&&(S+=l!==Ls||y?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+or),c!==ar&&(S+="rotate("+c+or),u!==ar&&(S+="rotateY("+u+or),h!==ar&&(S+="rotateX("+h+or),(d!==ar||f!==ar)&&(S+="skew("+d+", "+f+or),(p!==1||_!==1)&&(S+="scale("+p+", "+_+or),M.style[Mt]=S||"translate(0, 0)"},Ty=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,u=i.skewY,h=i.scaleX,d=i.scaleY,f=i.target,p=i.xOrigin,_=i.yOrigin,m=i.xOffset,g=i.yOffset,M=i.forceCSS,w=parseFloat(a),S=parseFloat(o),y,E,A,v,T;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ss,c*=ss,y=Math.cos(l)*h,E=Math.sin(l)*h,A=Math.sin(l-c)*-d,v=Math.cos(l-c)*d,c&&(u*=ss,T=Math.tan(c-u),T=Math.sqrt(1+T*T),A*=T,v*=T,u&&(T=Math.tan(u),T=Math.sqrt(1+T*T),y*=T,E*=T)),y=Tt(y),E=Tt(E),A=Tt(A),v=Tt(v)):(y=h,v=d,E=A=0),(w&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(w=Zn(f,"x",a,"px"),S=Zn(f,"y",o,"px")),(p||_||m||g)&&(w=Tt(w+p-(p*y+_*A)+m),S=Tt(S+_-(p*E+_*v)+g)),(r||s)&&(T=f.getBBox(),w=Tt(w+r/100*T.width),S=Tt(S+s/100*T.height)),T="matrix("+y+","+E+","+A+","+v+","+w+","+S+")",f.setAttribute("transform",T),M&&(f.style[Mt]=T)},Ey=function(e,t,i,r,s){var a=360,o=kt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?lr:1),c=l-r,u=r+c+"deg",h,d;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Cd)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Cd)%a-~~(c/a)*a)),e._pt=d=new mi(e._pt,t,i,r,c,oy),d.e=u,d.u="deg",e._props.push(i),d},Nd=function(e,t){for(var i in t)e[i]=t[i];return e},wy=function(e,t,i){var r=Nd({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,u,h,d,f,p;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[Mt]=t,o=ua(i,1),Jn(i,Mt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Mt],a[Mt]=t,o=ua(i,1),a[Mt]=c);for(l in Pn)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(f=Jt(c),p=Jt(u),h=f!==p?Zn(i,l,c,p):parseFloat(c),d=parseFloat(u),e._pt=new mi(e._pt,o,l,h,d-h,Oc),e._pt.u=p||0,e._props.push(l));Nd(o,r)};pi("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",a=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(o){return e<2?n+o:"border"+o+n});Mo[e>1?"border"+n:n]=function(o,l,c,u,h){var d,f;if(arguments.length<4)return d=a.map(function(p){return Sn(o,p,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},a.forEach(function(p,_){return f[p]=d[_]=d[_]||d[(_-1)/2|0]}),o.init(l,f,h)}});var Cp={name:"css",register:Bc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var a=this._props,o=e.style,l=i.vars.startAt,c,u,h,d,f,p,_,m,g,M,w,S,y,E,A,v,T;Nu||Bc(),this.styles=this.styles||Mp(e),v=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Mi[_]&&up(_,t,i,r,e,s)))){if(f=typeof u,p=Mo[_],f==="function"&&(u=u.call(i,r,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=aa(u)),p)p(this,e,_,u,i)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",$n.lastIndex=0,$n.test(c)||(m=Jt(c),g=Jt(u),g?m!==g&&(c=Zn(e,_,c,g)+g):m&&(u+=m)),this.add(o,"setProperty",c,u,r,s,0,0,_),a.push(_),v.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],kt(c)&&~c.indexOf("random(")&&(c=aa(c)),Jt(c+"")||c==="auto"||(c+=Ci.units[_]||Jt(Sn(e,_))||""),(c+"").charAt(1)==="="&&(c=Sn(e,_))):c=Sn(e,_),d=parseFloat(c),M=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),_ in sn&&(_==="autoAlpha"&&(d===1&&Sn(e,"visibility")==="hidden"&&h&&(d=0),v.push("visibility",0,o.visibility),qn(this,o,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=sn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),w=_ in Pn,w){if(this.styles.save(_),T=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=wi(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var R=e.style.perspective;e.style.perspective=u,u=wi(e,"perspective"),R?e.style.perspective=R:Jn(e,"perspective")}h=parseFloat(u)}if(S||(y=e._gsap,y.renderTransform&&!t.parseTransform||ua(e,t.parseTransform),E=t.smoothOrigin!==!1&&y.smooth,S=this._pt=new mi(this._pt,o,Mt,0,1,y.renderTransform,y,0,-1),S.dep=1),_==="scale")this._pt=new mi(this._pt,y,"scaleY",y.scaleY,(M?ns(y.scaleY,M+h):h)-y.scaleY||0,Oc),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){v.push(gi,0,o[gi]),u=My(u),y.svg?zc(e,u,0,E,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==y.zOrigin&&qn(this,y,"zOrigin",y.zOrigin,g),qn(this,o,_,yo(c),yo(u)));continue}else if(_==="svgOrigin"){zc(e,u,1,E,0,this);continue}else if(_ in Ep){Ey(this,y,_,d,M?ns(d,M+u):u);continue}else if(_==="smoothOrigin"){qn(this,y,"smooth",y.smooth,u);continue}else if(_==="force3D"){y[_]=u;continue}else if(_==="transform"){wy(this,u,e);continue}}else _ in o||(_=fs(_)||_);if(w||(h||h===0)&&(d||d===0)&&!ay.test(u)&&_ in o)m=(c+"").substr((d+"").length),h||(h=0),g=Jt(u)||(_ in Ci.units?Ci.units[_]:m),m!==g&&(d=Zn(e,_,c,g)),this._pt=new mi(this._pt,w?y:o,_,d,(M?ns(d,M+h):h)-d,!w&&(g==="px"||_==="zIndex")&&t.autoRound!==!1?uy:Oc),this._pt.u=g||0,w&&T!==u?(this._pt.b=c,this._pt.e=T,this._pt.r=cy):m!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=ly);else if(_ in o)Sy.call(this,e,_,c,M?M+u:u);else if(_ in e)this.add(e,_,c||e[_],M?M+u:u,r,s);else if(_!=="parseTransform"){Eu(_,u);continue}w||(_ in o?v.push(_,0,o[_]):typeof e[_]=="function"?v.push(_,2,e[_]()):v.push(_,1,c||e[_])),a.push(_)}}A&&gp(this)},render:function(e,t){if(t.tween._time||!Ou())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Sn,aliases:sn,getSetter:function(e,t,i){var r=sn[t];return r&&r.indexOf(",")<0&&(t=r),t in Pn&&t!==gi&&(e._gsap.x||Sn(e,"x"))?i&&Ad===i?t==="scale"?py:fy:(Ad=i||{})&&(t==="scale"?my:gy):e.style&&!yu(e.style[t])?hy:~t.indexOf("-")?dy:Iu(e,t)},core:{_removeProperty:Jn,_getMatrix:Bu}};_i.utils.checkPrefix=fs;_i.core.getStyleSaver=Mp;(function(n,e,t,i){var r=pi(n+","+e+","+t,function(s){Pn[s]=1});pi(e,function(s){Ci.units[s]="deg",Ep[s]=1}),sn[r[13]]=n+","+e,pi(i,function(s){var a=s.split(":");sn[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");pi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Ci.units[n]="px"});_i.registerPlugin(Cp);var Si=_i.registerPlugin(Cp)||_i;Si.core.Tween;const so={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class vs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Ay=new Co(-1,1,1,-1,0,1);class Cy extends ti{constructor(){super(),this.setAttribute("position",new ui([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ui([0,2,0,0,2,0],2))}}const Ry=new Cy;class zu{constructor(e){this._mesh=new Xe(Ry,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ay)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ku extends vs{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Et?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ia.clone(e.uniforms),this.material=new Et({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new zu(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Od extends vs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class Py extends vs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Ly{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new fe);this._width=i.width,this._height=i.height,t=new jt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ci}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ku(so),this.copyPass.material.blending=on,this.timer=new Z0}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Od!==void 0&&(a instanceof Od?i=!0:a instanceof Py&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new fe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Dy extends vs{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Le}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}const Iy={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Le(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ps extends vs{constructor(e,t=1,i,r){super(),this.strength=t,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new fe(e.x,e.y):new fe(256,256),this.clearColor=new Le(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new jt(s,a,{type:ci,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const h=new jt(s,a,{type:ci,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const d=new jt(s,a,{type:ci,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),a=Math.round(a/2)}const o=Iy;this.highPassUniforms=ia.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Et({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new fe(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ia.clone(so.uniforms),this.blendMaterial=new Et({uniforms:this.copyUniforms,vertexShader:so.vertexShader,fragmentShader:so.fragmentShader,premultipliedAlpha:!0,blending:Kt,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Le,this._oldClearAlpha=1,this._basic=new Qt,this._fsQuad=new zu(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new fe(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=ps.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ps.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[],i=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(i*i))/i);const r=[],s=[];for(let a=1;a<e;a+=2){const o=t[a],l=a+1<e?t[a+1]:0,c=o+l;r.push((a*o+(a+1)*l)/c),s.push(c)}return new Et({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new fe(.5,.5)},direction:{value:new fe(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:s}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Et({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}ps.BlurDirectionX=new fe(1,0);ps.BlurDirectionY=new fe(0,1);const $a={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Uy extends vs{constructor(){super(),this.isOutputPass=!0,this.uniforms=ia.clone($a.uniforms),this.material=new xf({name:$a.name,uniforms:this.uniforms,vertexShader:$a.vertexShader,fragmentShader:$a.fragmentShader}),this._fsQuad=new zu(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ye.getTransfer(this._outputColorSpace)===it&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Kc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Jc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Zc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Qc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===eu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===tu?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===jc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const ji={email:"Abdelbadi1@protonmail.com",phone:"+32 485 466 702",phoneHref:"tel:+32485466702",linkedin:"https://www.linkedin.com/in/abdelbadi-lababidi-929537397/",github:"https://github.com/Prota0202",cv:"CV-Abdelbadi-Lababidi.pdf"},Fd=[{id:"scope",big:!0,glyph:"doc",label:{fr:"Cadrage",en:"Scoping"},color:"#ff9a3c",tip:{fr:"Besoin flou en entrée, périmètre écrit en sortie. ORIGO : brief recueilli chez le client, règles métier documentées.",en:"Fuzzy need in, written scope out. ORIGO: brief captured with the client, business rules documented."}},{id:"plan",big:!0,glyph:"gantt",label:{fr:"Coordination",en:"Coordination"},color:"#ffd36b",tip:{fr:"ECAM, janvier–juin 2025 : des équipes de 1re année, un cycle projet complet, une deadline qui ne bouge pas.",en:"ECAM, Jan–Jun 2025: first-year teams, a full project cycle, a deadline that does not move."}},{id:"measure",big:!0,glyph:"roc",label:{fr:"Mesure",en:"Measurement"},color:"#7fd4ff",tip:{fr:"Comparer avant d’affirmer : LLM vs modèle simple, courbes ROC, coût énergie. Le gain se mesure, il ne se suppose pas.",en:"Compare before claiming: LLM vs simple model, ROC curves, energy cost. Gains are measured, not assumed."}},{id:"doc",glyph:"TeX",label:{fr:"LaTeX",en:"LaTeX"},color:"#e8e2d0",tip:{fr:"LaTeX niveau avancé. Oui, je fais aussi des slides. Non, pas en LaTeX (sauf si vous insistez).",en:"Advanced LaTeX. Yes, I also do slides. No, not in LaTeX (unless you insist)."}},{id:"uml",glyph:"UML",label:{fr:"UML",en:"UML"},color:"#c9b6ff",tip:{fr:"Pour que le métier et les devs regardent le même schéma — Talab, déclinaison SaaS multi-grossistes.",en:"So business and devs look at the same diagram — Talab, a multi-wholesaler SaaS variant."}},{id:"odoo",glyph:"Oo",label:{fr:"Odoo",en:"Odoo"},color:"#d58bd0",tip:{fr:"ORIGO : tarifs alignés sur Odoo, parce que le client n’allait pas changer d’ERP pour moi.",en:"ORIGO: pricing aligned with Odoo, because the client was not switching ERP for me."}},{id:"py",glyph:"Py",label:{fr:"Python",en:"Python"},color:"#ffd84a",tip:{fr:"Pour les preuves de concept et les évaluations — Hand Talk, Job Match. Outil, pas identité.",en:"For proofs of concept and evaluations — Hand Talk, Job Match. A tool, not an identity."}},{id:"ts",glyph:"TS",label:{fr:"TypeScript",en:"TypeScript"},color:"#5aa9ff",tip:{fr:"J’ai livré du web et du mobile (AppL). Ça aide à estimer une charge sans dire « c’est juste un bouton ».",en:"I have shipped web and mobile (AppL). Helps estimate effort without saying “it’s just a button”."}},{id:"docker",glyph:"Dk",label:{fr:"Docker",en:"Docker"},color:"#3fb6ff",tip:{fr:"Conteneurs pour Job Match et ORIGO. Et six semaines de DevOps chez AYOURIS : je sais ce que « on bascule ce soir » implique.",en:"Containers for Job Match and ORIGO. Plus six weeks of DevOps at AYOURIS: I know what “we cut over tonight” means."}},{id:"git",glyph:"Git",label:{fr:"Git",en:"Git"},color:"#ff6a3d",tip:{fr:"L’historique des décisions, version développeur. 30+ repos publics, dont certains datent d’avant ma barbe.",en:"The decision log, developer edition. 30+ public repos, some older than my beard."}},{id:"linux",glyph:">_",label:{fr:"Linux",en:"Linux"},color:"#bfffa8",tip:{fr:"Kali, Ubuntu, Manjaro. Les trois, oui. Une phase.",en:"Kali, Ubuntu, Manjaro. All three, yes. A phase."}},{id:"cisco",glyph:"Ci",label:{fr:"Cisco",en:"Cisco"},color:"#57d6c8",tip:{fr:"Expert Systech, 2023 : switches, caméras, salle serveur — cartographiés pour que la doc survive à son auteur.",en:"Expert Systech, 2023: switches, cameras, server room — mapped so the docs outlive their author."}},{id:"knx",glyph:"KNX",label:{fr:"KNX",en:"KNX"},color:"#9ee26b",tip:{fr:"Domotique de bâtiment (ETS). Un mot qui impressionne en entretien et qui se documente très bien.",en:"Building automation (ETS). Sounds impressive in interviews, documents very well."}},{id:"mistral",glyph:"M",label:{fr:"Mistral",en:"Mistral"},color:"#ff8a2a",tip:{fr:"Utilisé, comparé, chiffré. Je ne suis pas « spécialiste IA » : je suis celui qui demande « par rapport à quoi ? ».",en:"Used, compared, costed. Not an “AI specialist”: I am the one asking “compared to what?”."}},{id:"cursor",glyph:"⌘",label:{fr:"Cursor",en:"Cursor"},color:"#d9d9d9",tip:{fr:"Outil quotidien, avec Claude Code. Ce site en est la preuve — et le cahier des charges, c’était moi.",en:"Daily driver, with Claude Code. This site is proof — and the spec was mine."}},{id:"nl",glyph:"NL",label:{fr:"Nederlands",en:"Dutch"},color:"#ffb44a",tip:{fr:"A2, compréhension passive solide. Ik leer nog. Dank u voor uw geduld.",en:"A2, solid passive comprehension. Ik leer nog. Dank u voor uw geduld."}}],Ny={htmlLang:"fr",meta:{title:"Abdelbadi Lababidi — Chef de projet · Consultant · Analyste",description:"Ingénieur industriel (informatique, distinction). Je fais le pont entre le métier et la technique : cadrage, coordination, preuve de concept, documentation.",hiddenTitle:"Revenez, la réunion n’est pas finie."},loader:"chargement du livrable",nav:["Accueil","Univers","Parcours","Projets","Contact"],logoRoles:["Ingénieur","Chef de projet","Analyste"],status:"Disponible · Bruxelles",sound:"Son",hero:{welcome:"Bienvenue dans mon monde",name:"ABDELBADI",tag:"Ingénieur · ECAM · distinction",chip:"Pont métier ↔ tech",chipTip:"Titre auto-proclamé. Validé par 0 comité de pilotage… pour l’instant.",roles:["Chef de projet","Consultant","Analyste"],pitch:"Du besoin flou au livrable qui tourne en production.",scroll:"Scroll",side:["Univers","Parcours","Projets","Contact"]},universe:{kicker:"Ce qui tourne dans",title:["L’univers","de travail"],sub:"Outils · Méthodes · Personnes · Impact",left:["Cadrer","Construire","Mesurer","Transmettre"],right:["Moins de jargon.","Plus de","livrables."],hint:"Survolez les cubes — chacun a une histoire vraie",services:[["Cadrage & analyse","Interviews, process réel, contraintes. Un périmètre clair et des règles écrites."],["Coordination","Planning, jalons, arbitrages. Le lien entre le brief et ceux qui exécutent."],["Traduction métier ↔ tech","Je reformule jusqu’à ce que tout le monde parle de la même chose."]]},journey:{title:["Un voyage","dans le","temps"],left:["Terrain","Études","Stages","Projets","Moi"],bottom:["Même","curiosité.","Un peu plus","de méthode."],hint:"Scrollez pour avancer dans le temps",years:[{year:"2021",title:"Débuts",lines:["ECAM Brussels","Néerlandais du soir"],period:"Fév 2021 → 2022",role:"Bachelier en ingénierie industrielle",desc:"Entrée à l’ECAM en février 2021, cours du soir de néerlandais à La Maison du Néerlandais — et des jobs étudiants à côté, déjà depuis 2019.",points:["Bachelier lancé à l’ECAM","Néerlandais en cours du soir (2021–2022)","Jobs étudiants en parallèle"]},{year:"2022",title:"Terrain",lines:["Retail · pharmacie","Horeca · industrie"],period:"2019 → 2026",role:"Jobs étudiants en parallèle des études",desc:"Retail, pharmacie, horeca, sites industriels. Là où on apprend qu’un process n’existe que s’il tient un samedi à 17h.",points:["7 ans de jobs étudiants au total","Contact client et travail en équipe","Horaires décalés — et des examens en prime"]},{year:"2023",title:"Documenter",lines:["Expert Systech","Stage cybersécurité"],period:"2023",role:"Stagiaire cybersécurité — Expert Systech",desc:"Documentation de bout en bout d’une installation industrielle et bâtiment : switches Cisco, caméras, salle serveur, KNX (ETS). Objectif : qu’une intervention ne dépende plus d’une seule personne.",points:["Infrastructure cartographiée de bout en bout","Procédures et doc utilisateurs rédigées","Support de première ligne"]},{year:"2024",title:"Bachelier ✓",lines:["Diplôme obtenu","Entrée en master"],period:"2021 → 2024",role:"Bachelier en ingénierie industrielle — ECAM",desc:"Bachelier obtenu, direction le master en informatique. Toujours avec des jobs à côté, parce que le loyer ne lit pas les relevés de notes.",points:["Bachelier ECAM obtenu","Master en informatique (2024–2026)","Travail en parallèle, sans pause"]},{year:"2025",title:"Coordonner",lines:["ECAM Brussels","Superviseur de projets"],period:"Jan → Juin 2025",role:"Superviseur de projets — ECAM Brussels",desc:"Accompagnement d’équipes de 1re année sur un cycle projet complet : cadrage, planning, communication, livraison à date.",points:["Cycle complet : cadrage → planning → livraison","Points de suivi réguliers avec les équipes","Coaching communication et travail d’équipe"]},{year:"2026",title:"Livrer",lines:["AYOURIS · ORIGO","Master, distinction"],period:"Jan → Juin 2026",role:"AYOURIS (DevOps puis IA) · ORIGO · Master",desc:"Migration haute dispo de Nawat Prime, preuve de concept Hand Talk mesurée sur des inconnus, ORIGO livré et vendu à un client B2B — et le master avec distinction.",points:["Bascule HA quasi sans interruption","Hand Talk : 98,2 % · 84 % sur signataires inconnus","ORIGO vendu · Master avec distinction"]}]},projects:{kicker:"Projets",left:["Idées","Cadrage","Livraison","Impact réel"],bottom:["Vrais projets.","Vrais clients.","Vrais chiffres."],right:["Cliquez une carte","pour ouvrir","le dossier"],problem:"Problème",approach:"Approche",result:"Résultat",repo:"Voir le repo",onRequest:"Détails sur demande",close:"Fermer"},cards:[{id:"origo",size:"xl",name:"ORIGO",title:["Vendu","en B2B"],kicker:"SOLD · B2B",art:"orders",accent:"#ff7a2f",sub:"Commande Pro · produit solo, du besoin à la vente",tags:["Cadrage","Règles métier","Go-live"],url:"https://github.com/Prota0202/Origo",meta:["Client : grossiste B2B (BE)","Rôle : tout, seul","Statut : vendu"],problem:"Commandes pro par téléphone et WhatsApp, catalogues différents par client restaurant, stock qui part en négatif.",approach:"4 rôles (direction, préparation, livreur, client), machine à états des commandes, stock non survendable, tarifs alignés sur Odoo.",result:"En production 24/7 avec sauvegardes, documenté pour la passation, présenté au client — puis vendu."},{id:"hand",size:"l",name:"HAND TALK",title:["Mesuré sur","des inconnus"],kicker:"98,2 % · 84 %",art:"hand",accent:"#ff3b5c",sub:"LSF → texte & voix · TFE chez AYOURIS",tags:["PoC","Évaluation","Hardware"],url:"https://github.com/Prota0202/Hand-Talk-Translator",meta:["Cadre : TFE · AYOURIS","Rôle : PoC bout en bout","Statut : livré"],problem:"Traduire la langue des signes française en texte et en voix — et savoir si ça marche ailleurs que sur mon bureau.",approach:"Protocole défini avant : collecte, entraînement, évaluation croisée sur 5 signataires inconnus, mode replay sans matériel, tests pytest.",result:"98,2 % en hold-out, 84 % sur de nouvelles personnes. Un écart assumé et expliqué, pas caché."},{id:"job",size:"l",name:"JOB MATCH",title:["Mesuré,","pas supposé"],kicker:"LLM ⇄ ML",art:"roc",accent:"#5ec8ff",sub:"LLM vs modèle simple · étude chiffrée",tags:["Étude","ROC / AUC","Coût énergie"],url:"https://github.com/Prota0202/IA-and-ML-Tinder-like-for-jobs",meta:["Cadre : projet académique","Rôle : étude & build","Statut : benchmarké"],problem:"« Mettons un LLM » — d’accord, mais par rapport à quoi, et pour quel coût ?",approach:"CV PDF → texte structuré → score via l’API Mistral. Comparé à un modèle tabulaire sur un jeu étiqueté à la main, courbes ROC, suivi énergie/carbone.",result:"Une décision argumentée sur le gain réel, chiffres à l’appui. Le genre de slide qu’un comité aime."},{id:"appl",size:"m",name:"APPL",title:["2 clients,","1 modèle"],kicker:"WEB + MOBILE",art:"phones",accent:"#b28cff",sub:"App de quêtes · web et mobile",tags:["Produit","Web","Mobile"],url:"https://github.com/Prota0202/AppL",meta:["Cadre : projet personnel","Rôle : conception & build","Statut : livré"],problem:"Une même app de quêtes et de progression, sur le web et sur mobile, sans dupliquer les règles.",approach:"Un seul modèle de données (migrations versionnées), deux clients : web SolidStart, mobile Expo / React Native. Auth et validation partagées.",result:"Deux interfaces cohérentes, un seul endroit où les règles vivent."},{id:"ecam",size:"s",name:"ECAM",title:["Coordonner"],kicker:"DOSSIER 05",art:"gantt",accent:"#ffd36b",sub:"Superviseur de projets · 2025",tags:["Planning","Coaching"],url:null,meta:["Cadre : ECAM Brussels","Rôle : superviseur","Statut : 6 mois"],problem:"Des équipes de 1re année, un brief ambitieux, une deadline qui ne bouge pas.",approach:"Découpage, jalons, points de suivi réguliers, coaching sur la communication d’équipe.",result:"Un cycle projet complet mené à terme — et des étudiants qui savent faire un planning."},{id:"systech",size:"s",name:"SYSTECH",title:["Documenter"],kicker:"DOSSIER 06",art:"network",accent:"#57d6c8",sub:"Stage cybersécurité · 2023",tags:["Doc","Support"],url:null,meta:["Cadre : stage 2023","Rôle : doc & support","Statut : transmis"],problem:"Une installation (Cisco, caméras, salle serveur, KNX) que seule une personne connaissait vraiment.",approach:"Relevé de bout en bout, schémas, procédures pas à pas, documentation pour non-spécialistes.",result:"Une intervention possible par quelqu’un d’autre. Le meilleur test d’une doc."},{id:"bingo",size:"s",name:"COPIL",title:["Bingo"],kicker:"MODE RÉUNION",art:"bingo",accent:"#ff9a3c",sub:"Easter egg",tags:[],url:null,action:"bingo"},{id:"cv",size:"s",name:"CV",title:["Le PDF"],kicker:"1 PAGE",art:"cv",accent:"#e8e2d0",sub:"Télécharger le CV",tags:[],url:null,action:"cv"},{id:"nawat",size:"m",name:"NAWAT HA",title:["Zéro","downtime*"],kicker:"AYOURIS",art:"cluster",accent:"#ffb23e",sub:"Migration haute disponibilité",tags:["Continuité","DR","Planification"],url:null,meta:["Cadre : stage AYOURIS","Rôle : migration HA","Statut : en cluster"],problem:"Une plateforme SaaS en production à migrer sans que les clients s’en rendent compte.",approach:"Bascule planifiée, tolérance aux pannes, plan de reprise, retour arrière toujours possible.",result:"Maintenances et mises à jour quasi sans interruption. *L’astérisque, c’est l’honnêteté."},{id:"talab",size:"m",name:"TALAB",title:["Et pour dix","grossistes ?"],kicker:"WHITE-LABEL",art:"map",accent:"#3effc0",sub:"Déclinaison SaaS · étude Maroc",tags:["Multi-tenant","UML","Démo"],url:"https://github.com/Prota0202/Talab",meta:["Cadre : étude de déclinaison","Rôle : conception & démo","Statut : démo"],problem:"Le modèle ORIGO marche pour un client. Et pour plusieurs grossistes, dans un autre pays ?",approach:"Plateforme white-label : un catalogue par grossiste, commande mobile pour restaurants, cafés et hôtels. Démo avec un grossiste fictif à Casablanca.",result:"Une déclinaison présentable, démo fonctionnelle incluse."}],finale:{name:"ABDELBADI",right:["Cadrer","Coordonner","Livrer","Recommencer"],title:"Parlons-en",sub:"Ouvert aux postes de chef de projet, consultant et analyste · Bruxelles & alentours",email:"E-mail",phone:"Téléphone",cv:"Télécharger le CV",contact:"Contact",langs:"FR · AR natifs — EN C1 — NL A2",foot:"© 2026 Abdelbadi Lababidi — Bruxelles",egg:"Aucun stakeholder n’a été malmené pendant ce projet — sauf moi, seul sur la liste.",copied:"Adresse copiée. Le presse-papiers est plus fiable que ma mémoire."},bingo:{kicker:"Mode réunion activé",title:"Bingo du comité de pilotage",foot:"Je connais le jargon. Je préfère les comptes rendus avec des actions dedans.",close:"Fermer [Esc]",win:"BINGO. Je propose qu’on fixe une action et un responsable.",words:["On se fait un point ?","Quick win","Je partage mon écran","Tu m’entends ?","On prend ça offline","C’est dans le scope ?","Pour hier","Alignement","On boucle par mail","Synergie","Next steps","ASAP","Tu es sur mute","Low-hanging fruit","On a 5 min de retard","Deep dive"]},eggs:{console:`Vous inspectez le code ? Bon réflexe d’analyste.
Le vrai cahier des charges : Abdelbadi1@protonmail.com
Indice : ↑ ↑ ↓ ↓ ← → ← → B A`,logo:["Clic n°3 : vous testez l’interface. Approuvé.","Clic n°5 : vous êtes du genre recette exhaustive, non ?","Clic n°8 : ticket créé — « le logo ne fait rien ». Statut : won’t fix."],portrait:["Oui, c’est un contre-jour. Le visage est réservé à l’entretien.","Profil confidentiel. Niveau d’accréditation requis : un café.","Le budget Ferrari a été réaffecté au café de l’équipe."]}},Oy={htmlLang:"en",meta:{title:"Abdelbadi Lababidi — Project manager · Consultant · Analyst",description:"Industrial engineer (computer science, distinction). I bridge business and tech: scoping, coordination, proof of concept, documentation.",hiddenTitle:"Come back — the meeting is not over."},loader:"loading deliverable",nav:["Home","Universe","Journey","Projects","Contact"],logoRoles:["Engineer","Project manager","Analyst"],status:"Available · Brussels",sound:"Sound",hero:{welcome:"Welcome to my world",name:"ABDELBADI",tag:"Engineer · ECAM · distinction",chip:"Business ↔ tech bridge",chipTip:"Self-proclaimed title. Approved by 0 steering committees… so far.",roles:["Project manager","Consultant","Analyst"],pitch:"From a fuzzy brief to a deliverable running in production.",scroll:"Scroll",side:["Universe","Journey","Projects","Contact"]},universe:{kicker:"What runs inside",title:["The working","universe"],sub:"Tools · Methods · People · Impact",left:["Scope","Build","Measure","Hand over"],right:["Less jargon.","More","deliverables."],hint:"Hover the cubes — each one has a true story",services:[["Scoping & analysis","Interviews, real process, constraints. Clear scope and written rules."],["Coordination","Schedule, milestones, trade-offs. The link between the brief and the people doing the work."],["Business ↔ tech translation","I rephrase until everyone means the same thing."]]},journey:{title:["A journey","through","time"],left:["Field","Studies","Internships","Projects","Me"],bottom:["Same","curiosity.","A bit more","method."],hint:"Scroll to move through time",years:[{year:"2021",title:"Beginning",lines:["ECAM Brussels","Dutch evening classes"],period:"Feb 2021 → 2022",role:"Bachelor in industrial engineering",desc:"Joined ECAM in February 2021, Dutch evening classes at La Maison du Néerlandais — and student jobs on the side, already since 2019.",points:["Bachelor started at ECAM","Dutch evening classes (2021–2022)","Student jobs in parallel"]},{year:"2022",title:"Field work",lines:["Retail · pharmacy","Hospitality · industry"],period:"2019 → 2026",role:"Student jobs alongside full-time studies",desc:"Retail, pharmacy, hospitality, industrial sites. Where you learn a process only counts if it survives a Saturday at 5 p.m.",points:["7 years of student jobs in total","Customer contact and teamwork","Shift hours — plus exams on the side"]},{year:"2023",title:"Document",lines:["Expert Systech","Cybersecurity intern"],period:"2023",role:"Cybersecurity intern — Expert Systech",desc:"End-to-end documentation of an industrial and building installation: Cisco switches, cameras, server room, KNX (ETS). Goal: an intervention should not depend on one person.",points:["Infrastructure mapped end to end","Procedures and user docs written","First-line support"]},{year:"2024",title:"Bachelor ✓",lines:["Degree obtained","Master starts"],period:"2021 → 2024",role:"Bachelor of industrial engineering — ECAM",desc:"Bachelor done, on to the master in computer science. Still working on the side, because rent does not read transcripts.",points:["ECAM bachelor obtained","Master in computer science (2024–2026)","Working in parallel, no break"]},{year:"2025",title:"Coordinate",lines:["ECAM Brussels","Project supervisor"],period:"Jan → Jun 2025",role:"Project supervisor — ECAM Brussels",desc:"Coached first-year teams through a full project cycle: scoping, planning, communication, on-time delivery.",points:["Full cycle: scoping → planning → delivery","Regular check-ins with teams","Communication and teamwork coaching"]},{year:"2026",title:"Deliver",lines:["AYOURIS · ORIGO","Master, distinction"],period:"Jan → Jun 2026",role:"AYOURIS (DevOps then AI) · ORIGO · Master",desc:"High-availability migration of Nawat Prime, the Hand Talk proof of concept measured on strangers, ORIGO shipped and sold to a B2B client — and the master with distinction.",points:["HA cutover with near-zero downtime","Hand Talk: 98.2% · 84% on unseen signers","ORIGO sold · Master with distinction"]}]},projects:{kicker:"Projects",left:["Ideas","Scoping","Delivery","Real impact"],bottom:["Real projects.","Real clients.","Real numbers."],right:["Click a card","to open","the case file"],problem:"Problem",approach:"Approach",result:"Result",repo:"View repo",onRequest:"Details on request",close:"Close"},cards:[{id:"origo",size:"xl",name:"ORIGO",title:["Sold","B2B"],kicker:"SOLD · B2B",art:"orders",accent:"#ff7a2f",sub:"Commande Pro · solo product, from need to sale",tags:["Scoping","Business rules","Go-live"],url:"https://github.com/Prota0202/Origo",meta:["Client: B2B wholesaler (BE)","Role: everything, solo","Status: sold"],problem:"Pro orders by phone and WhatsApp, different catalogues per restaurant client, stock going negative.",approach:"4 roles (management, prep, driver, client), order state machine, non-oversellable stock, pricing aligned with Odoo.",result:"Live 24/7 with backups, documented for handover, presented to the client — then sold."},{id:"hand",size:"l",name:"HAND TALK",title:["Measured on","strangers"],kicker:"98.2% · 84%",art:"hand",accent:"#ff3b5c",sub:"FSL → text & speech · thesis at AYOURIS",tags:["PoC","Evaluation","Hardware"],url:"https://github.com/Prota0202/Hand-Talk-Translator",meta:["Context: thesis · AYOURIS","Role: end-to-end PoC","Status: delivered"],problem:"Translate French Sign Language to text and speech — and know if it works outside my desk.",approach:"Protocol defined upfront: collection, training, cross-signer evaluation on 5 unseen signers, hardware-free replay mode, pytest suite.",result:"98.2% hold-out, 84% on new people. A gap stated and explained, not hidden."},{id:"job",size:"l",name:"JOB MATCH",title:["Measured,","not assumed"],kicker:"LLM ⇄ ML",art:"roc",accent:"#5ec8ff",sub:"LLM vs simple model · costed study",tags:["Study","ROC / AUC","Energy cost"],url:"https://github.com/Prota0202/IA-and-ML-Tinder-like-for-jobs",meta:["Context: academic project","Role: study & build","Status: benchmarked"],problem:"“Let’s use an LLM” — fine, but compared to what, and at what cost?",approach:"PDF résumés → structured text → fit score via the Mistral API. Compared with a tabular model on a hand-labelled set, ROC curves, energy/carbon tracking.",result:"A decision backed by numbers on real gain. The kind of slide a committee likes."},{id:"appl",size:"m",name:"APPL",title:["2 clients,","1 model"],kicker:"WEB + MOBILE",art:"phones",accent:"#b28cff",sub:"Quest app · web and mobile",tags:["Product","Web","Mobile"],url:"https://github.com/Prota0202/AppL",meta:["Context: personal project","Role: design & build","Status: shipped"],problem:"One quest-and-progression app, on web and mobile, without duplicating the rules.",approach:"One data model (versioned migrations), two clients: SolidStart web, Expo / React Native mobile. Shared auth and validation.",result:"Two consistent interfaces, one place where the rules live."},{id:"ecam",size:"s",name:"ECAM",title:["Coordinate"],kicker:"FILE 05",art:"gantt",accent:"#ffd36b",sub:"Project supervisor · 2025",tags:["Planning","Coaching"],url:null,meta:["Context: ECAM Brussels","Role: supervisor","Status: 6 months"],problem:"First-year teams, an ambitious brief, a deadline that does not move.",approach:"Breakdown, milestones, regular check-ins, team communication coaching.",result:"A full project cycle delivered — and students who can plan."},{id:"systech",size:"s",name:"SYSTECH",title:["Document"],kicker:"FILE 06",art:"network",accent:"#57d6c8",sub:"Cybersecurity internship · 2023",tags:["Docs","Support"],url:null,meta:["Context: 2023 internship","Role: docs & support","Status: handed over"],problem:"An installation (Cisco, cameras, server room, KNX) only one person really knew.",approach:"End-to-end survey, diagrams, step-by-step procedures, docs for non-specialists.",result:"Someone else can run the intervention. The best test of documentation."},{id:"bingo",size:"s",name:"STEERCO",title:["Bingo"],kicker:"MEETING MODE",art:"bingo",accent:"#ff9a3c",sub:"Easter egg",tags:[],url:null,action:"bingo"},{id:"cv",size:"s",name:"CV",title:["The PDF"],kicker:"1 PAGE",art:"cv",accent:"#e8e2d0",sub:"Download the CV",tags:[],url:null,action:"cv"},{id:"nawat",size:"m",name:"NAWAT HA",title:["Zero","downtime*"],kicker:"AYOURIS",art:"cluster",accent:"#ffb23e",sub:"High-availability migration",tags:["Continuity","DR","Planning"],url:null,meta:["Context: AYOURIS internship","Role: HA migration","Status: on cluster"],problem:"A live SaaS platform to migrate without customers noticing.",approach:"Planned cutover, fault tolerance, recovery plan, rollback always possible.",result:"Maintenance and upgrades with near-zero interruption. *The asterisk is called honesty."},{id:"talab",size:"m",name:"TALAB",title:["What about","ten wholesalers?"],kicker:"WHITE-LABEL",art:"map",accent:"#3effc0",sub:"SaaS variant · Morocco study",tags:["Multi-tenant","UML","Demo"],url:"https://github.com/Prota0202/Talab",meta:["Context: variant study","Role: design & demo","Status: demo"],problem:"The ORIGO model works for one client. What about several wholesalers, in another country?",approach:"White-label platform: one catalogue per wholesaler, mobile ordering for restaurants, cafés and hotels. Demo with a fictional wholesaler in Casablanca.",result:"A presentable variant, working demo included."}],finale:{name:"ABDELBADI",right:["Scope","Coordinate","Deliver","Repeat"],title:"Let’s talk",sub:"Open to project manager, consultant and analyst roles · Brussels & area",email:"Email",phone:"Phone",cv:"Download CV",contact:"Contact",langs:"FR · AR native — EN C1 — NL A2",foot:"© 2026 Abdelbadi Lababidi — Brussels",egg:"No stakeholder was harmed during this project — except me, the only one on the list.",copied:"Address copied. The clipboard is more reliable than my memory."},bingo:{kicker:"Meeting mode enabled",title:"Steering committee bingo",foot:"I know the jargon. I prefer minutes with action items.",close:"Close [Esc]",win:"BINGO. I suggest one action item and one owner.",words:["Can we sync?","Quick win","Let me share my screen","Can you hear me?","Let’s take this offline","Is it in scope?","For yesterday","Alignment","We’ll follow up by email","Synergy","Next steps","ASAP","You’re on mute","Low-hanging fruit","We’re five minutes late","Deep dive"]},eggs:{console:`Inspecting the code? Good analyst reflex.
The real brief: Abdelbadi1@protonmail.com
Hint: ↑ ↑ ↓ ↓ ← → ← → B A`,logo:["Click #3: you’re testing the UI. Approved.","Click #5: exhaustive regression tester, aren’t you?","Click #8: ticket filed — “logo does nothing”. Status: won’t fix."],portrait:["Yes, it’s backlit. The face is reserved for the interview.","Classified profile. Clearance level required: one coffee.","The Ferrari budget was reallocated to the team’s coffee."]}},Al=localStorage.getItem("lang"),Sr=Al==="en"||Al==="fr"?Al:(navigator.language||"fr").toLowerCase().startsWith("fr")?"fr":"en",we=Sr==="en"?Oy:Ny;function Fy(n){localStorage.setItem("lang",n),location.reload()}const Bd='"Anton", "Impact", sans-serif',By='"Playfair Display", Georgia, serif',Rt='"Inter", "Helvetica Neue", Arial, sans-serif';let Rp=4;function zy(n){Rp=n}function hn(n,e){const t=document.createElement("canvas");return t.width=n,t.height=e,[t,t.getContext("2d")]}function dn(n){const e=new x0(n);return e.colorSpace=$t,e.anisotropy=Rp,e.needsUpdate=!0,e}function Hu(n){let e=n>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function oi(n,e,t,i,r,s){n.beginPath(),n.moveTo(e+s,t),n.arcTo(e+i,t,e+i,t+r,s),n.arcTo(e+i,t+r,e,t+r,s),n.arcTo(e,t+r,e,t,s),n.arcTo(e,t,e+i,t,s),n.closePath()}function ky(n,e,t,i,r=7){const s=Hu(r),a=n.getImageData(0,0,e,t),o=a.data;for(let l=0;l<o.length;l+=4){const c=(s()-.5)*i;o[l]+=c,o[l+1]+=c,o[l+2]+=c}n.putImageData(a,0,0)}function qs(n,e,t,i,r){const s=[...e],a=s.reduce((c,u)=>c+n.measureText(u).width,0)+r*(s.length-1);let o=n.textAlign==="center"?t-a/2:n.textAlign==="right"?t-a:t;const l=n.textAlign;n.textAlign="left";for(const c of s)n.fillText(c,o,i),o+=n.measureText(c).width+r;n.textAlign=l}function Pp(n,{color:e="#e3261b",stretch:t=1,cream:i=!1}={}){const s=Math.round(1500*t),[a,o]=hn(4096,s);o.textAlign="center",o.textBaseline="alphabetic";let l=1400;o.font=`400 ${l}px ${Bd}`;const c=o.measureText(n).width;if(l=Math.floor(l*Math.min(1,4096*.96/c)),o.font=`400 ${l}px ${Bd}`,o.save(),o.translate(4096/2,s*.93),o.scale(1,t),i){const h=o.createLinearGradient(0,-l,0,0);h.addColorStop(0,"#f6dcc0"),h.addColorStop(.55,"#ec8a5a"),h.addColorStop(1,"#b3160f"),o.fillStyle=h}else o.fillStyle=e;o.fillText(n,0,0),o.restore(),o.globalCompositeOperation="source-atop";const u=Hu(42);for(let h=0;h<2600;h++){const d=u()*4096,f=u()*s,p=u()*u()*26+1;o.fillStyle=u()>.5?`rgba(60,0,0,${.08+u()*.25})`:`rgba(255,190,150,${u()*.12})`,o.beginPath(),o.arc(d,f,p,0,Math.PI*2),o.fill()}for(let h=0;h<90;h++){const d=u()*4096,f=u()*s,p=o.createRadialGradient(d,f,0,d,f,120+u()*260);p.addColorStop(0,`rgba(40,0,0,${.15+u()*.2})`),p.addColorStop(1,"rgba(40,0,0,0)"),o.fillStyle=p,o.fillRect(0,0,4096,s)}o.globalCompositeOperation="destination-out";for(let h=0;h<1400;h++)o.fillStyle=`rgba(0,0,0,${.3+u()*.7})`,o.fillRect(u()*4096,u()*s,u()*5+1,u()*5+1);return o.globalCompositeOperation="source-over",dn(a)}function bo(n,e,t,i,r,s){if(n.save(),n.strokeStyle=s,n.fillStyle=s,n.lineWidth=r*.06,n.lineCap="round",n.lineJoin="round",e==="doc"){oi(n,t-r*.34,i-r*.44,r*.68,r*.88,r*.06),n.stroke();for(let a=0;a<4;a++){const o=i-r*.2+a*r*.17;n.beginPath(),n.moveTo(t-r*.2,o),n.lineTo(t-r*.12,o+r*.06),n.lineTo(t-r*.02,o-r*.06),n.stroke(),n.globalAlpha=.6,n.fillRect(t+r*.04,o-r*.02,r*.18,r*.04),n.globalAlpha=1}}else if(e==="gantt")[[0,.45],[.2,.4],[.35,.5],[.6,.3]].forEach(([o,l],c)=>{oi(n,t-r*.4+o*r*.8,i-r*.32+c*r*.2,l*r*.8,r*.12,r*.04),n.globalAlpha=.55+c*.15,n.fill()}),n.globalAlpha=1,n.beginPath(),n.moveTo(t-r*.44,i-r*.42),n.lineTo(t-r*.44,i+r*.44),n.lineTo(t+r*.44,i+r*.44),n.stroke();else if(e==="roc")n.beginPath(),n.moveTo(t-r*.4,i-r*.4),n.lineTo(t-r*.4,i+r*.4),n.lineTo(t+r*.4,i+r*.4),n.stroke(),n.setLineDash([r*.04,r*.05]),n.globalAlpha=.5,n.beginPath(),n.moveTo(t-r*.4,i+r*.4),n.lineTo(t+r*.4,i-r*.4),n.stroke(),n.setLineDash([]),n.globalAlpha=1,n.beginPath(),n.moveTo(t-r*.4,i+r*.4),n.bezierCurveTo(t-r*.36,i-r*.3,t-r*.1,i-r*.38,t+r*.4,i-r*.4),n.stroke();else{const a=[...e].length;n.font=`700 ${r*(a>=3?.42:a===2?.56:.72)}px ${Rt}`,n.textAlign="center",n.textBaseline="middle",n.fillText(e,t,i+r*.02)}n.restore()}function Hy(n,e){const[i,r]=hn(512,512),s=r.createLinearGradient(0,0,512,512);s.addColorStop(0,"#2a2522"),s.addColorStop(1,"#0c0b0b"),oi(r,8,8,496,496,70),r.fillStyle=s,r.fill(),r.lineWidth=4,r.strokeStyle="rgba(255,255,255,0.10)",r.stroke();const a=r.createRadialGradient(512/2,512*.42,10,512/2,512*.42,512*.45);return a.addColorStop(0,an(n.color,.28)),a.addColorStop(1,an(n.color,0)),r.fillStyle=a,r.fillRect(0,0,512,512),r.shadowColor=n.color,r.shadowBlur=30,bo(r,n.glyph,512/2,512*.42,512*.5,n.color),r.shadowBlur=0,r.fillStyle="rgba(255,255,255,0.85)",r.font=`600 46px ${Rt}`,r.textAlign="center",r.fillText(n.label[e],512/2,512*.86),dn(i)}function Gy(n,e){const[r,s]=hn(640,760),a=s.createLinearGradient(0,0,640,760);a.addColorStop(0,"#1f1c1b"),a.addColorStop(1,"#070707"),oi(s,10,10,620,740,64),s.fillStyle=a,s.fill(),s.lineWidth=5;const o=s.createLinearGradient(0,0,640,760);o.addColorStop(0,an(n.color,.9)),o.addColorStop(.5,"rgba(255,255,255,0.08)"),o.addColorStop(1,an(n.color,.5)),s.strokeStyle=o,s.stroke();const l=s.createRadialGradient(640/2,760*.4,10,640/2,760*.4,640*.5);return l.addColorStop(0,an(n.color,.3)),l.addColorStop(1,an(n.color,0)),s.fillStyle=l,s.fillRect(0,0,640,760),s.shadowColor=n.color,s.shadowBlur=40,bo(s,n.glyph,640/2,760*.4,640*.46,n.color),s.shadowBlur=0,s.fillStyle="#f4efe8",s.font=`600 78px ${Rt}`,s.textAlign="center",s.fillText(n.label[e],640/2,760*.82),dn(r)}function Vy(n){const[e,t]=hn(512,200);return t.font=`700 150px ${Rt}`,t.textAlign="center",t.textBaseline="middle",t.shadowColor="#ffb347",t.shadowBlur=30,t.fillStyle="#ffe2a8",t.fillText(n,256,104),t.shadowBlur=0,t.fillStyle="#fff4dc",t.fillText(n,256,104),dn(e)}const Wy=["school","shop","network","diploma","gantt","launch"];function Xy(n,e){const[r,s]=hn(640,820);s.fillStyle="#120d0a",s.fillRect(0,0,640,820);const a=820*.56,o=s.createLinearGradient(0,0,0,a);o.addColorStop(0,"#3b2f25"),o.addColorStop(1,"#16100c"),s.fillStyle=o,s.fillRect(24,24,592,a),s.save(),s.beginPath(),s.rect(24,24,592,a),s.clip(),kc(s,Wy[e],24,24,592,a,"#e9cfa3",e+3);const l=s.createRadialGradient(640/2,a/2+24,a*.2,640/2,a/2+24,a*.85);return l.addColorStop(0,"rgba(0,0,0,0)"),l.addColorStop(1,"rgba(0,0,0,0.65)"),s.fillStyle=l,s.fillRect(0,0,640,820),s.restore(),s.fillStyle="#ffd89a",s.font=`700 64px ${Rt}`,s.fillText(n.year,40,a+110),s.fillStyle="#f3e7d6",s.font=`700 40px ${Rt}`,qs(s,n.title.toUpperCase(),40,a+168,4),s.fillStyle="rgba(243,231,214,0.62)",s.font=`500 30px ${Rt}`,n.lines.forEach((c,u)=>qs(s,c.toUpperCase(),40,a+220+u*40,2)),s.strokeStyle="rgba(255,200,130,0.35)",s.lineWidth=3,s.strokeRect(6,6,628,808),ky(s,640,820,26,e*13+1),dn(r)}function qy(n){const t=n.size==="xl"||n.size==="l"?1024:768,i=n.size==="s"?900:640,[r,s]=hn(t,i),a=46,o=s.createLinearGradient(0,0,t,i);o.addColorStop(0,"#1b1a1d"),o.addColorStop(1,"#060607"),oi(s,8,8,t-16,i-16,a),s.fillStyle=o,s.fill(),s.save(),oi(s,8,8,t-16,i-16,a),s.clip();const l=n.size==="s";if(l?kc(s,n.art,0,i*.06,t,i*.5,n.accent,n.id.length*7):kc(s,n.art,t*.42,0,t*.58,i,n.accent,n.id.length*7),!l){const p=s.createLinearGradient(t*.38,0,t*.7,0);p.addColorStop(0,"rgba(10,10,12,1)"),p.addColorStop(1,"rgba(10,10,12,0)"),s.fillStyle=p,s.fillRect(t*.38,0,t*.32,i)}const c=s.createLinearGradient(0,0,t,i*.6);c.addColorStop(0,"rgba(255,255,255,0.10)"),c.addColorStop(.4,"rgba(255,255,255,0)"),s.fillStyle=c,s.fillRect(0,0,t,i),s.restore();const u=l?48:64;s.fillStyle=n.accent,s.font=`700 30px ${Rt}`,qs(s,n.kicker,u,u+26,5),s.fillStyle="#f5f0ea";const h=l?84:n.size==="xl"?108:92;s.font=`600 ${h}px ${By}`;const d=l?i*.7:u+60+h;n.title.forEach((p,_)=>s.fillText(p,u,d+_*h*1.02)),s.fillStyle="rgba(245,240,234,0.6)",s.font=`600 ${l?34:32}px ${Rt}`,qs(s,n.name,u,i-u-(l?10:50),6),l||(s.font=`400 28px ${Rt}`,s.fillStyle="rgba(245,240,234,0.5)",s.fillText(n.sub,u,i-u),oi(s,u,d+n.title.length*h+4,150,50,25),s.strokeStyle="rgba(255,255,255,0.35)",s.lineWidth=2,s.stroke(),s.fillStyle="#f5f0ea",s.font=`600 22px ${Rt}`,s.textAlign="center",qs(s,"OPEN",u+75,d+n.title.length*h+37,4),s.textAlign="left"),oi(s,8,8,t-16,i-16,a),s.lineWidth=6;const f=s.createLinearGradient(0,0,t,i);return f.addColorStop(0,an(n.accent,.95)),f.addColorStop(.35,"rgba(255,255,255,0.12)"),f.addColorStop(.7,"rgba(255,255,255,0.06)"),f.addColorStop(1,an(n.accent,.8)),s.strokeStyle=f,s.stroke(),dn(r)}function kc(n,e,t,i,r,s,a,o){const l=Hu(o*97+11),c=t+r/2,u=i+s/2,h=Math.min(r,s);n.save(),n.strokeStyle=a,n.fillStyle=a,n.lineCap="round",n.lineJoin="round";const d=n.createRadialGradient(c,u,0,c,u,h*.7);switch(d.addColorStop(0,an(a,.22)),d.addColorStop(1,an(a,0)),n.fillStyle=d,n.fillRect(t,i,r,s),n.fillStyle=a,n.shadowColor=a,n.shadowBlur=h*.04,n.lineWidth=Math.max(2,h*.012),e){case"school":{const f=r*.7,p=c-f/2,_=u-s*.05;n.beginPath(),n.moveTo(p-10,_),n.lineTo(c,_-s*.22),n.lineTo(p+f+10,_),n.stroke(),n.strokeRect(p,_,f,s*.36);for(let m=0;m<6;m++)n.strokeRect(p+f*(.07+m*.15),_+s*.06,f*.08,s*.22);n.font=`700 ${h*.09}px ${Rt}`,n.textAlign="center",n.fillText("ECAM",c,_-s*.05),n.globalAlpha=.8,oi(n,t+r*.72,i+s*.1,r*.2,s*.16,12),n.stroke(),n.font=`700 ${h*.07}px ${Rt}`,n.fillText("NL",t+r*.82,i+s*.21);break}case"shop":{const f=u+s*.15;n.beginPath(),n.moveTo(t+r*.1,f),n.lineTo(t+r*.9,f),n.stroke(),[[.2,"Rx"],[.45,"☕"],[.7,"⚙"]].forEach(([p,_])=>{n.strokeRect(t+r*p,f-s*.32,r*.16,s*.28),n.font=`700 ${h*.1}px ${Rt}`,n.textAlign="center",n.fillText(_,t+r*(p+.08),f-s*.14)}),n.font=`600 ${h*.07}px ${Rt}`,n.fillText("SAT · 17:00",c,f+s*.18);break}case"network":{const f=[];for(let p=0;p<9;p++)f.push([t+r*(.12+l()*.76),i+s*(.15+l()*.7)]);n.globalAlpha=.6,f.forEach((p,_)=>f.slice(_+1).forEach(m=>{Math.hypot(p[0]-m[0],p[1]-m[1])<h*.42&&(n.beginPath(),n.moveTo(p[0],p[1]),n.lineTo(m[0],m[1]),n.stroke())})),n.globalAlpha=1,f.forEach(([p,_],m)=>{m%3===0?n.strokeRect(p-h*.05,_-h*.03,h*.1,h*.06):(n.beginPath(),n.arc(p,_,h*.022,0,Math.PI*2),n.fill())});break}case"diploma":{n.strokeRect(c-r*.28,u-s*.22,r*.56,s*.4);for(let f=0;f<3;f++)n.globalAlpha=.6,n.fillRect(c-r*.2,u-s*.1+f*s*.08,r*(.4-f*.08),s*.025);n.globalAlpha=1,n.beginPath(),n.arc(c+r*.18,u+s*.14,h*.07,0,Math.PI*2),n.fill(),n.beginPath(),n.moveTo(c-r*.16,u-s*.34),n.lineTo(c,u-s*.42),n.lineTo(c+r*.16,u-s*.34),n.lineTo(c,u-s*.26),n.closePath(),n.fill();break}case"gantt":bo(n,"gantt",c,u,h*.7,a);break;case"roc":bo(n,"roc",c,u,h*.62,a),n.font=`700 ${h*.07}px ${Rt}`,n.fillText("AUC",c+h*.05,u+h*.08);break;case"launch":{const f=n.createRadialGradient(c,u+s*.1,0,c,u+s*.1,h*.5);f.addColorStop(0,"rgba(255,220,150,0.95)"),f.addColorStop(.3,"rgba(255,150,60,0.6)"),f.addColorStop(1,"rgba(255,120,40,0)"),n.fillStyle=f,n.fillRect(t,i,r,s),n.fillStyle="#140b06",n.shadowBlur=0;let p=t;for(;p<t+r;){const _=r*(.04+l()*.07),m=s*(.1+l()*.3);n.fillRect(p,i+s-m,_,m),p+=_+2}n.fillStyle=a,n.font=`800 ${h*.1}px ${Rt}`,n.textAlign="center",n.save(),n.translate(c+r*.25,i+s*.25),n.rotate(-.18),n.strokeStyle=a,n.lineWidth=4,n.strokeRect(-h*.18,-h*.07,h*.36,h*.12),n.fillText("SOLD",0,h*.03),n.restore();break}case"orders":{["NEW","PREP","ROUTE","DONE"].forEach((p,_)=>{const m=t+r*.16+_*r*.22,g=u+Math.sin(_*1.2)*s*.06;n.beginPath(),n.arc(m,g,h*.07,0,Math.PI*2),n.globalAlpha=_===3?1:.55,n.stroke(),_===3&&n.fill(),n.globalAlpha=1,n.font=`700 ${h*.045}px ${Rt}`,n.textAlign="center",n.fillText(p,m,g+h*.14),_<3&&(n.beginPath(),n.moveTo(m+h*.09,g),n.lineTo(m+r*.22-h*.09,u+Math.sin((_+1)*1.2)*s*.06),n.stroke())}),n.globalAlpha=.9,n.lineWidth=h*.02,n.beginPath(),n.arc(c+r*.1,i+s*1.25,s*.85,Math.PI*1.15,Math.PI*1.85),n.stroke();break}case"hand":{const f=[c,u+s*.3],p=[[-.32,-.05],[-.16,-.38],[0,-.44],[.15,-.4],[.3,-.24]];n.beginPath(),n.arc(f[0],f[1],h*.03,0,Math.PI*2),n.fill(),p.forEach(([_,m])=>{let g=f[0],M=f[1];for(let w=1;w<=4;w++){const S=f[0]+_*h*(w/4)*1.1,y=f[1]+m*h*(w/4)*1.1;n.beginPath(),n.moveTo(g,M),n.lineTo(S,y),n.stroke(),n.beginPath(),n.arc(S,y,h*.018,0,Math.PI*2),n.fill(),g=S,M=y}});break}case"cluster":{const f=[[.5,.25],[.25,.65],[.75,.65]];n.globalAlpha=.6,f.forEach((p,_)=>{const m=f[(_+1)%3];n.beginPath(),n.moveTo(t+r*p[0],i+s*p[1]),n.lineTo(t+r*m[0],i+s*m[1]),n.stroke()}),n.globalAlpha=1,f.forEach(([p,_])=>{for(let m=0;m<3;m++)oi(n,t+r*p-h*.09,i+s*_-h*.08+m*h*.055,h*.18,h*.04,6);n.fill()});break}case"phones":{oi(n,c-r*.3,u-s*.25,r*.36,s*.5,14),n.stroke(),oi(n,c+r*.1,u-s*.3,r*.16,s*.56,18),n.stroke(),n.globalAlpha=.6,n.beginPath(),n.moveTo(c+r*.06,u),n.lineTo(c+r*.1,u),n.stroke(),n.fillRect(c-r*.26,u-s*.15,r*.2,s*.04),n.fillRect(c+r*.13,u-s*.18,r*.1,s*.04);break}case"map":{n.beginPath(),n.arc(c,u-s*.08,h*.12,Math.PI,0),n.lineTo(c,u+s*.25),n.closePath(),n.stroke(),n.beginPath(),n.arc(c,u-s*.08,h*.045,0,Math.PI*2),n.fill(),n.globalAlpha=.5;for(let f=0;f<10;f++)n.beginPath(),n.arc(t+r*(.1+l()*.8),i+s*(.15+l()*.7),h*.015,0,Math.PI*2),n.fill();break}case"bingo":{const p=h*.6;for(let _=0;_<4;_++)for(let m=0;m<4;m++){const g=_===m;n.globalAlpha=g?1:.35,oi(n,c-p/2+_*p/4+4,u-p/2+m*p/4+4,p/4-8,p/4-8,8),g?n.fill():n.stroke()}break}case"cv":{oi(n,c-h*.22,u-h*.3,h*.44,h*.6,10),n.stroke(),n.globalAlpha=.6;for(let f=0;f<6;f++)n.fillRect(c-h*.15,u-h*.2+f*h*.07,h*(f%2?.2:.3),h*.025);n.globalAlpha=1,n.font=`800 ${h*.08}px ${Rt}`,n.textAlign="center",n.fillText("PDF",c+h*.18,u+h*.32);break}case"slot":{n.setLineDash([h*.03,h*.03]),oi(n,c-h*.3,u-h*.25,h*.6,h*.5,20),n.globalAlpha=.7,n.stroke(),n.setLineDash([]),n.globalAlpha=1,n.font=`300 ${h*.25}px ${Rt}`,n.textAlign="center",n.textBaseline="middle",n.fillText("+",c,u);break}}n.restore()}function En(n="rgba(255,255,255,1)",e="rgba(255,255,255,0)"){const[t,i]=hn(128,128),r=i.createRadialGradient(64,64,0,64,64,64);return r.addColorStop(0,n),r.addColorStop(.25,n.replace(/[\d.]+\)$/,"0.5)")),r.addColorStop(1,e),i.fillStyle=r,i.fillRect(0,0,128,128),dn(t)}function Yy(){const[e,t]=hn(2048,2048),i=2048/2;t.strokeStyle="rgba(255,190,120,0.55)",t.lineWidth=6,t.beginPath(),t.arc(i,i,2048*.47,0,Math.PI*2),t.stroke(),t.lineWidth=3,t.beginPath(),t.arc(i,i,2048*.4,0,Math.PI*2),t.stroke();for(let r=0;r<120;r++){const s=r/120*Math.PI*2,a=r%10===0,o=2048*.4,l=2048*(a?.47:.44);t.lineWidth=a?6:2,t.beginPath(),t.moveTo(i+Math.cos(s)*o,i+Math.sin(s)*o),t.lineTo(i+Math.cos(s)*l,i+Math.sin(s)*l),t.stroke()}return t.globalAlpha=.25,t.beginPath(),t.arc(i,i,2048*.2,0,Math.PI*2),t.stroke(),dn(e)}function Lp(){const[e,t]=hn(1024,1024),i=1024/2;[.18,.28,.38,.47].forEach((s,a)=>{t.strokeStyle=`rgba(255,${170+a*15},${100+a*20},${.9-a*.18})`,t.lineWidth=a===0?10:4,t.beginPath(),t.arc(i,i,1024*s,0,Math.PI*2),t.stroke()});const r=t.createRadialGradient(i,i,0,i,i,1024*.5);return r.addColorStop(0,"rgba(255,170,90,0.45)"),r.addColorStop(.4,"rgba(255,120,40,0.12)"),r.addColorStop(1,"rgba(255,120,40,0)"),t.fillStyle=r,t.fillRect(0,0,1024,1024),dn(e)}function an(n,e){const t=n.replace("#",""),i=parseInt(t.length===3?t.split("").map(r=>r+r).join(""):t,16);return`rgba(${i>>16&255},${i>>8&255},${i&255},${e})`}const $y=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Ky=`
  uniform sampler2D uMap;
  uniform vec3 uRim;
  uniform float uMode;
  uniform float uOpacity;
  uniform float uRimStrength;
  uniform float uFade;
  uniform float uBright;
  uniform vec2 uTexel;
  varying vec2 vUv;

  float a(vec2 o) { return texture2D(uMap, vUv + o * uTexel).a; }

  void main() {
    vec4 tex = texture2D(uMap, vUv);
    if (tex.a < 0.01) discard;

    // inner edge band, biased toward the top (light from behind/above)
    float r = 3.5;
    float around = 0.0;
    around += a(vec2( r, 0.0)) + a(vec2(-r, 0.0)) + a(vec2(0.0,  r)) + a(vec2(0.0, -r));
    around += a(vec2( r,  r) * 0.7) + a(vec2(-r,  r) * 0.7) + a(vec2( r, -r) * 0.7) + a(vec2(-r, -r) * 0.7);
    around += a(vec2(0.0, r * 2.0)) + a(vec2(r * 1.6, r * 1.2)) + a(vec2(-r * 1.6, r * 1.2));
    float edge = clamp(tex.a - around / 11.0, 0.0, 1.0) * 2.2;
    float topBias = smoothstep(0.35, 0.95, vUv.y);
    float rim = edge * mix(0.08, 1.0, topBias) * uRimStrength;

    float lum = dot(tex.rgb, vec3(0.299, 0.587, 0.114));
    vec3 col;
    if (uMode < 0.5) {
      col = tex.rgb * uBright + uRim * rim;
    } else if (uMode < 1.5) {
      col = vec3(0.002) + tex.rgb * 0.003 + uRim * rim * 1.6;
    } else {
      float l = pow(lum * 1.35, 0.85);
      vec3 dark = vec3(0.07, 0.0, 0.0);
      vec3 mid = vec3(0.85, 0.08, 0.04);
      vec3 hi = vec3(1.0, 0.78, 0.6);
      col = mix(dark, mid, smoothstep(0.0, 0.45, l));
      col = mix(col, hi, smoothstep(0.45, 1.0, l));
      col += uRim * rim * 0.6;
    }

    float fade = smoothstep(0.0, uFade, vUv.y);
    gl_FragColor = vec4(col, tex.a * uOpacity * fade);
  }
`;let Dp;function Jy(n){return new Promise((e,t)=>{new Sf().load(n,i=>{i.colorSpace=$t,i.anisotropy=4,Dp=i,e(i)},void 0,t)})}function pa({height:n=6,mode:e=0,rim:t="#ff4a2a",rimStrength:i=1,fade:r=.12,bright:s=1}={}){const a=Dp,o=a.image.width/a.image.height,l=new Et({vertexShader:$y,fragmentShader:Ky,transparent:!0,depthWrite:!1,uniforms:{uMap:{value:a},uRim:{value:new Le(t)},uMode:{value:e},uOpacity:{value:1},uRimStrength:{value:i},uFade:{value:r},uBright:{value:s},uTexel:{value:new fe(1/a.image.width,1/a.image.height)}}}),c=new Xe(new It(n*o,n),l);return c.geometry.translate(0,n/2,0),c}let Cl;function Zy(){return Cl||(Cl=En("rgba(255,255,255,1)")),Cl}function ms({count:n=300,spread:e=[16,10,10],color:t="#ffb070",size:i=.08,speed:r=.15}={}){const s=new ti,a=new Float32Array(n*3),o=new Float32Array(n);for(let u=0;u<n;u++)a[u*3]=(Math.random()-.5)*e[0],a[u*3+1]=(Math.random()-.5)*e[1],a[u*3+2]=(Math.random()-.5)*e[2],o[u]=Math.random();s.setAttribute("position",new Ai(a,3)),s.setAttribute("seed",new Ai(o,1));const l=new Et({transparent:!0,depthWrite:!1,blending:Kt,fog:!1,uniforms:{uMap:{value:Zy()},uColor:{value:new Le(t)},uSize:{value:i},uTime:{value:0},uHeight:{value:e[1]},uSpeed:{value:r},uOpacity:{value:1},uPx:{value:Math.min(window.devicePixelRatio,2)}},vertexShader:`
      attribute float seed;
      uniform float uSize, uTime, uHeight, uSpeed, uPx;
      varying float vA;
      void main() {
        vec3 p = position;
        p.y = mod(p.y + uTime * uSpeed * (0.4 + seed) + uHeight * 0.5, uHeight) - uHeight * 0.5;
        p.x += sin(uTime * 0.3 + seed * 20.0) * 0.3;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        float s = uSize * (0.4 + seed * seed * 2.6);
        gl_PointSize = s * uPx * 600.0 / -mv.z;
        vA = (0.35 + 0.65 * fract(seed * 7.13)) * (0.6 + 0.4 * sin(uTime * (0.5 + seed) + seed * 30.0));
      }
    `,fragmentShader:`
      uniform sampler2D uMap;
      uniform vec3 uColor;
      uniform float uOpacity;
      varying float vA;
      void main() {
        vec4 t = texture2D(uMap, gl_PointCoord);
        gl_FragColor = vec4(uColor * t.rgb, t.a * vA * uOpacity);
      }
    `}),c=new v0(s,l);return c.frustumCulled=!1,c.userData.tick=u=>{l.uniforms.uTime.value=u},c}function Hc(n,{radius:e=.035,color:t="#ff8a2a",core:i="#fff1d6",base:r=.12,length:s=.25,segments:a=600}={}){const o=new _u(n,a,e,8,!1),l=new Et({transparent:!0,depthWrite:!1,blending:Kt,fog:!1,uniforms:{uHead:{value:0},uLen:{value:s},uBase:{value:r},uDraw:{value:1},uColor:{value:new Le(t)},uCore:{value:new Le(i)},uIntensity:{value:1}},vertexShader:`
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
    `,fragmentShader:`
      uniform float uHead, uLen, uBase, uDraw, uIntensity;
      uniform vec3 uColor, uCore;
      varying vec2 vUv;
      void main() {
        float u = vUv.x;
        if (u > uDraw) discard;
        float d = uHead - u;
        if (d < 0.0) d += 1.0;
        float tail = d < uLen ? pow(1.0 - d / uLen, 2.2) : 0.0;
        float a = uBase + tail * 1.6;
        vec3 col = mix(uColor, uCore, clamp(tail * tail, 0.0, 1.0));
        gl_FragColor = vec4(col * a * uIntensity * 1.6, clamp(a, 0.0, 1.0));
      }
    `}),c=new Xe(o,l);return c.frustumCulled=!1,c}function Gu(n,e,t=.6){const i=new Xe(new It(n,n),new Qt({map:En(Qy(e)),transparent:!0,opacity:t,depthWrite:!1,blending:Kt,fog:!1}));return i.rotation.x=-Math.PI/2,i}function Qy(n){const e=new Le(n);return`rgba(${Math.round(e.r*255)},${Math.round(e.g*255)},${Math.round(e.b*255)},1)`}function Rl(n,e){return 2*e*Math.tan(bi.degToRad(n.fov/2))}const jy=`
  uniform sampler2D uMap;
  uniform float uReveal;
  uniform float uOpacity;
  uniform vec3 uRed;
  varying vec2 vUv;
  void main() {
    vec4 tex = texture2D(uMap, vUv);
    // a red block behind the subject grows into the full name
    vec2 half_ = mix(vec2(0.07, 0.28), vec2(0.62, 0.7), smoothstep(0.0, 1.0, uReveal));
    vec2 d = abs(vUv - vec2(0.5, 0.48)) - half_;
    float inside = 1.0 - smoothstep(0.0, 0.015, max(d.x, d.y));
    float block = inside * (1.0 - smoothstep(0.25, 0.75, uReveal)) * 0.85;
    float letters = tex.a * inside * smoothstep(0.15, 0.55, uReveal);
    vec3 col = mix(uRed * 0.55, tex.rgb, letters);
    float alpha = max(block * (1.0 - letters), letters);
    gl_FragColor = vec4(col, alpha * uOpacity);
  }
`,eb=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`;function tb(n){const e=new yr;e.background=new Le("#09090a");const t=new Bt(35,1,.1,100);t.position.set(0,0,10);const i=-3.5,r=Pp(n.t.hero.name),s=new Et({vertexShader:eb,fragmentShader:jy,transparent:!0,depthWrite:!1,uniforms:{uMap:{value:r},uReveal:{value:0},uOpacity:{value:1},uRed:{value:new Le("#d81f14")}}}),a=new Xe(new It(1,1500/4096),s);a.position.z=i,e.add(a);const o=new Zr(new hr({map:En("rgba(255,60,30,1)"),color:"#ff3a1f",transparent:!0,opacity:0,blending:Kt,fog:!1,depthWrite:!1}));o.position.set(0,.3,-2),e.add(o);const l=pa({height:6,mode:0,rim:"#ff3b1f",rimStrength:1.3,fade:.14,bright:1.08});l.material.uniforms.uOpacity.value=0,e.add(l);const c=new Xe(new It(40,6),new Qt({map:En("rgba(120,20,10,1)"),transparent:!0,opacity:.45,depthWrite:!1,blending:Kt,fog:!1}));c.position.set(0,-4,-4),e.add(c);const u=ms({count:n.isMobile?160:320,spread:[16,10,8],color:"#ff9a7a",size:.06});u.position.z=-1,e.add(u);const h={intro:0,visH:1,visW:1,baseY:0};function d(g,M){t.aspect=g/M,t.updateProjectionMatrix();const S=2*(t.position.z-i)*Math.tan(bi.degToRad(t.fov/2)),y=S*t.aspect,E=y*(t.aspect<1?1:.94);a.scale.set(E,E,1),a.position.y=t.aspect<1?S*.1:-S*.06;const v=2*t.position.z*Math.tan(bi.degToRad(t.fov/2)),T=v*(t.aspect<1?.42:.62);l.scale.setScalar(T/6),l.position.y=-v/2-v*.02,h.baseY=l.position.y,o.scale.set(T*1.4,T*1.4,1),h.visH=S,h.visW=y}const f=new P,p=new P;function _(g,M){const w=a.scale.x/2,S=a.scale.y*1500/4096/2;f.set(a.position.x-w,a.position.y+S*.75,a.position.z).project(t),p.set(a.position.x+w,a.position.y-S*.9,a.position.z).project(t),n.setHeroAnchors({left:(f.x+1)/2*g,top:(1-f.y)/2*M,right:(p.x+1)/2*g,bottom:(1-p.y)/2*M})}let m=0;return{scene:e,camera:t,bloom:{strength:.55,radius:.6,threshold:.55},state:h,pickables:[l],onClick(g){g===l&&n.portraitEgg()},resize(g,M){d(g,M),_(g,M)},update({p:g,t:M,pointer:w,w:S,h:y}){const E=h.intro;l.material.uniforms.uOpacity.value=Math.min(1,E*3.5),s.uniforms.uReveal.value=bi.clamp((E-.25)/.75,0,1),o.material.opacity=.18*Math.min(1,E*2)+.05*Math.sin(M*1.3);const A=bi.smoothstep(g,0,1);t.position.x+=(w.x*.35-t.position.x)*.06,t.position.y+=(w.y*.18-t.position.y)*.06,t.position.z=10-A*1.6,t.lookAt(0,0,i),a.position.y+=((t.aspect<1?h.visH*.1:-h.visH*.06)+A*h.visH*.12-a.position.y)*.2,s.uniforms.uOpacity.value=1-bi.smoothstep(g,.45,.9)*.7,l.position.y=h.baseY-A*.4,u.rotation.y=M*.02,u.userData.tick(M),++m%6===0&&_(S,y)}}}const Ds=new P;function Ii(n,e,t,i,r,s){const a=2*Math.PI*r/4,o=Math.max(s-2*r,0),l=Math.PI/4;Ds.copy(e),Ds[i]=0,Ds.normalize();const c=.5*a/(a+o),u=1-Ds.angleTo(n)/l;return Math.sign(Ds[t])===1?u*c:o/(a+o)+c+c*(1-u)}class To extends Qn{constructor(e=1,t=1,i=1,r=2,s=.1){const a=r*2+1;if(s=Math.min(e/2,t/2,i/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:r,radius:s},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new P,c=new P,u=new P(e,t,i).divideScalar(2).subScalar(s),h=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=h.length/6,_=new P,m=.5/a;for(let g=0,M=0;g<h.length;g+=3,M+=2)switch(l.fromArray(h,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),h[g+0]=u.x*Math.sign(l.x)+c.x*s,h[g+1]=u.y*Math.sign(l.y)+c.y*s,h[g+2]=u.z*Math.sign(l.z)+c.z*s,d[g+0]=c.x,d[g+1]=c.y,d[g+2]=c.z,Math.floor(g/p)){case 0:_.set(1,0,0),f[M+0]=Ii(_,c,"z","y",s,i),f[M+1]=1-Ii(_,c,"y","z",s,t);break;case 1:_.set(-1,0,0),f[M+0]=1-Ii(_,c,"z","y",s,i),f[M+1]=1-Ii(_,c,"y","z",s,t);break;case 2:_.set(0,1,0),f[M+0]=1-Ii(_,c,"x","z",s,e),f[M+1]=Ii(_,c,"z","x",s,i);break;case 3:_.set(0,-1,0),f[M+0]=1-Ii(_,c,"x","z",s,e),f[M+1]=1-Ii(_,c,"z","x",s,i);break;case 4:_.set(0,0,1),f[M+0]=1-Ii(_,c,"x","y",s,e),f[M+1]=1-Ii(_,c,"y","x",s,t);break;case 5:_.set(0,0,-1),f[M+0]=Ii(_,c,"x","y",s,e),f[M+1]=1-Ii(_,c,"y","x",s,t);break}}static fromJSON(e){return new To(e.width,e.height,e.depth,e.segments,e.radius)}}class ib extends yr{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new Qn;e.deleteAttribute("uv");const t=new Mc({side:li}),i=new Mc,r=new Su(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new Xe(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new df(e,i,6),o=new Lt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const l=new Xe(e,Kr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new Xe(e,Kr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const u=new Xe(e,Kr(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);const h=new Xe(e,Kr(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);const d=new Xe(e,Kr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const f=new Xe(e,Kr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Kr(n){return new z0({color:0,emissive:16777215,emissiveIntensity:n})}const nb=[[-5.6,1.6,-1.2,.25],[4.9,3,-2.6,-.3],[5.3,-1.3,-.4,-.35]],zd=[[-3.2,.2,.8,1],[-2.6,2.9,-2,.85],[2.8,1.3,.6,1],[3,-1.6,1.8,.9],[-4,-1.9,1.6,.95],[-7.4,-.6,-2.5,.9],[7.8,1.6,-3.4,.85],[1.6,3.9,-3.2,.8],[-1.4,4.4,-4.2,.75],[-6.2,3.9,-4,.8],[8,-2.6,-1.4,.85],[-8.6,2.1,-5,.8],[5.2,4.8,-5.2,.75]];function rb(n){const e=new yr;e.background=new Le("#070606"),e.fog=new da("#070606",14,30);const t=new Bt(42,1,.1,100);t.position.set(0,.8,13.5);const i=new bc(n.renderer);e.environment=i.fromScene(new ib,.04).texture,e.add(new $0("#ffffff",.25));const r=new Su("#ff8a3a",40,18,1.6);r.position.set(0,0,3),e.add(r);const s=new Y0("#ffd2a8",1.2);s.position.set(-3,6,-6),e.add(s);const a=new rn;e.add(a);const o=pa({height:3.9,mode:1,rim:"#ffb066",rimStrength:1.6,fade:.3});o.position.set(0,-3.6,.4),a.add(o);const l=Gu(14,"#ff6a1a",.55);l.position.set(0,-3.6,.4),a.add(l);const c=[],u=[],h=new Mc({color:"#141212",roughness:.32,metalness:.7,envMapIntensity:.6}),d=Fd.filter(A=>A.big),f=Fd.filter(A=>!A.big),p=n.isMobile?Math.min(9,f.length):f.length;d.forEach((A,v)=>{const[T,R,I,N]=nb[v],L=new rn,D=new Xe(new To(2.3,2.75,.2,4,.14),h),U=new Xe(new It(2.3,2.73),new Qt({map:Gy(A,n.lang),transparent:!0,toneMapped:!1}));U.position.z=.105,L.add(D,U),L.position.set(T,R,I),L.rotation.set(.05,N,-.04),L.userData={tool:A,base:L.position.clone(),rot:L.rotation.clone(),phase:v*1.7,hover:0},U.userData.owner=L,D.userData.owner=L,a.add(L),c.push(L),u.push(U,D)}),f.slice(0,p).forEach((A,v)=>{const[T,R,I,N]=zd[v%zd.length],L=new rn,D=new Xe(new To(1,1,1,4,.14),h),U=new Xe(new It(.98,.98),new Qt({map:Hy(A,n.lang),transparent:!0,toneMapped:!1}));U.position.z=.505,L.add(D,U),L.scale.setScalar(N),L.position.set(T,R,I),L.rotation.set((Math.random()-.5)*.4,-T*.04+(Math.random()-.5)*.3,(Math.random()-.5)*.3),L.userData={tool:A,base:L.position.clone(),rot:L.rotation.clone(),phase:v*.9,hover:0,scale:N},U.userData.owner=L,D.userData.owner=L,a.add(L),c.push(L),u.push(U,D)});const _=new gu([new P(-11,-3.2,2),new P(-6,-2.6,2.6),new P(-1.5,-1.8,3.2),new P(2.6,-.9,2.2),new P(3.8,1.2,.2),new P(2.4,3.1,-1.6),new P(-.6,3.4,-2.2),new P(-2.8,1.8,-1),new P(-2.4,-.2,1.2),new P(.6,-1.4,3.4),new P(5.5,-2.4,3.4),new P(12,-3.1,1.5)],!1,"catmullrom",.5),m=Hc(_,{radius:.05,base:.32,length:.38});m.material.uniforms.uIntensity.value=1.35,a.add(m);const g=Hc(_,{radius:.016,color:"#ffcf8a",base:.5,length:.14});g.material.uniforms.uIntensity.value=1.6,g.position.set(.15,.12,-.1),a.add(g);const M=new Zr(new hr({map:En("rgba(255,210,150,1)"),blending:Kt,fog:!1,depthWrite:!1,transparent:!0}));M.scale.set(1.1,1.1,1),a.add(M);const w=ms({count:n.isMobile?220:520,spread:[26,14,14],color:"#ffb36b",size:.07,speed:.12});e.add(w);const S=ms({count:n.isMobile?60:140,spread:[10,8,6],color:"#ffe0b0",size:.14,speed:.25});S.position.set(-4,-2,2),e.add(S);let y=null;const E=new P;return{scene:e,camera:t,bloom:{strength:.95,radius:.55,threshold:.35},pickables:u,onHover(A,v,T){const R=A?A.userData.owner:null;if(R===y){R&&n.tooltip(R.userData.tool,v,T);return}y=R,n.tooltip(R?R.userData.tool:null,v,T)},resize(A,v){t.aspect=A/v,t.fov=t.aspect<1?62:42,t.updateProjectionMatrix()},update({p:A,t:v,pointer:T}){const R=bi.smoothstep(A,0,1);a.rotation.y=(R-.5)*.55+T.x*.05,t.position.x+=(T.x*.6-t.position.x)*.05,t.position.y+=(.8+T.y*.35-t.position.y)*.05,t.position.z=14.5-R*3,t.lookAt(0,.6,0),c.forEach(N=>{const L=N.userData;L.hover+=((N===y?1:0)-L.hover)*.12,N.position.set(L.base.x,L.base.y+Math.sin(v*.6+L.phase)*.18,L.base.z+L.hover*.8),N.rotation.set(L.rot.x+Math.sin(v*.4+L.phase)*.06,L.rot.y+Math.cos(v*.3+L.phase)*.08-L.hover*L.rot.y*.8,L.rot.z);const D=(L.scale||1)*(1+L.hover*.18);N.scale.setScalar(D)});const I=(v*.07+A*.5)%1;m.material.uniforms.uHead.value=I,g.material.uniforms.uHead.value=(I+.02)%1,_.getPointAt(I,E),M.position.copy(E),r.position.lerp(E,.1),w.userData.tick(v),S.userData.tick(v)}}}const Pl=n=>Math.min(1,Math.max(0,n)),Ll=.14;function sb(n){const e=n.t.journey.years,t=new yr;t.background=new Le("#0b0806"),t.fog=new da("#0b0806",12,26);const i=new Bt(40,1,.1,100);i.position.set(0,.4,12);const r=new rn;t.add(r);const s=new gu([new P(-8.6,4.4,-8),new P(-6,3.5,-5.8),new P(-3.5,2.8,-4),new P(-1,2.35,-2.6),new P(1.4,2.2,-1.5),new P(3.6,2.35,-.6)]),a=Hc(s,{radius:.045,color:"#ffb547",core:"#fff3cf",base:.85,length:.12,segments:400});r.add(a);const o=90,l=new Qn(.018,.16,.018),c=new Qt({color:"#ffc566",transparent:!0,toneMapped:!1}),u=new df(l,c,o),h=new je,d=new P;for(let N=0;N<o;N++){s.getPointAt(N/(o-1),d);const L=N%9===0;h.makeScale(1,L?2:1,1).setPosition(d.x,d.y-(L?.2:.12),d.z),u.setMatrixAt(N,h)}r.add(u);const f=new Xe(new It(13,13),new Qt({map:Yy(),transparent:!0,opacity:.5,depthWrite:!1,blending:Kt,fog:!1})),p=new P(3.6,5.6,-7.5);f.position.copy(p),f.rotation.set(-.35,-.25,0),r.add(f);const _=new ti().setFromPoints([p.clone(),p.clone()]),m=new g0(_,new ff({color:"#ffe1b0",transparent:!0,opacity:.85}));r.add(m);const g=new Zr(new hr({map:En("rgba(255,240,210,1)"),blending:Kt,fog:!1,depthWrite:!1}));g.position.copy(p),g.scale.set(.6,.6,1),r.add(g);const M=new Zr(new hr({map:En("rgba(255,200,120,1)"),blending:Kt,fog:!1,depthWrite:!1,transparent:!0}));M.scale.set(1.5,1.5,1),r.add(M);const w=new Su("#ffae55",0,10);r.add(w);const S=e.map((N,L)=>{const D=L/(e.length-1),U=s.getPointAt(D),q=new Zr(new hr({map:Vy(N.year),transparent:!0,depthWrite:!1,toneMapped:!1}));q.scale.set(1.3,.51,1),q.position.set(U.x,U.y+.55,U.z),r.add(q);const z=new Xe(new It(1.6,2.05),new Qt({map:Xy(N,L),transparent:!0,toneMapped:!1})),Q=new P(U.x+.25,U.y-1.6,U.z+.05);z.position.copy(Q),r.add(z);const X=new Zr(new hr({map:En("rgba(255,150,60,1)"),blending:Kt,fog:!1,depthWrite:!1,transparent:!0,opacity:0}));return X.scale.set(3,3.6,1),X.position.copy(Q).add(new P(0,0,-.1)),r.add(X),{s:D,label:q,card:z,halo:X,base:Q,active:0}}),y=pa({height:2.1,mode:1,rim:"#ffbf70",rimStrength:1.5,fade:.3});y.position.set(-.6,-3.4,2.2),r.add(y);const E=new Xe(new It(6,6),new Qt({map:Lp(),transparent:!0,depthWrite:!1,blending:Kt,fog:!1,opacity:.9}));E.rotation.x=-Math.PI/2,E.position.set(-.6,-3.39,2.4),r.add(E);const A=Gu(22,"#a2400f",.5);A.position.set(0,-3.42,-1),r.add(A);const v=ms({count:n.isMobile?120:260,spread:[22,12,14],color:"#ffc27a",size:.05,speed:.08});t.add(v);let T=0,R=-1;const I=new P;return{scene:t,camera:i,bloom:{strength:.8,radius:.5,threshold:.42},resize(N,L){i.aspect=N/L,i.fov=i.aspect<1?64:40,i.updateProjectionMatrix()},update({p:N,t:L,pointer:D}){const U=Pl(N/Ll),q=Pl((N-Ll)/(.97-Ll)),z=Math.min(e.length-1,Math.floor(q*e.length));z!==R&&(R=z,n.onYear(z)),n.setJourneyProgress(U<1?0:1),a.material.uniforms.uDraw.value=U;const Q=U<1?U:z/(e.length-1);T+=(Q-T)*(U<1?1:.07),a.material.uniforms.uHead.value=T,c.opacity=U,u.count=Math.round(U*o),s.getPointAt(Math.min(T,1),I),M.position.copy(I),M.material.opacity=U>.02?1:0,w.position.copy(I).add(new P(0,-.8,1)),w.intensity=U*12;const X=_.attributes.position;X.setXYZ(1,I.x,I.y,I.z),X.needsUpdate=!0,m.material.opacity=.85*U,f.rotation.z=L*.02,f.material.opacity=.45*U,S.forEach((ne,Se)=>{const Be=Pl((U-ne.s+.17)*6);ne.active+=((Se===z&&U>=1?1:0)-ne.active)*.1,ne.label.material.opacity=Be*(.5+ne.active*.3);const Ue=1+ne.active*.32;ne.card.scale.setScalar(Ue),ne.card.position.set(ne.base.x,ne.base.y+(1-Be)*1.5-ne.active*.25+Math.sin(L*.8+Se)*.03,ne.base.z+ne.active*.8),ne.card.material.opacity=Be;const $e=.5+ne.active*.62;ne.card.material.color.setRGB($e,$e*.97,$e*.92),ne.card.lookAt(i.position.x,ne.card.position.y,i.position.z),ne.halo.position.set(ne.card.position.x,ne.card.position.y,ne.card.position.z-.1),ne.halo.material.opacity=ne.active*.35});const Z=S[z].base,ee=U<1?0:Z.x*.35;i.position.x+=(ee+D.x*.5-i.position.x)*.04,i.position.y+=(.4+D.y*.3-i.position.y)*.04,i.position.z+=(12-q*1.2-i.position.z)*.05,i.lookAt(ee*.8,.9,-2),E.rotation.z=L*.1,v.userData.tick(L)}}}const Gc=7.6,Ka=new P(0,0,3),Dl=-2,ab={origo:[0,2.6,3.6],hand:[-.48,2.4,3],job:[.48,2.4,3],appl:[-.54,.35,2.2],ecam:[-.285,.35,1.2],systech:[-.095,.35,1.2],bingo:[.095,.35,1.2],cv:[.285,.35,1.2],nawat:[.54,.35,2.2],talab:[0,-1.55,2.2]};function ob(){const[n,e]=hn(256,256),t=e.createLinearGradient(0,0,256,256);return t.addColorStop(0,"rgba(60,55,60,0.5)"),t.addColorStop(1,"rgba(10,10,12,0.5)"),e.fillStyle=t,e.fillRect(0,0,256,256),e.strokeStyle="rgba(255,255,255,0.15)",e.lineWidth=3,e.strokeRect(2,2,252,252),dn(n)}function Il(n,e,t,i=Gc){n.position.set(Ka.x+Math.sin(e)*i,t,Ka.z-Math.cos(e)*i),n.lookAt(Ka.x,t,Ka.z)}function lb(n){const e=new yr;e.background=new Le("#050506"),e.fog=new da("#050506",10,24);const t=new Bt(50,1,.1,100);t.position.set(0,.5,8.2);const i=new rn;e.add(i);const r=n.t.cards.map((f,p)=>{const[_,m,g]=ab[f.id],M=qy(f),w=g*M.image.height/M.image.width,S=new rn,y=new Xe(new It(g,w),new Qt({map:M,transparent:!0,toneMapped:!1})),E=new Xe(new It(g*1.5,w*1.6),new Qt({map:En("rgba(255,255,255,1)"),color:f.accent,transparent:!0,opacity:.12,blending:Kt,fog:!1,depthWrite:!1}));return E.position.z=-.05,S.add(E,y),Il(S,_,m),y.userData.owner=S,S.userData={data:f,angle:_,y:m,glow:E,mesh:y,hover:0,phase:p*.7,delay:Math.abs(_)*.25+(m>1?0:.06)},i.add(S),S}),s=ob(),a=[];[[-.95,2.4,2.4,1.6],[.95,2.4,2.4,1.6],[-.92,-.2,1.8,2.2],[.92,-.2,1.8,2.2],[-.8,-2.2,2.2,1.4],[.8,-2.2,2.2,1.4],[-.27,4.6,2.6,1.1],[.27,4.6,2.6,1.1]].forEach(([f,p,_,m])=>{const g=new Xe(new It(_,m),new Qt({map:s,transparent:!0,opacity:.5,depthWrite:!1}));Il(g,f,p,Gc+.4),i.add(g),a.push(g)});const o=pa({height:1.45,mode:1,rim:"#ffd2a0",rimStrength:1.7,fade:.3});o.position.set(0,Dl,-1.2),i.add(o);const l=new Xe(new It(4.2,4.2),new Qt({map:Lp(),transparent:!0,depthWrite:!1,blending:Kt,fog:!1}));l.rotation.x=-Math.PI/2,l.position.set(0,Dl+.01,-1.1),i.add(l);const c=Gu(22,"#3a2a40",.6);c.position.set(0,Dl-.02,-1),i.add(c);const u=ms({count:n.isMobile?100:220,spread:[20,12,14],color:"#ffd9b0",size:.045,speed:.06});e.add(u);let h=null;const d=r.map(f=>f.userData.mesh);return{scene:e,camera:t,bloom:{strength:.75,radius:.45,threshold:.5},pickables:d,onHover(f){h=f?f.userData.owner:null,n.setCursor(!!h)},onClick(f){const p=f.userData.owner;p&&n.openCard(p.userData.data)},resize(f,p){t.aspect=f/p,t.fov=t.aspect<1?88:54,t.updateProjectionMatrix()},update({p:f,t:p,pointer:_}){const m=bi.clamp(f/.18,0,1),g=bi.smoothstep(f,0,1),M=(g-.5)*(t.aspect<1?1.1:.32)+_.x*.12;t.position.x=Math.sin(M)*1,t.position.z=4.9-g*.8,t.position.y+=(.6+_.y*.25-t.position.y)*.05,t.lookAt(Math.sin(M)*4,.55,-3),r.forEach(w=>{const S=w.userData;S.hover+=((w===h?1:0)-S.hover)*.15;const y=bi.smoothstep(m,S.delay,S.delay+.55),E=Gc+(1-y)*6-S.hover*.7;Il(w,S.angle,S.y+Math.sin(p*.7+S.phase)*.05,E),S.mesh.material.opacity=y;const A=.86+S.hover*.4;S.mesh.material.color.setRGB(A,A,A),S.glow.material.opacity=(.1+S.hover*.35)*y}),a.forEach(w=>{w.material.opacity=.35*m}),l.rotation.z=-p*.12,u.userData.tick(p)}}}const cb=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`,ub=`
  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float vnoise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
  }
  float fbm(vec2 p) {
    float v = 0.0, a = 0.5;
    for (int i = 0; i < 5; i++) { v += a * vnoise(p); p *= 2.03; a *= 0.5; }
    return v;
  }
`,hb=`
  uniform sampler2D uMap;
  uniform float uAspect;
  uniform float uTime;
  varying vec2 vUv;
  ${ub}
  void main() {
    vec2 uv = vUv;
    uv.x = (uv.x - 0.5) * uAspect * 0.56 + 0.5;
    vec3 c = vec3(0.0);
    for (int i = 0; i < 9; i++) {
      vec2 o = vec2(float(i - 4) * 0.004, 0.0);
      c += texture2D(uMap, uv + o).rgb;
    }
    c /= 9.0;
    float l = dot(c, vec3(0.3, 0.59, 0.11));
    vec3 col = mix(vec3(0.012, 0.0, 0.0), vec3(0.32, 0.015, 0.008), smoothstep(0.0, 0.5, l));
    col = mix(col, vec3(0.8, 0.25, 0.12), smoothstep(0.6, 1.0, l));
    float s = fbm(vUv * 3.0 + vec2(uTime * 0.03, -uTime * 0.05));
    col += vec3(0.06, 0.004, 0.0) * s;
    // darker right column like the reel's poster layout
    col *= mix(1.0, 0.15, smoothstep(0.6, 0.88, vUv.x));
    col *= (0.35 + 0.65 * smoothstep(0.0, 0.6, vUv.y)) * 0.7;
    gl_FragColor = vec4(col, 1.0);
  }
`;function db(n){const e=new yr;e.background=new Le("#000");const t=new Bt(30,1,.1,100);t.position.set(0,0,12);const i=n.textures.brussels,r=new Et({vertexShader:cb,fragmentShader:hb,uniforms:{uMap:{value:i},uAspect:{value:1},uTime:{value:0}},depthWrite:!1}),s=new Xe(new It(1,1),r);s.position.z=-6,e.add(s);const a=Pp(n.t.finale.name,{cream:!0,stretch:1.9}),o=new Xe(new It(1,a.image.height/a.image.width),new Qt({map:a,transparent:!0,depthWrite:!1,toneMapped:!1}));o.position.z=-2.5,e.add(o);const l=pa({height:6,mode:2,rim:"#ffb08a",rimStrength:1.1,fade:.1});e.add(l);const c=ms({count:n.isMobile?120:260,spread:[18,10,6],color:"#ff6a2a",size:.06,speed:.4});c.position.z=0,e.add(c);const u={base:0,vis:1};return{scene:e,camera:t,bloom:{strength:.45,radius:.5,threshold:.75},pickables:[l],onClick(h){h===l&&n.portraitEgg()},glitch:0,burnIn:!0,resize(h,d){t.aspect=h/d,t.updateProjectionMatrix();const f=Rl(t,18)*1.08;s.scale.set(f*t.aspect,f,1),r.uniforms.uAspect.value=t.aspect;const p=Rl(t,14.5),_=Math.min(p*t.aspect*(t.aspect<1?.98:.6),p*1.05);o.scale.set(_,_,1),o.position.x=t.aspect<1?0:p*t.aspect*.03,o.position.y=t.aspect<1?p*.12:p*.1;const m=Rl(t,12),g=m*(t.aspect<1?.45:.62);l.scale.setScalar(g/6),u.base=-m/2-m*.02,l.position.set(t.aspect<1?0:o.position.x*.95,u.base,0),u.vis=m},update({p:h,t:d,pointer:f}){r.uniforms.uTime.value=d;const p=bi.smoothstep(h,.3,1);t.position.x+=(f.x*.25-t.position.x)*.05,t.position.y+=(f.y*.12-t.position.y)*.05,t.position.z=12-p*.8,t.lookAt(0,0,-2),l.position.y=u.base-p*.15,c.userData.tick(d)}}}const ft=(n,e=document)=>e.querySelector(n),Ae=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),vn=(n,e="")=>n.map(t=>`<span class="${e}">${Ae(t)}</span>`).join("");let Vc=()=>{},Yt=null;function fb(){document.documentElement.lang=we.htmlLang,document.title=we.meta.title,ft('meta[name="description"]').setAttribute("content",we.meta.description),ft("#loader").innerHTML=`
    <div class="loader__mark">AL<span>.</span></div>
    <div class="loader__bar"><i></i></div>
    <div class="loader__txt"><b id="loaderPct">0</b>% — ${Ae(we.loader)}</div>`,ft("#topbar").innerHTML=`
    <button class="logo" id="logo" aria-label="Abdelbadi Lababidi">
      <span class="logo__name">ABDELBADI</span>
      <span class="logo__roles">${vn(we.logoRoles)}</span>
    </button>
    <nav class="nav" id="nav">${we.nav.map((e,t)=>`<button data-nav="${t}">${Ae(e)}</button>`).join("")}</nav>
    <div class="topbar__right">
      <span class="status"><i></i>${Ae(we.status)}</span>
      <div class="lang" role="group" aria-label="Language">
        <button data-lang="fr" class="${Sr==="fr"?"is-on":""}">FR</button><button data-lang="en" class="${Sr==="en"?"is-on":""}">EN</button>
      </div>
      <a class="cvlink" href="${ji.cv}" download>CV ↓</a>
    </div>`;const n=we.hero;ft("#layers").innerHTML=`
    <section class="layer layer--hero" data-layer="0">
      <div class="hero__welcome"><span>•••</span> ${Ae(n.welcome)} <span>•••</span></div>
      <div class="hero__tag" id="heroTag">• ${Ae(n.tag)}</div>
      <button class="hero__chip" id="heroChip" data-tip="${Ae(n.chipTip)}">• ${Ae(n.chip)} •</button>
      <div class="hero__side">${n.side.map((e,t)=>`<button data-nav="${t+1}"><i>▶</i><span>${Ae(e)}</span></button>`).join("")}</div>
      <div class="hero__rail">${"<i></i>".repeat(5)}</div>
      <div class="hero__bottom">
        <p class="hero__roles"><span id="heroRole">${Ae(n.roles[0])}</span></p>
        <p class="hero__pitch">${Ae(n.pitch)}</p>
      </div>
      <div class="hero__scroll"><span>${Ae(n.scroll)}</span><i></i></div>
      <div class="hero__dots">${"<i></i>".repeat(18)}</div>
      <div class="bubble" id="bubble"></div>
    </section>

    <section class="layer layer--universe" data-layer="1">
      <header class="uni__head">
        <p class="kicker">${Ae(we.universe.kicker)}</p>
        <h2 class="serif">${we.universe.title.map(Ae).join("<br/>")}</h2>
        <p class="uni__sub">${Ae(we.universe.sub)}</p>
      </header>
      <div class="side side--left fadewords">${vn(we.universe.left)}</div>
      <div class="side side--right">${vn(we.universe.right)}<small>${Ae(we.universe.hint)}</small></div>
      <div class="uni__services">${we.universe.services.map(([e,t])=>`<div><h3>${Ae(e)}</h3><p>${Ae(t)}</p></div>`).join("")}</div>
    </section>

    <section class="layer layer--journey" data-layer="2">
      <header class="jr__head"><h2 class="serif">${we.journey.title.map(Ae).join("<br/>")}</h2></header>
      <div class="side side--left jr__list">${vn(we.journey.left)}</div>
      <div class="side side--bottom">${vn(we.journey.bottom)}</div>
      <div class="jr__years">${we.journey.years.map((e,t)=>`<button data-year="${t}">${e.year}</button>`).join("")}</div>
      <article class="jr__panel" id="jrPanel"></article>
      <p class="jr__hint">${Ae(we.journey.hint)}</p>
    </section>

    <section class="layer layer--projects" data-layer="3">
      <header class="pr__head"><p class="kicker kicker--gold">${Ae(we.projects.kicker)}</p></header>
      <div class="side side--left pr__list">${vn(we.projects.left)}</div>
      <div class="side side--bottom">${vn(we.projects.bottom)}</div>
      <div class="side side--right">${vn(we.projects.right)}</div>
      <ul class="pr__a11y">${we.cards.map((e,t)=>`<li><button data-card="${t}">${Ae(e.name)} — ${Ae(e.sub)}</button></li>`).join("")}</ul>
    </section>

    <section class="layer layer--finale" data-layer="4">
      <div class="fin__right">${vn(we.finale.right)}</div>
      <div class="fin__contact">
        <p class="kicker">${Ae(we.finale.contact)}</p>
        <h2 class="serif">${Ae(we.finale.title)}</h2>
        <p class="fin__sub">${Ae(we.finale.sub)}</p>
        <div class="fin__links">
          <button class="fin__mail" id="mail"><small>${Ae(we.finale.email)}</small>${Ae(ji.email)}</button>
          <a href="${ji.phoneHref}"><small>${Ae(we.finale.phone)}</small>${Ae(ji.phone)}</a>
          <a href="${ji.linkedin}" target="_blank" rel="noopener"><small>LinkedIn</small>abdelbadi-lababidi ↗</a>
          <a href="${ji.github}" target="_blank" rel="noopener"><small>GitHub</small>Prota0202 ↗</a>
        </div>
        <a class="btn" href="${ji.cv}" download>${Ae(we.finale.cv)} ↓</a>
        <p class="fin__langs">${Ae(we.finale.langs)}</p>
      </div>
      <footer class="fin__foot"><span>${Ae(we.finale.foot)}</span><button class="fin__egg" id="finEgg">${Ae(we.finale.egg)}</button></footer>
    </section>`,ft("#modal").innerHTML=`<div class="modal__card" role="dialog" aria-modal="true"><button class="modal__close" id="modalClose">${Ae(we.projects.close)} ✕</button><div id="modalBody"></div></div>`,ft("#bingo").innerHTML=`
    <div class="bingo__card">
      <p class="kicker">${Ae(we.bingo.kicker)}</p>
      <h3 class="serif">${Ae(we.bingo.title)}</h3>
      <div class="bingo__grid" id="bingoGrid"></div>
      <p class="bingo__foot">${Ae(we.bingo.foot)}</p>
      <button class="btn btn--ghost" id="bingoClose">${Ae(we.bingo.close)}</button>
    </div>`,pb()}function pb(){document.querySelectorAll("[data-nav]").forEach(t=>t.addEventListener("click",()=>Vc(+t.dataset.nav))),document.querySelectorAll("[data-lang]").forEach(t=>t.addEventListener("click",()=>t.dataset.lang!==Sr&&Fy(t.dataset.lang))),document.querySelectorAll("[data-card]").forEach(t=>t.addEventListener("click",()=>xt.openCard(we.cards[+t.dataset.card]))),document.querySelectorAll("[data-year]").forEach(t=>t.addEventListener("click",()=>{const i=document.querySelector('[data-chapter="2"]'),r=i.offsetHeight-innerHeight,a=(+t.dataset.year+.5)/we.journey.years.length;Yt==null||Yt.scrollTo(i.offsetTop+r*(.14+a*.83),{duration:1.2})}));const n=ft("#modal");ft("#modalClose").addEventListener("click",Ul),n.addEventListener("click",t=>t.target===n&&Ul()),window.addEventListener("keydown",t=>t.key==="Escape"&&!n.hidden&&Ul()),ft("#mail").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(ji.email),xt.toast(we.finale.copied)}catch{location.href=`mailto:${ji.email}`}});let e=0;setInterval(()=>{const t=ft("#heroRole");t&&(e=(e+1)%we.hero.roles.length,Si.to(t,{yPercent:-100,opacity:0,duration:.35,ease:"power2.in",onComplete:()=>{t.textContent=we.hero.roles[e],Si.fromTo(t,{yPercent:100,opacity:0},{yPercent:0,opacity:1,duration:.45,ease:"power3.out"})}}))},2600)}function Ul(){const n=ft("#modal");Si.to(n,{opacity:0,duration:.25,onComplete:()=>{n.hidden=!0}}),Yt==null||Yt.start()}let kd,Hd,mb=0,Gd=-1;const xt={set lenis(n){Yt=n},onNavigate(n){Vc=n},loaderProgress(n){const e=ft("#loader .loader__bar i");Si.to(e,{scaleX:n,duration:.4});const t=ft("#loaderPct"),i={v:+t.textContent};Si.to(i,{v:Math.round(n*100),duration:.4,onUpdate:()=>{t.textContent=Math.round(i.v)}})},hideLoader(){return new Promise(n=>{Si.timeline({onComplete:n}).to("#loader",{opacity:0,duration:.7,delay:.25,ease:"power2.inOut"}).set("#loader",{display:"none"})})},heroIntro(n){document.body.style.setProperty("--intro",n.toFixed(3)),document.body.classList.toggle("is-ready",n>.75)},setHeroAnchors(n){const e=document.body.style;e.setProperty("--name-left",`${n.left}px`),e.setProperty("--name-right",`${n.right}px`),e.setProperty("--name-top",`${n.top}px`),e.setProperty("--name-bottom",`${n.bottom}px`)},portraitEgg(){const n=ft("#bubble");n.textContent=we.eggs.portrait[mb++%we.eggs.portrait.length],n.classList.add("is-on"),clearTimeout(Hd),Hd=setTimeout(()=>n.classList.remove("is-on"),3200)},tooltip(n,e,t){const i=ft("#tooltip");if(!n){i.classList.remove("is-on"),document.getElementById("gl").classList.remove("is-pointer");return}document.getElementById("gl").classList.add("is-pointer"),i.innerHTML=`<b style="color:${n.color}">${Ae(n.label[Sr])}</b><span>${Ae(n.tip[Sr])}</span>`;const s=Math.min(innerWidth-300-16,Math.max(16,e+18)),a=Math.min(innerHeight-140,Math.max(16,t+18));i.style.transform=`translate(${s}px, ${a}px)`,i.classList.add("is-on")},setYear(n){if(n===Gd)return;Gd=n;const e=we.journey.years[n],t=ft("#jrPanel");document.querySelectorAll("[data-year]").forEach((i,r)=>i.classList.toggle("is-on",r===n)),Si.to(t,{opacity:0,y:10,duration:.18,onComplete:()=>{t.innerHTML=`
        <p class="jr__period">${Ae(e.period)}</p>
        <h3>${Ae(e.role)}</h3>
        <p>${Ae(e.desc)}</p>
        <ul>${e.points.map((i,r)=>`<li><i>0${r+1}</i>${Ae(i)}</li>`).join("")}</ul>`,Si.to(t,{opacity:1,y:0,duration:.35,ease:"power2.out"})}})},setJourneyReady(n){document.body.classList.toggle("jr-ready",!!n)},setNav(n){document.querySelectorAll("#nav [data-nav]").forEach(e=>e.classList.toggle("is-on",+e.dataset.nav===n))},setChapterProgress(n,e){document.body.style.setProperty("--p",e.toFixed(3))},isModalOpen(){return!ft("#modal").hidden||!ft("#bingo").hidden},openCard(n){if(n.action==="bingo")return xt.openBingo();if(n.action==="cv"){const i=document.createElement("a");i.href=ji.cv,i.download="",i.click();return}if(n.action==="contact")return Vc(4);const e=we.projects;ft("#modalBody").innerHTML=`
      <p class="kicker" style="color:${n.accent}">${Ae(n.kicker)}</p>
      <h3 class="serif">${Ae(n.name)}</h3>
      <p class="modal__sub">${Ae(n.sub)}</p>
      <ul class="modal__meta">${n.meta.map(i=>`<li>${Ae(i)}</li>`).join("")}</ul>
      <div class="modal__grid">
        <section><h4>${Ae(e.problem)}</h4><p>${Ae(n.problem)}</p></section>
        <section><h4>${Ae(e.approach)}</h4><p>${Ae(n.approach)}</p></section>
        <section><h4>${Ae(e.result)}</h4><p>${Ae(n.result)}</p></section>
      </div>
      <div class="modal__foot">
        <div class="tags">${n.tags.map(i=>`<span>${Ae(i)}</span>`).join("")}</div>
        ${n.url?`<a class="btn" href="${n.url}" target="_blank" rel="noopener">${Ae(e.repo)} ↗</a>`:`<span class="muted">${Ae(e.onRequest)}</span>`}
      </div>`,ft(".modal__card").style.setProperty("--accent",n.accent);const t=ft("#modal");t.hidden=!1,Si.fromTo(t,{opacity:0},{opacity:1,duration:.3}),Si.fromTo(".modal__card",{y:30,scale:.97},{y:0,scale:1,duration:.5,ease:"power3.out"}),Yt==null||Yt.stop()},toast(n){const e=ft("#toast");e.textContent=n,e.classList.add("is-on"),clearTimeout(kd),kd=setTimeout(()=>e.classList.remove("is-on"),3400)},openBingo(){const n=ft("#bingoGrid");n.innerHTML="",[...we.bingo.words].sort(()=>Math.random()-.5).forEach(t=>{const i=document.createElement("button");i.textContent=t,i.addEventListener("click",()=>{i.classList.toggle("is-on"),n.querySelectorAll(".is-on").length===4&&xt.toast(we.bingo.win)}),n.appendChild(i)});const e=ft("#bingo");e.hidden=!1,Si.fromTo(e,{opacity:0},{opacity:1,duration:.3}),Yt==null||Yt.stop()},closeBingo(){ft("#bingo").hidden=!0,Yt==null||Yt.start()}},Vd=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];function gb({toast:n,openBingo:e}){console.log(`%cAL.%c
`+we.eggs.console,"font: 400 42px Anton, Impact, sans-serif; color:#e3261b; padding:4px 0","font: 12px ui-monospace, monospace; color:#999"),document.addEventListener("visibilitychange",()=>{document.title=document.hidden?we.meta.hiddenTitle:we.meta.title});let t=0;document.getElementById("logo").addEventListener("click",()=>{t++;const s={3:we.eggs.logo[0],5:we.eggs.logo[1],8:we.eggs.logo[2]}[t];s&&n(s)}),document.getElementById("heroChip").addEventListener("click",s=>n(s.currentTarget.dataset.tip)),document.getElementById("finEgg").addEventListener("click",e);const i=document.getElementById("bingo");document.getElementById("bingoClose").addEventListener("click",xt.closeBingo),i.addEventListener("click",s=>s.target===i&&xt.closeBingo());let r=[];window.addEventListener("keydown",s=>{if(s.key==="Escape"&&!i.hidden)return xt.closeBingo();r=[...r,s.key.length===1?s.key.toLowerCase():s.key].slice(-Vd.length),r.join()===Vd.join()&&e()})}const Ip=matchMedia("(max-width: 760px)").matches||matchMedia("(pointer: coarse)").matches,Up=matchMedia("(prefers-reduced-motion: reduce)").matches;fb();const ha=document.getElementById("gl"),qi=new QS({canvas:ha,antialias:!1,powerPreference:"high-performance"});qi.setPixelRatio(Math.min(window.devicePixelRatio,Ip?1.5:1.75));qi.outputColorSpace=$t;zy(qi.capabilities.getMaxAnisotropy());const Np={uniforms:{tDiffuse:{value:null},uTime:{value:0},uFade:{value:1},uGlitch:{value:0},uRes:{value:new fe(1,1)}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uTime, uFade, uGlitch;
    uniform vec2 uRes;
    varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec2 uv = vUv;
      if (uGlitch > 0.001) {
        // vertical smears + pixel blocks, like the reel's burn transition
        float col = floor(uv.x * 48.0);
        float n = hash(vec2(col, floor(uTime * 12.0)));
        uv.y += (n - 0.5) * 0.18 * uGlitch * step(0.6, n);
        vec2 block = floor(uv * vec2(24.0, 14.0));
        if (hash(block + floor(uTime * 8.0)) > 1.0 - uGlitch * 0.08) uv = (block + 0.5) / vec2(24.0, 14.0);
      }
      float split = 0.004 * uGlitch;
      vec3 c;
      c.r = texture2D(tDiffuse, uv + vec2(split, 0.0)).r;
      c.g = texture2D(tDiffuse, uv).g;
      c.b = texture2D(tDiffuse, uv - vec2(split, 0.0)).b;
      vec2 q = vUv - 0.5;
      c *= 1.0 - dot(q, q) * 0.9;
      c += (hash(vUv * uRes + uTime) - 0.5) * 0.045;
      gl_FragColor = vec4(c * uFade, 1.0);
    }
  `},_b={uniforms:{tDiffuse:{value:null},tB:{value:null},uMix:{value:0},uEdge:{value:0},uTime:{value:0},uAspect:{value:1}},vertexShader:Np.vertexShader,fragmentShader:`
    uniform sampler2D tDiffuse, tB;
    uniform float uMix, uEdge, uTime, uAspect;
    varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
    float noise(vec2 p) {
      vec2 i = floor(p), f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
    }
    float fbm(vec2 p) {
      float v = 0.0, a = 0.5;
      for (int i = 0; i < 4; i++) { v += a * noise(p); p *= 2.03; a *= 0.5; }
      return v;
    }
    void main() {
      vec2 c = vUv - 0.5;
      vec3 a = texture2D(tDiffuse, c * (1.0 - 0.05 * uMix) + 0.5).rgb;
      if (uMix <= 0.0) { gl_FragColor = vec4(a, 1.0); return; }
      vec3 b = texture2D(tB, c * (1.0 - 0.07 * (1.0 - uMix)) + 0.5).rgb;
      float n = fbm(vec2(vUv.x * uAspect, vUv.y) * 2.4 + vec2(0.0, -uTime * 0.08));
      float v = n * 0.65 + (1.0 - vUv.y) * 0.35;
      float w = mix(0.22, 0.025, uEdge);
      float th = uMix * (1.0 + 2.0 * w) - w;
      float k = smoothstep(th - w, th + w, v);
      vec3 col = mix(b, a, k);
      float edge = (1.0 - smoothstep(0.0, w * 1.6, abs(v - th))) * uEdge;
      col += mix(vec3(0.9, 0.12, 0.0), vec3(1.0, 0.6, 0.18), edge * edge) * edge * 0.55;
      gl_FragColor = vec4(col, 1.0);
    }
  `},wr=new Ly(qi),Wc=new Dy(new yr,new Bt),as=new ku(_b),Vu=new jt(1,1,{type:ci});as.uniforms.tB.value=Vu.texture;const Ys=new ps(new fe(256,256),.8,.5,.5),$s=new ku(Np);wr.addPass(Wc);wr.addPass(as);wr.addPass(Ys);wr.addPass($s);wr.addPass(new Uy);const Wu=new oM({lerp:Up?1:.085,wheelMultiplier:.9}),Op=[...document.querySelectorAll("[data-chapter]")],vb=[...document.querySelectorAll("[data-layer]")];let wn=[],Zi=window.innerWidth,ai=window.innerHeight;const si={x:0,y:0,sx:0,sy:0,tx:0,ty:0},Xc={t:we,lang:Sr,isMobile:Ip,renderer:qi,textures:{},setHeroAnchors:n=>xt.setHeroAnchors(n),portraitEgg:()=>xt.portraitEgg(),tooltip:(n,e,t)=>xt.tooltip(n,e,t),onYear:n=>xt.setYear(n),setJourneyProgress:n=>xt.setJourneyReady(n),openCard:n=>xt.openCard(n),setCursor:n=>ha.classList.toggle("is-pointer",n)};function xb(n){return new Promise(e=>{new Sf().load(n,t=>{t.colorSpace=$t,e(t)},void 0,()=>e(new zt))})}async function Sb(){const n=xt.loaderProgress;n(.05),await Promise.all([document.fonts.load('400 100px "Anton"'),document.fonts.load('600 100px "Playfair Display"'),document.fonts.load('700 100px "Inter"'),document.fonts.load('500 100px "Inter"')]).catch(()=>{}),n(.3);const[,e]=await Promise.all([Jy("img/silhouette-cutout.png"),xb("img/starry-brussels.jpg")]);Xc.textures.brussels=e,n(.55);const t=[tb,rb,sb,lb,db];for(let r=0;r<t.length;r++)wn.push(t[r](Xc)),n(.55+(r+1)*.08),await new Promise(s=>setTimeout(s,0));Fp(),wn.forEach(r=>qi.compile(r.scene,r.camera)),n(1),await xt.hideLoader();const i=wn[0];Si.to(i.state,{intro:1,duration:Up?.01:3.2,ease:"power2.inOut",onUpdate:()=>xt.heroIntro(i.state.intro)}),gb({toast:xt.toast,openBingo:xt.openBingo}),requestAnimationFrame(Bp)}function Fp(){Zi=window.innerWidth,ai=window.innerHeight,qi.setSize(Zi,ai,!1),wr.setSize(Zi,ai);const n=qi.getPixelRatio();Vu.setSize(Math.floor(Zi*n),Math.floor(ai*n)),as.uniforms.uAspect.value=Zi/ai,Ys.resolution.set(Zi/2,ai/2),$s.uniforms.uRes.value.set(Zi,ai),wn.forEach(e=>e.resize(Zi,ai))}window.addEventListener("resize",Fp);window.addEventListener("pointermove",n=>{si.tx=n.clientX/Zi*2-1,si.ty=-(n.clientY/ai*2-1),si.sx=n.clientX,si.sy=n.clientY,Fs=!0});const Wd=new j0,Xd=new fe;let Fs=!1,Gi=0;function qc(){const n=wn[Gi];if(!n||!n.pickables||xt.isModalOpen())return null;Xd.set(si.tx,si.ty),Wd.setFromCamera(Xd,n.camera);const e=Wd.intersectObjects(n.pickables,!1)[0];return e?e.object:null}ha.addEventListener("click",()=>{const n=wn[Gi],e=qc();e&&n.onClick&&n.onClick(e)});function Mb(n){const e=n.getBoundingClientRect(),t=e.height-ai;return{p:Math.min(1,Math.max(0,-e.top/t)),top:e.top,bottom:e.bottom}}const qd=new eg,Yd={idx:-1};function Bp(){requestAnimationFrame(Bp),yb()}function yb(){const n=Math.min(qd.getDelta(),.05),e=qd.elapsedTime;Wu.raf(e*1e3),si.x+=(si.tx-si.x)*.08,si.y+=(si.ty-si.y)*.08;const t=Op.map(Mb);let i=0;for(let p=0;p<t.length;p++)t[p].top<ai*.7&&(i=p);const r=i>0?1-bi.smoothstep(t[i].top,-ai*.3,ai*.7):1,s=r<1,a=s?i-1:i;Gi=r<.5?a:i;const o=t[Gi].p;vb.forEach((p,_)=>{const m=_===i?r:_===a&&s?1-r:0;p.style.opacity=m,p.classList.toggle("is-active",_===Gi&&m>.5)}),document.body.dataset.chapter=Gi,Yd.idx!==Gi&&(Yd.idx=Gi,xt.setNav(Gi),Xc.tooltip(null),ha.classList.remove("is-pointer")),xt.setChapterProgress(Gi,o);const l=wn[Gi];Fs&&l.onHover?(Fs=!1,l.onHover(qc(),si.sx,si.sy)):Fs&&(Fs=!1,ha.classList.toggle("is-pointer",!!qc()));const c=wn[a],u=wn[i],h={t:e,dt:n,pointer:si,w:Zi,h:ai};c.update({...h,p:t[a].p}),s&&(u.update({...h,p:t[i].p}),qi.setRenderTarget(Vu),qi.render(u.scene,u.camera),qi.setRenderTarget(null));const d=s?r:0,f=p=>bi.lerp(c.bloom[p],u.bloom[p],d);Wc.scene=c.scene,Wc.camera=c.camera,as.uniforms.uMix.value=d,as.uniforms.uEdge.value=u.burnIn?1:0,as.uniforms.uTime.value=e,Ys.strength=f("strength"),Ys.radius=f("radius"),Ys.threshold=f("threshold"),$s.uniforms.uTime.value=e,$s.uniforms.uFade.value=1,$s.uniforms.uGlitch.value=s&&u.burnIn?Math.max(0,1-Math.abs(d-.5)/.45)*.35:c.glitch||0,wr.render(n)}function bb(n){const e=Op[n],t=e.offsetHeight-ai,i=[0,.18,.16,.22,.4][n]??.1;Wu.scrollTo(e.offsetTop+t*i,{duration:1.6})}xt.onNavigate(bb);xt.lenis=Wu;Sb();
