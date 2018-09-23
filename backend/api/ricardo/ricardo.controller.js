const Ricardo = require('./ricardo.model')

/**
 * Get list of all posts confirmed by the blockchain
 * @returns {Ricardo[]}
 */
const listRicardosConfirmed = async (req, res) => {
  try {
    const confirmedRicardos = await Ricardo.find({ ricardoConfirmed: true }).exec()
    res.send(confirmedRicardos)
  } catch (err) {
    console.error(err)
  }
}

module.exports = { listRicardosConfirmed }
