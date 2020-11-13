import axios from "axios";
const instance=axios.create({
    baseURL:"https://react-my-burger-b56f1.firebaseio.com/"
});
export default instance;