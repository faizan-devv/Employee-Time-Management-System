const initialState = {
  apiResponse: {},
  error: null
};

const GetUsers = (state = initialState, action) => {
  switch (action.type) {
    case "GETUSERS":
      return {
        ...state,
      };

    case "GETUSERS_SUCCESS":
      return {
        ...state,
        apiResponse: action.payload,
      };

    case "GETUSERS_FAILURE":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default GetUsers;
