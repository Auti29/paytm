import axios from "axios";
const BE_URL = import.meta.env.VITE_API_URL;

export interface credentialsI {
    username: string, 
    password: string
}

export async function signinauth(data: credentialsI) {
    const res = await axios.post(`${BE_URL}/api/v1/user/signin`, data);
    return res;
}