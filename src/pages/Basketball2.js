import { useState } from "react";

export default function Basketball() {
  const teams = [
    { id: 0, name: "Spurs" },
    { id: 1, name: "Heat" },
    { id: 2, name: "Lakers" },
    { id: 3, name: "Cavaliers" },
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
  ];

  const array = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

  // const [teamList, setTeamList] = useState([]);
  const [teamDel, setTeamDel] = useState(teams);
  const [size, setSize] = useState(0);

  const removeItem = (number) => {
    setTeamDel((current) => current.filter((teamDel) => teamDel.id !== number));
  };

  async function test() {
    const size = teamDel.length;
    console.log(size);
    // for (let i = 0; i < size; i++) {
    //   console.log(i);
    // }
    const teamListLenght = teamList.length;
    let n = teamListLenght;
    console.log(n);
    while (n < size) {
      console.log(n);
      n++;
    }
    const number = Math.floor(Math.random() * size);
    setTeamList((teamList) => [...teamList, number]);
    removeItem(number);
    console.log("size");
    console.log(teamDel.length);
  }

  function getRandNumber(size) {
    return Math.floor(Math.random() * size);
  }

  function launchRandom() {
    let n = 0;
  }

  const [teamList, setTeamList] = useState([
    { id: 0, name: "Léa" },
    { id: 1, name: "Tracco" },
  ]);

  // const [teamList, setTeamList] = useState([]);

  function checkInArray(number) {
    console.log("on est là");
    console.log(number);
    for (let n = 0; n < teamList.length; n++) {
      console.log(n);
    }
  }

  function startArray(number) {
    console.log(number);
    setTeamList({ id: teams[number].id, name: teams[number].name });
  }

  function getRandomNumber() {
    for (let i = 0; i < teams.length; i++) {
      console.log("i : " + i);
      const number = Math.floor(Math.random() * teams.length);
      if (teamList.length !== teams.length) {
        if (teamList.length === 0) {
          startArray(number);
          i = i;
        } else {
          checkInArray(number);
        }
      }
      // if (teamList.length === 0) {
      //   setTeamList({ id: teams[number].id, name: teams[number].name });
      //   getRandomNumber();
      // } else {
      // for (let i = 0; i < teamList.length; i++) {
      //   console.log("i : " + i);
      //   if (teamList[i].id === number) {
      //     getRandomNumber();
      //   } else {
      //     setTeamList((teamList) => [
      //       ...teamList,
      //       { id: teams[number].id, name: teams[number].name },
      //     ]);
      // }
    }
  }

  // teamList.map((team, i) => {
  //   if (team[i].id === number) {
  //     console.log("égal");
  //   } else {
  //     console.log("diff");
  //   }
  // });

  console.log("teamList");
  console.log(teamList);
  return (
    <div className="flex flexc mauto mt30">
      <h1>Basketball</h1>
      <p>
        Réaliser un random de 20 éléments d’un tableau. Chaque élément doit
        sortir au moins une fois lors des 20 premiers tours mais jamais deux
        fois.
      </p>
      <button className="btn" onClick={getRandomNumber}>
        Random
      </button>
      <div className="mauto mt30">
        <ol>
          {teams.map((team, i) => (
            <li key={i}>{team.name}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
