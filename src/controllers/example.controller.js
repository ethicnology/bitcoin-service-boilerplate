const exampleService = require('../services/example.service')

const thisFunctionControlSomething = async (req, res) => {
  const idontknow = req.body.hexData
  try {
    await exampleService.timestampAndStore(idontknow)
      .then((response) => {
        res.status(201).json(response)
      })
  } catch (error) {
    console.error(error.message)
    res.status(500)
  }
}

module.exports = {
  thisFunctionControlSomething
}
