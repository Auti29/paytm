import ButtonComponent from "./ButtonComponent";
import UserProfileIcon from "./UserProfileIcon"

interface usersPropsInterface {
    username: string 
}

export default function Users({username}: usersPropsInterface) {
    return (
        <div className="shadow-md border-0 rounded-md mt-4 p-2 flex items-center justify-between">
            <div className="flex items-center">
            <UserProfileIcon />
            <span className="ml-2 font-bold">{username}</span>
            </div>
            <ButtonComponent text="Send Money"/>
        </div>
    );
}