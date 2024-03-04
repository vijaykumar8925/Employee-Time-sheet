import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as PropTypes from 'prop-types'
const WensocketModel = (props) => {
  return (
    <div>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    
    >
  
      <Modal.Body style={{textAlign:"center",fontSize:"40px",fontFamily:'Merienda, sans-serif'}}>
      {props.data}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal></div>
  )
}
WensocketModel.propTypes = {
    props: PropTypes.bool,
    onHide: PropTypes.bool,
    img: PropTypes.bool,
    data: PropTypes.bool,
    removeFunction: PropTypes.bool,
   
  };

export default WensocketModel