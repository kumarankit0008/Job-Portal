"use strict";(self.webpackChunktalent_recruiter=self.webpackChunktalent_recruiter||[]).push([[5539],{5539:function(e,s,a){a.r(s),a.d(s,{default:function(){return u}});var l=a(885),t=a(2791),r=a(9126),c=a(9085),n=a(8822),d=a(3298),i=a(2426),x=a.n(i),o=a(643),m=a(184),h=function(e){var s,a,r=e.job||{},d=r._id,i=r.title,h=r.status,u=r.createdAt,j=(r.user,(0,t.useState)("")),p=(0,l.Z)(j,2),v=p[0],N=p[1],g=(0,n.Xr)(),b=(0,l.Z)(g,2),f=b[0],y=b[1],w=y.isLoading,k=y.data,A=y.error,S=(0,n.z_)(),D=(0,l.Z)(S,2),J=D[0],Z=D[1],C=Z.isLoading,V=Z.error;return(0,t.useEffect)((function(){(A||V)&&(N(""),c.Am.error("There is an error",{toastId:"error"})),"delete"===v?J({id:d}):"accept"===v&&f({id:d,status:!0})}),[v,d,f,A,V,J]),(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{children:d.slice(d.length-6)}),(0,m.jsx)("td",{children:i.slice(0,20)}),(0,m.jsx)("td",{children:"Web Development"}),(0,m.jsx)("td",{children:"Jhon Doe"}),(0,m.jsx)("td",{children:x()(u).format("MMM Do YY")}),(0,m.jsx)("td",{children:(0,m.jsx)("span",{className:"".concat(null!==k&&void 0!==k&&null!==(s=k.job)&&void 0!==s&&s.status||h?"badge-primary":"bg-gray-300"," badge opacity-75 badge-sm"),children:null!==k&&void 0!==k&&null!==(a=k.job)&&void 0!==a&&a.status||h?"Active":"Pending"})}),(0,m.jsx)("th",{children:w||C?(0,m.jsx)("div",{className:"flex items-center justify-center",children:(0,m.jsx)(o.no,{visible:!0,height:"50",width:"50",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperclassName:"blocks-wrapper"})}):(0,m.jsxs)("select",{onChange:function(e){return N(e.target.value)},className:"select select-ghost",defaultValue:"defaultValue",children:[(0,m.jsx)("option",{value:"defaultValue",children:"Select Action"}),(0,m.jsx)("option",{value:"delete",className:"text-error cursor-pointer",children:"Delete"}),(0,m.jsx)("option",{value:"accept",className:"text-success cursor-pointer",children:"Accept"})]})})]})})},u=function(){var e,s=(0,t.useState)(""),a=(0,l.Z)(s,2),i=a[0],x=a[1],o=(0,n.L4)(),u=o.isLoading,j=o.data,p=o.error;return(0,t.useEffect)((function(){var e=setTimeout((function(){i&&console.log(i,"do emailSearch")}),1e3);return function(){return clearTimeout(e)}}),[i]),u?e=(0,m.jsx)(d.Z,{}):p?c.Am.error("Something went wrong",{toastId:"error"}):0===j.Jobs.length?e=(0,m.jsx)("tr",{className:"text-center my-2 text-xs",children:"No Job available"}):!u&&null!==j&&void 0!==j&&j.Jobs&&(e=j.Jobs.map((function(e){return(0,m.jsx)(h,{job:e},e._id)}))),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:"flex items-center justify-center md:my-14 my-3",children:[(0,m.jsx)(r.YUZ,{className:"mr-2 md:w-9 md:h-9 w-5 h-5"}),(0,m.jsx)("h2",{className:"md:text-3xl uppercase md:font-extrabold text-xl text-transparent bg-clip-text bg-gradient-to-tr from-primary to-secondary",children:"All Jobs"})]}),(0,m.jsxs)("div",{className:"flex md:flex-row flex-col md:justify-between items-center md:my-6 my-2 px-2",children:[(0,m.jsxs)("select",{className:"select select-ghost w-full max-w-xs md:my-0 my-3",defaultValue:"noValue",children:[(0,m.jsx)("option",{value:"noValue",children:"Filter By Category"}),(0,m.jsx)("option",{children:"IT"}),(0,m.jsx)("option",{children:"Finance"}),(0,m.jsx)("option",{children:"Marketing"}),(0,m.jsx)("option",{children:"Web development"}),(0,m.jsx)("option",{children:"HR"})]}),(0,m.jsx)("input",{type:"text",placeholder:"Search by Job ID",className:"input input-bordered input-primary w-full max-w-xs md:my-0 my-3",name:"search",value:i,onChange:function(e){return x(e.target.value)}})]}),(0,m.jsxs)("div",{className:"overflow-x-auto w-full px-2",children:[(0,m.jsxs)("table",{className:"table md:w-full",children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{children:"ID"}),(0,m.jsx)("th",{children:"Title"}),(0,m.jsx)("th",{children:"Category"}),(0,m.jsx)("th",{children:"Recruiter"}),(0,m.jsx)("th",{children:"Date"}),(0,m.jsx)("th",{children:"Status"}),(0,m.jsx)("th",{children:"Action"})]})}),(0,m.jsx)("tbody",{children:e})]}),(0,m.jsxs)("div",{className:"flex justify-center btn-group mt-5",children:[(0,m.jsx)("button",{className:"btn",children:"\xab"}),(0,m.jsx)("span",{className:"btn",children:"Page 1"}),(0,m.jsx)("button",{className:"btn",children:"\xbb"})]})]})]})}},3298:function(e,s,a){a(2791);var l=a(184);s.Z=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{className:"animate-pulse",children:(0,l.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,l.jsx)("div",{className:"avatar",children:(0,l.jsx)("div",{className:"mask mask-squircle bg-slate-400 w-12 h-12"})}),(0,l.jsx)("div",{children:(0,l.jsx)("div",{className:"space-y-3",children:(0,l.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,l.jsx)("div",{className:"h-4 px-28 bg-slate-400 rounded"}),(0,l.jsx)("div",{className:"h-3 px-28 bg-slate-400 rounded"})]})})})]})}),(0,l.jsx)("td",{className:"animate-pulse",children:(0,l.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,l.jsx)("div",{className:"h-4 px-8 bg-slate-400 rounded"}),(0,l.jsx)("div",{className:"h-3 px-6 bg-slate-400 rounded"})]})}),(0,l.jsx)("td",{className:"animate-pulse",children:(0,l.jsx)("div",{className:"h-4 px-14 bg-slate-400 rounded"})}),(0,l.jsx)("th",{className:"animate-pulse",children:(0,l.jsx)("div",{className:"h-4 px-8 bg-slate-400 rounded"})})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{className:"animate-pulse",children:(0,l.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,l.jsx)("div",{className:"avatar",children:(0,l.jsx)("div",{className:"mask mask-squircle bg-slate-400 w-12 h-12"})}),(0,l.jsx)("div",{children:(0,l.jsx)("div",{className:"space-y-3",children:(0,l.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,l.jsx)("div",{className:"h-4 px-28 bg-slate-400 rounded"}),(0,l.jsx)("div",{className:"h-3 px-28 bg-slate-400 rounded"})]})})})]})}),(0,l.jsx)("td",{className:"animate-pulse",children:(0,l.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,l.jsx)("div",{className:"h-4 px-8 bg-slate-400 rounded"}),(0,l.jsx)("div",{className:"h-3 px-6 bg-slate-400 rounded"})]})}),(0,l.jsx)("td",{className:"animate-pulse",children:(0,l.jsx)("div",{className:"h-4 px-14 bg-slate-400 rounded"})}),(0,l.jsx)("th",{className:"animate-pulse",children:(0,l.jsx)("div",{className:"h-4 px-8 bg-slate-400 rounded"})})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{className:"animate-pulse",children:(0,l.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,l.jsx)("div",{className:"avatar",children:(0,l.jsx)("div",{className:"mask mask-squircle bg-slate-400 w-12 h-12"})}),(0,l.jsx)("div",{children:(0,l.jsx)("div",{className:"space-y-3",children:(0,l.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,l.jsx)("div",{className:"h-4 px-28 bg-slate-400 rounded"}),(0,l.jsx)("div",{className:"h-3 px-28 bg-slate-400 rounded"})]})})})]})}),(0,l.jsx)("td",{className:"animate-pulse",children:(0,l.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,l.jsx)("div",{className:"h-4 px-8 bg-slate-400 rounded"}),(0,l.jsx)("div",{className:"h-3 px-6 bg-slate-400 rounded"})]})}),(0,l.jsx)("td",{className:"animate-pulse",children:(0,l.jsx)("div",{className:"h-4 px-14 bg-slate-400 rounded"})}),(0,l.jsx)("th",{className:"animate-pulse",children:(0,l.jsx)("div",{className:"h-4 px-8 bg-slate-400 rounded"})})]})]})}}}]);
//# sourceMappingURL=5539.d3af1680.chunk.js.map