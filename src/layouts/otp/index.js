
import { useState } from "react";
// @mui material components
import Card from "@mui/material/Card";
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import Timing from "components/timer";
import './otp.styles.css';
import michael from './michael-martinelli-mFbrMEVKCkc-unsplash.jpg'
import axios from "axios";
import { useEffect } from "react";
// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import {useLocation} from 'react-router-dom';
function SignUp() {
  const location = useLocation();
  const [agreement, setAgremment] = useState(true);
  const [value,setValue] = useState('')
  const [value1,setValue1] = useState('')
  const [value2,setValue2] = useState('')
  const [value3,setValue3] = useState('')
  const [value4,setValue4] = useState('')
  const [value5,setValue5] = useState('')
  const values = [value,value1,value2]

  const email = localStorage.getItem('forgetpassemail');

const OnhandleClick=(event)=>{
  event.preventDefault()
  // window.location.href='/changepassword/sign-up'
  let values = {
    email : email,
    otp : `${value}${value1}${value2}${value3}${value4}${value5}`
  }
  console.log(values)
  let apiUrl = `http://localhost:5000/post/otp`
  axios.post(apiUrl,values)
  .then((res) => {
    console.log(res.data.meassage)
    alert(res.data.meassage)
    if(res.data.meassage == 'Successful'){
        window.location.href='/changepassword/sign-up'
    }
  })
}
// useEffect(() => {
//   if(!location.state){
//     window.location.href='/authentication/sign-in'
//   }
// }, []);
  return (
    <div style={{overflowX:'hidden'}}>

    <BasicLayout
    title="Otp Verfication !"
    image={michael}
    
  >
    <Card>
      <SoftBox p={3} mb={1} textAlign="center">
        <SoftTypography variant="h5" fontWeight="medium">
          Six Digit Verfication pin
        </SoftTypography>
      </SoftBox>
      <SoftBox pt={2} pb={3} px={3}>
        <form onSubmit={OnhandleClick}>
        <div className="sanju">
          <input maxLength={1} onChange={(e) => {setValue(e.target.value)}}  type="number"  value={value} name="value" ></input>
          <input maxLength={1} onChange={(e) => {setValue1(e.target.value)}} type="number" value={value1} name="value1" ></input>
          <input maxLength={1} onChange={(e) => {setValue2(e.target.value)}} type="number"  value={value2} name="value2" ></input>
          <input maxLength={1} onChange={(e) => {setValue3(e.target.value)}} type="number" value={value3} name="value3" ></input>
          <input maxLength={1} onChange={(e) => {setValue4(e.target.value)}} type="number" value={value4} name="value4"  ></input>
          <input maxLength={1} onChange={(e) => {setValue5(e.target.value)}} type="number" value={value5} name="value5" ></input>
          </div>
       
      <Timing  OnhandleClick={OnhandleClick}/>
      </form>
      </SoftBox>
    </Card>
  </BasicLayout>
    </div>
  );
}

export default SignUp;
