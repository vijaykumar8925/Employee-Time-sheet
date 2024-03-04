
// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Transitions from "animation/Transition";
import './leavereq.css'
import LeavelistDatatable from "./component/LeavelistDatatable";
import LeavelistHead from "./component/LeavelistHead";
import { useState } from "react";
import { useEffect } from "react";
import jsPDF from 'jspdf'
import axios from "axios";
import autoTable from 'jspdf-autotable';
function Tables() {
  const [results, setResults] = useState([])
  const [FilteredUsers, setFilteredUsers] = useState([])
  const [change, Setchange] = useState(false)
  const [Email, setemail] = useState('')
  useEffect(() => {

    console.log(localStorage.getItem('mails'))
  }, [])
  useEffect( async () => {

      try {
          const response = await axios.get(`http://localhost:5000/post/leavedata/'${localStorage.getItem('mails')}'`).then((res)=>{

          console.log(res.data.data)
          setResults(res.data.data)

          })

        } catch (err) {
          console.log(err) 
        }
    }, []);
  const columns = [
    {
      name: 'Sl No',
      selector: (row, index) => index + 1,
      id: "name",
      center: true,
      style: {
        fontSize: '16px',
        backgroundColor: '#FloralWhite'
      }
    },
    {
      name: 'No of Days',
      selector: row => row.lvrqdls_no_of_days,
      id: "name",
      width: '200px',
      center: true,
      style: {
        fontSize: '16px',
        backgroundColor: '#FloralWhite'
      }
    },
    {
      name: 'Date',
      selector: row => row.lvrqdls_date,
      id: "name",
      width: '200px',
      center: true,
      style: {
        fontSize: '16px',
        backgroundColor: '#FloralWhite'
      }
    },
    {
      name: 'Date Session',
      selector: row => row.lvrqdls_date_session,
      id: "name",
      center: true,
      width: '200px',
      style: {
        fontSize: '16px',
        backgroundColor: '#FloralWhite'
      }
    },

    {
      name: 'From Date',
      selector: row => row.lvrqdls_from_date,
      id: "name",
      width: '200px',
      center: true,
      style: {
        fontSize: '16px',
        backgroundColor: '#FloralWhite'
      }
    },

    {
      name: 'From Session',
      selector: row => row.lvrqdls_from_session,
      id: "name",
      center: true,
      width: '200px',
      style: {
        fontSize: '16px',
        backgroundColor: '#FloralWhite'
      }

    },
    {
      name: 'To Date',
      selector: row => row.lvrqdls_to_date,
      id: "name",
      center: true,
      width: '200px',
      style: {
        fontSize: '16px',
        backgroundColor: '#FloralWhite'
      }
    },
    {
      name: 'To Session',
      selector: row => row.lvrqdls_to_session
      ,
      id: "name",
      width: '200px',
      center: true,
      style: {
        fontSize: '16px',
        backgroundColor: '#FloralWhite'
      }
    }, {
      name: 'Reason',
      selector: row => row.lvrqdls_reason,
      id: "name",
      center: true,
      width: '200px',
      style: {
        fontSize: '16px',
        backgroundColor: '#FloralWhite'
      }
    },
    {
      name: 'Remarks',
      selector: row => row.lvrqdls_remarks,
      id: "name",
      width: '200px',
      center: true,

      style: {
        fontSize: '16px',
        backgroundColor: '#FloralWhite'
      }
    }
  ];
  const [copy, setCopy] = useState([])
  const Selecting = (data) => {
    setCopy(data.selectedRows)
    console.log(data)
  }
  const changeMessage = (newMessage) => {
    const Message = (newMessage.toLowerCase())
    const filtered = results.filter(user => user.lvrqdls_no_of_days.toLowerCase().includes(Message));
    setFilteredUsers(filtered);
    Setchange(true)
  }
  var doc = new jsPDF();
  var col = ["Sl.No.", "Task Referance", 'Activity', 'Project', 'Task Type', 'Work Details', 'Start Time', 'End Time', 'Duration', 'Status'];
  var rows = [];
  var rowsCopy = [];

  results.forEach((element, index) => {
    var temp = [index + 1, element.lvrqdls_no_of_days, element.lvrqdls_date, element.lvrqdls_date_session, element.lvrqdls_from_date, element.lvrqdls_from_session, element.lvrqdls_to_date, element.lvrqdls_to_session, element.lvrqdls_reason, element.lvrqdls_remarks];
    rows.push(temp);
    console.log(element)

  });

  copy.forEach((element, index) => {
    var temp = [index + 1, element.lvrqdls_no_of_days, element.lvrqdls_date, element.lvrqdls_date_session, element.lvrqdls_from_date, element.lvrqdls_from_session, element.lvrqdls_to_date, element.lvrqdls_to_session, element.lvrqdls_reason, element.lvrqdls_remarks];
    rowsCopy.push(temp);
    console.log(element)

  });

  console.log(rows)
  const GeneratePdf = () => {

    doc.autoTable(col, rows, { startY: 10 });
    doc.save('Test.pdf');
  }
  const CopyFunction = () => {
    alert('ggg')
  }
  return (
    <Transitions>
      <DashboardLayout>
        <DashboardNavbar />
        <div>
          <div><LeavelistHead changeMessage={changeMessage} GeneratePdf={GeneratePdf} data={rows} dataCopy={rowsCopy} columns={columns} CopyFunction={CopyFunction} /> </div>
          <div style={{ marginTop: "10px" }}><LeavelistDatatable Selecting={Selecting} data={change ? FilteredUsers : results} columns={columns} /> </div>
        </div>

      </DashboardLayout>
    </Transitions>
  );
}

export default Tables;
