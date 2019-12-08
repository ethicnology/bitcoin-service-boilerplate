const mongodbProvider = require('../providers/mongodb.provider')
const bitcoinService = require('../services/bitcoin.service')

/*
  * All business logic have to be here
  * For example here we have a service and DB access.
*/
const timestampAndStore = async (idontknow) => {
  try {
    const txSent = await bitcoinService.writeOnBitcoin(idontknow)
    const newDocument = {
      txid: txSent,
      data: idontknow
    }
    return await mongodbProvider.saveExample(newDocument)
  } catch (error) {
    console.error(error.message)
  }
}

module.exports = {
  timestampAndStore
}
