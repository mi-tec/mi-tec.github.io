import Navigation from "./section/Navigation";
import './App.css';
import Name from "./section/Summary/Name";
import Links from "./section/Summary/Links";
import Summary from "./section/Summary/Summary";
import TechnicalSkills from "./section/TechnicalSkills";

function App() {
  return (
    <div
      className='main-wrapper font-display '
    >
      <Navigation />
      <div className="mt-20 p-1 md:w-3xl margin-auto">
        <Name />
        <Links />
        <Summary />
        <TechnicalSkills />
      </div>
    </div>
  );
}

export default App;