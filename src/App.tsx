import "./App.css";
import Guard from "./routes/Guard";
import { Home } from "./routes/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostVideo from "./routes/PostVideo";

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
                <PostVideo />
              </Guard>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
