(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(2),r=a.n(o);a(12);const l="".concat("https://accounts.spotify.com/authorize","?client_id=").concat("e09c3389cd8f4a0c92f03e1bc5b423c2","&redirect_uri=").concat("https://korsawat.github.io/Song/","&scope=").concat(["user-library-read"].join("%20"),"&response_type=token&show_dialog=true"),s=()=>window.location.hash.substring(1).split("&").reduce((e,t)=>{let a=t.split("=");return e[a[0]]=decodeURIComponent(a[1]),e},{});a(13);var i=()=>{const[e,t]=Object(n.useState)(""),[a,o]=Object(n.useState)([]),[r,i]=Object(n.useState)([]),[m,d]=Object(n.useState)([null,null]),[u,h]=Object(n.useState)(0),[p,g]=Object(n.useState)(!1),[k,E]=Object(n.useState)(null),[f,w]=Object(n.useState)("");Object(n.useEffect)(()=>{const e=s();window.location.hash="";const a=e.access_token;if(a){t(a),(async e=>{let t,a=0,n=[];do{const c=await fetch("https://api.spotify.com/v1/me/tracks?limit=".concat(50,"&offset=").concat(a),{headers:{Authorization:"Bearer ".concat(e)}});if(!c.ok)throw new Error("HTTP error! Status: ".concat(c.status));t=await c.json(),n=[...n,...t.items],a+=50}while(a<t.total);return n.map(e=>({track:e.track,compared:!1,wins:0}))})(a).then(e=>{o(e.map(e=>({...e,compared:!1}))),h(0);const t=b(e);i(t),v(t)});const e=document.createElement("script");e.src="https://sdk.scdn.co/spotify-player.js",e.async=!0,document.body.appendChild(e),window.onSpotifyWebPlaybackSDKReady=(()=>{const e=new window.Spotify.Player({name:"Web Playback SDK",getOAuthToken:e=>{e(a)}});e.addListener("ready",e=>{let{device_id:t}=e;w(t),console.log("Ready with Device ID",t)}),e.addListener("not_ready",e=>{let{device_id:t}=e;console.log("Device ID has gone offline",t)}),e.connect(),E(e)})}},[]),Object(n.useEffect)(()=>{const e=a.length,t=a.filter(e=>e.compared).length;h(t/e*100)},[a]),Object(n.useEffect)(()=>{const e=s();console.log("Token from URL:",e.access_token),window.location.hash="";const a=e.access_token;a&&(t(a),console.log("Token in state:",a))},[]);const b=e=>{const t=[];for(let a=0;a<e.length-1;a++)for(let n=a+1;n<e.length;n++)t.push([e[a],e[n]]);return t},v=e=>{const t=e.filter(e=>!e[0].compared||!e[1].compared);if(0===t.length)return void g(!0);const a=Math.floor(Math.random()*t.length);d(t[a]),i(e.filter(e=>e!==t[a]))},y=(e,t)=>{const n=a.map(t=>t.track.id===e.track.id?{...t,compared:!0,wins:(t.wins||0)+1}:t);o(n),v(r)};return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"header"},"Song Comparison"),e?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"total-liked-songs"},"Total Liked Songs: ",a.length),p?c.a.createElement("div",{className:"ranked-songs"},c.a.createElement("h2",null,"Ranked Songs"),c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Rank"),c.a.createElement("th",null,"Song Name"))),c.a.createElement("tbody",null,(()=>{const e=a.sort((e,t)=>(t.wins||0)-(e.wins||0));let t=1;return e.forEach((a,n)=>{n>0&&(a.wins||0)!==(e[n-1].wins||0)&&(t=n+1),a.rank=t}),e})().map(e=>c.a.createElement("tr",{key:e.track.id},c.a.createElement("td",null,e.rank),c.a.createElement("td",null,e.track.name)))))):c.a.createElement(c.a.Fragment,null,m[0]&&m[1]?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"song-container"},c.a.createElement("div",{className:"song",onClick:()=>y(m[0],m[1])},c.a.createElement("img",{src:m[0].track.album.images[0].url,alt:m[0].track.name}),c.a.createElement("div",null,m[0].track.name)),c.a.createElement("div",{className:"song",onClick:()=>y(m[1],m[0])},c.a.createElement("img",{src:m[1].track.album.images[0].url,alt:m[1].track.name}),c.a.createElement("div",null,m[1].track.name))),c.a.createElement("div",{className:"progress-container"},c.a.createElement("div",{className:"progress-bar"},c.a.createElement("div",{className:"progress",style:{width:"".concat(u,"%")}},Math.round(u),"%"))),c.a.createElement("div",{className:"buttons"},c.a.createElement("div",{className:"buttons-container"},c.a.createElement("button",{onClick:()=>{const e=a.map(e=>e.track.id===m[0].track.id||e.track.id===m[1].track.id?{...e,compared:!0,wins:(e.wins||0)+1}:e);o(e),v(r)}},"Can't Decide")),c.a.createElement("button",{onClick:()=>{g(!0)}},"Show Ranked Songs"))):c.a.createElement("div",null,"Loading..."))):c.a.createElement("a",{href:l},"Login to Spotify"))};var m=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then(t=>{let{getCLS:a,getFID:n,getFCP:c,getLCP:o,getTTFB:r}=t;a(e),n(e),c(e),o(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(i,null))),m()},3:function(e,t,a){e.exports=a(14)}},[[3,1,2]]]);
//# sourceMappingURL=main.1d9e97f5.chunk.js.map