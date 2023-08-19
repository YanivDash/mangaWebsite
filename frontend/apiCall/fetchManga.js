import axios from "axios";

const fetchManga = () => {
  return axios
    .get("http://localhost:8061/allManga")
    .then((res) => res)
    .catch((err) => console.log(err.err));
};

export default fetchManga;
