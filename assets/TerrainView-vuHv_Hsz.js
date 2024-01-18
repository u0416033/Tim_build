import{ac as b,E as y,ad as R,ae as G,av as k,af as E,aw as F,w as H,as as C}from"./OrbitControls-stecVo81.js";import{d as B,o as P,c as T,a as o,b as U,e as D,F as N,l as W,j,k as I}from"./index-E9fv5Zel.js";var M=`in float hValue;\r
vec3 heatmapGradient(float t) {\r
    return clamp((pow(t, 1.5) * 0.8 + 0.2) * vec3(smoothstep(0.0, 0.35, t) + t * 0.5, smoothstep(0.5, 1.0, t), max(1.0 - t * 1.7, t * 7.0 - 6.0)), 0.0, 1.0);\r
}

void main() {\r
    float v = abs(hValue - 1.);\r
    gl_FragColor = vec4(heatmapGradient(hValue), 0.8) ;\r
}`,x=`uniform sampler2D heightMap;\r
uniform float heightRatio;\r
out vec2 vUv;\r
out float hValue;\r
void main() {\r
    vUv = uv;\r
    vec3 pos = position;\r
    hValue = texture2D(heightMap, vUv).r;\r
    pos.y = hValue * heightRatio;\r
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.0);\r
}`;const q=o("div",{id:"terrainContainer"},null,-1),z={class:"terrainContainerContent"},A={class:"terrainContainerContent_header"},L=o("div",{class:"terrainContainerContent_body"},"content",-1),O=o("div",{class:"terrainContainerContent_footer"},null,-1),Y=B({__name:"TerrainView",setup(X){let c;const V=()=>{console.log(c)};return P(()=>{const r=new b,n=new y(60,window.innerWidth/window.innerHeight,1,1e3);n.position.set(-116.53807166179341,86.6751392416655,195.43594350559832);const t=new R({antialias:!0});t.setSize(window.innerWidth,window.innerHeight);const i=document.getElementById("terrainContainer");i==null||i.appendChild(t.domElement);const d=new G(n,t.domElement);d.enablePan=!1,d.enableRotate=!1,r.add(new k(50,25,64,64)),t.setClearColor(16777215);const h=new E(500,500,1e3,1e3);h.rotateX(-Math.PI*.5);const m=p();console.log(m);function p(){const a=document.createElement("canvas");a.width=256,a.height=256;const e=a.getContext("2d");if(e){e.fillStyle="white",e.fillRect(0,0,256,256);for(let _=0;_<100;_++){const g=Math.floor(Math.random()*255),w=Math.floor(Math.random()*255),s=e.createRadialGradient(g,w,1,g,w,50),l=Math.floor(Math.random()*255);s.addColorStop(0,"rgb("+l+","+l+","+l+")"),s.addColorStop(1,"transparent"),e.fillStyle=s,e.fillRect(0,0,256,256)}return new F(a)}}const u=new H(h,new C({uniforms:{heightMap:{value:m},heightRatio:{value:80}},vertexShader:x,fragmentShader:M,transparent:!0}));r.add(u);let f=0;const S=100;v();function v(){if(++f>S){const a=p(),e=new C({uniforms:{heightMap:{value:a},heightRatio:{value:100}},vertexShader:x,fragmentShader:M,transparent:!0});u.material=e,f=0}c=n,requestAnimationFrame(v),t.render(r,n)}}),(r,n)=>{const t=W("n-button");return j(),T(N,null,[q,o("div",z,[o("div",A,[U(t,{type:"tertiary",onClick:V},{default:D(()=>[I("Back To Universe")]),_:1})]),L,O])],64)}}});export{Y as default};
