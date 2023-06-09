import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../context/UsersContext";
import { getAllTournaments, getUserTournaments } from "../apis/tournament";
import { NavLink } from "react-router-dom";

export default function Homepage() {
  const { user } = useContext(UsersContext);

  const [tournaments, setTournaments] = useState([]);
  const [allTournaments, setAllTournaments] = useState([]);

  useEffect(() => {
    async function getTournamentsForUser(id_user) {
      try {
        const response = await getUserTournaments(id_user);
        setTournaments(response);
      } catch (error) {
        console.log(error);
      }
    }
    async function getTournaments() {
      try {
        const response = await getAllTournaments();
        setAllTournaments(response);
      } catch (error) {
        console.log(error);
      }
    }

    if (user !== null) {
      const id_user = user.id_user;
      getTournamentsForUser(id_user);
      if (tournaments.length === 0) {
        getTournaments();
      }
    } else {
      getTournaments();
    }
  }, []);

  console.log(allTournaments);
  return (
    <div className="hpTourContainer flex flexc ">
      {tournaments.length !== 0 ? (
        <>
          <h1>Vos tournois</h1>
          <div className="flex flexflow jca">
            {tournaments.map((tour, i) => (
              <div
                className={`${
                  tour.id_type === 1 ? "hpElim" : "hpPoules"
                } hpTourCard`}
                key={i}
              >
                <NavLink to={`/tournament/${tour.id_tour}/${tour.id_type}`}>
                  <div className="flex flexc jcc">
                    <h2>{tour.name_tour}</h2>
                    <h4>{tour.name_type}</h4>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          {allTournaments.length !== 0 ? (
            <>
              <h1>Tous les tournois</h1>
              <div className="flex flexflow jca">
                {allTournaments.map((tour, y) => (
                  <div
                    key={y}
                    className={`${
                      tour.id_type === 1 ? "hpElim" : "hpPoules"
                    } hpTourCard`}
                  >
                    <NavLink to={`/tournament/${tour.id_tour}/${tour.id_type}`}>
                      <div>
                        <h2>{tour.name_tour}</h2>
                        <p>{tour.name_type}</p>
                      </div>
                    </NavLink>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <h1 className="mt30">Aucun tournoi dans notre base de données</h1>
          )}
        </>
      )}
    </div>
  );
}
