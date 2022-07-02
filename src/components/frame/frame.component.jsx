import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { Box, Grid, Typography } from "@mui/material";

import {
  setFaceBoundary,
  setApparelBoundary,
  setFaceInfo,
  setBoundingBox,
  setApparelsInfo,
  toggleBox,
  setWithSpinner,
} from "../../redux/box/box.actions";
import { setFileProperties } from "../../redux/image/image.actions.js";

import ModelsOptions from "../models-options/models-options.component.jsx";
import ImageFrame from "../image-frame/image-frame.component";

const Frame = ({
  faceInfo,
  apparelsInfo,
  toggleBox,
  setFaceBoundary,
  setApparelBoundary,
  setFaceInfo,
  setFileProperties,
  setBoundingBox,
  setApparelsInfo,
  setWithSpinner,
  withSpinner,
}) => {
  const closeFrame = () => {
    setWithSpinner(false);
    setFileProperties();
    toggleBox();
    setFaceBoundary({});
    setApparelBoundary({});
    setFaceInfo({});
    setBoundingBox({});
    setApparelsInfo({});
  };
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: { md: "80%", xs: "100%" },
        bgcolor: "background.paper",
        border: "2px solid #000",
        borderRadius: "10px",
        height: { md: "80%", xs: "100%" },
        boxShadow: 24,
        p: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          height: "100%",
          flexDirection: { md: "row", xs: "column" },
          justifyContent: "space-between",
        }}
      >
        <ImageFrame closeFrame={closeFrame} />
        <Box
          sx={{
            display: "flex",
            overflowY: "auto",
            flexDirection: "column",
            borderRadius: "10px",
            background: "#879FD1",
            justifyContent:
              faceInfo > 0 || apparelsInfo.length > 0
                ? "space-between"
                : "flex-end",
            alignItems: "center",
            width: { md: "30%", xs: "100%" },
            height: { md: "100%", xs: "30%" },
          }}
        >
          {faceInfo > 1 ? (
            <span style={{ paddingTop: "1rem" }}>
              I Have Detected {faceInfo} Faces
            </span>
          ) : (
            faceInfo === 1 && <span>i have detected {faceInfo} face</span>
          )}
          {withSpinner ? (
            <div className="spinner">
              <Loader
                type="ThreeDots"
                color="#778899"
                secondaryColor="#778899"
              />
            </div>
          ) : (
            apparelsInfo.length > 0 && (
              <Grid container sx={{ p: 3 }}>
                <Grid item xs={6}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography sx={{ fontWeight: 500, fontSize: "18px" }}>
                        Name
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <span>
                        {apparelsInfo.map((concepts) => (
                          <p key={concepts[0].value}>{concepts[0].name}:</p>
                        ))}
                      </span>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography sx={{ fontWeight: 500, fontSize: "18px" }}>
                        Probabilty
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <span className="apparels-value">
                        {apparelsInfo.map((concepts) => (
                          <p key={concepts[0].value}>
                            {Math.floor(concepts[0].value * 100)} %
                          </p>
                        ))}
                      </span>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            )
          )}
          <ModelsOptions />
        </Box>
      </Box>
    </Box>
  );
};
const mapStateToProps = ({ box: { faceInfo, apparelsInfo, withSpinner } }) => ({
  faceInfo,
  apparelsInfo,
  withSpinner,
});

const mapDispatchToProps = (dispatch) => ({
  toggleBox: () => dispatch(toggleBox()),
  setFileProperties: (file) => dispatch(setFileProperties(file)),
  setFaceBoundary: (boundary) => dispatch(setFaceBoundary(boundary)),
  setApparelBoundary: (boundary) => dispatch(setApparelBoundary(boundary)),
  setFaceInfo: (number) => dispatch(setFaceInfo(number)),
  setBoundingBox: (bounding) => dispatch(setBoundingBox(bounding)),
  setApparelsInfo: (info) => dispatch(setApparelsInfo(info)),
  setWithSpinner: (spinner) => dispatch(setWithSpinner(spinner)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Frame);
