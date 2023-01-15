import React from "react";
import { Box, Button } from "@mui/material";

import Clarifai from "clarifai";
import { connect } from "react-redux";

import {
  setFaceBoundary,
  setApparelBoundary,
  setFaceInfo,
  setBoundingBox,
  setApparelsInfo,
  setWithSpinner,
} from "../../redux/box/box.actions";

import "./models-options.styles.css";

const app = new Clarifai.App({
  apiKey: "3433c425ee5242de9459ae5f670f07f7",
});

const ModelsOptions = ({
  setFaceBoundary,
  setApparelBoundary,
  fileProperties,
  setFaceInfo,
  setBoundingBox,
  setApparelsInfo,
  setWithSpinner,
}) => {
  const calculateApparel = (data) => {
    const conceptsArray = data.outputs[0].data.regions.map(
      (concepts) => concepts.data.concepts
    );
    setApparelsInfo(conceptsArray);
    const outputs = data.outputs[0].data.regions.map(
      (apparels) => apparels.region_info.bounding_box
    );
    setBoundingBox(outputs);
    const image = document.getElementById("inputImage");
    const width = image.naturalWidth;
    const height = image.naturalHeight;
    const apparelsLoaction = outputs.map((apparel) => {
      return {
        leftCol: apparel.left_col * width,
        topRow: apparel.top_row * height,
        rightCol: width - apparel.right_col * width,
        bottomRow: height - apparel.bottom_row * height,
      };
    });
    return apparelsLoaction;
  };

  const calculateFace = (data) => {
    const faceNumber = data.outputs[0].data.regions.length;
    setFaceInfo(faceNumber);
    const outputs = data.outputs[0].data.regions.map(
      (faces) => faces.region_info.bounding_box
    );
    setBoundingBox(outputs);
    const image = document.getElementById("inputImage");
    const width = image.clientWidth;
    const height = image.clientHeight;
    const faceCordinates = outputs.map((face) => {
      return {
        leftCol: face.left_col * width,
        topRow: face.top_row * height,
        rightCol: width - face.right_col * width,
        bottomRow: height - face.bottom_row * height,
      };
    });
    return faceCordinates;
  };

  const detectFace = () => {
    setWithSpinner(true);
    app.models.predict("face-detection", { base64: fileProperties }).then(
      (response) => {
        setFaceBoundary(calculateFace(response));
        setWithSpinner(false);
      },
      (err) => {
        console.log("There was an error", err);
      }
    );
    setApparelsInfo({});
    setApparelBoundary({});
  };

  const detectApparels = () => {
    setWithSpinner(true);
    app.models.predict("apparel-detection", { base64: fileProperties }).then(
      (response) => {
        setApparelBoundary(calculateApparel(response));
        setWithSpinner(false);
      },
      (err) => {
        console.log("There was an error", err);
      }
    );
    setFaceBoundary({});
    setFaceInfo({});
  };
  return (
    <Box className="models-Button">
      <Button
        sx={{ fontFamily: "Finlandica", color: "white" }}
        onClick={detectFace}
      >
        Detect Face
      </Button>
      <Button
        sx={{ fontFamily: "Finlandica", color: "white" }}
        onClick={detectApparels}
      >
        Detect Apparels
      </Button>
    </Box>
  );
};

const mapStateToProps = ({ image: { fileProperties } }) => ({
  fileProperties,
});

const mapDispatchToProps = (dispatch) => ({
  setFaceBoundary: (facePostion) => dispatch(setFaceBoundary(facePostion)),
  setApparelBoundary: (apparelPosition) =>
    dispatch(setApparelBoundary(apparelPosition)),
  setFaceInfo: (number) => dispatch(setFaceInfo(number)),
  setApparelsInfo: (number) => dispatch(setApparelsInfo(number)),
  setBoundingBox: (bounding) => dispatch(setBoundingBox(bounding)),
  setWithSpinner: (spinner) => dispatch(setWithSpinner(spinner)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModelsOptions);
