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

export const setFaceInfo = (info) => ({
	type: BoxActionTypes.SET_FACE_INFO,
	payload: info
})

export const setApparelsLabel = (labels) => ({
	type: BoxActionTypes.SET_APPARELS_LABEL,
	payload: labels
})

export const setBoundingBox = (bounding) => ({
	type: BoxActionTypes.SET_BOUNDING_BOX,
	payload: bounding
})

export const setApparelsInfo = (info) => ({
	type: BoxActionTypes.SET_APPARELS_INFO,
	payload: info
})


export const setWithSpinner = (spinner) => ({
	type: BoxActionTypes.SET_WITH_SPINNER,
	payload: spinner
})

