import { BoxActionTypes } from './box.types'

export const toggleBox = () => ({
	type: BoxActionTypes.TOGGLE_BOX
})

export const setFaceBoundary = (box) => ({
	type: BoxActionTypes.SET_FACE_BOUNDARY,
	payload: box
})

export const setApparelBoundary = (box) => ({
	type: BoxActionTypes.SET_APPAREL_BOUNDARY,
	payload: box
})