import { BoxActionTypes } from './box.types'

const INITIAL_STATE = {
	isBoxVisible: false,
	faceBoundary: {},
	apparelBoundary: {}
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
		default:
			return state;
			
	}
}

export default boxReducer;