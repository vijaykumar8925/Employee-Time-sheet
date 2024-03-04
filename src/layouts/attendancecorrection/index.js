import React, { useEffect } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import UnderProgress from "components/UnderProgress";
import "./attendance.css";
import EmpInput from "./componenet/EmpInput";
import TextForm from "./componenet/TextForm";
import { FaEyeSlash } from "react-icons/fa";
// import { FaEye } from "react-icons/fa";
import SelectForm from "./componenet/SelectForm";
import { useRef } from "react";
import { useState } from "react";
import { useLocation, useParams , useNavigate} from "react-router-dom";
import TextareaForm from "./componenet/TextareaForm";
import { FaEye } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { MdOutlineModeEdit } from "react-icons/md";
import EmpinputFiles from "./componenet/EmpinputFiles";
import MyVerticallyCenteredModal from "examples/models/MyVerticallyCenteredModal";
import { number } from "prop-types";
import "react-toastify/dist/ReactToastify.css";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin4Line } from "react-icons/ri";
import index from "Hoc";
import { indexof } from "stylis";
import country from "county";
import { valid } from "chroma-js";
import Select from "react-select";
import Skills from "Skills";
import axios from "axios";
import { ToastContainer, toast, cssTransition } from "react-toastify";
import { string } from "prop-types";
import { Flag } from "@mui/icons-material";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
const Atten_correction = () => {
  const [modalShow, setModalShow] = useState(false);
  const [show, setshow] = useState(false);
  const [nameChange, setNameChange] = useState(false);
  const [pincodeValidate, setPincodeValidate] = useState(false);
  const [pincodeValidate1, setPincodeValidate1] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [emailValidate, setEmailValidate] = useState(false);
  const [comapanyValid,setCompanyValid] = useState(false)
  const [desiganationValid,setDesiganationValid] = useState(false)
  const [roleValid,setRoleValid] = useState(false)
  const [update,setUpdate] = useState(false)
  const [ageValid,setAgeValid] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [genderValid,setGenderValid] = useState(false)
  const [checkbox,setCheckBox] = useState(false)
  const [maxVal, setMaxVal] = useState();
  const [img, setimg] = useState(null);
  const [index,setIndex] = useState('')

  const [onlyNumbers, setOnlyNumbers] = useState("");
  const ref_skill = useRef(null);
  const Checkbox_Block = () => {
    setshow(true);
    if (show) {
      setshow(false);
    }
  };

  

const inputRef = useRef(null);


   
   
   
  const [data, setdata] = useState("");
  const [dated,setDated] = useState('');
  const [data1, setdata1] = useState("");
  const [data2, setdata2] = useState("");
  const [data3, setdata3] = useState("");
  const [data4, setdata4] = useState("");
  const [data5, setdata5] = useState("");

  const [data7, setdata7] = useState("");
  const [data8, setdata8] = useState("");
  const [data9, setdata9] = useState("");

  const [data11, setdata11] = useState("");
  const [data12, setdata12] = useState("");
  const [data13, setdata13] = useState("");
  const [data14, setdata14] = useState("");
  const [data15, setdata15] = useState("");
  const [data16, setdata16] = useState("");
  const [data17, setdata17] = useState("");
  const [data18, setdata18] = useState("");
  const [data19, setdata19] = useState("");
  const [password,setPassword] = useState('')
  const [confrimPassword,setConfrimPassword] = useState('')
  const [fileName1,setFileName1] = useState('')
  const [fileName,setFileName] = useState('')


  const [err, seterr] = useState(false);
  const [err1, seterr1] = useState(false);
  const [err2, seterr2] = useState(false);
  const [err3, seterr3] = useState(false);
  const [err4, seterr4] = useState(false);
  const [err5, seterr5] = useState(false);

  const [err7, seterr7] = useState(false);
  const [err8, seterr8] = useState(false);
  const [err9, seterr9] = useState(false);

  const [err11, seterr11] = useState(false);
  const [err12, seterr12] = useState(false);
  const [err13, seterr13] = useState(false);
  const [err14, seterr14] = useState(false);
  const [err15, seterr15] = useState(false);
  const [err16, seterr16] = useState(false);
  const [err17, seterr17] = useState(false);
  const [err18, seterr18] = useState(false);
  const [err19, seterr19] = useState(false);
  const [err20, seterr20] = useState(false);
  const [err21, seterr21] = useState(false);
  const [err22, seterr22] = useState(false);
  const [err23, seterr23] = useState(false);
  const [err24, seterr24] = useState(false);
  const [permanErr,setPermanErr] = useState(false);
  const[permanStateErr,setPermanStateErr] = useState(false);
  const [perCityErr,setPerCityErr] = useState(false);
  const [perPinErr,setPerPinErr] = useState(false);
  const [preTextErr,setPreTextErr] = useState(false);

   const Location = useLocation();
   console.log(Location.state)

   const values = Location.state?.data;

   const [selectedOptions, setSelectedOptions] = useState();
   
   let value = []
   console.log(value)
   

   if(selectedOptions != undefined){
    for (let i =0 ; i < selectedOptions.length ; i++){
      value.push(selectedOptions[i].value)
     }
   }

   



  // Array of all options
  const optionList = [
    { value: "react js", label: "React Js" },
    { value: "javascript", label: "Javascript" },
    { value: "node js", label: "Node Js" },
    { value: "express js", label: "Express Js" },
    { value: "my sql", label: "MySql" },
    { value: "angular js", label: "Angular Js" },
    { value: "php", label: "Php" },
    { value: "flutter", label: "Flutter" },
    { value: "laraval", label: "Laraval" },
    { value: "react native", label: "React Native" },
    { value: "jQuery", label: "jQuery" },
  ];

  // Function triggered on selection
  function handleSelect(data) {
    setSelectedOptions(data);
  }

  const [empId,setEmpId] = useState('')

if (Location.state != null) {
    console.log('vijay')
    useEffect(() => {
      let params ={
        id : Location.state.id
      }
     
         async function editFund() {
          let apiUrl = `http://localhost:5000/post/edit`
          let response = await axios.get(apiUrl,{params});
          console.log(response.data.data)
          setEmpId(response.data.data[0].empldls_id)
          setdata(response.data.data[0].empldls_employee_name)
          setdata2(response.data.data[0].empldls_dateof_birth)
          setdata1(response.data.data[0].empldls_age)
          setdata3(response.data.data[0].empldls_department)
          setdata4(response.data.data[0].empldls_designation)
          setdata5(response.data.data[0].empldls_dateof_join)
          setdata7(response.data.data[0].empldls_branch)
          setdata8(response.data.data[0].empldls_max_qualification)
          setOnlyNumbers(response.data.data[0].empldls_mobile)
          setdata17(response.data.data[0].empldls_email)
          setDated(response.data.data[0].empldls_gender)
          setdata9(response.data.data[0].empldls_Emp_code)
          setChecked(response.data.data[0].empldls_skills)
          setdata11(response.data.data[0].empldls_res_address)
          setdata12(response.data.data[0].empldls_res_country)
          setdata13(response.data.data[0].empldls_res_state)
          setdata14(response.data.data[0].empldls_res_city)
          setdata15(response.data.data[0].empldls_res_pincode)
          setPertextData(response.data.data[0].empldls_per_address)
          setPermaCouData(response.data.data[0].empldls_per_country)
          setPerStateData(response.data.data[0].empldls_per_state)
          setPerCityData(response.data.data[0].empldls_per_city)
          setPerPinData(response.data.data[0].empldls_per_pincode)
          setdata18(response.data.data[0].empldls_resume)
          setFileName1(response.data.data[0].empldls_resume)
          setFileName(response.data.data[0].empldls_profile_photo)
          // setdata19(response.data.data[0].empldls_profile_photo)
         }
         editFund()
     },[])   
}

const [expRes,setExpRes] = useState([])
console.log(expRes)
const [expId,setExpId] = useState('')

if(Location.state != null){
  useEffect(() => {
        const params = {
          ExpId : Location.state.id
        }
        async function ExpEdit () {
          let apiUrl = `http://localhost:5000/post/experience`
          const responses = await axios.get(apiUrl,{params});
          console.log(responses.data.data)
          let value = await responses.data.data;
          setExpRes(value)
          value.map((val,ind) => {
            console.log(val.epmlexp_id)
            setExpId(val.epmlexp_id)
          })
          // value.map((val,ind) => {
          //   console.log(val.epmlexp_comapany)
          //   setexperArray([
          //     ...experArray,
          //     {
          //       companyName: val.epmlexp_comapany,
          //       FromDate: val.epmlexp_from,
          //       ToDate: val.epmlexp_to,
          //       year: val.epmlexp_duration,
          //       Design: val.epmlexp_designation,
               
          //     },
          //   ]);
          // })
          for(let val of value){
            console.log( val)
            setexperArray([
                  {
                    companyName: val.epmlexp_comapany,
                    FromDate: val.epmlexp_from,
                    ToDate: val.epmlexp_to,
                    year: val.epmlexp_duration,
                    Design: val.epmlexp_designation,
                   
                  },
                ]);
          }
        }
        ExpEdit()
  },[])
}  


  


 const checkboxChange = (event) => {
  if (event.target.checked) {
    console.log('✅ Checkbox is checked');
    setPermaCouData(data12)
    setPerStateData(data13)
    setPerCityData(data14)
    setPerPinData(data15)
    setPertextData(data11)
    setPermanErr(false)
    setPermanStateErr(false)
    setPerCityErr(false)
    setPerPinErr(false)
    setPreTextErr(false)
  } else {
    console.log('⛔️ Checkbox is NOT checked');
    setPermaCouData('')
    setPerStateData('')
    setPerCityData('')
    setPerPinData('')
    setPertextData('')
  }
  setIsSubscribed(current => !current);
 }

  const usernamefunction = (msg) => {
    var alphaExp = /^[a-z .,A-Z]+$/;
    setdata(msg);
    if (msg.length != 0) {
      seterr(false);
    } else {
      seterr(true);
    }
    if (msg.length != 0 && !msg.match(alphaExp)) {
      seterr(true);
      setNameChange(true);
    } else {
      setNameChange(false);
    }
  };
 const dobFunction = (msg) => {
    setdata2(msg);

      if (msg.length != 0) {
      seterr1(false);
    } else {
      seterr1(true);
    }  
    console.log(msg)
    let dob = new Date(data2); 
    let day = dob.getDate(); 
    let month = dob.getMonth(); 
    let year = dob.getFullYear(); 
  
    // Getting current date and calculating the difference 
    let full = new Date()
    let dd = full.getDate();
    let mm = full.getMonth() + 1;
    let yyyy = full.getFullYear();
    console.log(yyyy + '-' + mm + '-' + dd)

    let res = msg.split('-');

    let check = res[1] + '-' + res[2] + '-' + res[0];
    let check1 = mm + '-'  + dd + '-' + yyyy

    console.log(calcDate1(check,check1))

    console.log(data1)
        
      if (data1 < 18){
        setAgeValid(true)
      }else{
        setAgeValid(false)
      }
           
       EmpcodeFunction(msg)
  }

  const agefunction = (msg) => {
    setdata1(msg);
    if (data1.length != 0) {
      seterr2(false);
    } else {
      seterr2(true)
    }
  };
  const depatfunction = (msg) => {
    setdata3(msg);
    console.log(msg)
    if (msg.length != 0) {
      seterr3(false);
    } else {
      seterr3(true);
    }
  };
  const Designfunction = (msg) => {
    setdata4(msg);
    if (msg.length != 0) {
      seterr4(false);
    } else {
      seterr4(true);
    }
  };
  const DateOfJoinfunction = (msg) => {
    setdata5(msg);
    if (msg.length != 0) {
      seterr5(false);
    } else {
      seterr5(true);
    }
  };
 
  const branchFunction = (msg) => {
    setdata7(msg);
    if (msg.length != 0) {
      seterr7(false);
    } else {
      seterr7(true);
    }
  };
  const QualfiFunction = (msg) => {
    setdata8(msg);
    if (msg.length != 0) {
      seterr8(false);
    } else {
      seterr8(true);
    }
  };
  //........./......................................................empcode funtion
  const EmpcodeFunction = async(msg) => {
    if(msg){
      let yearEmpCode = await (msg.split('-'))
      let ValueYrCode= await yearEmpCode[0]
      setdata9('MSTS_BR_E_'+ValueYrCode+'_'+localStorage.getItem('empcount'))
      console.log(localStorage.getItem('empcount'))
    }

    if (localStorage.getItem('empcount') > 0) {
      seterr9(false)
    }
   
    // if (msg.length != 0) {
    //   seterr9(false);
    // } else {
    //   seterr9(true);
    // }
  };
 
  const ResidAddFunction = (msg) => {
    var numericExpression = /^[0-9]+$/;
    setdata11(msg);
    if (msg.length != 0) {
      seterr11(false);
    } else {
      seterr11(true);
    }


    if (data11 && data12 && data13 && data14 && data15 != 0 && data15.match(numericExpression)){
      setCheckBox(true)
    }else{
      setCheckBox(false)
    }
0  };
  const [stateFil, setstateFil] = useState([]);

  const StateValueFunction= async(msg)=>{
if(msg.length!=0){
  let Value=await msg
const params = {
  value: Value
};
try {
  let apiUrl=`http://localhost:5000/post/stateservice`
  const response = await axios.get(apiUrl,{ params })
  setstateFil(response.data.data)
  console.log(response)
} catch (err) {
  console.log(err)
}
}
  }
  const CountryFunction = (msg) => {
    var numericExpression = /^[0-9]+$/;
    setdata12(msg);
    if (msg.length != 0) {
      seterr12(false);
    } else {
      seterr12(true);
    }
   StateValueFunction(msg)
   if (data11 && data12 && data13 && data14 && data15 != 0 && data15.match(numericExpression)){
    setCheckBox(true)
  }else{
    setCheckBox(false)
  }
  };

  const [permaCouData,setPermaCouData] = useState('')

  const PermanCountryFunction = (msg) => {
    setPermaCouData(msg);
    if ( msg.length != 0) {
      setPermanErr(false);
    } else {
      setPermanErr(true);
    }
   StateValueFunction(msg)
  };
  //.........................................................................city functio
  const [cityArr, setcityArr] = useState([]);

  const StateFilter =async (msg) => {
    
    if(msg.length!=0){
      let Value= await msg
    const params = {
      value: Value
    };
    try {
      let apiUrl=`http://localhost:5000/post/cityservice`
      const response = await axios.get(apiUrl,{ params })
      console.log(response.data.data)
      setcityArr(response.data.data)
    } catch (err) {
      console.log(err)
    }
    }
  };

  const StateFunction = (msg) => {
    var numericExpression = /^[0-9]+$/;
    setdata13(msg);
    if (msg.length != 0) {
      seterr13(false);
    } else {
      seterr13(true);
    }
    StateFilter(msg);

    if (data11 && data12 && data13 && data14 && data15 != 0 && data15.match(numericExpression)){
      setCheckBox(true)
    }else{
      setCheckBox(false)
    }
  };

  const [perStateData,setPerStateData] = useState('');

  const PerStateFunction = (msg) => {
    setPerStateData(msg);
    if ( msg.length != 0) {
      setPermanStateErr(false);
    } else {
      setPermanStateErr(true);
    }
    StateFilter(msg);
  };
  const cityFunction = (msg) => {
    var numericExpression = /^[0-9]+$/;
    setdata14(msg);
    if (msg.length != 0) {
      seterr14(false);
    } else {
      seterr14(true);
    }

    if (data11 && data12 && data13 && data14 && data15 != 0  && data15.match(numericExpression) ){
      setCheckBox(true)
    }else{
      setCheckBox(false)
    }
  
  };

  const [perCityData,setPerCityData] = useState('');

  const PercityFunction = (msg) => {
    setPerCityData(msg);
    if ( msg.length != 0) {
      setPerCityErr(false);
    } else {
      setPerCityErr(true);
    }
  };
  const PinFunction = (msg) => {
    var numericExpression = /^[0-9]+$/;
    setdata15(msg);
    if (msg.length != 0) {
      seterr15(false);
    } else {
      seterr15(true);
    }

    

    if (msg.length != 0 && !msg.match(numericExpression)) {
      seterr15(true);
      setPincodeValidate(true);
    } else {
      setPincodeValidate(false);
    }

    if (msg.length != 0 && msg.match(numericExpression) && msg.length > 9) {
      setPincodeValidate1(true);
    } else {
      setPincodeValidate1(false);
    }

    if (data11 && data12 && data13 && data14 && data15 != 0 && msg.match(numericExpression)){
      setCheckBox(true)
    }else{
      setCheckBox(false)
    }
  };
  const [perPinData,setPerPinData] = useState('');
  const PerPinFunction = (msg) => {
    var numericExpression = /^[0-9]+$/;
    setPerPinData(msg);
    if (msg.length != 0) {
      setPerPinErr(false);
    } else {
      setPerPinErr(true);
    }

    

    if (msg.length != 0 && !msg.match(numericExpression)) {
      setPerPinErr(true);
      setPincodeValidate(true);
    } else {
      setPincodeValidate(false);
    }

    
  }
  const [pertextData,setPertextData] = useState('')
  const PerAddressFunction = (msg) => {
    setPertextData();
    if(msg.length != 0){
      setPreTextErr(false)
    }else{
      setPreTextErr(true)
    }
  };
  const MobileFunction = (msg) => {
    setdata16(msg);
    if (msg.length != 0) {
      seterr16(false);
    } else {
      seterr16(true);
    }

    var numericExpression = /^[0-9]+$/;

    if (msg.length != 0 && !msg.match(numericExpression)) {
      seterr16(true);
      setNumberError(true);
    } else {
      setNumberError(false);
    }

    if (msg.match(numericExpression)) {
      setOnlyNumbers(msg);
    } else {
      setOnlyNumbers("");
    }
    console.log(onlyNumbers);
  };

  const EmailFunction = (msg) => {
    setdata17(msg);
    if (msg.length != 0) {
      seterr17(false);
    } else {
      seterr17(true);
      setEmailValidate(false);
    }
    var trying = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;
    if (msg.length != 0 && !msg.match("@gmail.com")) {
      setEmailValidate(true);
    } else {
      setEmailValidate(false);
    }
  };
  const resumeFunction = (msg) => {
    setdata18(msg);
    if (msg.length != 0) {
      seterr18(false);
    } else {
      seterr18(true);
    }
  };
  const ProfileFunction = (msg) => {
    setdata19(msg);
    if (msg.length != 0) {
      seterr19(false);
    } else {
      seterr19(true);
    }
  };

  const OnhandleSubmit = async(event) => {
    event.preventDefault();
    // if (data.length == 0) {
    //   seterr(true);
    // } else {
    //   seterr(false);
    // }

    // if(dated.gender == undefined){
    //   setGenderValid(true)
    // }else{
    //   setGenderValid(false)
    // }
    // if ( data1.length != 0 && data1 <  18) {
    //   seterr2(true);
    //   setAgeValid(true)
    // } else {
    //   seterr2(false);
    //   setAgeValid(false)
    // }

    // if (data2.length == 0) {
    //   seterr1(true);
    // } else {
    //   seterr1(false);
    // }
    // if (data3.length == 0) {
    //   seterr3(true);
    // } else {
    //   seterr3(false);
    // }
    // if (data4.length == 0) {
    //   seterr4(true);
    // } else {
    //   seterr4(false);
    // }
    // if (data5.length == 0) {
    //   seterr5(true);
    // } else {
    //   seterr5(false);
    // }
    // if (data7.length == 0) {
    //   seterr7(true);
    // } else {
    //   seterr7(false);
    // }
    // if (data8.length == 0) {
    //   seterr8(true);
    // } else {
    //   seterr8(false);
    // }
    // if (data9.length == 0) {
    //   seterr9(true);
    // } else {
    //   seterr9(false);
    // }
    // if (data11.length == 0) {
    //   seterr11(true);
    // } else {
    //   seterr11(false);
    // }
    // if (data12.length == 0) {
    //   seterr12(true);
    // } else {
    //   seterr12(false);
    // }
    // if (data13.length == 0) {
    //   seterr13(true);
    // } else {
    //   seterr13(false);
    // }

    // if (data14.length == 0) {
    //   seterr14(true);
    // } else {
    //   seterr14(false);
    // }
    // if (data15.length == 0) {
    //   seterr15(true);
    // } else {
    //   seterr15(false);
    // }
    // if (data16.length == 0) {
    //   seterr16(true);
    //   console.log("1");
    // }
    // if (data17.length == 0) {
    //   seterr17(true);
    //   setEmailValidate(false);
    // } else {
    //   seterr17(false);
    // }

    // var trying = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;

    // if (data17.length != 0 && !data17.match("@gmail.com") && !data17.match(trying)) {
    //   seterr17(true);
    //   setEmailValidate(true);
    // }

    // if (data18.length == 0) {
    //   seterr18(true);
    // } else {
    //   seterr18(false);
    // }

    // if (data19.length == 0) {
    //   seterr19(true);
    // } else {
    //   seterr19(false);
    // }
    // if (permaCouData == 0) {
    //   setPermanErr(true);
    // } else {
    //   setPermanErr(false);
    // }

    // if (perStateData == 0) {
    //   setPermanStateErr(true);
    // } else {
    //   setPermanStateErr(false);
    // }

    // if (perCityData == 0) {
    //   setPerCityErr(true);
    // } else {
    //   setPerCityErr(false);
    // }

    // if (perPinData == 0) {
    //   setPerPinErr(true);
    // } else {
    //   setPerPinErr(false);
    // }

    // if(pertextData == 0 ){
    //   setPreTextErr(true)
    // }else{
    //   setPreTextErr(false)
    // }
    // const{username,dob,age,depatmt,design,dateofjoin,gender,branch,qualif,empcode,skills,resAdress,pinCode,PerAddress,mblno,email}=req.body

      const FormData={
        username:data,
        dob:data2,
        age:data1,
        depatmt:data3,
        design:data4,
        dateofjoin:data5,
        gender:dated,
        branch:data7,
        qualif:data8,
        empcode:data9,
        skills:value,
        resAdress:data11 +data12+data13+data14+data15,
        PerAddress:pertextData+permaCouData+perStateData+perCityData+perPinData,
        residentAdress : data11,
        resCountry : data12,
        resState : data13,
        resCity : data14,
        resPincode : data15,
        perAdress:pertextData,
        perCountry : permaCouData,
        perState : perStateData,
        perCity : perCityData,
        perPincode : perPinData,
        mblno:data16,
        email:data17,
        empepr:experArray,
        file1:data18,
        file2:data19,
        password : confrimPassword
      }
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };
    try {
      let apiUrl=`http://localhost:5000/post/empform`
      const response = await axios.post(apiUrl,FormData,config)
      console.log(response.data.message)
      toast.success(response.data.message);
      window.location.reload()
    } catch (err) {
      console.log(err.response.data.message)
      toast.error(err.response.data.message);
    }
    
  };

  const removeFunction = () => {
    setModalShow(false);
    setdata19("");
  };
  const Durationref = useRef(0);
  const [compData, setcompData] = useState("");
  const [compToData, setcompToData] = useState("");
  const [compFromData, setcompFromData] = useState("");
  const companyfuntion = (msg) => {
    setcompData(msg);
    if (msg.length != 0) {
      seterr20(false);
    } else {
      seterr20(true);
      setCompanyValid(false)
    }
    var alphaExp = /^[a-z .,&()(,)A-Z]+$/;
    if(msg.length != 0 && !msg.match(alphaExp)){
       seterr20(true)
       setCompanyValid(true)
    }else{
      setCompanyValid(false)
    }

  };

  function calcDate1(date1, date2){
    /*
    * calcDate() : Calculates the difference between two dates
    * @date1 : "First Date in the format MM-DD-YYYY"
    * @date2 : "Second Date in the format MM-DD-YYYY"
    * return : Array
    */
    //new date instance
    const dt_date1 = new Date(date1);
    const dt_date2 = new Date(date2);

    //Get the Timestamp
    const date1_time_stamp = dt_date1.getTime();
    const date2_time_stamp = dt_date2.getTime();

    let calc;

    //Check which timestamp is greater
    if (date1_time_stamp > date2_time_stamp) {
        calc = new Date(date1_time_stamp - date2_time_stamp);
    } else {
        calc = new Date(date2_time_stamp - date1_time_stamp);
    }
    //Retrieve the date, month and year
    const calcFormatTmp = calc.getDate() + '-' + (calc.getMonth() + 1) + '-' + calc.getFullYear();
    //Convert to an array and store
    const calcFormat = calcFormatTmp.split("-");
    //Subtract each member of our array from the default date
    const days_passed = Number(Math.abs(calcFormat[0]) - 1);
    const months_passed = Number(Math.abs(calcFormat[1]) - 1);
    const years_passed = Number(Math.abs(calcFormat[2]) - 1970);

    //Set up custom text
    const yrsTxt = ["year", "years"];
    const mnthsTxt = ["month", "months"];
    const daysTxt = ["day", "days"];

    //Convert to days and sum together
    const total_days = (years_passed * 365) + (months_passed * 30.417) + days_passed;

    //display result with custom text
    const result = ((years_passed == 1) ? years_passed + ' ' + yrsTxt[0] + ' ' : (years_passed > 1) ?
        years_passed + ' ' + yrsTxt[1] + ' ' : '') +
        ((months_passed == 1) ? months_passed + ' ' + mnthsTxt[0] : (months_passed > 1) ?
            months_passed + ' ' + mnthsTxt[1] + ' ' : '') +
        ((days_passed == 1) ? days_passed + ' ' + daysTxt[0] : (days_passed > 1) ?
            days_passed + ' ' + daysTxt[1] : '');
            setdata1(years_passed)
            

    //return the result
    return {
        "total_days": Math.round(total_days),
        "result": result.trim()
    }
}

  function calcDate(date1, date2){
    /*
    * calcDate() : Calculates the difference between two dates
    * @date1 : "First Date in the format MM-DD-YYYY"
    * @date2 : "Second Date in the format MM-DD-YYYY"
    * return : Array
    */
    //new date instance
    const dt_date1 = new Date(date1);
    const dt_date2 = new Date(date2);

    //Get the Timestamp
    const date1_time_stamp = dt_date1.getTime();
    const date2_time_stamp = dt_date2.getTime();

    let calc;

    //Check which timestamp is greater
    if (date1_time_stamp > date2_time_stamp) {
        calc = new Date(date1_time_stamp - date2_time_stamp);
    } else {
        calc = new Date(date2_time_stamp - date1_time_stamp);
    }
    //Retrieve the date, month and year
    const calcFormatTmp = calc.getDate() + '-' + (calc.getMonth() + 1) + '-' + calc.getFullYear();
    //Convert to an array and store
    const calcFormat = calcFormatTmp.split("-");
    //Subtract each member of our array from the default date
    const days_passed = Number(Math.abs(calcFormat[0]) - 1);
    const months_passed = Number(Math.abs(calcFormat[1]) - 1);
    const years_passed = Number(Math.abs(calcFormat[2]) - 1970);

    //Set up custom text
    const yrsTxt = ["year", "years"];
    const mnthsTxt = ["month", "months"];
    const daysTxt = ["day", "days"];

    //Convert to days and sum together
    const total_days = (years_passed * 365) + (months_passed * 30.417) + days_passed;

    //display result with custom text
    const result = ((years_passed == 1) ? years_passed + ' ' + yrsTxt[0] + ' ' : (years_passed > 1) ?
        years_passed + ' ' + yrsTxt[1] + ' ' : '') +
        ((months_passed == 1) ? months_passed + ' ' + mnthsTxt[0] : (months_passed > 1) ?
            months_passed + ' ' + mnthsTxt[1] + ' ' : '') +
        ((days_passed == 1) ? days_passed + ' ' + daysTxt[0] : (days_passed > 1) ?
            days_passed + ' ' + daysTxt[1] : '');
            
            setyear(result)

    //return the result
    return {
        "total_days": Math.round(total_days),
        "result": result.trim()
    }
}
  const companyTOfuntion = (msg) => {
    setcompToData(msg);
    if (msg.length != 0) {
      seterr21(false);
    } else {
      seterr21(true);
    }
    if (compFromData.length > 1) {
      
    } else {
      toast.error("please select from date");
    }

    let Wrk = compFromData.split('-')
     let Wrk1 = msg.split('-')
     console.log(Wrk,Wrk1)

     let from = Wrk[1] + '-' + Wrk[2] + '-' + Wrk[0];
     let to = Wrk1[1] + '-' + Wrk1[2] + '-' + Wrk1[0];
     console.log(typeof from,to)
     
    console.log(calcDate(from,to))
  };

  const companyFromfuntion = (msg) => {
    setcompFromData(msg);
    if (msg.length != 0) {
      seterr22(false);
    } else {
      seterr22(true);
    }
  };
  const [year, setyear] = useState("");
  // function yearsDiff(d2) {
  //   let date1 = new Date(compFromData);
  //   let date2 = new Date(d2);
  //   let yearsDiff = date2.getFullYear() - date1.getFullYear();
  //   setyear(yearsDiff + "years");
  // }
  const [compDesign, setcompDesign] = useState("");
  const companyDesignfuntion = (msg) => {
    setcompDesign(msg);
    if (msg.length != 0) {
      seterr23(false);
    } else {
      seterr23(true);
      setDesiganationValid(false)
    }

    var alphaExp = /^[a-z .,&()(,)A-Z]+$/;
    if(msg.length != 0 && !msg.match(alphaExp)){
       seterr23(true)
       setDesiganationValid(true)
    }else{
      setDesiganationValid(false)
    }
  };
  const [compRole, setcompRole] = useState("");
  const companyRolefuntion = (msg) => {
    setcompRole(msg);
    if (msg.length != 0) {
      seterr24(false);
    } else {
      seterr24(true);
      setRoleValid(false)
    }

    var alphaExp = /^[a-z .,&()(,)A-Z]+$/;
    if(msg.length != 0 && !msg.match(alphaExp)){
       seterr24(true)
       setRoleValid(true)
    }else{
      setRoleValid(false)
    }
  };
  const [experArray, setexperArray] = useState([]);

  const MinimFuntion = () => {
    if (experArray.length >= 10) {
      toast.error("not allowed above 10",{
        transition:bounce
      });
      return true;
    } else {
      return false;
    }
  };

  const ExperAddFuntion = () => {
    var alphaExp = /^[a-z .,&()(,)A-Z]+$/;
    if(compData.length == 0){
      seterr20(true)
    } else{
      seterr20(false)
    }
    if(compData.length != 0  && !compData.match(alphaExp)){
      seterr20(true)
    } 
    if(compToData.length == 0){
      seterr21(true)
    } else{
      seterr21(false)
    }
    if(compFromData.length == 0){
      seterr22(true)
    } else{
      seterr22(false)
    }
    if(compDesign.length == 0){
      seterr23(true)
    } else{
      seterr23(false)
    }

    if(compDesign.length != 0  && !compDesign.match(alphaExp)){
      seterr23(true)
    } 

    if(compRole.length == 0){
      seterr24(true)
    } else{
      seterr24(false)
    }

    if(compRole.length != 0  && !compRole.match(alphaExp)){
      seterr24(true)
    } 


    if(compData && compFromData && compToData && year && compDesign && compRole != 0  
      && compData.match(alphaExp) && compDesign.match(alphaExp) &&  compRole.match(alphaExp)){
      setexperArray([
        ...experArray,
        {
          companyName: compData,
          FromDate: compFromData,
          ToDate: compToData,
          year: year,
          Design: compDesign,
          Role: compRole,
        },
      ]);
      MinimFuntion();
      setcompData('');
      setcompFromData('')
      setcompToData('')
      setyear('')
      setcompDesign('')
      setcompRole('')

      setExpRes([
        ...expRes,
        {
          epmlexp_comapany: compData,
        epmlexp_from: compFromData,
        epmlexp_to: compToData,
        epmlexp_duration: year,
        epmlexp_designation: compDesign,
        epmlexp_role: compRole,
        }
      ])
      setcompData('');
      setcompFromData('')
      setcompToData('')
      setyear('')
      setcompDesign('')
      setcompRole('')
    }
  };

  console.log(experArray)

  const DeleteArrayFntion = (removeIndex) => {
    console.log(removeIndex);
    setexperArray((experArray) => {
      return experArray.filter((value, i) => i !== removeIndex);
    });
  };

  const DeleteArrayFntion1 = (removeIndex) => {
    console.log(removeIndex);
    setExpRes((expRes) => {
      return expRes.filter((value, i) => i !== removeIndex);
    });
  };

  const editArrayFunction = (values,index) => {
    console.log(values)
    console.log(index)
    setIndex(index)
    setUpdate(true)
     setcompData(values.companyName)
     setcompFromData(values.FromDate)
     setcompToData(values.ToDate)
     setyear(values.year)
     setcompDesign(values.Design)
     setcompRole(values.Role)
     seterr20(false)
     seterr21(false)
     seterr22(false)
     seterr23(false)
     seterr24(false)
     setCompanyValid(false)
     setDesiganationValid(false)
     setRoleValid(false)
  }

  const editArrayFunction1 = (values,index) => {
    console.log(values)
    console.log(index)
    setIndex(index)
    setUpdate(true)
     setcompData(values.epmlexp_comapany)
     setcompFromData(values.epmlexp_from)
     setcompToData(values.epmlexp_to)
     setyear(values.epmlexp_duration)
     setcompDesign(values.epmlexp_designation)
     setcompRole(values.epmlexp_role)
     seterr20(false)
     seterr21(false)
     seterr22(false)
     seterr23(false)
     seterr24(false)
     setCompanyValid(false)
     setDesiganationValid(false)
     setRoleValid(false)
  }


  const updateFunction = () => {
    var alphaExp = /^[a-z .,&()(,)A-Z]+$/;
    
    const Arr= experArray;
    if(compData.match(alphaExp)&& compDesign.match(alphaExp) && compRole.match(alphaExp) ){
      experArray.splice(index,1, {
        companyName: compData,
        FromDate: compFromData,
        ToDate: compToData,
        year: year,
        Design: compDesign,
        Role: compRole,
        }) 
        setUpdate(false)
        setcompData('');
        setcompFromData('')
        setcompToData('')
        setyear('')
        setcompDesign('')
        setcompRole('')
    }
  
  }

  const updateFunction1 = () => {
    var alphaExp = /^[a-z .,&()(,)A-Z]+$/;
    
    const Arr= expRes;
    if(compData.match(alphaExp)&& compDesign.match(alphaExp) && compRole.match(alphaExp) ){
      expRes.splice(index,1, {
        epmlexp_comapany: compData,
        epmlexp_from: compFromData,
        epmlexp_to: compToData,
        epmlexp_duration: year,
        epmlexp_designation: compDesign,
        epmlexp_role: compRole,
        }) 
        setUpdate(false)
        setcompData('');
        setcompFromData('')
        setcompToData('')
        setyear('')
        setcompDesign('')
        setcompRole('')
    }
  
  }


