import {
  Meta,       // Inyectar datos en el HTML
  Links,      // Inyectar estilos css  
  Outlet,     // Inyectar lo de que encuentre en 'routes'
  Scripts,    // Inyectar optimizacion de remix
  LiveReload, // Renderizado automatico
  useCatch,   // Manejo de errores
  Link
} from '@remix-run/react'
import styles from './styles/index.css'
import Header from './components/header'
import Footer from './components/footer'

//------------------------| Metadatos |------------------------
export function meta() {                // El nombre 'meta' es obligatorio
  return (                              // Se inyectara en 'Document'
    {                                   // Devuelve un objeto
      charset: 'utf-8',
      title: 'GuitarLA - Remix',
      viewport: 'width=device-width,initial-scale=1'
    }
  )
}

//------------------------| Hojas de estilos |------------------------
export function links() {                // El nombre 'links' es obligatorio
  return (
    [
      {
        rel: "stylesheet",
        href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css"
      },
      {
        rel: "stylesheet",
        href: styles
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "true"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap"
      }
    ]
  )
}

//------------------------| Funcion principal |------------------------
export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  )
}

//------------------------| Funcion que dara formato |------------------------
function Document({ children }) {
  return (
    <html>
      <head>
        <Meta />        {/* Informacion inyectada */}
        <Links />       {/* Estilos inyectados */}
      </head>
      <body>
        <Header />      {/* Se inyecta en cada ruta */}
        {children}      {/* Los componentes de carpeta 'routes' */}

        <Footer />
        <Scripts />     {/* Optimizacion de remix | evita flashasos */}
        <LiveReload />  {/* Renderizado automatico | nota: volver a levantar la pagina */}
      </body>
    </html>
  )
}

//------------------------| Manejo de errores |------------------------
//---> Cuando haya un error estos dos archivos se ejecutaran
export const CatchBoundary = () => {
  const error = useCatch()
  return (
    <Document>
      <p className='error'>{error.status}{error.statusText}</p>
      <Link className='error-enlace' to='/' >Tal vez quieras volver a la pagina principal</Link>
    </Document>
  )
}

export const ErrorBoundary = ({ error }) => {
  return (
    <Document>
      <p className='error'>{error.status}{error.statusText}</p>
      <Link className='error-enlace' to='/' >Tal vez quieras volver a la pagina principal</Link>
    </Document>
  )
}