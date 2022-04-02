import {FAILURE, LOAD_WEATHER, REQUEST, SUCCESS} from "../constants";
import produce from "immer";

interface IState {

}

interface IAction {
  type: string,
  payload?: any,
}

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
}

// eslint-disable-next-line
export default (state = initialState, action: IAction) => {
  const {type, payload} = action
  switch (type) {
    case LOAD_WEATHER + REQUEST:
      return produce(state, (draft) => {
        draft.loading = true
        draft.loaded = false
        draft.error = null
      })
    case LOAD_WEATHER + SUCCESS:
      return produce(state, (draft) => {
        draft.entities = payload
        draft.loading = false
        draft.loaded = true
      })
    case LOAD_WEATHER + FAILURE:
      return produce(state, (draft) => {
        draft.loading = false
        draft.loaded = false
        draft.error = payload
      })
    default:
      return state
  }
}
