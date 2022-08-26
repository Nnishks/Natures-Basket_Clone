import React, { useContext, useState } from 'react'

import { Button, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import { AuthContext } from '../Context/AuthContext'
import { toggleregpop } from '../Context/action'

let initial ={
  email:"",
  password:""
}

function Register() {
    const {stateB,dispatchB} = useContext(AuthContext)
    const [user,setuser] = useState(initial)
    const { isOpen, onOpen, onClose } = useDisclosure()

    function set(event){
        // myfun()
       dispatchB(toggleregpop(stateB))
    }
    function newset(){
      dispatchB(toggleregpop(stateB))
      myfun()
    }
    let userData = JSON.parse(localStorage.getItem("userData")) || [];

    function myfun(event) {
     
      let data = {
          
          email: user.email,
          password: user.password,
          // sub: form.sub.value,
      }

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

      })
      if (filtered.length > 0) {
          return false;
      } else {
          return true;
      }
  }
  
  const handle=(event)=>{
    // event.preventDefault();
     const {value,name}= event.target
     setuser({
       ...user,
       [name]:value
     })
   }
    return (
      <>
        {/* <Button onClick={onOpen}>Open Modal</Button> */}
       
        <Modal isOpen={stateB} onClose={set} size="4xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader size="xs" width="270px" height="10px">
                <div style={{display:"flex", marginLeft:"350px"}}>
                    <h1>Register</h1>
            </div>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody  border="2px solid red" width="70%" marginLeft="10%" height="300px">
                <div style={{border:"2px solid red",height:"200px",display:"flex", flexDirection:"column"}} >
            <form >
                <br></br>
                        <input onChange={handle} value={user.email} name="email" style={{marginLeft:"50px"}} type="email" class="input-box" placeholder="Your Email Id" id="email" />
                        <br></br>
                        <br></br>
                        <input onChange={handle} value={user.password} name="password" style={{marginLeft:"50px"}} type="password" class="input-box" placeholder="Password" id="password" />
                        <br></br>
                        <br></br>
                        {/* <!-- <button type="submit" class="submit-btn">Submit</button> --> */}
                        <input onClick={newset} style={{marginLeft:"50px"}}  value="reg" id="btn" />
                        <br></br>
                        <br></br>
                        <input onClick={set} style={{marginLeft:"50px"}}  value="login" id="btn" />
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

export default Register
