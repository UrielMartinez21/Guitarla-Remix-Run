import { Link } from '@remix-run/react'

const Guitarra = ({ guitarra }) => {
  const { descripcion, imagen, precio, url, nombre } = guitarra
  //---------------------| Valor que regresara |---------------------
  return (
    <div className="guitarra">
      <img src={imagen.data.attributes.formats.medium.url} alt={`Imagen guitarra ${nombre}`} />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="descripcion">{descripcion}</p>
        <p className="precio">{precio}</p>
        <Link
          className='enlace'
          to={`/guitarras/${url}`}  // 'guitarras' tiene que tener el nombre de la carpeta dentro de 'routes'
        >
          Ver producto
        </Link>
      </div>
    </div>
  )
}

export default Guitarra
