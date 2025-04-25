import "./App.css";
import Gallery from "./components/Galllery/Gallery";
import Leftbar from "./components/leftbar/Leftbar";
import Topbar from "./components/Topbar/Topbar";

function App() {
  return (
    <>
      <div className="app">
        <Leftbar />
        <div className="content">
          <Topbar />
          <Gallery />
        </div>
      </div>
    </>
  );
}

export default App;
