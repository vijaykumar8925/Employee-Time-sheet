
// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Transitions from "animation/Transition";
import './TaskList.css'
import TasklistHead from "./component/TasklistHead";
import TasklistDatatable from "./component/TasklistDatatable";
import { useState } from "react";
import { useEffect } from "react";
import jsPDF from 'jspdf'
import axios from "axios";
import autoTable from 'jspdf-autotable';
function Tables() {
  const [results, setResults] = useState([])
  const [FilteredUsers, setFilteredUsers] = useState([])
  const [change, Setchange] = useState(false)
    const[Email,setemail]=useState('')
    useEffect(()=>{
      
      console.log(localStorage.getItem('email'))
    },[])
    useEffect(() => {
         
      async function taskDetails () {
         const apiUrl = `http://localhost:5000/post/tasklist/'${localStorage.getItem('mails')}'`;
         const response = await axios.get(apiUrl)
         
         setResults(response.data.data)
      }
      taskDetails()
    },[])
    const columns = [
      {
          name: 'Sl No',
          selector: (row,index) => index+1,
          id: "name",
          center:true,
          style:{
              fontSize: '16px',
              backgroundColor: '#FloralWhite'
          }
      },
      {
          name: 'Task Referance',
          selector: row => row.tskdtls_task_reference,
          id: "name",
          width:'200px',
          center:true,
           style:{
              fontSize: '16px',
              backgroundColor: '#FloralWhite'
          }
      },
      {
          name: 'Activity',
          selector: row => row.tskdtls_activity,
          id: "name",
          center:true,
          width:'200px',
          style:{
              fontSize: '16px',
              backgroundColor: '#FloralWhite'
          }
      },
      
      {
          name: 'Project',
          selector: row => row.tskdtls_project,
          id: "name",
          width:'200px',
          center:true,
          style:{
              fontSize: '16px',
              backgroundColor: '#FloralWhite'
          }
      },
      
      {
          name: 'Task Type',
          selector: row => row.tskdtls_task_type
          ,
          id: "name",
          center:true,
          width:'200px',
          style:{
              fontSize: '16px',
              backgroundColor: '#FloralWhite'
          }

      },
      {
          name: 'Work Details',
          selector: row => row.tskdtls_work_details
          ,
          id: "name",
          center:true,
          width:'200px',
          style:{
              fontSize: '16px',
              backgroundColor: '#FloralWhite'
          }
      },
      {
        name: 'Start Time',
        selector: row => row.tskdtls_start_time
        ,
        id: "name",
        width:'200px',
        center:true,
        style:{
            fontSize: '16px',
            backgroundColor: '#FloralWhite'
        }
    }, {
      name: 'End Time',
      selector: row => row.tskdtls_end_time,
      id: "name",
      center:true,
      width:'200px',
      style:{
          fontSize: '16px',
          backgroundColor: '#FloralWhite'
      }
  },
  {
    name: 'Duration',
    selector: row => row.tskdtls_duration,
    id: "name",
    width:'200px',
    center:true,
    
    style:{
        fontSize: '16px',
        backgroundColor: '#FloralWhite'
    }
},
{
  name: 'Status',
  selector: row => row.tskdtls_status,
  id: "name",
  width:'200px',
  center:true,
  style:{
      fontSize: '16px',
      backgroundColor: '#FloralWhite'
  }
}
     
  ];
  const [copy,setCopy] = useState([]);
  const Selected = (data) => {
     setCopy(data.selectedRows)
     console.log(copy)
  }
  const changeMessage = (newMessage) => {
    const Message = (newMessage.toLowerCase())
    const filtered = results.filter(user => user.tskdtls_activity.toLowerCase().includes(Message));
    setFilteredUsers(filtered);
    Setchange(true)
  }
  var doc = new jsPDF();
  var col = ["Sl.No.","Task Referance",'Activity','Project','Task Type','Work Details','Start Time','End Time','Duration','Status'];
  var rows = [];
   var rowsCopy = [];

results.forEach((element,index) => {      
  var temp = [index+1,element.tskdtls_task_reference,element.tskdtls_activity,element.tskdtls_project,element.tskdtls_task_type,element.tskdtls_work_details,element.tskdtls_start_time,element.tskdtls_end_time,element.tskdtls_duration,element.tskdtls_status
];
  rows.push(temp)
  console.log(element)
}); 

copy.forEach((element,index) => {      
  var temp = [index+1,element.tskdtls_task_reference,element.tskdtls_activity,element.tskdtls_project,element.tskdtls_task_type,element.tskdtls_work_details,element.tskdtls_start_time,element.tskdtls_end_time,element.tskdtls_duration,element.tskdtls_status
];
  rowsCopy.push(temp)
  console.log(element)
}); 
  const GeneratePdf=()=>{
 
    doc.autoTable(col, rows, { startY: 10 });
    doc.save('Test.pdf');
  }
  const CopyFunction=()=>{
alert('ggg')
  }
  return (
    <Transitions>
    <DashboardLayout>
      <DashboardNavbar />
      <div>
        <div><TasklistHead  changeMessage={changeMessage} GeneratePdf={GeneratePdf} data={rows} dataCopy={rowsCopy} columns={columns} CopyFunction={CopyFunction}/> </div>
        <div style={{marginTop:"10px"}}><TasklistDatatable Selected={Selected} data={change?FilteredUsers:results} columns={columns}/> </div>
      </div>
      
    </DashboardLayout>
    </Transitions>
  );
}

export default Tables;
