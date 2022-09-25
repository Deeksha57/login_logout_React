import './App.css';
import Login from './Login';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Routes className="App" >
      <Route path='/' element={<Login/>}>

      </Route>
    </Routes>
  );
}

export default App;