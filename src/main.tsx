import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { StateProvider } from './provider/StateProvider';
import { ChakraProvider } from '@chakra-ui/react';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraProvider>

    <BrowserRouter>
      <StateProvider>
        <App />
      </StateProvider>
    </BrowserRouter>
  </ChakraProvider>,
)
