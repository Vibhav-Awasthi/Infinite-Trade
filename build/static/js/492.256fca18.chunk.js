"use strict";(self.webpackChunkreact_js=self.webpackChunkreact_js||[]).push([[492],{5596:function(e,t,n){n.d(t,{Hh:function(){return c},Iq:function(){return u},SM:function(){return l},bp:function(){return d},s8:function(){return s},y1:function(){return r}});var o=n(2982),a=n(1413),i=n(7210),r=function(e,t,n){return function(o){if(navigator.onLine){var r=(0,a.Z)((0,a.Z)({},e),{},{deviceId:"string"});delete r.checked,i.Z.API.postApiCall(i.Z.endpoint.signUp,r,(function(e){var a=e.data;if(a.statusCode===i.Z.Constants.api_success_code.success){var r=a.data,c=r.accessToken,l=r.email,s=r.name,u=r.userId;localStorage.setItem("verify_account_token",c),localStorage.setItem("user_email",l),localStorage.setItem("user_name",s),localStorage.setItem("user_id",u),n.push(i.Z.Pathname.VERIFY),o({type:i.Z.ActionName.LOADING,payload:!1}),t(!1)}else t(!1),i.Z.showAlert(2,a.message),o({type:i.Z.ActionName.LOADING,payload:!1})}),(function(e){t(!1);var n=e.data;console.log(n),o({type:i.Z.ActionName.LOADING,payload:!1})}))}else o({type:i.Z.ActionName.LOADING,payload:!1})}},c=function(){return function(e){if(navigator.onLine){var t={email:localStorage.getItem("user_email")||"",type:1,deviceId:"string",deviceToken:localStorage.getItem("verify_account_token")||""};i.Z.API.postApiCall(i.Z.endpoint.resendLink,t,(function(t){t.data.statusCode,i.Z.Constants.api_success_code.success,e({type:i.Z.ActionName.LOADING,payload:!1})}),(function(t){t.data;e({type:i.Z.ActionName.LOADING,payload:!1})}))}else e({type:i.Z.ActionName.LOADING,payload:!1})}},l=function(){return function(e){i.Z.API.getApiCall(i.Z.endpoint.skills,"",(function(t){var n=t.data;200===n.statusCode&&(console.log(n),e({type:i.Z.ActionName.SKILLS,payload:{skills:(0,o.Z)(n.data.skills)}}))}),(function(e){e.data}))}},s=function(){return function(e){if(navigator.onLine){var t={token:localStorage.getItem("verify_account_token")||"",deviceId:"3",deviceToken:localStorage.getItem("user_id")||""};console.log(t),i.Z.API.postApiCall(i.Z.endpoint.verify,t,(function(t){var n=t.data;console.log(n),n.statusCode===i.Z.Constants.api_success_code.success?(localStorage.setItem("accessToken",n.data.accessToken),e({type:i.Z.ActionName.LOADING,payload:!1})):e({type:i.Z.ActionName.LOADING,payload:!1})}),(function(t){var n=t.data;console.log(n),e({type:i.Z.ActionName.LOADING,payload:!1})}))}else e({type:i.Z.ActionName.LOADING,payload:!1})}},u=function(e,t){return function(n,o){if(navigator.onLine){var r=o().profileSelectorReducer,c=r.userType,l=r.mobileNo,s=e.location,u=(0,a.Z)({},e);delete u.location,u.skills=u.skills.map((function(e){return e.TYPE}));var d={userType:c,mobileNo:"".concat(l),location:s,companySoleTraderDetail:(0,a.Z)({},u),deviceId:"3",deviceToken:localStorage.getItem("user_id")||""};i.Z.API.putApiCall(i.Z.endpoint.profileComplete,d,(function(e){e.data.statusCode===i.Z.Constants.api_success_code.success?(n({type:i.Z.ActionName.LOADING,payload:!1}),localStorage.clear(),t.push(i.Z.Pathname.Dashboard)):n({type:i.Z.ActionName.LOADING,payload:!1})}),(function(e){e.data;n({type:i.Z.ActionName.LOADING,payload:!1})}))}else n({type:i.Z.ActionName.LOADING,payload:!1})}},d=function(e,t){return function(n,o){if(navigator.onLine){var r=o().profileSelectorReducer,c=r.userType,l=r.mobileNo,s=r.companyDetail,u=e.location,d=(0,a.Z)({},e);delete d.location,d.availableTrades=d.skills.map((function(e){return e.TYPE})),delete d.skills;var p={userType:c,mobileNo:"".concat(l),location:u,companyDetail:(0,a.Z)((0,a.Z)({},d),s),deviceId:"3",deviceToken:localStorage.getItem("user_id")||""};console.log(p),i.Z.API.putApiCall(i.Z.endpoint.profileComplete,p,(function(e){var o=e.data;o.statusCode===i.Z.Constants.api_success_code.success?(n({type:i.Z.ActionName.LOADING,payload:!1}),localStorage.clear(),t.push(i.Z.Pathname.Dashboard),i.Z.showAlert(1,o.message)):n({type:i.Z.ActionName.LOADING,payload:!1})}),(function(e){e.data;n({type:i.Z.ActionName.LOADING,payload:!1})}))}else n({type:i.Z.ActionName.LOADING,payload:!1})}}},5398:function(e,t,n){n.d(t,{y:function(){return a}});var o=n(4942),a=(0,n(2455).Z)({loginContainer:function(e){var t=e.theme;return(0,o.Z)({width:"90% !important",height:"89% !important",marginTop:"4%",display:"flex",flexDirection:"column",justifyContent:"center"},t.breakpoints.down(1024),{padding:"50px",justifyContent:"center"})},details:function(e){var t=e.theme;return(0,o.Z)({width:"50%",marginLeft:"64.5%"},t.breakpoints.down(1300),{marginLeft:"64"})},stepper:function(){return{marginLeft:"80%"}},titleContainer:function(e){e.theme;return{display:"flex",flexDirection:"column",width:"100%",alignItems:"right"}},brandLogo:function(e){var t,n=e.theme;return{width:"100%","& figure":(t={margin:0,width:"140px",height:"70px"},(0,o.Z)(t,n.breakpoints.up(1920),{width:"200px",height:"100px"}),(0,o.Z)(t,n.breakpoints.up(2560),{width:"240px",height:"120px"}),t)}},checkBoxContainer:function(){return{float:"left"}},checkBox:function(){return{background:" #FFFFFF",boxSizing:"border-box",marginBottom:"5px","&.css-rfs483-MuiFormControlLabel-root":{marginLeft:"-26px",marginRight:"0px",width:"100%"}}},ckBox:function(){return{"&.css-3zq233-MuiButtonBase-root-MuiCheckbox-root.Mui-checked":{color:"#000"}}},endIconContainer:function(){return{backgroundColor:"#0da4ce"}},title:function(e){e.theme;return{width:"100%"}},verifyTitle:function(e){e.theme;return{border:"1 px solid black"}},resendMail:function(){return{"&:hover":{background:"none"}}},lables:function(e){e.theme;return{float:"left",marginTop:"1.5%",marginBottom:"1.5%"}},forgotPassword:function(){return{display:"flex",justifyContent:"space-between",marginBottom:"3%","& a":{textDecoration:"none",color:"#687173"}}},profileSelector:function(){return{border:"2px solid grey",width:"43%",cursor:"pointer"}},inputField:function(){return{marginBottom:"1%","& input::-webkit-outer-spin-button":{WebkitAppearance:"none",margin:0},"& input::-webkit-inner-spin-button":{webkitAppearance:"none",margin:0}}},textfieldClass:function(){return{}},selectProfile:function(e){var t,n=e.theme;return{display:"flex",height:"100px",width:"100%",marginRight:"20%",alignItems:"center",justifyContent:"center","& figure":(t={},(0,o.Z)(t,n.breakpoints.up(1920),{width:"200px",height:"100px"}),(0,o.Z)(t,n.breakpoints.up(2560),{width:"240px",height:"120px"}),t)}},normalButton:function(){return{marginTop:"5%",width:"100%"}},activeButton:function(){return{color:"#ffffff",backgroundColor:"#0da4ce",maxHeight:"40px"}},formCommon:function(){return{alignItems:"flex-start"}},buttonContainer:function(){return{marginTop:"5%",width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between"}},dontHaveAccount:function(){return{"& a":{textDecoration:"none",color:"#687173"}}},tools:function(){return{display:"flex",width:"100%"}}})},6492:function(e,t,n){n.r(t);var o=n(4942),a=(n(2791),n(9386)),i=n(7210),r=n(4312),c=n(9271),l=n(5398),s=n(3967),u=n(890),d=n(3329),p=n(6907),f=n(6030),m=n(8566),g=n(5596),h=n(184);t.default=function(){var e=(0,s.Z)(),t=(0,l.y)({theme:e}),n=(0,c.k6)(),y=(0,f.I0)();return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(p.B6,{children:(0,h.jsx)("div",{className:t.loginContainer,children:(0,h.jsxs)(d.Z,{children:[(0,h.jsxs)("div",{className:t.titleContainer,children:[(0,h.jsx)(a.Z,{style:t.brandLogo,imgUrl:m.Z.Logo}),(0,h.jsx)("div",{className:t.title,children:(0,h.jsx)(u.Z,{sx:(0,o.Z)({fontSize:"24px",fontWeight:"bold",fontStretch:"normal",lineHeight:"normal",letterSpacing:"normal",color:"#4f4f4f",float:"left",marginTop:"4%"},e.breakpoints.down(1025),{fontSize:"20px",marginLeft:"2%",marginTop:"4%"}),children:"Verify your email"})}),(0,h.jsx)("div",{className:t.verifyTitle,children:(0,h.jsx)(u.Z,{sx:(0,o.Z)({fontSize:"15px",textAlign:"left",width:"100%",fontStretch:"normal",lineHeight:"normal",letterSpacing:"normal",color:"#687173",float:"left",marginTop:"2%",marginRight:"10% !important"},e.breakpoints.down(1025),{fontSize:"12px",marginLeft:"2%",marginTop:"4%"}),children:"Your Account has been successfully registered. Confirm your email address to start using Infinite Trades"})})]}),(0,h.jsxs)("div",{className:t.buttonContainer,children:[(0,h.jsx)(r.Jr,{sx:{color:"black",textDecoration:"none",width:"40%",border:"1px solid black",backgroundColor:"#fff","&:hover":{background:"none"}},type:"submit",variant:"contained",onClick:function(){y((0,g.Hh)())},children:(0,h.jsx)(u.Z,{className:t.lables,children:"Resend Email"})}),(0,h.jsx)(r.Jr,{sx:{color:"#fff",textDecoration:"none",width:"40%",textTransform:"capitalize"},type:"submit",variant:"contained",onClick:function(){return n.push(i.Z.Pathname.LOGIN)},children:(0,h.jsx)(u.Z,{className:t.lables,children:"Login"})})]})]})})})})}}}]);
//# sourceMappingURL=492.256fca18.chunk.js.map