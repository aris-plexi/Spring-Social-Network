(this.webpackJsonpbootstrap_react_application=this.webpackJsonpbootstrap_react_application||[]).push([[0],{14:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var r=t(0),l=t.n(r),n=t(7),c=t.n(n),s=(t(14),{objectFit:"cover",borderRadius:"50%",width:"40px",height:"40px"});function m(e){e.preventDefault();var a=document.getElementById("searchBar");(new FormData).append("name",a.nodeValue),console.log(e.target.search.value),fetch("/searchUsers",{method:"GET",credentials:"include",headers:{input:e.target.search.value}}).then((function(e){return e.json()})).then((function(e){return console.log(e)})),this.props.history.push("/results")}function o(e){e.preventDefault(),fetch("/logout",{method:"GET",credentials:"include"}).then((function(e){window.location.href="http://localhost:8080/"})),console.log("You have been logged out.")}var i=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement("a",{className:"navbar-brand",href:"#"},l.a.createElement("img",{src:"http://placehold.it/150x50?text=Logo",width:"30",height:"30",className:"d-inline-block align-top",alt:"",loading:"lazy"}),"Connector"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("form",{className:"form-inline my-2 my-lg-0",onSubmit:m},l.a.createElement("input",{id:"searchBar",className:"form-control mr-sm-2",name:"search",type:"search",placeholder:"Search","aria-label":"Search"})),l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement("a",{className:"nav-link",href:"#"},"Feed")),l.a.createElement("li",{className:"nav-item active"},l.a.createElement("a",{className:"nav-link",href:"#"},"Messages")),l.a.createElement("li",{className:"nav-item active"},l.a.createElement("a",{className:"nav-link",href:"#"},"Conections")),l.a.createElement("li",null,l.a.createElement("img",{style:s,src:"https://cdn.vox-cdn.com/thumbor/G8A4RF-QWQl7jItQw93r402os_0=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/10816041/rick_and_morty_s02_still.jpg",className:"avatar rounded-circle ml-3",alt:"Cinque Terre"})),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#"},"Alexandros Korovesis")),l.a.createElement("li",null,l.a.createElement("a",{className:"nav-link",href:"#",onClick:o},"Logout"))))))},d=t(3),u=t(2),h={objectFit:"cover",borderRadius:"50%",width:"50px",height:"50px"};var p=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"card col-md-6 col-xs-12 col-sm-8 p-0 my-2"},l.a.createElement("div",{className:"card-body d-flex flex-row p-3"},l.a.createElement("img",{style:h,src:"https://cdn.vox-cdn.com/thumbor/G8A4RF-QWQl7jItQw93r402os_0=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/10816041/rick_and_morty_s02_still.jpg",className:"avatar rounded-circle mx-3",alt:"Cinque Terre"}),l.a.createElement("div",null,l.a.createElement("h5",{className:"card-title mb-0"},e.username),l.a.createElement("p",{className:"card-text text-secondary"},l.a.createElement("small",null,l.a.createElement("i",{className:"far fa-clock pr-2"}),"September 14, 2016")))),l.a.createElement("div",{className:"card-body p-1"},l.a.createElement("img",{src:"https://www.neolaia.gr/wp-content/uploads/2019/10/Rick-and-Morty.jpg",alt:"rick",className:"img-fluid rounded"}),l.a.createElement("blockquote",{className:"card-text p-3 m-0"},l.a.createElement("p",{className:"mb-0"},e.post)),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 col-sm-4 col-md-4 m-2"},l.a.createElement(d.a,{className:"mx-2",icon:u.b}),8,l.a.createElement(d.a,{className:"mx-2",icon:u.a}),10)))))},v={objectFit:"cover",borderRadius:"50%",width:"40px",height:"40px"};var E=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"card col-md-6 col-xs-12 col-sm-8 p-0 my-2"},l.a.createElement("div",{className:"card-body d-flex flex-row pt-2 pb-0 px-1"},l.a.createElement("img",{style:v,src:e.avatar,className:"avatar rounded-circle mx-2",alt:"Cinque Terre"}),l.a.createElement("div",null,l.a.createElement("h6",{className:"card-text mb-0"},e.username),l.a.createElement("blockquote",{className:"card-text p-0 m-0"},l.a.createElement("p",{className:"mb-0"},e.post)))),l.a.createElement("div",{className:"card-body p-1"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-4 m-2"},l.a.createElement(d.a,{className:"mx-2",icon:u.b}),8),l.a.createElement("div",{className:"col-7 m-2 text-right"},l.a.createElement("p",{className:"card-text text-secondary"},l.a.createElement("small",null,l.a.createElement("i",{className:"far fa-clock pr-2"}),"September 14, 2016")))))))},f={objectFit:"cover",borderRadius:"50%",width:"40px",height:"40px"};var g=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"card my-2 border-0"},l.a.createElement("div",{className:"card-body d-flex flex-row pt-2 pb-0 px-1"},l.a.createElement("img",{style:f,src:e.avatar,className:"avatar rounded-circle mx-2",alt:"Cinque Terre"}),l.a.createElement("h6",{className:"card-text align-bottom mt-2"},e.username))))},b=t(8),N={height:"100vh",position:"fixed",overflow:"scroll"},x={height:"100%",overflowY:"scroll"};var y=function(e){var a=l.a.useState([]),t=Object(b.a)(a,2),r=t[0],n=t[1];return l.a.useEffect((function(){fetch("https://api.jsonbin.io/b/5f23ffa2250d377b5dc791de").then((function(e){return e.json()})).then((function(e){return n(e)}))}),[]),l.a.createElement("div",{className:"row",style:N},l.a.createElement("div",{className:"col-3",style:x},l.a.createElement("div",null,r.map((function(e){return l.a.createElement(g,{username:e.first_name+" "+e.last_name,avatar:e.avatar})})))),l.a.createElement("div",{className:"col-9"},l.a.createElement(p,{username:"Rick Sanchez",post:"After having been missing for nearly 20 years, Rick Sanchez suddenly arrives at daughter Beth's doorstep to move in with her and her family. Although Beth welcomes Rick into her home, her husband, Jerry, isn't as happy about the family reunion."}),l.a.createElement(E,{username:"Alex Koro",post:"After having been missing for nearly 20 years, Rick Sanchez suddenly arrives at daughter Beth's doorstep to move in with her and her family."})))};var w=function(){return l.a.createElement("div",{className:"container-fluid p-0"},l.a.createElement(i,null),l.a.createElement(y,null))};c.a.render(l.a.createElement(w,null),document.getElementById("root"))},9:function(e,a,t){e.exports=t(20)}},[[9,1,2]]]);
//# sourceMappingURL=main.20579eb1.chunk.js.map