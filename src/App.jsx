import React, { useState } from 'react'
import Formulario from './Components/Formulario'
import PintarDatos from './Components/PintarDatos'

const App = () => {
    const [nameCharacter, setnameCharacter] =useState("")
  return (
    <div className='container'>
       <h1 className='title'>RICK AND MORTY</h1>
       <Formulario setnameCharacter={setnameCharacter}/>
       <PintarDatos nameCharacter={nameCharacter}/>
    </div>
  )
}

export default App