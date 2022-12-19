import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react';
  import {useContext, useState} from "react"
  import axios from 'axios';
  import {Link} from "react-router-dom"
import { useEffect } from 'react';
import {AuthContext} from '../context/AuthContext';
  export default function Login() {
    const {isAuth,toggle}=useContext(AuthContext)
    console.log(isAuth)
    const initState={
      email:"",
      password:""
    }
    const [formState,SetFormState]=useState(initState)
     const handleChange=(e)=>{
      SetFormState({...formState,[e.target.name]:e.target.value})
     }
     const [login,SetLogin]=useState({})
     const getData=async()=>{
       let res=await axios.get(`http://localhost:3004/login`)
       SetLogin(res.data)
     }
     const [status,setStatus]=useState("")
     const handleSubmit=()=>{
      if(login.email===formState.email&&login.password===formState.password){
        alert("You Logged in successfully")
        toggle()
      }
      else{
        alert("You Enter Wrong Credentials")
      }
     }
     useEffect(()=>{
       getData()
     },[])
     console.log(login)
     console.log(formState)
    return (
     
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
           
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Login in to your account</Heading>
            <Text fontSize={'lg'} color={'blue.400'}>
            Get access to your Orders, Wishlist and Recommendations✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" onChange={handleChange} name="email"/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" onChange={handleChange} name="password"/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Link to="/"><Button padding={"15px 150px 15px 150px"}
                onClick={handleSubmit}
                textAlign="center"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button></Link>
              </Stack>
              <Stack pt={6}>
               <Link to="/signup"><Text align={'center'} color={'blue.400'}>
                New to Flipkart? Create an account 
                </Text></Link> 
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }