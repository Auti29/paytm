import BottomWarning from "./ui/BottomWarning"
import AuthButtonComponent from "./ui/AuthButtonComponent"
import InputComponent from "./ui/InputComponet"
import MainHeading from "./ui/MainHeading"
import SubHeading from "./ui/SubHeading"
import { useState } from "react"


export default function Signup() {
    const [username, setUsername] = useState<string | null>(null);
    const [firstName, setfirstName] = useState<string | null>(null);
    const [lastName, setlastName] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);


    function handleClick(){
        console.log({
            username, 
            firstName, 
            lastName, 
            password
        });
    }

    return (
        <div className="border-0 shadow-xl rounded-xl flex flex-col w-[23vw] relative p-4 pb-7 justify-center items-center">
            <MainHeading text="Register"/>
            <SubHeading text="Enter your information to create your account" />

            <div className="w-[90%] m-2">
                <InputComponent type="text" setStateFunc={setfirstName} inputId="firstName" label="First Name" placeholder="John"/>
            </div>
                   
            <div className="w-[90%] m-2">
                <InputComponent type="text" setStateFunc={setlastName} inputId="lastName" label="Last Name" placeholder="Doe"/>
            </div>

            <div className="w-[90%] m-2">
                <InputComponent type="text" setStateFunc={setUsername} inputId="username" label="Username" placeholder="John@29"/>
            </div>
                
            <div className="w-[90%] m-2">
                <InputComponent type="password" setStateFunc={setPassword} inputId="password" label="Password" placeholder="Password"/>
           </div>

            <AuthButtonComponent onClickFunc={handleClick} text="Sign Up"/>

            <BottomWarning text="Already have an account?" linkText="Sign In" url="/signin"/>
        </div>
    )
}