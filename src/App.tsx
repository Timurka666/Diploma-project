import { Navbar } from "./components/navbar";
import { Preview } from "./components/preview";
import { About } from "./components/about";

function App() {
  return (
    <>
      <Navbar />
      <Preview />
      <div
      className="
      bg-gradient-to-b from-yellow-400 to-yellow-700">
        <About />
      </div>
    </>
  );
}

export default App;
