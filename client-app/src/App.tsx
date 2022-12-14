import React from 'react';
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
      <div>dsfasdf</div>
  );
}

export default App;
