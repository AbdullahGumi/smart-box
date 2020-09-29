import { BoxActionTypes } from './box.types'

const INITIAL_STATE = {
	isBoxVisible: false,
	faceBoundary: {},
	apparelBoundary: {},
	faceCount: 0,
	apparelsInfo: {},
	apparelsLabel: [],
	boundingBox: {},
	withSpinner: false
}

const boxReducer = (state = INITIAL_STATE, action) => {
	console.log('state at box reducer: ',state);
	switch (action.type) {
		case BoxActionTypes.TOGGLE_BOX:
			return {
				...state,
				isBoxVisible: !state.isBoxVisible
			}
		case BoxActionTypes.SET_FACE_BOUNDARY:
			return {
				...state,
				faceBoundary: action.payload
			}
		case BoxActionTypes.SET_APPAREL_BOUNDARY:
			return {
				...state,
				apparelBoundary: action.payload
			}		
		case BoxActionTypes.NUMBER_OF_FACES:
			return {
				...state,
				faceCount: action.payload
			}
		case BoxActionTypes.APPARELS_INFO:
			return {
				...state,
				apparelsInfo: action.payload
			}			
		case BoxActionTypes.APPARELS_LABEL:
			return {
				...state,
				apparelsLabel: action.payload
			}
		case BoxActionTypes.BOUNDING_BOX:
			return {
				...state,
				boundingBox: action.payload
			}
		case BoxActionTypes.WITH_SPINNER:
			return {
				...state,
				withSpinner: action.payload
			}	
		default:
			return state;
			
	}
}

export default boxReducer;