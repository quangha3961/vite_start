// import axios from "axios";
import axios from "./axios.customize"
const createAPI = (fullName, email, password, phone) => {
    const URL_BE = "/api/v1/user";
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    }
    return axios.post(URL_BE, data)
}

const updateAPI = () => {

}

const deleteAPI = () => {

}

export { createAPI , updateAPI , deleteAPI };