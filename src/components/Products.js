import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";




function Products () {
    const [results, setResults] = useState([]);
    const [serverLink, setServerLink] = useState(process.env.REACT_APP_SERVER);
    const [showItems, setShowItems] = useState(false);

    useEffect(() => {
        const getFaveMakeup = async () => {
            let resultMakeup = await axios.get(`${serverLink}/product`);
            console.log("getFaveMakeup", resultMakeup.data);
            setResults(resultMakeup.data);
            console.log(results);

        };
        getFaveMakeup();
    }, [])

    


}

export default Products;