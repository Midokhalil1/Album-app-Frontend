
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AlbumList from './AlbumList';

// I'm going to fetch http://localhost:5002/albums
// and display them 

function App() {
  return (
    <div className="App">
      <Header />
      <AlbumList />
      <Footer />
      
    </div>
  );
}

export default App;
