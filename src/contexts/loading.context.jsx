import { createContext, useState } from "react";

export const LoadingContext = createContext({
  loading: true,
  setLoading: () => null,
});

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const value = { loading, setLoading };

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
};
