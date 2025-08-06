import { useNavigate, createSearchParams } from "react-router-dom";
import ButtonComponent from "./ButtonComponent";
import UserProfileIcon from "./UserProfileIcon"
import SentIcon from "../icons/SentIcon";
import ReceiveArrowIcon from "../icons/ReceiveArrowIcon";

interface dateTime {
    date: string, 
    time: string
}

interface usersPropsInterface {
    username: string,
    userId: string, 
    isButtonRemove?: boolean,  
    isTransactionView?: boolean, 
    transactionDateTime?: dateTime, 
    sent?:boolean
}

export default function Users({username, userId, isButtonRemove, isTransactionView, transactionDateTime, sent}: usersPropsInterface) {

    const initials = username.split("")[0].toUpperCase();
    const navigate = useNavigate();

    function handleClick() {
        const params= {
            receiver :username, 
            id: userId
        }
        navigate({
            pathname: "/transfer", 
            search: createSearchParams(params).toString()
        });
    }

    return (
        <div className="shadow-md border-0 rounded-md mt-4 p-2 flex items-center justify-between">
            <div className="flex items-center">
            <UserProfileIcon size="md" userInitials={initials}/>
            <div className="ml-3 flex flex-col justify-center items-start">
            <span className="font-bold">{username}</span>
            {
                transactionDateTime &&
                (
                    <span className="font-bold text-xs text-gray-600 ">{`${transactionDateTime.date} at ${transactionDateTime.time}`}</span>

                )
            }
            </div>
            </div>
            {!isButtonRemove && <div>
            <ButtonComponent onClick={handleClick} text="Send Money"/>
            </div>}
            {
                isTransactionView && 
                (   
                    <div className="flex pl-2 pr-2 items-center justify-center">
                    <span className={`text-lg mr-1 font-bold ${sent ? "text-red-500" : "text-green-500"}`}>
                        $1000
                    </span>   
                    <span>
                            {
                                sent ? 
                                <span className="text-red-500">
                                    <SentIcon size="md"/>
                                </span>
                                :
                                <span className="text-green-500">
                                    <ReceiveArrowIcon size="md"/>
                                </span>
                            }
                    </span>
                    </div>    
                )    
            }
        </div>
    );
}