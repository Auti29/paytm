import MainHeading from "./ui/MainHeading";
import UserProfileIcon from "./ui/UserProfileIcon";


export default function TransferFunds({receiver}: {receiver: string}){
    const initials = receiver.split("")[0].toUpperCase();

    return (
        <div className="flex flex-col justify-center items-center border-0 w-[28vw] p-3 rounded-xl shadow-lg/25">
            <div className="m-2">
            <MainHeading text="Send Money"/>
            </div>


            <div className="text-lg font-bold text-gray-500">
            <h3>Transfer funds to:</h3>
            </div>


            <div className="p-2 flex flex-col justify-center items-center m-2">
                <UserProfileIcon size="xl" textSize={"text-xl"} color="bg-green-500 text-white" userInitials={initials}/>
                <span className="font-bold text-lg mt-1.5">{receiver}</span>
            </div>

            <div className="flex flex-col mt-3 w-[70%]">
                <span className="text-lg font-bold text-gray-600">Amount (in $):</span>
                <input className="p-1 text-lg border mt-2 mb-2 w-full border-gray-400 rounded-lg" type="number" placeholder="Enter amount"/>
            </div>
            
            <div className="w-[70%] mt-1 mb-7">
                <button className="border-0 w-full rounded-md p-1.5 font-bold bg-green-500 text-white text-lg cursor-pointer">Initiate Transfer</button>
            </div>

        </div>
    );
}