import ProfileIcon from "../icons/ProfileIcon";
import Logo from "./Logo";
import { type userInterface } from "../Dashboard";

interface topBarPropsI {
    user: userInterface
}

export default function Topbar({user}: topBarPropsI) {
    return (
        <div className="flex justify-between border-b-4 border-slate-500 shadow-xl p-2.5 rounded-2xl items-center  ">
                        <Logo />
                        <div className="flex items-center pl-2 pr-2">
                            <div className="font-bold text-gray-500 mr-1">
                                Hello, {user.userId.username}
                            </div>
                            <div className="ml-1 cursor-pointer text-bold text-gray-500 hover:text-gray-700">
                                <ProfileIcon size="xl"/>
                            </div>
                        </div>
                </div>
    );
}