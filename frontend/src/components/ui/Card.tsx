export default function Card({children}: {children: React.ReactNode}) {
    return (
            <div className="border-0 rounded-md flex flex-col shadow-lg w-[full] p-3 mt-4  border-gray-500">
                {children}
            </div>
    );
}