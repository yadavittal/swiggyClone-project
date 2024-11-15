import React, { useEffect, useState } from "react";
import Card from "../commonComponent/Card";

function Body() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

  const apiData = async () => {
    const resp = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const response = await resp.json();
    // console.log(response);
    const dataResp = response.data;
    // console.log(response);
    
    const finalData =dataResp?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    // const actualData = finalData.map((ele) => {
    //   return ele;
    // });
    //  const cartsData=actualData.flat()
    console.log(finalData);
    setData(finalData);
  };

  useEffect(() => {
    apiData();
  }, []);

  return (
    <div className="body">
      <article className="bodyContainer">
        <input
          type="text"
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
            // console.log((input));
          }}
        />
        <button>Search</button>
      </article>
      <article className="cardHolder">
       
        {data?.map((ele, ind) => (
          <Card key={`${ind}${ele.id}`} myData={ele} />
        ))}
      </article>
    </div>
  );
}
export default Body;
