import { useLoaderData } from '@remix-run/react'
import { getPost } from "~/models/posts.server"
import { formatearFecha } from '~/utils/helpers'
import styles from '~/styles/blog.css'

export const loader = async ({ params }) => {   // 'params' atos de la pagina 
  const { postUrl } = params
  const post = await getPost(postUrl)
  if (post.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: "Entrada no encontrada"
    })
  }
  return post
}

export const meta = ({ data }) => {
  if (!data) {
    return {
      title: 'GuitarLA - Entrada no encontrada',
      desciption: `Guitarras, blog de guitarras, blog no enocontrado`
    }
  }

  return {
    title: `GuitarLA - ${data.data[0].attributes.titulo}`,
    desciption: `Guitarras, venta de guitarras, blog ${data.data[0].attributes.titulo}`
  }
}

export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }

  ]
}

const Post = () => {
  const post = useLoaderData()
  const { titulo, contenido, imagen, publishedAt } = post?.data[0].attributes
  //--------------------| Valor que regresara |--------------------
  return (
    <article className='contenido post mt-3'>
      <img className="imagen" src={imagen?.data?.attributes?.url} alt={`Imagen blog ${titulo}`} />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className='fecha'>{formatearFecha(publishedAt)}</p>
        <p className="texto">{contenido}</p>
      </div>
    </article>
  )
}

export default Post