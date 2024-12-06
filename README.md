# UI Assessment - Pokédex (Senior)

Requirements for this can be found on the home page of the app or [here](./src/README.md)

### Leveraging Open API GraphQL 
In this assessment I have utilized a Pokémon open API (GraphQL) for fetching the list of Pokémon and displaying details of selected Pokémon.

[API Docs](https://wayfair.github.io/dociql/)

---
### App-wide requirements
1. I have used jss for all styling as mentioned in requirements for <PokemonList />, <PkemonModal /> and <TypeTypography />
2. I have used TypeScript for all the files.

---
### List Page
I have retrieved more data from the useGetPokemons (src/hooks/useGetPokemons.ts) hook where the graphql query is defined.

1. Created a list items that display the name, number, and types of each Pokémon
2. Each list item include a picture of the Pokémon (available from the api)
1. Each list item include a hover effect (added box-shadow for the card)

---
### Searching on List Page
I have added a search box to find a Pokémon quickly, and see filtered results based on their search.

1. Implemented a search box that filters the list of Pokémon
2. Search is case insensitive
3. List displays only show Pokémon that match the search (I have used useMemo hook to store filtered data to improves performance by memoizing the results of filtering operations, ensuring the computation only happens when dependencies change)

---
### Dialog for Pokémon Details
When a user wants to see more information about a Pokémon, they can click on a list item and see a custom modal with that information.
1. The modal route dependent Pokémon's id from the details. I have extended `react-router` and added  route `/pokemom/:id`.
2. Additional details are displayed from the data received by graphql query in a tabular format. There is an option to close the modal and go back to previous route(search list)

---
### Additional
I have added styling to types of Pokémon using <TypeTypography /> which is then reused in <PokemonModal /> to display types as well as strength and weakness of the Pokémon data received from the graphql api respone.

### Steps to run application

After clone/download

npm install

npm start
