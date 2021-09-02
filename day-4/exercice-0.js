export const my_factorial = (nbr) => {
  let result = 1;
  if (nbr == undefined || typeof nbr == "string") {
    return 0;
  }
  else {
    for (let i = 1; i < nbr + 1; i++) {
      result = result * i;
    }
    return result;
  }
}

