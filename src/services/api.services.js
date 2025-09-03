import axios from "axios";

const createAPI = (fullName, email, password, phone) => {
    const URL_BE = "https://localhost:8080/api/v1/user";
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