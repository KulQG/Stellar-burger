import { updateToken } from "../services/actions/updateToken";
import { getCookie } from "../utils/consts";
import { USER_WS_CONNECTION_CLOSE, USER_WS_CONNECTION_CLOSED, USER_WS_CONNECTION_ERROR, USER_WS_CONNECTION_START, USER_WS_CONNECTION_SUCCESS, USER_WS_GET_MESSAGE, USER_WS_SEND_MESSAGE } from "../utils/constantsActions";

export const userSocketMiddleware = () => {
    return store => {
        let socket = null;

        return next => action => {
            const { dispatch, getState } = store;
            const { type, payload } = action;

            if (type === USER_WS_CONNECTION_START) {
                const accessToken = getCookie('token').split('Bearer ')[1]
                socket = new WebSocket(`wss://norma.nomoreparties.space/orders?token=${accessToken}`);
            }
            if (socket) {

                // функция, которая вызывается при открытии сокета
                socket.onopen = event => {
                    dispatch({ type: USER_WS_CONNECTION_SUCCESS, payload: event });
                };

                // функция, которая вызывается при ошибке соединения
                socket.onerror = event => {
                    dispatch({ type: USER_WS_CONNECTION_ERROR, payload: event });
                };

                // функция, которая вызывается при получении события от сервера
                socket.onmessage = event => {
                    const { data } = event;
                    const parsedData = JSON.parse(data)
                    const { success, ...restParsedData } = parsedData

                    if (parsedData.message === 'Invalid or missing token') {
                        dispatch(updateToken())
                    }
                    
                    dispatch({ type: USER_WS_GET_MESSAGE, payload: restParsedData });
                };
                // функция, которая вызывается при закрытии соединения
                socket.onclose = event => {
                    dispatch({ type: USER_WS_CONNECTION_CLOSED, payload: event });
                };

                if (type === USER_WS_SEND_MESSAGE) {
                    const message = JSON.stringify(payload);
                    // функция для отправки сообщения на сервер
                    socket.send(JSON.stringify(message));
                }
            }
            if (type === USER_WS_CONNECTION_CLOSE) {
                socket.close(1000)
            }

            next(action);
        };
    };
}; 