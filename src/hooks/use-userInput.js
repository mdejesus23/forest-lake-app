import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

// reducer func takes to arguments 1st the previous state snapshot and an action object
const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }

  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }

  if (action.type === "RESET") {
    return { isTouched: false, value: "" };
  }

  // you have to return a new state snapshot
  return inputStateReducer;
};

const useUserInput = (inputValidation) => {
  // useReducer returns an array with exactly 2 elems first elem is always the state manage by the reducer function.
  // second element dispatch function
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const enteredValueIsValid = inputValidation(inputState.value);
  const hasError = !enteredValueIsValid && inputState.isTouched;

  const inputChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const resetInputValue = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid: enteredValueIsValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    resetInputValue,
  };
};

export default useUserInput;
