import { combineReducers } from "redux"
import list from "./symbolsList/listReducer"
import updateDescription from "./updateDescription/reducer"
// export default listReducer
export default combineReducers({ list, updateDescription })
