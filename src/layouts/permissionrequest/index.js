import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import axios from "axios";
import logintime from "SettimeLogout/LogoutTime";
import "./Permissionreq.css";
import { useState, useRef } from "react";
import Transitions from "animation/Transition";
import AlertDismissible from "./permissionboot";
import { useEffect } from "react";
function Permissionrequest() {
  const [reason, setreason] = useState("");
  const [date1, setdate] = useState("");
  const [fromTime, setfromTime] = useState("");
  const [toTime, settoTime] = useState("");
  const [totaltimme, settotaltimme] = useState("");
  const [timeValue, setTimeValue] = useState("");
  const [check, setCheck] = useState("");
  const [remarks, setRemarks] = useState("");

  const [reason_err, setreason_err] = useState(false);
  const [date_err, setdate_err] = useState(false);
  const [fromTime_err, setfromTime_err] = useState(false);
  const [toTime_err, settoTime_err] = useState(false);
  const [checkTime, setCheckTime] = useState(false);
  const [totaltimme_err, settotaltimme_err] = useState(false);
  const [active,setActive] = useState(false);

  


  const handleChange = async (e) => {
    {
      e.target.value.length != 0 ? setfromTime_err(false) : "";
    }

    let normal = e.target.value;
    setfromTime(normal);

    let starttime =  totaltimme.split(":") 
    let  endTime =  await e.target.value.split(":")
  
    
   

    let total  = await +starttime[0] + +endTime[0]

    console.log(total)

  
    if(+starttime[0] > +endTime[0]){
      console.log('lesser')
      setCheckTime(true)
      settoTime("")
    }else {
      setCheckTime(false)
    }

    if ( +starttime[0] > +endTime[0] ) {
      
      // settoTime('')
    } else {
      function timeToMins(time) {
        var b = time.split(":");
        return b[0] * 60 + +b[1];
      }

      // Convert minutes to a time in format hh:mm
      // Returned value is in range 00  to 24 hrs
      function timeFromMins(mins) {
        function z(n) {
          return (n < 10 ? "0" : "") + n;
        }
        var h = ((mins / 60) | 0) % 24;
        var m = mins % 60;
        return z(h) + ":" + z(m);
      }

      // Add two times in hh:mm format
      function addTimes(t0, t1) {
        return timeFromMins(timeToMins(t0) - timeToMins(t1));
      }
      settoTime(addTimes(normal, totaltimme));
    }
  };

  const permissionSubmit = async (event) => {
    event.preventDefault();
    let Permission_Data = {
      date1: date1,
      fromTime: totaltimme,
      toTime: fromTime,
      duration : toTime,
      reason: reason,
      remarks: remarks,
      email: localStorage.getItem("mails"),
    };
    {
      reason.length == 0 ? setreason_err(true) : setreason_err(false);
    }
    {
      date1.length == 0 ? setdate_err(true) : setdate_err(false);
    }
    {
      fromTime.length == 0 ? setfromTime_err(true) : setfromTime_err(false);
    }

    {
      toTime.length == 0 ? settoTime_err(true) : settoTime_err(false);
    }
    {
      totaltimme == 0 ? settotaltimme_err(true) : settotaltimme_err(false);
    }

    if ((date1 && totaltimme && fromTime && toTime && reason) != 0) {
      let apiUrl = `http://localhost:5000/post/permissiondetails`;
       const response =  await axios.post(apiUrl,Permission_Data);
       alert(response.data.message)
       window.location.reload()
    } else {
      alert("requried to fill manditory fie");
    }
  };

  logintime();
  return (
    <Transitions>
      <DashboardLayout>
        <DashboardNavbar />
        <div style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
          <div className="permission_req_parent">
            <form onSubmit={permissionSubmit}>
              <div>
                <div className="permission_header">Permission Request</div>
                <div >
                {checkTime ? <AlertDismissible /> : ""}
                </div>
              </div>
              <div className="permission_req_child_two">
                <div className="permission_req_child_two_2">
                  <div>
                    <div>Date</div>
                    <input
                      id="second"
                      type="date"
                      value={date1}
                      placeholder="Date"
                      name="date"
                      onChange={(e) => {
                        setdate(e.target.value);
                        {
                          e.target.value.length != 0 ? setdate_err(false) : "";
                        }
                      }}
                      style={date_err ? { boxShadow: " 0 0 5px  red" } : {}}
                    ></input>
                  </div>
                </div>
                <div className="permission_req_child_two_4">
                  <div>
                    <div>From Time</div>
                    <input
                      id="time"
                      type="time"
                      placeholder="from"
                      name="fromTime"
                      onChange={(e) => {
                        settotaltimme(e.target.value);
                        {
                          e.target.value.length != 0 ? settotaltimme_err(false) : "";
                        }
                      }}
                      style={totaltimme_err ? { boxShadow: " 0 0 5px  red" } : {}}
                    ></input>
                  </div>
                </div>
                <div className="permission_req_child_two_2">
                  <div>
                    <div>To time</div>
                    <input
                      id="time"
                      type="time"
                      placeholder="from"
                      name="fromTime"
                      onChange={handleChange}
                      style={fromTime_err ? { boxShadow: " 0 0 5px  red" } : {}}
                      disabled={!totaltimme}
                    ></input>
                  </div>
                </div>
                <div className="permission_req_child_two_3">
                  <div>
                    <div>Duration</div>
                    <input
                      disabled
                      id="place"
                      value={toTime}
                      type="text"
                      name="totime"
                      onChange={(e) => {
                        settoTime(e.target.value);
                      }}
                    ></input>
                  </div>
                </div>
                <div className="permission_req_child_two_1">
                  <div>
                    <div>reason</div>
                    <textarea
                      value={reason}
                      name="reason"
                      spellCheck="false"
                      onChange={(e) => {
                        setreason(e.target.value);
                        {
                          e.target.value.length != 0 ? setreason_err(false) : "";
                        }
                      }}
                      style={reason_err ? { boxShadow: " 0 0 5px  red" } : {}}
                    ></textarea>
                  </div>
                </div>
                <div className="permission_req_child_two_1">
                  <div>
                    <div>Remarks</div>
                    <textarea
                      spellCheck="false"
                      onChange={(e) => {
                        setRemarks(e.target.value);
                      }}
                    ></textarea>
                  </div>
                </div>
                <div className="permission_req_child_two_5">
                  <div>
                    <button type="submit" style={{ fontWeight: "bold" }}>
                      SUBMIT
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </DashboardLayout>
    </Transitions>
  );
}

export default Permissionrequest;
// try{
//   axios.post("http://localhost:8000/list/permission/list",Permission_Data).then((res) =>{
//     alert(res.data)

//   })
// }catch (err) {
//   console.log(err)
// }
