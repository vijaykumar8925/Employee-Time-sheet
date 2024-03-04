// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import axios from "axios";
import "./Break.css";
import { useState } from "react";
// image break
import { useEffect } from "react";
import Transitions from "animation/Transition";
import logintime from "SettimeLogout/LogoutTime";

function Tables() {
  const [showbreak, setshowbreak] = useState(null);
  const [starttime, setstarttime] = useState(false);
  const [showsubmit, setshowsubmit] = useState(false);
  const [hideendtime, sethideendtime] = useState(true);
  const [breakstarttime, setbreakstarttime] = useState(null);
  const [breakendtime, setbreakendtime] = useState(null);
  const [totaltime, settotaltime] = useState(null);
  const [time, settime] = useState(null);
  const [breaktype, setbreaktype] = useState("");
  // console.log(breakstarttime,breakendtime);
  // error
  const [reason, setreason] = useState("");
  const [remarks, setremarks] = useState("");
  const [email, setemail] = useState("");
  const [bresk_lable, setbreak_lable] = useState(true);
  const [BreakErr, setBreakErr] = useState(null);
  const SelectFunction = (e) => {
    if (e.target.value != null) {
      setbreak_lable(false);
    } else {
      setbreak_lable(true);
    }
    setbreaktype(e.target.value);
    if (e.target.value == "Others") {
      setshowbreak(true);
    } else {
      setshowbreak(false);
    }
    if (breaktype != 0) {
      setBreakErr(false);
    }
  };

  setTimeout(() => {
    settime(new Date().toLocaleTimeString());
  }, 1000);

  const BreakStart = () => {
    if (breaktype == null) {
      setBreakErr(true);
    } else {
      setBreakErr(false);
      localStorage.setItem("starttime", new Date().toLocaleTimeString());
      localStorage.setItem("breaktype", breaktype);
      setbreakstarttime(new Date().toLocaleTimeString());
      window.location.reload();
    }
  };
  const [selectbreaktype, setselectbreaktype] = useState("");
  const [checking, setChecking] = useState("");
  useEffect(() => {
    setbreakstarttime(localStorage.getItem("starttime"));
    setbreaktype(localStorage.getItem("breaktype"));
    if (localStorage.getItem("starttime")) {
      setstarttime(true);
      setbreak_lable(false);
    }
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (breakstarttime == null) {
      } else {
        setbreakendtime(new Date().toLocaleTimeString());
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
          var h = ((mins / 60) | 0) % 12;
          var m = mins % 60;
          return z(h) + ":" + z(m) + " " + "Mins";
        }

        function addTimes(t0, t1) {
          return timeFromMins(timeToMins(t1) - timeToMins(t0));
        }
        settotaltime(addTimes(breakstarttime, new Date().toLocaleTimeString()));

        sethideendtime(false);
      }
    }, 1000);
  });

  // useEffect(()=>{
  //   setemail(localStorage.getItem('email'))
  // },[])
  const onsubmit = (event) => {
    event.preventDefault();

    async function Submiting () {
            const break_value = await {
            breaktype1: breaktype,
            breakstart: breakstarttime,
            breakend: new Date().toLocaleTimeString(),
            breakduration: totaltime,
            email: localStorage.getItem('mails'),
            reason: reason,
            remarks: remarks,
          };
    
          const apiUrl = `http://localhost:5000/post/breakdetails`
            const response = await axios.post(apiUrl,break_value)
            alert(response.data.message)
            localStorage.removeItem("starttime");
            localStorage.removeItem("breaktype");
            window.location.reload();
           }
           Submiting()
    
  };
  logintime();

  // const handleBreakSubmit = (event) => {
  //      event.preventDefault()

  //      async function Submiting () {
  //       const break_value = await {
  //       breaktype1: breaktype,
  //       breakstart: breakstarttime,
  //       breakend: new Date().toLocaleTimeString(),
  //       breakduration: totaltime,
  //       email: localStorage.getItem('mails'),
  //       reason: reason,
  //       remarks: remarks,
  //     };

  //     const apiUrl = `http://localhost:5000/post/breakdetails`

  //     if(breaktype && breakstarttime && break_value.breakend && totaltime && break_value.email != 0){
  //       const response = await axios.post(apiUrl,break_value)
  //       console.log(response)
  //       window.location.reload()
  //     }else{
  //       alert('fill all the required details')
  //     }
       
  //      }
  //      Submiting()

  // }

  
  
  return (
    <Transitions>
      <DashboardLayout>
        <DashboardNavbar />

        <div className="break_parent" >
          <div className="break_start_head">
            {starttime ? <div>Break End </div> : <div>Break Start</div>}
          </div>
          <form onSubmit={onsubmit}>
            <div className="break_child_two">
              {
                <div className="break_child_two_1">
                  <div style={starttime == false ? {} : { pointerEvents: "none" }}>
                    <div className="ps-2 h6 "> break type</div>
                    {starttime == false && (
                      <select
                        onChange={SelectFunction}
                        style={BreakErr ? { boxShadow: " 0 0 5px  red" } : {}}
                        name="breaktype1"
                        value={breaktype}
                      >
                        <option style={{ pointerEvents: "none", transition: "2s" }} selected>
                          Select Breaktype
                        </option>
                        <option>Break</option>
                        <option>On Duty</option>
                        <option>Personal Out</option>
                        <option>Lunch</option>
                        <option>Others</option>
                        {/* <option>Other</option> */}
                      </select>
                    )}
                    {starttime && <lable className="ps-4">{breaktype}</lable>}
                  </div>
                  {/* {BreakErr && <div style={{ color: "red",marginLeft:"5px" }}>required to fill breaktype </div>} */}
                </div>
              }

              {showbreak ? (
                <div className="break_child_two_2">
                  <div className="ps-2 h6">Write Breaktype</div>
                  <div>
                    <input
                      type="text"
                      placeholder="break type"
                      onChange={(e) => {
                        {
                          breaktype == "other"
                            ? setselectbreaktype(e.target.value)
                            : setbreaktype(e.target.value);
                        }
                      }}
                      name="breaktype2"
                    ></input>
                  </div>
                </div>
              ) : (
                ""
              )}
              <div className="break_child_two_3">
                <div className="ps-2 h6">Start Time</div>
                <div>
                  <input
                    disabled
                    type="text"
                    value={!starttime ? time : breakstarttime}
                    name="breakstart"
                  ></input>
                </div>
              </div>

              {starttime && (
                <div className="break_child_two_4">
                  <div className="ps-2 h6">Endtime</div>
                  <div>
                    <input type="text" disabled value={breakendtime} name="breakend"></input>
                  </div>
                </div>
              )}
              {starttime && (
                <div className="break_child_two_5">
                  <div className="ps-2 h6">total duration</div>
                  <div>
                    <input
                      disabled
                      type="text"
                      className="ps-1"
                      value={totaltime}
                      name="breakduration"
                    ></input>
                  </div>
                </div>
              )}
              {starttime == true && (
                <>
                  <div className="break_child_two_8">
                    <div className="ps-2 h6">reason</div>
                    <div>
                      <textarea
                        onChange={(e) => {
                          setreason(e.target.value);
                        }}
                        value={reason}
                        name="reason"
                      ></textarea>
                    </div>
                  </div>
                  <div className="break_child_two_8">
                    <div className="ps-2 h6">remarks</div>
                    <div>
                      <textarea
                        onChange={(e) => {
                          setremarks(e.target.value);
                        }}
                        value={remarks}
                        name="remarks"
                      ></textarea>
                    </div>
                  </div>
                </>
              )}
              <div className="break_child_two_6">
                <div className="text-center">
                  {starttime == true && <button type="submit">Close break</button>}
                  {starttime == false && (
                    <button type="button" onClick={BreakStart}>
                      Break Start
                    </button>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </DashboardLayout>
    </Transitions>
  );
}

export default Tables;
// const break_value = {
//   breaktype1: breaktype,
//   breakstart: breakstarttime,
//   breakend: new Date().toLocaleTimeString(),
//   breakduration: totaltime,
//   email: email,
//   reason: reason,
//   remarks: remarks,
// };
// const config = {
//   headers: {
//     accept: "application/json",
//     authorization:  localStorage.getItem('token'),
//   },
// };
// axios.post("http://localhost:8000/msts/break/type", break_value, config).then((res) => {
//   alert(res.data);
//   window.location.reload();
//   localStorage.removeItem("starttime");
//   localStorage.removeItem("breaktype");
// });
