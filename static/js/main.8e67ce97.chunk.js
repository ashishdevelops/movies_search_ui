(this.webpackJsonpshopify_webdev=this.webpackJsonpshopify_webdev||[]).push([[0],{79:function(e,t,n){},80:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var i=n(3),a=n(0),o=n.n(a),s=n(67),r=n.n(s),c=(n(79),n(13)),l=n(26),h=n(27),d=n(32),p=n(29),m=n(28),b=(n(80),n(103)),j=n(93),u=n(105),x=n(95),v=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).nominated=!1,i}return Object(h.a)(n,[{key:"render",value:function(){if("result"==this.props.card_type){for(var e=0;e<this.props.nominationList.length;++e)if(this.props.nominationList[e].imdbID===this.props.id){this.nominated=!0;break}var t=Object(i.jsx)(b.a,{margin:"5px",colorScheme:"teal",variant:"solid",position:"absolute",isDisabled:this.nominated,onClick:this.props.onItemClick,value:this.props.index,children:"Nominate"})}else t=Object(i.jsx)(b.a,{margin:"5px",colorScheme:"red",variant:"solid",position:"absolute",isDisabled:this.nominated,onClick:this.props.onItemClick,value:this.props.index,children:"Delete"});return Object(i.jsxs)(j.a,{w:"250px",borderWidth:"1px",borderRadius:"lg",overflow:"hidden",children:[t,Object(i.jsx)(u.a,{src:this.props.poster,fallbackSrc:"https://via.placeholder.com/300",width:"250px",height:"250px",objectFit:"cover"}),Object(i.jsxs)(j.a,{p:"6",children:[Object(i.jsxs)(j.a,{d:"flex",alignItems:"baseline",children:[Object(i.jsx)(x.a,{borderRadius:"full",px:"2",colorScheme:"teal",children:this.props.type}),Object(i.jsxs)(j.a,{color:"gray.500",fontWeight:"semibold",letterSpacing:"wide",fontSize:"xs",textTransform:"uppercase",ml:"2",children:["Release: ",this.props.year]})]}),Object(i.jsx)(j.a,{mt:"1",fontWeight:"semibold",as:"h4",lineHeight:"tight",children:this.props.title})]})]})}}]),n}(o.a.Component),O=n(106),f=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this,t=Object(i.jsx)("h3",{children:"error"});return t=null==this.props.movies||0===this.props.movies.length?Object(i.jsx)("h3",{children:"No Results"}):this.props.movies.map((function(t,n){return Object(i.jsx)(v,{id:t.imdbID,title:t.Title,year:t.Year,type:t.Type,poster:t.Poster,onItemClick:e.props.onItemClick,nominationList:e.props.nominationList,index:n,nominated:e.nominated,card_type:"result"},n)})),Object(i.jsx)(O.a,{minChildWidth:"250px",rowGap:"20px",columnGap:"50px",children:t})}}]),n}(o.a.Component),g=n(96),y=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this,t=this.props.movies;return Object(i.jsx)(g.a,{children:t.map((function(t,n){return Object(i.jsx)(v,{title:t.Title,year:t.Year,type:t.Type,poster:t.Poster,onNominate:e.props.onNominate,index:n,card_type:"nominated",onItemClick:e.props.onItemClick},n)}))})}}]),n}(o.a.Component),k=n(97),C=n(104),S=n(33),I=n(98),w=n(99),L=n(107),N=n(100),R=n(102),T=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).state={movies:[],search_term:"error",loading:!1,nominations:[]},i.handleChange=i.handleChange.bind(Object(d.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(d.a)(i)),i.handleNominate=i.handleNominate.bind(Object(d.a)(i)),i}return Object(h.a)(n,[{key:"moviesList",value:function(){var e=this;console.log("MAKING REQUEST"),this.setState({loading:!0},(function(){var t=new XMLHttpRequest,n="https://www.omdbapi.com/?s=".concat(e.state.search_term,"&apikey=e2878480&");t.open("GET",n),t.send(),t.onreadystatechange=function(n){if(console.log(t.readyState,t.status),4===t.readyState&&200===t.status){var i=JSON.parse(t.responseText).Search,a=[];null!=i&&Object.keys(i).forEach((function(e){"movie"==i[e].Type&&a.push(i[e])})),e.setState({movies:a,loading:!1}),console.log("API CALL RECIEVED")}}}))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.moviesList()}},{key:"handleChange",value:function(e){this.setState({search_term:e.target.value})}},{key:"handleNominate",value:function(e){var t=this.state.movies[e.target.value];this.setState({nominations:[].concat(Object(c.a)(this.state.nominations),[t])})}},{key:"handleRemoveNominate",value:function(e){console.log("denominate")}},{key:"render",value:function(){if(this.state.loading)var e=Object(i.jsx)(k.a,{children:Object(i.jsx)(C.a,{thickness:"4px",speed:"0.65s",emptyColor:"gray.200",color:"blue.500",size:"xl"})});else e=Object(i.jsx)(f,{onItemClick:this.handleNominate,movies:this.state.movies,loading:this.state.loading,nominationList:this.state.nominations});return Object(i.jsxs)("div",{children:[Object(i.jsx)(k.a,{children:Object(i.jsx)(j.a,{w:"50%",borderWidth:"1px",borderRadius:"lg",padding:"10px",marginTop:"100px",marginBottom:"70px",children:Object(i.jsx)("form",{onSubmit:this.handleSubmit,children:Object(i.jsxs)(S.a,{children:[Object(i.jsxs)(I.a,{children:[Object(i.jsx)(w.a,{pointerEvents:"none",children:Object(i.jsx)(R.a,{color:"gray.300"})}),Object(i.jsx)(L.a,{type:"field",id:"search_field",value:this.state.value,onChange:this.handleChange})]}),Object(i.jsx)(S.b,{children:"Search for and nominate your favorite movies :)"})]})})})}),Object(i.jsxs)(j.a,{borderWidth:"1px",borderRadius:"lg",padding:"30px",marginLeft:"100px",marginRight:"100px",children:[Object(i.jsx)(N.a,{children:"Nomination List"}),Object(i.jsx)(y,{movies:this.state.nominations,onItemClick:this.handleRemoveNominate})]}),Object(i.jsx)(j.a,{borderWidth:"1px",borderRadius:"lg",padding:"30px",margin:"100px",minH:"300px",children:e})]})}}]),n}(o.a.Component),E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,108)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),i(e),a(e),o(e),s(e)}))},_=n(101);r.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(_.a,{children:Object(i.jsx)(T,{})})}),document.getElementById("root")),E()}},[[85,1,2]]]);
//# sourceMappingURL=main.8e67ce97.chunk.js.map