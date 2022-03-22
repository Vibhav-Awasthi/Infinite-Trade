"use strict";(self.webpackChunkreact_js=self.webpackChunkreact_js||[]).push([[50],{8546:function(e,n,t){var o=t(4942),a=t(1413),r=t(885),i=t(5987),s=(t(2791),t(2506)),c=t(7264),l=t(184),d=["name"];n.Z=function(e){var n=e.name,t=(0,i.Z)(e,d),u=(0,s.U$)(n),m=(0,r.Z)(u,2),p=m[0],h=m[1],f=(0,a.Z)((0,a.Z)((0,a.Z)({},t),p),{},{fullWidth:!0,variant:"outlined",value:p.value||""});return h&&h.touched&&h.error&&(f.error=!0,f.helperText=h.error),(0,l.jsx)("div",{children:(0,l.jsx)(c.Z,(0,a.Z)({size:"small",sx:(0,o.Z)({"& .MuiOutlinedInput-root":{"&.Mui-focused fieldset":{boxShadow:"-2px 0px 23px -2px rgba(0,0,0,0.33)",border:"1px solid #000000"}}},"& fieldset",{borderRadius:0})},f))})}},336:function(e,n,t){var o=t(1089),a=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,r={LoginSchema:function(){return o.Ry().shape({email:o.Z_().trim().email("Please enter valid email").max(50,"Email can be maximum of hundred characters").required("Email field cannot be blank"),password:o.Z_().trim().required("Password field cannot be blank")})},SignupSchema:function(){return o.Ry().shape({name:o.Z_().trim().max(100,"Name can be maximum of hundred characters").required("Name field cannot be blank"),email:o.Z_().trim().email("Please enter valid email").max(100,"Email can be maximum of hundred characters").required("Email field cannot be blank"),password:o.Z_().trim().required("Password field cannot be blank"),checked:o.O7().oneOf([!0],"Please mark the checkbox !").required("Please mark the checkbox !")})},ChangePasswordScheema:function(){return o.Ry().shape({currentpassword:o.Z_().trim().required("Current Password field cannot be blank"),newpassword:o.Z_().trim().min(6,"Password should be minimum of six characters").max(20,"Password should be maximum of twenty characters").required("New Password field cannot be blank").test("notBothAtTheSameTime","Current Password and New Password should not be the same",(function(e){return this.parent.currentpassword!==e}))})},CompanyContactSchema:function(){return o.Ry().shape({mobileNo:o.Z_().required("Please enter your phone number").matches(a,"Phone number is not valid").min(10,"to short").max(10,"to long"),officeNo:o.Z_().required("Please enter your Office number").matches(a,"Office number is not valid").min(10,"to short").max(10,"to long")})},MobileNumber:function(){return o.Ry().shape({PhoneNumber:o.Z_().required("Please enter your phone number").matches(a,"Phone number is not valid").min(10,"to short").max(10,"to long")})},BusinessDetailSchema:function(){return o.Ry().shape({name:o.Z_().trim().max(100,"Name can be maximum of hundred characters").required("Name field cannot be blank"),phone_number:o.Z_().required("Please enter your phone number").matches(a,"Phone number is not valid").min(10,"to short").max(10,"to long"),location:o.Ry().required("Please enter the location")})},SoleTraderSchema:function(){return o.Ry().shape({businessName:o.Z_().trim().required("Required"),abnNumber:o.Z_().required("Please enter your phone number").matches(a,"Phone number is not valid").min(10,"to short").max(10,"to long"),location:o.Ry().shape({address:o.Z_(),coordinates:o.IX()}).required("Location Required"),skills:o.IX().min(1,"Required"),industryExp:o.Rx().max(20,"Cannot exceed 20 years of Experience").required("Required")})},ForgotPassWordSchema:function(){return o.Ry().shape({email:o.Z_().trim().email("Please enter a valid email").required("Email required")})},ResetPasswordSchema:function(){return o.Ry().shape({newPassword:o.Z_().trim().required("Password filed is required"),confirmPassword:o.Z_().trim().required("Password field is required").test("check confirmPassword","Password does not match",(function(e){return e===this.parent.newPassword}))})}};n.Z=r},5596:function(e,n,t){t.d(n,{Hh:function(){return s},Iq:function(){return d},SM:function(){return c},bp:function(){return u},s8:function(){return l},y1:function(){return i}});var o=t(2982),a=t(1413),r=t(7210),i=function(e,n,t){return function(o){if(navigator.onLine){var i=(0,a.Z)((0,a.Z)({},e),{},{deviceId:"string"});delete i.checked,r.Z.API.postApiCall(r.Z.endpoint.signUp,i,(function(e){var a=e.data;if(a.statusCode===r.Z.Constants.api_success_code.success){var i=a.data,s=i.accessToken,c=i.email,l=i.name,d=i.userId;localStorage.setItem("verify_account_token",s),localStorage.setItem("user_email",c),localStorage.setItem("user_name",l),localStorage.setItem("user_id",d),t.push(r.Z.Pathname.VERIFY),o({type:r.Z.ActionName.LOADING,payload:!1}),n(!1)}else n(!1),r.Z.showAlert(2,a.message),o({type:r.Z.ActionName.LOADING,payload:!1})}),(function(e){n(!1);var t=e.data;console.log(t),o({type:r.Z.ActionName.LOADING,payload:!1}),r.Z.showAlert(2,t.message)}))}else o({type:r.Z.ActionName.LOADING,payload:!1})}},s=function(){return function(e){if(navigator.onLine){var n={email:localStorage.getItem("user_email")||"",type:1,deviceId:"string",deviceToken:localStorage.getItem("verify_account_token")||""};r.Z.API.postApiCall(r.Z.endpoint.resendLink,n,(function(n){n.data.statusCode,r.Z.Constants.api_success_code.success,e({type:r.Z.ActionName.LOADING,payload:!1})}),(function(n){n.data;e({type:r.Z.ActionName.LOADING,payload:!1})}))}else e({type:r.Z.ActionName.LOADING,payload:!1})}},c=function(){return function(e){r.Z.API.getApiCall(r.Z.endpoint.skills,"",(function(n){var t=n.data;200===t.statusCode&&(console.log(t),e({type:r.Z.ActionName.SKILLS,payload:{skills:(0,o.Z)(t.data.skills)}}))}),(function(e){e.data}))}},l=function(){return function(e){if(navigator.onLine){var n={token:localStorage.getItem("verify_account_token")||"",deviceId:"3",deviceToken:localStorage.getItem("user_id")||""};console.log(n),r.Z.API.postApiCall(r.Z.endpoint.verify,n,(function(n){var t=n.data;console.log(t),t.statusCode===r.Z.Constants.api_success_code.success?(localStorage.setItem("accessToken",t.data.accessToken),e({type:r.Z.ActionName.LOADING,payload:!1})):e({type:r.Z.ActionName.LOADING,payload:!1})}),(function(n){var t=n.data;console.log(t),e({type:r.Z.ActionName.LOADING,payload:!1})}))}else e({type:r.Z.ActionName.LOADING,payload:!1})}},d=function(e,n){return function(t,o){if(navigator.onLine){var i=o().profileSelectorReducer,s=i.userType,c=i.mobileNo,l=e.location,d=(0,a.Z)({},e);delete d.location,d.skills=d.skills.map((function(e){return e.TYPE}));var u={userType:s,mobileNo:"".concat(c),location:l,companySoleTraderDetail:(0,a.Z)({},d),deviceId:"3",deviceToken:localStorage.getItem("user_id")||"DeviceToken"};r.Z.API.putApiCall(r.Z.endpoint.profileComplete,u,(function(e){e.data.statusCode===r.Z.Constants.api_success_code.success?(t({type:r.Z.ActionName.LOADING,payload:!1}),localStorage.clear(),n.push(r.Z.Pathname.Dashboard)):t({type:r.Z.ActionName.LOADING,payload:!1})}),(function(e){e.data;t({type:r.Z.ActionName.LOADING,payload:!1})}))}else t({type:r.Z.ActionName.LOADING,payload:!1})}},u=function(e,n){return function(t,o){if(navigator.onLine){var i=o().profileSelectorReducer,s=i.userType,c=i.mobileNo,l=i.companyDetail,d=e.location,u=(0,a.Z)({},e);delete u.location,u.availableTrades=u.skills.map((function(e){return e.TYPE})),delete u.skills;var m={userType:s,mobileNo:"".concat(c),location:d,companyDetail:(0,a.Z)((0,a.Z)({},u),l),deviceId:"3",deviceToken:localStorage.getItem("user_id")||"deviceToken"};console.log(m),r.Z.API.putApiCall(r.Z.endpoint.profileComplete,m,(function(e){var o=e.data;o.statusCode===r.Z.Constants.api_success_code.success?(t({type:r.Z.ActionName.LOADING,payload:!1}),localStorage.clear(),n.push(r.Z.Pathname.Dashboard),r.Z.showAlert(1,o.message)):t({type:r.Z.ActionName.LOADING,payload:!1})}),(function(e){e.data;t({type:r.Z.ActionName.LOADING,payload:!1})}))}else t({type:r.Z.ActionName.LOADING,payload:!1})}}},50:function(e,n,t){t.r(n),t.d(n,{default:function(){return D}});var o=t(4942),a=t(885),r=t(2791),i=t(9386),s=t(336),c=t(8546),l=t(7210),d=t(1413),u=t(5987),m=t(6362),p=t(9012),h=t(5523),f=t(9174),x=t(7071),Z=t(2506),g=t(184),b=["name","label"],y=function(e){var n=e.name,t=e.label,o=((0,u.Z)(e,b),(0,Z.u6)().setFieldValue),r=(0,Z.U$)(n),i=(0,a.Z)(r,2),s=i[0],c=i[1],l=(0,d.Z)((0,d.Z)({},s),{},{onChange:function(e){var t=e.target.checked;o(n,t)}});return console.log(c),(0,g.jsxs)(m.Z,(0,d.Z)((0,d.Z)({},{}),{},{children:[(0,g.jsx)(p.Z,{children:(0,g.jsx)(h.Z,{control:(0,g.jsx)(f.Z,(0,d.Z)({required:!0,sx:{color:"black","&.Mui-checked":{color:"black"}}},l)),label:t})}),(0,g.jsx)(x.Z,{sx:{color:"red"},children:Boolean(c&&c.touched)&&c.error})]}))},v=t(4312),w=t(1523),k=t(5398),N=t(3967),A=t(890),C=t(3466),I=t(3329),S=t(6907),j=t(8566),P=t(5596),L=t(6030),_=t(9271),D=function(){var e=(0,N.Z)(),n=(0,k.y)({theme:e}),t=(0,r.useState)(!1),d=(0,a.Z)(t,2),u=d[0],m=d[1],p=l.Z.CommonFunctions.collectClass,h=(0,L.I0)(),f=(0,_.k6)();return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(S.B6,{children:(0,g.jsxs)("div",{className:n.signupContainer,children:[(0,g.jsxs)("div",{className:n.loginContainer,children:[(0,g.jsxs)(I.Z,{className:n.titleContainer,children:[(0,g.jsx)(i.Z,{style:n.brandLogo,imgUrl:j.Z.Logo}),(0,g.jsx)("div",{className:n.title,children:(0,g.jsx)(A.Z,{sx:(0,o.Z)({fontSize:"24px",fontWeight:"bold",fontStretch:"normal",lineHeight:"normal",letterSpacing:"normal",color:"#4f4f4f",float:"left",marginTop:"4%"},e.breakpoints.down(1025),{fontSize:"20px",marginLeft:"2%",marginTop:"4%"}),children:"Create an account"})}),(0,g.jsx)("div",{className:n.title,children:(0,g.jsx)(A.Z,{sx:(0,o.Z)({fontSize:"15px",fontStretch:"normal",lineHeight:"normal",letterSpacing:"normal",color:"#687173",float:"left",marginTop:"2% !important",marginBottom:"8% !important"},e.breakpoints.down(1025),{fontSize:"12px",marginLeft:"2%",marginTop:"4%"}),children:"Sign up with your email address to get started."})})]}),(0,g.jsx)(Z.J9,{initialValues:{name:"",email:"",password:"",checked:!1},validationSchema:s.Z.SignupSchema,onSubmit:function(e,n){var t=n.setSubmitting;h((0,P.y1)(e,t,f))},children:(0,g.jsxs)(Z.l0,{autoComplete:"new",children:[(0,g.jsx)("div",{className:n.lables,children:(0,g.jsx)(A.Z,{sx:{fontSize:"16px",color:"#424546"},children:"YOUR FULL NAME*"})}),(0,g.jsx)("div",{className:n.inputField,children:(0,g.jsx)(c.Z,{placeholder:"Enter your name",name:"name",type:"text"})}),(0,g.jsx)("div",{className:n.lables,children:(0,g.jsx)(A.Z,{sx:{fontSize:"16px",color:"#424546"},children:"EMAIL ADDRESS*"})}),(0,g.jsx)("div",{className:n.inputField,children:(0,g.jsx)(c.Z,{placeholder:"Enter email address",name:"email",type:"text"})}),(0,g.jsxs)("div",{className:n.lables,children:[(0,g.jsx)(A.Z,{sx:{fontSize:"16px",color:"#424546",lineHeight:"22px"},children:"PASSWORD*"}),(0,g.jsx)(A.Z,{className:n.lables})]}),(0,g.jsx)("div",{className:n.inputField,children:(0,g.jsx)(c.Z,{className:p([n.endIconContainer]),placeholder:"Enter your password",name:"password",type:u?"text":"password",InputProps:{endAdornment:(0,g.jsx)(C.Z,{position:"end",children:(0,g.jsx)(A.Z,{sx:{cursor:"pointer"},component:"span",onClick:function(){return m(!u)},children:u?"Hide":"Show"})})}})}),(0,g.jsx)("div",{className:n.checkBoxContainer,children:(0,g.jsx)(y,{required:!0,name:"checked",label:"I agree to terms & conditions"})}),(0,g.jsx)(v.Io,{className:n.activeButton,sx:{color:"#fff",textDecoration:"none",textTransform:"capitalize"},variant:"contained",children:(0,g.jsx)(A.Z,{className:n.lables,children:"Register Account"})}),(0,g.jsxs)(A.Z,{className:n.dontHaveAccount,sx:{color:"#686c6e",marginTop:"5%"},children:["Already have an account?",(0,g.jsxs)("b",{children:[(0,g.jsx)(w.rU,{to:l.Z.Pathname.LOGIN,children:" Login"})," "]})]})]})})]}),(0,g.jsxs)("div",{className:n.step,children:[(0,g.jsxs)(A.Z,{sx:{mt:"5%",ml:"30%",fontSize:"12px",fontWeight:"500",color:"#BDBDBD"},children:[(0,g.jsx)("b",{children:"STEP"})," 01/04"]}),(0,g.jsx)("div",{children:(0,g.jsx)(A.Z,{sx:{fontWeight:"600",ml:"10%",fontSize:"14px",color:"#828282"},children:"Account Info"})})]})]})})})}},5398:function(e,n,t){t.d(n,{y:function(){return a}});var o=t(4942),a=(0,t(2455).Z)({signupContainer:function(e){var n=e.theme;return(0,o.Z)({width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between"},n.breakpoints.down(1024),{justifyContent:"center",flexDirection:"column-reverse"})},loginContainer:function(e){var n=e.theme;return(0,o.Z)({width:"78% !important",height:"auto !important",display:"flex",flexDirection:"column",justifyContent:"center"},n.breakpoints.down(1024),{marginLeft:"10%",width:"80% !important",justifyContent:"center",marginBottom:"30%"})},verifyContainer:function(e){var n=e.theme;return(0,o.Z)({marginTop:"40%",width:"90% !important",height:"auto !important",display:"flex",flexDirection:"column",justifyContent:"center"},n.breakpoints.down(1024),{width:"85% !important",marginLeft:"5%",justifyContent:"center"})},details:function(e){var n=e.theme;return(0,o.Z)({width:"50%",marginLeft:"64.5%"},n.breakpoints.down(1300),{marginLeft:"64"})},step:function(e){var n,t=e.theme;return n={width:"30%",marginTop:"5%"},(0,o.Z)(n,t.breakpoints.between(1400,1025),{width:"30% !important"}),(0,o.Z)(n,t.breakpoints.down(1025),{marginLeft:"60%"}),n},titleContainer:function(e){e.theme;return{display:"flex",flexDirection:"column",width:"100%",alignItems:"right"}},brandLogo:function(e){var n,t=e.theme;return{width:"100%","& figure":(n={margin:0,width:"153px",height:"46px"},(0,o.Z)(n,t.breakpoints.up(1920),{width:"200px",height:"100px"}),(0,o.Z)(n,t.breakpoints.up(2560),{width:"240px",height:"120px"}),n)}},checkBoxContainer:function(){return{float:"left"}},checkBox:function(){return{background:" #FFFFFF",boxSizing:"border-box",marginBottom:"5px","&.css-rfs483-MuiFormControlLabel-root":{marginLeft:"-26px",marginRight:"0px",width:"100%"}}},ckBox:function(){return{"&.css-3zq233-MuiButtonBase-root-MuiCheckbox-root.Mui-checked":{color:"#000"}}},endIconContainer:function(){return{backgroundColor:"#0da4ce"}},title:function(e){e.theme;return{width:"100%"}},verifyTitle:function(e){e.theme;return{border:"1 px solid black"}},resendMail:function(){return{"&:hover":{background:"none"}}},lables:function(e){e.theme;return{float:"left",marginBottom:"3%"}},forgotPassword:function(){return{display:"flex",justifyContent:"space-between",marginBottom:"3%","& a":{textDecoration:"none",color:"#687173"}}},profileSelector:function(e){var n=e.theme;return(0,o.Z)({border:"2px solid grey",width:"43%",cursor:"pointer"},n.breakpoints.down(1025),{height:"105px"})},inputField:function(){return{marginBottom:"2%","& input::-webkit-outer-spin-button":{WebkitAppearance:"none",margin:0},"& input::-webkit-inner-spin-button":{webkitAppearance:"none",margin:0}}},textfieldClass:function(){return{}},selectProfile:function(e){var n,t=e.theme;return{display:"flex",height:"65px",width:"100%",marginRight:"20%",alignItems:"center",justifyContent:"center","& figure":(n={},(0,o.Z)(n,t.breakpoints.up(1920),{width:"200px",height:"100px"}),(0,o.Z)(n,t.breakpoints.up(2560),{width:"240px",height:"120px"}),n)}},normalButton:function(){return{marginTop:"5%",width:"100%"}},activeButton:function(){return{color:"#ffffff",backgroundColor:"#0da4ce",maxHeight:"40px"}},formCommon:function(){return{alignItems:"flex-start"}},buttonContainer:function(e){var n=e.theme;return(0,o.Z)({marginTop:"5%",width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between"},n.breakpoints.down(1025),{width:"100%"})},dontHaveAccount:function(){return{"& a":{textDecoration:"none",color:"#687173"}}},tools:function(){return{display:"flex",width:"100%"}}})}}]);
//# sourceMappingURL=50.9157b5a9.chunk.js.map