import { useEffect, type Dispatch, type SetStateAction } from "react";
import Card from "./ui/Card";
import Users from "./ui/Users";
import axios from "axios";
import type { TransactionI, userInterface } from "./Dashboard";
const BE_URL = import.meta.env.VITE_API_URL;


interface TransactionHistoryI {
    currUser: userInterface, 
    transactions: TransactionI[] | null, 
    setTransactions: Dispatch<SetStateAction<TransactionI[] | null>>
}

export default function TransactionHistory({currUser, transactions, setTransactions}: TransactionHistoryI) {  
    const token = localStorage.getItem('token');

    useEffect(() => {
        async function fetchTrasactionHistory(){
            try{
                const res = await axios.get(`${BE_URL}/api/v1/account/transactionHistory`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = res.data as {message: string, transactions: TransactionI[]};
                setTransactions(data.transactions);
            }catch(e){
                console.log("fetch error: ", e);
            }
        }
        
        fetchTrasactionHistory();
    }, []);



    return (
        <Card>
            <div className="flex justify-start">
                <h1 className="font-bold text-lg text-gray-600">Recent Transactions</h1>
            </div>
            <div className="">
            {
                transactions &&
                transactions.sort((a: TransactionI, b: TransactionI) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()).slice(0, 3).map((t, i) => {
                    return(
                        <div key={i}>
                            <Users 
                            amount={t.amountTransferred}
                            userId={t.sender.username === currUser.userId.username ? t.receiver._id : t.sender._id}
                            isButtonRemove={true} 
                            isTransactionView= {true} 
                            username={t.sender.username ===  currUser.userId.username ? t.receiver.username : t.sender.username} 
                            transactionDateTime={{date: t.updatedAt.substring(0, 10), time: t.updatedAt.split("T")[1].substring(0, 8)}} 
                            sent={t.sender.username ===  currUser.userId.username}/>
                        </div>
                    )
                })
            }
            </div>
        </Card>
    );
}