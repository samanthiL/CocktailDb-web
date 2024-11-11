'use client';
import Link from 'next/link';
import './globals.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './Component/AppBar.module.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
    const [query, setQuery] = useState<string>(''); // State for search query
  const searchCocktails = async () => {
    try {
   
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
 
    </div>
        {children} 
      </body>
    </html>
  );
}
