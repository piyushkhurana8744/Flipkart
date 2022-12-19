import Navbar from "../components/Navbar"
import {Box,Text,Flex,Button, Divider} from "@chakra-ui/react"
import { useState,useEffect } from "react"
import axios from "axios"
import CartCard from "../components/CartCard"
function Cart(){
    const [product,setProduct]=useState([])
    const [length,setLength]=useState(0)
    const getData=async()=>{
        let res=await axios.get(`http://localhost:3004/profile`)
        setProduct(res.data)
        setLength(res.data.length)
    }
    const total=product.reduce((acc,el)=>{
        return acc+el.subtotal
    },0)
    const discount=Math.ceil(total*0.3)
    console.log(total)
    useEffect(()=>{
      getData()
    },[])
    console.log(product)
    console.log(length)
    return (
        <Box>
            <Navbar />
            <Flex width="90%" margin="auto">
            <Box width={"65%"} margin="auto"marginTop="20px">
            <Flex boxShadow= " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"  fontSize="20px" padding={"10px"} display="flex" justifyContent={"space-between"} fontWeight="500" marginTop="10px" >
                <Text>FlipKart ({length} items)</Text>
                <Text>Grocery</Text>
            </Flex>
            <Flex boxShadow= " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"  fontSize="17px" padding={"10px"} display="flex" justifyContent={"space-between"} fontWeight="500" marginTop="10px" alignItems={"center"} margin="auto">
                <Text>Deliver to: GautamBudh Nagar-201301</Text>
               <Button>Change</Button>
            </Flex>
            <Box  boxShadow= " rgba(0, 0, 0, 0.24) 0px 3px 8px" marginTop="20px" padding="30px" margin="auto">
                {product.map(el=><CartCard key={el.id} image={el.image} name={el.name} ram={el.ram} cuttoff={el.cuttoff} price={`₹${el.subtotal}`} quantity={el.no}  el={el} handleData={getData} />)}
            </Box>
            <Flex justifyContent={"end"}>
            <Button  padding={"25px 40px 25px 40px"} backgroundColor="#fb641b" color="#fff" fontSize="24px" fontWeight={"500"}>Place Order</Button>
            </Flex>
            
            </Box>
           <Box width="30%" textAlign={"start"} marginTop="30px"  boxShadow= " rgba(0, 0, 0, 0.24) 0px 3px 8px" height={"330px"} padding="20px" >
                <Text fontSize={"24px"} color="grey" fontWeight={"600"}>Price Details</Text>
                <Divider border="3px solid "></Divider>
                <Flex justifyContent={"space-between"} marginTop="10px">
                    <Text fontSize={"17px"} fontWeight="500">Price  ({length} items)</Text>
                    <Text fontSize={"17px"} fontWeight="500">₹{total}</Text>
                </Flex>
                <Flex justifyContent={"space-between"} marginTop="10px">
                    <Text fontSize={"17px"} fontWeight="500">Discount</Text>
                    <Text color="green" fontSize={"17px"} fontWeight="500">-₹{discount}</Text>
                </Flex>
                <Flex justifyContent={"space-between"} marginTop="10px">
                    <Text fontSize={"17px"} fontWeight="500">Delivery Charges</Text>
                    <Text color="green" fontSize={"17px"} fontWeight="500">Free</Text>
                </Flex>
                <Flex justifyContent={"space-between"} marginTop="10px">
                    <Text fontSize={"17px"} fontWeight="500">Secured Packaging Fee</Text>
                    <Text fontSize={"17px"} fontWeight="500">₹{29*length}</Text>
                </Flex>
                <Divider border="3px solid " marginTop={"10px"} ></Divider>
                <Flex justifyContent={"space-between"} marginTop="10px" alignItems={"center"}>
                    <Text fontSize={"22px"} fontWeight="500">Total Amount</Text>
                    <Text fontSize={"20px"} fontWeight="500">₹{Math.ceil(total-discount)}</Text>
                </Flex>
                <Divider border="3px solid " marginTop={"10px"} ></Divider>
                <Text marginTop="10px" color="green" fontSize={"18px"} fontWeight="500">You will save ₹{discount-29*length} on this order</Text>
            </Box>
            </Flex>
            
        </Box>
    )
}
export default Cart