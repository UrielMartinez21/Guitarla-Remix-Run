import { getPosts } from '~/models/posts.server'
import { getCurso } from '~/models/curso.server'
import { getGuitarras } from '~/models/guitarras.server'
import { useLoaderData } from '@remix-run/react'
import ListadoGuitarras from '~/components/listado-guitarras'
import ListadoPosts from '~/components/listado-posts'
import Curso from '~/components/curso'
import stylesGuitarras from '~/styles/guitarras.css'
import stylesPosts from '~/styles/blog.css'
import stylesCursos from '~/styles/curso.css'

export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: stylesGuitarras
    },
    {
      rel: 'stylesheet',
      href: stylesPosts
    },
    {
      rel: 'stylesheet',
      href: stylesCursos
    }
  ]
}

export const loader = async () => {
  const [guitarras, posts, cursos] = await Promise.all([getGuitarras(), getPosts(), getCurso()])  // Consultas inician al mismo tiempo
  return {
    guitarras: guitarras.data,
    posts: posts.data,
    cursos: cursos.data
  }
}

const Index = () => {
  const { guitarras, posts, cursos } = useLoaderData()
  return (
    <>
      <main className='contenedor'>
        <ListadoGuitarras guitarras={guitarras} />
        <Curso curso={cursos.attributes} />
        <ListadoPosts posts={posts} />
      </main>
    </>
  )
}

export default Index
