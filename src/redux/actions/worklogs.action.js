const CreateWorkLog = (logData, token) => async (dispatch) => {
    dispatch({
      type: "CREATE_WORK_LOG",
    });
    try {
      let authToken = 'Bearer ' + token;
      const response = await fetch('http://34.210.129.167/api/work-logs', {
        method: 'POST',
        body: JSON.stringify(logData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Authorization': authToken
        }
      });
      const Response = await response.json();
      dispatch({ type: "CREATE_WORK_LOG_SUCCESS", payload: Response });
    }
    catch (error) {
      dispatch({ type: "CREATE_WORK_LOG_FAILURE", payload: error });
    }
  };

  const UpdateWorkLog = (logData, token, id, logId) => async (dispatch) => {
    dispatch({
      type: "UPDATE_WORK_LOG",
    });
    try {
      let authToken = 'Bearer ' + token;
      const response = await fetch('http://34.210.129.167/api/user/'+ id+ '/work-logs/'+ logId, {
        method: 'PUT',
        body: JSON.stringify(logData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Authorization': authToken
        }
      });
      const Response = await response.json();
      dispatch({ type: "UPDATE_WORK_LOG_SUCCESS", payload: Response });
    }
    catch (error) {
      dispatch({ type: "UPDATE_WORK_LOG_FAILURE", payload: error });
    }
  };
  
  const UpdateWorkingHours = (workingHours,userID, token) => async (dispatch) => {
    dispatch({
      type: "UPDATE_WORKING_HOURS",
    });
    try {
      let authToken = 'Bearer ' + token;
      const response = await fetch('http://34.210.129.167/api/users/' + userID + '/preferred-working-hours', {
        method: 'PATCH',
        body: JSON.stringify(workingHours),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Authorization': authToken
        }
      });
      const Response = await response.json();
      if(Response.success === true)
      {
        localStorage.setItem('workHours', workingHours.workingHours);
      }
      dispatch({ type: "UPDATE_WORKING_HOURS_SUCCESS", payload: Response });
    }
    catch (error) {
      dispatch({ type: "UPDATE_WORKING_HOURS_FAILURE", payload: error });
    }
  };
  
  const WorklogsAction = {
    CreateWorkLog,
    UpdateWorkLog,
    UpdateWorkingHours
  };
  
  export default WorklogsAction;