import React, { useState } from 'react'
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import  './Adpermissionapp.css'
import UnderProgress from 'components/UnderProgress'
import { useEffect } from 'react';
import { MdOutlineSimCardDownload } from "react-icons/md";
import { Link } from 'react-router-dom';
import axios from 'axios';
const Adpermissionapp = () => {
  const [file,setFile] = useState('');
  const [data,setData] = useState([])
  console.log(data);
  useEffect(() => {
    let apiUrl = `http://localhost:5000/post/filevalue`;
     axios.get(apiUrl)
     .then(res => setData(res.data[4]) ) 
     .catch(err => console.log(err));
  },[])
  const handleClick = () => {
    const values = {
      file : file
    }
    console.log(values)
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    const formdata = new FormData();
    formdata.append('file',file)
    async function filesystem () {
      let apiUrl = `http://localhost:5000/post/files`
      const responses  = await axios.post(apiUrl,formdata);
      alert(responses.data.message)
    }
    filesystem()
  }

  // document.getElementById('summa').addEventListener('mouseout',myfunc)
  // document.getElementById('summa').addEventListener('mouseenter',myfunc1)

  // function myfunc () {
  //   console.log('i am going out')
  // }

  // function myfunc1 () {
  //   console.log('i am coming in')
  // }
  
  return (
    <DashboardLayout>
    <DashboardNavbar />
    <div id='summa'>
       <div  className='Adpermissionapp_parent'>
        <UnderProgress/>
       </div>
       <input type='file'  onChange={(e) => {setFile(e.target.files[0])}}/>
       <button type='click' onClick={handleClick}>Submit</button>
       <br></br>
       {/* <img src={`http://localhost:5000/`+ data.image_name} style={{width:'500px'}}/> */}
       <div className='boxes'>
       <label style={{fontSize:'16px',paddingLeft:'5px'}}>{data.image_name} <Link to={`http://localhost:5000/`+ data.image_name}><span><MdOutlineSimCardDownload /></span></Link></label>
       </div>
       </div>
  </DashboardLayout>
  )
}

export default Adpermissionapp;