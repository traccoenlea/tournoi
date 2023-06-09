import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./components/Header";
import { Suspense } from "react";
import UsersProvider from "./components/UsersProvider/UsersProvider";

function App() {
  const user = useLoaderData();
  return (
    <UsersProvider>
      <Header />
      <div className="appContainer flex mauto">
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </UsersProvider>
  );
}

export default App;
