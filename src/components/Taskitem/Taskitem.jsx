import React, { useState } from "react";
import "./taskitem.css";
import { useDispatch, useSelector } from "react-redux";
import { deletetasks, updatetasks } from "../../actions/taskactions";
import Task from "../Task/Taskmodal";
import dateFormat from "dateformat";

const Taskitem = ({ taskitem, showbtn }) => {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

  const handledeleteitem = () => {
    console.log(taskitem._id);
    dispatch(deletetasks(taskitem._id));
  };
  const handleupdateitem = () => {
    setModalShow(true);
  };

  const handleupdateinfo = () => {
    setModalShow(false);
    const taskobj = { title, description };
    const taskid = taskitem._id;
    console.log(taskid);
    dispatch(updatetasks(taskobj, taskid));
  };

  const date = dateFormat(taskitem.createdAt, "mmmm dS, yyyy");

  return (
    <>
      <div className="taskitem">
        <Task
          title={title}
          description={description}
          settitle={settitle}
          setdesc={setdescription}
          open={modalShow}
          onHide={() => setModalShow(false)}
          onSave={() => handleupdateinfo()}
        />
        <div className="left"></div>
        <div className="taskitemwrapper">
          <div className="top">
            <span className="title">{taskitem.title}</span>
            <span className="date">
              <i className="bx bxs-calendar"></i> &nbsp;
              {date}
            </span>
          </div>
          <div className="bottom">
            <span>{taskitem.description}</span>
          </div>
        </div>
        <div className="right">
          <button
            className="update"
            onClick={handleupdateitem}
            style={{ display: showbtn }}
          >
            UPDATE
          </button>
          <button
            className="delete"
            onClick={handledeleteitem}
            style={{ display: showbtn }}
          >
            DELETE
          </button>
        </div>
      </div>
    </>
  );
};

export default Taskitem;
