const stockholm = {
  1: {
    lat: '12321',
    long: '32132'
  },
  2: {
    lat: '12321',
    long: '32132'
  },
  3: {
    lat: '12321',
    long: '32132'
  }
}

const dataservice = {
  getData (city) {
    if (city === 'stockholm') {
      return stockholm
    } else {
      return ' '
    }
  }
}

module.exports = dataservice
