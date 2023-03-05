const initialState = {
    wsConnected: false,
    orders: {
        success: false,
        orders: []
    },
    error: undefined
};

export const wsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'WS_CONNECTION_SUCCESS':
            return {
                ...state,
                error: undefined,
                wsConnected: true
            };
        case 'WS_CONNECTION_ERROR':
            return {
                ...state,
                error: action.payload,
                wsConnected: false
            };
        case 'WS_CONNECTION_CLOSED':
            return {
                ...state,
                error: undefined,
                wsConnected: false
            };
        case 'WS_GET_MESSAGE':
            return {
                ...state,
                error: undefined,
                orders: action.payload
            };
        default:
            return state;
    }
}; 