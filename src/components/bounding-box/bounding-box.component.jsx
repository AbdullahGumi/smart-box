import React from 'react';
import { connect } from 'react-redux'
import './bounding-box.styles.css';

const BoundingBox = ({width, height, boundingBox}) => {
	return (
		boundingBox.map(location => <div className='bounding-box' key={location.top_row} style={{ 
		 top: location.top_row * height,
		 left: location.left_col * width + 64,
		 bottom: height - location.bottom_row * height,
		 right: width - location.right_col * width + 287
		}} 
		/>)
	);
}

const mapStateToProps = ({box: {boundingBox}}) => ({
	boundingBox,
})

export default connect(mapStateToProps)(BoundingBox);
