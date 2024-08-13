import React,{useEffect,useState} from "react";
import Cart from "./Cart"
import BikeCollection from "./BikeCollection";

function BikesPage(){
    const [bikes,setBikes] = useState([])
    useEffect(()=>{
        fetch("http://localhost:8001/bikes")
        .then((res) => res.json())
        .then((data)=> setBikes(data))
    },[])

    return (
        <div>
            <Cart />
            <BikeCollection bikes={bikes}/>
        </div>
    )
}
export default BikesPage