import { taskconstant } from "../constants/constants";

const initialstate = {
  title: "",
  description: "",
  userid: "",
  task: [],
  alltask: [],
  loading: false,
};

export default (state = initialstate, action) => {

  switch (action.type) {
    case taskconstant.ADDTASKREQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case taskconstant.ADDTASKSUCCESS:
      state = {
        ...state,
        loading: false,
        title: action.payload.title,
        description: action.payload.description,
        userid: action.payload.userid,
      };
      break;

    case taskconstant.ADDTASKFAILURE:
      state = {
        ...state,
        loading: false,
      };
      break;

    //GETTASKS
    case taskconstant.GETTASKREQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case taskconstant.GETTASKSUCCESS:
      state = {
        ...state,
        loading: false,
        task: action.payload,
      };
      break;

    case taskconstant.GETTASKFAILURE:
      state = {
        ...state,
        loading: false,
      };
      break;

    //GETALLTASKS

    case taskconstant.GETALLTASKREQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case taskconstant.GETALLTASKSUCCESS:
      state = {
        ...state,
        loading: false,
        alltask: action.payload,
      };
      break;

    case taskconstant.GETALLTASKFAILURE:
      state = {
        ...state,
        loading: false,
      };
      break;

    //UPDATE TASKS
    case taskconstant.UPDATETASKREQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case taskconstant.UPDATETASKSUCCESS:
      state = {
        ...state,
        loading: false,
        title: action.payload.title,
        description: action.payload.description,
      };
      break;

    case taskconstant.UPDATETASKFAILURE:
      state = {
        ...state,
        loading: false,
      };
      break;
  }

  return state;
};
