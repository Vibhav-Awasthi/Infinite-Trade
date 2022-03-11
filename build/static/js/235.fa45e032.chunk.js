"use strict";(self.webpackChunkreact_js=self.webpackChunkreact_js||[]).push([[235],{1154:function(e,n,r){r.d(n,{Z:function(){return s}});var t=r(1413),i=r(5987),o=(r(2791),r(6151)),a=r(184),l=["children"];function s(e){var n=e.children,r=(0,i.Z)(e,l),s=(0,t.Z)((0,t.Z)({},r),{},{fullWidth:!0});return(0,a.jsx)(o.Z,(0,t.Z)((0,t.Z)({sx:{padding:"20px 0px"}},s),{},{children:n}))}},8546:function(e,n,r){var t=r(4942),i=r(1413),o=r(885),a=r(5987),l=(r(2791),r(5705)),s=r(9334),u=r(184),c=["name"];n.Z=function(e){var n=e.name,r=(0,a.Z)(e,c),d=(0,l.U$)(n),m=(0,o.Z)(d,2),h=m[0],f=m[1],p=(0,i.Z)((0,i.Z)((0,i.Z)({},r),h),{},{fullWidth:!0,variant:"outlined",value:h.value||""});return f&&f.touched&&f.error&&(p.error=!0,p.helperText=f.error),(0,u.jsx)("div",{children:(0,u.jsx)(s.Z,(0,i.Z)({size:"small",sx:(0,t.Z)({"& label.Mui-focused":{borderColor:"#000"},"& .MuiInput-underline:after":{border:"0.2px solid #000"},"& .MuiOutlinedInput-root":{"& fieldset":{border:"0.2px solid #000"},"&:hover fieldset":{border:"0.2px solid #000"},"&.Mui-focused fieldset":{boxShadow:"-2px 0px 23px -2px rgba(0,0,0,0.33)"}}},"& fieldset",{borderRadius:0})},p))})}},541:function(e,n,r){r.d(n,{Io:function(){return m},Jr:function(){return h}});var t=r(3457),i=r(1413),o=r(5987),a=(r(2791),r(6151)),l=r(5705),s=r(184),u=["children"],c=function(e){var n=e.children,r=(0,o.Z)(e,u),t=(0,l.u6)().submitForm,c=(0,i.Z)((0,i.Z)({},r),{},{fullWidth:!0,onClick:function(){t()}});return(0,s.jsx)(a.Z,(0,i.Z)((0,i.Z)({},c),{},{children:n}))},d=r(1154),m=((0,t.Z)("div")({backgroundColor:"#fff",width:"50%"}),(0,t.Z)(c)({width:"100%",height:"54px",marginTop:"20px",borderRadius:"0 !important"})),h=(0,t.Z)(d.Z)({width:"100%",height:"54px",marginTop:"20px",borderRadius:"0 !important"});(0,t.Z)("span")({fontSize:"30px",fontWeight:"bold",fontStretch:"normal",lineHeight:"normal",letterSpacing:"normal",color:"#4f4f4f"}),(0,t.Z)("span")({fontSize:"16px",fontStretch:"normal",lineHeight:"1.5",color:"#828282",margin:"4px 0 42px 0"})},6001:function(e,n,r){var t=r(1089),i=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,o={LoginSchema:function(){return t.Ry().shape({email:t.Z_().trim().email("Please enter valid email").max(50,"Email can be maximum of hundred characters").required("Email field cannot be blank"),password:t.Z_().trim().required("Password field cannot be blank")})},SignupSchema:function(){return t.Ry().shape({name:t.Z_().trim().max(100,"Name can be maximum of hundred characters").required("Name field cannot be blank"),email:t.Z_().trim().email("Please enter valid email").max(100,"Email can be maximum of hundred characters").required("Email field cannot be blank"),password:t.Z_().trim().required("Password field cannot be blank"),checked:t.O7().required("Please Mark this box")})},ChangePasswordScheema:function(){return t.Ry().shape({currentpassword:t.Z_().trim().required("Current Password field cannot be blank"),newpassword:t.Z_().trim().min(6,"Password should be minimum of six characters").max(20,"Password should be maximum of twenty characters").required("New Password field cannot be blank").test("notBothAtTheSameTime","Current Password and New Password should not be the same",(function(e){return this.parent.currentpassword!==e}))})},MobileNumber:function(){return t.Ry().shape({PhoneNumber:t.Z_().required("Please enter your phone number").matches(i,"Phone number is not valid").min(10,"to short").max(10,"to long")})},BusinessDetailSchema:function(){return t.Ry().shape({name:t.Z_().trim().max(100,"Name can be maximum of hundred characters").required("Name field cannot be blank"),phone_number:t.Z_().required("Please enter your phone number").matches(i,"Phone number is not valid").min(10,"Phone number cannot be less than 10 digits"),location:t.Ry().required("Please enter the location"),checked:t.O7().required("Please Mark this box")})},SoleTraderSchema:function(){return t.Ry().shape({businessName:t.Z_().trim().required("Required"),abnNumber:t.Z_().trim().max(10,"Maximum limit is 10 digits").required("Required"),location:t.Ry().shape({address:t.Z_(),coordinates:t.IX()}).required("Location Required"),skills:t.IX().min(1,"Required"),industryExp:t.Rx().max(20,"Cannot exceed 20 years of Experience").required("Required")})}};n.Z=o},9235:function(e,n,r){r.r(n);var t=r(4942),i=(r(2791),r(9386)),o=r(6001),a=r(8546),l=r(541),s=r(5398),u=r(3967),c=r(890),d=r(3329),m=r(5705),h=r(6907),f=r(8566),p=r(184);n.default=function(){var e=(0,u.Z)(),n=(0,s.y)({theme:e});return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(h.B6,{children:(0,p.jsxs)("div",{className:n.loginContainer,children:[(0,p.jsxs)(d.Z,{className:n.titleContainer,children:[(0,p.jsx)(i.Z,{style:n.brandLogo,imgUrl:f.Z.Logo}),(0,p.jsx)("div",{className:n.title,children:(0,p.jsx)(c.Z,{sx:(0,t.Z)({fontSize:"30px",fontWeight:"bold",fontStretch:"normal",lineHeight:"normal",letterSpacing:"normal",color:"#4f4f4f",float:"left",marginTop:"4%"},e.breakpoints.down(1025),{fontSize:"20px",marginLeft:"2%",marginTop:"4%"}),children:"Your Contact Details"})}),(0,p.jsx)("div",{className:n.title,children:(0,p.jsx)(c.Z,{sx:(0,t.Z)({fontSize:"15px",fontStretch:"normal",lineHeight:"normal",letterSpacing:"normal",color:"#687173",float:"left",marginTop:"4%"},e.breakpoints.down(1025),{fontSize:"12px",marginLeft:"2%",marginTop:"4%"}),children:"How can your clients contact you?"})})]}),(0,p.jsx)(m.J9,{initialValues:{PhoneNumber:""},validationSchema:o.Z.MobileNumber(),onSubmit:function(e,n){n.setSubmitting},children:(0,p.jsxs)(m.l0,{children:[(0,p.jsx)("div",{className:n.lables,children:(0,p.jsx)(c.Z,{children:"MOBILE NUMBER*"})}),(0,p.jsx)("div",{className:n.inputField,children:(0,p.jsx)(a.Z,{placeholder:"Enter your mobile number",name:"phone_number",type:"number"})}),(0,p.jsx)("div",{className:n.lables,children:(0,p.jsx)(c.Z,{children:"OFFICE NUMBER*"})}),(0,p.jsx)("div",{className:n.inputField,children:(0,p.jsx)(a.Z,{placeholder:"Enter work number",name:"phone_number",type:"number"})}),(0,p.jsx)("div",{className:n.lables,children:(0,p.jsx)(c.Z,{sx:{color:"#424546"},children:"ARE YOU ON THE TOOLS?"})}),(0,p.jsxs)("div",{className:n.tools,children:[(0,p.jsx)(l.Io,{className:n.activeButton,sx:{color:"#fff",backgroundColor:"#000"},type:"submit",variant:"contained",children:"YES"}),(0,p.jsx)(l.Io,{className:n.activeButton,sx:{color:"#000",backgroundColor:"#fff"},type:"submit",variant:"contained",children:"NO"})]}),(0,p.jsx)(l.Io,{className:n.activeButton,sx:{color:"#fff"},type:"submit",variant:"contained",children:"Save & Continue"})]})})]})})})}},5398:function(e,n,r){r.d(n,{y:function(){return i}});var t=r(4942),i=(0,r(2455).Z)({loginContainer:function(e){var n=e.theme;return(0,t.Z)({width:"90% !important",height:"89% !important",display:"flex",flexDirection:"column",justifyContent:"center"},n.breakpoints.down(1024),{padding:"50px",justifyContent:"center"})},titleContainer:function(e){e.theme;return{display:"flex",flexDirection:"column",width:"100%",alignItems:"right"}},brandLogo:function(e){var n,r=e.theme;return{width:"100%","& figure":(n={margin:0,width:"140px",height:"70px"},(0,t.Z)(n,r.breakpoints.up(1920),{width:"200px",height:"100px"}),(0,t.Z)(n,r.breakpoints.up(2560),{width:"240px",height:"120px"}),n)}},checkBoxContainer:function(){return{float:"left"}},checkBox:function(){return{background:" #FFFFFF",boxSizing:"border-box",marginBottom:"5px","&.css-rfs483-MuiFormControlLabel-root":{marginLeft:"-26px",marginRight:"0px",width:"100%"}}},ckBox:function(){return{"&.css-3zq233-MuiButtonBase-root-MuiCheckbox-root.Mui-checked":{color:"#000"}}},endIconContainer:function(){return{backgroundColor:"#0da4ce"}},title:function(e){e.theme;return{width:"100%"}},verifyTitle:function(e){var n=e.theme;return(0,t.Z)({border:"1 px solid black",position:"relative",right:"11%"},n.breakpoints.down(1025),{position:"relative",right:"11%"})},resendMail:function(){return{"&:hover":{background:"none"}}},lables:function(e){e.theme;return{float:"left",marginTop:"1.5%",marginBottom:"1.5%"}},forgotPassword:function(){return{display:"flex",justifyContent:"space-between",marginBottom:"3%","& a":{textDecoration:"none",color:"#687173"}}},profileSelector:function(){return{border:"2px solid grey",width:"43%",cursor:"pointer"}},inputField:function(){return{marginBottom:"1%","& input::-webkit-outer-spin-button":{WebkitAppearance:"none",margin:0},"& input::-webkit-inner-spin-button":{webkitAppearance:"none",margin:0}}},textfieldClass:function(){return{}},selectProfile:function(e){var n,r=e.theme;return{display:"flex",height:"100px",width:"100%",marginRight:"20%",alignItems:"center",justifyContent:"center","& figure":(n={},(0,t.Z)(n,r.breakpoints.up(1920),{width:"200px",height:"100px"}),(0,t.Z)(n,r.breakpoints.up(2560),{width:"240px",height:"120px"}),n)}},normalButton:function(){return{marginTop:"5%",width:"100%"}},activeButton:function(){return{color:"#ffffff",backgroundColor:"#0da4ce",maxHeight:"40px"}},formCommon:function(){return{alignItems:"flex-start"}},buttonContainer:function(){return{marginTop:"5%",width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between"}},dontHaveAccount:function(){return{"& a":{textDecoration:"none",color:"#687173"}}},tools:function(){return{display:"flex",width:"100%"}}})}}]);
//# sourceMappingURL=235.fa45e032.chunk.js.map