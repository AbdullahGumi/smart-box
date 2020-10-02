import { ImageActionTypes } from './image.types';


export const setFileProperties = image => ({
	type: ImageActionTypes.SET_FILE_PROPERTIES,
	payload: image
})

export const setImageDimensions = dimensions => ({
	type: ImageActionTypes.SET_IMAGE_DIMENSIONS,
	payload: dimensions
})
