webpackJsonp([1],{"+QJL":function(t,e,a){t.exports=a.p+"static/img/Ligue_1_logo.a38a0e7.png"},"+SAI":function(t,e,a){"use strict";function s(t){a("zOgF")}var r=a("1t2V"),i=a("/RKs"),n=a("VU/8"),o=s,c=n(r.a,i.a,!1,o,"data-v-68da1d8e",null);e.a=c.exports},"/RKs":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement;return(t._self._c||e)("svg",{domProps:{innerHTML:t._s(t.src)}})}],i={render:s,staticRenderFns:r};e.a=i},"1t2V":function(t,e,a){"use strict";e.a={props:["src"]}},"4pyC":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("div",{staticClass:"welcome"},[a("div",{staticClass:"wrapper"},[a("h2",{staticClass:"welcome-header"},[t._v("Welcome to Fut Fixtures")]),t._v(" "),a("h3",[t._v("Your games in one place")]),t._v(" "),a("router-link",{staticClass:"btn",attrs:{to:"/competitions"}},[t._v("View Fixtures")])],1)]),t._v(" "),t._m(0)])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"feature-container"},[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"feature"},[a("h2",{staticClass:"feature-header"},[t._v("Vue")]),t._v(" "),a("p",{staticClass:"feature-body"},[t._v("All of the front end of this website is Vue. I don't have a strong opinion about frameworks, I just like Vue.")])]),t._v(" "),a("div",{staticClass:"feature"},[a("h2",{staticClass:"feature-header"},[t._v("football-data.org")]),t._v(" "),a("p",{staticClass:"feature-body"},[t._v("I didn't curate all of this data myself, "),a("a",{attrs:{href:"http://www.football-data.org"}},[t._v("footballdata.org")]),t._v(" did all the heavy lifting for me and provided a great API to make calls with.")])]),t._v(" "),a("div",{staticClass:"feature"},[a("h2",{staticClass:"feature-header"},[t._v("Github")]),t._v(" "),a("p",{staticClass:"feature-body"},[t._v("If you're the type of person who wants to read source code. All of my projects are "),a("a",{attrs:{href:"https://www.github.com/qkombur/FutTrack"}},[t._v("open source")])])])])])}],i={render:s,staticRenderFns:r};e.a=i},"6fGj":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[null!==t.fixture.result.goalsHomeTeam?a("div",{staticClass:"card"},[t.hidden?a("div",{staticClass:"left"},[a("h2",{staticClass:"teamName"},[t._v(t._s(t.fixture.homeTeamName+" - "+t.fixture.result.goalsHomeTeam))]),t._v(" "),a("h2",{staticClass:"versus"},[t._v("vs")]),t._v(" "),a("h2",{staticClass:"teamName"},[t._v(t._s(t.fixture.awayTeamName+" - "+t.fixture.result.goalsAwayTeam))])]):a("div",{staticClass:"left"},[a("h2",{staticClass:"teamName"},[t._v(t._s(t.fixture.homeTeamName+" - Spoiler"))]),t._v(" "),a("h2",{staticClass:"versus"},[t._v("vs")]),t._v(" "),a("h2",{staticClass:"teamName"},[t._v(t._s(t.fixture.awayTeamName+" - Spolier"))])]),t._v(" "),a("div",{staticClass:"right"},[a("h2",{staticClass:"date"},[t._v(t._s(t._f("formatDate")(t.fixture.date)))]),t._v(" "),a("h2",{staticClass:"date"},[t._v(t._s(t._f("formatTime")(t.fixture.date)))])]),t._v(" "),a("h3",{staticClass:"spoiler",on:{click:function(e){t.hidden=!t.hidden}}},[t._v("Show Score?")])]):a("div",{staticClass:"card"},[a("div",{staticClass:"left"},[a("h2",{staticClass:"teamName"},[t._v(t._s(t.fixture.homeTeamName))]),t._v(" "),a("h2",{staticClass:"versus"},[t._v("vs")]),t._v(" "),a("h2",{staticClass:"teamName"},[t._v(t._s(t.fixture.awayTeamName))])]),t._v(" "),a("div",{staticClass:"right"},[a("h2",{staticClass:"date"},[t._v(t._s(t._f("formatDate")(t.fixture.date)))]),t._v(" "),a("h2",{staticClass:"date"},[t._v(t._s(t._f("formatTime")(t.fixture.date)))])])])])},r=[],i={render:s,staticRenderFns:r};e.a=i},"8Xsq":function(t,e){},HHc6:function(t,e,a){"use strict";function s(t){a("QhuO")}var r=a("YyfK"),i=a("6fGj"),n=a("VU/8"),o=s,c=n(r.a,i.a,!1,o,"data-v-428d1476",null);e.a=c.exports},HhF3:function(t,e,a){t.exports=a.p+"static/img/Premier_League_logo.833a7c8.png"},KO0l:function(t,e,a){t.exports=a.p+"static/img/LaLiga.a18d3f7.png"},Kqzf:function(t,e){},M93x:function(t,e,a){"use strict";function s(t){a("UqxI")}var r=a("xJD8"),i=a("SgTT"),n=a("VU/8"),o=s,c=n(r.a,i.a,!1,o,null,null);e.a=c.exports},MyP8:function(t,e,a){"use strict";var s=a("HHc6"),r=a("mtWM"),i=a.n(r),n={headers:{"X-Auth-Token":"651c36e10a3640f598f529d5a2868ec2"}};e.a={components:{FixtureCard:s.a},data:function(){return{fixtures:[],formatedDate:"",search:"",teamIcon:[]}},created:function(){this.getData("http://api.football-data.org/v1/competitions/"+this.$route.params.competition+"/fixtures")},computed:{filteredFixtures:function(){var t=this;return this.fixtures.filter(function(e){return e.homeTeamName.toLowerCase().match(t.search.toLowerCase())||e.awayTeamName.toLowerCase().match(t.search.toLowerCase())})}},methods:{getData:function(t){var e=this;i.a.get(t,n).then(function(t){e.fixtures=t.data.fixtures,console.log(t.data.fixtures)}).catch(function(t){console.log(t)})}}}},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),r=a("M93x"),i=a("YaEn"),n=a("+SAI");s.a.config.productionTip=!1,new s.a({el:"#app",router:i.a,Vector:n.a,template:"<App/>",components:{App:r.a,Vector:n.a}})},NyMn:function(t,e,a){"use strict";e.a={data:function(){return{competitions:[{id:467,caption:"World Cup",logo:a("TmLo")},{id:445,caption:"Premier League",logo:a("HhF3")},{id:450,caption:"Ligue 1",logo:a("+QJL")},{id:452,caption:"1. Bundesliga",logo:a("lU1Y")},{id:455,caption:"La Liga",logo:a("KO0l")}]}},created:function(){},methods:{}}},QhuO:function(t,e){},SgTT:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nav",[a("router-link",{attrs:{to:"/"}},[a("h1",[t._v("ff")])])],1),t._v(" "),a("router-view")],1)},r=[],i={render:s,staticRenderFns:r};e.a=i},TmLo:function(t,e,a){t.exports=a.p+"static/img/worldcup.16c644c.png"},UqxI:function(t,e){},VmVR:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grid-container"},[a("h1",{staticClass:"grid-header"},[t._v("Competitions")]),t._v(" "),t._l(t.competitions,function(t){return a("li",{key:+t},[a("div",{staticClass:"card"},[a("router-link",{staticClass:"link",attrs:{to:"/competitions/"+t.id}},[a("img",{staticClass:"logo",attrs:{src:t.logo}})])],1)])})],2)},r=[],i={render:s,staticRenderFns:r};e.a=i},YZGV:function(t,e,a){"use strict";var s=a("HHc6");e.a={name:"main",components:{FixtureCard:s.a},data:function(){return{msg:"This is a test"}},created:function(){},filters:{formatDate:function(t){if(!t)return"";var e=new Date(t);return e.getMonth()+1+"/"+e.getDate()+"/"+e.getFullYear()},formatTime:function(t){if(!t)return"";var e=new Date(t);return e.getHours()+":"+e.getMinutes()}}}},YaEn:function(t,e,a){"use strict";var s=a("7+uW"),r=a("/ocq"),i=a("eYrN"),n=a("rS1H"),o=a("f8o6");s.a.use(r.a),e.a=new r.a({routes:[{path:"/",name:"main",component:i.a},{path:"/competitions/:competition",name:"Fixture",component:n.a},{path:"/competitions",name:"Competitions",component:o.a}]})},YyfK:function(t,e,a){"use strict";var s=a("mtWM"),r=a.n(s),i={headers:{"X-Auth-Token":"651c36e10a3640f598f529d5a2868ec2"}};e.a={name:"FixtureCard",props:{fixture:{type:Object,default:[]}},data:function(){return{formatedDate:"",search:"",teamIcon:[],hidden:!1}},created:function(){},methods:{getIcon:function(t){var e=this;r.a.get(t,i).then(function(t){e.teamIcon=t.data.crestUrl})}},filters:{formatDate:function(t){if(!t)return"";var e=new Date(t);return e.getMonth()+1+"/"+e.getDate()+"/"+e.getFullYear()},formatTime:function(t){if(!t)return"";var e=new Date(t);return e.getHours()+":"+e.getMinutes()}}}},eYrN:function(t,e,a){"use strict";function s(t){a("jrWv")}var r=a("YZGV"),i=a("4pyC"),n=a("VU/8"),o=s,c=n(r.a,i.a,!1,o,"data-v-7b2c5ccc",null);e.a=c.exports},f8o6:function(t,e,a){"use strict";function s(t){a("Kqzf")}var r=a("NyMn"),i=a("VmVR"),n=a("VU/8"),o=s,c=n(r.a,i.a,!1,o,"data-v-41809816",null);e.a=c.exports},jrWv:function(t,e){},lU1Y:function(t,e,a){t.exports=a.p+"static/img/Bundesliga_logo.e0c2c48.png"},rS1H:function(t,e,a){"use strict";function s(t){a("8Xsq")}var r=a("MyP8"),i=a("soL1"),n=a("VU/8"),o=s,c=n(r.a,i.a,!1,o,"data-v-6ba121b8",null);e.a=c.exports},soL1:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex-container container"},[a("div",{staticClass:"searchbox-container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"searchbox",attrs:{type:"text",placeholder:"search box"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),t._v(" "),t._l(t.filteredFixtures,function(t,e){return a("FixtureCard",{key:+t,attrs:{"data-index":e,fixture:t}})})],2)},r=[],i={render:s,staticRenderFns:r};e.a=i},xJD8:function(t,e,a){"use strict";e.a={name:"app"}},zOgF:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a12b8a16387c05ef741b.js.map