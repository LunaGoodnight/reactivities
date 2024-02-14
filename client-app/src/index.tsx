import React from "react";
import ReactDOM from "react-dom/client";
import { ActivityDashboard } from "./features/activities/dashboard/ActivityDashboard";
import { MangaDashboard } from "./features/manga/MangaDashboard";
import { Provider } from "react-redux";
import GlobalStyle from "./globalStyle";
import "./app/layout/styles.css";
import App from "./app/layout/App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ActivityDashboard />,
      },
      {
        path: "/manga",
        element: <MangaDashboard />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
