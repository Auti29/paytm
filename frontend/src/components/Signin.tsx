import BottomWarning from "./ui/BottomWarning";
import InputComponent from "./ui/InputComponet";
import MainHeading from "./ui/MainHeading";
import SubHeading from "./ui/SubHeading";
import AuthButtonComponent from "./ui/AuthButtonComponent";
import { useState } from "react";
import { signinauth } from "../api/auth/signinauth";
import { useNavigate } from "react-router-dom";

export default function Signin() {
        const [username, setUsername] = useState<string | null>(null);
        const [password, setPassword] = useState<string | null>(null);
        const navigate = useNavigate();


        
    async function handleClick(){
        if(!username || !password){
            alert("Credentials missing!!");
            return;
        }
        
        try{
            const res = await signinauth({username, password});
            
            if(res.status != 200){
                alert("wrong credentials!!!");
                return;
            }

            const jwt = (res.data as {token: string}).token;

            localStorage.setItem("token", jwt);

            alert("signin done!!");

            navigate('/dashboard');
        }catch(e){
            console.log("signin error: ", e);
        }
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