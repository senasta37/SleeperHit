export async function onRequest({ request, env, params }) {
  const url = new URL(request.url);
  const target = new URL("https://api.themoviedb.org/3/" + params.path.join("/"));
  target.search = url.search;
  target.searchParams.set("api_key", env.TMDB_KEY);
  return fetch(target);
}
