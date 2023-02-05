import imagen from '../../public/img/nosotros.jpg'
import styles from '../styles/nosotros.css'

export const meta = () => {
  return {
    title: 'GuitarLA - Sobre nosotros',
    description: 'Venta de guitarras, blog de musica'
  }
}

export const links = () => {
  return ([                   // Añade el estilo a los demas estilos de 'root'
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',       // Indica que se cargue primero si el tamaño es pesado
      href: imagen,
      as: 'image'
    },
  ])
}

const Nosotros = () => {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt='imagen de nosotros' />
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta minus omnis quidem! Facilis dicta suscipit numquam ipsa dolorum vitae ad libero atque in molestias maxime autem, quam culpa veritatis exercitationem!.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum a deleniti numquam aspernatur cum pariatur, soluta distinctio, quas impedit molestiae, id itaque fugiat veniam perspiciatis ad velit voluptatum quod. Voluptatum?
          </p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros
