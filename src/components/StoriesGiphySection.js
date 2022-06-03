import React from "react";
import "./StoriesGiphySection.css";

const StoriesGiphySection = ({ giphysArray }) => {

  const getGiphy = () => {
    let randomIndex = Math.floor(Math.random() * 31) + 0;
    let randomGiphy = giphysArray[randomIndex];

    if (randomGiphy) {
      return randomGiphy;
    }
  }

  const GiphyTile = ({ giphy }) => {
    let giphyURL = giphy ? giphy.images.downsized.url : "";

    return (
      <div className="tile">
        <div className="giphy-tile">
          <div className="text-tile">
            <p>{giphy?.title}</p>
          </div>
          <img src={giphyURL} alt="" />
        </div>
      </div>
    )
  }

  return (
    <div className="stories-section">
      <div className="landscape-left-row">
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
      </div>
      <div className="landscape-right-row">
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
      </div>
      <div className="no-landscape-row">
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
      </div>
      <div className="landscape-middle-row">
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
      </div>
      <div className="no-landscape-row">
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
        <GiphyTile giphy={getGiphy()} />
      </div>
    </div>
  )
}

export default StoriesGiphySection;
