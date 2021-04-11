import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./RootReducer";

// Creating store.
const store = createStore(rootReducer, applyMiddleware(logger, thunk));

// Exporting store.
export default store;
