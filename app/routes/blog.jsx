import Post from '~/components/post'
import { getPosts } from "~/models/posts.server"
import { useLoaderData } from '@remix-run/react'
import styles from '../styles/blog.css'

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
      <h2 className="heading">Blog</h2>
      <div className="blog">
        {posts.map(post => (
          <Post
            key={post.id}
            post={post.attributes}
          />
        ))}
      </div>
    </div>
  )
}

export default Blog
