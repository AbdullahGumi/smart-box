import { ImageActionTypes } from './image.types';


export const setFileProperties = image => ({
	type: ImageActionTypes.SET_FILE_PROPERTIES,
	payload: image
})
