import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Button variant="primary">Primary</Button>
      <Home></Home>
    </div>
  );
}

export default App;
