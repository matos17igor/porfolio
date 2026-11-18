const BASE_URL = "/cms/collections";

export async function getItems(collection) {
  const resp = await fetch(`${BASE_URL}/${collection}/entries`);
  if (!resp.ok) throw new Error(`Erro ${resp.status} ao buscar ${collection}`);
  return resp.json();
}
