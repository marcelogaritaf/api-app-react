import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import Personajes from './Personajes'
import Spinner from './Spinner'

const PintarDatos = ({nameCharacter}) => {
    const [personajes, setpersonajes] = useState([])
    const [loading, setloading]=useState(false)
    useEffect(()=>{
        consumirApi(nameCharacter)
    },[nameCharacter])
    const consumirApi = async(nombre)=>{
        setloading(true)
        try {
            const res= await fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`)
            if(!res.ok){
                return Swal.fire({
                    title: 'Error!',
                    text: 'Personaje no encontrado',
                    icon: 'error',
                    confirmButtonText: 'OK'
                  })
                  
            }
            const datos = await res.json()
            console.log(datos.results)
            setpersonajes(datos.results)
        } catch (error) {
            console.log(error)
        }finally{
            setloading(false)
        }
    }
    if(loading){
      return <Spinner/>
    }
  return (
    
    <div className='row mt-2'>
        {
            personajes.map(i=>(
                <Personajes key={i.id} personaje={i}/>
            ))
        }
    </div>
  )
}

export default PintarDatos