import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Login from './page/Login';

import styled from 'styled-components';

interface AppProps { }

const App: React.FC<AppProps> = () => {

  return (
    <ChakraProvider>
      <div className="flex h-full">
        <Main>
          <Navbar />
          <div className="p-8">
            <Routes>
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </Main>

      </div>
    </ChakraProvider >
  )
}
const Main = styled.div<{ theme: Theme }>`
  flex: 6;
  background-color: ${({ theme }) => theme.bg};
`;

export default App
