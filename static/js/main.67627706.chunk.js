(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(2),o=a.n(r);a(12);const l="".concat("https://accounts.spotify.com/authorize","?client_id=").concat("e09c3389cd8f4a0c92f03e1bc5b423c2","&redirect_uri=").concat("https://korsawat.github.io/Song/","&scope=").concat(["user-library-read"].join("%20"),"&response_type=token&show_dialog=true");a(13);var s=()=>{const[e,t]=Object(n.useState)(""),[a,r]=Object(n.useState)([]),[o,s]=Object(n.useState)([]),[i,m]=Object(n.useState)([null,null]),[u,d]=Object(n.useState)(0),[g,h]=Object(n.useState)(!1);Object(n.useEffect)(()=>{const e=new URLSearchParams(window.location.hash.substring(1)).get("access_token");if(!e||!e.access_token)return;const a=e.access_token;t(a),(async e=>{let t=0,a=[];try{let c;do{const n=await fetch("https://api.spotify.com/v1/me/tracks?limit=".concat(50,"&offset=").concat(t),{headers:{Authorization:"Bearer ".concat(e)}});if(!n.ok)throw new Error("HTTP error! Status: ".concat(n.status));c=await n.json(),a=[...a,...c.items],t+=50}while(t<c.total)}catch(n){return console.error("Error fetching songs:",n),[]}return a.map(e=>({track:e.track,compared:!1,wins:0}))})(a).then(e=>{r(e.map(e=>({...e,compared:!1}))),d(0);const t=E(e);s(t),k(t)}).catch(e=>{console.error("Error fetching songs:",e)})},[]),Object(n.useEffect)(()=>{const e=a.length,t=a.filter(e=>e.compared).length;d(t/e*100||0)},[a]);const E=e=>{const t=[];for(let a=0;a<e.length-1;a++)for(let n=a+1;n<e.length;n++)t.push([e[a],e[n]]);return t},k=e=>{const t=e.filter(e=>!e[0].compared||!e[1].compared);if(0===t.length)return void h(!0);const a=Math.floor(Math.random()*t.length);m(t[a]),s(e.filter(e=>e!==t[a]))},p=(e,t)=>{const n=a.map(t=>t.track.id===e.track.id?{...t,compared:!0,wins:(t.wins||0)+1}:t);r(n),k(o)};return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"header"},"Song Comparison"),e?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"total-liked-songs"},"Total Liked Songs: ",a.length),g?c.a.createElement("div",{className:"ranked-songs"},c.a.createElement("h2",null,"Ranked Songs"),c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Rank"),c.a.createElement("th",null,"Song Name"))),c.a.createElement("tbody",null,(()=>{const e=a.sort((e,t)=>(t.wins||0)-(e.wins||0));let t=1;return e.forEach((a,n)=>{n>0&&(a.wins||0)!==(e[n-1].wins||0)&&(t=n+1),a.rank=t}),e})().map(e=>c.a.createElement("tr",{key:e.track.id},c.a.createElement("td",null,e.rank),c.a.createElement("td",null,e.track.name)))))):c.a.createElement(c.a.Fragment,null,i[0]&&i[1]?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"song-container"},c.a.createElement("div",{className:"song",onClick:()=>p(i[0],i[1])},c.a.createElement("img",{src:i[0].track.album.images[0].url,alt:i[0].track.name}),c.a.createElement("div",null,i[0].track.name)),c.a.createElement("div",{className:"song",onClick:()=>p(i[1],i[0])},c.a.createElement("img",{src:i[1].track.album.images[0].url,alt:i[1].track.name}),c.a.createElement("div",null,i[1].track.name))),c.a.createElement("div",{className:"progress-container"},c.a.createElement("div",{className:"progress-bar"},c.a.createElement("div",{className:"progress",style:{width:"".concat(u,"%")}},Math.round(u),"%"))),c.a.createElement("div",{className:"buttons"},c.a.createElement("div",{className:"buttons-container"},c.a.createElement("button",{onClick:()=>{const e=a.map(e=>e.track.id===i[0].track.id||e.track.id===i[1].track.id?{...e,compared:!0,wins:(e.wins||0)+1}:e);r(e),k(o)}},"Can't Decide")),c.a.createElement("button",{onClick:()=>{h(!0)}},"Show Ranked Songs"))):c.a.createElement("div",null,"Loading..."))):c.a.createElement("a",{href:l},"Login to Spotify"))};var i=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then(t=>{let{getCLS:a,getFID:n,getFCP:c,getLCP:r,getTTFB:o}=t;a(e),n(e),c(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s,null))),i()},3:function(e,t,a){e.exports=a(14)}},[[3,1,2]]]);
//# sourceMappingURL=main.67627706.chunk.js.map