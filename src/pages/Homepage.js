import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../context/UsersContext";
import { getUserTournaments } from "../apis/tournament";
import { NavLink } from "react-router-dom";

export default function Homepage() {
  const { user } = useContext(UsersContext);
  const id_user = user.id_user;
  const [tournaments, setTournaments] = useState([]);

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
    getTournamentsForUser(id_user);
  }, []);

  console.log(tournaments);
  return (
    <div className="flex flexflow">
      {tournaments.map((tour, i) => (
        <NavLink to={`/tournament/${tour.id_tour}`}>
          <div key={i}>
            <h2>{tour.name_tour}</h2>
            <p>{tour.name_type}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
}
