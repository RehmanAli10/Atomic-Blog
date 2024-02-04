import { createContext, useContext, useMemo, useState } from "react";

const SearchContext = createContext();

function SearchProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
}

function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined)
    throw new Error("useSearch must be used within a SearchProvider");
  return context;
}

export { SearchProvider, useSearch };
