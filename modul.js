const dataservice = require('./mongodb')

function locationReturner (city) {
  return dataservice.getData(city)
}

module.exports = locationReturner
