import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";

function App() {
  return <div className="w-full bg-[#000000ef] h-sreen ">
    <Navbar/>
    <Hero/>
    <Page2/>
    <Page3/>
    <Page4/>
    <Page5/>
    <Page6/>
  </div>;
}

export default App;
