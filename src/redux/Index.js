import { combineReducers } from "redux";
import { sampleReducer } from "./reducer/sample_reducer/SampleReducer";

export default combineReducers({
    sampleReducer: sampleReducer
})