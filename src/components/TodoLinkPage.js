import React from 'react'
import { Heading , Text, Wrap, WrapItem, Center, Box, Flex, Stack} from '@chakra-ui/layout'
import '../App.css';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import twitter from '../images/twitter.png';
import mdaddcircle from '../images/mdaddcircle.png'

export default function TodoLinkPage() {
    return (
        <Stack bgGradient="linear(to-t, pink.300, orange.200)" h="660px" borderRadius="xl">
          <Heading textAlign="center">FOCUS</Heading> 
          <Text textAlign="center" fontWeight="light">Choose tasks or time to disconnect you from black apps</Text> 

   <Wrap justify="center" marginTop="15">
           <WrapItem>
           <Center w="140px" h="50px" bg="whiteAlpha.700" borderRadius="14" fontWeight="medium" fontSize="17px">TASKS</Center>
           </WrapItem>

         
   </Wrap>

   <Wrap justify="center" marginTop="10">
          <WrapItem>
           <Center w="140px" h="50px" bg="whiteAlpha.700" borderRadius="14" fontWeight="medium" fontSize="17px">TIME</Center>
           </WrapItem>
       </Wrap>

       <div>
         <Text align="center" marginTop="10" fontWeight="semibold" fontSize="lg" letterSpacing="wider">BLACK  APPS</Text>
        <Flex justify="center">
         <Box h="200px" w="350px" borderRadius="2xl" bg="whiteAlpha.900" >
           <Stack isInline justify="center" spacing="5" marginTop="90">
             <img src={facebook} alt="facebook" style={{height:35, width:49, marginTop:5}}/>
             <img src={instagram} alt="instagram" style={{height:50, width:65}}/>
             <img src={twitter} alt="twitter" style={{height:50, width:65}}/>
           </Stack>
         </Box>
         </Flex>

         <Flex justify="center" position="relative" bottom="5">
         <img src={mdaddcircle} alt="addcircle" style={{height:35, width:36}}/>
         </Flex>

       </div>

        </Stack>
    )

    
}
