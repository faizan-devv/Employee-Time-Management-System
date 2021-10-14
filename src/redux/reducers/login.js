const initialState = {
  apiResponse: {},
  error: null,
  token: null
};

const Login = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
      };

    case "LOGIN_SUCCESS":
      if (action.payload.hasOwnProperty('token')) {
        setToken(action.payload.token, action.payload.user.roles[0].name, action.payload.user.id, action.payload.user.working_hours);
        return {
          ...state,
          apiResponse: action.payload,
          token: action.payload.token
        }
      }
      else {
        return {
          ...state,
          apiResponse: action.payload,
          token: false
        }
      }

    case "LOGIN_FAILURE":
      setToken(action.payload.token);
      return {
        ...state,
        error: action.payload,
        token: false
      };

    default:
      return state;
  }
};

const setToken = (token, role, id, workHours) => {
  localStorage.setItem('token', token ? token : null);
  localStorage.setItem('role', role ? role : null);
  localStorage.setItem('id', id ? id : null);
  localStorage.setItem('workHours', workHours ? workHours : null);
}

export default Login;
