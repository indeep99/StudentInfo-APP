import logo from './logo.svg';
import './App.css';
import FetchData from './components/FetchData';
import StudentDisplay from './components/StudentDisplay';
import Card from './components/Card';

function App() {
  return (
    <Card className="App Data">
      
      <FetchData></FetchData>
      
    </Card>
  );
}

export default App;
