

"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './CocktailCard.module.css';  // Import the CSS module
    interface Cocktail {
      idDrink: string;
      strDrink: string;
      strDrinkThumb: string;
      strCategory: string;
    }
    
    const Dashboard = () => {
      const [cocktails, setCocktails] = useState<Cocktail[]>([]); // Set the state type to Cocktail[]
    
      const fetchRandomCocktails = async () => {
        const results: Cocktail[] = []; // Explicitly type results as an array of Cocktail
        while (results.length < 5) {
          const { data } = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
          const newCocktail: Cocktail = data.drinks[0];
          if (!results.find(cocktail => cocktail.idDrink === newCocktail.idDrink)) {
            results.push(newCocktail);
          }
        }
        setCocktails(results);
      };
    
      useEffect(() => {
        fetchRandomCocktails();
      }, []);
    
      return (
      

        <div>
        <h1>Random Cocktails</h1>
        <button onClick={fetchRandomCocktails}>Refresh</button>
        <div className={styles.container}>
          {cocktails.map(cocktail => (
            <div key={cocktail.idDrink} className={styles.card}>
              <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
              <h2>{cocktail.strDrink}</h2>
              <p>{cocktail.strCategory}</p>
            </div>
          ))}
        </div>
      </div>
      );
    };
    
    export default Dashboard;
    
// const Dashboard = () => {
//     return (
//       <div>
//         <h1>Welcome to the Dashboard Page</h1>
//       </div>
//     );
//   };
  
//   export default Dashboard;