// console.log(Skills)
// console.log(experArray)
const[DepData,setDepData]=useState([])
const[DsgData,setDsgData]=useState([])
const[BrnhData,setBrnhData]=useState([])
const[QlfnData,setQlfnData]=useState([])
const[CotuntryData,setCotuntryData]=useState([])
const swirl = cssTransition({
  enter: "swirl-in-fwd",
  exit: "swirl-out-bck"
});
const Tostoptions = {
  
   
  type: toast.TYPE.ERROR,
  style:{
    backgroundColor:"red",
    color:"white"
  },
  position: toast.POSITION.TOP_RIGHT,
  
  transition: swirl
  // and so on ...
};
const [permannetCountry,setPermanentCountry] = useState('');
useEffect(() => {
  setTimeout(() => {
     const Employecount=async()=>{
      
      try {
        let apiUrl=`http://localhost:5000/post/empresigCount`
        const response = await axios.get(apiUrl)
            localStorage.setItem('empcount',response.data.data[0]['COUNT(empldls_id)'])
      } catch (err) {
        toast.error(err.response.data.message,Tostoptions)
      }
   
      
        try {
          let apiUrl=`http://localhost:5000/post/depatemtservice`
          const response = await axios.get(apiUrl)
          setDepData(response.data.data)
        } catch (err) {
          toast(err.response.data.message,Tostoptions)
        }
       
        try {
          let apiUrl=`http://localhost:5000/post/designservice`
          const response = await axios.get(apiUrl)
          setDsgData(response.data.data)
        } catch (err) {
          console.log(err)
        }
        try {
          let apiUrl=`http://localhost:5000/post/branchservice`
          const response = await axios.get(apiUrl)
          setBrnhData(response.data.data)
        } catch (err) {
          toast.error(err.response.data.message,Tostoptions)
        }
        try {
          let apiUrl=`http://localhost:5000/post/qualifservice`
          const response = await axios.get(apiUrl)
          setQlfnData(response.data.data)
        } catch (err) {
          toast.error(err.response.data.message,Tostoptions)
        }

        try {
          let apiUrl=`http://localhost:5000/post/countryservice`
          const response = await axios.get(apiUrl)
          setCotuntryData(response.data.data)
          setPermanentCountry(response.data.data)
        } catch (err) {
          toast.error(err.response.data.message,Tostoptions)
        }
     }
     Employecount()
  }, 1000);
},[]);


