import VIDEOS from "./../videos.json";

const getAllVideos = () => {
  return VIDEOS.map((video) => {
    return (
      <a href={video.url} target="_blank">
        <h3>{video.title}</h3>
        <img src={video.cover} />
      </a>
    );
  });
};

export default getAllVideos;
