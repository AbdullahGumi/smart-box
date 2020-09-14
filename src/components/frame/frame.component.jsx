import React from 'react';

import Box from '../box/box.component';

import './frame.styles.css';

const Frame = ({ fileProperties, box, toggleBox, apparelsBox })=> (
	<div className ='frame'>
		<div className='image-frame'>
			<Box apparelsBox={apparelsBox} box={box}fileProperties={fileProperties} toggleBox={toggleBox} />
			<div className='info frame'>
				
			</div>
		</div>
	</div>
	);

export default Frame;


