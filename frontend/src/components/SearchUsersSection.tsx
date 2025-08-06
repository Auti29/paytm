import { useRef, useState } from "react";
import ButtonComponent from "./ui/ButtonComponent";
import Users from "./ui/Users";
import axios from "axios";
import { SearchFallbackComponent } from "./ui/SearchFallbackComponent";
const BE_URL = import.meta.env.VITE_API_URL;


interface bulkUsersInterface {
    username: string, 
    firstName: string, 
    lastName: string, 
    id: string
}


export default function SearchUsersSection() {
    const [users, setUsers] = useState<bulkUsersInterface[] | null>(null);
    const [searchInput, setSearchInput] = useState<string>("");
    const searchRef = useRef<HTMLInputElement | null>(null);
    const token = localStorage.getItem('token');

    async function handleSearchClick() {
        const res = await axios.get(`${BE_URL}/api/v1/user/bulkUsers`, {
            params: {
                filter: searchInput
            }, 
            headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
        });

        if(!res.data){
            setUsers(null);
            return;
        }

        const data = res.data as bulkUsersInterface[];
        setUsers(data);
        setSearchInput("");
    }


    return (
        <div className="border-0 rounded-md flex flex-col shadow-lg w-[50%] p-3 mt-4  border-gray-500">
            <div className="font-bold mb-1 text-lg">
                Make Payment
            </div>
            <div className="w-full flex justify-between">
            {/* later remove the search button and make the search debounced */}
            <div className="flex-3/5">
            <input
             ref = {searchRef}
             onChange={(e) => setSearchInput(e.target.value)}
             value={searchInput}
             className="border-2 w-full border-gray-400 p-1.5 rounded-md text-md" placeholder="Search users to make payment" type="text"/>
            </div>
            <div className="flex justify-center flex-1/5 items-center">
            <ButtonComponent onClick={handleSearchClick} disabled={searchInput.length <= 0 ? true : false} style="w-40 h-10 hover:bg-gray-400" text={"Search"}/>
            </div>
            </div>
            
            <div className="font-bold text-gray-600 mt-2">
                Pay Users
            </div>
            
            <div className="mb-2 mt-0.5 max-h-[50vh] p-1 overflow-y-scroll">
            {
                users && users.length > 0
                 ?
                users.map((u, i) => {
                    return(
                        <div key={i}>
                            <Users username={u.username} userId={u.id}/>
                         </div>   
                    ) 
                })
                :(
                    <SearchFallbackComponent />
                )

            }
            </div>
        </div>
    )
}