import { Box, Button, Img, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { giftdata } from "../Context/giftdata";
import "./Gift.css";

function Gift() {
  return (
    <div>
      <div class="span1gift">
        <span
          //  style="cursor: pointer;"
          id="achagift"
          class="span1gift"
        >
          <a
            // style="outline:none; text-decoration: none; color: black;"
            href="index.html"
          >
            Home
          </a>
        </span>
        <span id="ico">&nbsp;&gt;</span>
        <span id=" acha1gift" class="span1gift">
          Gift Hampers
        </span>
      </div>
      <div id="headgift">
        <span
        //  style="width:300px;height:50px ;font-size:50px;margin-left: 100px;margin-bottom: 0px;padding:0px">
        >
          Gift Hampers
        </span>
        <div id="filterthings">
          <select class="tagsgift" id="fill" onchange="gofilter()">
            <option value="">Filter by price</option>
            <option value="5000">Rs 0-5000</option>
            <option value="10000">Rs 5000-10000</option>
            <option value="15000">Rs 10000 above</option>
          </select>
          <select class="tagsgift" name="sort" id="sort">
            <option value="0">Sort by</option>
            <option value="1">Low to High</option>
            <option value="2">High to Low</option>
          </select>
          {/* <!-- <input class="tagsgift"> --> */}
        </div>
      </div>
      {/* <div id="boundaryy"> */}
      <SimpleGrid
        id="boundaryy"
        // border={"3px solid red"}
        // width="70%"
        columns={[2, null, 3]}
        // spacing="20px"
      >
        {giftdata.map((el, i) => {
          return (
            <Box
              id="boxgift"
            //   border={"3px solid red"}
            //   marginRight="0px"
            //   overflow="hidden"
            //   bg=""
            //   height="250px"
            //   width="200px"
            >
              <Img className="imagegift" src={el.img}></Img>
              <Text>DELIVERY IN 90 MINUTES</Text>
              <Text>₹ {el.price}</Text>
              <Text>{el.name}</Text>
              <Img
                className="cartthing"
                src="https://www.naturesbasket.co.in/Images/CartAddBtn.PNG"
              ></Img>
            </Box>
          );
        })}
      </SimpleGrid>
    </div>

    // </div>
  );
}

export default Gift;
