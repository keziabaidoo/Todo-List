import { Heading , Text, Wrap, WrapItem, Center, Box} from '@chakra-ui/layout'
import React from 'react'
import '../App.css'

export default function TodoLinkPage() {
    return (
        <div className="container">
          <Heading textAlign="center">FOCUS</Heading> 
          <Text textAlign="center">Choose tasks or time to disconnect you from black apps</Text> 

   <Wrap justify="center" marginTop="10">
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
         <Box h="100px" w="100px" borderRadius="md" bg="whatsapp.100" justify="center">
          
         </Box>
       </div>

        </div>
    )
}
