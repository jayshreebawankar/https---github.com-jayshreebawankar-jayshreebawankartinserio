import React, { useState } from 'react'


const Pokenmon = async() => {
    const [currPage, setCurrPage] = useState(1); // storing current page number
    const [prevPage, setPrevPage] = useState(0); // storing prev page number
    const [userList, setUserList] = useState([]); // storing list
    const [wasLastList, setWasLastList] = useState(false); // setting a flag to know the last list
  
    const response = await axios.get(
      `https://api.pokemontcg.io/v2/cards?page=1&pageSize=10`
    );

        console.log(response);
    // if (!response.data.data.length) {
    //   setWasLastList(true);
    // }
  
  return (
    <div>Pokenmon</div>
  )
}

export default Pokenmon