
import {Flex,Image,Text,Box} from "@chakra-ui/react"
function CartCard({image,name,cuttoff,ram,price}){
    return(
        <div>
             <Flex justifyContent={"space-between"} marginTop="20px">
                <Box textAlign={"start"}>
                    <Flex gap="30px">
                    <Image width="60px" src={image} />
                <Box>
                <Text fontsize="20px" fontWeight="600">{name}</Text>
                <Text fontWeight={"500"} color="grey">{ram}</Text>
                <Text fontWeight={"500"} color="grey">Seller: FlipKart Commerce</Text>
                <Flex alignItems={"center"} gap="6px">
                <Text fontWeight={"500"} color="grey" textDecoration={"line-through"}>{cuttoff}</Text>
                <Text fontSize="20px" fontWeight={"600"}>{price}</Text>
                </Flex>
                <Text>+ ₹29 Secured Packaging Fee</Text>
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