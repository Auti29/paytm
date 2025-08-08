import { useEffect, useState } from "react";
import SearchUsersSection from "./SearchUsersSection";
import BalanceInfo from "./ui/BalanceInfo";
import Topbar from "./ui/Topbar";
import axios from "axios";
import TransactionHistory from "./TransactionHistory";
import GraphComponent from "./GraphComponent";
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

export interface UserI {
    username: string, 
    firstName: string, 
    lastName: string,
    _id: string
}

export interface  TransactionI {
    amountTransferred: number, 
    createdAt: string, 
    updatedAt: string, 
    sender: UserI, 
    receiver: UserI
}

export default function Dashboard(){
    const [transactions, setTransactions] = useState<TransactionI[] | null>(null);
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

            <div className="flex w-full justify-between mt-3">
                <div className="w-[48%] border-0 rounded-lg">
                    <SearchUsersSection />
                </div>

                <div className="w-[48%]">
                     <div className="border-0 shadow-xl  border-gray-600 rounded-lg">
                    <TransactionHistory currUser = {user} transactions={transactions} setTransactions = {setTransactions}/>
                    <GraphComponent transactions = {transactions}/>

                    </div>

                </div>

            </div>
        </div>
    );
}