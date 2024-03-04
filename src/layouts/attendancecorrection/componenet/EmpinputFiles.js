import React from 'react'
import './Assest.css'
import * as PropTypes from 'prop-types'
import TextForm from './TextForm'
import { RiErrorWarningLine } from "react-icons/ri";
const EmpinputFiles = ({width,height,lable,placeholder,type,message,border,errormsg,accept,value,key,name,ref}) => {
    
    const   EmpInput_style={
        width:width,
        height:height,
        border:border,
    }

  return (
    <div >
       
        <lable>
            <TextForm
                lable={lable}
            />
        </lable>
    
        <div className='Input_style_parent'> 
      <input ref={ref} accept={accept} key={key} defaultValue={value}   name={name} style={EmpInput_style} onChange={(e)=>{message(e.target.files[0])}
      
    } className='Input_style' type={type} placeholder={placeholder}></input>
    {border &&   <div style={{color:"red"}} className='Input_style_error'><RiErrorWarningLine/></div>}
      </div>
      
      
    </div>
  )
}

EmpinputFiles.propTypes = {
    width: PropTypes.bool,
    height: PropTypes.bool,
    lable: PropTypes.bool,
    placeholder: PropTypes.bool,
    type: PropTypes.bool,
    message: PropTypes.func,
    border: PropTypes.func,
    errormsg: PropTypes.func,
    accept : PropTypes.string,
    key : PropTypes.bool,
    name : PropTypes.bool,
    ref : PropTypes.bool,
    value:PropTypes.bool
  };

export default EmpinputFiles