import {
  Meta,   // Inyectar datos en el HTML
  Links,  // Inyectar estilos css  
  Outlet  // Inyectar lo de que encuentre en 'routes'
} from '@remix-run/react'
import styles from './styles/index.css'
import Header from './components/header'

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
export function links() {
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

//------------------------| Funcion secundaria |------------------------
function Document({ children }) {
  return (
    <html>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}