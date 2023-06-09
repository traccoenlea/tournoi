import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPoules } from "../apis/poule";
import { getEliminations } from "../apis/eliminitation";
import { getATournament } from "../apis/tournament";

export default function Tournament() {
  // getting data from the link
  const params = useParams();
  const id_tour = parseInt(params.id_tour);
  const id_type = parseInt(params.id_type);
  // use state to put all the poules data
  const [poules, setPoules] = useState([]);
  // use state to put all the eliminations data
  const [elim, setElim] = useState([]);
  // use state to put all the tournament data
  const [tourData, setTourData] = useState([]);

  //get the data from poules ou from elim
  useEffect(() => {
    async function getDataFromTournament(id_tour) {
      try {
        const response = await getATournament(id_tour);
        setTourData(response);
      } catch (error) {
        console.log(error);
      }
      if (id_type === 1) {
        //check if the eliminations array is empty to get data from DB
        if (elim.length === 0) {
          try {
            const response = await getEliminations(id_tour);
            const number = response.length;
            //using the slice method to get pairs of participants
            for (let y = 0; y < number; y++) {
              const sliced = response.slice(y, y + 2);

              //adding the pairs to the use state array to map into in the return
              setElim((elim) => [
                ...elim,
                [
                  { place: sliced[0].place, name: sliced[0].name_part },
                  {
                    place: sliced[1].place,
                    name: sliced[1].name_part,
                  },
                ],
              ]);

              y = y + 1;
            }
          } catch (error) {
            console.log(error);
          }
        }
      } else if (id_type === 2) {
        try {
          const response = await getPoules(id_tour);
          //using slice method to get 4 participants = 1 poule
          for (let i = 0; i < response.length; i++) {
            const sliced = response.slice(i, i + 4);
            setPoules((poules) => [...poules, sliced]);
            i = i + 3;
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    getDataFromTournament(id_tour);
  }, []);

  return (
    <div className="flex flexc mauto">
      {tourData.map((data, i) => (
        <h1 key={i}>{data.name_tour}</h1>
      ))}
      <div className="flex flexflow mt30">
        {/* mapping into poules to get the differents poules */}
        {poules.map((poules, i) => (
          <div key={i} className="flex flexc poules">
            <h3>Poule {i + 1}</h3>
            <hr></hr>
            {/* mapping into each poules to get the participants */}
            {poules.map((poule, i) => (
              <div key={i} className="taj">
                <h4>
                  {poule.place} - {poule.name_part}
                </h4>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="flex flexflow elimContainer">
        {/* mapping into elim array to get the pairs */}
        {elim.map((elim, i) => (
          <div key={i} className="flex flexc jcc elim">
            <h2>Match {i + 1}</h2>
            <div className="flex">
              {/* mapping into each pairs to get the participants */}
              {elim.map((part, i) => (
                <div className="flex mauto jcc tac">
                  <h3>{part.name}</h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
