import React, { Suspense } from "react";
import { Provider } from "react-redux";
import Store from "./store";
import RouterContainer from "./router/routerContainer";
import { ToastContainer } from "react-toastify";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <Suspense fallback={""}>
          <ToastContainer />
          <RouterContainer />
        </Suspense>
      </Provider>
    </div>
  );
}

export default App;
