import logo from './logo.svg';
import './App.css';
import CustomerAdd from './CustomerAdd';
import CustomerView from './CustomerView';

function App() {
  return (
    <div className="App">
      <h1>React Example</h1>
    <CustomerAdd/>
    <CustomerView/>
    </div>
  );
}

export default App;
