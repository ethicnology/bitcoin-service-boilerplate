const Example = require('../models/example.model')

/**
 * @param {Object} dataset
 * @returns {Promise} represents the created document.
 */
const saveExample = async (dataset) => new Promise((resolve, reject) => {
  const newExample = new Example()
  newExample.txid = dataset.txid
  newExample.data = dataset.data
  newExample.save()
    .then((response) => {
      resolve(response)
    }).catch((error) => {
      reject(error)
    })
})

module.exports = {
  saveExample
}
