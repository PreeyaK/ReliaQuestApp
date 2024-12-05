import { createUseStyles } from 'react-jss';
import {useGetPokemonsDetails } from '../../hooks/useGetPokemonsDetails'
import  TypeTypography  from './TypeTypography'

interface PokemonModalProps {
  pokemonId: string;
  pokemonName: string;
  onClose: () => void;
}

interface PokemonData {
  pokemon: {
    name: string;
    number: string;
    image: string;
    clasification: string;
    types: string[];
    weight: {
      minimum: string;
      maximum: string;
    },
    height: {
      minimum: string;
      maximum: string;
    },
    resistant: string[];
    weakness: string[];
    fleeRate: string;
    maxCP: string;
    maxHP: string;
  };
}

export const PokemonModal: React.FC<PokemonModalProps> = ({pokemonId, pokemonName, onClose}) => { 
    const classes = useStyles();

    const { data, loading, error } = useGetPokemonsDetails(
        pokemonId,
        pokemonName
      );

    if (loading) return <div className={classes.modalContent}>Loading...</div>;
    if (error) return <div className={classes.modalContent}>Error: {error.message}</div>;
      
    if(!data) return null;

    const { pokemon } = data as PokemonData;
    
    return (
      <div className={classes.modalOverlay} role="dialog" aria-labelledby="pokemon-modal-title" aria-describedby="pokemon-modal-description">
        <div className={classes.modalContent}>
          <img src={data.pokemon?.image} alt={data.pokemon?.name} className={classes.image} />
          <h3 id="pokemon-modal-title">{'#'+data.pokemon?.number} {data.pokemon?.name}</h3>
          <p id="pokemon-modal-description">{data.pokemon?.classification}</p>            
          <div>
            {pokemon.types.map((type) => (
              <TypeTypography key={type} element={type} />
            ))}
          </div>
          <table className={classes.table}>
          <tbody>
            <tr className={classes.tableRow}>
              <td>Weight</td>
              <td className={classes.tableRow}>{pokemon.weight.minimum}</td>
              <td>{pokemon.weight.maximum}</td>
            </tr>
            <tr className={classes.tableRow}>
              <td>Height</td>
              <td className={classes.tableRow}>{pokemon.height.minimum}</td>
              <td>{pokemon.height.maximum}</td>
            </tr>
            <tr className={classes.tableRow}>
              <td>Resistant</td>
              <td colSpan={2} className={classes.tableStyle}>{data.pokemon?.resistant.map((item:any) => (
                  <TypeTypography element={item} />
                ))}</td>
            </tr>
            <tr className={classes.tableRow}>
              <td>Weakness</td>
              <td colSpan={2} className={classes.tableStyle}>{data.pokemon?.weaknesses.map((item:any) => (
                  <TypeTypography element={item} />
                ))}</td>
            </tr>
            <tr className={classes.tableRow}>
              <td className={classes.tableRow}>Flee Rate</td>
              <td colSpan={2}>{pokemon.fleeRate}</td>
            </tr>
            <tr className={classes.tableRow}>
              <td className={classes.tableRow}>Max CP</td>
              <td colSpan={2}>{pokemon.maxCP}</td>
            </tr>
            <tr className={classes.tableRow}>
              <td className={classes.tableRow}>Max HP</td>
              <td colSpan={2}>{pokemon.maxHP}</td>
            </tr>
          </tbody>
        </table>
          
          <button onClick={onClose} className={classes.closeButton}>Close</button>
      </div>
    </div>
)

}
const useStyles = createUseStyles(
    {
      tableStyle: {
        border: "1px solid rgba(255, 255, 255, 0.1)", 
        padding: "10px"
      },
      modalOverlay: {
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center", 
      },
        modalContent: {
          background: "#3c3e42",
          border: "2px solid #ccc",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", 
          maxWidth: "500px",
          width: "100%",
          textAlign: "center",
        },
        image: {
          width: "150px",
        },
        table: {
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
        },
        tableRow: {
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
        closeButton: {
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#1976d2",
          color: "white",
          border: "none",
          borederRadius: "5px",
          cursoe: "pointer",
        },
    },
    { name: 'PokemonList' }
  );
  
