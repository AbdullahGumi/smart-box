import React, { useState } from 'react';
import Particles from 'react-particles-js';
import Header from './components/header/header.component.jsx';
import Dropzone from 'react-dropzone';

import './App.css';

const particlesOptions = {
	particles: {
		number: {
			value: 100,
			density: {
				enable: true,
				value_area: 800
			}
		}
	}
}

function App (){

	const [fileNames, setFileNames] = useState([]);
	const handleDrop = acceptedFiles => setFileNames(acceptedFiles.map(file => file.name));
	return (
		<div>	
			<Header/>		
			<Dropzone onDrop={handleDrop} accept="image/*">
        {({ getRootProps,
          getInputProps,
          isDragActive,
          isDragAccept,
          isDragReject}) => {
          // additional CSS depends on dragging status
          const additionalClass = isDragAccept
            ? "accept"
            : isDragReject
            ? "reject"
            : "";

          return (
            <div
              {...getRootProps({
                className: `dropzone ${additionalClass}`
              })}
            >
              <input {...getInputProps()} />
              <span>{isDragActive ? "📂" : "📁"}</span>
              <p>Drag'n'drop images, or click to select files</p>
            </div>
          );
        }}
      </Dropzone>
				<div>
        <strong>Files:</strong>
        <ul>
          {fileNames.map(fileName => (
            <li key={fileName}>{fileName}</li>
          ))}
        </ul>
      </div>
			<Particles className="particles" params={particlesOptions}/>
		</div>
	);	
}

export default App;