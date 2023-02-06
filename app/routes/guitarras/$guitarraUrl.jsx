// El '$' lo hace una ruta dinamica
import { getGuitarra } from "~/models/guitarras.server"
import { useLoaderData } from '@remix-run/react'
import styles from '~/styles/guitarras.css'

export const meta = ({ data }) => {
  return {
    title: `GuitarLA - ${data.data[0].attributes.nombre}`,
    desciption: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}`
  }
}

export const links = () => {
  return [
    {
      rel: "stylesheet",
      href: styles
    }
  ]
}

export const loader = async ({ params }) => {
  const { guitarraUrl } = params      // Devuelve el nombre de la guitarra
  const guitarra = await getGuitarra(guitarraUrl)
  return guitarra
}

const Guitarra = () => {
  const guitarra = useLoaderData()
  const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes
  return (
    <main className="contenedor guitarra">
      <img className="imagen" src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">${precio}</p>
      </div>
    </main>
  )
}

export default Guitarra