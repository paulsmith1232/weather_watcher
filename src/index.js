import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home'

class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div className='container'>
          <Home />
        </div>        
      </React.Fragment>    
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
