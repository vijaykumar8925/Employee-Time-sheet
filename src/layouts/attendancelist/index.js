import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import UnderProgress from 'components/UnderProgress'
import { IoMdNotificationsOutline } from 'react-icons/io';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './attendancelist.css';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import MyVerticallyCenteredModal from "examples/models/MyVerticallyCenteredModal";
function Attendancelist() {
  const [val,setVal] = useState([])
  const [message,setMessage] = useState([])
  const [check,setCheck] = useState([]);
 const navigate = useNavigate();

  
  

  const deleteFunction = async (data) => {
    console.log(data)
    let params = {
      Deleteid : data,
    }
    console.log(params)
    try{
      let apiUrl = `http://localhost:5000/post/delete`
      const response = await axios.get(apiUrl,{params});
      console.log(response.data.message)
      setMessage([
        ...message,
        {
          messages : response.data.message
        }
      ])
    } catch {
      
    }

    
  }

  useEffect(() => {
    try{
      const response = axios.get(`http://localhost:5000/post/dataform`).then((res) => {
        console.log(res.data.data)
        setVal(res.data.data)
      })
    }catch{
      console.log(res.data)
    }
  },[message])

const editFunction = (values) => {
  console.log(values)
  navigate("/attendance",{state:{id:values}})
}





  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div className='overall'>
       <table>
        <tr>
          <th colSpan='3'>Action</th>
          <th>S:NO</th>
          <th>Employee Name</th>
          <th>Gender</th>
          <th>Date Of Brith</th>
          <th>Department</th>
          <th>Desigation</th>
          <th style={{width:"300px"}}>Date Of Join</th>
          <th>Branch</th>
          <th>Max Qualification</th>
          <th>Skills</th>
          <th>Employee Code</th>
          <th>Phone No</th>
          <th>Email</th>
          <th>Staying Address</th>
          <th>Permanent Address</th>
          <th colSpan='4'>Experience</th>
        </tr>
        {val.map((values,index) => (
            <tr key={index}>
            <td className="check">
            <Button size="sm" variant="outline-primary" onClick={(e) => {editFunction(values.empldls_id)}}>EDIT</Button>{' '}
            </td>
            <td className="check">
            <Button size="sm" variant="outline-success">VIEW</Button>{' '}
            </td>
            <td className="check">
            <Button size="sm" variant="outline-danger" onClick={(e) => {deleteFunction(values.empldls_id)}}>DELETE</Button>{' '}
            </td>
            <td>{index + 1}</td>
            <td style={{whiteSpace:'nowrap',overflow:'hidden'}}>{values.empldls_employee_name}</td>
            <td>{values.empldls_gender}</td>
            <td style={{whiteSpace:'nowrap',overflow:'hidden'}}>{values.empldls_dateof_birth}</td>
            <td>{values.empldls_department}</td>
            <td>{values.empldls_designation}</td>
            <td style={{whiteSpace:'nowrap',overflow:'hidden'}}>{values.empldls_dateof_join}</td>
            <td>{values.empldls_branch}</td>
            <td>{values.empldls_max_qualification}</td>
            <td>{values.empldls_skills}</td>
            <td>{values.empldls_mobile}</td>
            <td>{values.empldls_Emp_code}</td>
            <td>{values.empldls_email}</td>
            <td>{values.empldls_staying_address}</td>
            <td>{values.empldls_permanent_address}</td>
            <td style={{whiteSpace:'nowrap',overflow:'hidden'}}>{values.comapny}</td>
            <td style={{whiteSpace:'nowrap',overflow:'hidden'}}>{values.days}</td>
            <td style={{whiteSpace:'nowrap',overflow:'hidden'}}>{values.durations}</td>
            <td style={{whiteSpace:'nowrap',overflow:'hidden'}}>{values.designations}</td>
          </tr>
        ))}
        </table>
       </div>
    </DashboardLayout>
  );
}

export default Attendancelist;


