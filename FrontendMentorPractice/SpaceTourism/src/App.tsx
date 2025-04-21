import { BrowserRouter, Routes, Route } from "react-router-dom";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Homepage from "./pages/Homepage";
import Technology from "./pages/Technology";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/Destination" element={<Destination />} />
          <Route path="/Crew" element={<Crew />} />
          <Route path="/Technology" element={<Technology />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
