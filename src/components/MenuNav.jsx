
import { Box, Heading,Flex,Text} from "@chakra-ui/react";
import {Link} from "react-router-dom"
import HoverMenu from "./Menu"
function MenuNav(){
    return(
       <Flex justifyContent={"space-evenly"} alignItems="center"  fontSize={"15px"} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"  >
        <HoverMenu  name="Electronics"
        item1={
            <Flex gap="20px" color="#616161" >
                <Box >
                    <Text >Mobile</Text>
                    <Link to="/mi"><Text>Mi</Text></Link>
                    <Text>Realme</Text>
                    <Text>Samsung</Text>
                    <Text>Infinix</Text>
                    <Text>Oppo</Text>
                    <Text>Apple</Text>
                    <Text>Vivo</Text>
                    <Text>Honor</Text>
                    <Text>Asus</Text>
                    <Text>Poco</Text>
                    <Text>Matorola</Text>
                    </Box>
                    <Box>
                    <Text>Mobile Accessories</Text>
                    <Text>Mi</Text>
                    <Text>Realme</Text>
                    <Text>Samsung</Text>
                    <Text>Infinix</Text>
                    <Text>Oppo</Text>
                    <Text>Apple</Text>
                    <Text>Vivo</Text>
                    <Text>Honor</Text>
                    <Text>Asus</Text>
                    <Text>Poco</Text>
                    <Text>Matorola</Text>
                    </Box>
                    <Box>
                    <Text></Text>
                    <Text>Lapatop</Text>
                    <Text>Realme</Text>
                    <Text>Samsung</Text>
                    <Text>Infinix</Text>
                    <Text>Oppo</Text>
                    <Text>Apple</Text>
                    <Text>Vivo</Text>
                    <Text>Honor</Text>
                    <Text>Asus</Text>
                    <Text>Poco</Text>
                    <Text>Matorola</Text>
                    </Box>
                    <Box>
                    <Text>Speakers</Text>
                    <Text>Mi</Text>
                    <Text>Realme</Text>
                    <Text>Samsung</Text>
                    <Text>Infinix</Text>
                    <Text>Oppo</Text>
                    <Text>Apple</Text>
                    <Text>Vivo</Text>
                    <Text>Honor</Text>
                    <Text>Asus</Text>
                    <Text>Poco</Text>
                    <Text>Matorola</Text>
                    </Box>
            </Flex>
        }
        />
        <HoverMenu name="Tv&Appliances"
        item1={
            <Flex gap="20px" color="#616161" >
                <Box >
                    <Text >Mobile</Text>
                    <Text>Mi</Text>
                    <Text>Realme</Text>
                    <Text>Samsung</Text>
                    <Text>Infinix</Text>
                    <Text>Oppo</Text>
                    <Text>Apple</Text>
                    <Text>Vivo</Text>
                    <Text>Honor</Text>
                    <Text>Asus</Text>
                    <Text>Poco</Text>
                    <Text>Matorola</Text>
                    </Box>
                    <Box>
                    <Text>Mobile Accessories</Text>
                    <Text>Mi</Text>
                    <Text>Realme</Text>
                    <Text>Samsung</Text>
                    <Text>Infinix</Text>
                    <Text>Oppo</Text>
                    <Text>Apple</Text>
                    <Text>Vivo</Text>
                    <Text>Honor</Text>
                    <Text>Asus</Text>
                    <Text>Poco</Text>
                    <Text>Matorola</Text>
                    </Box>
                    <Box>
                    <Text></Text>
                    <Text>Lapatop</Text>
                    <Text>Realme</Text>
                    <Text>Samsung</Text>
                    <Text>Infinix</Text>
                    <Text>Oppo</Text>
                    <Text>Apple</Text>
                    <Text>Vivo</Text>
                    <Text>Honor</Text>
                    <Text>Asus</Text>
                    <Text>Poco</Text>
                    <Text>Matorola</Text>
                    </Box>
                    <Box>
                    <Text>Speakers</Text>
                    <Text>Mi</Text>
                    <Text>Realme</Text>
                    <Text>Samsung</Text>
                    <Text>Infinix</Text>
                    <Text>Oppo</Text>
                    <Text>Apple</Text>
                    <Text>Vivo</Text>
                    <Text>Honor</Text>
                    <Text>Asus</Text>
                    <Text>Poco</Text>
                    <Text>Matorola</Text>
                    </Box>
            </Flex>
        }
        />
        <HoverMenu name="Men"
        item1={
            <Flex gap="20px" color="#616161" >
                <Box >
                    <Text >Mobile</Text>
                    <Text>Mi</Text>
                    <Text>Realme</Text>
                    <Text>Samsung</Text>
                    <Text>Infinix</Text>
                    <Text>Oppo</Text>
                    <Text>Apple</Text>
                    <Text>Vivo</Text>
                    <Text>Honor</Text>
                    <Text>Asus</Text>
                    <Text>Poco</Text>
                    <Text>Matorola</Text>
                    </Box>
                    <Box>
                    <Text>Mobile Accessories</Text>
                    <Text>Mi</Text>
                    <Text>Realme</Text>
                    <Text>Samsung</Text>
                    <Text>Infinix</Text>
                    <Text>Oppo</Text>
                    <Text>Apple</Text>
                    <Text>Vivo</Text>
                    <Text>Honor</Text>
                    <Text>Asus</Text>
                    <Text>Poco</Text>
                    <Text>Matorola</Text>
                    </Box>
                    <Box>
                    <Text></Text>
                    <Text>Lapatop</Text>
                    <Text>Realme</Text>
                    <Text>Samsung</Text>
                    <Text>Infinix</Text>
                    <Text>Oppo</Text>
                    <Text>Apple</Text>
                    <Text>Vivo</Text>
                    <Text>Honor</Text>
                    <Text>Asus</Text>
                    <Text>Poco</Text>
                    <Text>Matorola</Text>
                    </Box>
                    <Box>
                    <Text>Speakers</Text>
                    <Text>Mi</Text>
                    <Text>Realme</Text>
                    <Text>Samsung</Text>
                    <Text>Infinix</Text>
                    <Text>Oppo</Text>
                    <Text>Apple</Text>
                    <Text>Vivo</Text>
                    <Text>Honor</Text>
                    <Text>Asus</Text>
                    <Text>Poco</Text>
                    <Text>Matorola</Text>
                    </Box>
            </Flex>
        }
        />
        <HoverMenu name="Women"
        item1={
            <Flex gap="20px" color="#616161" >
                <Box >
                    <Text >Mobile</Text>
                    <Text>Mi</Text>
                    <Text>Realme</Text>
                    <Text>Samsung</Text>
                    <Text>Infinix</Text>
                    <Text>Oppo</Text>
                    <Text>Apple</Text>
                    <Text>Vivo</Text>
                    <Text>Honor</Text>
                    <Text>Asus</Text>
                    <Text>Poco</Text>
                    <Text>Matorola</Text>
                    </Box>
                    <Box>
                    <Text>Mobile Accessories</Text>
                    <Text>Mi</Text>
                    <Text>Realme</Text>
                    <Text>Samsung</Text>
                    <Text>Infinix</Text>
                    <Text>Oppo</Text>
                    <Text>Apple</Text>
                    <Text>Vivo</Text>
                    <Text>Honor</Text>
                    <Text>Asus</Text>
                    <Text>Poco</Text>
                    <Text>Matorola</Text>
                    </Box>
                    <Box>
                    <Text></Text>
                    <Text>Lapatop</Text>
                    <Text>Realme</Text>
                    <Text>Samsung</Text>
                    <Text>Infinix</Text>
                    <Text>Oppo</Text>
                    <Text>Apple</Text>
                    <Text>Vivo</Text>
                    <Text>Honor</Text>
                    <Text>Asus</Text>
                    <Text>Poco</Text>
                    <Text>Matorola</Text>
                    </Box>
                    <Box>
                    <Text>Speakers</Text>
                    <Text>Mi</Text>
                    <Text>Realme</Text>
                    <Text>Samsung</Text>
                    <Text>Infinix</Text>
                    <Text>Oppo</Text>
                    <Text>Apple</Text>
                    <Text>Vivo</Text>
                    <Text>Honor</Text>
                    <Text>Asus</Text>
                    <Text>Poco</Text>
                    <Text>Matorola</Text>
                    </Box>
            </Flex>
        }
        />
        <HoverMenu name="Baby&kids"
        item1={
            <Flex gap="20px" color="#616161" >
                <Box >
                    <Text >Mobile</Text>
                    <Text>Mi</Text>
                    <Text>Realme</Text>
                    <Text>Samsung</Text>
                    <Text>Infinix</Text>
                    <Text>Oppo</Text>
                    <Text>Apple</Text>
                    <Text>Vivo</Text>
                    <Text>Honor</Text>
                    <Text>Asus</Text>
                    <Text>Poco</Text>
                    <Text>Matorola</Text>
                    </Box>
                    <Box>
                    <Text>Mobile Accessories</Text>
                    <Text>Mi</Text>
                    <Text>Realme</Text>
                    <Text>Samsung</Text>
                    <Text>Infinix</Text>
                    <Text>Oppo</Text>
                    <Text>Apple</Text>
                    <Text>Vivo</Text>
                    <Text>Honor</Text>
                    <Text>Asus</Text>
                    <Text>Poco</Text>
                    <Text>Matorola</Text>
                    </Box>
                    <Box>
                    <Text></Text>
                    <Text>Lapatop</Text>
                    <Text>Realme</Text>
                    <Text>Samsung</Text>
                    <Text>Infinix</Text>
                    <Text>Oppo</Text>
                    <Text>Apple</Text>
                    <Text>Vivo</Text>
                    <Text>Honor</Text>
                    <Text>Asus</Text>
                    <Text>Poco</Text>
                    <Text>Matorola</Text>
                    </Box>
                    <Box>
                    <Text>Speakers</Text>
                    <Text>Mi</Text>
                    <Text>Realme</Text>
                    <Text>Samsung</Text>
                    <Text>Infinix</Text>
                    <Text>Oppo</Text>
                    <Text>Apple</Text>
                    <Text>Vivo</Text>
                    <Text>Honor</Text>
                    <Text>Asus</Text>
                    <Text>Poco</Text>
                    <Text>Matorola</Text>
                    </Box>
            </Flex>
        }
        />
        <HoverMenu name="Home&Furniture"
        item1={
            <Flex gap="20px" color="#616161" >
                <Box >
                    <Text >Mobile</Text>
                    <Text>Mi</Text>
                    <Text>Realme</Text>
                    <Text>Samsung</Text>
                    <Text>Infinix</Text>
                    <Text>Oppo</Text>
                    <Text>Apple</Text>
                    <Text>Vivo</Text>
                    <Text>Honor</Text>
                    <Text>Asus</Text>
                    <Text>Poco</Text>
                    <Text>Matorola</Text>
                    </Box>
                    <Box>
                    <Text>Mobile Accessories</Text>
                    <Text>Mi</Text>
                    <Text>Realme</Text>
                    <Text>Samsung</Text>
                    <Text>Infinix</Text>
                    <Text>Oppo</Text>
                    <Text>Apple</Text>
                    <Text>Vivo</Text>
                    <Text>Honor</Text>
                    <Text>Asus</Text>
                    <Text>Poco</Text>
                    <Text>Matorola</Text>
                    </Box>
                    <Box>
                    <Text></Text>
                    <Text>Lapatop</Text>
                    <Text>Realme</Text>
                    <Text>Samsung</Text>
                    <Text>Infinix</Text>
                    <Text>Oppo</Text>
                    <Text>Apple</Text>
                    <Text>Vivo</Text>
                    <Text>Honor</Text>
                    <Text>Asus</Text>
                    <Text>Poco</Text>
                    <Text>Matorola</Text>
                    </Box>
                    <Box>
                    <Text>Speakers</Text>
                    <Text>Mi</Text>
                    <Text>Realme</Text>
                    <Text>Samsung</Text>
                    <Text>Infinix</Text>
                    <Text>Oppo</Text>
                    <Text>Apple</Text>
                    <Text>Vivo</Text>
                    <Text>Honor</Text>
                    <Text>Asus</Text>
                    <Text>Poco</Text>
                    <Text>Matorola</Text>
                    </Box>
            </Flex>
        }
        />
        <HoverMenu name="Sports,Books&More"
        item1={
            <Flex gap="20px" color="#616161" >
                <Box >
                    <Text >Mobile</Text>
                    <Text>Mi</Text>
                    <Text>Realme</Text>
                    <Text>Samsung</Text>
                    <Text>Infinix</Text>
                    <Text>Oppo</Text>
                    <Text>Apple</Text>
                    <Text>Vivo</Text>
                    <Text>Honor</Text>
                    <Text>Asus</Text>
                    <Text>Poco</Text>
                    <Text>Matorola</Text>
                    </Box>
                    <Box>
                    <Text>Mobile Accessories</Text>
                    <Text>Mi</Text>
                    <Text>Realme</Text>
                    <Text>Samsung</Text>
                    <Text>Infinix</Text>
                    <Text>Oppo</Text>
                    <Text>Apple</Text>
                    <Text>Vivo</Text>
                    <Text>Honor</Text>
                    <Text>Asus</Text>
                    <Text>Poco</Text>
                    <Text>Matorola</Text>
                    </Box>
                    <Box>
                    <Text></Text>
                    <Text>Lapatop</Text>
                    <Text>Realme</Text>
                    <Text>Samsung</Text>
                    <Text>Infinix</Text>
                    <Text>Oppo</Text>
                    <Text>Apple</Text>
                    <Text>Vivo</Text>
                    <Text>Honor</Text>
                    <Text>Asus</Text>
                    <Text>Poco</Text>
                    <Text>Matorola</Text>
                    </Box>
                    <Box>
                    <Text>Speakers</Text>
                    <Text>Mi</Text>
                    <Text>Realme</Text>
                    <Text>Samsung</Text>
                    <Text>Infinix</Text>
                    <Text>Oppo</Text>
                    <Text>Apple</Text>
                    <Text>Vivo</Text>
                    <Text>Honor</Text>
                    <Text>Asus</Text>
                    <Text>Poco</Text>
                    <Text>Matorola</Text>
                    </Box>
            </Flex>
        }
        />
        <Text aria-label="Courses"
                fontWeight="500"
                fontSize="15px">Flights</Text>
        <Text aria-label="Courses"
                fontWeight="500"
                fontSize="15px"
               marginLeft={"15px"} >Offer Zone</Text>
        <Text aria-label="Courses"
                fontWeight="500"
                fontSize="15px"  marginLeft={"15px"}>Grocery</Text>
       </Flex>
    )
}
export default MenuNav