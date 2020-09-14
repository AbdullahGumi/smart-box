import { combineReducers } from 'redux';
import imageReducer from './image/image.reducer';
import boxReducer from './box/box.reducer';

export default combineReducers({
	image: imageReducer,
	box: boxReducer
});