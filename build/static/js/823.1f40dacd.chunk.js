"use strict";(self.webpackChunkreact_js=self.webpackChunkreact_js||[]).push([[823],{8546:function(e,n,t){var o=t(4942),a=t(1413),r=t(885),i=t(5987),s=(t(2791),t(2506)),c=t(9334),l=t(184),d=["name"];n.Z=function(e){var n=e.name,t=(0,i.Z)(e,d),u=(0,s.U$)(n),m=(0,r.Z)(u,2),p=m[0],f=m[1],h=(0,a.Z)((0,a.Z)((0,a.Z)({},t),p),{},{fullWidth:!0,variant:"outlined",value:p.value||""});return f&&f.touched&&f.error&&(h.error=!0,h.helperText=f.error),(0,l.jsx)("div",{children:(0,l.jsx)(c.Z,(0,a.Z)({size:"small",sx:(0,o.Z)({"& label.Mui-focused":{borderColor:"#424546"},"& .MuiInput-underline:after":{border:"1px solid #424546"},"& .MuiOutlinedInput-root":{"& fieldset":{border:"1px solid #424546"},"&:hover fieldset":{border:"1px solid #424546"},"&.Mui-focused fieldset":{boxShadow:"-2px 0px 23px -2px rgba(0,0,0,0.33)"}}},"& fieldset",{borderRadius:0})},h))})}},336:function(e,n,t){var o=t(1089),a=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,r={LoginSchema:function(){return o.Ry().shape({email:o.Z_().trim().email("Please enter valid email").max(50,"Email can be maximum of hundred characters").required("Email field cannot be blank"),password:o.Z_().trim().required("Password field cannot be blank")})},SignupSchema:function(){return o.Ry().shape({name:o.Z_().trim().max(100,"Name can be maximum of hundred characters").required("Name field cannot be blank"),email:o.Z_().trim().email("Please enter valid email").max(100,"Email can be maximum of hundred characters").required("Email field cannot be blank"),password:o.Z_().trim().required("Password field cannot be blank"),checked:o.O7().required("Please Mark this box")})},ChangePasswordScheema:function(){return o.Ry().shape({currentpassword:o.Z_().trim().required("Current Password field cannot be blank"),newpassword:o.Z_().trim().min(6,"Password should be minimum of six characters").max(20,"Password should be maximum of twenty characters").required("New Password field cannot be blank").test("notBothAtTheSameTime","Current Password and New Password should not be the same",(function(e){return this.parent.currentpassword!==e}))})},CompanyContactSchema:function(){return o.Ry().shape({mobileNo:o.Z_().required("Please enter your phone number").matches(a,"Phone number is not valid").min(10,"to short").max(10,"to long"),officeNo:o.Z_().required("Please enter your Office number").matches(a,"Office number is not valid").min(10,"to short").max(10,"to long")})},MobileNumber:function(){return o.Ry().shape({PhoneNumber:o.Z_().required("Please enter your phone number").matches(a,"Phone number is not valid").min(10,"to short").max(10,"to long")})},BusinessDetailSchema:function(){return o.Ry().shape({name:o.Z_().trim().max(100,"Name can be maximum of hundred characters").required("Name field cannot be blank"),phone_number:o.Z_().required("Please enter your phone number").matches(a,"Phone number is not valid").min(10,"Phone number cannot be less than 10 digits"),location:o.Ry().required("Please enter the location"),checked:o.O7().required("Please Mark this box")})},SoleTraderSchema:function(){return o.Ry().shape({businessName:o.Z_().trim().required("Required"),abnNumber:o.Z_().trim().max(10,"Maximum limit is 10 digits").required("Required"),location:o.Ry().shape({address:o.Z_(),coordinates:o.IX()}).required("Location Required"),skills:o.IX().min(1,"Required"),industryExp:o.Rx().max(20,"Cannot exceed 20 years of Experience").required("Required")})},ForgotPassWordSchema:function(){return o.Ry().shape({email:o.Z_().trim().email("Please enter a valid email").required("Email required")})},ResetPasswordSchema:function(){return o.Ry().shape({newPassword:o.Z_().trim().required("Password filed is required"),confirmPassword:o.Z_().trim().required("Password field is required").test("check confirmPassword","Password does not match",(function(e){return e===this.parent.newPassword}))})}};n.Z=r},5596:function(e,n,t){t.d(n,{Hh:function(){return s},Iq:function(){return d},SM:function(){return c},bp:function(){return u},s8:function(){return l},y1:function(){return i}});var o=t(2982),a=t(1413),r=t(7210),i=function(e,n,t){return function(o){if(navigator.onLine){var i=(0,a.Z)((0,a.Z)({},e),{},{deviceId:"string"});delete i.checked,r.Z.API.postApiCall(r.Z.endpoint.signUp,i,(function(e){var a=e.data;if(a.statusCode===r.Z.Constants.api_success_code.success){var i=a.data,s=i.accessToken,c=i.email,l=i.name,d=i.userId;localStorage.setItem("verify_account_token",s),localStorage.setItem("user_email",c),localStorage.setItem("user_name",l),localStorage.setItem("user_id",d),t.push(r.Z.Pathname.VERIFY),o({type:r.Z.ActionName.LOADING,payload:!1}),n(!1)}else n(!1),r.Z.showAlert(2,a.message),o({type:r.Z.ActionName.LOADING,payload:!1})}),(function(e){n(!1);var t=e.data;console.log(t),o({type:r.Z.ActionName.LOADING,payload:!1})}))}else o({type:r.Z.ActionName.LOADING,payload:!1})}},s=function(){return function(e){if(navigator.onLine){var n={email:localStorage.getItem("user_email")||"",type:1,deviceId:"string",deviceToken:localStorage.getItem("verify_account_token")||""};r.Z.API.postApiCall(r.Z.endpoint.resendLink,n,(function(n){n.data.statusCode,r.Z.Constants.api_success_code.success,e({type:r.Z.ActionName.LOADING,payload:!1})}),(function(n){n.data;e({type:r.Z.ActionName.LOADING,payload:!1})}))}else e({type:r.Z.ActionName.LOADING,payload:!1})}},c=function(){return function(e){r.Z.API.getApiCall(r.Z.endpoint.skills,"",(function(n){var t=n.data;200===t.statusCode&&(console.log(t),e({type:r.Z.ActionName.SKILLS,payload:{skills:(0,o.Z)(t.data.skills)}}))}),(function(e){e.data}))}},l=function(){return function(e){if(navigator.onLine){var n={token:localStorage.getItem("verify_account_token")||"",deviceId:"3",deviceToken:localStorage.getItem("user_id")||""};console.log(n),r.Z.API.postApiCall(r.Z.endpoint.verify,n,(function(n){var t=n.data;console.log(t),t.statusCode===r.Z.Constants.api_success_code.success?(localStorage.setItem("accessToken",t.data.accessToken),e({type:r.Z.ActionName.LOADING,payload:!1})):e({type:r.Z.ActionName.LOADING,payload:!1})}),(function(n){var t=n.data;console.log(t),e({type:r.Z.ActionName.LOADING,payload:!1})}))}else e({type:r.Z.ActionName.LOADING,payload:!1})}},d=function(e,n){return function(t,o){if(navigator.onLine){var i=o().profileSelectorReducer,s=i.userType,c=i.mobileNo,l=e.location,d=(0,a.Z)({},e);delete d.location,d.skills=d.skills.map((function(e){return e.TYPE}));var u={userType:s,mobileNo:"".concat(c),location:l,companySoleTraderDetail:(0,a.Z)({},d),deviceId:"3",deviceToken:localStorage.getItem("user_id")||""};r.Z.API.putApiCall(r.Z.endpoint.profileComplete,u,(function(e){e.data.statusCode===r.Z.Constants.api_success_code.success?(t({type:r.Z.ActionName.LOADING,payload:!1}),localStorage.clear(),n.push(r.Z.Pathname.Dashboard)):t({type:r.Z.ActionName.LOADING,payload:!1})}),(function(e){e.data;t({type:r.Z.ActionName.LOADING,payload:!1})}))}else t({type:r.Z.ActionName.LOADING,payload:!1})}},u=function(e,n){return function(t,o){if(navigator.onLine){var i=o().profileSelectorReducer,s=i.userType,c=i.mobileNo,l=i.companyDetail,d=e.location,u=(0,a.Z)({},e);delete u.location,u.availableTrades=u.skills.map((function(e){return e.TYPE})),delete u.skills;var m={userType:s,mobileNo:"".concat(c),location:d,companyDetail:(0,a.Z)((0,a.Z)({},u),l),deviceId:"3",deviceToken:localStorage.getItem("user_id")||""};console.log(m),r.Z.API.putApiCall(r.Z.endpoint.profileComplete,m,(function(e){var o=e.data;o.statusCode===r.Z.Constants.api_success_code.success?(t({type:r.Z.ActionName.LOADING,payload:!1}),localStorage.clear(),n.push(r.Z.Pathname.Dashboard),r.Z.showAlert(1,o.message)):t({type:r.Z.ActionName.LOADING,payload:!1})}),(function(e){e.data;t({type:r.Z.ActionName.LOADING,payload:!1})}))}else t({type:r.Z.ActionName.LOADING,payload:!1})}}},823:function(e,n,t){t.r(n);var o=t(4942),a=t(885),r=t(2791),i=t(9386),s=t(336),c=t(8546),l=t(7210),d=t(4312),u=t(1523),m=t(5398),p=t(3967),f=t(890),h=t(3466),x=t(9174),g=t(3329),Z=t(2506),b=t(5523),y=t(6907),v=t(8566),N=t(5596),k=t(6030),w=t(9271),A=t(184);n.default=function(){var e=(0,p.Z)(),n=(0,m.y)({theme:e}),t=(0,r.useState)(!1),I=(0,a.Z)(t,2),C=I[0],S=I[1],P=l.Z.CommonFunctions.collectClass,j=(0,k.I0)(),L=(0,w.k6)();return(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(y.B6,{children:(0,A.jsxs)("div",{className:n.loginContainer,children:[(0,A.jsxs)("div",{children:[(0,A.jsx)(f.Z,{sx:{mt:"5%",ml:"90%",fontWeight:"500",color:"#BDBDBD"},children:"01/04"}),(0,A.jsx)("div",{className:n.details,children:(0,A.jsx)(f.Z,{sx:{fontWeight:"600",color:"#828282"},children:"Account Info"})})]}),(0,A.jsxs)(g.Z,{className:n.titleContainer,children:[(0,A.jsx)(i.Z,{style:n.brandLogo,imgUrl:v.Z.Logo}),(0,A.jsx)("div",{className:n.title,children:(0,A.jsx)(f.Z,{sx:(0,o.Z)({fontSize:"24px",fontWeight:"bold",fontStretch:"normal",lineHeight:"normal",letterSpacing:"normal",color:"#4f4f4f",float:"left",marginTop:"4%"},e.breakpoints.down(1025),{fontSize:"20px",marginLeft:"2%",marginTop:"4%"}),children:"Create an account"})}),(0,A.jsx)("div",{className:n.title,children:(0,A.jsx)(f.Z,{sx:(0,o.Z)({fontSize:"15px",fontStretch:"normal",lineHeight:"normal",letterSpacing:"normal",color:"#687173",float:"left",marginTop:"2% !important",marginBottom:"8% !important"},e.breakpoints.down(1025),{fontSize:"12px",marginLeft:"2%",marginTop:"4%"}),children:"Sign up with your email address to get started."})})]}),(0,A.jsx)(Z.J9,{initialValues:{name:"",email:"",password:"",checked:!1},validationSchema:s.Z.SignupSchema,onSubmit:function(e,n){var t=n.setSubmitting;j((0,N.y1)(e,t,L))},children:(0,A.jsxs)(Z.l0,{autoComplete:"new",children:[(0,A.jsx)("div",{className:n.lables,children:(0,A.jsx)(f.Z,{children:"YOUR FULL NAME*"})}),(0,A.jsx)("div",{className:n.inputField,children:(0,A.jsx)(c.Z,{placeholder:"Enter your name",name:"name",type:"text"})}),(0,A.jsx)("div",{className:n.lables,children:(0,A.jsx)(f.Z,{children:"EMAIL ADDRESS*"})}),(0,A.jsx)("div",{className:n.inputField,children:(0,A.jsx)(c.Z,{placeholder:"Enter email address",name:"email",type:"text"})}),(0,A.jsxs)("div",{className:n.lables,children:[(0,A.jsx)(f.Z,{children:"PASSWORD*"}),(0,A.jsx)(f.Z,{className:n.lables})]}),(0,A.jsx)("div",{className:n.inputField,children:(0,A.jsx)(c.Z,{className:P([n.endIconContainer]),placeholder:"Enter your password",name:"password",type:C?"text":"password",InputProps:{endAdornment:(0,A.jsx)(h.Z,{position:"end",children:(0,A.jsx)(f.Z,{sx:{cursor:"pointer"},component:"span",onClick:function(){return S(!C)},children:C?"Hide":"Show"})})}})}),(0,A.jsx)("div",{className:n.checkBoxContainer,children:(0,A.jsx)(b.Z,{control:(0,A.jsx)(x.Z,{name:"checked",required:!0,className:n.ckBox}),label:(0,A.jsx)(r.Fragment,{children:(0,A.jsx)("div",{style:{textAlign:"left",fontSize:14,marginTop:"0 px"},children:"I agree to terms & conditions."})}),className:n.checkBox,sx:{background:" #FFFFFF",marginTop:"0px",color:e.palette.secondary.light}})}),(0,A.jsx)(d.Io,{className:n.activeButton,sx:{color:"#fff",textDecoration:"none",textTransform:"capitalize"},variant:"contained",type:"submit",onClick:function(){return L.push(l.Z.Pathname.VERIFY)},children:(0,A.jsx)(f.Z,{className:n.lables,children:"Register Account"})}),(0,A.jsxs)(f.Z,{className:n.dontHaveAccount,sx:{color:"#686c6e",marginTop:"5%"},children:["Already have an account?",(0,A.jsxs)("b",{children:[(0,A.jsx)(u.rU,{to:l.Z.Pathname.LOGIN,children:" Login"})," "]})]})]})})]})})})}},5398:function(e,n,t){t.d(n,{y:function(){return a}});var o=t(4942),a=(0,t(2455).Z)({loginContainer:function(e){var n=e.theme;return(0,o.Z)({width:"90% !important",height:"89% !important",marginTop:"4%",display:"flex",flexDirection:"column",justifyContent:"center"},n.breakpoints.down(1024),{padding:"50px",justifyContent:"center"})},details:function(e){var n=e.theme;return(0,o.Z)({width:"50%",marginLeft:"64.5%"},n.breakpoints.down(1300),{marginLeft:"64"})},stepper:function(){return{marginLeft:"80%"}},titleContainer:function(e){e.theme;return{display:"flex",flexDirection:"column",width:"100%",alignItems:"right"}},brandLogo:function(e){var n,t=e.theme;return{width:"100%","& figure":(n={margin:0,width:"140px",height:"70px"},(0,o.Z)(n,t.breakpoints.up(1920),{width:"200px",height:"100px"}),(0,o.Z)(n,t.breakpoints.up(2560),{width:"240px",height:"120px"}),n)}},checkBoxContainer:function(){return{float:"left"}},checkBox:function(){return{background:" #FFFFFF",boxSizing:"border-box",marginBottom:"5px","&.css-rfs483-MuiFormControlLabel-root":{marginLeft:"-26px",marginRight:"0px",width:"100%"}}},ckBox:function(){return{"&.css-3zq233-MuiButtonBase-root-MuiCheckbox-root.Mui-checked":{color:"#000"}}},endIconContainer:function(){return{backgroundColor:"#0da4ce"}},title:function(e){e.theme;return{width:"100%"}},verifyTitle:function(e){e.theme;return{border:"1 px solid black"}},resendMail:function(){return{"&:hover":{background:"none"}}},lables:function(e){e.theme;return{float:"left",marginTop:"1.5%",marginBottom:"1.5%"}},forgotPassword:function(){return{display:"flex",justifyContent:"space-between",marginBottom:"3%","& a":{textDecoration:"none",color:"#687173"}}},profileSelector:function(){return{border:"2px solid grey",width:"43%",cursor:"pointer"}},inputField:function(){return{marginBottom:"1%","& input::-webkit-outer-spin-button":{WebkitAppearance:"none",margin:0},"& input::-webkit-inner-spin-button":{webkitAppearance:"none",margin:0}}},textfieldClass:function(){return{}},selectProfile:function(e){var n,t=e.theme;return{display:"flex",height:"100px",width:"100%",marginRight:"20%",alignItems:"center",justifyContent:"center","& figure":(n={},(0,o.Z)(n,t.breakpoints.up(1920),{width:"200px",height:"100px"}),(0,o.Z)(n,t.breakpoints.up(2560),{width:"240px",height:"120px"}),n)}},normalButton:function(){return{marginTop:"5%",width:"100%"}},activeButton:function(){return{color:"#ffffff",backgroundColor:"#0da4ce",maxHeight:"40px"}},formCommon:function(){return{alignItems:"flex-start"}},buttonContainer:function(){return{marginTop:"5%",width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between"}},dontHaveAccount:function(){return{"& a":{textDecoration:"none",color:"#687173"}}},tools:function(){return{display:"flex",width:"100%"}}})}}]);
//# sourceMappingURL=823.1f40dacd.chunk.js.map