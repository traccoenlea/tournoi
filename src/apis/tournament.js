const API_TOUR = "/api/tournament";

export async function addTournament(values) {
  console.log("on est dans add tour ");
  console.log(values);
  const response = await fetch(`${API_TOUR}/addTournament`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });
  const backResponse = await response.json();
  return backResponse;
}

// export async function getAllTournaments() {
//   const response = await fetch(`${API_TOUR}/getAllTournaments`);
//   return response.json();
// }

// export async function getTournament(id_tour) {
//   const response = await fetch(`${API_TOUR}/getTournament?id=${id_tour}`);
//   return response.json();
// }

// export async function tourElim(id_tour) {
//   const response = await fetch(`${API_TOUR}/tourElim?id=${id_tour}`);
//   return response.json();
// }
