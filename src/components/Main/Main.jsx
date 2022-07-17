import React, {  useState } from "react";
import "./main.css";
import { useDispatch } from "react-redux";
import { logoutuser } from "../../actions/authactions";
import { useNavigate } from "react-router-dom";
import Task from "../Task/Taskmodal";
import { addtask, getalltask, getmytasks } from "../../actions/taskactions";
import MyTask from "../MyTasks/MyTask";
import AllTasks from "../AllTasks/AllTasks";

const Main = () => {
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

  const [mytask, setmytask] = useState(false);
  const [alltask, setalltask] = useState(false);
  const [showbtn, setshowbtn] = useState("block");

  const logoutusers = () => {
    dispatch(logoutuser());
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handlemodal = () => {
    setModalShow(true);
  };
  const userid = JSON.parse(localStorage.getItem("user"))._id;

  const dispatch = useDispatch();
  const handlesaveinfo = () => {
    setModalShow(false);
    const taskobj = { title, description, userid };
    dispatch(addtask(taskobj));
  };

  const handlemytask = () => {
    setmytask(true);
    setalltask(false);
    dispatch(getmytasks(userid));
  };

  const handlealltask = () => {
    setshowbtn("none");
    setmytask(false);
    dispatch(getalltask());
    setalltask(true);
  };

  return (
    <>
      <div className="header">
        <div className="headerwrapper">
          <div className="left">
            <div className="logo">Vyorius</div>
          </div>
          <div className="right">
            <div className="btnwrapper">
              <button className="addtask" onClick={handlemodal}>
                New Task
              </button>
              <button className="mytask" onClick={handlemytask}>
                My Tasks
              </button>
              <button className="alltask" onClick={handlealltask}>
                All Users Tasks
              </button>
              <button className="logout" onClick={logoutusers}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="tasklist">
        {mytask === alltask ? <div className="welcome">Welcome</div> : <></>}
        {mytask ? <MyTask /> : <></>}
        {alltask ? <AllTasks showbtn={showbtn} /> : <></>}
      </div>

      <Task
        title={title}
        description={description}
        settitle={settitle}
        setdesc={setdescription}
        open={modalShow}
        onHide={() => setModalShow(false)}
        onSave={() => handlesaveinfo()}
      />
    </>
  );
};

export default Main;
