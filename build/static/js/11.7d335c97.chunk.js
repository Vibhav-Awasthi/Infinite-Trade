"use strict";(self.webpackChunkreact_js=self.webpackChunkreact_js||[]).push([[11],{1154:function(e,n,r){r.d(n,{Z:function(){return s}});var t=r(1413),i=r(5987),a=(r(2791),r(6151)),o=r(184),l=["children"];function s(e){var n=e.children,r=(0,i.Z)(e,l),s=(0,t.Z)((0,t.Z)({},r),{},{fullWidth:!0});return(0,o.jsx)(a.Z,(0,t.Z)((0,t.Z)({sx:{padding:"20px 0px"}},s),{},{children:n}))}},8546:function(e,n,r){var t=r(4942),i=r(1413),a=r(885),o=r(5987),l=(r(2791),r(5705)),s=r(9334),d=r(184),u=["name"];n.Z=function(e){var n=e.name,r=(0,o.Z)(e,u),c=(0,l.U$)(n),m=(0,a.Z)(c,2),h=m[0],f=m[1],p=(0,i.Z)((0,i.Z)((0,i.Z)({},r),h),{},{fullWidth:!0,variant:"outlined",value:h.value||""});return f&&f.touched&&f.error&&(p.error=!0,p.helperText=f.error),(0,d.jsx)("div",{children:(0,d.jsx)(s.Z,(0,i.Z)({size:"small",sx:(0,t.Z)({"& label.Mui-focused":{borderColor:"#000"},"& .MuiInput-underline:after":{border:"0.2px solid #000"},"& .MuiOutlinedInput-root":{"& fieldset":{border:"0.2px solid #000"},"&:hover fieldset":{border:"0.2px solid #000"},"&.Mui-focused fieldset":{boxShadow:"-2px 0px 23px -2px rgba(0,0,0,0.33)"}}},"& fieldset",{borderRadius:0})},p))})}},541:function(e,n,r){r.d(n,{Io:function(){return m},Jr:function(){return h}});var t=r(3457),i=r(1413),a=r(5987),o=(r(2791),r(6151)),l=r(5705),s=r(184),d=["children"],u=function(e){var n=e.children,r=(0,a.Z)(e,d),t=(0,l.u6)().submitForm,u=(0,i.Z)((0,i.Z)({},r),{},{fullWidth:!0,onClick:function(){t()}});return(0,s.jsx)(o.Z,(0,i.Z)((0,i.Z)({},u),{},{children:n}))},c=r(1154),m=((0,t.Z)("div")({backgroundColor:"#fff",width:"50%"}),(0,t.Z)(u)({width:"100%",height:"54px",marginTop:"20px",borderRadius:"0 !important"})),h=(0,t.Z)(c.Z)({width:"100%",height:"54px",marginTop:"20px",borderRadius:"0 !important"});(0,t.Z)("span")({fontSize:"30px",fontWeight:"bold",fontStretch:"normal",lineHeight:"normal",letterSpacing:"normal",color:"#4f4f4f"}),(0,t.Z)("span")({fontSize:"16px",fontStretch:"normal",lineHeight:"1.5",color:"#828282",margin:"4px 0 42px 0"})},6001:function(e,n,r){var t=r(1089),i=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,a={LoginSchema:function(){return t.Ry().shape({email:t.Z_().trim().email("Please enter valid email").max(50,"Email can be maximum of hundred characters").required("Email field cannot be blank"),password:t.Z_().trim().required("Password field cannot be blank")})},SignupSchema:function(){return t.Ry().shape({name:t.Z_().trim().max(100,"Name can be maximum of hundred characters").required("Name field cannot be blank"),email:t.Z_().trim().email("Please enter valid email").max(100,"Email can be maximum of hundred characters").required("Email field cannot be blank"),password:t.Z_().trim().required("Password field cannot be blank"),checked:t.O7().required("Please Mark this box")})},ChangePasswordScheema:function(){return t.Ry().shape({currentpassword:t.Z_().trim().required("Current Password field cannot be blank"),newpassword:t.Z_().trim().min(6,"Password should be minimum of six characters").max(20,"Password should be maximum of twenty characters").required("New Password field cannot be blank").test("notBothAtTheSameTime","Current Password and New Password should not be the same",(function(e){return this.parent.currentpassword!==e}))})},MobileNumber:function(){return t.Ry().shape({PhoneNumber:t.Z_().required("Please enter your phone number").matches(i,"Phone number is not valid").min(10,"to short").max(10,"to long")})},BusinessDetailSchema:function(){return t.Ry().shape({name:t.Z_().trim().max(100,"Name can be maximum of hundred characters").required("Name field cannot be blank"),phone_number:t.Z_().required("Please enter your phone number").matches(i,"Phone number is not valid").min(10,"Phone number cannot be less than 10 digits"),location:t.Ry().required("Please enter the location"),checked:t.O7().required("Please Mark this box")})},SoleTraderSchema:function(){return t.Ry().shape({businessName:t.Z_().trim().required("Required"),abnNumber:t.Z_().trim().max(10,"Maximum limit is 10 digits").required("Required"),location:t.Ry().shape({address:t.Z_(),coordinates:t.IX()}).required("Location Required"),skills:t.IX().min(1,"Required"),industryExp:t.Rx().max(20,"Cannot exceed 20 years of Experience").required("Required")})}};n.Z=a},2011:function(e,n,r){r.r(n);var t=r(4942),i=r(885),a=r(2791),o=r(9386),l=r(6001),s=r(8546),d=r(541),u=r(8288),c=r(3967),m=r(890),h=r(3329),f=r(5705),p=r(6907),x=r(8566),b=r(184);n.default=function(){var e=(0,a.useState)(""),n=(0,i.Z)(e,2),r=n[0],g=n[1],Z=(0,c.Z)(),w=(0,u.y)({theme:Z});return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(p.B6,{children:(0,b.jsxs)("div",{className:w.loginContainer,children:[(0,b.jsxs)(h.Z,{className:w.titleContainer,children:[(0,b.jsx)(o.Z,{style:w.brandLogo,imgUrl:x.Z.Logo}),(0,b.jsx)("div",{className:w.title,children:(0,b.jsx)(m.Z,{sx:(0,t.Z)({fontSize:"30px",fontWeight:"bold",fontStretch:"normal",lineHeight:"normal",letterSpacing:"normal",color:"#4f4f4f",float:"left",marginTop:"4%"},Z.breakpoints.down(1025),{fontSize:"20px",marginLeft:"2%",marginTop:"4%"}),children:"Forgot Password"})}),(0,b.jsx)("div",{className:w.title,children:(0,b.jsx)(m.Z,{sx:(0,t.Z)({fontSize:"15px",fontStretch:"normal",lineHeight:"normal",letterSpacing:"normal",color:"#687173",float:"left",marginTop:"4%"},Z.breakpoints.down(1025),{fontSize:"12px",marginLeft:"2%",marginTop:"4%"}),children:"To reset your password, please enter your email address"})})]}),(0,b.jsx)(f.J9,{initialValues:{email:""},validationSchema:l.Z.LoginSchema(),onSubmit:function(e,n){n.setSubmitting},children:(0,b.jsxs)(f.l0,{children:[(0,b.jsx)("div",{className:w.lables,children:(0,b.jsx)(m.Z,{children:"EMAIL ADDRESS"})}),(0,b.jsx)("div",{className:w.inputField,children:(0,b.jsx)(s.Z,{onChange:function(e){return g(e.target.value)},placeholder:"Enter Email Address",value:r,name:"email",type:"email"})}),(0,b.jsx)(d.Io,{onClick:function(){return console.log(r)},className:w.activeButton,sx:{color:"#fff"},type:"submit",variant:"contained",children:"Send"})]})})]})})})}},8288:function(e,n,r){r.d(n,{y:function(){return i}});var t=r(4942),i=(0,r(2455).Z)({loginContainer:function(e){var n=e.theme;return(0,t.Z)({display:"flex",flexDirection:"column",justifyContent:"center",width:"88% !important",height:"88% !important",marginLeft:"8%"},n.breakpoints.down(1024),{padding:"50px",justifyContent:"center"})},titleContainer:function(e){e.theme;return{display:"flex",flexDirection:"column",width:"100%"}},brandLogo:function(e){var n,r=e.theme;return{width:"100%","& figure":(n={margin:0,width:"140px",height:"70px"},(0,t.Z)(n,r.breakpoints.up(1920),{width:"200px",height:"100px"}),(0,t.Z)(n,r.breakpoints.up(2560),{width:"240px",height:"120px"}),n)}},title:function(e){e.theme;return{width:"100%"}},lables:function(e){e.theme;return{float:"left",marginTop:"1.5%",marginBottom:"1.5%"}},forgotPassword:function(){return{display:"flex",justifyContent:"space-between",marginBottom:"3%","& a":{textDecoration:"none",color:"#687173"}}},inputField:function(){return{marginBottom:"5%"}},activeButton:function(){return{color:"#ffffff",backgroundColor:"#0da4ce",maxHeight:"40px"}},formCommon:function(){return{alignItems:"flex-start"}},dontHaveAccount:function(){return{"& a":{textDecoration:"none",color:"#687173"}}},endIconContainer:function(){return{backgroundColor:"#0da4ce"}}})}}]);
//# sourceMappingURL=11.7d335c97.chunk.js.map