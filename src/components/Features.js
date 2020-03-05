import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/ProjectsImage";
import "./Features.css";

const FeatureGrid = ({ gridItems }) => (
  <div className="">
    {gridItems.map(item => (
      <div key={item.text} className="project">
        {/* <section className=""> */}
        {/* <div className=""> */}
        <div className="">
          <PreviewCompatibleImage imageInfo={item} />
        </div>
        {/* </div> */}
        <div className="projectText">
          <p>{item.text}</p>
        </div>
        {/* </section> */}
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string
    })
  )
};

export default FeatureGrid;
