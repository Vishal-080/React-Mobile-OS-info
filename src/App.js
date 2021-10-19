import logo from './logo.svg';
import './App.css';
import {Manufacturers} from'./Components/Manufacturers';
import {OperatingSystem} from'./Components/OperatingSystem';

function App() {
  return (
    <div>
    <OperatingSystem/>
    <Manufacturers/>
    </div>
  );
}

export default App;
