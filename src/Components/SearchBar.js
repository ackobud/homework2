import VIDEOS from "./../videos.json";

const SearchBar = ({ videos, onSearchVideo }) => {
  return (
    <form>
      <label>
        Search:
        <input
          type="text"
          name="search"
          onInput={(e) =>
            SearchVideoByName(e.currentTarget.value, videos, onSearchVideo)
          }
        />
      </label>
    </form>
  );
};

const SearchVideoByName = (name, videos, onSearchVideo) => {
  let foundVideos = [];
  VIDEOS.forEach((video) => {
    name = name.toLowerCase();
    video.title = video.title.toLocaleLowerCase();

    if (video.title.includes(name)) {
      foundVideos.push(videos);
    }
  });

  onSearchVideo(foundVideos);
};

export default SearchBar;
