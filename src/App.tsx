import { Navbar } from "./components/navbar";
import { Preview } from "./components/preview";
import { About } from "./components/about";
import { RepairService } from "./components/repairService";

function App() {
  return (
    <>
      <Navbar />
      <Preview />
      <div
      className="
      bg-gradient-to-b from-yellow-400 to-yellow-700 py-[2rem] space-y-[2rem]">
        <About />
        <RepairService />
      </div>
    </>
  );
}

export default App;
