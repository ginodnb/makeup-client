import { useEffect, useState } from "react";
import axios from "axios";
// import Item from "./item";

function AllDataAPI() {

    const [results, setResults] = useState([]);
    const [serverLink, setServerLink] = useState(process.env.REACT_APP_SERVER)
    const [showItems, setShowItems] = useState([]);

    // const [results, setResults] = useState([]);
    useEffect(() => {
        const getMakeup = async() =>{
            let resultAPI = await axios.get(
                `${serverLink}/makeupApi`
                );
                setResults(resultAPI.data);
                setShowItems(true);
                setServerLink();
        };
        getMakeup();
    },[]);



    return(
        <div>
            {/* <h1>Get makeup</h1>
            <h3>Choose your favourites</h3>
            <div>
                {showItems &&
                results.map((item,index)=>(<Item key={index} item={item}/>))}
                
            </div> */}

        </div>
    )
}

export default AllDataAPI;