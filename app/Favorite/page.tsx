

'use client';

import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './Search.module.css'; // Assuming you have some CSS for styling
// import { useRouter } from 'next/router';

// interface Cocktail {
//   idDrink: string;
//   strDrink: string;
//   strDrinkThumb: string;
//   strCategory: string;
// }
interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}
const Favorite = () => {
  const [cocktail, setCocktail] = useState<Cocktail[]>([]); // State for the decoded cocktail object

  useEffect(() => {
    // Retrieve the saved results from localStorage
    const savedCocktails = localStorage.getItem('cocktailResults');
    console.log('savedCocktails:', savedCocktails);

    if (savedCocktails) {
      const parsedCocktails = JSON.parse(savedCocktails); // Parse the JSON string
      setCocktail(parsedCocktails); // Set the state with the parsed data
    }

    console.log('Cocktail list length:', cocktail.length);
  }, []); // This useEffect runs once when the component mounts
  const removeFromFavorites = (idDrink: string) => {
    const updatedCocktails = cocktail.filter(cocktail1 => cocktail1.idDrink !== idDrink);
    
    // Update state
    setCocktail(updatedCocktails);

    // Update localStorage
    localStorage.setItem('cocktailResults', JSON.stringify(updatedCocktails));
  };
  return (
    <div>
      <h1>Search Results</h1>
      {cocktail.length > 0 ? (       
         <div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>ID</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {cocktail.map(cocktails => (

                <tr key={cocktails.idDrink}>
                  <td>
                    <img src={cocktails.strDrinkThumb} alt={cocktails.strDrink} width="50" height="50" />
                  </td>
                  <td>{cocktails.strDrink}</td>
                  <td>{cocktails.idDrink}</td>
                  <td>              <button onClick={() => removeFromFavorites(cocktails.idDrink)}>Remove</button> {/* Remove button */}

                  </td>
                </tr>
                  ))}
                        </tbody>
          </table>
        
        </div>
      ) : (
        <p>No favorite cocktails found.</p>
      )}
      {/* {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error if there is one */}
{/* 
      <div>
        <h1>{id ? `Results for "${id}"` : 'Random Cocktails'}</h1>
        <div className={styles.container}>
          {results.length > 0 ? (
            results.map(cocktail => (
              <div key={cocktail.idDrink} className={styles.card}>
                <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                <h2>{cocktail.strDrink}</h2>                
              </div>
            ))
          ) : (
            <p>No cocktails found.</p>
          )}
        </div>
      </div>  */}
    </div>
  );
};

export default Favorite;
