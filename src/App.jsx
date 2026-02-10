import MovieCard from "./Components/MovieCard";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./App.css"
import { MovieProvider } from "./context/MovieContext";

function App() {
  return (
    <>
     <MovieProvider>  
        <Navbar/>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </main>
      </MovieProvider>
    </>
  );
}

export default App;
