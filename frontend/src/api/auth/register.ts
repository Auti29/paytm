import axios from "axios";

export interface UserI {
    username:string, 
    firstName: string, 
    lastName: string, 
    password: string
}

export async function register(data: UserI) {
    const BE_URL = import.meta.env.VITE_API_URL;

    const res = await axios.post(`${BE_URL}/api/v1/user/signup`, data); 

    return res;
}