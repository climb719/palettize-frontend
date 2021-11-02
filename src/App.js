import logo from './logo.svg';
import './App.css';
import EnterButton from './components/EnterButton'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://i.pinimg.com/564x/1e/db/25/1edb253a19ebb84b7528e9c33e375159.jpg" className="home-panels" alt="swatches" />
        <h1>
          Welcome to Swatched
        </h1>
        <EnterButton />

      </header>
    </div>
  );
}

export default App;
