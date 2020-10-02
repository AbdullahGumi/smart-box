import React from 'react';

import BoundingBox from '../bounding-box/bounding-box.component.jsx'

import { connect } from 'react-redux';

import './image-frame.styles.css';

const ImageFrame = ({ fileProperties, faceBoundary, apparelBoundary })=> (
	<div className ='image-div'>
			<img id="inputImage" 
					width = '500px'
					height = '500px'
					key={`${fileProperties}`} 
					src={`data:image/png;base64, ${fileProperties}`} 
					alt ="sample"/>
					{faceBoundary.length > 0 && 
						<BoundingBox />
						}
				{apparelBoundary.length > 0 && 
					<BoundingBox />
				}
				
	</div>
	);
const mapStateToProps = ({image: {fileProperties}, box:{faceBoundary, apparelBoundary} }) => ({
	fileProperties,
	faceBoundary,
	apparelBoundary
})

export default connect(mapStateToProps)(ImageFrame);