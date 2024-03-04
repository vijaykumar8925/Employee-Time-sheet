
 import React, { useState } from "react";
 import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as PropTypes from 'prop-types'
function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
         
        </Modal.Header>
        <Modal.Body>
         <div>
            {props.img?<img width={400} src={URL.createObjectURL(props.img)} ></img>:''}
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button onClick={props.removeFunction}>remove</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  MyVerticallyCenteredModal.propTypes = {
    props: PropTypes.bool,
    onHide: PropTypes.bool,
    img: PropTypes.bool,
    removeFunction: PropTypes.bool,
   
  };
  
  export default  MyVerticallyCenteredModal;