import React,{useEffect,useState} from "react";

import BikeCollection from "./BikeCollection";


function BikesPage(){
    const [bikes,setBikes] = useState([])
    // Fetching the bikes data from the server
    useEffect(()=>{
        fetch("https://json-server-vercel-lemon-nu.vercel.app/bikes")
        .then((res) => res.json())
        .then((data)=> setBikes(data))
        // when the component mounts(due to the empty array), fetch the bikes data and set it to the bikes state variable
    },[])

    return (
        <div>
            {/*Rendering the BikeCollection component with the bikes data as props */}
        <BikeCollection bikes={bikes}/>
        </div>
    )
}
export default BikesPage