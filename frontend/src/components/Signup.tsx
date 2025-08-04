import BottomWarning from "./ui/BottomWarning"
import AuthButtonComponent from "./ui/AuthButtonComponent"
import InputComponent from "./ui/InputComponet"
import MainHeading from "./ui/MainHeading"
import SubHeading from "./ui/SubHeading"


export default function Signup() {
    return (
        <div className="border border-slate-500 rounded-xl flex flex-col w-[23vw] relative top-[50%] p-4 pb-7 justify-center items-center">
            <MainHeading text="Register"/>
            <SubHeading text="Enter your information to create your account" />

            <div className="w-[90%] m-2">
                <InputComponent inputId="firstName" label="First Name" placeholder="John"/>
            </div>
                   
            <div className="w-[90%] m-2">
                <InputComponent inputId="lastName" label="Last Name" placeholder="Doe"/>
            </div>

            <div className="w-[90%] m-2">
                <InputComponent inputId="username" label="Username" placeholder="John@29"/>
            </div>
                
            <div className="w-[90%] m-2">
                <InputComponent inputId="password" label="Password" placeholder="Password"/>
           </div>

            <AuthButtonComponent text="Sign Up"/>

            <BottomWarning text="Already have an account?" linkText="Sign In" url="/signin"/>
        </div>
    )
}