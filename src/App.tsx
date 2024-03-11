import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, Theme } from './utils/Theme';
import Home from './page/Home';
import Video from './page/Video';
import Menu from './components/Menu';

import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Login from './page/Login';

import styled from 'styled-components';

interface AppProps { }

const App: React.FC<AppProps> = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>

    <ChakraProvider>

      <div className="flex h-full">
    <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <Navbar />
          <div className="p-8">
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/video/:id" element={<Video />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </Main>

      </div>
    </ChakraProvider >
    </ThemeProvider>

  )
}
const Main = styled.div<{ theme: Theme }>`
  flex: 6;
  background-color: ${({ theme }) => theme.bg};
`;

export default App
