import React from "react";
import './App.css'

// Routes
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import Home from "./components/Home/Home"
import Login from "./components/Auth/Login/Login"
import Footer from "./components/footer"

// Material Imports
import { Container } from "@mui/system";
import { createTheme, ThemeProvider } from '@mui/material';
import Register from "./components/Auth/Register/Register";

function App() {

  const theme = createTheme({
    palette:{
      primary: {
        main: '#c9a602',
        constrastText: '#000'
      },
      secondary:{
        main: '#5e35b1',
        constrastText: '#fff'
      }
    }
  })
  
  return (
    <ThemeProvider theme={theme}>
      <Router>


        <Container maxWidth="xl" className="container">
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/Register" element={<Register />}/>
            <Route path="/Dashboard" element={<Home/>}/>
          </Routes>
        </Container>
        <Footer/>
      </Router>
    </ThemeProvider>
  );
}

export default App;
