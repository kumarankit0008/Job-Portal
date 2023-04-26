"use strict";(self.webpackChunktalent_recruiter=self.webpackChunktalent_recruiter||[]).push([[3451],{1972:function(e,t,r){r.d(t,{B:function(){return o},YA:function(){return d}});var s=r(4165),a=r(5861),n=r(9276),l=r(4434),i=n.q.injectEndpoints({endpoints:function(e){return{userRegister:e.mutation({query:function(e){return{url:"/api/user/register",method:"POST",body:e}}}),login:e.mutation({query:function(e){return{url:"/api/user/login",method:"POST",body:e}},onQueryStarted:function(e,t){return(0,a.Z)((0,s.Z)().mark((function e(){var r,a,n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.dispatch,t.getState,a=t.queryFulfilled,e.prev=1,e.next=4,a;case 4:n=e.sent,localStorage.setItem("auth",JSON.stringify(n.data)),r((0,l.x4)(n.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))()}})}}}),o=i.useUserRegisterMutation,d=i.useLoginMutation},9765:function(e,t,r){r(2791);var s=r(6907),a=r(184);t.Z=function(e){var t=e.title;return(0,a.jsx)(s.ql,{children:(0,a.jsxs)("title",{children:[t," - Talent Recruiter"]})})}},5777:function(e,t,r){r(2791);var s=r(9765),a=r(1087),n=r(184);t.Z=function(e){var t=e.title;return console.log("s",t),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Z,{title:t}),(0,n.jsx)("div",{className:"py-8 bg-[#d0ffce]",children:(0,n.jsxs)("div",{className:"container mx-auto px-5 text-center md:text-start",children:[(0,n.jsx)("h2",{className:"text-accent text-2xl md:text-3xl font-bold",children:t}),(0,n.jsxs)("div",{className:"flex gap-2 text-accent text-xl pt-2 justify-center md:justify-start",children:[(0,n.jsx)(a.rU,{to:"/",className:"hover:text-primary text-xl",children:"Home"})," ","/",(0,n.jsx)("p",{className:"text-primary",children:t})]})]})})]})}},3451:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var s=r(1413),a=r(4165),n=r(5861),l=r(885),i=r(2791),o=r(5777),d=r(1134),c=r(7689),u=r(1087),x=r(1972),m=r(9085),h=r(184),p=function(){var e,t,r,p,v,b=(0,c.s0)(),f=(0,c.TH)(),g=(0,d.cI)(),j=g.register,w=g.formState.errors,N=g.handleSubmit,y=(0,x.YA)(),Z=(0,l.Z)(y,2),q=Z[0],k=Z[1],S=k.isLoading,F=k.error,L=k.data;(0,i.useEffect)((function(){var e,t,r=(null===(e=f.state)||void 0===e?void 0:e.from)||"/".concat(null===L||void 0===L||null===(t=L.user)||void 0===t?void 0:t.role);null!==F&&void 0!==F&&F.data?m.Am.error("there was an error"+(null===F||void 0===F?void 0:F.data),{toastId:"error"}):(m.Am.dismiss(),(null!==L&&void 0!==L&&L.user||null!==L&&void 0!==L&&L.accessToken)&&b(r,{replace:!0}))}),[F,L,b,null===(e=f.state)||void 0===e?void 0:e.from]);var C=function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o.Z,{title:"Login"}),(0,h.jsx)("div",{className:"flex py-8 sm:pt-16  px-2 justify-center items-center",children:(0,h.jsx)("div",{className:"card w-96 bg-base-100 shadow-xl rounded-none",children:(0,h.jsxs)("div",{className:"card-body",children:[(0,h.jsxs)("div",{className:"flex gap-2 mb-3",children:[(0,h.jsx)("button",{className:"btn bg-[#C80911] border-[#C80911] rounded-none hover:border-[#C80911] border-2 text-white hover:text-[#C80911] w-[49%] hover:shadow-lg font-bold hover:bg-white",children:"Google"}),(0,h.jsx)("button",{className:"btn bg-[#005B7F] border-[#005B7F] rounded-none hover:border-[#005B7F] border-2 text-white hover:text-[#005B7F] w-[49%] hover:shadow-lg font-bold hover:bg-white",children:"Facebook"})]}),(0,h.jsx)("div",{className:"divider m-0",children:"or"}),(0,h.jsxs)("form",{onSubmit:N(C),children:[(0,h.jsxs)("div",{className:"form-control w-full max-w-xs",children:[(0,h.jsx)("label",{className:"label",children:(0,h.jsx)("span",{className:"label-text",children:"Email"})}),(0,h.jsx)("input",(0,s.Z)({type:"email",placeholder:"Your Email",className:"input input-bordered w-full max-w-xs rounded-none"},j("email",{required:{value:!0,message:"Email is Required"},pattern:{value:/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,message:"Provide a valid Email"}}))),(0,h.jsxs)("label",{className:"label",children:["required"===(null===(t=w.email)||void 0===t?void 0:t.type)&&(0,h.jsx)("span",{className:"label-text-alt text-red-500",children:w.email.message}),"pattern"===(null===(r=w.email)||void 0===r?void 0:r.type)&&(0,h.jsx)("span",{className:"label-text-alt text-red-500",children:w.email.message})]})]}),(0,h.jsxs)("div",{className:"form-control w-full max-w-xs",children:[(0,h.jsx)("label",{className:"label",children:(0,h.jsx)("span",{className:"label-text",children:"Password"})}),(0,h.jsx)("input",(0,s.Z)({name:"password",type:"password",placeholder:"Password",className:"input input-bordered w-full max-w-xs rounded-none"},j("password",{required:{value:!0,message:"Password is Required"},minLength:{value:6,message:"Must be 6 characters or longer"}}))),(0,h.jsxs)("label",{className:"label",children:["required"===(null===(p=w.password)||void 0===p?void 0:p.type)&&(0,h.jsx)("span",{className:"label-text-alt text-red-500",children:w.password.message}),"minLength"===(null===(v=w.password)||void 0===v?void 0:v.type)&&(0,h.jsx)("span",{className:"label-text-alt text-red-500",children:w.password.message})]})]}),(0,h.jsx)("input",{disabled:S,className:"btn btn-primary font-bold w-full max-w-xs text-white rounded-none hover:shadow-lg",type:"submit",value:S?"Loading...":"Login"})]}),(0,h.jsx)("p",{children:(0,h.jsxs)("small",{children:["New at this website"," ",(0,h.jsx)(u.rU,{className:"text-primary hover:underline",to:"/register",children:"please register"})]})})]})})})]})}}}]);
//# sourceMappingURL=3451.5599c5f8.chunk.js.map