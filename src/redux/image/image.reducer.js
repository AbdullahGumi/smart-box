import { ImageActionTypes } from './image.types';

const INITIAL_STATE = {
	fileProperties: '',
}
const imageReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ImageActionTypes.SET_FILE_PROPERTIES:
			return {
				...state,
				fileProperties: action.payload
			}
				
		default:
			return state;
			
	}
}

export default imageReducer;