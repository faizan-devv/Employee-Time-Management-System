const initialState = {
  apiResponse: {},
  error: null
};

const registerManager = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_USER":
      return {
        ...state,
      };

    case "REGISTER_USER_SUCCESS":
      return {
        ...state,
        apiResponse: action.payload,
      };

    case "REGISTER_USER_FAILURE":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default registerManager;
