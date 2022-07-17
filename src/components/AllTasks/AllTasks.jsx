import React from "react";
import "./alltasks.css";
import { useDispatch, useSelector } from "react-redux";
import Taskitem from "../Taskitem/Taskitem";

const AllTasks = ({ showbtn }) => {
  const alltasks = useSelector((state) => state.task).alltask;

  return (
    <div className="alltask">
      <div className="alltaskwrapper">
        <div className="title">ALL TASKS</div>
        <div className="content">
          {alltasks &&
            alltasks.map((task) => (
              <Taskitem key={task._id} taskitem={task} showbtn={showbtn} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default AllTasks;
