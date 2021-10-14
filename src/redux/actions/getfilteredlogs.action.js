const getFilteredLogs = (to, from, token) => async (dispatch) => {
    dispatch({
      type: "GET_FILTERED_LOGS",
    });
    try {
      let authToken = 'Bearer ' + token;
      const response = await fetch('http://34.210.129.167/api/work-logs/' + from + '/' + to, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Authorization': authToken
        }
      });
      const Response = await response.json();
      dispatch({ type: "GET_FILTERED_LOGS_SUCCESS", payload: Response });
    }
    catch (error) {
      dispatch({ type: "GET_FILTERED_LOGS_FAILURE", payload: error });
    }
  };

  const GetFilteredLogsAction = {
    getFilteredLogs
  }
  export default GetFilteredLogsAction;