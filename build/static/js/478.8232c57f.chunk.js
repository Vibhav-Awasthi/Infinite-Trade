"use strict";(self.webpackChunkreact_js=self.webpackChunkreact_js||[]).push([[478],{1870:function(e,n,t){t.d(n,{Z:function(){return p}});var i=t(1413),o=t(4942),a=t(885),r=t(5987),s=(t(2791),t(1462)),l=t(7264),c=t(890),d=t(2506),u=t(184),m=["options","name","optionSelected"];function p(e){var n=e.options,t=e.name,p=e.optionSelected,f=(0,r.Z)(e,m),h=(0,d.U$)(t),x=(0,a.Z)(h,2),g=(x[0],x[1]),Z=(0,d.u6)().setFieldValue,b=g&&g.touched&&g.error;return console.log(t,g),(0,u.jsxs)("div",{className:"Err",children:[(0,u.jsx)(s.Z,(0,i.Z)((0,i.Z)({sx:(0,o.Z)({textAlign:"left"},"& fieldset",{borderRadius:0}),size:"small"},f),{},{id:"multiple-limit-tags",options:n,getOptionLabel:p,renderInput:function(e){return(0,u.jsx)(l.Z,(0,i.Z)((0,i.Z)({},e),{},{placeholder:"Please Select"}))},onChange:function(e,n){Z(t,n)}})),b&&(0,u.jsx)(c.Z,{variant:"caption",color:"error",sx:{ml:"4%"},children:g.error})]})}},8546:function(e,n,t){var i=t(4942),o=t(1413),a=t(885),r=t(5987),s=(t(2791),t(2506)),l=t(7264),c=t(184),d=["name"];n.Z=function(e){var n=e.name,t=(0,r.Z)(e,d),u=(0,s.U$)(n),m=(0,a.Z)(u,2),p=m[0],f=m[1];console.log(n,f);var h=(0,o.Z)((0,o.Z)((0,o.Z)({},t),p),{},{fullWidth:!0,variant:"outlined",value:p.value||""});return f&&f.touched&&f.error&&(h.error=!0,h.helperText=f.error),(0,c.jsx)("div",{children:(0,c.jsx)(l.Z,(0,o.Z)({size:"small",sx:(0,i.Z)({"& .MuiOutlinedInput-root":{"&.Mui-focused fieldset":{boxShadow:"-2px 0px 23px -2px rgba(0,0,0,0.33)",border:"1px solid #000000"}}},"& fieldset",{borderRadius:0})},h))})}},6930:function(e,n){n.Z=[{address:"Flat no 202",coordinates:["1","2"]},{address:"Flat no 203",coordinates:["3","4"]},{address:"Flat no 204",coordinates:["5","6"]},{address:"Flat no 205",coordinates:["7","8"]}]},336:function(e,n,t){var i=t(1089),o=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,a=/^[0-9]*$/,r={LoginSchema:function(){return i.Ry().shape({email:i.Z_().trim().email("Please enter valid email").max(50,"Email can be maximum of hundred characters").required("Email field cannot be blank"),password:i.Z_().trim().required("Password field cannot be blank")})},SignupSchema:function(){return i.Ry().shape({name:i.Z_().trim().matches(/^[A-Za-z ]*$/,"Numbers are not allowed in name field").max(50,"Name can be maximum of 50 characters").min(3,"Name can be minimum of three characters").required("Name field cannot be blank"),email:i.Z_().trim().email("Please enter valid email").max(100,"Email can be maximum of hundred characters").required("Email field cannot be blank"),password:i.Z_().trim().required("Password field cannot be blank"),checked:i.O7().oneOf([!0],"Please mark the checkbox !").required("Please mark the checkbox !")})},ChangePasswordScheema:function(){return i.Ry().shape({currentpassword:i.Z_().trim().required("Current Password field cannot be blank"),newpassword:i.Z_().trim().min(6,"Password should be minimum of six characters").max(20,"Password should be maximum of twenty characters").required("New Password field cannot be blank").test("notBothAtTheSameTime","Current Password and New Password should not be the same",(function(e){return this.parent.currentpassword!==e}))})},CompanyContactSchema:function(){return i.Ry().shape({mobileNo:i.Z_().required("Please enter your phone number").matches(o,"Phone number is not valid").min(10,"Should contain 10 digits").max(10,"Should contain 10 digits"),officeNo:i.Z_().required("Please enter your Office number").matches(o,"Office number is not valid").min(10,"Should contain 10 digits").max(10,"Should contain 10 digits")})},MobileNumber:function(){return i.Ry().shape({PhoneNumber:i.Z_().required("Please enter your phone number").matches(o,"Phone number is not valid").min(10,"Should contain 10 digits").max(10,"Should contain 10 digits")})},BusinessDetailSchema:function(){return i.Ry().shape({name:i.Z_().trim().max(100,"Name can be maximum of hundred characters").required("Name field cannot be blank"),phone_number:i.Z_().required("Please enter your phone number").matches(o,"Phone number is not valid").min(10,"Should contain 10 digits").max(10,"Should contain 10 digits"),location:i.Ry().required("Please enter the location")})},SoleTraderSchema:function(){return i.Ry().shape({businessName:i.Z_().trim().required("Required"),abnNumber:i.Z_().required("Please enter your abn number").matches(o,"Abn number is not valid").min(11,"Should contain 11 digits").max(11,"Should contain 11 digits"),location:i.Ry().shape({address:i.Z_(),coordinates:i.IX()}).required("Location Required").nullable(),skills:i.IX().min(1,"This field is required! "),industryExp:i.Z_().max(20,"Cannot exceed 20 years of Experience").matches(a,"Experience should be of number type").required("Please enter your industry experience")})},ForgotPassWordSchema:function(){return i.Ry().shape({email:i.Z_().trim().email("Please enter a valid email").required("Email required")})},ResetPasswordSchema:function(){return i.Ry().shape({newPassword:i.Z_().trim().required("Password filed is required"),confirmPassword:i.Z_().trim().required("Password field is required").test("check confirmPassword","Password does not match",(function(e){return e===this.parent.newPassword}))})}};n.Z=r},5596:function(e,n,t){t.d(n,{Hh:function(){return s},Iq:function(){return d},SM:function(){return l},bp:function(){return u},s8:function(){return c},y1:function(){return r}});var i=t(2982),o=t(1413),a=t(7210),r=function(e,n,t){return function(i){if(navigator.onLine){var r=(0,o.Z)((0,o.Z)({},e),{},{deviceId:"string"});delete r.checked,a.Z.API.postApiCall(a.Z.endpoint.signUp,r,(function(e){var o=e.data;if(o.statusCode===a.Z.Constants.api_success_code.success){var r=o.data,s=r.accessToken,l=r.email,c=r.name,d=r.userId;localStorage.setItem("verify_account_token",s),localStorage.setItem("user_email",l),localStorage.setItem("user_name",c),localStorage.setItem("user_id",d),t.push(a.Z.Pathname.VERIFY),i({type:a.Z.ActionName.LOADING,payload:!1}),n(!1)}else n(!1),a.Z.showAlert(2,o.message),i({type:a.Z.ActionName.LOADING,payload:!1})}),(function(e){n(!1);var t=e.data;console.log(t),i({type:a.Z.ActionName.LOADING,payload:!1}),a.Z.showAlert(2,t.message)}))}else i({type:a.Z.ActionName.LOADING,payload:!1})}},s=function(){return function(e){if(navigator.onLine){var n={email:localStorage.getItem("user_email")||"",type:1,deviceId:"string",deviceToken:localStorage.getItem("verify_account_token")||""};a.Z.API.postApiCall(a.Z.endpoint.resendLink,n,(function(n){n.data.statusCode,a.Z.Constants.api_success_code.success,e({type:a.Z.ActionName.LOADING,payload:!1})}),(function(n){n.data;e({type:a.Z.ActionName.LOADING,payload:!1})}))}else e({type:a.Z.ActionName.LOADING,payload:!1})}},l=function(){return function(e){a.Z.API.getApiCall(a.Z.endpoint.skills,"",(function(n){var t=n.data;200===t.statusCode&&(console.log(t),e({type:a.Z.ActionName.SKILLS,payload:{skills:(0,i.Z)(t.data.skills)}}))}),(function(e){e.data}))}},c=function(){return function(e){if(navigator.onLine){var n={token:localStorage.getItem("verify_account_token")||"",deviceId:"3",deviceToken:localStorage.getItem("user_id")||""};console.log(n),a.Z.API.postApiCall(a.Z.endpoint.verify,n,(function(n){var t=n.data;console.log(t),t.statusCode===a.Z.Constants.api_success_code.success?(localStorage.setItem("accessToken",t.data.accessToken),e({type:a.Z.ActionName.LOADING,payload:!1})):e({type:a.Z.ActionName.LOADING,payload:!1})}),(function(n){var t=n.data;console.log(t),e({type:a.Z.ActionName.LOADING,payload:!1})}))}else e({type:a.Z.ActionName.LOADING,payload:!1})}},d=function(e,n){return function(t,i){if(navigator.onLine){var r=i().profileSelectorReducer,s=r.userType,l=r.mobileNo,c=e.location,d=(0,o.Z)({},e);delete d.address,delete d.location,d.skills=d.skills.map((function(e){return e.TYPE}));var u={userType:s,mobileNo:"".concat(l),location:c,companySoleTraderDetail:(0,o.Z)({},d),deviceId:"3",deviceToken:localStorage.getItem("user_id")||"DeviceToken"};a.Z.API.putApiCall(a.Z.endpoint.profileComplete,u,(function(e){e.data.statusCode===a.Z.Constants.api_success_code.success?(t({type:a.Z.ActionName.LOADING,payload:!1}),localStorage.clear(),n.push(a.Z.Pathname.Dashboard)):t({type:a.Z.ActionName.LOADING,payload:!1})}),(function(e){e.data;t({type:a.Z.ActionName.LOADING,payload:!1})}))}else t({type:a.Z.ActionName.LOADING,payload:!1})}},u=function(e,n){return function(t,i){if(navigator.onLine){var r=i().profileSelectorReducer,s=r.userType,l=r.mobileNo,c=r.companyDetail,d=e.location,u=(0,o.Z)({},e);delete u.address,delete u.location,u.availableTrades=u.skills.map((function(e){return e.TYPE})),delete u.skills;var m=(0,o.Z)({},c);m.officeNo="".concat(m.officeNo);var p={userType:s,mobileNo:"".concat(l),location:d,companyDetail:(0,o.Z)((0,o.Z)({},u),m),deviceId:"3",deviceToken:localStorage.getItem("user_id")||"deviceToken"};console.log(p),a.Z.API.putApiCall(a.Z.endpoint.profileComplete,p,(function(e){var i=e.data;i.statusCode===a.Z.Constants.api_success_code.success?(t({type:a.Z.ActionName.LOADING,payload:!1}),localStorage.clear(),n.push(a.Z.Pathname.Dashboard),a.Z.showAlert(1,i.message)):t({type:a.Z.ActionName.LOADING,payload:!1})}),(function(e){e.data;t({type:a.Z.ActionName.LOADING,payload:!1})}))}else t({type:a.Z.ActionName.LOADING,payload:!1})}}},4478:function(e,n,t){t.r(n);var i=t(4942),o=t(2791),a=t(9386),r=t(336),s=t(8546),l=t(1870),c=t(4312),d=t(9271),u=t(1523),m=t(5398),p=t(3967),f=t(890),h=t(3329),x=t(2506),g=t(6907),Z=t(8566),b=t(6930),y=t(6030),v=t(5596),N=t(184);n.default=function(){var e=(0,p.Z)(),n=(0,m.y)({theme:e}),t=(0,y.I0)(),w=(0,d.k6)(),S=(0,y.v9)((function(e){return e.dropDownReducer})).skills;return o.useEffect((function(){t((0,v.SM)())}),[t]),(0,N.jsx)(N.Fragment,{children:(0,N.jsx)(g.B6,{children:(0,N.jsxs)("div",{className:n.signupContainer,children:[(0,N.jsxs)("div",{className:n.loginContainer,children:[(0,N.jsxs)(h.Z,{className:n.titleContainer,children:[(0,N.jsx)(a.Z,{style:n.brandLogo,imgUrl:Z.Z.Logo}),(0,N.jsx)("div",{className:n.title,children:(0,N.jsx)(f.Z,{sx:(0,i.Z)({fontSize:"24px",fontWeight:"bold",fontStretch:"normal",lineHeight:"normal",letterSpacing:"normal",color:"#4f4f4f",float:"left",marginTop:"4%"},e.breakpoints.down(1025),{fontSize:"20px",marginLeft:"2%",marginTop:"4%"}),children:"Your Business Details"})}),(0,N.jsx)("div",{className:n.title,children:(0,N.jsx)(f.Z,{sx:(0,i.Z)({fontSize:"15px",fontStretch:"normal",lineHeight:"normal",letterSpacing:"normal",color:"#687173",float:"left",marginTop:"2%",marginBottom:"8%"},e.breakpoints.down(1025),{fontSize:"12px",marginLeft:"2%",marginTop:"4%"}),children:"Tell us about your business and what you do."})})]}),(0,N.jsx)(x.J9,{initialValues:{businessName:"",abnNumber:"",location:null,address:null,skills:[],industryExp:""},validationSchema:r.Z.SoleTraderSchema,onSubmit:function(e,n){n.setSubmitting;t((0,v.Iq)(e,w))},children:(0,N.jsxs)(x.l0,{children:[(0,N.jsx)("div",{className:n.lables,children:(0,N.jsx)(f.Z,{sx:{fontSize:"16px"},children:"Business Name*"})}),(0,N.jsx)("div",{className:n.inputField,children:(0,N.jsx)(s.Z,{placeholder:"Enter your Business Name",name:"businessName",type:"text"})}),(0,N.jsx)("div",{className:n.lables,children:(0,N.jsx)(f.Z,{sx:{fontSize:"16px"},children:"ABN*"})}),(0,N.jsx)("div",{className:n.inputField,children:(0,N.jsx)(s.Z,{className:n.textfieldClass,placeholder:"Enter Your Business Number",name:"abnNumber",type:"number"})}),(0,N.jsxs)("div",{className:n.lables,children:[(0,N.jsx)(f.Z,{sx:{fontSize:"16px"},children:"LOCATION*"}),(0,N.jsx)(f.Z,{className:n.lables})]}),(0,N.jsx)("div",{className:n.inputField,children:(0,N.jsx)(l.Z,{name:"location",options:b.Z,optionSelected:function(e){return"string"===typeof e?e:null===e||void 0===e?void 0:e.address}})}),(0,N.jsx)("div",{className:n.lables,children:(0,N.jsx)(f.Z,{sx:{fontSize:"16px"},children:"SKILLS*"})}),(0,N.jsx)("div",{className:n.inputField,children:(0,N.jsx)(l.Z,{name:"skills",multiple:!0,limitTags:2,options:S,optionSelected:function(e){return"string"===typeof e?e:null===e||void 0===e?void 0:e.TYPE}})}),(0,N.jsx)("div",{className:n.lables,children:(0,N.jsx)(f.Z,{sx:{fontSize:"16px"},children:"INDUSTRY EXPERIENCE*"})}),(0,N.jsx)("div",{className:n.inputField,children:(0,N.jsx)(s.Z,{className:n.textfieldClass,placeholder:"Enter your years of experience",name:"industryExp",type:"text"})}),(0,N.jsx)(u.rU,{to:"#",children:(0,N.jsx)(c.Io,{className:n.activeButton,sx:{color:"#fff",textDecoration:"none",textTransform:"capitalize"},variant:"contained",children:(0,N.jsx)(f.Z,{className:n.lables,children:"Save & Continue"})})})]})})]}),(0,N.jsxs)("div",{className:n.step,children:[(0,N.jsxs)(f.Z,{sx:(0,i.Z)({mt:"5%",ml:"25%",fontSize:"12px",fontWeight:"500",color:"#BDBDBD"},e.breakpoints.down(1025),{fontSize:"12px",marginLeft:"2%",marginTop:"4%"}),children:[(0,N.jsx)("b",{children:"STEP"})," 04/04"]}),(0,N.jsx)("div",{children:(0,N.jsx)(f.Z,{sx:(0,i.Z)({fontWeight:"600",fontSize:"14px",color:"#828282"},e.breakpoints.down(1025),{fontSize:"12px",marginRight:"25%",marginTop:"4%"}),children:"Business Details"})})]})]})})})}},5398:function(e,n,t){t.d(n,{y:function(){return o}});var i=t(4942),o=(0,t(2455).Z)({signupContainer:function(e){var n=e.theme;return(0,i.Z)({width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between"},n.breakpoints.down(1024),{justifyContent:"center",flexDirection:"column-reverse"})},loginContainer:function(e){var n=e.theme;return(0,i.Z)({width:"78% !important",height:"auto !important",display:"flex",flexDirection:"column",justifyContent:"center"},n.breakpoints.down(1024),{marginLeft:"10%",width:"80% !important",justifyContent:"center",marginBottom:"30%"})},verifyContainer:function(e){var n=e.theme;return(0,i.Z)({marginTop:"40%",width:"90% !important",height:"auto !important",display:"flex",flexDirection:"column",justifyContent:"center"},n.breakpoints.down(1024),{width:"85% !important",marginLeft:"5%",justifyContent:"center"})},details:function(e){var n=e.theme;return(0,i.Z)({width:"50%",marginLeft:"64.5%"},n.breakpoints.down(1300),{marginLeft:"64"})},step:function(e){var n,t=e.theme;return n={width:"30%",marginTop:"5%"},(0,i.Z)(n,t.breakpoints.between(1400,1025),{width:"30% !important"}),(0,i.Z)(n,t.breakpoints.down(1025),{marginLeft:"60%"}),n},titleContainer:function(e){e.theme;return{display:"flex",flexDirection:"column",width:"100%",alignItems:"right"}},brandLogo:function(e){var n,t=e.theme;return{width:"100%","& figure":(n={margin:0,width:"153px",height:"46px"},(0,i.Z)(n,t.breakpoints.up(1920),{width:"200px",height:"100px"}),(0,i.Z)(n,t.breakpoints.up(2560),{width:"240px",height:"120px"}),n)}},checkBoxContainer:function(){return{float:"left"}},checkBox:function(){return{background:" #FFFFFF",boxSizing:"border-box",marginBottom:"5px","&.css-rfs483-MuiFormControlLabel-root":{marginLeft:"-26px",marginRight:"0px",width:"100%"}}},ckBox:function(){return{"&.css-3zq233-MuiButtonBase-root-MuiCheckbox-root.Mui-checked":{color:"#000"}}},endIconContainer:function(){return{backgroundColor:"#0da4ce"}},title:function(e){e.theme;return{width:"100%"}},verifyTitle:function(e){e.theme;return{border:"1 px solid black"}},resendMail:function(){return{"&:hover":{background:"none"}}},lables:function(e){e.theme;return{float:"left",marginBottom:"3%"}},forgotPassword:function(){return{display:"flex",justifyContent:"space-between",marginBottom:"3%","& a":{textDecoration:"none",color:"#687173"}}},profileSelector:function(e){var n=e.theme;return(0,i.Z)({border:"2px solid grey",width:"43%",cursor:"pointer"},n.breakpoints.down(1025),{height:"105px"})},inputField:function(){return{marginBottom:"2%","& input::-webkit-outer-spin-button":{WebkitAppearance:"none",margin:0},"& input::-webkit-inner-spin-button":{webkitAppearance:"none",margin:0}}},textfieldClass:function(){return{}},selectProfile:function(e){var n,t=e.theme;return{display:"flex",height:"65px",width:"100%",marginRight:"20%",alignItems:"center",justifyContent:"center","& figure":(n={},(0,i.Z)(n,t.breakpoints.up(1920),{width:"200px",height:"100px"}),(0,i.Z)(n,t.breakpoints.up(2560),{width:"240px",height:"120px"}),n)}},normalButton:function(){return{marginTop:"5%",width:"100%"}},activeButton:function(){return{color:"#ffffff",backgroundColor:"#0da4ce",maxHeight:"40px"}},formCommon:function(){return{alignItems:"flex-start"}},buttonContainer:function(e){var n=e.theme;return(0,i.Z)({marginTop:"5%",width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between"},n.breakpoints.down(1025),{width:"100%"})},dontHaveAccount:function(){return{"& a":{textDecoration:"none",color:"#687173"}}},tools:function(){return{display:"flex",width:"100%"}}})}}]);
//# sourceMappingURL=478.8232c57f.chunk.js.map