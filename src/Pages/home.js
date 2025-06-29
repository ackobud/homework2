import AllVideos from "../Components/Allvideos";
import SearchBar from "../Components/SearchBar";
import { useState } from "react";
import VIDEOS from "./../videos.json";

const Home = () => {
  const [videos, setVideos] = useState(VIDEOS);
  const [filteredVideos, setFilteredVideos] = useState(VIDEOS);

  const handleSearchVideo = (results) => {
    setFilteredVideos(results);
  };

  return (
    <>
      <SearchBar videos={videos} onSearchVideo={handleSearchVideo} />
      <AllVideos videos={filteredVideos} />
    </>
  );
};
export default Home;
