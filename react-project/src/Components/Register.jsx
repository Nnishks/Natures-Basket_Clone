import React, { useContext, useState } from "react";

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
import { AuthContext } from "../Context/AuthContext";
import { toggleregpop } from "../Context/action";

let initial = {
  email: "",
  password: "",
};

function Register() {
  const { stateB, dispatchB } = useContext(AuthContext);
  const [user, setuser] = useState(initial);
  const { isOpen, onOpen, onClose } = useDisclosure();
  function set(event) {
    // myfun()
    dispatchB(toggleregpop(stateB));
  }
  function newset() {
    dispatchB(toggleregpop(stateB));
    myfun();
  }
  let userData = JSON.parse(localStorage.getItem("userData")) || [];

  function myfun(event) {
    let data = {
      email: user.email,
      password: user.password,
      // sub: form.sub.value,
    };

    if (checkMail(data.email) === true) {
      userData.push(data);
      localStorage.setItem("userData", JSON.stringify(userData));
    } else {
      alert("Account Already Exists");
    }
  }

  function checkMail(email) {
    let filtered = userData.filter(function (elem) {
      return email === elem.email;
    });
    if (filtered.length > 0) {
      return false;
    } else {
      return true;
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
  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <Modal isOpen={stateB} onClose={set} size="xl">
        <ModalOverlay />
        <ModalContent
          // background-color: ;
          // background-image: ;

          backgroundColor="#85FFBD"
          backgroundImage="linear-gradient(45deg, #85FFBD 53%, #FFFB7D 100%)"
        >
          <ModalHeader size="xs" width="auto" height="fit-content">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h1>Register</h1>
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
                <Button onClick={newset} value="reg" id="btn">
                  Register
                </Button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button onClick={set} value="login" id="btn" variant="ghost">
                  Login
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

export default Register;
