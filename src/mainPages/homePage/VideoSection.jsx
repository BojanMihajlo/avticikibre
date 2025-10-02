import React from "react";
import "./VideoSection.css";
import video from "../../images/video/video1.mp4";

export default function VideoSection() {
  return (
    <>
      <div className="videoSection">
        <div className="videoDiv">
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 0,
            }}
          >
            <source src={video} type="video/mp4" />
            <p>Your browser does not support the video tag.</p>
          </video>
        </div>
      </div>
    </>
  );
}
