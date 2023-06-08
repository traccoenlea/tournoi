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
        console.log("on est ici");
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
    } else {
      getTournaments();
    }
  }, []);

  console.log(tournaments);
  return (
    <div className="flex flexflow">
      {tournaments.length !== 0 ? (
        <>
          {tournaments.map((tour, i) => (
            <NavLink to={`/tournament/${tour.id_tour}/${tour.id_type}`}>
              <div key={i}>
                <h2>{tour.name_tour}</h2>
                <p>{tour.name_type}</p>
              </div>
            </NavLink>
          ))}
        </>
      ) : (
        <>
          {allTournaments.length !== 0 ? (
            <>
              {allTournaments.map((tour, y) => (
                <NavLink to={`/tournament/${tour.id_tour}/${tour.id_type}`}>
                  <div key={y}>
                    <h2>{tour.name_tour}</h2>
                    <p>{tour.name_type}</p>
                  </div>
                </NavLink>
              ))}
            </>
          ) : (
            <h1>Aucun tournoi dans notre base de données</h1>
          )}
        </>
      )}
    </div>
  );
}
