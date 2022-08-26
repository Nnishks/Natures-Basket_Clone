import { Button, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { toggleregpop } from '../Context/action'
import { AuthContext } from '../Context/AuthContext'
import "./Login.css"

let initial ={
  email:"",
  password:""
}
function Login({is,setis}) {
  const [user,setuser] = useState(initial)
      // const {isAuth,loginUser,token} = useContext(AppContex)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {stateB,dispatchB,toggleUser,isAuth,email} = useContext(AuthContext)

    function set(event){
       
        setis(false)
        
    }
    function newset(){
      setis(false)
      myfun()
      
    }
    function sett(){
        setis(false)
        if(stateB===false){
        dispatchB(toggleregpop(stateB))
        }
        
    }
    let userData = JSON.parse(localStorage.getItem("userData")) || [];

    function myfun(event) {
      console.log(isAuth,email)
      let data = {
          email:user.email,
          password:user.password,
      }
      if (checklogin(data.email, data.password) === true) {
          localStorage.setItem("login", JSON.stringify(data));
          alert("Login successful");
          let x=user.email.slice(0,11)
          toggleUser(x+"...")
         
         // window.location.href = "index.html";
      } else {
          alert("Wrong Email or Password");
      }
  }
  function checklogin(email,password) {
      let filter = userData.filter(function (elem) {
          return elem.email === email && elem.password === password;
      })
      if (filter.length > 0) {
          return true;
      } else {
          return false;
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
    // onOpen()
    return (
      <>
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
                        <input onChange={handle} value={user.email} name='email' style={{marginLeft:"50px"}} type="email" class="input-box" placeholder="Your Email Id" id="email" />
                        <br></br>
                        <br></br>
                        <input onChange={handle} value={user.password} name="password"  style={{marginLeft:"50px"}} type="password" class="input-box" placeholder="Password" id="password" />
                        <br></br>
                        <br></br>
                        {/* <!-- <button type="submit" class="submit-btn">Submit</button> --> */}
                        <input onClick={newset} style={{marginLeft:"50px"}}  value="Login" id="btn" />
                        <br></br>
                        <br></br>
                        <input onClick={sett} style={{marginLeft:"50px"}}  value="Register" id="btn" />
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
