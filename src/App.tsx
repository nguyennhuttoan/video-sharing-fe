import "./App.css";
import Post from "./components/Post";
import Guard from "./routes/Guard";
import { Home } from "./routes/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="post"
            element={
              <Guard>
                <Post />
              </Guard>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
