import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/ProjectsImage";
import "./Features.css";

const FeatureGrid = ({ gridItems }) => (
  <div className="">
    {gridItems.map(item =>
      gridItems.indexOf(item) % 2 == 0 ? (
        <div key={item.text} className="project">
          <div className="projectsImageLeft">
            <PreviewCompatibleImage imageInfo={item} />
          </div>
          <div className="projectInfo">
            <div className="closeLineLeft">
              <button className="closbtnProjectLeft">
                <b>x</b>
              </button>
            </div>
            <div className="projectTextLeft">
              <p>{item.text}</p>
            </div>
          </div>
        </div>
      ) : (
        <div key={item.text} className="project">
          <div className="projectInfo">
            <div className="closeLineRight">
              <button className="closbtnProjectRight">
                <b>x</b>
              </button>
            </div>
            <div className="projectTextRight">
              <p>{item.text}</p>
            </div>
          </div>
          <div className="projectsImageRight">
            <PreviewCompatibleImage imageInfo={item} />
          </div>
        </div>
      )
    )}
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
