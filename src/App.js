import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/home";
import Video from "./Components/Video";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Video/:id" element={<Video />} />
        </Routes>
      </BrowserRouter>

      {/* <AllVideos /> */}
    </>
  );
};

export default App;
