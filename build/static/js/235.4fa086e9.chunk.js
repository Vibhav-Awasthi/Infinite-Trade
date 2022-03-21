"use strict";(self.webpackChunkreact_js=self.webpackChunkreact_js||[]).push([[235],{8546:function(e,n,t){var r=t(4942),i=t(1413),o=t(885),a=t(5987),s=(t(2791),t(2506)),l=t(7264),c=t(184),u=["name"];n.Z=function(e){var n=e.name,t=(0,a.Z)(e,u),d=(0,s.U$)(n),m=(0,o.Z)(d,2),f=m[0],h=m[1],p=(0,i.Z)((0,i.Z)((0,i.Z)({},t),f),{},{fullWidth:!0,variant:"outlined",value:f.value||""});return h&&h.touched&&h.error&&(p.error=!0,p.helperText=h.error),(0,c.jsx)("div",{children:(0,c.jsx)(l.Z,(0,i.Z)({size:"small",sx:(0,r.Z)({"& .MuiOutlinedInput-root":{"&.Mui-focused fieldset":{boxShadow:"-2px 0px 23px -2px rgba(0,0,0,0.33)",border:"1px solid #000000"}}},"& fieldset",{borderRadius:0})},p))})}},336:function(e,n,t){var r=t(1089),i=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,o={LoginSchema:function(){return r.Ry().shape({email:r.Z_().trim().email("Please enter valid email").max(50,"Email can be maximum of hundred characters").required("Email field cannot be blank"),password:r.Z_().trim().required("Password field cannot be blank")})},SignupSchema:function(){return r.Ry().shape({name:r.Z_().trim().max(100,"Name can be maximum of hundred characters").required("Name field cannot be blank"),email:r.Z_().trim().email("Please enter valid email").max(100,"Email can be maximum of hundred characters").required("Email field cannot be blank"),password:r.Z_().trim().required("Password field cannot be blank"),checked:r.O7().oneOf([!0],"Please mark the checkbox !").required("Please mark the checkbox !")})},ChangePasswordScheema:function(){return r.Ry().shape({currentpassword:r.Z_().trim().required("Current Password field cannot be blank"),newpassword:r.Z_().trim().min(6,"Password should be minimum of six characters").max(20,"Password should be maximum of twenty characters").required("New Password field cannot be blank").test("notBothAtTheSameTime","Current Password and New Password should not be the same",(function(e){return this.parent.currentpassword!==e}))})},CompanyContactSchema:function(){return r.Ry().shape({mobileNo:r.Z_().required("Please enter your phone number").matches(i,"Phone number is not valid").min(10,"to short").max(10,"to long"),officeNo:r.Z_().required("Please enter your Office number").matches(i,"Office number is not valid").min(10,"to short").max(10,"to long")})},MobileNumber:function(){return r.Ry().shape({PhoneNumber:r.Z_().required("Please enter your phone number").matches(i,"Phone number is not valid").min(10,"to short").max(10,"to long")})},BusinessDetailSchema:function(){return r.Ry().shape({name:r.Z_().trim().max(100,"Name can be maximum of hundred characters").required("Name field cannot be blank"),phone_number:r.Z_().required("Please enter your phone number").matches(i,"Phone number is not valid").min(10,"Phone number cannot be less than 10 digits"),location:r.Ry().required("Please enter the location")})},SoleTraderSchema:function(){return r.Ry().shape({businessName:r.Z_().trim().required("Required"),abnNumber:r.Z_().trim().max(10,"Maximum limit is 10 digits").required("Required"),location:r.Ry().shape({address:r.Z_(),coordinates:r.IX()}).required("Location Required"),skills:r.IX().min(1,"Required"),industryExp:r.Rx().max(20,"Cannot exceed 20 years of Experience").required("Required")})},ForgotPassWordSchema:function(){return r.Ry().shape({email:r.Z_().trim().email("Please enter a valid email").required("Email required")})},ResetPasswordSchema:function(){return r.Ry().shape({newPassword:r.Z_().trim().required("Password filed is required"),confirmPassword:r.Z_().trim().required("Password field is required").test("check confirmPassword","Password does not match",(function(e){return e===this.parent.newPassword}))})}};n.Z=o},9235:function(e,n,t){t.r(n);var r=t(4942),i=t(885),o=t(2791),a=t(9386),s=t(336),l=t(8546),c=t(7210),u=t(4312),d=t(9271),m=t(5398),f=t(3967),h=t(890),p=t(3329),x=t(2506),b=t(6907),g=t(8566),w=t(6030),Z=t(184);n.default=function(){var e=o.useState(!0),n=(0,i.Z)(e,2),t=n[0],y=n[1],k=(0,f.Z)(),v=(0,m.y)({theme:k}),C=(0,w.I0)(),j=(0,d.k6)();function N(){y(!t)}var P=o.useState(!1),S=(0,i.Z)(P,2),q=S[0],R=S[1];return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(b.B6,{children:(0,Z.jsxs)("div",{children:[(0,Z.jsxs)("div",{className:v.loginContainer,children:[(0,Z.jsxs)(p.Z,{className:v.titleContainer,children:[(0,Z.jsx)(a.Z,{style:v.brandLogo,imgUrl:g.Z.Logo}),(0,Z.jsx)("div",{className:v.title,children:(0,Z.jsx)(h.Z,{sx:(0,r.Z)({fontSize:"24px",fontWeight:"bold",fontStretch:"normal",lineHeight:"normal",letterSpacing:"normal",color:"#4f4f4f",float:"left",marginTop:"4%"},k.breakpoints.down(1025),{fontSize:"20px",marginLeft:"2%",marginTop:"4%"}),children:"Your Contact Details"})}),(0,Z.jsx)("div",{className:v.title,children:(0,Z.jsx)(h.Z,{sx:(0,r.Z)({fontSize:"15px",fontStretch:"normal",lineHeight:"normal",letterSpacing:"normal",color:"#687173",float:"left",marginTop:"2%",marginBottom:"10%"},k.breakpoints.down(1025),{fontSize:"12px",marginLeft:"2%",marginTop:"4%"}),children:"How can your clients contact you?"})})]}),(0,Z.jsx)(x.J9,{initialValues:{mobileNo:"",officeNo:""},validationSchema:s.Z.CompanyContactSchema,onSubmit:function(e){console.log(e,q),C({type:c.Z.ActionName.PROFILESELECTOR,payload:{mobileNo:e.mobileNo,companyDetail:{officeNo:e.officeNo,areYouInTool:q}}}),j.push(c.Z.Pathname.COMPANY_DETAILS)},children:(0,Z.jsxs)(x.l0,{children:[(0,Z.jsx)("div",{className:v.lables,children:(0,Z.jsx)(h.Z,{children:"MOBILE NUMBER*"})}),(0,Z.jsx)("div",{className:v.inputField,children:(0,Z.jsx)(l.Z,{placeholder:"Enter your mobile number",name:"mobileNo",type:"text"})}),(0,Z.jsx)("div",{className:v.lables,children:(0,Z.jsx)(h.Z,{sx:{mt:"3%"},children:"OFFICE NUMBER*"})}),(0,Z.jsx)("div",{className:v.inputField,children:(0,Z.jsx)(l.Z,{placeholder:"Enter work number",name:"officeNo",type:"text"})}),(0,Z.jsx)("div",{className:v.lables,children:(0,Z.jsx)(h.Z,{sx:{color:"#424546"},children:"ARE YOU ON THE TOOLS?"})}),(0,Z.jsxs)("div",{className:v.tools,children:[(0,Z.jsx)(u.Jr,{className:v.activeButton,sx:q?{color:"#fff",backgroundColor:"#000"}:{color:"#000",backgroundColor:"#fff"},variant:"contained",onClick:function(){R(!0),N()},children:"YES"}),(0,Z.jsx)(u.Jr,{className:v.activeButton,sx:q?{color:"#000",backgroundColor:"#fff"}:{color:"#fff",backgroundColor:"#000"},variant:"contained",onClick:function(){R(!1),N()},children:"No"})]}),(0,Z.jsx)(u.Io,{className:v.activeButton,sx:{color:"#fff",textTransform:"capitalize"},type:"submit",variant:"contained",children:"Save & Continue"})]})})]}),(0,Z.jsxs)("div",{className:v.step,children:[(0,Z.jsxs)(h.Z,{sx:{mt:"5%",ml:"45%",fontSize:"12px",fontWeight:"500",color:"#BDBDBD"},children:[(0,Z.jsx)("b",{children:"STEP"})," 03/04"]}),(0,Z.jsx)("div",{children:(0,Z.jsx)(h.Z,{sx:{fontWeight:"600",ml:"10%",fontSize:"14px",color:"#828282"},children:"Contact Details"})})]})]})})})}},5398:function(e,n,t){t.d(n,{y:function(){return i}});var r=t(4942),i=(0,t(2455).Z)({signupContainer:function(e){e.theme;return{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between"}},loginContainer:function(e){var n=e.theme;return(0,r.Z)({width:"98% !important",height:"auto !important",display:"flex",flexDirection:"column",justifyContent:"center"},n.breakpoints.down(1024),{padding:"50px",justifyContent:"center"})},verifyContainer:function(e){var n=e.theme;return(0,r.Z)({marginTop:"40%",width:"98% !important",height:"auto !important",display:"flex",flexDirection:"column",justifyContent:"center"},n.breakpoints.down(1024),{padding:"50px",justifyContent:"center"})},details:function(e){var n=e.theme;return(0,r.Z)({width:"50%",marginLeft:"64.5%"},n.breakpoints.down(1300),{marginLeft:"64"})},step:function(e){var n=e.theme;return(0,r.Z)({width:"34%",marginTop:"5%"},n.breakpoints.down(1025),{display:"none"})},titleContainer:function(e){e.theme;return{display:"flex",flexDirection:"column",width:"100%",alignItems:"right"}},brandLogo:function(e){var n,t=e.theme;return{width:"100%","& figure":(n={margin:0,width:"153px",height:"46px"},(0,r.Z)(n,t.breakpoints.up(1920),{width:"200px",height:"100px"}),(0,r.Z)(n,t.breakpoints.up(2560),{width:"240px",height:"120px"}),n)}},checkBoxContainer:function(){return{float:"left"}},checkBox:function(){return{background:" #FFFFFF",boxSizing:"border-box",marginBottom:"5px","&.css-rfs483-MuiFormControlLabel-root":{marginLeft:"-26px",marginRight:"0px",width:"100%"}}},ckBox:function(){return{"&.css-3zq233-MuiButtonBase-root-MuiCheckbox-root.Mui-checked":{color:"#000"}}},endIconContainer:function(){return{backgroundColor:"#0da4ce"}},title:function(e){e.theme;return{width:"100%"}},verifyTitle:function(e){e.theme;return{border:"1 px solid black"}},resendMail:function(){return{"&:hover":{background:"none"}}},lables:function(e){e.theme;return{float:"left",marginBottom:"3%"}},forgotPassword:function(){return{display:"flex",justifyContent:"space-between",marginBottom:"3%","& a":{textDecoration:"none",color:"#687173"}}},profileSelector:function(){return{border:"2px solid grey",width:"43%",cursor:"pointer"}},inputField:function(){return{marginBottom:"2%","& input::-webkit-outer-spin-button":{WebkitAppearance:"none",margin:0},"& input::-webkit-inner-spin-button":{webkitAppearance:"none",margin:0}}},textfieldClass:function(){return{}},selectProfile:function(e){var n,t=e.theme;return{display:"flex",height:"100px",width:"100%",marginRight:"20%",alignItems:"center",justifyContent:"center","& figure":(n={},(0,r.Z)(n,t.breakpoints.up(1920),{width:"200px",height:"100px"}),(0,r.Z)(n,t.breakpoints.up(2560),{width:"240px",height:"120px"}),n)}},normalButton:function(){return{marginTop:"5%",width:"100%"}},activeButton:function(){return{color:"#ffffff",backgroundColor:"#0da4ce",maxHeight:"40px"}},formCommon:function(){return{alignItems:"flex-start"}},buttonContainer:function(){return{marginTop:"5%",width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between"}},dontHaveAccount:function(){return{"& a":{textDecoration:"none",color:"#687173"}}},tools:function(){return{display:"flex",width:"100%"}}})}}]);
//# sourceMappingURL=235.4fa086e9.chunk.js.map