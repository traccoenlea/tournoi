import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { signin as login } from "../../apis/users";
import { signout as logout } from "../../apis/users";
import { UsersContext } from "../../context/UsersContext";

export default function UsersProvider({ children }) {
  const initialUser = useLoaderData();
  console.log(initialUser);
  const [user, setUser] = useState(initialUser);

  async function signin(credentials) {
    const newUser = await login(credentials);
    setUser(newUser);
  }

  async function signout() {
    await logout();
    setUser(null);
  }

  return (
    <UsersContext.Provider value={{ user, signin, signout }}>
      {children}
    </UsersContext.Provider>
  );
}
