const getTypeBackgroundColor = (type) => {
  switch (type) {
    case "grass":
      return "rgb(107, 207, 132)";
    case "fire":
      return "rgb(219, 105, 105)";
    case "water":
      return "rgb(95, 154, 243)";
    case "bug":
      return "rgb(248, 177, 119)";
    case "normal":
      return "rgb(223, 220, 220)";
    case "poison":
      return "rgb(185, 83, 173)";
    case "electric":
      return "rgb(255, 185, 56)";
    case "ground":
      return "rgb(104, 82, 56)";
    case "fairy":
      return "rgb(194, 151, 171)";
    case "fighting":
      return "rgb(148, 45, 45)";
    case "psychic":
      return "rgb(102, 80, 109)";
    case "rock":
      return "rgb(102, 100, 100)";
    case "ghost":
      return "rgb(29, 28, 28)";
    case "flying":
      return "rgb(174, 240, 166)";
    case "steel":
      return "rgb(63, 63, 63)";
    case "ice":
      return "rgb(63, 255, 239)";
    case "dragon":
      return "rgb(199, 75, 18)";
    case "dark":
      return "rgb(43, 0, 0)";
    case "shadow":
      return "rgb(52, 45, 70)";
    // Adicione mais casos para outros tipos de Pokémon
    default:
      return "rgb(223, 220, 220)";
  }
};

module.exports = getTypeBackgroundColor;
