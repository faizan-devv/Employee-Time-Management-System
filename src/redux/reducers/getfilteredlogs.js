const initialState = {
    apiResponse: {},
    error: null
  };
  
  const getFilteredLogs = (state = initialState, action) => {
    switch (action.type) {
      case "GET_FILTERED_LOGS":
        return {
          ...state,
        };
  
      case "GET_FILTERED_LOGS_SUCCESS":
        return {
          ...state,
          apiResponse: action.payload,
        };
  
      case "GET_FILTERED_LOGS_FAILURE":
        return {
          ...state,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default getFilteredLogs;
  