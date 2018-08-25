import io from 'socket.io-client'

const hostname = location.hostname
const port = 5555
const url = `http://${hostname}:${port}`
let socket

const getSocket = () => {
    socket = socket || io(url)
    return socket
}


export default getSocket
