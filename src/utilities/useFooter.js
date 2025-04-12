import { RES_LIST_URL } from "./constants";

const useFooter = () => {
    const [footerInfo, setFooterinfo] = useState("");

    useEffect( ()=>{
        fetchData();
    },[])
    const fetchData =async ()=>{
        console.log(RES_LIST_URL);
        const data = await fetch("");
    }
    return (
        console.log("footer")
    )
}