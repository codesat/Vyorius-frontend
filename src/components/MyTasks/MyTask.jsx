import React, { useEffect, useState } from "react";
import Taskitem from "../Taskitem/Taskitem";
import "./mytask.css";
import { useSelector } from "react-redux";

const MyTask = () => {
  const mytasks = useSelector((state) => state.task).task;

  return (
    <div className="mytask">
      <div className="mytaskwrapper">
        <div className="title">MY TASKS</div>
        <div className="content">
          {mytasks &&
            mytasks.map((task) => <Taskitem key={task._id} taskitem={task} />)}
        </div>
      </div>
    </div>
  );
};

export default MyTask;
