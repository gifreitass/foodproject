import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import GetRestaurantsProvider from './context/GetRestaurantsContext'
import CartProvider from './context/CartProvider'
import PageAllRestaurants from './pages/PageAllRestaurants'
import PageOrders from './pages/PageOrders'
import PageProductsRestaurants from './pages/PageProductsRestaurants'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: system-ui;
  }
`

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GetRestaurantsProvider>
      <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<PageAllRestaurants />} />
              <Route path='/pedidos' element={<PageOrders />} />
              <Route path='/:id' element={<PageProductsRestaurants />} />
            </Routes>
            <GlobalStyle />
          </BrowserRouter>
      </CartProvider>
    </GetRestaurantsProvider>
  </React.StrictMode>
)
