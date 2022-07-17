import { authconstant } from "../constants/constants";
import axiosinstance from "../helpers/axios";

//SIGNUP
export const signupuser = (formdata) => {
  return async (dispatch) => {
    try {
      dispatch({ type: authconstant.USERSIGNUPREQUEST });
      const res = await axiosinstance.post("https://vyorius.herokuapp.com/user/signup", formdata);
      console.log(res);
      if (res.status === 200) {
        const { token, user } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        dispatch({
          type: authconstant.USERSIGNUPSUCCESS,
          payload: {
            token,
            user,
          },
        });
      }
      if (res.status === 400) {
        const { error } = res.data;
        dispatch({
          type: authconstant.USERSIGNUPFAILURE,
          payload: { error },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};
//LOGIN
export const loginuser = (formdata) => {
  return async (dispatch) => {
    try {
      dispatch({ type: authconstant.USERLOGINREQUEST });
      const res = await axiosinstance.post("https://vyorius.herokuapp.com/user/signin", formdata);
      console.log(res);
      if (res.status === 200) {
        const { token, user } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        dispatch({
          type: authconstant.USERLOGINSUCCESS,
          payload: {
            token,
            user,
          },
        });
      }
      if (res.status === 400) {
        const { error } = res.data;
        dispatch({
          type: authconstant.USERLOGINFAILURE,
          payload: { error },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};
//LOGOUT
export const logoutuser = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: authconstant.USERLOGOUTREQUEST });
      const res = await axiosinstance.post("https://vyorius.herokuapp.com/user/logout");
      console.log(res);
      if (res.status === 200) {
        dispatch({
          type: authconstant.USERLOGOUTSUCCESS,
        });
      }
      if (res.status === 400) {
        const { error } = res.data;
        dispatch({
          type: authconstant.USERLOGOUTFAILURE,
          payload: { error },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};
