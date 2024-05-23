// components/SearchComponent.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query.length < 3) {
      setResults([]);
      return;
    }

    const fetchResults = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=97ZQ3CFC3FO34UID`,
          {}
        );
        setResults(response?.data?.bestMatches);
      } catch (error) {
        console.error("Error fetching search results", error);
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(() => {
      fetchResults();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <div>
      <input
        className="text-black"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        style={{ padding: "10px", width: "500px" }}
      />
      {loading && <p>Loading...</p>}
      {results.length > 0 && (
        <ul className="absolute z-10 w-[500px] bg-[#92400e] opacity-90 border border-gray-300 rounded-md mt-1 max-h-60 overflow-y-auto">
          {results.map((result, index) => (
            <Link href={`/dashboard/${result[`${"1. symbol"}`]}`}>
              <li className="text-white font-medium text-sm p-2" key={index}>
                <div className="justify-between flex">
                  <div>{result[`${"1. symbol"}`]}</div>
                  <div>{result[`${"2. name"}`]}</div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchComponent;
