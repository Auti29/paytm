import SearchUsersSection from "./SearchUsersSection";
import BalanceInfo from "./ui/BalanceInfo";
import Topbar from "./ui/Topbar";

export default function Dashboard(){
    return (
        <div className="w-[80%] m-auto">
            <div className="mt-4">
            <Topbar />
            </div>

            <div>
                <BalanceInfo />
            </div>

            <div>
                <SearchUsersSection />
            </div>
        </div>
    );
}