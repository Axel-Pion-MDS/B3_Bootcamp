export const my_factorial = (nbr) => {
  if (nbr == undefined || typeof nbr == "string") {
    return 0;
  }
  else if (nbr > 0) {
   return (nbr * my_factorial(nbr - 1));
  }
  else if (nbr === 0) {
    return 1;
  }
}