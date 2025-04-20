import { RES_LIST_URL } from "./constants";

const useFooter = () => {
    const [footerInfo, setFooterinfo] = useState("");

    useEffect( ()=>{
        fetchData();
    },[])
    const fetchData =async ()=>{
        console.log(RES_LIST_URL);
        const data = await fetch("RES_LIST_URL");
        const json = await data.json();
        setFooterinfo(json.data.cards[10].card.card.cities);
    }
    return [footerInfo,setFooterinfo];
}

export default useFooter;