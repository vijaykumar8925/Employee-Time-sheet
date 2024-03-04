import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const BirthdayTime = () => {
  const [data, setdata] = useState([]);

  try {
    axios.get(`http://localhost:8000/cron/birthday/message/`).then((res) => {
      setdata(res.data);
    });
  } catch (err) {
    console.log(err);
  }
};

export default BirthdayTime;
