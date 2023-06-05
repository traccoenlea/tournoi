import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Homepage from "./pages/Homepage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { userLoader } from "./loaders/userLoader";
import NewTournament from "./pages/NewTournament";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import NewPoules from "./pages/NewPoules";
import NewEliminations from "./pages/NewEliminations";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: userLoader,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/createTournament",
        element: (
          <ProtectedRoute>
            <NewTournament />
          </ProtectedRoute>
        ),
      },
      {
        path: "/newPoules/:id_tour",
        element: (
          <ProtectedRoute>
            <NewPoules />
          </ProtectedRoute>
        ),
      },
      {
        path: "/newEliminations/:id_tour",
        element: (
          <ProtectedRoute>
            <NewEliminations />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
