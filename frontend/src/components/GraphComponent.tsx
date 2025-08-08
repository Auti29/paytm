import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import type { TransactionI } from "./Dashboard";
import { useEffect, useState } from "react";

interface GraphPropsInterface {
    transactions: TransactionI[] | null
}

export default function GraphComponent({transactions}: GraphPropsInterface) {
    const  [data, setData] = useState<TransactionI[] | null>();

    useEffect(() => {
      if(transactions) {
        const arr = [...transactions].sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
        console.log(arr);
        setData(arr);
      }
    }, [transactions])
         
    return (
        <div className="w-[88%] flex m-auto">
            
            {data && 
            <>
                        <AreaChart width={800} height={240} data={data!}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2deb40" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#2deb40" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="updatedAt" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="amountTransferred" stroke="#07520f" fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart>
            </>}

        </div>
    );
}