export {}
// import React from "react";
// import { render, screen, fireEvent } from "@testing-library/react";
// import { BrowserRouter } from "react-router-dom";
// import { PokemonList } from "./PokemonList";
// import { useGetPokemons } from "../../hooks/useGetPokemons";

// jest.mock("../../hooks/useGetPokemons", () => ({
//   useGetPokemons: jest.fn(),
// }));

// jest.mock("./PokemonModal", () => ({
//   PokemonModal: ({ pokemonId, onClose }: any) => (
//     <div data-testid="pokemon-modal">
//       <p>Pokemon ID: {pokemonId}</p>
//       <button onClick={onClose}>Close</button>
//     </div>
//   ),
// }));

// describe("PokemonList Component", () => {
//   const mockPokemons = [
//     {
//       id: "1",
//       name: "Bulbasaur",
//       number: "001",
//       image: "bulbasaur.png",
//       types: ["Grass", "Poison"],
//     },
//     {
//       id: "4",
//       name: "Charmander",
//       number: "004",
//       image: "charmander.png",
//       types: ["Fire"],
//     },
//   ];

//   beforeEach(() => {
//     (useGetPokemons as jest.Mock).mockReturnValue({
//       pokemons: mockPokemons,
//     });
//   });

//   const renderComponent = () =>
//     render(
//       <BrowserRouter>
//         <PokemonList />
//       </BrowserRouter>
//     );

//   it("renders search box and Pokémon list", () => {
//     renderComponent();

//     expect(screen.getByPlaceholderText("Search Pokémon by name...")).toBeInTheDocument();
//     expect(screen.getByText("Bulbasaur")).toBeInTheDocument();
//     expect(screen.getByText("Charmander")).toBeInTheDocument();
//   });

//   it("filters Pokémon based on search query", () => {
//     renderComponent();

//     const searchBox = screen.getByPlaceholderText("Search Pokémon by name...");
//     fireEvent.change(searchBox, { target: { value: "Charmander" } });

//     expect(screen.getByText("Charmander")).toBeInTheDocument();
//     expect(screen.queryByText("Bulbasaur")).not.toBeInTheDocument();
//   });

//   it("navigates to Pokémon details when a Pokémon is clicked", () => {
//     renderComponent();

//     const bulbasaurCard = screen.getByTitle("Bulbasaur");
//     expect(bulbasaurCard).toHaveAttribute("href", "/pokemon/1");
//   });

//   it("renders the modal when a Pokémon is selected", () => {
//     // Mock the useParams hook
//     jest.spyOn(require("react-router-dom"), "useParams").mockReturnValue({ id: "1" });

//     renderComponent();

//     expect(screen.getByTestId("pokemon-modal")).toBeInTheDocument();
//     expect(screen.getByText("Pokemon ID: 1")).toBeInTheDocument();
//   });

//   it("closes the modal when the close button is clicked", () => {
//     const navigateMock = jest.fn();
//     jest.spyOn(require("react-router-dom"), "useNavigate").mockReturnValue(navigateMock);
//     jest.spyOn(require("react-router-dom"), "useParams").mockReturnValue({ id: "1" });

//     renderComponent();

//     fireEvent.click(screen.getByText("Close"));

//     expect(navigateMock).toHaveBeenCalledWith("/pokemon");
//   });
// });
