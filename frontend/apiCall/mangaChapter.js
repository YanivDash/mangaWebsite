import axios from "axios";

const mangaChapter = (values) => {
  console.log(values);

  return axios
    .post("http://localhost:8061/chapter", values)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export default mangaChapter;
