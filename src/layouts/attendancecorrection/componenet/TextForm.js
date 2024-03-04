import React from 'react'
import * as PropTypes from 'prop-types'

const TextForm = ({lable}) => {
    
  return (
    <div style={{fontSize:"15px",fontFamily:"sans-serif",textTransform:"capitalize" }} className='ms-1' >{lable}</div>
      )
}
TextForm.propTypes = {
    lable: PropTypes.bool,
 
   
    
  };
export default TextForm