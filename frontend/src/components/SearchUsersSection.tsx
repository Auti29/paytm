import Users from "./ui/Users";

export default function SearchUsersSection() {
    return (
        <div className="border-0 rounded-md flex flex-col shadow-lg w-[50%] p-3 mt-4  border-gray-500">
            <div className="font-bold mb-1 text-lg">
                Make Payment
            </div>
            <input className="border-2 w-full border-gray-400 p-1.5 rounded-md" placeholder="Search users to make payment" type="text"/>
            
            <div className="font-bold text-gray-600 mt-2">
                Pay Again
            </div>
            
            <div className="mb-2 mt-0.5 max-h-[50vh] p-1 overflow-y-scroll">
            <Users />
            <Users />
            <Users />
            <Users />
            <Users />
            <Users />
            </div>
        </div>
    )
}