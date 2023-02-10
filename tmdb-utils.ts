import superagent from "superagent"
import { z } from "zod";

import {getKey} from "./private-keys"
const TMDB_API={
  TRENDING:{
      title: "Trending",
      url: `trending/all/week?api_key=##KEY##&language=en-US`
  },
  TOP_RATED: {
      title: "Top Rated",
      url: `movie/top_rated?api_key=##KEY##&language=en-US`,
  },
}
/*
  const request = await fetch(`
  https://api.themoviedb.org/3${requests[genre].url}
  `).then((response) => response.json());

  return {
    props: {
      results: request.results,
    },
  };


*/
export const TmdbObject = z.object({
  id: z.number().min(1),
  adult: z.boolean(),
})
const TmdbResponse = z.object({
  page:z.number().min(1),
  total_pages:z.number(),
  total_results:z.number(),
  results:z.array(TmdbObject)
})
export async function  tmdbList(category='TRENDING') {
  let catUrl = TMDB_API[category].url
  catUrl = catUrl.replace('##KEY##',getKey('TMDB'))
  let url = `https://api.themoviedb.org/3/${catUrl}`

  let request = superagent.get(url)
  let res = await request

  const validJson = TmdbResponse.parse(res.body);
  return validJson;


}