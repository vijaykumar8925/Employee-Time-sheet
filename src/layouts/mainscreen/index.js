import "./mainscreencss/Mainscreen.css";
import { Link, useParams } from "react-router-dom";
import { MdFreeBreakfast } from "react-icons/md";
import { SiTask } from "react-icons/si";
import { MdPersonalInjury } from "react-icons/md";
import { HiKey } from "react-icons/hi";
import { IoMdContacts } from "react-icons/io";
import { ImHome } from "react-icons/im";
import { FaThList } from "react-icons/fa";
import { VscTasklist } from "react-icons/vsc";
import { LuLayoutList } from "react-icons/lu";
import { MdPlaylistAddCheckCircle } from "react-icons/md";
import { PiUserListBold } from "react-icons/pi";
import { SiPeerlist } from "react-icons/si";
import { GiMedallist } from "react-icons/gi";
import { FcApproval } from "react-icons/fc";
import { BsFillChatSquareQuoteFill } from "react-icons/bs";
import { BsFillCalendarDayFill } from "react-icons/bs";
import { MdPunchClock } from "react-icons/md";
import { FaExchangeAlt } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { useState } from "react";
import { useEffect } from "react";
import mstslogo from "./mainscreencss/motherslogo.png";
import { useNavigate } from "react-router-dom";
import Transitions from "animation/Transition";
import { io } from "socket.io-client";
import WensocketModel from "examples/models/WensocketModel";
import { useLocation } from "react-router-dom";
function Mainscreen() {
  const [modalShow, setModalShow] = useState(false);
  const [web_msg, setweb_msg] = useState("");
  //   useEffect(()=>{
  //     const socket = io('http://localhost:5000')
  //     socket.on('connect', ()=>console.log('wobsocket connected'))
  //     socket.on('time', (data)=>{
  //        setweb_msg(data)
  //        setModalShow(true)

  //      })
  //     socket.on('disconnect',()=>console.log('server disconnected'))
  //  },[])
  const location = useLocation();
  const data = location.state;
  console.log(location);
  const navigate = useNavigate();
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);
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
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //   localStorage.removeItem("role");
  //   localStorage.removeItem("email");
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("data");
  //   localStorage.removeItem("profile");
  //   localStorage.removeItem("logintime");
  //   navigate("/", { replace: true });
  //   }, 200000000);
  //   return () => clearTimeout(timer);
  // }, [mousePos]);

  console.log(localStorage.getItem('name'))
  console.log(localStorage.getItem('empcode'))
  console.log(localStorage.getItem("mails"))

  return (
    <Transitions>
      <div className="mainscreen_parent">
        <div className="mainscreen_header">
          <div id="header">msts intra connect</div>
          <div>
            <img src={mstslogo} width={50}></img>
          </div>
          <div className="mainscreen_child">
            <BiLogOut
              className="Exit_icon"
              style={{ cursor: "pointer" }}
              size={40}
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("logintime");
                window.location.href = "/authentication/sign-in";
              }}
            />
          </div>
        </div>
        <div className="child_parent">
           <p style={{margin:'0',padding:'0',fontSize:'1rem'}}>Welcome {localStorage.getItem('name')} ({localStorage.getItem('empcode')}) </p>
          <div className="mainscreen_child_1">
            <div className="Button_1">
              <button
                onClick={() => {
                  navigate("/break", { replace: true });
                  window.location.reload()
                }}
              >
                {screenSize.width < 600 ? (
                  <MdFreeBreakfast
                    size={30}
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Break"
                  />
                ) : (
                  <div>
                    <div>
                      <MdFreeBreakfast size={20} />
                    </div>
                    <div>break</div>
                  </div>
                )}
              </button>
            </div>
            <div className="Button_1">
              <button
                onClick={() => {
                  navigate("/mytask", { replace: true });
                  window.location.reload()
                }}
              >
                {screenSize.width < 600 ? (
                  <SiTask
                    size={30}
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="mytask"
                  />
                ) : (
                  <div>
                    <div>
                      <SiTask size={20} />
                    </div>
                    <div>my task</div>
                  </div>
                )}
              </button>
            </div>
            <div className="Button_1">
              <button
                onClick={() => {
                  navigate("/leaverequest", { replace: true });
                  window.location.reload()
                }}
              >
                {screenSize.width < 600 ? (
                  <BsFillCalendarDayFill
                    size={30}
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="leaverequest"
                  />
                ) : (
                  <div>
                    <div>
                      <BsFillCalendarDayFill size={20} />
                    </div>
                    <div>leave request</div>
                  </div>
                )}
              </button>
            </div>
            <div className="Button_1">
              <button
                onClick={() => {
                  navigate("/permissionrequest", { replace: true });
                  window.location.reload()
                }}
              >
                {screenSize.width < 600 ? (
                  <MdPunchClock
                    size={30}
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="permissionrequest"
                  />
                ) : (
                  <div>
                    <div>
                      <MdPunchClock size={20} />
                    </div>
                    <div>permission request</div>
                  </div>
                )}
              </button>
            </div>
          </div>
          <div className="mainscreen_child_2">
            <div className="Button_1">
              <button
                onClick={() => {
                  navigate("/attendance", { replace: true });
                  window.location.reload()
                }}
              >
                {screenSize.width < 600 ? (
                  <IoMdContacts
                    size={30}
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="attencorrection"
                  />
                ) : (
                  <div>
                    <div>
                      <IoMdContacts size={20} />
                    </div>
                    <div>attendance </div>
                  </div>
                )}
              </button>
            </div>
            <div className="Button_1">
              <button
                onClick={() => {
                  navigate("/mybreaklist", { replace: true });
                  window.location.reload()
                }}
              >
                {screenSize.width < 600 ? (
                  <ImHome
                    size={30}
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="mybreaklist"
                  />
                ) : (
                  <div>
                    <div>
                      <ImHome size={20} />
                    </div>
                    <div>my break list</div>
                  </div>
                )}
              </button>
            </div>
            <div className="Button_1">
              <button
                onClick={() => {
                  navigate("/MyTasklist", { replace: true });
                  window.location.reload()
                }}
              >
                {screenSize.width < 600 ? (
                  <FaThList
                    size={30}
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="MyTasklist"
                  />
                ) : (
                  <div>
                    <div>
                      <FaThList size={20} />
                    </div>
                    <div>My Task list</div>
                  </div>
                )}
              </button>
            </div>
            <div className="Button_1">
              <button
                onClick={() => {
                  navigate("/MyleaveRequestList", { replace: true });
                  window.location.reload()
                }}
              >
                {screenSize.width < 600 ? (
                  <VscTasklist
                    size={30}
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="MyleaveRequestList"
                  />
                ) : (
                  <div>
                    <div>
                      <VscTasklist size={20} />
                    </div>
                    <div>Myleave RequestList</div>
                  </div>
                )}
              </button>
            </div>
          </div>
          <div className="mainscreen_child_3">
            <div className="Button_1">
              <button
                onClick={() => {
                  navigate("/mypermissionrequestlist", { replace: true });
                  window.location.reload()
                }}
              >
                {screenSize.width < 600 ? (
                  <LuLayoutList
                    size={30}
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="mypermissionrequestlist"
                  />
                ) : (
                  <div>
                    <div>
                      <LuLayoutList size={20} />
                    </div>
                    <div>mypermission requestlist</div>
                  </div>
                )}
              </button>
            </div>
            <div className="Button_1">
              <button
                onClick={() => {
                  navigate("/attendancelist", { replace: true });
                  window.location.reload()
                }}
              >
                {screenSize.width < 600 ? (
                  <MdPlaylistAddCheckCircle
                    size={30}
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="attendancelist"
                  />
                ) : (
                  <div>
                    <div>
                      <MdPlaylistAddCheckCircle size={20} />
                    </div>
                    <div>attendance list</div>
                  </div>
                )}
              </button>
            </div>

            <Link to="/dashboard">
              {" "}
              <div className="Button_1" style={{ opacity: "0", cursor: "none" }}>
                <button disabled>
                  {screenSize.width < 600 ? (
                    <PiUserListBold
                      size={30}
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="dashboard"
                    />
                  ) : (
                    <div>
                      <div>
                        <PiUserListBold size={20} />
                      </div>
                      <div>dashboard</div>
                    </div>
                  )}
                </button>
              </div>
            </Link>
            <Link to="">
              {" "}
              <div className="Button_1" style={{ opacity: "0", cursor: "none" }}>
                <button disabled>
                  {screenSize.width < 600 ? (
                    <SiPeerlist
                      size={30}
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="permisssionlist"
                    />
                  ) : (
                    <div>
                      <div>
                        <SiPeerlist size={20} />
                      </div>
                      <div>permisssionlist</div>
                    </div>
                  )}
                </button>
              </div>
            </Link>
          </div>
          <hr style={{ color: "red" }}></hr>
          {localStorage.getItem("role") == "admin" && (
            <>
              <div className="mainscreen_child_4">
                <div className="Button_1">
                  <button
                    onClick={() => {
                      navigate("/leaveapproval", { replace: true });
                      window.location.reload()
                    }}
                  >
                    {screenSize.width < 600 ? (
                      <GiMedallist
                        size={30}
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="PermisssionGrandPage"
                      />
                    ) : (
                      <div>
                        <div>
                          <GiMedallist size={20} />
                        </div>
                        <div>Leave approval</div>
                      </div>
                    )}
                  </button>
                </div>
                <div className="Button_1">
                  <button
                    onClick={() => {
                      navigate("/adminpermissionapp", { replace: true });
                      window.location.reload()
                    }}
                  >
                    {screenSize.width < 600 ? (
                      <FcApproval
                        size={30}
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="leaverequestapproval"
                      />
                    ) : (
                      <div>
                        <div>
                          <FcApproval size={20} />
                        </div>
                        <div>permission approval</div>
                      </div>
                    )}
                  </button>
                </div>
                <div className="Button_1">
                  <button
                    onClick={() => {
                      navigate("/adminleaverequestlist", { replace: true });
                      window.location.reload()
                    }}
                  >
                    {screenSize.width < 600 ? (
                      <BsFillChatSquareQuoteFill
                        size={30}
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="permissionrequestapproval"
                      />
                    ) : (
                      <div>
                        <div>
                          <BsFillChatSquareQuoteFill size={20} />
                        </div>
                        <div>leave request list</div>
                      </div>
                    )}
                  </button>
                </div>
                <div className="Button_1">
                  <button
                    onClick={() => {
                      navigate("/adminpermissionrequestlist", { replace: true });
                      window.location.reload()
                    }}
                  >
                    {screenSize.width < 600 ? (
                      <FaExchangeAlt
                        size={30}
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="changeprofile"
                      />
                    ) : (
                      <div>
                        <div>
                          <FaExchangeAlt size={20} />
                        </div>
                        <div>permission request list</div>
                      </div>
                    )}
                  </button>
                </div>
              </div>
              <div className="mainscreen_child_4">
                <div className="Button_1">
                  <button
                    onClick={() => {
                      navigate("/adminleavelist", { replace: true });
                      window.location.reload()
                    }}
                  >
                    {screenSize.width < 600 ? (
                      <GiMedallist
                        size={30}
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="PermisssionGrandPage"
                      />
                    ) : (
                      <div>
                        <div>
                          <GiMedallist size={20} />
                        </div>
                        <div>Leave list</div>
                      </div>
                    )}
                  </button>
                </div>
                <div className="Button_1">
                  <button
                    onClick={() => {
                      navigate("/permisssionlist", { replace: true });
                      window.location.reload()
                    }}
                  >
                    {screenSize.width < 600 ? (
                      <FcApproval
                        size={30}
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="leaverequestapproval"
                      />
                    ) : (
                      <div>
                        <div>
                          <FcApproval size={20} />
                        </div>
                        <div>permission list</div>
                      </div>
                    )}
                  </button>
                </div>
                <div className="Button_1">
                  <button
                    onClick={() => {
                      navigate("/permissionrequestapproval", { replace: true });
                      window.location.reload()
                    }}
                  >
                    {screenSize.width < 600 ? (
                      <BsFillChatSquareQuoteFill
                        size={30}
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="permissionrequestapproval"
                      />
                    ) : (
                      <div>
                        <div>
                          <BsFillChatSquareQuoteFill size={20} />
                        </div>
                        <div>attendance list</div>
                      </div>
                    )}
                  </button>
                </div>
                <Link to="">
                  {" "}
                  <div className="Button_1" style={{ opacity: "0" }}>
                    <button disabled>
                      {screenSize.width < 600 ? (
                        <FaExchangeAlt
                          size={30}
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="changeprofile"
                        />
                      ) : (
                        <div>
                          <div>
                            <FaExchangeAlt size={20} />
                          </div>
                          <div>permission request list</div>
                        </div>
                      )}
                    </button>
                  </div>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
      {/* <WensocketModel
        data={web_msg}
          show={modalShow}
          onHide={() => {setModalShow(false)
          setweb_msg(null)
          }}
    

        /> */}
    </Transitions>
  );
}

export default Mainscreen;
