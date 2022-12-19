import { Box, Flex, Heading, Image ,Text,Input, Button,Icon,InputGroup,InputRightElement,} from '@chakra-ui/react'
import {AiOutlineShoppingCart} from "react-icons/ai"
import {GoSearch} from "react-icons/go"
import HoverMenu from "./Menu"
import {BsQuestionSquareFill} from "react-icons/bs"
import {MdNotifications} from "react-icons/md"
import {SlGraph} from "react-icons/sl"
import {BsCloudArrowDownFill} from "react-icons/bs"
import {Link} from "react-router-dom"
import axios from 'axios'
import { useState,useEffect, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
function Navbar(){
    const [name,setName]=useState({})
    const {isAuth}=useContext(AuthContext)
    console.log(isAuth)
    const getData=async()=>{
        let res=await axios.get(`http://localhost:3004/login`)
        setName(res.data)
    }
    
    useEffect(()=>{
     getData()
    },[])
    return(
        <Box backgroundColor={"#2874f0"} color="white">
            <Flex width="80%" margin="auto" fontWeight={"500"} justify={"space-around"} alignItems="center" gap="17px">
        <Flex alignItems="center" gap="17px">
            <Image  width={{lg:"100px"}}  src='https://i.postimg.cc/gJbQg5LW/flipkart-logo-removebg-preview.png' />
            <InputGroup width="400px" size={"sm"}>
      <Input
        pr='4.5rem'
        type="text"
        placeholder='Search for products brand and more'
        backgroundColor={"#fff"}
      />
      <InputRightElement width='4.5rem'>
        <Icon as={GoSearch} color="#2874f0"/>
      </InputRightElement>
    </InputGroup>
        </Flex>
        
        <Box>
            {isAuth? <Text>{name.firstname} {name.lastname}</Text>:<Link to="/login"><Button color="#2874f0" size={"sm"} width="100px">Login</Button></Link>}
        </Box>
       
        <Text fontSize={"17px"} marginLeft="17px">Become a Seller</Text>
        <HoverMenu name="More" item1={<Flex  gap="10px"><Icon color="#2874f0" fontSize="30px" as={MdNotifications}/>
        <Text>Notification Prefrence</Text></Flex>}
        item2={<Flex gap="10px"><Icon color="#2874f0" fontSize="30px" as={BsQuestionSquareFill}/>
        <Text>24x7 support</Text></Flex>}
        item3={<Flex gap="10px"><Icon color="#2874f0" fontSize="30px" as={SlGraph}/>
        <Text>Advertise</Text></Flex>}
        item4={<Flex gap="10px"><Icon color="#2874f0" fontSize="30px" as={BsCloudArrowDownFill}/>
        <Text>Download app</Text></Flex>}
        />
        <Link to="/cart">
        <Flex fontSize={"17px"} gap={1.5}><Icon fontSize="24px" as={AiOutlineShoppingCart}/>
        <Text>Cart</Text></Flex>
        </Link>
        
        
    </Flex>
        </Box>
    
    )
    
}
export default Navbar