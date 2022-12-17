import { Box,Image,Flex, Button,Center,Text,TableContainer,Table,Tr,Td,UnorderedList,ListItem,Heading } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import MenuNav from "../components/MenuNav"
import {useState,useEffect} from "react"
import axios from "axios"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {AiFillStar} from "react-icons/ai"
import {GiElectric} from "react-icons/gi"
import Footer from "../components/Footer"
import { useParams } from "react-router-dom"
import {Link} from "react-router-dom"
function SingleProductPage(){
    const {id}=useParams()
    console.log(id)
    const [product,setProduct]=useState({})
    const getData=async()=>{
        let res=await axios.get(`http://localhost:3004/posts/${id}`)
      setProduct(res.data)
    }
    useEffect(()=>{
      getData()
    },[])
    const handleAddtocart=async()=>{
        let send={
            id:product.id,
            image:product.image,
            name:product.name,
            price:product.price,
            priceA:product.priceA,
            cuttoff:product.cuttoff,
            ram:product.rgWa7D,
            subtotal:product.priceA
        }
        let res=await axios.post(`http://localhost:3004/profile `,{
            ...send
        })
        console.log(res)
    }
    return(
        <Box>
              <Navbar />
        <MenuNav />
        <Flex marginTop="30px">
            <Box width="30%">
                <Box boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" padding="30px"><Center><Image src={product.image}/></Center></Box>
                <Link to="/cart"><Button onClick={handleAddtocart} marginTop="10px" leftIcon={<AiOutlineShoppingCart />} backgroundColor="#ff9f00" color="white" variant='solid' fontSize={"24px"} fontWeight="500" padding="15px 15px 15px 14px">
                    Add To cart 
                </Button></Link>
                <Button marginTop="10px"  leftIcon={<GiElectric />} backgroundColor="#fb641b" color="white" variant='solid' fontSize={"24px"} fontWeight="500" padding="15px 15px 15px 14px" marginLeft={"10px"}>
                    Buy Now 
                </Button>
            </Box>
            <Box marginLeft={"40px"} textAlign="start" width="65%" margin="auto" marginBottom={"40px"}>
                <Flex gap="10px">
                <Text fontSize="20px" fontWeight="600">{product.name}</Text>
                </Flex>
                <Flex gap="5px" color="grey" fontWeight={"600"}>
                <Flex alignItems={"center"} gap="3px" backgroundColor={"#388e3c"} color="white" padding="2px"><Text>{product.star}</Text><AiFillStar /></Flex>
                <Text>{product.rating}</Text>
                <Text>&</Text>
                <Text>{product.rating2}</Text>
                <Image src={product.assured} width="100px" />
                </Flex>
                <Text color="green" fontWeight={"500"} marginTop="10px" fontSize={"17px"}>`Extra ₹{(Math.ceil(product.priceA*0.4))} off`</Text>
                <Flex gap="10px" alignItems={"center"}>
                    <Text fontSize={"28px"} fontWeight={"700"} >{product.price}</Text>
                    <Text fontSize={"20px"} fontWeight={"500"} textDecoration="line-through" color="grey">{product.cuttoff} </Text>
                    <Text color="green" fontSize={"20px"} fontWeight={"500"} >{product.off}</Text>
                </Flex>
                <Text>+ ₹29 Secured Packaging Fee</Text>
                <Text fontSize={"20px"} fontWeight="600">Available offers</Text>
                <Flex alignItems={"center"} gap="5px" marginTop="10px"><Image width="24px" src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"/> 
                <Text fontSize={"16"} fontWeight="500">Bank Offer</Text>
                <Text>Additional ₹500 Off On UPI Transactions</Text>
                <Text color="#2874f0">T&C</Text>
                </Flex>
                <Flex alignItems={"center"} gap="5px" marginTop="10px"><Image width="24px" src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"/> 
                <Text fontSize={"16"} fontWeight="500">Bank Offer</Text>
                <Text>5% Cashback on Flipkart Axis Bank Card</Text>
                <Text color="#2874f0">T&C</Text>
                </Flex>
                <Flex alignItems={"center"} gap="5px" marginTop="10px"><Image width="24px" src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"/> 
                <Text fontSize={"16"} fontWeight="500">Bank Offer</Text>
                <Text>₹1000 off on HDFC Credit Card Transactions</Text>
                <Text color="#2874f0">T&C</Text>
                </Flex>
                <Flex alignItems={"center"} gap="5px" marginTop="10px"><Image width="24px" src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"/> 
                <Text fontSize={"16"} fontWeight="500">Special Price</Text>
                <Text>Extra ₹{Math.ceil(product.priceA*0.5)} off(price inclusive of discount)</Text>
                <Text color="#2874f0">T&C</Text>
                </Flex>
                <Text color="#2874f0" fontWeight={"600"} marginTop="10px">View 4 More offer</Text>
                <TableContainer>
                <Table variant='simple' color="black" border={"1px solid"} borderBottom="1px solid" >
                    <Tr  border={"1px solid grey"} backgroundColor={"#f5faff"}>
                        <Td>
                        <Flex gap="10px">
                    <Image width="20px" src="https://toppng.com/uploads/preview/related-wallpapers-sky-blue-dot-11563201472gexfknmfyt.png"/>
                    <Text>Buy Without Exchange</Text>
                    <Text>{product.price}</Text>
                </Flex>
                        </Td>
                        </Tr>
                        <Tr  border={"1px solid grey"}>
                        <Td>
                        <Flex gap="10px">
                    <Image width="20px" src="https://www.pngplay.com/wp-content/uploads/5/Dot-Symbol-PNG-Background.png"/>
                    <Text>Buy Without Exchange</Text>
                    <Text>{Math.ceil(product.priceA*0.3)}</Text>
                </Flex>
                        </Td>
                    </Tr>
                </Table>
                </TableContainer>
                <Flex gap="30px" marginTop="30px">
            <Text color="grey" fontSize={"17px"} fontWeight={"600"}>Warranty</Text>
            <Text>1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories</Text>
        </Flex>
        <Flex gap="30px" marginTop="30px">
            <Text color="grey" fontSize={"17px"} fontWeight={"600"}>RAM</Text>
            <Text>{product.rgWa7D}</Text>
        </Flex>
        <Flex gap="30px" marginTop="30px">
            <Text color="grey" fontSize={"17px"} fontWeight={"600"}>Delivery</Text>
            <Text>Delivery byTomorrow</Text>
        </Flex>
        <Flex gap="30px" marginTop="30px">
            <Text color="grey" fontSize={"17px"} fontWeight={"600"}>Highlights</Text>
            <Box>
               <UnorderedList>
                <ListItem>{product.rgWa7D} | Expandable Upto 1 TB</ListItem>
                    <ListItem>{product.display}</ListItem>
                 <ListItem>{product.camera}</ListItem>
                      <ListItem>{product.battery} Lithium Polymer Battery</ListItem>
                      <ListItem>Qualcomm Snapdragon 680 Processor</ListItem>
                    </UnorderedList>
                </Box>
                    </Flex>
                    <Flex gap="30px" marginTop="30px">
            <Text color="grey" fontSize={"17px"} fontWeight={"600"}>Seller</Text>
            <Box>
                <Flex gap="20px">
                    <Text fontWeight={"500"} color="#58a2f5">Flashstar Commerce</Text>
                    <Flex alignItems={"center"} gap="3px" backgroundColor={"#2874f0"} color="white" paddingLeft={"5px"} paddingRight="5px"><Text>{product.star}</Text><AiFillStar /></Flex>
                </Flex>
                <UnorderedList>
                <ListItem>7 day seller replacement policy/brand assistance for device issues</ListItem>
                    <ListItem>GST invoice available</ListItem>
                    </UnorderedList>
                    <Text fontWeight={"500"} color="#58a2f5">See Other Sellers</Text>
            </Box>
            
        </Flex>
        <Box>
                <Image src="https://rukminim1.flixcart.com/lockin/400/400/images/CCO__PP_2019-07-14.png?q=50"/>
            </Box>
            <Box>
                <Box >
                    <Text fontSize="24px" fontWeight={"700"}>Product Description</Text>
                </Box>
                <Flex alignItems={"center"} marginTop="10px">
                    <Box width="30%">
                    <Image src="https://rukminim1.flixcart.com/image/200/200/cms-rpd-images/27c6ec13a637480dbd75c8e9e1f94515_17faa9a1dfe_image.jpeg?q=90"/>
                    </Box>
                    
                    <Box width="65%" margin={"auto"} >
                        <Text fontSize={"20px"} fontWeight="500">Unmatched Performance</Text>
                        <Text>This phone comes with Qualcomm Snapdragon 680 processor with 6 nm architecture that gives a speed superiority to your phone that in turn helps to play games, finish up tasks, and multitask with ease.</Text>
                    </Box>
                </Flex>
                <Flex alignItems={"center"} marginTop="10px">
                    <Box width="65%" margin={"auto"}>
                        <Text fontSize={"20px"} fontWeight="500">Lightening-fast Storage</Text>
                        <Text>With UFS 2.2 storage, you can get more done in less time. UFS 2.2 is incorporated with the device aiming to provide you a blazing-fast operational efficiency while consuming less energy.</Text>
                    </Box>
                    <Box width="30%">
                    <Image src="https://rukminim1.flixcart.com/image/200/200/cms-rpd-images/27c6ec13a637480dbd75c8e9e1f94515_17faa9a1dfe_image.jpeg?q=90"/>
                    </Box>
                </Flex>
            </Box>
                </Box>
        </Flex>
        <Footer />
        </Box>
        
    )
}
export default SingleProductPage