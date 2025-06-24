import './App.css';
import Name from "./section/Summary/Name";
import Links from "./section/Summary/Links";
import Summary from "./section/Summary/Summary";
import TechnicalSkills from "./section/TechnicalSkills";
import Experience from './section/Experience';
import { ModeToggle } from './components/mode-toggle';

function App() {
  return (
    <div className="main-wrapper font-display">
      <ModeToggle />
      <div className="mt-8 p-1 md:max-w-3xl mx-auto">
        <Name />
        <Links />
        <Summary />
        <TechnicalSkills />
        <Experience />
      </div>
    </div>
  );
}

export default App;