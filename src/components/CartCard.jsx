
import {Flex,Image,Text,Box,Button} from "@chakra-ui/react"
import axios from "axios"
import {useEffect, useState} from "react"
function CartCard({image,name,cuttoff,ram,price,quantity,el,handleData}){
      const [number,setNumber]=useState(1)
    const handlesubtract=async()=>{
        setNumber(number-1)
        let send={
           no:el.no-1,
           subtotal:el.subtotal-el.priceA
        }
        let res=await axios.patch(`http://localhost:3004/profile/${el.id}`,{
            ...send
        })
        
        
    }
    const handleAdd=async()=>{
        setNumber(number+1)
        let send={
            no:el.no+1,
            subtotal:el.subtotal+el.priceA
         }
         let res=await axios.patch(`http://localhost:3004/profile/${el.id}`,{
             ...send
         })
        
    }
    const handleRemove=async()=>{
        setNumber(Number+1)
        let res=await axios.delete(`http://localhost:3004/profile/${el.id}`)
    }
    useEffect(()=>{
        handleData()
    },[number])
    return(
        <div>
             <Flex justifyContent={"space-between"} marginTop="20px">
                <Box textAlign={"start"}>
                    <Flex gap="30px">
                    <Image width="100px" src={image} />
                <Box>
                <Text fontSize="20px" fontWeight="600">{name}</Text>
                <Text fontWeight={"500"} color="grey">{ram}</Text>
                <Text fontWeight={"500"} color="grey">Seller: FlipKart Commerce</Text>
                <Flex alignItems={"center"} gap="6px">
                <Text fontWeight={"500"} color="grey" textDecoration={"line-through"}>{cuttoff}</Text>
                <Text fontSize="20px" fontWeight={"600"}>{price}</Text>
                </Flex>
                <Text>+ ₹29 Secured Packaging Fee</Text>
                <Flex gap="30px" marginTop="15px">
                <Flex gap="10px" >
                <Button disabled={el.no==1} fontSize="16px" fontWeight="600 " borderRadius="50%" onClick={handlesubtract}>-</Button>
                <Button fontSize="16px" fontWeight="600 ">{quantity}</Button>
                <Button onClick={handleAdd} fontSize="16px" fontWeight="600 " borderRadius="50%">+</Button>
                </Flex>
                <Flex gap="20px" fontSize="18px" fontWeight={"500"}>
                    <Text>Save For Later</Text>
                    <Text onClick={handleRemove}>Remove</Text>
                </Flex>
                </Flex>
                
                </Box>
                    </Flex>
                
                </Box>
                    <Box>
                    <Text>
                        Delivery by Tommorrow
                    </Text>
                </Box>
             </Flex>
        </div>
    )
}
export default CartCard