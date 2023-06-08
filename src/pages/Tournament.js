import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPoules } from "../apis/poule";
import { getEliminations } from "../apis/eliminitation";

export default function Tournament() {
  const params = useParams();
  const id_tour = parseInt(params.id_tour);
  const id_type = parseInt(params.id_type);
  const [poules, setPoules] = useState([]);
  const [elim, setElim] = useState([]);

  //get the data from poules ou from elim
  useEffect(() => {
    async function getDataFromTournament(id_tour) {
      if (id_type === 1) {
        console.log("c elim");
        if (elim.length === 0) {
          console.log("on est bien là");
          try {
            const response = await getEliminations(id_tour);
            const number = response.length;
            for (let y = 0; y < number; y++) {
              console.log("y : " + y);
              const sliced = response.slice(y, y + 2);

              console.log(sliced[0]);
              console.log(sliced[1]);
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
              // }

              y = y + 1;
            }
          } catch (error) {
            console.log(error);
          }
        }
      } else if (id_type === 2) {
        console.log("poules.length");
        console.log(poules.length);
        try {
          const response = await getPoules(id_tour);
          for (let i = 0; i < response.length; i++) {
            console.log(i);
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

  //   console.log("poules");
  console.log(poules);
  console.log(elim);

  return (
    <div>
      <h1>Dans la page tournament {id_tour}</h1>

      <div className="flex">
        {poules.map((poules, i) => (
          <div key={i} className="flex flexc poules">
            {poules.map((poule, i) => (
              <div key={i} className=" ">
                <h4>
                  {poule.place} - {poule.name_part}
                </h4>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="flex flexc">
        {elim.map((elim, i) => (
          <div key={i} className="flex">
            {elim.map((part, i) => (
              <h4>
                {part.place} - {part.name}
              </h4>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
