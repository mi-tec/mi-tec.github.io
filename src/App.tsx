import Navigation from "./section/Navigation";
import './App.css';
import Name from "./section/Summary/Name";

function App() {
  const a: number = 100;
  return (
    <div
      className='main-wrapper font-display '
    >
      <Navigation />
      <div className="mt-20">
        <Name />
      </div>
    </div>
  );
}

export default App;