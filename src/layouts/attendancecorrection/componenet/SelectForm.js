import React from 'react'
import * as PropTypes from 'prop-types'
import { RiErrorWarningLine } from "react-icons/ri";
const SelectForm = ({width,height,lable,placeholder,type,message,errormsg,border,country,stateFil,CityVal,option}) => {
   
    const   EmpInput_style={
        width:width,
        height:height,
        border:border,
    }
// let FilterArr=[]
// const StateFilteFuntion=()=>{
//   stateFil.forEach(element => {
//    (element.state).map((val)=>{
//     FilterArr.push (val.state)
//    })
//   });
// }
// {stateFil &&StateFilteFuntion()}


  return (
    <div>
        <select style={EmpInput_style}  className='Input_style' type={type} placeholder={placeholder} onChange={(e)=>{
          message(e.target.value)
        }} >
           <option  >select an optiomn</option>      
        </select>
    </div>
    
  )
}
SelectForm.propTypes = {
    width: PropTypes.bool,
    height: PropTypes.bool,
    lable: PropTypes.bool,
    placeholder: PropTypes.bool,
    type: PropTypes.bool,
    message: PropTypes.bool,
    errormsg: PropTypes.bool,
    border : PropTypes.func,
    country : PropTypes.array,
    stateFil : PropTypes.array,
    CityVal : PropTypes.array,
    option : PropTypes.array,
   
    
  };
export default SelectForm