import './App.css';
import Header from './components/Header';
import SearchContainer from './components/SearchContainer';

function App() {
  return (
    <div className="app">
      <div className='main'>
        <Header />
        <SearchContainer />
        <h1>Media</h1>
      </div>
    </div>
  );
}

export default App;
