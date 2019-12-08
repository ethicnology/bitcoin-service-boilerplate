const exampleController = require('../controllers/example.controller')

module.exports = (server) => {
  server.route('/blockchainit').post(exampleController.thisFunctionControlSomething)
}
