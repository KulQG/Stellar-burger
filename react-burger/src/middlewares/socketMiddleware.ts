import { Middleware } from "redux";
import { WebSocketEvent, WebSocketMessage } from "../services/types/data";

type WebSocketAction =
  | { type: "WS_CONNECTION_START" }
  | { type: "WS_CONNECTION_SUCCESS"; payload: WebSocketEvent }
  | { type: "WS_CONNECTION_ERROR"; payload: WebSocketEvent }
  | { type: "WS_GET_MESSAGE"; payload: WebSocketMessage }
  | { type: "WS_SEND_MESSAGE"; payload: WebSocketMessage }
  | { type: "WS_CONNECTION_CLOSE" };

export const socketMiddleware: () => Middleware = () => {
  return (store) => {
    let socket: WebSocket | null = null;

    return (next) => (action: WebSocketAction) => {
      const { dispatch, getState } = store;

      if (action.type === "WS_CONNECTION_START") {
        socket = new WebSocket("wss://norma.nomoreparties.space/orders/all");
      }
      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: "WS_CONNECTION_SUCCESS", payload: event });
        };

        socket.onerror = (event) => {
          dispatch({ type: "WS_CONNECTION_ERROR", payload: event });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;
          dispatch({ type: "WS_GET_MESSAGE", payload: restParsedData });
        };

        socket.onclose = (event) => {
          dispatch({ type: "WS_CONNECTION_CLOSED", payload: event });
        };

        if (action.type === "WS_SEND_MESSAGE") {
          const message = JSON.stringify(action.payload);
          socket.send(JSON.stringify(message));
        }
      }
      if (action.type === "WS_CONNECTION_CLOSE") {
        socket?.close(1000);
      }

      next(action);
    };
  };
};
