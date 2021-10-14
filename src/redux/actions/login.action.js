const Login = (loginCred) => async (dispatch) => {
  dispatch({
    type: "LOGIN",
  });
  try {
    const response = await fetch('http://34.210.129.167/api/login', {
      method: 'POST',
      body: JSON.stringify(loginCred),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });
    const loginResponse = await response.json();
    dispatch({ type: "LOGIN_SUCCESS", payload: loginResponse });
  }
  catch (error) {
    dispatch({ type: "LOGIN_FAILURE", payload: error });
  }
};

const LoginAction = {
  Login,
};

export default LoginAction;