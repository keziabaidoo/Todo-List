import React, { Component } from 'react';
import { Flex, Heading, List, ListItem, Box, Text, Stack, Divider} from "@chakra-ui/react";
import filter from "../images/filter.webp";
// import AllStyles from "../styles/AllStyles.css"
import Footer from "../components/footer"



class Homepage extends Component {
    constructor(props){
        super(props);
        this.state ={
              
        };
    }

     nextPage =()=>{

     }

    render() {
        return (
            <div className="container">
                <Flex  flexDirection="row" justifyContent="space-between" margin="5">
                <Heading as="h3" size="xl" >GOALS</Heading>
                <img src={filter} alt="filter"  style={{ width:"36px", height:"30px"}}/>

                </Flex>

          <List styleType="disc" margin="10" fontSize="xl" fontFamily="serif" marginBottom="18" >
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

           <Box w="100%" h="660px" bgGradient="linear(to-t, pink.300, orange.200)" borderRadius="20" marginBottom="10">
               <Flex flexDirection="row" justifyContent="space-between" margin="5">  
               <Heading as="h3" size="xl" marginTop="10" marginRight="10">TASKS </Heading>
               <Text margin="10" fontWeight="bold" verticalAlign="5" fontSize="2xl">86 %</Text>
               <img src={filter} alt="filter"  style={{ width:"30px", height:"30px",marginTop:39}}/>

               </Flex>

               <Flex flexDirection="row"  bg="whiteAlpha.800" borderRadius="30" h="10.5%" margin="1" position="relative">
               <Stack direction="row" h="70px" p={0}  borderColor="orange.800" spacing="7">
                   <Text marginLeft="6" marginTop="6">5:30</Text>
                   <Divider orientation="vertical" />
                   <Text paddingTop="6">Learn 2 UX lessons</Text>
                   </Stack>
               </Flex>


               <Flex flexDirection="row"  bg="yellow.100" borderRadius="30" h="10.5%"  margin="1" marginTop="9"position="relative" >
               <Stack direction="row" h="70px" p={0}  borderColor="orange.800" spacing="6">
                   <div className="col" style={{paddingTop:10,justifyContent:"center"}} >
                   <Text marginLeft="6">5:30</Text>
                   <Text marginLeft="5">10:30</Text>
                   </div>
                   <Divider orientation="vertical" />
                   <Text paddingTop="5">Marketing project at school</Text>
                   </Stack>
               </Flex>


               <Flex flexDirection="row"  bg="whiteAlpha.800" borderRadius="30" h="10.5%" margin="1" marginTop="10" >
               <Stack direction="row" h="70px" p={0}  borderColor="orange.800"  spacing="6" >
                   <Text paddingTop="6" marginLeft="5">17:00</Text>
                   <Divider orientation="vertical" />
                   <Text paddingTop="6">Buy flowers for mom</Text>
                  </Stack>
                  </Flex>

               <Flex flexDirection="row"  bg="whiteAlpha.800" borderRadius="30" h="10.5%" paddingTop="3.5" margin="1" marginTop="9">
               <Stack direction="row" h="55px" p={0}  borderColor="orange.800" spacing="6">
                <Text marginLeft="5" paddingTop="3">17:30</Text>
                <Divider orientation="vertical" />
                 <Text paddingTop="3">Meditate</Text>
              </Stack>
               </Flex>


               <Flex flexDirection="row"   bg="whiteAlpha.800" borderRadius="30" h="10.5%" paddingTop="3.5" margin="1" marginTop="9">
               <Stack direction="row" h="57px" p={0}  borderColor="orange.800" spacing="6">
                   <Text marginLeft="5" paddingTop="3">12:15</Text>
                   <Divider orientation="vertical" justify="center" />
                   <Text paddingTop="3">Shopping</Text>
 
            </Stack>
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