import { useState } from "react";
import { Link, json } from "react-router-dom";
import Switch from "@mui/material/Switch";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import CoverLayout from "layouts/authentication/components/CoverLayout";
import curved9 from "assets/images/curved-images/curved-6.jpg";
import "./Signin.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { replace } from "stylis";
import Transitions from "animation/Transition";
function SignIn() {
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(true);
  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [passworderr, setpassworderr] = useState(false);
  const [emailerr, setemailerr] = useState(null);
  const [emailerr1, setemailerr1] = useState(null);
  const [role, setrole] = useState("");
  const InputStyle = {
    border: "1px solid red",
  };
  const [img, setimg] = useState("");
  const SignFunction = (event) => {
    event.preventDefault();
    {
      email.length != 0 && email.match("@") ? setemailerr(false) : setemailerr(true);
    }
    {
      email.length > 0 && !email.match("@gmail")
        ? (setemailerr1(true), setemailerr(false))
        : setemailerr1(false);
    }
    {
      password.length != 0 ? setpassworderr(false) : setpassworderr(true);
    }
    if (email.length && password.length > 0 && email.match("@")) {
      ;
      navigate("/mainscreen", { state: role });
      window.location.reload();
    }
  };
  const [user, setuser] = useState(false);
  const [adminemail, setadminemail] = useState("");
  const [adminpass, setadminpass] = useState("");


  const handleSubmit = (event) => {
     event.preventDefault()

     const apiUrl = `http://localhost:5000/post/user/login`;
     const signinData = {
      email : email,
      password : password
     }
     if(email && password != 0){
      axios.post(apiUrl,signinData)
      .then((res) => {
       if(res.data.result == false){
         alert('Invalid Username or Password')
       }
       if(res.data.result != false){
         // alert('Succesfully Login')
         localStorage.setItem("role",res.data.result[0].empldls_is_active_user)
         localStorage.setItem("name",res.data.result[0].empldls_employee_name)
         localStorage.setItem("empcode",res.data.result[0].empldls_Emp_code)
         localStorage.setItem("mails",email)
         navigate("/mainscreen", { state: role });
       }
       console.log(res.data.result)
       setemailerr(false)
       setemailerr1(false)
       setpassworderr(false)
      })
      .catch((err) => console.log(err))
     } else{
        setemailerr(true)
        setemailerr1(true)
        setpassworderr(true)
     }
  }

  return (
    <Transitions>
      <div style={{ overflowX: "hidden" }} onSubmit={handleSubmit}>
        <CoverLayout
          title="Msts Intra Connect"
          description="Welcome back, team member.Log in to your work account"
          image={curved9}
        >
          <SoftBox component="form" role="form">
            <SoftBox mb={2}>
              <SoftBox mb={1} ml={0.5}>
                <SoftTypography component="label" variant="caption" fontWeight="bold">
                  Email
                </SoftTypography>
              </SoftBox>

              <SoftInput
                sx={emailerr ? InputStyle : ""}
                type="email"
                value={email}
                name="email"
                placeholder="Email"
                onChange={(e) => {
                  setemail(e.target.value);
                  {
                    e.target.value.length > 0
                      ? setemailerr(false)
                      : (setemailerr(true), setemailerr1(false));
                  }
                }}
              />
              {emailerr ? (
                <p style={{ fontSize: "12px", color: "red", textAlign: "center" ,position:'absolute',borderBottom:'1rem'}}>Reqired email*</p>
              ) : (
                ""
              )}
              {/* {emailerr1 ? (
                <p style={{ fontSize: "12px", color: "red", textAlign: "center" }}>invalid gmail</p>
              ) : (
                ""
              )} */}
            </SoftBox>
            <SoftBox mb={1}>
              <SoftBox ml={0.5}>
                <SoftTypography component="label" variant="caption" fontWeight="bold">
                  Password
                </SoftTypography>
              </SoftBox>
              <SoftInput
                sx={passworderr ? InputStyle : ""}
                type="password"
                value={password}
                name="password"
                placeholder="Password"
                onChange={(e) => {
                  setpassword(e.target.value);
                  {
                    e.target.value.length > 0 ? setpassworderr(false) : setpassworderr(true);
                  }
                }}
              />
              {passworderr ? (
                <div style={{ fontSize: "12px", color: "red", textAlign: "center" ,position:'absolute'}}>
                  Reqired password*
                </div>
              ) : (
                ""
              )}
            </SoftBox>
            {/* <SoftBox display="flex" alignItems="center">
              <div className="form-check">
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="user"
                      onChange={(e) => {
                        setrole(e.target.value);
                      }}
                      checked={role === "user"}
                    />
                    user
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="admin"
                      onChange={(e) => {
                        setrole(e.target.value);
                      }}
                      checked={role === "admin"}
                    />
                    admin
                  </label>
                </div>
              </div>
            </SoftBox> */}
            <SoftBox mt={2} mb={1}>
              <SoftButton
                variant="gradient"
                color="info"
                fullWidth
                component={Link}
                onClick={handleSubmit}
              >
                sign in
              </SoftButton>
            </SoftBox>
            <SoftBox mt={3} textAlign="center">
              <SoftTypography variant="button" color="text" fontWeight="regular">
                Don&apos;t have an account?{" "}
                <SoftTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </SoftTypography>
              </SoftTypography>
            </SoftBox>
            <SoftBox mt={3} textAlign="center">
              <SoftTypography
                component={Link}
                to="/forget/sign-up"
                variant="button"
                color="info"
                fontWeight="medium"
                textGradient
              >
                Forget Password
              </SoftTypography>
            </SoftBox>
          </SoftBox>
        </CoverLayout>
      </div>
    </Transitions>
  );
}

export default SignIn;

{
  /* <img style={{width:'50px',height:'50px'}} src={company}></img>
        <h3>MSTS :
          <span>Passionate about code, dedicated to excellence</span>
        </h3> */
}
// const Url="http://localhost:8000/auth/User/login";
// const userData = {
//   email: email,
//   password: password,

// };

// axios.post(Url, userData).then((response) => {
//   console.log(response.data.role)

//    if(response.data.result==false)
//    {
//       alert('login failed incorrect emailid or password')

//    }
//    else{
//    dgfdgfhggggggggggggggggggggggggggggggggggggggggggf
//    }
// });
// function getfDate() {
//   const today = new Date();
//   const hours = today.getHours() + 1;
//   const minutes = today.getDate();
//   const seconds = today.getMinutes();
//   return `${hours}/${minutes}/${seconds}`;
// }
//     localStorage.setItem('role',(response.data.role))
//     localStorage.setItem('email',(response.data.email))
//     localStorage.setItem('token',(response.data.result))
//     localStorage.setItem('data',response)
//     localStorage.setItem('profile',response.data.data)
//     localStorage.setItem('logintime',new Date())
//     alert('login succefully')
//      navigate('/mainscreen',{replace:true})
