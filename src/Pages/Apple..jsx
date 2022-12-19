import { Flex,Box,Text,Select,Option } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import Sliderprice from "../components/Slider"
import axios from "axios"
import MobileCard from "../components/Mobilecard"
import Navbar from "../components/Navbar"
import MenuNav from "../components/MenuNav"
import {AiFillStar} from "react-icons/ai"
import {Link} from "react-router-dom"
function Apple(){
    const [product,setProduct]=useState([])
    const [sort,setSort]=useState("")
    const getData=async()=>{
        let res=await axios.get(`http://localhost:3004/posts?category=apple&_sort=rating&_order=${sort}`)
        setProduct(res.data)
    }
    const handleHighToLow=()=>{
        setSort("desc")
    }
    const handleLowToHigh=()=>{
        setSort("asc")
    }
    useEffect(()=>{
      getData()
    },[sort])
    console.log(sort)
    return(
        <Box>
            <Navbar />
        <MenuNav />
        <Flex>
            <Box width={"20%"} textAlign="start" marginLeft={"20px"} marginTop="20px">
                <Text fontSize={"30px"} fontWeight="400">Filters</Text>
                <hr></hr>
                <Text fontSize={"17px"} fontWeight="600">Categories</Text>
                <Text fontSize={"17px"} fontWeight="600" color="grey">Mobile And Accessories</Text>
                <Text fontSize={"17px"} fontWeight="600">Mobiles</Text>
                <hr style={{marginTop:"10px",backgroundColor:"#919090"}} />
                <Text fontSize={"17px"} fontWeight="600">Price</Text>
                <Sliderprice initialvalue={10000} value1={150000} value2={20000} value3={30000} />
                <Flex alignItems={"center"} gap="10px">
                <Select placeholder='Min' width="100px">
                <option value='option1'>10000</option>
                <option value='option2'>20000</option>
                    <option value='option3'>30000</option>
                </Select>
                <Text color="grey">to</Text>
                <Select placeholder="30000" width="100px">
                <option value='option1'>30000</option>
                <option value='option2'>20000</option>
                    <option value='option3'>10000</option>
                </Select>
                </Flex>
                <hr style={{marginTop:"10px",backgroundColor:"#919090"}} />
                <Box>
                    <Text fontSize={"17px"} fontWeight="600">Brand</Text>
                    <Text fontSize={"17px"} fontWeight="500">Mi</Text>
                    <Text fontSize={"17px"} fontWeight="500">Apple</Text>
                    <Text fontSize={"17px"} fontWeight="500">Samsung</Text>
                    <Text fontSize={"17px"} fontWeight="500">Realme</Text>
                    <Text fontSize={"17px"} fontWeight="500">Oppo</Text>
                </Box>
                <hr style={{marginTop:"10px",backgroundColor:"#919090"}} />
                <Box>
                    <Text fontSize={"17px"} fontWeight="600"> Customer Rating</Text>
                    <Flex alignItems={"center"} gap="5px" onClick={handleHighToLow}><Text fontSize={"17px"} fontWeight="500"  >4</Text>
                    {<AiFillStar/>}
                    <Text fontSize={"17px"} fontWeight="500">&above</Text>
                    </Flex>
                    <Flex alignItems={"center"} gap="5px" onClick={handleLowToHigh}><Text fontSize={"17px"} fontWeight="500" >3</Text>
                    {<AiFillStar/>}
                    <Text fontSize={"17px"} fontWeight="500">&above</Text>
                    </Flex>
                </Box>
            </Box>
            <Box width={"75%"} margin="auto" padding={"20px"} boxShadow=" rgba(0, 0, 0, 0.16) 0px 1px 4px" marginTop="20px">
                {product.map(el=><Link key={el.id} to={`/singleproductpage/${el.id}`}>
                    <MobileCard key={el.id}  name={el.name} image={el.image} star={el.star} rating={el.rating} and={el._13vcmD} review={el.rating2} ram={el.rgWa7D} display={el.display} camera={el.camera} battery={el.battery} price={el.price} cuttoff={el.cuttoff} off={el.off} warranty={el.warranty} assured={el.assured} delivery={el.delivery}  bank={el.bank==="Bank Offer"?"Bank Offer":`Upto ${Math.ceil(el.priceA*0.3)} of on Exchange `} processor
                    ={el.processor}/></Link>)}
            </Box>
        </Flex>
        </Box>
        
    )
}
export default Apple