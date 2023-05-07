import  {createTheme, ThemeProvider}  from '@mui/material/styles';
import logo from './logo32.svg';
import logo1 from './abc21.png'
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import DataTable1 from './Components/DataTable1';
import * as React from 'react';
import { height } from '@mui/system';
import { StyledEngineProvider } from '@mui/material/styles';
import './Components/App.css'

const theme = createTheme({
  palette: {
    primary: {
      main:"#00b0ff",
    },
    secondary: {
      main:"#00b0ff",
    },
  },
})

function App() {
  return (
  <div className='App-header'>
    <Box sx={{ width: '100%' }}>
      <div className='abcLogo'>
        <img src={logo1} alt= "logo1" height={60} width={200} align='left'/>
      </div>
      <div className='highradiusLogo'>
        <img src={logo}/>
      </div>
        <div className='tableData' text="white">
          <StyledEngineProvider injectFirst>
            <DataTable1/>
          </StyledEngineProvider>
        </div>
        <div className='footer'>
          <footer data-test="footerComponent">
            <div className="copyright" text="white">
              <h6><a className='App-link' href="http://www.google.com" target="_blank" rel="noopener noreferrer">Privacy Policy</a>|&copy; 2022 HighRadius Corporation.All rights reserved</h6>
            </div>
          </footer>
        </div>
        </Box>
  </div>
  )
    
}


export default App;