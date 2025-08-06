import { useNavigate, createSearchParams } from "react-router-dom";
import ButtonComponent from "./ButtonComponent";
import UserProfileIcon from "./UserProfileIcon"

interface usersPropsInterface {
    username: string 
}

export default function Users({username}: usersPropsInterface) {

    const initials = username.split("")[0].toUpperCase();
    const navigate = useNavigate();

    function handleClick() {
        const params= {
            receiver :username
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
            <span className="ml-2 font-bold">{username}</span>
            </div>
            <ButtonComponent onClick={handleClick} text="Send Money"/>
        </div>
    );
}