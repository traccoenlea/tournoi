import { useEffect, useState } from "react";

export default function Basketball() {
  const teams = [
    "Spurs",
    "Heat",
    "Lakers",
    "Cavaliers",
    "Bucks",
    "Nets",
    "76ers",
    "Celtics",
    "Magic",
    "Benoit",
    "Hornets",
    "Suns",
    "Clippers",
    "Wizards",
    "Warriors",
    "Nuggets",
    "Thunder",
    "Kings",
    "Pelicans",
    "Timberwolves",
    "Jazz",
  ];

  const [teamsList, setTeamList] = useState([]);
  const usedIndexes = [];

  let n = 0;
  while (n < 3) {
    console.log(n);
  }

  useEffect(() => {
    async function getRandomArray() {
      //   const interval = setInterval(() => {
      //     if (usedIndexes.length === teams.length) {
      //       clearInterval(interval);
      //       return;
      //     }

      //     let randomIndex;
      //     do {
      //       randomIndex = Math.floor(Math.random() * teams.length);
      //     } while (usedIndexes.includes(randomIndex));

      //     usedIndexes.push(randomIndex);
      //     const randomName = teams[randomIndex];
      //     console.log(randomName);
      //     setTeamList((teamsList) => [...teamsList, randomName]);
      //     console.log(teamsList);
      //   });
      // }

      getRandomArray();
    }
  });
  // }, []);

  return (
    <div className="mauto mt50">
      <h1>Les équipes de basket</h1>
      <ol className="mt30">
        {teamsList.map((team, i) => (
          <li key={i}>{team}</li>
        ))}
      </ol>
    </div>
  );
}
