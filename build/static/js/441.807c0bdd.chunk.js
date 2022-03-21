"use strict";(self.webpackChunkreact_js=self.webpackChunkreact_js||[]).push([[441],{8546:function(e,n,t){var r=t(4942),i=t(1413),o=t(885),a=t(5987),s=(t(2791),t(2506)),u=t(9334),l=t(184),c=["name"];n.Z=function(e){var n=e.name,t=(0,a.Z)(e,c),d=(0,s.U$)(n),m=(0,o.Z)(d,2),h=m[0],f=m[1],p=(0,i.Z)((0,i.Z)((0,i.Z)({},t),h),{},{fullWidth:!0,variant:"outlined",value:h.value||""});return f&&f.touched&&f.error&&(p.error=!0,p.helperText=f.error),(0,l.jsx)("div",{children:(0,l.jsx)(u.Z,(0,i.Z)({size:"small",sx:(0,r.Z)({"& label.Mui-focused":{borderColor:"#424546"},"& .MuiInput-underline:after":{border:"1px solid #424546"},"& .MuiOutlinedInput-root":{"& fieldset":{border:"1px solid #424546"},"&:hover fieldset":{border:"1px solid #424546"},"&.Mui-focused fieldset":{boxShadow:"-2px 0px 23px -2px rgba(0,0,0,0.33)"}}},"& fieldset",{borderRadius:0})},p))})}},336:function(e,n,t){var r=t(1089),i=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,o={LoginSchema:function(){return r.Ry().shape({email:r.Z_().trim().email("Please enter valid email").max(50,"Email can be maximum of hundred characters").required("Email field cannot be blank"),password:r.Z_().trim().required("Password field cannot be blank")})},SignupSchema:function(){return r.Ry().shape({name:r.Z_().trim().max(100,"Name can be maximum of hundred characters").required("Name field cannot be blank"),email:r.Z_().trim().email("Please enter valid email").max(100,"Email can be maximum of hundred characters").required("Email field cannot be blank"),password:r.Z_().trim().required("Password field cannot be blank"),checked:r.O7().required("Required terms of use")})},ChangePasswordScheema:function(){return r.Ry().shape({currentpassword:r.Z_().trim().required("Current Password field cannot be blank"),newpassword:r.Z_().trim().min(6,"Password should be minimum of six characters").max(20,"Password should be maximum of twenty characters").required("New Password field cannot be blank").test("notBothAtTheSameTime","Current Password and New Password should not be the same",(function(e){return this.parent.currentpassword!==e}))})},CompanyContactSchema:function(){return r.Ry().shape({mobileNo:r.Z_().required("Please enter your phone number").matches(i,"Phone number is not valid").min(10,"to short").max(10,"to long"),officeNo:r.Z_().required("Please enter your Office number").matches(i,"Office number is not valid").min(10,"to short").max(10,"to long")})},MobileNumber:function(){return r.Ry().shape({PhoneNumber:r.Z_().required("Please enter your phone number").matches(i,"Phone number is not valid").min(10,"to short").max(10,"to long")})},BusinessDetailSchema:function(){return r.Ry().shape({name:r.Z_().trim().max(100,"Name can be maximum of hundred characters").required("Name field cannot be blank"),phone_number:r.Z_().required("Please enter your phone number").matches(i,"Phone number is not valid").min(10,"Phone number cannot be less than 10 digits"),location:r.Ry().required("Please enter the location")})},SoleTraderSchema:function(){return r.Ry().shape({businessName:r.Z_().trim().required("Required"),abnNumber:r.Z_().trim().max(10,"Maximum limit is 10 digits").required("Required"),location:r.Ry().shape({address:r.Z_(),coordinates:r.IX()}).required("Location Required"),skills:r.IX().min(1,"Required"),industryExp:r.Rx().max(20,"Cannot exceed 20 years of Experience").required("Required")})},ForgotPassWordSchema:function(){return r.Ry().shape({email:r.Z_().trim().email("Please enter a valid email").required("Email required")})},ResetPasswordSchema:function(){return r.Ry().shape({newPassword:r.Z_().trim().required("Password filed is required"),confirmPassword:r.Z_().trim().required("Password field is required").test("check confirmPassword","Password does not match",(function(e){return e===this.parent.newPassword}))})}};n.Z=o},4441:function(e,n,t){t.r(n);var r=t(4942),i=(t(2791),t(9386)),o=t(336),a=t(8546),s=t(7210),u=t(4312),l=t(9271),c=t(5398),d=t(3967),m=t(890),h=t(3329),f=t(2506),p=t(6907),x=t(8566),b=t(6030),g=t(184);n.default=function(){var e=(0,b.I0)(),n=(0,d.Z)(),t=(0,c.y)({theme:n}),w=(0,l.k6)();return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(p.B6,{children:(0,g.jsxs)("div",{className:t.signupContainer,children:[(0,g.jsxs)("div",{className:t.loginContainer,children:[(0,g.jsxs)(h.Z,{className:t.titleContainer,children:[(0,g.jsx)(i.Z,{style:t.brandLogo,imgUrl:x.Z.Logo}),(0,g.jsx)("div",{className:t.title,children:(0,g.jsx)(m.Z,{sx:(0,r.Z)({fontSize:"24px",fontWeight:"bold",fontStretch:"normal",lineHeight:"normal",letterSpacing:"normal",color:"#4f4f4f",float:"left",marginTop:"4%"},n.breakpoints.down(1025),{fontSize:"20px",marginLeft:"2%",marginTop:"4%"}),children:"Your Contact Details"})}),(0,g.jsx)("div",{className:t.title,children:(0,g.jsx)(m.Z,{sx:(0,r.Z)({fontSize:"15px",fontStretch:"normal",lineHeight:"normal",letterSpacing:"normal",color:"#687173",float:"left",marginTop:"3%",marginBottom:"9%"},n.breakpoints.down(1025),{fontSize:"12px",marginLeft:"2%",marginTop:"4%"}),children:"How can your clients contact you?"})})]}),(0,g.jsx)(f.J9,{initialValues:{PhoneNumber:""},validationSchema:o.Z.MobileNumber,onSubmit:function(n){e({type:s.Z.ActionName.PROFILESELECTOR,payload:{mobileNo:n.PhoneNumber}}),w.push(s.Z.Pathname.SOLE_TRADER_DETAILS)},children:(0,g.jsxs)(f.l0,{children:[(0,g.jsx)("div",{className:t.lables,children:(0,g.jsx)(m.Z,{children:"Mobile Number"})}),(0,g.jsx)("div",{className:t.inputField,children:(0,g.jsx)(a.Z,{placeholder:"Enter your mobile number",name:"PhoneNumber",type:"number"})}),(0,g.jsx)(u.Io,{className:t.activeButton,sx:{color:"#fff",textTransform:"capitalize"},type:"submit",variant:"contained",children:"Save & Continue"})]})})]}),(0,g.jsxs)("div",{className:t.step,children:[(0,g.jsxs)(m.Z,{sx:{mt:"5%",ml:"40%",fontSize:"12px",fontWeight:"500",color:"#BDBDBD"},children:[(0,g.jsx)("b",{children:"Step"})," 03/04"]}),(0,g.jsx)("div",{children:(0,g.jsx)(m.Z,{sx:{fontWeight:"600",fontSize:"14px",color:"#828282"},children:"Contact Details"})})]})]})})})}},5398:function(e,n,t){t.d(n,{y:function(){return i}});var r=t(4942),i=(0,t(2455).Z)({signupContainer:function(e){e.theme;return{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between"}},loginContainer:function(e){var n=e.theme;return(0,r.Z)({width:"98% !important",height:"auto !important",display:"flex",flexDirection:"column",justifyContent:"center"},n.breakpoints.down(1024),{padding:"50px",justifyContent:"center"})},verifyContainer:function(e){var n=e.theme;return(0,r.Z)({marginTop:"40%",width:"98% !important",height:"auto !important",display:"flex",flexDirection:"column",justifyContent:"center"},n.breakpoints.down(1024),{padding:"50px",justifyContent:"center"})},details:function(e){var n=e.theme;return(0,r.Z)({width:"50%",marginLeft:"64.5%"},n.breakpoints.down(1300),{marginLeft:"64"})},step:function(e){var n=e.theme;return(0,r.Z)({width:"34%",marginTop:"5%"},n.breakpoints.down(1025),{display:"none"})},titleContainer:function(e){e.theme;return{display:"flex",flexDirection:"column",width:"100%",alignItems:"right"}},brandLogo:function(e){var n,t=e.theme;return{width:"100%","& figure":(n={margin:0,width:"153px",height:"46px"},(0,r.Z)(n,t.breakpoints.up(1920),{width:"200px",height:"100px"}),(0,r.Z)(n,t.breakpoints.up(2560),{width:"240px",height:"120px"}),n)}},checkBoxContainer:function(){return{float:"left"}},checkBox:function(){return{background:" #FFFFFF",boxSizing:"border-box",marginBottom:"5px","&.css-rfs483-MuiFormControlLabel-root":{marginLeft:"-26px",marginRight:"0px",width:"100%"}}},ckBox:function(){return{"&.css-3zq233-MuiButtonBase-root-MuiCheckbox-root.Mui-checked":{color:"#000"}}},endIconContainer:function(){return{backgroundColor:"#0da4ce"}},title:function(e){e.theme;return{width:"100%"}},verifyTitle:function(e){e.theme;return{border:"1 px solid black"}},resendMail:function(){return{"&:hover":{background:"none"}}},lables:function(e){e.theme;return{float:"left",marginBottom:"3%"}},forgotPassword:function(){return{display:"flex",justifyContent:"space-between",marginBottom:"3%","& a":{textDecoration:"none",color:"#687173"}}},profileSelector:function(){return{border:"2px solid grey",width:"43%",cursor:"pointer"}},inputField:function(){return{marginBottom:"2%","& input::-webkit-outer-spin-button":{WebkitAppearance:"none",margin:0},"& input::-webkit-inner-spin-button":{webkitAppearance:"none",margin:0}}},textfieldClass:function(){return{}},selectProfile:function(e){var n,t=e.theme;return{display:"flex",height:"100px",width:"100%",marginRight:"20%",alignItems:"center",justifyContent:"center","& figure":(n={},(0,r.Z)(n,t.breakpoints.up(1920),{width:"200px",height:"100px"}),(0,r.Z)(n,t.breakpoints.up(2560),{width:"240px",height:"120px"}),n)}},normalButton:function(){return{marginTop:"5%",width:"100%"}},activeButton:function(){return{color:"#ffffff",backgroundColor:"#0da4ce",maxHeight:"40px"}},formCommon:function(){return{alignItems:"flex-start"}},buttonContainer:function(){return{marginTop:"5%",width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between"}},dontHaveAccount:function(){return{"& a":{textDecoration:"none",color:"#687173"}}},tools:function(){return{display:"flex",width:"100%"}}})}}]);
//# sourceMappingURL=441.807c0bdd.chunk.js.map