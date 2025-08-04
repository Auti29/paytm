// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function useFetch(url: string){
//     const [loading, setLoading]  = useState<boolean>(false);
//     const [error, setError] = useState<{[key: string]: string} | null>(null);
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         setLoading(true);
//         async function fetchData() {
//             const res = await axios.post(url);
//             const resData = await res.data;
//             setData(resData);
            
//         }

//         fetchData();
//     }, [url])
// }