import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Header from './project/Header.jsx'
import Login from './project/Login.jsx'
import Registration from './project/Registration.jsx'

// learing
// import Props from './project/learing/Property.jsx'
// import Stateset from './project/learing/Stateset.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Header/> */}
    <Login/>
    <Registration/>
    {/* <Props name="Srinath"/> */}
    {/* <Stateset name="apple" price={25}/>
    <Stateset name="banana" price={12}/>
    <Stateset name="orange" price={20}/> */}
  </StrictMode>,
)
