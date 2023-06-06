const API_PART = "/api/participant";

export async function addParticipant(values) {
  console.log("on est dans add participant ");
  console.log(values);
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
