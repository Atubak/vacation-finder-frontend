import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Search, Results, Details, User } from "./pages";
import { ButtonAppBar, Footer } from "./components/";

// import { useSelector } from "react-redux";
// import { selectAllCategories } from "./store/locations/selectors";

function App() {
  // const allCategories = useSelector(selectAllCategories());
  // console.log(allCategories);

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

      <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default App;