useEffect(() => {
  setTimeout(() => {
     
  }, 1000);
},[]);
const [checked, setChecked] = useState([]);

const handleCheck = (event) => {
  var updatedList = [...checked];
  console.log(updatedList)
  if (event.target.checked) {
    updatedList = [...checked, event.target.value];
  } else {
    updatedList.splice(checked.indexOf(event.target.value), 1);
  }
  console.log(updatedList)
  setChecked(updatedList);
  console.log(checked)
};

const navigate = useNavigate();

console.log(expId)

const buttonSubmit = async (event) => {
  event.preventDefault();

      const FormData={
        empID : empId,
        expId : expId,
        username:data,
        dob:data2,
        age:data1,
        depatmt:data3,
        design:data4,
        dateofjoin:data5,
        gender:dated,
        branch:data7,
        qualif:data8,
        empcode:data9,
        skills:checked,
        resAdress:data11 +data12+data13+data14+data15,
        PerAddress:pertextData+permaCouData+perStateData+perCityData+perPinData,
        residentAdress : data11,
        resCountry : data12,
        resState : data13,
        resCity : data14,
        resPincode : data15,
        perAdress:pertextData,
        perCountry : permaCouData,
        perState : perStateData,
        perCity : perCityData,
        perPincode : perPinData,
        mblno:onlyNumbers,
        email:data17,
        empepr:expRes,
        file1:fileName1,
        file2:fileName
      }
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };
    try {
      let apiUrl=`http://localhost:5000/post/update`
      const response = await axios.post(apiUrl,FormData)
      console.log(response.data.message)
      toast.success(response.data.message);
       navigate('/attendancelist',{state:''})
    } catch (err) {
      console.log(err.response.data.message)
      toast.error(err.response.data.message);
    }

  //  navigate('/attendancelist',{state:''})
  //  window.location.reload()
}

