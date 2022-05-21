import './App.css';
import Travel from './components/Travel/Travel';

function App() {
  return (
    <div className='App'>
      <div className='title-area'>
        <h1 className='title'>Confused Traveler</h1>
        <h2>Choose 4 Places</h2>
      </div>
      <Travel></Travel>
    </div>
  );
}

export default App;
