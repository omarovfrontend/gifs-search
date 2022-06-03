import React, { useEffect, useState } from "react";
import "./ClipsGiphySection.css";

const ClipsGiphySection = ({ giphysArray }) => {
  const [giphys, setGiphys] = useState([]);

  const randomizeData = (giphysArray) => {
    return giphysArray.sort(() => Math.random() - 0.5);
  }

  useEffect(() => {
    let randomData = randomizeData(giphysArray);
    setGiphys(randomData.slice(0, 3));
  }, [giphysArray])

  return (
    <div className="clips-grid">
      {giphys && giphys.length ? (
        <>
          <div className="first-column">
            <img src={giphys?.[0]?.images.downsized.url} alt="Giphys" />
            <div className="text">
              <img src="/images/giphyIconDark.png" alt="darkLogo" />
              <p>{giphys?.[0].title}</p>
            </div>
          </div>
          <div className="second-column">
            <img src={giphys?.[1]?.images.downsized.url} alt="Giphys" />
            <div className="text">
              <img src="/images/giphyIconDark.png" alt="darkLogo" />
              <p>{giphys?.[1].title}</p>
            </div>
            <img src={giphys?.[2]?.images.downsized.url} alt="Giphys" />
            <div className="text">
              <img src="/images/giphyIconDark.png" alt="darkLogo" />
              <p>{giphys?.[2].title}</p>
            </div>
          </div>
        </>
      ): null }
    </div>
  );
};

export default ClipsGiphySection;
