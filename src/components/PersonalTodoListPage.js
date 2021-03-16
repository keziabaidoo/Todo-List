import React from 'react';
import {Flex, Heading, Text, Divider, Stack} from "@chakra-ui/react"
import filter from "../images/filter.webp"
import '../App.css';


function PersonalTodoListPage() {

    return (
        <div className="homepage_container">
            <div className="main_texts">
                
             <Flex  flexDirection="row" justifyContent="space-between">
             <Heading as="h3" size="xl" marginTop="5" marginRight="10">TASKS </Heading>
               <Text margin="5" fontWeight="light" verticalAlign="5" fontSize="2xl">86 %</Text>
               <img src={filter} alt="filter"  style={{ width:"30px", height:"30px", marginTop:20, fontWeight:"lighter"}}/>

                </Flex> 

             <Flex flexDirection="row"  bg="whiteAlpha.800" borderRadius="30" h="10.5%" margin="1"  >
               <Stack direction="row" h="70px" p={0}  borderColor="orange.800"  align="center" justify="center" spacing="20">
                   <Text marginLeft="3" justify="center" >5:30</Text>
                   <Divider orientation="vertical" />
                   <Text justify="center" align="center" >Learn 2 UX lessons</Text>
                   </Stack>
               </Flex>

               <Flex flexDirection="row"  bg="whiteAlpha.800" borderRadius="30" h="10.5%" margin="1" marginTop="10"  >
               <Stack direction="row" h="70px" p={0}  borderColor="orange.800"  align="center" justify="center" spacing="20">
                     <div className="col">
                   <Text marginLeft="3" justify="center" >8:30</Text>
                   <Text marginLeft="1" justify="center" >10:30</Text>
                   </div>
                   <Divider orientation="vertical" />
                   <Text justify="center" align="center" >Marketing project at school</Text>
                   </Stack>
               </Flex>

               <Flex flexDirection="row"  bg="whiteAlpha.800" borderRadius="30" h="10.5%" margin="1"  marginTop="10" >
               <Stack direction="row" h="70px" p={0}  borderColor="orange.800"  align="center" justify="center" spacing="20">
                   <Text marginLeft="1" justify="center" >17:00</Text>
                   <Divider orientation="vertical" />
                   <Text justify="center" align="center" >Buy flowers for mom</Text>
                   </Stack>
               </Flex>
               

               <Flex flexDirection="row"  bg="whiteAlpha.800" borderRadius="30" h="25%" margin="1"  marginTop="10" >
               <Stack direction="row" h="169px" p={0}  borderColor="orange.800"  align="center" justify="center" spacing="20">
                   <div className="col"  style={{margin:2}}> 
                   <Text marginLeft="1" justify="center" >17:30</Text>
                   <Text marginLeft="1" justify="center" marginTop="4">18:30</Text>
                   <Text marginLeft="1" justify="center" marginTop="4" >#Home</Text>
             </div>
                   <Divider orientation="vertical" />
                   <div className="col-md-6">
                   <Text justify="center" align="center" fontWeight="extrabold" fontSize="x-large">Meditate</Text>
                   <Text justify="center" align="center" marginTop="3" borderRadius="full" bgColor="blue.100" >Personal</Text>
                   <Text justify="center" align="center" marginTop="3">Headspace training</Text>
                  
         </div>
                   </Stack>
               </Flex>

               <Flex flexDirection="row"  bg="whiteAlpha.800" borderRadius="30" h="10.5%" margin="1" marginTop="10" >
               <Stack direction="row" h="70px" p={0}  borderColor="orange.800"  align="center" justify="center" spacing="20">
                   <Text marginLeft="3" justify="center" >5:30</Text>
                   <Divider orientation="vertical" />
                   <Text justify="center" align="center" >Shopping</Text>
                   </Stack>
               </Flex>
               

               </div>  

        </div>
    )  
}

export default PersonalTodoListPage;
