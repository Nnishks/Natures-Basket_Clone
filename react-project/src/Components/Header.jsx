import React, { useContext, useEffect, useRef } from "react";
import "./Header.css"; //nav
import {
  Button,
  Container,
  Divider,
  FormControl,
  FormHelperText,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Show,
  Skeleton,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  CheckIcon,
  SearchIcon,
  StarIcon,
} from "@chakra-ui/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState, useReducer } from "react";
import reducer from "../Context/Reducer";
import {
  setinputpin,
  setpin,
  setcity,
  setcartLength,
  toggleis,
  toggleregpop,
} from "../Context/action";
import { AuthContext } from "../Context/AuthContext";
import Login from "./Login";
import Register from "./Register";
import { giftdata } from "../Context/giftdata";

// const cartNum=JSON.parse(localStorage.getItem("cartmei")) || [];
// dispatch(setcartLength(cartNum.length))
const inival = {
  pin: null,
  inputpin: null,
  city: "Mumbai",
};

function Header() {
  const [state, dispatch] = useReducer(reducer, inival);
  const { stateA, dispatchA } = useContext(AuthContext);
  const [loignstate, setloginstate] = useState(false);
  const { stateB, dispatchB } = useContext(AuthContext);
  const { isAuth, email, logout } = useContext(AuthContext);
  const [navSearchState, setnavSearchState] = useState([]);
  const [Shown, setShown] = useState("");
  const [srchinp, setsrchinp] = useState("");
  const ref = useRef();
  useEffect(() => {
    dispatchA(setcartLength);
  }, [stateA]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  function dekh() {
    if (loignstate === false) {
      setloginstate(true);
    } else {
      setloginstate(false);
    }
  }

  function pinwithcity(state) {
    let y = +state.inputpin;
    console.log(typeof y);
    if (y === 400001) {
      return "Mumbai";
    } else if (y === 411004) {
      return "Pune";
    } else if (y === 560063) {
      return "Bengaluru";
    } else if (y === 110001) {
      return "Delhi NCR";
    } else {
      return "mumbai";
    }
  }
  function handlechange(e) {
    dispatch(setinputpin(e.target.value));
  }

  function pincheck(event) {
    event.preventDefault();
    console.log(state.inputpin);
    dispatch(setpin(state.inputpin));
    let x = pinwithcity(state);
    console.log(x);
    dispatch(setcity(x));
  }
  function setpinvalue(e) {
    console.log(2, e.target.value);
    dispatch(setcity(e.target.value));
    console.log(3);
    dispatch(setinputpin(null));
    dispatch(setpin(null));
    // pincheck()
  }
  function handle(e) {
    setsrchinp(e.target.value);
  }
  function logoutt() {
    logout();
    localStorage.removeItem("login");
    return alert("logout successfull");
  }
  let id;
  function debouncee(e) {
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(function () {
      srch(e);
    }, 100);
    //srch(Event)
  }

  function srch(e) {
    //setShown(true)
    console.log(e.target.value);
    let searchtar = e.target.value;
    setShown(searchtar);
    let newsearchdata = giftdata.filter((el) => {
      return el.name.includes(searchtar);
    });
    setnavSearchState(newsearchdata);
    // console.log(newsearchdata)
  }

  function searchkaro() {
    localStorage.removeItem("search");

    localStorage.setItem("search", JSON.stringify(srchinp));
    setShown("");
    setsrchinp("");
    //setnavSearchState(x);
  }
  // console.log(Shown)
  //console.log(loignstate);
  return (
    <div className="navBox">
      <div className="navLogoDiv">
        <Link to="/">
          <img
            className="navLogo"
            src="https://www.naturesbasket.co.in/Images/logosnew.png?v=2"
            alt="logo"
          />
        </Link>
      </div>

      <div className="navCenter">
        {/* nav center*/}
        <div className="navMiddleUp">
          <Breadcrumb spacing="8px" separator="|">
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to="#">
                Online Slots Availability
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to="#">
                Fresh &amp; Fast
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink as={Link} to="#">
                Store Locator
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to="#">
                Contact Us
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <Select
                width="130px"
                placeholder="Mumbai"
                onChange={setpinvalue}
                value={state.city}
              >
                <option value="Mumbai">Mumbai</option>
                <option value="Pune">Pune</option>
                <option value="Delhi NCR">Delhi NCR</option>
                <option value="Bengaluru">Bengaluru</option>
                <option value="Thane">Thane</option>
                <option value="Navi Mumbai">Navi Mumbai</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Raigarh MH">Raigarh MH</option>
              </Select>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <div onClick={onOpen} id="enterpindiv">
                <img
                  className="updpencil"
                  alt="err"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAbCAYAAAB4Kn/lAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAGMSURBVEhL7ZU5i8JQFIVPIjbuglaKiqKgldra+tNTW7lbiKKiICK4r5FzJwZGnppipssHISHL9w7nJkTbbDYm/gHd2v85rtjGFdso3+Nut4tWq4Xz+Yx8Po9KpQKPx2NddYYycbvdxn6/RzQaRTgcRqfTwWq1wvV6te74jlLMpPF4HKFQCMvlUhaifLFYOJYrxblcDtlsVo5ZyWw2Q7PZxGAwkOT3+12ufUIprlaruFwumE6n2G63ME1Tqun1emg0GnL8Ta4Uc1DJZBLpdBqBQACapsn54/GIyWQCwzCkok+1KMUkGAyKuFgsipyLMeVut8NoNJJq5vP5W/lbsa7rMsBSqSSdc5BPOavo9/sYDodYr9fWE795KyaURyIR1Go1Se/3++1aDocDxuOxbKq+P4oJRV6vF+VyWWphRcTn8yGTySAWi4n8Fcd/EKbiwNgvt0QiIQueTidJX6/XrTt/+Jr4CWthukKhIL2nUin5kPiWcIivOBYTyvmJs5Lb7SZJKWfqV9yfqY0rtgAegm7K9Yn/f5UAAAAASUVORK5CYII="
                />
                <input
                  className="enterpininput"
                  type="text"
                  //   id="enterpin"

                  value={state.pin || "enter pin"}
                  readOnly="true"
                />
              </div>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="navSearchBox">
          <InputGroup>
            <Input
              ref={ref}
              onInput={debouncee}
              width="820px"
              className="navSearch"
              type="text"
              // focusBorderColor='pink.400'
              // onChange={debouncee}
              placeholder="Start shopping..."
              value={srchinp}
              onChange={handle}
              //  value={Shown}
              // autocomplete="o"
            ></Input>
            <Link to={`/gift/${srchinp}`}>
              <InputRightAddon
                onClick={searchkaro}
                bgColor="#92be4d !important"
                children={<SearchIcon color="white" />}
              />
            </Link>
          </InputGroup>
        </div>

        <div className="blwsrch" style={{ display: Shown ? "block" : "none" }}>
          {navSearchState.map((el) => {
            return (
              <Link to={`/gift/${el.name}`}>
                <p
                  onClick={() => {
                    localStorage.setItem("singleprod", JSON.stringify(el));
                    setShown("");
                    setsrchinp("");
                    // ref.target.value=""
                    localStorage.removeItem("search");
                    // setsinglepageElem(el)
                  }}
                >
                  {el.name}
                </p>
                <Divider></Divider>
              </Link>
            );
          })}
        </div>
        {/* hmm middle ka upper */}
      </div>
      {/* nav center end*/}
      <div className="navEndDiv">
        <div className="navend1">
          {isAuth ? (
            <div
              style={{
                fontSize: "15px",
                padding: "0px",
                marginTop: "0px",
                marginLeft: "-40px",
                width: "200px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>{email}</div>

              <div onClick={logoutt}>Logout</div>
            </div>
          ) : (
            <>
              <div onClick={dekh}>
                <span className="upd" id="loginnav">
                  login
                </span>
              </div>
              <div>
                <span className="upd">|</span>
              </div>
              <div onClick={() => dispatchB(toggleregpop(stateB))}>
                <span className="upd" id="regnav">
                  {" "}
                  Register
                </span>
              </div>
            </>
          )}
        </div>

        <div className="navend2">
          <div>
            <StarIcon className="star" />
          </div>

          <div>
            <span id="upd">|</span>
          </div>

          <div>
            <Link to="/cart">
              <img
                className="cartImg"
                src="https://tse1.mm.bing.net/th?id=OIP.A5xDkicpGAHdvTFK5fPecAHaHa&pid=Api&P=0"
                alt=""
              />
            </Link>
          </div>

          <span className="cartNumber">{stateA}</span>
        </div>

        {/* end div end */}
      </div>

      <div>
        <Modal isCentered="true" size="2xl" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Enter Your Delivery Pincode</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* <Lorem count={2} /> */}
              <form action="submit" onSubmit={pincheck}>
                <HStack spacing={2}>
                  <input onChange={handlechange} type="text" />
                  <Button onClick={onClose} type="submit" variant="solid">
                    Submit
                  </Button>
                </HStack>
              </form>
            </ModalBody>

            <ModalFooter marginBottom="20px" padding="0px" paddingLeft="5px">
              <Text
                width="600px"
                flex="left"
                alignSelf="start"
                align="start"
                marginRight="20px"
                fontSize="1xl"
              >
                Entering your delivery pincode will allow us to show you the
                products available in your area and to ensure timely delivery.
              </Text>

              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>

      <Login is={loignstate} setis={setloginstate} />
      <Register />
    </div>

    // </Container>
  );
}

export default Header;
