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

export async function getUserTournaments(id_user) {
  console.log("on est là");
  const response = await fetch(`${API_TOUR}/getUserTournaments?id=${id_user}`);
  return response.json();
}
