import axios from "axios";
const API_URL = 'http:localhost:3000/api/auth';

export const login = async (email, password) => {
    const response = await axios.post(`${API_URL}/login`, { email, password })
    return response.data.token
}
export const register = async (email, password) => {
    const regURL= `${API_URL}/register`
    console.log(regURL)
    const response = await axios.post(regURL, { email, password })
    return response.data
}

export const getUsers = async () => {
    const token = localStorage.getItem('token')
    const response = await axios.get("http:localhost:3000/api/users", {
        headers: { Authorization: `Bearer ${token}` }
    })
    console.log("999999999999999999999999999999",response)

    return response.data
}

export const getUserProfile = async () => {
    const token = localStorage.getItem('token')
    const response = await axios.get("http:localhost:3000/api/profile", {
        headers: { Authorization: `Bearer ${token}` }

    })
    return response.data
}