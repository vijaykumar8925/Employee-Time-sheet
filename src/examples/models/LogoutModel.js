import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as PropTypes from 'prop-types'
import './LogoutModel.css'
const LogoutModel = (props,{LogutFunction}) => { 
  return (
    <div  style={{width:"300px",fontSize:"16px"}}>
         <Modal
      {...props}
     
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={true}
    >
      <Modal.Header>
        <Modal.Title className='Model_Header' id="contained-modal-title-vcenter">
         Do You What To Logout
        </Modal.Title>
      </Modal.Header>
      <Modal.Body  style={{textAlign:"center"}} className='Parent_button' >
      <button  className='Model_Button2' onClick={props.onHide} >cancel</button>
      <button  className='Model_Button' onClick={props.LogutFunction} >Logout</button>
     
      </Modal.Body>
     
    </Modal>
    </div>
  )
}
LogoutModel.propTypes = {
    onHide: PropTypes.bool,
    LogutFunction: PropTypes.bool,
    
    
  };
export default LogoutModel