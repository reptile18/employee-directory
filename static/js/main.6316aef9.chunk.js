(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{19:function(e,t,a){e.exports=a(44)},24:function(e,t,a){},25:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),o=a.n(c),s=(a(24),a(25),a(2)),l=a(3),i=a(5),u=a(4),m=a(7),d=a(6),h=a(18),p=a.n(h);var f=function(e){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},e.number),r.a.createElement("td",{className:"d-none d-xl-table-cell"},r.a.createElement("img",{className:"thumbnail",src:e.photo,alt:"".concat(e.firstName," ").concat(e.lastName)})),r.a.createElement("td",null,e.lastName),r.a.createElement("td",null,e.firstName),r.a.createElement("td",{className:"d-none d-md-table-cell"},e.phone),r.a.createElement("td",{className:"d-none d-lg-table-cell"},e.cell),r.a.createElement("td",{className:"d-none d-xl-table-cell"},e.email),r.a.createElement("td",null,e.city,", ",e.stateCode))},b=(a(43),{sortedColumn:{fontDecoration:"underline"},unsortedColumn:{fontDecoration:"none"},extremeLightText:{color:"#CCC"}}),E=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"sortIcon",value:function(){return this.props.sorted?r.a.createElement("i",{className:"fas fa-sort-".concat(this.props.sortDir)}):r.a.createElement("i",{style:b.extremeLightText,className:"fas fa-sort"})}},{key:"render",value:function(){var e=this;return r.a.createElement("th",{scope:"col",onClick:function(){e.props.onSort(e.props.columnKey)},onMouseOver:this.onHover,onMouseOut:this.onUnhover},r.a.createElement("span",{className:"sortableColumn",style:b.unsortedColumn},this.props.label,"\xa0",this.sortIcon()))}}]),a}(r.a.Component);var N=function(e){var t=Object(n.useState)([]),a=Object(d.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)(""),l=Object(d.a)(s,2),i=l[0],u=l[1],h=Object(n.useState)("up"),b=Object(d.a)(h,2),N=b[0],y=b[1];function C(e){switch(e){case"Alabama":return"AL";case"Alaska":return"AK";case"Arizona":return"AZ";case"Arkansas":return"AR";case"California":return"CA";case"Colorado":return"CO";case"Connecticut":return"CT";case"Delaware":return"DE";case"District of Columbia":return"DC";case"Florida":return"FL";case"Georgia":return"GA";case"Hawaii":return"HI";case"Idaho":return"ID";case"Illinois":return"IL";case"Indiana":return"ID";case"Iowa":return"IA";case"Kansas":return"KS";case"Kentucky":return"KY";case"Louisiana":return"LA";case"Maine":return"ME";case"Maryland":return"MD";case"Massachusetts":return"MA";case"Michigan":return"MI";case"Minnesota":return"MN";case"Mississippi":return"MS";case"Missouri":return"MO";case"Montana":return"MT";case"Nebraska":return"NE";case"Nevada":return"NV";case"New Hampshire":return"NH";case"New Jersey":return"NJ";case"New Mexico":return"NM";case"New York":return"NY";case"North Carolina":return"NC";case"North Dakota":return"ND";case"Ohio":return"OH";case"Oklahoma":return"OK";case"Oregon":return"OR";case"Pennsylvania":return"PA";case"Rhode Island":return"RI";case"South Carolina":return"SC";case"South Dakota":return"SD";case"Tennessee":return"TN";case"Texas":return"TX";case"Utah":return"UT";case"Vermont":return"VT";case"Virginia":return"VA";case"Washington":return"WA";case"West Virginia":return"WV";case"Wisconsin":return"WI";case"Wyoming":return"WY";case"American Samoa":return"AS";case"Guam":return"GU";case"Northern Mariana Islands":return"MP";case"Puerto Rico":return"PR";case"U.S. Virgin Islands":return"VI";case"U.S. Minor Outlying Islands":return"UM";default:return""}}function v(e){i===e?"down"===N?(u(""),y("up")):y("down"):(u(e),y("up"))}function g(e){return i===e}function w(e,t){var a=i,n=a.indexOf("."),r=a.substring(0,n),c=a.substring(n+1,a.length);return""===i?e.index-t.index:"up"===N?e[r][c].localeCompare(t[r][c]):t[r][c].localeCompare(e[r][c])}return Object(n.useEffect)((function(){p.a.get("https://randomuser.me/api/?results=".concat(e.count,"&nat=us")).then((function(e){o(e.data.results.map((function(e,t){return Object(m.a)(Object(m.a)({},e),{},{index:t})})))}))}),[e.count]),r.a.createElement("div",{className:"container"},r.a.createElement("table",{className:"table table-hover"},r.a.createElement("caption",null,"Showing ",e.count," results filtered on '",e.filter,"'"),r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col",className:"d-none d-xl-table-cell"},"Photo"),r.a.createElement(E,{columnKey:"name.last",label:"Last\xa0Name",sorted:g("name.last"),sortDir:N,onSort:v}),r.a.createElement(E,{columnKey:"name.first",label:"First\xa0Name",sorted:g("name.first"),sortDir:N,onSort:v}),r.a.createElement("th",{scope:"col",className:"d-none d-md-table-cell"},"Phone"),r.a.createElement("th",{scope:"col",className:"d-none d-lg-table-cell"},"Cell"),r.a.createElement("th",{scope:"col",className:"d-none d-xl-table-cell"},"Email"),r.a.createElement(E,{columnKey:"location.city",label:"City",sorted:g("location.city"),sortDir:N,onSort:v}))),r.a.createElement("tbody",null,c.filter((function(t){return!!(t.name.last.toLowerCase().includes(e.filter.toLowerCase())||t.name.first.toLowerCase().includes(e.filter.toLowerCase())||t.location.city.toLowerCase().includes(e.filter.toLowerCase())||t.location.state.toLowerCase().includes(e.filter.toLowerCase())||C(t.location.state).includes(e.filter.toUpperCase()))})).sort(w).map((function(e,t){return r.a.createElement(f,{key:t,number:e.index+1,photo:e.picture.thumbnail,lastName:e.name.last,firstName:e.name.first,phone:e.phone,cell:e.cell,email:e.email,city:e.location.city,stateCode:C(e.location.state)})})))))};var y=function(e){return r.a.createElement("form",null,r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{id:"employeeSearch",className:"input-group-text",type:"text",placeholder:"Search for employee(s)",onChange:e.onChange}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-dark",type:"submit"},r.a.createElement("i",{className:"fas fa-search"})))))},C={jumbotron:{backgroundImage:"url(assets/img/pexels-christina-morillo-1181304-min-halved.brightness100.jpg)",backgroundSize:"cover",backgroundPosition:"center center",backgroundFilter:"blur(1px)"},jumboHeader:{fontWeight:"bolder"}},v=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={filter:"",count:50},e.filterTo=function(t){e.setState({filter:t.target.value})},e.setCount=function(t){e.setState({count:t})},e}return Object(l.a)(a,[{key:"renderCountButton",value:function(e){var t=this;return r.a.createElement("button",{key:e,type:"button",className:"btn btn-outline-secondary ".concat(this.state.count===e?"active":""),onClick:function(){return t.setCount(e)}},e)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"jumbotron jumbotron-fluid",style:C.jumbotron},r.a.createElement("h1",{className:"text-dark",style:C.jumboHeader},"Employee Directory")),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"d-flex justify-content-end mb-3"},r.a.createElement(y,{onChange:this.filterTo})),r.a.createElement("div",{className:"d-flex justify-content-end mb-3"},r.a.createElement("span",null,"Display",r.a.createElement("div",{className:"btn-group mx-2"},[25,50,100,200].map((function(t){return e.renderCountButton(t)}))),"results")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement(N,{filter:this.state.filter,count:this.state.count})))))}}]),a}(r.a.Component);var g=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.6316aef9.chunk.js.map