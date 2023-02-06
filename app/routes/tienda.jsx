import { useLoaderData } from '@remix-run/react'              // Para mostrar guitarras desde el cliente
import { getGuitarras } from "~/models/guitarras.server"    // Obtener datos del back-end
import Guitarra from '~/components/guitarra'
import styles from '../styles/guitarras.css'

export const meta = () => {
  return {
    title: "GuitarLA - Tienda de guitarras",
    descrition: "GuitarLA - Nuestra colección de guitarras"
  }
}

export const links = () => {              // Todo lo que coloque se aplica a todo el archivo
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export const loader = async () => {       // Nombre por defecto
  const guitarras = await getGuitarras()
  // console.log(guitarras)               // Mostrara en consola de back-end
  return guitarras.data
}

const Tienda = () => {
  const guitarras = useLoaderData()       // Para ver desde el cliente lo que trajo funcion 'loader'  
  //---------------------| Valor que regresara |---------------------
  return (
    <main className='contenedor'>
      <h2 className='heading'>Nuestra colección</h2>
      {guitarras?.length && (
        <div className='guitarras-grid'>
          {guitarras.map(guitarra => (
            <Guitarra
              key={guitarra?.id}
              guitarra={guitarra?.attributes}
            />
          ))}
        </div>
      )}
    </main>
  )
}

export default Tienda
