import image from './banner.png';
import './App.css';
import About from './About';
import SocialMediaIcons from './Socialicons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='banner'>
        <img src={image} className="banner-image" alt="banner" />
        </div>
      </header>
      <div className='body-content'>
      <About/>
      <SocialMediaIcons/>
      </div>
      
    </div>
  );
}

export default App;
