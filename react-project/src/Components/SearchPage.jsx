import { Box, Img, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import "./Gift.css";
import { setcartLength } from "../Context/action";
import { giftdata } from "../Context/giftdata";

function SearchPage() {
  const x = useParams();
  const [data, setdata] = useState(giftdata);
  const { stateA, dispatchA } = useContext(AuthContext);
  const [singlepageElem, setsinglepageElem] = useState(
    JSON.parse(localStorage.getItem("singleprod")) || null
  );
  const [searchget, setsearchget] = useState(
    JSON.parse(localStorage.getItem("search")) || null
  );
  let topushincart = JSON.parse(localStorage.getItem("cartmei")) || [];

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("search"))) {
      let y = giftdata.filter((el) => {
        return el.name.includes(JSON.parse(localStorage.getItem("search")));
      });
      setdata(y);
    } else {
      setdata(null);
    }

    setsinglepageElem(JSON.parse(localStorage.getItem("singleprod")));
  }, [x]);

  if (data && JSON.parse(localStorage.getItem("search"))) {
    return (
      <SimpleGrid id="boundaryy" columns={[2, null, 3]}>
        {data.map((el, i) => {
          return (
            <Box id="boxgift">
              <Img className="imagegift" src={el.img}></Img>
              <Text>DELIVERY IN 90 MINUTES</Text>
              <Text>₹ {el.price}</Text>
              <Text>{el.name}</Text>
              <Img
                onClick={() => {
                  topushincart.push(el);
                  localStorage.setItem("cartmei", JSON.stringify(topushincart));
                  dispatchA(setcartLength(topushincart.length));
                }}
                className="cartthing"
                src="https://www.naturesbasket.co.in/Images/CartAddBtn.PNG"
              ></Img>
            </Box>
          );
        })}
      </SimpleGrid>
    );
  } else {
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
          {/* <Text>{query}</Text> */}
          <Text>DELIVERY IN 90 MINUTES</Text>
          <Text>₹ {singlepageElem.price}</Text>
          <Text>{singlepageElem.name}</Text>
          <Img
          onClick={() => {
            topushincart.push(singlepageElem);
            localStorage.setItem("cartmei", JSON.stringify(topushincart));
            dispatchA(setcartLength(topushincart.length));
          }}
            className="cartthing"
            src="https://www.naturesbasket.co.in/Images/CartAddBtn.PNG"
          ></Img>
        </Box>
      </SimpleGrid>
    );
  }
}

export default SearchPage;
