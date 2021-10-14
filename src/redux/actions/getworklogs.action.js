const getWorkLogs = (id, pageNum, token) => async (dispatch) => {
    dispatch({
      type: "GET_WORK_LOGS",
    });
    try {
      let authToken = 'Bearer ' + token;
      const response = await fetch('http://34.210.129.167/api/user/'+ id +'/work-logs?page='+ pageNum, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Authorization': authToken
        }
      });
      const Response = await response.json();
      dispatch({ type: "GET_WORK_LOGS_SUCCESS", payload: Response });
    }
    catch (error) {
      dispatch({ type: "GET_WORK_LOGS_FAILURE", payload: error });
    }
  };

  const GetWorkLogsAction = {
    getWorkLogs
  }
  export default GetWorkLogsAction;