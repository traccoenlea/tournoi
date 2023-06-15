import { useState } from "react";

export default function Basketball() {
  // const teams = [
  // { id: 0, name: "Spurs" },
  // { id: 1, name: "Heat" },
  // { id: 2, name: "Lakers" },
  // { id: 3, name: "Cavaliers" },
  // { id: 4, name: "Bucks" },
  // { id: 5, name: "Nets" },
  // { id: 6, name: "76ers" },
  // { id: 7, name: "Celtics" },
  // { id: 8, name: "Magic" },
  // { id: 9, name: "Hornets" },
  // { id: 10, name: "Suns" },
  // { id: 11, name: "Clippers" },
  // { id: 12, name: "Wizards" },
  // { id: 13, name: "Warriors" },
  // { id: 14, name: "Nuggets" },
  // { id: 15, name: "Thunder" },
  // { id: 16, name: "Kings" },
  // { id: 17, name: "Pelicans" },
  // { id: 18, name: "Timberwolves" },
  // { id: 19, name: "Jazz" },
  // ];

  const teams = ["Spurs", "Heat", "Lakers", "Cavaliers"];
  const [teamsDel, setTeamsDel] = useState(teams);
  const [teamsList, setTeamsList] = useState([]);

  function handleClick() {
    for (let i = 0; i < 3; i++) {
      const randNumber = Math.floor(Math.random() * teamsDel.length);

      if (teamsList.length === 0) {
        setTeamsList(teamsDel[randNumber]);
        console.log(teamsDel[randNumber]);
        console.log(randNumber);
        const beginning = teamsDel.slice(0, randNumber);
        const ending = teamsDel.slice(randNumber, teamsDel.length);
        // setTeamsDel();
        console.log("beg : " + beginning);
        console.log("end : " + ending);
      } else {
      }
    }

    // for (let i = 0; i < teamsList.length; i++) {
    //   console.log(i);
    //   if (teamsDel[i] === undefined) {
    //     console.log("null");
    //   } else {
    //     console.log(teamsDel[i]);
    //   }
    // }
  }

  // console.log("teamsDel");
  // console.log(teamsDel);
  // console.log("teamsList");
  // console.log(teamsList);
  return (
    <div className="flex flexc mauto">
      <h1>Basketball</h1>
      {teams.map((team, i) => (
        <div key={i}>
          <h3>{team}</h3>
        </div>
      ))}

      <button onClick={handleClick}>Random</button>
    </div>
  );
}
