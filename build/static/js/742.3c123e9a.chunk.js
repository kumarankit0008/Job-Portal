"use strict";(self.webpackChunktalent_recruiter=self.webpackChunktalent_recruiter||[]).push([[742],{2155:function(e,t,n){n.d(t,{BU:function(){return u},Ew:function(){return l},Hq:function(){return s}});var i=n(9276),a={role:"admin"},r=i.q.injectEndpoints({endpoints:function(e){return{singleEmailSend:e.mutation({query:function(e){return{url:"/api/email-campaign/email",method:"POST",headers:a,body:{data:e}}}}),emailNewsLetterSent:e.mutation({query:function(e){return{url:"/api/email-campaign/email-sent",method:"POST",body:{email:e.email,email_subject:e.email_subject,email_body:e.email_body}}}}),emailNewsLetterConfirm:e.mutation({query:function(e){return{url:"/api/email-campaign/email-confirmation",method:"POST",body:{email:e.email}}}})}}}),u=r.useSingleEmailSendMutation,l=r.useEmailNewsLetterConfirmMutation,s=r.useEmailNewsLetterSentMutation},742:function(e,t,n){n.r(t);var i=n(885),a=n(2791),r=n(9085),u=n(2155),l=n(7689),s=n(184);t.default=function(){var e=(0,u.Ew)(),t=(0,i.Z)(e,2),n=t[0],o=t[1],m=o.isLoading,c=o.isError,d=o.isSuccess,f=(0,l.UO)().email;return(0,a.useEffect)((function(){f&&n({email:f})}),[n,f]),(0,a.useEffect)((function(){c&&!m&&r.Am.error("Email is not valid",{toastId:"newsletterError"}),!d||m||c||r.Am.success("Email Save Successfully",{toastId:"newsletterSuccess"})}),[d,c,m]),(0,s.jsxs)(s.Fragment,{children:[m&&(0,s.jsx)("div",{className:"animate-pulse bg-gray-300 text-center text-2xl font-bold",children:"Loading..."}),d&&(0,s.jsx)("div",{className:"animate-pulse bg-green-300 text-center text-xl py-3 font-bold",children:"You can close this page now"})]})}}}]);
//# sourceMappingURL=742.3c123e9a.chunk.js.map