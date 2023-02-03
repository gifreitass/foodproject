import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import GetRestaurantsProvider from './allRestaurants/context/GetRestaurantsContext'
import TemplateProducts from './mcDonalds/templates/TemplateProducts'
import PageAllRestaurants from './pages/PageAllRestaurants'
import PageOrders from './pages/PageOrders'
import RouteManager from './routes/RouteManager'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: system-ui;
  }
`

//const testeRoute = ['Rota1', 'Rota2', "Rota3"]

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GetRestaurantsProvider>
      <BrowserRouter>
        <RouteManager />
        <GlobalStyle />
      </BrowserRouter>
    </GetRestaurantsProvider>
  </React.StrictMode>
)
