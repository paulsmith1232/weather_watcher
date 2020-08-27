import React from 'react'
import Search from './Search'
import PropTypes from 'prop-types'
import { fetchWeather } from '../utils/api'
import Card from './Card'
import Loading from './Loading'

function Instructions () {
  return (
    <div className='center-text'>
      <h1 className=''>
        Welcome to Weather Watcher!
      </h1>
     
    </div>
  )
}



export default class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cityName: null, 
      weatherData: null,
      error: null
    }

    this.isLoading = this.isLoading.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  isLoading() {
    const {weatherData, error } = this.state

    return !weatherData === null && this.state.error === null
  }
  handleSubmit(id, city) {
    fetchWeather(city)
      .then((data) => {
        this.setState({
          [id]: city,
          weatherData: data,
          error: null
        })
      })
      .catch(() => {
        console.warn('Error fetching weather')

        this.setState({
          error: `There was an error fetching the weather for ${this.state.cityName}`
        })
      })      
    
  }  

  render() {
    const { cityName, weatherData, error } = this.state
    
    return (
      <React.Fragment>
        <Instructions />        
        <Search              
          label="Location"
          onSubmit={(city) => this.handleSubmit('cityName', city)}
        />
        <div className='weather-container'>
          <div className='row space-around'>
            
            {this.isLoading() && <Loading text='Poking clouds'/>}

            {error && <p className='center-text'>{error}</p>}

            {weatherData !== null && error == null && (
              <CurrentWeather 
                currentData={weatherData} 
                label='cityName' 
                onReset={() => ({})} />
            )}
          </div>
        </div>
        
        
      </React.Fragment>
    )
  }
}

function CurrentWeather ({ currentData, onReset, label }) {
  
  const city = currentData.name
  const country = currentData.sys.country
  const description = currentData.weather[0].main

  console.log(description)
  return (
    <Card
      city={city}
      country={country}
      description={description}
    >
      <CurrentWeatherInfo currentData={currentData.main} />
    </Card>
  )
}

CurrentWeather.propTypes = {
  currentData: PropTypes.object.isRequired,
  onReset: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}

function CurrentWeatherInfo ({ currentData }) {
  return (
    <div className='card-list center-text'>
      <p>        
        Current temperature: <span className='numbers'>{Math.floor(currentData.temp)} °C</span>
      </p>
      <p>        
        Feels like: <span className='numbers'>{Math.floor(currentData.feels_like)} °C</span>
      </p>
      <p>        
        Min. temperature: <span className='numbers'>{Math.floor(currentData.temp_max)} °C</span>
      </p>
      <p>        
        Max. temperature: <span className='numbers'>{Math.floor(currentData.temp_min)} °C</span>
      </p>
      <p>        
        Humidity: <span className='numbers'>{currentData.humidity} %</span>
      </p>
      
    </div>
  )
}

CurrentWeatherInfo.propTypes = {
  currentData: PropTypes.object.isRequired,
}