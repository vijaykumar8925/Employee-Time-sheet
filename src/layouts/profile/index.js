import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import axios from "axios";
import "./Leavereq.css";
import { useRef, useState, useEffect } from "react";
import Transitions from "animation/Transition";
function Overview() {
  let Val = [];
  let x = 0.5;
  for (var i = x; i < 30.5; i += 0.5) {
    Val.push(i);
    
  } 

  const [hide, setHide] = useState(false);
  const [date, setDate] = useState("");
  const [dateOpt, setDateOpt] = useState("");
  const [days, setDays] = useState("");
  const [monthCount, setMonthCount] = useState("");
  const [daysTotal, setDaysTotal] = useState("");
  const [months, setMonths] = useState("");
  const [resultMon, setResultMon] = useState("");
  const [resultDay, setResultDay] = useState("");
  const [resultYear, setResultYear] = useState("");
  const [opt, setOpt] = useState(true);
  const [whole, setWhole] = useState("");
  const [checking, setChecking] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [reason, setReason] = useState("");
  const [remarks, setRemarks] = useState("");
  const [oneDay, setOneDay] = useState("");
  const [oneDay1, setOneDay1] = useState("");
  const [oneDay2, setOneDay2] = useState("");
  const [optHide, setOptHide] = useState(true);
  const [optHide1, setOptHide1] = useState(true);
  const [email,setemail] = useState('')

  console.log(days);
  console.log(typeof whole);
  console.log(checking);

  

  function usePrevious() {
    const ref = useRef();
    useEffect(() => {
      ref.current = checking;
    });
    return ref.current;
  }

  const prevCount = usePrevious();
  console.log(prevCount);

  console.log(resultMon + "-" + resultDay + "-" + resultYear);

  //  let arrey = [resultDay,resultMon,resultDay1,resultDay2,resultDay3,resultDay4,resultDay5,resultDay6]

  const handleChange = (e) => {
    let idea = e.target.value;
    setWhole(e.target.value);
    if (e.target.value > 0.5) {
      setHide(true);
    } else {
      setHide(false);
    }
    setDays(e.target.value);
    if (Number.isInteger(+idea) == true) {
      setDays(idea);
      // console.log('Roanldo')
    } else {
      setDays(+idea + 0.5);
      // console.log('messi')
    }

    if (Number.isInteger(+idea) == true && +idea >= 1) {
      setOptHide(false);
    }
    if (Number.isInteger(+idea) != true) {
      setOptHide(false);
    }
  };

  const handleFrom = (e) => {
    //  console.log(e.target.value.getDate())

    let result = e.target.value;
    let value = result.split("-");
    let total = +value[2] + +days;
    setDaysTotal(total);
    //  console.log(total)
    setMonths(+value[1]);
    setOneDay(+value[2]);
    setOneDay2(+value[0]);
    setFromDate(result);
    setChecking("Select Session");
    setMonthCount('');

    let date = new Date(result);
    let month = value[1];
    let year = value[0];

    let sanju = new Date(year, month, 0).getDate();
    let cal = new Date(year, month, 1).getMonth();
    setOneDay1(sanju);

    // Days Calculation

    if ((sanju == 31 || sanju == 30 || sanju == 29 || sanju == 28) && +whole == 1) {
      setResultMon("");
      setResultDay("");
      setResultYear("");
    }

    if (sanju == 31 && total == 32 && +whole > 1) {
      setResultMon(total - 1);
    }

    if (sanju == 31 && total > 32 && +whole > 1) {
      setResultMon(total - 32);
    }

    if (sanju == 31 && total <= 31 && +whole > 1) {
      setResultMon(total - 1);
    }

    if (sanju == 30 && total == 31 && +whole > 1) {
      setResultMon(total - 1);
    }

    if (sanju == 30 && total > 31 && +whole > 1) {
      setResultMon(total - 31);
    }

    if (sanju == 30 && total <= 30 && +whole > 1) {
      setResultMon(total - 1);
    }

    if (sanju == 29 && total == 30 && +whole > 1) {
      setResultMon(total - 1);
    }

    if (sanju == 29 && total > 30 && +whole > 1) {
      setResultMon(total - 30);
    }

    if (sanju == 29 && total <= 29 && +whole > 1) {
      setResultMon(total - 1);
    }

    if (sanju == 28 && total == 29 && +whole > 1) {
      setResultMon(total - 1);
    }

    if (sanju == 28 && total > 29 && +whole > 1) {
      setResultMon(total - 29);
    }

    if (sanju == 28 && total <= 28 && +whole > 1) {
      setResultMon(total - 1);
    }

    if (Number.isInteger(+whole) != true) {
      setMonthCount("Forenoon");
    }

    // month calculation

    if (sanju == 31 && total > 32 && +whole > 1) {
      setResultDay(+value[1] + 1);
    }

    if (sanju == 31 && total <= 32 && +whole > 1) {
      setResultDay(+value[1]);
    }

    if (sanju == 30 && total > 31 && +whole > 1) {
      setResultDay(+value[1] + 1);
    }

    if (sanju == 30 && total <= 31 && +whole > 1) {
      setResultDay(+value[1]);
    }

    if (sanju == 29 && total > 30 && +whole > 1) {
      setResultDay(+value[1] + 1);
    }

    if (sanju == 29 && total <= 30 && +whole > 1) {
      setResultDay(+value[1]);
    }

    if (sanju == 28 && total > 29 && +whole > 1) {
      setResultDay(+value[1] + 1);
    }

    if (sanju == 28 && total <= 29 && +whole > 1) {
      setResultDay(+value[1]);
    }

    if (cal == 0 && total > 32 && +whole > 1) {
      setResultDay(+value[1] - 11);
      console.log("last month");
    }

    // Year Calculation

    if (+value[1] == 12 && total > 32 && +whole > 1) {
      setResultYear(+value[0] + 1);
    }

    if (+value[1] == 12 && total < 32 && +whole > 1) {
      setResultYear(+value[0]);
    }

    if (+value[1] == 12 && total == 32 && +whole > 1) {
      setResultYear(+value[0]);
    }

    if (+value[1] < 12 && +whole > 1) {
      setResultYear(+value[0]);
    }
  };

  const handleSelect = (e) => {
    let noon = e.target.value;
    setChecking(noon);

    if (+whole == 1 && noon == "afternoon" && Number.isInteger(+whole) == true) {
      setResultMon(oneDay + 1);
      setResultDay(months);
      setResultYear(oneDay2);
    }



    if (
      +whole > 1 &&
      oneDay1 == 31 &&
      resultMon <= 30 &&
      noon == "afternoon" &&
      Number.isInteger(+whole) == true
    ) {
      setResultMon(resultMon + 1);
    }

    if (
      +whole > 1 &&
      oneDay1 == 30 &&
      resultMon <= 29 &&
      noon == "afternoon" &&
      Number.isInteger(+whole) == true
    ) {
      setResultMon(resultMon + 1);
    }

    if (
      +whole > 1 &&
      oneDay1 == 29 &&
      resultMon <= 28 &&
      noon == "afternoon" &&
      Number.isInteger(+whole) == true
    ) {
      setResultMon(resultMon + 1);
    }

    if (
      +whole > 1 &&
      oneDay1 == 28 &&
      resultMon <= 27 &&
      noon == "afternoon" &&
      Number.isInteger(+whole) == true
    ) {
      setResultMon(resultMon + 1);
    }

    if (oneDay1 == 31 && oneDay == 31 && +whole == 1 && noon == "afternoon" && +months < 12) {
      setResultMon(oneDay - 30);
      setResultDay(months + 1);
      setResultYear(oneDay2);
    }

    if (oneDay1 == 31 && oneDay == 31 && +whole == 1 && noon == "afternoon" && +months == 12) {
      setResultMon(oneDay - 30);
      setResultDay(months - 11);
      setResultYear(oneDay2 + 1);
    }

    if (oneDay1 == 30 && oneDay == 30 && +whole == 1 && noon == "afternoon" && +months < 12) {
      setResultMon(oneDay - 29);
      setResultDay(months + 1);
      setResultYear(oneDay2);
    }

    if (oneDay1 == 29 && oneDay == 29 && +whole == 1 && noon == "afternoon" && +months < 12) {
      setResultMon(oneDay - 28);
      setResultDay(months + 1);
      setResultYear(oneDay2);
    }

    if (oneDay1 == 28 && oneDay == 28 && +whole == 1 && noon == "afternoon" && +months < 12) {
      setResultMon(oneDay - 27);
      setResultDay(months + 1);
      setResultYear(oneDay2);
    }

    if (oneDay1 == 31 && resultMon == 1 && +whole > 1 && noon == "Select Session" && +months < 12 && Number.isInteger(+whole) == true) {
      setResultMon(resultMon + 30);
      setResultDay(resultDay - 1);
    }

     if (oneDay1 == 31 && resultMon == 1 && +whole > 1 && noon == "Select Session" && +months == 12 && Number.isInteger(+whole) == true) {
      setResultMon(resultMon + 30);
      setResultDay(resultDay + 11);
      setResultYear(resultYear - 1)
    }

    if (oneDay1 == 30 && resultMon == 1 && +whole > 1 && noon == "Select Session" && +months < 12  && Number.isInteger(+whole) == true) {
      setResultMon(resultMon + 29);
      setResultDay(resultDay - 1);
    }

    if (oneDay1 == 29 && resultMon == 1 && +whole > 1 && noon == "Select Session" && +months < 12  && Number.isInteger(+whole) == true) {
      setResultMon(resultMon + 28);
      setResultDay(resultDay - 1);
    }

    if (oneDay1 == 28 && resultMon == 1 && +whole > 1 && noon == "Select Session" && +months < 12  && Number.isInteger(+whole) == true) {
      setResultMon(resultMon + 27);
      setResultDay(resultDay - 1);
    }
    
    if (oneDay1 == 31 && resultMon == 31 && +whole > 1 && noon == "afternoon" && +months < 12 && Number.isInteger(+whole) == true) {
      setResultMon(resultMon - 30);
      setResultDay(resultDay + 1);
    }

     if (oneDay1 == 31 && resultMon == 31 && +whole > 1 && noon == "afternoon" && +months == 12 && Number.isInteger(+whole) == true) {
      setResultMon(resultMon - 30);
      setResultDay(resultDay - 11);
      setResultYear(resultYear + 1)
    }
    

    if (oneDay1 == 30 && resultMon == 30 && +whole > 1 && noon == "afternoon" && +months < 12 && Number.isInteger(+whole) == true ) {
      setResultMon(resultMon - 29);
      setResultDay(resultDay + 1);
    }

    if (oneDay1 == 29 && resultMon == 29 && +whole > 1 && noon == "afternoon" && +months < 12 && Number.isInteger(+whole) == true) {
      setResultMon(resultMon - 28);
      setResultDay(resultDay + 1);
    }

    if (oneDay1 == 28 && resultMon == 28 && +whole > 1 && noon == "afternoon" && +months < 12 && Number.isInteger(+whole) == true) {
      setResultMon(resultMon - 27);
      setResultDay(resultDay + 1);
    }

    if (noon == "afternoon" && Number.isInteger(+whole) == true) {
      setMonthCount("Forenoon");
    }

    if (noon == "Select Session" && Number.isInteger(+whole) == true && +whole > 1 && resultMon > 1 ) {
      setMonthCount("");
      setResultMon(resultMon - 1);
    }

    if (noon == "Select Session" && +whole == 1) {
      setResultMon("");
      setResultDay("");
      setResultYear("");
      setMonthCount("");
    }

    if (noon == "afternoon" && Number.isInteger(+whole) != true) {
      setMonthCount("");
    }

    if (noon == "Select Session" && Number.isInteger(+whole) != true) {
      setMonthCount("Forenoon");
    }

    if (noon == "Select Session" && Number.isInteger(+whole) == true) {
      setMonthCount("");
    }

    if (monthCount == "" && Number.isInteger(+whole) == true) {
      console.log("i am in");
    }
  };

  useEffect(()=>{
    setemail(localStorage.getItem('mails'))
  },[])

  const leaveRequestSubmit = (event) => {
    event.preventDefault();
    let Leaverequest_Data = {
      days: whole,
      date: date,
      dateopt: dateOpt,
      fromdate: fromDate,
      fromsession: checking,
      todate: `${resultYear}-${resultDay}-${resultMon}`,
      tosession: monthCount,
      email : email,
      reason: reason,
      remarks: remarks,
    };
    if (
      (days &&
        //  date &&
        //  dateOpt &&
        fromDate &&
        checking &&
        resultMon &&
        resultDay &&
        resultYear &&
        reason) != 0
    ) {
      axios.post("http://localhost:5000/post/leavedetails", Leaverequest_Data).then((res) => {
       alert(res.data.message)
       window.location.reload()
      })
      ;
    } else {
      alert("required data");
    }
  };

  return (
    <Transitions>
      <DashboardLayout>
        <DashboardNavbar />
        <div>
          <form onSubmit={leaveRequestSubmit}>
            <div className="leavereq_parent">
              <div className="leave_header">
                <div>Leave Request</div>
              </div>
              <div className="leavereq_child_two">
                <div className="leavereq_child_two_2">
                  <div className="h6 ps-2">No of Days</div>
                  <select onChange={handleChange} >
                    <option value="" disabled selected>
                      Select Days
                    </option>
                    {Val.map((value, index) => (
                      <option key={index}>{value}</option>
                    ))}
                  </select>
                </div>
                {!hide && (
                  <div className="leavereq_child_two_3">
                    <div className="h6 ps-2">Date</div>
                    <div style={{ display: "flex" }}>
                      <div>
                        <input
                          id="second"
                          placeholder="Day"
                          type="date"
                          onChange={(e) => {
                            setDate(e.target.value);
                          }}
                        ></input>
                      </div>
                      <div>
                        <select
                          onChange={(e) => {
                            setDateOpt(e.target.value);
                          }}
                        >
                          <option selected>select session</option>
                          <option>Forenoon</option>
                          <option>afternoon</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {hide && (
                  <div className="leavereq_child_two_4">
                    <div className="h6 ps-2">From Date</div>
                    <div style={{ display: "flex" }}>
                      <div>
                        <input
                          onChange={handleFrom}
                          id="time"
                          placeholder="from"
                          type="date"
                        ></input>
                      </div>
                      <div>
                        <select value={checking} onChange={handleSelect}>
                          <option selected>Select Session</option>
                          {optHide && <option>Forenoon</option>}
                          <option>afternoon</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {hide && (
                  <div className="leavereq_child_two_4">
                    <div className="h6 ps-2">To Date</div>
                    <div style={{ display: "flex" }}>
                      <div >
                        <input value={resultMon + "-" + resultDay + "-" + resultYear} style={{ color: "gray" }} type="text"/>
                      </div>
                      <div>
                        <input className="box" id='input' value={monthCount} style={{ color: "gray" }} type="text">
                        </input>
                      </div>
                    </div>
                  </div>
                )}
                <div className="leavereq_child_two_1">
                  <div className="h6 ps-2">Reason</div>
                  <div>
                    <textarea
                      onChange={(e) => {
                        setReason(e.target.value);
                      }}
                    ></textarea>
                  </div>
                </div>
                <div className="leavereq_child_two_1">
                  <div className="h6 ps-2">Remarks</div>
                  <div>
                    <textarea
                      onChange={(e) => {
                        setRemarks(e.target.value);
                      }}
                    ></textarea>
                  </div>
                </div>
                <div className="leavereq_child_two_5">
                  <div className="text-center">
                    <button type="submit" style={{fontWeight:'bold'}}>SUBMIT</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </DashboardLayout>
    </Transitions>
  );
}

export default Overview;
