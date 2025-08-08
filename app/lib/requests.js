import { apiUrl } from "./constants";

export async function postRequest(endpoint, body) {
  const res = await fetch(`${apiUrl}/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return { res, data };
}
