(this.webpackJsonpfrntend=this.webpackJsonpfrntend||[]).push([[0],{186:function(e,t,n){},187:function(e,t,n){},237:function(e,t){},239:function(e,t){},248:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(45),c=n.n(i),o=(n(186),n(187),n(62)),s=n(18),l=n(4),u=n(10),d=n(312),j=n(292),b=n(1),h=Object(j.a)("div")({width:"100%",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#5865F2"}),O=function(e){return Object(b.jsx)(h,{children:Object(b.jsx)(d.a,{sx:{width:700,height:400,bgcolor:"#36393f",borderRadius:"5px",boxShadow:"0 2px 10px 0 rgb(0 0 0 / 20%)",display:"flex",flexDirection:"column",padding:"25px"},children:e.children})})},f=n(257),p=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f.a,{variant:"h5",sx:{color:"white"},children:"Welcome Back!"}),Object(b.jsx)(f.a,{sx:{color:"#b9bbbe"},children:"We are happy that you are with us!"})]})},x=Object(j.a)("div")({display:"flex",justifyContent:"center",flexDirection:"column",width:"100%"}),m=Object(j.a)("p")({color:"#b9bbbe",textTransform:"uppercase",fontWeight:"600",fontSize:"16px"}),v=Object(j.a)("input")({flexGrow:1,height:"40px",border:"1px solid black",borderRadius:"5px",color:"#dcddde",background:"#35393f",margin:0,fontSize:"16px",padding:"0 5px"}),g=function(e){var t=e.value,n=e.setValue,r=e.label,a=e.type,i=e.placeholder;return Object(b.jsxs)(x,{children:[Object(b.jsx)(m,{children:r}),Object(b.jsx)(v,{value:t,onChange:function(e){n(e.target.value)},type:a,placeholder:i})]})},S=function(e){var t=e.mail,n=e.setMail,r=e.password,a=e.setPassword;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(g,{value:t,setValue:n,label:"E-mail",type:"text",placeholder:"Enter e-mail address"}),Object(b.jsx)(g,{value:r,setValue:a,label:"Password",type:"password",placeholder:"Enter password"})]})},y=n(311),w=function(e){var t=e.label,n=e.additionalStyles,r=e.disabled,a=e.onClick;return Object(b.jsx)(y.a,{variant:"contained",sx:{bgcolor:"#5865F2",color:"white",textTransform:"none",fontSize:"16px",fontWeight:500,width:"100%",height:"40px"},style:n||{},disabled:r,onClick:a,children:t})},E=Object(j.a)("span")({color:"#00AFF4",fontWeight:500,cursor:"pointer"}),I=function(e){var t=e.text,n=e.redirectText,r=e.additionalStyles,a=e.redirectHandler;return Object(b.jsxs)(f.a,{sx:{color:"#72767d"},style:r||{},variant:"subtitle2",children:[t,Object(b.jsx)(E,{onClick:a,children:n})]})},C=n(303),k=function(e){var t=e.handleLogin,n=e.isFormValid,r=Object(s.g)();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(C.a,{title:n?"Press to log in!":"Enter correct e-mail address and password should contains between 6 and 12 characters",children:Object(b.jsx)("div",{children:Object(b.jsx)(w,{label:"Log in",additionalStyles:{marginTop:"30px"},disabled:!n,onClick:t})})}),Object(b.jsx)(I,{text:"Need an account? ",redirectText:"Create an account",additionalStyles:{marginTop:"5px"},redirectHandler:function(){r.push("/register")}})]})},T=function(e){return e.length>5&&e.length<13},R=function(e){return/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(e)},D=function(e){return e.length>2&&e.length<13},A=n(15),_=n(16),U=n(32),M=n(141),F=function(){localStorage.clear(),window.location.pathname="/login"},L=n.n(M).a.create({baseURL:"https://thepavankoushik-discord-back.herokuapp.com/api",timeout:1e3});L.interceptors.request.use((function(e){var t=localStorage.getItem("user");if(t){var n=JSON.parse(t).token;e.headers.Authorization="Bearer ".concat(n)}return e}),(function(e){return Promise.reject(e)}));var N=function(){var e=Object(U.a)(Object(_.a)().mark((function e(t){return Object(_.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.post("/auth/login",t);case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",{error:!0,exception:e.t0});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(U.a)(Object(_.a)().mark((function e(t){return Object(_.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.post("/auth/register",t);case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",{error:!0,exception:e.t0});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(U.a)(Object(_.a)().mark((function e(t){return Object(_.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.post("/friend-invitation/invite",t);case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),G(e.t0),e.abrupt("return",{error:!0,exception:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(U.a)(Object(_.a)().mark((function e(t){return Object(_.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.post("/friend-invitation/accept",t);case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),G(e.t0),e.abrupt("return",{error:!0,exception:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(U.a)(Object(_.a)().mark((function e(t){return Object(_.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.post("/friend-invitation/reject",t);case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),G(e.t0),e.abrupt("return",{error:!0,exception:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),G=function(e){var t,n=null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.status;n&&(401===n||403===n)&&F()},V={OPEN_ALERT_MESSAGE:"ALERT.OPEN_ALERT_MESSAGE",CLOSE_ALERT_MESSAGE:"ALERT.CLOSE_ALERT_MESSAGE"},J=function(e){return{type:V.OPEN_ALERT_MESSAGE,content:e}},B=function(){return{type:V.CLOSE_ALERT_MESSAGE}},Y=V,Z="AUTH.SET_USER_DETAILS",q=function(e){return{login:function(t,n){return e($(t,n))},register:function(t,n){return e(Q(t,n))},setUserDetails:function(t){return e(K(t))}}},K=function(e){return{type:Z,userDetails:e}},$=function(e,t){return function(){var n=Object(U.a)(Object(_.a)().mark((function n(r){var a,i,c,o,s;return Object(_.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,N(e);case 2:(a=n.sent).error?r(J(null===a||void 0===a||null===(i=a.exception)||void 0===i||null===(c=i.response)||void 0===c?void 0:c.data)):(o=null===a||void 0===a?void 0:a.data,s=o.userDetails,localStorage.setItem("user",JSON.stringify(s)),r(K(s)),t.push("/dashboard"));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},Q=function(e,t){return function(){var n=Object(U.a)(Object(_.a)().mark((function n(r){var a,i,c,o,s;return Object(_.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,W(e);case 2:a=n.sent,console.log(a),a.error?r(J(null===a||void 0===a||null===(i=a.exception)||void 0===i||null===(c=i.response)||void 0===c?void 0:c.data)):(o=null===a||void 0===a?void 0:a.data,s=o.userDetails,localStorage.setItem("user",JSON.stringify(s)),r(K(s)),t.push("/dashboard"));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},X=Object(A.b)(null,(function(e){return Object(l.a)({},q(e))}))((function(e){var t=e.login,n=Object(s.g)(),a=Object(r.useState)(""),i=Object(u.a)(a,2),c=i[0],o=i[1],l=Object(r.useState)(""),d=Object(u.a)(l,2),j=d[0],h=d[1],f=Object(r.useState)(!1),x=Object(u.a)(f,2),m=x[0],v=x[1];Object(r.useEffect)((function(){v(function(e){var t=e.mail,n=e.password,r=R(t),a=T(n);return r&&a}({mail:c,password:j}))}),[c,j,v]);return Object(b.jsxs)(O,{children:[Object(b.jsx)(p,{}),Object(b.jsx)(S,{mail:c,setMail:o,password:j,setPassword:h}),Object(b.jsx)(k,{isFormValid:m,handleLogin:function(){t({mail:c,password:j},n)}})]})})),ee=function(e){var t=e.mail,n=e.setMail,r=e.username,a=e.setUsername,i=e.password,c=e.setPassword;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(g,{value:t,setValue:n,label:"E-mail address",type:"text",placeholder:"Enter e-mail address"}),Object(b.jsx)(g,{value:r,setValue:a,label:"Username",type:"text",placeholder:"Enter a username"}),Object(b.jsx)(g,{value:i,setValue:c,label:"Password",type:"password",placeholder:"Enter password"})]})},te=function(e){var t=e.handleRegister,n=e.isFormValid,r=Object(s.g)();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(C.a,{title:n?"Press to register!":"Username should contains between 3 and 12 characters and password should contains between 6 and 12 character. Also correct e-mail address should provided",children:Object(b.jsx)("div",{children:Object(b.jsx)(w,{label:"Register",additionalStyles:{marginTop:"30px"},disabled:!n,onClick:t})})}),Object(b.jsx)(I,{text:"",redirectText:"Already have an account ?",additionalStyles:{marginTop:"5px"},redirectHandler:function(){r.push("/login")}})]})},ne=Object(A.b)(null,(function(e){return Object(l.a)({},q(e))}))((function(e){var t=e.register,n=Object(s.g)(),a=Object(r.useState)(""),i=Object(u.a)(a,2),c=i[0],o=i[1],l=Object(r.useState)(""),d=Object(u.a)(l,2),j=d[0],h=d[1],p=Object(r.useState)(""),x=Object(u.a)(p,2),m=x[0],v=x[1],g=Object(r.useState)(!1),S=Object(u.a)(g,2),y=S[0],w=S[1];return Object(r.useEffect)((function(){w(function(e){var t=e.mail,n=e.password,r=e.username;return R(t)&&T(n)&&D(r)}({mail:c,username:j,password:m}))}),[c,j,m,w]),Object(b.jsxs)(O,{children:[Object(b.jsx)(f.a,{variant:"h5",sx:{color:"white "},children:"Create an account"}),Object(b.jsx)(ee,{mail:c,setMail:o,username:j,setUsername:h,password:m,setPassword:v}),Object(b.jsx)(te,{handleRegister:function(){t({mail:c,password:m,username:j},n)},isFormValid:y})]})})),re=n(142),ae=n.n(re),ie=function(){return Object(b.jsx)(y.a,{style:{width:"48px",height:"48px",borderRadius:"16px",margin:0,padding:0,minWidth:0,marginTop:"10px",color:"white",backgroundColor:"#5865F2"},children:Object(b.jsx)(ae.a,{})})},ce=n(149),oe=n.n(ce),se=n(143),le=n(78),ue=n(144),de={userDetails:null},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;return t.type===Z?Object(l.a)(Object(l.a)({},e),{},{userDetails:t.userDetails}):e},be={showAlertMessage:!1,alertMessageContent:null},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y.OPEN_ALERT_MESSAGE:return Object(l.a)(Object(l.a)({},e),{},{showAlertMessage:!0,alertMessageContent:t.content});case Y.CLOSE_ALERT_MESSAGE:return Object(l.a)(Object(l.a)({},e),{},{showAlertMessage:!1,alertMessageContent:null});default:return e}},Oe="FRIENDS.SET_FRIENDS",fe="FRIENDS.SET_PENDING_FRIENDS_INVITATIONS",pe="FRIENDS.SET_ONLINE_USERS",xe=function(e){return{sendFriendInvitation:function(t,n){return e(me(t,n))},acceptFriendInvitation:function(t){return e(ve(t))},rejectFriendInvitation:function(t){return e(ge(t))}}},me=function(e,t){return function(){var n=Object(U.a)(Object(_.a)().mark((function n(r){var a,i,c;return Object(_.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,P(e);case 2:(a=n.sent).error?r(J(null===(i=a.exception)||void 0===i||null===(c=i.response)||void 0===c?void 0:c.data)):(r(J("Invitation has been sent!")),t());case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},ve=function(e){return function(){var t=Object(U.a)(Object(_.a)().mark((function t(n){var r,a,i;return Object(_.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z(e);case 2:(r=t.sent).error?n(J(null===(a=r.exception)||void 0===a||null===(i=a.response)||void 0===i?void 0:i.data)):n(J("Invitation accepted!"));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},ge=function(e){return function(){var t=Object(U.a)(Object(_.a)().mark((function t(n){var r,a,i;return Object(_.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H(e);case 2:(r=t.sent).error?n(J(null===(a=r.exception)||void 0===a||null===(i=a.response)||void 0===i?void 0:i.data)):n(J("Invitation rejected!"));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Se={friends:[],pendingFriendsInvitations:[],onlineUsers:[]},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case fe:return Object(l.a)(Object(l.a)({},e),{},{pendingFriendsInvitations:t.pendingFriendsInvitations});case Oe:return Object(l.a)(Object(l.a)({},e),{},{friends:t.friends});case pe:return Object(l.a)(Object(l.a)({},e),{},{onlineUsers:t.onlineUsers});default:return e}},we="DIRECT",Ee="CHAT.SET_CHOSEN_CHAT_DETAILS",Ie="CHAT.SET_MESSAGES",Ce=function(e,t){return{type:Ee,chatType:t,chatDetails:e}},ke={chosenChatDetails:null,chatType:null,messages:[]},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ee:return Object(l.a)(Object(l.a)({},e),{},{chosenChatDetails:t.chatDetails,chatType:t.chatType,messages:[]});case Ie:return Object(l.a)(Object(l.a)({},e),{},{messages:t.messages});default:return e}},Re="ROOM.OPEN_ROOM",De="ROOM.SET_ROOM_DETAILS",Ae="ROOM.SET_ACTIVE_ROOMS",_e="ROOM.SET_LOCAL_STREAM",Ue="ROOM.SET_REMOTE_STREAMS",Me="ROOM.SET_AUDIO_ONLY",Fe="ROOM.SET_SCREEN_SHARE_STREAM",Le="ROOM.SET_IS_USER_JOINED_WITH_ONLY_AUDIO",Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{type:Re,isUserRoomCreator:e,isUserInRoom:t}},We=function(e){return{setAudioOnly:function(t){return e(He(t))},setScreenSharingStream:function(t){e(Ve(t))}}},Pe=function(e){return{type:De,roomDetails:e}},ze=function(e){return{type:_e,localStream:e}},He=function(e){return{type:Me,audioOnly:e}},Ge=function(e){return{type:Ue,remoteStreams:e}},Ve=function(e){return{type:Fe,isScreenSharingActive:!!e,screenSharingStream:e||null}},Je=function(e){return{type:Le,isUserJoinedWithOnlyAudio:e}},Be={isUserInRoom:!1,isUserRoomCreator:!1,roomDetails:null,activeRooms:[],localStream:null,remoteStreams:[],audioOnly:!1,screenSharingStream:null,isScreenSharingActive:!1,isUserJoinedWithOnlyAudio:!1},Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Re:return Object(l.a)(Object(l.a)({},e),{},{isUserInRoom:t.isUserInRoom,isUserRoomCreator:t.isUserRoomCreator});case De:return Object(l.a)(Object(l.a)({},e),{},{roomDetails:t.roomDetails});case Ae:return Object(l.a)(Object(l.a)({},e),{},{activeRooms:t.activeRooms});case _e:return Object(l.a)(Object(l.a)({},e),{},{localStream:t.localStream});case Me:return Object(l.a)(Object(l.a)({},e),{},{audioOnly:t.audioOnly});case Ue:return Object(l.a)(Object(l.a)({},e),{},{remoteStreams:t.remoteStreams});case Fe:return Object(l.a)(Object(l.a)({},e),{},{screenSharingStream:t.screenSharingStream,isScreenSharingActive:t.isScreenSharingActive});case Le:return Object(l.a)(Object(l.a)({},e),{},{isUserJoinedWithOnlyAudio:t.isUserJoinedWithOnlyAudio});default:return e}},Ze=Object(le.combineReducers)({auth:je,alert:he,friends:ye,chat:Te,room:Ye}),qe=Object(le.createStore)(Ze,Object(se.composeWithDevTools)(Object(le.applyMiddleware)(ue.a))),Ke=n(163),$e=function(e){var t=e.participants,n=e.usersInCoversation,r=e.messages;t.every((function(e){return n.includes(e)}))&&qe.dispatch(function(e){return{type:Ie,messages:e}}(r))},Qe=n(27),Xe=n(148),et=n.n(Xe),tt={audio:!0,video:!1},nt={video:!0,audio:!0},rt=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=e?tt:nt;navigator.mediaDevices.getUserMedia(n).then((function(e){qe.dispatch(ze(e)),t()})).catch((function(e){console.log(e),console.log("Cannot get an access to local stream")}))},at={},it=function(e,t){var n=qe.getState().room.localStream;t?console.log("preparing new peer connection as initiator"):console.log("preparing new peer connection as not initiator"),at[e]=new et.a({initiator:t,config:(console.warn("Using only STUN server"),{iceServers:[{urls:"stun:stun.l.google.com:19302"}]}),stream:n}),at[e].on("signal",(function(t){ut({signal:t,connUserSocketId:e})})),at[e].on("stream",(function(t){console.log("remote stream came from other user"),console.log("direct connection has been established"),t.connUserSocketId=e,ct(t)}))},ct=function(e){var t=qe.getState().room.remoteStreams,n=[].concat(Object(Qe.a)(t),[e]);qe.dispatch(Ge(n))},ot=function(e){for(var t in at)for(var n in at[t].streams[0].getTracks())for(var r in e.getTracks())if(at[t].streams[0].getTracks()[n].kind===e.getTracks()[r].kind){at[t].replaceTrack(at[t].streams[0].getTracks()[n],e.getTracks()[r],at[t].streams[0]);break}},st=null,lt=function(e){var t=e.token;(st=Object(Ke.a)("http://localhost:5002",{auth:{token:t}})).on("connect",(function(){console.log("succesfully connected with socket.io server"),console.log(st.id)})),st.on("friends-invitations",(function(e){var t=e.pendingInvitations;qe.dispatch({type:fe,pendingFriendsInvitations:t})})),st.on("friends-list",(function(e){var t=e.friends;qe.dispatch(function(e){return{type:Oe,friends:e}}(t))})),st.on("online-users",(function(e){var t=e.onlineUsers;qe.dispatch(function(e){return{type:pe,onlineUsers:e}}(t))})),st.on("direct-chat-history",(function(e){!function(e){var t,n=e.participants,r=e.messages,a=null===(t=qe.getState().chat.chosenChatDetails)||void 0===t?void 0:t.id,i=qe.getState().auth.userDetails._id;a&&i&&$e({participants:n,usersInCoversation:[a,i],messages:r})}(e)})),st.on("room-create",(function(e){jt(e)})),st.on("active-rooms",(function(e){bt(e)})),st.on("conn-prepare",(function(e){var t=e.connUserSocketId;it(t,!1),st.emit("conn-init",{connUserSocketId:t})})),st.on("conn-init",(function(e){var t=e.connUserSocketId;it(t,!0)})),st.on("conn-signal",(function(e){!function(e){var t=e.connUserSocketId,n=e.signal;at[t]&&at[t].signal(n)}(e)})),st.on("room-participant-left",(function(e){console.log("user left room"),function(e){var t=e.connUserSocketId;at[t]&&(at[t].destroy(),delete at[t]);var n=qe.getState().room.remoteStreams.filter((function(e){return e.connUserSocketId!==t}));qe.dispatch(Ge(n))}(e)}))},ut=function(e){st.emit("conn-signal",e)},dt=function(){var e=qe.getState().room.audioOnly;rt(e,(function(){qe.dispatch(Ne(!0,!0));var e=qe.getState().room.audioOnly;qe.dispatch(Je(e)),st.emit("room-create")}))},jt=function(e){var t=e.roomDetails;qe.dispatch(Pe(t))},bt=function(e){var t,n=e.activeRooms,r=qe.getState().friends.friends,a=[],i=null===(t=qe.getState().auth.userDetails)||void 0===t?void 0:t._id;n.forEach((function(e){e.roomCreator.userId===i?a.push(Object(l.a)(Object(l.a)({},e),{},{creatorUsername:"Me"})):r.forEach((function(t){t.id===e.roomCreator.userId&&a.push(Object(l.a)(Object(l.a)({},e),{},{creatorUsername:t.username}))}))})),qe.dispatch(function(e){return{type:Ae,activeRooms:e}}(a))},ht=function(e){var t=qe.getState().room.audioOnly;rt(t,(function(){qe.dispatch(Pe({roomId:e})),qe.dispatch(Ne(!1,!0));var t,n=qe.getState().room.audioOnly;qe.dispatch(Je(n)),t={roomId:e},st.emit("room-join",t)}))},Ot=function(){var e=qe.getState().room.roomDetails.roomId,t=qe.getState().room.localStream;t&&(t.getTracks().forEach((function(e){return e.stop()})),qe.dispatch(ze(null)));var n,r=qe.getState().room.screenSharingStream;r&&(r.getTracks().forEach((function(e){return e.stop()})),qe.dispatch(Ve(null))),qe.dispatch(Ge([])),Object.entries(at).forEach((function(e){var t=e[0];at[t]&&(at[t].destroy(),delete at[t])})),n={roomId:e},st.emit("room-leave",n),qe.dispatch(Pe(null)),qe.dispatch(Ne(!1,!1))},ft=function(e){var t=e.isUserInRoom;return Object(b.jsx)(y.a,{disabled:t,onClick:function(){dt()},style:{width:"48px",height:"48px",borderRadius:"16px",margin:0,padding:0,minWidth:0,marginTop:"10px",color:"white",backgroundColor:"#5865F2"},children:Object(b.jsx)(oe.a,{})})},pt=Object(j.a)("div")({height:"42px",width:"42px",backgroundColor:"#5865f2",borderRadius:"42px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px",fontWeight:"700",color:"white"}),xt=function(e){var t=e.username,n=e.large;return Object(b.jsx)(pt,{style:n?{height:"80px",width:"80px"}:{},children:t.substring(0,2)})},mt=function(e){var t=e.creatorUsername,n=e.roomId,r=e.amountOfParticipants,a=e.isUserInRoom,i=r>3,c="Cretor: ".concat(t,". Connected: ").concat(r);return Object(b.jsx)(C.a,{title:c,children:Object(b.jsx)("div",{children:Object(b.jsx)(y.a,{style:{width:"48px",height:"48px",borderRadius:"16px",margin:0,padding:0,minWidth:0,marginTop:"10px",color:"white",backgroundColor:"#5865F2"},disabled:i||a,onClick:function(){r<4&&ht(n)},children:Object(b.jsx)(xt,{username:t})})})})},vt=Object(j.a)("div")({width:"72px",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"#202225"}),gt=Object(A.b)((function(e){var t=e.room;return Object(l.a)({},t)}))((function(e){var t=e.activeRooms,n=e.isUserInRoom;return Object(b.jsxs)(vt,{children:[Object(b.jsx)(ie,{}),Object(b.jsx)(ft,{isUserInRoom:n}),t.map((function(e){return Object(b.jsx)(mt,{roomId:e.roomId,creatorUsername:e.creatorUsername,amountOfParticipants:e.participants.length,isUserInRoom:n},e.roomId)}))]})})),St=n(313),yt=n(302),wt=n(318),Et=n(316),It=n(317),Ct=Object(A.b)(null,(function(e){return Object(l.a)({},xe(e))}))((function(e){var t=e.isDialogOpen,n=e.closeDialogHandler,a=e.sendFriendInvitation,i=void 0===a?function(){}:a,c=Object(r.useState)(""),o=Object(u.a)(c,2),s=o[0],l=o[1],d=Object(r.useState)(""),j=Object(u.a)(d,2),h=j[0],O=j[1],p=function(){n(),l("")};return Object(r.useEffect)((function(){O(R(s))}),[s,O]),Object(b.jsx)("div",{children:Object(b.jsxs)(St.a,{open:t,onClose:p,children:[Object(b.jsx)(yt.a,{children:Object(b.jsx)(f.a,{children:"Invite a Friend"})}),Object(b.jsxs)(Et.a,{children:[Object(b.jsx)(It.a,{children:Object(b.jsx)(f.a,{children:"Enter e-mail address of friend which you would like to invite"})}),Object(b.jsx)(g,{label:"Mail",type:"text",value:s,setValue:l,placeholder:"Enter mail address"})]}),Object(b.jsx)(wt.a,{children:Object(b.jsx)(w,{onClick:function(){i({targetMailAddress:s},p)},disabled:!h,label:"Send",additionalStyles:{marginLeft:"15px",marginRight:"15px",marginBottom:"10px"}})})]})})})),kt={marginTop:"10px",marginLeft:"5px",width:"80%",height:"30px",background:"#3ba55d"},Tt=function(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(w,{additionalStyles:kt,label:"Add Friend",onClick:function(){a(!0)}}),Object(b.jsx)(Ct,{isDialogOpen:n,closeDialogHandler:function(){a(!1)}})]})},Rt=function(e){var t=e.title;return Object(b.jsx)(f.a,{sx:{textTransform:"uppercase",color:"#8e9297",fontSize:"14px",marginTop:"10px"},children:t})},Dt=n(150),At=n.n(Dt),_t=function(){return Object(b.jsx)(d.a,{sx:{color:"#3ba55d",display:"flex",alignItems:"center",position:"absolute",right:"5px"},children:Object(b.jsx)(At.a,{})})},Ut=Object(A.b)(null,(function(e){return Object(l.a)({},function(e){return{setChosenChatDetails:function(t,n){return e(Ce(t,n))}}}(e))}))((function(e){var t=e.id,n=e.username,r=e.isOnline,a=e.setChosenChatDetails;return Object(b.jsxs)(y.a,{onClick:function(){a({id:t,name:n},we)},style:{width:"100%",height:"42px",marginTop:"10px",display:"flex",alignItems:"center",justifyContent:"flex-start",textTransform:"none",color:"black",position:"relative"},children:[Object(b.jsx)(xt,{username:n}),Object(b.jsx)(f.a,{style:{marginLeft:"7px",fontWeight:700,color:"#8e9297"},variant:"subtitle1",align:"left",children:n}),r&&Object(b.jsx)(_t,{})]})})),Mt=Object(j.a)("div")({flexGrow:1,width:"100%"}),Ft=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.forEach((function(e){var n=t.find((function(t){return t.userId===e.id}));e.isOnline=!!n})),e},Lt=Object(A.b)((function(e){var t=e.friends;return Object(l.a)({},t)}))((function(e){var t=e.friends,n=e.onlineUsers;return Object(b.jsx)(Mt,{children:Ft(t,n).map((function(e){return Object(b.jsx)(Ut,{username:e.username,id:e.id,isOnline:e.isOnline},e.id)}))})})),Nt=n(151),Wt=n.n(Nt),Pt=n(152),zt=n.n(Pt),Ht=n(319),Gt=function(e){var t=e.disabled,n=e.acceptInvitationHandler,r=e.rejectInvitationHandler;return Object(b.jsxs)(d.a,{sx:{display:"flex"},children:[Object(b.jsx)(Ht.a,{style:{color:"white"},disabled:t,onClick:n,children:Object(b.jsx)(Wt.a,{})}),Object(b.jsx)(Ht.a,{style:{color:"white"},disabled:t,onClick:r,children:Object(b.jsx)(zt.a,{})})]})},Vt=Object(A.b)(null,(function(e){return Object(l.a)({},xe(e))}))((function(e){var t=e.id,n=e.username,a=e.mail,i=e.acceptFriendInvitation,c=void 0===i?function(){}:i,o=e.rejectFriendInvitation,s=void 0===o?function(){}:o,l=Object(r.useState)(!1),j=Object(u.a)(l,2),h=j[0],O=j[1];return Object(b.jsx)(C.a,{title:a,children:Object(b.jsx)("div",{style:{width:"100%"},children:Object(b.jsxs)(d.a,{sx:{width:"100%",height:"42px",marginTop:"10px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(b.jsx)(xt,{username:n}),Object(b.jsx)(f.a,{sx:{marginLeft:"7px",fontWeight:700,color:"#8e9297",flexGrow:1},variant:"subtitle1",children:n}),Object(b.jsx)(Gt,{disabled:h,acceptInvitationHandler:function(){c({id:t}),O(!0)},rejectInvitationHandler:function(){s({id:t}),O(!0)}})]})})})})),Jt=Object(j.a)("div")({width:"100%",height:"22%",display:"flex",flexDirection:"column",alignItems:"center",overflow:"auto"}),Bt=Object(A.b)((function(e){var t=e.friends;return Object(l.a)({},t)}))((function(e){var t=e.pendingFriendsInvitations;return Object(b.jsx)(Jt,{children:t.map((function(e){return Object(b.jsx)(Vt,{id:e._id,username:e.senderId.username,mail:e.senderId.mail},e._id)}))})})),Yt=Object(j.a)("div")({width:"224px",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"#2F3136"}),Zt=function(){return Object(b.jsxs)(Yt,{children:[Object(b.jsx)(Tt,{}),Object(b.jsx)(Rt,{title:"Private Messages"}),Object(b.jsx)(Lt,{}),Object(b.jsx)(Rt,{title:"Invitations"}),Object(b.jsx)(Bt,{})]})},qt=Object(j.a)("div")({flexGrow:1,height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}),Kt=function(){return Object(b.jsx)(qt,{children:Object(b.jsx)(f.a,{variant:"h6",sx:{color:"white"},children:"To start chatting - choose conversation"})})},$t=Object(j.a)("div")({width:"98%",display:"column",marginTop:"10px"}),Qt=function(e){var t=e.name,n=void 0===t?"":t;return Object(b.jsxs)($t,{children:[Object(b.jsx)(xt,{large:!0,username:n}),Object(b.jsx)(f.a,{variant:"h4",sx:{fontWeight:"bold",color:"white",marginLeft:"5px",marginRight:"5px"},children:n}),Object(b.jsxs)(f.a,{sx:{color:"#b9bbbe",marginLeft:"5px",marginRight:"5px"},children:["This is the beginning of your conversation with ",n]})]})},Xt=Object(j.a)("div")({width:"97%",display:"flex",marginTop:"10px"}),en=Object(j.a)("div")({width:"70px"}),tn=Object(j.a)("div")({display:"flex",flexDirection:"column"}),nn=Object(j.a)("div")({color:"#DCDDDE"}),rn=Object(j.a)("div")({color:"#DCDDDE",width:"97%"}),an=Object(j.a)("span")({marginLeft:"70px"}),cn=function(e){var t=e.content,n=e.sameAuthor,r=e.username,a=e.date,i=e.sameDay;return n&&i?Object(b.jsx)(rn,{children:Object(b.jsx)(an,{children:t})}):Object(b.jsxs)(Xt,{children:[Object(b.jsx)(en,{children:Object(b.jsx)(xt,{username:r})}),Object(b.jsxs)(tn,{children:[Object(b.jsxs)(f.a,{style:{fontSize:"16px",color:"white"},children:[r," ",Object(b.jsx)("span",{style:{fontSize:"12px",color:"#72767d"},children:a})]}),Object(b.jsx)(nn,{children:t})]})]})},on=Object(j.a)("div")({width:"95%",backgroundColor:"#b9bbbe",height:"1px",position:"relative",marginTop:"20px",marginBottom:"10px"}),sn=Object(j.a)("span")({backgroundColor:"#36393f",position:"absolute",left:"45%",top:"-10px",color:"#b9bbbe",padding:"0 5px",fontSize:"14px"}),ln=function(e){var t=e.date;return Object(b.jsx)(on,{children:Object(b.jsx)(sn,{children:t})})},un=Object(j.a)("div")({height:"calc(100% - 60px)",overflow:"auto",display:"flex",flexDirection:"column",alignItems:"center"}),dn=function(e,t){var n={mm:e.getMonth()+1,dd:e.getDate(),yy:e.getFullYear().toString().slice(-2),yyyy:e.getFullYear()};return t.replace(/mm|dd|yy|yyy/gi,(function(e){return n[e]}))},jn=Object(A.b)((function(e){var t=e.chat;return Object(l.a)({},t)}))((function(e){var t=e.chosenChatDetails,n=e.messages;return Object(b.jsxs)(un,{children:[Object(b.jsx)(Qt,{name:null===t||void 0===t?void 0:t.name}),n.map((function(e,t){var r=t>0&&n[t].author._id===n[t-1].author._id,a=t>0&&dn(new Date(e.date),"dd/mm/yy")===dn(new Date(n[t-1].date),"dd/mm/yy");return Object(b.jsxs)("div",{style:{width:"97%"},children:[(!a||0===t)&&Object(b.jsx)(ln,{date:dn(new Date(e.date),"dd/mm/yy")}),Object(b.jsx)(cn,{content:e.content,username:e.author.username,sameAuthor:r,date:dn(new Date(e.date),"dd/mm/yy"),sameDay:a},e._id)]},e._id)}))]})})),bn=Object(j.a)("div")({height:"60px",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}),hn=Object(j.a)("input")({backgroundColor:"#2f3136",width:"98%",height:"44px",color:"white",border:"none",borderRadius:"8px",fontSize:"14px",padding:"0 10px"}),On=Object(A.b)((function(e){var t=e.chat;return Object(l.a)({},t)}))((function(e){var t=e.chosenChatDetails,n=Object(r.useState)(""),a=Object(u.a)(n,2),i=a[0],c=a[1],o=function(){var e;i.length>0&&(e={receiverUserId:t.id,content:i},console.log(e),st.emit("direct-message",e),c(""))};return Object(b.jsx)(bn,{children:Object(b.jsx)(hn,{placeholder:"Write message to ".concat(t.name),value:i,onChange:function(e){c(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&o()}})})})),fn=Object(j.a)("div")({flexGrow:1}),pn=function(e){var t=e.chosenChatDetails;return Object(r.useEffect)((function(){var e;e={receiverUserId:t.id},st.emit("direct-chat-history",e)}),[t]),Object(b.jsxs)(fn,{children:[Object(b.jsx)(jn,{}),Object(b.jsx)(On,{})]})},xn=Object(j.a)("div")({flexGrow:1,backgroundColor:"#36393f",marginTop:"48px",display:"flex"}),mn=Object(A.b)((function(e){var t=e.chat;return Object(l.a)({},t)}))((function(e){var t=e.chosenChatDetails;return Object(b.jsx)(xn,{children:t?Object(b.jsx)(pn,{chosenChatDetails:t}):Object(b.jsx)(Kt,{})})})),vn=n(305),gn=n(309),Sn=n(153),yn=n.n(Sn),wn=Object(A.b)((function(e){var t=e.room;return Object(l.a)({},t)}),(function(e){return Object(l.a)({},We(e))}))((function(e){var t=e.audioOnly,n=e.setAudioOnly,a=r.useState(null),i=Object(u.a)(a,2),c=i[0],o=i[1],s=Boolean(c);return Object(b.jsxs)("div",{children:[Object(b.jsx)(Ht.a,{onClick:function(e){o(e.currentTarget)},style:{color:"white"},children:Object(b.jsx)(yn.a,{})}),Object(b.jsxs)(vn.a,{id:"basic-menu",anchorEl:c,open:s,onClose:function(){o(null)},MenuListProps:{"aria-labelledby":"basic-button"},children:[Object(b.jsx)(gn.a,{onClick:F,children:"Logout"}),Object(b.jsx)(gn.a,{onClick:function(){n(!t)},children:t?"Audio Only Enabled":"Audio Only Disabled"})]})]})})),En=Object(A.b)((function(e){var t;return{name:null===(t=e.chat.chosenChatDetails)||void 0===t?void 0:t.name}}))((function(e){var t=e.name;return Object(b.jsx)(f.a,{sx:{fontSize:"16px",color:"white",fontWeight:"bold"},children:"".concat(t?"Chosen conversation: ".concat(t):"")})})),In=Object(j.a)("div")({position:"absolute",right:"0",top:"0",height:"48px",borderBottom:"1px solid black",backgroundColor:"#36393f",width:"calc(100% - 326px)",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 15px"}),Cn=function(){return Object(b.jsxs)(In,{children:[Object(b.jsx)(En,{}),Object(b.jsx)(wn,{})]})},kn=n(155),Tn=n.n(kn),Rn=n(154),Dn=n.n(Rn),An=Object(j.a)("div")({position:"absolute",bottom:"10px",right:"10px"}),_n=function(e){var t=e.isRoomMinimized,n=e.handleRoomResize;return Object(b.jsx)(An,{children:Object(b.jsx)(Ht.a,{style:{color:"white"},onClick:n,children:t?Object(b.jsx)(Dn.a,{}):Object(b.jsx)(Tn.a,{})})})},Un=Object(j.a)("div")({height:"50%",width:"50%",backgroundColor:"black",borderRadius:"8px"}),Mn=Object(j.a)("video")({width:"100%",height:"100%"}),Fn=function(e){var t=e.stream,n=e.isLocalStream,a=Object(r.useRef)();return Object(r.useEffect)((function(){var e=a.current;e.srcObject=t,e.onloadedmetadata=function(){e.play()}}),[t]),Object(b.jsx)(Un,{children:Object(b.jsx)(Mn,{ref:a,autoPlay:!0,muted:!!n})})},Ln=Object(j.a)("div")({height:"85%",width:"100%",display:"flex",flexWrap:"wrap"}),Nn=Object(A.b)((function(e){var t=e.room;return Object(l.a)({},t)}))((function(e){var t=e.localStream,n=e.remoteStreams,r=e.screenSharingStream;return Object(b.jsxs)(Ln,{children:[Object(b.jsx)(Fn,{stream:r||t,isLocalStream:!0}),n.map((function(e){return Object(b.jsx)(Fn,{stream:e},e.id)}))]})})),Wn=n(156),Pn=n.n(Wn),zn=n(157),Hn=n.n(zn),Gn=function(e){var t=e.localStream,n=Object(r.useState)(!0),a=Object(u.a)(n,2),i=a[0],c=a[1];return Object(b.jsx)(Ht.a,{onClick:function(){t.getVideoTracks()[0].enabled=!i,c(!i)},style:{color:"white"},children:i?Object(b.jsx)(Pn.a,{}):Object(b.jsx)(Hn.a,{})})},Vn=n(158),Jn=n.n(Vn),Bn=n(159),Yn=n.n(Bn),Zn=function(e){var t=e.localStream,n=Object(r.useState)(!0),a=Object(u.a)(n,2),i=a[0],c=a[1];return Object(b.jsx)(Ht.a,{onClick:function(){t.getAudioTracks()[0].enabled=!i,c(!i)},style:{color:"white"},children:i?Object(b.jsx)(Jn.a,{}):Object(b.jsx)(Yn.a,{})})},qn=n(160),Kn=n.n(qn),$n=function(){return Object(b.jsx)(Ht.a,{onClick:function(){Ot()},style:{color:"white"},children:Object(b.jsx)(Kn.a,{})})},Qn=n(162),Xn=n.n(Qn),er=n(161),tr=n.n(er),nr={audio:!1,video:!0},rr=function(e){var t=e.localStream,n=e.screenSharingStream,r=e.setScreenSharingStream,a=e.isScreenSharingActive,i=function(){var e=Object(U.a)(Object(_.a)().mark((function e(){var i;return Object(_.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=14;break}return i=null,e.prev=2,e.next=5,navigator.mediaDevices.getDisplayMedia(nr);case 5:i=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log("error occured when trying to get an access to screen share stream");case 11:i&&(r(i),ot(i)),e.next=17;break;case 14:ot(t),n.getTracks().forEach((function(e){return e.stop()})),r(null);case 17:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(){return e.apply(this,arguments)}}();return Object(b.jsx)(Ht.a,{onClick:i,style:{color:"white"},children:a?Object(b.jsx)(tr.a,{}):Object(b.jsx)(Xn.a,{})})},ar=Object(j.a)("div")({height:"15%",width:"100%",backgroundColor:"#5865f2",borderTopLeftRadius:"8px",borderTopRightRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center"}),ir=Object(A.b)((function(e){var t=e.room;return Object(l.a)({},t)}),(function(e){return Object(l.a)({},We(e))}))((function(e){var t=e.localStream,n=e.isUserJoinedWithOnlyAudio;return Object(b.jsxs)(ar,{children:[!n&&Object(b.jsx)(rr,Object(l.a)({},e)),Object(b.jsx)(Zn,{localStream:t}),Object(b.jsx)($n,{}),!n&&Object(b.jsx)(Gn,{localStream:t})]})})),cr=Object(j.a)("div")({position:"absolute",borderRadius:"8px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#202225"}),or={width:"100%",height:"100vh"},sr={bottom:"0px",right:"0px",width:"30%",height:"40vh"},lr=function(){var e=Object(r.useState)(!0),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(b.jsxs)(cr,{style:n?sr:or,children:[Object(b.jsx)(Nn,{}),Object(b.jsx)(ir,{}),Object(b.jsx)(_n,{isRoomMinimized:n,handleRoomResize:function(){a(!n)}})]})},ur=Object(j.a)("div")({width:"100%",height:"100vh",display:"flex"}),dr=Object(A.b)((function(e){var t=e.room;return Object(l.a)({},t)}),(function(e){return Object(l.a)({},q(e))}))((function(e){var t=e.setUserDetails,n=e.isUserInRoom;return Object(r.useEffect)((function(){var e=localStorage.getItem("user");e?(t(JSON.parse(e)),lt(JSON.parse(e))):F()}),[t]),Object(b.jsxs)(ur,{children:[Object(b.jsx)(gt,{}),Object(b.jsx)(Zt,{}),Object(b.jsx)(mn,{}),Object(b.jsx)(Cn,{}),n&&Object(b.jsx)(lr,{})]})})),jr=n(306),br=n(307),hr=Object(A.b)((function(e){var t=e.alert;return Object(l.a)({},t)}),(function(e){return Object(l.a)({},function(e){return{openAlertMessage:function(t){return e(J(t))},closeAlertMessage:function(){return e(B())}}}(e))}))((function(e){var t=e.showAlertMessage,n=e.closeAlertMessage,r=e.alertMessageContent;return Object(b.jsx)(br.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:t,onClose:n,autoHideDuration:6e3,children:Object(b.jsx)(jr.a,{severity:"info",children:r})})}));var Or=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(o.a,{children:Object(b.jsxs)(s.d,{children:[Object(b.jsx)(s.b,{exact:!0,path:"/login",children:Object(b.jsx)(X,{})}),Object(b.jsx)(s.b,{exact:!0,path:"/register",children:Object(b.jsx)(ne,{})}),Object(b.jsx)(s.b,{exact:!0,path:"/dashboard",children:Object(b.jsx)(dr,{})}),Object(b.jsx)(s.b,{path:"/",children:Object(b.jsx)(s.a,{to:"/dashboard"})})]})}),Object(b.jsx)(hr,{})]})};c.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(A.a,{store:qe,children:Object(b.jsx)(Or,{})})}),document.getElementById("root"))}},[[248,1,2]]]);
//# sourceMappingURL=main.962a4cb7.chunk.js.map