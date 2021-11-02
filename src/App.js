import logo from './logo.svg';
import './App.css';
import EnterButton from './components/EnterButton'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Welcome to Swatched
        </h1>
        <EnterButton />

      </header>
    </div>
  );
}

export default App;
