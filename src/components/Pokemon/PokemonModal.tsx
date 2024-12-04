import { createUseStyles } from 'react-jss';
import {useGetPokemonsDetails } from '../../hooks/useGetPokemonsDetails'
import  TypeTypography  from './TypeTypography'

export const PokemonModal = ({pokemonId, pokemonName, onClose}:any) => { 
    const classes = useStyles();

    const { data, loading, error } = useGetPokemonsDetails(
        pokemonId ? pokemonId : null,
        pokemonName ? pokemonName : null
      );

    if (loading) return <div className={classes.modalContent}>Loading...</div>;
    if (error) return <div className={classes.modalContent}>Error: {error.message}</div>;
      
    if(!data) return null;
    
    return (
      <div className={classes.modalOverlay}>
        <div className={classes.modalContent}>
          <img src={data.pokemon?.image} alt={data.pokemon?.name} style={{ width: '150px' }} />
          <h3>{'#'+data.pokemon?.number} {data.pokemon?.name}</h3>
          <p>{data.pokemon?.classification}</p>            
          <p>{data.pokemon?.types.map((item:any) => (
              <TypeTypography element={item} />
            ))}
          </p>
          <table style={{ borderCollapse: "collapse", width: "100%", border: "1px solid white", padding: "2px" }}>
                <th>Category</th>
                <th className={classes.tableStyle}>Minimun</th>
                <th>Maximum</th>
                <tr className={classes.tableStyle}>
                  <td>Weight</td>
                  <td className={classes.tableStyle}>{data.pokemon?.weight.minimum}</td>
                  <td> {data.pokemon?.weight.maximum}</td>
                </tr>
                <tr className={classes.tableStyle}>
                  <td>Height</td>
                  <td className={classes.tableStyle}>{data.pokemon?.height.minimum}</td>
                  <td> {data.pokemon?.height.maximum}</td>
                </tr>
                <tr className={classes.tableStyle}>
                  <td>Resistant</td>
                  <td colSpan={2} className={classes.tableStyle}>{data.pokemon?.resistant.map((item:any) => (
                    <TypeTypography element={item} />
                  ))}</td>
                </tr>
                <tr className={classes.tableStyle}>
                  <td>Weakness</td>
                  <td colSpan={2} className={classes.tableStyle}>{data.pokemon?.weaknesses.map((item:any) => (
                    <TypeTypography element={item} />
                  ))}</td>
                </tr>
                <tr className={classes.tableStyle}>
                  <td>Flee Rate</td>
                  <td colSpan={2} className={classes.tableStyle}>{data.pokemon?.fleeRate}</td>
                </tr>
                <tr style={{ border: "1px solid white"}}>
                  <td>Max CP</td>
                  <td colSpan={2} className={classes.tableStyle}>{data.pokemon?.maxCP}</td>
                </tr>
                <tr className={classes.tableStyle}>
                  <td>Max HP</td>
                  <td colSpan={2} className={classes.tableStyle}>{data.pokemon?.maxHP}</td>
                </tr>
           </table>
          <button onClick={onClose}>Close</button>
      </div>
    </div>
)

}
const useStyles = createUseStyles(
    {
      tableStyle: {
        border: "1px solid white", 
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
    },
    { name: 'PokemonList' }
  );
  