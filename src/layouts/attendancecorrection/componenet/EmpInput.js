import React, { useRef } from 'react'
import './Assests.css'
import * as PropTypes from 'prop-types'
import TextForm from './TextForm'
import { Message } from '@mui/icons-material'
import { RiErrorWarningLine } from "react-icons/ri";

const EmpInput = ({width,height,lable,placeholder,type,message,border,errormsg,key,max,value}) => {

 const EmpInput_style={
 width:width,
 height:height,
 border:border,
 
 }

const ref=useRef(0)
 return (
 <div >
 
 <lable>
 <TextForm
 lable={lable}
 />
 </lable>
 
 <div className='Input_style_parent'> 
 <input maxLength={max} ref={ref} style={EmpInput_style} onChange={(e)=>{message?message(e.target.value):''}
 
 } className='Input_style' type={type} placeholder={placeholder} value={value}></input>
 {border && type !='date'? <div style={{color:"red"}} className='Input_style_error'><RiErrorWarningLine /></div>:''}
 </div>
 </div>
 )
}

EmpInput.propTypes = {
 width: PropTypes.bool,
 height: PropTypes.bool,
 lable: PropTypes.bool,
 placeholder: PropTypes.bool,
 type: PropTypes.bool,
 message: PropTypes.func,
 border: PropTypes.func,
 errormsg: PropTypes.func,
 key: PropTypes.bool,
 max : PropTypes.func,
 value : PropTypes.func 
 };

export default EmpInput