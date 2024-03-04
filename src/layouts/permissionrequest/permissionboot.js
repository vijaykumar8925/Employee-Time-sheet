import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function AlertDismissible(value) {
  const [show, setShow] = useState(true);

 console.log(value)

  return (
    <div   className='d-flex justify-content-center align-items-center'>
      {[
        'danger',
      ].map((variant) => (
        <Alert key={variant} variant={variant} onClose={() => setShow(false)} style={{width:"370px" , fontSize:"16px",height:'40px',padding:'0',margin:'0'}}  className='p'>
         To Time Can&lsquo;t be Before From Time
        </Alert>
      ))}
    </div>            
  );
}   

export default AlertDismissible;