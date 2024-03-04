import { useState } from "react";
// react-router-dom components
import { Link } from "react-router-dom";
import { useEffect } from "react";
// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
// import './signup.styles.css';

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import MyVerticallyCenteredModal from "examples/models/MyVerticallyCenteredModal";
import Form from "react-bootstrap/Form";
import Transitions from "animation/Transition";
// Authentication layout components
// import natue from './nature (2).jpg'
import "./Signup.css";
import axios from "axios";
import { Input } from "@mui/material";
import { PiEyeDuotone } from "react-icons/pi";

function SignUp() {
  const [agreement, setAgremment] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const handleSetAgremment = () => setAgremment(!agreement);
  const [name, setname] = useState("");
  const [mname, setmname] = useState("");
  const [fname, setfname] = useState("");
  const [phno, setphno] = useState("");
  const [dob, setdob] = useState("");
  const [adress, setadress] = useState("");
  const [gender, setgender] = useState("");
  const [deptment, setdeptment] = useState("");
  const [datejoin, setdatejoin] = useState("");
  const [img, setimg] = useState(null);
  const [email, setemail] = useState("");
  const [empcode, setempcode] = useState("");
  const [newpass, setnewpass] = useState("");
  const [conpass, setconpass] = useState("");
  // errror
  const [nameerr, setnameerr] = useState(false);
  const [nameerr1, setnameerr1] = useState(false);
  const [mnameerr, setmnameerr] = useState(false);
  const [mnameerr1, setmnameerr1] = useState(false);
  const [fnameerr, setfnameerr] = useState(false);
  const [fnameerr1, setfnameerr1] = useState(false);
  const [phnoerr, setphnoerr] = useState(false);
  const [phnoerr1, setphnoerr1] = useState(false);
  const [doberr, setdoberr] = useState(false);
  const [adresserr, setadresserr] = useState(false);
  const [gendererr, setgendererr] = useState(false);
  const [deptmenterr, setdeptmenterr] = useState(false);
  const [datejoinerr, setdatejoinerr] = useState(false);
  const [imgerr, setimgerr] = useState(false);
  const [emailerr, setemailerr] = useState(false);
  const [emailerr1, setemailerr1] = useState(false);
  const [empcodeerr, setempcodeerr] = useState(false);
  const [empcodeerr1, setempcodeerr1] = useState(false);
  const [empcodeerr2, setempcodeerr2] = useState(false);
  const [newpasserr, setnewpasserr] = useState(false);
  const [newpasserr1, setnewpasserr1] = useState(false);
  const [newpasserr2, setnewpasserr2] = useState(false);
  const [newpasserr3, setnewpasserr3] = useState(false);
  const [conpasserr, setconpasserr] = useState(false);
  const [conpasserr1, setconpasserr1] = useState(false);
  const HandleSubmitSignup = (event) => {
    event.preventDefault();
    {
      name.length != 0 ? setnameerr(false) : (setnameerr(true), setnameerr1(false));
    }
    {
      fname.length != 0 ? setfnameerr(false) : setfnameerr(true);
    }
    {
      phno.length != 0 ? setphnoerr(false) : setphnoerr(true);
    }
    {
      phno.length > 10 || phno.length < 10 ? setphnoerr1(true) : setphnoerr1(false);
    }
    {
      mname.length != 0 ? setmnameerr(false) : setmnameerr(true);
    }
    {
      dob.length != 0 ? setdoberr(false) : setdoberr(true);
    }
    {
      adress.length != 0 ? setadresserr(false) : setadresserr(true);
    }
    {
      gender.length != 0 ? setgendererr(false) : setgendererr(true);
    }
    {
      deptment.length != 0 ? setdeptmenterr(false) : setdeptmenterr(true);
    }
    {
      datejoin.length != 0 ? setdatejoinerr(false) : setdatejoinerr(true);
    }
    {
      img == null ? setimgerr(true) : setimgerr(false);
    }
    {
      email.length != 0 ? setemailerr(false) : (setemailerr(true), setemailerr1(false));
    }
    {
      email.length > 0 && !email.match("@gmail")
        ? (setemailerr1(true), setemailerr(false))
        : setemailerr1(false);
    }
    if (phno.length == 10) {
      setphnoerr(false);
      setphnoerr1(false);
    }
    if (phno.length < 1) {
      setphnoerr(true);
      setphnoerr1(false);
    }
    let emp_err = empcode !== empcode.toLowerCase();
    if ((empcode.length <= 15 && empcode.length > 0) || empcode.length > 15) {
      setempcodeerr2(true);
      setempcodeerr1(false);
      setempcodeerr(false);
    }
    if (empcode.length == 0) {
      setempcodeerr(true);
      setempcodeerr2(false);
      setempcodeerr1(false);
    }
    if (empcode.length == 15) {
      setempcodeerr2(false);
    }

    if (newpass.length != 0) {
      setnewpasserr1(false);
      setnewpasserr2(false);
    } else {
      setnewpasserr(true);
      setnewpasserr1(false);
      setnewpasserr2(false);
    }
    if (newpass.length > 0 && newpass.length <= 5) {
      setnewpasserr3(true);
    } else {
      setnewpasserr3(false);
    }
    if (conpass.length != 0) {
      setconpasserr(false);
    } else {
      setconpasserr(true);
    }
    if (newpass.length > 0 && newpass != conpass) {
      setconpasserr(false);
      setconpasserr1(true);
    }
    if (newpass === conpass) {
      setconpasserr1(false);
    }

    const formdata = new FormData();
    formdata.append('img',img)

    const userdata = {
      name : name,
      fname:fname,
      phno:phno,
      datejoin:datejoin,
      dob:dob,
      adress :adress,
      gender : gender,
      deptment : deptment,
      email : email,
      empcode : empcode,
      newpass : newpass,
      img : formdata
    }
    if (
      name.length &&
      fname.length &&
      dob.length &&
      adress.length &&
      gender.length &&
      deptment.length &&
      datejoin.length &&
      img != null &&
      phno.length == 10 &&
      email.length > 0 &&
      email.match("@gmail") &&
      empcode.length == 15 &&
      newpass.length > 0 &&
      newpass.length > 5 &&
      newpass == conpass
    ) {
       const apiUrl = `http://localhost:8000/auth/User/Regis`
       axios.post(apiUrl,userdata).then((res) => console.log(res))
      window.location.href = "/";
    } else {
      alert("required to fill all tha mandatory details");
    }
  };

  const signuperr = {
    border: "1px solid red",
  };
  const removeFunction = () => {
    setModalShow(false);
    setimg(null);
  };
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);
  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
};
  return (
    <Transitions>
      <div className="sign_up_parent_header" style={{ display: "flex", justifyContent: "center" }}>
        <div className="sign_up_parent">
          <form onSubmit={HandleSubmitSignup}>
            <SoftBox pb={3} px={3}>
              <SoftBox component="form" role="form">
                <SoftBox mb={0.5} textAlign="center">
                  <SoftTypography variant="h3" fontWeight="medium">
                    Register
                  </SoftTypography>
                </SoftBox>
                <div
                  className="child_header"
                  style={{ display: "flex", justifyContent: "center", gap: "30px" }}
                >
                  <div className="name">
                    <div> Name</div>
                    <SoftBox mb={1} sx={{ width: "300px" }}>
                      <SoftInput
                        placeholder="Enter Your Name"
                        type="text"
                        value={name}
                        name="name"
                        sx={nameerr ? signuperr : ""}
                        onChange={(e) => {
                          setname(e.target.value);
                          {
                            e.target.value.length > 0 ? setnameerr(false) : setnameerr(true);
                          }
                        }}
                      />
                    </SoftBox>
                  </div>
                  <div className="name">
                    <div>Emp Code</div>
                    <SoftBox mb={1} sx={{ width: "300px" }} className="soft_input">
                      <SoftInput
                        placeholder="Enter Your empcode"
                        sx={empcodeerr ? signuperr : ""}
                        onChange={(e) => {
                          setempcode(e.target.value);
                          {
                            e.target.value.length > 0 ? setempcodeerr(false) : setempcodeerr(true);
                          }
                        }}
                        value={empcode}
                        name="empcode"
                      />
                    </SoftBox>

                    {empcodeerr1 ? <div className="name_err">required UPPER CASE</div> : ""}
                    {empcodeerr2 ? <div className="name_err">must have 15 letter</div> : ""}
                  </div>
                </div>
                <div
                  className="child_header"
                  style={{ display: "flex", justifyContent: "center", gap: "30px" }}
                >
                  <div className="name">
                    <SoftBox mb={1} sx={{ width: "300px" }}>
                      <div>Department</div>
                      <Form.Select
                        className="form-control shadow-none"
                        style={deptmenterr ? { border: "1px solid red" } : {}}
                        onChange={(e) => {
                          setdeptment(e.target.value);
                          {
                            e.target.value.length > 0
                              ? setdeptmenterr(false)
                              : setdeptmenterr(true);
                          }
                        }}
                        value={deptment}
                        name="deptment"
                      >
                        <option selected>Department</option>
                        <option value="developement">developement</option>
                        <option value="testing">testing</option>
                        <option value="human resourse">human resourse</option>
                      </Form.Select>
                    </SoftBox>
                  </div>
                  <div className="name">
                    <div> Date of Join</div>
                    <SoftBox mb={1} sx={{ width: "300px" }}>
                      <input
                        className="Date_join"
                        placeholder="Enter Your Number"
                        type="date"
                        style={datejoinerr ? {border:"1px solid red"} : {}}
                        onChange={(e) => {
                          setdatejoin(e.target.value);
                          {
                            e.target.value.length > 0
                              ? setdatejoinerr(false)
                              : setdatejoinerr(true);
                          }
                        }}
                        value={datejoin}
                        name="datejoin"
                        min={disablePastDate()}
                      />
                    </SoftBox>
                  </div>
                </div>
                <div
                  className="child_header"
                  style={{ display: "flex", justifyContent: "center", gap: "30px" }}
                >
                  <div className="name">
                    <SoftBox>
                      <SoftBox mb={1} sx={{ width: "300px" }}>
                        <div>Gender</div>
                        <Form.Select
                          className="form-control shadow-none"
                          style={gendererr ? { border: "1px solid red" } : {}}
                          onChange={(e) => {
                            setgender(e.target.value);
                            {
                              e.target.value.length > 0 ? setgendererr(false) : setgendererr(true);
                            }
                          }}
                          value={gender}
                          name="gender"
                        >
                          <option selected>Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">other</option>
                        </Form.Select>
                      </SoftBox>
                    </SoftBox>
                  </div>
                  <div className="name">
                    <div> Date of birth</div>
                    <SoftBox mb={1} sx={{ width: "300px" }}>
                      <SoftInput
                        placeholder="Enter Your dob"
                        sx={doberr ? signuperr : ""}
                        type="date"
                        onChange={(e) => {
                          setdob(e.target.value);
                          {
                            e.target.value.length > 0 ? setdoberr(false) : setdoberr(true);
                          }
                        }}
                        value={dob}
                        name="dob"
                      />
                    </SoftBox>
                  </div>
                </div>
              </SoftBox>

              <div
                className="child_header"
                style={{ display: "flex", justifyContent: "center", gap: "30px" }}
              >
                <div className="name">
                  <div> Email</div>
                  <SoftBox mb={1} sx={{ width: "300px" }}>
                    <SoftInput
                      placeholder="Enter Your mail"
                      value={email}
                      name="email"
                      sx={emailerr ? signuperr : ""}
                      onChange={(e) => {
                        let email_lower = e.target.value.toLowerCase();
                        setemail(email_lower);
                        {
                          e.target.value.length > 0 ? setemailerr(false) : setemailerr(true);
                        }
                      }}
                    />
                  </SoftBox>

                  {emailerr1 ? <div className="name_err">invalid @gmail</div> : ""}
                </div>
                <div className="name">
                  <div> Phone Number</div>
                  <SoftBox mb={1} sx={{ width: "300px" }}>
                    <SoftInput
                      placeholder="Enter Your Number"
                      type="number"
                      sx={phnoerr ? signuperr : ""}
                      onChange={(e) => {
                        setphno(e.target.value);
                        {
                          e.target.value.length > 0 ? setphnoerr(false) : setphnoerr(true);
                        }
                      }}
                      value={phno}
                      name="phno"
                    />
                  </SoftBox>

                  {phnoerr1 ? <div className="name_err">must 10 number</div> : ""}
                </div>
              </div>
              <div
                className="child_header"
                style={{ display: "flex", justifyContent: "center", gap: "30px" }}
              >
                <div className="name">
                  <div> Father/Spouse Name</div>
                  <SoftBox mb={1} sx={{ width: "630px" }}>
                    <SoftInput
                      placeholder="Enter Your Father/Spouse Name"
                      sx={fnameerr ? signuperr : ""}
                      onChange={(e) => {
                        setfname(e.target.value);
                        {
                          e.target.value.length > 0 ? setfnameerr(false) : setfnameerr(true);
                        }
                      }}
                      value={fname}
                      name="fname"
                    />
                  </SoftBox>
                </div>
              </div>
              <div
                className="child_header"
                style={{ display: "flex", justifyContent: "center", gap: "30px" }}
              >
                <div className="name">
                  <div>New Password</div>
                  <SoftBox mb={1} sx={{ width: "300px" }}>
                    <SoftInput
                      placeholder="Enter Your password"
                      sx={newpasserr ? signuperr : ""}
                      onChange={(e) => {
                        const specialChars = `/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;`;
                        let special = specialChars
                          .split("")
                          .some((char) => e.target.value.includes(char));
                        console.log(special);
                        let emp_err = e.target.value !== e.target.value.toLowerCase();
                        console.log(emp_err);
                        setnewpass(e.target.value);

                        if (special == true && e.target.value.length > 5) {
                          setnewpasserr1(false);
                          setnewpasserr2(true);
                          setnewpasserr(false);
                        }
                        if (special == false) {
                          setnewpasserr1(true);
                          setnewpasserr2(false);
                          setnewpasserr(false);
                        }
                        {
                          e.target.value.length > 0 ? setnewpasserr(false) : setnewpasserr(true);
                        }
                      }}
                      value={newpass}
                      name="newpass"
                    />
                  </SoftBox>
                  {newpasserr3 ? (
                    <div style={{ textAlign: "start", color: "red" }}>enter max 6 digit</div>
                  ) : (
                    ""
                  )}

                  {newpasserr1 ? <div className="name_err1">weak password</div> : ""}
                  {newpasserr2 ? <div className="name_err1">strong password</div> : ""}

                  <div>Confirm Password</div>
                  <SoftBox mb={1} sx={{ width: "300px" }}>
                    <SoftInput
                      placeholder="Enter Your confirm password"
                      sx={conpasserr ? signuperr : ""}
                      onChange={(e) => {
                        setconpass(e.target.value);
                        {
                          e.target.value.length > 0 ? setconpasserr(false) : setconpasserr(true);
                        }
                      }}
                      value={conpass}
                      name="conpass"
                    />
                  </SoftBox>

                  {conpasserr1 ? <div className="name_err">incorrect password</div> : ""}
                </div>
                <div className="name">
                  <div>Address</div>

                  <textarea
                    placeholder="Enter Your address "
                    style={adresserr ? signuperr : {}}
                    onChange={(e) => {
                      setadress(e.target.value);
                      {
                        e.target.value.length > 0 ? setadresserr(false) : setadresserr(true);
                      }
                    }}
                    value={adress}
                    name="adress"
                    className="adress_text"
                  />
                </div>
              </div>

              <div
                className="child_header"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "20px",
                  alignItems: "center",
                }}
              >
                <div className="name">
                  <SoftBox mt={2} sx={{ width: "300px" }}>
                    <div>Select your image</div>
                    <input
                      placeholder="Enter Your address "
                      style={imgerr ? { border: "1px solid red", borderRadius: "5px" } : {}}
                      type="file"
                      onChange={(e) => {
                        setimg(e.target.files[0]);
                        {
                          e.target.value == null ? setimgerr(true) : setimgerr(false);
                        }
                      }}
                      key={img}
                      name="img"
                      accept="image/*"
                    />
                  </SoftBox>
                </div>
                <div className="mt-5" style={{ cursor: "pointer" }}>
                  <div
                    style={
                      img == null
                        ? { pointerEvents: "none", display: "none" }
                        : { display: "block" }
                    }
                  >
                    <PiEyeDuotone size={30} onClick={() => setModalShow(true)} />
                  </div>
                </div>
              </div>
              <SoftBox display="flex" alignItems="center" justifyContent="center" mt={2}>
                <Checkbox checked={agreement} onChange={handleSetAgremment} />
                <SoftTypography
                  variant="button"
                  fontWeight="regular"
                  onClick={handleSetAgremment}
                  sx={{ cursor: "poiner", userSelect: "none" }}
                >
                  &nbsp;&nbsp;I agree the&nbsp;
                </SoftTypography>
                <SoftTypography
                  component="a"
                  href="#"
                  variant="button"
                  fontWeight="bold"
                  textGradient
                >
                  Terms and Conditions
                </SoftTypography>
              </SoftBox>
              <SoftBox mt={2} mb={1} textAlign="center">
                <SoftButton type="submit" variant="gradient" color="dark" width="200px">
                  Sign Up
                </SoftButton>
              </SoftBox>
              <SoftBox mt={2} textAlign="center">
                <SoftTypography variant="button" color="text" fontWeight="regular">
                  Already have an account?&nbsp;
                  <SoftTypography
                    component={Link}
                    to="/authentication/sign-in"
                    variant="button"
                    color="dark"
                    fontWeight="bold"
                    textGradient
                  >
                    Sign in
                  </SoftTypography>
                </SoftTypography>
              </SoftBox>
            </SoftBox>
          </form>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            img={img}
            removeFunction={removeFunction}
          />
        </div>
      </div>
    </Transitions>
  );
}

export default SignUp;

// const Url="http://localhost:8000/auth/User/Regis";
// const userData = {
//   name: name,
//   fname: fname,
//   phno: phno,
//   datejoin: datejoin,
//   dob: dob,
//   adress: adress,
//   gender: gender,
//   deptment: deptment,
//   email: email,
//   empcode: empcode,
//   newpass: newpass,
//   conpass: conpass,
//   img: img,

// };
// const config = {
//   headers: {
//     'content-type': 'multipart/form-data',
//   },
// };
// axios.post(Url, userData,config).then((response) => {
//   alert( response.data);
//    window.location.reload()
// })
