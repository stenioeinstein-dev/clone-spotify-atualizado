"use client";

import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false); // Para indicar carregamento
  const [error, setError] = useState(null); // Para lidar com erros
  const URL_API_AR = '/api/artists'; // Url da Api Artists

  const handleSearch = async (searchQuery) => {
    setQuery(searchQuery);
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(URL_API_AR);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const items = await response.json();

      // Filtra os resultados com base na pesquisa
      const filteredResults = items.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setResults(filteredResults);
    } catch (err) {
      setError(err.message);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SearchContext.Provider
      value={{ query, results, loading, error, handleSearch }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}
