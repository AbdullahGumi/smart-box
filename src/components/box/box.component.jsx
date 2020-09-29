import React from 'react';
import { connect } from 'react-redux';
// import Navigation from '../navigation/navigation.component';

import './box.style.css';

const Box = ({ fileProperties, faceBoundary, apparelBoundary}) => {

	return(
		<div className= "box-modal">
				<img id="inputImage" 
				width = '500px'
				height = 'auto'
				key={`${fileProperties}`} 
				src={`data:image/png;base64, ${fileProperties}`} 
				alt ="sample"/>
				{faceBoundary.length > 0 && 
					faceBoundary.map(face => 
					<div key={face.leftCol} style={{
						left: face.leftCol,
						top: face.topRow,
						right: face.rightCol, 
						bottom: face.bottomRow, 
					}} 
						className="bounding-box" /> )
				}
				{apparelBoundary.length > 0 && 
					apparelBoundary.map(apparel => 
						<div key={apparel.topRow} style={{  
							top: apparel.topRow,
							right: apparel.rightCol, 
							bottom: apparel.bottomRow, 
							left: apparel.leftCol
						}} className='apparel-box' />)
				}
				
		</div>
	);
}

const mapStateToProps = ({image: {fileProperties}, box:{faceBoundary, apparelBoundary} }) => ({
	fileProperties,
	faceBoundary,
	apparelBoundary
})

export default connect(mapStateToProps)(Box);