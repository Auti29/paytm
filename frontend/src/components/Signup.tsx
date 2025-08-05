import BottomWarning from "./ui/BottomWarning"
import AuthButtonComponent from "./ui/AuthButtonComponent"
import InputComponent from "./ui/InputComponet"
import MainHeading from "./ui/MainHeading"
import SubHeading from "./ui/SubHeading"
import { useState } from "react"
import { register } from "../api/auth/register"
import { useNavigate } from "react-router-dom"


export default function Signup() {
    const [username, setUsername] = useState<string | null>(null);
    const [firstName, setfirstName] = useState<string | null>(null);
    const [lastName, setlastName] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);
    const navigate = useNavigate();

   async function handleClick(){
        if(!username || !password || !firstName || !lastName){
            //create a modal later or mui component
            alert(
                "credentials missing!!!"
            )
            return;
        }

        try{
            await register({
                username, 
                password, 
                firstName, 
                lastName
            });
    
            alert("you have signed up!!");

            navigate('/signin');

        }catch(e){
            console.log("error occured!!", e);
            //add error component
        }
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