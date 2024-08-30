import './App.css';

import { Calculator } from './components/calculator/calculator'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          The customer has asked us to create a simplified calculator app.
        </p>
        <ul className="App-instructions">
          <li>It should take two numbers (defaulted to 0) and display the mathematical result</li>
          <li>It should default to addition</li>
          <li>It can also perform subtraction</li>
        </ul>
        <Calculator />
      </header>
    </div>
  );
}

export default App;
