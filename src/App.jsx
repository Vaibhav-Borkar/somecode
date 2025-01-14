import MainCarousel from "./components/MainCarousel";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="class">
      <Navigation />
      <div>
        <Home />
      </div>
    </div>
  );
};
export default App;
