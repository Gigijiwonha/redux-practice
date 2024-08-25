import { act } from "react";

let initialState = {
  count: 0,
  id: "",
  password: "",
};

function reducer(state = initialState, action) {
  console.log("increase>>>", state);
  //   if (action.type === "INCREMENT") {
  //     return { ...state, count: state.count + 1 };
  //   }

  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "LOGIN":
      return {
        ...state,
        id: action.payload.id,
        password: action.payload.password,
      };
    case "DECREMENT":
      return { ...state, count: state.count - action.payload.num };
    default:
      return { ...state };
  }

  //   return { ...state };
}

export default reducer;
