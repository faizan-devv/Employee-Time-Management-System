
const RegisterRegularUser = (Cred, token) => async (dispatch) => {
  dispatch({
    type: "RegisterRegularUser",
  });
  try {
    let authToken = 'Bearer ' + token;
    const response = await fetch('http://34.210.129.167/api/users', {
      method: 'POST',
      body: JSON.stringify(Cred),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': authToken
      }
    });
    const registerResponse = await response.json();
    dispatch({ type: "RegisterRegularUser_SUCCESS", payload: registerResponse });
  }
  catch (error) {
    dispatch({ type: "RegisterRegularUser_FAILURE", payload: error });
  }
};

const UpdateUser = (token, id, cred) => async (dispatch) => {
  dispatch({
    type: "UPDATEUSER",
  });
  try {

    let authToken = 'Bearer ' + token;
    const url = "http://34.210.129.167/api/users/" + id;
    const response = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(cred),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': authToken
      }
    });
    const Response = await response.json();
    dispatch({ type: "UPDATEUSER_SUCCESS", payload: Response });
  }
  catch (error) {
    dispatch({ type: "UPDATEUSER_FAILURE", payload: error });
  }
};

const DeleteUser = (token, id) => async (dispatch) => {
  dispatch({
    type: "DELETE_USER",
  });
  try {

    let authToken = 'Bearer ' + token;
    const url = "http://34.210.129.167/api/users/" + id;
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': authToken
      }
    });
    const Response = await response.json();
    dispatch({ type: "DELETEUSER_SUCCESS", payload: Response });
  }
  catch (error) {
    dispatch({ type: "DELETEUSER_FAILURE", payload: error });
  }
};



const RegularUserAction = {
  RegisterRegularUser,
  UpdateUser,
  DeleteUser,
};

export default RegularUserAction;