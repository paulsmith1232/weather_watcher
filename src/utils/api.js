const key = "d2c818978141bd457d6cff4d2b881004"
//const endpoint = window.encodeURI(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${key}`)

 
/* function getErrorMsg (message, city) {
  if (message === 'Not Found') {
    return `${city} doesn't exist`
  }

  return message
} */
 
export function fetchWeather (city) {
  const endpoint = window.encodeURI(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${key}`)
  return fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
      if (!data.main) {       
        throw new Error(data)
      }
      return data
    })
} 

