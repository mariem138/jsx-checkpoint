
import './App.css';
import image from './imageInSrc.png';
import './style.css';
function App() {
  return (
    <div className="App">
      <div style={{border:'solid 1px black',maxWidth:'100vw'}}>
        <h1 className="titlered">Your Name Here</h1>
        <br/>
      <img src={image} alt="nature"/>
      <br/>
      <img src="/imageInSrc.png" alt="nature1"/>
      </div>
      <video width="320" height="240" controls>
        <source src="/videonature.mp4" type="video/mp4"/>
      </video>
    </div>
  );
}

export default App;