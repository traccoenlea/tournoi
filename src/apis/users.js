const API_USERS = "/api/users";

export async function createUser(newUser) {
  console.log("on est ici");
  const response = await fetch(`${API_USERS}/createUser`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });

  const backResponse = await response.json();
  if (response.ok) {
    return backResponse;
  } else {
    if (backResponse) {
      throw backResponse;
    } else {
      throw new Error("Error Api CreateUser");
    }
  }
}

export async function signin(credentials) {
  console.log("dans login frontend");
  const response = await fetch(`${API_USERS}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  const backResponse = await response.json();
  if (response.ok) {
    return backResponse;
  } else {
    if (backResponse) {
      throw backResponse;
    } else {
      throw new Error("Oops une erreur est survenue");
    }
  }
}

export async function signout(user) {
  console.log("dans signout frontend");
  await fetch(`${API_USERS}/logout`, {
    method: "DELETE",
  });
}

export async function getCurrentUser() {
  const response = await fetch(`${API_USERS}/current`);
  return response.json();
}
