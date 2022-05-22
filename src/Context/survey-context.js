import { createContext, useContext, useReducer, useState } from "react";

const SurveyContext = createContext();

// Reducer for ServeyContext
const serveyReducer = (state, action) => {
  switch (action.type) {
    case "SET_SURVEY":
      return {
        ...state,
        currentSurveyId: action.payload,
      };
    case "SET_ANSWER":
      const ifExists = state.selectedAnswer.find(
        (answer) => answer.id === action.payload.id
      );
      if (ifExists) {
        return {
          ...state,
          selectedAnswer: state.selectedAnswer.map((answer) => {
            if (answer.id === action.payload.id) {
              return {
                ...answer,
                answer: action.payload.answer,
              };
            }
            return answer;
          }),
        };
      } else {
        return {
          ...state,
          selectedAnswer: [...state.selectedAnswer, action.payload],
        };
      }
    case "RESET_SURVEY":
      return {
        ...state,
        currentSurveyId: "",
        selectedAnswer: [],
      };
    default:
      return state;
  }
};

// This is SurveyProvider for whole app.
const SurveyContextProvider = ({ children }) => {
  // Initial state of SurveyContext
  const initialState = {
    currentSurveyId: "",
    selectedAnswer: [],
  };
  const [state, dispatch] = useReducer(serveyReducer, initialState);
  return (
    <SurveyContext.Provider value={{ state, dispatch }}>
      {children}
    </SurveyContext.Provider>
  );
};

// Custom hook for SurveyContext
const useSurvey = () => useContext(SurveyContext);


// Export SurveyContextProvider and useSurvey
export { SurveyContextProvider, useSurvey };
