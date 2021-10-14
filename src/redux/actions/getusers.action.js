
const GetUsers = (token, pageNum) => async (dispatch) => {
  dispatch({
    type: "GETUSERS",
  });
  try {
    let authToken = 'Bearer ' + token;
    const response = await fetch('http://34.210.129.167/api/users?page=' + pageNum, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': authToken
      }
    });
    const Response = await response.json();
    dispatch({ type: "GETUSERS_SUCCESS", payload: Response });
  }
  catch (error) {
    dispatch({ type: "GETUSERS_FAILURE", payload: error });
  }
};

const GetUsersAction = {
  GetUsers
};

export default GetUsersAction;