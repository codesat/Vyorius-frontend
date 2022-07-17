import { taskconstant } from "../constants/constants";
import axiosinstance from "../helpers/axios";

//ADD
export const addtask = (taskobj) => {
  return async (dispatch) => {
    try {
      dispatch({ type: taskconstant.ADDTASKREQUEST });
      const res = await axiosinstance.post("https://vyorius.herokuapp.com/task/add", { ...taskobj });
      console.log(res);
      if (res.status === 200) {
        const { title, description, userid } = res.data;
        dispatch({
          type: taskconstant.ADDTASKSUCCESS,
          payload: {
            title,
            description,
            userid,
          },
        });
      }
      if (res.status === 400) {
        const { error } = res.data;
        dispatch({
          type: taskconstant.ADDTASKFAILURE,
          payload: { error },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};
//DELETETASK
export const deletetask = (taskobj, id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: taskconstant.DELETETASKREQUEST });
      const res = await axiosinstance.post(`https://vyorius.herokuapp.com/task/remove/${id}`, taskobj);
      console.log(res);
      if (res.status === 200) {
        dispatch({
          type: taskconstant.DELETETASKSUCCESS,
        });
      }
      if (res.status === 400) {
        const { error } = res.data;
        dispatch({
          type: taskconstant.DELETETASKFAILURE,
          payload: { error },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};
//GETMYTASKS
export const getmytasks = (userid) => {
  return async (dispatch) => {
    try {
      dispatch({ type: taskconstant.GETTASKREQUEST });

      const res = await axiosinstance.get(`https://vyorius.herokuapp.com/task/${userid}`);
      console.log(res);
      if (res.status === 200) {
        dispatch({
          type: taskconstant.GETTASKSUCCESS,
          payload: res.data,
        });
      }
      if (res.status === 400) {
        const { error } = res.data;
        dispatch({
          type: taskconstant.GETTASKFAILURE,
          payload: { error },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};
//GETALLTASK
export const getalltask = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: taskconstant.GETALLTASKREQUEST });
      const res = await axiosinstance.get("https://vyorius.herokuapp.com/task");
      console.log(res);
      if (res.status === 200) {
        dispatch({
          type: taskconstant.GETALLTASKSUCCESS,
          payload: res.data,
        });
      }
      if (res.status === 400) {
        const { error } = res.data;
        dispatch({
          type: taskconstant.GETALLTASKFAILURE,
          payload: { error },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};
//UPDATE TAKS
export const updatetasks = (taskobj, taskid) => {
  return async (dispatch) => {
    try {
      dispatch({ type: taskconstant.UPDATETASKREQUEST });

      const res = await axiosinstance.put(`https://vyorius.herokuapp.com/task/update/${taskid}`, taskobj);
      console.log(res);
      if (res.status === 200) {
        const { title, description } = res.data;
        dispatch({
          type: taskconstant.UPDATETASKSUCCESS,
          payload: { title, description },
        });
      }
      if (res.status === 400) {
        const { error } = res.data;
        dispatch({
          type: taskconstant.UPDATETASKFAILURE,
          payload: { error },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};
//DELETETASK
export const deletetasks = (taskid) => {
  return async (dispatch) => {
    try {
      dispatch({ type: taskconstant.DELETETASKREQUEST });

      const res = await axiosinstance.delete(`https://vyorius.herokuapp.com/task/remove/${taskid}`);
      console.log(res);
      if (res.status === 200) {
        dispatch({
          type: taskconstant.DELETETASKSUCCESS,
        });
      }
      if (res.status === 400) {
        const { error } = res.data;
        dispatch({
          type: taskconstant.DELETETASKFAILURE,
          payload: { error },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};
