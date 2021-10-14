const initialState = {
  apiResponse: {},
  error: null
};

const RegularUser = (state = initialState, action) => {
  switch (action.type) {
    case "RegisterRegularUser":
      return {
        ...state,
      };

    case "RegisterRegularUser_SUCCESS":
      return {
        ...state,
        apiResponse: action.payload,
      };

    case "RegisterRegularUser_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
    case "UPDATEUSER":
      return {
        ...state,
      };

    case "UPDATEUSER_SUCCESS":
      console.log("In reducer");
      console.log(action.payload);
      return {
        ...state,
        apiResponse: action.payload,
      };

    case "UPDATEUSER_FAILURE":
      return {
        ...state,
        error: action.payload,
      };

    case "DELETE_USER":
      return {
        ...state,
      };

    case "DELETEUSER_SUCCESS":
      console.log("In reducer");
      console.log(action.payload);
      return {
        ...state,
        apiResponse: action.payload,
      };

    case "DELETEUSER_FAILURE":
      return {
        ...state,
        error: action.payload,
      };


    default:
      return state;
  }
};

export default RegularUser;
