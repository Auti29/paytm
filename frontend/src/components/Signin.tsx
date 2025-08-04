import BottomWarning from "./ui/BottomWarning";
import InputComponent from "./ui/InputComponet";
import MainHeading from "./ui/MainHeading";
import SubHeading from "./ui/SubHeading";
import AuthButtonComponent from "./ui/AuthButtonComponent";
import { useState } from "react";

export default function Signin() {
        const [username, setUsername] = useState<string | null>(null);
        const [password, setPassword] = useState<string | null>(null);


        
    function handleClick(){
        alert({
            username, 
            password
        });
    }
    
    return (
        <div className="border border-slate-200 rounded-xl flex flex-col w-[23vw] relative p-4 pb-7 justify-center items-center shadow-lg">
            <MainHeading text="Sign In"/>
            <SubHeading text="Enter your credentials to access your account"/>
            <div className="w-[90%] m-2">
                <InputComponent type="text" setStateFunc={setUsername}  label="Username" inputId="username" placeholder="Username"/>
            </div>
            <div className="w-[90%] m-2">
                <InputComponent type="password" setStateFunc={setPassword} label="Password" inputId="password" placeholder="Password"/>
            </div>

            <AuthButtonComponent onClickFunc={handleClick} text="Sign In"/>

            <BottomWarning text="Don't have an account?" linkText="Sign Up" url="/signup"/>
        </div>
    );
}