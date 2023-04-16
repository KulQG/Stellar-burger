import { getCookie, setCookie, updateCookieAddress } from "../utils/consts";
import {
  USER_WS_CONNECTION_CLOSE,
  USER_WS_CONNECTION_CLOSED,
  USER_WS_CONNECTION_ERROR,
  USER_WS_CONNECTION_START,
  USER_WS_CONNECTION_SUCCESS,
  USER_WS_GET_MESSAGE,
  USER_WS_SEND_MESSAGE,
} from "../utils/constantsActions";
import { Middleware } from "redux";
import { WebSocketEvent, WebSocketMessage } from "../services/types/data";

type TUserWebSocketAction =
  | { type: "USER_WS_CONNECTION_START" }
  | { type: "USER_WS_CONNECTION_SUCCESS"; payload: WebSocketEvent }
  | { type: "USER_WS_CONNECTION_ERROR"; payload: WebSocketEvent }
  | { type: "USER_WS_GET_MESSAGE"; payload: WebSocketMessage }
  | { type: "USER_WS_SEND_MESSAGE"; payload: WebSocketMessage }
  | { type: "USER_WS_CONNECTION_CLOSE" };

export const userSocketMiddleware: () => Middleware = () => {
  return (store) => {
    let socket: WebSocket | null = null;

    return (next) => (action: TUserWebSocketAction) => {
      const { dispatch, getState } = store;

      if (action.type === USER_WS_CONNECTION_START) {
        const accessToken = getCookie("token")?.split("Bearer ")[1];
        socket = new WebSocket(
          `wss://norma.nomoreparties.space/orders?token=${accessToken}`
        );
      }
      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: USER_WS_CONNECTION_SUCCESS, payload: event });
        };
        socket.onerror = (event) => {
          dispatch({ type: USER_WS_CONNECTION_ERROR, payload: event });
        };
        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;

          if (parsedData.message === "Invalid or missing token") {
            fetch(updateCookieAddress, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                token: localStorage.getItem("refreshToken"),
              }),
            })
              .then((res) => {
                if (res.ok) {
                  return res.json();
                } else {
                  console.log("ошибка при получении данных" + res.status);
                }
              })
              .then((data) => {
                console.log(data);
                let authToken = data.accessToken;
                setCookie("token", authToken, { path: "/" });
                localStorage.clear();
                const refreshToken = data.refreshToken;
                localStorage.setItem("refreshToken", refreshToken);
              })
              .catch((err) => {
                console.log("ошибка" + err);
              });
          }

          dispatch({ type: USER_WS_GET_MESSAGE, payload: restParsedData });
        };
        socket.onclose = (event) => {
          dispatch({ type: USER_WS_CONNECTION_CLOSED, payload: event });
        };

        if (action.type === USER_WS_SEND_MESSAGE) {
          const message = JSON.stringify(action.payload);
          socket.send(JSON.stringify(message));
        }
      }
      if (action.type === USER_WS_CONNECTION_CLOSE) {
        socket?.close(1000);
      }

      next(action);
    };
  };
};
