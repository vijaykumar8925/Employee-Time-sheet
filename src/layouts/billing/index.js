// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { useEffect } from "react";
//css file
import "./Mytask.css";
import { useState } from "react";
import axios from "axios";
import { useRef } from "react";
import Transitions from "animation/Transition";
import logintime from "SettimeLogout/LogoutTime";
function Billing() {
  const [task_ref, settask_ref] = useState("");
  const [acti_vity, setacti_vity] = useState("");
  const [pro_ject, setpro_ject] = useState("");
  const [task_type, settask_type] = useState("");
  const [wrk_detls, setwrk_detls] = useState("");
  const [strt_time, setstrt_time] = useState("");
  const [strt_time_Date, set_strt_Time_Date] = useState("");
  const [end_time, setend_time] = useState("");
  const [status, setstatus] = useState("");
  const [duration, setDuration] = useState("");
  // useref
  const [form_err1, setform_err1] = useState(false);
  const [form_err2, setform_err2] = useState(false);
  const [form_err3, setform_err3] = useState(false);
  const [form_err4, setform_err4] = useState(false);
  const [form_err5, setform_err5] = useState(false);
  const [form_err6, setform_err6] = useState(false);
  const [form_err7, setform_err7] = useState(false);
  const [form_err8, setform_err8] = useState(false);

  const handleChange = (e) => {
    let safe = e.target.value;
    let result = strt_time.slice(11, 16);
    console.log(result, safe);
    setend_time(e.target.value);

    {
      e.target.value.length != 0 ? setform_err7(false) : "";
    }

    if (safe <= result) {
      alert("End Time cannot be before the Start Time");
      setDuration("");
      console.log(duration);
    } else {
      function timeToMins(time) {
        var b = time.split(":");
        console.log(b);
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
        return z(h) + ":" + z(m) + " " + "Mins";
      }

      function addTimes(t0, t1) {
        return timeFromMins(timeToMins(t1) - timeToMins(t0));
      }
      setDuration(addTimes(result, safe));
    }
  };

  const handleStartTime = async (e) => {
    setstrt_time(e.target.value);
     let value = await e.target.value;
     let value2 = await value.slice(0,10)
    e.target.value.length != 0 ? setform_err6(false) : "";
    
   
    set_strt_Time_Date(value2)
    // console.log(strt_time.slice(12, 16));
  };

  const TaskSubmit = (event) => {
    event.preventDefault();
    let Task_Data = {
      task_ref: task_ref,
      acti_vity: acti_vity,
      pro_ject: pro_ject,
      task_type: task_type,
      wrk_detls: wrk_detls,
      strt_time: strt_time,
      end_time: strt_time_Date + end_time,
      duration: duration,
      status: status,
      email: localStorage.getItem("mails"),
    };
    {
      task_ref.length == 0 ? setform_err1(true) : setform_err1(false);
    }
    {
      acti_vity.length == 0 ? setform_err2(true) : setform_err2(false);
    }
    {
      pro_ject.length == 0 ? setform_err3(true) : setform_err3(false);
    }
    {
      task_type.length == 0 ? setform_err4(true) : setform_err4(false);
    }
    {
      wrk_detls.length == 0 ? setform_err5(true) : setform_err5(false);
    }
    {
      strt_time.length == 0 ? setform_err6(true) : setform_err6(false);
    }
    {
      end_time.length == 0 ? setform_err7(true) : setform_err7(false);
    }
    {
      status.length == 0 ? setform_err8(true) : setform_err8(false);
    }

    if (
      (task_ref &&
        acti_vity &&
        pro_ject &&
        wrk_detls &&
        task_type &&
        strt_time &&
        end_time &&
        status) != 0
    ) {
      axios.post("http://localhost:5000/post/taskdetails", Task_Data).then((res) => {
        alert(res.data.message)
        window.location.reload();
      });
    } else {
      alert("required data");
    }
  };

  

  logintime();
  return (
    <Transitions>
      <DashboardLayout>
        <DashboardNavbar />
        <div className="mytask_parent">
          <form onSubmit={TaskSubmit}>
            <div>
              <div className="text-center">My task </div>
            </div>
            <div className="mytask_child_two">
              <div className="mytask_child_two_2">
                <div>
                  <div className="h6 ps-2">task reference</div>
                  <select
                    value={task_ref}
                    name="task_ref"
                    onChange={(e) => {
                      settask_ref(e.target.value);
                      {
                        e.target.value.length != 0 ? setform_err1(false) : "";
                      }
                    }}
                    style={form_err1 ? { boxShadow: " 0 0 5px  red" } : {}}
                  >
                    <option selected>--select--</option>
                    <option>task reference1</option>
                    <option>task reference2</option>
                    <option>task reference3</option>
                    <option>task reference4</option>
                  </select>
                </div>
                <div>
                  <div className="h6 ps-2">activity</div>
                  <select
                    value={acti_vity}
                    name="acti_vity"
                    onChange={(e) => {
                      setacti_vity(e.target.value);
                      {
                        e.target.value.length != 0 ? setform_err2(false) : "";
                      }
                    }}
                    style={form_err2 ? { boxShadow: " 0 0 5px  red" } : {}}
                  >
                    <option selected>--select--</option>
                    <option>Designing</option>
                    <option>Development</option>
                    <option>Back-End</option>
                    <option>Database</option>
                  </select>
                </div>
              </div>
              <div className="mytask_child_two_2">
                <div>
                  <div className="h6 ps-2">project</div>
                  <select
                    value={pro_ject}
                    name="pro_ject"
                    onChange={(e) => {
                      setpro_ject(e.target.value);
                      {
                        e.target.value.length != 0 ? setform_err3(false) : "";
                      }
                    }}
                    style={form_err3 ? { boxShadow: " 0 0 5px  red" } : {}}
                  >
                    <option selected>--select--</option>
                    <option>Msts Intra Connect</option>
                    <option>Maritech International Research Oil</option>
                    <option>Upcoming</option>
                  </select>
                </div>

                <div className="mytask_child_two_1">
                  <div>
                    <div className="h6 ps-2">task type</div>{" "}
                    <select
                      style={form_err4 ? { boxShadow: " 0 0 5px  red" } : {}}
                      placeholder=" Enter task type"
                      value={task_type}
                      name="task_type"
                      onChange={(e) => {
                        settask_type(e.target.value);
                        {
                          e.target.value.length != 0 ? setform_err4(false) : "";
                        }
                      }}
                    >
                      <option selected>--select--</option>
                      <option>Development</option>
                      <option>RND</option>
                      <option>Client Meeting</option>
                      <option>Marketing</option>
                      <option>Internal Meeting</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="wrkDetails_texarea">
                <div>
                  <div className="h6 ps-2">work details</div>{" "}
                  <textarea
                    style={form_err5 ? { boxShadow: " 0 0 5px  red" } : {}}
                    placeholder=" workdetails"
                    value={wrk_detls}
                    name="wrk_detls"
                    onChange={(e) => {
                      setwrk_detls(e.target.value);
                      {
                        e.target.value.length != 0 ? setform_err5(false) : "";
                      }
                    }}
                  ></textarea>
                </div>
              </div>
              <div className="mytask_child_two_2">
                <div>
                  <span className="h6 ps-2">Start Time</span>
                  <br></br>{" "}
                  <input
                    style={form_err6 ? { boxShadow: " 0 0 5px  red" } : {}}
                    placeholder="Enter start time"
                    type="datetime-local"
                    value={strt_time}
                    name="strt_time"
                    onChange={handleStartTime}
                  ></input>
                </div>
                <div>
                  <span className="h6 ps-2">End Time</span>
                  <br></br>
                  <div className="mytask_child_two_endtime">
                    <input type="Date" value={strt_time_Date}  onChange={(e) => {set_strt_Time_Date(e.target.value)}} />
                    <input
                      style={form_err7 ? { boxShadow: " 0 0 5px  red" } : {}}
                      placeholder="Enter end time"
                      type="time"
                      name="end_time"
                      onChange={handleChange}
                      disabled={!strt_time}
                      //    (e) => {
                      //    setend_time(e.target.value);
                      //     {
                      //      e.target.value.length != 0 ? setform_err7(false) : "";
                      //     }
                      //  }
                    ></input>
                  </div>
                </div>
              </div>
              <div className="mytask_child_two_1">
                <div className={ !end_time ? "d-none" : "d-flex flex-column "}>
                  <div className="h6 ps-2">Duration</div>
                  <input
                    value={duration}
                    disabled
                    type="text"
                    // value={task_type}
                    // name="task_type"
                    // onChange={(e) => {
                    //   settask_type(e.target.value);
                    //   {
                    //     e.target.value.length != 0 ? setform_err4(false) : "";
                    //   }
                    // }}
                  ></input>
                </div>
              </div>
              <div>
                <div className="h6 ps-2">status</div>
                <select
                  value={status}
                  name="status"
                  onChange={(e) => {
                    setstatus(e.target.value);
                    {
                      e.target.value.length != 0 ? setform_err8(false) : "";
                    }
                  }}
                  style={form_err8 ? { boxShadow: " 0 0 5px  red" } : {}}
                >
                  <option selected>--select--</option>
                  <option>On Progress</option>
                  <option>Complete</option>
                </select>
              </div>
              <div className="text-center">
                <button type="submit" className="task_button" style={{ fontWeight: "bold" }}>
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
        </div>
      </DashboardLayout>
    </Transitions>
  );
}

export default Billing;
