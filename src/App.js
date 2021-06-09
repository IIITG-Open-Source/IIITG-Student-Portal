import logo, { ReactComponent } from './logo.svg';
import React from 'react';
import './App.css';


import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import { render } from '@testing-library/react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginActive: true
    }
  };


  render() {
    const { isLoginActive } = this.state;
    const current = isLoginActive ? "Register" : "Login";
    return (
      <div className="App">
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
            {isLoginActive && (<Login containerRef={ref => (this.current = ref)} />
            )}

            {!isLoginActive && (<Register containerRef={ref => (this.current = ref)} />
            )}
          </div>
        </div>

      </div>
    );
  }
}

/*
function App() {
  return (
    <div className="App"> 
      <Login />
      
      
    </div>
  );
}
*/
export default App;