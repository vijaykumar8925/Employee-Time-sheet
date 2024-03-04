

import { useState } from "react";
import axios from "axios";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import { useEffect } from "react";
// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

// Images

import sam from './sam-5qu17cF-Jv0-unsplash.jpg';

function PasswordChange() {
  const[email,setemail]=useState('')
  const[newpass,setnewpass]=useState('')
  const[conpass,setconpass]=useState('')
  const[emai_errmsg,setemai_errmsg]=useState(null)
  const[newpass_errmsg,setnewpass_errmsg]=useState(null)
  const[conpass_errmsg,setconpass_errmsg]=useState(null)
  const[incrct_errmsg,setincrct_errmsg]=useState(null)
const OnhandleSubmit=(event)=>{
   event.preventDefault()
   
    if(newpass.length!=0){
         setnewpass_errmsg(false)
    }if(newpass.length<=0){
      setnewpass_errmsg(true)
    }
    if(conpass.length!=0){
      setconpass_errmsg(false)
 }if(conpass.length<=0){
  setconpass_errmsg(true)
 }if(newpass==conpass){
  setincrct_errmsg(false)
 }if(newpass!=conpass){
  setincrct_errmsg(true)
 }
 let values = {
  password : newpass,
  confpass : conpass,
  mail : localStorage.getItem('forgetpassemail')
 }
 if(newpass.match(/[a-z]/) && newpass.match(/[A-Z]/) &&newpass.match(/[0-9]/) && newpass.length >= 8 && newpass == conpass){
event.preventDefault()
// window.location.href='/authentication/sign-in'
  let apiUrl = `http://localhost:5000/post/changepassword`
   axios.post(apiUrl,values)
   .then((res) => {
    alert(res.data.messsage)
    if(res.data.messsage == 'Password Upadated!!'){
      window.location.href='/authentication/sign-in'
      localStorage.removeItem('forgetpassemail')
    }
    
   })
 }else{
  alert('require mantary filed')
 }
}
useEffect(() => {
  setemail(localStorage.getItem('forgetpassemail'))
}, []);

const [whole,setWhole] = useState(false)
const [minimum,setMinimum] = useState(false)
const [caps,setCaps] = useState(false)
const [small,setSmall] = useState(false)
const [number,setNumber] = useState(false)


const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>

                    <p className="para-warning" style={{color:minimum? 'green' : ''}}>{minimum?<span>&#10003;</span>:<span>&times;</span>}Must have 8 charcters</p>
                    <p className="para-warning" style={{color:caps? 'green' : ''}}>{caps?<span>&#10003;</span>:<span>&times;</span>}Must have 1 Captial letter</p>
                    <p className="para-warning" style={{color:small? 'green' : ''}}>{small?<span>&#10003;</span>:<span>&times;</span>}Must have 1 Small letter</p>
                    <p className="para-warning" style={{color:number? 'green' : ''}}>{number?<span>&#10003;</span>:<span>&times;</span>}Must have 1 Number</p>
  </Tooltip>
);

const renderTooltip1 = (props) => (
  <Tooltip id="button-tooltip" {...props}>
        {matches ?<p style={{color:'green'}}>Password Matched!!!</p>:<p style={{color:'grey'}}>Password and Confrim password not match</p>}
  </Tooltip>
);

const [all,setAll] = useState(false)

const handlePassChange = (e) => {
  setnewpass(e.target.value);
  {e.target.value.length>0?setnewpass_errmsg(false):setnewpass_errmsg(true)}

  let value = e.target.value

  if(value.match(/[a-z]/)){
    setSmall(true)
  console.log('must have small letter');
  }else{
    setSmall(false)
  }

  if(value.match(/[A-Z]/)){
    setCaps(true)
    console.log('must have Caps letter'); 
  }else{
    setCaps(false)
  }

  if(value.match(/[0-9]/)){
    setNumber(true)
  console.log('must have one numbere'); 
  } else{
    setNumber(false)
  }
  if(value.length >= 8){
    setMinimum(true)
    console.log('more than 8 character')
  }else{
    setMinimum(false)
  }

  if(value.match(/[a-z]/) && value.match(/[A-Z]/) &&value.match(/[0-9]/) && value.length >= 8 ){
    setAll(true)
}else {
  setAll(false)
}

}

const [matches,setMatchs] = useState(false)

const confrimPassChange = (e) => {
  setconpass(e.target.value);
  {e.target.value.length>0?setconpass_errmsg(false):setconpass_errmsg(true)}
  if(newpass == e.target.value){
    setMatchs(true)
  }else{
    setMatchs(false)
  }
}


  return (
    <div style={{overflowX:'hidden'}}>
    <CoverLayout
      title="Password Security Made Simple !"
      description="Effortlessly enhance your online security with our user-friendly password changing portal"
      image={sam}
    >
       <form onSubmit={OnhandleSubmit}>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label"  variant="caption" fontWeight="bold">
              Email
            </SoftTypography>
          </SoftBox>
          <SoftInput type="email" value={email}  placeholder="Email"/>
        </SoftBox>
        <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label"  variant="caption" fontWeight="bold">
             New Password
            </SoftTypography>
          </SoftBox>
          <SoftInput type="password" style={newpass_errmsg?{border:"1px solid red"}:{}} onChange={handlePassChange}
               value={newpass} name='newpass' placeholder="New Password" />
        </SoftBox>
        </OverlayTrigger>
        <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip1}
    >
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
             Confirm Password
            </SoftTypography>
          </SoftBox>
          <SoftInput type="password" style={conpass_errmsg?{border:"1px solid red"}:{}} onChange={confrimPassChange}  value={conpass} name='conpass' placeholder="Confirm Password" />
                    {incrct_errmsg?<div style={{textAlign:"center",fontSize:"13px",color:"red"}}>incorrect password</div>:''}
        </SoftBox>  
        </OverlayTrigger>
        <SoftBox mt={4} mb={1}>
              <SoftButton 
                   type='submit' variant="gradient" color="dark" fullWidth >
                Submit
              </SoftButton>
            </SoftBox>   
            </form>
    </CoverLayout>
    </div>
  );
}

export default PasswordChange;
// const break_value = {

// {e.target.value==newpass && e.target.value.length>0?setincrct_errmsg(false):setincrct_errmsg(true)}
 
//   email: email,
//   newpass: newpass,
//   conpass: conpass,
// };
// const config = {
//   headers: {
//     accept: "application/json",
//   },
// };
// let Url="http://localhost:8000/auth/password/change"
// axios.put(Url, break_value, config).then( async(res) => {
//    alert(res.data)
//    localStorage.removeItem('verify_mail')
   
// });