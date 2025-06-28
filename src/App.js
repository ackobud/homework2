const VIDEOS = [
  {
    id: 1,
    title: "How to learn react",
    url: "https://youtu.be/YNJuvq3kIDQ?list=RDYNJuvq3kIDQ",
    cover: "https://img.youtube.com/vi/YNJuvq3kIDQ/maxresdefault.jpg",
  },
  {
    id: 2,
    title: "How to learn CSS",
    url: "https://youtu.be/1PnVor36_40",
    cover: "https://img.youtube.com/vi/1PnVor36_40/maxresdefault.jpg",
  },
];

const App = () => {
  return (
    <>
      {VIDEOS.map((video) => {
        return (
          <a href={video.url} target="_blank">
            <h3>{video.title}</h3>
            <img src={video.cover} />
          </a>
        );
      })}
    </>
  );
};

export default App;
