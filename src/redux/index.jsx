// const initialState = {
//     counter:0 // Global state
// }

// // Pure JS function
// // Bir dış bağımlılık olmaması lazım-burda bir fetch isteği olmamalı
//  const reducer =(state = initialState,action) => {

//     switch (action.type) {
//         case "INCREASE":
//             return {counter: state.counter + 1}
//         case "DECREASE":
//             return {counter: state.counter - 1}
//         case "RESET":
//             return {counter: 0}

//         default:
//             return state
//     }

// }

// export default reducer

import { legacy_createStore as createStore, combineReducers } from "redux";

import todoReducer from "./reducers/todoReducer";

const rootReducer = combineReducers({
  todo: todoReducer,
});

export const store = createStore(rootReducer);
