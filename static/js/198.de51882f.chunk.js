"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[198],{1198:function(t,s,e){e.r(s),e.d(s,{default:function(){return M}});var n=e(5671),r=e(3144),i=e(136),o=e(5716),a=e(8381),u={},c="ProfileInfo_banner__9K+gQ",l=e(1626),d=e(6365),p=e(885),h=e(9343),j=function(t){var s=(0,a.useState)(!1),e=(0,p.Z)(s,2),n=e[0],r=e[1],i=(0,a.useState)(t.status),o=(0,p.Z)(i,2),u=o[0],c=o[1];return(0,a.useEffect)((function(){c(t.status)}),[t.status]),(0,h.jsxs)("div",{children:[!n&&(0,h.jsx)("div",{children:(0,h.jsx)("span",{onDoubleClick:function(){r(!0)},children:t.status||"No Status"})}),n&&(0,h.jsx)("div",{children:(0,h.jsx)("input",{onBlur:function(){r(!1),t.updateStatus(u)},onChange:function(t){c(t.currentTarget.value)},value:u,autoFocus:!0})})]})},f=function(t){var s=t.userProfile,e=t.status,n=t.updateStatus;return s?(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{children:(0,h.jsx)("img",{className:c,src:"https://kipmu.ru/wp-content/uploads/rost.jpg",alt:"banner"})}),(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{children:(0,h.jsx)("img",{src:s.photos.large?s.photos.large:d,alt:"photos"})}),(0,h.jsx)("span",{children:s.fullName}),(0,h.jsx)(j,{status:e,updateStatus:n}),(0,h.jsx)("p",{children:s.aboutMe}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h3",{children:"Contacts"}),(0,h.jsx)("p",{children:s.contacts.vk}),(0,h.jsx)("p",{children:s.contacts.instagram}),(0,h.jsx)("p",{children:s.contacts.facebook}),(0,h.jsx)("p",{children:s.contacts.website}),(0,h.jsx)("p",{children:s.contacts.twitter}),(0,h.jsx)("p",{children:s.contacts.mainLink}),(0,h.jsx)("p",{children:s.contacts.youtube})]}),(0,h.jsxs)("p",{children:["\u041f\u043e\u0438\u0441\u043a \u0440\u0430\u0431\u043e\u0442\u044b: ",s.lookingForAJob?"Yes":"No"]}),(0,h.jsx)("p",{children:s.lookingForAJobDescription})]})]}):(0,h.jsx)(l.Z,{})},x=e(1378),m={},v="Post_item__WyNKr",g=function(t){var s=t.message,e=t.counter;return(0,h.jsxs)("div",{className:v,children:[(0,h.jsx)("img",{src:"https://cs6.pikabu.ru/avatars/398/v398282.jpg?1343863926",alt:"avatar"}),s,(0,h.jsx)("div",{children:(0,h.jsxs)("span",{children:["like",e]})})]})},P=e(1648),S=e(5188),b=e(7615),k=e(2578),w=a.memo((function(t){var s=t.postData,e=t.addPost;return(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{children:"My posts"}),(0,h.jsx)(Z,{onSubmit:function(t){console.log(t),e(t.newPost)}}),(0,h.jsx)("div",{className:m.posts,children:s.map((function(t){return(0,h.jsx)(g,{message:t.message,counter:t.counter},t.id)}))})]})})),y=(0,b.BS)(30),N=(0,b.Ei)(5),Z=(0,S.Z)({form:"newPost"})((function(t){return(0,h.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,h.jsx)("div",{children:(0,h.jsx)(P.Z,{component:k.Kx,name:"newPost",placeholder:"Enter your post",validate:[b.C1,y,N]})}),(0,h.jsx)("div",{children:(0,h.jsx)("button",{children:"Add post"})})]})})),_=w,C=e(440),A=(0,C.$j)((function(t){return{postData:t.profilePage.postData}}),(function(t){return{addPost:function(s){return t((0,x.Qf)(s))}}}))(_),D=a.memo((function(t){return(0,h.jsxs)("div",{className:u.profile,children:[(0,h.jsx)(f,{userProfile:t.userProfile,status:t.status,updateStatus:t.updateStatus}),(0,h.jsx)(A,{})]})})),E=e(104),I=e(3726),F=e(4479),K=function(t){(0,i.Z)(e,t);var s=(0,o.Z)(e);function e(){return(0,n.Z)(this,e),s.apply(this,arguments)}return(0,r.Z)(e,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId.toString())||this.props.history.push("/login"),this.props.getProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return this.props.isAuth?(0,h.jsx)(D,{userProfile:this.props.userProfile,status:this.props.status,updateStatus:this.props.updateStatus}):(0,h.jsx)(E.l_,{to:"/login"})}}]),e}(a.Component),M=(0,F.qC)((0,C.$j)((function(t){return{userProfile:t.profilePage.userProfile,status:t.profilePage.status,isAuth:t.auth.isAuth,authorizedUserId:t.auth.id}}),{getProfile:x.Ai,getStatus:x.lR,updateStatus:x.Nf}),E.EN,I.Z)(K)}}]);
//# sourceMappingURL=198.de51882f.chunk.js.map