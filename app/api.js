const data = {
  cities: {
    Austin: {
      name: 'Austin',
      country: 'USA',
    },
    Seattle: {
      name: 'Seattle',
      country: 'USA',
    },
    Dallas: {
      name: 'Dallas',
      country: 'USA',
    }
  }
}

export default () => new Promise(resolve => {
  setTimeout(() => {
    return resolve(data)
  }, 4000)
})
