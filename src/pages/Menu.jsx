// import React, { useState,useEffect } from 'react'
// import { useParams } from 'react-router-dom';
import { useParams } from "react-router-dom";
import useFetchMenu from "../util/customHooks/onlineStatus";
import useNetwork from "../util/customHooks/useNetwork";
import MenuCard from "../commonComponent/MenuCard";


function Menu() {
  const {id}=useParams();
    // const[menuData,setMenuData]=useState([])
    const myData=useFetchMenu(id)
    console.log(myData);
    const myNetwork=useNetwork()
    // console.log(myData,"myData");
    // const {id}=useParams();
    // console.log(id,"param");
    // const myApi= async()=>{
    //     const respData=await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
    //     const menuData = await respData.json();
    //     // console.log(menuData, "fetchedData");
    //     const myMenuList = menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    //     setMenuData(myMenuList)
    // }
    // useEffect(()=>{
    //     myApi();
    // },[]);
       
  return myNetwork?<h1>Something went wrong please check your internet..</h1> :(
<>
<h1 style={{textAlign:'center', margin:'10px 0px',fontWeight:'bolder'}}>Menu Card</h1>
    <div className='menuCardHolder'>
    {myData?.map((ele, ind) => (
          <MenuCard key={ind} data={ele?.card?.info || 'No name available'}  />
        ))}
    </div>
</>
  )
}
export default Menu
