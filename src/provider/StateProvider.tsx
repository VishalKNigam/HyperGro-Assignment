import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of your state
interface StateContextProps {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create a context for your state
const StateContext = createContext<StateContextProps | undefined>(undefined);

// Create a custom hook for accessing the state and setState
export function useAppState() {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within a StateProvider');
  }
  return context;
}

// Define the StateProvider component
interface StateProviderProps {
  children: ReactNode;
}

export function StateProvider({ children }: StateProviderProps) {
  const [state, setState] = useState<boolean>(false);

  const value: StateContextProps = {
    state,
    setState,
  };

  return (
    <StateContext.Provider value={value}>
      {children}
    </StateContext.Provider>
  );
}
