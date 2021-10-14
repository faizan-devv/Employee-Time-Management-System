const initialState = {
    apiResponse: {},
    error: null
};

const WorkLogs = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_WORK_LOG":
            return {
                ...state,
            };

        case "CREATE_WORK_LOG_SUCCESS":
            return {
                ...state,
                apiResponse: action.payload,
            };

        case "CREATE_WORK_LOG_FAILURE":
            return {
                ...state,
                error: action.payload,
            };

        case "UPDATE_WORK_LOG":
            return {
                ...state,
            };

        case "UPDATE_WORK_LOG_SUCCESS":
            return {
                ...state,
                apiResponse: action.payload,
            };

        case "UPDATE_WORK_LOG_FAILURE":
            return {
                ...state,
                error: action.payload,
            };

        case "UPDATE_WORKING_HOURS":
            return {
                ...state,
            };

        case "UPDATE_WORKING_HOURS_SUCCESS":
            return {
                ...state,
                apiResponse: action.payload,
            };

        case "UPDATE_WORKING_HOURS_FAILURE":
            return {
                ...state,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default WorkLogs;

