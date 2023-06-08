const API_ELIM = "/api/elimination";

export async function addElim(number, id_tour) {
  const values = [{ number: number, id_tour: id_tour }];
  const response = await fetch(`${API_ELIM}/addElim`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });
  const backResponse = await response.json();
  return backResponse;
}

export async function getEliminations(id_tour) {
  const response = await fetch(`${API_ELIM}/getElimination?id=${id_tour}`);
  return response.json();
}
