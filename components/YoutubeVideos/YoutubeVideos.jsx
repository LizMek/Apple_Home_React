import React, { useEffect, useState } from "react";

function YoutubeVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&order=date&key=AIzaSyCVIZRvTiQbEJIRAgebcRtqACZuHnov9IE"
    )
      .then((res) => res.json())
      .then((data) => {
        setVideos(data.items);
      })
      .catch((error) => {
        console.error("Error fetching YouTube videos:", error);
      });
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <section className="YoutubeVideosWrapper">
      <div className="allVideosWrapper">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wrapper">
                <br />
                <h1>Latest Videos</h1>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="videosContainer">
        {videos.map((video) => (
          <div key={video.id.videoId}>
            <div className="Thumbnail">
              <img
                src={video.snippet.thumbnails.high.url}
                alt={video.snippet.title}
              />
            </div>

            <div className="VideoDetails">
              <h5>
                <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`}>
                  {video.snippet.title}
                </a>
              </h5>

              <p>{video.snippet.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default YoutubeVideos;
