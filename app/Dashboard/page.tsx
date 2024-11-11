"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './CocktailCard.module.css'; 
import Image from 'next/image'

// Cocktail interface 

interface Cocktail {
      idDrink: string;
      strDrink: string;
      strDrinkThumb: string;
      strCategory: string;
    }
    
    const Dashboard = () => {
      const [cocktails, setCocktails] = useState<Cocktail[]>([]); // Set the state type to Cocktail[]
     
      // Fetch 5 unique random cocktails from the API
      const fetchUniqueRandomCocktails = async () => {
        try {
        const results: Cocktail[] = []; // Explicitly type results as an array of Cocktail
        while (results.length < 5) {
          const { data } = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
               
          // Assuming data.drinks is always an array with one element
          const newCocktail: Cocktail = data.drinks[0];
          if (!results.find(cocktail => cocktail.idDrink === newCocktail.idDrink)) {
            results.push(newCocktail);
          }
        }
    // Update state with the fetched cocktails
        setCocktails(results);
      }catch (error) {
        console.error("Failed to fetch cocktails:", error); // Error handling for fetch failure
      };
    };
    
      useEffect(() => {
        fetchUniqueRandomCocktails();
      }, []);
    
      return (
      

        <div>
        <h1>Random Cocktails</h1>
        <button onClick={fetchUniqueRandomCocktails}>Refresh</button>
        <div className={styles.container}>
          {cocktails.map(cocktail => (
            <div key={cocktail.idDrink} className={styles.card}>
              <Image src={cocktail.strDrinkThumb} alt={cocktail.strDrink}  width="50" height="50"/>
              <h2>{cocktail.strDrink}</h2>
              <p>{cocktail.strCategory}</p>
            </div>
          ))}
        </div>
      </div>
      );
    };
    
    export default Dashboard;
    
