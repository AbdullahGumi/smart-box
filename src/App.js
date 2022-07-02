import React from "react";

import Particles from "react-particles-js";
import Dropzone from "react-dropzone";
import { connect } from "react-redux";

import { setFileProperties } from "./redux/image/image.actions";
import { toggleBox } from "./redux/box/box.actions";
import Header from "./components/header/header.component.jsx";
import Frame from "./components/frame/frame.component";
import "./App.css";

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

const App = ({ toggleBox, setFileProperties, isBoxVisible }) => {
  const handleDrop = (acceptedFiles) => {
    fetch(acceptedFiles.map((file) => URL.createObjectURL(file)))
      .then((res) => res.blob())
      .then((blob) => {
        var reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = function () {
          var base64String = reader.result.split(",").pop();
          setFileProperties(base64String);
        };
      });
    toggleBox();
  };

  return (
    <div className="main">
      <Header />
      {isBoxVisible ? (
        <Frame />
      ) : (
        <Dropzone onDrop={handleDrop} accept="image/*">
          {({
            getRootProps,
            getInputProps,
            isDragActive,
            isDragAccept,
            isDragReject,
          }) => {
            // additional CSS depends on dragging status
            const additionalClass = isDragAccept
              ? "accept"
              : isDragReject
              ? "reject"
              : "";
            return (
              <div
                {...getRootProps({ className: `dropzone ${additionalClass}` })}
              >
                <input {...getInputProps()} />
                <h2>
                  I Can Detect Faces & Apparels In An Image. Give Me A Try
                </h2>
                <span>{isDragActive ? "📂" : "📁"}</span>
                <p>Drag and drop an image, or click to start </p>
              </div>
            );
          }}
        </Dropzone>
      )}
      <Particles className="particles" params={particlesOptions} />
    </div>
  );
};

const mapStateToProps = ({
  image: { fileProperties },
  box: { isBoxVisible },
}) => ({
  fileProperties,
  isBoxVisible,
});

const mapDispatchToProps = (dispatch) => ({
  setFileProperties: (image) => dispatch(setFileProperties(image)),
  toggleBox: () => dispatch(toggleBox()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
