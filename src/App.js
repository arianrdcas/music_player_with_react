import './App.css';
import Menu from './Menu';


function App() {
  return (
    <>
      <h1 className="titulo">Music Player con React</h1>
      <div className="container">
        <div >
          <ol className="lista">
            <li>Mario Castle</li>
            <hr/>
            <li>Mario Star</li>
            <hr/>
            <li>Mario Overworld</li>
            <hr/>
            <li>Mario Stage 1</li>
            <hr/>
            <li>Mario Stage 2</li>
            <hr/>
            <li>Mario Star-2</li>
            <hr/>
            <li>Mario Underworld</li>
            <hr/>
            <li>Mario Underwater</li>
            <hr/>
            <li>Zelda Castle</li>
            <hr/>
            <li>Zelda Outworld</li>
            <hr/>
            <li>Zelda Titles</li>
            <hr/>
          </ol>
        </div>
        <Menu />
      </div>
    </>
  );
}

export default App;
