import axios from "axios";

export default axios.create({
  baseURL: "https://deezerdevs-deezer.p.rapidapi.com",
  headers: {
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    "x-rapidapi-key": "026d20b097msh4ab4eeff0e431e1p1ed13fjsn293820dafc8b",
  },
});
