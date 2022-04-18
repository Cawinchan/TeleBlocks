import { React, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import Globe from "react-globe.gl";

const GlobeVis = (props) => {
  const globeEl = useRef();

  useEffect(() => {
    globeEl.current.controls().enableZoom = false;
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 5;
  }, []);

  const N = 50;
  const arcsData = [...Array(N).keys()].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
    color: [
      ["red", "white", "cyan", "green"][Math.round(Math.random() * 3)],
      ["red", "white", "cyan", "green"][Math.round(Math.random() * 3)],
    ],
  }));

  return (
    <div id="globeViz">
      <Globe
        ref={globeEl}
        width={window.innerWidth * 0.35}
        height={window.innerHeight * 0.5}
        backgroundColor="rgba(0,0,0,0)"
        // rendererConfig={{ antialias: true, alpha: true }}
        animateIn={true}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        arcsData={arcsData}
        arcColor={"color"}
        arcDashLength={() => Math.random()}
        arcDashGap={() => Math.random()}
        arcDashAnimateTime={() => Math.random() * 4000 + 500}
      />
    </div>
  );
};

GlobeVis.propTypes = {};

export default GlobeVis;
