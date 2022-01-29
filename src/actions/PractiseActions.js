import { GET_NUMBER } from "./ActionTypes";
import axios from "axios";
// export const URL = 'https://dev.dotminds.in/deco-backend-app/api/';

export const getPhoneNo = (number) => {
  return (dispatch) => {
    console.log("phone number lere bitch", number);
    if (!isNaN(Number(number)) && number.length <= 10) {
      dispatch({
        type: GET_NUMBER,
        payload: number,
      });
      if (number.length == 10) {
        console.log("Final number is here");
        var data = {
          phonenumber: number,
        };
        axios({
          method: "post",
          url: "https://dev.dotminds.in/deco-backend-app/api/Login.php",
          data: data,
        })
          .then((response) => {
            if (response.data.success === true) {
              console.log("loginData", response.data);
            }
          })
          .catch(alert("Please check your phone number"));
      }
    }
  };
};