const [passShow,setPassShow] = useState(false)
const [conPassShow,setConPassShow] = useState(false)
const [confrimErr,setConfrimErr] = useState(false)

const handlePassClick = () => {
  setPassShow(true)
}

const handlePassClick1 = () => {
  setPassShow(false)
}

const handleConPassClick = () => {
  setConPassShow(true)
}

const handleConPassClick1 = () => {
  setConPassShow(false)
}

const [caps,setCaps] = useState(false);
const [small,setSmall] = useState(false);
const [minimum,setMinimum] = useState(false);
const [number,setNumber] = useState(false)
const [disable,setDisable] = useState(false)
const [whole,setWhole] = useState(false)
const [popup,setPopup] = useState(true)

const passHandleChange = async (e) => {
  let value = await e.target.value;
  
  var passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; 
 
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
        setDisable(true)
        setWhole(true)
        setPopup(false)
    }
    else{
      setDisable(false)
      setWhole(false)
    }
    setPassword(e.target.value)
}


const [passErr,setPassErr] = useState(false)
const conPassHndleChange =async (e) => {
  let value = await e.target.value;
  if(value.length == 0){
    setPassErr(true)
    setConfrimErr(false)
  }
  if (value != password &&value.length > 0){
     setPassErr(true)
     setConfrimErr(false)
  }else{
    setPassErr(false)
    setConfrimErr(true)
  }
  setConfrimPassword(e.target.value)
}

