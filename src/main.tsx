import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { StateProvider } from './provider/StateProvider';
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from './provider/ThemeContext';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraProvider>

    <BrowserRouter>
      <StateProvider>
      <ThemeProvider>

        <App />
        </ThemeProvider>

      </StateProvider>
    </BrowserRouter>
  </ChakraProvider>,
)
