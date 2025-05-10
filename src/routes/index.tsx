import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import GameDetails from "../pages/GameDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "game/:id",
        element: <GameDetails />,
      },
    ],
  },
]);
