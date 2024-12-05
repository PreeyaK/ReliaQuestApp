import React, { useState,useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { useGetPokemons } from '../../hooks/useGetPokemons';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { PokemonModal } from './PokemonModal'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Grid from "@mui/material/Grid";
import TypeTypography from './TypeTypography';

interface Pokemon {
  id: string;
  name: string;
  number: string;
  image: string;
  types: string[];
}

export const PokemonList:React.FC = () => {
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState("");
  const { pokemons } = useGetPokemons();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const filteredItems = useMemo(() => 
    pokemons.filter((pokemon: Pokemon) =>
      pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
    ), [searchQuery, pokemons]);

  const closeModal = () => {
    navigate('/pokemon');
  }

  const selectedPokemon = pokemons.find((pokemon: Pokemon) => pokemon.id === id);
  
  return (
    <div className={classes.container}>
        <input
        type="text"
        placeholder="Search Pokémon by name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={classes.searchBox}
      />
      <div className={classes.list}>
        {filteredItems.length > 0 ? (
          <Grid container spacing={3}>
            {filteredItems.map((pokemon) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={pokemon.id}>
                <Link to={`/pokemon/${pokemon.id}`} title={pokemon.name} className={classes.cardStyle}>
                  <Card sx={{
                    maxWidth: 345,
                    backgroundColor: "#171e2b",
                    border: "2px solid rgba(255, 255, 255, 0.1)",
                    textAlign: "center",
                    textDecoration: "underline",
                    "&:hover": {
                      transform: "scale(1.05)", 
                      boxShadow: "0 8px 16px rgba(255, 255, 255, 0.2); ", 
                    },
                 }}>
                  <CardHeader
                    title={pokemon.name}
                    subheader={`#${pokemon.number}`}
                    sx={{ "& .MuiCardHeader-subheader": { color: '#777' } }}
                  />
                  <CardMedia
                    component="img"
                    height="100"
                    sx={{ objectFit: "contain", borderRadius: "10px" }}
                    image={pokemon.image}
                    alt={pokemon.name} 
                  />
                  <CardContent>
                    {pokemon.types.map((type) => (
                      <TypeTypography key={type} element={type} />
                    ))}
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
        ) : (
          <p className={classes.noResults}>No matches found. Please try a different search term. </p>
        )}
      </div>
      
      {id && selectedPokemon && (
        <PokemonModal 
          pokemonId={selectedPokemon.id}
          pokemonName={selectedPokemon.name}
          onClose={closeModal}
        />
      )}

    </div>
  );
};

const useStyles = createUseStyles(
  {
    container: {
      padding: "20px",
      margin: "0 auto",
    },
    searchBox: {
      marginBottom: "20px",
      width: "95%",
      padding: "10px",
      fontSize: "16px",
      border: "1px solid #ddd",
      borderRadius: "5px",
      background: "#171e2b",
    },
    list: {
      width: "97%",
    },
    cardStyle: {
      minWidth: "15%",
    },
    noResults: {
      textAlign: "center",
      color: "rgba(255,255,255,0.7)",
      fontSize: "18px",
      marginTop: "20px",
    }
  },
  { name: 'PokemonList' }
);
