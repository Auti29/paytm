import { useSearchParams } from "react-router-dom";
import TransferFunds from "../components/TransferFunds";

export default function TransferMoney() {
    const [searchParams,]  = useSearchParams();

    const receiver = searchParams.get('receiver');
    const userId = searchParams.get('id')!;

    return(
        <div className="flex justify-center items-center h-screen w-screen">
            <TransferFunds userId={userId} receiver={receiver || "dummyUsername"}/>
        </div>
    );
}