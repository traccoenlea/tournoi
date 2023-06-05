import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UsersContext } from "../context/UsersContext";

export default function Header() {
  const { user, signout } = useContext(UsersContext);

  return (
    <div className="header flex jcb">
      <NavLink to="/">Homepage</NavLink>
      {user ? (
        <>
          <NavLink to="/createTournament">Créer un tournoi</NavLink>
          <NavLink onClick={() => signout()}>Déconnexion</NavLink>
        </>
      ) : (
        <>
          <NavLink to="/signin">Se connecter</NavLink>
          <NavLink to="/signup">S'inscrire</NavLink>
        </>
      )}
    </div>
  );
}
