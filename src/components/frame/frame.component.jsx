import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { setFaceBoundary, setApparelBoundary, numberOfFaces, setBoundingBox, setApparelsInfo, toggleBox, setWithSpinner } from '../../redux/box/box.actions';
import { setFileProperties } from '../../redux/image/image.actions.js';

import ModelsOptions from '../models-options/models-options.component.jsx';
import ImageFrame from '../image-frame/image-frame.component';

import './frame.styles.css';


const Frame = ({ faceCount, apparelsInfo, toggleBox, setFaceBoundary, setApparelBoundary, numberOfFaces, setFileProperties, setBoundingBox, setApparelsInfo, setWithSpinner, withSpinner })=> {
	
	const closeFrame = () => {
		setWithSpinner(false);
		setFileProperties();
		toggleBox();
		setFaceBoundary({});
		setApparelBoundary({});
		numberOfFaces(0);
		setBoundingBox({});
		setApparelsInfo({});
	}
	return (
		<div className ='frame'>
				<div className ="close-frame">
					<button onClick={closeFrame}>X</button>
				</div>	
				<div className ="image-frame">
					<ImageFrame />
				</div>	
				<div className ="info-frame">
						{!faceCount > 0 & !apparelsInfo.length > 0 & withSpinner === false ?
							<h4>Select one of the models below to start.</h4>: null
						}
						{faceCount > 1 &&
							<span>I have detected  {faceCount} faces</span>
						}
						{faceCount === 1  &&
							<span>I have detected  {faceCount} face</span>
						}						
						{withSpinner === true ? (
							<div className= 'spinner'>
							      <Loader type="ThreeDots" color="#778899" secondaryColor = '#778899'  />
						   </div>
							    ) : (
							    apparelsInfo.length > 0 &&
									<div className = 'apparels-info'>
										<h4>Name<span className = 'apparels-name'>{apparelsInfo.map((concepts) => <p key = {concepts[0].value}>{concepts[0].name}:</p>)}</span></h4>
										<h4>Probabilty<span className = 'apparels-value'>{apparelsInfo.map((concepts) => <p key = {concepts[0].value}>{Math.floor(concepts[0].value * 100)} %</p>)}</span></h4>
									</div>
							    
							    )
						}
						<ModelsOptions />
				</div>
		</div>
	);}
const mapStateToProps = ({box:{faceCount, apparelsInfo, withSpinner} }) => ({
	faceCount,
	apparelsInfo,
	withSpinner 
})

const mapDispatchToProps = dispatch => ({
	toggleBox: () => dispatch(toggleBox()),
	setFileProperties: (file) => dispatch(setFileProperties(file)),
	setFaceBoundary: (boundary) => dispatch(setFaceBoundary(boundary)),
	setApparelBoundary: (boundary) => dispatch(setApparelBoundary(boundary)),
	numberOfFaces: (number) => dispatch(numberOfFaces(number)),
	setBoundingBox: (bounding) => dispatch(setBoundingBox(bounding)),
	setApparelsInfo: (info) => dispatch(setApparelsInfo(info)),
	setWithSpinner: (spinner) => dispatch(setWithSpinner(spinner)),
})



export default connect(mapStateToProps, mapDispatchToProps)(Frame);