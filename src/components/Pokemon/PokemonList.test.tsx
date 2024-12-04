export {}
// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { PokemonList } from './PokemonList';
// import { useGetPokemons } from '../../hooks/useGetPokemons';

// // Mocking useGetPokemons hook
// jest.mock('../../hooks/useGetPokemons', () => ({
//   useGetPokemons: jest.fn(),
// }));

// // Mock data
// const mockPokemons = [
//   {
//     id: '1',
//     name: 'Bulbasaur',
//     number: '001',
//     types: ['Grass', 'Poison'],
//     image: 'bulbasaur.png',
//   },
//   {
//     id: '4',
//     name: 'Charmander',
//     number: '004',
//     types: ['Fire'],
//     image: 'charmander.png',
//   },
//   {
//     id: '7',
//     name: 'Squirtle',
//     number: '007',
//     types: ['Water'],
//     image: 'squirtle.png',
//   },
// ];

// describe('PokemonList Component', () => {
//   beforeEach(() => {
//     (useGetPokemons as jest.Mock).mockReturnValue({ pokemons: mockPokemons });
//   });

//   test('renders the search box and Pokémon cards', () => {
//     render(
//       <Router>
//         <PokemonList />
//       </Router>
//     );

//     // Check search box
//     expect(screen.getByPlaceholderText('Search Pokémon by name...')).toBeInTheDocument();

//     // Check Pokémon cards
//     expect(screen.getByText('Bulbasaur')).toBeInTheDocument();
//     expect(screen.getByText('Charmander')).toBeInTheDocument();
//     expect(screen.getByText('Squirtle')).toBeInTheDocument();
//   });

//   test('filters Pokémon based on search input', () => {
//     render(
//       <Router>
//         <PokemonList />
//       </Router>
//     );

//     // Search for "Char"
//     const searchBox = screen.getByPlaceholderText('Search Pokémon by name...');
//     fireEvent.change(searchBox, { target: { value: 'Char' } });

//     // Only Charmander should be visible
//     expect(screen.getByText('Charmander')).toBeInTheDocument();
//     expect(screen.queryByText('Bulbasaur')).not.toBeInTheDocument();
//     expect(screen.queryByText('Squirtle')).not.toBeInTheDocument();
//   });

//   test('renders the Pokémon modal when a Pokémon is selected', () => {
//     // Mock useParams to simulate selecting a Pokémon
//     jest.mock('react-router-dom', () => ({
//       ...jest.requireActual('react-router-dom'),
//       useParams: jest.fn().mockReturnValue({ id: '1' }),
//     }));

//     render(
//       <Router>
//         <PokemonList />
//       </Router>
//     );

//     // Modal should display Pokémon details
//     expect(screen.getByText('Bulbasaur')).toBeInTheDocument();
//     expect(screen.getByText('Element: Grass, Poison')).toBeInTheDocument();
//   });

//   test('navigates to the Pokémon details when a card is clicked', () => {
//     render(
//       <Router>
//         <PokemonList />
//       </Router>
//     );

//     // Click on the Charmander card
//     const charmanderCard = screen.getByText('Charmander');
//     fireEvent.click(charmanderCard);

//     // Check if navigation works (use mock navigate if needed)
//     // Since we're using react-router-dom, check if the URL changes
//     expect(window.location.pathname).toBe('/pokemon/4');
//   });

//   test('displays the correct Pokémon types in TypeTypography', () => {
//     render(
//       <Router>
//         <PokemonList />
//       </Router>
//     );

//     // Check for Pokémon types rendered by TypeTypography
//     expect(screen.getByText('Grass')).toBeInTheDocument();
//     expect(screen.getByText('Poison')).toBeInTheDocument();
//     expect(screen.getByText('Fire')).toBeInTheDocument();
//     expect(screen.getByText('Water')).toBeInTheDocument();
//   });

//   test('closes the modal when closeModal is called', () => {
//     // Mock useParams to simulate modal open
//     jest.mock('react-router-dom', () => ({
//       ...jest.requireActual('react-router-dom'),
//       useParams: jest.fn().mockReturnValue({ id: '1' }),
//     }));

//     render(
//       <Router>
//         <PokemonList />
//       </Router>
//     );

//     // Modal is open
//     expect(screen.getByText('Bulbasaur')).toBeInTheDocument();

//     // Simulate modal close
//     const closeButton = screen.getByText('Close'); // Assuming there's a close button in the modal
//     fireEvent.click(closeButton);

//     // Modal should close
//     expect(screen.queryByText('Bulbasaur')).not.toBeInTheDocument();
//   });
// });
