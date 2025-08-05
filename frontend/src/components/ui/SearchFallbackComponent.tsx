import { SearchIcon } from "../icons/SearchIcon";

export function SearchFallbackComponent() {
    return (
        <div className="border-0 font-bold text-black m-auto w-[70%] shadow-md flex justify-center items-center p-5 rounded-lg">
            <div className="m-2">
            <SearchIcon size="md"/>
            </div>
            <div>
            <span>Search users by their name</span>
            </div>
        </div>
    )
}