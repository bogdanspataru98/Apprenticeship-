import logo from './logo.svg';
import './App.css';
import {PresentAllAnimals} from './services/Zoo'
import {ErrorBoundary} from './utils/ErrorBoundry'

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <PresentAllAnimals />
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
    </ErrorBoundary>
  );
}

export default App;
