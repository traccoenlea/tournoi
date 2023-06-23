import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UsersContext } from "../context/UsersContext";

export default function Header() {
  const { user, signout } = useContext(UsersContext);

  return (
    <div className="header flex jcb">
      <div className="homepageHeader flex jcc">
        <NavLink to="/" className="tac">
          Tournois
        </NavLink>
        <NavLink to="/basketball" className="tar">
          Basketball
        </NavLink>
      </div>
      {user ? (
        <div className="tournamentHeader flex">
          <div>
            <NavLink to="/createTournament" className="tac">
              Créer un tournoi
            </NavLink>
          </div>
          <div>
            <NavLink onClick={() => signout()} className="flex flexend">
              Déconnexion
            </NavLink>
          </div>
        </div>
      ) : (
        <div className="flex">
          <NavLink to="/signin" className="tac">
            Se connecter
          </NavLink>
          <NavLink to="/signup" className="tac">
            S'inscrire
          </NavLink>
        </div>
      )}
    </div>
  );
}
