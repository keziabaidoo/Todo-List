import React, { Component } from 'react';
import { Flex, Heading, List, ListItem, Box, Text, Stack, Divider} from "@chakra-ui/react";
import filter from "../images/filter.webp";
// import AllStyles from "../styles/AllStyles.css"
import Footer from "../components/footer"



class Homepage extends Component {
    constructor(props){
        super(props);
        this.state ={

            data: [{time:"5:30", task:"Learn 2 UX lessons"},]
        };
    }
    render() {
        return (
            <div className="container">
                <Flex  flexDirection="row" justifyContent="space-between" margin="5">
                <Heading as="h3" size="xl" >GOALS</Heading>
                <img src={filter} alt="filter"  style={{ width:"36px", height:"30px"}}/>

                </Flex>

          <List styleType="disc" margin="10" fontSize="xl" fontFamily="serif" top="10" >
                <ListItem padding="1" >Meditate</ListItem>
                <ListItem padding="1" marginTop="2">Study for Math exam</ListItem>
                <ListItem padding="1" marginTop="2">Sleep 8 hours</ListItem>
                <ListItem padding="1" marginTop="2">Design demo for product</ListItem>
            </List>

            <Flex justify="flex-end"  marginInline="10" position="relative"  top="10">
           <Text justify="center" align="center" borderWidth="thin" h="30" w="100px" borderRadius="full" bg="white" >TODAY</Text>
           </Flex>
          <div className="col">
           {/* <Flex> */}

           <Box w="100%" h="660px" bgGradient="linear(to-t, pink.300, orange.200)" borderRadius="20">
               <Flex flexDirection="row" justifyContent="space-between" margin="5">  
               <Heading as="h3" size="xl" marginTop="10" marginRight="10">TASKS </Heading>
               <Text margin="10" fontWeight="bold" verticalAlign="5" fontSize="2xl">86 %</Text>
               <img src={filter} alt="filter"  style={{ width:"30px", height:"30px",marginTop:39}}/>

               </Flex>

               <Flex flexDirection="row"  bg="whiteAlpha.800" borderRadius="30" h="10.5%" margin="1" position="relative" >
               <Stack direction="row" h="70px" p={0}  borderColor="orange.800" spacing="9">
                   <Text marginLeft="3">5:30</Text>
                   <Divider orientation="vertical" />
                   <Text>Learn 2 UX lessons</Text>
                   </Stack>
               </Flex>


               <Flex flexDirection="row"  bg="yellow.100" borderRadius="30" h="10.5%" paddingTop="3.5" margin="1" marginTop="9" >
               <Stack direction="row" h="57px" p={0}  borderColor="orange.800"  spacing="20" justify="center" align="center">
                   <div className="col">
                   <Text marginLeft="3" justify="center">5:30</Text>
                   <Text marginLeft="2" justify="center" marginBottom="4">10:30</Text>
                   </div>
                   <Divider orientation="vertical" />
                   <Text   justify="center" align="center">Marketing project at school</Text>
                   </Stack>
               </Flex>


               <Flex flexDirection="row"  bg="whiteAlpha.800" borderRadius="30" h="10.5%" margin="1" marginTop="10" >
               <Stack direction="row" h="69px" p={0}  borderColor="orange.800"  spacing="20" justify="center" align="center" >
                   <Text marginLeft="3"justify="center" align="center">17:00</Text>
                   <Divider orientation="vertical" />
                   <Text justify="center" align="center">Buy flowers for mom</Text>
                  </Stack>
                  </Flex>

               <Flex flexDirection="row"  bg="whiteAlpha.800" borderRadius="30" h="10.5%" paddingTop="3.5" margin="1" marginTop="9" >
                   <Text marginLeft="3">17 : 30</Text>
         
                   <Text justifyContent="center" marginLeft="100">Meditate</Text>
               </Flex>


               <Flex flexDirection="row" justifyContent="stretch"  bg="whiteAlpha.800" borderRadius="30" h="10.5%" paddingTop="3.5" margin="1" marginTop="9">
                   <Text marginLeft="3">12 : 15</Text>
                   <Text justifyContent="center" marginLeft="100">Shopping</Text>
 
            
     </Flex> 
     <Footer/>
 
           </Box>
           {/* </Flex> */}
       </div>
            </div>
        );
    }
};

export default Homepage;