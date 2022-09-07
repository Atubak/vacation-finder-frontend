import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Search, Results, Details, User } from "./pages";
import { ButtonAppBar, Footer } from "./components/";

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/results" element={<Results />} />
        <Route path="/details" element={<Details />} />
        <Route path="/user" element={<User />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
