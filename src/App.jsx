import './App.css'
import React from 'react'
import UserMicroFrontend from './microfrontends/UserMicroFrontend/UserManagement'

function App() {

  return (
    <div className="App">
      <h1>Listado de Usuarios</h1>
      <UserMicroFrontend />
    </div>  
  )
}

export default App
