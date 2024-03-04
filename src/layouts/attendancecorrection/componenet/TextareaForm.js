import React from 'react'
import * as PropTypes from 'prop-types'
import TextForm from './TextForm'
import { RiErrorWarningLine } from "react-icons/ri";
import './tablearea.styles.css';
const TextareaForm = ({width,height,lable,placeholder,type,errormsg,border,message,value}) => {
    
    const   EmpInput_style={
        width:width,
        height:height,
        border:border,
        padding : '5px'
    }
  return (
    <div >
       
    <lable>
        <TextForm
            lable={lable}
        />
    </lable>
    <div style={{position:"relative"}}>
      
   <textarea spellCheck={false} value={value} style={EmpInput_style}  className='Input_style' type={type} placeholder={placeholder} onChange={(e) => {message(e.target.value)}}></textarea>
  { border &&  <div style={{color:"red" ,position:'absolute',top:"15px",right:"35px"}} ><RiErrorWarningLine /></div>}
    </div>
  
</div>
  )
}
TextareaForm.propTypes = {
    width: PropTypes.bool,
    height: PropTypes.bool,
    lable: PropTypes.bool,
    placeholder: PropTypes.bool,
    type: PropTypes.bool,
    errormsg: PropTypes.bool,
    border: PropTypes.func,
    message: PropTypes.func,
    value : PropTypes.bool,
  };
export default TextareaForm