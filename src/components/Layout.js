import { Flex } from '@chakra-ui/layout';
import React from 'react';
import Navbar from './Navbar'


const Layout = (props) => {
    <>

    <Navbar/>

    <Flex as="main" direction="column" align="center">
        {props.children}
  </Flex>
    </>
}