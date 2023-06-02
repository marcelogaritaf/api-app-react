import React from 'react'
import { useFormularios } from '../hooks/useFormularios'
import Swal from 'sweetalert2'
import "./styles.css"
const Formulario = ({setnameCharacter}) => {
    const [inputs, handleChange, reset]=useFormularios({
        nombre: ''
    })
    const {nombre} =inputs
    const ActionForm=e=>{
        e.preventDefault()
        if(!nombre.trim()){
            Swal.fire({
                title: 'Error!',
                text: 'Texto en blanco',
                icon: 'error',
                confirmButtonText: 'OK'
              })
              return
        }
        
        setnameCharacter(nombre.trim())
        reset()
    }
  return (
    <form onSubmit={ActionForm}>
        <input 
            type="text" 
            placeholder='ingrese el personaje'
            className='form-control mb-2'
            name='nombre' 
            value={nombre} 
            onChange={handleChange}
            autoComplete='off'
        />
        <button className='btn btn-dark'>Buscar</button>
    </form>
  )
}

export default Formulario