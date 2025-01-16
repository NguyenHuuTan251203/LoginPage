import { API_DELETE } from "../config/api";
export async function DeleteData(ID, token) {
  return fetch(API_DELETE, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(ID),
  }).then((res) => {
    if (!res.ok) return false;
    return res.json();
  });
}
