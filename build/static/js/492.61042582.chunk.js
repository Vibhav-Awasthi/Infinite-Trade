"use strict";(self.webpackChunkreact_js=self.webpackChunkreact_js||[]).push([[492],{1154:function(e,t,n){n.d(t,{Z:function(){return l}});var o=n(1413),i=n(5987),a=(n(2791),n(6151)),r=n(184),c=["children"];function l(e){var t=e.children,n=(0,i.Z)(e,c),l=(0,o.Z)((0,o.Z)({},n),{},{fullWidth:!0});return(0,r.jsx)(a.Z,(0,o.Z)((0,o.Z)({sx:{padding:"20px 0px"}},l),{},{children:t}))}},541:function(e,t,n){n.d(t,{Io:function(){return p},Jr:function(){return f}});var o=n(3457),i=n(1413),a=n(5987),r=(n(2791),n(6151)),c=n(5705),l=n(184),s=["children"],u=function(e){var t=e.children,n=(0,a.Z)(e,s),o=(0,c.u6)().submitForm,u=(0,i.Z)((0,i.Z)({},n),{},{fullWidth:!0,onClick:function(){o()}});return(0,l.jsx)(r.Z,(0,i.Z)((0,i.Z)({},u),{},{children:t}))},d=n(1154),p=((0,o.Z)("div")({backgroundColor:"#fff",width:"50%"}),(0,o.Z)(u)({width:"100%",height:"54px",marginTop:"20px",borderRadius:"0 !important"})),f=(0,o.Z)(d.Z)({width:"100%",height:"54px",marginTop:"20px",borderRadius:"0 !important"});(0,o.Z)("span")({fontSize:"30px",fontWeight:"bold",fontStretch:"normal",lineHeight:"normal",letterSpacing:"normal",color:"#4f4f4f"}),(0,o.Z)("span")({fontSize:"16px",fontStretch:"normal",lineHeight:"1.5",color:"#828282",margin:"4px 0 42px 0"})},5596:function(e,t,n){n.d(t,{y1:function(){return r},Hh:function(){return c},SM:function(){return l},s8:function(){return s},Iq:function(){return u},bp:function(){return d}});var o=n(2982),i=n(1413),a=n(8586),r=function(e,t,n){return function(o){if(navigator.onLine){var r=(0,i.Z)((0,i.Z)({},e),{},{deviceId:"string"});delete r.checked,a.Z.API.postApiCall(a.Z.endpoint.signUp,r,(function(e){var i=e.data;if(i.statusCode===a.Z.Constants.api_success_code.success){var r=i.data,c=r.accessToken,l=r.email,s=r.name,u=r.userId;localStorage.setItem("verify_account_token",c),localStorage.setItem("user_email",l),localStorage.setItem("user_name",s),localStorage.setItem("user_id",u),n.push(a.Z.Pathname.VERIFY),o({type:a.Z.ActionName.LOADING,payload:!1}),t(!1)}else t(!1),a.Z.showAlert(2,i.message),o({type:a.Z.ActionName.LOADING,payload:!1})}),(function(e){t(!1);var n=e.data;console.log(n),o({type:a.Z.ActionName.LOADING,payload:!1})}))}else o({type:a.Z.ActionName.LOADING,payload:!1})}},c=function(){return function(e){if(navigator.onLine){var t={email:localStorage.getItem("user_email")||"",type:1,deviceId:"string",deviceToken:localStorage.getItem("verify_account_token")||""};a.Z.API.postApiCall(a.Z.endpoint.resendLink,t,(function(t){t.data.statusCode,a.Z.Constants.api_success_code.success,e({type:a.Z.ActionName.LOADING,payload:!1})}),(function(t){t.data;e({type:a.Z.ActionName.LOADING,payload:!1})}))}else e({type:a.Z.ActionName.LOADING,payload:!1})}},l=function(){return function(e){a.Z.API.getApiCall(a.Z.endpoint.skills,"",(function(t){var n=t.data;200===n.statusCode&&(console.log(n),e({type:a.Z.ActionName.SKILLS,payload:{skills:(0,o.Z)(n.data.skills)}}))}),(function(e){e.data}))}},s=function(){return function(e){if(navigator.onLine){var t={token:localStorage.getItem("verify_account_token")||"",deviceId:"3",deviceToken:localStorage.getItem("user_id")||""};console.log(t),a.Z.API.postApiCall(a.Z.endpoint.verify,t,(function(t){var n=t.data;console.log(n),n.statusCode===a.Z.Constants.api_success_code.success?(localStorage.setItem("accessToken",n.data.accessToken),e({type:a.Z.ActionName.LOADING,payload:!1})):e({type:a.Z.ActionName.LOADING,payload:!1})}),(function(t){var n=t.data;console.log(n),e({type:a.Z.ActionName.LOADING,payload:!1})}))}else e({type:a.Z.ActionName.LOADING,payload:!1})}},u=function(e,t){return function(n,o){if(navigator.onLine){var r=o().profileSelectorReducer,c=r.userType,l=r.mobileNo,s=e.location,u=(0,i.Z)({},e);delete u.location,u.skills=u.skills.map((function(e){return e.TYPE}));var d={userType:c,mobileNo:"".concat(l),location:s,companySoleTraderDetail:(0,i.Z)({},u),deviceId:"3",deviceToken:localStorage.getItem("user_id")||""};a.Z.API.putApiCall(a.Z.endpoint.profileComplete,d,(function(e){e.data.statusCode===a.Z.Constants.api_success_code.success?(n({type:a.Z.ActionName.LOADING,payload:!1}),t.push(a.Z.Pathname.Dashboard)):n({type:a.Z.ActionName.LOADING,payload:!1})}),(function(e){e.data;n({type:a.Z.ActionName.LOADING,payload:!1})}))}else n({type:a.Z.ActionName.LOADING,payload:!1})}},d=function(e,t){return function(n,o){if(navigator.onLine){var r=o().profileSelectorReducer,c=r.userType,l=r.mobileNo,s=r.companyDetail,u=e.location,d=(0,i.Z)({},e);delete d.location,d.availableTrades=d.skills.map((function(e){return e.TYPE})),delete d.skills;var p={userType:c,mobileNo:"".concat(l),location:u,companyDetail:(0,i.Z)((0,i.Z)({},d),s),deviceId:"3",deviceToken:localStorage.getItem("user_id")||""};console.log(p),a.Z.API.putApiCall(a.Z.endpoint.profileComplete,p,(function(e){e.data.statusCode===a.Z.Constants.api_success_code.success?(n({type:a.Z.ActionName.LOADING,payload:!1}),t.push(a.Z.Pathname.Dashboard),a.Z.showAlert(1,"Successfully logged in!")):n({type:a.Z.ActionName.LOADING,payload:!1})}),(function(e){e.data;n({type:a.Z.ActionName.LOADING,payload:!1})}))}else n({type:a.Z.ActionName.LOADING,payload:!1})}}},5398:function(e,t,n){n.d(t,{y:function(){return i}});var o=n(4942),i=(0,n(2455).Z)({loginContainer:function(e){var t=e.theme;return(0,o.Z)({width:"90% !important",height:"89% !important",marginTop:"5%",display:"flex",flexDirection:"column",justifyContent:"center"},t.breakpoints.down(1024),{padding:"50px",justifyContent:"center"})},stepper:function(){return{marginLeft:"80%"}},titleContainer:function(e){e.theme;return{display:"flex",flexDirection:"column",width:"100%",alignItems:"right"}},brandLogo:function(e){var t,n=e.theme;return{width:"100%","& figure":(t={margin:0,width:"140px",height:"70px"},(0,o.Z)(t,n.breakpoints.up(1920),{width:"200px",height:"100px"}),(0,o.Z)(t,n.breakpoints.up(2560),{width:"240px",height:"120px"}),t)}},checkBoxContainer:function(){return{float:"left"}},checkBox:function(){return{background:" #FFFFFF",boxSizing:"border-box",marginBottom:"5px","&.css-rfs483-MuiFormControlLabel-root":{marginLeft:"-26px",marginRight:"0px",width:"100%"}}},ckBox:function(){return{"&.css-3zq233-MuiButtonBase-root-MuiCheckbox-root.Mui-checked":{color:"#000"}}},endIconContainer:function(){return{backgroundColor:"#0da4ce"}},title:function(e){e.theme;return{width:"100%"}},verifyTitle:function(e){e.theme;return{border:"1 px solid black"}},resendMail:function(){return{"&:hover":{background:"none"}}},lables:function(e){e.theme;return{float:"left",marginTop:"1.5%",marginBottom:"1.5%"}},forgotPassword:function(){return{display:"flex",justifyContent:"space-between",marginBottom:"3%","& a":{textDecoration:"none",color:"#687173"}}},profileSelector:function(){return{border:"2px solid grey",width:"43%",cursor:"pointer"}},inputField:function(){return{marginBottom:"1%","& input::-webkit-outer-spin-button":{WebkitAppearance:"none",margin:0},"& input::-webkit-inner-spin-button":{webkitAppearance:"none",margin:0}}},textfieldClass:function(){return{}},selectProfile:function(e){var t,n=e.theme;return{display:"flex",height:"100px",width:"100%",marginRight:"20%",alignItems:"center",justifyContent:"center","& figure":(t={},(0,o.Z)(t,n.breakpoints.up(1920),{width:"200px",height:"100px"}),(0,o.Z)(t,n.breakpoints.up(2560),{width:"240px",height:"120px"}),t)}},normalButton:function(){return{marginTop:"5%",width:"100%"}},activeButton:function(){return{color:"#ffffff",backgroundColor:"#0da4ce",maxHeight:"40px"}},formCommon:function(){return{alignItems:"flex-start"}},buttonContainer:function(){return{marginTop:"5%",width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between"}},dontHaveAccount:function(){return{"& a":{textDecoration:"none",color:"#687173"}}},tools:function(){return{display:"flex",width:"100%"}}})},6492:function(e,t,n){n.r(t);var o=n(4942),i=(n(2791),n(9386)),a=n(8586),r=n(541),c=n(9271),l=n(5398),s=n(3967),u=n(890),d=n(3329),p=n(6907),f=n(6030),m=n(8566),g=n(5596),h=n(184);t.default=function(){var e=(0,s.Z)(),t=(0,l.y)({theme:e}),n=(0,c.k6)(),Z=(0,f.I0)();return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(p.B6,{children:(0,h.jsx)("div",{className:t.loginContainer,children:(0,h.jsxs)(d.Z,{children:[(0,h.jsxs)("div",{className:t.titleContainer,children:[(0,h.jsx)(i.Z,{style:t.brandLogo,imgUrl:m.Z.Logo}),(0,h.jsx)("div",{className:t.title,children:(0,h.jsx)(u.Z,{sx:(0,o.Z)({fontSize:"30px",fontWeight:"bold",fontStretch:"normal",lineHeight:"normal",letterSpacing:"normal",color:"#4f4f4f",float:"left",marginTop:"4%"},e.breakpoints.down(1025),{fontSize:"20px",marginLeft:"2%",marginTop:"4%"}),children:"Verify your email"})}),(0,h.jsx)("div",{className:t.verifyTitle,children:(0,h.jsx)(u.Z,{sx:(0,o.Z)({fontSize:"15px",textAlign:"left",width:"100%",fontStretch:"normal",lineHeight:"normal",letterSpacing:"normal",color:"#687173",float:"left",marginTop:"2%",marginRight:"10% !important"},e.breakpoints.down(1025),{fontSize:"12px",marginLeft:"2%",marginTop:"4%"}),children:"Your Account has been successfully registered. Confirm your email address to start using Infinite Trades"})})]}),(0,h.jsxs)("div",{className:t.buttonContainer,children:[(0,h.jsx)(r.Jr,{sx:{color:"black",textDecoration:"none",width:"40%",border:"1px solid black",backgroundColor:"#fff","&:hover":{background:"none"}},type:"submit",variant:"contained",onClick:function(){Z((0,g.Hh)())},children:(0,h.jsx)(u.Z,{className:t.lables,children:"Resend Email"})}),(0,h.jsx)(r.Jr,{sx:{color:"#fff",textDecoration:"none",width:"40%"},type:"submit",variant:"contained",onClick:function(){return n.push(a.Z.Pathname.LOGIN)},children:(0,h.jsx)(u.Z,{className:t.lables,children:"Login"})})]})]})})})})}}}]);
//# sourceMappingURL=492.61042582.chunk.js.map