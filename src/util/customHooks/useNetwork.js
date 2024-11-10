import { useState } from "react"

const useNetwork = ()=>{

  const [network,setNetwork]=useState("");
  //  console.log(network,"mynetwork");
   window.addEventListener('offline',()=>{
    setNetwork(true)    
   })
   window.addEventListener('online',()=>{
     setNetwork(false)
   })
return network;
}
export default useNetwork;