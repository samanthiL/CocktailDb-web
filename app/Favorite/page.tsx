'use client';
import { useEffect, useState } from 'react';
import styles from './Search.module.css';
import Image from 'next/image'

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
                    <Image src={cocktails.strDrinkThumb} alt={cocktails.strDrink} width="50" height="50" />
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
    </div>
  );
};

export default Favorite;
