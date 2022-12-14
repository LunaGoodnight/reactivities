
import * as React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [act, setAct] = React.useState(null);

  React.useEffect(() => {



      fetch('https://localhost:44339/api/Activities').then( (res) => res.json()).then((response) => {

        setAct(response);
      })


  },[])


  React.useEffect(() => {

    console.log({act})
  }, [act])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
