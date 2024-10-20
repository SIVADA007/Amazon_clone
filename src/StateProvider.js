import React, { createContext, useContext, useReducer } from "react";

//prepares the data layer
export const StateContext = createContext();

//Wrap our app  and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
};

//pull information from data layer
export const useStateValue = () => useContext(StateContext);
