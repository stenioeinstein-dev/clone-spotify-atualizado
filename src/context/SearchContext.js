"use client";

import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false); // Para indicar carregamento
  const [error, setError] = useState(null); // Para lidar com erros
  const URL_API_AR = '/api/artists'; // Url da Api Artists
  const URL_API_PL = '/api/playlist'; // Url da Api Playlists

  const handleSearch = async (searchQuery) => {
    setQuery(searchQuery);
    setLoading(true);
    setError(null);

    try {
      // Fazendo chamadas simultâneas às APIs
      const [response1, response2] = await Promise.all([
        fetch(URL_API_AR),
        fetch(URL_API_PL),
      ]);

      if (!response1.ok || !response2.ok) {
        throw new Error("Failed to fetch data");
      }

      // Parsing das respostas JSON
      const items1 = await response1.json();
      const items2 = await response2.json();

      // Combinando os itens das duas APIs
      const allItems = [...items1, ...items2];

      // Filtrando os resultados com base na pesquisa
      const filteredResults = allItems.filter((item) =>
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
