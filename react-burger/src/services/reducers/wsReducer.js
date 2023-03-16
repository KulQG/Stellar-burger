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
        case 'WS_CONNECTION_CLOSE': {
            return {
                ...state,
                error: undefined,
                wsConnected: false
            }
        }
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

export const userWsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_WS_CONNECTION_SUCCESS':
            return {
                ...state,
                error: undefined,
                wsConnected: true
            };
        case 'USER_WS_CONNECTION_ERROR':
            return {
                ...state,
                error: action.payload,
                wsConnected: false
            };
        case 'USER_WS_CONNECTION_CLOSED':
            return {
                ...state,
                error: undefined,
                wsConnected: false
            };
        case 'USER_WS_CONNECTION_CLOSE': {
            return {
                ...state,
                error: undefined,
                wsConnected: false
            }
        }
        case 'USER_WS_GET_MESSAGE':
            return {
                ...state,
                error: undefined,
                orders: action.payload
            };
        default:
            return state;
    }
};

//Создать конструкцию которая бы выдавала какое соединение открыто,
//и при открытии/закрытии обновлялось состояние

const currentSocket = {
    feed: false,
    orders: false
}

export const checkOpenWs = (state = currentSocket, action) => {
    switch (action.type) {
        case 'USER_WS_CONNECTION_SUCCESS': {
            return {
                ...state,
                feed: false,
                orders: true
            }
        }
        case 'WS_CONNECTION_SUCCESS': {
            return {
                ...state,
                feed: true,
                orders: false
            }
        }
        default:
            return state
    }
}