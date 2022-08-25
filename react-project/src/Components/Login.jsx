import { Button, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import "./Login.css"

function Login({is,setis}) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    function set(){
        setis(false)
    }
    // onOpen()
    return (
      <>
        {/* <Button onClick={onOpen}>Open Modal</Button> */}
       
        <Modal isOpen={is} onClose={set} size="4xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader size="xs" width="270px" height="10px">
                <div style={{display:"flex", marginLeft:"350px"}}>
                    <h1>LOGIN</h1>
            </div>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody  border="2px solid red" width="70%" marginLeft="10%" height="300px">
                <div style={{border:"2px solid red",height:"200px",display:"flex", flexDirection:"column"}} >
            <form >
                <br></br>
                        <input style={{marginLeft:"50px"}} type="email" class="input-box" placeholder="Your Email Id" id="email" />
                        <br></br>
                        <br></br>
                        <input  style={{marginLeft:"50px"}} type="password" class="input-box" placeholder="Password" id="password" />
                        <br></br>
                        <br></br>
                        {/* <!-- <button type="submit" class="submit-btn">Submit</button> --> */}
                        <input style={{marginLeft:"50px"}} type="submit" value="Login" id="btn" />
                        
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
    )
  }

export default Login
