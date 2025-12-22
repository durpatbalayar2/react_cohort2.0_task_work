import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";

function App() {
  return <div className="w-full bg-[#000000ef] h-sreen ">
    <Navbar/>
    <Hero/>
    <Page2/>
    <Page3/>
  </div>;
}

export default App;
