import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./reducer";

const middlewares = applyMiddleware(thunk)

export const store = createStore(reducer, composeWithDevTools(middlewares))
