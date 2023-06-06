const API_PART = "/api/participant";

export async function addParticipant(participants, id_tour) {
  console.log("on est dans add participant ");
  console.log(participants);
  console.log(id_tour);
  const values = [{ participants, id_tour: id_tour }];
  const response = await fetch(`${API_PART}/addParticipant`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });
  const backResponse = await response.json();
  return backResponse;
}
