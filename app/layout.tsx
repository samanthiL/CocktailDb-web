



'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import './globals.css'; // Import your global styles
import AppBar from './Component/AppBar';
import { useRouter } from 'next/navigation';

import { useState } from 'react';
import styles from './Component/AppBar.module.css';
import axios from 'axios';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();


    const [query, setQuery] = useState<string>(''); // State for search query
  // const [results, setResults] = useState<Cocktail[]>([]); // State for search results


  const searchCocktails = async () => {
    const dynamicId = 123; // Replace with your actual ID or variable
    try {
      // const { data } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`);
      // const cocktails = data.drinks || []; // Ensure it's an empty array if no results are found
      // setResults(cocktails);

      // Build the URL manually with query parameters
      // router.push(`/Search?id=${dynamicId}&category=electronics`);
// const dataSet = JSON.stringify(cocktails);
// console.log("dataSet",dataSet)
      router.push(`/Search?cocktails=${query}`);
    } catch (error) {
      console.error('Error navigating to search:', error);
    }
  };

  return (
    <html lang="en">
      <body>

      <div className={styles.appbar}>
       <div className={styles.logo}>Taiwan Cocktails</div>
       <nav className={styles.navLinks}>
         <Link href="/">Home</Link>

         <Link href="/Favorite">Favorites</Link>
       </nav>
       <div className={styles.searchBar}>
          <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)} // Update the search query state
          placeholder="Search for cocktails..."
        /> 
        <button onClick={searchCocktails}>Search</button>
      </div>
    </div>
      <div>
      {/* Your AppBar content */}
      {/* <button onClick={searchCocktails}>Search</button> */}
    </div>
        {/* <nav>
          <ul>
            <li>
              <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={`link ${pathname === '/search' ? 'active' : ''}`} href="/search">
                Search
              </Link>
            </li>
          </ul>
        </nav> */}
{/* <AppBar /> */}


        {children} {/* This will render the content of each page */}
{/*         
        <style jsx>{`
          .link {
            text-decoration: none;
            margin-right: 20px;
          }
          .active {
            font-weight: bold;
            color: blue;
          }
        `}</style> */}
      </body>
    </html>
  );
}
