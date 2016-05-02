export default {
  index: {
    method: 'GET',
    path: '/',
    handler: (request, response) => {
      response("Hello, World!")
    }
  },
}
