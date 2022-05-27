import axios from "axios";

class API {
  passwordReset = (payload) => {
    axios
      .post("http://localhost:3001/password/reset", payload)
      .then((res) => console.log(res));
  };
  updatePassword = (payload) => {
    axios.get("http://localhost:3001/password/reset/edit", {
      params: { token: payload.token, password: payload.new_password },
    });
  };
}

export default new API();
