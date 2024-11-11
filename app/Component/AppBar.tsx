
import { useRouter } from 'next/router';

const AppBar = () => {
  const router = useRouter();

  const searchCocktails = async () => {
    const dynamicId = 123; // Replace with your actual ID or variable
    try {
      router.push(`/Search?id=${dynamicId}&category=electronics`);
    } catch (error) {
      console.error('Error navigating to search:', error);
    }
  };

  return (
    <div>     
       <button onClick={searchCocktails}>Search</button>
    </div>
  );
};

export default AppBar;
