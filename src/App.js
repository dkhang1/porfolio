import About from "./component/layout/About";
import Header from "./component/layout/Header";
import Homehero from "./component/layout/Homehero";
import Project from "./component/layout/Project";

function App() {
  return (
    <div className="App">
      <Header />
      <Homehero />
      <About />
      <Project/>
    </div>
  );
}

export default App;
