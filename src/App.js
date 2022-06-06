import "./App.css";
import RequiredAuth from "./hoc/RequiredAuth";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      {/* { */}
        // Code here

        <Navbar />
        <Routes>
          <Route path="login" element={<Login />} />
  
          <Route
            path=""
            element={
              <RequiredAuth>
                <Home />
              </RequiredAuth>
            }
          />
        </Routes>
      {/* // } */}
    </div>
  );
}

export default App;
