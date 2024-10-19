// import Link from 'next/link';  // Import Link from next
// import { useState } from 'react';
// import styles from './AppBar.module.css';
// import Search from '../pages/search';
// import axios from 'axios';

// // Define the Cocktail interface based on the API response
// interface Cocktail {
//   idDrink: string;
//   strDrink: string;
//   strDrinkThumb: string;
//   strCategory: string;
// }
// const AppBar = () => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const [query, setQuery] = useState<string>(''); // Explicitly set type to string
//   const [results, setResults] = useState<Cocktail[]>([]); // Explicitly set type to an array of Cocktail
//   const [favorites, setFavorites] = useState<Cocktail[]>([]); // Explicitly set type to an array of Cocktail

//   const searchCocktails = async () => {
//     try {
//       const { data } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`);
//       setResults(data.drinks || []); // Ensure it's an empty array if no results are found



//     } catch (error) {
//       console.error('Error fetching cocktails:', error);
//     }
//   };
//   return (
//     <header className={styles.appbar}>
//       <div className={styles.logo}>Taiwan Cocktails</div>
//       <nav className={styles.navLinks}>
//         {/* No need for useRouter, just use Link */}
//         <Link href="/">Home</Link>
//         {/* <Link href="/Search">Search</Link> */}
//         <Link href="/favorites">Favorites</Link>
//       </nav>
//       <div className={styles.searchBar}>
//       <input
//         type="text"
//         value={query}
//         onChange={e => setQuery(e.target.value)} // Update the search query state
//       />
//       <button onClick={searchCocktails}>Search</button>
//       </div>
//     </header>
//   );
// };

// export default AppBar;
// 'use client';// This ensures the component is treated as a client component

// import Link from 'next/link';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation'; // Import useRouter for navigation
// import styles from './AppBar.module.css';
// import axios from 'axios';

// // Define the Cocktail interface based on the API response
// interface Cocktail {
//   idDrink: string;
//   strDrink: string;
//   strDrinkThumb: string;
//   strCategory: string;
// }

// const AppBar = () => {
//   const [query, setQuery] = useState<string>(''); // State for search query
//   const [results, setResults] = useState<Cocktail[]>([]); // State for search results
//   const router = useRouter(); // Next.js useRouter hook

//   const searchCocktails = async () => {
//     try {
//     //   const { data } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`);
//     //   const cocktails = data.drinks || []; // Ensure it's an empty array if no results are found
//     //   setResults(cocktails);

//       // Navigate to the Search page and pass the query through the URL
//       const dynamicId = 123; // Replace with your actual ID or variable
//       // Navigate to the dynamic route and pass the category as a query parameter
//     //   router.push(`/Search/${dynamicId}?category=electronics`);

// //     router.push({ pathname: '/Search',query: { id: dynamicId, category: 'electronics' }, // Pass query parameters});
// // } catch (error) {
// //       console.error('Error fetching cocktails:', error);
// //     }
  
// router.push(`/Search?id=${dynamicId}&category=electronics`);

// } catch (error) {
//   console.error('Error navigating to search:', error);
// }
// };

//   return (
//     <div className={styles.appbar}>
//       <div className={styles.logo}>Taiwan Cocktails</div>
//       <nav className={styles.navLinks}>
//         <Link href="/">Home</Link>

//         <Link href="/favorites">Favorites</Link>
//       </nav>
//       <div className={styles.searchBar}>
//         {/* <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)} // Update the search query state
//           placeholder="Search for cocktails..."
//         /> */}
//         <button onClick={searchCocktails}>Search</button>
//       </div>
//     </div>
//   );
// };

// export default AppBar;
import { useRouter } from 'next/router';

const AppBar = () => {
  const router = useRouter();

  const searchCocktails = async () => {
    const dynamicId = 123; // Replace with your actual ID or variable
    try {
      // Build the URL manually with query parameters
      router.push(`/Search?id=${dynamicId}&category=electronics`);
    } catch (error) {
      console.error('Error navigating to search:', error);
    }
  };

  return (
    <div>
      {/* Your AppBar content */}
      <button onClick={searchCocktails}>Search</button>
    </div>
  );
};

export default AppBar;
