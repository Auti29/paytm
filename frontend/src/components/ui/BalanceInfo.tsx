export default function BalanceInfo(){
    return (
        <div className="flex items-center justify-between pl-2.5 pr-2.5 pt-0.5 pb-0.5 border rounded-xl mt-2 bg-gray-700 text-white">
            <div>
                <span className="mr-6 font-bold">Your balance</span>
            <span className="text-green-400">$10,000.00</span>
            </div>
            <div className="text-xs underline cursor-pointer">
                <span>click here to fetch current balance</span>
            </div>
        </div>
    );
}