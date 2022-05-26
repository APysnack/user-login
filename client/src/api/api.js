import axios from "axios";

class API {
    passwordReset = (payload) => {
        axios.post("http://localhost:3001/password/reset", payload).then((res) => console.log(res));
    };
}
  
export default new API();