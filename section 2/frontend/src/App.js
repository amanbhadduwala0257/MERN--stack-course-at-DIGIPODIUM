import logo from './logo.svg';
import './App.css';
import Home from './components/home';

function App() {
  return (
    <div>
       <h1 style={{ color: 'white', backgroundColor : 'red'}}> my react app</h1>
       <button className="btn btn-primary">view home</button>
       <input type="text" />
       <home/>
    </div>
    )
  } 

export default App;
