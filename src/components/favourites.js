import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useEffect, useState } from "react";
import FavItem from "./FavItem";



function Favourites () {
    const [results, setResults] = useState([]);
    const [serverLink, setServerLink] = useState(process.env.REACT_APP_SERVER);

    useEffect(() => {
        const getFaveMakeup = async () => {
            let resultMakeup = await axios.get(`${serverLink}/makeup`);
            console.log("getFaveMakeup", resultMakeup.data);
            setResults(resultMakeup.data);
            console.log(results);

        };
        getFaveMakeup();
    }, [])

    return(
        <div
        style={{
            display: "flex",
            flexFlow: "row",
            flexWrap: "wrap",
            padding: "4rem",
            }}
        >
                    {/* {showItems && */
            results.map((item, index) => {
                return(
            <FavItem
                index={index}
                item={item}
              // deleteDigimon = {deleteDigimon}
              // showUpdateModalProps = {showUpdateModal}
            />
                );
            })}



        </div>
    )


}

export default Favourites;