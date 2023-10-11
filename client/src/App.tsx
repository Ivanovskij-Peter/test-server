import React, { useEffect, FC, useContext } from "react";
import LoginForm from "./components/LoginForm";
import { Context } from ".";
import { observer } from "mobx-react-lite";

const App: FC = () => {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {store.isAuth ? (
        <span>You are logged as {store.user.email} </span>
      ) : (
        <LoginForm />
      )}
      <button onClick={() => store.logout()}>Logout</button>
    </div>
  );
};

export default observer(App);
