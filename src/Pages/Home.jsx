import Navbar from "../components/Navbar"
import MenuNav from '../components/MenuNav';
import DownBar from "../components/Downbar";
import CaptionCarousel from "../components/Carousel"
import { Image,Flex,GridItem,Text,Grid,Box, Center } from "@chakra-ui/react";
import Footer from "../components/Footer"
function Home(){
    return(
        <div>
            <Navbar />
        <MenuNav />
        <DownBar />
        <CaptionCarousel 
        />
       <Grid className="container" marginTop={"20px"} templateColumns={{base:"repeat(1,1fr)",lg:"repeat(3,1fr)",xl:"repeat(5,1fr)"}} gap={6} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" padding={"10px"}  >
        <GridItem textAlign="center">
        <Center><Image width="200px" height="200px" src="https://rukminim1.flixcart.com/image/200/200/ka492fk0/lunch-box/v/g/y/set-of-3-klip-n-store-microwavable-containers-with-lunch-bag-original-imafrrbpkgyfzxmx.jpeg?q=70" /></Center>
            <Text  fontWeight="600">Lunch boxes</Text>
            <Text color="green">from 199</Text>
            <Text>Brosil Milton and More</Text>
        </GridItem>
       <GridItem >
        <Center><Image width="200px" height="200px" src="https://rukminim1.flixcart.com/image/200/200/k0r15e80/pressure-cooker/a/7/w/12735-pigeon-original-imafkhfucz9hhyf5.jpeg?q=70" /></Center>
            <Text fontWeight="600">Pressure Cooker</Text>
            <Text color="green">from 599</Text>
            <Text>Pegion and More</Text>
        </GridItem>
       <GridItem >
        <Center><Image width="200px" height="200px" src="https://rukminim1.flixcart.com/image/200/200/kumzpu80/water-purifier-bottle/9/x/1/temperature-display-500-ml-flask-pack-of-1-multicolor-steel-original-imag7q4aqmdgvpus.jpeg?q=70" /></Center>
            <Text fontWeight="600">Flasks</Text>
            <Text color="green">from 399</Text>
            <Text>Brosil Milton and More</Text>
        </GridItem>
       <GridItem >
        <Center><Image width="200px" height="200px" src="https://rukminim1.flixcart.com/image/200/200/kpvivm80/tablet/r/x/9/sm-t225nzaains-samsung-original-imag4yrg8vahczvr.jpeg?q=70" /></Center>
            <Text fontWeight="600">Samsung Galaxy Tab</Text>
            <Text color="green">Shop Now</Text>
            <Text>Best Seller|Most Wished</Text> 
        </GridItem>
       <GridItem >
        <Center><Image width="200px" height="200px" src="https://rukminim1.flixcart.com/image/200/200/kthjy4w0/water-purifier/e/u/s/ace-plus-kent-original-imag6tz43kut2rvh.jpeg?q=70" /></Center>
            <Text fontWeight="600">Water Purifier</Text>
            <Text color="green">Upto 70% Off</Text>
            <Text>Brosil Milton and More</Text>
        </GridItem>
       </Grid>
       <Grid  marginTop={"20px"} templateColumns={{base:"repeat(1,1fr)",lg:"repeat(2,1fr)",xl:"repeat(3,1fr)"}} gap={6} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" padding={"10px"} >
       <GridItem >
        <Center><Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/d78dda604e158c5c.jpg?q=50"/></Center>
        </GridItem>
       <GridItem >
        <Center><Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/6e9e6f6130cddc96.jpg?q=50"/></Center>
        </GridItem>
       <GridItem >
        <Center><Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/2073732fc5e1fef2.jpg?q=50"/></Center>
        </GridItem>
       <GridItem >
        <Center><Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/478eea89e4735b29.jpg?q=50"/></Center>
        </GridItem>
       <GridItem >
        <Center><Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/9e1353f36ef86d6f.jpeg?q=50"/></Center>
        </GridItem>
       <GridItem >
        <Center><Image  src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/6ee84ecf945f9016.jpg?q=50"/></Center>
        </GridItem>
           
       </Grid>
       <Grid className="container" marginTop={"20px"} templateColumns={{base:"repeat(1,1fr)",lg:"repeat(3,1fr)",xl:"repeat(5,1fr)"}} gap={6} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" padding={"10px"}  >
        <GridItem textAlign="center">
        <Center><Image width="200px" height="200px" src="https://rukminim1.flixcart.com/image/200/200/xif0q/shoe/t/n/w/-original-imagk26uh7jpfgrp.jpeg?q=70" />
            <Text fontWeight="600">Nike Archers</Text></Center>
            <Text color="green">40-70% off</Text>
            <Text>Mens Sport Shoes</Text>
        </GridItem>
       <GridItem >
        <Center><Image width="200px" height="200px" src="https://rukminim1.flixcart.com/image/200/200/kz5vwy80/lehenga-choli/v/h/3/free-half-sleeve-bridal-udbhav-textile-original-imagb86ecmmwjewk.jpeg?q=70" />
            <Text fontWeight="600">Sabse Amazing Deals!</Text></Center>
            <Text color="green">from 599</Text>
            <Text>Lehnga and Cholis</Text>
        </GridItem>
       <GridItem >
        <Center><Image width="200px" height="200px" src="https://rukminim1.flixcart.com/image/200/200/kqgyhe80/shirt/e/7/k/m-men-slim-fit-solid-mandarin-collar-casual-shirt-juhil-bazar-original-imag4h5nphqhwh9h.jpeg?q=70" /></Center>
            <Text fontWeight="600">Allen Solly,Louis Phillipe</Text>
            <Text color="green">from 399</Text>
            <Text>Casual Shirt,T-Shirt</Text>
        </GridItem>
       <GridItem >
        <Center><Image width="200px" height="200px" src="https://rukminim1.flixcart.com/image/200/200/l41n2q80/shoe/0/t/v/-original-imagfywbnpmgwdcg.jpeg?q=70" />
            <Text fontWeight="600">Us Polo,Levi's</Text></Center>
            <Text color="green">Min 50% off</Text>
            <Text>Sneakers Loafer and More</Text> 
        </GridItem>
       <GridItem >
        <Center><Image width="200px" height="200px" src="https://rukminim1.flixcart.com/flap/200/200/image/6c8d75ec8d517914.jpg?q=70" /></Center>
            <Text fontWeight="600">Kids Clothing</Text>
            <Text color="green">Upto 70% Off</Text>
            <Text>Provogue Action and More</Text>
        </GridItem>
       </Grid>
       <Flex marginTop="20px">
        <Box>
        <Center><Image  src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/bff5b6b45d07dde0.jpg?q=50"/></Center>
        </Box>
        <Box>
        <Center><Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/92ef5787a05332e9.jpg?q=50"/></Center>
        </Box>
        <Box>
        <Center><Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/9891d81cc73e08ba.jpg?q=50"/></Center>
        </Box>
       </Flex>
       <Box>
        <Text fontWeight={"bold"} fontSize="24px" textAlign="left" marginLeft="30px">Featured Brands</Text>
        <Grid className="container"  marginTop={"20px"} templateColumns={{base:"repeat(1,1fr)",lg:"repeat(3,1fr)",xl:"repeat(4,1fr)"}} gap={6} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" padding={"10px"}>
       <GridItem >
        <Center><Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/571e3f51811c71cc.jpeg?q=50"/></Center>
        </GridItem>
       <GridItem >
        <Center><Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/e0550eb06d73f49a.jpeg?q=50"/></Center>
        </GridItem>
       <GridItem >
        <Center><Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/82f9d500617cc312.jpeg?q=50"/></Center>
        </GridItem>
       <GridItem >
        <Center><Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/2d487131eb390720.jpeg?q=50"/></Center>
        </GridItem>
       </Grid>
       </Box>
       <Flex marginTop="20px" gap="20px">
        <Box>
        <Center><Image  src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/bff5b6b45d07dde0.jpg?q=50"/></Center>
        </Box>
        <Box>
        <Center><Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/92ef5787a05332e9.jpg?q=50"/></Center>
        </Box>
        <Box>
        <Center><Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/9891d81cc73e08ba.jpg?q=50"/></Center>
        </Box>
       </Flex>
       <Grid className="container" marginTop={"20px"} templateColumns={{base:"repeat(1,1fr)",lg:"repeat(3,1fr)",xl:"repeat(5,1fr)"}} gap={6} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" padding={"10px"}  >
        <GridItem textAlign="center">
        <Center><Image width="200px" height="200px" src="https://rukminim1.flixcart.com/flap/200/200/image/b2cd0dba179bbbe9.jpg?q=70" /></Center>
            <Text fontWeight="600">Girls Dresses</Text>
            <Text color="green">40-70% off</Text>
            <Text>Fashions, Karigari & more</Text>
        </GridItem>
       <GridItem >
        <Center><Image width="200px" height="200px" src="https://rukminim1.flixcart.com/image/200/200/xif0q/jean/1/m/d/26-fwjenfl050-flying-machine-original-imagg5dfyt2rpzsu.jpeg?q=70" /></Center>
            <Text fontWeight="600">Dels you don't wanna be miss</Text>
            <Text color="green">60-80% off</Text>
            <Text>Flyimg Machine,Puma,Urbanic</Text>
        </GridItem>
       <GridItem >
        <Center><Image width="200px" height="200px" src="https://rukminim1.flixcart.com/image/200/200/l4hcx3k0/t-shirt/b/6/f/m-dtaw21po005c-ducati-original-imagfd87qwuf9mye.jpeg?q=70" /></Center>
            <Text fontWeight="600">Nike,Fort Collins,Puma</Text>
            <Text color="green">50-80% off</Text>
            <Text>T-shirts,Jackets and more</Text>
        </GridItem>
       <GridItem >
        <Center><Image width="200px" height="200px" src="https://rukminim1.flixcart.com/image/200/200/l33cia80/shoe/e/w/c/6-2fd22398-6-u-s-polo-assn-off-white-original-imageabt9rhdh5kg.jpeg?q=70" /></Center>
            <Text fontWeight="600">Us Polo,Levi's</Text>
            <Text color="green">Min 50% off</Text>
            <Text>Sneakers Loafer and More</Text> 
        </GridItem>
       <GridItem >
        <Center><Image width="200px" height="200px" src="https://rukminim1.flixcart.com/image/200/200/l4d2ljk0/shirt/l/a/m/m-boa21amcwsh5442342-abof-original-imagfa3hhy4y853z.jpeg?q=70" /></Center>
            <Text fontWeight="600">Puma,Allen Solly and more</Text>
            <Text color="green">Upto 70% Off</Text>
            <Text>Shirts,Trouser and More</Text>
        </GridItem>
       </Grid>
       <Flex marginTop="20px" gap="20px">
        <Box>
        <Center><Image  src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/9459093698f13a8a.jpg?q=50"/></Center>
        </Box>
        <Box>
        <Center><Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/886731e9d6a9331b.jpg?q=50"/></Center>
        </Box>
        <Box>
        <Center><Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/342b41fcb16ed0f5.jpg?q=50"/></Center>
        </Box>
       </Flex>
       <Grid className="container" marginTop={"20px"} templateColumns={{base:"repeat(1,1fr)",lg:"repeat(3,1fr)",xl:"repeat(5,1fr)"}} gap={6} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" padding={"10px"}  >
        <GridItem textAlign="center">
        <Center><Image width="200px" height="200px" src="https://rukminim1.flixcart.com/image/200/200/kufuikw0/shirt/j/5/0/s-hlsh012786-highlander-original-imag7kcgyhkyr5wg.jpeg?q=70" /></Center>
            <Text fontWeight="600">Forever21&more</Text>
            <Text color="green">40-70% off</Text>
            <Text>Mens Shirts</Text>
        </GridItem>
       <GridItem >
        <Center><Image width="200px" height="200px" src="https://rukminim1.flixcart.com/image/200/200/kzygpzk0/dress/t/4/u/xl-ulss19dr09-05-775-uptownie-lite-original-imagbuuh5r6zszqg.jpeg?q=70" /></Center>
            <Text fontWeight="600">Revamp Your Look</Text>
            <Text color="green">from 299</Text>
            <Text>Urbania,Clovic&more</Text>
        </GridItem>
       <GridItem >
        <Center><Image width="200px" height="200px" src="https://rukminim1.flixcart.com/fk-p-flap/200/200/image/e8f3384b2fb4f508.jpg?q=70" /></Center>
            <Text fontWeight="600">Branded Kurtas</Text>
            <Text color="green">from 599</Text>
            <Text>Libaas,Sarra & more</Text>
        </GridItem>
       <GridItem >
        <Center><Image width="200px" height="200px" src="https://rukminim1.flixcart.com/image/200/200/l52sivk0/jacket/k/e/l/m-1-no-sw-9102-navy-sweven-original-imagftvhmszbsswg.jpeg?q=70" /></Center>
            <Text fontWeight="600">Sweven,Master&more</Text>
            <Text color="green">50-80%</Text>
            <Text>All things Winter!</Text> 
        </GridItem>
       <GridItem >
        <Center><Image width="200px" height="200px" src="https://rukminim1.flixcart.com/image/200/200/km2clu80/shirt/h/r/w/m-hlsh012581-highlander-original-imagffx9ygccqfjp.jpeg?q=70" /></Center>
            <Text fontWeight="600">Arrow,Raymond and Park Avenue</Text>
            <Text color="green">50-80% Off</Text>
            <Text>Shirts & Trouser</Text>
        </GridItem>
       </Grid>
        <Grid  marginTop={"20px"} templateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",xl:"repeat(3,1fr)"}} gap={6} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" padding={"10px"}>
       <GridItem >
        <Center><Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/835b5bad61c96dfa.jpg?q=50"/></Center>
        </GridItem>
       <GridItem >
        <Center><Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/134a87c3e35addf4.jpg?q=50"/></Center>
        </GridItem>
       <GridItem >
        <Center><Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/6f7597ab853d5cd1.jpg?q=50"/></Center>
        </GridItem>
       <GridItem >
        <Center><Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/9716ccf842ed2831.jpeg?q=50"/></Center>
        </GridItem>
       <GridItem >
        <Center><Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/7b8976aa3543e6d4.jpg?q=50"/></Center>
        </GridItem>
       <GridItem >
        <Center><Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/1aaae078e9fb4ce7.jpg?q=50"/></Center>
        </GridItem>
       </Grid>
       <Flex marginTop="20px" gap="20px">
        <Box>
        <Center><Image  src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/b72cf044e329c27a.jpg?q=50"/></Center>
        </Box>
        <Box>
        <Center><Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/90711f8d30af2a2e.jpg?q=50"/></Center>
        </Box>
        <Box>
        <Center><Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/aa54a3ad7ea50d56.jpg?q=50"/></Center>
        </Box>
       </Flex>
       <Grid className="container" marginTop={"20px"} templateColumns={{base:"repeat(1,1fr)",lg:"repeat(3,1fr)",xl:"repeat(5,1fr)"}} gap={6} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" padding={"10px"}  >
        <GridItem textAlign="center">
        <Center><Image width="300px" height="200px" src="https://rukminim1.flixcart.com/image/200/200/l572ufk0/television/e/f/g/32y1-32y1-infinix-original-imagfxczrxjjwxvf.jpeg?q=70" /></Center>
            <Text fontWeight="600">Top Smart Tv</Text>
            <Text color="green">Shop Now</Text>
            <Text>From 5,499</Text>
        </GridItem>
       <GridItem >
            <Center><Image width="150px" height="200px" src="https://rukminim1.flixcart.com/image/200/200/xif0q/water-geyser/v/v/s/-original-imaggfbppujtnfqx.jpeg?q=70" /></Center>
            <Text fontWeight="600">Water Gysers</Text>
            <Text color="green">Upto 65% off</Text>
            <Text>By Crompton</Text>
        </GridItem>
       <GridItem >
            <Center><Image width="130px" height="200px" src="https://rukminim1.flixcart.com/image/200/200/kevpwnk0/washing-machine-new/g/t/5/wa65a4002vs-tl-samsung-original-imafvgz4qzfazbsh.jpeg?q=70" /></Center>
            <Text fontWeight="600">Best Selling Washing Machine</Text>
            <Text color="green">From 693/Per Month</Text>
            <Text>Grab Now</Text>
        </GridItem>
       <GridItem >
        <Center><Image width="300px" height="200px" src="https://rukminim1.flixcart.com/image/200/200/l4oi4cw0/otg-new/u/y/v/800-marvel-series-9-litre-oven-toaster-griller-agaro-9-original-imagfgwah8fjwcaw.jpeg?q=70" /></Center> 
            <Text fontWeight="600">Microwave Oven</Text>
            <Text color="green">Upto 65% off</Text>
            <Text>Samsung,IFB and more</Text> 
        </GridItem>
       <GridItem >
        <Center><Image width="200px" height="200px" src="https://rukminim1.flixcart.com/image/200/200/kn97te80/vacuum-cleaner/c/g/8/robot-vacuum-mop-p-stytj02ym-mi-original-imagfyw8gqthjfss.jpeg?q=70" /></Center> 
            <Text fontWeight="600">Robotic Vaccums</Text>
            <Text color="green">50-80% Off</Text>
            <Text>Eufy,Mi& more</Text>
        </GridItem>
       </Grid>
       <Box>
        <Text fontWeight={"bold"} fontSize="24px" textAlign="left" marginLeft="30px">Featured Brands</Text>
        <Grid className="container"  marginTop={"20px"} templateColumns={{base:"repeat(1,1fr)",lg:"repeat(3,1fr)",xl:"repeat(4,1fr)"}} gap={6} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" padding={"10px"}>
       <GridItem >
        <Center><Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/32c14e58f5e65b7b.jpeg?q=50"/></Center>
        </GridItem>
       <GridItem >
        <Center><Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/fb19094006af3aae.jpeg?q=50"/></Center>
        </GridItem>
       <GridItem >
        <Center><Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/cdfaae9d7e75122a.jpeg?q=50"/></Center>
        </GridItem>
       <GridItem >
        <Center><Image src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/99829412c0ba81ce.jpeg?q=50"/></Center>
        </GridItem>
       </Grid>
       </Box>
       <Footer />
        </div>
        
    )
}
export default Home