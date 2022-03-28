"use strict";(self.webpackChunkreact_js=self.webpackChunkreact_js||[]).push([[11],{8546:function(e,n,t){var a=t(4942),o=t(1413),i=t(885),r=t(5987),s=(t(2791),t(2506)),c=t(3967),l=t(7264),d=t(184),u=["name"];n.Z=function(e){var n,t=e.name,m=(0,r.Z)(e,u),h=(0,s.U$)(t),f=(0,i.Z)(h,2),p=f[0],Z=f[1],g=(0,c.Z)();console.log(t,Z);var x=(0,o.Z)((0,o.Z)((0,o.Z)({},m),p),{},{fullWidth:!0,variant:"outlined",value:p.value||""});return Z&&Z.touched&&Z.error&&(x.error=!0,x.helperText=Z.error),(0,d.jsx)("div",{children:(0,d.jsx)(l.Z,(0,o.Z)({size:"small",sx:(n={"& .MuiOutlinedInput-root":{"&.Mui-focused fieldset":{boxShadow:"-2px 0px 23px -2px rgba(0,0,0,0.33)",border:"1px solid #000000"}}},(0,a.Z)(n,"& fieldset",{borderRadius:0}),(0,a.Z)(n,"& input",(0,a.Z)({},g.breakpoints.down(1024),{height:"45px"})),n)},x))})}},336:function(e,n,t){var a=t(1089),o=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,i=/^[0-9]*$/,r={LoginSchema:function(){return a.Ry().shape({email:a.Z_().trim().email("Please enter valid email").max(50,"Email can be maximum of hundred characters").required("Email field cannot be blank"),password:a.Z_().trim().required("Password field cannot be blank")})},SignupSchema:function(){return a.Ry().shape({name:a.Z_().trim().matches(/^[A-Za-z ]*$/,"Only alphabets are allowed").max(50,"Name can be maximum of 50 characters").min(3,"Name can be minimum of three characters").required("Name field cannot be blank"),email:a.Z_().trim().email("Please enter valid email").max(100,"Email can be maximum of hundred characters").required("Email field cannot be blank"),password:a.Z_().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#!@$%^&*()+=]).{8,}$/,"Whitespace is not allowed").required("Password field cannot be blank"),checked:a.O7().oneOf([!0],"Please mark the checkbox !").required("Please mark the checkbox !")})},ChangePasswordScheema:function(){return a.Ry().shape({currentpassword:a.Z_().trim().required("Current Password field cannot be blank"),newpassword:a.Z_().trim().min(6,"Password should be minimum of six characters").max(20,"Password should be maximum of twenty characters").required("New Password field cannot be blank").test("notBothAtTheSameTime","Current Password and New Password should not be the same",(function(e){return this.parent.currentpassword!==e}))})},CompanyContactSchema:function(){return a.Ry().shape({mobileNo:a.Z_().required("Please enter your phone number").matches(o,"Phone number is not valid").min(10,"Should contain 10 digits").max(10,"Should contain 10 digits"),officeNo:a.Z_().required("Please enter your Office number").matches(o,"Office number is not valid").min(10,"Should contain 10 digits").max(10,"Should contain 10 digits")})},MobileNumber:function(){return a.Ry().shape({PhoneNumber:a.Z_().required("Please enter your phone number").matches(o,"Phone number is not valid").min(10,"Should contain 10 digits").max(10,"Should contain 10 digits")})},BusinessDetailSchema:function(){return a.Ry().shape({name:a.Z_().trim().max(100,"Name can be maximum of hundred characters").required("Name field cannot be blank"),phone_number:a.Z_().required("Please enter your phone number").matches(o,"Phone number is not valid").min(10,"Should contain 10 digits").max(10,"Should contain 10 digits"),location:a.Ry().required("Please enter the location")})},SoleTraderSchema:function(){return a.Ry().shape({businessName:a.Z_().trim().required("Please enter your business name"),abnNumber:a.Z_().required("Please enter your abn number").matches(o,"Abn number is not valid").min(11,"Should contain 11 digits").max(11,"Should contain 11 digits"),location:a.Ry().shape({address:a.Z_(),coordinates:a.IX()}).required("Location is required").nullable(),skills:a.IX().min(1,"This field is required! "),industryExp:a.Z_().max(20,"Cannot exceed 20 years of Experience").matches(i,"Experience should be of number type").required("Please enter your industry experience")})},ForgotPassWordSchema:function(){return a.Ry().shape({email:a.Z_().trim().email("Please enter a valid email").required("Email required")})},ResetPasswordSchema:function(){return a.Ry().shape({newPassword:a.Z_().trim().required("Password filed is required"),confirmPassword:a.Z_().trim().required("Password field is required").test("check confirmPassword","Password does not match",(function(e){return e===this.parent.newPassword}))})}};n.Z=r},111:function(e,n,t){t.d(n,{Hh:function(){return c},c0:function(){return s},gF:function(){return r},x4:function(){return i}});var a=t(1413),o=t(7210),i=function(e,n){return function(t){if(navigator.onLine){var i=(0,a.Z)((0,a.Z)({},e),{},{deviceId:"3",deviceToken:"deviceToken"});console.log(i),o.Z.API.postApiCall(o.Z.endpoint.login,i,(function(e){var a=e.data;console.log(a),a.statusCode===o.Z.Constants.api_success_code.success?(o.Z.showAlert(1,a.message),n.push(o.Z.Pathname.Dashboard),t({type:o.Z.ActionName.LOADING,payload:!1})):(o.Z.showAlert(2,a.message),t({type:o.Z.ActionName.LOADING,payload:!1}))}),(function(e){var n=e.data;console.log(n,e),o.Z.showAlert(2,n.message),t({type:o.Z.ActionName.LOADING,payload:!1})}))}else t({type:o.Z.ActionName.LOADING,payload:!1})}},r=function(e,n){return function(t){if(navigator.onLine){var i=(0,a.Z)((0,a.Z)({},e),{},{deviceId:"3"});console.log(i),o.Z.API.postApiCall(o.Z.endpoint.forgotPassword,i,(function(e){var a=e.data;a.statusCode===o.Z.Constants.api_success_code.success?(console.log(a),n.push(o.Z.Pathname.Link_SENT),t({type:o.Z.ActionName.LOADING,payload:!1}),o.Z.showAlert(1,a.message)):t({type:o.Z.ActionName.LOADING,payload:!1})}),(function(e){var n=e.data;o.Z.showAlert(2,n.message),t({type:o.Z.ActionName.LOADING,payload:!1})}))}else t({type:o.Z.ActionName.LOADING,payload:!1})}},s=function(e,n,t){return function(a){if(!navigator.onLine)return o.Z.showAlert(2,"Please check your internet connection!"),void a({type:o.Z.ActionName.LOADING,payload:!1});var i={token:n.split("=")[1],newPassword:e.newPassword,deviceId:localStorage.getItem("user_id")?localStorage.getItem("user_id"):"3"};console.log(i),o.Z.API.postApiCall(o.Z.endpoint.resetPassword,i,(function(e){var n=e.data;n.statusCode===o.Z.Constants.api_success_code.success?(t.push(o.Z.Pathname.LOGIN),o.Z.showAlert(1,n.message),a({type:o.Z.ActionName.LOADING,payload:!1})):a({type:o.Z.ActionName.LOADING,payload:!1})}),(function(e){var n=e.data;console.log(n),o.Z.showAlert(2,n.message),a({type:o.Z.ActionName.LOADING,payload:!1})}))}},c=function(){return function(e){if(!navigator.onLine)return o.Z.showAlert(2,"Please check your internet connection!"),void e({type:o.Z.ActionName.LOADING,payload:!1});var n={email:localStorage.getItem("user_email")||"",type:1,deviceId:"string",deviceToken:localStorage.getItem("verify_account_token")||""};o.Z.API.postApiCall(o.Z.endpoint.resendLink,n,(function(n){n.data.statusCode,o.Z.Constants.api_success_code.success,e({type:o.Z.ActionName.LOADING,payload:!1})}),(function(n){var t=n.data;o.Z.showAlert(2,t.message),e({type:o.Z.ActionName.LOADING,payload:!1})}))}}},2011:function(e,n,t){t.r(n);var a=t(4942),o=(t(2791),t(9386)),i=t(336),r=t(8546),s=t(4312),c=t(9271),l=t(8288),d=t(3967),u=t(890),m=t(3329),h=t(2506),f=t(6907),p=t(8566),Z=t(111),g=t(6030),x=t(184);n.default=function(){var e=(0,d.Z)(),n=(0,l.y)({theme:e}),t=(0,c.k6)(),b=(0,g.I0)();return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(f.B6,{children:(0,x.jsxs)("div",{className:n.loginContainer,children:[(0,x.jsxs)(m.Z,{className:n.titleContainer,children:[(0,x.jsx)(o.Z,{style:n.brandLogo,imgUrl:p.Z.Logo}),(0,x.jsx)("div",{className:n.title,children:(0,x.jsx)(u.Z,{sx:(0,a.Z)({fontSize:"24px",fontWeight:"bold",fontStretch:"normal",lineHeight:"normal",letterSpacing:"normal",color:"#4f4f4f",float:"left",marginTop:"4%"},e.breakpoints.down(1025),{fontSize:"20px",marginLeft:"2%",marginTop:"4%"}),children:"Forgot Password"})}),(0,x.jsx)("div",{className:n.title,children:(0,x.jsx)(u.Z,{sx:(0,a.Z)({fontSize:"15px",fontStretch:"normal",lineHeight:"normal",letterSpacing:"normal",color:"#687173",float:"left",marginTop:"4%"},e.breakpoints.down(1025),{fontSize:"12px",marginLeft:"2%",marginTop:"4%"}),children:"To reset your password, please enter your email address"})})]}),(0,x.jsx)(h.J9,{initialValues:{email:""},validationSchema:i.Z.ForgotPassWordSchema,onSubmit:function(e,n){n.setSubmitting;console.log(e),b((0,Z.gF)(e,t))},children:(0,x.jsxs)(h.l0,{children:[(0,x.jsx)("div",{className:n.lables,children:(0,x.jsx)(u.Z,{sx:{fontSize:"16px",color:"#424546"},children:"EMAIL ADDRESS"})}),(0,x.jsx)("div",{className:n.inputField,children:(0,x.jsx)(r.Z,{placeholder:"Enter Email Address",name:"email",type:"email"})}),(0,x.jsx)(s.Io,{className:n.activeButton,sx:{color:"#fff",textTransform:"capitalize"},variant:"contained",children:"Send"})]})})]})})})}},8288:function(e,n,t){t.d(n,{y:function(){return o}});var a=t(4942),o=(0,t(2455).Z)({loginContainer:function(e){var n=e.theme;return(0,a.Z)({display:"flex",flexDirection:"column",justifyContent:"center",width:"88% !important",height:"88% !important",marginLeft:"7%"},n.breakpoints.down(1024),{justifyContent:"center",marginTop:"30%"})},verifyContainer:function(e){var n=e.theme;return(0,a.Z)({marginTop:"35%",width:"90% !important",height:"auto !important",display:"flex",flexDirection:"column",justifyContent:"center"},n.breakpoints.down(1024),{marginTop:"50% !important",width:"85% !important",marginLeft:"5%",justifyContent:"center"})},titleContainer:function(e){var n=e.theme;return(0,a.Z)({display:"flex",flexDirection:"column",width:"100%"},n.breakpoints.down(1024),{marginRight:"2%"})},brandLogo:function(e){var n,t=e.theme;return{width:"100%","& figure":(n={margin:0,width:"153px",height:"46px"},(0,a.Z)(n,t.breakpoints.up(1920),{width:"200px",height:"100px"}),(0,a.Z)(n,t.breakpoints.up(2560),{width:"240px",height:"120px"}),n)}},title:function(e){e.theme;return{width:"100%"}},lables:function(e){e.theme;return{float:"left",marginTop:"8%",marginBottom:"1.5%"}},verifyTitle:function(e){e.theme;return{border:"1 px solid black"}},buttonContainer:function(e){var n=e.theme;return(0,a.Z)({marginTop:"5%",width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between"},n.breakpoints.down(1025),{width:"100%"})},forgotPassword:function(){return{display:"flex",justifyContent:"space-between",marginBottom:"3%","& a":{textDecoration:"none",color:"#687173"}}},inputField:function(){return{marginBottom:"5%"}},activeButton:function(){return{color:"#ffffff",backgroundColor:"#0da4ce",maxHeight:"40px"}},formCommon:function(){return{alignItems:"flex-start"}},dontHaveAccount:function(){return{"& a":{textDecoration:"none",color:"#687173"}}},endIconContainer:function(){return{backgroundColor:"#0da4ce"}}})}}]);
//# sourceMappingURL=11.a6081360.chunk.js.map