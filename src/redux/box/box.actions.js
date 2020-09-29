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

export const numberOfFaces = (number) => ({
	type: BoxActionTypes.NUMBER_OF_FACES,
	payload: number
})

export const setApparelsLabel = (labels) => ({
	type: BoxActionTypes.APPARELS_LABEL,
	payload: labels
})

export const setBoundingBox = (bounding) => ({
	type: BoxActionTypes.BOUNDING_BOX,
	payload: bounding
})

export const setApparelsInfo = (info) => ({
	type: BoxActionTypes.APPARELS_INFO,
	payload: info
})


export const setWithSpinner = (spinner) => ({
	type: BoxActionTypes.WITH_SPINNER,
	payload: spinner
})

