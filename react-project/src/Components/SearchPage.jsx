import { Box, Img, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import "./Gift.css";

function SearchPage() {
  const { singlepageElem } = useContext(AuthContext);
  const [query,setQuery] = useSearchParams();

  const selct= query.get('name')

  const [check,setcheck] = useState(selct)

useEffect(()=>{
    setQuery({name:singlepageElem.name})
   // console.log(params.get("name"))
   console.log(query)
},[])
// console.log(params)
 // console.log(singlepageElem);
// console.log(params)

  return (
    <SimpleGrid
      id="boundaryy"
      // border={"3px solid red"}
      // width="70%"
      columns={[2, null, 3]}
      // spacing="20px"
    >
      {/* {singlepageElem.map((el, i) => { */}
      
      <Box
        id="boxgift"
        //   border={"3px solid red"}
        //   marginRight="0px"
        //   overflow="hidden"
        //   bg=""
        //   height="250px"
        //   width="200px"
      >
        <Img className="imagegift" src={singlepageElem.img}></Img>
        <Text>{query}</Text>
        <Text>DELIVERY IN 90 MINUTES</Text>
        <Text>₹ {singlepageElem.price}</Text>
        <Text>{singlepageElem.name}</Text>
        <Img
          className="cartthing"
          src="https://www.naturesbasket.co.in/Images/CartAddBtn.PNG"
        ></Img>
      </Box>
      );
    </SimpleGrid>
  );
}

export default SearchPage;
