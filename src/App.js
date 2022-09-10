import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Search, Results, Details, User, Login, SignUp } from "./pages";
import { ButtonAppBar, Footer } from "./components/";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUserWithStoredToken } from "./store/user/thunks";

// import { useSelector } from "react-redux";
// import { selectAllCategories } from "./store/locations/selectors";

function App() {
  // const allCategories = useSelector(selectAllCategories());
  // console.log(allCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);
  return (
    <div className="App">
      <ButtonAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/results" element={<Results />} />
        <Route path="/details" element={<Details />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
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
