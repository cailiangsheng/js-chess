import io from 'socket.io-client'

const hostname = location.hostname
const port = 5555
const url = `http://${hostname}:${port}`

const createSocket = () => io(url)

export default createSocket
