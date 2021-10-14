const registerManager = (userData) => async (dispatch) => {
  dispatch({
    type: "REGISTER_USER",
  });
  try {
    const response = await fetch('http://34.210.129.167/api/register', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });
    const registerResponse = await response.json();
   
    dispatch({ type: "REGISTER_USER_SUCCESS", payload: registerResponse });
  }
  catch (error) {
    
    dispatch({ type: "REGISTER_USER_FAILURE", payload: error });
  }
};

const registerManagerAction = {
  registerManager,
};

export default registerManagerAction;