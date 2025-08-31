import "./App.css";
import { ModeToggle } from "./components/mode-toggle";
import Experience from "./section/Experience";
import Portlofios from "./section/Portfolios";
import Links from "./section/Summary/Links";
import Name from "./section/Summary/Name";
import Summary from "./section/Summary/Summary";
import TechnicalSkills from "./section/TechnicalSkills";

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
        <Portlofios />
      </div>
    </div>
  );
}

export default App;
