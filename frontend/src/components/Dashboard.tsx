import { useEffect, useState } from "react";
import SearchUsersSection from "./SearchUsersSection";
import BalanceInfo from "./ui/BalanceInfo";
import Topbar from "./ui/Topbar";
import axios from "axios";
const BE_URL = import.meta.env.VITE_API_URL;

export interface userInterface 
     {
        balance: number, 
        userId: {
            firstName: string, 
            lastName: string, 
            username: string 
        }
    }


type dataType = {
    message: string, 
    user: userInterface
}


export default function Dashboard(){
    const [user, setUser] = useState<userInterface>({
        balance: 1000, 
        userId: {
            firstName: "John", 
            lastName: "Doe", 
            username: "John29"
        }
    });

    useEffect(() => {
        const token = localStorage.getItem("token");
        async function fetchUser(){
            const res = await axios.get(`${BE_URL}/api/v1/user/getProfile`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            if(res.status != 200) {
                return res.data;
            }

            const data = (res.data as dataType);

            setUser(data.user);
        }

        fetchUser();

    }, []);


    return (
        <div className="w-[80%] m-auto">
            <div className="mt-4">
            <Topbar user = {user}/>
            </div>
            <div>
                <BalanceInfo user={user} />
            </div>

            <div>
                <SearchUsersSection />
            </div>
        </div>
    );
}