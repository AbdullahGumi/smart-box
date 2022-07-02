import { BoxActionTypes } from "./box.types";

const INITIAL_STATE = {
  isBoxVisible: false,
  faceBoundary: {},
  apparelBoundary: {},
  faceInfo: {},
  apparelsInfo: {},
  apparelsLabel: [],
  boundingBox: {},
  withSpinner: false,
};

const boxReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BoxActionTypes.TOGGLE_BOX:
      return {
        ...state,
        isBoxVisible: !state.isBoxVisible,
      };
    case BoxActionTypes.SET_FACE_BOUNDARY:
      return {
        ...state,
        faceBoundary: action.payload,
      };
    case BoxActionTypes.SET_APPAREL_BOUNDARY:
      return {
        ...state,
        apparelBoundary: action.payload,
      };
    case BoxActionTypes.SET_FACE_INFO:
      return {
        ...state,
        faceInfo: action.payload,
      };
    case BoxActionTypes.SET_APPARELS_INFO:
      return {
        ...state,
        apparelsInfo: action.payload,
      };
    case BoxActionTypes.SET_APPARELS_LABEL:
      return {
        ...state,
        apparelsLabel: action.payload,
      };
    case BoxActionTypes.SET_BOUNDING_BOX:
      return {
        ...state,
        boundingBox: action.payload,
      };
    case BoxActionTypes.SET_WITH_SPINNER:
      return {
        ...state,
        withSpinner: action.payload,
      };
    default:
      return state;
  }
};

export default boxReducer;