const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Password Format</Popover.Header>
    <div className="pass-warning" style={{backgroundColor:whole ? '#C1E1C1' : ''}}>
                    <p className="para-warning" style={{color:minimum? 'green' : ''}}>{minimum?<span>&#10003;</span>:<span>&times;</span>}Must have 8 charcters</p>
                    <p className="para-warning" style={{color:caps? 'green' : ''}}>{caps?<span>&#10003;</span>:<span>&times;</span>}Must have 1 Captial letter</p>
                    <p className="para-warning" style={{color:small? 'green' : ''}}>{small?<span>&#10003;</span>:<span>&times;</span>}Must have 1 Small letter</p>
                    <p className="para-warning" style={{color:number? 'green' : ''}}>{number?<span>&#10003;</span>:<span>&times;</span>}Must have 1 Number</p>
                </div>
  </Popover>
);


  return (
    <DashboardLayout>
      <DashboardNavbar/>
      <div className="attendance_parent">
        <form onSubmit={OnhandleSubmit}>
          <div className="attendance_child_header">
            <h4 style={{marginBottom:'2rem',marginRight:'10rem'}}>Employee form</h4>
          </div>
          <div className="attendance_child">
            <div className="attendance_child_1">
              <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}} className="phone">
              <div className="first-value">
                <EmpInput
                  width="400px"
                  height="30px"
                  lable="Emplyee Name"
                  placeholder="Enter Your Name"
                  message={usernamefunction}
                  border={err ? "1px solid red" : ""}
                  key="username"
                  value={data}
                  type="text"
                />
                {nameChange && (
                  <p style={{ fontSize: "10px", position: "absolute", color: "red" }}>
                    Special charcters Not Allowed*
                  </p>
                )}
              </div>
              <div className="first-value-1">
                <EmpInput
                  width="500px"
                  height="30px"
                  lable="employee code "
                  placeholder="Enter Your emp code"
                  value={data9}
                  border={err9 ? "1px solid red" : ""}
                  type="text"
                />
              </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div></div>
              </div>
              <div className="phone1" style={{display:'flex', flexDirection:'row' ,justifyContent:'space-between'}}>
                <div>
                <div style={{fontWeight:'bold'}}>
                  Gender
                </div>
              <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
                   <label style={{fontSize:'16px'}}>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={dated === 'male'}
            onChange={(e) => {setDated(e.target.value)}}
            style={{marginRight:'4px'}}
          />
          Male
        </label>
        <label style={{fontSize:'16px'}}>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={dated === 'female'}
            onChange={(e) => {setDated(e.target.value)}}
            style={{marginRight:'4px'}}
          />
          Female
        </label>
                  <div>
                   {genderValid && <p style={{color:'red',marginTop:'1rem'}}>Please Select Gender*</p> } 
                  </div>
                </div>
                </div>
                <div style={{ display: "flex", gap: "5px" }}>
              <div>
                <EmpInput
                  width="250px"
                  height="30px"
                  lable="Date Of Birth"
                  placeholder="Enter Your Birth"
                  message={dobFunction}
                  type="date"
                  border={err1 ? "1px solid red" : ""}
                  key="dob"
                  value={data2}
                />
              </div>
              <div>
                <EmpInput
                  width="250px"
                  height="30px"
                  lable="Age"
                  placeholder="Enter Your Age"
                  message={agefunction}
                  border={err2 ? "1px solid red" : ""}
                  type="number"
                  value={data1}
                  
                />
                {ageValid && <p style={{ fontSize: "10px", position: "absolute", color: "red" }}>You must be 18 years old or above*</p>}
              </div>
              </div>
                </div>

              
             <div className="phone2" style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
              <div>
                <div>
                  <TextForm lable="department" />
                </div>
                <div>
                <select style={{width:"400px",height:"30px",border:err3 ? "1px solid red" : "",borderRadius:'3px',outline:'none'}} onChange={(e)=>{
                    depatfunction(e.target.value)
                  }} value={data3}>
                    <option  selected > -- select an option -- </option>
                   {DepData && DepData.map(option => {
            return (<option key={option.empdptsrv_Id} value={option.empdptsrv_vlaue}>{option.empdptsrv_vlaue}</option>);
        })}
                   </select>      
                </div>
              </div>
              <div>
                <div>
                  <TextForm lable="Designation" />
                </div>
                <div>
                <select style={{width:"500px",height:"30px",border:err4 ? "1px solid red" : "",borderRadius:'3px',outline:'none'}} onChange={(e)=>{
                    Designfunction(e.target.value)
                  }} value={data4}>
                     <option selected > -- select an option -- </option>
                   {DsgData && DsgData.map(option => {
            return (<option key={option.empdsgsrv_Id} value={option.empdsgsrv_vlaue}>{option.empdsgsrv_vlaue}</option>);
        })}
                   </select>
                </div>
              </div>
              </div>
              <div className="phone3" style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
              <div>
                <EmpInput
                  width="400px"
                  height="30px"
                  lable="date of join"
                  placeholder="Enter Your date"
                  type="date"
                  message={DateOfJoinfunction}
                  border={err5 ? "1px solid red" : ""}
                  key="empcode"
                  value={data5}
                />
              </div>
              <div>
                  <label>
                    <TextForm lable="branch" />
                  </label>
                  <div>
                  <select style={{width:"500px",height:"30px",border:err7 ? "1px solid red" : "",borderRadius:'3px',outline:'none'}} onChange={(e)=>{
                    branchFunction(e.target.value)
                  }} value={data7}>
                     <option  selected > -- select an option -- </option>
                   {BrnhData && BrnhData.map(option => {
            return (<option key={option.empbrachsrv_Id} value={option.empbrachsrv_vlaue}>{option.empbrachsrv_vlaue}</option>);
        })}
                   </select>
                  </div>
                </div>
              </div>
              {/* <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}> */}
                
                <div className="phone8" style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <div>
                  <div>
                    <TextForm lable="qualification" />
                  </div>
                  <div>
                      <select style={{width:"400px",height:"30px",border:err8 ? "1px solid red" : "",borderRadius:'3px',outline:'none'}} onChange={(e)=>{
                    QualfiFunction(e.target.value)
                  }} value={data8}>
                     <option  selected > -- select an option -- </option>
                   {QlfnData && QlfnData.map(option => {
                    
            return (<option key={option.empqualisrv_Id} value={option.empqualisrv_vlaue}>{option.empqualisrv_vlaue}</option>);
        })}
                   </select>
                  </div>
                </div>
                <div>
                <div>
                  <TextForm lable="skills" />
                </div>
                <div className="app">
      <div className="dropdown-container">
        <Select
          options={optionList}
          placeholder="Select Skills"
          value={selectedOptions}
          onChange={handleSelect}
          isSearchable={true}
          isMulti
        />
      </div>
    </div>
    </div>
                </div>
                <div className="phone4" style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <div>
                  <div>
                  <div>
                    <EmpInput
                      width="400px"
                      height="30px"
                      lable="Mobile no"
                      placeholder="Enter Your number"
                      message={MobileFunction}
                      border={err16 ? "1px solid red" : ""}
                      value={onlyNumbers}
                      max={10}
                      type="number"
                    />
                    {numberError && (
                      <p style={{ fontSize: "10px", position: "absolute", color: "red" }}>
                        Please Enter Number only*
                      </p>
                    )}
                  </div>
                  </div>
                </div>
                <div>
                  
                  <div>
                  <div>
                    <EmpInput
                      width="500px"
                      height="30px"
                      lable="email"
                      placeholder="Enter Your email"
                      message={EmailFunction}
                      border={err17 ? "1px solid red" : ""}
                      value={data17}
                      type="text"
                    />
                    {emailValidate && (
                      <p style={{ fontSize: "10px", position: "absolute", color: "red" }}>
                        Please Enter Valid Email Format*
                      </p>
                    )}
                  </div>
                  </div>
                </div>
      
                </div>
               
              
              {/* finish */}
              <div className="phone5" style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
              <div>
              <div>
                <div>
                  <TextareaForm
                    width="400px"
                    height="60px"
                    lable="residential address "
                    placeholder="Enter Your address "
                    message={ResidAddFunction}
                    border={err11 ? "1px solid red" : ""}
                    value={data11}
                  />
                </div>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <div>
                  <div>
                    <TextForm lable="country" />
                  </div>
                  <div>
                    <select
                      style={{width:"195px",height:"30px",border:err12 ? "1px solid red" : "",borderRadius:'3px',outline:'none'}}
                      onChange={(e) => {
                        CountryFunction(e.target.value);
                      }}
                      value={data12}
                    >
                     {data12 ? <option>{data12}</option> :<option  selected> -- select an option -- </option>} 
                      {CotuntryData && CotuntryData.map((val, index) => (
                        <option key={val.emp_countryid} value={val.emp_country_name}>
                          {val.emp_country_name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <div>
                    <TextForm lable="state" />
                  </div>
                  <div>
                  <select style={{ width: "195px", height: "30px" ,border:err13 ? "1px solid red" : "",borderRadius:'3px',outline:'none'}} onChange={(e)=>{
                    StateFunction(e.target.value)
                  }} value={data13}>
                   {data13 ? <option>{data13}</option> :<option  selected> -- select an option -- </option>} 
                      {stateFil && stateFil.map((val, index) => (
                        <option key={val.emp_stateID} value={val.emp_state_name}>
                          {val.emp_state_name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <div>
                  <div>
                    <TextForm lable="city" />
                  </div>
                  <div>
                  <select style={{ width: "195px", height: "30px" ,border:err14 ? "1px solid red" : "",borderRadius:'3px',outline:'none' }} onChange={(e) => {
                    cityFunction(e.target.value)
                  }} value={data14}>
                     {data14 ? <option>{data14}</option> :<option  selected> -- select an option -- </option>} 
                    {cityArr && cityArr.map((val,index) =>(
                      <option key={val.emp_cityID} value={val.emp_city_name}>{val.emp_city_name}</option>
                    ))}
                    </select>
                  </div>
                </div>
                <div>
                  {/* /..................................................................................................wroking */}
                  <div>
                    <EmpInput
                      width="195px"
                      height="30px"
                      lable="pincode"
                      placeholder="Enter Your pincode"
                      message={PinFunction}
                      border={err15 ? "1px solid red" : ""}
                      max={9}
                      value={data15}
                      type='number'
                    />
                    {pincodeValidate && (
                      <p style={{ fontSize: "10px", position: "absolute", color: "red" }}>
                        Please Enter Only Number*
                      </p>
                    )}
                    {pincodeValidate1 && (
                      <p style={{ fontSize: "10px", position: "absolute", color: "red" }}>
                        Maximum 9 numbers only*
                      </p>
                    )}
                  </div>
                  {checkbox && 
                  <div style={{position:'absolute'}}>
                   <div style={{display:'flex'}}>
                   <input  style={{marginTop:'.3rem',marginLeft:'2rem'}} type="checkbox" id="address" name="address" value={isSubscribed} onChange={checkboxChange}/>
                   <label style={{marginTop:'.4rem',fontSize:'12px',marginLeft:'.2rem'}}  htmlFor="address" >Same as Residentail address</label>
                   </div>
                   </div>
                  }  
                </div>
              </div>
              </div>
              <div>
              <div>
                <div>
                  <TextareaForm
                    width="500px"
                    height="60px"
                    lable="permanent address "
                    placeholder="Enter Your adress"
                    message={PerAddressFunction}
                    border={preTextErr ? "1px solid red" : ""}
                    value={pertextData}
                  />
                </div>
              </div>
              <div style={{ display: "flex", gap: "40px" }}>
                <div>
                  <div>
                    <TextForm lable="country" />
                  </div>
                  <div>
                    <select
                      style={{width:"230px",height:"30px",border:permanErr ? "1px solid red" : "",borderRadius:'3px',outline:'none'}}
                      onChange={(e) => {
                        PermanCountryFunction(e.target.value);
                      }}
                       value={permaCouData}>
                      {permaCouData ? <option>{permaCouData}</option> :<option  selected> -- select an option -- </option>}
                      {permannetCountry && permannetCountry.map((val, index) => (
                        <option key={val.emp_countryid} value={val.emp_country_name}>
                          {val.emp_country_name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <div>
                    <TextForm lable="state" />
                  </div>
                  <div>
                  <select style={{ width: "230px", height: "30px" ,border:permanStateErr ? "1px solid red" : "",borderRadius:'3px',outline:'none'}} onChange={(e)=>{
                    PerStateFunction(e.target.value)
                  }} value={perStateData}>
                  {perStateData ? <option>{perStateData}</option> :<option  selected> -- select an option -- </option>}
                      {stateFil && stateFil.map((val, index) => (
                        <option key={val.emp_stateID} value={val.emp_state_name}>
                          {val.emp_state_name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", gap: "40px" }}>
                <div>
                  <div>
                    <TextForm lable="city" />
                  </div>
                  <div>
                  <select style={{ width: "230px", height: "30px" ,border:perCityErr ? "1px solid red" : "",borderRadius:'3px',outline:'none' }} onChange={(e) => {
                    PercityFunction(e.target.value)
                  }} value={perCityData} >
                    {perCityData ? <option>{perCityData}</option> :<option  selected> -- select an option -- </option>}
                    {cityArr && cityArr.map((val,index) =>(
                      <option key={val.emp_cityID} value={val.emp_city_name}>{val.emp_city_name}</option>
                    ))}
                    </select>
                  </div>
                </div>
                <div>
                  {/* /..................................................................................................wroking */}
                  <div>
                    <EmpInput
                      width="230px"
                      height="30px"
                      lable="pincode"
                      placeholder="Enter Your pincode"
                      message={PerPinFunction}
                      border={perPinErr ? "1px solid red" : ""}
                      max={9}
                     value={perPinData}
                     type='number'
                    />
                    {pincodeValidate && (
                      <p style={{ fontSize: "10px", position: "absolute", color: "red" }}>
                        Please Enter Only Number*
                      </p>
                    )}
                    {pincodeValidate1 && (
                      <p style={{ fontSize: "10px", position: "absolute", color: "red" }}>
                        Maximum 9 numbers only*
                      </p>
                    )}
                  </div>
                </div>
              </div>
              </div>

              </div>
              <div className="phone6" style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
              <div>
                {Location.state == null ?  <EmpinputFiles
                      width="400px"
                      height="30px"
                      lable="resume"
                      type="file"
                      message={resumeFunction}
                      border={err18 ? "1px solid red" : ""}
                      accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      // ref={inputRef}
                      value={data18}
                    /> :
                    <>
                    <label>Resume</label>
                       <div>
                       <label htmlFor="filePicker" style={{position:'absolute',width:"400px",height:"30px",border:'1px solid gray',paddingLeft:'5px',borderRadius:'2px',paddingTop:'2px'}}>{fileName1 ? fileName1 : 'Choose File'}
                       <span style={{color:'red',position:'absolute',cursor:'pointer'}}><MdOutlineModeEdit size={20}/>*</span>
                       </label>
                      <input id="filePicker" style={{visibility:"hidden"}} type={"file"} onChange={(e) => setFileName1(e.target.files[0].name)}/>
                       </div>
                       </> 
                    } 
              </div>
               <div style={{ display: "flex" }}>
              <div>{
                   Location.state == null ? <EmpinputFiles
                   width="500px"
                   height="30px"
                   lable="profile"
                   message={ProfileFunction}
                   type="file"
                   border={err19 ? "1px solid red" : ""}
                   accept="image/*"
                   // key={data19}
                   key={data19}
                  
                 />
                 :
                 <>
                 <label>Profile</label>
                    <div>
                    <label htmlFor="filePicker" style={{position:'absolute',width:"500px",height:"30px",border:'1px solid gray',marginRight:'10px',borderRadius:'2px',paddingTop:'2px'}}>{fileName ? fileName : 'Choose File'}
                    <span style={{color:'red',position:'absolute',cursor:'pointer'}}><MdOutlineModeEdit size={20}/>*</span>
                    </label>
                   <input id="filePicker" style={{visibility:"hidden"}} type={"file"} onChange={(e) => setFileName(e.target.files[0].name)}/>
                    </div>
                    </>
                }
                      </div>
                       {data19.length != 0 && (
                      <div className="mt-4">
                        <div className="mt-1 ms-2" style={{ cursor: "pointer" }}>
                          <FaEye size={20} onClick={() => setModalShow(true)} />
                        </div>
                      </div>
                    )}
                    </div>
              </div>
              <div className="phone7" style={{display:'flex',flexDirection:'row',gap:'170px',justifyContent:'space-between'}}>
                <div>
                  <label style={{margin:'0',padding:'0'}}>Password</label>
                  <div>
                  <div className="search">
                  <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                   <input type={passShow ? 'text' : 'password'} className="password" onChange={passHandleChange}/>
                   </OverlayTrigger>
                   <span className="fa-search">{passShow ? <FaEyeSlash size={20} onClick={handlePassClick1}/> : <FaEye size={20} onClick={handlePassClick}/>}</span>
                  </div>
                  </div>
                </div>
                <div>
                  <label style={{margin:'0',padding:'0'}}>Confirm Password</label>
                  <div>
                  <div className="search">
                   <input style={{border:passErr ? "1px solid red" : ""}} disabled={!disable} type={conPassShow ? 'text' : 'password'} className="password1" onChange={conPassHndleChange}/>
                   <span className="fa-search">{conPassShow ? <FaEyeSlash size={20} onClick={handleConPassClick1}/> : <FaEye size={20} onClick={handleConPassClick}/>}</span>
                  </div>
                  <div>{passErr && <p style={{ fontSize: "10px", position: "absolute", color: "red" }}>Password doesn&lsquo;t match*</p>  }</div>
                  <div>{confrimErr && <p style={{ fontSize: "10px", position: "absolute", color: "green" }}>Password Matched!</p>}</div>
                  </div>
                </div>
      
                </div>
                {/* <div className="pass-warning" style={{backgroundColor:whole ? '#C1E1C1' : ''}}>
                    <p className="para-warning" style={{color:minimum? 'green' : ''}}>{minimum?<span>&#10003;</span>:<span>&times;</span>}Must have 8 charcters</p>
                    <p className="para-warning" style={{color:caps? 'green' : ''}}>{caps?<span>&#10003;</span>:<span>&times;</span>}Must have 1 Captial letter</p>
                    <p className="para-warning" style={{color:small? 'green' : ''}}>{small?<span>&#10003;</span>:<span>&times;</span>}Must have 1 Small letter</p>
                    <p className="para-warning" style={{color:number? 'green' : ''}}>{number?<span>&#10003;</span>:<span>&times;</span>}Must have 1 Number</p>
                </div> */}
            </div>
            {/* <div className="attendance_child_2">
              <div>
                <EmpInput
                  width="500px"
                  height="30px"
                  lable="employee code "
                  placeholder="Enter Your emp code"
                  value={data9}
                  border={err9 ? "1px solid red" : ""}
                />
              </div>
              <div style={{ display: "flex", gap: "5px" }}>
              <div>
                <EmpInput
                  width="250px"
                  height="30px"
                  lable="Date Of Birth"
                  placeholder="Enter Your Birth"
                  message={dobFunction}
                  type="date"
                  border={err1 ? "1px solid red" : ""}
                  key="dob"
                  value={data2}
                />
              </div>
              <div>
                <EmpInput
                  width="250px"
                  height="30px"
                  lable="Age"
                  placeholder="Enter Your Age"
                  message={agefunction}
                  border={err2 ? "1px solid red" : ""}
                  type="number"
                  value={data1}
                  
                />
                {ageValid && <p style={{ fontSize: "10px", position: "absolute", color: "red" }}>You must be 18 years old or above*</p>}
              </div>
              </div>
              <div>
                <div>
                  <TextForm lable="Designation" />
                </div>
                <div>
                <select style={{width:"500px",height:"30px",border:err4 ? "1px solid red" : "",borderRadius:'3px',outline:'none'}} onChange={(e)=>{
                    Designfunction(e.target.value)
                  }} value={data4}>
                     <option selected > -- select an option -- </option>
                   {DsgData && DsgData.map(option => {
            return (<option key={option.empdsgsrv_Id} value={option.empdsgsrv_vlaue}>{option.empdsgsrv_vlaue}</option>);
        })}
                   </select>
                </div>
              </div>
              <div>
                  <div>
                    <TextForm lable="branch" />
                  </div>
                  <div>
                  <select style={{width:"500px",height:"30px",border:err7 ? "1px solid red" : "",borderRadius:'3px',outline:'none'}} onChange={(e)=>{
                    branchFunction(e.target.value)
                  }} value={data7}>
                     <option  selected > -- select an option -- </option>
                   {BrnhData && BrnhData.map(option => {
            return (<option key={option.empbrachsrv_Id} value={option.empbrachsrv_vlaue}>{option.empbrachsrv_vlaue}</option>);
        })}
                   </select>
                  </div>
                </div>
                <div>
                  <TextForm lable="skills" />
                </div>
                <div className="app">
      <div className="dropdown-container">
        <Select
          options={optionList}
          placeholder="Select Skills"
          value={selectedOptions}
          onChange={handleSelect}
          isSearchable={true}
          isMulti
        />
      </div>
    </div>
    <div>
                  
                  <div>
                  <div>
                    <EmpInput
                      width="500px"
                      height="30px"
                      lable="email"
                      placeholder="Enter Your email"
                      message={EmailFunction}
                      border={err17 ? "1px solid red" : ""}
                      value={data17}
                    />
                    {emailValidate && (
                      <p style={{ fontSize: "10px", position: "absolute", color: "red" }}>
                        Please Enter Valid Email Format*
                      </p>
                    )}
                  </div>
                  </div>
                </div>
              <div>
              <div>
                <div>
                  <TextareaForm
                    width="500px"
                    height="60px"
                    lable="permanent address "
                    placeholder="Enter Your adress"
                    message={PerAddressFunction}
                    border={preTextErr ? "1px solid red" : ""}
                    value={pertextData}
                  />
                </div>
              </div>
              <div style={{ display: "flex", gap: "40px" }}>
                <div>
                  <div>
                    <TextForm lable="country" />
                  </div>
                  <div>
                    <select
                      style={{width:"230px",height:"30px",border:permanErr ? "1px solid red" : "",borderRadius:'3px',outline:'none'}}
                      onChange={(e) => {
                        PermanCountryFunction(e.target.value);
                      }}
                       value={permaCouData}>
                      {permaCouData ? <option>{permaCouData}</option> :<option  selected> -- select an option -- </option>}
                      {permannetCountry && permannetCountry.map((val, index) => (
                        <option key={val.emp_countryid} value={val.emp_country_name}>
                          {val.emp_country_name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <div>
                    <TextForm lable="state" />
                  </div>
                  <div>
                  <select style={{ width: "230px", height: "30px" ,border:permanStateErr ? "1px solid red" : "",borderRadius:'3px',outline:'none'}} onChange={(e)=>{
                    PerStateFunction(e.target.value)
                  }} value={perStateData}>
                  {perStateData ? <option>{perStateData}</option> :<option  selected> -- select an option -- </option>}
                      {stateFil && stateFil.map((val, index) => (
                        <option key={val.emp_stateID} value={val.emp_state_name}>
                          {val.emp_state_name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", gap: "40px" }}>
                <div>
                  <div>
                    <TextForm lable="city" />
                  </div>
                  <div>
                  <select style={{ width: "230px", height: "30px" ,border:perCityErr ? "1px solid red" : "",borderRadius:'3px',outline:'none' }} onChange={(e) => {
                    PercityFunction(e.target.value)
                  }} value={perCityData} >
                    {perCityData ? <option>{perCityData}</option> :<option  selected> -- select an option -- </option>}
                    {cityArr && cityArr.map((val,index) =>(
                      <option key={val.emp_cityID} value={val.emp_city_name}>{val.emp_city_name}</option>
                    ))}
                    </select>
                  </div>
                </div>
                <div>
                  <div>
                    <EmpInput
                      width="230px"
                      height="30px"
                      lable="pincode"
                      placeholder="Enter Your pincode"
                      message={PerPinFunction}
                      border={perPinErr ? "1px solid red" : ""}
                      max={9}
                     value={perPinData}
                    />
                    {pincodeValidate && (
                      <p style={{ fontSize: "10px", position: "absolute", color: "red" }}>
                        Please Enter Only Number*
                      </p>
                    )}
                    {pincodeValidate1 && (
                      <p style={{ fontSize: "10px", position: "absolute", color: "red" }}>
                        Maximum 9 numbers only*
                      </p>
                    )}
                  </div>
                </div>
              </div>
              </div>
              <div style={{ display: "flex" }}>
              <div>{
                   Location.state == null ? <EmpinputFiles
                   width="500px"
                   height="30px"
                   lable="profile"
                   message={ProfileFunction}
                   type="file"
                   border={err19 ? "1px solid red" : ""}
                   accept="image/*"
                   // key={data19}
                   key={data19}
                  
                 />
                 :
                 <>
                 <label>Profile</label>
                    <div>
                    <label htmlFor="filePicker" style={{position:'absolute',width:"500px",height:"30px",border:'1px solid gray',paddingLeft:'5px',borderRadius:'2px',paddingTop:'3px'}}>{fileName ? fileName : 'Choose File'}
                    <span style={{color:'red',position:'absolute',cursor:'pointer'}}><MdOutlineModeEdit size={20}/>*</span>
                    </label>
                   <input id="filePicker" style={{visibility:"hidden"}} type={"file"} onChange={(e) => setFileName(e.target.files[0].name)}/>
                    </div>
                    </>
                }
                      </div>
                       {data19.length != 0 && (
                      <div className="mt-4">
                        <div className="mt-1 ms-2" style={{ cursor: "pointer" }}>
                          <FaEye size={20} onClick={() => setModalShow(true)} />
                        </div>
                      </div>
                    )}
                    </div>
              
            
            </div> */}
            {/* <div className='attendance_child_3'>
 <div>
 <EmpInput
 width='300px'
 height='30px'
 lable='Username'
 placeholder='Enter Your Name'
 />
 </div>
 </div> */}
            {/* finish */}
          </div>
          <div className="attendance_child_3">
            <div
              className="attendance_child_header mt-3"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div style={{marginBottom:'1rem',marginRight:'10rem'}}>Work Experience</div>
            </div>
            <div
              className="Expriene_parent"
              style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}
            >
              <div>
                <div className="attendance_child_3_1">
                  <div>
                    <EmpInput
                      width="230px"
                      height="30px"
                      lable="company Name"
                      placeholder="Enter Your company name"
                      message={companyfuntion}
                      border={err20 ? "1px solid red" : ""}
                      value={compData}
                      type="text"
                    />
                    {comapanyValid && <p style={{ fontSize: "10px", position: "absolute", color: "red" }}>Invalid Format*</p> }
                  </div>
                  <div>
                    <EmpInput
                      width="230px"
                      height="30px"
                      lable="from"
                      placeholder="Enter Your email"
                      type="date"
                      message={companyFromfuntion}
                      border={err22 ? "1px solid red" : ""}
                      value={compFromData}
                    />
                  </div>
                  <div>
                    <EmpInput
                      width="230px"
                      height="30px"
                      lable="to"
                      placeholder="Enter Your email"
                      type="date"
                      message={companyTOfuntion}
                      border={err21 ? "1px solid red" : ""}
                      value={compToData}
                    />
                  </div>
                </div>
                <div className="attendance_child_3_1 mt-3">
                <div>
                    <EmpInput
                      width="230px"
                      height="30px"
                      lable="Duration"
                      placeholder="Enter Your email"
                      type="text"
                      message={companyFromfuntion}
                      border={err22 ? "1px solid red" : ""}
                      value={year}
                      
                    />
                  </div>
                  <div>
                    <EmpInput
                      width="230px"
                      height="30px"
                      lable="designation"
                      placeholder="Enter Your designation"
                      message={companyDesignfuntion}
                      border={err23 ? "1px solid red" : ""}
                      value={compDesign}
                      type="text"
                    />
                    {desiganationValid && <p style={{ fontSize: "10px", position: "absolute", color: "red" }}>Invalid Format*</p> }
                  </div>
                  <div>
                    <EmpInput
                      width="230px"
                      height="30px"
                      lable="role "
                      placeholder="Enter Your role"
                      message={companyRolefuntion}
                      border={err24 ? "1px solid red" : ""}
                      value={compRole}
                      type="text"
                    />
                    {roleValid && <p style={{ fontSize: "10px", position: "absolute", color: "red" }}>Invalid Format*</p> }
                  </div>
                </div>
              </div>
              <div className="Add_button mt-4">
                {update ? 
                  <button
                  type="button"
                  onClick={Location.state == null ?updateFunction :updateFunction1}
                  style={
                    MinimFuntion()
                      ? { pointerEvents: "none", backgroundColor: "rgb(84, 84, 84)" }
                      : {}
                  }
                >
                  Update
                </button>  :
                   <button
                   type="button"
                   onClick={ExperAddFuntion}
                   style={
                     MinimFuntion()
                       ? { pointerEvents: "none", backgroundColor: "rgb(84, 84, 84)" }
                       : {}
                   }
                 >
                   add
                 </button>
              }
              </div>
            </div>
          </div>
          {
            Location.state == null ? <div className="employee_table mt-4">
            <table style={{width:"100%"}}>
              <tr className="tablehead">
                <th>sl.no</th>
                <th>company</th>
                <th>from</th>
                <th>to</th>
                <th>duration</th>
                <th>designation</th>
                <th>role</th>
                <th>action</th>
              </tr>

               {experArray.length>0? experArray.map((data, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.companyName}</td>
                  <td>{data.FromDate}</td>
                  <td>{data.ToDate}</td>
                  <td>{data.year}</td>
                  <td>{data.Design}</td>
                  <td>{data.Role}</td>
                  <td>
                    <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
                      <div style={{ cursor: "pointer" }} className="EditIconHover">
                        <CiEdit onClick={(e) => {
                          editArrayFunction(data,index)
                        }}/>
                      </div>
                      <div style={{ cursor: "pointer" }} className="DeleteIconHover">
                        <RiDeleteBin4Line
                          onClick={(e) => {
                            DeleteArrayFntion(index);
                          }}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            :<tr  style={{textAlign:"center"}}>
              <td  style={{border:"1px solid black"}} colSpan={8}>Add experience</td>
            </tr>
            }
            </table>
          </div> :
          <div className="employee_table mt-4">
          <table style={{width:"100%"}}>
            <tr className="tablehead">
              <th>sl.no</th>
              <th>company</th>
              <th>from</th>
              <th>to</th>
              <th>duration</th>
              <th>designation</th>
              <th>role</th>
              <th>action</th>
            </tr>

             {expRes.length>0? expRes.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.epmlexp_comapany}</td>
                <td>{data.epmlexp_from}</td>
                <td>{data.epmlexp_to}</td>
                <td>{data.epmlexp_duration}</td>
                <td>{data.epmlexp_designation}</td>
                <td>{data.epmlexp_role}</td>
                <td>
                  <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
                    <div style={{ cursor: "pointer" }} className="EditIconHover">
                      <CiEdit onClick={(e) => {
                        editArrayFunction1(data,index)
                      }}/>
                    </div>
                    <div style={{ cursor: "pointer" }} className="DeleteIconHover">
                      <RiDeleteBin4Line
                        onClick={(e) => {
                          DeleteArrayFntion1(index);
                        }}
                      />
                    </div>
                  </div>
                </td>
              </tr>
            ))
          :<tr  style={{textAlign:"center"}}>
            <td  style={{border:"1px solid black"}} colSpan={8}>Add experience</td>
          </tr>
          }
          </table>
        </div>
          }
          
          <div
            className="attendance_child_header_3"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div>
              <button type="submit">submit</button>
              <button onClick={buttonSubmit} type="button">Summa</button>
            </div>
          </div>
        </form>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          img={data19}
          removeFunction={removeFunction}
        />
      </div>
      <ToastContainer
      style={
        {
          color:"red",
          fontSize:"14px",
          textTransform:"capitalize",
        }
      }
      />
    </DashboardLayout>
  );
};

export default Atten_correction;
