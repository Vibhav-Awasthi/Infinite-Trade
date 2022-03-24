"use strict";(self.webpackChunkreact_js=self.webpackChunkreact_js||[]).push([[11],{8546:function(e,n,t){var o=t(4942),r=t(1413),a=t(885),i=t(5987),s=(t(2791),t(2506)),c=t(7264),l=t(184),d=["name"];n.Z=function(e){var n=e.name,t=(0,i.Z)(e,d),u=(0,s.U$)(n),m=(0,a.Z)(u,2),h=m[0],f=m[1];console.log(n,f);var p=(0,r.Z)((0,r.Z)((0,r.Z)({},t),h),{},{fullWidth:!0,variant:"outlined",value:h.value||""});return f&&f.touched&&f.error&&(p.error=!0,p.helperText=f.error),(0,l.jsx)("div",{children:(0,l.jsx)(c.Z,(0,r.Z)({size:"small",sx:(0,o.Z)({"& .MuiOutlinedInput-root":{"&.Mui-focused fieldset":{boxShadow:"-2px 0px 23px -2px rgba(0,0,0,0.33)",border:"1px solid #000000"}}},"& fieldset",{borderRadius:0})},p))})}},336:function(e,n,t){var o=t(1089),r=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,a=/^[0-9]*$/,i={LoginSchema:function(){return o.Ry().shape({email:o.Z_().trim().email("Please enter valid email").max(50,"Email can be maximum of hundred characters").required("Email field cannot be blank"),password:o.Z_().trim().required("Password field cannot be blank")})},SignupSchema:function(){return o.Ry().shape({name:o.Z_().trim().max(100,"Name can be maximum of hundred characters").required("Name field cannot be blank"),email:o.Z_().trim().email("Please enter valid email").max(100,"Email can be maximum of hundred characters").required("Email field cannot be blank"),password:o.Z_().trim().required("Password field cannot be blank"),checked:o.O7().oneOf([!0],"Please mark the checkbox !").required("Please mark the checkbox !")})},ChangePasswordScheema:function(){return o.Ry().shape({currentpassword:o.Z_().trim().required("Current Password field cannot be blank"),newpassword:o.Z_().trim().min(6,"Password should be minimum of six characters").max(20,"Password should be maximum of twenty characters").required("New Password field cannot be blank").test("notBothAtTheSameTime","Current Password and New Password should not be the same",(function(e){return this.parent.currentpassword!==e}))})},CompanyContactSchema:function(){return o.Ry().shape({mobileNo:o.Z_().required("Please enter your phone number").matches(r,"Phone number is not valid").min(10,"to short").max(10,"to long"),officeNo:o.Z_().required("Please enter your Office number").matches(r,"Office number is not valid").min(10,"to short").max(10,"to long")})},MobileNumber:function(){return o.Ry().shape({PhoneNumber:o.Z_().required("Please enter your phone number").matches(r,"Phone number is not valid").min(10,"to short").max(10,"to long")})},BusinessDetailSchema:function(){return o.Ry().shape({name:o.Z_().trim().max(100,"Name can be maximum of hundred characters").required("Name field cannot be blank"),phone_number:o.Z_().required("Please enter your phone number").matches(r,"Phone number is not valid").min(10,"to short").max(10,"to long"),location:o.Ry().required("Please enter the location")})},SoleTraderSchema:function(){return o.Ry().shape({businessName:o.Z_().trim().required("Required"),abnNumber:o.Z_().required("Please enter your phone number").matches(r,"Phone number is not valid").min(10,"to short").max(10,"to long"),location:o.Ry().shape({address:o.Z_(),coordinates:o.IX()}).required("Location Required").nullable(),skills:o.IX().min(1,"This field is required! "),industryExp:o.Z_().max(20,"Cannot exceed 20 years of Experience").matches(a,"Experience should be of number type").required("Please enter your industry experience")})},ForgotPassWordSchema:function(){return o.Ry().shape({email:o.Z_().trim().email("Please enter a valid email").required("Email required")})},ResetPasswordSchema:function(){return o.Ry().shape({newPassword:o.Z_().trim().required("Password filed is required"),confirmPassword:o.Z_().trim().required("Password field is required").test("check confirmPassword","Password does not match",(function(e){return e===this.parent.newPassword}))})}};n.Z=i},111:function(e,n,t){t.d(n,{Hh:function(){return c},c0:function(){return s},gF:function(){return i},x4:function(){return a}});var o=t(1413),r=t(7210),a=function(e,n){return function(t){if(navigator.onLine){var a=(0,o.Z)((0,o.Z)({},e),{},{deviceId:"3",deviceToken:"deviceToken"});console.log(a),r.Z.API.postApiCall(r.Z.endpoint.login,a,(function(e){var o=e.data;console.log(o),o.statusCode===r.Z.Constants.api_success_code.success?(r.Z.showAlert(1,o.message),n.push(r.Z.Pathname.Dashboard),t({type:r.Z.ActionName.LOADING,payload:!1})):(r.Z.showAlert(2,o.message),t({type:r.Z.ActionName.LOADING,payload:!1}))}),(function(e){var n=e.data;console.log(n,e),r.Z.showAlert(2,n.message),t({type:r.Z.ActionName.LOADING,payload:!1})}))}else t({type:r.Z.ActionName.LOADING,payload:!1})}},i=function(e,n){return function(t){if(navigator.onLine){var a=(0,o.Z)((0,o.Z)({},e),{},{deviceId:"3"});console.log(a),r.Z.API.postApiCall(r.Z.endpoint.forgotPassword,a,(function(e){var o=e.data;o.statusCode===r.Z.Constants.api_success_code.success?(console.log(o),n.push(r.Z.Pathname.Link_SENT),t({type:r.Z.ActionName.LOADING,payload:!1}),r.Z.showAlert(1,o.message)):t({type:r.Z.ActionName.LOADING,payload:!1})}),(function(e){var n=e.data;r.Z.showAlert(2,n.message),t({type:r.Z.ActionName.LOADING,payload:!1})}))}else t({type:r.Z.ActionName.LOADING,payload:!1})}},s=function(e,n,t){return function(o){if(!navigator.onLine)return r.Z.showAlert(2,"Please check your internet connection!"),void o({type:r.Z.ActionName.LOADING,payload:!1});var a={token:n.split("=")[1],newPassword:e.newPassword,deviceId:localStorage.getItem("user_id")?localStorage.getItem("user_id"):"3"};console.log(a),r.Z.API.postApiCall(r.Z.endpoint.resetPassword,a,(function(e){var n=e.data;n.statusCode===r.Z.Constants.api_success_code.success?(t.push(r.Z.Pathname.LOGIN),r.Z.showAlert(1,n.message),o({type:r.Z.ActionName.LOADING,payload:!1})):o({type:r.Z.ActionName.LOADING,payload:!1})}),(function(e){var n=e.data;console.log(n),r.Z.showAlert(2,n.message),o({type:r.Z.ActionName.LOADING,payload:!1})}))}},c=function(){return function(e){if(!navigator.onLine)return r.Z.showAlert(2,"Please check your internet connection!"),void e({type:r.Z.ActionName.LOADING,payload:!1});var n={email:localStorage.getItem("user_email")||"",type:1,deviceId:"string",deviceToken:localStorage.getItem("verify_account_token")||""};r.Z.API.postApiCall(r.Z.endpoint.resendLink,n,(function(n){n.data.statusCode,r.Z.Constants.api_success_code.success,e({type:r.Z.ActionName.LOADING,payload:!1})}),(function(n){var t=n.data;r.Z.showAlert(2,t.message),e({type:r.Z.ActionName.LOADING,payload:!1})}))}}},2011:function(e,n,t){t.r(n);var o=t(4942),r=(t(2791),t(9386)),a=t(336),i=t(8546),s=t(4312),c=t(9271),l=t(8288),d=t(3967),u=t(890),m=t(3329),h=t(2506),f=t(6907),p=t(8566),Z=t(111),g=t(6030),x=t(184);n.default=function(){var e=(0,d.Z)(),n=(0,l.y)({theme:e}),t=(0,c.k6)(),y=(0,g.I0)();return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(f.B6,{children:(0,x.jsxs)("div",{className:n.loginContainer,children:[(0,x.jsxs)(m.Z,{className:n.titleContainer,children:[(0,x.jsx)(r.Z,{style:n.brandLogo,imgUrl:p.Z.Logo}),(0,x.jsx)("div",{className:n.title,children:(0,x.jsx)(u.Z,{sx:(0,o.Z)({fontSize:"24px",fontWeight:"bold",fontStretch:"normal",lineHeight:"normal",letterSpacing:"normal",color:"#4f4f4f",float:"left",marginTop:"4%"},e.breakpoints.down(1025),{fontSize:"20px",marginLeft:"2%",marginTop:"4%"}),children:"Forgot Password"})}),(0,x.jsx)("div",{className:n.title,children:(0,x.jsx)(u.Z,{sx:(0,o.Z)({fontSize:"15px",fontStretch:"normal",lineHeight:"normal",letterSpacing:"normal",color:"#687173",float:"left",marginTop:"4%"},e.breakpoints.down(1025),{fontSize:"12px",marginLeft:"2%",marginTop:"4%"}),children:"To reset your password, please enter your email address"})})]}),(0,x.jsx)(h.J9,{initialValues:{email:""},validationSchema:a.Z.ForgotPassWordSchema,onSubmit:function(e,n){n.setSubmitting;console.log(e),y((0,Z.gF)(e,t))},children:(0,x.jsxs)(h.l0,{children:[(0,x.jsx)("div",{className:n.lables,children:(0,x.jsx)(u.Z,{sx:{fontSize:"16px",color:"#424546"},children:"EMAIL ADDRESS"})}),(0,x.jsx)("div",{className:n.inputField,children:(0,x.jsx)(i.Z,{placeholder:"Enter Email Address",name:"email",type:"email"})}),(0,x.jsx)(s.Io,{className:n.activeButton,sx:{color:"#fff",textTransform:"capitalize"},variant:"contained",children:"Send"})]})})]})})})}},8288:function(e,n,t){t.d(n,{y:function(){return r}});var o=t(4942),r=(0,t(2455).Z)({loginContainer:function(e){var n=e.theme;return(0,o.Z)({display:"flex",flexDirection:"column",justifyContent:"center",width:"88% !important",height:"88% !important",marginLeft:"7%"},n.breakpoints.down(1024),{justifyContent:"center",marginTop:"30%"})},verifyContainer:function(e){var n=e.theme;return(0,o.Z)({marginTop:"35%",width:"90% !important",height:"auto !important",display:"flex",flexDirection:"column",justifyContent:"center"},n.breakpoints.down(1024),{width:"85% !important",marginLeft:"5%",justifyContent:"center"})},titleContainer:function(e){e.theme;return{display:"flex",flexDirection:"column",width:"100%"}},brandLogo:function(e){var n,t=e.theme;return{width:"100%","& figure":(n={margin:0,width:"153px",height:"46px"},(0,o.Z)(n,t.breakpoints.up(1920),{width:"200px",height:"100px"}),(0,o.Z)(n,t.breakpoints.up(2560),{width:"240px",height:"120px"}),n)}},title:function(e){e.theme;return{width:"100%"}},lables:function(e){e.theme;return{float:"left",marginTop:"8%",marginBottom:"1.5%"}},verifyTitle:function(e){e.theme;return{border:"1 px solid black"}},buttonContainer:function(e){var n=e.theme;return(0,o.Z)({marginTop:"5%",width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between"},n.breakpoints.down(1025),{width:"100%"})},forgotPassword:function(){return{display:"flex",justifyContent:"space-between",marginBottom:"3%","& a":{textDecoration:"none",color:"#687173"}}},inputField:function(){return{marginBottom:"5%"}},activeButton:function(){return{color:"#ffffff",backgroundColor:"#0da4ce",maxHeight:"40px"}},formCommon:function(){return{alignItems:"flex-start"}},dontHaveAccount:function(){return{"& a":{textDecoration:"none",color:"#687173"}}},endIconContainer:function(){return{backgroundColor:"#0da4ce"}}})}}]);
//# sourceMappingURL=11.fe517e67.chunk.js.map