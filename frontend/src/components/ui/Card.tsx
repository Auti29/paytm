export default function Card({children}: {children: React.ReactNode}) {
    return (
            <div className="border-0 rounded-md flex flex-col w-[full] p-3 mt-4  border-gray-500">
                {children}
            </div>
    );
}