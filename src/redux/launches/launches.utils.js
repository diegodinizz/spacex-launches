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

// function handleSort (data) {
//   if (data.length <= 1) {
//     return
//   } else if (!sortButtonToggle) {
//     data.sort(
//       (a, b) => parseFloat(b.flight_number) - parseFloat(a.flight_number)
//     )
//     setSortButton('Ascending')
//     dispatch(toggleSortButton())
//   } else {
//     data.sort(
//       (a, b) => parseFloat(a.flight_number) - parseFloat(b.flight_number)
//     )
//     setSortButton('Descending')
//     dispatch(toggleSortButton())
//   }
// }
