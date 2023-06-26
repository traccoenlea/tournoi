import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { UsersContext } from "../context/UsersContext";
import HeaderMobile from "./HeaderMobile";

export default function Header() {
  const { user, signout } = useContext(UsersContext);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header">
      <nav className="mobileMenu flex jcb mb30">
        <NavLink to="/" className="tac mauto">
          Tournois
        </NavLink>
        <i
          className="fa-solid fa-bars"
          onClick={() => setShowMenu(!showMenu)}
        ></i>
      </nav>
      {showMenu ? (
        <HeaderMobile showMenu={showMenu} setShowMenu={setShowMenu} />
      ) : (
        ""
      )}

      <nav className="mobileDesktop flex jcb">
        <NavLink to="/" className="tac">
          Les tournois
        </NavLink>
        <NavLink to="/basketball" className="tac">
          Basketball
        </NavLink>
        <NavLink to="/createTournament" className="tac">
          Créer un tournoi
        </NavLink>

        {user ? (
          <>
            <NavLink onClick={() => signout()}>Se déconnecter</NavLink>
          </>
        ) : (
          <div className="flex">
            <div className="headerDesktop flex jcb">
              <NavLink to="/signin" className="tac">
                Se connecter
              </NavLink>
              <NavLink to="/signup" className="tac">
                S'inscrire
              </NavLink>
            </div>
            <NavLink to="/signin" className="headerMobile flex flexc jcc">
              <i className="fa-solid fa-user"></i>
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
}
