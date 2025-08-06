import { useSearchParams } from "react-router-dom";
import TransferFunds from "../components/TransferFunds";

export default function TransferMoney() {
    const [searchParams,]  = useSearchParams();

    const receiver = searchParams.get('receiver');

    return(
        <div className="flex justify-center items-center h-screen w-screen">
            <TransferFunds receiver={receiver || "dummyUsername"}/>
        </div>
    );
}