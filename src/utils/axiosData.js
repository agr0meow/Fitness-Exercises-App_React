export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "984dfe4dd2msh7ddf92f180891a7p170461jsnf8bb8b0d5fa7",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "70f0d73aa2msh29340e2f5a5029ap1e7248jsn51b7880173ce",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
