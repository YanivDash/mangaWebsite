import axios from "axios";

const uploadManga = (values) => {
  console.log(values);

  return axios
    .post("http://localhost:8061/createManga", values)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export default uploadManga;
