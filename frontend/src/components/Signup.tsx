import ButtonComponent from "./ui/ButtonComponent"
import InputComponent from "./ui/InputComponet"


export default function Signup() {
    return (
        <div className="border border-slate-500 rounded-xl flex flex-col w-[23vw] relative top-[50%] p-4 pb-7 justify-center items-center">
            <div className="text-3xl font-bold m-2">
            <h1>Register</h1>
            </div>
            <div className="text-center font-bold text-md text-gray-500 mt-1 w-[90%]">

            <h3>Enter your information to create your account</h3>
            </div>

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

            <ButtonComponent text="Sign Up"/>

            <div className="flex text-gray-700">
                <h3>Already have an account?</h3>
                <a className="underline text-black ml-1" href="/signin">Sign In</a>
            </div>
        </div>
    )
}