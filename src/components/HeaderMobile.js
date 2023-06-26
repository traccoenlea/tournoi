import { useContext, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UsersContext } from "../context/UsersContext";

export default function HeaderMobile({ showMenu, setShowMenu }) {
  const { user, signout } = useContext(UsersContext);

  const location = useLocation();

  function redirectClick() {
    setShowMenu(!showMenu);
  }

  return (
    <div className="mobileMenuNav">
      <div className="closeMobile" onClick={() => setShowMenu(!showMenu)}>
        X
      </div>
      <div className="containerMobile flex flexc jca">
        <NavLink to="/" className="flex jcc mauto" onClick={redirectClick}>
          Les tournois
        </NavLink>
        <NavLink
          to="/basketball"
          className="flex jcc mauto"
          onClick={redirectClick}
        >
          Basketball
        </NavLink>
        <NavLink
          to="/createTournament"
          className="flex jcc mauto"
          onClick={redirectClick}
        >
          Créer un tournoi
        </NavLink>

        {user ? (
          <div className="connexionMobile flex flexc jcc mauto">
            <hr className=""></hr>

            <NavLink onClick={() => signout()} className="tac mt30">
              Se déconnecter
            </NavLink>
          </div>
        ) : (
          <div className="connexionMobile flex flexc jcc mauto">
            <hr className=""></hr>
            <div className="flex flexc jce mauto">
              <NavLink to="/signin" className="tac" onClick={redirectClick}>
                Se connecter
              </NavLink>
              <NavLink to="/signup" className="tac" onClick={redirectClick}>
                S'inscrire
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
