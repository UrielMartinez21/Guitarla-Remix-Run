import { getPosts } from "~/models/posts.server"
import { useLoaderData } from '@remix-run/react'
import styles from '../styles/blog.css'
import ListadoPosts from '../components/listado-posts'

export const loader = async () => {
  const posts = await getPosts()
  return posts.data
}

export const meta = () => {
  return {
    title: 'GuitarLA - Nuestro blog',
    descripcion: 'GuitarLA - Blog de musica y venta de guitarras'
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

const Blog = () => {
  const posts = useLoaderData()
  //----------------| Valor que regresara |----------------
  return (
    <div className="contenedor">
      <ListadoPosts posts={posts} />
    </div>
  )
}

export default Blog
