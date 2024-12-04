import Typography from "@mui/material/Typography";

export default function TypeTypography({ element }:any) {
  const getElementColor = (element:any) => {
    switch (element.toLowerCase()) { 
      case "fire":
        return "red";
      case "water":
        return "cyan";
      case "grass":
        return "darkgreen";
      case "electric":
        return "yellow";
      case "ice":
        return "lightblue";
      case "flying":
            return "darkblue";
      case "bug":
            return "brown";
      case "poison":
            return "purple";
      case "ground":
            return "cadetblue";
      case "fairy":
            return "pink";
      case "fighting":
            return "magenta";
      case "steel":
            return "indigo";
      case "rock":
            return "orange";
      case "ghost":
            return "green";
      case "psychic":
            return "maroon";
      default:
        return "gray"; 
    }
  };

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
}
