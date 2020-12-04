export const mapLaunchYears = data => {
  const mapped = []

  for (let index = 0; index < data.length; index++) {
    mapped.push(data[index].launch_year)
  }

  return mapped.filter((item, index) => {
    return mapped.indexOf(item) === index
  })
}
