import React from "react";

import BoundingBox from "../bounding-box/bounding-box.component.jsx";

import { connect } from "react-redux";

import "./image-frame.styles.css";
import { Box } from "@mui/material";
const ImageFrame = ({
  fileProperties,
  faceBoundary,
  apparelBoundary,
  closeFrame,
}) => (
  <Box
    sx={{
      position: "relative",
      width: "fit-content",
      height: "fit-content",
    }}
  >
    <Box
      id="inputImage"
      component="img"
      sx={{
        borderRadius: "10px",
        height: "500px",
        width: "500px",
      }}
      key={`${fileProperties}`}
      src={`data:image/png;base64, ${fileProperties}`}
      alt="sample"
    />
    {faceBoundary.length > 0 && <BoundingBox />}
    {apparelBoundary.length > 0 && <BoundingBox />}
    <Box
      onClick={closeFrame}
      sx={{
        position: "absolute",
        top: 0,
        borderRadius: "5px",
        background: "red",
        opacity: ".8",
        width: "fit-content",
        height: "fit-content",
        p: 0.4,
        color: "white",
        ":hover": { cursor: "pointer" },
      }}
    >
      CLOSE
    </Box>
  </Box>
);
const mapStateToProps = ({
  image: { fileProperties },
  box: { faceBoundary, apparelBoundary },
}) => ({
  fileProperties,
  faceBoundary,
  apparelBoundary,
});

export default connect(mapStateToProps)(ImageFrame);
