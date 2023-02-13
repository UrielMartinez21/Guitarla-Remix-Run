// 'guitarras.server.js'
// '.server' le dice a remix que ejecutara este archivo en el lado del servidor

//---------------------| Obtener posts |---------------------
export const getPosts = async () => {
    const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
    return await respuesta.json()
}

//---------------------| Obtener obtener post por URL |---------------------
export const getPost = async (url) => {
    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
    return await respuesta.json()
}