import React from 'react'
import PropTypes from 'prop-types'

export default class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      city: '' 
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit(event){
    event.preventDefault()
    
    this.props.onSubmit(this.state.city)
    this.setState({
      city:''
    })
  }
  handleChange(event) {
    this.setState({
      city: event.target.value
    })
  }
  render () {
    return (
      <form className='column search-bar' onSubmit={this.handleSubmit}>
        <label htmlFor='city' className='search-label flex-center'>
          {this.props.label}
        </label>
        <div className='row search-input'>
          <input 
            type='text'
            id='city'
            className=''
            placeholder='Please enter a city name'
            autoComplete='off'
            value={this.state.city}
            onChange={this.handleChange}
          />
          <button
            className='btn dark-btn'
            type='submit'
            disabled={!this.state.city}
          >
            Submit
          </button>
        </div>
      </form>
    )
  }
}

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}

















/* export default class Search extends React.Component {
  state = {
    city: ''
  }
  handleSubmit = (event) => {
    event.preventDefault()

    this.props.onSubmit(this.state.city)
  }
  handleChange = (event) => {
    this.setState({
      city: event.target.value
    })
  }
  render() {
    return (      
      <form className='' onSubmit={this.handleSubmit}>
        <label htmlFor='city' className=''>
          {this.props.label}
        </label>
        <div className='flex-center'>
          <input
            typee='text'
            id='city'
            placeholder='city'
            autoComplete='off'
            value={this.state.city}
            onChange={this.handleChange}
          />
          <button
            type='submit'
            disabled={!this.state.city}
          >
            Submit
          </button>
        </div>
      </form>                 
    )
  }
}

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}  */