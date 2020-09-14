import React from 'react';
import Clarifai from 'clarifai';

import { setFaceBoundary, setApparelBoundary } from '../../redux/box/box.actions';

import { connect } from 'react-redux';

import './navigation.styles.css';

const app = new Clarifai.App({
	apiKey: '3433c425ee5242de9459ae5f670f07f7'
	});

const Navigation = ({ setFaceBoundary, setApparelBoundary, fileProperties })=> {

		const calculateApparel = (data) => {
			const outputs = data.outputs[0].data.regions.map(apparels => apparels.region_info.bounding_box);
			const image = document.getElementById("inputImage");
			const width = image.clientWidth;
			const height = image.clientHeight;
			const apparelsLoaction = outputs.map(apparel => { 
					return {
						leftCol: apparel.left_col * width,
						topRow: apparel.top_row * height,
						rightCol: width -  apparel.right_col * width,
						bottomRow: height - apparel.bottom_row * height
					}
				});
			return apparelsLoaction;
	}

	const calculateFace = (data) => {
			const outputs = data.outputs[0].data.regions.map((faces) => faces.region_info.bounding_box);
			const image = document.getElementById("inputImage");
			const width = image.clientWidth;
			const height = image.clientHeight;
			const faceCordinates = outputs.map((face) => {
					return {
						leftCol: face.left_col * width,
						topRow: face.top_row * height,
						rightCol: width -  face.right_col * width,
						bottomRow: height - face.bottom_row * height
						// boxHeight: height - ((height - face.bottom_row * height) + (face.top_row * height));

					}
				});
			return faceCordinates;
		}



	const detectFace = () => {
		app.models.predict(Clarifai.FACE_DETECT_MODEL, {base64: fileProperties}).then(
    	(response) => {
      		setFaceBoundary(calculateFace(response));
    		
    	},
    	(err) => {
      		console.log('There was an error', err);
    	}
  			);
		setApparelBoundary({})
	}

	const detectApparels = () => {
  		app.models.predict('72c523807f93e18b431676fb9a58e6ad', {base64: fileProperties}).then(
    	(response) => {    		
    		console.log('response at the  models',response)
      		setApparelBoundary(calculateApparel(response));

    	},
    	(err) => {
      		console.log('There was an error', err);
    	}
  			);				
		setFaceBoundary({})
	}
	return (
		<div className ='navigation'>
			<div id="mySidebar" className="sidebar">
			  <button onClick={detectFace}><span className="icon-text">Detect Face</span></button>
	  		  <button onClick={detectApparels}><span className="icon-text">Detect Apparels</span></button>
			</div>
		</div>
	);
};

const mapStateToProps = ({image: {fileProperties}}) => ({
fileProperties
})

const mapDispatchToProps = dispatch => ({
	setFaceBoundary: (facePostion) => dispatch(setFaceBoundary(facePostion)),
	setApparelBoundary: (apparelPosition) => dispatch(setApparelBoundary(apparelPosition)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
