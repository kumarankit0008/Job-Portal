"use strict";(self.webpackChunktalent_recruiter=self.webpackChunktalent_recruiter||[]).push([[2116],{4913:function(e,s,a){a.d(s,{L5:function(){return r},l8:function(){return c},oP:function(){return l}});var t=a(9276),n={role:"admin"},i=t.q.injectEndpoints({endpoints:function(e){return{getCategory:e.query({query:function(){return{url:"/api/category/all-category",method:"GET"}},providesTags:["category"]}),addCategory:e.mutation({query:function(e){var s=e.category,a=e.status;return{url:"/api/category/add-category",method:"POST",headers:n,body:{category:s,status:a}}},invalidatesTags:["category"]}),deleteCategory:e.mutation({query:function(e){return{url:"/api/category/delete/".concat(e),method:"DELETE",headers:n}},invalidatesTags:["category"]})}}}),l=i.useGetCategoryQuery,r=i.useAddCategoryMutation,c=i.useDeleteCategoryMutation},2155:function(e,s,a){a.d(s,{BU:function(){return l},Ew:function(){return r},Hq:function(){return c}});var t=a(9276),n={role:"admin"},i=t.q.injectEndpoints({endpoints:function(e){return{singleEmailSend:e.mutation({query:function(e){return{url:"/api/email-campaign/email",method:"POST",headers:n,body:{data:e}}}}),emailNewsLetterSent:e.mutation({query:function(e){return{url:"/api/email-campaign/email-sent",method:"POST",body:{email:e.email,email_subject:e.email_subject,email_body:e.email_body}}}}),emailNewsLetterConfirm:e.mutation({query:function(e){return{url:"/api/email-campaign/email-confirmation",method:"POST",body:{email:e.email}}}})}}}),l=i.useSingleEmailSendMutation,r=i.useEmailNewsLetterConfirmMutation,c=i.useEmailNewsLetterSentMutation},3929:function(e,s,a){var t=a(885),n=a(2791),i=a(2155),l=a(643),r=a(9085),c=a(184);s.Z=function(){var e=(0,i.Hq)(),s=(0,t.Z)(e,2),a=s[0],d=s[1],o=d.isLoading,m=d.isError,x=d.error,u=d.isSuccess;(0,n.useEffect)((function(){var e;m&&r.Am.error(null===x||void 0===x||null===(e=x.data)||void 0===e?void 0:e.error,{toastId:"newsletterError"});u&&r.Am.info("Please check your email inbox to confirm",{toastId:"newsletterSuccess"})}),[x,u,m]);return(0,c.jsx)("section",{className:"bg-primary p-10 max-w-4xl mx-auto py-16 px-5",children:(0,c.jsx)("div",{className:"flex justify-center",children:(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{children:(0,c.jsx)("h2",{className:"text-3xl font-bold text-white mb-4",children:"Subscribe For Newsletter"})}),(0,c.jsx)("form",{onSubmit:function(e){e.preventDefault();var s="Please click on the following link,\n    or paste this into your browser to complete the process:\n    ".concat(window.location.origin,"/email-confirmation/").concat(e.target.email.value);a({email:e.target.email.value,email_subject:"Please confirm your email address",email_body:s}),e.target.reset()},children:(0,c.jsxs)("div",{className:"flex",children:[(0,c.jsx)("input",{required:!0,type:"email",name:"email",placeholder:"Enter you Email",className:"p-4 outline-none w-[80%]"}),(0,c.jsx)("button",{disabled:o,type:"submit",className:"bg-[tomato] font-bold px-2 md:px-10 duration-700 text-white border-2 border-white hover:bg-primary ",children:o?(0,c.jsx)(l.fe,{visible:!0,height:"50",width:"120",ariaLabel:"dna-loading",wrapperStyle:{},wrapperclassName:"dna-wrapper"}):"Subscribe"})]})})]})})})}},9765:function(e,s,a){a(2791);var t=a(6907),n=a(184);s.Z=function(e){var s=e.title;return(0,n.jsx)(t.ql,{children:(0,n.jsxs)("title",{children:[s," - Talent Recruiter"]})})}},5777:function(e,s,a){a(2791);var t=a(9765),n=a(1087),i=a(184);s.Z=function(e){var s=e.title;return console.log("s",s),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.Z,{title:s}),(0,i.jsx)("div",{className:"py-8 bg-[#d0ffce]",children:(0,i.jsxs)("div",{className:"container mx-auto px-5 text-center md:text-start",children:[(0,i.jsx)("h2",{className:"text-accent text-2xl md:text-3xl font-bold",children:s}),(0,i.jsxs)("div",{className:"flex gap-2 text-accent text-xl pt-2 justify-center md:justify-start",children:[(0,i.jsx)(n.rU,{to:"/",className:"hover:text-primary text-xl",children:"Home"})," ","/",(0,i.jsx)("p",{className:"text-primary",children:s})]})]})})]})}},8308:function(e,s,a){a.d(s,{Z:function(){return j}});var t=a(1413),n=a(4165),i=a(5861),l=a(885),r=a(2791),c=a(6355),d=a(1134),o=a(4913),m=a(4569),x=a.n(m),u=function(e){return e.replace(/[^a-zA-Z0-9]/g,"-")},p=a(7689),h=a(1087),g=function(){var e=(0,p.s0)();return function(s,a){var t={pathname:s,search:(0,h.fW)(a).toString()};e(t)}},f=a(184),j=function(){var e,s,a=(0,d.cI)(),m=a.register,p=a.handleSubmit,h=a.reset,j=(0,o.oP)(),b=j.isLoading,v=j.data,y=j.error,N=(0,r.useState)([]),w=(0,l.Z)(N,2),Z=w[0],k=w[1];(0,r.useEffect)((function(){x().get("https://raw.githubusercontent.com/raselmahmud22/fakeData/main/countries.json").then((function(e){k(e.data.data)}))}),[]);var S,E=g(),q=function(){var e=(0,i.Z)((0,n.Z)().mark((function e(s){var a,t,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=s.category,t=s.keyword,i=s.location,E("/search",{category:u(a),location:u(i),keyword:u(t)}),h({category:"",location:"",keyword:""});case 3:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}();return b?S=(0,f.jsx)("option",{className:"text-green-500",children:"Loading"}):y?S=(0,f.jsx)("option",{className:"text-red-500",children:"Something went wrong"}):0===(null===v||void 0===v||null===(e=v.all_category)||void 0===e?void 0:e.length)?S=(0,f.jsx)("option",{className:"text-yellow-400",children:"There is no Category"}):(null===v||void 0===v||null===(s=v.all_category)||void 0===s?void 0:s.length)>0&&(S=null===v||void 0===v?void 0:v.all_category.map((function(e){return(0,f.jsx)("option",{value:e.category,children:e.category},e._id)}))),(0,f.jsx)("section",{children:(0,f.jsx)("div",{className:"container mx-auto",children:(0,f.jsx)("div",{className:"shadow-lg z-10 p-5 border bg-primary",children:(0,f.jsxs)("form",{onSubmit:p(q),className:"grid sm:grid-cols-4 md:grid-cols-4 gap-1",children:[(0,f.jsx)("input",(0,t.Z)({type:"text",required:!0,placeholder:"Search Keyword",className:"input w-full rounded-none input-bordered"},m("keyword"))),(0,f.jsxs)("select",(0,t.Z)((0,t.Z)({required:!0,defaultValue:"",className:"select select-bordered w-full rounded-none text-[tomato]"},m("location")),{},{children:[(0,f.jsx)("option",{value:"",disabled:!0,children:"Location"}),null===Z||void 0===Z?void 0:Z.map((function(e,s){return(0,f.jsx)("option",{value:e.country,children:e.country},s)}))]})),(0,f.jsxs)("select",(0,t.Z)((0,t.Z)({required:!0,defaultValue:"",className:"select select-bordered w-full rounded-none text-[tomato]"},m("category")),{},{children:[(0,f.jsx)("option",{value:"",disabled:!0,children:"Category"}),S]})),(0,f.jsxs)("button",{type:"submit",className:"btn rounded-none w-full duration-700 bg-[tomato] border-[tomato] hover:bg-accent py-3 text-white cursor-pointer font-bold",children:[(0,f.jsx)(c.U41,{className:"mr-2"})," Search"]})]})})})})}},424:function(e,s,a){a.r(s),a.d(s,{default:function(){return m}});a(2791);var t=a(8822),n=a(3590),i=a(6935),l=a(184),r=function(){var e=(0,t.L4)("getJobs"),s=e.data,a=e.isLoading;return console.log(s),(0,l.jsx)("section",{className:"py-16",children:(0,l.jsxs)("div",{className:"container mx-auto px-5",children:[a?(0,l.jsx)(n.Z,{}):(0,l.jsx)("div",{className:"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5",children:null===s||void 0===s?void 0:s.Jobs.map((function(e){return(0,l.jsx)(i.Z,{job:e},e._id)}))}),(0,l.jsx)("div",{className:"flex justify-center pt-16",children:(0,l.jsxs)("div",{className:"btn-group gap-1",children:[(0,l.jsx)("button",{className:"btn-primary active hover:marker:border-secondary btn-md text-white",children:"Prev"}),(0,l.jsx)("button",{className:"btn-primary hover:bg-accent btn-md text-white",children:"1"}),(0,l.jsx)("button",{className:"btn-primary hover:bg-accent btn-md text-white",children:"2"}),(0,l.jsx)("button",{className:"btn-primary hover:bg-accent btn-md text-white",children:"3"}),(0,l.jsx)("button",{className:"btn-primary hover:bg-accent btn-md text-white",children:"Next"})]})})]})})},c=a(5777),d=a(3929),o=a(8308),m=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.Z,{title:"Job Listing"}),(0,l.jsx)("div",{className:"container mx-auto px-5 my-5",children:(0,l.jsx)(o.Z,{})}),(0,l.jsx)(r,{}),(0,l.jsx)(d.Z,{})]})}},6935:function(e,s,a){a(2791);var t=a(9126),n=a(828),i=a(1087),l=a(942),r=a(184);s.Z=function(e){var s=e.job,a=s._id,c=s.title,d=s.company_link,o=s.salary,m=s.address,x=s.level,u=s.type,p="/job/".concat(a);return(0,r.jsx)(i.rU,{to:p,children:(0,r.jsxs)("div",{className:"flex flex-col sm:flex-row justify-start items-center bg-base-100 shadow hover:shadow-lg gap-4 px-5 py-6 cursor-pointer hover:border-primary border-white border hover:-translate-y-1 duration-700",children:[(0,r.jsx)("div",{className:"bg-secondary p-4 py-8 text-white text-3xl h-32 w-32",children:(0,r.jsx)("img",{src:l,alt:"compnay logo"})}),(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)("h2",{className:"font-bold text-xl",children:c}),(0,r.jsx)("p",{className:"font-medium text-primary mb-2",children:d}),(0,r.jsxs)("div",{className:"flex justify-start items-center mb-2",children:[(0,r.jsx)(t.KTD,{className:"text-primary mr-2"}),(0,r.jsx)("small",{children:o})]}),(0,r.jsxs)("div",{className:"flex justify-start items-center",children:[(0,r.jsx)(n.VFp,{className:"text-primary mr-2 text-xl"}),(0,r.jsx)("small",{className:"mb-2",children:m})]}),(0,r.jsxs)("div",{className:"flex gap-3 items-center mt-1",children:[(0,r.jsx)("div",{className:"bg-pink-100 text-white-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900",children:x}),(0,r.jsx)("div",{className:"bg-purple-100 text-white-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900",children:u})]})]})]})})}},3590:function(e,s,a){var t=a(184);s.Z=function(){return(0,t.jsx)("div",{className:"container mx-auto px-5 py-16",children:(0,t.jsxs)("div",{className:"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5",children:[(0,t.jsx)("div",{className:"shadow-md px-5 py-6 w-full",children:(0,t.jsxs)("div",{className:"animate-pulse flex space-x-4",children:[(0,t.jsx)("div",{className:"rounded-full bg-slate-400 h-28 w-28"}),(0,t.jsxs)("div",{className:"flex-1 space-y-6 py-1",children:[(0,t.jsx)("div",{className:"h-2 bg-slate-400 rounded"}),(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsx)("div",{className:"h-6 bg-slate-400 rounded"}),(0,t.jsxs)("div",{className:"flex items-center flex-wrap mb-4",children:[(0,t.jsx)("span",{className:"bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0"}),(0,t.jsx)("span",{className:"bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1"})]})]})]})]})}),(0,t.jsx)("div",{className:"shadow-md px-5 py-6 w-full",children:(0,t.jsxs)("div",{className:"animate-pulse flex space-x-4",children:[(0,t.jsx)("div",{className:"rounded-full bg-slate-400 h-28 w-28"}),(0,t.jsxs)("div",{className:"flex-1 space-y-6 py-1",children:[(0,t.jsx)("div",{className:"h-2 bg-slate-400 rounded"}),(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsx)("div",{className:"h-6 bg-slate-400 rounded"}),(0,t.jsxs)("div",{className:"flex items-center flex-wrap mb-4",children:[(0,t.jsx)("span",{className:"bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0"}),(0,t.jsx)("span",{className:"bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1"})]})]})]})]})}),(0,t.jsx)("div",{className:"shadow-md px-5 py-6 w-full",children:(0,t.jsxs)("div",{className:"animate-pulse flex space-x-4",children:[(0,t.jsx)("div",{className:"rounded-full bg-slate-400 h-28 w-28"}),(0,t.jsxs)("div",{className:"flex-1 space-y-6 py-1",children:[(0,t.jsx)("div",{className:"h-2 bg-slate-400 rounded"}),(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsx)("div",{className:"h-6 bg-slate-400 rounded"}),(0,t.jsxs)("div",{className:"flex items-center flex-wrap mb-4",children:[(0,t.jsx)("span",{className:"bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0"}),(0,t.jsx)("span",{className:"bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1"})]})]})]})]})}),(0,t.jsx)("div",{className:"shadow-md px-5 py-6 w-full",children:(0,t.jsxs)("div",{className:"animate-pulse flex space-x-4",children:[(0,t.jsx)("div",{className:"rounded-full bg-slate-400 h-28 w-28"}),(0,t.jsxs)("div",{className:"flex-1 space-y-6 py-1",children:[(0,t.jsx)("div",{className:"h-2 bg-slate-400 rounded"}),(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsx)("div",{className:"h-6 bg-slate-400 rounded"}),(0,t.jsxs)("div",{className:"flex items-center flex-wrap mb-4",children:[(0,t.jsx)("span",{className:"bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0"}),(0,t.jsx)("span",{className:"bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1"})]})]})]})]})}),(0,t.jsx)("div",{className:"shadow-md px-5 py-6 w-full",children:(0,t.jsxs)("div",{className:"animate-pulse flex space-x-4",children:[(0,t.jsx)("div",{className:"rounded-full bg-slate-400 h-28 w-28"}),(0,t.jsxs)("div",{className:"flex-1 space-y-6 py-1",children:[(0,t.jsx)("div",{className:"h-2 bg-slate-400 rounded"}),(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsx)("div",{className:"h-6 bg-slate-400 rounded"}),(0,t.jsxs)("div",{className:"flex items-center flex-wrap mb-4",children:[(0,t.jsx)("span",{className:"bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0"}),(0,t.jsx)("span",{className:"bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1"})]})]})]})]})}),(0,t.jsx)("div",{className:"shadow-md px-5 py-6 w-full",children:(0,t.jsxs)("div",{className:"animate-pulse flex space-x-4",children:[(0,t.jsx)("div",{className:"rounded-full bg-slate-400 h-28 w-28"}),(0,t.jsxs)("div",{className:"flex-1 space-y-6 py-1",children:[(0,t.jsx)("div",{className:"h-2 bg-slate-400 rounded"}),(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsx)("div",{className:"h-6 bg-slate-400 rounded"}),(0,t.jsxs)("div",{className:"flex items-center flex-wrap mb-4",children:[(0,t.jsx)("span",{className:"bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0"}),(0,t.jsx)("span",{className:"bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1"})]})]})]})]})})]})})}},942:function(e,s,a){e.exports=a.p+"static/media/companyLogo.9fd73932ae4cd431d0a9.png"}}]);
//# sourceMappingURL=2116.495e2c46.chunk.js.map