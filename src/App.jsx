import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Header from "./components/Header";
import Test from "./pages/Test";

const App = () => {
  return (
    <div className="">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
