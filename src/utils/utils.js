import axios from "axios";

export function axiosPostsCall(uri, callback) {
    console.log("sono entranto nella funzione "+uri)
    axios
      .get(uri)
      .then((res) => {
        callback(res.data)
      })
      .catch((err) => {
        console.error(err);
      });
  }