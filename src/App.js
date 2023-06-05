import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./components/Header";
import { Suspense } from "react";
import UsersProvider from "./components/UsersProvider/UsersProvider";

function App() {
  const user = useLoaderData();
  return (
    <div>
      <UsersProvider>
        <Header />
        <Suspense>
          <Outlet />
        </Suspense>
      </UsersProvider>
    </div>
  );
}

export default App;
