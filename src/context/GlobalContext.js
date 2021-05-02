import { createContext, useReducer, useContext } from "react";

//defining the context
const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

//reducer

const GlobalReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        currentTheme: action.theme,
      };
    case "TOGGLE_CURSOR":
      return {
        ...state,
        cursorType: action.cursorType,
      };

    default:
      throw new Error(`Unhandled rejection type:${action.theme}`);
  }
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, {
    currentTheme: "dark",
    cursorType: false,
  });

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  );
};

//custom hooks
export const useGlobalStateContext = () => useContext(GlobalStateContext);
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext);
