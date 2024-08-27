import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { UserDetails } from './components/UserDetails'
// import { Cart } from './components/Cart'
import { DynamicReactForm } from './components/DynamicReactForm'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Cart /> */}
    {/* <UserDetails /> */}
    <DynamicReactForm />
  </React.StrictMode>,
)