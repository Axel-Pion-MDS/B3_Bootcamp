export const my_is_posi_neg = (nbr) => {
  let result = "";
  if (nbr == undefined || nbr == null) {
    result = "POSITIF";
  }
  else if (typeof nbr == "string") {
    result = "NEGATIF";
  }
  else {
    let toStr = nbr.toString();
    if (toStr[0] == "-") {
      result = "NEGATIF";
    }
    else {
      result = "POSITIF";
    }
  }
  return result;
}
