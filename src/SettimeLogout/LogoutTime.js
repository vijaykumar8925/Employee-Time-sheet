import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const logintime = () => {
  const navigate = useNavigate();
  const [mousePos, setMousePos] = useState({});
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.removeItem("role");
      localStorage.removeItem("email");
      localStorage.removeItem("token");
      localStorage.removeItem("data");
      localStorage.removeItem("profile");
      localStorage.removeItem("logintime");
      navigate("/", { replace: true });
    }, 2000000);
    return () => clearTimeout(timer);
  }, [mousePos]);
};
export default logintime;
