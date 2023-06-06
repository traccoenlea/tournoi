const API_POULE = "/api/poule";

export async function addPoule(number, id_tour) {
  console.log("on est dans add poule ");
  console.log(number);
  console.log(id_tour);
  const values = [{ number: number, id_tour: id_tour }];
  const response = await fetch(`${API_POULE}/addPoule`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });
  const backResponse = await response.json();
  return backResponse;
}
