
import { useState } from "react";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import { useNavigate } from "react-router-dom";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import boat from 'boat.jpg'
import axios from "axios";
import './Forget.css'
function Fogetpassword() {
  const navigate = useNavigate();
  const [agreement, setAgremment] = useState(true);
  const [email,setEmail] = useState('');
  const [emailErr,setEmailErr] = useState(false);
  const [emailErr1,setEmailErr1] = useState(false);
  const [phone,setPhone] = useState('')
  const [phoneErr,setPhoneErr] = useState('');
  const [phoneErr1,setPhoneErr1] = useState('');
 const [loader,setloader]=useState(null)


  const InputStyle = {
    border: "1px solid red",
  };
  const handleSetAgremment = () => setAgremment(!agreement);


  const handleClick = (event) => {
    event.preventDefault()
    {
      email.length != 0 && email.match("@") ? setEmailErr(false) : setEmailErr(true);
    }
    {
      email.length > 0 && !email.match("@")
        ? (setEmailErr1(true), setEmailErr(false))
        : setEmailErr1(false);
    }
    {
      phone.length != 0 && phone.length == 10 ? setPhoneErr(false) : setPhoneErr(true);
    }
    {
      phone.length > 0 && phone.length != 10 ? (setPhoneErr1(true),setPhoneErr(false)) : setPhoneErr1(false);
    }
    if (email.length  && phone.length > 0 && email.match("@") && phone.length == 10) {
     let params = {
      email : email,
      phone : phone
     }
     event.preventDefault()
     let apiUrl = `http://localhost:5000/post/forgetpassword`
     axios.post(apiUrl,params)
     .then((res) => {
      alert(res.data.message)
      console.log(res.data.data[0].empldls_email)
      localStorage.setItem('forgetpassemail',res.data.data[0].empldls_email)
      if(res.data.message == 'Otp Successfully Sended'){
        window.location.href='/otp/sign-up'
      }
     })
    
    }
  }

  console.log(email,phone)
  
  return (
    <BasicLayout
    title="Unlock Your Digital Portal"
    description="Recover your forgotten password and regain access to your Employee Profile"
     image={boat}
    >
      <Card >
        <SoftBox p={3} mb={1} textAlign="center">
          <SoftTypography variant="h5" fontWeight="medium">
          Forget Password
          </SoftTypography>
         { loader?<div><span className="loader"></span></div>:'' }
        </SoftBox>
        <SoftBox mb={2}>
         
        </SoftBox>
       
     <form onSubmit={handleClick}>
     <SoftBox pt={2} pb={3} px={3}>
            
            <SoftBox mb={2}>
              <SoftInput 
               sx={emailErr ? InputStyle : ""}
              onChange = {(e) => {setEmail(e.target.value)
               {
                e.target.value.length > 0 ? setEmailErr(false) : setEmailErr(true);
              }
              }} type="email" placeholder="Email" />
              {emailErr ? (
              <p style={{ fontSize: "12px", color: "red", textAlign: "center" }}>Reqired Email</p>
            ) : (
              ""
            )}
            {emailErr1 ? (
              <p style={{ fontSize: "12px", color: "red", textAlign: "center" }}>Reqired @gmail</p>
            ) : (
              ""
            )}
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput type="number" placeholder="mobile number"
              sx={phoneErr ? InputStyle : ""} 
                onChange={(e) => {setPhone(e.target.value)
                  {
                    e.target.value.length > 0 ? setPhoneErr(false) : setPhoneErr(true);
                  }
                }}
                length={10}
              />
              {phoneErr ? (
              <p style={{ fontSize: "12px", color: "red", textAlign: "center" }}>Reqired Phone No</p>
            ) : (
              ""
            )}
            {phoneErr1 ? (
              <p style={{ fontSize: "12px", color: "red", textAlign: "center" }}>Reqired 10 Digit</p>
            ) : (
              ""
            )}
            </SoftBox>
            
            <SoftBox mt={4} mb={1}>
            <SoftButton type='submit' variant="gradient" color="dark" fullWidth style={loader?{PointerEvent:"none"}:{}}>
                Generate Otp
              </SoftButton>
            </SoftBox>
           
        </SoftBox>
     </form>
      </Card>
    </BasicLayout>
  );
}

export default Fogetpassword;
// const break_value = {
//   email: email,
//   phone: phone,
// };
// const config = {
//   headers: {
//     accept: "application/json",
//   },
// };
// setloader(true)
// let Url="http://localhost:8000/auth/forget/password"
// axios.post(Url, break_value, config).then((res) => {
          
//   if(res.data instanceof Object){
//     localStorage.setItem('otp_email',res.data.email)
//     localStorage.setItem('otp_phone',res.data.phone)
//     localStorage.setItem('otp_otp',res.data.otp)
//     localStorage.setItem('otp_id',res.data.id)
//      navigate('/otp/sign-up',{state:res.data})
//   }else{
//     alert(res.data)
//   }

// }).finally(()=>{
//   setloader(false)
// });