import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './components/navbar.tsx'
import Games from './components/games.tsx'
import Product from './components/product.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NavBar />
    <Games />
    <Product />
  </React.StrictMode>,
)