import { Header } from "../../components/Header/Header";
import styles from "./Feed.module.css";
import { FC, useEffect } from "react";
import { OrderComponents } from "../../components/OrderComponents/OrderComponents";
import { PopupHandler } from "../../components/PopupHandler/PopupHandler";
import { useDispatch, useSelector } from "../../services/hooks";
import {
  WS_CONNECTION_CLOSE,
  WS_CONNECTION_START,
} from "../../utils/constantsActions";

export const Feed: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: WS_CONNECTION_START });

    return () => {
      dispatch({ type: WS_CONNECTION_CLOSE });
    };
  }, [dispatch]);

  const socket = useSelector((s) => s.wsReducer.orders);

  const done = socket.orders.filter(
    (order: { status: string }) => order.status === "done"
  );
  const ready = socket.orders.filter(
    (order: { status: string }) => order.status !== "done"
  );

  const getDoneNumbers = () => {
    const nums = done.map((item: { number: number | string }) => item.number);
    return nums.map((num: string | number, index: number) => {
      const id = index;
      return (
        <p
          key={id}
          style={{ color: "#00CCCC" }}
          className="text text_type_digits-default"
        >
          {num}
        </p>
      );
    });
  };

  const getReadyNumbers = () => {
    const nums = ready.map((item: { number: number | string }) => item.number);
    return nums.map((num: string | number, index: number) => {
      const id = index;
      return (
        <p key={id} className="text text_type_digits-default">
          {num}
        </p>
      );
    });
  };

  return (
    <>
      <div className={styles.mainWrap}>
        <Header />
        <div className={styles.page}>
          <h1 className="text text_type_main-large">Лента заказов</h1>
          <div className={styles.wrap}>
            <OrderComponents socket={socket} />
            <div className={styles.data}>
              <div className={styles.tables}>
                <div className={styles.table}>
                  <p className="text text_type_main-medium">Готовы:</p>
                  <div className={styles.numbers}>{getDoneNumbers()}</div>
                </div>
                <div className={styles.table}>
                  <p className="text text_type_main-medium">В работе</p>
                  <div className={styles.numbers}>{getReadyNumbers()}</div>
                </div>
              </div>
              <div>
                <p className="text text_type_main-medium">
                  Выполнено за все время
                </p>
                <p
                  style={{
                    textShadow:
                      "0px 0px 16px rgba(51, 51, 255, 0.25), 0px 0px 8px rgba(51, 51, 255, 0.25), 0px 4px 32px rgba(51, 51, 255, 0.5)",
                  }}
                  className="text text_type_digits-large"
                >
                  {socket.total}
                </p>
              </div>
              <div>
                <p className="text text_type_main-medium">
                  Выполнено за сегодня
                </p>
                <p
                  style={{
                    textShadow:
                      "0px 0px 16px rgba(51, 51, 255, 0.25), 0px 0px 8px rgba(51, 51, 255, 0.25), 0px 4px 32px rgba(51, 51, 255, 0.5)",
                  }}
                  className="text text_type_digits-large"
                >
                  {socket.totalToday}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PopupHandler path={"/feed"} />
    </>
  );
};
