import {
  Button,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { toggleregpop } from "../Context/action";
import { AuthContext } from "../Context/AuthContext";

let initial = {
  email: "",
  password: "",
};
function Login({ is, setis }) {
  const [user, setuser] = useState(initial);
  // const {isAuth,loginUser,token} = useContext(AppContex)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { stateB, dispatchB, toggleUser, isAuth, email } =
    useContext(AuthContext);

  function set(event) {
    setis(false);
  }
  function newset() {
    setis(false);
    myfun();
  }
  function sett() {
    setis(false);
    if (stateB === false) {
      dispatchB(toggleregpop(stateB));
    }
  }
  let userData = JSON.parse(localStorage.getItem("userData")) || [];

  function myfun(event) {
    console.log(isAuth, email);
    let data = {
      email: user.email,
      password: user.password,
    };
    if (checklogin(data.email, data.password) === true) {
      localStorage.setItem("login", JSON.stringify(data));
      alert("Login successful");
      let x = user.email.slice(0, 11);
      toggleUser(x + "...");

      // window.location.href = "index.html";
    } else {
      alert("Wrong Email or Password");
    }
  }
  function checklogin(email, password) {
    let filter = userData.filter(function (elem) {
      return elem.email === email && elem.password === password;
    });
    if (filter.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  const handle = (event) => {
    // event.preventDefault();
    const { value, name } = event.target;
    setuser({
      ...user,
      [name]: value,
    });
  };
  // onOpen()
  return (
    <>
      <Modal isOpen={is} onClose={set} size="xl">
        <ModalOverlay />
        <ModalContent
          backgroundColor="#85FFBD"
          backgroundImage="linear-gradient(45deg, #85FFBD 53%, #FFFB7D 100%)"
          // background-color: ;
          // background-image: ;

          //  backgroundColor="pink-red"
        >
          <ModalHeader size="xs" width="auto" height="fit-content">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h1>LOGIN</h1>
            </div>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            paddingLeft="-50px"
            paddingBottom="20px"
            border=""
            width="60%"
            margin="auto"
            height="fit-content"
          >
            <div
              style={{
                border: "",
                height: "fit-content",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <form>
                <br></br>
                <Input
                  variant="filled"
                  onChange={handle}
                  value={user.email}
                  name="email"
                  type="email"
                  class="input-box"
                  placeholder="Your Email Id"
                  id="email"
                />
                <br></br>
                <br></br>
                <Input
                  variant="filled"
                  onChange={handle}
                  value={user.password}
                  name="password"
                  type="password"
                  class="input-box"
                  placeholder="Password"
                  id="password"
                />
                <br></br>
                <br></br>
                {/* <!-- <button type="submit" class="submit-btn">Submit</button> --> */}
                <Button onClick={newset} value="Login" id="btn">
                  Login
                </Button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button
                  variant="ghost"
                  onClick={sett}
                  value="Register"
                  id="btn"
                >
                  Register
                </Button>
              </form>
            </div>
          </ModalBody>

          {/* <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={set}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
}

export default Login;
