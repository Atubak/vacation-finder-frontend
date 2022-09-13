import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Search, Results, Details, User, Login, SignUp } from "./pages";
import { ButtonAppBar, Footer, MessageBox } from "./components/";
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
      <ButtonAppBar
        style={{
          gridColumnStart: "1",
          gridColumnEnd: "2",
          gridRowStart: "1",
          gridRowEnd: "2",
        }}
      />
      <MessageBox />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/results" element={<Results />} />
        <Route path="/details" element={<Details />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer
        style={{
          gridColumnStart: "1",
          gridColumnEnd: "2",
          gridRowStart: "3",
          gridRowEnd: "4",
        }}
      />

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
