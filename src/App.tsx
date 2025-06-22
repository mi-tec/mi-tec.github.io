import Navigation from "./section/Navigation";
import './App.css';
import Name from "./section/Summary/Name";
import Links from "./section/Summary/Links";

function App() {
  return (
    <div
      className='main-wrapper font-display '
    >
      <Navigation />
      <div className="mt-20">
        <Name />
        <Links />
      </div>
    </div>
  );
}

export default App;