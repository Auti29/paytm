

interface userProfileIconInterface {
    userInitials: string, 
    size: "md" | "lg" | "xl", 
    color?: string, 
    textSize?: string | null
}

const sizeType: Record<userProfileIconInterface["size"], string> =  {
    "md" : "w-8 h-8", 
    "lg" : "w-10 h-10", 
    "xl" : "w-12 h-12", 

}

export default function UserProfileIcon({userInitials, size, color, textSize}: userProfileIconInterface){
    return (
        <div className={`flex justify-center items-center ${sizeType[size]} border-0 rounded-4xl ${color ? color :"bg-gray-300"} text-center align-middle p-1 font-bold`}>
            <span className={`m-auto ${textSize}`}>{userInitials}</span>
        </div>
    );
}