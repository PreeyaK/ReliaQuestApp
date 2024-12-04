import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useGetPokemons } from '../../hooks/useGetPokemons';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {PokemonModal} from './PokemonModal'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Grid from "@mui/material/Grid";
import TypeTypography from './TypeTypography';

export const PokemonList = () => {
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState("");
  const { pokemons } = useGetPokemons();
  const { id } = useParams();
  const navigate = useNavigate();
  
  const filteredItems = pokemons.filter((pkmn) =>
    pkmn.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const closeModal = () => {
    navigate('/pokemon');
  }

  const selectedPokemon = pokemons.find((pkmn)=>pkmn.id === id)
  
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
        <Grid container spacing={3} >
          {filteredItems.map((item:any) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <Link to={`/pokemon/${item.id}`} className={classes.cardStyle}>
                <Card sx={{ 
                  maxWidth: 345,
                  backgroundColor: "#171e2b",
                  border: "1px solid #ddd",
                  textAlign: "center",
                  textDecoration:"underline",
                  "&:hover": {
                    transform: "scale(1.05)", 
                    boxShadow: "0 8px 16px rgba(0,0,0,0.2)", 
                  },
                }}>
                  <CardHeader
                    title={item.name}
                    subheader={'#'+item.number}
                    sx= {{ "& .MuiCardHeader-subheader": {
                      color: '#777',
                    } }}
                  />
                  <CardMedia
                    component="img"
                    height="100"
                    sx= {{objectFit: "contain", borderRadius: "10px"}}
                    className="classes.imgStyle"
                    image={item.image}
                    alt={item.image} 
                  />
                  <CardContent>
                    {item.types.map((item:any) => (
                      <TypeTypography element={item} />
                    ))}
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </div>
      
      {id && selectedPokemon &&(
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
    root: {
      width: '100%',
      textAlign: 'center',
      padding: '32px',
      boxSizing: 'border-box',
      color: "black",
    },
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
    imgStyle: {
      display: "block",
      margin: "auto",
      width: "50%",
    },
  },
  { name: 'PokemonList' }
);
