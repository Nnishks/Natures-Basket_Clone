import { Box, Button, Img, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useReducer } from "react";
import { giftdata } from "../Context/giftdata";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import "./Gift.css";
import { setcartLength } from "../Context/action";
import "./Gift.css";

let selectInput = {
  filterr: "",
  sortt: "",
};
// let initialFilterstate={
//   fil:0,
//   sortt:0
// }
let xx = giftdata;
function Gift() {
  let topushincart = JSON.parse(localStorage.getItem("cartmei")) || [];
  const { stateA, dispatchA } = useContext(AuthContext);
  const [mapdata, setmapdata] = useState(giftdata);

  //const [mngFilter,dispatchmngFilter] =useReducer(initialFilterstate)
  const [slcin, setslcin] = useState(selectInput);
  useEffect(() => {
    gofilter();
    //  sortkaro()
  }, [slcin.filterr]);

  useEffect(() => {
    sortkaro();
  }, [slcin.sortt]);
  //console.log(slcin.sortt)

  function handle(e) {
    const { name, value } = e.target;
    //console.log(e.target.value)
    setslcin({ ...slcin, [name]: value });
    // gofilter()
  }
  console.log(slcin);

  function gofilter() {
    let select = +slcin.filterr;
    if (slcin.filterr === "") {
      setmapdata(giftdata);
    } else if (select === 5000) {
      let fdata = giftdata.filter((el) => {
        return Number(el.price) < select;
      });
      setmapdata(fdata);
    } else if (select === 10000) {
      let fdata = giftdata.filter((el) => {
        return Number(el.price) < select && Number(el.price) > select - 5000;
      });
      setmapdata(fdata);
    } else {
      let fdata = giftdata.filter((el) => {
        return Number(el.price) >= select - 5000;
      });
      setmapdata(fdata);
    }
  }
  function sortkaro() {
    // let sortdata=giftdata
    let select = +slcin.sortt;
    console.log(select);
    if (slcin.sortt === "") {
      setmapdata(giftdata);
    }
    if (select === 1) {
      //console.log(8)
      let x = [...mapdata].sort(function (a, b) {
        return a.price - b.price;
      });
      setmapdata(x);
    }
    if (select === 2) {
      setmapdata(
        [...mapdata].sort(function (a, b) {
          return b.price - a.price;
        })
      );
    }
  }
  return (
    <div>
      <div className="span1gift">
        <span
          //  style="cursor: pointer;"
          id="achagift"
          className="span1gift"
        >
          <a
            // style="outline:none; text-decoration: none; color: black;"
            href="index.html"
          >
            Home
          </a>
        </span>
        <span id="ico">&nbsp;&gt;</span>
        <span id=" acha1gift" className="span1gift">
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
          <select
            name="filterr"
            value={slcin.filterr}
            className="tagsgift"
            id="fill"
            onChange={handle}
          >
            <option value="">Filter by price</option>
            <option value="5000">Rs 0-5000</option>
            <option value="10000">Rs 5000-10000</option>
            <option value="15000">Rs 10000 above</option>
          </select>
          <select
            onChange={handle}
            className="tagsgift"
            name="sortt"
            value={slcin.sortt}
            id="sort"
          >
            <option value="">Sort by</option>
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
        {mapdata.map((el, i) => {
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
                onClick={() => {
                  //dispatch(setcartLength)
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
    </div>

    // </div>
  );
}

export default Gift;
