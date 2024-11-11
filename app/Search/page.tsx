'use client';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import {  useEffect, useState } from 'react';
import styles from './Search.module.css'; // Assuming you have some CSS for styling
import Image from 'next/image'

interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strCategory: string;
}

const Search = () => {
  const searchParams = useSearchParams(); // Get the search parameters
  const id = searchParams.get('cocktails'); // Get the ID from the search parameters
  const [results, setResults] = useState<Cocktail[]>([]); // State for the search results
  const [error, setError] = useState<string | null>(null); // State for error handling
  const [selectedResults, setSelectedResults] = useState<Cocktail[]>([]); // State for the search results

  console.log("Cocktail search ID:", id);
  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        // Fetching cocktail data from the API
        const { data } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${id}`);
        
        // Safeguarding in case there are no drinks returned
        const cocktails = data.drinks || [];

        // Update the state with the fetched results
        setResults(cocktails);
      } catch (error) {
        console.error('Error fetching cocktails:', error);
        setError('Failed to fetch cocktails. Please try again later.');
      }
    };

    if (id) {
      fetchCocktails(); // Fetch the data only if there's an ID
    }
  }, [id]);
  
  const addToFavouriteCocktails =  (cocktail:Cocktail) => {
    try {
     
console.log("dataSet",cocktail)
setSelectedResults(prevCocktail => {
  const updatedResults = [...prevCocktail,cocktail];
      return updatedResults;
});
     
    } catch (error) {
      console.error('Error navigating to search:', error);
    }
  };

  // Use useEffect to update localStorage whenever selectedResults changes
  useEffect(() => {
    if (selectedResults.length > 0) {
      localStorage.setItem('cocktailResults', JSON.stringify(selectedResults));
    }
  }, [selectedResults]); // This will trigger every time selectedResults is updated

  console.log("selectedResults",selectedResults)

  return (
    <div>
      <h1>Search Results</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error if there is one */}

      <div>
        <h1>{id ? `Results for "${id}"` : 'Random Cocktails'}</h1>
        <div className={styles.container}>
          {results.length > 0 ? (
            results.map(cocktail => (
              <div key={cocktail.idDrink} className={styles.card}>
                <Image src={cocktail.strDrinkThumb} alt={cocktail.strDrink}   width="50" height="50"/>
                <h2>{cocktail.strDrink}</h2>

                <button onClick={() => addToFavouriteCocktails(cocktail)}>ADD</button>
                
              </div>
            ))
          ) : (
            <p>No cocktails found.</p>
          )}
        </div>
      </div>
{/* }>
</Suspense> */}
    </div>
  );
};

export default Search;

////////////////////////
