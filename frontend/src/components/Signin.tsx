import BottomWarning from "./ui/BottomWarning";
import InputComponent from "./ui/InputComponet";
import MainHeading from "./ui/MainHeading";
import SubHeading from "./ui/SubHeading";
import AuthButtonComponent from "./ui/AuthButtonComponent";

export default function Signin() {
    return (
        <div className="border border-slate-200 rounded-xl flex flex-col w-[23vw] relative top-[50%] p-4 pb-7 justify-center items-center shadow-lg">
            <MainHeading text="Sign In"/>
            <SubHeading text="Enter your credentials to access your account"/>
            <div className="w-[90%] m-2">
                <InputComponent label="Username" inputId="username" placeholder="Username"/>
            </div>
            <div className="w-[90%] m-2">
                <InputComponent label="Password" inputId="password" placeholder="Password"/>
            </div>

            <AuthButtonComponent text="Sign In"/>

            <BottomWarning text="Don't have an account?" linkText="Sign Up" url="/signup"/>
        </div>
    );
}