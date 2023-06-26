import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UsersContext } from "../context/UsersContext";

export default function Header() {
  const { user, signout } = useContext(UsersContext);

  return (
    <header class="header">
      <nav className="flex jca">
        <NavLink to="/">Les tournois</NavLink>
        <NavLink to="/basketball">Basketball</NavLink>
        <NavLink to="/createTournament">Créer un tournoi</NavLink>

        {user ? (
          <>
            <NavLink onClick={() => signout()}>Se déconnecter</NavLink>
          </>
        ) : (
          <div className="flex">
            <NavLink to="/signin">Se connecter</NavLink>
            <NavLink to="/signup">S'inscrire</NavLink>
          </div>
        )}
      </nav>
    </header>
  );
}
