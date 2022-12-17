import Navbar from "../components/Navbar"
import {Box,Text,Flex,Button} from "@chakra-ui/react"
import { useState,useEffect } from "react"
import axios from "axios"
import CartCard from "../components/CartCard"
function Cart(){
    const [product,setProduct]=useState([])
    const getData=async()=>{
        let res=await axios.get(`http://localhost:3004/profile`)
        setProduct(res.data)
    }
    useEffect(()=>{
      getData()
    },[])
    console.log(product)
    return (
        <Box>
            <Navbar />
            <Text>Navbar</Text>
            <Flex boxShadow= " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" width={"50%"} fontSize="20px" padding={"10px"} display="flex" justifyContent={"space-around"} fontWeight="500" marginTop="10px">
                <Text>FlipKart</Text>
                <Text>Grocery</Text>
            </Flex>
            <Flex boxShadow= " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" width={"50%"} fontSize="17px" padding={"10px"} display="flex" justifyContent={"space-around"} fontWeight="500" marginTop="10px" alignItems={"center"}>
                <Text>Deliver to: GautamBudh Nagar 201301</Text>
               <Button>Change</Button>
            </Flex>
            <Box width="60%" boxShadow= " rgba(0, 0, 0, 0.24) 0px 3px 8px" marginTop="20px" padding="30px">
                {product.map(el=><CartCard image={el.image} name={el.name} ram={el.ram} cuttoff={el.cuttoff} price={el.price}/>)}
            </Box>
        </Box>
    )
}
export default Cart