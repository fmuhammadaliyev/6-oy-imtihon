const baseURL = "https://json-api.uz/api/project/fn44";

export async function getAll() {
  try {
    const req = await fetch(baseURL + "/cars");
    const res = await req.json();
    return res;
  } catch {
    throw new Error("Hatolik b'oldi");
  }
}
