export const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response.json()
}

export const mapLaunchesByYear = data => {
  const mapped = []

  for (let index = 0; index < data.length; index++) {
    mapped.push(data[index].launch_year)
  }

  return mapped.filter((item, index) => mapped.indexOf(item) === index)
}
