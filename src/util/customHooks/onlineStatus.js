import { useEffect, useState } from "react";
import { my_url } from "../constents/constents";

// this my custom hook for fetching card menu
 const useFetchMenu = (id)=>{
    // console.log(id);
    const[data,setData]=useState([]);  
    const myApi= async()=>{
        const respData=await fetch(`${my_url}${id}`);
        const menuData = await respData.json();
        const myMenuList = menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards; 
        setData(myMenuList)
    }
    useEffect(()=>{
        myApi();
    },[]);
    return  data ;
}
export default useFetchMenu
