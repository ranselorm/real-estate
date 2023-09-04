import { Routes, Route } from "react-router-dom";

//components import
import Header from "./components/Header";
import Footer from "./components/Footer";

//pages import
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";

const App = () => {
  return (
    <div className="bg-white max-w-[1440px]">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
