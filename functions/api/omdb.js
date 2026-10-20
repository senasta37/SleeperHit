export async function onRequest({ request, env }) {
  const url = new URL(request.url);
  const target = new URL("https://www.omdbapi.com/");
  target.search = url.search;
  target.searchParams.set("apikey", env.OMDB_KEY);
  return fetch(target);
}
