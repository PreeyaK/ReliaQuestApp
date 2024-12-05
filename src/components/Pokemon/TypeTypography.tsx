import Typography from "@mui/material/Typography"

interface TypeTypographyProps {
  element: string;
}

const typeColors: Record<string,string> = {
  fire: "red",
  water: "cyan",
  grass: "darkgreen",
  electric: "yellow",
  ice: "lightblue",
  flying: "darkblue",
  bug: "brown",
  poison: "purple",
  ground: "cadetblue",
  fairy: "pink",
  fighting: "magenta",
  steel: "indigo",
  rock: "orange",
  ghost: "green",
  psychic: "maroon",
}
const TypeTypography: React.FC<TypeTypographyProps> = ({ element })  => {
  const getElementColor = ( element:string ) => typeColors[element.toLowerCase()] || "gray";

  return (
    <Typography
      sx={{
        backgroundColor: getElementColor(element), 
        color: element.toLowerCase() === "electric" ? "black" : "white", 
        padding: "8px",
        borderRadius: "4px",
        textAlign: "center",
        fontSize:"12px",
        margin: "5px",
        display: "inline-block", 
      }}
      variant="h6"
    >
      {element}
    </Typography>
  );
};

export default TypeTypography;
