import { Box, Flex,Heading,Text,Image, Center } from "@chakra-ui/react"
import {AiFillStar} from "react-icons/ai"
function MobileCard({image,name,rating,and,review,ram,display,camera,battery,warranty,price,assured,cuttoff,delivery,bank,off,star}){
    return(
        <Flex justifyContent={"end"} alignItems="center" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" padding={"20px"} marginTop="20px">
            <Box width={"20%"} margin="auto">
                <Center><Image height="200px" src={image}/></Center>
            </Box>
            <Box width="50%" margin={"auto"} textAlign="start">
                <Text fontSize={"20px"}>{name}</Text>
                <Flex>
                <Flex alignItems={"center"} gap="3px" backgroundColor={"#388e3c"} color="white"><Text>{star}</Text><AiFillStar /></Flex>
                <Text>{rating}</Text>
                <Text>{and}</Text>
                <Text>{review}</Text>
                </Flex>
                <Text>{ram}</Text>
                <Text>{display}</Text>
                <Text>{camera}</Text>
                <Text>{battery}</Text>
                <Text>{warranty}</Text>
            </Box>
            <Box width="20%" margin={"auto"} textAlign="start" marginTop={"-1px"}>
                <Flex gap="20px">
                    <Text fontSize={"24px"} fontWeight="bold">{price}</Text>
                    <Image width="100px" src={assured}></Image>
                </Flex>
                <Box>
                    <Flex gap="20px">
                    <Text color="grey" textDecoration={"line-through"}>{cuttoff}</Text>
                <Text color="green">{off}</Text>
                    </Flex>
                    <Text>{delivery}</Text>
                <Text>{bank}</Text>
                </Box>
            </Box>
        </Flex>
    )
}
export default MobileCard