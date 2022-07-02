import React from "react";
import { connect } from "react-redux";
import "./bounding-box.styles.css";

const BoundingBox = ({ boundingBox, faceInfo }) => {
  const image = document.getElementById("inputImage");
  const width = image.clientWidth;
  const height = image.clientHeight;
  return boundingBox.map((location) => (
    <div
      className="bounding-box"
      key={location.top_row}
      style={{
        top: location.top_row * height,
        left: location.left_col * width,
        bottom: height - location.bottom_row * height,
        right: width - location.right_col * width,
      }}
    >
      <div className="transparent" />
      {faceInfo > 0 ? (
        <label
          className="box-label"
          key={location.top_row}
          style={{
            bottom:
              height -
              (height -
                location.bottom_row * height +
                location.top_row * height),
          }}
        >
          face
        </label>
      ) : null}
    </div>
  ));
};

const mapStateToProps = ({ box: { boundingBox, faceInfo } }) => ({
  boundingBox,
  faceInfo,
});

export default connect(mapStateToProps)(BoundingBox);
