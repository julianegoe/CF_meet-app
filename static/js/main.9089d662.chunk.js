(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{200:function(e,t,n){},202:function(e,t,n){},355:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(66),i=n.n(r),s=(n(200),n(26)),c=n.n(s),l=n(51),u=n(23),d=n(31),m=n(24),h=n(25),p=(n(202),n(6)),f=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleClick=function(){"Show Details"===a.state.buttonLabel?a.setState({buttonLabel:"Hide Details"}):a.setState({buttonLabel:"Show Details"})},a.state={buttonLabel:"Show Details",datetime:"",date:"",time:""},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=new Date(this.props.event.start.dateTime).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"}),t=new Date(this.props.event.start.dateTime).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"});this.setState({date:t,time:e})}},{key:"render",value:function(){var e=this,t=this.state,n=t.buttonLabel,a=t.time,o=t.date;return Object(p.jsxs)("div",{className:"event",children:[Object(p.jsxs)("p",{className:"location",children:[Object(p.jsx)("i",{style:{marginRight:"5px"},className:"bi bi-geo-alt-fill"}),this.props.event.location]}),Object(p.jsx)("h2",{children:this.props.event.summary}),Object(p.jsxs)("p",{className:"date-time",children:[Object(p.jsx)("i",{style:{marginRight:"5px"},className:"bi bi-calendar3"}),o," - ",a]}),"Hide Details"===n?Object(p.jsxs)("div",{className:"event__Details",children:[Object(p.jsx)("h3",{className:"about-event",children:"About Event"}),Object(p.jsx)("p",{className:"description",children:this.props.event.description})]}):null,Object(p.jsx)("button",{className:"details-btn",onClick:function(){e.handleClick()},children:n})]})}}]),n}(a.Component),v=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props.events.filter((function(t,n){return n<e.props.number}));return Object(p.jsx)("ul",{className:"eventList",children:t.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)(f,{event:e})},e.id)}))})}}]),n}(a.Component),g=n(18),b=n(356),w=n(363),y=n(180);function j(e){var t=e.events,n=Object(a.useState)([]),o=Object(g.a)(n,2),r=o[0],i=o[1];Object(a.useEffect)((function(){i((function(){return s()}))}),[t]);var s=function(){var e=["React","JavaScript","Node","jQuery","AngularJS"].map((function(e,n){var a=t.filter((function(t){return t.summary.includes(e)})).length;return{genre:e,number:a}}));return console.log(e),e};return Object(p.jsx)(b.a,{height:400,children:Object(p.jsx)(w.a,{width:500,height:500,children:Object(p.jsx)(y.a,{data:r,cx:"50%",cy:"50%",labelLine:!1,innerRadius:80,outerRadius:150,fill:"#8884d8",dataKey:"number",label:function(e){var t=e.genre,n=e.percent;if(n>0)return"".concat((100*n).toFixed(0),"% ").concat(t)}})})})}var T=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color,fontSize:a.fontSize}},a.getIcon=function(){if(a.props.text)return a.icon},a.color=null,a.fontSize="0.75rem",a.icon="",a}return Object(d.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"Alert",children:Object(p.jsxs)("p",{style:this.getStyle(),children:[Object(p.jsx)("i",{style:{marginRight:"5px"},className:this.getIcon()}),this.props.text]})})}}]),n}(a.Component),k=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="blue",a.icon="bi bi-info-circle",a}return n}(T),Z=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="orange",a.icon="bi bi-exclamation-diamond",a}return n}(T),x=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="red",a.icon="bi bi-emoji-frown",a}return n}(T),S=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleInput=function(e){var t=e.target.value,n=a.props.locations.filter((function(t){return t.toUpperCase().indexOf(e.target.value.toUpperCase())>-1}));0===n.length?a.setState({query:t,suggestions:n,infoText:"We couldn't find your location. Please enter another one."}):a.setState({query:t,suggestions:n,infoText:""})},a.handleItemClicked=function(e){a.setState({query:e}),a.props.updateEvents(e,null),a.setState({showSuggestions:!1}),a.setState({infoText:""})},a.handleFocus=function(){a.setState({showSuggestions:!0})},a.state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.query,a=t.suggestions,o=t.showSuggestions;return Object(p.jsxs)("div",{className:"CitySearch",children:[Object(p.jsx)(k,{text:this.state.infoText}),Object(p.jsx)("label",{htmlFor:"city",children:"Search for Location: "}),Object(p.jsx)("input",{type:"text",value:n,className:"city",onChange:this.handleInput,onFocus:this.handleFocus}),Object(p.jsxs)("ul",{className:"suggestions",style:o?{}:{display:"none"},children:[a.map((function(t){return Object(p.jsx)("li",{onClick:function(){e.handleItemClicked(t)},children:t},t)})),Object(p.jsx)("li",{onClick:function(){e.handleItemClicked("all")},children:"Show all cities"},"all")]})]})}}]),n}(a.Component),O=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"NumberOfEvents",children:[Object(p.jsx)(x,{text:this.props.errorText}),Object(p.jsx)("label",{htmlFor:"event-number",children:"Number of Events: "}),Object(p.jsx)("input",{id:"event-number",type:"number",defaultValue:this.props.number,onChange:function(t){return e.props.updateNumber(t.target.value)}})]})}}]),n}(a.Component),M=n(189),W=n(98),J=n.n(W),D=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200521T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-21T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200522T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjJUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-22T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-22T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-22T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200523T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjNUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-23T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-23T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-23T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200525T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjVUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-25T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-25T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-25T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200526T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjZUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-26T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-26T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-26T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200527T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjdUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-27T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-27T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-27T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200528T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjhUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-28T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-28T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-28T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200529T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjlUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-29T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-29T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-29T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200530T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MzBUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-30T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-30T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-30T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}];D=JSON.parse(JSON.stringify(D));var q=n(77),E=n.n(q),R=function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,o,r,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,B(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=23;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(o=e.sent){e.next=21;break}return console.log("no token"),e.next=18,J.a.get("https://5x77df5ypj.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 18:return r=e.sent,i=r.data.authUrl,e.abrupt("return",window.location.href=i);case 21:return console.log("there is code"),e.abrupt("return",o&&N(o));case 23:return e.abrupt("return",t);case 24:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(l.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},N=function(){var e=Object(l.a)(c.a.mark((function e(t){var n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,J.a.get("https://5x77df5ypj.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.data.tokens.access_token})).catch((function(e){return e}));case 3:return a=e.sent,console.log(a),a&&localStorage.setItem("access_token",a),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(e){var t=e.map((function(e){return e.location}));return Object(M.a)(new Set(t))},C=function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return E.a.done(),e.abrupt("return",D);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),E.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 8:return e.next=10,R();case 10:if(!(n=e.sent)){e.next=19;break}return L(),e.next=15,J.a.get("https://5x77df5ypj.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/".concat(n));case 15:return(a=e.sent).data.events&&(o=A(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(o))),E.a.done(),e.abrupt("return",a.data.events);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=n(360),H=n(361),F=n(185),U=n(186),Y=n(78),z=n(190),V=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getData=function(){var e=a.state,t=e.locations,n=e.events,o=t.map((function(e){var t=n.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}));return console.log(o),o},a.updateEvents=function(){var e=Object(l.a)(c.a.mark((function e(t){var n,o,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("update events"),n=a.state.number,t=t||"",e.next=5,C();case 5:o=e.sent,"all"===t||n>=o.length?a.setState({events:o}):(r=o.filter((function(e){return e.location===t})),a.setState({events:r}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.updateNumber=function(e){var t="";e<0?t="You can't enter negative numbers.":e>a.state.events.length?t="There are not ".concat(e," events. Please enter a number smaller than ").concat(a.state.events.length,"."):a.setState({number:e}),a.setState({errorText:t})},a.state={events:[],locations:[],number:10,errorText:"",warnText:""},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,window.addEventListener("offline",(function(){e.setState({warnText:"You're offline. The data you see may not be up to date."})})),window.addEventListener("online",(function(){e.setState({warnText:""})})),C().then((function(t){e.mounted&&e.setState({events:t,locations:A(t)})}))}},{key:"componentWillUnmount",value:function(){var e=this;this.mounted=!1,window.removeEventListener("keydown",(function(){e.setState({warnText:"You're offline. The dada you see may not be up to date."})})),window.removeEventListener("online",(function(){e.setState({warnText:""})}))}},{key:"render",value:function(){var e=this.state,t=e.locations,n=e.events,a=e.number,o=e.errorText,r=e.warnText;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("nav",{children:[Object(p.jsx)("div",{className:"logo",children:"Meet-App"}),Object(p.jsx)("ul",{className:"navigation-list",children:Object(p.jsx)("li",{id:"search-nav",className:"navigation-list__item",children:Object(p.jsx)(Z,{text:r})})})]}),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(S,{locations:t,updateEvents:this.updateEvents}),Object(p.jsx)(O,{errorText:o,number:a,updateNumber:this.updateNumber}),Object(p.jsxs)("div",{className:"data-vis-wrapper",children:[Object(p.jsx)(j,{events:n}),Object(p.jsx)(b.a,{height:300,children:Object(p.jsxs)(I.a,{margin:{top:20,right:20,bottom:20,left:20},children:[Object(p.jsx)(H.a,{}),Object(p.jsx)(F.a,{type:"category",dataKey:"city",name:"city"}),Object(p.jsx)(U.a,{allowDecimals:!1,type:"number",dataKey:"number",name:"number of events"}),Object(p.jsx)(Y.a,{}),Object(p.jsx)(z.a,{data:this.getData(),fill:"#8884d8"})]})})]}),Object(p.jsx)(v,{number:a,events:n})]})]})}}]),n}(a.Component),G=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,364)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),o(e),r(e),i(e)}))};n(187).config("b442059d3305495eb2649a7d54249f16").install(),i.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(V,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/CF_meet-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/CF_meet-app","/service-worker.js");G?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):_(t,e)}))}}(),X()}},[[355,1,2]]]);
//# sourceMappingURL=main.9089d662.chunk.js.map