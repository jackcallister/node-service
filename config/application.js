import Hapi from 'hapi'
import applicationController from '../controllers/applicationController'

const server = new Hapi.Server()
const port = process.env.PORT || 4444

server.connection({ port: port })

server.route(applicationController.index)

server.start((err) => {
  if (err) {
    throw err
  }

  console.log('Server running at:', `http://localhost:${port}`)
})
