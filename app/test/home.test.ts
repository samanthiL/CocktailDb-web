// import { render, screen, fireEvent } from '@testing-library/react';
// import Home from '../pages/index'; // Update with correct path if needed
// import axios from 'axios';

// jest.mock('axios');

// const mockCocktails = [
//   { idDrink: '1', strDrink: 'Margarita', strDrinkThumb: 'img1.jpg', strCategory: 'Cocktail' },
//   { idDrink: '2', strDrink: 'Daiquiri', strDrinkThumb: 'img2.jpg', strCategory: 'Cocktail' },
//   { idDrink: '3', strDrink: 'Mojito', strDrinkThumb: 'img3.jpg', strCategory: 'Cocktail' },
//   { idDrink: '4', strDrink: 'Mai Tai', strDrinkThumb: 'img4.jpg', strCategory: 'Cocktail' },
//   { idDrink: '5', strDrink: 'Pina Colada', strDrinkThumb: 'img5.jpg', strCategory: 'Cocktail' },
// ];

// describe('Home Page', () => {
//   beforeEach(() => {
//     axios.get.mockResolvedValue({ data: { drinks: mockCocktails } });
//   });

//   it('should display 5 random cocktails', async () => {
//     render(<Home />);
    
//     const cocktailCards = await screen.findAllByTestId('cocktail-card');
//     expect(cocktailCards).toHaveLength(5);

//     mockCocktails.forEach(cocktail => {
//       expect(screen.getByText(cocktail.strDrink)).toBeInTheDocument();
//       expect(screen.getByAltText(cocktail.strDrink)).toBeInTheDocument(); // Assuming img alt is cocktail name
//       expect(screen.getByText(cocktail.strCategory)).toBeInTheDocument();
//     });
//   });

//   it('should refresh and display a new set of cocktails', async () => {
//     const newCocktails = [
//       { idDrink: '6', strDrink: 'Negroni', strDrinkThumb: 'img6.jpg', strCategory: 'Cocktail' },
//       // Additional 4 cocktails...
//     ];
    
//     axios.get.mockResolvedValueOnce({ data: { drinks: newCocktails } });

//     render(<Home />);

//     const refreshButton = screen.getByText('Refresh');
//     fireEvent.click(refreshButton);

//     const cocktailCards = await screen.findAllByTestId('cocktail-card');
//     expect(cocktailCards).toHaveLength(5);
//     expect(screen.getByText('Negroni')).toBeInTheDocument();
//   });
// });