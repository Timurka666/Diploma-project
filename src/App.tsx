import { Navbar } from "./components/navbar";
import { Preview } from "./components/preview";
import { About } from "./components/about";
import { RepairService } from "./components/repairService";
import { GoodsList } from "./components/goods";
import { Contacts } from "./components/contacts";

function App() {
  return (
    <>
      <Navbar />
      <Preview />
      <div
      className="
      bg-gradient-to-b from-yellow-400 to-yellow-700 lg:py-[2rem] md:space-y-[1rem] lg:space-y-[2rem]">
        <About />
        <RepairService />
        <GoodsList />
        <Contacts />
      </div>
    </>
  );
}

export default App;
