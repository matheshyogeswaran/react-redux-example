import React from 'react';
import './App.css';
import CustomerAdd from './CustomerAdd';
import CustomerView from './CustomerView';
import { Provider } from 'react-redux';
import { store } from './store'; // Import Redux store

function App() {
  return (
    <Provider store={store}> {/* Wrap components in Provider to make store available */}
      <div className="App">
        <h1>React Example</h1>
        <CustomerAdd /> {/* Component to add customers */}
        <CustomerView /> {/* Component to view customers */}
      </div>
    </Provider>
  );
}

export default App;
