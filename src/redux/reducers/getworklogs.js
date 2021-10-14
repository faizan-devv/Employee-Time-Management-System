const initialState = {
    apiResponse: {},
    error: null
  };
  
  const GetWorkLogs = (state = initialState, action) => {
    switch (action.type) {
      case "GET_WORK_LOGS":
        return {
          ...state,
        };
  
      case "GET_WORK_LOGS_SUCCESS":
        return {
          ...state,
          apiResponse: action.payload,
        };
  
      case "GET_WORK_LOGS_FAILURE":
        return {
          ...state,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default GetWorkLogs;
  