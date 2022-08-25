import { MinusIcon, SmallAddIcon, SmallCloseIcon } from "@chakra-ui/icons";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { setcartLength } from "../Context/action";
import { AuthContext } from "../Context/AuthContext";
import "./cart.css";



let arrdata = JSON.parse(localStorage.getItem("cartmei")) || [];
function Cart() {
const {stateA,dispatchA} = useContext(AuthContext)
    
  const [cartitem, setcartitem] = useState(JSON.parse(localStorage.getItem("cartmei")) || []);
  const [total, settotal] = useState(0);
  useEffect(()=>{
    let totall=0;
    cartitem?.forEach((el)=>{
        return(
            totall+=(+el.price*+el.quantity)
        )
    })
    settotal(totall)
  },[cartitem])
 

  function change1(el,i){

    cartitem[i].quantity=Number(cartitem[i].quantity)+1
    // let x=arrdata[i]
    // console.log(arrdata)
   // setcartitem([])
     setcartitem([...cartitem])
    //  console.log(x)
  }
   function change2(el,i){
    if( Number(cartitem[i].quantity)>1){
        cartitem[i].quantity=Number(cartitem[i].quantity)-1
    //  let x=arrdata[i]
    console.log(arrdata)
    setcartitem([...cartitem])
    //   console.log(x)
     }
  }

  return (
    <div>
      {/* <div>
        <img
          alt="err"
          id="firstimg"
          src="https://www.naturesbasket.co.in/Images/logosnew.png?v=2"
          //    style="cursor: pointer; display: block ;margin-left:20px;"
        />
      </div> */}
      <section className="cartstart ">
        <h2 className="cartheader">CART</h2>
        <br></br>
        <br></br>
        <div className="cart-row">
          <span className="cart-item cart-header cart-column">ITEM</span>
          <span className="cart-price cart-header cart-column">PRICE</span>
          <span className="cart-quantity cart-header cart-column">
            QUANTITY
          </span>
        </div>

        <div className="cart-items">
          {cartitem.map((el, i) => {
            //totall+=el.price*el.quantity
            return (
              <div className="cart-row">
                <div className="cart-item cart-column">
                  <img src={el.img} alt="" className="cart-item-image" />
                  <span className="cart-item-title">{el.name}</span>
                </div>
                <span
                  style={{
                    height: "80px",
                    paddingTop: "40px",
                    paddingBottom: "20px",
                  }}
                  className="cart-price cart-column"
                >
                  {el.price}
                </span>
                <div className="cart-quantity cart-column">
                  {/* <span>-</span> */}
                  <InputGroup width="90px">
                    <InputLeftElement
                    onClick={()=>change2(el,i)}
                    //   pointerEvents="none"
                      color="gray.300"
                      fontSize="1.2em"
                      children={<MinusIcon color="#EB5757" />}
                    />
                    <Input value={el.quantity} />
                    <InputRightElement
                    onClick={()=>change1(el,i)}
                      children={<SmallAddIcon color="#EB5757" />}
                    />

                    {/* <InputLeftAddon ></InputLeftAddon>
                        <Input className='cart-quantity-input'/>
                        <InputRightAddon></InputRightAddon> */}
                  </InputGroup>

                  <button onClick={()=> {
                     cartitem.splice(el, 1);
                     setcartitem([...cartitem])
                    //  if(arrdata.length==)
      localStorage.setItem("cartmei", JSON.stringify(cartitem))
      dispatchA(setcartLength(cartitem.length))
      } }
       className="btn btn-danger cart-quantity-button">
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <form
          id="form1"
          // style="border:0px solid red; width:200px; margin-top: 10px; float:left"
        >
          <input
            id="name"
            // value=""
            //  style="border:0px solid red; width:100px"
            type="name"
            placeholder="promocode"
          />
          <input
            id="submit"
            type="submit"
            // value="apply code"
          ></input>
        </form>
        <div className="cart-total">
          <strong className="cart-total-title">Total</strong>
          <span className="cart-total-price">Rs:{total}</span>
        </div>
        <button className="btn btn-primary btn-purchase" type="button">
          PURCHASE
        </button>
      </section>
    </div>
  );
}

export default Cart;
