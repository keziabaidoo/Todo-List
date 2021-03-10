import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import { ThemeProvider, CSSReset } from '@chakra-ui/react'
import theme from '@chakra-ui/theme';


const customTheme = {
  ...theme,
  fonts: {
    heading: '"David Libre", serif',
    body: "'Roboto', sans-serif",
    mono: '"Space Mono", monospace',
  },
   colors:{
     ...theme.colors,
   },
  
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};


function App() {
  return (
   <BrowserRouter>
      <ThemeProvider theme={customTheme}>

     <CSSReset/>

       <Switch>
         <Route path="/" component={Homepage} exact/>
       </Switch>
      
      </ThemeProvider>
   </BrowserRouter>

  );
}
  

export default App;
