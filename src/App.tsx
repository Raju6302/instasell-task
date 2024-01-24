import NavBar from "./components/Navbar/Navbar";
import FirstSection from "./components/firstsection/FirstSection";
import SecondSection from "./components/secondsection/Secondsection";
import ThirdSection from "./components/thirdsection/ThirdSection";

function App() {
  return (
    <div className='app'>
     <NavBar />
     <FirstSection />
     <SecondSection /> 
     <ThirdSection />
    </div>
  );
}

export default App;
