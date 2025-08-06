import Card from "./ui/Card";
import Users from "./ui/Users";

export default function TransactionHistory() {
    return (
        <Card>
            <div className="flex justify-start">
                <h1 className="font-bold text-lg text-gray-600">Recent Transactions</h1>
            </div>
            <div className="">
            <Users 
            isButtonRemove={true} 
            isTransactionView= {true} 
            username={"user1"} 
            userId={"123"} 
            transactionDateTime={{date: "30/07", time: "08:15AM"}} sent={true}/>
            <Users 
            isButtonRemove={true} 
            isTransactionView= {true} 
            username={"usertest"} 
            userId={"123"} 
            transactionDateTime={{date: "30/07", time: "08:15AM"}} sent={false}/>
            <Users 
            isButtonRemove={true} 
            isTransactionView= {true} 
            username={"userdummy"} 
            userId={"123"} 
            transactionDateTime={{date: "30/07", time: "08:15AM"}} sent={true}/>
            </div>
        </Card>
    );
}